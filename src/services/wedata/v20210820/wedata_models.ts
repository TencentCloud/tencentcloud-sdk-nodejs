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
 * DescribeEventConsumeTasks返回参数结构体
 */
export interface DescribeEventConsumeTasksResponse {
  /**
   * 事件消费任务记录列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: EventCaseConsumeLogOptDtoCollection
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRuleTemplate返回参数结构体
 */
export interface CreateRuleTemplateResponse {
  /**
   * 模板Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务告警信息
 */
export interface AlarmInfo {
  /**
   * 关联任务id
   */
  TaskIds: string
  /**
   * 告警类别；failure表示失败告警；overtime表示超时告警
   */
  AlarmType: string
  /**
   * 告警方式；SMS表示短信；Email表示邮件；HTTP 表示接口方式；Wechat表示微信方式
   */
  AlarmWay: string
  /**
   * 告警接收人，多个告警接收人以;分割
   */
  AlarmRecipient: string
  /**
   * 告警接收人id，多个告警接收人id以;分割
   */
  AlarmRecipientId: string
  /**
   * 预计运行的小时，取值范围0-23
   */
  Hours: number
  /**
   * 预计运行分钟，取值范围0-59
   */
  Minutes: number
  /**
   * 告警出发时机；1表示第一次运行失败；2表示所有重试完成后失败；
   */
  TriggerType: number
  /**
   * 告警信息id
   */
  AlarmId?: string
  /**
   * 告警状态设置；1表示可用；0表示不可用，默认可用
   */
  Status?: number
}

/**
 * 批量操作任务列表分页
 */
export interface DescribeBatchOperateTaskPage {
  /**
   * 总页码数
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageCount: number
  /**
   * 内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items: Array<DescribeBatchOperateTaskDTO>
  /**
   * 总个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
}

/**
 * DescribeIntegrationStatistics返回参数结构体
 */
export interface DescribeIntegrationStatisticsResponse {
  /**
   * 总任务数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalTask?: number
  /**
   * 生产态任务数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProdTask?: number
  /**
   * 开发态任务数
注意：此字段可能返回 null，表示取不到有效值。
   */
  DevTask?: number
  /**
   * 总读取条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalReadRecords?: number
  /**
   * 总写入条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalWriteRecords?: number
  /**
   * 总脏数据条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalErrorRecords?: number
  /**
   * 总告警事件数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalAlarmEvent?: number
  /**
   * 当天读取增长条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  IncreaseReadRecords?: number
  /**
   * 当天写入增长条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  IncreaseWriteRecords?: number
  /**
   * 当天脏数据增长条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  IncreaseErrorRecords?: number
  /**
   * 当天告警事件增长数
注意：此字段可能返回 null，表示取不到有效值。
   */
  IncreaseAlarmEvent?: number
  /**
   * 告警事件统计
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmEvent?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UnlockIntegrationTask返回参数结构体
 */
export interface UnlockIntegrationTaskResponse {
  /**
   * 操作成功与否标识
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubmitTaskTestRun返回参数结构体
 */
export interface SubmitTaskTestRunResponse {
  /**
   * 提交运行jobid
   */
  JobId?: number
  /**
   * 运行记录id
   */
  RecordId?: Array<number | bigint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeStreamTaskLogList请求参数结构体
 */
export interface DescribeStreamTaskLogListRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 任务ID
   */
  TaskId: string
  /**
   * 作业ID
   */
  JobId: string
  /**
   * 结束时间
   */
  EndTime: number
  /**
   * 开始时间
   */
  StartTime: number
  /**
   * container名字
   */
  Container?: string
  /**
   * 条数
   */
  Limit?: number
  /**
   * 排序类型 desc asc
   */
  OrderType?: string
  /**
   * 作业运行的实例ID
   */
  RunningOrderId?: number
  /**
   * 关键字
   */
  Keyword?: string
}

/**
 * 数据源信息
 */
export interface GovDatasourceInfo {
  /**
   * 数据源id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceId?: string
  /**
   * 数据源名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceName?: string
  /**
   * 数据源集群ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceClusterId?: string
  /**
   * 数据源urn
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceUrn?: string
  /**
   * 数据源环境
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceEnv?: string
}

/**
 * DescribeIntegrationNode返回参数结构体
 */
export interface DescribeIntegrationNodeResponse {
  /**
   * 节点信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeInfo?: IntegrationNodeInfo
  /**
   * 上游节点是否已经修改。true 已修改，需要提示；false 没有修改
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceCheckFlag?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 日志内容实体
 */
export interface LogContentInfo {
  /**
   * 日志内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Log?: string
  /**
   * 日志组Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  PkgId?: string
  /**
   * 日志Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  PkgLogId?: string
  /**
   * 时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Time?: number
  /**
   * 日志所属的容器名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContainerName?: string
}

/**
 * ModifyIntegrationTask请求参数结构体
 */
export interface ModifyIntegrationTaskRequest {
  /**
   * 任务信息
   */
  TaskInfo: IntegrationTaskInfo
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 默认false . 为true时表示走回滚节点逻辑
   */
  RollbackFlag?: boolean
}

/**
 * DescribeRuleDimStat返回参数结构体
 */
export interface DescribeRuleDimStatResponse {
  /**
   * 结果
   */
  Data?: RuleDimStat
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RegisterEventListener返回参数结构体
 */
export interface RegisterEventListenerResponse {
  /**
   * 成功或者失败
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: BatchReturn
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTaskAlarmRegulations返回参数结构体
 */
export interface DescribeTaskAlarmRegulationsResponse {
  /**
   * 告警规则信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskAlarmInfos?: Array<TaskAlarmInfo>
  /**
   * 总记录数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 表的元数据信息
 */
export interface ColumnBasicInfo {
  /**
   * 表的全局唯一ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableId?: string
  /**
   * 数据源全局唯一ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceId?: string
  /**
   * 数据源名
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceName?: string
  /**
   * 数据库ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseId?: string
  /**
   * 数据库名
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseName?: string
  /**
   * 表名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableName?: string
  /**
   * 字段名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColumnName?: string
  /**
   * 数据类型,string/int等
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataType?: string
  /**
   * 字段类型, varchar(32)/int(10)等
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColumnType?: string
  /**
   * 字段默认值
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColumnDefault?: string
  /**
   * 索引类型, PRI/MUL/PARTITION等,普通字段该值为空串
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColumnKey?: string
  /**
   * 字段顺序标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColumnPosition?: number
  /**
   * 字段注释
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColumnComment?: string
  /**
   * 数据类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  StoreType?: string
  /**
   * 所属项目ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * 所属项目英文名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectName?: string
  /**
   * 所属项目中文名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectDisplayName?: string
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
   * 精度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Scale?: number
}

/**
 * DescribeWorkflowInfoById请求参数结构体
 */
export interface DescribeWorkflowInfoByIdRequest {
  /**
   * 工作流id
   */
  WorkflowId: string
  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * CreateDataSource请求参数结构体
 */
export interface CreateDataSourceRequest {
  /**
   * 数据源名称，在相同SpaceName下，数据源名称不能为空
   */
  Name: string
  /**
   * 数据源类别：绑定引擎、绑定数据库
   */
  Category: string
  /**
   * 数据源类型:枚举值
   */
  Type: string
  /**
   * 归属项目ID
   */
  OwnerProjectId: string
  /**
   * 归属项目Name
   */
  OwnerProjectName: string
  /**
   * 归属项目Name中文
   */
  OwnerProjectIdent: string
  /**
   * 业务侧数据源的配置信息扩展
   */
  BizParams?: string
  /**
   * 数据源的配置信息，以JSON KV存储，根据每个数据源类型不同，而KV存储信息不同
   */
  Params?: string
  /**
   * 数据源描述信息
   */
  Description?: string
  /**
   * 数据源展示名，为了可视化查看
   */
  Display?: string
  /**
   * 若数据源列表为绑定数据库，则为db名称
   */
  DatabaseName?: string
  /**
   * 数据源引擎的实例ID，如CDB实例ID
   */
  Instance?: string
  /**
   * 数据源数据源的可见性，1为可见、0为不可见。默认为1
   */
  Status?: number
  /**
   * 数据源所属的业务空间名称
   */
  ClusterId?: string
  /**
   * 是否采集
   */
  Collect?: string
  /**
   * cos桶信息
   */
  COSBucket?: string
  /**
   * cos region
   */
  COSRegion?: string
  /**
   * 连接测试结果
   */
  ConnectResult?: string
  /**
   * 开发环境数据源配置
   */
  DevelopmentParams?: string
  /**
   * 新建数据源的项目ID
   */
  ProjectId?: string
}

/**
 * 用户文件信息
 */
export interface UserFileDTONew {
  /**
   * 资源ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceId?: string
  /**
   * 文件名
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileName?: string
  /**
   * 文件类型，如 jar zip 等
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileExtensionType?: string
  /**
   * 文件上传类型，资源管理为 resource
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 文件MD5值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Md5Value?: string
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
   * 文件大小，单位为字节
注意：此字段可能返回 null，表示取不到有效值。
   */
  Size?: number
  /**
   * 本地路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  LocalPath?: string
  /**
   * 本地临时路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  LocalTempPath?: string
  /**
   * 远程路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  RemotePath?: string
  /**
   * 文件拥有者名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerName?: string
  /**
   * 文件拥有者uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  Owner?: string
  /**
   * 文件深度
注意：此字段可能返回 null，表示取不到有效值。
   */
  PathDepth?: string
  /**
   * 项目ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * 附加信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtraInfo?: string
  /**
   * 本地临时压缩文件绝对路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  ZipPath?: string
  /**
   * 文件所属存储桶
注意：此字段可能返回 null，表示取不到有效值。
   */
  Bucket?: string
  /**
   * 文件所属存储桶的地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * 删除用户名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeleteName?: string
  /**
   * 删除用户id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeleteOwner?: string
  /**
   * 操作者id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Operator?: string
  /**
   * 操作者名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  OperatorName?: string
  /**
   * 全路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  FullPath?: string
}

/**
 * 集成节点schema映射
 */
export interface IntegrationNodeSchemaMapping {
  /**
   * 任务节点的源schema id
   */
  SourceSchemaId: string
  /**
   * 任务节点目标schema id
   */
  SinkSchemaId: string
}

/**
 * DescribeTrendStat返回参数结构体
 */
export interface DescribeTrendStatResponse {
  /**
   * 结果
   */
  Data?: Array<RuleExecDateStat>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRealTimeTaskSpeed请求参数结构体
 */
export interface DescribeRealTimeTaskSpeedRequest {
  /**
   * 任务id
   */
  TaskId: string
  /**
   * 带毫秒的时间戳
   */
  StartTime: number
  /**
   * 带毫秒的时间戳
   */
  EndTime: number
  /**
   * 粒度，1或者5
   */
  Granularity: number
  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * UpdateDataModelRegistryInfo请求参数结构体
 */
export interface UpdateDataModelRegistryInfoRequest {
  /**
   * 云应用的实例id
   */
  CloudappId: string
  /**
   * 数语的CAM角色
   */
  AppCamRole: string
  /**
   * 数语的公网访问ip
   */
  Ip?: string
  /**
   * 数语的公网访问端口
   */
  Port?: number
  /**
   * 数语的CAM角色id
   */
  AppCamRoleId?: string
  /**
   * 服务提供方
   */
  Provider?: string
  /**
   * 租户id
   */
  TenantId?: string
  /**
   * 主账号id
   */
  OwnId?: string
  /**
   * VpcId
   */
  VpcId?: string
  /**
   * Vpc地域
   */
  VpcRegion?: string
  /**
   * 数语的内网访问ip
   */
  Pip?: string
  /**
   * 数语的内网访问端口
   */
  Pport?: number
  /**
   * 是否开放公网访问数语, 1:是，0:否，默认1开放
   */
  IsPublic?: number
}

/**
 * 批量操作出参
 */
export interface BatchTaskOperateNew {
  /**
   * 操作Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  JobId?: number
}

/**
 * DescribeRuleDimStat请求参数结构体
 */
export interface DescribeRuleDimStatRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 开始时间，时间戳到秒
   */
  BeginDate: string
  /**
   * 结束时间，时间戳到秒
   */
  EndDate: string
}

/**
 * DescribeRuleTemplates返回参数结构体
 */
export interface DescribeRuleTemplatesResponse {
  /**
   * 规则模板列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<RuleTemplate>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDsFolder返回参数结构体
 */
export interface DeleteDsFolderResponse {
  /**
   * true代表删除成功，false代表删除失败
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateIntegrationNode返回参数结构体
 */
export interface CreateIntegrationNodeResponse {
  /**
   * 节点
   */
  Id?: string
  /**
   * 当前任务id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务属性
 */
export interface TaskInnerInfo {
  /**
   * 任务ID
   */
  TaskId: string
  /**
   * 任务名
   */
  TaskName: string
  /**
   * 工作流id
   */
  WorkflowId: string
  /**
   * 周期类型  0:crontab类型, 1:分钟，2:小时，3:天，4:周，5:月，6:一次性，7:用户驱动，10:弹性周期 周,11:弹性周期 月,12:年,13:即时触发Instant类型，与正常周期调度任务逻辑隔离
   */
  CycleType: number
  /**
   * 虚拟任务id
注意：此字段可能返回 null，表示取不到有效值。
   */
  VirtualTaskId?: string
  /**
   * 虚拟任务标记
注意：此字段可能返回 null，表示取不到有效值。
   */
  VirtualFlag?: boolean
  /**
   * 真实任务工作流id
注意：此字段可能返回 null，表示取不到有效值。
   */
  RealWorkflowId?: string
}

/**
 * GetCosToken返回参数结构体
 */
export interface GetCosTokenResponse {
  /**
   * cos地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * Token信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Token?: CosTokenResponse
  /**
   * 桶名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Bucket?: string
  /**
   * 终止点（针对私有云环境）
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndPoint?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDsFolder返回参数结构体
 */
export interface CreateDsFolderResponse {
  /**
   * 文件夹Id，null则创建失败
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 开发空间-获取数据开发脚本信息响应体
 */
export interface UserFileInfo {
  /**
   * 资源ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceId?: string
  /**
   * 文件名
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileName?: string
  /**
   * 文件类型，如 jar zip 等
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileExtensionType?: string
  /**
   * 文件上传类型，资源管理为 resource
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 文件MD5值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Md5Value?: string
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
   * 文件大小，单位为字节
注意：此字段可能返回 null，表示取不到有效值。
   */
  Size?: number
  /**
   * 本地路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  LocalPath?: string
  /**
   * 本地临时路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  LocalTempPath?: string
  /**
   * 远程路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  RemotePath?: string
  /**
   * 文件拥有者名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerName?: string
  /**
   * 文件拥有者uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  Owner?: string
  /**
   * 文件深度
注意：此字段可能返回 null，表示取不到有效值。
   */
  PathDepth?: number
  /**
   * 项目ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * 附加信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtraInfo?: Array<ParamInfo>
  /**
   * 本地临时压缩文件绝对路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  ZipPath?: string
  /**
   * 文件所属存储桶
注意：此字段可能返回 null，表示取不到有效值。
   */
  Bucket?: string
  /**
   * 文件所属存储桶的地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * 无
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeleteName?: string
  /**
   * 无
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeleteOwner?: string
  /**
   * 无
注意：此字段可能返回 null，表示取不到有效值。
   */
  Operator?: string
  /**
   * 无
注意：此字段可能返回 null，表示取不到有效值。
   */
  OperatorName?: string
  /**
   * 附加信息 base64编码
注意：此字段可能返回 null，表示取不到有效值。
   */
  EncodeExtraInfo?: string
}

/**
 * FreezeOpsTasks请求参数结构体
 */
export interface FreezeOpsTasksRequest {
  /**
   * 任务列表
   */
  Tasks: Array<SimpleTaskInfo>
  /**
   * 任务操作是否消息通知下游任务责任人
   */
  OperateIsInform: boolean
  /**
   * 是否终止已生成的实例
   */
  KillInstance?: boolean
}

/**
 * 任务运行历史分页记录
 */
export interface InstanceOpsInfoPage {
  /**
   * 总记录数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 记录列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<InstanceOpsDto>
}

/**
 * DescribeRules返回参数结构体
 */
export interface DescribeRulesResponse {
  /**
   * 规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<Rule>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 工作流运行信息
 */
export interface WorkFlowExecuteDto {
  /**
   * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 工作流运行状态 0：等待运行、1：运行中、2：运行完成、3：运行出错
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
}

/**
 * 实时任务同步速度 条/s
 */
export interface RecordsSpeed {
  /**
   * 节点类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeType: string
  /**
   * 节点名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeName: string
  /**
   * 速度值列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Values: Array<SpeedValue>
}

/**
 * 血缘字段信息
 */
export interface ColumnLineageInfo {
  /**
   * 血缘id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id: string
  /**
   * 数据源ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceId: string
  /**
   * 字段名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColumnName?: string
  /**
   * 字段中文名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColumnNameCn?: string
  /**
   * 字段类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColumnType?: string
  /**
   * 关系参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  RelationParams?: string
  /**
   * 参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Params?: string
  /**
   * 父id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentId?: string
  /**
   * 元数据类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetastoreType?: string
  /**
   * 元数据类型名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetastoreTypeName?: string
  /**
   * 表名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableName?: string
  /**
   * 字段全名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  QualifiedName?: string
  /**
   * 下游节点数
注意：此字段可能返回 null，表示取不到有效值。
   */
  DownStreamCount?: number
  /**
   * 上游节点数
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpStreamCount?: number
  /**
   * 描述信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 由中心节点出发的路径信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrefixPath?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifyTime?: string
  /**
   * 任务id列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tasks?: Array<string>
  /**
   * 父节点列表字符串
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentSet?: string
  /**
   * 子节点列表字符串
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChildSet?: string
  /**
   * 额外参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtParams?: Array<LineageParamRecord>
  /**
   * 表ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableId?: string
}

/**
 * 任务血缘信息，包括源表和目标表
 */
export interface TaskLineageInfoPair {
  /**
   * 表血缘-源表
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceTable?: TaskLineageInfo
  /**
   * 表血缘-目标表
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetTable?: TaskLineageInfo
}

/**
 * JudgeResourceFile返回参数结构体
 */
export interface JudgeResourceFileResponse {
  /**
   * 资源文件完整路径
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 获取数据服务API的发布态信息列表过滤条件
 */
export interface DataServicePublishedApiListFilter {
  /**
   * 请求路径关键词筛选
   */
  PathUrl?: string
  /**
   * Api名称关键词筛选
   */
  Keyword?: string
  /**
   * Api认证方式筛选 0:免认证 1:应用认证
   */
  AuthTypes?: Array<number | bigint>
  /**
   * 服务Api状态 1:已上线  3:已下线
   */
  ApiStatus?: Array<number | bigint>
  /**
   * API配置方式 0:向导、1、脚本、2、注册Api
   */
  ConfigTypes?: Array<number | bigint>
}

/**
 * SubmitTask请求参数结构体
 */
export interface SubmitTaskRequest {
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 任务ID
   */
  TaskId: string
  /**
   * 版本备注
   */
  VersionRemark: string
  /**
   * 是否启动调度
   */
  StartScheduling: boolean
}

/**
 * DescribeTableMetas请求参数结构体
 */
export interface DescribeTableMetasRequest {
  /**
   * 分页页码
   */
  PageNumber?: number
  /**
   * 分页大小
   */
  PageSize?: number
  /**
   * 过滤字段
   */
  Filters?: Array<Filter>
  /**
   * 排序字段
   */
  OrderFields?: Array<OrderField>
}

/**
 * 规则执行结果详情
 */
export interface RuleExecResultDetail {
  /**
   * 数据源id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceId?: number
  /**
   * 数据源名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceName?: string
  /**
   * 数据库guid
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseId?: string
  /**
   * 数据库名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseName?: string
  /**
   * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 表guid
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableId?: string
  /**
   * 表名
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableName?: string
  /**
   * 规则执行记录
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleExecResult?: RuleExecResult
  /**
   * 表负责人userId
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableOwnerUserId?: number
  /**
   * 2.HIVE 3.DLC
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceType?: number
  /**
   * 集群部署类型，CVM/TKE
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterDeployType?: string
}

/**
 * 查询数据源分页列表
 */
export interface DataSourceInfoPage {
  /**
   * 分页页码
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber: number
  /**
   * 分页大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize: number
  /**
   * 数据源列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Rows: Array<DataSourceInfo>
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount: number
  /**
   * 总分页页码
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPageNumber: number
}

/**
 * 任务分页查询
 */
export interface OpsTaskInfoPage {
  /**
   * 页号
   */
  PageNumber: number
  /**
   * 页大小
   */
  PageSize: number
  /**
   * 任务列表信息
   */
  Items: Array<TaskOpsDto>
  /**
   * 总页数
   */
  TotalPage: number
  /**
   * 页数
   */
  PageCount?: number
  /**
   * 总条数
   */
  TotalCount?: number
}

/**
 * DescribeRuleGroupExecResultsByPage请求参数结构体
 */
export interface DescribeRuleGroupExecResultsByPageRequest {
  /**
   * 分页序号
   */
  PageNumber?: number
  /**
   * 分页大小
   */
  PageSize?: number
  /**
   * 过滤条件
   */
  Filters?: Array<Filter>
  /**
   * 排序字段
   */
  OrderFields?: Array<OrderField>
  /**
   * 项目ID
   */
  ProjectId?: string
}

/**
 * 事件实例
 */
export interface EventCaseAuditLogOptDto {
  /**
   * 事件实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CaseId?: string
  /**
   * 事件名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventName?: string
  /**
   * 事件类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventType?: string
  /**
   * 事件分割类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventSubType?: string
  /**
   * 事件广播类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventBroadcastType?: string
  /**
   * 事件实例存活时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  TTL?: number
  /**
   * 事件实例存活时间单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeUnit?: string
  /**
   * 数据时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Dimension?: string
  /**
   * 事件实例状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 事件实例触发时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventTriggerTimestamp?: string
  /**
   * 事件实例消费时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogTimestamp?: string
  /**
   * 事件实例描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
}

/**
 * DescribeTableLineage请求参数结构体
 */
export interface DescribeTableLineageRequest {
  /**
   * 查询方向，INPUT,OUTPUT,BOTH枚举值
   */
  Direction: string
  /**
   * 表信息
   */
  Data: TableLineageInfo
  /**
   * 单次查询入度,默认 1
   */
  InputDepth?: number
  /**
   * 单次查询出度,默认 1
   */
  OutputDepth?: number
  /**
   * 额外参数（传递调用方信息）
   */
  ExtParams?: Array<LineageParamRecord>
  /**
   * 是否过滤临时表,默认true
   */
  IgnoreTemp?: boolean
  /**
   * 是否递归查询二级节点数目，默认为true
   */
  RecursiveSecond?: boolean
}

/**
 * KillOpsMakePlanInstances请求参数结构体
 */
export interface KillOpsMakePlanInstancesRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 补录计划ID
   */
  PlanId: string
  /**
   * 是否异步模式
   */
  AsyncMode?: boolean
  /**
   * 补录计划名
   */
  PlanName?: string
}

/**
 * AddProjectUserRole返回参数结构体
 */
export interface AddProjectUserRoleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BatchResumeIntegrationTasks返回参数结构体
 */
export interface BatchResumeIntegrationTasksResponse {
  /**
   * 操作成功的任务数
   */
  SuccessCount?: number
  /**
   * 操作失败的任务数
   */
  FailedCount?: number
  /**
   * 任务总数
   */
  TotalCount?: number
  /**
   * 本次批量操作涉及任务，用于审计
   */
  TaskNames?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFieldBasicInfo返回参数结构体
 */
export interface DescribeFieldBasicInfoResponse {
  /**
   * 字段元数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColumnBasicInfoList?: Array<ColumnBasicInfo>
  /**
   * 总条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ColumnItem
 */
export interface ColumnItem {
  /**
   * ColumnName1
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColumnName?: string
  /**
   * ColumnName1
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColumnRef?: string
}

/**
 * 规则组执行结果
 */
export interface RuleGroupExecResult {
  /**
   * 规则组执行ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleGroupExecId?: number
  /**
   * 规则组ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleGroupId?: number
  /**
   * 执行触发类型（1：手动触发， 2：调度事中触发，3：周期调度触发）
注意：此字段可能返回 null，表示取不到有效值。
   */
  TriggerType?: number
  /**
   * 执行时间 yyyy-MM-dd HH:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecTime?: string
  /**
   * 执行状态（1.已提交 2.检测中 3.正常 4.异常）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 异常规则数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmRuleCount?: number
  /**
   * 总规则数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalRuleCount?: number
  /**
   * 源表负责人
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableOwnerName?: string
  /**
   * 源表名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableName?: string
  /**
   * 表id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableId?: string
  /**
   * 数据库id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseId?: string
  /**
   * 数据源ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceId?: string
  /**
   * 有无权限
注意：此字段可能返回 null，表示取不到有效值。
   */
  Permission?: boolean
  /**
   * 执行详情，调度计划或者关联生产任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecDetail?: string
  /**
   * 实际执行引擎
注意：此字段可能返回 null，表示取不到有效值。
   */
  EngineType?: string
  /**
   * 规则执行结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleExecResultVOList?: Array<RuleExecResult>
  /**
   * 数据库名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseName?: string
  /**
   * 本地规则表id
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleGroupTableId?: string
  /**
   * 集群部署类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterDeployType?: string
  /**
   * 实例id
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 数据库所属环境，0.未定义，1.生产 2.开发
注意：此字段可能返回 null，表示取不到有效值。
   */
  DsEnvType?: string
  /**
   * 项目id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectName?: string
  /**
   * 实例状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceStatus?: string
  /**
   * 实例运行的开始时间
   */
  StartTime?: string
  /**
   * 实例运行的结束时间
   */
  FinishTime?: string
}

/**
 * 告警事件详情
 */
export interface AlarmEventInfo {
  /**
   * 告警ID
   */
  AlarmId: string
  /**
   * 告警时间
   */
  AlarmTime: string
  /**
   * 任务ID
   */
  TaskId: string
  /**
   * 规则名称
   */
  RegularName: string
  /**
   * 告警级别,0表示普通，1表示重要，2表示紧急
   */
  AlarmLevel: number
  /**
   * 告警方式,多个用逗号隔开（1:邮件，2:短信，3:微信，4:语音，5:代表企业微信，6:http）
   */
  AlarmWay: number
  /**
   * 告警接收人Id，多个用逗号隔开
   */
  AlarmRecipientId: string
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 告警指标,0表示任务失败，1表示任务运行超时，2表示任务停止，3表示任务暂停
   */
  AlarmIndicator?: number
  /**
   * 告警指标描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmIndicatorDesc?: string
  /**
   * 指标阈值，1表示离线任务第一次运行失败，2表示离线任务所有重试完成后失败
注意：此字段可能返回 null，表示取不到有效值。
   */
  TriggerType?: number
  /**
   * 预计的超时时间，分钟级别
注意：此字段可能返回 null，表示取不到有效值。
   */
  EstimatedTime?: number
  /**
   * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskName?: string
  /**
   * 0：部分成功，1：全部成功，2：全部失败
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsSendSuccess?: number
  /**
   * 是否在免打扰时间内，0:否, 1:是
注意：此字段可能返回 null，表示取不到有效值。
   */
  InQuitePeriods?: number
  /**
   * 告警记录id
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordId?: number
  /**
   * 消息ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  MessageId?: string
  /**
   * 阈值计算算子，1 : 大于 2 ：小于
注意：此字段可能返回 null，表示取不到有效值。
   */
  Operator?: number
  /**
   * 告警规则ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegularId?: string
  /**
   * 告警接收人昵称
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmRecipientName?: string
  /**
   * 告警任务类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskType?: number
  /**
   * 发送结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  SendResult?: string
  /**
   * 监控对象id
注意：此字段可能返回 null，表示取不到有效值。
   */
  MonitorObjectId?: string
  /**
   * 监控对象名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  MonitorObjectName?: string
  /**
   * 指标阈值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Threshold?: number
  /**
   * 告警原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmReason?: string
  /**
   * 近范围值
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndicatorTimeRangeValue?: number
  /**
   * 近范围单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndicatorTimeRangeUnit?: string
  /**
   * 同步类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  SyncType?: number
}

/**
 * DescribeTaskLineage请求参数结构体
 */
export interface DescribeTaskLineageRequest {
  /**
   * 请求来源，WEB 前端；CLIENT 客户端
   */
  RequestFromSource?: string
  /**
   * 任务ID
   */
  TaskId?: string
}

/**
 * 实时任务同步速度 字节/s
 */
export interface BytesSpeed {
  /**
   * 节点类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeType: string
  /**
   * 节点名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeName: string
  /**
   * 速度值列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Values: Array<SpeedValue>
}

/**
 * CheckTaskNameExist请求参数结构体
 */
export interface CheckTaskNameExistRequest {
  /**
   * 项目id/工作空间id
   */
  ProjectId: string
  /**
   * 任务类型（跟调度传参保持一致27）
   */
  TypeId: number
  /**
   * 任务名
   */
  TaskName: string
}

/**
 * 数据质量阈值
 */
export interface ThresholdValue {
  /**
   * 阈值类型  1.低阈值  2.高阈值   3.普通阈值  4.枚举值
注意：此字段可能返回 null，表示取不到有效值。
   */
  ValueType?: number
  /**
   * 阈值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
}

/**
 * DescribeFunctionKinds请求参数结构体
 */
export type DescribeFunctionKindsRequest = null

/**
 * DescribeFunctionKinds返回参数结构体
 */
export interface DescribeFunctionKindsResponse {
  /**
   * 无
注意：此字段可能返回 null，表示取不到有效值。
   */
  Kinds?: Array<FunctionTypeOrKind>
  /**
   * 无
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMessage?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceDetailInfo返回参数结构体
 */
export interface DescribeInstanceDetailInfoResponse {
  /**
   * 生命周期结果
   */
  Data?: Array<InstanceLifeCycleOpsDto>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTemplateDimCount请求参数结构体
 */
export interface DescribeTemplateDimCountRequest {
  /**
   * 模板类型
   */
  Type?: number
  /**
   * 项目ID
   */
  ProjectId?: string
}

/**
 * ModifyIntegrationTask返回参数结构体
 */
export interface ModifyIntegrationTaskResponse {
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
 * DescribeDataSourceList请求参数结构体
 */
export interface DescribeDataSourceListRequest {
  /**
   * 页码
   */
  PageNumber?: number
  /**
   * 返回数量
   */
  PageSize?: number
  /**
   * 排序配置
   */
  OrderFields?: Array<OrderField>
  /**
   * 可选过滤条件，Filter可选配置(参考): "Name": { "type": "string", "description": "数据源名称" }, "Type": { "type": "string", "description": "类型" }, "ClusterId": { "type": "string", "description": "集群id" }, "CategoryId": { "type": "string", "description": "分类，项目或空间id" }
   */
  Filters?: Array<Filter>
}

/**
 * DescribeInstanceByCycle返回参数结构体
 */
export interface DescribeInstanceByCycleResponse {
  /**
   * 统计结果
   */
  Data?: Array<TaskByCycle>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据服务入参
 */
export interface DataServiceRequestParam {
  /**
   * 参数名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamName: string
  /**
   * 绑定字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  BindField: string
  /**
   * 参数类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamType: string
  /**
   * 参数位置
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamPosition: string
  /**
   * 操作符
注意：此字段可能返回 null，表示取不到有效值。
   */
  Operator: string
  /**
   * 是否为空
注意：此字段可能返回 null，表示取不到有效值。
   */
  NonEmpty: number
  /**
   * 默认值
注意：此字段可能返回 null，表示取不到有效值。
   */
  DefaultValue?: string
  /**
   * 示例值
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExampleValue?: string
  /**
   * 参数描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
}

/**
 * 数据源环境信息
 */
export interface DataSourceEnvInfo {
  /**
   * 环境
注意：此字段可能返回 null，表示取不到有效值。
   */
  Env?: string
  /**
   * 数据源类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataSourceType?: string
  /**
   * 集群id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
  /**
   * 配置信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Params?: string
  /**
   * 项目id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * 数据源id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataSourceId?: string
  /**
   * env环境的数据源id
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnvDataSourceId?: string
  /**
   * 配置信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  BizParams?: string
}

/**
 * DescribeDataCheckStat请求参数结构体
 */
export interface DescribeDataCheckStatRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 开始时间，时间戳到秒
   */
  BeginDate: string
  /**
   * 结束时间，时间戳到秒
   */
  EndDate: string
}

/**
 * 按天更新的表的资产评分
 */
export interface TablePropertyScore {
  /**
   * 表ID
   */
  TableId: string
  /**
   * 统计日期
   */
  DayTime: string
  /**
   * 表完整性评分
   */
  Integrity: number
  /**
   * 表保障性评分
   */
  Safety: number
  /**
   * 表及时性评分
   */
  Timeliness: number
  /**
   * 表稳定性评分
   */
  Stability: number
  /**
   * 表规范性评分
   */
  Normative: number
  /**
   * 资产评分平均分
   */
  Average: number
}

/**
 * GetOfflineInstanceList请求参数结构体
 */
export interface GetOfflineInstanceListRequest {
  /**
   * 第几页
   */
  PageIndex: string
  /**
   * 每页几条
   */
  PageSize: number
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 无
   */
  SearchCondition?: SearchCondition
}

/**
 * 任务类型map
 */
export interface TaskTypeMap {
  /**
   * key
   */
  Key?: number
  /**
   * value
   */
  Value?: string
}

/**
 * 实例生命周期detail
 */
export interface InstanceLifeDetailDto {
  /**
   * 实例状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  State?: string
  /**
   * 该状态开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 实例生命周期阶段状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  DetailState?: string
  /**
   * 该状态结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
}

/**
 * 工作流信息
 */
export interface Workflow {
  /**
   * 工作流id
   */
  WorkflowId: string
  /**
   * 责任人
注意：此字段可能返回 null，表示取不到有效值。
   */
  Owner: string
  /**
   * 责任人Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerId: string
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 项目标识
   */
  ProjectIdent: string
  /**
   * 项目名称
   */
  ProjectName: string
  /**
   * 备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowDesc: string
  /**
   * 工作流名称
   */
  WorkflowName: string
  /**
   * 所属文件夹id
   */
  FolderId: string
  /**
   * 工作流所属用户分组id 若有多个,分号隔开: a;b;c
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserGroupId: string
  /**
   * 工作流所属用户分组名称  若有多个,分号隔开: a;b;c
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserGroupName: string
}

/**
 * DescribeRuleExecResults请求参数结构体
 */
export interface DescribeRuleExecResultsRequest {
  /**
   * 规则组执行Id
   */
  RuleGroupExecId?: number
  /**
   * 项目Id
   */
  ProjectId?: string
}

/**
 * 下载日志详情
 */
export interface InstanceDownloadLogInfo {
  /**
   * 文件名
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileName?: string
  /**
   * 文件URL
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileUrl?: string
}

/**
 * 事件实例信息
 */
export interface EventCaseDTO {
  /**
   * 事件实例id
   */
  CaseId?: string
  /**
   * 事件名
   */
  Name?: string
  /**
   * 事件格式
   */
  Dimension?: string
  /**
   * 创建时间
   */
  CreationTs?: string
  /**
   * 消费者id
   */
  ConsumerId?: string
  /**
   * 描述信息
   */
  Description?: string
}

/**
 * 表评分统计信息
 */
export interface TableScoreStatisticsInfo {
  /**
   * 等级 1、2、3、4、5
注意：此字段可能返回 null，表示取不到有效值。
   */
  Level: number
  /**
   * 占比
注意：此字段可能返回 null，表示取不到有效值。
   */
  Scale: number
  /**
   * 表数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableNumber: number
}

/**
 * 实例运维详情
 */
export interface InstanceOpsDto {
  /**
   * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskName?: string
  /**
   * 工作流ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowId?: string
  /**
   * 工作流名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowName?: string
  /**
   * 负责人
注意：此字段可能返回 null，表示取不到有效值。
   */
  InCharge?: string
  /**
   * 周期类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleType?: string
  /**
   * 数据时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CurRunDate?: string
  /**
   * 下一个数据时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  NextCurDate?: string
  /**
   * 运行优先级
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunPriority?: number
  /**
   * 尝试运行次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TryLimit?: number
  /**
   * 当前运行次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tries?: number
  /**
   * 重跑总次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalRunNum?: number
  /**
   * 是否补录
注意：此字段可能返回 null，表示取不到有效值。
   */
  DoFlag?: number
  /**
   * 是否是重跑
注意：此字段可能返回 null，表示取不到有效值。
   */
  RedoFlag?: number
  /**
   * 实例状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  State?: string
  /**
   * 运行节点
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuntimeBroker?: string
  /**
   * 失败的原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorDesc?: string
  /**
   * 任务类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskType?: TaskTypeOpsDto
  /**
   * 依赖判断完成时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  DependenceFulfillTime?: string
  /**
   * 首次依赖判断通过时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  FirstDependenceFulfillTime?: string
  /**
   * 首次启动时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  FirstStartTime?: string
  /**
   * 开始启动时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 运行完成时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 耗费时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CostTime?: string
  /**
   * 耗费时间(ms)
注意：此字段可能返回 null，表示取不到有效值。
   */
  CostMillisecond?: number
  /**
   * 最大运行耗时
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxCostTime?: number
  /**
   * 最小运行耗时
注意：此字段可能返回 null，表示取不到有效值。
   */
  MinCostTime?: number
  /**
   * 平均运行耗时
注意：此字段可能返回 null，表示取不到有效值。
   */
  AvgCostTime?: number
  /**
   * 最近日志
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastLog?: string
  /**
   * 调度时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  SchedulerDateTime?: string
  /**
   * 上次调度时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastSchedulerDateTime?: string
  /**
   * 最后更新事件
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastUpdate?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 分支，依赖关系 and、or
注意：此字段可能返回 null，表示取不到有效值。
   */
  DependencyRel?: string
  /**
   * 执行空间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutionSpace?: string
  /**
   * 忽略事件
注意：此字段可能返回 null，表示取不到有效值。
   */
  IgnoreEvent?: boolean
  /**
   * 虚拟任务实例
注意：此字段可能返回 null，表示取不到有效值。
   */
  VirtualFlag?: boolean
  /**
   * 文件夹ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  FolderId?: string
  /**
   * 文件夹名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  FolderName?: string
  /**
   * 递归实例信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  SonList?: string
  /**
   * 产品业务名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductName?: string
  /**
   * 资源组
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroup?: string
  /**
   * 资源组指定执行节点
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceInstanceId?: string
  /**
   * 资源队列
注意：此字段可能返回 null，表示取不到有效值。
   */
  YarnQueue?: string
  /**
   * 调度计划
注意：此字段可能返回 null，表示取不到有效值。
   */
  SchedulerDesc?: string
  /**
   * 最近提交时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  FirstSubmitTime?: string
  /**
   * 首次执行时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  FirstRunTime?: string
  /**
   * 项目ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * 项目标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectIdent?: string
  /**
   * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectName?: string
  /**
   * 租户id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TenantId?: string
  /**
   * 实例标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceKey?: string
  /**
   * 资源组id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutorGroupId?: string
  /**
   * 资源组名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutorGroupName?: string
  /**
   * 关联实例信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RelatedInstanceList?: Array<InstanceOpsDto>
  /**
   * 关联实例信息数量，不和RelatedInstanceList强关联。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RelatedInstanceSize?: number
  /**
   * ownerId
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerId?: string
  /**
   * 用户id
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserId?: string
  /**
   * 实例生命周期
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceLifeCycleOpsDto?: InstanceLifeCycleOpsDto
  /**
   * 自动重试次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  RetryAttempts?: number
  /**
   * 紧急去除的依赖父实例列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeletedFatherList?: Array<string>
  /**
   * 循环依赖关联的实例
注意：此字段可能返回 null，表示取不到有效值。
   */
  CirculateInstanceList?: Array<InstanceOpsDto>
  /**
   * 并发策略, 0: 等待并发, 1: kill自身
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConcurrentStrategy?: number
  /**
   * 调度运行方式, 0: 周期调度, 1: 空跑调度
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScheduleRunType?: number
}

/**
 * DescribeDutyScheduleDetails请求参数结构体
 */
export interface DescribeDutyScheduleDetailsRequest {
  /**
   * 值班表id
   */
  Id: number
  /**
   * 查询时间
   */
  QueryDate: string
  /**
   * 扩展字段
   */
  Filters?: Array<Filter>
}

/**
 * SubmitWorkflow返回参数结构体
 */
export interface SubmitWorkflowResponse {
  /**
   * 执行结果
   */
  Data?: SubmitWorkflow
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TriggerEvent请求参数结构体
 */
export interface TriggerEventRequest {
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 案例名称
   */
  Name: string
  /**
   * 时间格式：如果选择触发时间：2022年6月21，则设置为20220621
   */
  Dimension: string
  /**
   * 描述信息
   */
  Description?: string
}

/**
 * 工作流任务统计
 */
export interface WorkflowTaskCountOpsDto {
  /**
   * 工作流任务数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Count?: number
  /**
   * 任务类型维度统计
注意：此字段可能返回 null，表示取不到有效值。
   */
  TypeCount?: Array<PairDto>
  /**
   * 任务周期类型维度统计
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleCount?: Array<PairDto>
}

/**
 * 无
 */
export interface StageCloudApiRequest {
  /**
   * 无
   */
  ClusterId?: string
  /**
   * 无
   */
  StageId?: string
  /**
   * 无
   */
  JobId?: string
  /**
   * 无
   */
  StageName?: string
  /**
   * 无
   */
  Type?: string
  /**
   * 无
   */
  Mode?: string
  /**
   * 无
   */
  Version?: string
  /**
   * 无
   */
  Queue?: string
  /**
   * 无
   */
  Content?: string
  /**
   * 无
   */
  Parameters?: Array<Property>
  /**
   * 无
   */
  Description?: string
  /**
   * 无
   */
  ProjectId?: string
  /**
   * 无
   */
  JobType?: string
  /**
   * 无
   */
  WorkFlowId?: string
}

/**
 * DescribeDependOpsTasks请求参数结构体
 */
export interface DescribeDependOpsTasksRequest {
  /**
   * 任务Id
   */
  TaskId: string
  /**
   * 上游/下游层级1-6级
   */
  Deep: number
  /**
   * 1: 表示查询上游节点；0:表示查询下游节点；2：表示查询上游和下游节点
   */
  Up: number
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 任务工作流id
   */
  WorkflowId: string
}

/**
 * 角色权限对象
 */
export interface RolePrivilege {
  /**
   * id
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrivilegeId?: string
  /**
   * 名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrivilegeName?: string
  /**
   * 路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  RestPath?: string
  /**
   * 方法
注意：此字段可能返回 null，表示取不到有效值。
   */
  RestMethod?: string
  /**
   * 描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 模块id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModuleId?: string
  /**
   * 权限类型 N、R、RW、RWD
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
}

/**
 * 表绑定规则组信息
 */
export interface RuleGroupTable {
  /**
   * 表信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableInfo: RuleGroupTableInnerInfo
  /**
   * 规则组调度信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleGroups: Array<RuleGroupSchedulerInfo>
  /**
   * 订阅者信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Subscriptions: Array<RuleGroupSubscribe>
}

/**
 * DescribeInstanceLog请求参数结构体
 */
export interface DescribeInstanceLogRequest {
  /**
   * 任务id
   */
  TaskId: string
  /**
   * 数据时间
   */
  CurRunDate: string
  /**
   * 服务器Ip
   */
  BrokerIp: string
  /**
   * 文件Name
   */
  OriginFileName: string
}

/**
 * DescribeRuleGroupSubscription返回参数结构体
 */
export interface DescribeRuleGroupSubscriptionResponse {
  /**
   * 规则组订阅信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: RuleGroupSubscribe
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群基础信息
 */
export interface BaseClusterInfo {
  /**
   * 集群id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
  /**
   * 集群类型，EMR/CDW等
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterType?: string
  /**
   * 集群名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterName?: string
  /**
   * 地域中文
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegionCn?: string
  /**
   * 地域英文
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegionEn?: string
  /**
   * 地区
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegionArea?: string
  /**
   * 集群是否使用
注意：此字段可能返回 null，表示取不到有效值。
   */
  Used?: boolean
  /**
   * 集群状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 集群状态信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatusInfo?: string
  /**
   * 集群存储类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageType?: string
  /**
   * 集群计算类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ComputeType?: string
  /**
   * 集群资源量
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterResource?: string
  /**
   * 集群付费方式
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChargeType?: string
  /**
   * 集群创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 额外配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtraConf?: string
  /**
   * ranger账号名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  RangerUserName?: string
  /**
   * cdw账号（用于展示）
注意：此字段可能返回 null，表示取不到有效值。
   */
  CdwUserName?: string
}

/**
 * DescribeIntegrationStatisticsTaskStatusTrend返回参数结构体
 */
export interface DescribeIntegrationStatisticsTaskStatusTrendResponse {
  /**
   * 统计结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  TrendsData?: Array<IntegrationStatisticsTrendResult>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteResourceFile请求参数结构体
 */
export interface DeleteResourceFileRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 资源id
   */
  ResourceId: string
}

/**
 * SaveCustomFunction请求参数结构体
 */
export interface SaveCustomFunctionRequest {
  /**
   * 函数唯一标识
   */
  FunctionId: string
  /**
   * 分类：窗口函数、聚合函数、日期函数......
   */
  Kind: string
  /**
   * 集群引擎实例
   */
  ClusterIdentifier: string
  /**
   * 类名
   */
  ClassName: string
  /**
   * 资源列表
   */
  ResourceList: Array<FunctionResource>
  /**
   * 函数说明
   */
  Description: string
  /**
   * 用法
   */
  Usage: string
  /**
   * 参数说明
   */
  ParamDesc: string
  /**
   * 返回值说明
   */
  ReturnDesc: string
  /**
   * 示例
   */
  Example: string
  /**
   * 项目id，不支持修改，dlc侧创建函数保存时用
   */
  ProjectId?: string
  /**
   * 数据库名称，不支持修改，dlc侧创建函数保存时用
   */
  DbName?: string
  /**
   * 函数名称，不支持修改，dlc侧创建函数保存时用
   */
  Name?: string
}

/**
 * DescribeSchedulerTaskTypeCnt请求参数结构体
 */
export interface DescribeSchedulerTaskTypeCntRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 责任人
   */
  InCharge?: string
}

/**
 * 补录计划任务
 */
export interface MakePlanTaskOpsDto {
  /**
   * 任务基本信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskBaseInfo?: TaskOpsDto
  /**
   * 补录该任务当前已生成的实例数
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceCount?: number
  /**
   * 补录任务实例完成百分数
注意：此字段可能返回 null，表示取不到有效值。
   */
  CompletePercent?: number
  /**
   * 补录任务实例成功百分数
注意：此字段可能返回 null，表示取不到有效值。
   */
  SuccessPercent?: number
  /**
   * 预计生成的总实例个数，由于是异步生成，-1代表实例还未完完全生成
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceTotalCount?: number
}

/**
 * 项目的用户对象
 */
export interface ProjectUserRole {
  /**
   * 用户角色对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  Roles?: Array<SystemRole>
  /**
   * mc
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserName?: string
  /**
   * 用户id
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserId?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 是否创建者
注意：此字段可能返回 null，表示取不到有效值。
   */
  Creator?: boolean
  /**
   * 显示名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DisplayName?: string
  /**
   * 是否项目管理员
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsProjectAdmin?: boolean
  /**
   * 手机号
注意：此字段可能返回 null，表示取不到有效值。
   */
  PhoneNum?: string
  /**
   * 邮箱
注意：此字段可能返回 null，表示取不到有效值。
   */
  Email?: string
  /**
   * 主账号id
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUin?: string
  /**
   * 租户iD
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: string
}

/**
 * 质量规则执行策略
 */
export interface RuleGroupExecStrategy {
  /**
   * 规则组Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleGroupId?: number
  /**
   * 监控类型 1.未配置, 2.关联生产调度, 3.离线周期检测
注意：此字段可能返回 null，表示取不到有效值。
   */
  MonitorType?: number
  /**
   * 计算队列
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecQueue?: string
  /**
   * 执行资源组ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutorGroupId?: string
  /**
   * 执行资源组名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutorGroupName?: string
  /**
   * 关联的生产调度任务列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tasks?: Array<ProdSchedulerTask>
  /**
   * 周期开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 周期结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 调度周期类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleType?: string
  /**
   * 延迟调度时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  DelayTime?: number
  /**
   * 间隔
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleStep?: number
  /**
   * 时间指定
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskAction?: string
  /**
   * 运行的执行引擎，不传时会请求该数据源下默认的执行引擎
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecEngineType?: string
  /**
   * 执行计划
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecPlan?: string
  /**
   * 规则id
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleId?: number
  /**
   * 规则名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleName?: string
  /**
   * 触发类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  TriggerTypes?: Array<string>
  /**
   * DLC资源组
注意：此字段可能返回 null，表示取不到有效值。
   */
  DlcGroupName?: string
}

/**
 * ModifyWorkflowSchedule请求参数结构体
 */
export interface ModifyWorkflowScheduleRequest {
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 工作流id
   */
  WorkflowId: string
  /**
   * 延迟时间，单位分钟
   */
  DelayTime: number
  /**
   * 启动时间
   */
  StartupTime: number
  /**
   * 自依赖类型  1:有序串行 一次一个 排队, 2: 无序串行 一次一个 不排队， 3:并行 一次多个
   */
  SelfDepend: number
  /**
   * "周期类型  0:crontab类型, 1:分钟，2:小时，3:天，4:周，5:月，6:一次性，7:用户驱动，10:弹性周期 周,11:弹性周期 月,12:年,13:即时触发Instant类型，与正常周期调度任务逻辑隔离
   */
  CycleType: number
  /**
   * 步长，间隔时间，最小1
   */
  CycleStep: number
  /**
   * 生效开始时间，格式 yyyy-MM-dd HH:mm:ss
   */
  StartTime?: string
  /**
   * 生效结束时间，格式 yyyy-MM-dd HH:mm:ss
   */
  EndTime?: string
  /**
   * 调度配置-弹性周期配置，小时/周/月/年调度才有，小时任务指定每天的0点3点4点跑，则为'0,3,4'。
   */
  TaskAction?: string
  /**
   * cron表达式  周期类型为crontab调度才需要
   */
  CrontabExpression?: string
  /**
   * 执行时间左闭区间，格式：HH:mm  小时调度才有，例如小时任务, 每日固定区间生效
   */
  ExecutionStartTime?: string
  /**
   * 执行时间右闭区间，格式：HH:mm  小时调度才有，例如小时任务, 每日固定区间生效
   */
  ExecutionEndTime?: string
  /**
   * 工作流依赖 ,yes 或者no
   */
  DependencyWorkflow?: string
}

/**
 * CreateDsFolder请求参数结构体
 */
export interface CreateDsFolderRequest {
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 文件夹名称
   */
  FolderName: string
  /**
   * 父文件夹ID
   */
  ParentsFolderId?: string
}

/**
 * RegisterEvent请求参数结构体
 */
export interface RegisterEventRequest {
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 事件名称，支持英文、数字和下划线，最长20个字符, 不能以数字下划线开头。
   */
  Name: string
  /**
   * 事件分割类型，周期类型: DAY，HOUR，MIN，SECOND
   */
  EventSubType: string
  /**
   * 广播：BROADCAST,单播：SINGLE
   */
  EventBroadcastType: string
  /**
   * 周期类型为天和小时为HOURS ，周期类型为分钟 ：MINUTES,周期类型为秒：SECONDS
   */
  TimeUnit: string
  /**
   * 事件所属人
   */
  Owner: string
  /**
   * 事件类型，默认值：TIME_SERIES
   */
  EventType?: string
  /**
   * 对应day： yyyyMMdd，对应HOUR：yyyyMMddHH，对应MIN：yyyyMMddHHmm，对应SECOND：yyyyMMddHHmmss
   */
  DimensionFormat?: string
  /**
   * 存活时间
   */
  TimeToLive?: number
  /**
   * 事件描述
   */
  Description?: string
}

/**
 * dlc建表属性
 */
export interface Property {
  /**
   * key值
   */
  Key: string
  /**
   * value值
   */
  Value: string
}

/**
 * 补录计划集合
 */
export interface MakePlanOpsDtoCollection {
  /**
   * 记录总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 记录总页数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPage?: number
  /**
   * 当前页记录数
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageCount?: number
  /**
   * 页码
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
  /**
   * 页大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * 记录列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<MakePlanOpsDto>
}

/**
 * DescribeTableMetas返回参数结构体
 */
export interface DescribeTableMetasResponse {
  /**
   * 表元数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableMetas: Array<TableMeta>
  /**
   * 总条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UploadContent返回参数结构体
 */
export interface UploadContentResponse {
  /**
   * 脚本信息响应
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScriptInfo?: ScriptInfoResponse
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UploadResource请求参数结构体
 */
export interface UploadResourceRequest {
  /**
   * 资源上传请求信息
   */
  UploadResourceRequestInfo?: UploadResourceRequestInfo
  /**
   * 项目id
   */
  ProjectId?: string
}

/**
 * 规则执行日志
 */
export interface RuleExecLog {
  /**
   * 是否完成
注意：此字段可能返回 null，表示取不到有效值。
   */
  Finished?: boolean
  /**
   * 内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Log: string
}

/**
 * 监听事件
 */
export interface AiOpsEventListenerDTO {
  /**
   * 事件名
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventName?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 项目展示名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectDisplayName?: string
  /**
   * 事件周期
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventSubType?: string
  /**
   * 事件项目ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * 扩展名
注意：此字段可能返回 null，表示取不到有效值。
   */
  PropertiesList?: Array<ParamInfoDs>
  /**
   * 事件广播类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventBroadcastType?: string
}

/**
 * DescribeRuleGroupsByPage请求参数结构体
 */
export interface DescribeRuleGroupsByPageRequest {
  /**
   * 分页序号
   */
  PageNumber?: number
  /**
   * 分页大小
   */
  PageSize?: number
  /**
   * 过滤条件,每次请求的Filters的上限为10，Filter.Values的上限为5
   */
  Filters?: Array<Filter>
  /**
   * 排序方式
   */
  OrderFields?: Array<OrderField>
  /**
   * 项目Id
   */
  ProjectId?: string
}

/**
 * 文件夹属性
 */
export interface FolderDsDto {
  /**
   * 文件夹id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 文件夹名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 所属项目id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 父文件夹id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentsFolderId?: string
  /**
   * 工作流总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 工作流列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Workflows?: Array<WorkflowCanvasOpsDto>
  /**
   * 子文件夹总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalFolders?: number
  /**
   * 子文件夹列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Folders?: Array<FolderDsDto>
  /**
   * 搜索类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  FindType?: string
}

/**
 * BatchDeleteIntegrationTasks返回参数结构体
 */
export interface BatchDeleteIntegrationTasksResponse {
  /**
   * 操作成功的任务数
注意：此字段可能返回 null，表示取不到有效值。
   */
  SuccessCount?: number
  /**
   * 操作失败的任务数
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailedCount?: number
  /**
   * 任务总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 搜索条件
 */
export interface SearchConditionInstanceNew {
  /**
   * 执行空间，可选 
 "DRY_RUN"
   */
  ExecutionSpace: string
  /**
   * 业务产品，可选: <DATA_DEV / DATA_QUALITY / DATA_INTEGRATION，默认DATA_DEV。非空。默认 自身项目
   */
  ProductName?: string
  /**
   * 资源组信息，可选
   */
  ResourceGroup?: string
}

/**
 * DescribeTaskTableMetricOverview返回参数结构体
 */
export interface DescribeTaskTableMetricOverviewResponse {
  /**
   * 表粒度指标集合
   */
  TaskTableMetricInfos?: Array<TaskTableMetricInfo>
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 返回列表类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetricType?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BatchRerunIntegrationTaskInstances请求参数结构体
 */
export interface BatchRerunIntegrationTaskInstancesRequest {
  /**
   * 实例信息
   */
  Instances: Array<SchedulerTaskInstanceInfo>
  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * DescribeWorkflowTaskCount返回参数结构体
 */
export interface DescribeWorkflowTaskCountResponse {
  /**
   * 统计结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: WorkflowTaskCountOpsDto
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务标签，可用于检索任务的条件
 */
export interface TaskTag {
  /**
   * 标签名称
   */
  TagName: string
  /**
   * 标签值列表
   */
  TagValues: Array<string>
}

/**
 * TaskTypeCnt
 */
export interface TaskTypeCnt {
  /**
   * 统计值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Number?: string
  /**
   * 任务类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskType?: string
  /**
   * 类型名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TypeName?: string
}

/**
 * 扩展信息参数
 */
export interface ExtResourceFlagDto {
  /**
   * 父任务信息获取标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentTask?: boolean
  /**
   * 生产事件获取标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventListener?: string
  /**
   * Dlc相关配置获取标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  DlcResourceConfig?: string
  /**
   * 脚本信息获取标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  Script?: string
  /**
   * 离线任务信息获取标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  OfflineSyncTask?: string
}

/**
 * DescribeTopTableStat请求参数结构体
 */
export interface DescribeTopTableStatRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 开始时间，时间戳到秒
   */
  BeginDate: string
  /**
   * 结束时间，时间戳到秒
   */
  EndDate: string
}

/**
 * 查询实例条件
 */
export interface SearchCondition {
  /**
   * 查询框架，必选
   */
  Instance: SearchConditionInstanceNew
  /**
   * 查询关键字（任务Id精确匹配，任务名称模糊匹配），可选
   */
  Keyword?: string
  /**
   * 排序顺序（asc，desc）
   */
  Sort?: string
  /**
   * 排序列（costTime 运行耗时，startTime 开始时间，state 实例状态，curRunDate 数据时间）
   */
  SortCol?: string
}

/**
 * 数据质量规则
 */
export interface Rule {
  /**
   * 规则ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleId?: number
  /**
   * 规则组ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleGroupId?: number
  /**
   * 数据表Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableId?: string
  /**
   * 规则名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 规则类型 1.系统模版, 2.自定义模版, 3.自定义SQL
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: number
  /**
   * 规则模板Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleTemplateId?: number
  /**
   * 规则模板概述
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleTemplateContent?: string
  /**
   * 规则所属质量维度 1：准确性，2：唯一性，3：完整性，4：一致性，5：及时性，6：有效性
注意：此字段可能返回 null，表示取不到有效值。
   */
  QualityDim?: number
  /**
   * 规则适用的源数据对象类型（1：常量，2：离线表级，3：离线字段级别）
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceObjectType?: number
  /**
   * 规则适用的源数据对象类型（1：数值，2：字符串）
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceObjectDataType?: number
  /**
   * 源字段详细类型，INT、STRING
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceObjectDataTypeName?: string
  /**
   * 源字段名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceObjectValue?: string
  /**
   * 检测范围 1.全表, 2.条件扫描
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConditionType?: number
  /**
   * 条件扫描WHERE条件表达式
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConditionExpression?: string
  /**
   * 自定义SQL
注意：此字段可能返回 null，表示取不到有效值。
   */
  CustomSql?: string
  /**
   * 报警触发条件
注意：此字段可能返回 null，表示取不到有效值。
   */
  CompareRule?: CompareRule
  /**
   * 报警触发级别 1.低, 2.中, 3.高
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmLevel?: number
  /**
   * 规则描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 规则配置人
注意：此字段可能返回 null，表示取不到有效值。
   */
  Operator?: string
  /**
   * 目标库Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetDatabaseId?: string
  /**
   * 目标库名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetDatabaseName?: string
  /**
   * 目标表Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetTableId?: string
  /**
   * 目标表名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetTableName?: string
  /**
   * 目标字段过滤条件表达式
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetConditionExpr?: string
  /**
   * 源字段与目标字段关联条件on表达式
注意：此字段可能返回 null，表示取不到有效值。
   */
  RelConditionExpr?: string
  /**
   * 自定义模版sql表达式参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  FieldConfig?: RuleFieldConfig
  /**
   * 是否关联多表
注意：此字段可能返回 null，表示取不到有效值。
   */
  MultiSourceFlag?: boolean
  /**
   * 是否where参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  WhereFlag?: boolean
  /**
   * 模版原始SQL
注意：此字段可能返回 null，表示取不到有效值。
   */
  TemplateSql?: string
  /**
   * 模版子维度：0.父维度类型,1.一致性: 枚举范围一致性,2.一致性：数值范围一致性,3.一致性：字段数据相关性
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubQualityDim?: number
  /**
   * 规则适用的目标数据对象类型（1：常量，2：离线表级，3：离线字段级别）
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetObjectType?: number
  /**
   * 规则适用的目标数据对象类型（1：数值，2：字符串）
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetObjectDataType?: number
  /**
   * 目标字段详细类型，INT、STRING
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetObjectDataTypeName?: string
  /**
   * 目标字段名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetObjectValue?: string
  /**
   * 源端对应的引擎类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceEngineTypes?: Array<number | bigint>
  /**
   * 表名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableName?: string
  /**
   * 表负责人名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableOwnerName?: string
  /**
   * 执行策略信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecStrategy?: RuleGroupExecStrategy
  /**
   * 订阅信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Subscription?: RuleGroupSubscribe
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 数据源 id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceId?: number
  /**
   * 数据库 id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseId?: string
  /**
   * 监控是否开启.0false,1true
注意：此字段可能返回 null，表示取不到有效值。
   */
  MonitorStatus?: number
  /**
   * 触发条件
注意：此字段可能返回 null，表示取不到有效值。
   */
  TriggerCondition?: string
  /**
   * 0或者未返回或者null：未定义，1：生产，2：开发
注意：此字段可能返回 null，表示取不到有效值。
   */
  DsEnvType?: number
  /**
   * 数据源类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceType?: number
  /**
   * 模式名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SchemaName?: string
  /**
   * 目标模式名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetSchemaName?: string
  /**
   * 项目id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectName?: string
}

/**
 * AddProjectUserRole请求参数结构体
 */
export type AddProjectUserRoleRequest = null

/**
 * ModifyRuleGroupSubscription请求参数结构体
 */
export interface ModifyRuleGroupSubscriptionRequest {
  /**
   * 规则组ID
   */
  RuleGroupId?: number
  /**
   * 订阅人信息
   */
  Receivers?: Array<SubscribeReceiver>
  /**
   * 订阅类型
   */
  SubscribeType?: Array<number | bigint>
  /**
   * 项目ID
   */
  ProjectId?: string
  /**
   * 数据库Id
   */
  DatabaseId?: string
  /**
   * 数据源Id
   */
  DatasourceId?: string
  /**
   * 数据表Id
   */
  TableId?: string
  /**
   * 群机器人webhook信息
   */
  WebHooks?: Array<SubscribeWebHook>
}

/**
 * DescribeDataSourceList返回参数结构体
 */
export interface DescribeDataSourceListResponse {
  /**
   * 数据源列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: DataSourceInfoPage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Agent采集器状态统计
 */
export interface AgentStatus {
  /**
   * 运行中的数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Running?: number
  /**
   * 异常的数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Abnormal?: number
  /**
   * 操作中的数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  InOperation?: number
}

/**
 * DescribeInstanceLogDetail请求参数结构体
 */
export interface DescribeInstanceLogDetailRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 任务id
   */
  TaskId: string
  /**
   * 数据时间
   */
  CurRunDate: string
  /**
   * 日志级别，Info/Debug/Warn/Error/All
   */
  LogLevelType?: string
  /**
   * 文件类型,Log/Code
   */
  ExecutionFileType?: string
  /**
   * 统一执行平台执行id, 注意: ExecutionJobId 跟 "BrokerIp+OriginFileName" 必须有一个不为空
   */
  ExecutionJobId?: string
  /**
   * 服务器Ip, 注意: "BrokerIp+OriginFileName"跟ExecutionJobId必须有一个不为空
   */
  BrokerIp?: string
  /**
   * 文件Name, 注意: "BrokerIp+OriginFileName"跟ExecutionJobId必须有一个不为空
   */
  OriginFileName?: string
  /**
   * 起始行
   */
  StartCount?: number
  /**
   * 每次查询行数
   */
  LineCount?: number
  /**
   * 查询日志扩展信息,通过统一执行平台接口分页查询日志时需要带上,第一页时为null
   */
  ExtInfo?: string
  /**
   * 请求来源，WEB 前端；CLIENT 客户端
   */
  RequestFromSource?: string
  /**
   * 生命周期为基础数据进行日志匹配
   */
  InstanceLifeDetailDtoList?: Array<InstanceLifeDetailDto>
  /**
   * 当前生命周期
   */
  CurrentLifeRound?: number
  /**
   * 生命周期总数
   */
  MaxLifeRound?: number
  /**
   * 当前生命周期重试次数
   */
  Tries?: number
  /**
   * 动态加载日志
   */
  Dynamic?: boolean
}

/**
 * BatchSuspendIntegrationTasks请求参数结构体
 */
export interface BatchSuspendIntegrationTasksRequest {
  /**
   * 任务id
   */
  TaskIds: Array<string>
  /**
   * 任务类型，201为实时任务，202为离线任务
   */
  TaskType: number
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 事件类型(START, STOP, SUSPEND, SUSPEND_WITHOUT_SP,RESUME, COMMIT, TIMESTAMP)
   */
  Event?: string
  /**
   * 本次批量操作涉及任务，用于审计
   */
  TaskNames?: Array<string>
}

/**
 * 是否支持creat 或ddl
 */
export interface CreateAndDDLSupport {
  /**
   * 是否支持select
注意：此字段可能返回 null，表示取不到有效值。
   */
  SupportSelect?: boolean
  /**
   * 是否支持ddl
注意：此字段可能返回 null，表示取不到有效值。
   */
  SupportDdl?: boolean
}

/**
 * DescribeDrInstancePage返回参数结构体
 */
export interface DescribeDrInstancePageResponse {
  /**
   * 结果集
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: DrInstanceOpsDtoPage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MoveTasksToFolder请求参数结构体
 */
export interface MoveTasksToFolderRequest {
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 工作流ID
   */
  WorkflowId: string
  /**
   * 任务文件夹ID
   */
  TaskFolderId: string
  /**
   * 任务ID
   */
  TaskIds: Array<string>
  /**
   * 虚拟任务ID
   */
  VirtualTaskIds: Array<string>
}

/**
 * 排序
 */
export interface OrderFields {
  /**
   * 字段
   */
  Name?: string
  /**
   * 排序
   */
  Direction?: string
}

/**
 * MoveTasksToFolder返回参数结构体
 */
export interface MoveTasksToFolderResponse {
  /**
   * true代表成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateWorkflowOwner请求参数结构体
 */
export interface UpdateWorkflowOwnerRequest {
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 工作流Ids
   */
  WorkflowIds?: Array<string>
  /**
   * 责任人，多个以';'号分割
   */
  Owner?: string
  /**
   * 责任人UserId，多个以';'号分割
   */
  OwnerId?: string
}

/**
 * DescribeSchedulerTaskTypeCnt返回参数结构体
 */
export interface DescribeSchedulerTaskTypeCntResponse {
  /**
   * data
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<TaskTypeCnt>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据质量生产调度任务业务实体
 */
export interface ProdSchedulerTask {
  /**
   * 生产调度任务工作流ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowId: string
  /**
   * 生产调度任务Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 生产调度任务名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskName?: string
  /**
   * 生产调度任务任务类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleType?: number
}

/**
 * DeleteCustomFunction返回参数结构体
 */
export interface DeleteCustomFunctionResponse {
  /**
   * 函数 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  FunctionId?: string
  /**
   * 无
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMessage?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据质量规则分页
 */
export interface RulePage {
  /**
   * 记录数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<Rule>
}

/**
 * 维度评分信息
 */
export interface DimensionScoreInfo {
  /**
   * 维度名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 权重
注意：此字段可能返回 null，表示取不到有效值。
   */
  Weight?: number
  /**
   * 设置人id
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserId?: number
  /**
   * 设置人名
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserName?: string
  /**
   * 更新时间 时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: number
  /**
   * 参与评估表数量
   */
  JoinTableNumber?: number
  /**
   * 评分
   */
  Score?: number
  /**
   * 设置人idStr
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserIdStr?: string
}

/**
 * DescribeTaskScript返回参数结构体
 */
export interface DescribeTaskScriptResponse {
  /**
   * 任务脚本内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: TaskScriptContent
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例列表结构体
 */
export interface CollectionInstanceOpsDto {
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 总页面数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPage?: number
  /**
   * 当前页面数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageCount?: number
  /**
   * 页码
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
  /**
   * 每页数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * 实例信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<InstanceOpsDto>
}

/**
 * 试运行记录
 */
export interface DrInstanceOpsDtoPage {
  /**
   * 记录总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 记录列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<DrInstanceOpsDto>
}

/**
 * 表血缘详细信息
 */
export interface TableLineageInfo {
  /**
   * 元数据类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetastoreType: string
  /**
   * 空间id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * 数据源id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceId?: string
  /**
   * 表id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableId?: string
  /**
   * 表血缘参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Params?: Array<LineageParamRecord>
  /**
   * 父节点列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentSet?: string
  /**
   * 子节点列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChildSet?: string
  /**
   * 额外参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtParams?: Array<RecordField>
  /**
   * 血缘id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * 元数据类型名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetastoreTypeName?: string
  /**
   * 表名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableName?: string
  /**
   * 表全称
注意：此字段可能返回 null，表示取不到有效值。
   */
  QualifiedName?: string
  /**
   * 血缘下游节点数
注意：此字段可能返回 null，表示取不到有效值。
   */
  DownStreamCount?: number
  /**
   * 血缘上游节点数
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpStreamCount?: number
  /**
   * 血缘描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 由中心节点到该节点的路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrefixPath?: string
  /**
   * 血缘创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 血缘更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifyTime?: string
  /**
   * 修改血缘的任务id列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tasks?: Array<string>
  /**
   * 模块/应用类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChannelType?: string
  /**
   * 展示类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  DisplayType?: string
  /**
   * 表类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  EngineType?: string
  /**
   * 表类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableType?: string
  /**
   * datasourceName
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceName?: string
  /**
   * DatabaseName
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseName?: string
  /**
   * DatabaseId
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseId?: string
}

/**
 * DescribeSchedulerInstanceStatus返回参数结构体
 */
export interface DescribeSchedulerInstanceStatusResponse {
  /**
   * 响应数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<ScreenInstanceInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CountOpsInstanceState请求参数结构体
 */
export interface CountOpsInstanceStateRequest {
  /**
   * 任务id
   */
  TaskId: string
  /**
   * 项目Id
   */
  ProjectId: string
}

/**
 * EventCaseOpsDto
 */
export interface EventCaseOpsDto {
  /**
   * 案例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CaseId?: string
  /**
   * 案例名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 时间格式
注意：此字段可能返回 null，表示取不到有效值。
   */
  Dimension?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreationTimestamp?: string
  /**
   * 消费者id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConsumerId?: string
  /**
   * 描述信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
}

/**
 * CreateTaskVersionDs返回参数结构体
 */
export interface CreateTaskVersionDsResponse {
  /**
   * 版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询实时任务实例当前的节点信息
 */
export interface InstanceNodeInfo {
  /**
   * 读取节点SOURCE 写入节点SINK
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeType?: string
  /**
   * 节点id
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeId?: string
  /**
   * 节点名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeName?: string
}

/**
 * BatchUpdateIntegrationTasks请求参数结构体
 */
export interface BatchUpdateIntegrationTasksRequest {
  /**
   * 任务id
   */
  TaskIds: Array<string>
  /**
   * 责任人（多个责任人用小写分号隔开；离线任务传入的是账号名，实时任务传入的是账号id）
   */
  Incharge: string
  /**
   * 任务类型
   */
  TaskType: number
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 责任人Id（多个责任人用小写分号隔开）
   */
  InchargeIds?: string
  /**
   * 本次批量操作涉及任务，用于审计
   */
  TaskNames?: Array<string>
}

/**
 * BatchModifyOpsOwners请求参数结构体
 */
export interface BatchModifyOpsOwnersRequest {
  /**
   * 需要更新责任人的TaskId数组
   */
  TaskIdList: Array<string>
  /**
   * 需要更新的责任人userId信息，多个责任人用;连接
   */
  Owners: string
  /**
   * 项目Id
   */
  ProjectId: string
}

/**
 * ModifyTaskName返回参数结构体
 */
export interface ModifyTaskNameResponse {
  /**
   * 结果
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BatchDeleteOpsTasks请求参数结构体
 */
export interface BatchDeleteOpsTasksRequest {
  /**
   * 批量删除的任务TaskId
   */
  TaskIdList: Array<string>
  /**
   * true : 删除后下游任务可正常运行
false：删除后下游任务不可运行
   */
  DeleteMode: boolean
  /**
   * true：通知下游任务责任人
false:  不通知下游任务责任人
   */
  EnableNotify: boolean
  /**
   * 项目Id
   */
  ProjectId: string
}

/**
 * GetCosToken请求参数结构体
 */
export interface GetCosTokenRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 请求域名
   */
  OriginDomain: string
  /**
   * 是否需要跨域
   */
  CrossFlag: boolean
  /**
   * 桶名
   */
  BucketName?: string
  /**
   * 远程地址
   */
  RemotePath?: string
  /**
   * 地域
   */
  RemoteRegion?: string
}

/**
 * 工作流
 */
export interface WorkflowExtOpsDto {
  /**
   * 任务数量count
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskCount?: number
  /**
   * 文件名
注意：此字段可能返回 null，表示取不到有效值。
   */
  FolderName?: string
  /**
   * 工作流id
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkFlowId?: string
  /**
   * 责任人
注意：此字段可能返回 null，表示取不到有效值。
   */
  Owner?: string
  /**
   * 责任人userId
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerId?: string
  /**
   * 项目id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * 项目标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectIdent?: string
  /**
   * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectName?: string
  /**
   * 工作流描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkFlowDesc?: string
  /**
   * 工作流名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkFlowName?: string
  /**
   * 工作流文件id
注意：此字段可能返回 null，表示取不到有效值。
   */
  FolderId?: string
  /**
   * 工作流状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 工作流创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 最近更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifyTime?: string
  /**
   * 工作流类型，周期cycle，手动manual
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowType?: string
}

/**
 * 血缘参数记录
 */
export interface LineageParamRecord {
  /**
   * 字段名
   */
  Name: string
  /**
   * 字段值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value: string
}

/**
 * 批量操作结果
 */
export interface BatchResult {
  /**
   * 正在运行的任务数
   */
  Running: number
  /**
   * 执行成功的任务数
   */
  Success: number
  /**
   * 执行失败的任务数
   */
  Failed: number
  /**
   * 总任务数
   */
  Total: number
}

/**
 * 批量运行集成任务配置
 */
export interface StartTaskInfo {
  /**
   * 批量运行任务类型，比如START，TIMESTAMP，RESTORE，RESUME等
注意：此字段可能返回 null，表示取不到有效值。
   */
  Event?: string
  /**
   * 任务Id列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskIds?: Array<string>
  /**
   * 批量运行任务配置，目前仅用与实时集成基于时间位点启动。基于时间位点启动，需要设置一个name=timestamp, value=具体时间戳的RecordField的配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Config?: Array<RecordField>
  /**
   * 操作类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
}

/**
 * DescribeIntegrationStatisticsInstanceTrend返回参数结构体
 */
export interface DescribeIntegrationStatisticsInstanceTrendResponse {
  /**
   * 统计结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  TrendsData?: Array<IntegrationStatisticsTrendResult>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceLogList请求参数结构体
 */
export interface DescribeInstanceLogListRequest {
  /**
   * 任务id
   */
  TaskId: string
  /**
   * 数据时间
   */
  CurRunDate: string
}

/**
 * 集成任务节点
 */
export interface IntegrationNodeInfo {
  /**
   * 集成节点id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * 集成节点所属任务id
   */
  TaskId?: string
  /**
   * 集成节点名称
   */
  Name?: string
  /**
   * 集成节点类型,INPUT: 输入节点，OUTPUT:输出节点
   */
  NodeType?: string
  /**
   * 节点数据源类型：MYSQL|POSTGRE|ORACLE|SQLSERVER|FTP|HIVE|HDFS|ICEBERG|KAFKA|HBASE|SPARK|VIRTUAL|TBASE|DB2|DM|GAUSSDB|GBASE|IMPALA|ES|S3_DATAINSIGHT|GREENPLUM|PHOENIX|SAP_HANA|SFTP|OCEANBASE|CLICKHOUSE|KUDU|VERTICA|REDIS|COS|DLC|DLCV1|DORIS|CKAFKA|DTS_KAFKA|S3|CDW|LOCAL|TDSQLC|TDSQL|TDSQL_MYSQL|MONGODB|INFORMIX|SYBASE|REST_API|SuperSQL|PRESTO|DR_SUM|TiDB|StarRocks|Trino|Kyuubi|GDB|TCHOUSE_X|TCHOUSE_P|TDSQL_POSTGRE
   */
  DataSourceType?: string
  /**
   * 节点描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 数据源id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceId?: string
  /**
   * 节点配置信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Config?: Array<RecordField>
  /**
   * 节点扩展配置信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtConfig?: Array<RecordField>
  /**
   * 节点schema
注意：此字段可能返回 null，表示取不到有效值。
   */
  Schema?: Array<IntegrationNodeSchema>
  /**
   * 节点映射
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeMapping?: IntegrationNodeMapping
  /**
   * 归属用户AppId,展示字段 非传入
   */
  AppId?: string
  /**
   * 项目id
   */
  ProjectId?: string
  /**
   * 创建人uin,展示字段 非传入
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatorUin?: string
  /**
   * 操作人uin，展示字段 非传入
注意：此字段可能返回 null，表示取不到有效值。
   */
  OperatorUin?: string
  /**
   * owner uin 展示字段 非传入
   */
  OwnerUin?: string
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
}

/**
 * DescribeRuleGroup返回参数结构体
 */
export interface DescribeRuleGroupResponse {
  /**
   * 数据质量规则组详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: RuleGroup
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDataSources返回参数结构体
 */
export interface DeleteDataSourcesResponse {
  /**
   * 是否删除成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 批量操作任务列表
 */
export interface DescribeBatchOperateTaskDTO {
  /**
   * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 任务名
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskName?: string
  /**
   * 工作流Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowId?: string
  /**
   * 工作流名
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowName?: string
  /**
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskTypeId?: number
  /**
   * 任务类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskTypeDesc?: string
  /**
   * 文件夹名
注意：此字段可能返回 null，表示取不到有效值。
   */
  FolderName?: string
  /**
   * 文件夹ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  FolderId?: string
  /**
   * 负责人
注意：此字段可能返回 null，表示取不到有效值。
   */
  InCharge?: string
  /**
   * 是否提交
注意：此字段可能返回 null，表示取不到有效值。
   */
  Submit?: number
  /**
   * 引擎：
presto\SparkJob\SparkSql
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataEngine?: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 创造时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 周期类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleUnit?: string
  /**
   * 调度计划
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScheduleDesc?: string
  /**
   * 数据源ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceId?: string
  /**
   * 数据源类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceType?: string
}

/**
 * ModifyTaskLinks请求参数结构体
 */
export interface ModifyTaskLinksRequest {
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 父任务ID
   */
  TaskFrom: string
  /**
   * 子任务ID
   */
  TaskTo: string
  /**
   * 子任务工作流
   */
  WorkflowId: string
  /**
   * 父任务工作流
   */
  RealFromWorkflowId: string
  /**
   * 父子任务之间的依赖关系
   */
  LinkDependencyType?: string
}

/**
 * DescribeOpsMakePlans返回参数结构体
 */
export interface DescribeOpsMakePlansResponse {
  /**
   * 补录计划分页查询结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: MakePlanOpsDtoCollection
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 事件消费任务记录列表
 */
export interface EventCaseConsumeLogOptDtoCollection {
  /**
   * 结果总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 结果总页数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPage?: number
  /**
   * 当前页结果数
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageCount?: number
  /**
   * 页码
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
  /**
   * 每页数目
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * 分页数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<EventCaseConsumeLogOptDto>
}

/**
 * DeleteFile请求参数结构体
 */
export interface DeleteFileRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 资源id
   */
  ResourceId: string
}

/**
 * DeleteDataSources请求参数结构体
 */
export interface DeleteDataSourcesRequest {
  /**
   * id列表
   */
  Ids: Array<number | bigint>
  /**
   * 项目id
   */
  ProjectId?: string
}

/**
 * ModifyTaskAlarmRegular请求参数结构体
 */
export interface ModifyTaskAlarmRegularRequest {
  /**
   * 规则ID
   */
  Id: string
  /**
   * 规则信息
   */
  TaskAlarmInfo: TaskAlarmInfo
  /**
   * 项目ID
   */
  ProjectId: string
}

/**
 * SubmitSqlTask返回参数结构体
 */
export interface SubmitSqlTaskResponse {
  /**
   * 任务提交记录
   */
  Record?: AdhocRecord
  /**
   * 子任务记录列表
   */
  Details?: Array<AdhocDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeColumnsMeta请求参数结构体
 */
export interface DescribeColumnsMetaRequest {
  /**
   * 表ID
   */
  TableId: string
  /**
   * 页码
   */
  PageNumber: number
  /**
   * 每页大小
   */
  PageSize: number
  /**
   * 过滤器
   */
  FilterSet?: Array<Filter>
  /**
   * 排序字段
   */
  OrderFieldSet?: Array<OrderField>
  /**
   * 是否查询分区字段，默认false
   */
  IsPartitionQuery?: boolean
  /**
   * 合规组ID
   */
  ComplianceId?: number
}

/**
 * DescribeOrganizationalFunctions请求参数结构体
 */
export interface DescribeOrganizationalFunctionsRequest {
  /**
   * 场景类型：开发、使用
   */
  Type: string
  /**
   * 项目 ID
   */
  ProjectId: string
  /**
   * 函数名称
   */
  Name?: string
  /**
   * 展示名称
   */
  DisplayName?: string
  /**
   * 标准模式开发环境：DEV
标准模式生产环境：PROD
简单模式：ALL

   */
  EnvType?: string
  /**
   * 过滤条件
   */
  Filters?: Array<Filter>
  /**
   * 排序条件
   */
  OrderFields?: Array<OrderField>
}

/**
 * DescribeRuleTemplate返回参数结构体
 */
export interface DescribeRuleTemplateResponse {
  /**
   * 模板详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: RuleTemplate
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDataModel返回参数结构体
 */
export interface CreateDataModelResponse {
  /**
   * “Wedata数据建模”的实例id
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDependTaskLists请求参数结构体
 */
export interface DescribeDependTaskListsRequest {
  /**
   * 任务Id列表
   */
  TaskIds: Array<string>
  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * 数据源元数据
 */
export interface DatabaseMeta {
  /**
   * 项目Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * 技术类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetastoreType?: string
  /**
   * 数据源名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceName?: string
  /**
   * 数据源Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceId?: number
  /**
   * 项目英文名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectName?: string
  /**
   * 数据源类别：绑定引擎、绑定数据库,可用值:DB,ENGINE
注意：此字段可能返回 null，表示取不到有效值。
   */
  Category?: string
  /**
   * 数据源描述信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 数据源引擎的实例ID，如CDB实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Instance?: string
  /**
   * 数据源引擎所属区域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * 数据源数据源的可见性，1为可见、0为不可见。默认为1
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * db名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseName?: string
  /**
   * 项目中文名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectDisplayName?: string
  /**
   * 责任人名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerAccountName?: string
  /**
   * 数据来源展示名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DisplayName?: string
  /**
   * 数据库ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseId?: string
  /**
   * 数据来源类型：hive/mysql/hbase等
注意：此字段可能返回 null，表示取不到有效值。
   */
  Catalog?: string
  /**
   * 存储量大小,单位为 byte
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageSize?: number
  /**
   * 格式化后的存储量大小，带单位，如 12B
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageSizeWithUnit?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 总表数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableCount?: number
  /**
   * 数据源信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceList?: Array<GovDatasourceInfo>
  /**
   * 采集任务id
注意：此字段可能返回 null，表示取不到有效值。
   */
  CollectJobId?: string
  /**
   * 采集任务名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  CollectJobName?: string
  /**
   * 引擎id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
  /**
   * 引擎名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterName?: string
  /**
   * 库下表的最新更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifiedTimeByTables?: number
  /**
   * 库下表的最新访问时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastAccessTimeByTables?: number
}

/**
 * DescribeAllByFolderNew请求参数结构体
 */
export interface DescribeAllByFolderNewRequest {
  /**
   * 文件夹属性
   */
  Folder?: FolderOpsDto
  /**
   * 工作流列表
   */
  Workflows?: Array<WorkflowCanvasOpsDto>
  /**
   * 目标文件id
   */
  TargetFolderId?: string
  /**
   * 关键字
   */
  KeyWords?: string
  /**
   * 父文件id
   */
  ParentsFolderId?: string
  /**
   * 拉取文件夹列表
   */
  IsAddWorkflow?: string
  /**
   * 任务状态
   */
  TaskStates?: Array<string>
  /**
   * 搜索类型
   */
  FindType?: string
  /**
   * 访问类型
   */
  OptType?: string
  /**
   * 操作者名称
   */
  OperatorName?: string
  /**
   * 操作者id
   */
  OperatorId?: string
  /**
   * 项目id
   */
  ProjectId?: string
  /**
   * 项目标志
   */
  ProjectIdent?: string
  /**
   * 项目名称
   */
  ProjectName?: string
  /**
   * 索引页码
   */
  PageIndex?: number
  /**
   * 页面大小
   */
  PageSize?: number
  /**
   * 数据总数
   */
  Count?: number
  /**
   * 基础请求信息
   */
  RequestBaseInfo?: ProjectBaseInfoOpsRequest
  /**
   * 是否计算总数
   */
  IsCount?: boolean
}

/**
 * DescribeTaskRunHistory返回参数结构体
 */
export interface DescribeTaskRunHistoryResponse {
  /**
   * 分页查询任务运行历史结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: InstanceOpsInfoPage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BatchStopWorkflowsByIds请求参数结构体
 */
export interface BatchStopWorkflowsByIdsRequest {
  /**
   * 工作流id列表
   */
  WorkflowIds: Array<string>
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 是否终止已生成的实例
   */
  KillInstance?: boolean
  /**
   * 是否异步模式
   */
  AsyncMode?: boolean
}

/**
 * DescribeDutyScheduleList返回参数结构体
 */
export interface DescribeDutyScheduleListResponse {
  /**
   * 无
   */
  Data: DutySchedule
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CommitIntegrationTask请求参数结构体
 */
export interface CommitIntegrationTaskRequest {
  /**
   * 任务id
   */
  TaskId: string
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 0.仅提交，1.立即启动，2.停止线上作业，丢弃作业状态数据，重新启动运行，3.暂停线上作业，保留作业状态数据，继续运行，4.保留作业状态数据，继续运行
   */
  CommitType?: number
  /**
   * 实时任务 201   离线任务 202  默认实时任务
   */
  TaskType?: number
  /**
   * 额外参数
   */
  ExtConfig?: Array<RecordField>
  /**
   * 提交版本描述
   */
  VersionDesc?: string
  /**
   * 提交版本号
   */
  InstanceVersion?: number
  /**
   * 前端操作类型描述
   */
  EventDesc?: string
}

/**
 * DescribeTableInfoList请求参数结构体
 */
export interface DescribeTableInfoListRequest {
  /**
   * 表名
   */
  Filters: Array<Filter>
  /**
   * 如果是hive这里写rpc，如果是其他类型不传
   */
  ConnectionType: string
  /**
   * 数据库源类型
   */
  Catalog: string
}

/**
 * DescribeQualityScore请求参数结构体
 */
export interface DescribeQualityScoreRequest {
  /**
   * 统计日期
   */
  StatisticsDate: number
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 数据来源id
   */
  DatasourceId?: string
  /**
   * 1:按全维度权重计算,2:按已配置维度权重计算,3:不按维度权重计算,默认1
   */
  ScoreType?: string
  /**
   * 过滤参数
   */
  Filters?: Array<Filter>
}

/**
 * RunForceSucScheduleInstances返回参数结构体
 */
export interface RunForceSucScheduleInstancesResponse {
  /**
   * 结果
   */
  Data?: BatchOperateResultOpsDto
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CommitIntegrationTask返回参数结构体
 */
export interface CommitIntegrationTaskResponse {
  /**
   * 操作成功与否标识
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 审批列表信息
 */
export interface Apply {
  /**
   * 申请人id
   */
  ApplicantId?: string
  /**
   * 申请人名称
   */
  ApplicantName?: string
  /**
   * 审批备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
  /**
   * 审批分类key
   */
  ApproveClassification?: string
  /**
   * 审批单id
   */
  ApproveId?: string
  /**
   * 审批类型key
   */
  ApproveType?: string
  /**
   * 申请原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  Reason?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 审批时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApproveTime?: string
  /**
   * 审批分类名称
   */
  ApproveClassificationName?: string
  /**
   * 状态
   */
  Status?: string
  /**
   * 审批类型名称
   */
  ApproveTypeName?: string
  /**
   * 审批异常或者失败信息
   */
  ErrorMessage?: string
  /**
   * 申请名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApplyName?: string
  /**
   * 审批人id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApproverId?: string
  /**
   * 审批人名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApproverName?: string
  /**
   * 审批所属项目
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApproveProjectName?: string
  /**
   * 审批id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApplyId?: string
}

/**
 * 集成任务
 */
export interface IntegrationTaskInfo {
  /**
   * 任务名称
   */
  TaskName?: string
  /**
   * 任务描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 同步类型1.解决方案(整库迁移),2.单表同步
   */
  SyncType?: number
  /**
   * 201.实时,202.离线
   */
  TaskType?: number
  /**
   * 任务所属工作流id
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowId?: string
  /**
   * 任务id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 任务调度id(oceanus or us等作业id)，非填项
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScheduleTaskId?: string
  /**
   * inlong任务id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskGroupId?: string
  /**
   * 项目id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * 创建人uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatorUin?: string
  /**
   * 操作人uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  OperatorUin?: string
  /**
   * owner uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUin?: string
  /**
   * 应用id
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: string
  /**
   * 0:新建(任务开发态默认状态)|1:未开始|2:操作中|3:运行中|4:暂停|5:任务停止中|6:停止|7:执行失败|20:异常|21:未知|
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 节点列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Nodes?: Array<IntegrationNodeInfo>
  /**
   * 执行资源id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutorId?: string
  /**
   * 任务配置信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Config?: Array<RecordField>
  /**
   * 任务扩展配置信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtConfig?: Array<RecordField>
  /**
   * 任务执行context信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecuteContext?: Array<RecordField>
  /**
   * 节点映射
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mappings?: Array<IntegrationNodeMapping>
  /**
   * 任务配置模式，0:画布 1:表单 3:脚本
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskMode?: string
  /**
   * 责任人
注意：此字段可能返回 null，表示取不到有效值。
   */
  Incharge?: string
  /**
   * 离线新增参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  OfflineTaskAddEntity?: OfflineTaskAddParam
  /**
   * group name
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutorGroupName?: string
  /**
   * inlong manager url
注意：此字段可能返回 null，表示取不到有效值。
   */
  InLongManagerUrl?: string
  /**
   * stream id
注意：此字段可能返回 null，表示取不到有效值。
   */
  InLongStreamId?: string
  /**
   * version
注意：此字段可能返回 null，表示取不到有效值。
   */
  InLongManagerVersion?: string
  /**
   * inlong dataproxy url
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataProxyUrl?: Array<string>
  /**
   * 任务版本是否已提交运维
注意：此字段可能返回 null，表示取不到有效值。
   */
  Submit?: boolean
  /**
   * 数据源类型：MYSQL|POSTGRE|ORACLE|SQLSERVER|FTP|HIVE|HDFS|ICEBERG|KAFKA|HBASE|SPARK|VIRTUAL|TBASE|DB2|DM|GAUSSDB|GBASE|IMPALA|ES|S3_DATAINSIGHT|GREENPLUM|PHOENIX|SAP_HANA|SFTP|OCEANBASE|CLICKHOUSE|KUDU|VERTICA|REDIS|COS|DLC|DLCV1|DORIS|CKAFKA|DTS_KAFKA|S3|CDW|LOCAL|TDSQLC|TDSQL|TDSQL_MYSQL|MONGODB|INFORMIX|SYBASE|REST_API|SuperSQL|PRESTO|DR_SUM|TiDB|StarRocks|Trino|Kyuubi|GDB|TCHOUSE_X|TCHOUSE_P|TDSQL_POSTGRE
注意：此字段可能返回 null，表示取不到有效值。
   */
  InputDatasourceType?: string
  /**
   * 数据源类型：MYSQL|POSTGRE|ORACLE|SQLSERVER|FTP|HIVE|HDFS|ICEBERG|KAFKA|HBASE|SPARK|VIRTUAL|TBASE|DB2|DM|GAUSSDB|GBASE|IMPALA|ES|S3_DATAINSIGHT|GREENPLUM|PHOENIX|SAP_HANA|SFTP|OCEANBASE|CLICKHOUSE|KUDU|VERTICA|REDIS|COS|DLC|DLCV1|DORIS|CKAFKA|DTS_KAFKA|S3|CDW|LOCAL|TDSQLC|TDSQL|TDSQL_MYSQL|MONGODB|INFORMIX|SYBASE|REST_API|SuperSQL|PRESTO|DR_SUM|TiDB|StarRocks|Trino|Kyuubi|GDB|TCHOUSE_X|TCHOUSE_P|TDSQL_POSTGRE
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputDatasourceType?: string
  /**
   * 读取条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  NumRecordsIn?: number
  /**
   * 写入条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  NumRecordsOut?: number
  /**
   * 读取延迟
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReaderDelay?: number
  /**
   * 重启次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  NumRestarts?: number
  /**
   * 任务创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 任务更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 任务最后一次运行时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastRunTime?: string
  /**
   * 任务停止时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StopTime?: string
  /**
   * 作业是否已提交
注意：此字段可能返回 null，表示取不到有效值。
   */
  HasVersion?: boolean
  /**
   * 任务是否被锁定
注意：此字段可能返回 null，表示取不到有效值。
   */
  Locked?: boolean
  /**
   * 任务锁定人
注意：此字段可能返回 null，表示取不到有效值。
   */
  Locker?: string
  /**
   * 耗费资源量
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunningCu?: number
  /**
   * 该任务关联的告警规则
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskAlarmRegularList?: Array<string>
  /**
   * 实时任务资源分层情况： 0：进行中,1：成功 ,2：失败
注意：此字段可能返回 null，表示取不到有效值。
   */
  SwitchResource?: number
  /**
   * 实时任务读取阶段：0：全部全量,1：部分全量,2：全部增量
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReadPhase?: number
  /**
   * 实时任务版本号
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceVersion?: number
  /**
   * 离线任务导入到编排空间的任务id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ArrangeSpaceTaskId?: string
  /**
   * 离线任务状态区分1.未提交2.已提交3.已导出
注意：此字段可能返回 null，表示取不到有效值。
   */
  OfflineTaskStatus?: number
  /**
   * 导入到编排空间配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskImportInfo?: TaskImportInfo
  /**
   * 业务延迟
注意：此字段可能返回 null，表示取不到有效值。
   */
  BusinessLatency?: number
  /**
   * 当前同步位点
注意：此字段可能返回 null，表示取不到有效值。
   */
  CurrentSyncPosition?: number
}

/**
 * DeleteResourceFiles请求参数结构体
 */
export interface DeleteResourceFilesRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 使用状态， 为ture 判断资源的使用状态，如果使用中则不能删除
   */
  UseStatus: boolean
  /**
   * 资源id列表
   */
  ResourceIds?: Array<string>
  /**
   * 需要删除的资源路径列表 即资源管理中的目录结构
   */
  FilePaths?: Array<string>
}

/**
 * DeleteResourceFile返回参数结构体
 */
export interface DeleteResourceFileResponse {
  /**
   * 资源删除结果
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubmitTask返回参数结构体
 */
export interface SubmitTaskResponse {
  /**
   * 成功或者失败
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyApproveStatus返回参数结构体
 */
export interface ModifyApproveStatusResponse {
  /**
   * 修改审批单状态
   */
  Data?: Array<ApproveModify>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAlarmEvents返回参数结构体
 */
export interface DescribeAlarmEventsResponse {
  /**
   * 告警事件列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmEventInfoList?: Array<AlarmEventInfo>
  /**
   * 总记录数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceLogList返回参数结构体
 */
export interface DescribeInstanceLogListResponse {
  /**
   * 日志列表
   */
  Data?: string
  /**
   * 日志列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceLogList?: Array<InstanceLogList>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据质量规则组
 */
export interface RuleGroup {
  /**
   * 规则组Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleGroupId?: number
  /**
   * 数据源Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceId?: string
  /**
   * 数据源名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceName?: string
  /**
   * 数据源类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceType?: number
  /**
   * 监控类型 1.未配置, 2.关联生产调度, 3.离线周期检测
注意：此字段可能返回 null，表示取不到有效值。
   */
  MonitorType?: number
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 关联数据表名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableName?: string
  /**
   * 关联数据表Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableId?: string
  /**
   * 关联数据表负责人
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableOwnerName?: string
  /**
   * 执行策略
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecStrategy?: RuleGroupExecStrategy
  /**
   * 执行策略
注意：此字段可能返回 null，表示取不到有效值。
   */
  Subscription?: RuleGroupSubscribe
  /**
   * 数据库id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseId?: string
  /**
   * 数据库名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseName?: string
  /**
   * 模式名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SchemaName?: string
  /**
   * 是否有权限
注意：此字段可能返回 null，表示取不到有效值。
   */
  Permission?: boolean
  /**
   * 已经配置的规则数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleCount?: number
  /**
   * 监控状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  MonitorStatus?: boolean
  /**
   * 表负责人UserId
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableOwnerUserId?: number
  /**
   * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 是否已配置执行策略
注意：此字段可能返回 null，表示取不到有效值。
   */
  StrategyConfig?: boolean
  /**
   * 是否已配置执行策略
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubscribeConfig?: boolean
  /**
   * 数据源环境：0或者未返回.未定义，1.生产 2.开发
注意：此字段可能返回 null，表示取不到有效值。
   */
  DsEnvType?: number
  /**
   * EMR集群部署方式：CVM/TKE
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterDeployType?: string
}

/**
 * DescribeTableQualityDetails请求参数结构体
 */
export interface DescribeTableQualityDetailsRequest {
  /**
   * 统计日期
   */
  StatisticsDate: number
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 分页序号
   */
  PageNumber: number
  /**
   * 分页大小
   */
  PageSize: number
  /**
   * 过滤参数TableName、DatabaseId 、DatabaseName、OwnerUserName
   */
  Filters?: Array<Filter>
  /**
   * 排序参数 排序方式 DESC 或者 ASC，表得分排序 TableScore
   */
  OrderFields?: Array<OrderField>
  /**
   * 数据来源id
   */
  DatasourceId?: string
  /**
   * 1:按全维度权重计算,2:按已配置维度权重计算,3:不按维度权重计算,默认1
   */
  ScoreType?: string
}

/**
 * DescribeScheduleInstances返回参数结构体
 */
export interface DescribeScheduleInstancesResponse {
  /**
   * 请求来源，WEB 前端；CLIENT 客户端
注意：此字段可能返回 null，表示取不到有效值。
   */
  RequestFromSource?: string
  /**
   * 实例结果集
   */
  Data?: CollectionInstanceOpsDto
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteProjectParamDs返回参数结构体
 */
export interface DeleteProjectParamDsResponse {
  /**
   * 结果 true 删除成功
false 删除失败
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTablePartitions请求参数结构体
 */
export interface DescribeTablePartitionsRequest {
  /**
   * 表ID
   */
  TableId: string
  /**
   * 分页number
   */
  PageNumber?: number
  /**
   * 分页size
   */
  PageSize?: number
  /**
   * 过滤器
   */
  FilterSet?: Array<Filter>
  /**
   * 排序字段
   */
  OrderFieldSet?: Array<OrderField>
}

/**
 * DescribeOpsWorkflows请求参数结构体
 */
export interface DescribeOpsWorkflowsRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 任务产品类型名称列表，以 ',' 号分割
   */
  ProductNameList?: string
  /**
   * 文件id列表，以 ',' 号分割
   */
  FolderIdList?: string
  /**
   * 工作流id，以 ',' 号分割
   */
  WorkFlowIdList?: string
  /**
   * 工作流名称列表，以 ',' 号分割
   */
  WorkFlowNameList?: string
  /**
   * 任务名称列表，以 ',' 号分割
   */
  TaskNameList?: string
  /**
   * 任务id列表，以 ',' 号分割
   */
  TaskIdList?: string
  /**
   * 状态列表，以 ',' 号分割
   */
  StatusList?: string
  /**
   * 负责人列表，以 ',' 号分割
   */
  InChargeList?: string
  /**
   * 分页页码
   */
  PageNumber?: number
  /**
   * 分页大小
   */
  PageSize?: number
  /**
   * 排序项
   */
  SortItem?: string
  /**
   * 排序方式，DESC或ASC
   */
  SortType?: string
  /**
   * 项目ID列表，用于多项目工作流筛选
   */
  ProjectIds?: Array<string>
  /**
   * 工作流类型列表 多个用英文逗号连接 cycle,manual. 默认只查询 cycle
   */
  WorkflowTypeList?: Array<string>
  /**
   * 工作流过滤keyword，支持工作流 id/name 模糊匹配， 多个用|分割
   */
  KeyWord?: string
}

/**
 * CreateOfflineTask返回参数结构体
 */
export interface CreateOfflineTaskResponse {
  /**
   * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 导入到编排空间的任务id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ArrangeSpaceTaskId?: string
  /**
   * 结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeColumnLineage请求参数结构体
 */
export interface DescribeColumnLineageRequest {
  /**
   * 查询方向，INPUT,OUTPUT,BOTH枚举值
   */
  Direction: string
  /**
   * 字段信息
   */
  Data: ColumnLineageInfo
  /**
   * 单次查询入度
   */
  InputDepth?: number
  /**
   * 单次查询出度
   */
  OutputDepth?: number
  /**
   * 额外参数（传递调用方信息）
   */
  ExtParams?: Array<RecordField>
  /**
   * 是否过滤临时表 默认值为true
   */
  IgnoreTemp?: boolean
}

/**
 * CreateTaskAlarmRegular请求参数结构体
 */
export interface CreateTaskAlarmRegularRequest {
  /**
   * 告警配置信息
   */
  TaskAlarmInfo: TaskAlarmInfo
  /**
   * 项目ID
   */
  ProjectId: string
}

/**
 * ModifyRule请求参数结构体
 */
export interface ModifyRuleRequest {
  /**
   * 项目Id
   */
  ProjectId?: string
  /**
   * 规则ID
   */
  RuleId?: number
  /**
   * 规则组ID
   */
  RuleGroupId?: number
  /**
   * 规则名称
   */
  Name?: string
  /**
   * 数据表ID
   */
  TableId?: string
  /**
   * 规则模板ID
   */
  RuleTemplateId?: number
  /**
   * 规则类型 1.系统模版, 2.自定义模版, 3.自定义SQL
   */
  Type?: number
  /**
   * 规则所属质量维度（1：准确性，2：唯一性，3：完整性，4：一致性，5：及时性，6：有效性）
   */
  QualityDim?: number
  /**
   * 源字段详细类型，int、string
   */
  SourceObjectDataTypeName?: string
  /**
   * 源字段名称
   */
  SourceObjectValue?: string
  /**
   * 检测范围 1.全表   2.条件扫描
   */
  ConditionType?: number
  /**
   * 条件扫描WHERE条件表达式
   */
  ConditionExpression?: string
  /**
   * 自定义SQL
   */
  CustomSql?: string
  /**
   * 报警触发条件
   */
  CompareRule?: CompareRule
  /**
   * 报警触发级别 1.低, 2.中, 3.高
   */
  AlarmLevel?: number
  /**
   * 规则描述
   */
  Description?: string
  /**
   * 目标库Id
   */
  TargetDatabaseId?: string
  /**
   * 目标表Id
   */
  TargetTableId?: string
  /**
   * 目标过滤条件表达式
   */
  TargetConditionExpr?: string
  /**
   * 源字段与目标字段关联条件on表达式
   */
  RelConditionExpr?: string
  /**
   * 自定义模版sql表达式字段替换参数
   */
  FieldConfig?: RuleFieldConfig
  /**
   * 目标字段名称  CITY
   */
  TargetObjectValue?: string
  /**
   * 该规则适配的执行引擎
   */
  SourceEngineTypes?: Array<number | bigint>
  /**
   * 目标库名
   */
  TargetDatabaseName?: string
  /**
   * 目标模式名
   */
  TargetSchemaName?: string
  /**
   * 目标表名
   */
  TargetTableName?: string
}

/**
 * 数据源对象
 */
export interface DataSourceInfo {
  /**
   * 若数据源列表为绑定数据库，则为db名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseName?: string
  /**
   * 数据源描述信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 数据源ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ID?: number
  /**
   * 数据源引擎的实例ID，如CDB实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Instance?: string
  /**
   * 数据源名称，在相同SpaceName下，数据源名称不能为空
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 数据源引擎所属区域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * 数据源类型:枚举值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 数据源所属的集群id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
  /**
   * 应用ID AppId
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: number
  /**
   * 业务侧数据源的配置信息扩展
注意：此字段可能返回 null，表示取不到有效值。
   */
  BizParams?: string
  /**
   * 数据源类别：绑定引擎、绑定数据库
注意：此字段可能返回 null，表示取不到有效值。
   */
  Category?: string
  /**
   * 数据源展示名，为了可视化查看
注意：此字段可能返回 null，表示取不到有效值。
   */
  Display?: string
  /**
   * 数据源责任人账号ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerAccount?: string
  /**
   * 数据源的配置信息，以JSON KV存储，根据每个数据源类型不同，而KV存储信息不同
注意：此字段可能返回 null，表示取不到有效值。
   */
  Params?: string
  /**
   * 数据源数据源的可见性，1为可见、0为不可见。默认为1
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 数据源责任人账号名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerAccountName?: string
  /**
   * 集群名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterName?: string
  /**
   * 归属项目ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerProjectId?: string
  /**
   * 归属项目Name
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerProjectName?: string
  /**
   * 归属项目标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerProjectIdent?: string
  /**
   * 授权项目
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuthorityProjectName?: string
  /**
   * 授权用户
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuthorityUserName?: string
  /**
   * 是否有编辑权限
注意：此字段可能返回 null，表示取不到有效值。
   */
  Edit?: boolean
  /**
   * 是否有授权权限
注意：此字段可能返回 null，表示取不到有效值。
   */
  Author?: boolean
  /**
   * 是否有转交权限
注意：此字段可能返回 null，表示取不到有效值。
   */
  Deliver?: boolean
  /**
   * 数据源状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataSourceStatus?: string
  /**
   * 时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
  /**
   * Params json字符串
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamsString?: string
  /**
   * BizParams json字符串
注意：此字段可能返回 null，表示取不到有效值。
   */
  BizParamsString?: string
  /**
   * 修改时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifiedTime?: number
  /**
   * 数据源页面展示类型，与Type对应
注意：此字段可能返回 null，表示取不到有效值。
   */
  ShowType?: string
  /**
   * 当前数据源生产源Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductId?: number
  /**
   * 当前数据源开发源Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DevelopmentId?: number
  /**
   * 同params 内容为开发数据源的数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  DevelopmentParams?: string
  /**
   * 数据源连接状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConnectStatus?: DataSourceConnectStatus
  /**
   * 数据源展示类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  DisplayType?: string
  /**
   * 数据源环境
注意：此字段可能返回 null，表示取不到有效值。
   */
  Env?: string
  /**
   * 数据源唯一标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceUrn?: string
  /**
   * 是否标准模式
注意：此字段可能返回 null，表示取不到有效值。
   */
  Model?: string
  /**
   *  数据源环境信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataSourceEnvInfos?: Array<DataSourceEnvInfo>
}

/**
 * FindAllFolder返回参数结构体
 */
export interface FindAllFolderResponse {
  /**
   * 文件夹列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  FolderList?: Array<FolderDsDto>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataServicePublishedApiList请求参数结构体
 */
export interface DescribeDataServicePublishedApiListRequest {
  /**
   * 页码
   */
  PageNumber: number
  /**
   * 每页大小
   */
  PageSize: number
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 查询参数
   */
  Filters?: DataServicePublishedApiListFilter
  /**
   * 排序配置
   */
  OrderFields?: Array<DataServiceRequestListOrder>
}

/**
 * 资源管理目录树节点
 */
export interface ResourcePathTree {
  /**
   * 资源名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 是否为叶子节点
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsLeaf?: boolean
  /**
   * 资源ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceId?: string
  /**
   * 本地路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  LocalPath?: string
  /**
   * 远程路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  RemotePath?: string
  /**
   * 文件类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileExtensionType?: string
  /**
   * 文件大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  Size?: number
  /**
   * 文件MD5值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Md5Value?: string
  /**
   * 文件拥有者名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerName?: string
  /**
   * 更新人
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateUser?: string
  /**
   * 文件更新人uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateUserId?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: number
  /**
   * Cos存储桶名
注意：此字段可能返回 null，表示取不到有效值。
   */
  CosBucket?: string
  /**
   * Cos地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  CosRegion?: string
  /**
   * 额外信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtraInfo?: string
}

/**
 * DescribeRuleExecLog返回参数结构体
 */
export interface DescribeRuleExecLogResponse {
  /**
   * 规则执行日志
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: RuleExecLog
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 参数参数
 */
export interface ParamInfo {
  /**
   * 参数名
   */
  ParamKey: string
  /**
   * 参数值
   */
  ParamValue: string
}

/**
 * DescribeDsFolderTree请求参数结构体
 */
export interface DescribeDsFolderTreeRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 是否一级拉取 true 是 
false 否
   */
  FirstLevelPull?: boolean
  /**
   * 文件夹ID
   */
  FolderId?: string
  /**
   * 工作流ID
   */
  WorkflowId?: string
  /**
   * 关键字搜索
   */
  Keyword?: string
  /**
   * 是否包含工作流 true 是 
false 否
   */
  IncludeWorkflow?: boolean
  /**
   * 是否包含任务 true 是 
false 否
   */
  IncludeTask?: boolean
  /**
   * 是否包含虚拟任务，当 IncludeTask 为 true 的时候，该参数才生效，默认为 true
   */
  IncludeVirtualTask?: boolean
  /**
   * 任务目录id
   */
  TaskFolderId?: string
  /**
   * classification.分类展示  catalog.目录展示
   */
  DisplayType?: string
  /**
   * 是否包含任务目录 true 是 
false 否
   */
  IncludeTaskFolder?: boolean
  /**
   * 是否使用最新模式展示目录树
   */
  NewFolderTreeMode?: boolean
  /**
   * 节点分类ID
   */
  TaskNodeId?: string
  /**
   * 工作流类型, 使用场景: 任务复制,选择工作流. 取值范围

- cycle    周期工作流
- manual    手动工作流
   */
  WorkflowType?: string
}

/**
 * 表附加信息
 */
export interface TableMetaProperty {
  /**
   * 属性的key
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key?: string
  /**
   * 属性的值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
}

/**
 * BatchDeleteIntegrationTasks请求参数结构体
 */
export interface BatchDeleteIntegrationTasksRequest {
  /**
   * 任务id
   */
  TaskIds: Array<string>
  /**
   * 任务类型，201为实时任务，202为离线任务
   */
  TaskType: number
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 是否删除开发态任务。默认不删除开发态，为 0 不删除 , 为 1 删除
   */
  DeleteKFFlag?: number
  /**
   * 操作名称
   */
  Name?: string
  /**
   * 本次批量操作涉及任务，用于审计
   */
  TaskNames?: Array<string>
}

/**
 * KillOpsMakePlanInstances返回参数结构体
 */
export interface KillOpsMakePlanInstancesResponse {
  /**
   * 批量操作结果
   */
  Data?: BatchOperateResultOpsDto
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据服务入参
 */
export interface DataServiceResponseParam {
  /**
   * 参数名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamName: string
  /**
   * 绑定字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  BindField: string
  /**
   * 参数类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamType: string
  /**
   * 示例值
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExampleValue: string
  /**
   * 参数描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description: string
}

/**
 * TaskLog请求参数结构体
 */
export interface TaskLogRequest {
  /**
   * 任务id
   */
  TaskId: string
  /**
   * 起始时间戳，单位毫秒
   */
  StartTime: number
  /**
   * 结束时间戳，单位毫秒
   */
  EndTime: number
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 拉取日志数量，默认100
   */
  Limit?: number
  /**
   * 日志排序 desc 倒序 asc 顺序
   */
  OrderType?: string
  /**
   * 实时任务 201   离线任务 202  默认实时任务
   */
  TaskType?: number
}

/**
 * 任务依赖的边信息
 */
export interface OpsTaskLinkInfoDto {
  /**
   * 下游任务id
   */
  TaskTo?: string
  /**
   * 上游任务id
   */
  TaskFrom?: string
  /**
   * 依赖边类型 1、“real_real”表示任务->任务；2、"virtual_real" 跨工作流任务->任务
   */
  LinkType?: string
  /**
   * 依赖边id
   */
  LinkId?: string
  /**
   * 为了区分新增的循环依赖新增的类型。默认是normal，循环依赖则是circulate
注意：此字段可能返回 null，表示取不到有效值。
   */
  LinkStyle?: string
}

/**
 * 开发空间-脚本相关响应
 */
export interface ScriptInfoResponse {
  /**
   * 资源id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceId?: string
  /**
   * 脚本名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileName?: string
  /**
   * 文件扩展名类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileExtensionType?: string
  /**
   * 文件类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * md5值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Md5Value?: string
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
   * 文件大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  Size?: number
  /**
   * 本地路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  LocalPath?: string
  /**
   * 远程路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  RemotePath?: string
  /**
   * 用户名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerName?: string
  /**
   * 用户id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Owner?: string
  /**
   * 路径深度
注意：此字段可能返回 null，表示取不到有效值。
   */
  PathDepth?: number
  /**
   * 项目id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * 附加信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtraInfo?: string
  /**
   * 本地临时文件路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  LocalTempPath?: string
  /**
   * 本地压缩文件路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  ZipPath?: string
  /**
   * cos桶名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Bucket?: string
  /**
   * cos地区
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
}

/**
 * 集成任务导入到编排空间配置
 */
export interface TaskImportInfo {
  /**
   * 是否导入编排空间
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsImport?: boolean
  /**
   * 是否新建工作流
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsNewWorkFlow?: boolean
  /**
   * 工作流所属目录id
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkFlowFolderId?: string
  /**
   * 工作流所属目录名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkFlowFolderName?: string
  /**
   * 工作流id
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkFlowId?: string
  /**
   * 工作流名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkFlowName?: string
  /**
   * 重名任务处理策略, 0:跳过,不导入; 1: 重命名
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskNameExistMode?: number
}

/**
 * DescribeIntegrationStatisticsTaskStatus请求参数结构体
 */
export interface DescribeIntegrationStatisticsTaskStatusRequest {
  /**
   * 任务类型（实时：201，离线：202）
   */
  TaskType: number
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 查询日期
   */
  QueryDate?: string
  /**
   * 资源组id
   */
  ExecutorGroupId?: string
}

/**
 * GetFileInfo返回参数结构体
 */
export interface GetFileInfoResponse {
  /**
   * 当前脚本信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserFileInfo?: UserFileInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 基础用户信息
 */
export interface BaseUser {
  /**
   * 有云的UIN，全局唯一
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserId?: string
  /**
   * 用户全局唯一标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserName?: string
  /**
   * 用户显示名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DisplayName?: string
  /**
   * 电话号码
注意：此字段可能返回 null，表示取不到有效值。
   */
  PhoneNum?: string
  /**
   * 邮箱
注意：此字段可能返回 null，表示取不到有效值。
   */
  Email?: string
}

/**
 * 实例检索条件
 */
export interface InstanceCondition {
  /**
   * 执行类型
   */
  ExecutionSpace?: string
  /**
   * 任务产品类型
   */
  ProductName?: string
}

/**
 * FreezeOpsTasks返回参数结构体
 */
export interface FreezeOpsTasksResponse {
  /**
   * 操作结果
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集成节点映射
 */
export interface IntegrationNodeMapping {
  /**
   * 源节点id
   */
  SourceId?: string
  /**
   * 目标节点id
   */
  SinkId?: string
  /**
   * 源节点schema
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceSchema?: Array<IntegrationNodeSchema>
  /**
   * 节点schema映射
注意：此字段可能返回 null，表示取不到有效值。
   */
  SchemaMappings?: Array<IntegrationNodeSchemaMapping>
  /**
   * 节点映射扩展信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtConfig?: Array<RecordField>
}

/**
 * 列血缘聚合信息
 */
export interface ColumnAggregationLineage {
  /**
   * 表名
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableName: string
  /**
   * 父节点ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentId: string
  /**
   * 元数据类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetastoreType: string
  /**
   * 字符串类型的父节点集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentSet: string
  /**
   * 字符串类型的子节点集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChildSet: string
  /**
   * 列信息集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColumnInfoSet: Array<SimpleColumnInfo>
}

/**
 * ModifyRuleGroupSubscription返回参数结构体
 */
export interface ModifyRuleGroupSubscriptionResponse {
  /**
   * 规则组ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateWorkflowDs返回参数结构体
 */
export interface CreateWorkflowDsResponse {
  /**
   * 工作流ID
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateHiveTableByDDL返回参数结构体
 */
export interface CreateHiveTableByDDLResponse {
  /**
   * 返回表名称，无论是否异步都有值
   */
  Data?: string
  /**
   * 异步任务轮询 id，只有异步才有值
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTaskByCycle返回参数结构体
 */
export interface DescribeTaskByCycleResponse {
  /**
   * 周期任务统计值
   */
  Data?: Array<TaskByCycle>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeExecStrategy返回参数结构体
 */
export interface DescribeExecStrategyResponse {
  /**
   * 规则组执行策略
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: RuleGroupExecStrategy
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSuccessorOpsTaskInfos返回参数结构体
 */
export interface DescribeSuccessorOpsTaskInfosResponse {
  /**
   * 下游任务列表
   */
  Data?: Array<TaskOpsDto>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteResource返回参数结构体
 */
export interface DeleteResourceResponse {
  /**
   * 是否成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRule返回参数结构体
 */
export interface ModifyRuleResponse {
  /**
   * 是否更新成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceLogFile返回参数结构体
 */
export interface DescribeInstanceLogFileResponse {
  /**
   * 下载文件详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: InstanceDownloadLogInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 键值对
 */
export interface PairDto {
  /**
   * 键名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key?: string
  /**
   * 值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
  /**
   * 描述
   */
  Description?: string
}

/**
 * cos token信息
 */
export interface CosTokenResponse {
  /**
   * token id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * token内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Token?: string
  /**
   * 密钥id
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecretId?: string
  /**
   * 密钥内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecretKey?: string
  /**
   * 响应
注意：此字段可能返回 null，表示取不到有效值。
   */
  Response?: string
  /**
   * 用户uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUin?: string
  /**
   * 过期时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpiredTime?: number
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: number
  /**
   * 操作者uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  OperatorUin?: string
}

/**
 * DeleteTaskDs返回参数结构体
 */
export interface DeleteTaskDsResponse {
  /**
   * 是否删除成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 表生命周期相关信息
 */
export interface LifecycleInfo {
  /**
   * 生命周期值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Lifecycle?: number
  /**
   * 列名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Columns?: Array<string>
  /**
   * 日期格式
注意：此字段可能返回 null，表示取不到有效值。
   */
  DateFormat?: Array<string>
}

/**
 * DescribeAllByFolderNew返回参数结构体
 */
export interface DescribeAllByFolderNewResponse {
  /**
   * 结果集
   */
  Data?: CollectionFolderOpsDto
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDsParentFolderTree请求参数结构体
 */
export interface DescribeDsParentFolderTreeRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 文件夹ID
   */
  FolderId?: string
  /**
   * 工作流ID
   */
  WorkflowId?: string
  /**
   * 任务id
   */
  TaskId?: string
  /**
   * 任务展示形式, 示例取值
-    classification:分类展示
-    catalog:目录展示
   */
  DisplayType?: string
  /**
   * 是否新模式展示目录树
   */
  NewFolderTreeMode?: boolean
}

/**
 * 获取数据服务API的发布态信息列表响应内容
 */
export interface DescribeDataServicePublishedApiListResp {
  /**
   * 服务id
   */
  Id?: string
  /**
   * 服务Api名称
   */
  ApiName?: string
  /**
   * 所属目录名称
   */
  ApiFolderName?: string
  /**
   * 服务Api标签名称集合
   */
  ApiTagNames?: string
  /**
   * 服务负责人
   */
  OwnerName?: string
  /**
   * 服务创建时间
   */
  CreateTime?: string
  /**
   * Api的id
   */
  ApiId?: string
  /**
   * 服务Api认证方式 0:免认证 1:应用认证
   */
  AuthType?: number
  /**
   * 服务Api状态 0:创建 1:已上线 2:已删除 3:已下线
   */
  ApiStatus?: number
  /**
   * 配置方式 0:向导、1、脚本、2、注册Api
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConfigType?: number
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifyTime?: string
}

/**
 * KillScheduleInstances返回参数结构体
 */
export interface KillScheduleInstancesResponse {
  /**
   * 结果
   */
  Data?: BatchOperateResultOpsDto
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 表的分区数据
 */
export interface TablePartition {
  /**
   * 分区名称
   */
  PartitionName?: string
  /**
   * 分区记录数
   */
  RecordCount?: number
  /**
   * 分区数据存储大小，字节数
   */
  StorageSize?: string
  /**
   * 分区创建时间
   */
  CreateTime?: string
  /**
   * 分区修改时间
   */
  ModifiedTime?: string
  /**
   * 分区数据存储大小，已转为适合的单位
   */
  StorageSizeWithUnit?: string
  /**
   * 文件数
注意：此字段可能返回 null，表示取不到有效值。
   */
  NumFiles?: number
  /**
   * 平均文件大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  AverageFileSizeWithUnit?: string
}

/**
 * DescribeWorkflowTaskCount请求参数结构体
 */
export interface DescribeWorkflowTaskCountRequest {
  /**
   * 工作流列表
   */
  WorkflowId: string
  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * DescribeInstanceList请求参数结构体
 */
export interface DescribeInstanceListRequest {
  /**
   * 项目/工作空间id
   */
  ProjectId: string
  /**
   * 页码
   */
  PageIndex: number
  /**
   * 一页展示的条数
   */
  PageSize: number
  /**
   * 周期列表（如天，一次性），可选
   */
  CycleList: Array<string>
  /**
   * 责任人
   */
  OwnerList: Array<string>
  /**
   * 跟之前保持一致
   */
  InstanceType: string
  /**
   * 排序顺序（asc，desc）
   */
  Sort: string
  /**
   * 排序列（costTime 运行耗时，startTime 开始时间，state 实例状态，curRunDate 数据时间）
   */
  SortCol: string
  /**
   * 类型列表（如python任务类型：30
pyspark任务类型：31
hivesql任务类型：34
shell任务类型：35
sparksql任务类型：36 jdbcsql任务类型：21 dlc任务类型：32），可选
   */
  TaskTypeList: Array<number | bigint>
  /**
   * 状态列表（如成功 2，正在执行 1），可选
   */
  StateList: Array<number | bigint>
  /**
   * 任务名称
   */
  Keyword?: string
}

/**
 * ModifyWorkflowSchedule返回参数结构体
 */
export interface ModifyWorkflowScheduleResponse {
  /**
   * 执行结果
   */
  Data?: BatchResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCustomFunction请求参数结构体
 */
export interface DeleteCustomFunctionRequest {
  /**
   * 集群实例 ID
   */
  ClusterIdentifier?: string
  /**
   * 函数 ID
   */
  FunctionId?: string
  /**
   * 项目ID，必须填
   */
  ProjectId?: string
  /**
   * 函数名称
   */
  FunctionName?: string
  /**
   * 函数类型，HIVE，SPARK，DLC，CDW_POSTGRESQL
   */
  FunctionType?: string
  /**
   * 数据库名
   */
  DatabaseName?: string
  /**
   * 模式名
   */
  SchemaName?: string
  /**
   * 函数命令格式
   */
  CommandFormat?: string
}

/**
 * 试运行记录
 */
export interface DrInstanceOpsDto {
  /**
   * 任务来源
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskSource?: string
  /**
   * 编排空间jobId
注意：此字段可能返回 null，表示取不到有效值。
   */
  JobId?: string
  /**
   * 任务提交记录Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordId?: number
  /**
   * 子任务记录id
注意：此字段可能返回 null，表示取不到有效值。
   */
  SonRecordId?: number
  /**
   * 任务实例Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 编排空间为任务id, 开发空间为脚本id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 脚本cos地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  RemotePath?: string
  /**
   * 试运行内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScriptContent?: string
  /**
   * 任务提交时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 任务启动时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 运行时长(秒)
注意：此字段可能返回 null，表示取不到有效值。
   */
  Duration?: string
  /**
   * 试运行状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 编排空间为任务名称，开发空间为脚本名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskName?: string
  /**
   * 试运行提交人
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubmitUserName?: string
  /**
   * 试运行提交人userId
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubmitUserId?: string
  /**
   * 任务类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskType?: string
  /**
   * 是否含有结果集
注意：此字段可能返回 null，表示取不到有效值。
   */
  HasResultSet?: boolean
}

/**
 * 实例日志简述信息
 */
export interface InstanceLogInfo {
  /**
   * 任务id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 数据时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CurRunDate?: string
  /**
   * 尝试运行次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tries?: string
  /**
   * 日志更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastUpdate?: string
  /**
   * 日志所在节点
注意：此字段可能返回 null，表示取不到有效值。
   */
  BrokerIp?: string
  /**
   * 文件大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileSize?: string
  /**
   * 文件名 含全路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  OriginFileName?: string
  /**
   * 日志创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 实例日志类型, run: 运行; kill: 终止
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceLogType?: string
  /**
   * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskName?: string
  /**
   * 运行耗时
注意：此字段可能返回 null，表示取不到有效值。
   */
  CostTime?: string
  /**
   * 实例状态 COMPLETED 完成 FAILED失败重试 EXPIRED失败 RUNNING运行中
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceStatus?: string
  /**
   * 实例代码文件，为空表示对应代码文件不存在，可能是因为执行机未升级/对应类型任务无代码。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CodeFileName?: string
  /**
   * 扩展属性
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtensionInfo?: Array<AttributeItemDTO>
  /**
   * 统一执行平台，下发执行Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutionJobId?: string
}

/**
 * GetFileInfo请求参数结构体
 */
export interface GetFileInfoRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 文件路径
项目区1470575647377821696项目，f1目录下： /datastudio/project/1470575647377821696/f1/sql1234.sql 个人区： /datastudio/personal/sqlTTT.sql
   */
  FilePath: string
}

/**
 * 表血缘详细信息
 */
export interface TableLineageBaseInfo {
  /**
   * 元数据类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetastoreType: string
  /**
   * 由中心节点到该节点的路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrefixPath: string
  /**
   * 空间id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * 数据源id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceId?: string
  /**
   * 表id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableId?: string
  /**
   * 表血缘参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Params?: Array<LineageParamRecord>
  /**
   * 父节点列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentSet?: string
  /**
   * 子节点列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChildSet?: string
  /**
   * 额外参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtParams?: Array<RecordField>
  /**
   * 血缘id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * 元数据类型名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetastoreTypeName?: string
  /**
   * 表名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableName?: string
  /**
   * 表全称
注意：此字段可能返回 null，表示取不到有效值。
   */
  QualifiedName?: string
  /**
   * 血缘下游节点数
注意：此字段可能返回 null，表示取不到有效值。
   */
  DownStreamCount?: number
  /**
   * 血缘上游节点数
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpStreamCount?: number
  /**
   * 血缘描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 血缘创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 血缘更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifyTime?: string
  /**
   * 修改血缘的任务id列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tasks?: Array<string>
}

/**
 * 离线运维实例列表
 */
export interface InstanceList {
  /**
   * 耗费时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CostTime?: string
  /**
   * 数据时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CurRunDate?: string
  /**
   * 周期类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleType?: string
  /**
   * 是否补录
注意：此字段可能返回 null，表示取不到有效值。
   */
  DoFlag?: number
  /**
   * 责任人
注意：此字段可能返回 null，表示取不到有效值。
   */
  InCharge?: string
  /**
   * 日志
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastLog?: string
  /**
   * 调度计划
注意：此字段可能返回 null，表示取不到有效值。
   */
  SchedulerDesc?: string
  /**
   * 开始启动时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 实例状态  EVENT_LISTENING|DEPENDENCE|BEFORE_ASPECT|ALLOCATED|LAUNCHED|KILL|SNAP_STATE_SAVING|ISSUED|RUNNING|AFTER_ASPECT|PENDING|KILLING|FINAL_STATE_SAVING|FAILED|KILL_FAILED| COMPLETED|EXPIRED|KILL_EXPIRED|DELETED
注意：此字段可能返回 null，表示取不到有效值。
   */
  State?: string
  /**
   * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskName?: string
  /**
   * 尝试运行次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TryLimit?: number
}

/**
 * 项目下的用户集合
 */
export interface ProjectUsersPage {
  /**
   * 用户集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  Rows: Array<ProjectUserRole>
  /**
   * 分页大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize: number
  /**
   * 分页页码
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber: number
  /**
   * 总数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount: number
  /**
   * 总分页页码
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPageNumber: number
}

/**
 * 数据质量自定义规则时的sql表达式解析表对象
 */
export interface SqlExpressionTable {
  /**
   * sql表达式表名
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableExpression?: string
  /**
   * sql表达式字段名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColumnExpression?: Array<string>
}

/**
 * 通用排序字段
 */
export interface OrderFieldOptional {
  /**
   * 排序字段名称
   */
  Name?: string
  /**
   * 排序方向：ASC|DESC
   */
  Direction?: string
}

/**
 * DryRunDIOfflineTask请求参数结构体
 */
export interface DryRunDIOfflineTaskRequest {
  /**
   * 任务Id
   */
  TaskId: string
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 资源组Id
   */
  ResourceGroup?: string
  /**
   * 默认 27
   */
  TaskTypeId?: number
}

/**
 * CreateOfflineTask请求参数结构体
 */
export interface CreateOfflineTaskRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 间隔，可选，默认1。非空。默认 1
   */
  CycleStep: number
  /**
   * 延时执行时间，单位分钟
   */
  DelayTime: number
  /**
   * 任务结束数据时间。非空。默认当前时间
   */
  EndTime: string
  /**
   * 备注
   */
  Notes: string
  /**
   * 当前日期
   */
  StartTime: string
  /**
   * 任务名称
   */
  TaskName: string
  /**
   * 跟之前调用调度接口保持一致27
   */
  TypeId: number
  /**
   * 时间指定，如月任务指定1，3号，则填入 1，3。非空。默认 "" 月任务：如具体1，3号则写 "1,3"，指定月末不可和具体号数一起输入，仅能为 "L"
   */
  TaskAction: string
  /**
   * 区分画布和表单
   */
  TaskMode: string
  /**
   * 导入编排空间配置
   */
  TaskImportInfo?: TaskImportInfo
}

/**
 * DescribeIntegrationStatisticsRecordsTrend返回参数结构体
 */
export interface DescribeIntegrationStatisticsRecordsTrendResponse {
  /**
   * 统计结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  TrendsData?: Array<IntegrationStatisticsTrendResult>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 事件详情
 */
export interface EventOpsDto {
  /**
   * 事件名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 事件类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventType?: string
  /**
   * 事件分割类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventSubType?: string
  /**
   * 事件广播类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventBroadcastType?: string
  /**
   * 数据时间格式
注意：此字段可能返回 null，表示取不到有效值。
   */
  DimensionFormat?: string
  /**
   * 存活时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeToLive?: number
  /**
   * 存活时间单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeUnit?: string
  /**
   * 创建时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreationTimestamp?: string
  /**
   * 所属者
注意：此字段可能返回 null，表示取不到有效值。
   */
  Owner?: string
  /**
   * 属性
注意：此字段可能返回 null，表示取不到有效值。
   */
  Properties?: string
  /**
   * 描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 监听器
注意：此字段可能返回 null，表示取不到有效值。
   */
  Listeners?: Array<EventListenerOpsDto>
  /**
   * 事件案例
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventCases?: Array<EventCaseOpsDto>
}

/**
 * 文件夹分页信息
 */
export interface DescribeFolderWorkflowListData {
  /**
   * 工作流信息列表
   */
  Items: Array<Workflow>
  /**
   * 总条数
   */
  TotalCount: number
  /**
   * 页号
   */
  PageNumber: number
  /**
   * 页大小
   */
  PageSize: number
}

/**
 * 运维大屏任务展示
 */
export interface ScreenTaskInfo {
  /**
   * 统计标示 0：全部、1：当前天、2：昨天
   */
  CountTag?: number
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalNum?: number
  /**
   * 运行中
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunningNum?: number
  /**
   * 停止中
注意：此字段可能返回 null，表示取不到有效值。
   */
  StoppingNum?: number
  /**
   * 已停止
注意：此字段可能返回 null，表示取不到有效值。
   */
  StoppedNum?: number
  /**
   * 暂停
注意：此字段可能返回 null，表示取不到有效值。
   */
  FrozenNum?: number
  /**
   * 无效任务数
注意：此字段可能返回 null，表示取不到有效值。
   */
  InvalidNum?: number
  /**
   * 年任务
注意：此字段可能返回 null，表示取不到有效值。
   */
  YearNum?: number
  /**
   * 月任务
注意：此字段可能返回 null，表示取不到有效值。
   */
  MonthNum?: number
  /**
   * 周任务
注意：此字段可能返回 null，表示取不到有效值。
   */
  WeekNum?: number
  /**
   * 天任务
注意：此字段可能返回 null，表示取不到有效值。
   */
  DayNum?: number
  /**
   * 小时任务
注意：此字段可能返回 null，表示取不到有效值。
   */
  HourNum?: number
  /**
   * 分钟任务
注意：此字段可能返回 null，表示取不到有效值。
   */
  MinuteNum?: number
}

/**
 * 规则表变量替换
 */
export interface TableConfig {
  /**
   * 数据库Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseId?: string
  /**
   * 数据库名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseName?: string
  /**
   * 表Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableId?: string
  /**
   * 表名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableName?: string
  /**
   * 表Key
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableKey?: string
  /**
   * 字段变量
注意：此字段可能返回 null，表示取不到有效值。
   */
  FieldConfig?: Array<FieldConfig>
}

/**
 * 通用过滤器
 */
export interface FilterOptional {
  /**
   * 过滤字段名称
   */
  Name?: string
  /**
   * 过滤值列表
   */
  Values?: Array<string>
}

/**
 * 任务实例状态统计
 */
export interface TaskInstanceCountDto {
  /**
   * 成功的实例数
   */
  Success: number
  /**
   * 执行中实例数
   */
  Running: number
  /**
   * 等待中的实例数
   */
  Waiting: number
  /**
   * 等待上游实例数
   */
  Depend: number
  /**
   * 失败实例数
   */
  Failed: number
  /**
   * 永久终止实例数
   */
  Stopped: number
}

/**
 * DescribePendingSubmitTaskList返回参数结构体
 */
export interface DescribePendingSubmitTaskListResponse {
  /**
   * 待提交任务信息
   */
  Data?: Array<DescribePendingSubmitTaskInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BatchForceSuccessIntegrationTaskInstances返回参数结构体
 */
export interface BatchForceSuccessIntegrationTaskInstancesResponse {
  /**
   * 操作成功的任务数
   */
  SuccessCount?: number
  /**
   * 操作失败的任务数
   */
  FailedCount?: number
  /**
   * 任务总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例生命周期详情
 */
export interface InstanceLifeCycleOpsDto {
  /**
   * 任务id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 任务名
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskName?: string
  /**
   * 数据时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CurRunDate?: string
  /**
   * 实例生命次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  LifeRound?: number
  /**
   * 运行类型 重跑/补录/周期/非周期
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunType?: string
  /**
   * 重跑次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tries?: number
  /**
   * 实例生命周期
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceLifeDetailDtoList?: Array<InstanceLifeDetailDto>
  /**
   * Runner运行状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunnerState?: string
  /**
   * 错误码
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorDesc?: string
  /**
   * 错误告警级别
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorCodeLevel?: string
  /**
   * 实例日志简略信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceLogListOpsDto?: InstanceLogInfo
  /**
   * 实例状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceState?: string
  /**
   * 调度运行方式, 0: 周期调度, 1: 空跑调度
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScheduleRunType?: number
  /**
   * 统一执行平台，下发执行Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutionJobId?: string
  /**
   * 实例运行类型: 0: 普通运行, 1: 空跑运行
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceRunType?: number
  /**
   * 实例当前总生命周期数
   */
  TotalLifeRound?: number
  /**
   * 任务类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskType?: TaskTypeOpsDto
}

/**
 * 告警接收人详情
 */
export interface AlarmReceiverInfo {
  /**
   * 告警ID
   */
  AlarmId: string
  /**
   * 告警接收人ID
   */
  AlarmReceiver: string
  /**
   * 邮件，0：未设置，1：成功，2：失败
   */
  Email: number
  /**
   * 短信，0：未设置，1：成功，2：失败
   */
  Sms: number
  /**
   * 微信，0：未设置，1：成功，2：失败
   */
  Wechat: number
  /**
   * 电话，0：未设置，1：成功，2：失败
   */
  Voice: number
  /**
   * 企业微信，0：未设置，1：成功，2：失败
   */
  Wecom: number
  /**
   * http，0：未设置，1：成功，2：失败
   */
  Http: number
  /**
   * 企业微信群，0：未设置，1：成功，2：失败
注意：此字段可能返回 null，表示取不到有效值。
   */
  WecomGroup?: number
  /**
   * 飞书群，0：未设置，1：成功，2：失败
注意：此字段可能返回 null，表示取不到有效值。
   */
  LarkGroup?: number
}

/**
 * Spark SQL配置参数
 */
export interface GeneralTaskParam {
  /**
   * 通用任务参数类型,例：SPARK_SQL
   */
  Type: string
  /**
   * 通用任务参数内容,直接作用于任务的参数。不同参数用;
分割
   */
  Value: string
}

/**
 * DescribeTableBasicInfo返回参数结构体
 */
export interface DescribeTableBasicInfoResponse {
  /**
   * 表元数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableBasicInfoList?: Array<TableBasicInfo>
  /**
   * 总条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 工作流调度信息
 */
export interface WorkflowScheduleDtoDs {
  /**
   * 项目ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * 工作流ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowId?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 创建人
注意：此字段可能返回 null，表示取不到有效值。
   */
  Creater?: string
  /**
   * 修改时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifyTime?: string
  /**
   * 延迟时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  DelayTime?: number
  /**
   * 启动时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartupTime?: number
  /**
   * 任务依赖
注意：此字段可能返回 null，表示取不到有效值。
   */
  SelfDepend?: string
  /**
   * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 指定运行时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskAction?: string
  /**
   * 调度周期时间单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleType?: string
  /**
   * 调度周期
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleStep?: number
  /**
   * Cron表达式
注意：此字段可能返回 null，表示取不到有效值。
   */
  CrontabExpression?: string
  /**
   * 执行时间左闭区间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutionStartTime?: string
  /**
   * 执行时间右闭区间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutionEndTime?: string
  /**
   * 实例初始化策略
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceInitStrategy?: string
  /**
   * 工作流依赖
注意：此字段可能返回 null，表示取不到有效值。
   */
  DependencyWorkflow?: string
  /**
   * 调度计划
注意：此字段可能返回 null，表示取不到有效值。
   */
  SchedulerDesc?: string
  /**
   * 工作流首次提交时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  FirstSubmitTime?: string
  /**
   * 工作流最近提交时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LatestSubmitTime?: string
  /**
   * 日历调度是否开启
注意：此字段可能返回 null，表示取不到有效值。
   */
  CalendarOpen?: string
  /**
   * 日历调度名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  CalendarName?: string
  /**
   * 日历调度id
注意：此字段可能返回 null，表示取不到有效值。
   */
  CalendarId?: string
}

/**
 * ModifyRuleTemplate请求参数结构体
 */
export interface ModifyRuleTemplateRequest {
  /**
   * 模板ID
   */
  TemplateId?: number
  /**
   * 模板类型  1.系统模板   2.自定义模板
   */
  Type?: number
  /**
   * 模板名称
   */
  Name?: string
  /**
   * 质量检测维度 1.准确性 2.唯一性 3.完整性 4.一致性 5.及时性 6.有效性
   */
  QualityDim?: number
  /**
   * 源端数据对象类型 1.常量  2.离线表级   2.离线字段级
   */
  SourceObjectType?: number
  /**
   * 描述
   */
  Description?: string
  /**
   * 源端对应的引擎类型
   */
  SourceEngineTypes?: Array<number | bigint>
  /**
   * 是否关联其它库表
   */
  MultiSourceFlag?: boolean
  /**
   * SQL 表达式
   */
  SqlExpression?: string
  /**
   * 项目Id
   */
  ProjectId?: string
  /**
   * 是否添加where参数
   */
  WhereFlag?: boolean
}

/**
 * DescribeRuleExecStat返回参数结构体
 */
export interface DescribeRuleExecStatResponse {
  /**
   * 结果
   */
  Data?: RuleExecStat
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 周期单位统计
 */
export interface TaskByCycle {
  /**
   * num
注意：此字段可能返回 null，表示取不到有效值。
   */
  Number?: number
  /**
   * 周期单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleUnit?: string
  /**
   * 项目ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
}

/**
 * DagInstances返回参数结构体
 */
export interface DagInstancesResponse {
  /**
   * 结果
   */
  Data?: CollectionInstanceOpsDto
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 维度评分
 */
export interface DimensionScore {
  /**
   * 维度评分列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  DimensionScoreList: Array<DimensionScoreInfo>
}

/**
 * 群机器人订阅配置
 */
export interface SubscribeWebHook {
  /**
   * 群机器人类型，当前支持飞书
注意：此字段可能返回 null，表示取不到有效值。
   */
  HookType?: string
  /**
   * 群机器人webhook地址，配置方式参考https://cloud.tencent.com/document/product/1254/70736
注意：此字段可能返回 null，表示取不到有效值。
   */
  HookAddress?: string
}

/**
 * DescribeTableLineageInfo请求参数结构体
 */
export interface DescribeTableLineageInfoRequest {
  /**
   * 查询方向，INPUT,OUTPUT,BOTH枚举值
   */
  Direction: string
  /**
   * 表信息
   */
  Data: TableLineageInfo
  /**
   * 单次查询入度,默认 1
   */
  InputDepth?: number
  /**
   * 单次查询出度,默认 1
   */
  OutputDepth?: number
  /**
   * 额外参数（传递调用方信息）
   */
  ExtParams?: Array<LineageParamRecord>
  /**
   * 是否过滤临时表,默认true
   */
  IgnoreTemp?: boolean
  /**
   * 是否递归查询二级节点数目，默认为true
   */
  RecursiveSecond?: boolean
}

/**
 * CreateTaskFolder请求参数结构体
 */
export interface CreateTaskFolderRequest {
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 文件夹名称
   */
  FolderName: string
  /**
   * 工作流ID
   */
  WorkflowId: string
  /**
   * 父文件夹ID
   */
  ParentFolderId?: string
  /**
   * 目录分类，该值必传，枚举值如下：
ETL：数据集成
EMR：EMR
TBDS：TBDS
DLC：DLC
TDSQL：TDSQL
TCHOUSE：TCHOUSE
GENERAL：通用
TI_ONE：TI-ONE机器学习
ACROSS_WORKFLOWS：跨工作流
   */
  TaskNodeType?: string
}

/**
 * 集成节点详情
 */
export interface IntegrationNodeDetail {
  /**
   * 集成节点名称
   */
  Name?: string
  /**
   * 集成节点类型
   */
  NodeType?: string
  /**
   * 节点数据源类型
   */
  DataSourceType?: string
  /**
   * 节点描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 数据源id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceId?: string
  /**
   * 节点配置信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Config?: Array<RecordField>
  /**
   * 节点扩展配置信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtConfig?: Array<RecordField>
  /**
   * 节点schema
注意：此字段可能返回 null，表示取不到有效值。
   */
  Schema?: Array<IntegrationNodeSchema>
  /**
   * 节点映射
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeMapping?: IntegrationNodeMapping
  /**
   * owner uin
   */
  OwnerUin?: string
}

/**
 * DescribeEvent返回参数结构体
 */
export interface DescribeEventResponse {
  /**
   * 事件
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: EventOpsDto
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOpsMakePlanInstances请求参数结构体
 */
export interface DescribeOpsMakePlanInstancesRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 补录计划ID
   */
  PlanId: string
  /**
   * 补录任务ID
   */
  TaskId: string
  /**
   * 分页页码，默认值1
   */
  PageNumber?: number
  /**
   * 分页大小，默认值10
   */
  PageSize?: number
  /**
   * 实例状态列表
   */
  StateList?: Array<number | bigint>
}

/**
 * GenHiveTableDDLSql请求参数结构体
 */
export interface GenHiveTableDDLSqlRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 目标数据库
   */
  SinkDatabase: string
  /**
   * 节点id
   */
  Id?: string
  /**
   * 元数据类型(MYSQL、ORACLE)
   */
  MsType?: string
  /**
   * 数据源id
   */
  DatasourceId?: string
  /**
   * 来源库名
   */
  SourceDatabase?: string
  /**
   * 来源表名
   */
  TableName?: string
  /**
   * 目标表元数据类型(HIVE、GBASE)
   */
  SinkType?: string
  /**
   * 源端schema名称
   */
  SchemaName?: string
  /**
   * 上游节点的字段信息
   */
  SourceFieldInfoList?: Array<SourceFieldInfo>
  /**
   * 分区字段
   */
  Partitions?: Array<Partition>
  /**
   * 建表属性
   */
  Properties?: Array<Property>
  /**
   * 建表模式，0:向导模式，1:ddl
   */
  TableMode?: number
  /**
   * DLC表版本，v1/v2
   */
  TableVersion?: string
  /**
   * 是否upsert写入
   */
  UpsertFlag?: boolean
  /**
   * 表描述信息
   */
  TableComment?: string
  /**
   * 增加的文件数量阈值, 超过值将触发小文件合并
   */
  AddDataFiles?: number
  /**
   * 增加的Equality delete数量阈值, 超过值将触发小文件合并
   */
  AddEqualityDeletes?: number
  /**
   * 增加的Position delete数量阈值, 超过值将触发小文件合并
   */
  AddPositionDeletes?: number
  /**
   * 增加的delete file数量阈值
   */
  AddDeleteFiles?: number
  /**
   * 下游节点数据源ID
   */
  TargetDatasourceId?: string
  /**
   * dlc upsert主键
   */
  UpsertKeys?: Array<string>
  /**
   * dlc表治理信息
   */
  TableBaseInfo?: TableBaseInfo
  /**
   * 目标端schema名称
   */
  SinkSchemaName?: string
  /**
   * 获取源信息的环境
   */
  Env?: string
}

/**
 * BatchCreateIntegrationTaskAlarms请求参数结构体
 */
export interface BatchCreateIntegrationTaskAlarmsRequest {
  /**
   * 任务id
   */
  TaskIds: Array<string>
  /**
   * 告警配置信息
   */
  TaskAlarmInfo: TaskAlarmInfo
  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * 质量评分
 */
export interface QualityScore {
  /**
   * 综合分数
注意：此字段可能返回 null，表示取不到有效值。
   */
  CompositeScore: number
  /**
   * 评分分布
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScoringDistribution: Array<TableScoreStatisticsInfo>
  /**
   * 总表数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalTableNumber: number
}

/**
 * LockIntegrationTask返回参数结构体
 */
export interface LockIntegrationTaskResponse {
  /**
   * 操作成功与否标识
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * KillScheduleInstances请求参数结构体
 */
export interface KillScheduleInstancesRequest {
  /**
   * 实例列表
   */
  Instances?: Array<InstanceOpsDto>
  /**
   * 检查父任务类型, true: 检查父任务; false: 不检查父任务
   */
  CheckFather?: boolean
  /**
   * 重跑类型, 1: 自身; 3: 孩子; 2: 自身以及孩子
   */
  RerunType?: string
  /**
   * 实例依赖方式, 1: 自依赖; 2: 任务依赖; 3: 自依赖及父子依赖
   */
  DependentWay?: string
  /**
   * 重跑忽略事件监听与否
   */
  SkipEventListening?: boolean
  /**
   * 下游实例范围 1: 所在工作流 2: 所在项目 3: 所有跨工作流依赖的项目
   */
  SonInstanceType?: string
  /**
   * 查询条件
   */
  SearchCondition?: InstanceApiOpsRequest
  /**
   * 访问类型
   */
  OptType?: string
  /**
   * 操作者名称
   */
  OperatorName?: string
  /**
   * 操作者id
   */
  OperatorId?: string
  /**
   * 项目id
   */
  ProjectId?: string
  /**
   * 项目标志
   */
  ProjectIdent?: string
  /**
   * 项目名称
   */
  ProjectName?: string
  /**
   * 索引页码
   */
  PageIndex?: number
  /**
   * 页面大小
   */
  PageSize?: number
  /**
   * 数据总数
   */
  Count?: number
  /**
   * 基础请求信息
   */
  RequestBaseInfo?: ProjectBaseInfoOpsRequest
  /**
   * 是否计算总数
   */
  IsCount?: boolean
  /**
   * 是否异步模式
   */
  AsyncMode?: boolean
}

/**
 * 查询实例条件(新)
 */
export interface SearchConditionNew {
  /**
   * 查询框架，必选
   */
  Instance: SearchConditionInstanceNew
  /**
   * 查询关键字（任务Id精确匹配，任务名称模糊匹配），可选
   */
  Keyword?: string
  /**
   * 排序顺序（asc，desc）
   */
  Sort?: string
  /**
   * 排序列（costTime 运行耗时，startTime 开始时间，state 实例状态，curRunDate 数据时间）
   */
  SortCol?: string
}

/**
 * BatchStopOpsTasks请求参数结构体
 */
export interface BatchStopOpsTasksRequest {
  /**
   * 批量停止任务的TaskId
   */
  TaskIdList: Array<string>
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 是否终止已生成的实例
   */
  KillInstance?: boolean
  /**
   * 是否异步模式
   */
  AsyncMode?: boolean
}

/**
 * DescribeFunctionTypes返回参数结构体
 */
export interface DescribeFunctionTypesResponse {
  /**
   * 类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Types?: Array<FunctionTypeOrKind>
  /**
   * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMessage?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRuleTemplate返回参数结构体
 */
export interface ModifyRuleTemplateResponse {
  /**
   * 修改成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RenewWorkflowSchedulerInfoDs返回参数结构体
 */
export interface RenewWorkflowSchedulerInfoDsResponse {
  /**
   * 数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: BatchResultDs
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 待提交任务信息
 */
export interface DescribePendingSubmitTaskInfo {
  /**
   * 任务编号
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskName?: string
  /**
   * 修改类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifyType?: string
  /**
   * 任务状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskStatus?: string
  /**
   * 提交预检查（Y/N）
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubmitPreCheck?: string
  /**
   * 提交预检查提交可能会失败的原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubmitPreCheckDetailList?: Array<TaskSubmitPreCheckDetailInfo>
  /**
   * 资源组编号
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutorGroupId?: string
  /**
   * 资源组名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutorGroupName?: string
}

/**
 * BatchUpdateIntegrationTasks返回参数结构体
 */
export interface BatchUpdateIntegrationTasksResponse {
  /**
   * 操作成功的任务数
   */
  SuccessCount?: number
  /**
   * 操作失败的任务数
   */
  FailedCount?: number
  /**
   * 任务总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TaskLog返回参数结构体
 */
export interface TaskLogResponse {
  /**
   * 任务详细日志
   */
  LogContentList?: Array<LogContent>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据集成 - 告警免打扰时间
 */
export interface QuietPeriod {
  /**
   * 代表一周里的哪些天，1代表周一，7代表周日，以此类推
注意：此字段可能返回 null，表示取不到有效值。
   */
  DaysOfWeek?: Array<number | bigint>
  /**
   * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
}

/**
 * 子任务记录
 */
export interface AdhocDetail {
  /**
   * 子任务记录Id
   */
  Id?: number
  /**
   * 脚本内容
   */
  ScriptContent?: string
  /**
   * 任务启动时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 任务结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 当前任务状态
   */
  Status?: string
  /**
   * 提交任务id
   */
  RecordId?: number
}

/**
 * DescribeInstanceLastLog请求参数结构体
 */
export interface DescribeInstanceLastLogRequest {
  /**
   * 任务id
   */
  TaskId: string
  /**
   * 数据时间
   */
  CurRunDate: string
}

/**
 * DescribeEvent请求参数结构体
 */
export interface DescribeEventRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 事件名称
   */
  EventName: string
}

/**
 * 表质量分分页结果
 */
export interface TableQualityDetailPage {
  /**
   * 总条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount: number
  /**
   * 表质量列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items: Array<TableQualityDetail>
}

/**
 * BatchCreateTaskVersionAsync请求参数结构体
 */
export interface BatchCreateTaskVersionAsyncRequest {
  /**
   * 任务信息
   */
  Tasks: Array<BatchCreateTaskVersionDTO>
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 是否自动运行
   */
  AutoRun?: boolean
  /**
   * 告警方式:email-邮件;sms-短信;wecom-企业微信
   */
  AlarmWays?: string
  /**
   * 告警对象:1-项目管理员，2-任务责任人
   */
  AlarmRecipientTypes?: string
  /**
   * 是否需要校验父任务已经提交到调度
   */
  NeedCheckParentSubmitted?: boolean
}

/**
 * 任务类型基本信息
 */
export interface TaskTypeOpsDto {
  /**
   * 任务类型描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  TypeDesc?: string
  /**
   * 任务类型id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TypeId?: number
  /**
   * 任务类型归类
注意：此字段可能返回 null，表示取不到有效值。
   */
  TypeSort?: string
}

/**
 * BatchModifyOpsOwners返回参数结构体
 */
export interface BatchModifyOpsOwnersResponse {
  /**
   * 返回批量操作成功个数、失败个数、操作总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: BatchOperationOpsDto
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTaskAlarmRegular返回参数结构体
 */
export interface CreateTaskAlarmRegularResponse {
  /**
   * 告警ID
   */
  AlarmId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRuleTemplate请求参数结构体
 */
export interface DeleteRuleTemplateRequest {
  /**
   * 项目Id
   */
  ProjectId?: string
  /**
   * 模板Id列表
   */
  Ids?: Array<number | bigint>
}

/**
 * DescribeOpsMakePlanTasks请求参数结构体
 */
export interface DescribeOpsMakePlanTasksRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 补录计划ID
   */
  PlanId: string
  /**
   * 实例状态过滤条件
   */
  StateList?: Array<number | bigint>
  /**
   * 分页页码，默认值1
   */
  PageNumber?: number
  /**
   * 分页大小，默认值10
   */
  PageSize?: number
}

/**
 * 任务实例基本信息
 */
export interface TaskVersionInstance {
  /**
   * 实例版本号
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceVersion?: number
  /**
   * 实例描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  VersionDesc?: string
  /**
   * 0, "新增"，1, "修改"
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChangeType?: number
  /**
   * 版本提交人UIN
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubmitterUin?: string
  /**
   * 提交日期
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceDate?: string
  /**
   * 0, "未启用"，1, "启用(生产态)"
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceStatus?: number
}

/**
 * 元数据表详细信息
 */
export interface TableInfo {
  /**
   * 表Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableId?: string
  /**
   * 表名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableName?: string
  /**
   * 表类型，view/table
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableType?: string
  /**
   * 表databaseName
注意：此字段可能返回 null，表示取不到有效值。
   */
  OriginDatabaseName?: string
  /**
   * 表schemaName
注意：此字段可能返回 null，表示取不到有效值。
   */
  OriginSchemaName?: string
}

/**
 * DescribeProject请求参数结构体
 */
export interface DescribeProjectRequest {
  /**
   * 项目id。一般使用项目Id来查询，与projectName必须存在一个。
   */
  ProjectId?: string
  /**
   * 是否展示关联集群信息
   */
  DescribeClusters?: boolean
  /**
   * 是否展示关联执行组的信息，仅部分信息。
   */
  DescribeExecutors?: boolean
  /**
   * 默认不展示项目管理员信息
   */
  DescribeAdminUsers?: boolean
  /**
   * 默认不统计项目人员数量
   */
  DescribeMemberCount?: boolean
  /**
   * 默认不查询创建者的信息
   */
  DescribeCreator?: boolean
  /**
   * 项目名只在租户内唯一，一般用来转化为项目ID。
   */
  ProjectName?: string
}

/**
 * CreateIntegrationTask返回参数结构体
 */
export interface CreateIntegrationTaskResponse {
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
 * DescribeIntegrationTasks返回参数结构体
 */
export interface DescribeIntegrationTasksResponse {
  /**
   * 任务列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskInfoSet?: Array<IntegrationTaskInfo>
  /**
   * 任务总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteProjectUsers返回参数结构体
 */
export interface DeleteProjectUsersResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAlarmReceiver请求参数结构体
 */
export interface DescribeAlarmReceiverRequest {
  /**
   * 告警ID
   */
  AlarmId: string
  /**
   * 当前页
   */
  PageNumber: number
  /**
   * 每页记录数
   */
  PageSize: number
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 类型
   */
  TaskType?: number
  /**
   * 告警接收人ID(逗号分隔)
   */
  AlarmRecipient?: string
  /**
   * 告警接收人姓名(逗号分隔)
   */
  AlarmRecipientName?: string
  /**
   * 告警时间
   */
  AlarmTime?: string
  /**
   * 消息ID
   */
  MessageId?: string
  /**
   * 告警记录id
   */
  RecordId?: number
  /**
   * 监控对象类型(1:所有任务,2:指定任务,3:指定责任人,4:指定资源组)
   */
  MonitorType?: number
}

/**
 * DescribeStatisticInstanceStatusTrendOps返回参数结构体
 */
export interface DescribeStatisticInstanceStatusTrendOpsResponse {
  /**
   * 实例状态统计结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<InstanceStatisticInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集成离线任务实例信息
 */
export interface SchedulerTaskInstanceInfo {
  /**
   * 任务id
   */
  TaskId: string
  /**
   * 实例运行时间
   */
  CurRunDate: string
}

/**
 * DescribeSchedulerTaskCntByStatus返回参数结构体
 */
export interface DescribeSchedulerTaskCntByStatusResponse {
  /**
   * 统计结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<ScreenTaskInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务扩展信息
 */
export interface TaskExtInfo {
  /**
   * 键
   */
  Key?: string
  /**
   * 值
   */
  Value?: string
}

/**
 * ModifyWorkflowInfo请求参数结构体
 */
export interface ModifyWorkflowInfoRequest {
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 工作流id
   */
  WorkflowId: string
  /**
   * 责任人
   */
  Owner?: string
  /**
   * 责任人id
   */
  OwnerId?: string
  /**
   * 备注
   */
  WorkflowDesc?: string
  /**
   * 工作流名称
   */
  WorkflowName?: string
  /**
   * 所属文件夹id
   */
  FolderId?: string
  /**
   * 工作流所属用户分组id  若有多个,分号隔开: a;b;c
   */
  UserGroupId?: string
  /**
   * 工作流所属用户分组名称  若有多个,分号隔开: a;b;c
   */
  UserGroupName?: string
  /**
   * 工作流参数列表
   */
  WorkflowParams?: Array<ParamInfo>
  /**
   * 用于配置优化参数（线程、内存、CPU核数等），仅作用于Spark SQL节点。多个参数用英文分号分隔。
   */
  GeneralTaskParams?: Array<GeneralTaskParam>
}

/**
 * 补录计划
 */
export interface MakePlanOpsDto {
  /**
   * 补录计划ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  PlanId?: string
  /**
   * 补录计划名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  MakeName?: string
  /**
   * 项目ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * 补录是否检查父任务状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  CheckParent?: boolean
  /**
   * 是否使用任务原有自依赖配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  SameSelfDependType?: boolean
  /**
   * 并行度，在SameSelfDependType为false时生效
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParallelNum?: number
  /**
   * 补录实例生成周期是否修改
注意：此字段可能返回 null，表示取不到有效值。
   */
  SameCycle?: boolean
  /**
   * 调度周期转换方式-原始周期类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceTaskCycle?: string
  /**
   * 调度周期转换方式-目标周期类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetTaskCycle?: string
  /**
   * 调度周期转换方式-目标周期类型指定时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetTaskAction?: number
  /**
   * 补录实例自定义参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MapParamList?: Array<StrToStrMap>
  /**
   * 创建人ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatorId?: string
  /**
   * 创建人
注意：此字段可能返回 null，表示取不到有效值。
   */
  Creator?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 补录任务ID集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskIdList?: Array<string>
  /**
   * 补录计划日期范围
注意：此字段可能返回 null，表示取不到有效值。
   */
  MakeDatetimeList?: Array<CreateMakeDatetimeInfo>
  /**
   * 补录计划说明
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
  /**
   * 补录指定的调度资源组（ID）
注意：此字段可能返回 null，表示取不到有效值。
   */
  SchedulerResourceGroup?: string
  /**
   * 补录指定的调度资源组名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SchedulerResourceGroupName?: string
  /**
   * 补录指定的集成资源组（ID）
注意：此字段可能返回 null，表示取不到有效值。
   */
  IntegrationResourceGroup?: string
  /**
   * 补录指定的集成资源组名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  IntegrationResourceGroupName?: string
  /**
   * 补录计划任务数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskCount?: number
  /**
   * 补录计划实例完成百分数
注意：此字段可能返回 null，表示取不到有效值。
   */
  CompletePercent?: number
  /**
   * 补录计划实例成功百分数
注意：此字段可能返回 null，表示取不到有效值。
   */
  SuccessPercent?: number
  /**
   * 补录检查父任务类型。取值范围：
<li> NONE: 全部不检查 </li>
<li> ALL: 检查全部上游父任务 </li>
<li> MAKE_SCOPE: 只在（当前补录计划）选中任务中检查 </li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CheckParentType?: string
  /**
   * 是否和原任务保持相同工作流自依赖属性
注意：此字段可能返回 null，表示取不到有效值。
   */
  SameSelfWorkflowDependType?: boolean
  /**
   * 工作流自依赖类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  SelfWorkflowDependency?: string
  /**
   * 补录时间顺序
NORMAL： 正常
ORDER ： 按照实例时间顺序执行
REVERSE： 实例数据时间逆序
   */
  MakeDataTimeOrder?: string
}

/**
 * DescribeBatchOperateTask返回参数结构体
 */
export interface DescribeBatchOperateTaskResponse {
  /**
   * 无
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: DescribeBatchOperateTaskPage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartIntegrationTask返回参数结构体
 */
export interface StartIntegrationTaskResponse {
  /**
   * 操作成功与否标识
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 提交工作流实体
 */
export interface SubmitWorkflow {
  /**
   * 被提交的任务id集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskIds: Array<string>
  /**
   * 执行结果
   */
  Result: boolean
  /**
   * 执行情况备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorDesc: string
  /**
   * 执行情况id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorId: string
}

/**
 * BatchResumeIntegrationTasks请求参数结构体
 */
export interface BatchResumeIntegrationTasksRequest {
  /**
   * 任务id
   */
  TaskIds: Array<string>
  /**
   * 任务类型, 201为实时任务，202为离线任务
   */
  TaskType: number
  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * 操作返回结果
 */
export interface OperationOpsDto {
  /**
   * 操作是否成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: boolean
  /**
   * 操作结果详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResultMsg?: string
  /**
   * 操作失败类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorId?: string
  /**
   * 操作失败描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorDesc?: string
  /**
   * 异步操作记录id
   */
  AsyncActionId?: string
}

/**
 * DeleteTaskAlarmRegular返回参数结构体
 */
export interface DeleteTaskAlarmRegularResponse {
  /**
   * 删除结果(true表示删除成功，false表示删除失败)
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteWorkflowById请求参数结构体
 */
export interface DeleteWorkflowByIdRequest {
  /**
   * 工作流id
   */
  WorkflowId: string
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 删除后下游任务的处理方式，true:下游任务均正常运行 false:下游任务均运行失败
   */
  DeleteMode?: boolean
  /**
   * 删除任务后是否通知下游任务责任人, true:通知 false:不通知
   */
  EnableNotify?: boolean
}

/**
 * 基础信息
 */
export interface ProjectBaseInfoOpsRequest {
  /**
   * 项目Id
   */
  ProjectId?: string
  /**
   * 项目标识
   */
  ProjectIdent?: string
  /**
   * 项目名称
   */
  ProjectName?: string
  /**
   * 是否admin
   */
  IsAdmin?: boolean
}

/**
 * DescribeEventCases请求参数结构体
 */
export interface DescribeEventCasesRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 事件实例目录,示例取值:
- 已过期: expired
- 未过期: consuming
- 全部: all

   */
  Category: string
  /**
   * 页码
   */
  PageNumber: number
  /**
   * 每页数目
   */
  PageSize: number
  /**
   * 事件名称
   */
  EventName?: string
  /**
   * 事件类型
   * @deprecated
   */
  EventType?: string
  /**
   * 事件分割类型
   */
  EventSubType?: string
  /**
   * 事件广播类型
   * @deprecated
   */
  EventBroadcastType?: string
  /**
   * 事件实例状态,示例取值:
- 已消费: COMSUMED
- 已过期: EXPIRED
- 待消费: ACTIVE
- 消费中: CONSUMING
   * @deprecated
   */
  Status?: string
  /**
   * 事件实例最小创建时间
   */
  CreationTimeStart?: string
  /**
   * 事件实例最大创建时间
   */
  CreationTimeEnd?: string
  /**
   * 事件实例最小触发时间
   */
  EventTriggeredTimeStart?: string
  /**
   * 事件实例最大触发时间
   */
  EventTriggeredTimeEnd?: string
  /**
   * 事件实例最小消费时间
   */
  LogTimeStart?: string
  /**
   * 事件实例最大消费时间
   */
  LogTimeEnd?: string
  /**
   * 事件实例数据时间
   */
  Dimension?: string
  /**
   * 事件实例有效时间
   */
  TimeToLive?: string
  /**
   * 排序字段
   */
  SortItem?: string
  /**
   * 排序顺序
   */
  SortType?: string
}

/**
 * DeleteRule返回参数结构体
 */
export interface DeleteRuleResponse {
  /**
   * 是否删除成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 补录计划任务集合
 */
export interface MakePlanTaskOpsDtoCollection {
  /**
   * 记录总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 记录总页数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPage?: number
  /**
   * 当前页记录数
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageCount?: number
  /**
   * 页码
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
  /**
   * 页大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * 记录列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<MakePlanTaskOpsDto>
}

/**
 * 血缘列描述
 */
export interface SimpleColumnInfo {
  /**
   * 列ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id: string
  /**
   * 限定名
注意：此字段可能返回 null，表示取不到有效值。
   */
  QualifiedName: string
  /**
   * 列名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColumnName: string
  /**
   * 列中文名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColumnNameCn: string
  /**
   * 列类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColumnType: string
  /**
   * 列描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description: string
  /**
   * 前缀路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrefixPath: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime: string
  /**
   * 修改时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifyTime: string
  /**
   * 数据源ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceId: string
  /**
   * 下游数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  DownStreamCount: number
  /**
   * 上游数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpStreamCount: number
  /**
   * 关系参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  RelationParams: string
  /**
   * 参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Params: string
  /**
   * 任务集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tasks: Array<string>
}

/**
 * CreateWorkflowDs请求参数结构体
 */
export interface CreateWorkflowDsRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 工作流名称
   */
  WorkflowName: string
  /**
   * 文件夹ID
   */
  FolderId: string
  /**
   * 工作流描述
   */
  WorkflowDesc?: string
  /**
   * 工作流类型,取值示例

- cycle 周期工作流
- manual 手动工作流

   */
  WorkflowType?: string
}

/**
 * CreateTask返回参数结构体
 */
export interface CreateTaskResponse {
  /**
   * 返回任务Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: CommonId
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 表质量详情
 */
export interface TableQualityDetail {
  /**
   * 数据库id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseId?: string
  /**
   * 数据库名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseName?: string
  /**
   * 表id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableId?: string
  /**
   * 表名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableName?: string
  /**
   * 表责任人ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUserId?: number
  /**
   * 表责任人名
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUserName?: string
  /**
   * 库得分
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseScore?: number
  /**
   * 表得分
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableScore?: number
  /**
   * 表环比
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastPeriodRatio?: number
  /**
   * 0或者未返回或者null：未定义，1：生产，2：开发
注意：此字段可能返回 null，表示取不到有效值。
   */
  DsEnvType?: number
  /**
   * 模式名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SchemaName?: string
  /**
   * 规则表
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleGroupTableId?: string
}

/**
 * BatchStopIntegrationTasks返回参数结构体
 */
export interface BatchStopIntegrationTasksResponse {
  /**
   * 操作成功的任务数
   */
  SuccessCount?: number
  /**
   * 操作失败的任务数
   */
  FailedCount?: number
  /**
   * 任务总数
   */
  TotalCount?: number
  /**
   * 本次批量操作涉及成功任务，用于审计
   */
  TaskNames?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeApproveTypeList请求参数结构体
 */
export interface DescribeApproveTypeListRequest {
  /**
   * 类型key
   */
  Classification: string
}

/**
 * DeleteIntegrationNode返回参数结构体
 */
export interface DeleteIntegrationNodeResponse {
  /**
   * 删除返回是否成功标识
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataSourceInfoList请求参数结构体
 */
export interface DescribeDataSourceInfoListRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 页码
   */
  PageNumber?: number
  /**
   * 页数
   */
  PageSize?: number
  /**
   * 过滤条件（暂不支持）
   */
  Filters?: Filter
  /**
   * 排序配置
   */
  OrderFields?: OrderField
  /**
   * 数据源类型，必选（如MYSQL、DLC等）
   */
  Type?: string
  /**
   * 数据源名称过滤
   */
  DatasourceName?: string
}

/**
 * 任务表粒度指标信息
 */
export interface TaskTableMetricInfo {
  /**
   * 数据库名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseName?: string
  /**
   * 表名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableName?: string
  /**
   * 总记录数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalRecordNum?: number
  /**
   * 总字节数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalRecordByteNum?: number
  /**
   * 总脏记录数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalDirtyRecordNum?: number
  /**
   * Schema名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SchemaName?: string
  /**
   * topic名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Topic?: string
  /**
   * Collection名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Collection?: string
  /**
   * 数据源名称
   */
  DataSourceName?: string
  /**
   * 节点id
   */
  NodeId?: string
  /**
   * 逻辑库名
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogicDatabase?: string
  /**
   * 逻辑表名
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogicTable?: string
  /**
   * 逻辑schema名
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogicSchema?: string
  /**
   * 物理表信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskTableMetricInfos?: Array<TaskTableMetricInfo>
  /**
   * 同步状态，0-未知，1-正常， 2-异常
注意：此字段可能返回 null，表示取不到有效值。
   */
  SyncStatus?: number
  /**
   * Target数据库名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetDatabaseName?: string
  /**
   * Target表名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetTableName?: string
  /**
   * Write总记录数
注意：此字段可能返回 null，表示取不到有效值。
   */
  WriteTotalRecordNum?: number
  /**
   * Write总字节数
注意：此字段可能返回 null，表示取不到有效值。
   */
  WriteTotalRecordByteNum?: string
  /**
   * TargetSchema名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetSchemaName?: string
  /**
   * Targettopic名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetTopic?: string
  /**
   * TargetCollection名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetCollection?: string
  /**
   * 数据源名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetDataSourceName?: string
  /**
   * 节点id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetNodeId?: string
  /**
   * 读取条数的速度
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalRecordSpeed?: number
  /**
   * 写入条数的速度
注意：此字段可能返回 null，表示取不到有效值。
   */
  WriteTotalRecordSpeed?: number
  /**
   * 异常原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExceptionReason?: string
}

/**
 * 批量执行结果
 */
export interface BatchResultDs {
  /**
   * 成功数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Success?: number
  /**
   * 失败数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Failed?: number
  /**
   * 总计
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
}

/**
 * DeleteDataModel返回参数结构体
 */
export interface DeleteDataModelResponse {
  /**
   * 是否销毁成功
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIntegrationNode请求参数结构体
 */
export interface DescribeIntegrationNodeRequest {
  /**
   * 节点id
   */
  Id: string
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 任务类型，201为实时任务，202为离线任务
   */
  TaskType?: number
}

/**
 * SetTaskAlarmNew返回参数结构体
 */
export interface SetTaskAlarmNewResponse {
  /**
   * 返回批量操作成功个数、失败个数、操作总数
   */
  Data?: BatchOperateResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetOfflineDIInstanceList返回参数结构体
 */
export interface GetOfflineDIInstanceListResponse {
  /**
   * 总条数
   */
  Total?: number
  /**
   * 实例详情
   */
  List?: Array<OfflineInstance>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDatasource返回参数结构体
 */
export interface DescribeDatasourceResponse {
  /**
   * 数据源对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: DataSourceInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 批量操作的结果返回
 */
export interface BatchOperationOpsDto {
  /**
   * 批量操作成功数
注意：此字段可能返回 null，表示取不到有效值。
   */
  SuccessCount?: number
  /**
   * 批量操作失败数
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailedCount?: number
  /**
   * 批量操作的总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 异步操作记录的唯一id
注意：此字段可能返回 null，表示取不到有效值。
   */
  AsyncActionId?: string
}

/**
 * 规则执行配置
 */
export interface RuleExecConfig {
  /**
   * 计算队列名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  QueueName?: string
  /**
   * 执行资源组
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutorGroupId?: string
  /**
   * 运行的执行引擎，不传时会请求该数据源下默认的执行引擎
注意：此字段可能返回 null，表示取不到有效值。
   */
  EngineType?: string
  /**
   * DLC执行引擎资源组
注意：此字段可能返回 null，表示取不到有效值。
   */
  DlcGroupName?: string
}

/**
 * SuspendIntegrationTask返回参数结构体
 */
export interface SuspendIntegrationTaskResponse {
  /**
   * 操作成功与否标识
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSchedulerRunTimeInstanceCntByStatus返回参数结构体
 */
export interface DescribeSchedulerRunTimeInstanceCntByStatusResponse {
  /**
   * 响应数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<RuntimeInstanceCntTop>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTaskFolder返回参数结构体
 */
export interface CreateTaskFolderResponse {
  /**
   * 任务文件夹Id，null则创建失败
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTaskScript返回参数结构体
 */
export interface ModifyTaskScriptResponse {
  /**
   * 详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: CommonContent
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RunForceSucScheduleInstances请求参数结构体
 */
export interface RunForceSucScheduleInstancesRequest {
  /**
   * 实例列表
   */
  Instances?: Array<InstanceOpsDto>
  /**
   * 检查父任务类型, true: 检查父任务; false: 不检查父任务
   */
  CheckFather?: boolean
  /**
   * 重跑类型, 1: 自身; 3: 孩子; 2: 自身以及孩子
   */
  RerunType?: string
  /**
   * 实例依赖方式, 1: 自依赖; 2: 任务依赖; 3: 自依赖及父子依赖
   */
  DependentWay?: string
  /**
   * 重跑忽略事件监听与否
   */
  SkipEventListening?: boolean
  /**
   * 下游实例范围 1: 所在工作流 2: 所在项目 3: 所有跨工作流依赖的项目
   */
  SonInstanceType?: string
  /**
   * 查询条件
   */
  SearchCondition?: InstanceApiOpsRequest
  /**
   * 访问类型
   */
  OptType?: string
  /**
   * 操作者名称
   */
  OperatorName?: string
  /**
   * 操作者id
   */
  OperatorId?: string
  /**
   * 项目id
   */
  ProjectId?: string
  /**
   * 项目标志
   */
  ProjectIdent?: string
  /**
   * 项目名称
   */
  ProjectName?: string
  /**
   * 索引页码
   */
  PageIndex?: number
  /**
   * 页面大小
   */
  PageSize?: number
  /**
   * 数据总数
   */
  Count?: number
  /**
   * 基础请求信息
   */
  RequestBaseInfo?: ProjectBaseInfoOpsRequest
  /**
   * 是否计算总数
   */
  IsCount?: boolean
  /**
   * 是否异步模式
   */
  AsyncMode?: boolean
}

/**
 * DescribeQualityScore返回参数结构体
 */
export interface DescribeQualityScoreResponse {
  /**
   * 质量评分
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: QualityScore
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRulesByPage返回参数结构体
 */
export interface DescribeRulesByPageResponse {
  /**
   * 规则质量列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: RulePage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDsParentFolderTree返回参数结构体
 */
export interface DescribeDsParentFolderTreeResponse {
  /**
   * 统一树结构返回属性列表
   */
  Data?: Array<PathNodeDsVO>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 质量概览表排行元素
 */
export interface TopTableStatItem {
  /**
   * 表Id
   */
  TableId: string
  /**
   * 表名
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableName: string
  /**
   * 数
   */
  Cnt: number
}

/**
 * DescribeEventConsumeTasks请求参数结构体
 */
export interface DescribeEventConsumeTasksRequest {
  /**
   * 事件实例ID
   */
  EventCaseId: string
  /**
   * 页码
   */
  PageNumber: number
  /**
   * 每页数目
   */
  PageSize: number
}

/**
 * DescribeDataSourceInfoList返回参数结构体
 */
export interface DescribeDataSourceInfoListResponse {
  /**
   * 总条数。
   */
  TotalCount?: number
  /**
   * 数据源信息列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceSet?: Array<DatasourceBaseInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 运维大屏实例状态统计和实例状态趋势
 */
export interface InstanceStatisticInfo {
  /**
   * 实例状态趋势状态统计
注意：此字段可能返回 null，表示取不到有效值。
   */
  CountList?: Array<number | bigint>
  /**
   * 实例状态趋势时间分割
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeList?: Array<string>
  /**
   * 实例状态标识：WAITING_RUNNING、KILLING、FAILED、FAILED_TRYING、SUCCEED 分别表示等待执行、正在终止、失败、失败重试、成功，用于实例状态分布和实例状态趋势
   */
  InstanceStatus?: string
  /**
   * 用于实例状态分布计数
   */
  InstanceCount?: number
  /**
   * 当前展示时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ShowTime?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReportTime?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  Count?: number
}

/**
 * CommitRuleGroupTask请求参数结构体
 */
export interface CommitRuleGroupTaskRequest {
  /**
   * 规则组ID
   */
  RuleGroupId?: number
  /**
   * 触发类型 1.手动触发 2.调度事中触发 3.周期调度触发
   */
  TriggerType?: number
  /**
   * 规则配置列表
   */
  ExecRuleConfig?: Array<RuleConfig>
  /**
   * 执行配置
   */
  ExecConfig?: RuleExecConfig
  /**
   * 项目ID
   */
  ProjectId?: string
  /**
   * 该规则运行的执行引擎，不传时会请求该数据源下默认的执行引擎
   */
  EngineType?: string
}

/**
 * CheckIntegrationNodeNameExists请求参数结构体
 */
export interface CheckIntegrationNodeNameExistsRequest {
  /**
   * 任务ID
   */
  TaskId: string
  /**
   * 节点名称
   */
  Name: string
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 节点ID
   */
  Id?: number
}

/**
 * GetOfflineInstanceList返回参数结构体
 */
export interface GetOfflineInstanceListResponse {
  /**
   * 总条数
   */
  Total?: number
  /**
   * 实例详情
   */
  List?: Array<OfflineInstance>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOpsMakePlans请求参数结构体
 */
export interface DescribeOpsMakePlansRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 分页数，默认值1
   */
  PageNumber?: number
  /**
   * 分页大小，默认值10
   */
  PageSize?: number
  /**
   * 补录计划ID
   */
  PlanId?: string
  /**
   * 补录计划名称
   */
  PlanName?: string
  /**
   * 补录任务名称
   */
  TaskName?: string
  /**
   * 补录任务ID
   */
  TaskId?: string
  /**
   * 补录计划创建者
   */
  Creator?: string
  /**
   * 补录计划最小创建时间
   */
  MinCreateTime?: string
  /**
   * 补录计划最大创建时间
   */
  MaxCreateTime?: string
  /**
   * 实例状态过滤条件
   */
  StateList?: Array<number | bigint>
  /**
   * 模糊查询关键字
   */
  Keyword?: string
}

/**
 * CreateOpsMakePlan请求参数结构体
 */
export interface CreateOpsMakePlanRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 补录计划名称
   */
  MakeName: string
  /**
   * 补录任务集合
   */
  TaskIdList: Array<string>
  /**
   * 补录计划日期范围
   */
  MakeDatetimeList: Array<CreateMakeDatetimeInfo>
  /**
   * 项目标识
   */
  ProjectIdent?: string
  /**
   * 补录是否检查父任务状态，默认不检查。不推荐使用，后续会废弃，推荐使用 CheckParentType。
   */
  CheckParent?: boolean
  /**
   * 补录检查父任务类型。取值范围：
<li> NONE: 全部不检查 </li>
<li> ALL: 检查全部上游父任务 </li>
<li> MAKE_SCOPE: 只在（当前补录计划）选中任务中检查 </li>
   */
  CheckParentType?: string
  /**
   * 项目名称
   */
  ProjectName?: string
  /**
   * 已弃用。任务自依赖类型：parallel（并行），serial（无序串行），orderly（有序串行）
   */
  SelfDependence?: string
  /**
   * 并行度
   */
  ParallelNum?: number
  /**
   * 补录实例生成周期是否和原周期相同，默认为true
   */
  SameCycle?: boolean
  /**
   * 补录实例目标周期类型
   */
  TargetTaskCycle?: string
  /**
   * 补录实例目标周期类型指定时间
   */
  TargetTaskAction?: number
  /**
   * 补录实例自定义参数
   */
  MapParamList?: Array<StrToStrMap>
  /**
   * 创建人id
   */
  CreatorId?: string
  /**
   * 创建人
   */
  Creator?: string
  /**
   * 补录计划说明
   */
  Remark?: string
  /**
   * 是否使用任务原有自依赖配置，默认为true
   */
  SameSelfDependType?: boolean
  /**
   * 补录实例原始周期类型
   */
  SourceTaskCycle?: string
  /**
   * 补录指定的调度资源组（ID） 为空则表示使用任务原有调度执行资源组
   */
  SchedulerResourceGroup?: string
  /**
   * 补录指定的集成资源组（ID） 为空则表示使用任务原有集成执行资源组
   */
  IntegrationResourceGroup?: string
  /**
   * 补录指定的调度资源组名称 为空则表示使用任务原有调度执行资源组
   */
  SchedulerResourceGroupName?: string
  /**
   * 补录指定的集成资源组名称 为空则表示使用任务原有集成执行资源组
   */
  IntegrationResourceGroupName?: string
  /**
   * 补录扩展属性
   */
  MakeExtList?: Array<StrToStrMap>
  /**
   * 补录扩展属性
   */
  SameSelfWorkflowDependType?: boolean
  /**
   * 补录扩展属性
   */
  SelfWorkflowDependency?: string
}

/**
 * DescribeDimensionScore返回参数结构体
 */
export interface DescribeDimensionScoreResponse {
  /**
   * 维度评分
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: DimensionScore
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 开发空间-上传脚本请求
 */
export interface ScriptRequestInfo {
  /**
   * 脚本路径
项目区1470575647377821696项目，f1目录下：
/datastudio/project/1470575647377821696/f1/sql1234.sql
个人区：
/datastudio/personal/sqlTTT.sql
   */
  FilePath?: string
  /**
   * 项目id
   */
  ProjectId?: string
  /**
   * 脚本版本
   */
  Version?: string
  /**
   * 操作类型
   */
  Operation?: string
  /**
   * 额外信息
   */
  ExtraInfo?: string
  /**
   * 桶名称
   */
  BucketName?: string
  /**
   * 所属地区
   */
  Region?: string
  /**
   * 文件扩展类型
   */
  FileExtensionType?: string
}

/**
 * DescribeOrganizationalFunctions返回参数结构体
 */
export interface DescribeOrganizationalFunctionsResponse {
  /**
   * 函数信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Content?: Array<OrganizationalFunction>
  /**
   * 操作失败
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMessage?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 文件夹列表
 */
export interface CollectionFolderOpsDto {
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 总页面数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPage?: number
  /**
   * 当前页面数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageCount?: number
  /**
   * 页码
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
  /**
   * 每页数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * 任务信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<FolderOpsDto>
}

/**
 * FreezeTasksByWorkflowIds请求参数结构体
 */
export interface FreezeTasksByWorkflowIdsRequest {
  /**
   * 工作流id列表
   */
  WorkflowIds: Array<string>
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 是否终止已生成的实例
   */
  KillInstance?: boolean
  /**
   * 是否异步模式
   */
  AsyncMode?: boolean
}

/**
 * DescribeTaskByCycleReport返回参数结构体
 */
export interface DescribeTaskByCycleReportResponse {
  /**
   * 任务周期增长趋势统计
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<TaskByStatus>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BatchDeleteOpsTasks返回参数结构体
 */
export interface BatchDeleteOpsTasksResponse {
  /**
   * 返回批量操作成功个数、失败个数、操作总数
   */
  Data?: BatchOperationOpsDto
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckIntegrationTaskNameExists返回参数结构体
 */
export interface CheckIntegrationTaskNameExistsResponse {
  /**
   * true表示存在，false表示不存在
   */
  Data?: boolean
  /**
   * 任务名重复类型（0:未重复, 1:开发态重复, 2:生产态重复）
   */
  ExistsType?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例批量操作结果类
 */
export interface BatchOperateResultOpsDto {
  /**
   * 结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: boolean
  /**
   * 错误id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorId?: string
  /**
   * 错误说明
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorDesc?: string
  /**
   * 异步操作id
注意：此字段可能返回 null，表示取不到有效值。
   */
  AsyncActionId?: string
}

/**
 * DeleteRule请求参数结构体
 */
export interface DeleteRuleRequest {
  /**
   * 质量规则ID
   */
  RuleId?: number
  /**
   * 项目ID
   */
  ProjectId?: string
}

/**
 * 审批分类
 */
export interface ApproveType {
  /**
   * 申请分类key
   */
  Type: string
  /**
   * 类型名称
   */
  TypeName: string
  /**
   * 申请类型key
   */
  Classification: string
}

/**
 * SubmitCustomFunction返回参数结构体
 */
export interface SubmitCustomFunctionResponse {
  /**
   * 函数唯一标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  FunctionId?: string
  /**
   * 错误提示
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMessage?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 按表名查询的查询条件
 */
export interface TableNameFilter {
  /**
   * 数据源类型
   */
  MsType?: string
  /**
   * 数据源id
   */
  DatasourceId?: number
  /**
   * 数据库名称
   */
  DatabaseName?: string
  /**
   * schema
   */
  SchemaName?: string
  /**
   * 表名
   */
  Name?: string
}

/**
 * 实时任务实例当前的节点信息
 */
export interface RealTimeTaskInstanceNodeInfo {
  /**
   * 任务名
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskName?: string
  /**
   * 任务id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 实时任务实例节点信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceNodeInfoList?: Array<InstanceNodeInfo>
}

/**
 * DeleteResourceFiles返回参数结构体
 */
export interface DeleteResourceFilesResponse {
  /**
   * 资源批量删除结果
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFieldBasicInfo请求参数结构体
 */
export interface DescribeFieldBasicInfoRequest {
  /**
   * 分页页码
   */
  PageNumber?: number
  /**
   * 分页大小
   */
  PageSize?: number
  /**
   * 过滤字段
   */
  Filters?: Array<Filter>
  /**
   * 排序字段
   */
  OrderFields?: Array<OrderField>
}

/**
 * DiagnosePro请求参数结构体
 */
export interface DiagnoseProRequest {
  /**
   * 查询条件（当前接口TaskId和CurRunDate需要填充在该字段方可诊断）
   */
  SearchCondition: InstanceApiOpsRequest
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 实例列表
   */
  Instances?: Array<InstanceOpsDto>
  /**
   * 检查父任务类型, true: 检查父任务; false: 不检查父任务
   */
  CheckFather?: boolean
  /**
   * 重跑类型, 1: 自身; 3: 孩子; 2: 自身以及孩子
   */
  RerunType?: string
  /**
   * 实例依赖方式, 1: 自依赖; 2: 任务依赖; 3: 自依赖及父子依赖
   */
  DependentWay?: string
  /**
   * 重跑忽略事件监听与否
   */
  SkipEventListening?: boolean
  /**
   * 下游实例范围 1: 所在工作流 2: 所在项目 3: 所有跨工作流依赖的项目
   */
  SonInstanceType?: string
  /**
   * 访问类型
   */
  OptType?: string
  /**
   * 操作者名称
   */
  OperatorName?: string
  /**
   * 操作者id
   */
  OperatorId?: string
  /**
   * 项目标志
   */
  ProjectIdent?: string
  /**
   * 项目名称
   */
  ProjectName?: string
  /**
   * 索引页码
   */
  PageIndex?: number
  /**
   * 页面大小
   */
  PageSize?: number
  /**
   * 数据总数
   */
  Count?: number
  /**
   * 基础请求信息
   */
  RequestBaseInfo?: ProjectBaseInfoOpsRequest
  /**
   * 是否计算总数
   */
  IsCount?: boolean
}

/**
 * CreateOpsMakePlan返回参数结构体
 */
export interface CreateOpsMakePlanResponse {
  /**
   * 结果
   */
  Data?: CommonIdOpsDto
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeStreamTaskLogList返回参数结构体
 */
export interface DescribeStreamTaskLogListResponse {
  /**
   * 是否是全量
注意：此字段可能返回 null，表示取不到有效值。
   */
  ListOver?: boolean
  /**
   * 日志集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogContentList?: Array<LogContentInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据治理配置项
 */
export interface DlcDataGovernPolicy {
  /**
   * 数据排布治理项
注意：此字段可能返回 null，表示取不到有效值。
   */
  RewriteDataPolicy?: DlcRewriteDataInfo
  /**
   * 快照过期治理项
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpiredSnapshotsPolicy?: DlcExpiredSnapshotsInfo
  /**
   * 移除孤立文件治理项
注意：此字段可能返回 null，表示取不到有效值。
   */
  RemoveOrphanFilesPolicy?: DlcRemoveOrphanFilesInfo
  /**
   * 合并元数据Manifests治理项
注意：此字段可能返回 null，表示取不到有效值。
   */
  MergeManifestsPolicy?: DlcMergeManifestsInfo
  /**
   * 是否集成库规则：default（默认继承）、none（不继承）
注意：此字段可能返回 null，表示取不到有效值。
   */
  InheritDataBase?: string
  /**
   * 治理规则类型，Customize: 自定义；Intelligence: 智能治理
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleType?: string
  /**
   * 治理引擎
注意：此字段可能返回 null，表示取不到有效值。
   */
  GovernEngine?: string
}

/**
 * DescribeRuleGroupExecResultsByPage返回参数结构体
 */
export interface DescribeRuleGroupExecResultsByPageResponse {
  /**
   * 规则组执行结果列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: RuleGroupExecResultPage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRuleGroupsByPage返回参数结构体
 */
export interface DescribeRuleGroupsByPageResponse {
  /**
   * 规则组列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: RuleGroupPage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetIntegrationNodeColumnSchema请求参数结构体
 */
export interface GetIntegrationNodeColumnSchemaRequest {
  /**
   * 字段示例（json格式）
   */
  ColumnContent?: string
  /**
   * 数据源类型 MYSQL|HIVE|KAFKA|ES|MONGODB|REST_API|SYBASE|TIDB|DORIS|DM|
   */
  DatasourceType?: string
}

/**
 * DeleteWorkflowById返回参数结构体
 */
export interface DeleteWorkflowByIdResponse {
  /**
   * 删除结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: OperationOpsDto
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DLC资源配置信息
 */
export interface AiopsDLCResourceConfigDto {
  /**
   * Driver资源
注意：此字段可能返回 null，表示取不到有效值。
   */
  DriverSize?: string
  /**
   * Executor资源
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutorSize?: string
  /**
   * Executor数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutorNumbers?: string
  /**
   * 资源配置方式
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsInherit?: string
}

/**
 * DeleteIntegrationNode请求参数结构体
 */
export interface DeleteIntegrationNodeRequest {
  /**
   * 节点id
   */
  Id: string
  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * 表的元数据信息
 */
export interface TableBasicInfo {
  /**
   * 表的全局唯一ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableId?: string
  /**
   * 数据源全局唯一ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceId?: string
  /**
   * 数据源名
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceName?: string
  /**
   * 数据库ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseId?: string
  /**
   * 数据库名
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseName?: string
  /**
   * 表名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableName?: string
  /**
   * 引擎/存储类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  EngineType?: string
  /**
   * 表类型，视图，外部表等
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableType?: string
  /**
   * 项目Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * 所属项目英文名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectName?: string
  /**
   * 所属项目英中文名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectDisplayName?: string
  /**
   * 责任人ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableOwnerId?: string
  /**
   * 责任人名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableOwnerName?: string
  /**
   * 存储位置
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageLocation?: number
  /**
   * 表描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 是否分区表，0-全量表 1-分区表
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsPartitionTable?: number
  /**
   * 分区字段list
注意：此字段可能返回 null，表示取不到有效值。
   */
  PartitionColumns?: Array<string>
  /**
   * 存储格式
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageFormat?: string
  /**
   * 存储量，字节数
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageSize?: number
  /**
   * 存储量，单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageSizeWithUnit?: string
  /**
   * 累计存储【MB】
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalSizeMb?: number
  /**
   * 副本数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReplicaCount?: number
  /**
   * 文件数
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileCount?: number
  /**
   * 分区总数（包含hive，iceberg）
注意：此字段可能返回 null，表示取不到有效值。
   */
  PartitionCount?: number
  /**
   * 分区字段数量（包含hive，iceberg）
注意：此字段可能返回 null，表示取不到有效值。
   */
  PartitionFieldCount?: number
  /**
   * 生命周期-分区保留天数【分区保留策略时有效】
注意：此字段可能返回 null，表示取不到有效值。
   */
  PartitionExpireDays?: number
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
   * 存储位置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Location?: string
}

/**
 * ModifyIntegrationNode返回参数结构体
 */
export interface ModifyIntegrationNodeResponse {
  /**
   * 节点id
   */
  Id?: string
  /**
   * 任务id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIntegrationStatisticsTaskStatusTrend请求参数结构体
 */
export interface DescribeIntegrationStatisticsTaskStatusTrendRequest {
  /**
   * 任务类型（实时：201，离线：202）
   */
  TaskType: number
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 查询日期
   */
  QueryDate?: string
  /**
   * 资源组id
   */
  ExecutorGroupId?: string
}

/**
 * DescribeTableMeta请求参数结构体
 */
export interface DescribeTableMetaRequest {
  /**
   * 表唯一id
   */
  TableId: string
  /**
   * 按名称查询的条件
   */
  TableNameFilter?: TableNameFilter
  /**
   * 查询条件类型0按id，1按名称，默认为0
   */
  TableFilterType?: number
  /**
   * 查询字段列表
   */
  SearchNames?: Array<string>
}

/**
 * DescribeWorkflowInfoById返回参数结构体
 */
export interface DescribeWorkflowInfoByIdResponse {
  /**
   * 工作流调度详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: WorkflowSchedulerOpsDto
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 画布所需的信息
 */
export interface OpsTaskCanvasInfoList {
  /**
   * 画布任务信息
   */
  TasksList?: Array<OpsTaskCanvasDto>
  /**
   * 画布任务链接信息
   */
  LinksList?: Array<OpsTaskLinkInfoDto>
  /**
   * 画布循环依赖任务信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  CirculateTaskList?: Array<OpsTaskCanvasDto>
}

/**
 * ModifyDimensionWeight返回参数结构体
 */
export interface ModifyDimensionWeightResponse {
  /**
   * 更新权重是否成功
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTaskAlarmRegular返回参数结构体
 */
export interface ModifyTaskAlarmRegularResponse {
  /**
   * 判断是否修改成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例检索条件
 */
export interface InstanceSearchCondition {
  /**
   * 任务调度周期类型
   */
  CycleList?: Array<string>
  /**
   * 起始时间
   */
  DateFrom?: string
  /**
   * 截止时间
   */
  DateTo?: string
  /**
   * 实例过滤条件
   */
  Instance?: InstanceCondition
  /**
   * 模糊查询关键字
   */
  Keyword?: string
  /**
   * 排序方式
   */
  Sort?: string
  /**
   * 排序字段
   */
  SortCol?: string
  /**
   * 实例状态类型
   */
  StateList?: Array<string>
}

/**
 * CreateRule返回参数结构体
 */
export interface CreateRuleResponse {
  /**
   * 规则
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Rule
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTaskLinks返回参数结构体
 */
export interface ModifyTaskLinksResponse {
  /**
   * 成功或者失败
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTaskRunHistory请求参数结构体
 */
export interface DescribeTaskRunHistoryRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 检索条件
   */
  SearchCondition: InstanceSearchCondition
  /**
   * 分页大小
   */
  PageSize: number
  /**
   * 分页页码
   */
  PageNumber: number
}

/**
 * BatchMakeUpIntegrationTasks请求参数结构体
 */
export interface BatchMakeUpIntegrationTasksRequest {
  /**
   * 任务id
   */
  TaskIds: Array<string>
  /**
   * 任务类型，201为实时任务，202为离线任务
   */
  TaskType: number
  /**
   * 补数据开始时间
   */
  StartTime: string
  /**
   * 补数据结束时间
   */
  EndTime: string
  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * 离线实例
 */
export interface OfflineInstance {
  /**
   * 创建账号sub uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateUin?: string
  /**
   * 操作账号sub uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  OperatorUin?: string
  /**
   * 主账号
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUin?: string
  /**
   * 账号
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: string
  /**
   * 项目Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkspaceId?: string
  /**
   * 任务Id
   */
  TaskId?: string
  /**
   * 数据时间
   */
  CurRunDate?: string
  /**
   * 下发时间
   */
  IssueId?: string
  /**
   * 下发资源组id，非传入项
注意：此字段可能返回 null，表示取不到有效值。
   */
  InlongTaskId?: string
  /**
   * 资源组
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroup?: string
  /**
   * 任务类型(1 调试运行,2 调度执行)
   */
  TaskRunType?: number
  /**
   * 实例状态 EVENT_LISTENING|DEPENDENCE|BEFORE_ASPECT|ALLOCATED|LAUNCHED|KILL|SNAP_STATE_SAVING|ISSUED|RUNNING|AFTER_ASPECT|PENDING|KILLING|FINAL_STATE_SAVING|FAILED|KILL_FAILED| COMPLETED|EXPIRED|KILL_EXPIRED|DELETED
   */
  State?: string
  /**
   * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 最后更新时间
   */
  UpdateTime?: string
  /**
   * 唯一key
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceKey?: string
}

/**
 * BatchCreateTaskVersion使用，描述任务信息
 */
export interface BatchCreateTaskVersionDTO {
  /**
   * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId: string
  /**
   * VersionRemark
注意：此字段可能返回 null，表示取不到有效值。
   */
  VersionRemark?: string
  /**
   * 文件夹ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  FolderId?: string
}

/**
 * CreateTaskVersionDs请求参数结构体
 */
export interface CreateTaskVersionDsRequest {
  /**
   * 任务id
   */
  Task: BatchCreateTaskVersionDTO
  /**
   * 是否需要校验父任务已经提交到调度
   */
  NeedCheckParentSubmitted: boolean
  /**
   * 是否自动运行
   */
  AutoRun: boolean
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 请求来源，WEB 前端；CLIENT 客户端
   */
  RequestFromSource?: string
  /**
   * 告警方式:email-邮件;sms-短信;wecom-企业微信
   */
  AlarmWays?: string
  /**
   * 告警对象:1-项目管理员，2-任务责任人
   */
  AlarmRecipientTypes?: string
  /**
   * 是否需要校验循环依赖，默认为 true，如果使用了 CheckTaskCycleLink 和 CheckTaskCycleConfiguration 两个接口校验成功可以传 false，后台服务器不再做校验
   */
  EnableCheckTaskCycleLink?: boolean
}

/**
 * DeleteOfflineTask请求参数结构体
 */
export interface DeleteOfflineTaskRequest {
  /**
   * 操作者name
   */
  OperatorName: string
  /**
   * 项目/工作空间id
   */
  ProjectId: string
  /**
   * 任务id
   */
  TaskId: string
  /**
   * 虚拟任务标记(跟之前调度接口保持一致默认false)
   */
  VirtualFlag: boolean
}

/**
 * 权重信息
 */
export interface WeightInfo {
  /**
   * 权重
   */
  Weight: number
  /**
   * 维度类型 1：准确性，2：唯一性，3：完整性，4：一致性，5：及时性，6：有效性
   */
  QualityDim: number
}

/**
 * DescribeDatabaseInfoList返回参数结构体
 */
export interface DescribeDatabaseInfoListResponse {
  /**
   * 数据库列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseInfo?: Array<DatabaseInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDsFolder返回参数结构体
 */
export interface ModifyDsFolderResponse {
  /**
   * true代表成功，false代表失败
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 内容详情
 */
export interface CommonContent {
  /**
   * 详情内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Content: string
}

/**
 * DescribeTableScoreTrend返回参数结构体
 */
export interface DescribeTableScoreTrendResponse {
  /**
   * 表得分趋势
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: QualityScoreTrend
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyIntegrationNode请求参数结构体
 */
export interface ModifyIntegrationNodeRequest {
  /**
   * 集成节点信息
   */
  NodeInfo: IntegrationNodeInfo
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 任务类型 "201. stream, 202. offline"
   */
  TaskType?: number
  /**
   * 区分画布模式和表单 "1. 画布, 2. 表单"模式
   */
  TaskMode?: number
}

/**
 * ModifyMonitorStatus返回参数结构体
 */
export interface ModifyMonitorStatusResponse {
  /**
   * 监控状态修改成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRuleTemplatesByPage返回参数结构体
 */
export interface DescribeRuleTemplatesByPageResponse {
  /**
   * 结果
   */
  Data?: RuleTemplatePage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTemplateDimCount返回参数结构体
 */
export interface DescribeTemplateDimCountResponse {
  /**
   * 维度统计结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<DimensionCount>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据源云梯连接状态
 */
export interface DataSourceConnectStatus {
  /**
   * id
   */
  Id?: number
  /**
   * 项目id
   */
  ProjectId?: string
  /**
   * 数据源id
   */
  DatasourceId?: string
  /**
   * 连接结果
   */
  ConnectResult?: number
  /**
   * 错误信息
   */
  ConnectError?: string
  /**
   * 时间戳
   */
  Timestamp?: number
}

/**
 * DescribeFunctionTypes请求参数结构体
 */
export type DescribeFunctionTypesRequest = null

/**
 * 维度统计业务视图
 */
export interface DimensionCount {
  /**
   * 维度类型1：准确性，2：唯一性，3：完整性，4：一致性，5：及时性，6：有效性
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  DimType?: number
  /**
   * 统计值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Count?: number
  /**
   * 维度类型1：准确性，2：唯一性，3：完整性，4：一致性，5：及时性，6：有效性
注意：此字段可能返回 null，表示取不到有效值。
   */
  QualityDim?: number
}

/**
 * aiops基础信息
 */
export interface AttributeItemDTO {
  /**
   * key
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key?: string
  /**
   * value
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
  /**
   * 描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
}

/**
 * DescribeInstanceLog返回参数结构体
 */
export interface DescribeInstanceLogResponse {
  /**
   * 返回结果
   */
  Data?: string
  /**
   * 返回结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceLogInfo?: IntegrationInstanceLog
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 修改审批单状态
 */
export interface ApproveModify {
  /**
   * 审批单id
   */
  ApproveId: string
  /**
   * 是否修改成功
   */
  Success: boolean
}

/**
 * DescribeOpsMakePlanTasks返回参数结构体
 */
export interface DescribeOpsMakePlanTasksResponse {
  /**
   * 补录计划任务分页查询结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: MakePlanTaskOpsDtoCollection
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例日志信息
 */
export interface InstanceLogList {
  /**
   * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 数据时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CurRunDate?: string
  /**
   * 重试次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tries?: string
  /**
   * 最后更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastUpdate?: string
  /**
   * 节点ip
注意：此字段可能返回 null，表示取不到有效值。
   */
  BrokerIp?: string
  /**
   * 文件大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileSize?: string
  /**
   * 原始文件名
注意：此字段可能返回 null，表示取不到有效值。
   */
  OriginFileName?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 实例日志类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceLogType?: string
  /**
   * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskName?: string
  /**
   * 耗费时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CostTime?: string
}

/**
 * ModifyMonitorStatus请求参数结构体
 */
export interface ModifyMonitorStatusRequest {
  /**
   * 项目Id
   */
  ProjectId?: string
  /**
   * 规则组ID
   */
  RuleGroupId?: number
  /**
   * 监控开关状态
   */
  MonitorStatus?: boolean
}

/**
 * DescribeColumnLineage返回参数结构体
 */
export interface DescribeColumnLineageResponse {
  /**
   * 字段血缘信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColumnAggregationLineage: ColumnAggregationLineage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIntegrationTask请求参数结构体
 */
export interface DescribeIntegrationTaskRequest {
  /**
   * 任务id
   */
  TaskId: string
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 任务类型，201: 实时集成任务,   202：离线集成任务，不传默认值为201 实时任务类型
   */
  TaskType?: number
  /**
   * 提交版本号
   */
  InstanceVersion?: number
}

/**
 * DiagnoseRep
 */
export interface DiagnoseRep {
  /**
   * 诊断信息内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Content?: Content
  /**
   * 诊断结果相关信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Table?: Table
}

/**
 * DescribeWorkflowListByProjectId返回参数结构体
 */
export interface DescribeWorkflowListByProjectIdResponse {
  /**
   * 根据项目id获取项目下所有工作流列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<WorkflowCanvasOpsDto>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteFilePath请求参数结构体
 */
export interface DeleteFilePathRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 资源ID
   */
  ResourceIds: Array<string>
  /**
   * 使用状态
- true
- false
   */
  UseStatus: string
  /**
   * 文件路径
   */
  FilePaths?: Array<string>
}

/**
 * 工作流调度详情
 */
export interface WorkflowSchedulerOpsDto {
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 创建人
注意：此字段可能返回 null，表示取不到有效值。
   */
  Creator?: string
  /**
   * 修改时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifyTime?: string
  /**
   * 延迟时间, unit=minute
注意：此字段可能返回 null，表示取不到有效值。
   */
  DelayTime?: number
  /**
   * 启动时间,unit=minute
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartupTime?: number
  /**
   * 任务自依赖类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  SelfDepend?: string
  /**
   * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 指定运行时间, 指定时间：如周一：1
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskAction?: string
  /**
   * 调度周期类型，时间单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleType?: string
  /**
   * 调度周期，间隔步长 unit=minute
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleStep?: number
  /**
   * 调度cron表达式
注意：此字段可能返回 null，表示取不到有效值。
   */
  CrontabExpression?: string
  /**
   * 执行时间左闭区间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutionStartTime?: string
  /**
   * 执行时间右闭区间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutionEndTime?: string
  /**
   * 任务实例初始化策略
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceInitStrategy?: string
  /**
   * 工作流ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowId?: string
  /**
   * 工作流自依赖
注意：此字段可能返回 null，表示取不到有效值。
   */
  DependencyWorkflow?: string
  /**
   * 调度计划释义
注意：此字段可能返回 null，表示取不到有效值。
   */
  SchedulerDesc?: string
  /**
   * 工作流首次提交时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  FirstSubmitTime?: string
  /**
   * 工作流最近提交时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LatestSubmitTime?: string
}

/**
 * DescribeRulesByPage请求参数结构体
 */
export interface DescribeRulesByPageRequest {
  /**
   * 分页序号
   */
  PageNumber?: number
  /**
   * 分页大小
   */
  PageSize?: number
  /**
   * 过滤条件
   */
  Filters?: Array<Filter>
  /**
   * 排序字段
   */
  OrderFields?: Array<OrderField>
  /**
   * 项目ID
   */
  ProjectId?: string
}

/**
 * DescribeTopTableStat返回参数结构体
 */
export interface DescribeTopTableStatResponse {
  /**
   * 结果
   */
  Data?: TopTableStat
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDataServicePublishedApiDetail请求参数结构体
 */
export interface DescribeDataServicePublishedApiDetailRequest {
  /**
   * 服务Id
   */
  Id: string
  /**
   * 项目ID
   */
  ProjectId: string
}

/**
 * DescribeTaskTableMetricOverview请求参数结构体
 */
export interface DescribeTaskTableMetricOverviewRequest {
  /**
   * 任务TaskId
   */
  TaskId: string
  /**
   * 来源类型，支持枚举： SOURCE、SINK
   */
  NodeType: string
  /**
   * 页码
   */
  PageNumber: number
  /**
   * 页大小
   */
  PageSize: number
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 任务类型：201. stream, 202. offline，当前只支持实时201
   */
  TaskType?: number
  /**
   * 根据SchemaName来模糊搜索
   */
  Filters?: Array<Filter>
  /**
   * 排序
   */
  OrderFields?: Array<OrderFields>
}

/**
 * 上游节点字段信息
 */
export interface SourceFieldInfo {
  /**
   * 字段名称
   */
  FieldName?: string
  /**
   * 字段类型
   */
  FieldType?: string
  /**
   * 字段别名
   */
  Alias?: string
  /**
   * 字段描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Comment?: string
}

/**
 * DeleteDsFolder请求参数结构体
 */
export interface DeleteDsFolderRequest {
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 文件夹ID
   */
  FolderId: string
}

/**
 * SaveCustomFunction返回参数结构体
 */
export interface SaveCustomFunctionResponse {
  /**
   * 函数唯一标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  FunctionId?: string
  /**
   * 无
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMessage?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDsFolder请求参数结构体
 */
export interface ModifyDsFolderRequest {
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 文件夹名称
   */
  FolderName: string
  /**
   * 文件夹Id
   */
  FolderId: string
  /**
   * 父文件夹ID
   */
  ParentsFolderId?: string
}

/**
 * 任务提交记录
 */
export interface AdhocRecord {
  /**
   * 任务提交记录id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * 脚本内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScriptContent?: string
  /**
   * 任务提交时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 任务状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 实例id
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
}

/**
 * DescribeDataServicePublishedApiList返回参数结构体
 */
export interface DescribeDataServicePublishedApiListResponse {
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 服务列表
   */
  DataSet?: Array<DescribeDataServicePublishedApiListResp>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TriggerDsEvent返回参数结构体
 */
export interface TriggerDsEventResponse {
  /**
   * 操作结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: BatchOpsDTO
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 事件连续时间实例信息
 */
export interface EventBatchCaseDTO {
  /**
   * 事件实例id
   */
  CaseId?: string
  /**
   * 事件名
   */
  Name?: string
  /**
   * 事件触发起始时间
   */
  StartDimension?: string
  /**
   * 创建时间
   */
  CreationTs?: string
  /**
   * 消费者id
   */
  ConsumerId?: string
  /**
   * 描述信息
   */
  Description?: string
  /**
   * 事件触发结束时间
   */
  EndDimension?: string
  /**
   * 事件周期
   */
  EventSubType?: string
}

/**
 * CreateTask请求参数结构体
 */
export interface CreateTaskRequest {
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 工作流id
   */
  WorkflowId: string
  /**
   * 任务名
   */
  TaskName: string
  /**
   * 26离线同步，30Python，31PySpark，32DLC，33Impala，34Hive SQL，35Shell，36Spark SQL，39Spark，40TCHouse-P，92MapReduce
   */
  TaskType: number
  /**
   * 扩展属性
   */
  TaskExt?: Array<TaskExtInfo>
}

/**
 * DescribeDatabaseMetas请求参数结构体
 */
export interface DescribeDatabaseMetasRequest {
  /**
   * 过滤字段，projectIds/msTypes/createTime/modifiedTime
   */
  Filters?: Array<Filter>
  /**
   * 排序字段，如name
   */
  OrderFields?: Array<OrderField>
  /**
   * pagesize
   */
  PageSize?: number
  /**
   * pageNumber
   */
  PageNumber?: number
}

/**
 * 表字段信息
 */
export interface SearchColumnDocVO {
  /**
   * 字段名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 字段中文名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChineseName?: string
  /**
   * 字段类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 字段类型长度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Length?: number
  /**
   * 字段类型精度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Precision?: number
  /**
   * 字段类型scale
注意：此字段可能返回 null，表示取不到有效值。
   */
  Scale?: number
  /**
   * 字段默认值
注意：此字段可能返回 null，表示取不到有效值。
   */
  DefaultValue?: string
  /**
   * 字段描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 字段的顺序
注意：此字段可能返回 null，表示取不到有效值。
   */
  Position?: number
  /**
   * 是否为分区字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsPartition?: boolean
  /**
   * 列上的索引类型 主键: PRI,唯一索引: UNI,一般索引: MUL
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColumnKey?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifiedTime?: string
}

/**
 * 简单Task信息
 */
export interface SimpleTaskInfo {
  /**
   * 任务ID
   */
  TaskId: string
  /**
   * 任务名
   */
  TaskName: string
}

/**
 * DescribeIntegrationStatisticsRecordsTrend请求参数结构体
 */
export interface DescribeIntegrationStatisticsRecordsTrendRequest {
  /**
   * 任务类型（实时：201，离线：202）
   */
  TaskType: number
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 查询日期
   */
  QueryDate?: string
}

/**
 * DescribeRealTimeTaskInstanceNodeInfo请求参数结构体
 */
export interface DescribeRealTimeTaskInstanceNodeInfoRequest {
  /**
   * 实时任务id
   */
  TaskId: string
  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * DescribeWorkflowSchedulerInfoDs请求参数结构体
 */
export interface DescribeWorkflowSchedulerInfoDsRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 工作流ID
   */
  WorkflowId: string
}

/**
 * DescribeDependTaskLists返回参数结构体
 */
export interface DescribeDependTaskListsResponse {
  /**
   * 删除结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<TaskOpsDto>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateHiveTable返回参数结构体
 */
export interface CreateHiveTableResponse {
  /**
   * 建表是否成功
   */
  IsSuccess?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RuleTemplatePage 结果
 */
export interface RuleTemplatePage {
  /**
   * 记录数
   */
  TotalCount: number
  /**
   * 模版列表
   */
  Items: Array<RuleTemplate>
}

/**
 * ModifyDataSource返回参数结构体
 */
export interface ModifyDataSourceResponse {
  /**
   * 是否成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 值班表列表
 */
export interface DutyScheduleData {
  /**
   * 值班表Id
   */
  Id: number
  /**
   * 值班表名称
   */
  Name: string
  /**
   * 创建人
   */
  Creator: string
}

/**
 * DescribeTaskByStatusReport返回参数结构体
 */
export interface DescribeTaskByStatusReportResponse {
  /**
   * 任务上报趋势指标
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<TaskByStatus>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDimensionWeight请求参数结构体
 */
export interface ModifyDimensionWeightRequest {
  /**
   * 权重信息列表
   */
  WeightInfoList: Array<WeightInfo>
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 是否重刷历史数据
   */
  Refresh: boolean
}

/**
 * 补录计划日期范围
 */
export interface CreateMakeDatetimeInfo {
  /**
   * 开始日期
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartDate?: string
  /**
   * 结束日期
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndDate?: string
  /**
   * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
}

/**
 * 实例查询类型
 */
export interface InstanceApiOpsRequest {
  /**
   * 单个查询条件
   */
  Instance?: InstanceOpsDto
  /**
   * 排序字段，目前包含：重试次数，实例数据时间，运行耗时
   */
  SortCol?: string
  /**
   * 任务id列表
   */
  TaskIdList?: Array<string>
  /**
   * 按照taskName模糊查询
   */
  TaskNameList?: Array<string>
  /**
   * 文件夹列表
   */
  FolderList?: Array<string>
  /**
   * 升序或者降序
   */
  Sort?: string
  /**
   * 实例状态列表
   */
  StateList?: Array<number | bigint>
  /**
   * 实例类型列表
   */
  TaskTypeList?: Array<number | bigint>
  /**
   * 周期类型
   */
  CycleList?: Array<string>
  /**
   * 责任人
   */
  OwnerList?: Array<string>
  /**
   * 数据时间
   */
  DateFrom?: string
  /**
   * 数据时间
   */
  DateTo?: string
  /**
   * 实例入库时间
   */
  CreateTimeFrom?: string
  /**
   * 实例入库时间
   */
  CreateTimeTo?: string
  /**
   *  开始执行时间
   */
  StartFrom?: string
  /**
   *  开始执行时间
   */
  StartTo?: string
  /**
   * 所属工作流
   */
  WorkflowIdList?: Array<string>
  /**
   * 按照workflowName模糊查询
   */
  WorkflowNameList?: Array<string>
  /**
   * 关键字模糊查询
   */
  Keyword?: string
  /**
   * searchColumns是搜索的字段名列表
   */
  SearchColumns?: Array<string>
  /**
   * 项目id
   */
  ProjectId?: string
  /**
   * 限制
   */
  Limit?: number
  /**
   * 任务类型映射关系, 存储任务类型id和任务类型描述信息
   */
  TaskTypeMap?: Array<TaskTypeMap>
  /**
   * 0 补录类型 1 周期实例 2 非周期实例
   */
  InstanceType?: string
  /**
   * 是否dag
   */
  DagDeal?: boolean
  /**
   *  1 父实例 2 子实例
   */
  DagType?: string
  /**
   * 1 自依赖 2 任务依赖  3 所有依赖
   */
  DagDependent?: string
  /**
   * dag深度 默认为1，取值 1-6
   */
  DagDepth?: number
  /**
   * 租户id
   */
  TenantId?: string
  /**
   * 根据当前数据时间或者是下一个数据时间查询, 默认当前数据时间
   */
  DataTimeCycle?: string
  /**
   * 资源组id,多个资源组id用英文逗号分隔
   */
  ExecutorGroupIdList?: Array<string>
  /**
   * true 只过滤重跑过的实例，false 忽略此过滤条件，结果集过滤条件中不包括是否重跑
   */
  OnlyRerun?: boolean
}

/**
 * SubmitSqlTask请求参数结构体
 */
export interface SubmitSqlTaskRequest {
  /**
   * 数据库类型
   */
  DatabaseType: string
  /**
   * 数据源Id
   */
  DatasourceId: number
  /**
   * 资源组Id
   */
  GroupId: string
  /**
   * 脚本文件id
   */
  ScriptId: string
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 数据库名称
   */
  DatabaseName?: string
  /**
   * 执行引擎实例ID
   */
  EngineId?: string
  /**
   * 脚本内容
   */
  ScriptContent?: string
  /**
   * 资源队列
   */
  ResourceQueue?: string
  /**
   * 数据库类型
   */
  DatasourceType?: string
  /**
   * 计算资源名称
   */
  ComputeResource?: string
  /**
   * 高级运行参数
   */
  RunParams?: string
  /**
   * 高级设置
   */
  ConfParams?: string
  /**
   * 脚本内容是否base64加密
   */
  ScriptEncryption?: boolean
}

/**
 * DescribeTaskLockStatus返回参数结构体
 */
export interface DescribeTaskLockStatusResponse {
  /**
   * 任务锁状态信息
   */
  TaskLockStatus?: TaskLockStatus
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RemoveWorkflowDs请求参数结构体
 */
export interface RemoveWorkflowDsRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 工作流ID
   */
  WorkflowId: string
  /**
   * 是否删除脚本
   */
  DeleteScript?: string
  /**
   * 删除是否通知下游
   */
  OperateIsInform?: string
  /**
   * 是否终止进行中的任务
   */
  DeleteMode?: string
}

/**
 * BatchKillIntegrationTaskInstances请求参数结构体
 */
export interface BatchKillIntegrationTaskInstancesRequest {
  /**
   * 实例信息
   */
  Instances: Array<SchedulerTaskInstanceInfo>
  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * DeleteTaskDs请求参数结构体
 */
export interface DeleteTaskDsRequest {
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 是否删除脚本
true：删除
false：不删除
不传默认false
   */
  DeleteScript?: boolean
  /**
   * 任务操作是否消息通知下游任务责任人true：通知
false：不通知
不传默认false
   */
  OperateInform?: boolean
  /**
   * 任务ID
和VirtualTaskId选填一个
   */
  TaskId?: string
  /**
   * 虚拟任务id
和TaskId选填一个

   */
  VirtualTaskId?: string
  /**
   * 虚拟任务标记
true：是虚拟任务
false：不是虚拟任务
不传默认false
   */
  VirtualFlag?: boolean
  /**
   * 任务删除方式
true：不针对下游任务实例进行强制失败
false：针对下游任务实例进行强制失败
不传默认false

   */
  DeleteMode?: boolean
}

/**
 * BatchStopOpsTasks返回参数结构体
 */
export interface BatchStopOpsTasksResponse {
  /**
   * 返回批量操作成功个数、失败个数、操作总数
   */
  Data?: BatchOperationOpsDto
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例日志信息详情
 */
export interface InstanceLogInfoOpsDto {
  /**
   * 实例运行日志
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogInfo?: string
  /**
   * 实例运行提交的yarn日志地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  YarnLogInfo?: Array<string>
  /**
   * 实例运行产生的datax日志
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataLogInfo?: string
  /**
   * 第三方任务运行日志
注意：此字段可能返回 null，表示取不到有效值。
   */
  ThirdTaskRunLogInfo?: string
  /**
   * 第三方任务日志链接描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  ThirdTaskLogUrlDesc?: string
  /**
   * 日志行数
注意：此字段可能返回 null，表示取不到有效值。
   */
  LineCount?: number
  /**
   * 统一执行平台日志分页查询参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtInfo?: string
  /**
   * 日志分页查询，是否最后一页
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsEnd?: boolean
  /**
   * 文件大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileSize?: string
  /**
   * 日志匹配节点信息
   */
  MatchedBrokerIp?: string
  /**
   * 执行平台通用协议
   */
  ExecutionExtendedProps?: Array<PairDto>
}

/**
 * DeleteFilePath返回参数结构体
 */
export interface DeleteFilePathResponse {
  /**
   * 文件列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserFileList?: Array<UserFileInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 错误处理结果信息
 */
export interface FailMessage {
  /**
   * 数据唯一标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key?: string
  /**
   * 失败原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMessage?: string
}

/**
 * RunRerunScheduleInstances返回参数结构体
 */
export interface RunRerunScheduleInstancesResponse {
  /**
   * 结果
   */
  Data?: BatchOperateResultOpsDto
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 依赖配置
 */
export interface DependencyConfig {
  /**
   * 仅五种周期运行依赖配置： HOUR,DAY,WEEK,MONTH,YEAR,CRONTAB,MINUTE
   */
  DependConfType: string
  /**
   * 依赖配置从属周期类型，CURRENT_HOUR，PREVIOUS_HOUR，CURRENT_DAY，PREVIOUS_DAY，PREVIOUS_WEEK，PREVIOUS_FRIDAY，PREVIOUS_WEEKEND，CURRENT_MONTH，PREVIOUS_MONTH，PREVIOUS_END_OF_MONTH
   * PREVIOUS_BEGIN_OF_MONTH，ALL_MONTH_OF_YEAR，ALL_DAY_OF_YEAR，CURRENT_YEAR，CURRENT，CURRENT_MINUTE，PREVIOUS_MINUTE_CYCLE，PREVIOUS_HOUR_CYCLE
   */
  SubordinateCyclicType: string
  /**
   * WAITING，等待（默认策略）EXECUTING:执行
   */
  DependencyStrategy: string
  /**
   * 父任务信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentTask?: TaskInnerInfo
  /**
   * 子任务信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  SonTask?: TaskInnerInfo
}

/**
 * RobAndLockIntegrationTask请求参数结构体
 */
export interface RobAndLockIntegrationTaskRequest {
  /**
   * 任务id
   */
  TaskId: string
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 任务类型：201. stream,   202. offline
   */
  TaskType: number
}

/**
 * ModifyTaskInfo返回参数结构体
 */
export interface ModifyTaskInfoResponse {
  /**
   * 执行结果
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据监测情况结果
 */
export interface DataCheckStat {
  /**
   * 表总数
   */
  TableTotal: number
  /**
   * 字段总数
   */
  ColumnTotal: number
  /**
   * 表配置检测数
   */
  TableConfig: number
  /**
   * 字段配置检测数
   */
  ColumnConfig: number
  /**
   * 表实际检测数
   */
  TableExec: number
  /**
   * 字段实际检测数
   */
  ColumnExec: number
}

/**
 * CreateRule请求参数结构体
 */
export interface CreateRuleRequest {
  /**
   * 项目id
   */
  ProjectId?: string
  /**
   * 规则组Id
   */
  RuleGroupId?: number
  /**
   * 规则名称
   */
  Name?: string
  /**
   * 数据表ID
   */
  TableId?: string
  /**
   * 规则模板列表
   */
  RuleTemplateId?: number
  /**
   * 规则类型 1.系统模版, 2.自定义模版, 3.自定义SQL
   */
  Type?: number
  /**
   * 规则所属质量维度（1：准确性，2：唯一性，3：完整性，4：一致性，5：及时性，6：有效性
   */
  QualityDim?: number
  /**
   * 源字段详细类型，int、string
   */
  SourceObjectDataTypeName?: string
  /**
   * 源字段名称
   */
  SourceObjectValue?: string
  /**
   * 检测范围 1.全表   2.条件扫描
   */
  ConditionType?: number
  /**
   * 条件扫描WHERE条件表达式
   */
  ConditionExpression?: string
  /**
   * 自定义SQL
   */
  CustomSql?: string
  /**
   * 报警触发条件
   */
  CompareRule?: CompareRule
  /**
   * 报警触发级别 1.低, 2.中, 3.高
   */
  AlarmLevel?: number
  /**
   * 规则描述
   */
  Description?: string
  /**
   * 数据源Id
   */
  DatasourceId?: string
  /**
   * 数据库Id
   */
  DatabaseId?: string
  /**
   * 目标库Id
   */
  TargetDatabaseId?: string
  /**
   * 目标表Id
   */
  TargetTableId?: string
  /**
   * 目标过滤条件表达式
   */
  TargetConditionExpr?: string
  /**
   * 源字段与目标字段关联条件on表达式
   */
  RelConditionExpr?: string
  /**
   * 自定义模版sql表达式字段替换参数
   */
  FieldConfig?: RuleFieldConfig
  /**
   * 目标字段名称  CITY
   */
  TargetObjectValue?: string
  /**
   * 该规则支持的执行引擎列表
   */
  SourceEngineTypes?: Array<number | bigint>
}

/**
 * 集成节点schema
 */
export interface IntegrationNodeSchema {
  /**
   * schema id 随机唯一
   */
  Id: string
  /**
   * schema名称
   */
  Name: string
  /**
   * schema类型
   */
  Type: string
  /**
   * schema值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
  /**
   * schema拓展属性
注意：此字段可能返回 null，表示取不到有效值。
   */
  Properties?: Array<RecordField>
  /**
   * schema别名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Alias?: string
  /**
   * 字段备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  Comment?: string
  /**
   * category
注意：此字段可能返回 null，表示取不到有效值。
   */
  Category?: string
}

/**
 * DescribeColumnsMeta返回参数结构体
 */
export interface DescribeColumnsMetaResponse {
  /**
   * 分页返回的
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColumnMetaSet?: Array<ColumnMeta>
  /**
   * 总记录数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRuleExecResults返回参数结构体
 */
export interface DescribeRuleExecResultsResponse {
  /**
   * 规则执行结果列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: RuleExecResultPage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 质量评分趋势
 */
export interface QualityScoreTrend {
  /**
   * 周期平均分
注意：此字段可能返回 null，表示取不到有效值。
   */
  AverageScore: number
  /**
   * 日评分列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  DailyScoreList: Array<DailyScoreInfo>
}

/**
 * 规则模版
 */
export interface RuleTemplate {
  /**
   * 规则模版ID
   */
  RuleTemplateId?: number
  /**
   * 规则模版名称
   */
  Name?: string
  /**
   * 规则模版描述
   */
  Description?: string
  /**
   * 模版类型（1：系统模版，2：自定义）
   */
  Type?: number
  /**
   * 规则适用的源数据对象类型（1：常量，2：离线表级，3：离线字段级别）
   */
  SourceObjectType?: number
  /**
   * 规则适用的源数据对象类型（1：数值，2：字符串）
   */
  SourceObjectDataType?: number
  /**
   * 规则模版源侧内容，区分引擎，JSON 结构
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceContent?: string
  /**
   * 源数据适用类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceEngineTypes?: Array<number | bigint>
  /**
   * 规则所属质量维度（1：准确性，2：唯一性，3：完整性，4：一致性，5：及时性，6：有效性）
注意：此字段可能返回 null，表示取不到有效值。
   */
  QualityDim?: number
  /**
   * 规则支持的比较方式类型（1：固定值比较，大于、小于，大于等于等 2：波动值比较，绝对值、上升、下降）
注意：此字段可能返回 null，表示取不到有效值。
   */
  CompareType?: number
  /**
   * 引用次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  CitationCount?: number
  /**
   * 创建人id
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserId?: number
  /**
   * 创建人昵称
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserName?: string
  /**
   * 更新时间yyyy-MM-dd HH:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 是否添加where参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  WhereFlag?: boolean
  /**
   * 是否关联多个库表
注意：此字段可能返回 null，表示取不到有效值。
   */
  MultiSourceFlag?: boolean
  /**
   * 自定义模板SQL表达式
注意：此字段可能返回 null，表示取不到有效值。
   */
  SqlExpression?: string
  /**
   * 模版子维度，0.父维度类型,1.一致性: 枚举范围一致性,2.一致性：数值范围一致性,3.一致性：字段数据相关性
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubQualityDim?: number
  /**
   * sql表达式解析对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResolvedSqlExpression?: SqlExpression
  /**
   * 支持的数据源类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceTypes?: Array<number | bigint>
  /**
   * 创建人IdStr
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserIdStr?: string
}

/**
 * DeleteFile返回参数结构体
 */
export interface DeleteFileResponse {
  /**
   * 删除结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResumeIntegrationTask请求参数结构体
 */
export interface ResumeIntegrationTaskRequest {
  /**
   * 任务id
   */
  TaskId: string
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 事件类型(START, STOP, SUSPEND, RESUME, COMMIT, TIMESTAMP)
   */
  Event?: string
  /**
   * 额外参数
   */
  ExtConfig?: Array<RecordField>
  /**
   * 前端操作类型描述
   */
  EventDesc?: string
}

/**
 * TriggerDsEvent请求参数结构体
 */
export interface TriggerDsEventRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 事件实例信息
   */
  EventCaseList?: Array<EventCaseDTO>
  /**
   * 事件实例信息(连续时间)
   */
  EventBatchCaseList?: Array<EventBatchCaseDTO>
}

/**
 * ModifyDataSource请求参数结构体
 */
export interface ModifyDataSourceRequest {
  /**
   * 数据源名称，在相同SpaceName下，数据源名称不能为空
   */
  Name: string
  /**
   * 数据源类别：绑定引擎、绑定数据库
   */
  Category: string
  /**
   * 数据源类型:枚举值
   */
  Type: string
  /**
   * 数据源ID
   */
  ID?: number
  /**
   * 业务侧数据源的配置信息扩展
   */
  BizParams?: string
  /**
   * 数据源的配置信息，以JSON KV存储，根据每个数据源类型不同，而KV存储信息不同
   */
  Params?: string
  /**
   * 数据源描述信息
   */
  Description?: string
  /**
   * 数据源展示名，为了可视化查看
   */
  Display?: string
  /**
   * 若数据源列表为绑定数据库，则为db名称
   */
  DatabaseName?: string
  /**
   * 数据源引擎的实例ID，如CDB实例ID
   */
  Instance?: string
  /**
   * 数据源数据源的可见性，1为可见、0为不可见。默认为1
   */
  Status?: number
  /**
   * 数据源所属的业务空间名称
   */
  ClusterId?: string
  /**
   * 是否采集
   */
  Collect?: string
  /**
   * 项目id
   */
  OwnerProjectId?: string
  /**
   * 项目名称
   */
  OwnerProjectName?: string
  /**
   * 项目中文名
   */
  OwnerProjectIdent?: string
  /**
   * cos bucket
   */
  COSBucket?: string
  /**
   * cos region
   */
  COSRegion?: string
  /**
   * 操作项目id
   */
  ProjectId?: string
  /**
   * 数据源开发环境配置
   */
  DevelopmentParams?: string
}

/**
 * DescribePendingSubmitTaskList请求参数结构体
 */
export interface DescribePendingSubmitTaskListRequest {
  /**
   * 项目编号
   */
  ProjectId: string
  /**
   * 工作流编号
   */
  WorkflowId?: string
  /**
   * 任务编号列表
   */
  TaskIdList?: Array<string>
}

/**
 * TriggerEvent返回参数结构体
 */
export interface TriggerEventResponse {
  /**
   * 成功或者失败
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: BatchReturn
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务告警信息
 */
export interface TaskAlarmInfo {
  /**
   * 任务ID
   */
  TaskId: string
  /**
   * 规则名称
   */
  RegularName: string
  /**
   * 规则状态(0表示关闭，1表示打开)
   */
  RegularStatus: number
  /**
   * 告警级别(0表示普通，1表示重要，2表示紧急)
   */
  AlarmLevel: number
  /**
   * 告警方式,多个用逗号隔开（1:邮件，2:短信，3:微信，4:语音，5:代表企业微信，6:http）
   */
  AlarmWay: string
  /**
   * 任务类型(201表示实时，202表示离线)
   */
  TaskType: number
  /**
   * ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * 规则ID
   */
  RegularId?: string
  /**
   * 告警指标,0表示任务失败，1表示任务运行超时，2表示任务停止，3表示任务暂停
，4写入速度，5读取速度，6读取吞吐，7写入吞吐, 8脏数据字节数，9脏数据条数
   */
  AlarmIndicator?: number
  /**
   * 指标阈值(1表示离线任务第一次运行失败，2表示离线任务所有重试完成后失败)
注意：此字段可能返回 null，表示取不到有效值。
   */
  TriggerType?: number
  /**
   * 预计的超时时间(分钟级别)
注意：此字段可能返回 null，表示取不到有效值。
   */
  EstimatedTime?: number
  /**
   * 告警接收人ID，多个用逗号隔开
   */
  AlarmRecipientId?: string
  /**
   * 项目ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * 创建人
注意：此字段可能返回 null，表示取不到有效值。
   */
  Creater?: string
  /**
   * 告警接收人昵称，多个用逗号隔开
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmRecipientName?: string
  /**
   * 告警指标描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmIndicatorDesc?: string
  /**
   * 实时任务告警需要的参数，1是大于2是小于
注意：此字段可能返回 null，表示取不到有效值。
   */
  Operator?: number
  /**
   * 节点id，多个逗号分隔
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeId?: string
  /**
   * 节点名称，多个逗号分隔
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeName?: string
  /**
   * 指标列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmIndicatorInfos?: Array<AlarmIndicatorInfo>
  /**
   * 告警接收人类型，0指定人员；1任务责任人
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmRecipientType?: number
  /**
   * 免打扰时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  QuietPeriods?: Array<QuietPeriod>
  /**
   * 企业微信群Hook地址，多个hook地址使用,隔开
注意：此字段可能返回 null，表示取不到有效值。
   */
  WeComHook?: string
  /**
   * 最近操作时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 最近操作人Uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  OperatorUin?: string
  /**
   * 关联任务数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskCount?: number
  /**
   * 监控对象类型,1:所有任务,2:指定任务,3:指定责任人
注意：此字段可能返回 null，表示取不到有效值。
   */
  MonitorType?: number
  /**
   * 监控对象列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  MonitorObjectIds?: Array<string>
  /**
   * 最近一次告警的实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  LatestAlarmInstanceId?: string
  /**
   * 最近一次告警时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LatestAlarmTime?: string
  /**
   * 告警规则描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 飞书群Hook地址，多个hook地址使用,隔开
注意：此字段可能返回 null，表示取不到有效值。
   */
  LarkWebHooks?: string
  /**
   * 钉钉群Hook地址，多个hook地址使用,隔开
注意：此字段可能返回 null，表示取不到有效值。
   */
  DingDingWebHooks?: string
  /**
   * 业务类型, 0-非默认, 1-默认
注意：此字段可能返回 null，表示取不到有效值。
   */
  BusinessType?: number
}

/**
 * DescribeSchedulerTaskCntByStatus请求参数结构体
 */
export interface DescribeSchedulerTaskCntByStatusRequest {
  /**
   * 1
   */
  TaskType?: number
  /**
   * Y
   */
  TypeName?: string
  /**
   * 111
   */
  ProjectId?: string
  /**
   * 1
   */
  InCharge?: string
  /**
   * 工作流ID
   */
  WorkflowId?: string
  /**
   * 项目ID列表，如果传了 ProjectIds ，ProjectId 不会生效
   */
  ProjectIds?: Array<string>
  /**
   * 资源组ID筛选
   */
  ResourceGroupIds?: Array<string>
}

/**
 * ModifyApproveStatus请求参数结构体
 */
export interface ModifyApproveStatusRequest {
  /**
   * 审批单ids
   */
  ApproveIds?: Array<string>
  /**
   * 审批备注
   */
  Remark?: string
  /**
   * 状态
   */
  Status?: string
}

/**
 * UpdateDataModelRegistryInfo返回参数结构体
 */
export interface UpdateDataModelRegistryInfoResponse {
  /**
   * 数语向wedata注册成功
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOperateOpsTasks返回参数结构体
 */
export interface DescribeOperateOpsTasksResponse {
  /**
   * 任务列表信息
   */
  Data?: OpsTaskInfoPage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeResourceManagePathTrees请求参数结构体
 */
export interface DescribeResourceManagePathTreesRequest {
  /**
   * 项目ID
   */
  ProjectId?: string
  /**
   * 名字，供搜索
   */
  Name?: string
  /**
   * 文件类型
   */
  FileType?: string
  /**
   * 文件路径
   */
  FilePath?: string
  /**
   * 文件夹类型
personal 个人
project 项目
resource 资源
   */
  DirType?: string
}

/**
 * DescribeDutyScheduleDetails返回参数结构体
 */
export interface DescribeDutyScheduleDetailsResponse {
  /**
   * 值班日历信息
   */
  Data?: Array<DutyScheduleDetailsInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务集成信息
 */
export interface TaskLineageInfo {
  /**
   * 任务 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskName?: string
  /**
   * 表名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableName?: string
  /**
   * 表 URI，格式：dsn.name
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableUri?: string
  /**
   * 表方向类型
    - 0 - table作为源表
    - 1 - table作为目标表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: number
  /**
   * 数据源ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataSourceId?: number
  /**
   * 数据源类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataSourceType?: string
  /**
   * 数据库名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseName?: string
  /**
   * 模型名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SchemaName?: string
}

/**
 * DescribeTableQualityDetails返回参数结构体
 */
export interface DescribeTableQualityDetailsResponse {
  /**
   * 表质量分详情结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: TableQualityDetailPage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProjectUsers请求参数结构体
 */
export interface DescribeProjectUsersRequest {
  /**
   * 分页号
   */
  PageNumber: number
  /**
   * 分页大小
   */
  PageSize: number
  /**
   * 【过滤参数】自定义条件查询
   */
  Filters?: Array<FilterOptional>
  /**
   * 【排序参数】排序字段
   */
  OrderFields?: Array<OrderFieldOptional>
  /**
   * 是否项目管理员
   */
  IsProjectAdmin?: boolean
}

/**
 * 返回命令id
 */
export interface CommonIdOpsDto {
  /**
   * 返回补录计划id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
}

/**
 * BatchStopWorkflowsByIds返回参数结构体
 */
export interface BatchStopWorkflowsByIdsResponse {
  /**
   * 操作返回结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: OperationOpsDto
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 规则组调度信息
 */
export interface RuleGroupSchedulerInfo {
  /**
   * 规则组ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id: number
  /**
   * 1:未配置 2:关联生产调度 3:离线周期检测
注意：此字段可能返回 null，表示取不到有效值。
   */
  MonitorType: number
  /**
   * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime: string
  /**
   * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime: string
  /**
   * 循环类型简写
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleType: string
  /**
   * 循环步长
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleStep: number
  /**
   * 循环类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleDesc: string
  /**
   * 离线周期检测下指定时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskAction: string
  /**
   * 离线周期检测下延迟时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  DelayTime: number
  /**
   * 离线周期检测下注册到任务调度的任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleTaskId: string
  /**
   * 关联生产调度下关联的任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssociateTaskIds: Array<string>
}

/**
 * 数据源对象
 */
export interface DatasourceBaseInfo {
  /**
   * 若数据源列表为绑定数据库，则为db名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseNames?: Array<string>
  /**
   * 数据源描述信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 数据源ID
   */
  ID?: number
  /**
   * 数据源引擎的实例ID，如CDB实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Instance?: string
  /**
   * 数据源名称，在相同SpaceName下，数据源名称不能为空
   */
  Name?: string
  /**
   * 数据源引擎所属区域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * 数据源类型:枚举值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 数据源所属的集群id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
  /**
   * 数据源版本信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Version?: string
  /**
   * 数据源附带参数信息Params json字符串
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamsString?: string
  /**
   * 区分数据源类型自定义源还是系统源
注意：此字段可能返回 null，表示取不到有效值。
   */
  Category?: string
}

/**
 * 任务依赖边详情
 */
export interface LinkOpsDto {
  /**
   * 边的id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id: string
  /**
   * 边的key
注意：此字段可能返回 null，表示取不到有效值。
   */
  LinkKey: string
  /**
   * 边的源节点
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskFrom: string
  /**
   * 边的目标节点
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskTo: string
  /**
   * 责任人
注意：此字段可能返回 null，表示取不到有效值。
   */
  InCharge: string
  /**
   * 父子任务之间的依赖关系
注意：此字段可能返回 null，表示取不到有效值。
   */
  LinkDependencyType: string
  /**
   * 父子任务之间依赖偏移量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Offset: string
  /**
   * 边的类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  LinkType: string
  /**
   * 工作流id
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowId: string
}

/**
 * 合并元数据Manifests治理项
 */
export interface DlcMergeManifestsInfo {
  /**
   * 是否启用合并元数据Manifests文件治理项：enable、none
注意：此字段可能返回 null，表示取不到有效值。
   */
  MergeManifestsEnable?: string
  /**
   * 用于运行合并元数据Manifests文件治理项的引擎名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Engine?: string
  /**
   * 合并元数据Manifests文件治理运行周期，单位为分钟
注意：此字段可能返回 null，表示取不到有效值。
   */
  IntervalMin?: number
}

/**
 * DescribeWorkflowListByProjectId请求参数结构体
 */
export interface DescribeWorkflowListByProjectIdRequest {
  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * 告警指标
 */
export interface AlarmIndicatorInfo {
  /**
   * 指标id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * 告警指标,0任务失败,1任务运行超时,2任务停止,3任务暂停, 4读取速度,5写入速度,6读取吞吐 7写入吞吐, 8脏数据字节数,9脏数据条数,10任务异常,11任务检测异常, 12重启次数, 13任务延时, 14近20分内的重启次数 15传输延迟,16业务延迟, 50离线包CPU使用率, 51离线包内存使用率, 52离线包并行度使用率, 53离线包排队中的实例数, 54实时包资源使用率, 55实时包运行中的任务数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmIndicator?: number
  /**
   * 告警指标描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmIndicatorDesc?: string
  /**
   * 指标阈值，1表示离线任务第一次运行失败，2表示离线任务所有重试完成后失败
注意：此字段可能返回 null，表示取不到有效值。
   */
  TriggerType?: number
  /**
   * 预计的超时时间，分钟级别
注意：此字段可能返回 null，表示取不到有效值。
   */
  EstimatedTime?: number
  /**
   * 告警阈值的算子,1 大于,2 小于
注意：此字段可能返回 null，表示取不到有效值。
   */
  Operator?: number
  /**
   * 告警指标阈值单位：ms(毫秒)、s(秒)、min(分钟)
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmIndicatorUnit?: string
  /**
   * 告警周期
   */
  Duration?: number
  /**
   * 告警周期单位:hour,minute,day
   */
  DurationUnit?: string
  /**
   * 周期内最多告警次数
   */
  MaxTimes?: number
  /**
   * 指标阈值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Threshold?: number
  /**
   * 时间范围单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndicatorTimeRangeUnit?: string
  /**
   * 时间范围值
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndicatorTimeRangeValue?: number
}

/**
 * DescribeDataServicePublishedApiDetail返回参数结构体
 */
export interface DescribeDataServicePublishedApiDetailResponse {
  /**
   * 服务详情
   */
  Data?: DescribeDataServicePublishedApiDetailResp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 表的元数据信息
 */
export interface TableMeta {
  /**
   * 表的全局唯一ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableId?: string
  /**
   * 表名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableName?: string
  /**
   * 责任人
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableOwnerName?: string
  /**
   * 数据源全局唯一ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceId?: number
  /**
   * 所属集群名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterName?: string
  /**
   * 数据源名
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceName?: string
  /**
   * 数据库名
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseName?: string
  /**
   * 表路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  TablePath?: string
  /**
   * 表中文名
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableNameCn?: string
  /**
   * 元数据租户ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetastoreId?: number
  /**
   * 技术类型，可用值:HIVE,MYSQL,KAFKA, HBASE
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetastoreType?: string
  /**
   * 表描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 列分隔符
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColumnSeparator?: string
  /**
   * 存储格式
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageFormat?: string
  /**
   * 存储量，字节数
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageSize?: number
  /**
   * 表类型，如hive MANAGED_TABLE;EXTERNAL_TABLE
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableType?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 最近数据变更时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifyTime?: string
  /**
   * 最近DDL变更时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  DdlModifyTime?: string
  /**
   * 数据最后访问时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastAccessTime?: string
  /**
   * 所属项目英文名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectName?: string
  /**
   * 所属数据目录id（可能多个）
注意：此字段可能返回 null，表示取不到有效值。
   */
  BizCatalogIds?: Array<string>
  /**
   * 所属数据目录（可能多个）
注意：此字段可能返回 null，表示取不到有效值。
   */
  BizCatalogNames?: Array<string>
  /**
   * true已收藏/false表示未收藏状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  HasFavorite?: boolean
  /**
   * 生命周期
注意：此字段可能返回 null，表示取不到有效值。
   */
  LifeCycleTime?: number
  /**
   * 存储量，已转为适合的单位展示
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageSizeWithUnit?: string
  /**
   * 数据源引擎的实例ID：如EMR集群实例ID/数据源实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 数据来源技术类型：HIVE/MYSQL/HBASE/KAFKA等
注意：此字段可能返回 null，表示取不到有效值。
   */
  TechnologyType?: string
  /**
   * 表英文名
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableNameEn?: string
  /**
   * 项目Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * Kafka Topic 分区数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Partitions?: string
  /**
   * Kafka Topic 副本数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReplicationFactor?: string
  /**
   * 所属项目英中文名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectDisplayName?: string
  /**
   * 数据最后修改时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataModifyTime?: string
  /**
   * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
  /**
   * 当前用户是否有管理员权限
注意：此字段可能返回 null，表示取不到有效值。
   */
  HasAdminAuthority?: boolean
  /**
   * 数据源展示名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceDisplayName?: string
  /**
   * 数据库ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseId?: string
  /**
   * 租户下对表的收藏总次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  FavoriteCount?: number
  /**
   * 租户下对表的点赞总次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  LikeCount?: number
  /**
   * true已点赞/false表示未点赞状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  HasLike?: boolean
  /**
   * 表的资产评分
注意：此字段可能返回 null，表示取不到有效值。
   */
  TablePropertyScore?: TablePropertyScore
  /**
   * 表的热度值
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableHeat?: TableHeat
  /**
   * 数据源ownerProjectId
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerProjectId?: string
  /**
   * 表负责人ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableOwnerId?: string
  /**
   * 系统源-CLUSTER, DB-自定义源
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataSourceCategory?: string
  /**
   * 表字段信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Columns?: Array<SearchColumnDocVO>
  /**
   * 表采集类型
TABLE, VIEW, MANAGED_TABLE(Hive管理表), EXTERNAL_TABLE(Hive外部表), VIRTUAL_VIEW(虚拟视图), MATERIALIZED_VIEW(物化视图), LATERAL_VIEW, INDEX_TABLE(索引表), END_SELECT(查询结构), INSTANCE(中间临时表类型(数据血缘)), CDW(CDW表类型)
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetaCrawlType?: string
  /**
   * 是否视图
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsView?: boolean
  /**
   * 存储位置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Location?: string
  /**
   * 判断是否是分区表1 是 0否
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsPartitionTable?: number
  /**
   * 分区字段 key
注意：此字段可能返回 null，表示取不到有效值。
   */
  PartitionColumns?: Array<string>
  /**
   * 生命周期-分区保留天数【分区保留策略时有效】
注意：此字段可能返回 null，表示取不到有效值。
   */
  PartitionExpireDays?: number
  /**
   * 表附属信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableProperties?: Array<TableMetaProperty>
  /**
   * 环境，取值 prod或者 dev
注意：此字段可能返回 null，表示取不到有效值。
   */
  Environment?: string
  /**
   * 数据库模式
注意：此字段可能返回 null，表示取不到有效值。
   */
  Schema?: string
  /**
   * 关联数据眼信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  CollectDatasourceList?: Array<GovDatasourceInfo>
  /**
   * 采集任务id
注意：此字段可能返回 null，表示取不到有效值。
   */
  CollectJobId?: string
  /**
   * 采集任务名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  CollectJobName?: string
  /**
   * 数据源urn
注意：此字段可能返回 null，表示取不到有效值。
   */
  Urn?: string
  /**
   * 是否有修改业务权限
注意：此字段可能返回 null，表示取不到有效值。
   */
  HasBizPermission?: boolean
  /**
   * 引擎侧创建人
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerByEngine?: string
  /**
   * 用户无映射账户，请先完成账户映射后再来申请。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorTips?: string
  /**
   * 是否支持select or ddl
注意：此字段可能返回 null，表示取不到有效值。
   */
  IfSupportCreateAndDDL?: CreateAndDDLSupport
}

/**
 * RegisterEvent返回参数结构体
 */
export interface RegisterEventResponse {
  /**
   * 成功或者失败
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: BatchReturn
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CountOpsInstanceState返回参数结构体
 */
export interface CountOpsInstanceStateResponse {
  /**
   * 任务对应实例的状态统计
   */
  Data?: TaskInstanceCountDto
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 订阅接收人
 */
export interface SubscribeReceiver {
  /**
   * 接收人Uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReceiverUserId?: number
  /**
   * 接收人名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReceiverName?: string
  /**
   * 接收人Uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReceiverUserIdStr?: string
}

/**
 * 事件实例分页查询结果
 */
export interface EventCaseAuditLogVOCollection {
  /**
   * 结果总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 总页数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPage?: number
  /**
   * 当前页记录数
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageCount?: number
  /**
   * 页码
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
  /**
   * 分页大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * 分页数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<EventCaseAuditLogOptDto>
}

/**
 * DescribeQualityScoreTrend请求参数结构体
 */
export interface DescribeQualityScoreTrendRequest {
  /**
   * 统计开始日期
   */
  StatisticsStartDate: number
  /**
   * 统计结束日期
   */
  StatisticsEndDate: number
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 数据来源id
   */
  DatasourceId?: string
  /**
   * 1:按全维度权重计算,2:按已配置维度权重计算,3:不按维度权重计算,默认1
   */
  ScoreType?: string
  /**
   * 过滤参数
   */
  Filters?: Array<Filter>
}

/**
 * 抢锁状态：是否可以抢锁和当前持锁人
 */
export interface RobLockState {
  /**
   * 是否可以抢锁
   */
  IsRob?: boolean
  /**
   * 当前持锁人
   */
  Locker?: string
}

/**
 * SubmitTaskTestRun请求参数结构体
 */
export interface SubmitTaskTestRunRequest {
  /**
   * taskId列表
   */
  TaskIds: string
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 工作流id
   */
  WorkFlowId?: string
  /**
   * 工作流名称
   */
  Name?: string
  /**
   * 工作流任务列表
   */
  Tasks?: Array<StageCloudApiRequest>
  /**
   * 备注
   */
  Description?: string
  /**
   * 运行参数，map的Json形式
   */
  RunParams?: string
  /**
   * 脚本内容
   */
  ScriptContent?: string
  /**
   * 版本号
   */
  VersionId?: string
}

/**
 * DescribeAlarmEvents请求参数结构体
 */
export interface DescribeAlarmEventsRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 当前页
   */
  PageNumber: number
  /**
   * 每页记录数
   */
  PageSize: number
  /**
   * 过滤条件(key可以是：AlarmLevel,AlarmIndicator,KeyWord)
   */
  Filters?: Array<Filter>
  /**
   * 排序字段（AlarmTime）
   */
  OrderFields?: Array<OrderField>
  /**
   * 类型(201表示实时，202表示离线)
   */
  TaskType?: number
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
  /**
   * 监控对象类型(1:所有任务,2:指定任务,3:指定责任人,4:指定资源组)
   */
  MonitorType?: number
}

/**
 * 质量检查对比结果
 */
export interface CompareResult {
  /**
   * 对比结果项列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items: Array<CompareResultItem>
  /**
   * 检测总行数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalRows: number
  /**
   * 检测通过行数
注意：此字段可能返回 null，表示取不到有效值。
   */
  PassRows: number
  /**
   * 检测不通过行数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TriggerRows: number
}

/**
 * CheckAlarmRegularNameExist返回参数结构体
 */
export interface CheckAlarmRegularNameExistResponse {
  /**
   * 是否重名
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资管管理-上传资源请求
 */
export interface UploadResourceRequestInfo {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 资源路径
   */
  FilePath: string
  /**
   * 桶名称
   */
  BucketName: string
  /**
   * 所属地区
   */
  Region: string
  /**
   * 是否为新资源
   */
  NewFile: boolean
  /**
   * 资源列表
   */
  FileList?: Array<string>
  /**
   * 资源大小列表
   */
  FileSizeList?: Array<string>
  /**
   * File Md5（适配私有化，公有云可以不传）
   */
  FileMd5?: string
}

/**
 * DeleteProjectParamDs请求参数结构体
 */
export interface DeleteProjectParamDsRequest {
  /**
   * 参数名
   */
  ParamKey: string
  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * Content
 */
export interface Content {
  /**
   * 任务id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskName?: string
  /**
   * 诊断
注意：此字段可能返回 null，表示取不到有效值。
   */
  Diagnose?: string
  /**
   * 理由
注意：此字段可能返回 null，表示取不到有效值。
   */
  Reason?: string
  /**
   * 操作
注意：此字段可能返回 null，表示取不到有效值。
   */
  Operation?: string
  /**
   * 链接
注意：此字段可能返回 null，表示取不到有效值。
   */
  Url?: string
}

/**
 * 速度值对象
 */
export interface SpeedValue {
  /**
   * 带毫秒的时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  Time?: number
  /**
   * 无
注意：此字段可能返回 null，表示取不到有效值。
   */
  Speed?: number
}

/**
 * 函数提交版本信息
 */
export interface FunctionVersion {
  /**
   * 版本号：V0 V1 V2
   */
  Tag?: string
  /**
   * 提交人 ID
   */
  UserId?: string
  /**
   * 变更类型：ADD、MODIFY
   */
  Type?: string
  /**
   * 备注
   */
  Comment?: string
  /**
   * 提交时间: UTC 秒数
   */
  Timestamp?: string
  /**
   * 提交人名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserName?: string
  /**
   * 版本内容：json string 格式
注意：此字段可能返回 null，表示取不到有效值。
   */
  Content?: string
}

/**
 * 概览趋势结果
 */
export interface RuleExecDateStat {
  /**
   * 统计日期
   */
  StatDate: string
  /**
   * 告警数
   */
  AlarmCnt: number
  /**
   * 阻塞数
   */
  PipelineCnt: number
}

/**
 * DescribeThirdTaskRunLog返回参数结构体
 */
export interface DescribeThirdTaskRunLogResponse {
  /**
   * 获取第三方运行日志
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTaskAlarmRegulations请求参数结构体
 */
export interface DescribeTaskAlarmRegulationsRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 当前页
   */
  PageNumber: number
  /**
   * 每页记录数
   */
  PageSize: number
  /**
   * 过滤条件(name有RegularStatus、AlarmLevel、AlarmIndicator、RegularName)
   */
  Filters?: Array<Filter>
  /**
   * 排序条件(RegularId)
   */
  OrderFields?: Array<OrderField>
  /**
   * 任务ID
   */
  TaskId?: string
  /**
   * 任务类型(201代表实时任务，202代表离线任务)
   */
  TaskType?: number
}

/**
 * CreateCustomFunction返回参数结构体
 */
export interface CreateCustomFunctionResponse {
  /**
   * 函数唯一标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  FunctionId?: string
  /**
   * 无
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMessage?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例统计信息展示
 */
export interface ScreenInstanceInfo {
  /**
   * 统计标示 0：全部、1：当前天、2：昨天
注意：此字段可能返回 null，表示取不到有效值。
   */
  CountTag?: number
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalNum?: number
  /**
   * 运行中
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunningNum?: number
  /**
   * 等待运行
注意：此字段可能返回 null，表示取不到有效值。
   */
  WaitRunningNum?: number
  /**
   * 等待上游
注意：此字段可能返回 null，表示取不到有效值。
   */
  DependencyNum?: number
  /**
   * 等待事件
注意：此字段可能返回 null，表示取不到有效值。
   */
  WaitEventNum?: string
  /**
   * 正在终止
注意：此字段可能返回 null，表示取不到有效值。
   */
  StoppingNum?: number
  /**
   * 成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  SucceedNum?: number
  /**
   * 失败
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailedNum?: number
  /**
   * 跳过运行总数
   */
  SkipRunningNum?: number
}

/**
 * ModifyTaskInfo请求参数结构体
 */
export interface ModifyTaskInfoRequest {
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 任务ID
   */
  TaskId: string
  /**
   * 执行时间，单位分钟，天/周/月/年调度才有。比如天调度，每天的02:00点执行一次，delayTime就是120分钟
   */
  DelayTime?: number
  /**
   * 启动时间
   */
  StartupTime?: number
  /**
   * 自依赖类型  1:有序串行 一次一个 排队, 2: 无序串行 一次一个 不排队， 3:并行 一次多个
   */
  SelfDepend?: number
  /**
   * 生效开始时间，格式 yyyy-MM-dd HH:mm:ss
   */
  StartTime?: string
  /**
   * 生效结束时间，格式 yyyy-MM-dd HH:mm:ss
   */
  EndTime?: string
  /**
   * 调度配置-弹性周期配置，小时/周/月/年调度才有，小时任务指定每天的0点3点4点跑，则为'0,3,4'。
   */
  TaskAction?: string
  /**
   * "周期类型  0:crontab类型, 1:分钟，2:小时，3:天，4:周，5:月，6:一次性，7:用户驱动，10:弹性周期 周,11:弹性周期 月,12:年,13:即时触发Instant类型，与正常周期调度任务逻辑隔离
   */
  CycleType?: number
  /**
   * 步长，间隔时间，最小1
   */
  CycleStep?: number
  /**
   * cron表达式  周期类型为crontab调度才需要
   */
  CrontabExpression?: string
  /**
   * 执行时间左闭区间，格式：HH:mm  小时调度才有，例如小时任务, 每日固定区间生效
   */
  ExecutionStartTime?: string
  /**
   * 执行时间右闭区间，格式：HH:mm  小时调度才有，例如小时任务, 每日固定区间生效
   */
  ExecutionEndTime?: string
  /**
   * 新的任务名
   */
  TaskName?: string
  /**
   * 失败重试间隔,单位分钟，创建任务的时候已经给了默认值
   */
  RetryWait?: number
  /**
   * 失败重试次数，创建任务的时候已经给了默认值
   */
  TryLimit?: number
  /**
   * 是否可重试，1代表可以重试
   */
  Retriable?: number
  /**
   * 运行优先级，4高 5中 6低
   */
  RunPriority?: number
  /**
   * 任务的扩展配置
   */
  TaskExt?: Array<TaskExtInfo>
  /**
   * 执行资源组id，需要去资源管理服务上创建调度资源组，并且绑定cvm机器
   */
  ResourceGroup?: string
  /**
   * 资源池队列名称
   */
  YarnQueue?: string
  /**
   * 资源组下具体执行机，any 表示可以跑在任意一台。
   */
  BrokerIp?: string
  /**
   * 责任人
   * @deprecated
   */
  InCharge?: string
  /**
   * 任务备注
   */
  Notes?: string
  /**
   * 任务参数
   */
  TaskParamInfos?: Array<ParamInfo>
  /**
   * 源数据源
   */
  SourceServer?: string
  /**
   * 目标数据源
   */
  TargetServer?: string
  /**
   * 是否支持工作流依赖 yes / no 默认 no
   */
  DependencyWorkflow?: string
  /**
   * 依赖配置
   */
  DependencyConfigDTOs?: Array<DependencyConfig>
  /**
   * 执行耗时
   */
  ExecutionTTL?: number
  /**
   * 脚本是否改变
   */
  ScriptChange?: boolean
  /**
   * 责任人id
   */
  InChargeIds?: Array<string>
}

/**
 * DescribeOperateOpsTasks请求参数结构体
 */
export interface DescribeOperateOpsTasksRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 文件夹id，多个文件夹以逗号分隔
   */
  FolderIdList?: string
  /**
   * 工作流id，多个工作流id之间以英文字符逗号分隔
   */
  WorkFlowIdList?: string
  /**
   * 工作流名称，多个工作流名称之间以英文字符逗号分隔
   */
  WorkFlowNameList?: string
  /**
   * 任务名称，多个任务名称之间以英文字符逗号分隔
   */
  TaskNameList?: string
  /**
   * 任务id，多个任务id之间以英文字符逗号分隔
   */
  TaskIdList?: string
  /**
   * 页号
   */
  PageNumber?: string
  /**
   * 分页大小
   */
  PageSize?: string
  /**
   * 排序字段，支持字段为FirstSubmitTime和FirstRunTime，标识最近提交和首次执行事件
   */
  SortItem?: string
  /**
   * 排序类型。两种取值 DESC、ASC
   */
  SortType?: string
  /**
   * 责任人，多个责任人之间以英文字符逗号分隔
   */
  InChargeList?: string
  /**
   * 任务类型Id字符串，多个任务类型id之间以英文字符逗号分隔
   */
  TaskTypeIdList?: string
  /**
   * 任务状态字符串，多个任务状态之间以英文字符逗号分隔
   */
  StatusList?: string
  /**
   * 任务周期类型字符串，多个任务周期之间以英文字符逗号分隔
   */
  TaskCycleUnitList?: string
  /**
   * 任务所属产品类型
   */
  ProductNameList?: string
  /**
   * 数据源id或（仅针对离线同步任务）来源数据源id
   */
  SourceServiceId?: string
  /**
   * 数据源类型或（仅针对离线同步任务）来源数据源类型
   */
  SourceServiceType?: string
  /**
   * （仅针对离线同步任务）目标数据源id
   */
  TargetServiceId?: string
  /**
   * （仅针对离线同步任务）目标数据源类型
   */
  TargetServiceType?: string
  /**
   * 告警类型，多个类型以逗号分隔
   */
  AlarmType?: string
  /**
   * 资源组id,多个资源组id之间以英文字符逗号分隔
   */
  ExecutorGroupIdList?: string
  /**
   * 任务标签
   */
  TaskTags?: Array<TaskTag>
  /**
   * 查询关键字
   */
  KeyWord?: string
  /**
   * 实例生成方式
   */
  InitStrategy?: string
  /**
   * 额外请求的资源类型
   */
  RequestResourceTypes?: Array<string>
  /**
   * 项目ID列表
   */
  ProjectIds?: Array<string>
}

/**
 * DescribeBatchOperateTask请求参数结构体
 */
export interface DescribeBatchOperateTaskRequest {
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 页码
   */
  Page: string
  /**
   * 页号
   */
  Size: string
  /**
   * 状态列表
草稿：'NS'，'N','P','R'
运行：''Y'
停止：'F'
冻结：'O'
停止中：'T'
   */
  StatusList?: Array<string>
  /**
   * 责任人名列表
   */
  OwnerNameList?: Array<string>
  /**
   * 工作流列表
   */
  WorkflowIdList?: Array<string>
  /**
   * 任务名称搜索
   */
  TaskNameFilter?: string
  /**
   * 任务类型列表
   */
  TaskTypeList?: Array<string>
  /**
   * 文件夹列表
   */
  FordIdList?: Array<string>
  /**
   * 任务Id搜索
   */
  TaskIdFilter?: string
  /**
   * 责任人搜索
   */
  OwnerNameFilter?: string
  /**
   * 排序字段：
UpdateTime
CreateTime
   */
  SortItem?: string
  /**
   * asc:升序
desc:降序
   */
  SortType?: string
  /**
   * 引擎类型列表：三种
SparkJob
SparkSql
presto
   */
  DataEngineList?: Array<string>
  /**
   * 操作人名
   */
  UserId?: string
  /**
   * 1
   */
  OwnerId?: string
  /**
   * 1
   */
  TenantId?: string
  /**
   * 数据源ID列表
   */
  DatasourceIdList?: Array<string>
  /**
   * 数据源类型列表
   */
  DatasourceTypeList?: Array<string>
  /**
   * 调度单位类型列表
   */
  CycleUnitList?: Array<string>
  /**
   * 是否筛选出可提交的任务
   */
  CanSubmit?: boolean
}

/**
 * DescribeTableMeta返回参数结构体
 */
export interface DescribeTableMetaResponse {
  /**
   * 表的元数据信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableMeta?: TableMeta
  /**
   * 生命周期信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  LifecycleInfo?: LifecycleInfo
  /**
   * 标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagVoteSumList?: TagVoteSum
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务运维详情
 */
export interface TaskOpsDto {
  /**
   * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId: string
  /**
   * 虚拟任务id
注意：此字段可能返回 null，表示取不到有效值。
   */
  VirtualTaskId: string
  /**
   * 虚拟任务标记
注意：此字段可能返回 null，表示取不到有效值。
   */
  VirtualFlag: boolean
  /**
   * 任务名
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskName: string
  /**
   * 工作流id
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowId: string
  /**
   * 任务为虚拟任务时，任务所在的真实工作流Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  RealWorkflowId: string
  /**
   * 工作流名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowName: string
  /**
   * 文件夹id
注意：此字段可能返回 null，表示取不到有效值。
   */
  FolderId: string
  /**
   * 文件夹名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  FolderName: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime: string
  /**
   * 最近更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastUpdate: string
  /**
   * 任务状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: string
  /**
   * 责任人
注意：此字段可能返回 null，表示取不到有效值。
   */
  InCharge: string
  /**
   * 责任人用户id
注意：此字段可能返回 null，表示取不到有效值。
   */
  InChargeId: string
  /**
   * 调度生效日期
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime: string
  /**
   * 调度结束日期
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime: string
  /**
   * 执行时间左闭区间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutionStartTime: string
  /**
   * 执行时间右闭区间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutionEndTime: string
  /**
   * 周期类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleType: string
  /**
   * 步长
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleStep: number
  /**
   * 调度cron表达式
注意：此字段可能返回 null，表示取不到有效值。
   */
  CrontabExpression: string
  /**
   * 延时执行时间，unit=分钟
注意：此字段可能返回 null，表示取不到有效值。
   */
  DelayTime: number
  /**
   * 开始执行时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartupTime: number
  /**
   * 重试等待时间, unit=分钟
注意：此字段可能返回 null，表示取不到有效值。
   */
  RetryWait: number
  /**
   * 是否可重试，1 代表可以重试
注意：此字段可能返回 null，表示取不到有效值。
   */
  RetryAble: number
  /**
   * 调度配置-弹性周期配置，小时/周/月/年调度才有，小时任务指定每天的0点3点4点跑，则为'0,3,4'
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskAction: string
  /**
   * 运行次数限制
注意：此字段可能返回 null，表示取不到有效值。
   */
  TryLimit: number
  /**
   * 运行优先级
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunPriority: number
  /**
   * 任务类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskType: TaskTypeOpsDto
  /**
   * 指定的运行节点
注意：此字段可能返回 null，表示取不到有效值。
   */
  BrokerIp: string
  /**
   * 集群name
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId: string
  /**
   * 最小数据时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  MinDateTime: string
  /**
   * 最大数据时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxDateTime: string
  /**
   * 运行耗时超时时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutionTTL: number
  /**
   * 自依赖类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  SelfDepend: string
  /**
   * 左侧坐标
注意：此字段可能返回 null，表示取不到有效值。
   */
  LeftCoordinate: number
  /**
   * 顶部坐标
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopCoordinate: number
  /**
   * 任务备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  Notes: string
  /**
   * 任务初始化策略
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceInitStrategy: string
  /**
   * 计算队列
注意：此字段可能返回 null，表示取不到有效值。
   */
  YarnQueue: string
  /**
   * 最新调度提交时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastSchedulerCommitTime: string
  /**
   * 按cron表达式计算的任务开始执行时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  NormalizedJobStartTime: string
  /**
   * 调度计划描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  SchedulerDesc: string
  /**
   * 计算资源组
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroup: string
  /**
   * 任务创建人
注意：此字段可能返回 null，表示取不到有效值。
   */
  Creator: string
  /**
   * 任务依赖类型 and、or
注意：此字段可能返回 null，表示取不到有效值。
   */
  DependencyRel: string
  /**
   * 任务工作流依赖 yes、no
注意：此字段可能返回 null，表示取不到有效值。
   */
  DependencyWorkflow: string
  /**
   * 事件监听配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventListenerConfig: string
  /**
   * 事件驱动配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventPublisherConfig: string
  /**
   * 虚拟任务状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  VirtualTaskStatus: string
  /**
   * 任务依赖边详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskLinkInfo: LinkOpsDto
  /**
   * 任务产品类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductName: string
  /**
   * 项目id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId: string
  /**
   * 项目标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectIdent: string
  /**
   * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectName: string
  /**
   * 主账户userId
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnId: string
  /**
   * 用户userId
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserId: string
  /**
   * 租户id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TenantId: string
  /**
   * 更新人昵称
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateUser: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime: string
  /**
   * 更新人userId
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateUserId: string
  /**
   * 任务类型id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskTypeId: number
  /**
   * 任务类型描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskTypeDesc: string
  /**
   * 是否展示工作流
注意：此字段可能返回 null，表示取不到有效值。
   */
  ShowWorkflow: boolean
  /**
   * 首次提交时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  FirstSubmitTime: string
  /**
   * 首次运行时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  FirstRunTime: string
  /**
   * 调度描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScheduleDesc: string
  /**
   * 周期
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleNum: number
  /**
   * 表达式
注意：此字段可能返回 null，表示取不到有效值。
   */
  Crontab: string
  /**
   * 开始日期
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartDate: string
  /**
   * 结束日期
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndDate: string
  /**
   * 周期单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleUnit: string
  /**
   * 初始化策略
注意：此字段可能返回 null，表示取不到有效值。
   */
  InitStrategy: string
  /**
   * 层级
注意：此字段可能返回 null，表示取不到有效值。
   */
  Layer: string
  /**
   * 来源数据源ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceServiceId: string
  /**
   * 来源数据源类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceServiceType: string
  /**
   * 目标数据源ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetServiceId: string
  /**
   * 目标数据源类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetServiceType: string
  /**
   * 子任务列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  TasksStr: string
  /**
   * 任务版本是否已提交
注意：此字段可能返回 null，表示取不到有效值。
   */
  Submit: boolean
  /**
   * 资源组id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutorGroupId?: string
  /**
   * 资源组名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutorGroupName?: string
  /**
   * 任务扩展信息(目前返沪离线同步的任务详情)
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskExtInfo?: string
  /**
   * 任务绑定的事件信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventListenerInfos?: Array<AiOpsEventListenerDTO>
  /**
   * 脚本信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScriptInfo?: AiopsScriptInfo
  /**
   * DLC资源配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  DLCResourceConfig?: AiopsDLCResourceConfigDto
  /**
   * 父任务simple信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentTaskInfos?: AiopsSimpleTaskDto
  /**
   * 资源获取标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtResourceFlag?: ExtResourceFlagDto
  /**
   * 父任务simple信息(新)
注意：此字段可能返回 null，表示取不到有效值。
   */
  NewParentTaskInfos?: Array<AiopsSimpleTaskDto>
}

/**
 * DescribeOfflineTaskToken请求参数结构体
 */
export type DescribeOfflineTaskTokenRequest = null

/**
 * DescribeRuleExecDetail请求参数结构体
 */
export interface DescribeRuleExecDetailRequest {
  /**
   * 项目id
   */
  ProjectId?: string
  /**
   * 规则执行id
   */
  RuleExecId?: number
}

/**
 * DeleteResource请求参数结构体
 */
export interface DeleteResourceRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 资源ID
   */
  ResourceId: string
}

/**
 * 数据质量规则组订阅信息
 */
export interface RuleGroupSubscribe {
  /**
   * 规则组Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleGroupId?: number
  /**
   * 订阅接收人列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Receivers?: Array<SubscribeReceiver>
  /**
   * 订阅方式 1.邮件email  2.短信sms
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubscribeType?: Array<number | bigint>
  /**
   * 群机器人配置的webhook信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  WebHooks?: Array<SubscribeWebHook>
  /**
   * 规则Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleId?: number
  /**
   * 规则名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleName?: string
}

/**
 * RegisterEventListener请求参数结构体
 */
export interface RegisterEventListenerRequest {
  /**
   * 关键字，如果是任务，则传任务Id
   */
  Key: string
  /**
   * 事件名称
   */
  EventName: string
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 事件类型，默认 REST_API
   */
  Type?: string
  /**
   * 配置信息，比如最长等待时间1天配置json：{"maxWaitEventTime":1,"maxWaitEventTimeUnit":"DAYS"}
   */
  Properties?: string
}

/**
 * BatchRunOpsTask返回参数结构体
 */
export interface BatchRunOpsTaskResponse {
  /**
   * 操作结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckIntegrationNodeNameExists返回参数结构体
 */
export interface CheckIntegrationNodeNameExistsResponse {
  /**
   * 返回true代表存在，返回false代表不存在
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RobAndLockIntegrationTask返回参数结构体
 */
export interface RobAndLockIntegrationTaskResponse {
  /**
   * 抢锁状态
   */
  RobLockState?: RobLockState
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 补录计划实例集合
 */
export interface MakePlanInstanceOpsDtoCollection {
  /**
   * 记录总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 记录总页数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPage?: number
  /**
   * 当前页记录数
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageCount?: number
  /**
   * 页码
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
  /**
   * 页大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * 记录列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<InstanceOpsDto>
}

/**
 * DeleteTaskAlarmRegular请求参数结构体
 */
export interface DeleteTaskAlarmRegularRequest {
  /**
   * 主键ID
   */
  Id: string
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 任务ID
   */
  TaskId?: string
  /**
   * 任务类型(201表示实时任务，202表示离线任务)
   */
  TaskType?: number
}

/**
 * 对比规则
 */
export interface CompareRule {
  /**
   * 比较条件列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<CompareRuleItem>
  /**
   * 周期性模板默认周期，单位秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleStep?: number
  /**
   * o 表示 或，a 表示 且，数字表示items下标
注意：此字段可能返回 null，表示取不到有效值。
   */
  ComputeExpression?: string
}

/**
 * 比较条件
 */
export interface CompareRuleItem {
  /**
   * 比较类型 1.固定值  2.波动值  3.数值范围比较  4.枚举范围比较  5.不用比较
注意：此字段可能返回 null，表示取不到有效值。
   */
  CompareType?: number
  /**
   * 比较操作类型
<  <=  ==  =>  > !=
IRLCRO:在区间内(左闭右开)
IRLORC:在区间内(左开右闭)
IRLCRC:在区间内(左闭右闭)
IRLORO:在区间内(左开右开)
NRLCRO:不在区间内(左闭右开)
NRLORC:不在区间内(左开右闭)
NRLCRC:不在区间内(左闭右闭)
NRLORO:不在区间内(左开右开)
注意：此字段可能返回 null，表示取不到有效值。
   */
  Operator?: string
  /**
   * 质量统计值类型 1.绝对值  2.上升 3. 下降  4._C包含   5. N_C不包含
注意：此字段可能返回 null，表示取不到有效值。
   */
  ValueComputeType?: number
  /**
   * 比较阈值列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ValueList?: Array<ThresholdValue>
}

/**
 * DescribeInstanceLogFile请求参数结构体
 */
export interface DescribeInstanceLogFileRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 任务ID
   */
  TaskId: string
  /**
   * 实例数据时间
   */
  CurRunDate: string
  /**
   * 请求来源，WEB 前端；CLIENT 客户端
   */
  RequestFromSource?: string
  /**
   * 执行机IP
   */
  BrokerIp?: string
  /**
   * 日志文件名
   */
  OriginFileName?: string
  /**
   * 执行平台下发执行id
   */
  ExecutionJobId?: string
  /**
   * 日志级别，Info/Debug/Warn/Error/All
   */
  LogLevelType?: string
  /**
   * 文件类型,Log/Code
   */
  ExecutionFileType?: string
  /**
   * 生命周期为基础数据进行日志匹配。Dynamic=true动态获取日志链路中使用
   */
  InstanceLifeDetailDtoList?: Array<InstanceLifeDetailDto>
  /**
   * 当前生命周期数
   */
  CurrentLifeRound?: number
  /**
   * 当前生命周期重试次数
   */
  Tries?: number
  /**
   * 动态获取日志信息标识
   */
  Dynamic?: boolean
}

/**
 * UnlockIntegrationTask请求参数结构体
 */
export interface UnlockIntegrationTaskRequest {
  /**
   * 任务id
   */
  TaskId: string
  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * 值班人员
 */
export interface DutyPerson {
  /**
   * 值班人子账号id
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserId: string
  /**
   * 值班人名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserName: string
  /**
   * 值班人员主账号用户id
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUserId?: string
  /**
   * 值班人tenantId
注意：此字段可能返回 null，表示取不到有效值。
   */
  TenantId?: number
  /**
   * 2023-11-02 08:00:00
注意：此字段可能返回 null，表示取不到有效值。
   */
  AddTime?: string
  /**
   * 扩展字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  Params?: string
}

/**
 * DeleteOfflineTask返回参数结构体
 */
export interface DeleteOfflineTaskResponse {
  /**
   * 结果
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例日志信息
 */
export interface IntegrationInstanceLog {
  /**
   * 任务日志信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogInfo?: string
}

/**
 * 任务执行脚本
 */
export interface TaskScriptContent {
  /**
   * 脚本内容 base64编码
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScriptContent: string
}

/**
 * 数据集成大屏趋势图统计结果
 */
export interface IntegrationStatisticsTrendResult {
  /**
   * 统计属性名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatisticName?: Array<string>
  /**
   * 统计值
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatisticValue?: Array<number | bigint>
  /**
   * 统计项目
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatisticType?: string
}

/**
 * DescribeDrInstancePage请求参数结构体
 */
export interface DescribeDrInstancePageRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 任务来源 ADHOC || WORKFLOW
   */
  TaskSource: string
  /**
   * 索引页码
   */
  PageIndex?: number
  /**
   * 页面大小
   */
  PageSize?: number
  /**
   * 任务名称
   */
  TaskName?: string
  /**
   * 提交开始时间 yyyy-MM-dd HH:mm:ss
   */
  StartTime?: string
  /**
   * 提交结束时间 yyyy-MM-dd HH:mm:ss
   */
  EndTime?: string
  /**
   * 文件夹id
   */
  FolderIds?: Array<string>
  /**
   * 工作流id
   */
  WorkflowIds?: Array<string>
  /**
   * 只看我的
   */
  JustMe?: boolean
  /**
   * 任务类型
   */
  TaskTypes?: Array<string>
  /**
   * 试运行提交人userId列表
   */
  SubmitUsers?: Array<string>
  /**
   * 试运行状态
   */
  StatusList?: Array<string>
}

/**
 * 指定时间窗口实例耗时排行
 */
export interface RuntimeInstanceCntTop {
  /**
   * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskName?: string
  /**
   * 责任人
注意：此字段可能返回 null，表示取不到有效值。
   */
  InCharge?: string
  /**
   * 任务周期类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleUnit?: string
  /**
   * 实例状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  State?: string
  /**
   * 耗时
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunTime?: number
  /**
   * 实例运行时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CurRunTime?: string
  /**
   * 等待调度耗时
注意：此字段可能返回 null，表示取不到有效值。
   */
  WaitScheduleTime?: number
  /**
   * 项目ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectName?: string
}

/**
 * 列的元数据
 */
export interface ColumnMeta {
  /**
   * 字段英文名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  NameEn?: string
  /**
   * 字段中文名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  NameCn?: string
  /**
   * 字段类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 字段描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 字段序号
注意：此字段可能返回 null，表示取不到有效值。
   */
  Position?: number
  /**
   * 是否为分区字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsPartition?: boolean
  /**
   * 字段名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * HBase列簇属性集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColumnFamiliesFieldSet?: Array<Pair>
  /**
   * 对应码表字典ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DictionaryId?: string
  /**
   * 对应码表字典名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DictionaryName?: string
  /**
   * 安全等级：名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  LevelName?: string
  /**
   * 安全等级：值范围1-10
注意：此字段可能返回 null，表示取不到有效值。
   */
  LevelRank?: number
  /**
   * influxdb字段类别
注意：此字段可能返回 null，表示取不到有效值。
   */
  InfluxCategory?: string
}

/**
 * GenHiveTableDDLSql返回参数结构体
 */
export interface GenHiveTableDDLSqlResponse {
  /**
   * 生成的ddl语句
   */
  DDLSql?: string
  /**
   * 生成的ddl语句。与DDLSql相同含义，优先取Data，如果Data为空，则取DDLSql。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRuleGroupTable请求参数结构体
 */
export interface DescribeRuleGroupTableRequest {
  /**
   * 表ID
   */
  TableId: string
}

/**
 * CheckAlarmRegularNameExist请求参数结构体
 */
export interface CheckAlarmRegularNameExistRequest {
  /**
   * 项目名称
   */
  ProjectId: string
  /**
   * 规则名称
   */
  AlarmRegularName: string
  /**
   * 任务ID
   * @deprecated
   */
  TaskId?: string
  /**
   * 主键ID
   */
  Id?: string
  /**
   * 任务类型:201.实时,202.离线
   */
  TaskType?: number
  /**
   * 监控对象类型(1:所有任务,2:指定任务,3:指定责任人,4:指定资源组)
   */
  MonitorType?: number
}

/**
 * ColumnItem
 */
export interface ColumnData {
  /**
   * ColumnName1
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventName?: string
  /**
   * ColumnName1
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventProjectName?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  CurRunDate?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  State?: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventType?: string
  /**
   * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskName?: string
  /**
   * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectName?: string
  /**
   * 项目ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
}

/**
 * 规则执行结果
 */
export interface RuleExecResult {
  /**
   * 规则执行ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleExecId?: number
  /**
   * 规则组执行ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleGroupExecId?: number
  /**
   * 规则组ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleGroupId?: number
  /**
   * 规则ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleId?: number
  /**
   * 规则名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleName?: string
  /**
   * 规则类型 1.系统模版, 2.自定义模版, 3.自定义SQL
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleType?: number
  /**
   * 源字段详细类型，int string
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceObjectDataTypeName?: string
  /**
   * 源字段名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceObjectValue?: string
  /**
   * 条件扫描WHERE条件表达式
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConditionExpression?: string
  /**
   * 检测结果（1:检测通过，2：触发规则，3：检测失败）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecResultStatus?: number
  /**
   * 触发结果，告警发送成功, 阻断任务成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  TriggerResult?: string
  /**
   * 对比结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  CompareResult?: CompareResult
  /**
   * 模版名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TemplateName?: string
  /**
   * 质量维度
注意：此字段可能返回 null，表示取不到有效值。
   */
  QualityDim?: number
  /**
   * 目标表-库表名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetDBTableName?: string
  /**
   * 目标表-字段名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetObjectValue?: string
  /**
   * 目标表-字段类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetObjectDataType?: string
  /**
   * 自定义模版sql表达式参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  FieldConfig?: RuleFieldConfig
  /**
   * 源字段与目标字段关联条件on表达式
注意：此字段可能返回 null，表示取不到有效值。
   */
  RelConditionExpr?: string
  /**
   * 执行时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 1/2/3:低/中/高
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmLevel?: number
  /**
   * 触发条件
注意：此字段可能返回 null，表示取不到有效值。
   */
  TriggerCondition?: string
}

/**
 * Table
 */
export interface Table {
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  Column?: Array<ColumnItem>
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<ColumnData>
}

/**
 * DescribeWorkflowExecuteById返回参数结构体
 */
export interface DescribeWorkflowExecuteByIdResponse {
  /**
   * 工作流运行时间信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: WorkFlowExecuteDtoByPage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 状态趋势统计
 */
export interface TaskByStatus {
  /**
   * 统计值
注意：此字段可能返回 null，表示取不到有效值。
   */
  CountGroup?: string
  /**
   * 日期
注意：此字段可能返回 null，表示取不到有效值。
   */
  ShowTimeGroup?: string
  /**
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 周期单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleUnit?: string
  /**
   * 1
   */
  ReportTime?: string
  /**
   * 1
   */
  Count?: number
}

/**
 * CreateIntegrationTask请求参数结构体
 */
export interface CreateIntegrationTaskRequest {
  /**
   * 任务信息
   */
  TaskInfo: IntegrationTaskInfo
  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * BatchRunOpsTask请求参数结构体
 */
export interface BatchRunOpsTaskRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 是否补录中间实例,0不补录;1补录
   */
  EnableMakeUp: number
  /**
   * 任务id列表
   */
  Tasks: Array<string>
}

/**
 * 字段变量
 */
export interface FieldConfig {
  /**
   * 字段key
注意：此字段可能返回 null，表示取不到有效值。
   */
  FieldKey?: string
  /**
   * 字段值
注意：此字段可能返回 null，表示取不到有效值。
   */
  FieldValue?: string
  /**
   * 字段值类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  FieldDataType?: string
}

/**
 * DescribeRealTimeTaskMetricOverview请求参数结构体
 */
export interface DescribeRealTimeTaskMetricOverviewRequest {
  /**
   * 要查看的实时任务的任务ID，可在任务列表页面中获得
   */
  TaskId: string
  /**
   * 要查看的项目ID
   */
  ProjectId: string
  /**
   * 开始时间
   */
  StartTime?: number
  /**
   * 结束时间
   */
  EndTime?: number
}

/**
 * DescribeDatabaseMetas返回参数结构体
 */
export interface DescribeDatabaseMetasResponse {
  /**
   * 无
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseMeta?: Array<DatabaseMeta>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * FreezeTasksByWorkflowIds返回参数结构体
 */
export interface FreezeTasksByWorkflowIdsResponse {
  /**
   * 操作返回结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: OperationOpsDto
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubmitWorkflow请求参数结构体
 */
export interface SubmitWorkflowRequest {
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 工作流id
   */
  WorkflowId: string
  /**
   * 提交的版本备注
   */
  VersionRemark: string
  /**
   * 是否启动调度
   */
  StartScheduling: boolean
}

/**
 * DescribeResourceManagePathTrees返回参数结构体
 */
export interface DescribeResourceManagePathTreesResponse {
  /**
   * 响应数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<ResourcePathTree>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RunRerunScheduleInstances请求参数结构体
 */
export interface RunRerunScheduleInstancesRequest {
  /**
   * 实例列表
   */
  Instances?: Array<InstanceOpsDto>
  /**
   * 检查父任务类型, true: 检查父任务; false: 不检查父任务
   */
  CheckFather?: boolean
  /**
   * 重跑类型, 1: 自身; 3: 孩子; 2: 自身以及孩子
   */
  RerunType?: string
  /**
   * 实例依赖方式, 1: 自依赖; 2: 任务依赖; 3: 自依赖及父子依赖
   */
  DependentWay?: string
  /**
   * 重跑忽略事件监听与否
   */
  SkipEventListening?: boolean
  /**
   * 下游实例范围 1: 所在工作流 2: 所在项目 3: 所有跨工作流依赖的项目
   */
  SonInstanceType?: string
  /**
   * 查询条件
   */
  SearchCondition?: InstanceApiOpsRequest
  /**
   * 访问类型
   */
  OptType?: string
  /**
   * 操作者名称
   */
  OperatorName?: string
  /**
   * 操作者id
   */
  OperatorId?: string
  /**
   * 项目id
   */
  ProjectId?: string
  /**
   * 项目标志
   */
  ProjectIdent?: string
  /**
   * 项目名称
   */
  ProjectName?: string
  /**
   * 索引页码
   */
  PageIndex?: number
  /**
   * 页面大小
   */
  PageSize?: number
  /**
   * 数据总数
   */
  Count?: number
  /**
   * 基础请求信息
   */
  RequestBaseInfo?: ProjectBaseInfoOpsRequest
  /**
   * 是否计算总数
   */
  IsCount?: boolean
  /**
   * 是否异步模式
   */
  AsyncMode?: boolean
  /**
   * 是否检查上游任务： ALL（全部）、 MAKE_SCOPE（选中）、NONE （全部不检查）
   */
  CheckParentType?: string
  /**
   * 任务原有自依赖配置 true（是）、false（否）
   */
  SameSelfDependType?: boolean
  /**
   * 实例运行并发度
   */
  ParallelNum?: number
  /**
   * 任务原有自依赖配置 true（是）、false（否）
   */
  SameSelfWorkflowDependType?: boolean
  /**
   * 代表重新指定 的  是 或者 否  yes、 no
   */
  SelfWorkflowDependency?: string
  /**
   * 运行实例数据时间排序 0---正常  1--正序  2 – 逆序
   */
  DataTimeOrder?: number
  /**
   * 重跑参数
   */
  ReDoParams?: string
}

/**
 * 角色对象
 */
export interface SystemRole {
  /**
   * 角色id
   */
  RoleId?: string
  /**
   * 角色名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 角色昵称
注意：此字段可能返回 null，表示取不到有效值。
   */
  NameCn?: string
  /**
   * 描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 角色权限
注意：此字段可能返回 null，表示取不到有效值。
   */
  Privileges?: Array<RolePrivilege>
  /**
   * 方法路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  MethodPaths?: Array<string>
  /**
   * 角色类型, 分为System,Tenant,Project,Commercial
注意：此字段可能返回 null，表示取不到有效值。
   */
  RoleType?: string
  /**
   * 是否系统默认
注意：此字段可能返回 null，表示取不到有效值。
   */
  SystemInit?: boolean
  /**
   * 自定义参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Params?: string
}

/**
 * 规则组关联表信息
 */
export interface RuleGroupTableInnerInfo {
  /**
   * 表ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableId: string
  /**
   * 表名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableName: string
  /**
   * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId: string
  /**
   * 数据源ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceId: string
  /**
   * 数据源名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceName: string
  /**
   * 数据源类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceType: number
  /**
   * 数据库ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseId: string
  /**
   * 数据库名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseName: string
  /**
   * 项目ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId: number
  /**
   * 责任人ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserId: number
}

/**
 * DeleteIntegrationTask请求参数结构体
 */
export interface DeleteIntegrationTaskRequest {
  /**
   * 任务id
   */
  TaskId: string
  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * 对比结果项
 */
export interface CompareResultItem {
  /**
   * 对比结果， 1为真 2为假
注意：此字段可能返回 null，表示取不到有效值。
   */
  FixResult: number
  /**
   * 质量sql执行结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResultValue: string
  /**
   * 阈值列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Values: Array<ThresholdValue>
  /**
   * 比较操作类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Operator: string
  /**
   * 比较类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  CompareType: number
  /**
   * 值比较类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ValueComputeType: number
}

/**
 * ModifyTaskScript请求参数结构体
 */
export interface ModifyTaskScriptRequest {
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 任务ID
   */
  TaskId: string
  /**
   * 脚本内容 base64编码
   */
  ScriptContent?: string
  /**
   * 集成任务脚本配置
   */
  IntegrationNodeDetails?: Array<IntegrationNodeDetail>
}

/**
 * CreateIntegrationNode请求参数结构体
 */
export interface CreateIntegrationNodeRequest {
  /**
   * 集成节点信息
   */
  NodeInfo: IntegrationNodeInfo
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 任务类型，201为实时任务，202为离线任务
   */
  TaskType?: number
}

/**
 * DescribeTablePartitions返回参数结构体
 */
export interface DescribeTablePartitionsResponse {
  /**
   * 分区详情列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  TablePartitionSet: Array<TablePartition>
  /**
   * 总记录数
   */
  TotalCount: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTableScoreTrend请求参数结构体
 */
export interface DescribeTableScoreTrendRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 开始时间 秒级时间戳
   */
  StatisticsStartDate: number
  /**
   * 结束时间 秒级时间戳
   */
  StatisticsEndDate: number
  /**
   * 表id
   */
  TableId: string
  /**
   * 1:按全维度权重计算,2:按已配置维度权重计算,3:不按维度权重计算,默认1
   */
  ScoreType?: string
}

/**
 * 规则执行结果分页
 */
export interface RuleExecResultPage {
  /**
   * 记录数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount: number
  /**
   * 规则执行结果
   */
  Items: Array<RuleExecResult>
}

/**
 * DescribeTaskByStatusReport请求参数结构体
 */
export interface DescribeTaskByStatusReportRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 时间类型
   */
  Type?: string
  /**
   * 类型
   */
  TaskType?: string
  /**
   * 类型名称
   */
  TypeName?: string
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
  /**
   * 聚合单元，H小时
   */
  AggregationUnit?: string
  /**
   * 周期
   */
  CycleUnit?: string
  /**
   * 状态
   */
  Status?: string
  /**
   * 责任人
   */
  InCharge?: string
  /**
   * 工作流ID
   */
  WorkflowId?: string
  /**
   * 项目ID列表，用于多项目实例趋势筛选，当指定了 ProjectIds 的时候，ProjectId 将只用来鉴权，不做筛选
   */
  ProjectIds?: Array<string>
}

/**
 * ModifyExecStrategy请求参数结构体
 */
export interface ModifyExecStrategyRequest {
  /**
   * 规则组ID
   */
  RuleGroupId?: number
  /**
   * 监控类型 1.未配置, 2.关联生产调度, 3.离线周期检测
   */
  MonitorType?: number
  /**
   * 计算队列
   */
  ExecQueue?: string
  /**
   * 执行资源组ID
   */
  ExecutorGroupId?: string
  /**
   * 执行资源组名称
   */
  ExecutorGroupName?: string
  /**
   * 关联的生产调度任务列表
   */
  Tasks?: Array<ProdSchedulerTask>
  /**
   * 项目ID
   */
  ProjectId?: string
  /**
   * 离线周期模式下,生效日期-开始时间
   */
  StartTime?: string
  /**
   * 离线周期模式下,生效日期-结束时间
   */
  EndTime?: string
  /**
   * 离线周期模式下,调度周期 
MINUTE_CYCLE:I,
HOUR_CYCLE:H,
DAY_CYCLE:D,
WEEK_CYCLE:W,
MONTH_CYCLE:M
   */
  CycleType?: string
  /**
   * 离线周期模式下,调度步长
   */
  CycleStep?: number
  /**
   * 离线周期模式下,指定时间
   */
  TaskAction?: string
  /**
   * 延时执行时间，单位分钟，可选: <0-1439
   */
  DelayTime?: number
  /**
   * 数据库Id
   */
  DatabaseId?: string
  /**
   * 数据源Id
   */
  DatasourceId?: string
  /**
   * 数据表Id
   */
  TableId?: string
  /**
   * 运行的执行引擎，不传时会请求该数据源下默认的执行引擎
   */
  ExecEngineType?: string
  /**
   * 触发场景
   */
  TriggerTypes?: Array<string>
}

/**
 * BatchForceSuccessIntegrationTaskInstances请求参数结构体
 */
export interface BatchForceSuccessIntegrationTaskInstancesRequest {
  /**
   * 实例信息
   */
  Instances: Array<SchedulerTaskInstanceInfo>
  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * DescribeRealTimeTaskInstanceNodeInfo返回参数结构体
 */
export interface DescribeRealTimeTaskInstanceNodeInfoResponse {
  /**
   * 实时任务实例节点相关信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  RealTimeTaskInstanceNodeInfo?: RealTimeTaskInstanceNodeInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTaskByCycleReport请求参数结构体
 */
export interface DescribeTaskByCycleReportRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 任务周期类型
   */
  Type?: string
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
}

/**
 * DescribeInstanceLogDetail返回参数结构体
 */
export interface DescribeInstanceLogDetailResponse {
  /**
   * 日志结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: InstanceLogInfoOpsDto
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeApproveList请求参数结构体
 */
export interface DescribeApproveListRequest {
  /**
   * 审批分类key
   */
  ApproveClassification: string
  /**
   * 分页大小
   */
  PageSize: number
  /**
   * 分页数
   */
  PageNumber: number
  /**
   * 自定义条件查询
   */
  Filters?: Array<FilterOptional>
  /**
   * 排序字段
   */
  OrderFields?: Array<OrderFieldOptional>
}

/**
 * DescribeDutyScheduleList请求参数结构体
 */
export interface DescribeDutyScheduleListRequest {
  /**
   * 页码，默认1
   */
  PageNumber: number
  /**
   * 页大小，默认10
   */
  PageSize: number
  /**
   * 值班表名称
   */
  Name?: string
}

/**
 * DescribeTaskLineage返回参数结构体
 */
export interface DescribeTaskLineageResponse {
  /**
   * 请求来源，WEB 前端；CLIENT 客户端
注意：此字段可能返回 null，表示取不到有效值。
   */
  RequestFromSource?: string
  /**
   * 通过任务ID查询集成任务信息列表
   */
  TaskLineageInfos?: Array<TaskLineageInfoPair>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CommitRuleGroupTask返回参数结构体
 */
export interface CommitRuleGroupTaskResponse {
  /**
   * 规则组执行id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: RuleGroupExecResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 项目信息
 */
export interface Project {
  /**
   * 项目的所在租户ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TenantId?: string
  /**
   * 项目id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * 项目标识，英文名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectName?: string
  /**
   * 项目显示名称，可以为中文名
注意：此字段可能返回 null，表示取不到有效值。
   */
  DisplayName?: string
  /**
   * 地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * 备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 创建者
注意：此字段可能返回 null，表示取不到有效值。
   */
  Creator?: BaseUser
  /**
   * 租户信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tenant?: BaseTenant
  /**
   * 项目的管理员
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdminUsers?: Array<BaseUser>
  /**
   * 项目关联的集群信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Clusters?: Array<BaseClusterInfo>
  /**
   * 项目的额外配置参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Params?: string
  /**
   * 项目状态：0：禁用，1：启用，-3:禁用中，2：启用中
   */
  Status?: number
  /**
   * 项目类型，SIMPLE：简单模式 STANDARD：标准模式
注意：此字段可能返回 null，表示取不到有效值。
   */
  Model?: string
  /**
   * 二级菜单
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecondModuleList?: Array<string>
}

/**
 * DescribeRealTimeTaskMetricOverview返回参数结构体
 */
export interface DescribeRealTimeTaskMetricOverviewResponse {
  /**
   * 总读取记录数
   */
  TotalRecordNumOfRead?: number
  /**
   * 总读取字节数
   */
  TotalRecordByteNumOfRead?: number
  /**
   * 总写入记录数
   */
  TotalRecordNumOfWrite?: number
  /**
   * 总写入字节数 单位字节
   */
  TotalRecordByteNumOfWrite?: number
  /**
   * 总的脏记录数据
   */
  TotalDirtyRecordNum?: number
  /**
   * 总的脏字节数 单位字节
   */
  TotalDirtyRecordByte?: number
  /**
   * 运行时长 单位s
   */
  TotalDuration?: number
  /**
   * 开始运行时间
   */
  BeginRunTime?: string
  /**
   * 目前运行到的时间
   */
  EndRunTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOfflineTaskToken返回参数结构体
 */
export interface DescribeOfflineTaskTokenResponse {
  /**
   * 长连接临时token
   */
  Token?: string
  /**
   * 长连接临时token。与Token相同含义，优先取Data，Data为空时，取Token。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTableInfoList返回参数结构体
 */
export interface DescribeTableInfoListResponse {
  /**
   * 表信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableInfo?: Array<TableInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RemoveWorkflowDs返回参数结构体
 */
export interface RemoveWorkflowDsResponse {
  /**
   * 是否删除成功
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetOfflineDIInstanceList请求参数结构体
 */
export interface GetOfflineDIInstanceListRequest {
  /**
   * 第几页
   */
  PageIndex: number
  /**
   * 每页几条
   */
  PageSize: number
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 无
   */
  SearchCondition?: SearchConditionNew
}

/**
 * ModifyExecStrategy返回参数结构体
 */
export interface ModifyExecStrategyResponse {
  /**
   * 规则组ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BatchStartIntegrationTasks请求参数结构体
 */
export interface BatchStartIntegrationTasksRequest {
  /**
   * 任务类型，201为实时任务，202为离线任务
   */
  TaskType: number
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 任务id
   */
  TaskIds?: Array<string>
  /**
   * 批量运行集成任务，目前仅实时集成用到了这个参数
   */
  StartTaskInfoSet?: Array<StartTaskInfo>
}

/**
 * CreateCustomFunction请求参数结构体
 */
export interface CreateCustomFunctionRequest {
  /**
   * 枚举值：HIVE、SPARK、DLC
   */
  Type: string
  /**
   * 枚举值：ANALYSIS(函数)、ENCRYPTION(加密函数)、AGGREGATE(聚合函数)、LOGIC(逻辑函数)、DATE_AND_TIME(日期与时间函数)、MATH(数学函数)、CONVERSION(转换函数)、STRING(字符串函数)、IP_AND_DOMAIN(IP和域名函数)、WINDOW(窗口函数)、OTHER(其他函数)
   */
  Kind: string
  /**
   * 函数名称
   */
  Name: string
  /**
   * 集群实例引擎 ID
   */
  ClusterIdentifier: string
  /**
   * 数据库名称
   */
  DbName?: string
  /**
   * 项目ID
   */
  ProjectId?: string
  /**
   * 函数资源文件类型
   */
  FunctionResourceFileType?: string
}

/**
 * DescribeTableBasicInfo请求参数结构体
 */
export interface DescribeTableBasicInfoRequest {
  /**
   * 分页页码
   */
  PageNumber?: number
  /**
   * 分页大小
   */
  PageSize?: number
  /**
   * 过滤字段
   */
  Filters?: Array<Filter>
  /**
   * 排序字段
   */
  OrderFields?: Array<OrderField>
}

/**
 * DescribeDatasource请求参数结构体
 */
export interface DescribeDatasourceRequest {
  /**
   * 对象唯一ID
   */
  Id: number
  /**
   * production：生产，development开发
   */
  Env?: string
}

/**
 * 规则运行情况结果
 */
export interface RuleExecStat {
  /**
   * 规则运行总数
   */
  TotalCnt: number
  /**
   * 环比规则运行总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastTotalCnt: number
  /**
   * 规则运行总数占比
   */
  TotalCntRatio: number
  /**
   * 规则运行总数环比变化
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastTotalCntRatio: number
  /**
   * 规则触发数
   */
  TriggerCnt: number
  /**
   * 环比规则触发数
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastTriggerCnt: number
  /**
   * 触发占总数占比
   */
  TriggerCntRatio: number
  /**
   * 环比规则触发数变化
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastTriggerCntRatio: number
  /**
   * 规则报警数
   */
  AlarmCnt: number
  /**
   * 环比规则报警数
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastAlarmCnt: number
  /**
   * 报警占总数占比
   */
  AlarmCntRatio: number
  /**
   * 环比报警数变化
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastAlarmCntRatio: number
  /**
   * 阻塞发生数
   */
  PipelineCnt: number
  /**
   * 环比阻塞发生数
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastPipelineCnt: number
  /**
   * 阻塞占总数占比
   */
  PipelineCntRatio: number
  /**
   * 环比阻塞发生数变化
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastPipelineCntRatio: number
}

/**
 * DescribeStatisticInstanceStatusTrendOps请求参数结构体
 */
export interface DescribeStatisticInstanceStatusTrendOpsRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 任务类型Id
   */
  TaskTypeId?: string
  /**
   * 时间类型
   */
  TimeType?: string
  /**
   * 任务类型名称
   */
  TypeName?: string
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
  /**
   * 资源组ID
   */
  ExecutionGroupId?: string
  /**
   * 资源组名称
   */
  ExecutionGroupName?: string
  /**
   * 1
   */
  InCharge?: string
  /**
   * 1
   */
  TaskType?: number
  /**
   * 1
   */
  StateList?: Array<number | bigint>
  /**
   * D代表天，H代表小时
   */
  AggregationUnit?: string
  /**
   * 1
   */
  AverageWindowSize?: number
  /**
   * 工作流ID
   */
  WorkflowId?: string
  /**
   * 项目ID列表，用于多项目实例趋势筛选，当指定了 ProjectIds 的时候，ProjectId 将只用来鉴权，不做筛选
   */
  ProjectIds?: Array<string>
  /**
   * 指定时间点，当统计时常为整天的时候使用，必须小于 24
   */
  TimePoint?: number
}

/**
 * DescribeEventCases返回参数结构体
 */
export interface DescribeEventCasesResponse {
  /**
   * 事件实例分页查询结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: EventCaseAuditLogVOCollection
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTableSchemaInfo返回参数结构体
 */
export interface DescribeTableSchemaInfoResponse {
  /**
   * 查询到的SchemaInfo信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  SchemaInfoList?: Array<SchemaDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DiagnosePro返回参数结构体
 */
export interface DiagnoseProResponse {
  /**
   * 结果
   */
  Data?: DiagnoseRep
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateWorkflowOwner返回参数结构体
 */
export interface UpdateWorkflowOwnerResponse {
  /**
   * 响应数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: BatchOperationOpsDto
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetTaskAlarmNew请求参数结构体
 */
export interface SetTaskAlarmNewRequest {
  /**
   * 设置任务超时告警和失败告警信息
   */
  AlarmInfoList: Array<AlarmInfo>
  /**
   * 项目Id
   */
  ProjectId: string
}

/**
 * DescribeInstanceList返回参数结构体
 */
export interface DescribeInstanceListResponse {
  /**
   * 结果
   */
  Data?: string
  /**
   * 实例列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceList?: Array<InstanceList>
  /**
   * 总条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOpsInstanceLogList请求参数结构体
 */
export interface DescribeOpsInstanceLogListRequest {
  /**
   * 任务id
   */
  TaskId: string
  /**
   * 数据时间
   */
  CurRunDate: string
}

/**
 * UploadContent请求参数结构体
 */
export interface UploadContentRequest {
  /**
   * 脚本上传信息
   */
  ScriptRequestInfo: ScriptRequestInfo
  /**
   * 请求来源，WEB 前端；CLIENT 客户端
   */
  RequestFromSource?: string
  /**
   * 项目id
   */
  ProjectId?: string
}

/**
 * StartIntegrationTask请求参数结构体
 */
export interface StartIntegrationTaskRequest {
  /**
   * 任务id
   */
  TaskId: string
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 事件类型(START, STOP, SUSPEND, RESUME, COMMIT, TIMESTAMP)
   */
  Event?: string
  /**
   * 额外参数
   */
  ExtConfig?: Array<RecordField>
  /**
   * 操作类型描述
   */
  EventDesc?: string
}

/**
 * DescribeProject返回参数结构体
 */
export interface DescribeProjectResponse {
  /**
   * 项目信息
   */
  Data?: Project
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopIntegrationTask请求参数结构体
 */
export interface StopIntegrationTaskRequest {
  /**
   * 任务id
   */
  TaskId: string
  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * 函数类型或函数分类
 */
export interface FunctionTypeOrKind {
  /**
   * 名称
   */
  Name?: string
  /**
   * 函数分类英文名
   */
  ZhName?: string
  /**
   * 函数分类中文名
   */
  EnName?: string
}

/**
 * 申请列表
 */
export interface DescribeApply {
  /**
   * 申请列表详情
   */
  Rows?: Array<Apply>
  /**
   * 总分页页码
   */
  TotalPageNumber?: number
  /**
   * 总个数
   */
  TotalCount?: number
  /**
   * 分页页码
   */
  PageNumber?: number
  /**
   * 分页大小
   */
  PageSize?: number
}

/**
 * CreateDataSource返回参数结构体
 */
export interface CreateDataSourceResponse {
  /**
   * 主键ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 操作结果
 */
export interface BatchReturn {
  /**
   * 执行结果
   */
  Result: boolean
  /**
   * 执行情况备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorDesc: string
  /**
   * 执行情况id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorId: string
}

/**
 * DescribeFolderWorkflowList返回参数结构体
 */
export interface DescribeFolderWorkflowListResponse {
  /**
   * 无
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: DescribeFolderWorkflowListData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 通用记录字段，与服务端约定传入合法的键值对
 */
export interface RecordField {
  /**
   * 字段名称，拓展字段名称
   */
  Name?: string
  /**
   * 字段值，拓展字段值
   */
  Value?: string
}

/**
 * DescribeIntegrationVersionNodesInfo返回参数结构体
 */
export interface DescribeIntegrationVersionNodesInfoResponse {
  /**
   * 任务节点信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Nodes?: Array<IntegrationNodeInfo>
  /**
   * 任务映射信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mappings?: Array<IntegrationNodeMapping>
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
 * DescribeRules请求参数结构体
 */
export interface DescribeRulesRequest {
  /**
   * 项目id
   */
  ProjectId?: string
  /**
   * 规则组id
   */
  RuleGroupId?: number
  /**
   * 该规则运行的执行引擎，不传时会请求该数据源下默认的执行引擎
   */
  EngineType?: string
}

/**
 * 父任务simple信息
 */
export interface AiopsSimpleTaskDto {
  /**
   * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 任务名
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskName?: string
  /**
   * 任务状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 周期类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleType?: string
  /**
   * 任务创建人
注意：此字段可能返回 null，表示取不到有效值。
   */
  Creator?: string
  /**
   * 工作流id
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowId?: string
  /**
   * 工作流名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowName?: string
  /**
   * 项目id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * 项目标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectIdent?: string
  /**
   * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectName?: string
  /**
   * 配置策略
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConfigType?: string
  /**
   * 时间维度
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeDimension?: string
  /**
   * 实例范围
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceScope?: string
  /**
   * 执行策略
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExectuorPolicy?: string
}

/**
 * ResumeIntegrationTask返回参数结构体
 */
export interface ResumeIntegrationTaskResponse {
  /**
   * 操作成功与否标识
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRule返回参数结构体
 */
export interface DescribeRuleResponse {
  /**
   * 规则详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Rule
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTaskScript请求参数结构体
 */
export interface DescribeTaskScriptRequest {
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 任务ID
   */
  TaskId: string
}

/**
 * 元数据字段信息
 */
export interface SchemaDetail {
  /**
   * 列
注意：此字段可能返回 null，表示取不到有效值。
   */
  ColumnKey?: string
  /**
   * 描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
}

/**
 * DescribeRule请求参数结构体
 */
export interface DescribeRuleRequest {
  /**
   * 质量规则ID
   */
  RuleId?: number
  /**
   * 项目ID
   */
  ProjectId?: string
}

/**
 * 批量操作结果，带失败原因
 */
export interface BatchOpsDTO {
  /**
   * 总数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 成功数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  SuccessCount?: number
  /**
   * 失败数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailCount?: number
  /**
   * 失败原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailMessageList?: Array<FailMessage>
}

/**
 * DescribeAlarmReceiver返回参数结构体
 */
export interface DescribeAlarmReceiverResponse {
  /**
   * 告警接收人列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmReceiverInfoList?: Array<AlarmReceiverInfo>
  /**
   * 总记录数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTableLineageInfo返回参数结构体
 */
export interface DescribeTableLineageInfoResponse {
  /**
   * 表血缘信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableLineageBasicInfo?: TableLineageBaseInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 快照过期治理项
 */
export interface DlcExpiredSnapshotsInfo {
  /**
   * 是否启用快照过期治理项：enable、none
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpiredSnapshotsEnable?: string
  /**
   * 用于运行快照过期治理项的引擎名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Engine?: string
  /**
   * 需要保留的最近快照个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  RetainLast?: number
  /**
   * 过期指定天前的快照
注意：此字段可能返回 null，表示取不到有效值。
   */
  BeforeDays?: number
  /**
   * 清理过期快照的并行数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxConcurrentDeletes?: number
  /**
   * 快照过期治理运行周期，单位为分钟
注意：此字段可能返回 null，表示取不到有效值。
   */
  IntervalMin?: number
}

/**
 * DescribeWorkflowCanvasInfo返回参数结构体
 */
export interface DescribeWorkflowCanvasInfoResponse {
  /**
   * 工作流调度详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: WorkflowCanvasOpsDto
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 分区参数
 */
export interface Partition {
  /**
   * 分区转换策略
   */
  Transform?: string
  /**
   * 分区字段名
   */
  Name?: string
  /**
   * 策略参数
   */
  TransformArgs?: Array<string>
}

/**
 * RuleDimCnt 规则维度统计
 */
export interface RuleDimCnt {
  /**
   * 1：准确性，2：唯一性，3：完整性，4：一致性，5：及时性，6：有效性
   */
  Dim: number
  /**
   * count 数
   */
  Cnt: number
}

/**
 * 批量操作的结果返回
 */
export interface BatchOperateResult {
  /**
   * 批量操作成功数
   */
  SuccessCount: number
  /**
   * 批量操作失败数
   */
  FailedCount: number
  /**
   * 批量操作的总数
   */
  TotalCount: number
}

/**
 * 值班表列表
 */
export interface DutySchedule {
  /**
   * 值班表列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Rows: Array<DutyScheduleData>
  /**
   * 总条数
   */
  TotalCount: number
  /**
   * 页号
   */
  PageNumber: number
  /**
   * 页大小
   */
  PageSize: number
  /**
   * 总页数
   */
  TotalPageNumber: number
}

/**
 * DescribeDimensionScore请求参数结构体
 */
export interface DescribeDimensionScoreRequest {
  /**
   * 统计日期 时间戳
   */
  StatisticsDate: number
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 数据来源id
   */
  DatasourceId?: string
  /**
   * 过滤参数
   */
  Filters?: Array<Filter>
}

/**
 * FindAllFolder请求参数结构体
 */
export interface FindAllFolderRequest {
  /**
   * 项目ID
   */
  ProjectId: string
}

/**
 * DescribeTableSchemaInfo请求参数结构体
 */
export interface DescribeTableSchemaInfoRequest {
  /**
   * 表名称
   */
  Name: string
  /**
   * 数据库名称
   */
  DatabaseName: string
  /**
   * 数据源的类型（例如MYSQL、HIVE、KAFKA等）
   */
  MsType: string
  /**
   * 数据源id
   */
  DatasourceId: string
  /**
   * 连接类型（示例值rpc）
   */
  ConnectionType?: string
  /**
   * 元数据Database下的Schema名称
   */
  SchemaName?: string
  /**
   * 项目空间ID
   */
  ProjectId?: string
  /**
   * 环境信息
   */
  Env?: string
  /**
   * 空间模式
   */
  Model?: string
  /**
   * 开发态的datasourceId
   */
  DevDatasourceId?: string
}

/**
 * BatchStartIntegrationTasks返回参数结构体
 */
export interface BatchStartIntegrationTasksResponse {
  /**
   * 操作成功的任务数
   */
  SuccessCount?: number
  /**
   * 操作失败的任务数
   */
  FailedCount?: number
  /**
   * 任务总数
   */
  TotalCount?: number
  /**
   * 本次批量操作成功任务id，用于审计
   */
  TaskNames?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIntegrationVersionNodesInfo请求参数结构体
 */
export interface DescribeIntegrationVersionNodesInfoRequest {
  /**
   * 任务id
   */
  TaskId: string
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 该任务选定版本的存储路径：
DescribeDsTaskVersionList 或者 DescribeDsTaskVersionInfo 返回的对应的 TaskInfo.TaskExt.Properties 下 Base64.encode($region | $bucket | $ftp.file.name) 值
   */
  TaskVersionPath: string
  /**
   * 该任务选定版本id：
DescribeDsTaskVersionList 或者 DescribeDsTaskVersionInfo 返回的对应的 VersionId 取值
   */
  TaskVersion?: string
}

/**
 * DescribeSuccessorOpsTaskInfos请求参数结构体
 */
export interface DescribeSuccessorOpsTaskInfosRequest {
  /**
   * 任务id
   */
  TaskId: string
  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * DescribeSchedulerInstanceStatus请求参数结构体
 */
export interface DescribeSchedulerInstanceStatusRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 任务类型ID
   */
  TaskTypeId?: string
  /**
   * 执行资源组ID
   */
  ExecutionGroupId?: string
  /**
   * 执行资源组名字
   */
  ExecutionGroupName?: string
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
  /**
   * 责任人
   */
  InCharge?: string
  /**
   * 工作流ID
   */
  WorkflowId?: string
  /**
   * 任务ID列表
   */
  ProjectIds?: Array<string>
}

/**
 * DescribeScheduleInstances请求参数结构体
 */
export interface DescribeScheduleInstancesRequest {
  /**
   * 请求来源，WEB 前端；CLIENT 客户端
   */
  RequestFromSource?: string
  /**
   * 实例列表
   */
  Instances?: Array<InstanceOpsDto>
  /**
   * 检查父任务类型, true: 检查父任务; false: 不检查父任务
   */
  CheckFather?: boolean
  /**
   * 重跑类型, 1: 自身; 3: 孩子; 2: 自身以及孩子
   */
  RerunType?: string
  /**
   * 实例依赖方式, 1: 自依赖; 2: 任务依赖; 3: 自依赖及父子依赖
   */
  DependentWay?: string
  /**
   * 重跑忽略事件监听与否
   */
  SkipEventListening?: boolean
  /**
   * 下游实例范围 1: 所在工作流 2: 所在项目 3: 所有跨工作流依赖的项目
   */
  SonInstanceType?: string
  /**
   * 查询条件
   */
  SearchCondition?: InstanceApiOpsRequest
  /**
   * 访问类型
   */
  OptType?: string
  /**
   * 操作者名称
   */
  OperatorName?: string
  /**
   * 操作者id
   */
  OperatorId?: string
  /**
   * 项目id
   */
  ProjectId?: string
  /**
   * 项目标志
   */
  ProjectIdent?: string
  /**
   * 项目名称
   */
  ProjectName?: string
  /**
   * 索引页码
   */
  PageIndex?: number
  /**
   * 页面大小
   */
  PageSize?: number
  /**
   * 数据总数
   */
  Count?: number
  /**
   * 基础请求信息
   */
  RequestBaseInfo?: ProjectBaseInfoOpsRequest
  /**
   * 是否计算总数
   */
  IsCount?: boolean
  /**
   * 项目ID列表，用于多项目实例列表筛选，请注意，该字段传入时 ProjectId 字段也必须传，且传入的 ProjectIds 中的项目ID必须是当前用户有权限的项目ID，否则会由于权限校验失败报错
   */
  ProjectIds?: Array<string>
}

/**
 * DescribeRealTimeTaskSpeed返回参数结构体
 */
export interface DescribeRealTimeTaskSpeedResponse {
  /**
   * 同步速度条/s列表
   */
  RecordsSpeedList?: Array<RecordsSpeed>
  /**
   * 同步速度字节/s列表
   */
  BytesSpeedList?: Array<BytesSpeed>
  /**
   * 同步速度，包括了RecordsSpeedList和BytesSpeedList
   */
  Data?: RealTimeTaskSpeed
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyWorkflowInfo返回参数结构体
 */
export interface ModifyWorkflowInfoResponse {
  /**
   * true代表成功，false代表失败
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFolderWorkflowList请求参数结构体
 */
export interface DescribeFolderWorkflowListRequest {
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 父文件夹ID
   */
  ParentsFolderId: string
  /**
   * 关键字
   */
  KeyWords?: string
  /**
   * 页码，默认1
   */
  PageNumber?: number
  /**
   * 页大小，默认10
   */
  PageSize?: number
}

/**
 * 规则变量替换
 */
export interface RuleFieldConfig {
  /**
   * where变量
注意：此字段可能返回 null，表示取不到有效值。
   */
  WhereConfig?: Array<FieldConfig>
  /**
   * 库表变量
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableConfig?: Array<TableConfig>
}

/**
 * CheckTaskNameExist返回参数结构体
 */
export interface CheckTaskNameExistResponse {
  /**
   * 结果
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSchedulerRunTimeInstanceCntByStatus请求参数结构体
 */
export interface DescribeSchedulerRunTimeInstanceCntByStatusRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 周期类型
   */
  CycleUnit?: string
  /**
   * 时间单元 eg: 12h
   */
  TimeUnit?: string
  /**
   * 开始日期：2023-03-02
   */
  StartTime?: string
  /**
   * 结束日前：2023-03-20
   */
  EndTime?: string
  /**
   * 任务类型
   */
  TaskType?: number
  /**
   * 责任人
   */
  InCharge?: string
  /**
   * 工作流ID
   */
  WorkflowId?: string
  /**
   * 排序字段
   */
  SortItem?: string
  /**
   * 升序降序
   */
  SortType?: string
  /**
   * 项目ID列表，如果传了 ProjectIds，则 ProjectId 不会生效，用于多项目筛选
   */
  ProjectIds?: Array<string>
}

/**
 * 数据服务通用排序参数
 */
export interface DataServiceRequestListOrder {
  /**
   * 排序参数名称
取值： 
  CreateTime 表示按照创建时间排序
  ModifyTime 表示按照更新时间排序
   */
  Name?: string
  /**
   * 排序参数顺序
   */
  Direction?: string
}

/**
 * map
 */
export interface StrToStrMap {
  /**
   * k
注意：此字段可能返回 null，表示取不到有效值。
   */
  K?: string
  /**
   * v
注意：此字段可能返回 null，表示取不到有效值。
   */
  V?: string
}

/**
 * 工作流画布详情
 */
export interface WorkflowCanvasOpsDto {
  /**
   * 工作流id
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowId?: string
  /**
   * 工作流详情描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowDesc?: string
  /**
   * 工作流名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowName?: string
  /**
   * 所属文件夹id
注意：此字段可能返回 null，表示取不到有效值。
   */
  FolderId?: string
  /**
   * 所属文件夹ids
注意：此字段可能返回 null，表示取不到有效值。
   */
  FolderIds?: Array<string>
  /**
   * 任务列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tasks?: Array<TaskOpsDto>
  /**
   * 任务依赖边列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Links?: Array<LinkOpsDto>
  /**
   * 工作流所属用户分组id,若有多个分号隔开: a;b;c
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserGroupId?: string
  /**
   * 工作流所属用户分组名称,若有多个分号隔开: a;b;c
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserGroupName?: string
  /**
   * 项目id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * 项目标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectIdent?: string
  /**
   * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectName?: string
  /**
   * 责任人
注意：此字段可能返回 null，表示取不到有效值。
   */
  Owner?: string
  /**
   * 责任人UserId
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerId?: string
  /**
   * 工作流类型，周期cycle，手动manual
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowType?: string
}

/**
 * 移除孤立文件治理项
 */
export interface DlcRemoveOrphanFilesInfo {
  /**
   * 是否启用移除孤立文件治理项：enable、none
注意：此字段可能返回 null，表示取不到有效值。
   */
  RemoveOrphanFilesEnable?: string
  /**
   * 用于运行移除孤立文件治理项的引擎名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Engine?: string
  /**
   * 移除指定天前的孤立文件
注意：此字段可能返回 null，表示取不到有效值。
   */
  BeforeDays?: number
  /**
   * 移除孤立文件的并行数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxConcurrentDeletes?: number
  /**
   * 移除孤立文件治理运行周期，单位为分钟
注意：此字段可能返回 null，表示取不到有效值。
   */
  IntervalMin?: number
}

/**
 * LockIntegrationTask请求参数结构体
 */
export interface LockIntegrationTaskRequest {
  /**
   * 任务id
   */
  TaskId: string
  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * BatchStopIntegrationTasks请求参数结构体
 */
export interface BatchStopIntegrationTasksRequest {
  /**
   * 任务id
   */
  TaskIds: Array<string>
  /**
   * 任务类型，201为实时任务，202为离线任务
   */
  TaskType: number
  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * DescribeRuleTemplatesByPage请求参数结构体
 */
export interface DescribeRuleTemplatesByPageRequest {
  /**
   * 当前页
   */
  PageNumber: number
  /**
   * 每页记录数
   */
  PageSize: number
  /**
   * 工作空间ID
   */
  ProjectId: string
  /**
   * 通用排序字段
   */
  OrderFields?: Array<OrderField>
  /**
   * 通用过滤条件
   */
  Filters?: Array<Filter>
}

/**
 * RunTasksByMultiWorkflow返回参数结构体
 */
export interface RunTasksByMultiWorkflowResponse {
  /**
   * 操作返回结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: OperationOpsDto
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RenewWorkflowSchedulerInfoDs请求参数结构体
 */
export interface RenewWorkflowSchedulerInfoDsRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 工作流ID
   */
  WorkflowId: string
  /**
   * 延迟时间
   */
  DelayTime?: number
  /**
   * 启动时间
   */
  StartupTime?: number
  /**
   * 任务依赖
   */
  SelfDepend?: string
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
  /**
   * 指定运行时间
   */
  TaskAction?: string
  /**
   * 调度周期时间单位
   */
  CycleType?: string
  /**
   * 调度周期
   */
  CycleStep?: number
  /**
   * 执行时间左闭区间
   */
  ExecutionStartTime?: string
  /**
   * 执行时间右闭区间
   */
  ExecutionEndTime?: string
  /**
   * 任务初始化策略，T_PLUS_1、T_PLUS_0、T_MINUS_1
   */
  InstanceInitStrategy?: string
  /**
   * 工作流依赖，yes or no
   */
  DependencyWorkflow?: string
  /**
   * CrontabExpression
   */
  CrontabExpression?: string
  /**
   * 0：不修改
1：将任务的上游依赖配置改为默认值 
   */
  ModifyCycleValue?: string
  /**
   * 是否开启日历调度 1 开启 0关闭
   */
  CalendarOpen?: string
  /**
   * 日历名称
   */
  CalendarName?: string
  /**
   * 日历id
   */
  CalendarId?: string
}

/**
 * 值班信息表
 */
export interface DutyScheduleDetailsInfo {
  /**
   * 值班日期
   */
  Day: string
  /**
   * 值班信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Duty: Array<Duty>
}

/**
 * DescribeInstanceLastLog返回参数结构体
 */
export interface DescribeInstanceLastLogResponse {
  /**
   * 日志
   */
  Data?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 过去七天（不算当天）表的热度值
 */
export interface TableHeat {
  /**
   * 表ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableId: string
  /**
   * 统计日期
注意：此字段可能返回 null，表示取不到有效值。
   */
  DayTime: string
  /**
   * 表热度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Heat: number
  /**
   * 表热度最大值
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxHeat: number
}

/**
 * DescribeExecStrategy请求参数结构体
 */
export interface DescribeExecStrategyRequest {
  /**
   * 规则组Id
   */
  RuleGroupId?: number
  /**
   * 项目Id
   */
  ProjectId?: string
}

/**
 * 查询数据服务API的发布态信息详情出参
 */
export interface DescribeDataServicePublishedApiDetailResp {
  /**
   * 服务Api名称
   */
  ApiName?: string
  /**
   * 服务请求Path
   */
  PathUrl?: string
  /**
   * 服务责任人名称
   */
  OwnerName?: string
  /**
   * 服务请求方式
   */
  RequestType?: string
  /**
   * 服务标签名称集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApiTagNames?: string
  /**
   * 服务描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApiDescription?: string
  /**
   * 服务请求返回示例
注意：此字段可能返回 null，表示取不到有效值。
   */
  RequestExample?: string
  /**
   * 服务请求成功返回示例
注意：此字段可能返回 null，表示取不到有效值。
   */
  RequestSuccess?: string
  /**
   * 服务请求失败返回示例
注意：此字段可能返回 null，表示取不到有效值。
   */
  RequestError?: string
  /**
   * 服务请求参数列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  RequestParam?: Array<DataServiceRequestParam>
  /**
   * 服务响应参数列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResponseParam?: Array<DataServiceResponseParam>
  /**
   * 最大qps
   */
  MaxAllowQps?: number
  /**
   * 最大记录数
   */
  MaxAllowPageSize?: number
  /**
   * 超时时间，单位ms
   */
  TimeoutPeriod?: number
  /**
   * ApiId
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApiId?: string
  /**
   * 0:免认证 1:应用认证
   */
  AuthType?: number
  /**
   * 请求地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  GatewayApiUrl?: string
  /**
   * 服务Api状态 1:已上线  3:已下线
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApiStatus?: number
}

/**
 * CreateHiveTable请求参数结构体
 */
export interface CreateHiveTableRequest {
  /**
   * 数据源id
   */
  DatasourceId: string
  /**
   * 数据库名称
   */
  Database: string
  /**
   * base64转码之后的建表语句
   */
  DDLSql: string
  /**
   * 表权限 ，默认为0:项目共享;1:仅个人与管理员
   */
  Privilege: number
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 责任人
   */
  Incharge?: string
  /**
   * 数据优化引擎
   */
  DataOptimizationResource?: string
  /**
   * 是否开启数据优化
   */
  SmartOptimizerWritten?: string
  /**
   * 数据优化针对的表
   */
  TableName?: string
}

/**
 * 数据运维脚本信息
 */
export interface AiopsScriptInfo {
  /**
   * 脚本内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScriptContent: string
  /**
   * 脚本所在COS的路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  CosPath: string
  /**
   * 脚本所在COS的地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  CosRegion: string
  /**
   * 脚本所在COS的桶名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  CosBucketName: string
}

/**
 * BatchKillIntegrationTaskInstances返回参数结构体
 */
export interface BatchKillIntegrationTaskInstancesResponse {
  /**
   * 操作成功的任务数
   */
  SuccessCount?: number
  /**
   * 操作失败的任务数
   */
  FailedCount?: number
  /**
   * 任务总数
   */
  TotalCount?: number
  /**
   * 实际传的为taskId
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskNames?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RunTasksByMultiWorkflow请求参数结构体
 */
export interface RunTasksByMultiWorkflowRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 工作流id列表
   */
  WorkflowIds: Array<string>
  /**
   * 是否补录中间实例 0.不补录 1.补录实例
   */
  EnableMakeUp: number
}

/**
 * 事件监听器
 */
export interface EventListenerOpsDto {
  /**
   * 事件名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventName?: string
  /**
   * 关键字，如果是任务，则是任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key?: string
  /**
   * 触发方式
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 事件属性
注意：此字段可能返回 null，表示取不到有效值。
   */
  Properties?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreationTimestamp?: string
}

/**
 * CheckIntegrationTaskNameExists请求参数结构体
 */
export interface CheckIntegrationTaskNameExistsRequest {
  /**
   * 任务名称
   */
  TaskName: string
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 任务ID
   */
  TaskId?: string
  /**
   * 同步类型1.单表同步，2.解决方案
   */
  SyncType?: number
}

/**
 * DescribeWorkflowSchedulerInfoDs返回参数结构体
 */
export interface DescribeWorkflowSchedulerInfoDsResponse {
  /**
   * 数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: WorkflowScheduleDtoDs
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRuleGroupTable返回参数结构体
 */
export interface DescribeRuleGroupTableResponse {
  /**
   * 数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: RuleGroupTable
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 日评分信息
 */
export interface DailyScoreInfo {
  /**
   * 统计日期 时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatisticsDate: number
  /**
   * 评分
注意：此字段可能返回 null，表示取不到有效值。
   */
  Score: number
}

/**
 * SuspendIntegrationTask请求参数结构体
 */
export interface SuspendIntegrationTaskRequest {
  /**
   * 任务id
   */
  TaskId: string
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 事件类型(START, STOP, SUSPEND, SUSPEND_WITHOUT_SP,RESUME, COMMIT, TIMESTAMP)
   */
  Event?: string
}

/**
 * 任务提交预校验详细信息
 */
export interface TaskSubmitPreCheckDetailInfo {
  /**
   * 任务编号
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskName?: string
  /**
   * 项目编号
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectName?: string
  /**
   * 责任人编号
注意：此字段可能返回 null，表示取不到有效值。
   */
  InChargeId?: string
  /**
   * 责任人名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  InCharge?: string
}

/**
 * DescribeDependOpsTasks返回参数结构体
 */
export interface DescribeDependOpsTasksResponse {
  /**
   * 画布任务和链接信息
   */
  Data?: OpsTaskCanvasInfoList
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRuleTemplate返回参数结构体
 */
export interface DeleteRuleTemplateResponse {
  /**
   * 删除成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRuleTemplate请求参数结构体
 */
export interface DescribeRuleTemplateRequest {
  /**
   * 项目ID
   */
  ProjectId?: string
  /**
   * 规则模板Id
   */
  TemplateId?: number
}

/**
 * 数据质量自定义规则时的sql表达式解析对象
 */
export interface SqlExpression {
  /**
   * sql表达式表名
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableExpressions?: Array<SqlExpressionTable>
  /**
   * sql表达式字段名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamExpressions?: Array<string>
}

/**
 * DescribeTaskByCycle请求参数结构体
 */
export interface DescribeTaskByCycleRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 1
   */
  InCharge?: string
  /**
   * 工作流ID
   */
  WorkflowId?: string
  /**
   * 项目ID列表筛选
   */
  ProjectIds?: Array<string>
  /**
   * 资源组ID列表筛选
   */
  ResourceGroupIds?: Array<string>
  /**
   * 任务类型ID筛选
   */
  TaskTypeIdList?: Array<string>
}

/**
 * DescribeProjectUsers返回参数结构体
 */
export interface DescribeProjectUsersResponse {
  /**
   * 项目列表
   */
  Data?: ProjectUsersPage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Id包装对象
 */
export interface CommonId {
  /**
   * Id值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id: string
}

/**
 * CreateRuleTemplate请求参数结构体
 */
export interface CreateRuleTemplateRequest {
  /**
   * 模板类型  1.系统模板   2.自定义模板
   */
  Type?: number
  /**
   * 模板名称
   */
  Name?: string
  /**
   * 质量检测维度 1.准确性 2.唯一性 3.完整性 4.一致性 5.及时性 6.有效性
   */
  QualityDim?: number
  /**
   * 源端数据对象类型 1.常量  2.离线表级   2.离线字段级
   */
  SourceObjectType?: number
  /**
   * 模板描述
   */
  Description?: string
  /**
   * 源端对应的引擎类型
   */
  SourceEngineTypes?: Array<number | bigint>
  /**
   * 是否关联其它库表
   */
  MultiSourceFlag?: boolean
  /**
   * SQL 表达式
   */
  SqlExpression?: string
  /**
   * 项目Id
   */
  ProjectId?: string
  /**
   * 是否添加where参数
   */
  WhereFlag?: boolean
}

/**
 * 数据排布治理项
 */
export interface DlcRewriteDataInfo {
  /**
   * 是否启用数据重排布治理项：enable（启动）、disable（不启用，默认）
注意：此字段可能返回 null，表示取不到有效值。
   */
  RewriteDataEnable?: string
  /**
   * 用于运行数据重排布治理项的引擎名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Engine?: string
  /**
   * 重排布任务执行的文件个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MinInputFiles?: number
  /**
   * 数据重排布写后的数据文件大小，单位为字节
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetFileSizeBytes?: number
  /**
   * 数据重排布治理运行周期，单位为分钟
注意：此字段可能返回 null，表示取不到有效值。
   */
  IntervalMin?: number
}

/**
 * 质量概览表排行结果
 */
export interface TopTableStat {
  /**
   * 告警表列表
   */
  AlarmTables: Array<TopTableStatItem>
  /**
   * 阻塞表列表
   */
  PipelineTables: Array<TopTableStatItem>
}

/**
 * 分页查询工作流画布运行起止时间
 */
export interface WorkFlowExecuteDtoByPage {
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * data
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<WorkFlowExecuteDto>
  /**
   * 分页大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
}

/**
 * DescribeRuleExecDetail返回参数结构体
 */
export interface DescribeRuleExecDetailResponse {
  /**
   * 规则执行结果详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: RuleExecResultDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 通用过滤器
 */
export interface Filter {
  /**
   * 过滤字段名称
   */
  Name?: string
  /**
   * 过滤值列表
   */
  Values?: Array<string>
}

/**
 * 键值对
 */
export interface Pair {
  /**
   * 键名
   */
  Key: string
  /**
   * 值
   */
  Value: string
  /**
   *  唯一标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
}

/**
 * DeleteIntegrationTask返回参数结构体
 */
export interface DeleteIntegrationTaskResponse {
  /**
   * 任务删除成功与否标识
   */
  Data?: boolean
  /**
   * 任务删除成功与否标识
0表示删除成功
1 表示失败，失败原因见 DeleteErrInfo
100 表示running or suspend task can't be deleted失败，失败原因也会写到DeleteErrInfo里面
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeleteFlag?: number
  /**
   * 删除失败原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeleteErrInfo?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 建dlc表所需信息
 */
export interface TableBaseInfo {
  /**
   * 数据库名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseName?: string
  /**
   * 表名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableName?: string
  /**
   * 数据表所属数据源名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceConnectionName?: string
  /**
   * 表备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableComment?: string
  /**
   * 类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 数据格式类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableFormat?: string
  /**
   * 用户昵称
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserAlias?: string
  /**
   * 建表用户ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserSubUin?: string
  /**
   * 数据治理配置项
注意：此字段可能返回 null，表示取不到有效值。
   */
  GovernPolicy?: DlcDataGovernPolicy
  /**
   * 库数据治理是否关闭，关闭：true，开启：false
注意：此字段可能返回 null，表示取不到有效值。
   */
  DbGovernPolicyIsDisable?: string
}

/**
 * BatchCreateTaskVersionAsync返回参数结构体
 */
export interface BatchCreateTaskVersionAsyncResponse {
  /**
   * 批量操作返回
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: BatchTaskOperateNew
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceByCycle请求参数结构体
 */
export interface DescribeInstanceByCycleRequest {
  /**
   * 1
   */
  ProjectId?: string
  /**
   * 1
   */
  TenantId?: string
}

/**
 * 值班信息
 */
export interface Duty {
  /**
   * 值班Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DutyScheduleId: number
  /**
   * 值班开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime: string
  /**
   * 值班结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime: string
  /**
   * 值班人员
注意：此字段可能返回 null，表示取不到有效值。
   */
  DutyPersons: Array<DutyPerson>
}

/**
 * DescribeThirdTaskRunLog请求参数结构体
 */
export interface DescribeThirdTaskRunLogRequest {
  /**
   * 任务ID
   */
  TaskId: string
  /**
   * 实例数据时间
   */
  CurRunDate: string
}

/**
 * DescribeIntegrationStatisticsTaskStatus返回参数结构体
 */
export interface DescribeIntegrationStatisticsTaskStatusResponse {
  /**
   * 统计结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatusData?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * JudgeResourceFile请求参数结构体
 */
export interface JudgeResourceFileRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 资源路径
   */
  FilePath: string
}

/**
 * UploadResource返回参数结构体
 */
export interface UploadResourceResponse {
  /**
   * 资源文件信息列表
   */
  Data?: Array<UserFileDTONew>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOpsMakePlanInstances返回参数结构体
 */
export interface DescribeOpsMakePlanInstancesResponse {
  /**
   * 补录计划实例分页查询结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: MakePlanInstanceOpsDtoCollection
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDatabaseInfoList请求参数结构体
 */
export interface DescribeDatabaseInfoListRequest {
  /**
   * 过滤参数
   */
  Filters: Array<Filter>
  /**
   * 连接类型
   */
  ConnectionType: string
}

/**
 * DescribeIntegrationTask返回参数结构体
 */
export interface DescribeIntegrationTaskResponse {
  /**
   * 任务信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskInfo?: IntegrationTaskInfo
  /**
   * 采集器统计信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  AgentStatus?: AgentStatus
  /**
   * 任务版本信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskVersion?: TaskVersionInstance
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDataModel请求参数结构体
 */
export interface CreateDataModelRequest {
  /**
   * 云应用的实例id
   */
  CloudappId: string
  /**
   * 用户的子账号id
   */
  UserId: string
  /**
   * Wedata数据建模购买参数，包年包月类型单位，年：y，月：m，默认m
   */
  TimeUnit?: string
  /**
   * Wedata数据建模购买参数，购买时长，默认1
   */
  TimeSpan?: number
  /**
   * Wedata数据建模购买参数，是否自动续费，是：1，否：0，默认0
   */
  AutoRenewFlag?: number
  /**
   * Wedata数据建模购买参数，标准版：DATA_MODEL_STANDARD，企业版：DATA_MODEL_PRO，默认DATA_MODEL_STANDARD
   */
  DataModelVersion?: string
}

/**
 * DescribeQualityScoreTrend返回参数结构体
 */
export interface DescribeQualityScoreTrendResponse {
  /**
   * 质量评分趋势视图
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: QualityScoreTrend
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 规则维度数统计
 */
export interface RuleDimStat {
  /**
   * 总数
   */
  TotalCnt: number
  /**
   * 维度统计数
   */
  DimCntList: Array<RuleDimCnt>
}

/**
 * CreateHiveTableByDDL请求参数结构体
 */
export interface CreateHiveTableByDDLRequest {
  /**
   * 数据源ID
   */
  DatasourceId: string
  /**
   * 数据库
   */
  Database: string
  /**
   * 建hive表ddl的base64编码
   */
  DDLSql: string
  /**
   * 表权限 ，默认为0:项目共享;1:仅个人与管理员
   */
  Privilege: number
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 目标表类型(HIVE或GBASE)
   */
  Type: string
  /**
   * 责任人
   */
  Incharge?: string
  /**
   * schema名称
   */
  SchemaName?: string
  /**
   * 是否异步建表
   */
  Async?: boolean
  /**
   * 数据优化使用的资源
   */
  DataOptimizationResource?: string
  /**
   * 是否开启数据优化
   */
  SmartOptimizerWritten?: string
  /**
   * 数据优化表名
   */
  TableName?: string
}

/**
 * 数据质量数据来源数据库
 */
export interface DatabaseInfo {
  /**
   * 数据源名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceName?: string
  /**
   * 数据源Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceId?: string
  /**
   * 数据库名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseName?: string
  /**
   * 数据库id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseId?: string
  /**
   * 实例Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 数据源类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceType?: number
  /**
   * 数据库原始名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  OriginDatabaseName?: string
  /**
   * schema名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  OriginSchemaName?: string
  /**
   * 0或者未返回.未定义，1.生产 2.开发
注意：此字段可能返回 null，表示取不到有效值。
   */
  DsEnvType?: number
  /**
   * EMR引擎部署方式：CVM/TKE
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterDeployType?: string
  /**
   * 模式名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SchemaName?: string
}

/**
 * GetIntegrationNodeColumnSchema返回参数结构体
 */
export interface GetIntegrationNodeColumnSchemaResponse {
  /**
   * 字段列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Schemas?: Array<IntegrationNodeSchema>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopIntegrationTask返回参数结构体
 */
export interface StopIntegrationTaskResponse {
  /**
   * 操作成功与否标识
   */
  Data?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOpsWorkflows返回参数结构体
 */
export interface DescribeOpsWorkflowsResponse {
  /**
   * 工作流列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: WorkflowExtOpsDtoPage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务信息
 */
export interface OpsTaskCanvasDto {
  /**
   * 任务Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId: string
  /**
   * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskName: string
  /**
   * 工作流id
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowId: string
  /**
   * 工作流名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowName: string
  /**
   * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectName: string
  /**
   * 项目标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectIdent: string
  /**
   * 任务状态，'Y','F','O','T','INVALID' 分别表示调度中、已停止、已暂停、停止中、已失效
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: string
  /**
   * 任务类型id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskTypeId: number
  /**
   * 任务类型描述，其中任务类型id和任务类型描述的对应的关系为
20	通用数据同步任务
21	JDBC SQL
22	Tbase
25	数据ETL
30	Python
31	PySpark
34	Hive SQL
35	Shell
36	Spark SQL
37	HDFS到HBase
38	SHELL
39	Spark
45	DATA_QUALITY
55	THIVE到MYSQL
56	THIVE到PG
66	HDFS到PG
67	HDFS到Oracle
68	HDFS到MYSQL
69	FTP到HDFS
70	HIVE SQL
72	HIVE到HDFS
75	HDFS到HIVE
81	PYTHONSQL脚本
82	SPARKSCALA计算
83	虫洞任务
84	校验对账文件
85	HDFS到THIVE
86	TDW到HDFS
87	HDFS到TDW
88	校验对账文件
91	FLINK任务
92	MapReduce
98	custom topology
99	kafkatoHDFS
100	kafkatoHbase
101	MYSQL导入至HIVE(DX)
104	MYSQL到HIVE
105	HIVE到MYSQL
106	SQL SERVER到HIVE
107	HIVE到SQL SERVER
108	ORACLE到HIVE
109	HIVE到ORACLE
111	HIVE到MYSQL(NEW)
112	HIVE到PG
113	HIVE到PHOENIX
118	MYSQL到HDFS
119	PG到HDFS
120	ORACLE到HDFS
121	数据质量
10000	自定义业务
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskTypeDesc: string
  /**
   * 项目id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId: string
  /**
   * 文件夹名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  FolderName: string
  /**
   * 文件夹id
注意：此字段可能返回 null，表示取不到有效值。
   */
  FolderId: string
  /**
   * 最近提交时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  FirstSubmitTime: string
  /**
   * 首次运行时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  FirstRunTime: string
  /**
   * 调度计划展示描述信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScheduleDesc: string
  /**
   * 负责人
注意：此字段可能返回 null，表示取不到有效值。
   */
  InCharge: string
  /**
   * 调度周期类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleUnit: string
  /**
   * 画布x轴坐标点
注意：此字段可能返回 null，表示取不到有效值。
   */
  LeftCoordinate: number
  /**
   * 画布y轴坐标点
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopCoordinate: number
  /**
   * 跨工作流虚拟任务标识；true标识跨工作流任务；false标识本工作流任务
注意：此字段可能返回 null，表示取不到有效值。
   */
  VirtualFlag: boolean
  /**
   * 弹性周期配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskAction: string
  /**
   * 延迟时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  DelayTime: number
  /**
   * 执行开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutionStartTime?: string
  /**
   * 执行结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutionEndTime?: string
  /**
   * 层级
注意：此字段可能返回 null，表示取不到有效值。
   */
  Layer?: string
  /**
   * 来源数据源ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceServiceId?: string
  /**
   * 来源数据源类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceServiceType?: string
  /**
   * 目标数据源ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetServiceId?: string
  /**
   * 目标数据源类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetServiceType?: string
  /**
   * 任务告警类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmType?: string
  /**
   * 任务创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
}

/**
 * DescribeRuleTemplates请求参数结构体
 */
export interface DescribeRuleTemplatesRequest {
  /**
   * 模板类型 1.系统模板 2.自定义模板
   */
  Type?: number
  /**
   * 1.常量 2.离线表级 2.离线字段级
   */
  SourceObjectType?: number
  /**
   * 项目Id
   */
  ProjectId?: string
  /**
   * 源端对应的引擎类型
   */
  SourceEngineTypes?: Array<number | bigint>
}

/**
 * DescribeDataCheckStat返回参数结构体
 */
export interface DescribeDataCheckStatResponse {
  /**
   * 结果
   */
  Data?: DataCheckStat
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceDetailInfo请求参数结构体
 */
export interface DescribeInstanceDetailInfoRequest {
  /**
   * 任务ID
   */
  TaskId: string
  /**
   * 实例数据时间
   */
  CurRunDate: string
  /**
   * 项目id
   */
  ProjectId?: string
  /**
   * 实例的第几次执行
   */
  LifeRound?: number
  /**
   * 生命周期查询起始index
   */
  LifeRoundStartIndex?: number
  /**
   * 生命周期查询批次数量
   */
  LifeRoundSize?: number
  /**
   * 生命周期总数，可省略
   */
  TotalLifeRound?: string
  /**
   * 动态加载日志标识
   */
  Dynamic?: boolean
}

/**
 * DescribeIntegrationStatisticsInstanceTrend请求参数结构体
 */
export interface DescribeIntegrationStatisticsInstanceTrendRequest {
  /**
   * 任务类型（实时：201，离线：202）
   */
  TaskType: number
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 查询日期
   */
  QueryDate?: string
  /**
   * 资源组id
   */
  ExecutorGroupId?: string
}

/**
 * DescribeDsFolderTree返回参数结构体
 */
export interface DescribeDsFolderTreeResponse {
  /**
   * 统一树结构返回属性列表
   */
  Data?: Array<PathNodeDsVO>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据开发-统一树结构返回属性
 */
export interface PathNodeDsVO {
  /**
   * PathNode ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * PathNode 名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Title?: string
  /**
   * PathNode 类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 父节点唯一标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentId?: string
  /**
   * 是否叶子节点
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsLeaf?: boolean
  /**
   * 子节点列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Children?: Array<PathNodeDsVO>
  /**
   * 业务参数 ,base64编译的json串，获取具体参数需要base64反编译
注意：此字段可能返回 null，表示取不到有效值。
   */
  Params?: string
}

/**
 * DescribeWorkflowCanvasInfo请求参数结构体
 */
export interface DescribeWorkflowCanvasInfoRequest {
  /**
   * 工作流id
   */
  WorkflowId: string
  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * 参数参数
 */
export interface ParamInfoDs {
  /**
   * 参数名
   */
  ParamKey: string
  /**
   * 参数值
   */
  ParamValue: string
}

/**
 * DagInstances请求参数结构体
 */
export interface DagInstancesRequest {
  /**
   * 实例列表
   */
  Instances?: Array<InstanceOpsDto>
  /**
   * 检查父任务类型, true: 检查父任务; false: 不检查父任务
   */
  CheckFather?: boolean
  /**
   * 重跑类型, 1: 自身; 3: 孩子; 2: 自身以及孩子
   */
  RerunType?: string
  /**
   * 实例依赖方式, 1: 自依赖; 2: 任务依赖; 3: 自依赖及父子依赖
   */
  DependentWay?: string
  /**
   * 重跑忽略事件监听与否
   */
  SkipEventListening?: boolean
  /**
   * 下游实例范围 1: 所在工作流 2: 所在项目 3: 所有跨工作流依赖的项目
   */
  SonInstanceType?: string
  /**
   * 查询条件,当前接口需要把要查询的示例信息放在该字段
   */
  SearchCondition?: InstanceApiOpsRequest
  /**
   * 访问类型
   */
  OptType?: string
  /**
   * 操作者名称
   */
  OperatorName?: string
  /**
   * 操作者id
   */
  OperatorId?: string
  /**
   * 项目id
   */
  ProjectId?: string
  /**
   * 项目标志
   */
  ProjectIdent?: string
  /**
   * 项目名称
   */
  ProjectName?: string
  /**
   * 索引页码
   */
  PageIndex?: number
  /**
   * 页面大小
   */
  PageSize?: number
  /**
   * 数据总数
   */
  Count?: number
  /**
   * 基础请求信息
   */
  RequestBaseInfo?: ProjectBaseInfoOpsRequest
  /**
   * 是否计算总数
   */
  IsCount?: boolean
}

/**
 * DryRunDIOfflineTask返回参数结构体
 */
export interface DryRunDIOfflineTaskResponse {
  /**
   * 数据时间
   */
  CurrentRunDate?: string
  /**
   * 项目Id
   */
  ProjectId?: string
  /**
   * 任务状态
   */
  Status?: string
  /**
   * 任务Id
   */
  TaskId?: string
  /**
   * 任务实例唯一key
   */
  TaskInstanceKey?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 文件夹属性
 */
export interface FolderOpsDto {
  /**
   * 文件夹id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 文件夹名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 所属项目id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 父文件夹id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentsFolderId?: string
  /**
   * 工作流总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 工作流列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Workflows?: Array<WorkflowCanvasOpsDto>
  /**
   * 子文件夹总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalFolders?: number
  /**
   * 子文件夹列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  FoldersList?: string
  /**
   * 搜索类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  FindType?: string
}

/**
 * DescribeTaskLockStatus请求参数结构体
 */
export interface DescribeTaskLockStatusRequest {
  /**
   * 任务id
   */
  TaskId: string
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 任务类型：201. stream,   202. offline
   */
  TaskType: number
}

/**
 * DescribeRuleExecStat请求参数结构体
 */
export interface DescribeRuleExecStatRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 开始时间，时间戳到秒
   */
  BeginDate: string
  /**
   * 结束时间，时间戳到秒
   */
  EndDate: string
}

/**
 * 离线任务新增参数
 */
export interface OfflineTaskAddParam {
  /**
   * 名称
   */
  WorkflowName: string
  /**
   * 依赖：yes、no
   */
  DependencyWorkflow: string
  /**
   * 任务开始数据时间。非空。默认当前时间
   */
  StartTime: string
  /**
   * 任务结束数据时间。非空。默认当前时间
   */
  EndTime: string
  /**
   * 周期类型。一次性任务:6、分钟任务：1、小时任务：2、天任务：3、周任务：4、月任务：5、crontab任务：0
   */
  CycleType: number
  /**
   * 间隔，可选，默认1。非空。默认 1
   */
  CycleStep: number
  /**
   * 延时执行时间，单位分钟
   */
  DelayTime: number
  /**
   * 任务cron表达式，仅cron任务使用，其他时候默认为空
注意：此字段可能返回 null，表示取不到有效值。
   */
  CrontabExpression: string
  /**
   * 重试等待
   */
  RetryWait: number
  /**
   * 是否可以重试
   */
  Retriable: number
  /**
   * 重试限制
   */
  TryLimit: number
  /**
   * 优先级
   */
  RunPriority: number
  /**
   * 产品名称
   */
  ProductName: string
  /**
   * 1 有序串行 一次一个，排队 orderly 
2 无序串行 一次一个，不排队 serial  
3 并行 一次多个 parallel
   */
  SelfDepend: number
  /**
   * 时间指定，如月任务指定1，3号，则填入 1，3。非空。默认 ""
月任务：如具体1，3号则写 "1,3"，指定月末不可和具体号数一起输入，仅能为 "L"
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskAction?: string
  /**
   * 调度执行结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutionEndTime?: string
  /**
   * 调度执行开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutionStartTime?: string
  /**
   * 是否自动提交
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskAutoSubmit?: boolean
  /**
   * 实例生成方式，T_PLUS_0 当天任务当天调度 / T_PLUS_1 当天任务后一天调度
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceInitStrategy?: string
}

/**
 * 规则配置
 */
export interface RuleConfig {
  /**
   * 规则ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleId?: number
  /**
   * 规则检测范围类型 1.全表  2.条件扫描
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConditionType?: number
  /**
   * 检测范围表达式
注意：此字段可能返回 null，表示取不到有效值。
   */
  Condition?: string
  /**
   * 目标检测范围表达式
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetCondition?: string
}

/**
 * 实时任务日志内容
 */
export interface LogContent {
  /**
   * 日志时间戳，单位毫秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  Time: number
  /**
   * 日志包id
注意：此字段可能返回 null，表示取不到有效值。
   */
  PkgId: string
  /**
   * 日志内容
   */
  Log: string
}

/**
 * 实时任务同步速度趋势
 */
export interface RealTimeTaskSpeed {
  /**
   * 同步速度条/s列表
   */
  RecordsSpeedList: Array<RecordsSpeed>
  /**
   * 同步速度字节/s列表
   */
  BytesSpeedList: Array<BytesSpeed>
}

/**
 * 基于表的标签统计信息
 */
export interface TagVoteSum {
  /**
   * 标签id
   */
  TagId: number
  /**
   * 该表该标签投票次数
   */
  VoteSum: number
  /**
   * 当前用户对这张表是否加了该标签 true 已添加 false 未添加
   */
  Status: boolean
  /**
   * 标签名
   */
  TagName: string
}

/**
 * BatchCreateIntegrationTaskAlarms返回参数结构体
 */
export interface BatchCreateIntegrationTaskAlarmsResponse {
  /**
   * 操作成功的任务数
注意：此字段可能返回 null，表示取不到有效值。
   */
  SuccessCount?: number
  /**
   * 操作失败的任务数
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailedCount?: number
  /**
   * 任务总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIntegrationStatistics请求参数结构体
 */
export interface DescribeIntegrationStatisticsRequest {
  /**
   * 任务类型（实时：201，离线：202）
   */
  TaskType: number
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 查询日期
   */
  QueryDate?: string
}

/**
 * DescribeRuleGroup请求参数结构体
 */
export interface DescribeRuleGroupRequest {
  /**
   * 规则组ID
   */
  RuleGroupId?: number
  /**
   * 数据来源ID
   */
  DatasourceId?: string
  /**
   * 数据表Id
   */
  TableId?: string
  /**
   * 项目ID
   */
  ProjectId?: string
  /**
   * 数据库ID
   */
  DatabaseId?: string
}

/**
 * ModifyTaskName请求参数结构体
 */
export interface ModifyTaskNameRequest {
  /**
   * 名称
   */
  TaskName: string
  /**
   * id
   */
  TaskId: string
  /**
   * 项目/工作空间id
   */
  ProjectId: string
  /**
   * 备注
   */
  Notes?: string
}

/**
 * DescribeTrendStat请求参数结构体
 */
export interface DescribeTrendStatRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 开始时间，时间戳到秒
   */
  BeginDate: string
  /**
   * 结束时间，时间戳到秒
   */
  EndDate: string
}

/**
 * DescribeOpsInstanceLogList返回参数结构体
 */
export interface DescribeOpsInstanceLogListResponse {
  /**
   * 实例日志列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<InstanceLogInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeApproveTypeList返回参数结构体
 */
export interface DescribeApproveTypeListResponse {
  /**
   * 获取审批分类列表
   */
  Data?: Array<ApproveType>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 规则组执行结果分页
 */
export interface RuleGroupExecResultPage {
  /**
   * 记录数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 规则组执行结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<RuleGroupExecResult>
}

/**
 * DescribeRuleGroupSubscription请求参数结构体
 */
export interface DescribeRuleGroupSubscriptionRequest {
  /**
   * 规则组ID
   */
  RuleGroupId?: number
  /**
   * 项目ID
   */
  ProjectId?: string
}

/**
 * 包含层级信息的函数
 */
export interface OrganizationalFunction {
  /**
   * 名称
   */
  Name?: string
  /**
   * 展示名称
   */
  DisplayName?: string
  /**
   * 层级路径
   */
  LayerPath?: string
  /**
   * 上级层级路径
   */
  ParentLayerPath?: string
  /**
   * 函数类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 函数分类：窗口函数、聚合函数、日期函数......
注意：此字段可能返回 null，表示取不到有效值。
   */
  Kind?: string
  /**
   * 函数种类：系统函数、自定义函数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Category?: string
  /**
   * 函数状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 函数说明
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 函数用法
注意：此字段可能返回 null，表示取不到有效值。
   */
  Usage?: string
  /**
   * 函数参数说明
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamDesc?: string
  /**
   * 函数返回值说明
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReturnDesc?: string
  /**
   * 函数示例
注意：此字段可能返回 null，表示取不到有效值。
   */
  Example?: string
  /**
   * 集群实例引擎 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterIdentifier?: string
  /**
   * 函数 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  FuncId?: string
  /**
   * 函数类名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClassName?: string
  /**
   * 函数资源列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceList?: Array<FunctionVersion>
  /**
   * 操作人 ID 列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  OperatorUserIds?: Array<number | bigint>
  /**
   * 公有云 Owner ID 列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUserIds?: Array<number | bigint>
  /**
   * 数据库名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DbName?: string
  /**
   * 提交失败错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubmitErrorMsg?: string
  /**
   * 模式名
注意：此字段可能返回 null，表示取不到有效值。
   */
  SchemaName?: string
  /**
   * 函数命令格式
注意：此字段可能返回 null，表示取不到有效值。
   */
  CommandFormat?: string
  /**
   * 名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerName?: string
  /**
   * 时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubmitTimestamp?: string
  /**
   * 函数tag
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tag?: string
  /**
   * 操作人 ID 列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  OperatorUserIdsStr?: Array<string>
  /**
   * 公有云 Owner ID 列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUserIdsStr?: Array<string>
  /**
   * 数据库环境
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnvType?: string
  /**
   * 函数资源文件类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  FunctionResourceFileType?: string
}

/**
 * 通用排序字段
 */
export interface OrderField {
  /**
   * 排序字段名称
   */
  Name: string
  /**
   * 排序方向：ASC|DESC
   */
  Direction: string
}

/**
 * BatchSuspendIntegrationTasks返回参数结构体
 */
export interface BatchSuspendIntegrationTasksResponse {
  /**
   * 操作成功的任务数
   */
  SuccessCount?: number
  /**
   * 操作失败的任务数
   */
  FailedCount?: number
  /**
   * 任务总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteProjectUsers请求参数结构体
 */
export interface DeleteProjectUsersRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 用户ID列表
   */
  UserIds: Array<string>
}

/**
 * 租户基础信息
 */
export interface BaseTenant {
  /**
   * 租户id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TenantId: string
  /**
   * 租户标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  TenantName: string
  /**
   * 租户显示名称，一般是中文名
注意：此字段可能返回 null，表示取不到有效值。
   */
  DisplayName: string
  /**
   * 备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description: string
  /**
   * 租户主账号
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUserId: string
  /**
   * 租户的额外配置参数, json格式字符串
注意：此字段可能返回 null，表示取不到有效值。
   */
  Params: string
}

/**
 * DescribeWorkflowExecuteById请求参数结构体
 */
export interface DescribeWorkflowExecuteByIdRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 工作流ID
   */
  WorkFlowIdList?: string
  /**
   * 分页大小
   */
  PageNumber?: number
  /**
   * 分页索引
   */
  PageSize?: number
}

/**
 * 用户生产工作流列表分页
 */
export interface WorkflowExtOpsDtoPage {
  /**
   * 记录总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 记录列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<WorkflowExtOpsDto>
}

/**
 * DescribeTableLineage返回参数结构体
 */
export interface DescribeTableLineageResponse {
  /**
   * 表血缘信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableLineage?: TableLineageInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRuleExecLog请求参数结构体
 */
export interface DescribeRuleExecLogRequest {
  /**
   * 规则执行Id
   */
  RuleExecId: number
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 规则组执行id
   */
  RuleGroupExecId: number
}

/**
 * BatchRerunIntegrationTaskInstances返回参数结构体
 */
export interface BatchRerunIntegrationTaskInstancesResponse {
  /**
   * 操作成功的任务数
   */
  SuccessCount?: number
  /**
   * 操作失败的任务数
   */
  FailedCount?: number
  /**
   * 任务总数
   */
  TotalCount?: number
  /**
   * 实际传的为taskId
   */
  TaskNames?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 规则组分页
 */
export interface RuleGroupPage {
  /**
   * 记录数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount: number
  /**
   * 规则组列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items: Array<RuleGroup>
}

/**
 * DeleteDataModel请求参数结构体
 */
export interface DeleteDataModelRequest {
  /**
   * 云应用的实例id
   */
  CloudappId: string
  /**
   * 数据建模的实例id
   */
  DataModelId: string
  /**
   * 用户的子账号id
   */
  UserId: string
}

/**
 * DescribeApproveList返回参数结构体
 */
export interface DescribeApproveListResponse {
  /**
   * 待审批列表详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: DescribeApply
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIntegrationTasks请求参数结构体
 */
export interface DescribeIntegrationTasksRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 分页第n页
   */
  PageNumber: number
  /**
   * 分页大小
   */
  PageSize: number
  /**
   * 查询filter;默认查询任务的开发态，如需查询生产态任务需添加{"Values":["true"],"Name":"ProductionState"};如需查询查询任务状态需要查询生产态任务列表
   */
  Filters?: Array<Filter>
  /**
   * 排序字段信息
   */
  OrderFields?: Array<OrderField>
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
  /**
   * 201. 实时同步, 202. 离线同步 默认实时
   */
  TaskType?: number
}

/**
 * BatchMakeUpIntegrationTasks返回参数结构体
 */
export interface BatchMakeUpIntegrationTasksResponse {
  /**
   * 操作成功的任务数
   */
  SuccessCount?: number
  /**
   * 操作失败的任务数
   */
  FailedCount?: number
  /**
   * 任务总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 函数资源信息
 */
export interface FunctionResource {
  /**
   * 资源路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  Path: string
  /**
   * 无
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name: string
  /**
   * 资源唯一标识
   */
  Id?: string
  /**
   * 资源 MD5 值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Md5?: string
  /**
   * 默认是 hdfs
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
}

/**
 * SubmitCustomFunction请求参数结构体
 */
export interface SubmitCustomFunctionRequest {
  /**
   * 函数唯一标识
   */
  FunctionId: string
  /**
   * 集群实例 ID
   */
  ClusterIdentifier: string
  /**
   * 备注信息
   */
  Comment: string
  /**
   * 项目ID
   */
  ProjectId?: string
}

/**
 * 任务锁的状态
 */
export interface TaskLockStatus {
  /**
   * 任务id
   */
  TaskId: string
  /**
   * 持锁者
   */
  Locker: string
  /**
   * 当前操作用户是否为持锁者，1表示为持锁者，0表示为不为持锁者
   */
  IsLocker: number
  /**
   * 是否可以抢锁，1表示可以抢锁，0表示不可以抢锁
   */
  IsRob: number
}

/**
 * 事件消费记录
 */
export interface EventCaseConsumeLogOptDto {
  /**
   * 消费ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConsumeLogId?: string
  /**
   * 事件案例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventCaseId?: string
  /**
   * 消费者ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConsumerId?: string
  /**
   * 消费时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreationTimestamp?: string
  /**
   * 任务详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConsumerDetail?: TaskOpsDto
}
