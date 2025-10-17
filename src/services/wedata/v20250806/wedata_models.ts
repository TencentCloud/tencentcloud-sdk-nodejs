/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
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
 * 创建任务返回体
 */
export interface CreateTaskResult {
  /**
   * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
}

/**
 * ListProcessLineage返回参数结构体
 */
export interface ListProcessLineageResponse {
  /**
   * 分页数据
   */
  Data?: ListProcessLineagePage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetSuccessTaskInstancesAsync请求参数结构体
 */
export interface SetSuccessTaskInstancesAsyncRequest {
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 实例id列表,可以从ListInstances中获取
   */
  InstanceKeyList: Array<string>
}

/**
 * 获取工作流的列表信息item
 */
export interface WorkflowInfo {
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
   * 工作流类型，cycle及manual
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowType?: string
  /**
   * 负责人ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUin?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 最新修改时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifyTime?: string
  /**
   * 最后更新人ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateUserUin?: string
  /**
   * 工作流描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowDesc?: string
  /**
   * 创建人ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateUserUin?: string
}

/**
 * ListTable返回参数结构体
 */
export interface ListTableResponse {
  /**
   * 分页数据
   */
  Data?: ListTablePage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDataSource请求参数结构体
 */
export interface CreateDataSourceRequest {
  /**
   * 数据源项目ID
   */
  ProjectId: string
  /**
   * 数据源名称
   */
  Name: string
  /**
   * 数据源类型:枚举值

- MYSQL
- TENCENT_MYSQL
- POSTGRE
- ORACLE
- SQLSERVER
- FTP
- HIVE
- HUDI
- HDFS
- ICEBERG
- KAFKA
- DTS_KAFKA
- HBASE
- SPARK
- TBASE
- DB2
- DM
- GAUSSDB
- GBASE
- IMPALA
- ES
- TENCENT_ES
- GREENPLUM
- SAP_HANA
- SFTP
- OCEANBASE
- CLICKHOUSE
- KUDU
- VERTICA
- REDIS
- COS
- DLC
- DORIS
- CKAFKA
- S3_DATAINSIGHT
- TDSQL
- TDSQL_MYSQL
- MONGODB
- TENCENT_MONGODB
- REST_API
- TiDB
- StarRocks
- Trino
- Kyuubi
- TCHOUSE_X
- TCHOUSE_P
- TCHOUSE_C
- TCHOUSE_D
- INFLUXDB
- BIG_QUERY
- SSH
- BLOB
- TDSQL_POSTGRE
- GDB
- TDENGINE
- TDSQLC
- FileSystem

   */
  Type: string
  /**
   * 数据源的配置信息，以JSON KV存储，根据每个数据源类型不同，而KV存储信息不同

> deployType: 
CONNSTR_PUBLICDB(公网实例) 
CONNSTR_CVMDB(自建实例)
INSTANCE(云实例)

```
mysql: 自建实例
{
    "deployType": "CONNSTR_CVMDB",
    "url": "jdbc:mysql://1.1.1.1:1111/database",
    "username": "root",
    "password": "root",
    "region": "ap-shanghai",
    "vpcId": "vpc-kprq42yo",
    "type": "MYSQL"
}
mysql: 云实例
{
    "instanceid": "cdb-12uxdo5e",
    "db": "db",
    "region": "ap-shanghai",
    "username": "msyql",
    "password": "mysql",
    "deployType": "INSTANCE",
    "type": "TENCENT_MYSQL"
}
sql_server: 
{
    "deployType": "CONNSTR_PUBLICDB",
    "url": "jdbc:sqlserver://1.1.1.1:223;DatabaseName=database",
    "username": "user_1",
    "password": "pass_2",
    "type": "SQLSERVER"
}
redis:
    redisType:
    -NO_ACCOUT(免账号)
    -SELF_ACCOUNT(自定义账号)
{
    "deployType": "CONNSTR_PUBLICDB",
    "username":""
    "password": "pass",
    "ip": "1.1.1.1",
    "port": "6379",
    "redisType": "NO_ACCOUT",
    "type": "REDIS"
}
oracle: 
{
    "deployType": "CONNSTR_CVMDB",
    "url": "jdbc:oracle:thin:@1.1.1.1:1521:prod",
    "username": "oracle",
    "password": "pass",
    "region": "ap-shanghai",
    "vpcId": "vpc-kprq42yo",
    "type": "ORACLE"
}
mongodb:
    advanceParams(自定义参数，会拼接至url后)
{
    "advanceParams": [
        {
            "key": "authSource",
            "value": "auth"
        }
    ],
    "db": "admin",
    "deployType": "CONNSTR_PUBLICDB",
    "username": "user",
    "password": "pass",
    "type": "MONGODB",
    "host": "1.1.1.1:9200"
}
postgresql:
{
    "deployType": "CONNSTR_PUBLICDB",
    "url": "jdbc:postgresql://1.1.1.1:1921/database",
    "username": "user",
    "password": "pass",
    "type": "POSTGRE"
}
kafka:
    authType:
        - sasl
        - jaas
        - sasl_plaintext
        - sasl_ssl
        - GSSAPI
    ssl:
        -PLAIN
        -GSSAPI
{
    "deployType": "CONNSTR_PUBLICDB",
    "host": "1.1.1.1:9092",
    "ssl": "GSSAPI",
    "authType": "sasl",
    "type": "KAFKA",
    "principal": "aaaa",
    "serviceName": "kafka"
}

cos:
{
    "region": "ap-shanghai",
    "deployType": "INSTANCE",
    "secretId": "aaaaa",
    "secretKey": "sssssss",
    "bucket": "aaa",
    "type": "COS"
}

```
   */
  ProdConProperties: string
  /**
   * 开发环境数据源配置信息，若项目为标准模式，则此字段必填
   */
  DevConProperties?: string
  /**
   * 生产环境数据源文件上传
   */
  ProdFileUpload?: DataSourceFileUpload
  /**
   * 开发环境数据源文件上传
   */
  DevFileUpload?: DataSourceFileUpload
  /**
   * 数据源展示名，为了可视化查看
   */
  DisplayName?: string
  /**
   * 数据源描述信息
   */
  Description?: string
}

/**
 * GetResourceGroupMetrics返回参数结构体
 */
export interface GetResourceGroupMetricsResponse {
  /**
   * 执行组指标信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: ResourceGroupMetrics
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteWorkflow返回参数结构体
 */
export interface DeleteWorkflowResponse {
  /**
   * 是否删除成功
   */
  Data?: DeleteWorkflowResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListDataSources请求参数结构体
 */
export interface ListDataSourcesRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 返回数量，默认10
   */
  PageSize?: number
  /**
   * 页码，默认1
   */
  PageNumber?: number
  /**
   * 数据源名称
   */
  Name?: string
  /**
   * 数据源展示名
   */
  DisplayName?: string
  /**
   * 数据源类型:枚举值

- MYSQL
- TENCENT_MYSQL
- POSTGRE
- ORACLE
- SQLSERVER
- FTP
- HIVE
- HUDI
- HDFS
- ICEBERG
- KAFKA
- HBASE
- SPARK
- VIRTUAL
- TBASE
- DB2
- DM
- GAUSSDB
- GBASE
- IMPALA
- ES
- TENCENT_ES
- GREENPLUM
- PHOENIX
- SAP_HANA
- SFTP
- OCEANBASE
- CLICKHOUSE
- KUDU
- VERTICA
- REDIS
- COS
- DLC
- DORIS
- CKAFKA
- S3
- TDSQL
- TDSQL_MYSQL
- MONGODB
- TENCENT_MONGODB
- REST_API
- SuperSQL
- PRESTO
- TiDB
- StarRocks
- Trino
- Kyuubi
- TCHOUSE_X
- TCHOUSE_P
- TCHOUSE_C
- TCHOUSE_D
- INFLUXDB
- BIG_QUERY
- SSH
- BLOB
   */
  Type?: Array<string>
  /**
   * 创建人
   */
  Creator?: string
}

/**
 * 查询工作流分页列表
 */
export interface OpsWorkflows {
  /**
   * 记录列表	
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<OpsWorkflow>
  /**
   * 结果总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 总页数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPageNumber?: number
  /**
   * 分页大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * 分页页码
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
}

/**
 * 项目信息
 */
export interface ProjectRequest {
  /**
   * 项目标识，英文名，以字母开头，可包含字母、数字和下划线，不能超过32个字符
   */
  ProjectName: string
  /**
   * 项目显示名称，可以为中文名，以字母开头，可包含字母、数字和下划线，不能超过32个字符
   */
  DisplayName: string
  /**
   * 项目模式，SIMPLE（默认）：简单模式 STANDARD：标准模式
   */
  ProjectModel?: string
}

/**
 * DeleteResourceFolder返回参数结构体
 */
export interface DeleteResourceFolderResponse {
  /**
   * true代表删除成功，false代表删除失败
   */
  Data?: DeleteFolderResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateTask请求参数结构体
 */
export interface UpdateTaskRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 任务ID
   */
  TaskId: string
  /**
   * 任务基本属性
   */
  Task: UpdateTaskBrief
}

/**
 * map
 */
export interface KVMap {
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
 * ListResourceFiles返回参数结构体
 */
export interface ListResourceFilesResponse {
  /**
   * 获取资源文件列表
   */
  Data?: ResourceFilePage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListDownstreamTaskInstances请求参数结构体
 */
export interface ListDownstreamTaskInstancesRequest {
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * **实例唯一标识**
   */
  InstanceKey: string
  /**
   * **时区** timeZone, 默认UTC+8
   */
  TimeZone?: string
  /**
   * **页码，整型**配合pageSize使用且不能小于1， 默认值1
   */
  PageNumber?: number
  /**
   * **每页显示的条数，默认为10，最小值为1、最大值为100
   */
  PageSize?: number
}

/**
 * UpdateProject请求参数结构体
 */
export interface UpdateProjectRequest {
  /**
   * 目标修改的项目ID
   */
  ProjectId: string
  /**
   * 项目显示名称，可以为中文名,需要租户范围内唯一
   */
  DisplayName?: string
  /**
   * 备注
   */
  Description?: string
  /**
   * 项目负责人id
   */
  ProjectOwnerUin?: string
}

/**
 * DeleteWorkflow请求参数结构体
 */
export interface DeleteWorkflowRequest {
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 工作流id
   */
  WorkflowId: string
}

/**
 * ListProjectMembers请求参数结构体
 */
export interface ListProjectMembersRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 使用成员名过滤，支持模糊查询
   */
  UserName?: string
  /**
   * 使用成员id过滤，支持模糊查询
   */
  UserUin?: string
  /**
   * 分页大小，默认第一页
   */
  PageSize?: number
  /**
   * 分页条数，默认10条
   */
  PageNumber?: number
}

/**
 * PauseOpsTasksAsync请求参数结构体
 */
export interface PauseOpsTasksAsyncRequest {
  /**
   * 所属项目Id
   */
  ProjectId: string
  /**
   * 任务Id列表
   */
  TaskIds: Array<string>
  /**
   * 是否需要终止已生成实例
   */
  KillInstance?: boolean
}

/**
 * DissociateResourceGroupFromProject请求参数结构体
 */
export interface DissociateResourceGroupFromProjectRequest {
  /**
   * 资源组id
   */
  ResourceGroupId: string
  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * dlc集群信息
 */
export interface DLCClusterInfo {
  /**
   * dlc资源名称（需要添加角色Uin到dlc中，否则可能获取不到资源）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ComputeResources: Array<string>
  /**
   * dlc地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region: string
  /**
   * 指定DLC集群的默认数据库
注意：此字段可能返回 null，表示取不到有效值。
   */
  DefaultDatabase: string
  /**
   * 集群配置标记（ 仅对标准模式的项目生效并且标准模式必填），枚举值：
- Prod  (生产环境)
- Dev  (开发环境)
   */
  StandardModeEnvTag?: string
  /**
   * 访问账号（ 仅对标准模式的项目生效并且标准模式必填），用于提交dlc任务的账号
建议使用指定子账号，给子账号设置对应库表的权限；任务负责人模式在负责人离职后容易造成任务失败；主账号模式在多个项目权限不同的情况下不易做权限控制。

枚举值：
- TASK_RUNNER （任务负责人）
- OWNER （主账号模式）
- SUB （子账号模式）
   */
  AccessAccount?: string
  /**
   * 子账号id（ 仅对标准模式的项目生效），AccessAccount为子账号模式时，需要指定子账号的id信息，其他模式不需要指定
   */
  SubAccountUin?: string
}

/**
 * CreateWorkflow请求参数结构体
 */
export interface CreateWorkflowRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 工作流名称
   */
  WorkflowName: string
  /**
   * 所属文件夹路径
   */
  ParentFolderPath: string
  /**
   * 工作流类型,取值示例：cycle 周期工作流；manual 手动工作流，默认传入cycle
   */
  WorkflowType?: string
  /**
   * 工作流描述
   */
  WorkflowDesc?: string
  /**
   * 工作流负责人ID
   */
  OwnerUin?: string
  /**
   * 工作流参数
   */
  WorkflowParams?: Array<ParamInfo>
  /**
   * 统一调度信息
   */
  WorkflowSchedulerConfiguration?: WorkflowSchedulerConfigurationInfo
  /**
   * BundleId项
   */
  BundleId?: string
  /**
   * Bundle信息
   */
  BundleInfo?: string
}

/**
 * 任务调度变量参数
 */
export interface TaskSchedulingParameter {
  /**
   * 参数名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamKey: string
  /**
   * 参数值
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamValue: string
}

/**
 * SubmitTask请求参数结构体
 */
export interface SubmitTaskRequest {
  /**
   * 项目ID
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
}

/**
 * UpdateSQLFolder请求参数结构体
 */
export interface UpdateSQLFolderRequest {
  /**
   * 文件夹Id
   */
  FolderId: string
  /**
   * 文件夹名称
   */
  FolderName: string
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 权限范围：SHARED, PRIVATE
   */
  AccessScope?: string
}

/**
 * 单次补录实例详情
 */
export interface BackfillInstance {
  /**
   * 任务名称
   */
  TaskName?: string
  /**
   * 任务Id
   */
  TaskId?: string
  /**
   * 实例数据时间
   */
  CurRunDate?: string
  /**
   * 执行状态
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
   * 执行时长
注意：此字段可能返回 null，表示取不到有效值。
   */
  CostTime?: string
}

/**
 * 工作流列表分页详情
 */
export interface OpsWorkflow {
  /**
   * 任务数量
   */
  TaskCount?: number
  /**
   * 文件名
注意：此字段可能返回 null，表示取不到有效值。
   */
  FolderName?: string
  /**
   * 工作流文件id
   */
  FolderId?: string
  /**
   * 工作流id
   */
  WorkflowId?: string
  /**
   * 工作流名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowName?: string
  /**
   * 工作流类型
 - cycle周期
 - manual手动
   */
  WorkflowType?: string
  /**
   * 工作流描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowDesc?: string
  /**
   * 负责人userId,多个‘；’隔开
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUin?: string
  /**
   * 项目id
   */
  ProjectId?: string
  /**
   * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectName?: string
  /**
   * 工作流状态
   * ALL_RUNNING : 全部调度中
   * ALL_FREEZED : 全部已暂停
   * ALL_STOPPTED : 全部已下线
   * PART_RUNNING : 部分调度中
   * ALL_NO_RUNNING : 全部未调度
   * ALL_INVALID : 全部已失效
   */
  Status?: string
  /**
   * 工作流创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 最近更新时间, 包含开发、生产变更
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 最近更新人，包含开发、生产变更
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateUserUin?: string
}

/**
 * CreateSQLFolder请求参数结构体
 */
export interface CreateSQLFolderRequest {
  /**
   * 文件夹名称
   */
  FolderName: string
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 父文件夹path，/aaa/bbb/ccc，路径头需带斜杠，查询根目录传/
   */
  ParentFolderPath: string
  /**
   * 权限范围：SHARED, PRIVATE
   */
  AccessScope?: string
}

/**
 * GetOpsTask返回参数结构体
 */
export interface GetOpsTaskResponse {
  /**
   * 任务详情
   */
  Data?: Task
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 停止sql运行结果
 */
export interface SQLStopResult {
  /**
   * 是否成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: boolean
}

/**
 * 资源组操作状态
 */
export interface ResourceStatus {
  /**
   * 资源组操作状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: boolean
}

/**
 * EnableProject返回参数结构体
 */
export interface EnableProjectResponse {
  /**
   * 无
   */
  Data?: ProjectResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListCatalogPage
 */
export interface ListCatalogPage {
  /**
   * 目录记录列表
   */
  Items?: Array<CatalogInfo>
  /**
   * 分页总页数
   */
  PageCount?: number
  /**
   * 分页大小
   */
  PageSize?: number
  /**
   * 分页页码
   */
  PageNumber?: number
  /**
   * 记录总数
   */
  TotalCount?: number
}

/**
 * GetDataSourceRelatedTasks返回参数结构体
 */
export interface GetDataSourceRelatedTasksResponse {
  /**
   * 无
   */
  Data?: Array<DatasourceRelationTaskInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLineage返回参数结构体
 */
export interface DeleteLineageResponse {
  /**
   * 删除结果
   */
  Data?: OperateResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 调度任务实例详情
 */
export interface TaskInstanceDetail {
  /**
   * 所属项目id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * **实例唯一标识**
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceKey?: string
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
   * taskType对应的id
   */
  TaskTypeId?: number
  /**
   * 任务类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskType?: string
  /**
   * **任务周期类型**
* ONEOFF_CYCLE: 一次性
* YEAR_CYCLE: 年
* MONTH_CYCLE: 月
* WEEK_CYCLE: 周
* DAY_CYCLE: 天
* HOUR_CYCLE: 小时
* MINUTE_CYCLE: 分钟
* CRONTAB_CYCLE: crontab表达式类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleType?: string
  /**
   * 实例数据时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CurRunDate?: string
  /**
   * **实例状态**
- WAIT_EVENT: 等待事件
- WAIT_UPSTREAM: 等待上游
- WAIT_RUN: 等待运行
- RUNNING: 运行中
- SKIP_RUNNING: 跳过运行
- FAILED_RETRY: 失败重试
- EXPIRED: 失败
- COMPLETED: 成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceState?: string
  /**
   * **实例类型**

- 0 表示补录类型
- 1 表示周期实例
- 2 表示非周期实例
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceType?: number
  /**
   * 负责人列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUinList?: Array<string>
  /**
   * 累计运行次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalRunNum?: number
  /**
   * 每次运行失败，下发重试次数限制
注意：此字段可能返回 null，表示取不到有效值。
   */
  TryLimit?: number
  /**
   * **失败重试次数**
再次使用 手动重跑 或 补录实例等方式触发运行时，会被重置为 0 后重新计数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tries?: number
  /**
   * 耗费时间, 单位ms
注意：此字段可能返回 null，表示取不到有效值。
   */
  CostTime?: number
  /**
   * 运行开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 运行完成时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 计划调度时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  SchedulerTime?: string
  /**
   * 实例最近更新时间, 时间格式为 yyyy-MM-dd HH:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastUpdateTime?: string
  /**
   * 执行资源组ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutorGroupId?: string
  /**
   * 资源组名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutorGroupName?: string
  /**
   * 简要的任务失败信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  JobErrorMsg?: string
}

/**
 * ListTaskInstances请求参数结构体
 */
export interface ListTaskInstancesRequest {
  /**
   * **项目ID**
   */
  ProjectId: string
  /**
   * **页码，整型**
配合pageSize使用且不能小于1， 默认值1
   */
  PageNumber?: number
  /**
   * **每页显示的条数，默认为10，最小值为1、最大值为100
   */
  PageSize?: number
  /**
   * **任务名称 或 任务ID**
支持模糊搜索过滤, 多个用 英文逗号, 分割
   */
  Keyword?: string
  /**
   * **时区**timeZone, 传入的时间字符串的所在时区，默认UTC+8
   */
  TimeZone?: string
  /**
   * **实例类型** 
- 0 表示补录类型 
- 1 表示周期实例 
- 2 表示非周期实例
   */
  InstanceType?: number
  /**
   * **实例状态** - WAIT_EVENT: 等待事件 - WAIT_UPSTREAM: 等待上游 - WAIT_RUN: 等待运行 - RUNNING: 运行中 - SKIP_RUNNING: 跳过运行 - FAILED_RETRY: 失败重试 - EXPIRED: 失败 - COMPLETED: 成功
   */
  InstanceState?: string
  /**
   * **任务类型Id**
   */
  TaskTypeId?: number
  /**
   * **任务周期类型** * ONEOFF_CYCLE: 一次性 * YEAR_CYCLE: 年 * MONTH_CYCLE: 月 * WEEK_CYCLE: 周 * DAY_CYCLE: 天 * HOUR_CYCLE: 小时 * MINUTE_CYCLE: 分钟 * CRONTAB_CYCLE: crontab表达式类型
   */
  CycleType?: string
  /**
   * **任务负责人id**
   */
  OwnerUin?: string
  /**
   * **任务所属文件id**
   */
  FolderId?: string
  /**
   * **任务所属工作流id**
   */
  WorkflowId?: string
  /**
   * **执行资源组Id**
   */
  ExecutorGroupId?: string
  /**
   * **实例计划调度时间过滤条件**过滤起始时间，时间格式为 yyyy-MM-dd HH:mm:ss
   */
  ScheduleTimeFrom?: string
  /**
   * **实例计划调度时间过滤条件**过滤截止时间，时间格式为 yyyy-MM-dd HH:mm:ss
   */
  ScheduleTimeTo?: string
  /**
   * **实例执行开始时间过滤条件**过滤起始时间，时间格式为 yyyy-MM-dd HH:mm:ss
   */
  StartTimeFrom?: string
  /**
   * **实例执行开始时间过滤条件**
过滤截止时间，时间格式为 yyyy-MM-dd HH:mm:ss
   */
  StartTimeTo?: string
  /**
   * **实例最近更新时间过滤条件**
过滤截止时间，时间格式为 yyyy-MM-dd HH:mm:ss
   */
  LastUpdateTimeFrom?: string
  /**
   * **实例最近更新时间过滤条件**
过滤截止时间，时间格式为 yyyy-MM-dd HH:mm:ss
   */
  LastUpdateTimeTo?: string
  /**
   * **查询结果排序字段**- SCHEDULE_DATE 表示 根据计划调度时间排序- START_TIME 表示 根据实例开始执行时间排序- END_TIME 表示 根据实例结束执行时间排序- COST_TIME 表示 根据实例执行时长排序
   */
  SortColumn?: string
  /**
   * **实例排序方式**

- ASC 
- DESC
   */
  SortType?: string
}

/**
 * 项目的用户对象
 */
export interface ProjectUserRole {
  /**
   * 租户id
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: string
  /**
   * 主账号id
注意：此字段可能返回 null，表示取不到有效值。
   */
  RootAccountId?: string
  /**
   * 用户id
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserUin?: string
  /**
   * 用户名
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserName?: string
  /**
   * 显示名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DisplayName?: string
  /**
   * 用户角色对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  Roles?: Array<SystemRole>
  /**
   * 是否创建者
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsCreator?: boolean
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 是否项目负责人
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsProjectOwner?: boolean
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
}

/**
 * 依赖任务信息
 */
export interface TaskDependDto {
  /**
   * 任务Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskName?: string
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
   * 任务状态:
- Y: 运行
- F: 停止
- O: 冻结
- T: 停止中
- INVALID: 已失效
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 任务类型id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskTypeId?: number
  /**
   * 任务类型描述
 - 20 :  通用数据同步
 - 25 :  ETLTaskType
 - 26 :  ETLTaskType
 - 30 :  python
 - 31 :  pyspark
 - 34 :  hivesql
 - 35 :  shell
 - 36 :  sparksql
 - 21 :  jdbcsql
 - 32 :  dlc
 - 33 :  ImpalaTaskType
 - 40 :  CDWTaskType
 - 41 :  kettle
 - 42 :  TCHouse-X
 - 43 :  TCHouse-X SQL
 - 46 :  dlcsparkTaskType
 - 47 :  TiOneMachineLearningTaskType
 - 48 :  Trino
 - 50 :  DLCPyspark
 - 23 :  TencentDistributedSQL
 - 39 :  spark
 - 92 :  MRTaskType
 - 38 :  ShellScript
 - 70 :  HiveSQLScrip
 - 130 :  分支
 - 131 :  归并
 - 132 :  Notebook探索
 - 133 :  SSH节点
 - 134 :  StarRocks
 - 137 :  For-each
 - 10000 :  自定义业务通用
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskTypeDesc?: string
  /**
   * 调度计划展示描述信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScheduleDesc?: string
  /**
   * 任务开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 任务结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 延迟时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  DelayTime?: number
  /**
   * 周期类型：默认为 D

支持的类型为 

* O: 一次性
* Y: 年
* M: 月
* W: 周
* D: 天
* H: 小时
* I: 分钟
* C: crontab表达式类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleType?: string
  /**
   * 负责人
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUin?: string
  /**
   * 弹性周期配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskAction?: string
  /**
   * 调度初始化策略
注意：此字段可能返回 null，表示取不到有效值。
   */
  InitStrategy?: string
  /**
   * crontab表达式
注意：此字段可能返回 null，表示取不到有效值。
   */
  CrontabExpression?: string
}

/**
 * GetOpsTaskCode返回参数结构体
 */
export interface GetOpsTaskCodeResponse {
  /**
   * 获取任务代码结果
   */
  Data?: TaskCode
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListWorkflows返回参数结构体
 */
export interface ListWorkflowsResponse {
  /**
   * 查询工作流分页信息
   */
  Data?: ListWorkflowInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateProject返回参数结构体
 */
export interface CreateProjectResponse {
  /**
   * 创建项目结果
   */
  Data?: CreateProjectResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 告警规则项目波动率告警配置信息
 */
export interface ProjectInstanceStatisticsAlarmInfo {
  /**
   * 告警类型 

projectFailureInstanceUpwardFluctuationAlarm: 失败实例向上波动告警

projectSuccessInstanceDownwardFluctuationAlarm： 成功实例向下波动告警
   */
  AlarmType: string
  /**
   * 实例成功数向下波动比例告警阀值；实例失败数向上波动比例告警阀值
   */
  InstanceThresholdCountPercent?: number
  /**
   * 累计实例数波动阀值
   */
  InstanceThresholdCount?: number
  /**
   * 稳定性次数阈值(防抖动配置统计周期数)
   */
  StabilizeThreshold?: number
  /**
   * 稳定性统计周期(防抖动配置统计周期数)
   */
  StabilizeStatisticsCycle?: number
  /**
   * 是否累计计算,false:连续,true:累计
   */
  IsCumulant?: boolean
  /**
   * 当日累计实例数;
当天失败实例数向下波动量
   */
  InstanceCount?: number
}

/**
 * GetTaskVersion返回参数结构体
 */
export interface GetTaskVersionResponse {
  /**
   * 版本详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: TaskVersionDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetOpsWorkflow请求参数结构体
 */
export interface GetOpsWorkflowRequest {
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 工作流Id，可以从ListOpsWorkflows接口获取
   */
  WorkflowId: string
}

/**
 * 查询工作流分页列表
 */
export interface ListWorkflowInfo {
  /**
   * 列表item
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<WorkflowInfo>
  /**
   * 满足查询条件的数据总页数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPageNumber?: number
  /**
   * 当前请求的数据页数
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
  /**
   * 当前请求的数据页条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * 满足查询条件的数据总条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
}

/**
 * 查询数据源分页列表
 */
export interface ProjectBrief {
  /**
   * 分页页码
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
  /**
   * 分页大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * 数据源列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<Project>
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 总页码
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPageNumber?: number
}

/**
 * 任务代码
 */
export interface TaskCode {
  /**
   * 代码内容
   */
  CodeContent?: string
  /**
   * 代码文件大小，单位bytes
   */
  CodeFileSize?: number
}

/**
 * GetTaskCode返回参数结构体
 */
export interface GetTaskCodeResponse {
  /**
   * 获取任务代码结果
   */
  Data?: TaskCodeResult
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
   * 项目ID
   */
  ProjectId: string
  /**
   * 资源ID, 可通过ListResourceFiles接口获取
   */
  ResourceId: string
}

/**
 * 数据探索脚本配置
 */
export interface SQLScriptConfig {
  /**
   * 数据源Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceId?: string
  /**
   * 数据源环境
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceEnv?: string
  /**
   * 计算资源
注意：此字段可能返回 null，表示取不到有效值。
   */
  ComputeResource?: string
  /**
   * 执行资源组
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutorGroupId?: string
  /**
   * 高级运行参数,变量替换，map-json String,String
注意：此字段可能返回 null，表示取不到有效值。
   */
  Params?: string
  /**
   * 高级设置，执行配置参数，map-json String,String. 采用Base64编码
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdvanceConfig?: string
}

/**
 * 操作资源包数量
 */
export interface ResourceNumber {
  /**
   * 增加/减少枚举

- ADD -- 增加
- DELETE -- 减少
   */
  Type?: string
  /**
   * 增加/减少资源包的数量
   */
  Quantity?: number
}

/**
 * AddCalcEnginesToProject请求参数结构体
 */
export interface AddCalcEnginesToProjectRequest {
  /**
   * 修改的项目ID
   */
  ProjectId: string
  /**
   * DLC集群信息
   */
  DLCInfo: Array<DLCClusterInfo>
}

/**
 * 创建工作流结果
 */
export interface CreateWorkflowResult {
  /**
   * 创建成功后的工作流id
   */
  WorkflowId?: string
}

/**
 * 任务数据库登记项
 */
export interface TaskDataRegistry {
  /**
   * 数据源ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatasourceId: string
  /**
   * 数据库名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseName: string
  /**
   * 表名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableName: string
  /**
   * 分区名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  PartitionName: string
  /**
   * 输入输出表类型
      输入流
 UPSTREAM,
      输出流
  DOWNSTREAM;
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataFlowType: string
  /**
   * 表物理唯一ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TablePhysicalId: string
  /**
   * 库唯一标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  DbGuid?: string
  /**
   * 表唯一标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableGuid?: string
}

/**
 * ListDatabase返回参数结构体
 */
export interface ListDatabaseResponse {
  /**
   * 分页数据
   */
  Data?: ListDatabasePage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCodeFolder请求参数结构体
 */
export interface DeleteCodeFolderRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 文件夹ID，参数值来自CreateCodeFolder接口的返回
   */
  FolderId: string
}

/**
 * ListOpsWorkflows返回参数结构体
 */
export interface ListOpsWorkflowsResponse {
  /**
   * 工作流列表
   */
  Data?: OpsWorkflows
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 补录计划的所有实例
 */
export interface BackfillInstanceCollection {
  /**
   * 分页页码
   */
  PageNumber?: number
  /**
   * 分页大小
   */
  PageSize?: number
  /**
   * 总页数
   */
  TotalPageNumber?: number
  /**
   * 记录总数
   */
  TotalCount?: number
  /**
   * 补录实例列表
   */
  Items?: Array<BackfillInstance>
}

/**
 * CreateSQLFolder返回参数结构体
 */
export interface CreateSQLFolderResponse {
  /**
   * 成功true，失败false
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: SqlCreateResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListDownstreamTaskInstances返回参数结构体
 */
export interface ListDownstreamTaskInstancesResponse {
  /**
   * 直接下游实例列表
   */
  Data?: TaskInstancePage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetWorkflow请求参数结构体
 */
export interface GetWorkflowRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 工作流ID 通过ListWorkflows接口获取
   */
  WorkflowId: string
}

/**
 * ListResourceFolders返回参数结构体
 */
export interface ListResourceFoldersResponse {
  /**
   * 分页的资源文件夹查询结果
   */
  Data?: ResourceFolderPage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateResourceGroup返回参数结构体
 */
export interface UpdateResourceGroupResponse {
  /**
   * 是否修改成功
   */
  Data?: ResourceStatus
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListSQLFolderContents返回参数结构体
 */
export interface ListSQLFolderContentsResponse {
  /**
   * 结果列表
   */
  Data?: Array<SQLFolderNode>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务配置信息
 */
export interface TaskConfiguration {
  /**
   * 代码内容的Base64编码
注意：此字段可能返回 null，表示取不到有效值。
   */
  CodeContent?: string
  /**
   * 任务扩展属性配置列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskExtConfigurationList?: Array<TaskExtParameter>
  /**
   * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataCluster?: string
  /**
   * 指定的运行节点
注意：此字段可能返回 null，表示取不到有效值。
   */
  BrokerIp?: string
  /**
   * 资源池队列名称，需要通过 DescribeProjectClusterQueues 获取
注意：此字段可能返回 null，表示取不到有效值。
   */
  YarnQueue?: string
  /**
   * 来源数据源ID, 使用 ; 分隔, 需要通过 DescribeDataSourceWithoutInfo 获取
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceServiceId?: string
  /**
   * 来源数据源类型, 使用 ; 分隔, 需要通过 DescribeDataSourceWithoutInfo 获取
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceServiceType?: string
  /**
   * 来源数据源名称, 使用 ; 分隔, 需要通过 DescribeDataSourceWithoutInfo 获取
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceServiceName?: string
  /**
   * 目标数据源ID, 使用 ; 分隔, 需要通过 DescribeDataSourceWithoutInfo 获取
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetServiceId?: string
  /**
   * 目标数据源类型, 使用 ; 分隔, 需要通过 DescribeDataSourceWithoutInfo 获取
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetServiceType?: string
  /**
   * 目标数据源名称, 使用 ; 分隔, 需要通过 DescribeDataSourceWithoutInfo 获取
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetServiceName?: string
  /**
   * 资源组ID： 需要通过 DescribeNormalSchedulerExecutorGroups 获取 ExecutorGroupId
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroup?: string
  /**
   * 资源组名称： 需要通过 DescribeNormalSchedulerExecutorGroups 获取 ExecutorGroupName
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupName?: string
  /**
   * 调度参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskSchedulingParameterList?: Array<TaskSchedulingParameter>
  /**
   * Bundle使用的ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  BundleId?: string
  /**
   * Bundle信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  BundleInfo?: string
}

/**
 * DeleteWorkflowFolder返回参数结构体
 */
export interface DeleteWorkflowFolderResponse {
  /**
   * 删除结果
   */
  Data?: DeleteFolderResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 提交数据开发任务结果
 */
export interface SubmitTaskResult {
  /**
   * 生成的任务版本ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  VersionId?: string
  /**
   * 提交状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: boolean
}

/**
 * RerunTaskInstancesAsync返回参数结构体
 */
export interface RerunTaskInstancesAsyncResponse {
  /**
   * 批量重跑操作的返回的异步id, 可以在接口GetAsyncJob获取具体执行详情
   */
  Data?: OpsAsyncResponse
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListLineagePage
 */
export interface ListLineagePage {
  /**
   * 血缘记录列表
   */
  Items?: Array<LineageNodeInfo>
  /**
   * 分页总页数
   */
  PageCount?: number
  /**
   * 分页大小
   */
  PageSize?: number
  /**
   * 分页页码
   */
  PageNumber?: number
  /**
   * 记录总数
   */
  TotalCount?: number
}

/**
 * 数据源相关任务
 */
export interface RelateTask {
  /**
   * 任务类型

- OfflineIntegration --- 离线集成任务
- RealtimeIntegration --- 实时集成任务
- DataDevelopment --- 数据开发任务
- DataQuality --- 数据质量任务
- DataService --- 数据服务任务
- MetadataCollection --- 元数据采集任务
   */
  TaskType?: string
  /**
   * 任务数量
   */
  TaskNum?: number
  /**
   * 任务详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskList?: Array<BriefTask>
}

/**
 * 更新工作流结果
 */
export interface UpdateWorkflowResult {
  /**
   * 更新工作流结果
   */
  Status?: boolean
}

/**
 * 告警规则详细配置
 */
export interface AlarmRuleDetail {
  /**
   * 失败触发时机 

1 – 首次失败触发
2 --所有重试完成触发 (默认)
注意：此字段可能返回 null，表示取不到有效值。
   */
  Trigger?: number
  /**
   * 补录重跑触发时机

1 –  首次失败触发
2 – 所有重试完成触发
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataBackfillOrRerunTrigger?: number
  /**
   * 周期实例超时配置明细
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeOutExtInfo?: Array<TimeOutStrategyInfo>
  /**
   * 重跑补录实例超时配置明细
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataBackfillOrRerunTimeOutExtInfo?: Array<TimeOutStrategyInfo>
  /**
   * 项目波动告警配置明细
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectInstanceStatisticsAlarmInfoList?: Array<ProjectInstanceStatisticsAlarmInfo>
  /**
   * 离线集成对账告警配置信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReconciliationExtInfo?: Array<ReconciliationStrategyInfo>
}

/**
 * StopOpsTasksAsync请求参数结构体
 */
export interface StopOpsTasksAsyncRequest {
  /**
   * 所属项目Id
   */
  ProjectId: string
  /**
   * 任务Id列表
   */
  TaskIds: Array<string>
  /**
   * 是否终止已生成实例，默认false
   */
  KillInstance?: boolean
}

/**
 * GetSQLScript请求参数结构体
 */
export interface GetSQLScriptRequest {
  /**
   * 探索脚本Id
   */
  ScriptId: string
  /**
   * 项目Id
   */
  ProjectId: string
}

/**
 * 资源组详情
 */
export interface ExecutorResourceGroupInfo {
  /**
   * 资源组唯一标识
   */
  Id?: string
  /**
   * 资源组名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 资源组描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 执行资源组类型，不能为空

- Schedule --- 调度资源组
- Integration --- 集成资源组
- DataService -- 数据服务资源组
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupType?: string
  /**
   * 项目集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssociateProjects?: Array<BindProject>
  /**
   * 区域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * vpcId
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * 子网id
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubNet?: string
  /**
   * 是否自动续费
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoRenewEnabled?: boolean
}

/**
 * GrantMemberProjectRole返回参数结构体
 */
export interface GrantMemberProjectRoleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 调度任务实例实体
 */
export interface TaskInstance {
  /**
   * 所属项目id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * **实例唯一标识**
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceKey?: string
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
   * 实例数据时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CurRunDate?: string
  /**
   * **实例状态**
- WAIT_EVENT: 等待事件
- WAIT_UPSTREAM: 等待上游
- WAIT_RUN: 等待运行
- RUNNING: 运行中
- SKIP_RUNNING: 跳过运行
- FAILED_RETRY: 失败重试
- EXPIRED: 失败
- COMPLETED: 成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceState?: string
  /**
   * **实例类型**

- 0 表示补录类型
- 1 表示周期实例
- 2 表示非周期实例
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceType?: number
  /**
   * 负责人列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUinList?: Array<string>
  /**
   * 累计运行次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalRunNum?: number
  /**
   * 任务类型描述
   */
  TaskType?: string
  /**
   * 任务类型id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskTypeId?: number
  /**
   * **任务周期类型**
支持过滤多个，条件间为 或 的过滤关系
* O: ONEOFF_CYCLE
* Y: YEAR_CYCLE
* M: MONTH_CYCLE
* W: WEEK_CYCLE
* D: DAY_CYCLE
* H: HOUR_CYCLE
* I: MINUTE_CYCLE
* C: CRONTAB_CYCLE
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleType?: string
  /**
   * 每次运行失败，下发重试次数限制
注意：此字段可能返回 null，表示取不到有效值。
   */
  TryLimit?: number
  /**
   * **失败重试次数**
再次使用 手动重跑 或 补录实例等方式触发运行时，会被重置为 0 后重新计数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tries?: number
  /**
   * 运行开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 运行完成时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 耗费时间, 单位ms
注意：此字段可能返回 null，表示取不到有效值。
   */
  CostTime?: number
  /**
   * 计划调度时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  SchedulerTime?: string
  /**
   * 实例最近更新时间, 时间格式为 yyyy-MM-dd HH:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastUpdateTime?: string
  /**
   * 执行资源组ID
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
 * 集成资源组
 */
export interface IntegrationResource {
  /**
   * 实时集成资源组

- i32c(实时数据同步-16C64G)
   */
  RealTimeDataSync?: ResourceGroupSpecification
  /**
   * 离线集成资源组

- integrated(离线数据同步-8C16G)
- i16(离线数据同步-8C32G)
   */
  OfflineDataSync?: ResourceGroupSpecification
}

/**
 * 查询任务信息分页
 */
export interface ListTaskInfo {
  /**
   * 任务数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<TaskBaseAttribute>
  /**
   * 当前请求的数据页数
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
  /**
   * 当前请求的数据页条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * 满足查询条件的数据总条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 满足查询条件的数据总页数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPageNumber?: number
}

/**
 * 依赖任务信息
 */
export interface OpsTaskDepend {
  /**
   * 任务Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskName?: string
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
   * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectName?: string
  /**
   * 任务状态:
- Y: 调度中
- F: 已下线
- O: 已暂停
- T: 下线中
- INVALID: 已失效
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 任务类型Id：
* 21:JDBC SQL
* 23:TDSQL-PostgreSQL
* 26:OfflineSynchronization
* 30:Python
* 31:PySpark
* 33:Impala
* 34:Hive SQL
* 35:Shell
* 36:Spark SQL
* 38:Shell Form Mode
* 39:Spark
* 40:TCHouse-P
* 41:Kettle
* 42:Tchouse-X
* 43:TCHouse-X SQL
* 46:DLC Spark
* 47:TiOne
* 48:Trino
* 50:DLC PySpark
* 92:MapReduce
* 130:Branch Node
* 131:Merged Node
* 132:Notebook
* 133:SSH
* 134:StarRocks
* 137:For-each
* 138:Setats SQL
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskTypeId?: number
  /**
   * 任务类型描述
 - 20 :  通用数据同步
 - 25 :  ETLTaskType
 - 26 :  ETLTaskType
 - 30 :  python
 - 31 :  pyspark
 - 34 :  hivesql
 - 35 :  shell
 - 36 :  sparksql
 - 21 :  jdbcsql
 - 32 :  dlc
 - 33 :  ImpalaTaskType
 - 40 :  CDWTaskType
 - 41 :  kettle
 - 42 :  TCHouse-X
 - 43 :  TCHouse-X SQL
 - 46 :  dlcsparkTaskType
 - 47 :  TiOneMachineLearningTaskType
 - 48 :  Trino
 - 50 :  DLCPyspark
 - 23 :  TencentDistributedSQL
 - 39 :  spark
 - 92 :  MRTaskType
 - 38 :  ShellScript
 - 70 :  HiveSQLScrip
 - 130 :  分支
 - 131 :  归并
 - 132 :  Notebook探索
 - 133 :  SSH节点
 - 134 :  StarRocks
 - 137 :  For-each
 - 10000 :  自定义业务通用
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskTypeDesc?: string
  /**
   * 文件夹名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  FolderName?: string
  /**
   * 文件夹id
注意：此字段可能返回 null，表示取不到有效值。
   */
  FolderId?: string
  /**
   * 最近提交时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  FirstSubmitTime?: string
  /**
   * 首次运行时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  FirstRunTime?: string
  /**
   * 调度计划展示描述信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScheduleDesc?: string
  /**
   * 任务周期类型
* ONEOFF_CYCLE: 一次性
* YEAR_CYCLE: 年
* MONTH_CYCLE: 月
* WEEK_CYCLE: 周
* DAY_CYCLE: 天
* HOUR_CYCLE: 小时
* MINUTE_CYCLE: 分钟
* CRONTAB_CYCLE: crontab表达式类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleType?: string
  /**
   * 负责人
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUin?: string
  /**
   * 执行开始时间, 格式HH:mm, 如00:00
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutionStartTime?: string
  /**
   * 执行结束时间, 格式HH:mm, 如23:59
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutionEndTime?: string
}

/**
 * ListTaskInstances返回参数结构体
 */
export interface ListTaskInstancesResponse {
  /**
   * 实例结果集
   */
  Data?: TaskInstancePage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据源操作结果
 */
export interface DataSourceResult {
  /**
   * 操作是否成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: boolean
  /**
   * 数据源id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataSourceId?: number
}

/**
 * CreateCodeFolder请求参数结构体
 */
export interface CreateCodeFolderRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 文件夹名称
   */
  FolderName: string
  /**
   * 父文件夹path，例如/aaa/bbb/ccc，路径头需带斜杠，根目录传/
   */
  ParentFolderPath: string
}

/**
 * CreateResourceGroup请求参数结构体
 */
export interface CreateResourceGroupRequest {
  /**
   * 资源组名称。创建通用资源组的名称，必须以字母开头，可包含字母、数字、下划线（_），最多 64 个字符。
   */
  Name: string
  /**
   * 开通的资源组信息
   */
  Type: ResourceType
  /**
   * 是否自动续费
   */
  AutoRenewEnabled: boolean
  /**
   * 购买时长，单位月
   */
  PurchasePeriod: number
  /**
   * vpcId
   */
  VpcId: string
  /**
   * 子网
   */
  SubNet: string
  /**
   * 资源购买地域
   */
  ResourceRegion: string
  /**
   * 关联项目空间项目id
   */
  AssociatedProjectId?: string
  /**
   * 资源组描述
   */
  Description?: string
}

/**
 * ListTable请求参数结构体
 */
export interface ListTableRequest {
  /**
   * 页码，从1开始
   */
  PageNumber: number
  /**
   * 分页大小，最大500
   */
  PageSize: number
  /**
   * 目录名称
   */
  CatalogName?: string
  /**
   * 数据源ID
   */
  DatasourceId?: number
  /**
   * 数据库名称
   */
  DatabaseName?: string
  /**
   * 数据库Schema名称
   */
  SchemaName?: string
  /**
   * 表搜索关键字
   */
  Keyword?: string
}

/**
 * UpdateResourceGroup请求参数结构体
 */
export interface UpdateResourceGroupRequest {
  /**
   * 资源组id
   */
  Id: string
  /**
   * **变更配置(变配、续费、修改资源包数量 不能同时操作), 变配无法修改资源组类型**

实时集成资源组  
- i32c(实时数据同步-16C64G)

离线集成资源组
- integrated(离线数据同步-8C16G)
- i16(离线数据同步-8C32G)

调度资源组
- s_test(测试规格)
- s_small(基础规格)
- s_medium(普及规格)
- s_large(专业规格)

数据服务资源组
- ds_t(测试规格)
- ds_s(基础规格)
- ds_m(普及规格)
- ds_l(专业规格)
   */
  Type?: string
  /**
   * 续费时长，单位月(变配、续费、修改资源包数量 不能同时操作)
   */
  PurchasePeriod?: number
  /**
   * 增加/减少资源包的数量(变配、续费、修改资源包数量 不能同时操作)
   */
  Number?: ResourceNumber
  /**
   * 是否自动续费，续费参数PurchasePeriod不为空时可以生效
   */
  AutoRenewEnabled?: boolean
}

/**
 * DeleteCodeFile请求参数结构体
 */
export interface DeleteCodeFileRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 代码文件ID，参数值来自CreateCodeFile接口的返回
   */
  CodeFileId: string
}

/**
 * ListOpsAlarmRules请求参数结构体
 */
export interface ListOpsAlarmRulesRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 分页的页数，默认为1
   */
  PageNumber?: number
  /**
   * 每页显示的条数，默认为20，最小值为1、最大值为200
   */
  PageSize?: number
  /**
   * 监控对象类型, 任务维度监控： 可按照任务/工作流/项目来配置：1.任务、2.工作流、3.项目（默认为1.任务） 项目维度监控： 项目整体任务波动告警， 7：项目波动监控告警
   */
  MonitorObjectType?: number
  /**
   * 根据任务id查询告警规则
   */
  TaskId?: string
  /**
   * 查询配置对应告警类型的告警规则
告警规则监控类型 failure：失败告警 ；overtime：超时告警 success：成功告警; backTrackingOrRerunSuccess: 补录重跑成功告警 backTrackingOrRerunFailure：补录重跑失败告警；
项目波动告警
projectFailureInstanceUpwardFluctuationAlarm： 当天失败实例数向上波动率超过阀值告警； projectSuccessInstanceDownwardFluctuationAlarm：当天成功实例数向下波动率超过阀值告警；
离线集成任务对账告警： reconciliationFailure： 离线对账任务失败告警 reconciliationOvertime： 离线对账任务运行超时告警 reconciliationMismatch： 数据对账任务不一致条数超过阀值告警
   */
  AlarmType?: string
  /**
   * 查询配置了对应告警级别的告警规则
告警级别 1.普通、2.重要、3.紧急
   */
  AlarmLevel?: number
  /**
   * 查询配置对应告警接收人的告警规则
   */
  AlarmRecipientId?: string
  /**
   * 根据告警规则id/规则名称查询对应的告警规则
   */
  Keyword?: string
  /**
   * 告警规则创建人过滤
   */
  CreateUserUin?: string
  /**
   * 告警规则创建时间范围起始时间, 格式如2025-08-17 00:00:00
   */
  CreateTimeFrom?: string
  /**
   * 告警规则创建时间范围结束时间，格式如"2025-08-26 23:59:59"

   */
  CreateTimeTo?: string
  /**
   * 最后更新时间过滤告警规则， 格式如"2025-08-26 00:00:00"

   */
  UpdateTimeFrom?: string
  /**
   * 最后更新时间过滤告警规则 格式如： "2025-08-26 23:59:59"

   */
  UpdateTimeTo?: string
}

/**
 * GetProject返回参数结构体
 */
export interface GetProjectResponse {
  /**
   * 项目信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Project
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 调度实例详情
 */
export interface InstanceExecution {
  /**
   * 实例唯一标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceKey?: string
  /**
   * **实例生命周期编号，标识实例的某一次执行**

例如：周期实例第一次运行的编号为0，用户后期又重跑了该实例，第二次执行的编号为1
注意：此字段可能返回 null，表示取不到有效值。
   */
  LifeRoundNum?: number
  /**
   * **实例状态**
- WAIT_EVENT: 等待事件
- WAIT_UPSTREAM: 等待上游
- WAIT_RUN: 等待运行
- RUNNING: 运行中
- SKIP_RUNNING: 跳过运行
- FAILED_RETRY: 失败重试
- EXPIRED: 失败
- COMPLETED: 成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceState?: string
  /**
   * **实例运行触发类型**

- RERUN 表示重跑
- ADDITION 表示补录
- PERIODIC 表示周期
- APERIODIC 表示非周期
- RERUN_SKIP_RUN 表示重跑 - 空跑
- ADDITION_SKIP_RUN 表示补录 - 空跑
- PERIODIC_SKIP_RUN 表示周期 - 空跑
- APERIODIC_SKIP_RUN 表示非周期 - 空跑
- MANUAL_TRIGGER 表示手动触发
- RERUN_MANUAL_TRIGGER 表示手动触发 - 重跑
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunType?: string
  /**
   * 失败重试次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tries?: number
  /**
   * **实例执行生命周期列表**
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutionPhaseList?: Array<InstanceExecutionPhase>
  /**
   * 耗费时间, 单位ms
注意：此字段可能返回 null，表示取不到有效值。
   */
  CostTime?: number
}

/**
 * 数据探索任务JOB
 */
export interface JobDto {
  /**
   * 数据探索任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  JobId?: string
  /**
   * 数据探索任务名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  JobName?: string
  /**
   * 任务类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  JobType?: string
  /**
   * 脚本ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScriptId?: string
  /**
   * 子任务列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  JobExecutionList?: Array<JobExecutionDto>
  /**
   * 脚本内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScriptContent?: string
  /**
   * 任务状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 任务创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 云主账号UIN
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUin?: string
  /**
   * 账号UIN
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserUin?: string
  /**
   * 耗时
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeCost?: number
  /**
   * 是否脚本内容被截断
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScriptContentTruncate?: boolean
}

/**
 * DeleteResourceFile返回参数结构体
 */
export interface DeleteResourceFileResponse {
  /**
   * 资源删除结果
   */
  Data?: DeleteResourceFileResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListDownstreamOpsTasks请求参数结构体
 */
export interface ListDownstreamOpsTasksRequest {
  /**
   * 任务Id
   */
  TaskId: string
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 分页页码
   */
  PageNumber?: string
  /**
   * 分页大小
   */
  PageSize?: string
}

/**
 * UpdateCodeFile请求参数结构体
 */
export interface UpdateCodeFileRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 代码文件ID，参数值来自CreateCodeFile接口的返回
   */
  CodeFileId: string
  /**
   * 代码文件配置
   */
  CodeFileConfig?: CodeFileConfig
  /**
   * 代码文件内容
   */
  CodeFileContent?: string
}

/**
 * 血缘资源实体
 */
export interface LineageResource {
  /**
   * 实体原始唯一ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceUniqueId?: string
  /**
   * 业务名称：库名.表名｜指标名称｜模型名称|字段名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceName?: string
  /**
   * 实体类型
TABLE|METRIC|MODEL|SERVICE|COLUMN
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceType?: string
  /**
   * 血缘节点唯一标识符号
注意：此字段可能返回 null，表示取不到有效值。
   */
  LineageNodeId?: string
  /**
   * 描述：表类型｜指标描述｜模型描述|字段描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 来源：WEDATA|THIRD
默认wedata
注意：此字段可能返回 null，表示取不到有效值。
   */
  Platform?: string
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
   * resource 额外扩展参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceProperties?: Array<LineageProperty>
}

/**
 * 任务基本属性信息
 */
export interface TaskBaseAttribute {
  /**
   * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId: string
  /**
   * 任务类型ID：

* 21:JDBC SQL
* 23:TDSQL-PostgreSQL
* 26:OfflineSynchronization
* 30:Python
* 31:PySpark
* 33:Impala
* 34:Hive SQL
* 35:Shell
* 36:Spark SQL
* 38:Shell Form Mode
* 39:Spark
* 40:TCHouse-P
* 41:Kettle
* 42:Tchouse-X
* 43:TCHouse-X SQL
* 46:DLC Spark
* 47:TiOne
* 48:Trino
* 50:DLC PySpark
* 92:MapReduce
* 130:Branch Node
* 131:Merged Node
* 132:Notebook
* 133:SSH
* 134:StarRocks
* 137:For-each
* 138:Setats SQL
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskTypeId: number
  /**
   * 工作流ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowId: string
  /**
   * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskName?: string
  /**
   * 最近一次保存版本号
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskLatestVersionNo?: string
  /**
   * 最近一次提交版本号
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskLatestSubmitVersionNo?: string
  /**
   * 工作流名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowName?: string
  /**
   * 任务状态：
* N: 新建
* Y: 调度中
* F: 已下线
* O: 已暂停
* T: 下线中
* INVALID: 已失效
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 任务最新提交状态，任务是否已经提交：true/false
注意：此字段可能返回 null，表示取不到有效值。
   */
  Submit?: boolean
  /**
   * 任务创建时间，示例：2022-02-12 11:13:41
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 最后更新时间，示例：2025-08-13 16:34:06
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastUpdateTime?: string
  /**
   * 最后更新人名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastUpdateUserName?: string
  /**
   * 最后运维时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastOpsTime?: string
  /**
   * 最后运维人名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastOpsUserName?: string
  /**
   * 任务负责人ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUin?: string
  /**
   * 任务描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskDescription?: string
  /**
   * 最近一次更新用户ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateUserUin?: string
  /**
   * 创建用户ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateUserUin?: string
}

/**
 * ListDataSources返回参数结构体
 */
export interface ListDataSourcesResponse {
  /**
   * 数据源列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: DataSourceInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 告警超时配置规则信息
 */
export interface TimeOutStrategyInfo {
  /**
   * 超时告警超时配置：

1.预计运行耗时超时，2.预计完成时间超时，3.预计等待调度耗时超时，4.预计周期内完成但实际未完成
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleType?: number
  /**
   * 超时值配置类型

1--指定值
2--平均值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: number
  /**
   * 超时指定值小时， 默认 为0
注意：此字段可能返回 null，表示取不到有效值。
   */
  Hour?: number
  /**
   * 超时指定值分钟， 默认为1
注意：此字段可能返回 null，表示取不到有效值。
   */
  Min?: number
  /**
   * 超时时间对应的时区配置， 如 UTC+7, 默认为UTC+8
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScheduleTimeZone?: string
}

/**
 * GetCodeFile请求参数结构体
 */
export interface GetCodeFileRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 代码文件ID，参数值来自CreateCodeFile接口的返回
   */
  CodeFileId: string
  /**
   * true：返回文件内容+配置，false：不返回文件内容，只返回配置信息；默认为false
   */
  IncludeContent?: boolean
}

/**
 * OperateResult
 */
export interface OperateResult {
  /**
   * 操作结果1 成功 其他失败
   */
  Status?: number
}

/**
 * ListSchemaPage
 */
export interface ListSchemaPage {
  /**
   * Schema记录列表
   */
  Items?: Array<SchemaInfo>
  /**
   * 分页总页数
   */
  PageCount?: number
  /**
   * 分页大小
   */
  PageSize?: number
  /**
   * 分页页码
   */
  PageNumber?: number
  /**
   * 记录总数
   */
  TotalCount?: number
}

/**
 * RegisterLineage返回参数结构体
 */
export interface RegisterLineageResponse {
  /**
   * 注册结果
   */
  Data?: OperateResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCodeFile返回参数结构体
 */
export interface CreateCodeFileResponse {
  /**
   * 结果
   */
  Data?: CodeFile
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListResourceGroups返回参数结构体
 */
export interface ListResourceGroupsResponse {
  /**
   * 分页结果
   */
  Data?: ExecutorResourceGroupData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateResourceFolder请求参数结构体
 */
export interface UpdateResourceFolderRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 文件夹ID, 可通过ListResourceFolders接口获取
   */
  FolderId: string
  /**
   * 文件夹名称
   */
  FolderName: string
}

/**
 * ListTaskInstanceExecutions请求参数结构体
 */
export interface ListTaskInstanceExecutionsRequest {
  /**
   * 所属项目id
   */
  ProjectId: string
  /**
   * 实例唯一标识，可以通过ListInstances获取
   */
  InstanceKey: string
  /**
   * **时区**timeZone, 传入的时间字符串的所在时区，默认UTC+8
   */
  TimeZone?: string
  /**
   * 每页大小，默认10, 最大200
   */
  PageSize?: number
  /**
   * 分页页码，默认1
   */
  PageNumber?: number
}

/**
 * 项目下的用户集合
 */
export interface ProjectUsersBrief {
  /**
   * 用户集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<ProjectUserRole>
  /**
   * 分页大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * 分页页码
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
  /**
   * 总数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 总页码
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPageNumber?: number
}

/**
 * CodeStudio文件夹对象操作结果
 */
export interface CodeStudioFolderResult {
  /**
   * 文件夹ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  FolderId?: string
}

/**
 * 任务列表分页
 */
export interface ListOpsTasksPage {
  /**
   * 结果总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 总页数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPageNumber?: number
  /**
   * 记录列表	
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<TaskOpsInfo>
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
}

/**
 * CreateOpsAlarmRule返回参数结构体
 */
export interface CreateOpsAlarmRuleResponse {
  /**
   * 告警规则唯一id
   */
  Data?: CreateAlarmRuleData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetSQLFolder请求参数结构体
 */
export interface GetSQLFolderRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 文件夹id
   */
  FolderId: string
}

/**
 * 告警渠道 企业微信群/钉钉群/飞书群 等webhook地址配置
 */
export interface AlarmWayWebHook {
  /**
   * 告警渠道值
7.企业微信群,8 飞书群 9 钉钉群 10 Slack群 11 Teams群
   */
  AlarmWay?: string
  /**
   * 告警群的webhook地址列表
   */
  WebHooks?: Array<string>
}

/**
 * GetResourceFile返回参数结构体
 */
export interface GetResourceFileResponse {
  /**
   * 资源文件详情
   */
  Data?: ResourceFile
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetTaskCode请求参数结构体
 */
export interface GetTaskCodeRequest {
  /**
   * 所属项目id
   */
  ProjectId: string
  /**
   * 任务Id
   */
  TaskId: string
}

/**
 * ListLineage返回参数结构体
 */
export interface ListLineageResponse {
  /**
   * 分页数据
   */
  Data?: ListLineagePage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 创建任务调度配置信息
 */
export interface CreateTaskSchedulerConfiguration {
  /**
   * 周期类型：默认为 DAY_CYCLE

支持的类型为 

* ONEOFF_CYCLE: 一次性
* YEAR_CYCLE: 年
* MONTH_CYCLE: 月
* WEEK_CYCLE: 周
* DAY_CYCLE: 天
* HOUR_CYCLE: 小时
* MINUTE_CYCLE: 分钟
* CRONTAB_CYCLE: crontab表达式类型
   */
  CycleType?: string
  /**
   * 时区，默认为 UTC+8
   */
  ScheduleTimeZone?: string
  /**
   * Cron表达式，默认为 0 0 0 * * ? *
   */
  CrontabExpression?: string
  /**
   * 生效日期，默认为当前日期的 00:00:00
   */
  StartTime?: string
  /**
   * 结束日期，默认为 2099-12-31 23:59:59
   */
  EndTime?: string
  /**
   * 执行时间 左闭区间，默认 00:00
   */
  ExecutionStartTime?: string
  /**
   * 执行时间 右闭区间，默认 23:59
   */
  ExecutionEndTime?: string
  /**
   * 调度类型: 0 正常调度 1 空跑调度，默认为 0
   */
  ScheduleRunType?: string
  /**
   * 日历调度 取值为 0 和 1， 1为打开，0为关闭，默认为0
   */
  CalendarOpen?: string
  /**
   * 日历调度 日历 ID
   */
  CalendarId?: string
  /**
   * 自依赖, 默认值 serial, 取值为：parallel(并行), serial(串行), orderly(有序)
   */
  SelfDepend?: string
  /**
   * 上游依赖数组
   */
  UpstreamDependencyConfigList?: Array<DependencyTaskBrief>
  /**
   * 事件数组
   */
  EventListenerList?: Array<EventListener>
  /**
   * 任务调度优先级 运行优先级 4高 5中 6低 , 默认:6
   */
  RunPriority?: string
  /**
   * 重试策略 重试等待时间,单位分钟: 默认: 5
   */
  RetryWait?: string
  /**
   * 重试策略 最大尝试次数, 默认: 4
   */
  MaxRetryAttempts?: string
  /**
   * 超时处理策略 运行耗时超时（单位：分钟）默认为 -1
   */
  ExecutionTTL?: string
  /**
   * 超时处理策略 等待总时长耗时超时（单位：分钟）默认为 -1
   */
  WaitExecutionTotalTTL?: string
  /**
   * 重跑&补录配置, 默认为 ALL; , ALL 运行成功或失败后皆可重跑或补录, FAILURE 运行成功后不可重跑或补录，运行失败后可重跑或补录, NONE 运行成功或失败后皆不可重跑或补录;
   */
  AllowRedoType?: string
  /**
   * 输出参数数组
   */
  ParamTaskOutList?: Array<OutTaskParameter>
  /**
   * 输入参数数组
   */
  ParamTaskInList?: Array<InTaskParameter>
  /**
   * 产出登记
   */
  TaskOutputRegistryList?: Array<TaskDataRegistry>
  /**
   * **实例生成策略**
   * T_PLUS_0: T+0生成,默认策略
   * T_PLUS_1: T+1生成
   */
  InitStrategy?: string
}

/**
 * CreateCodeFolder返回参数结构体
 */
export interface CreateCodeFolderResponse {
  /**
   * 成功true，失败false
   */
  Data?: CodeStudioFolderResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExecutorResourceGroup分页对象
 */
export interface ExecutorResourceGroupData {
  /**
   * 结果list
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<ExecutorResourceGroupInfo>
  /**
   * 总条数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 页数
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
  /**
   * 页大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * 总分页页码
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPageNumber?: number
}

/**
 * SQL探索文件/文件夹操作结果
 */
export interface SQLContentActionResult {
  /**
   * 操作是否成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: boolean
  /**
   * 文件夹ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  FolderId?: string
}

/**
 * 补录计划详情
 */
export interface DataBackfill {
  /**
   * 项目Id
   */
  ProjectId?: string
  /**
   * 数据补录计划id
   */
  DataBackfillPlanId?: string
  /**
   * 数据补录计划名称
   */
  DataBackfillPlanName?: string
  /**
   * 补录任务集合
   */
  TaskIds?: Array<string>
  /**
   * 补录任务的数据配置列表
   */
  DataBackfillRangeList?: Array<DataBackfillRange>
  /**
   * 检查父任务类型，取值范围：- NONE-全部不检查- ALL-检查全部上游父任务- MAKE_SCOPE-只在（当前补录计划）选中任务中检查
注意：此字段可能返回 null，表示取不到有效值。
   */
  CheckParentType?: string
  /**
   * 补录是否忽略事件依赖	
注意：此字段可能返回 null，表示取不到有效值。
   */
  SkipEventListening?: boolean
  /**
   * 自定义实例运行并发度, 返回为null或者不返回，则表示任务原有自依赖
注意：此字段可能返回 null，表示取不到有效值。
   */
  RedefineParallelNum?: number
  /**
   * 自定义的工作流自依赖，yes或者no；如果不配置，则使用工作流原有自依赖
注意：此字段可能返回 null，表示取不到有效值。
   */
  RedefineSelfWorkflowDependency?: string
  /**
   * 调度资源组id
注意：此字段可能返回 null，表示取不到有效值。
   */
  SchedulerResourceGroupId?: string
  /**
   * 集成资源组id
注意：此字段可能返回 null，表示取不到有效值。
   */
  IntegrationResourceGroupId?: string
  /**
   * 补录自定义的生成周期
注意：此字段可能返回 null，表示取不到有效值。
   */
  RedefineCycleType?: string
  /**
   * 自定义参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  RedefineParamList?: Array<KVPair>
  /**
   * 补录任务的执行开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 补录任务的执行结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 创建用户id
   */
  CreateUserUin?: string
  /**
   * 补录计划实例完成百分数
   */
  CompletePercent?: number
  /**
   * 补录计划实例成功百分数
   */
  SuccessPercent?: number
  /**
   * 补录是实例数据时间顺序，生效必须满足2个条件:1. 必须同周期任务2. 优先按依赖关系执行，无依赖关系影响的情况下按配置执行顺序执行 可选值- NORMAL: 不设置- ORDER: 顺序- REVERSE: 逆序不设置默认为NORMAL
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataTimeOrder?: string
}

/**
 * RemoveMemberProjectRole请求参数结构体
 */
export interface RemoveMemberProjectRoleRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 用户id
   */
  UserUin: string
  /**
   * 角色id列表，目前支持的项目角色有
- 308335260274237440 (项目管理员)
- 308335260676890624 (数据工程师)
- 308335260844662784 (运维工程师)
- 308335260945326080 (普通成员)
   */
  RoleIds: Array<string>
}

/**
 * RunSQLScript请求参数结构体
 */
export interface RunSQLScriptRequest {
  /**
   * 脚本id
   */
  ScriptId: string
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 脚本内容，不传则默认执行已保存的全量脚本内容；若传递则要用Base64编码
   */
  ScriptContent?: string
  /**
   * 高级运行参数，JSON格式base64编码
   */
  Params?: string
}

/**
 * AssociateResourceGroupToProject返回参数结构体
 */
export interface AssociateResourceGroupToProjectResponse {
  /**
   * 输出
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: ResourceStatus
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateResourceGroup返回参数结构体
 */
export interface CreateResourceGroupResponse {
  /**
   * 是否开启成功
   */
  Data?: ResourceResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteSQLScript请求参数结构体
 */
export interface DeleteSQLScriptRequest {
  /**
   * 探索脚本Id
   */
  ScriptId: string
  /**
   * 项目Id
   */
  ProjectId: string
}

/**
 * ListTasks返回参数结构体
 */
export interface ListTasksResponse {
  /**
   * 任务分页信息
   */
  Data?: ListTaskInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateResourceFolder返回参数结构体
 */
export interface UpdateResourceFolderResponse {
  /**
   * 更新文件夹结果，如果更新失败则报错。
   */
  Data?: UpdateFolderResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据源文件上传
 */
export interface DataSourceFileUpload {
  /**
   * Truststore认证文件，默认文件名truststore.jks
   */
  TrustStore?: string
  /**
   * Keystore认证文件，默认文件名keystore.jks
   */
  KeyStore?: string
  /**
   * core-site.xml文件
   */
  CoreSite?: string
  /**
   * hdfs-site.xml文件
   */
  HdfsSite?: string
  /**
   * hive-site.xml文件
   */
  HiveSite?: string
  /**
   * hbase-site文件
   */
  HBASESite?: string
  /**
   * keytab文件，默认文件名[数据源名].keytab
   */
  KeyTab?: string
  /**
   * krb5.conf文件
   */
  KRB5Conf?: string
  /**
   * 私钥,默认文件名private_key.pem
   */
  PrivateKey?: string
  /**
   * 公钥,默认文件名public_key.pem
   */
  PublicKey?: string
}

/**
 * 删除资源文件结果
 */
export interface DeleteResourceFileResult {
  /**
   * true
   */
  Status?: boolean
}

/**
 * ListSchema返回参数结构体
 */
export interface ListSchemaResponse {
  /**
   * 分页数据
   */
  Data?: ListSchemaPage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetCodeFolder返回参数结构体
 */
export interface GetCodeFolderResponse {
  /**
   * codestudio文件夹
   */
  Data?: CodeFolderNode
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteSQLFolder返回参数结构体
 */
export interface DeleteSQLFolderResponse {
  /**
   * 操作结果
   */
  Data?: SQLContentActionResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListWorkflowFolders请求参数结构体
 */
export interface ListWorkflowFoldersRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 父文件夹绝对路径，如/abc/de，如果是根目录则传/
   */
  ParentFolderPath: string
  /**
   * 数据页数，大于等于1。默认1
   */
  PageNumber?: number
  /**
   * 每页显示的数据条数，最小为10条，最大为200 条。默认10
   */
  PageSize?: number
}

/**
 * GetTableColumns请求参数结构体
 */
export interface GetTableColumnsRequest {
  /**
   * 数据表GUID
   */
  TableGuid: string
}

/**
 * ListAlarmMessages请求参数结构体
 */
export interface ListAlarmMessagesRequest {
  /**
   * 所属项目id
   */
  ProjectId: string
  /**
   * 页码数，用于翻页，最小值为 1。
   */
  PageNumber?: number
  /**
   * 每页显示的条数，最大 100 条
   */
  PageSize?: number
  /**
   * 起始告警时间, 格式为yyyy-MM-dd HH:mm:ss
   */
  StartTime?: string
  /**
   * 截止告警时间, 格式yyyy-MM-dd HH:mm:ss
   */
  EndTime?: string
  /**
   * 告警级别
   */
  AlarmLevel?: number
  /**
   * 告警接收人Id
   */
  AlarmRecipientId?: string
  /**
   * 对于传入和返回的过滤时区, 默认UTC+8
   */
  TimeZone?: string
}

/**
 * 数据源对象
 */
export interface DataSource {
  /**
   * 归属项目ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * 数据源ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * 数据源类型:枚举值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 数据源名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 数据源展示名，为了可视化查看
注意：此字段可能返回 null，表示取不到有效值。
   */
  DisplayName?: string
  /**
   * 数据源描述信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 归属项目Name
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectName?: string
  /**
   * 数据源创建人
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateUser?: string
  /**
   * 时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 更新人
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifyUser?: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifyTime?: string
  /**
   * 数据源的配置信息，以JSON KV存储，根据每个数据源类型不同，而KV存储信息不同
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProdConProperties?: string
  /**
   * 同params 内容为开发数据源的数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  DevConProperties?: string
  /**
   * 数据源类别：

- DB ---自定义源
- CLUSTER --- 系统源
注意：此字段可能返回 null，表示取不到有效值。
   */
  Category?: string
}

/**
 * ListSQLScriptRuns返回参数结构体
 */
export interface ListSQLScriptRunsResponse {
  /**
   * 数据探索任务
   */
  Data?: Array<JobDto>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListTenantRoles请求参数结构体
 */
export interface ListTenantRolesRequest {
  /**
   * 角色中文展示名模糊查询，只能传一个值
   */
  RoleDisplayName?: string
}

/**
 * GetTaskInstanceLog请求参数结构体
 */
export interface GetTaskInstanceLogRequest {
  /**
   * **项目ID**
   */
  ProjectId: string
  /**
   * **实例唯一标识**
   */
  InstanceKey: string
  /**
   * **实例生命周期编号，标识实例的某一次执行**例如：周期实例第一次运行的编号为0，用户后期又重跑了该实例，第二次执行的编号为1; 默认最新一次
   */
  LifeRoundNum?: number
  /**
   * **日志级别** 默认All - Info - Debug - Warn - Error - All
   */
  LogLevel?: string
  /**
   * **分页查询日志时使用，无具体业务含义** 第一次查询时值为null 第二次及以后查询时使用上一次查询返回信息中的NextCursor字段值即可
   */
  NextCursor?: string
}

/**
 * ListCatalog请求参数结构体
 */
export interface ListCatalogRequest {
  /**
   * 页码，从1开始
   */
  PageNumber: number
  /**
   * 分页大小，最大500
   */
  PageSize: number
  /**
   * 父目录ID
   */
  ParentCatalogId?: string
}

/**
 * ListLineage请求参数结构体
 */
export interface ListLineageRequest {
  /**
   * 实体唯一ID
   */
  ResourceUniqueId: string
  /**
   * 实体类型 TABLE|METRIC|MODEL|SERVICE|COLUMN
   */
  ResourceType: string
  /**
   * 血缘方向 INPUT｜OUTPUT
   */
  Direction: string
  /**
   * 页码
   */
  PageNumber: number
  /**
   * 分页大小
   */
  PageSize: number
  /**
   * 来源：WEDATA|THIRD 默认WEDATA
   */
  Platform: string
}

/**
 * 删除数据开发任务结果
 */
export interface DeleteTaskResult {
  /**
   * 删除状态,true表示成功，false表示失败
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: boolean
}

/**
 * CreateSQLScript返回参数结构体
 */
export interface CreateSQLScriptResponse {
  /**
   * 结果
   */
  Data?: SQLScript
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 告警免打扰时间区间
 */
export interface AlarmQuietInterval {
  /**
   * ISO标准，1表示周一，7表示周日。
   */
  DaysOfWeek?: Array<number | bigint>
  /**
   * 开始时间，精度时分秒，格式 HH:mm:ss
   */
  StartTime?: string
  /**
   * 结束时间，精度时分秒，格式 HH:mm:ss
   */
  EndTime?: string
}

/**
 * 资源组规格
 */
export interface ResourceGroupSpecification {
  /**
   * 资源组规格
   */
  Specification: string
  /**
   * 数量
   */
  Number: number
}

/**
 * DeleteResourceGroup请求参数结构体
 */
export interface DeleteResourceGroupRequest {
  /**
   * 资源组id
   */
  Id: string
}

/**
 * ListTasks请求参数结构体
 */
export interface ListTasksRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 请求的数据页数。默认值为1，取值大于等于1
   */
  PageNumber?: number
  /**
   * 每页显示的数据条数。默认值为10 ，最小值为10，最大值为200
   */
  PageSize?: number
  /**
   * 任务名称
   */
  TaskName?: string
  /**
   * 所属工作流ID
   */
  WorkflowId?: string
  /**
   * 责任人ID
   */
  OwnerUin?: string
  /**
   * 任务类型
   */
  TaskTypeId?: number
  /**
   * 任务状态
   * N: 新建
   * Y: 调度中
   * F: 已下线
   * O: 已暂停
   * T: 下线中
   * INVALID: 已失效
   */
  Status?: string
  /**
   * 提交状态
   */
  Submit?: boolean
  /**
   * BundleId信息
   */
  BundleId?: string
  /**
   * 创建人ID
   */
  CreateUserUin?: string
  /**
   * 修改时间区间 yyyy-MM-dd HH:mm:ss，需要在数组填入两个时间
   */
  ModifyTime?: Array<string>
  /**
   * 创建时间区间 yyyy-MM-dd HH:mm:ss，需要在数组填入两个时间
   */
  CreateTime?: Array<string>
}

/**
 * 资源文件详情
 */
export interface ResourceFile {
  /**
   * 项目ID
   */
  ProjectId?: string
  /**
   * 资源文件ID
   */
  ResourceId?: string
  /**
   * 资源文件名称
   */
  ResourceName?: string
  /**
   * 资源文件路径
   */
  LocalPath?: string
  /**
   * 资源对象COS存储路径
   */
  RemotePath?: string
  /**
   * 资源文件类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileExtensionType?: string
  /**
   * 资源大小
   */
  Size?: string
  /**
   * 创建用户ID
   */
  CreatorUserUin?: string
  /**
   * 创建用户名称
   */
  CreatorUserName?: string
  /**
   * 最后更新用户名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateUserName?: string
  /**
   * 最后更新用户ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateUserUin?: string
  /**
   * COS 桶
   */
  BucketName?: string
  /**
   * COS 地域
   */
  CosRegion?: string
  /**
   * 资源来源模式
   */
  ResourceSourceMode?: string
  /**
   * 本地工程ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  BundleId?: string
  /**
   * 本地工程信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  BundleInfo?: string
}

/**
 * GetWorkflow返回参数结构体
 */
export interface GetWorkflowResponse {
  /**
   * 工作流详细信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: WorkflowDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetTask返回参数结构体
 */
export interface GetTaskResponse {
  /**
   * 任务详情
   */
  Data?: Task
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSQLScript请求参数结构体
 */
export interface CreateSQLScriptRequest {
  /**
   * 脚本名称
   */
  ScriptName: string
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 父文件夹path，/aaa/bbb/ccc，根目录为空字符串或/
   */
  ParentFolderPath?: string
  /**
   * 数据探索脚本配置
   */
  ScriptConfig?: SQLScriptConfig
  /**
   * 脚本内容，如有值，则要将内容进行base64编码
   */
  ScriptContent?: string
  /**
   * 权限范围：SHARED, PRIVATE
   */
  AccessScope?: string
}

/**
 * GetAlarmMessage请求参数结构体
 */
export interface GetAlarmMessageRequest {
  /**
   * 所属项目Id
   */
  ProjectId: string
  /**
   * 告警消息Id
   */
  AlarmMessageId: string
  /**
   * 返回日期的时区, 默认UTC+8
   */
  TimeZone?: string
}

/**
 * ListCodeFolderContents请求参数结构体
 */
export interface ListCodeFolderContentsRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 父文件夹path，例如/aaa/bbb/ccc，路径头需带斜杠，根目录传/
   */
  ParentFolderPath?: string
  /**
   * 文件夹名称/代码文件名称搜索
   */
  Keyword?: string
  /**
   * 只查询文件夹
   */
  OnlyFolderNode?: boolean
  /**
   * 是否只查询用户自己创建的代码文件
   */
  OnlyUserSelfScript?: boolean
}

/**
 * ListTaskVersions请求参数结构体
 */
export interface ListTaskVersionsRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 任务ID
   */
  TaskId: string
  /**
   * 保存版本：SAVE
提交版本：SUBMIT
默认为SAVE
   */
  TaskVersionType?: string
  /**
   * 请求的数据页数。默认值为1，取值大于等于1。
   */
  PageNumber?: number
  /**
   * 每页显示的数据条数。默认值为10 ，最小值为10，最大值为200。
   */
  PageSize?: number
}

/**
 * 工作流调度详情
 */
export interface OpsWorkflowDetail {
  /**
   * 工作流ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowId?: string
  /**
   * 工作流描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowDesc?: string
  /**
   * 工作流类型：
 - cycle 周期；
 - manual手动
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowType?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 创建人
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateUserUin?: string
  /**
   * 修改时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 延时执行时间,unit=minute
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartupTime?: number
  /**
   * 配置生效日期 开始日期
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 配置结束日期 结束日期
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 任务周期类型
* ONEOFF_CYCLE: 一次性
* YEAR_CYCLE: 年
* MONTH_CYCLE: 月
* WEEK_CYCLE: 周
* DAY_CYCLE: 天
* HOUR_CYCLE: 小时
* MINUTE_CYCLE: 分钟
* CRONTAB_CYCLE: crontab表达式类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleType?: string
  /**
   * 文件夹Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  FolderId?: string
  /**
   * 任务实例初始化策略
 - T_PLUS_1（T+1）：延迟一天初始化
 - T_PLUS_0（T+0）：当天初始化
 - T_MINUS_1（T-1）：提前一天初始化
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceInitStrategy?: string
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
  /**
   * 工作流状态
* ALL_RUNNING : 全部调度中
* ALL_FREEZED : 全部已暂停
* ALL_STOPPTED : 全部已下线
* PART_RUNNING : 部分调度中
* ALL_NO_RUNNING : 全部未调度
* ALL_INVALID : 全部已失效
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 负责人, 多个以‘；’隔开
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUin?: string
  /**
   * 工作流名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowName?: string
}

/**
 * 数据库信息
 */
export interface TableInfo {
  /**
   * 数据表GUID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Guid?: string
  /**
   * 数据表名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 数据表描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 数据库名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseName?: string
  /**
   * 数据库Schema名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SchemaName?: string
  /**
   * 表类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableType?: string
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
   * 表的技术元数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  TechnicalMetadata?: TechnicalMetadata
  /**
   * 表的业务元数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  BusinessMetadata?: BusinessMetadata
}

/**
 * ListResourceFiles请求参数结构体
 */
export interface ListResourceFilesRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 数据页数，大于等于1。默认1
   */
  PageNumber?: number
  /**
   * 每页显示的数据条数，最小为10条，最大为200 条。默认10
   */
  PageSize?: number
  /**
   * 资源文件名称(模糊搜索关键词)
   */
  ResourceName?: string
  /**
   * 资源文件所属文件夹路径(如/a/b/c，查询c文件夹下的资源文件)
   */
  ParentFolderPath?: string
  /**
   * 创建人ID, 可通过DescribeCurrentUserInfo接口获取
   */
  CreateUserUin?: string
  /**
   * 更新时间范围,开始时间, 格式yyyy-MM-dd HH:mm:ss
   */
  ModifyTimeStart?: string
  /**
   * 更新时间范围,结束时间, 格式yyyy-MM-dd HH:mm:ss
   */
  ModifyTimeEnd?: string
  /**
   * 创建时间范围,开始时间, 格式yyyy-MM-dd HH:mm:ss
   */
  CreateTimeStart?: string
  /**
   * 创建时间范围,结束时间, 格式yyyy-MM-dd HH:mm:ss
   */
  CreateTimeEnd?: string
}

/**
 * 工作流统一调度参数入参
依赖任务信息

取值说明表：

| 当前任务周期类型 | 上游任务周期类型 | 配置方式 | MainCyclicConfig取值 | 时间维度/实例范围           | SubordinateCyclicConfig取值       | offset取值             |
| ---------------- | ---------------- | -------- | -------------------- | --------------------------- | --------------------------------- | ---------------------- |
| HOUR_CYCLE       | YEAR_CYCLE       | 推荐策略 | YEAR                 | 按年/本年                   | CURRENT_YEAR                      | 无                     |
| MINUTE_CYCLE     | MONTH_CYCLE      | 推荐策略 | MONTH                | 按月/本月                   | CURRENT_MONTH                     | 无                     |
| DAY_CYCLE        | WEEK_CYCLE       | 推荐策略 | WEEK                 | 按周/本周                   | CURRENT_WEEK                      | 无                     |
| DAY_CYCLE        | WEEK_CYCLE       | 推荐策略 | DAY                  | 按天/最近一次数据时间的实例 | RECENT_DATE                       | 无                     |
| HOUR_CYCLE       | HOUR_CYCLE       | 推荐策略 | HOUR                 | 按小时/最近实例             | CURRENT_HOUR                      | 无                     |
| HOUR_CYCLE       | HOUR_CYCLE       | 推荐策略 | HOUR                 | 按小时/前一周期             | PREVIOUS_HOUR_CYCLE               | 无                     |
| HOUR_CYCLE       | DAY_CYCLE        | 推荐策略 | DAY                  | 按天/当天                   | CURRENT_DAY                       | 无                     |
| WEEK_CYCLE       | DAY_CYCLE        | 推荐策略 | WEEK                 | 按周/上周                   | PREVIOUS_WEEK                     | 无                     |
| WEEK_CYCLE       | DAY_CYCLE        | 推荐策略 | WEEK                 | 按周/上周五                 | PREVIOUS_FRIDAY                   | 无                     |
| WEEK_CYCLE       | DAY_CYCLE        | 推荐策略 | WEEK                 | 按周/上周日                 | PREVIOUS_WEEKEND                  | 无                     |
| WEEK_CYCLE       | DAY_CYCLE        | 推荐策略 | WEEK                 | 按周/本周                   | CURRENT_WEEK                      | 无                     |
| WEEK_CYCLE       | DAY_CYCLE        | 推荐策略 | DAY                  | 按天/当天         、          | CURRENT_DAY                       | 无                     |
| WEEK_CYCLE       | DAY_CYCLE        | 推荐策略 | DAY                  | 按天/前一天                 | PREVIOUS_DAY                      | 无                     |
| WEEK_CYCLE       | ONEOFF_CYCLE     | 推荐策略 | WEEK                 | 按周/本周                   | CURRENT_WEEK                      | 无                     |
| HOUR_CYCLE       | MINUTE_CYCLE     | 推荐策略 | HOUR                 | 按小时/前一个小时(-60,0]    | PREVIOUS_HOUR_LATER_OFFSET_MINUTE | 无                     |
| HOUR_CYCLE       | MINUTE_CYCLE     | 推荐策略 | HOUR                 | 按小时/前一个小时           | PREVIOUS_HOUR                     | 无                     |
| HOUR_CYCLE       | MINUTE_CYCLE     | 推荐策略 | HOUR                 | 按小时/当前小时             | CURRENT_HOUR                      | 无                     |
| YEAR_CYCLE       | WEEK_CYCLE       | 推荐策略 | YEAR                 | 按年/本年                   | CURRENT_YEAR                      | 无                     |
| WEEK_CYCLE       | YEAR_CYCLE       | 推荐策略 | YEAR                 | 按年/本年                   | CURRENT_YEAR                      | 无                     |
| MINUTE_CYCLE     | YEAR_CYCLE       | 推荐策略 | YEAR                 | 按年/本年                   | CURRENT_YEAR                      | 无                     |
| WEEK_CYCLE       | HOUR_CYCLE       | 推荐策略 | WEEK                 | 按周/上周                   | PREVIOUS_WEEK                     | 无                     |
| WEEK_CYCLE       | HOUR_CYCLE       | 推荐策略 | WEEK                 | 按周/本周                   | CURRENT_WEEK                      | 无                     |
| MINUTE_CYCLE     | HOUR_CYCLE       | 推荐策略 | HOUR                 | 按小时/当前小时             | CURRENT_HOUR                      | 无                     |
| HOUR_CYCLE       | MONTH_CYCLE      | 推荐策略 | MONTH                | 按月/本月                   | CURRENT_MONTH                     | 无                     |
| MONTH_CYCLE      | HOUR_CYCLE       | 推荐策略 | MONTH                | 按月/上月                   | PREVIOUS_MONTH                    | 无                     |
| MONTH_CYCLE      | HOUR_CYCLE       | 推荐策略 | MONTH                | 按月/本月                   | CURRENT_MONTH                     | 无                     |
| MONTH_CYCLE      | ONEOFF_CYCLE     | 推荐策略 | MONTH                | 按月/当月                   | CURRENT_MONTH                     | 无                     |
| DAY_CYCLE        | MONTH_CYCLE      | 推荐策略 | MONTH                | 按月/本月                   | CURRENT_MONTH                     | 无                     |
| DAY_CYCLE        | MONTH_CYCLE      | 推荐策略 | DAY                  | 按天/最近一次数据时间的实例 | RECENT_DATE                       | 无                     |
| MONTH_CYCLE      | YEAR_CYCLE       | 推荐策略 | YEAR                 | 按年/本年                   | CURRENT_YEAR                      | 无                     |
| ONEOFF_CYCLE     | WEEK_CYCLE       | 推荐策略 | WEEK                 | 按周/本周                   | CURRENT_WEEK                      | 无                     |
| MINUTE_CYCLE     | MINUTE_CYCLE     | 推荐策略 | MINUTE               | 按分钟/当前分钟             | CURRENT_MINUTE                    | 无                     |
| MINUTE_CYCLE     | MINUTE_CYCLE     | 推荐策略 | MINUTE               | 按分钟/前一周期             | PREVIOUS_MINUTE_CYCLE             | 无                     |
| YEAR_CYCLE       | MINUTE_CYCLE     | 推荐策略 | YEAR                 | 按年/本年                   | CURRENT_YEAR                      | 无                     |
| ONEOFF_CYCLE     | DAY_CYCLE        | 推荐策略 | DAY                  | 按天/当天                   | CURRENT_DAY                       | 无                     |
| DAY_CYCLE        | MINUTE_CYCLE     | 推荐策略 | DAY                  | 按天/前一天(-24 * 60,0]     | PREVIOUS_DAY_LATER_OFFSET_MINUTE  | 无                     |
| DAY_CYCLE        | MINUTE_CYCLE     | 推荐策略 | DAY                  | 按天/前一天                 | PREVIOUS_DAY                      | 无                     |
| DAY_CYCLE        | MINUTE_CYCLE     | 推荐策略 | DAY                  | 按天/当天                   | CURRENT_DAY                       | 无                     |
| MINUTE_CYCLE     | DAY_CYCLE        | 推荐策略 | DAY                  | 按天/当天                   | CURRENT_DAY                       | 无                     |
| WEEK_CYCLE       | WEEK_CYCLE       | 推荐策略 | WEEK                 | 按周/本周                   | CURRENT_WEEK                      | 无                     |
| WEEK_CYCLE       | WEEK_CYCLE       | 推荐策略 | DAY                  | 按天/最近一次数据时间的实例 | RECENT_DATE                       | 无                     |
| YEAR_CYCLE       | YEAR_CYCLE       | 推荐策略 | DAY                  | 按天/最近一次数据时间的实例 | RECENT_DATE                       | 无                     |
| YEAR_CYCLE       | YEAR_CYCLE       | 推荐策略 | YEAR                 | 按年/本年                   | CURRENT_YEAR                      | 无                     |
| YEAR_CYCLE       | HOUR_CYCLE       | 推荐策略 | YEAR                 | 按年/本年                   | CURRENT_YEAR                      | 无                     |
| MINUTE_CYCLE     | WEEK_CYCLE       | 推荐策略 | WEEK                 | 按周/本周                   | CURRENT_WEEK                      | 无                     |
| ONEOFF_CYCLE     | MINUTE_CYCLE     | 推荐策略 | DAY                  | 按天/当天                   | CURRENT_DAY                       | 无                     |
| HOUR_CYCLE       | ONEOFF_CYCLE     | 推荐策略 | DAY                  | 按天/当天                   | CURRENT_DAY                       | 无                     |
| WEEK_CYCLE       | MINUTE_CYCLE     | 推荐策略 | WEEK                 | 按周/上周                   | PREVIOUS_WEEK                     | 无                     |
| WEEK_CYCLE       | MINUTE_CYCLE     | 推荐策略 | WEEK                 | 按周/本周                   | CURRENT_WEEK                      | 无                     |
| DAY_CYCLE        | HOUR_CYCLE       | 推荐策略 | DAY                  | 按天/前一天(-24,0]          | PREVIOUS_DAY_LATER_OFFSET_HOUR    | 无                     |
| DAY_CYCLE        | HOUR_CYCLE       | 推荐策略 | DAY                  | 按天/前一天[-24,0)          | PREVIOUS_DAY                      | 无                     |
| DAY_CYCLE        | HOUR_CYCLE       | 推荐策略 | DAY                  | 按天/当天                   | CURRENT_DAY                       | 无                     |
| YEAR_CYCLE       | MONTH_CYCLE      | 推荐策略 | DAY                  | 按天/最近一次数据时间的实例 | RECENT_DATE                       | 无                     |
| YEAR_CYCLE       | MONTH_CYCLE      | 推荐策略 | MONTH                | 按月/本年所有月             | ALL_MONTH_OF_YEAR                 | 无                     |
| YEAR_CYCLE       | MONTH_CYCLE      | 推荐策略 | MONTH                | 按月/本月                   | CURRENT_MONTH                     | 无                     |
| YEAR_CYCLE       | MONTH_CYCLE      | 推荐策略 | MONTH                | 按月/上月                   | PREVIOUS_MONTH                    | 无                     |
| YEAR_CYCLE       | MONTH_CYCLE      | 推荐策略 | MONTH                | 按月/上月末                 | PREVIOUS_END_OF_MONTH             | 无                     |
| YEAR_CYCLE       | MONTH_CYCLE      | 推荐策略 | MONTH                | 按月/上月初                 | PREVIOUS_BEGIN_OF_MONTH           | 无                     |
| ONEOFF_CYCLE     | YEAR_CYCLE       | 推荐策略 | YEAR                 | 按年/本年                   | CURRENT_YEAR                      | 无                     |
| DAY_CYCLE        | DAY_CYCLE        | 推荐策略 | DAY                  | 按天/当天                   | CURRENT_DAY                       | 无                     |
| ONEOFF_CYCLE     | HOUR_CYCLE       | 推荐策略 | DAY                  | 按天/当天                   | CURRENT_DAY                       | 无                     |
| DAY_CYCLE        | ONEOFF_CYCLE     | 推荐策略 | DAY                  | 按天/当天                   | CURRENT_DAY                       | 无                     |
| MINUTE_CYCLE     | ONEOFF_CYCLE     | 推荐策略 | DAY                  | 按天/当天                   | CURRENT_DAY                       | 无                     |
| WEEK_CYCLE       | MONTH_CYCLE      | 推荐策略 | MONTH                | 按月/本月                   | CURRENT_MONTH                     | 无                     |
| WEEK_CYCLE       | MONTH_CYCLE      | 推荐策略 | DAY                  | 按天/最近一次数据时间的实例 | RECENT_DATE                       | 无                     |
| YEAR_CYCLE       | ONEOFF_CYCLE     | 推荐策略 | YEAR                 | 按年/当年                   | CURRENT_YEAR                      | 无                     |
| MONTH_CYCLE      | DAY_CYCLE        | 推荐策略 | MONTH                | 按月/上月                   | PREVIOUS_MONTH                    | 无                     |
| MONTH_CYCLE      | DAY_CYCLE        | 推荐策略 | MONTH                | 按月/上月末                 | PREVIOUS_END_OF_MONTH             | 无                     |
| MONTH_CYCLE      | DAY_CYCLE        | 推荐策略 | MONTH                | 按月/本月                   | CURRENT_MONTH                     | 无                     |
| MONTH_CYCLE      | DAY_CYCLE        | 推荐策略 | DAY                  | 按天/当天                   | CURRENT_DAY                       | 无                     |
| MONTH_CYCLE      | DAY_CYCLE        | 推荐策略 | DAY                  | 按天/前一天                 | PREVIOUS_DAY                      | 无                     |
| YEAR_CYCLE       | DAY_CYCLE        | 推荐策略 | DAY                  | 按天/本年所有天             | ALL_DAY_OF_YEAR                   | 无                     |
| YEAR_CYCLE       | DAY_CYCLE        | 推荐策略 | DAY                  | 按天/当天                   | CURRENT_DAY                       | 无                     |
| YEAR_CYCLE       | DAY_CYCLE        | 推荐策略 | DAY                  | 按天/前一天                 | PREVIOUS_DAY                      | 无                     |
| HOUR_CYCLE       | WEEK_CYCLE       | 推荐策略 | WEEK                 | 按周/本周                   | CURRENT_WEEK                      | 无                     |
| MONTH_CYCLE      | MONTH_CYCLE      | 推荐策略 | MONTH                | 按月/当月                   | CURRENT_MONTH                     | 无                     |
| MONTH_CYCLE      | MONTH_CYCLE      | 推荐策略 | DAY                  | 按天/最近一次数据时间的实例 | RECENT_DATE                       | 无                     |
| MONTH_CYCLE      | MINUTE_CYCLE     | 推荐策略 | MONTH                | 按月/上月                   | PREVIOUS_MONTH                    | 无                     |
| MONTH_CYCLE      | MINUTE_CYCLE     | 推荐策略 | MONTH                | 按月/本月                   | CURRENT_MONTH                     | 无                     |
| MONTH_CYCLE      | WEEK_CYCLE       | 推荐策略 | MONTH                | 按月/上月                   | PREVIOUS_MONTH                    | 无                     |
| MONTH_CYCLE      | WEEK_CYCLE       | 推荐策略 | MONTH                | 按月/本月                   | CURRENT_MONTH                     | 无                     |
| MONTH_CYCLE      | WEEK_CYCLE       | 推荐策略 | DAY                  | 按天/最近一次数据时间的实例 | RECENT_DATE                       | 无                     |
| DAY_CYCLE        | YEAR_CYCLE       | 推荐策略 | YEAR                 | 按年/本年                   | CURRENT_YEAR                      | 无                     |
| DAY_CYCLE        | YEAR_CYCLE       | 推荐策略 | DAY                  | 按天/最近一次数据时间的实例 | RECENT_DATE                       | 无                     |
| ONEOFF_CYCLE     | ONEOFF_CYCLE     | 推荐策略 | DAY                  | 按天/当天                   | CURRENT_DAY                       | 无                     |
| ONEOFF_CYCLE     | MONTH_CYCLE      | 推荐策略 | MONTH                | 按月/本月                   | CURRENT_MONTH                     | 无                     |
| CRONTAB_CYCLE    | CRONTAB_CYCLE    | 推荐策略 | CRONTAB              | 无                          | CURRENT                           | 无                     |
| HOUR_CYCLE       | HOUR_CYCLE       | 自定义   | RANGE_HOUR           | 区间(小时)                  | 无                                | 逗号分隔的整数，如-1,0 |
| HOUR_CYCLE       | DAY_CYCLE        | 自定义   | RANGE_DAY            | 区间(天)                    | 无                                | 逗号分隔的整数，如-1,0 |
| WEEK_CYCLE       | DAY_CYCLE        | 自定义   | RANGE_DAY            | 区间(天)                    | 无                                | 逗号分隔的整数，如-1,0 |
| HOUR_CYCLE       | MINUTE_CYCLE     | 自定义   | RANGE_MINUTE         | 区间(分钟)                  | 无                                | 逗号分隔的整数，如-1,0 |
| WEEK_CYCLE       | HOUR_CYCLE       | 自定义   | RANGE_HOUR           | 区间(小时)                  | 无                                | 逗号分隔的整数，如-1,0 |
| MINUTE_CYCLE     | HOUR_CYCLE       | 自定义   | RANGE_HOUR           | 区间(小时)                  | 无                                | 逗号分隔的整数，如-1,0 |
| MONTH_CYCLE      | HOUR_CYCLE       | 自定义   | RANGE_HOUR           | 区间(小时)                  | 无                                | 逗号分隔的整数，如-1,0 |
| MINUTE_CYCLE     | MINUTE_CYCLE     | 自定义   | RANGE_MINUTE         | 区间(分钟)                  | 无                                | 逗号分隔的整数，如-1,0 |
| YEAR_CYCLE       | MINUTE_CYCLE     | 自定义   | RANGE_MINUTE         | 区间(分钟)                  | 无                                | 逗号分隔的整数，如-1,0 |
| DAY_CYCLE        | MINUTE_CYCLE     | 自定义   | RANGE_MINUTE         | 区间(分钟)                  | 无                                | 逗号分隔的整数，如-1,0 |
| MINUTE_CYCLE     | DAY_CYCLE        | 自定义   | RANGE_DAY            | 区间(天)                    | 无                                | 逗号分隔的整数，如-1,0 |
| YEAR_CYCLE       | HOUR_CYCLE       | 自定义   | RANGE_HOUR           | 区间(小时)                  | 无                                | 逗号分隔的整数，如-1,0 |
| WEEK_CYCLE       | MINUTE_CYCLE     | 自定义   | RANGE_MINUTE         | 区间(分钟)                  | 无                                | 逗号分隔的整数，如-1,0 |
| DAY_CYCLE        | HOUR_CYCLE       | 自定义   | RANGE_HOUR           | 区间(小时)                  | 无                                | 逗号分隔的整数，如-1,0 |
| DAY_CYCLE        | DAY_CYCLE        | 自定义   | RANGE_DAY            | 区间(天)                    | 无                                | 逗号分隔的整数，如-1,0 |
| MONTH_CYCLE      | DAY_CYCLE        | 自定义   | RANGE_DAY            | 区间(天)                    | 无                                | 逗号分隔的整数，如-1,0 |
| YEAR_CYCLE       | DAY_CYCLE        | 自定义   | RANGE_DAY            | 区间(天)                    | 无                                | 逗号分隔的整数，如-1,0 |
| MONTH_CYCLE      | MINUTE_CYCLE     | 自定义   | RANGE_MINUTE         | 区间(分钟)                  | 无                                | 逗号分隔的整数，如-1,0 |
| HOUR_CYCLE       | HOUR_CYCLE       | 自定义   | LIST_HOUR            | 列表(小时)                  | 无                                | 逗号分隔的整数，如-1,0 |
| HOUR_CYCLE       | DAY_CYCLE        | 自定义   | LIST_DAY             | 列表(天)                    | 无                                | 逗号分隔的整数，如-1,0 |
| WEEK_CYCLE       | DAY_CYCLE        | 自定义   | LIST_DAY             | 列表(天)                    | 无                                | 逗号分隔的整数，如-1,0 |
| HOUR_CYCLE       | MINUTE_CYCLE     | 自定义   | LIST_MINUTE          | 列表(分钟)                  | 无                                | 逗号分隔的整数，如-1,0 |
| WEEK_CYCLE       | HOUR_CYCLE       | 自定义   | LIST_HOUR            | 列表(小时)                  | 无                                | 逗号分隔的整数，如-1,0 |
| MINUTE_CYCLE     | HOUR_CYCLE       | 自定义   | LIST_HOUR            | 列表(小时)                  | 无                                | 逗号分隔的整数，如-1,0 |
| MONTH_CYCLE      | HOUR_CYCLE       | 自定义   | LIST_HOUR            | 列表(小时)                  | 无                                | 逗号分隔的整数，如-1,0 |
| MINUTE_CYCLE     | MINUTE_CYCLE     | 自定义   | LIST_MINUTE          | 列表(分钟)                  | 无                                | 逗号分隔的整数，如-1,0 |
| YEAR_CYCLE       | MINUTE_CYCLE     | 自定义   | LIST_MINUTE          | 列表(分钟)                  | 无                                | 逗号分隔的整数，如-1,0 |
| DAY_CYCLE        | MINUTE_CYCLE     | 自定义   | LIST_MINUTE          | 列表(分钟)                  | 无                                | 逗号分隔的整数，如-1,0 |
| MINUTE_CYCLE     | DAY_CYCLE        | 自定义   | LIST_DAY             | 列表(天)                    | 无                                | 逗号分隔的整数，如-1,0 |
| YEAR_CYCLE       | HOUR_CYCLE       | 自定义   | LIST_HOUR            | 列表(小时)                  | 无                                | 逗号分隔的整数，如-1,0 |
| WEEK_CYCLE       | MINUTE_CYCLE     | 自定义   | LIST_MINUTE          | 列表(分钟)                  | 无                                | 逗号分隔的整数，如-1,0 |
| DAY_CYCLE        | HOUR_CYCLE       | 自定义   | LIST_HOUR            | 列表(小时)                  | 无                                | 逗号分隔的整数，如-1,0 |
| DAY_CYCLE        | DAY_CYCLE        | 自定义   | LIST_DAY             | 列表(天)                    | 无                                | 逗号分隔的整数，如-1,0 |
| MONTH_CYCLE      | DAY_CYCLE        | 自定义   | LIST_DAY             | 列表(天)                    | 无                                | 逗号分隔的整数，如-1,0 |
| YEAR_CYCLE       | DAY_CYCLE        | 自定义   | LIST_DAY             | 列表(天)                    | 无                                | 逗号分隔的整数，如-1,0 |
| MONTH_CYCLE      | MINUTE_CYCLE     | 自定义   | LIST_MINUTE          | 列表(分钟)                  | 无                                | 逗号分隔的整数，如-1,0 |
 */
export interface WorkflowSchedulerConfigurationInfo {
  /**
   * 时区
   */
  ScheduleTimeZone: string
  /**
   * 周期类型：支持的类型为
ONEOFF_CYCLE: 一次性
YEAR_CYCLE: 年
MONTH_CYCLE: 月
WEEK_CYCLE: 周
DAY_CYCLE: 天
HOUR_CYCLE: 小时
MINUTE_CYCLE: 分钟
CRONTAB_CYCLE: crontab表达式类型
   */
  CycleType: string
  /**
   * 自依赖, 默认值 serial, 取值为：parallel(并行), serial(串行), orderly(有序)
   */
  SelfDepend: string
  /**
   * 生效开始时间
   */
  StartTime: string
  /**
   * 生效结束时间
   */
  EndTime: string
  /**
   * cron表达式
   */
  CrontabExpression: string
  /**
   * 工作流依赖，yes or no
   */
  DependencyWorkflow?: string
  /**
   * 0：不修改 1：将任务的上游依赖配置改为默认值
   */
  ModifyCycleValue?: string
  /**
   * 工作流存在跨工作流依赖且使用cron表达式调度。如果保存统一调度，会断开不支持的依赖关系
   */
  ClearLink?: boolean
  /**
   * ModifyCycleValue为1的时候生效，表示默认修改的上游依赖-时间维度，取值为：
* CRONTAB
* DAY
* HOUR
* LIST_DAY
* LIST_HOUR
* LIST_MINUTE
* MINUTE
* MONTH
* RANGE_DAY
* RANGE_HOUR
* RANGE_MINUTE
* WEEK
* YEAR

https://capi.woa.com/object/detail?product=wedata&env=api_dev&version=2025-08-06&name=WorkflowSchedulerConfigurationInfo
   */
  MainCyclicConfig?: string
  /**
   * ModifyCycleValue为1的时候生效，表示默认修改的上游依赖-实例范围
取值为：
* ALL_DAY_OF_YEAR
* ALL_MONTH_OF_YEAR
* CURRENT
* CURRENT_DAY
* CURRENT_HOUR
* CURRENT_MINUTE
* CURRENT_MONTH
* CURRENT_WEEK
* CURRENT_YEAR
* PREVIOUS_BEGIN_OF_MONTH
* PREVIOUS_DAY
* PREVIOUS_DAY_LATER_OFFSET_HOUR
* PREVIOUS_DAY_LATER_OFFSET_MINUTE
* PREVIOUS_END_OF_MONTH
* PREVIOUS_FRIDAY
* PREVIOUS_HOUR
* PREVIOUS_HOUR_CYCLE
* PREVIOUS_HOUR_LATER_OFFSET_MINUTE
* PREVIOUS_MINUTE_CYCLE
* PREVIOUS_MONTH
* PREVIOUS_WEEK
* PREVIOUS_WEEKEND
* RECENT_DATE

https://capi.woa.com/object/detail?product=wedata&env=api_dev&version=2025-08-06&name=WorkflowSchedulerConfigurationInfo
   */
  SubordinateCyclicConfig?: string
  /**
   * 执行时间左闭区间，示例：00:00，只有周期类型为MINUTE_CYCLE才需要填入
   */
  ExecutionStartTime?: string
  /**
   * 执行时间右闭区间，示例：23:59，只有周期类型为MINUTE_CYCLE才需要填入
   */
  ExecutionEndTime?: string
  /**
   * 是否开启日历调度 1 开启 0关闭
   */
  CalendarOpen?: string
  /**
   * 日历id
   */
  CalendarId?: string
}

/**
 * ListProjectRoles返回参数结构体
 */
export interface ListProjectRolesResponse {
  /**
   * 角色列表
   */
  Data?: PageRoles
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询任务上游依赖详情分页
 */
export interface DependencyConfigPage {
  /**
   * 满足查询条件的数据总条数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 满足查询条件的数据总页数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPageNumber?: number
  /**
   * 当前请求的数据页数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
  /**
   * 当前请求的数据页条数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * 分页数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<TaskDependDto>
}

/**
 * 批量启动任务返回参数
 */
export interface StartTasks {
  /**
   * 任务启动是否成功
   */
  Status?: boolean
}

/**
 * CreateResourceFile返回参数结构体
 */
export interface CreateResourceFileResponse {
  /**
   * 创建资源文件结果
   */
  Data?: CreateResourceFileResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务实例执行列表
 */
export interface TaskInstanceExecutions {
  /**
   * 结果总数
   */
  TotalCount?: number
  /**
   * 总页数
   */
  TotalPageNumber?: number
  /**
   * 记录列表
   */
  Items?: Array<InstanceExecution>
  /**
   * 页码
   */
  PageNumber?: number
  /**
   * 分页大小
   */
  PageSize?: number
}

/**
 * 查询告警规则列表
 */
export interface ListAlarmRulesResult {
  /**
   * 分页的页数，当前页数
   */
  PageNumber?: number
  /**
   * 每页显示的条数
   */
  PageSize?: number
  /**
   * 分页总页数
   */
  TotalPageNumber?: number
  /**
   * 所有的告警规则个数
   */
  TotalCount?: number
  /**
   * 告警规则信息列表
   */
  Items?: Array<AlarmRuleData>
}

/**
 * EnableProject请求参数结构体
 */
export interface EnableProjectRequest {
  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * ListTaskInstanceExecutions返回参数结构体
 */
export interface ListTaskInstanceExecutionsResponse {
  /**
   * 实例详情
   */
  Data?: TaskInstanceExecutions
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 更新任务返回体
 */
export interface UpdateTaskResult {
  /**
   * 处理结果，成功返回 true，不成功返回 false
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: boolean
}

/**
 * LineageProperty额外扩展参数
 */
export interface LineageProperty {
  /**
   * 属性名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 属性值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
}

/**
 * CreateTask返回参数结构体
 */
export interface CreateTaskResponse {
  /**
   * 任务ID
   */
  Data?: CreateTaskResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisableProject请求参数结构体
 */
export interface DisableProjectRequest {
  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * 依赖配置策略
 */
export interface DependencyStrategyTask {
  /**
   * 等待上游任务实例策略：EXECUTING（执行）；WAITING（等待）

注意：此字段可能返回 null，表示取不到有效值。
   */
  PollingNullStrategy?: string
  /**
   * 仅当PollingNullStrategy为EXECUTING时才需要填本字段，List类型：NOT_EXIST（默认，在分钟依赖分钟/小时依赖小时的情况下，父实例不在下游实例调度时间范围内）；PARENT_EXPIRED（父实例失败）；PARENT_TIMEOUT（父实例超时）。以上场景满足任一条件即可通过该父任务实例依赖判断，除以上场景外均需等待父实例。

注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskDependencyExecutingStrategies?: Array<string>
  /**
   * 仅当TaskDependencyExecutingStrategies中包含PARENT_TIMEOUT时才需要填本字段，下游任务依赖父实例执行超时时间，单位：分钟。

注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskDependencyExecutingTimeoutValue?: number
}

/**
 * 创建任务基本属性信息
 */
export interface CreateTaskBaseAttribute {
  /**
   * 任务名称
   */
  TaskName: string
  /**
   * 任务类型ID：

* 21:JDBC SQL
* 23:TDSQL-PostgreSQL
* 26:OfflineSynchronization
* 30:Python
* 31:PySpark
* 32:DLC SQL
* 33:Impala
* 34:Hive SQL
* 35:Shell
* 36:Spark SQL
* 38:Shell Form Mode
* 39:Spark
* 40:TCHouse-P
* 41:Kettle
* 42:Tchouse-X
* 43:TCHouse-X SQL
* 46:DLC Spark
* 47:TiOne
* 48:Trino
* 50:DLC PySpark
* 92:MapReduce
* 130:Branch Node
* 131:Merged Node
* 132:Notebook
* 133:SSH
* 134:StarRocks
* 137:For-each
* 138:Setats SQL
   */
  TaskTypeId: string
  /**
   * 工作流ID
   */
  WorkflowId: string
  /**
   * 任务负责人ID，默认为当前用户
   */
  OwnerUin?: string
  /**
   * 任务描述
   */
  TaskDescription?: string
}

/**
 * 创建数据补录计划结果
 */
export interface CreateDataReplenishmentPlan {
  /**
   * 补录计划Id
   */
  DataBackfillPlanId?: string
}

/**
 * GetTable返回参数结构体
 */
export interface GetTableResponse {
  /**
   * 数据表详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: TableInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateWorkflowFolder请求参数结构体
 */
export interface UpdateWorkflowFolderRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 文件夹ID，可通过ListWorkflowFolders接口获取
   */
  FolderId: string
  /**
   * 更新后的文件夹名称
   */
  FolderName: string
}

/**
 * PauseOpsTasksAsync返回参数结构体
 */
export interface PauseOpsTasksAsyncResponse {
  /**
   * 异步操作结果
   */
  Data?: OpsAsyncResponse
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 业务提交JOB的子任务
 */
export interface JobExecutionDto {
  /**
   * 数据探索任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  JobId: string
  /**
   * 子查询任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  JobExecutionId: string
  /**
   * 子查询名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  JobExecutionName: string
  /**
   * 子查询sql内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScriptContent: string
  /**
   * 子查询状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime: string
  /**
   * 执行阶段
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecuteStageInfo?: string
  /**
   * 日志路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogFilePath?: string
  /**
   * 下载结果路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResultFilePath?: string
  /**
   * 预览结果路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResultPreviewFilePath?: string
  /**
   * 任务执行的结果总行数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResultTotalCount?: number
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 耗时
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeCost?: number
  /**
   * 上下文SQL内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContextScriptContent?: Array<string>
  /**
   * 任务执行的结果预览行数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResultPreviewCount?: number
  /**
   * 任务执行的结果影响行数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResultEffectCount?: number
  /**
   * 是否正在收集全量结果：默认false，true表示正在收集全量结果，用于前端判断是否需要继续轮询
注意：此字段可能返回 null，表示取不到有效值。
   */
  CollectingTotalResult?: boolean
  /**
   * 是否需要截断脚本内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScriptContentTruncate?: boolean
}

/**
 * ListUpstreamTasks返回参数结构体
 */
export interface ListUpstreamTasksResponse {
  /**
   * 上游任务详情
   */
  Data?: DependencyConfigPage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 参数传递-输出参数
 */
export interface OutTaskParameter {
  /**
   * 参数名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamKey: string
  /**
   * 参数定义
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamValue: string
}

/**
 * 更新告警规则响应
 */
export interface ModifyAlarmRuleResult {
  /**
   * 是否更新成功
   */
  Status?: boolean
}

/**
 * 更新文件夹结果
 */
export interface UpdateFolderResult {
  /**
   * 更新状态,true表示更新成功，false表示更新失败
   */
  Status?: boolean
}

/**
 * ListSchema请求参数结构体
 */
export interface ListSchemaRequest {
  /**
   * 页码，从1开始
   */
  PageNumber: number
  /**
   * 分页大小，最大500
   */
  PageSize: number
  /**
   * 目录名称
   */
  CatalogName?: string
  /**
   * 数据源ID
   */
  DatasourceId?: number
  /**
   * 数据库名称
   */
  DatabaseName?: string
  /**
   * 数据库模式搜索关键字
   */
  Keyword?: string
}

/**
 * 查询工作流详细信息
 */
export interface WorkflowDetail {
  /**
   * 工作流名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowName?: string
  /**
   * 责任人ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUin?: string
  /**
   * 创建人ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateUserUin?: string
  /**
   * 工作流类型，cycle和manual
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowType?: string
  /**
   * 工作流参数数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowParams?: Array<ParamInfo>
  /**
   * 统一调度参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowSchedulerConfiguration?: WorkflowSchedulerConfiguration
  /**
   * 工作流描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowDesc?: string
  /**
   * 工作流所属路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  Path?: string
  /**
   * BundleId项
注意：此字段可能返回 null，表示取不到有效值。
   */
  BundleId?: string
  /**
   * BundleInfo项
注意：此字段可能返回 null，表示取不到有效值。
   */
  BundleInfo?: string
}

/**
 * DeleteProjectMember返回参数结构体
 */
export interface DeleteProjectMemberResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateWorkflowFolder请求参数结构体
 */
export interface CreateWorkflowFolderRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 父文件夹绝对路径，如/abc/de，如果是根目录则传/
   */
  ParentFolderPath: string
  /**
   * 要创建的文件夹名字
   */
  FolderName: string
}

/**
 * CreateResourceFolder请求参数结构体
 */
export interface CreateResourceFolderRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 父文件夹绝对路径, 取值示例 /wedata/test, 根目录,请使用/即可
   */
  ParentFolderPath: string
  /**
   * 文件夹名称
   */
  FolderName: string
}

/**
 * 监控指标
 */
export interface MetricData {
  /**
   * 指标名称

- ConcurrencyUsage --- 并发使用率
- CpuCoreUsage --- cpu使用率
- CpuLoad --- cpu负载
- DevelopQueueTask --- 正在队列中的开发任务数量
- DevelopRunningTask --- 正在运行的开发任务数量
- DevelopSchedulingTask --- 正在调度的开发任务数量
- DiskUsage --- 磁盘使用情况
- DiskUsed --- 磁盘已用量
- MaximumConcurrency --- 最大并发
- MemoryLoad --- 内存负载
- MemoryUsage --- 内存使用量
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetricName?: string
  /**
   * 当前值
注意：此字段可能返回 null，表示取不到有效值。
   */
  SnapshotValue?: number
  /**
   * 指标趋势
注意：此字段可能返回 null，表示取不到有效值。
   */
  TrendList?: Array<TrendData>
}

/**
 * DeleteResourceFolder请求参数结构体
 */
export interface DeleteResourceFolderRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 文件夹ID, 可通过ListResourceFolders接口获取
   */
  FolderId: string
}

/**
 * UpdateCodeFolder返回参数结构体
 */
export interface UpdateCodeFolderResponse {
  /**
   * 执行结果
   */
  Data?: CodeStudioFolderActionResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateResourceFile请求参数结构体
 */
export interface UpdateResourceFileRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 资源文件ID,可通过ListResourceFiles接口获取
   */
  ResourceId: string
  /**
   * - 上传文件及手填两种方式只能选择其一，如果两者均提供，取值顺序为文件>手填值
-  手填值必须是存在的cos路径, /datastudio/resource/ 为固定前缀, projectId 为项目ID,需传入具体值, parentFolderPath为父文件夹路径, name为文件名, 手填值取值示例:
     /datastudio/resource/projectId/parentFolderPath/name 

   */
  ResourceFile?: string
  /**
   * 资源名称, 尽可能和文件名保持一致
   */
  ResourceName?: string
  /**
   * bundle客户端ID
   */
  BundleId?: string
  /**
   * bundle客户端名称
   */
  BundleInfo?: string
}

/**
 * 任务扩展信息参数
 */
export interface TaskExtParameter {
  /**
   * 参数名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamKey: string
  /**
   * 参数值
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamValue: string
}

/**
 * 数据探索脚本业务处理实体
 */
export interface CodeFile {
  /**
   * 脚本ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CodeFileId?: string
  /**
   * 脚本名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  CodeFileName?: string
  /**
   * 脚本所有者 uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUin?: string
  /**
   * 脚本配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  CodeFileConfig?: CodeFileConfig
  /**
   * 脚本内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  CodeFileContent?: string
  /**
   * 最近一次操作人
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateUserUin?: string
  /**
   * 项目ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * 更新时间 yyyy-MM-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 创建时间 yyyy-MM-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 权限范围：SHARED, PRIVATE
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccessScope?: string
  /**
   * 节点全路径，/aaa/bbb/ccc.ipynb，由各个节点的名称组成
注意：此字段可能返回 null，表示取不到有效值。
   */
  Path?: string
  /**
   * 父文件夹路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentFolderPath?: string
}

/**
 * SubmitTask返回参数结构体
 */
export interface SubmitTaskResponse {
  /**
   * 成功或者失败
   */
  Data?: SubmitTaskResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 获取资源文件列表item
 */
export interface ResourceFileItem {
  /**
   * 资源文件ID
   */
  ResourceId?: string
  /**
   * 资源文件名称
   */
  ResourceName?: string
  /**
   * 资源文件类型
   */
  FileExtensionType?: string
  /**
   * 资源路径
   */
  LocalPath?: string
}

/**
 * 告警信息列表
 */
export interface ListAlarmMessages {
  /**
   * 页码
   */
  PageNumber?: number
  /**
   * 分页大小
   */
  PageSize?: number
  /**
   * 总条数
   */
  TotalCount?: number
  /**
   * 总页数
   */
  TotalPageNumber?: number
  /**
   * 告警信息列表
   */
  Items?: Array<AlarmMessage>
}

/**
 * 关联绑定的project
 */
export interface BindProject {
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
   * 项目展示名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectDisplayName?: string
}

/**
 * 开通的资源组信息
 */
export interface ResourceType {
  /**
   * 资源组类型

- Schedule --- 调度资源组
- Integration --- 集成资源组
- DataService -- 数据服务资源组
   */
  ResourceGroupType: string
  /**
   * 集成资源组，细分实时资源组和离线资源组(集成、调度、数据服务资源组不可以同时购买)
   */
  Integration?: IntegrationResource
  /**
   * 调度资源组(集成、调度、数据服务资源组不可以同时购买)

- s_test(测试规格)
- s_small(基础规格)
- s_medium(普及规格)
- s_large(专业规格)



   */
  Schedule?: ResourceGroupSpecification
  /**
   * 数据服务资源组(集成、调度、数据服务资源组不可以同时购买)

- ds_t(测试规格)
- ds_s(基础规格)
- ds_m(普及规格)
- ds_l(专业规格)
   */
  DataService?: ResourceGroupSpecification
}

/**
 * StartOpsTasks返回参数结构体
 */
export interface StartOpsTasksResponse {
  /**
   * 异步操作结果
   */
  Data?: StartTasks
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateTask返回参数结构体
 */
export interface UpdateTaskResponse {
  /**
   * 任务ID
   */
  Data?: UpdateTaskResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资源文件夹详情
 */
export interface ResourceFolder {
  /**
   * 资源文件夹ID
   */
  FolderId?: string
  /**
   * 创建人ID
   */
  CreateUserUin?: string
  /**
   * 创建人名称
   */
  CreateUserName?: string
  /**
   * 文件夹路径
   */
  FolderPath?: string
  /**
   * 文件夹名称
   */
  FolderName?: string
}

/**
 * UpdateDataSource请求参数结构体
 */
export interface UpdateDataSourceRequest {
  /**
   * 数据源id
   */
  Id: number
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 数据源的配置信息，以JSON KV存储，根据每个数据源类型不同，而KV存储信息不同

> deployType: 
CONNSTR_PUBLICDB(公网实例) 
CONNSTR_CVMDB(自建实例)
INSTANCE(云实例)

```
mysql: 自建实例
{
    "deployType": "CONNSTR_CVMDB",
    "url": "jdbc:mysql://1.1.1.1:1111/database",
    "username": "root",
    "password": "root",
    "region": "ap-shanghai",
    "vpcId": "vpc-kprq42yo",
    "type": "MYSQL"
}
mysql: 云实例
{
    "instanceid": "cdb-12uxdo5e",
    "db": "db",
    "region": "ap-shanghai",
    "username": "msyql",
    "password": "mysql",
    "deployType": "INSTANCE",
    "type": "TENCENT_MYSQL"
}
sql_server: 
{
    "deployType": "CONNSTR_PUBLICDB",
    "url": "jdbc:sqlserver://1.1.1.1:223;DatabaseName=database",
    "username": "user_1",
    "password": "pass_2",
    "type": "SQLSERVER"
}
redis:
    redisType:
    -NO_ACCOUT(免账号)
    -SELF_ACCOUNT(自定义账号)
{
    "deployType": "CONNSTR_PUBLICDB",
    "username":""
    "password": "pass",
    "ip": "1.1.1.1",
    "port": "6379",
    "redisType": "NO_ACCOUT",
    "type": "REDIS"
}
oracle: 
{
    "deployType": "CONNSTR_CVMDB",
    "url": "jdbc:oracle:thin:@1.1.1.1:1521:prod",
    "username": "oracle",
    "password": "pass",
    "region": "ap-shanghai",
    "vpcId": "vpc-kprq42yo",
    "type": "ORACLE"
}
mongodb:
    advanceParams(自定义参数，会拼接至url后)
{
    "advanceParams": [
        {
            "key": "authSource",
            "value": "auth"
        }
    ],
    "db": "admin",
    "deployType": "CONNSTR_PUBLICDB",
    "username": "user",
    "password": "pass",
    "type": "MONGODB",
    "host": "1.1.1.1:9200"
}
postgresql:
{
    "deployType": "CONNSTR_PUBLICDB",
    "url": "jdbc:postgresql://1.1.1.1:1921/database",
    "username": "user",
    "password": "pass",
    "type": "POSTGRE"
}
kafka:
    authType:
        - sasl
        - jaas
        - sasl_plaintext
        - sasl_ssl
        - GSSAPI
    ssl:
        -PLAIN
        -GSSAPI
{
    "deployType": "CONNSTR_PUBLICDB",
    "host": "1.1.1.1:9092",
    "ssl": "GSSAPI",
    "authType": "sasl",
    "type": "KAFKA",
    "principal": "aaaa",
    "serviceName": "kafka"
}

cos:
{
    "region": "ap-shanghai",
    "deployType": "INSTANCE",
    "secretId": "aaaaa",
    "secretKey": "sssssss",
    "bucket": "aaa",
    "type": "COS"
}

```
   */
  ProdConProperties?: string
  /**
   * 若项目为标准模式，则此字段必填
   */
  DevConProperties?: string
  /**
   * 生产环境数据源文件上传
   */
  ProdFileUpload?: DataSourceFileUpload
  /**
   * 开发环境数据源文件上传
   */
  DevFileUpload?: DataSourceFileUpload
  /**
   * 数据源展示名，为了可视化查看
   */
  DisplayName?: string
  /**
   * 数据源描述信息
   */
  Description?: string
}

/**
 * AssociateResourceGroupToProject请求参数结构体
 */
export interface AssociateResourceGroupToProjectRequest {
  /**
   * 资源组id
   */
  ResourceGroupId: string
  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * ListOpsWorkflows请求参数结构体
 */
export interface ListOpsWorkflowsRequest {
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 分页页码
   */
  PageNumber?: number
  /**
   * 分页大小
   */
  PageSize?: number
  /**
   * 文件Id
   */
  FolderId?: string
  /**
   * 工作流状态筛选
   * ALL_RUNNING : 全部调度中
   * ALL_FREEZED : 全部已暂停
   * ALL_STOPPTED : 全部已下线
   * PART_RUNNING : 部分调度中
   * ALL_NO_RUNNING : 全部未调度
   * ALL_INVALID : 全部已失效
   */
  Status?: string
  /**
   * 负责人Id
   */
  OwnerUin?: string
  /**
   * 工作流类型筛选, 支持值 Cycle或Manual. 默认只查询 Cycle
   */
  WorkflowType?: string
  /**
   * 工作流关键词过滤，支持工作流 Id/name 模糊匹配
   */
  KeyWord?: string
  /**
   * 排序项，可选CreateTime、TaskCount
   */
  SortItem?: string
  /**
   * 排序方式，DESC或ASC, 大写
   */
  SortType?: string
  /**
   * 创建人Id
   */
  CreateUserUin?: string
  /**
   * 更新时间，格式yyyy-MM-dd HH:mm:ss
   */
  ModifyTime?: string
  /**
   * 创建时间，格式yyyy-MM-dd HH:mm:ss
   */
  CreateTime?: string
}

/**
 * CreateWorkflowFolder返回参数结构体
 */
export interface CreateWorkflowFolderResponse {
  /**
   * 创建文件夹结果，如果创建失败则报错。
   */
  Data?: CreateFolderResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetDataSourceRelatedTasks请求参数结构体
 */
export interface GetDataSourceRelatedTasksRequest {
  /**
   * 数据源id
   */
  Id: number
}

/**
 * 资源文件夹分页
 */
export interface ResourceFolderPage {
  /**
   * 资源文件夹集合信息
   */
  Items?: Array<ResourceFolder>
  /**
   * 总页数
   */
  TotalPageNumber?: number
  /**
   * 总数量
   */
  TotalCount?: number
  /**
   * 当前页
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
  /**
   * 每页显示数
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
}

/**
 * ListDownstreamTasks返回参数结构体
 */
export interface ListDownstreamTasksResponse {
  /**
   * 下游依赖详情
   */
  Data?: DependencyConfigPage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateOpsTasksOwner返回参数结构体
 */
export interface UpdateOpsTasksOwnerResponse {
  /**
   * 操作结果
   */
  Data?: UpdateTasksOwner
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * notebook kernel session信息
 */
export interface NotebookSessionInfo {
  /**
   * 会话ID
   */
  NotebookSessionId?: string
  /**
   * 会话名称
   */
  NotebookSessionName?: string
}

/**
 * ListTenantRoles返回参数结构体
 */
export interface ListTenantRolesResponse {
  /**
   * 主账号角色列表
   */
  Data?: Array<SystemRole>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 角色列表分页信息
 */
export interface PageRoles {
  /**
   * 角色信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<SystemRole>
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
   * 总个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 总页码
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPageNumber?: number
}

/**
 * 更新任务对象入参
 */
export interface UpdateTaskBrief {
  /**
   * 任务基本属性
   */
  TaskBaseAttribute: UpdateTaskBaseAttribute
  /**
   * 任务配置
   */
  TaskConfiguration: TaskConfiguration
  /**
   * 任务调度配置
   */
  TaskSchedulerConfiguration: TaskSchedulerConfiguration
}

/**
 * GetTaskInstance返回参数结构体
 */
export interface GetTaskInstanceResponse {
  /**
   * 实例详情
   */
  Data?: TaskInstanceDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TechnicalMetadata
 */
export interface TechnicalMetadata {
  /**
   * 责任人
注意：此字段可能返回 null，表示取不到有效值。
   */
  Owner?: string
  /**
   * 数据表位置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Location?: string
  /**
   * 存储大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageSize?: number
}

/**
 * UpdateOpsTasksOwner请求参数结构体
 */
export interface UpdateOpsTasksOwnerRequest {
  /**
   * 所属项目Id
   */
  ProjectId: string
  /**
   * 任务Id列表
   */
  TaskIds: Array<string>
  /**
   * 任务负责人Id
   */
  OwnerUin: string
}

/**
 * UpdateDataSource返回参数结构体
 */
export interface UpdateDataSourceResponse {
  /**
   * 操作是否成功
   */
  Data?: DataSourceStatus
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetOpsAsyncJob请求参数结构体
 */
export interface GetOpsAsyncJobRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 异步操作id
   */
  AsyncId: string
}

/**
 * DeleteCodeFolder返回参数结构体
 */
export interface DeleteCodeFolderResponse {
  /**
   * 执行结果
   */
  Data?: CodeStudioFolderActionResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateProjectMember请求参数结构体
 */
export interface CreateProjectMemberRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 用户id
   */
  UserUins: Array<string>
  /**
   * 角色id
   */
  RoleIds: Array<string>
}

/**
 * UpdateResourceFile返回参数结构体
 */
export interface UpdateResourceFileResponse {
  /**
   * 更新状态
   */
  Data?: UpdateResourceFileResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetOpsAlarmRule返回参数结构体
 */
export interface GetOpsAlarmRuleResponse {
  /**
   * 告警规则详细信息
   */
  Data?: AlarmRuleData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateProject请求参数结构体
 */
export interface CreateProjectRequest {
  /**
   * 项目基本信息
   */
  Project: ProjectRequest
  /**
   * DLC绑定集群信息
   */
  DLCInfo?: DLCClusterInfo
  /**
   * 绑定资源组的id列表
   */
  ResourceIds?: Array<string>
}

/**
 * 实例日志内容
 */
export interface InstanceLog {
  /**
   * 实例唯一标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceKey?: string
  /**
   * 项目ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * **运行代码内容**
注意：此字段可能返回 null，表示取不到有效值。
   */
  CodeContent?: string
  /**
   * **日志内容**
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogInfo?: string
  /**
   * **分页查询日志时使用，无具体业务含义**

第一次查询时值为null 
第二次及以后查询时使用上一次查询返回信息中的NextCursor字段值即可
注意：此字段可能返回 null，表示取不到有效值。
   */
  NextCursor?: string
}

/**
 * 异步操作返回结构体
 */
export interface OpsAsyncResponse {
  /**
   * 异步执行记录Id
   */
  AsyncId?: string
}

/**
 * UpdateWorkflow请求参数结构体
 */
export interface UpdateWorkflowRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 工作流ID
   */
  WorkflowId: string
  /**
   * 工作流名称
   */
  WorkflowName?: string
  /**
   * 责任人ID
   */
  OwnerUin?: string
  /**
   * 备注
   */
  WorkflowDesc?: string
  /**
   * 工作流参数列表
   */
  WorkflowParams?: Array<ParamInfo>
  /**
   * 统一调度参数
   */
  WorkflowSchedulerConfiguration?: WorkflowSchedulerConfigurationInfo
  /**
   * BundleId项
   */
  BundleId?: string
  /**
   * Bundle信息
   */
  BundleInfo?: string
}

/**
 * 资源组指标趋势
 */
export interface TrendData {
  /**
   * 时间戳
   */
  Timestamp?: number
  /**
   * 指标值
   */
  Value?: number
}

/**
 * ListColumnLineage请求参数结构体
 */
export interface ListColumnLineageRequest {
  /**
   * 表唯一ID
   */
  TableUniqueId: string
  /**
   * 血缘方向 INPUT｜OUTPUT
   */
  Direction: string
  /**
   * 页码
   */
  PageNumber: number
  /**
   * 分页大小
   */
  PageSize: number
  /**
   * 列名称
   */
  ColumnName: string
  /**
   * 来源：WEDATA|THIRD 默认WEDATA
   */
  Platform: string
}

/**
 * UpdateOpsAlarmRule返回参数结构体
 */
export interface UpdateOpsAlarmRuleResponse {
  /**
   * 更新结果是否成功
true: 更新成功 false：更新失败/未更新
   */
  Data?: ModifyAlarmRuleResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CodeStudio文件对象操作结果
 */
export interface CodeStudioFileActionResult {
  /**
   * 成功true，失败false
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: boolean
  /**
   * 文件夹ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CodeFileId?: string
}

/**
 * 异步操作详情
 */
export interface OpsAsyncJobDetail {
  /**
   * 项目id
   */
  ProjectId?: string
  /**
   * 操作id
   */
  AsyncId?: string
  /**
   * 异步操作类型
   */
  AsyncType?: string
  /**
   * 异步操作状态：初始状态: INIT; 运行中: RUNNING; 成功: SUCCESS; 失败: FAIL; 部分成功: PART_SUCCESS
   */
  Status?: string
  /**
   * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorDesc?: string
  /**
   * 子操作总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalSubProcessCount?: number
  /**
   * 已完成的子操作个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  FinishedSubProcessCount?: number
  /**
   * 已成功的子操作个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  SuccessSubProcessCount?: number
  /**
   * 操作人id
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateUserUin?: string
  /**
   * 操作创建时间
   */
  CreateTime?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
}

/**
 * ListDownstreamOpsTasks返回参数结构体
 */
export interface ListDownstreamOpsTasksResponse {
  /**
   * 下游依赖详情
   */
  Data?: ChildDependencyConfigPage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetProject请求参数结构体
 */
export interface GetProjectRequest {
  /**
   * 项目id。一般使用项目Id来查询，与projectName必须存在一个。
   */
  ProjectId: string
}

/**
 * ListTaskVersions返回参数结构体
 */
export interface ListTaskVersionsResponse {
  /**
   * 版本列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: ListTaskVersions
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListSQLScriptRuns请求参数结构体
 */
export interface ListSQLScriptRunsRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 脚本id
   */
  ScriptId: string
  /**
   * 任务id
   */
  JobId?: string
  /**
   * 搜索关键词
   */
  SearchWord?: string
  /**
   * 执行人
   */
  ExecuteUserUin?: string
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
 * CreateDataBackfillPlan请求参数结构体
 */
export interface CreateDataBackfillPlanRequest {
  /**
   * 所属项目Id
   */
  ProjectId: string
  /**
   * 补录任务集合
   */
  TaskIds: Array<string>
  /**
   * 补录任务的数据时间配置
   */
  DataBackfillRangeList: Array<DataBackfillRange>
  /**
   * 时区，默认UTC+8
   */
  TimeZone?: string
  /**
   * 数据补录计划名称，不填则由系统随机生成一串字符
   */
  DataBackfillPlanName?: string
  /**
   * 检查父任务类型，取值范围：- NONE-全部不检查- ALL-检查全部上游父任务- MAKE_SCOPE-只在（当前补录计划）选中任务中检查,默认NONE不检查
   */
  CheckParentType?: string
  /**
   * 补录是否忽略事件依赖,默认true
   */
  SkipEventListening?: boolean
  /**
   * 自定义的工作流自依赖，yes或者no；如果不配置，则使用工作流原有自依赖
   */
  RedefineSelfWorkflowDependency?: string
  /**
   * 自定义实例运行并发度, 如果不配置，则使用任务原有自依赖
   */
  RedefineParallelNum?: number
  /**
   * 调度资源组id，为空则表示使用任务原有调度执行资源组
   */
  SchedulerResourceGroupId?: string
  /**
   * 集成任务资源组id，为空则表示使用任务原有调度执行资源组
   */
  IntegrationResourceGroupId?: string
  /**
   * 自定义参数，可以重新指定任务的参数，方便补录实例执行新的逻辑
   */
  RedefineParamList?: Array<KVPair>
  /**
   * 补录是实例数据时间顺序，生效必须满足2个条件:
1. 必须同周期任务
2. 优先按依赖关系执行，无依赖关系影响的情况下按配置执行顺序执行
 
可选值
- NORMAL: 不设置
- ORDER: 顺序
- REVERSE: 逆序
不设置默认为NORMAL
   */
  DataTimeOrder?: string
  /**
   * 补录实例重新生成周期，如果设置会重新指定补录任务实例的生成周期，目前只会将天实例转换成每月1号生成的实例
   * MONTH_CYCLE: 月
   */
  RedefineCycleType?: string
}

/**
 * ListProjectRoles请求参数结构体
 */
export interface ListProjectRolesRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 角色中文展示名模糊查询，只能传一个值
   */
  RoleDisplayName?: string
  /**
   * 页码
   */
  PageNumber?: number
  /**
   * 分页信息
   */
  PageSize?: number
}

/**
 * GetTaskInstance请求参数结构体
 */
export interface GetTaskInstanceRequest {
  /**
   * 所属项目id
   */
  ProjectId: string
  /**
   * 实例唯一标识，可以通过ListInstances获取
   */
  InstanceKey: string
  /**
   * **时区**timeZone, 传入的时间字符串的所在时区，默认UTC+8
   */
  TimeZone?: string
}

/**
 * ListSQLFolderContents请求参数结构体
 */
export interface ListSQLFolderContentsRequest {
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 父文件夹path，/aaa/bbb/ccc，路径头需带斜杠，查询根目录传/
   */
  ParentFolderPath: string
  /**
   * 文件夹名称/脚本名称搜索
   */
  Keyword?: string
  /**
   * 只查询文件夹
   */
  OnlyFolderNode?: boolean
  /**
   * 是否只查询用户自己创建的脚本
   */
  OnlyUserSelfScript?: boolean
  /**
   * 权限范围：SHARED, PRIVATE
   */
  AccessScope?: string
}

/**
 * 更新资源文件结果
 */
export interface UpdateResourceFileResult {
  /**
   * true
   */
  Status?: boolean
}

/**
 * CreateTask请求参数结构体
 */
export interface CreateTaskRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 任务基本属性
   */
  TaskBaseAttribute: CreateTaskBaseAttribute
  /**
   * 任务配置
   */
  TaskConfiguration: CreateTaskConfiguration
  /**
   * 任务调度配置
   */
  TaskSchedulerConfiguration: CreateTaskSchedulerConfiguration
}

/**
 * GetDataSource请求参数结构体
 */
export interface GetDataSourceRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 数据源id
   */
  Id: number
}

/**
 * ListProjectMembers返回参数结构体
 */
export interface ListProjectMembersResponse {
  /**
   * 项目列表
   */
  Data?: ProjectUsersBrief
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 血缘资源实体
 */
export interface LineageResouce {
  /**
   * 实体原始唯一ID\n
备注：当血缘为表的列时候 唯一ID传表ResourceUniqueId::字段名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceUniqueId: string
  /**
   * 实体类型
TABLE|METRIC|MODEL|SERVICE|COLUMN
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceType: string
  /**
   * 来源：WEDATA|THIRD
默认wedata
注意：此字段可能返回 null，表示取不到有效值。
   */
  Platform: string
  /**
   * 业务名称：库名.表名｜指标名称｜模型名称|字段名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceName?: string
  /**
   * 描述：表类型｜指标描述｜模型描述|字段描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
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
   * resource 额外扩展参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceProperties?: Array<LineageProperty>
  /**
   * 血缘节点唯一标识符号
   */
  LineageNodeId?: string
}

/**
 * ListAlarmMessages返回参数结构体
 */
export interface ListAlarmMessagesResponse {
  /**
   * 告警信息列表
   */
  Data?: ListAlarmMessages
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  RoleName?: string
  /**
   * 角色展示名
注意：此字段可能返回 null，表示取不到有效值。
   */
  RoleDisplayName?: string
  /**
   * 描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
}

/**
 * DeleteTask请求参数结构体
 */
export interface DeleteTaskRequest {
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 任务ID
和VirtualTaskId选填一个
   */
  TaskId: string
  /**
   * 任务操作是否消息通知下游任务责任人true：通知
false：不通知
不传默认false
   */
  OperateInform?: boolean
  /**
   * 任务删除方式
true：不针对下游任务实例进行强制失败
false：针对下游任务实例进行强制失败
不传默认false

   */
  DeleteMode?: boolean
}

/**
 * GetCodeFolder请求参数结构体
 */
export interface GetCodeFolderRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 文件夹id
   */
  FolderId: string
}

/**
 * GetOpsTask请求参数结构体
 */
export interface GetOpsTaskRequest {
  /**
   * 任务Id
   */
  TaskId: string
  /**
   * 项目Id
   */
  ProjectId: string
}

/**
 * 删除告警规则响应结果
 */
export interface DeleteAlarmRuleResult {
  /**
   * 是否删除成功
   */
  Status?: boolean
}

/**
 * ListWorkflowFolders返回参数结构体
 */
export interface ListWorkflowFoldersResponse {
  /**
   * 分页的文件夹查询结果
   */
  Data?: WorkflowFolderPage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * KillTaskInstancesAsync返回参数结构体
 */
export interface KillTaskInstancesAsyncResponse {
  /**
   * 批量中止操作的返回的异步id, 可以在接口GetAsyncJob获取具体执行详情
   */
  Data?: OpsAsyncResponse
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询任务版本分页列表
 */
export interface ListTaskVersions {
  /**
   * 记录列表	
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<TaskVersion>
  /**
   * 满足查询条件的数据总条数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 满足查询条件的数据总页数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPageNumber?: number
  /**
   * 当前页记录数
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageCount?: number
  /**
   * 当前请求的数据页条数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * 当前请求的数据页数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
}

/**
 * ListUpstreamTasks请求参数结构体
 */
export interface ListUpstreamTasksRequest {
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 任务Id
   */
  TaskId: string
  /**
   * 请求的数据页数。默认值为1，取值大于等于1。
   */
  PageNumber?: number
  /**
   * 请求的数据页数。默认值为1，取值大于等于1。
   */
  PageSize?: number
}

/**
 * 离线集成对账告警规则
 */
export interface ReconciliationStrategyInfo {
  /**
   * 离线告警规则类型
reconciliationFailure： 离线对账失败告警
reconciliationOvertime： 离线对账任务运行超时告警(需配置超时时间)
reconciliationMismatch： 离线对账不一致条数告警(需配置不一致条数阀值)
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleType?: string
  /**
   * 对账不一致条数阀值， RuleType=reconciliationMismatch对账不一致条数类型，需要配置该字段，无默认值
注意：此字段可能返回 null，表示取不到有效值。
   */
  MismatchCount?: number
  /**
   * 对账任务运行超时阀值： 小时， 默认为0
注意：此字段可能返回 null，表示取不到有效值。
   */
  Hour?: number
  /**
   * 对账任务运行超时阀值： 分钟， 默认为1
注意：此字段可能返回 null，表示取不到有效值。
   */
  Min?: number
}

/**
 * AddCalcEnginesToProject返回参数结构体
 */
export interface AddCalcEnginesToProjectResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 监听事件器
 */
export interface EventListener {
  /**
   * 事件名
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventName: string
  /**
   * 事件周期：SECOND, MIN, HOUR, DAY
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventSubType: string
  /**
   * 事件广播类型：SINGLE, BROADCAST
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventBroadcastType: string
  /**
   * 扩展信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  PropertiesList?: Array<ParamInfo>
}

/**
 * 实例执行的每个阶段详情
 */
export interface InstanceExecutionPhase {
  /**
   * 该状态开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * **实例生命周期阶段状态**

- WAIT_UPSTREAM 表示 等待事件/上游状态
- WAIT_RUN 表示 等待运行状态
- RUNNING 表示 运行中状态
- COMPLETE 表示 终态-完成
- FAILED 表示 终态-失败重试
- EXPIRED 表示 终态-失败
- SKIP_RUNNING 表示 终态-被上游分支节点跳过的分支
- HISTORY 表示 兼容2024-03-30之前的历史实例，之后实例无需关注次枚举类型
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
 * 数据源关联任务信息
 */
export interface DatasourceRelationTaskInfo {
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
   * 数据源关联任务信息，本期仅支持数据开发任务接口返回数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskInfo?: Array<RelateTask>
}

/**
 * UpdateWorkflow返回参数结构体
 */
export interface UpdateWorkflowResponse {
  /**
   * true代表成功，false代表失败
   */
  Data?: UpdateWorkflowResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListUpstreamOpsTasks请求参数结构体
 */
export interface ListUpstreamOpsTasksRequest {
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 任务Id
   */
  TaskId: string
  /**
   * 分页页码
   */
  PageNumber?: string
  /**
   * 分页大小
   */
  PageSize?: string
}

/**
 * RemoveMemberProjectRole返回参数结构体
 */
export interface RemoveMemberProjectRoleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 删除资源文件夹结果
 */
export interface DeleteFolderResult {
  /**
   * 删除状态,true表示成功，false表示失败
   */
  Status?: boolean
}

/**
 * ListWorkflows请求参数结构体
 */
export interface ListWorkflowsRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 请求的数据页数。默认值为1，取值大于等于1
   */
  PageNumber?: number
  /**
   * 每页显示的数据条数。默认值为10 ，最小值为10，最大值为200
   */
  PageSize?: number
  /**
   * 搜索关键词
   */
  Keyword?: string
  /**
   * 工作流所属文件夹
   */
  ParentFolderPath?: string
  /**
   * 工作流类型，cycle和manual
   */
  WorkflowType?: string
  /**
   * bundleId项
   */
  BundleId?: string
  /**
   * 负责人ID
   */
  OwnerUin?: string
  /**
   * 创建人ID
   */
  CreateUserUin?: string
  /**
   * 修改时间区间 yyyy-MM-dd HH:mm:ss，需要在数组填入两个时间
   */
  ModifyTime?: Array<string>
  /**
   * 创建时间区间 yyyy-MM-dd HH:mm:ss，需要在数组填入两个时间
   */
  CreateTime?: Array<string>
}

/**
 * UpdateSQLFolder返回参数结构体
 */
export interface UpdateSQLFolderResponse {
  /**
   * 成功true，失败false
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: SQLContentActionResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据探索脚本配置
 */
export interface CodeFileConfig {
  /**
   * 高级运行参数,变量替换，map-json String,String
注意：此字段可能返回 null，表示取不到有效值。
   */
  Params?: string
  /**
   * notebook kernel session信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  NotebookSessionInfo?: NotebookSessionInfo
}

/**
 * DeleteSQLScript返回参数结构体
 */
export interface DeleteSQLScriptResponse {
  /**
   * 执行结果
   */
  Data?: SQLContentActionResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListOpsTasks请求参数结构体
 */
export interface ListOpsTasksRequest {
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 分页大小
   */
  PageSize?: string
  /**
   * 分页页码
   */
  PageNumber?: string
  /**
   * 任务类型Id 
 - 20：通用数据同步
 - 25：ETLTaskType
 - 26：ETLTaskType
 - 30：python
 - 31：pyspark
 - 34：HiveSQLTaskType
 - 35：shell
 - 36：SparkSQLTaskType
 - 21：JDBCSQLTaskType
 - 32：DLCTaskType
 - 33：ImpalaTaskType
 - 40：CDWTaskType
 - 41：kettle
 - 46：DLCSparkTaskType
 - 47：TiOne机器学习
 - 48：TrinoTaskType
 - 50：DLCPyspark39：spark
 - 92：mr
 - 38：shell脚本
 - 70：hivesql脚本
 - 1000：自定义业务通用
   */
  TaskTypeId?: string
  /**
   * 工作流Id
   */
  WorkflowId?: string
  /**
   * 工作流名称
   */
  WorkflowName?: string
  /**
   * 责任人id
   */
  OwnerUin?: string
  /**
   * 文件夹Id
   */
  FolderId?: string
  /**
   * 数据源id
   */
  SourceServiceId?: string
  /**
   * 目标数据源id
   */
  TargetServiceId?: string
  /**
   * 资源组id
   */
  ExecutorGroupId?: string
  /**
   * 任务周期类型
   * ONEOFF_CYCLE: 一次性
   * YEAR_CYCLE: 年
   * MONTH_CYCLE: 月
   * WEEK_CYCLE: 周
   * DAY_CYCLE: 天
   * HOUR_CYCLE: 小时
   * MINUTE_CYCLE: 分钟
   * CRONTAB_CYCLE: crontab表达式类型
   */
  CycleType?: string
  /**
   * 任务状态:
- Y: 运行
- F: 停止
- O: 冻结
- T: 停止中
- INVALID: 已失效
   */
  Status?: string
  /**
   * 时区, 默认默认UTC+8
   */
  TimeZone?: string
}

/**
 * GetSQLScript返回参数结构体
 */
export interface GetSQLScriptResponse {
  /**
   * 脚本详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: SQLScript
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCodeFile请求参数结构体
 */
export interface CreateCodeFileRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 代码文件名称
   */
  CodeFileName: string
  /**
   * 父文件夹path，例如/aaa/bbb/ccc，路径头需带斜杠，根目录传/
   */
  ParentFolderPath: string
  /**
   * 代码文件配置
   */
  CodeFileConfig?: CodeFileConfig
  /**
   * 代码文件内容
   */
  CodeFileContent?: string
}

/**
 * 任务下游依赖详情分页
 */
export interface ChildDependencyConfigPage {
  /**
   * 结果总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 总页数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPageNumber?: number
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
  Items?: Array<OpsTaskDepend>
}

/**
 * LineageRelation 血缘关系
 */
export interface LineageRelation {
  /**
   * 关联ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  RelationId?: string
  /**
   * 源端唯一血缘ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceUniqueId?: string
  /**
   * 目标端唯一血缘ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetUniqueId?: string
  /**
   * 血缘加工过程
注意：此字段可能返回 null，表示取不到有效值。
   */
  Processes?: Array<LineageProcess>
}

/**
 * 创建任务配置信息
 */
export interface CreateTaskConfiguration {
  /**
   * 资源组ID： 需要通过 DescribeNormalSchedulerExecutorGroups 获取 ExecutorGroupId
   */
  ResourceGroup?: string
  /**
   * 代码内容的Base64编码
   */
  CodeContent?: string
  /**
   * 任务扩展属性配置列表
   */
  TaskExtConfigurationList?: Array<TaskExtParameter>
  /**
   * 集群ID
   */
  DataCluster?: string
  /**
   * 指定的运行节点
   */
  BrokerIp?: string
  /**
   * 资源池队列名称，需要通过 DescribeProjectClusterQueues 获取
   */
  YarnQueue?: string
  /**
   * 来源数据源ID, 使用 ; 分隔, 需要通过 DescribeDataSourceWithoutInfo 获取
   */
  SourceServiceId?: string
  /**
   * 目标数据源ID, 使用 ; 分隔, 需要通过 DescribeDataSourceWithoutInfo 获取
   */
  TargetServiceId?: string
  /**
   * 调度参数
   */
  TaskSchedulingParameterList?: Array<TaskSchedulingParameter>
  /**
   * Bundle使用的ID
   */
  BundleId?: string
  /**
   * Bundle信息
   */
  BundleInfo?: string
}

/**
 * RerunTaskInstancesAsync请求参数结构体
 */
export interface RerunTaskInstancesAsyncRequest {
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 实例id列表,可以从ListInstances中获取
   */
  InstanceKeyList: Array<string>
  /**
   * 重跑类型, 1: 自身; 3: 孩子; 2: 自身以及孩子，默认1
   */
  RerunType?: string
  /**
   * 是否检查上游任务： ALL（全部）、 MAKE_SCOPE（选中）、NONE （全部不检查），默认NONE
   */
  CheckParentType?: string
  /**
   * 下游实例范围 WORKFLOW: 所在工作流 PROJECT: 所在项目 ALL: 所有跨工作流依赖的项目，默认WORKFLOW
   */
  SonRangeType?: string
  /**
   * 重跑是否忽略事件监听
   */
  SkipEventListening?: boolean
  /**
   * 自定义实例运行并发度, 如果不配置，则使用任务原有自依赖
   */
  RedefineParallelNum?: number
  /**
   * 自定义的工作流自依赖: yes开启，no关闭，如果不配置，则使用工作流原有自依赖
   */
  RedefineSelfWorkflowDependency?: string
  /**
   * 重跑实例自定义参数
   */
  RedefineParamList?: KVMap
}

/**
 * 任务对象
 */
export interface Task {
  /**
   * 任务基本属性
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskBaseAttribute: TaskBaseAttribute
  /**
   * 任务配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskConfiguration: TaskConfiguration
  /**
   * 任务调度配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskSchedulerConfiguration: TaskSchedulerConfiguration
}

/**
 * ListTablePage
 */
export interface ListTablePage {
  /**
   * Schema记录列表
   */
  Items?: Array<TableInfo>
  /**
   * 分页总页数
   */
  PageCount?: number
  /**
   * 分页大小
   */
  PageSize?: number
  /**
   * 分页页码
   */
  PageNumber?: number
  /**
   * 记录总数
   */
  TotalCount?: number
}

/**
 * 工作流统一调度出参
 */
export interface WorkflowSchedulerConfiguration {
  /**
   * 时区
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScheduleTimeZone?: string
  /**
   * 周期类型：支持的类型为
ONEOFF_CYCLE: 一次性
YEAR_CYCLE: 年
MONTH_CYCLE: 月
WEEK_CYCLE: 周
DAY_CYCLE: 天
HOUR_CYCLE: 小时
MINUTE_CYCLE: 分钟
CRONTAB_CYCLE: crontab表达式类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleType?: string
  /**
   * 自依赖, 默认值 serial, 取值为：parallel(并行), serial(串行), orderly(有序)
注意：此字段可能返回 null，表示取不到有效值。
   */
  SelfDepend?: string
  /**
   * 生效开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 生效结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 工作流依赖，yes or no
注意：此字段可能返回 null，表示取不到有效值。
   */
  DependencyWorkflow?: string
  /**
   * 执行时间左闭区间，示例：00:00
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutionStartTime?: string
  /**
   * 执行时间右闭区间，示例：23:59
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutionEndTime?: string
  /**
   * cron表达式
注意：此字段可能返回 null，表示取不到有效值。
   */
  CrontabExpression?: string
  /**
   * 是否开启日历调度 1 开启 0关闭
注意：此字段可能返回 null，表示取不到有效值。
   */
  CalendarOpen?: string
  /**
   * 日历名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  CalendarName?: string
  /**
   * 日历id
注意：此字段可能返回 null，表示取不到有效值。
   */
  CalendarId?: string
}

/**
 * CreateDataBackfillPlan返回参数结构体
 */
export interface CreateDataBackfillPlanResponse {
  /**
   * 数据补录计划创建结果
   */
  Data?: CreateDataReplenishmentPlan
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询数据源分页列表
 */
export interface DataSourceInfo {
  /**
   * 分页页码
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
  /**
   * 分页大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * 数据源列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<DataSource>
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 总分页页码
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPageNumber?: number
}

/**
 * 任务版本列表信息
 */
export interface TaskVersionDetail {
  /**
   * 保存时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 版本号
注意：此字段可能返回 null，表示取不到有效值。
   */
  VersionNum?: string
  /**
   * 版本创建人
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateUserUin?: string
  /**
   * 保存版本Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  VersionId?: string
  /**
   * 版本描述信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  VersionRemark?: string
  /**
   * 审批状态（只有提交版本有）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApproveStatus?: string
  /**
   * 生产状态（只有提交版本有）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApproveTime?: string
  /**
   * 版本的任务详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Task?: Task
  /**
   * 审批人Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApproveUserUin?: string
}

/**
 * StopOpsTasksAsync返回参数结构体
 */
export interface StopOpsTasksAsyncResponse {
  /**
   * AsyncId
   */
  Data?: OpsAsyncResponse
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateWorkflow返回参数结构体
 */
export interface CreateWorkflowResponse {
  /**
   * 返回工作流ID
   */
  Data?: CreateWorkflowResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTask返回参数结构体
 */
export interface DeleteTaskResponse {
  /**
   * 是否删除成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: DeleteTaskResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Schema信息
 */
export interface SchemaInfo {
  /**
   * Schema GUID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Guid?: string
  /**
   * Schema名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 数据库名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DatabaseName?: string
}

/**
 * DissociateResourceGroupFromProject返回参数结构体
 */
export interface DissociateResourceGroupFromProjectResponse {
  /**
   * 是否绑定成功，失败返回异常
   */
  Data?: ResourceStatus
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 告警规则接收人配置
 */
export interface AlarmGroup {
  /**
   * 告警升级人ID列表
若告警接收人或上级升级人未在告警间隔时间内确认告警，则会发送告警给下一级升级人。
   */
  AlarmEscalationRecipientIds?: Array<string>
  /**
   * 告警升级间隔
   */
  AlarmEscalationInterval?: number
  /**
   * 告警通知疲劳配置
   */
  NotificationFatigue?: NotificationFatigue
  /**
   * 告警渠道 1.邮件，2.短信，3.微信，4.语音，5.企业微信，6.Http，7.企业微信群 8 飞书群 9 钉钉群 10 Slack群 11 Teams群（默认1.邮件） 7.企业微信群 8 飞书群 9 钉钉群 10 Slack群 11 Teams群 只能选择一个渠道
   */
  AlarmWays?: Array<string>
  /**
   * 企业微信群/飞书群/钉钉群 /Slack群/Teams群的webhook地址列表
   */
  WebHooks?: Array<AlarmWayWebHook>
  /**
   * 告警接收人类型：1.指定人员，2.任务责任人，3.值班表（默认1.指定人员）
   */
  AlarmRecipientType?: number
  /**
   * 根据AlarmRecipientType的类型该列表具有不同的业务id 1（指定人员）: 告警接收人id列表 2（任务责任人）：无需配置 3（值班表）：值班表id列表
   */
  AlarmRecipientIds?: Array<string>
}

/**
 * GrantMemberProjectRole请求参数结构体
 */
export interface GrantMemberProjectRoleRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 用户id
   */
  UserUin: string
  /**
   * 角色id列表，目前支持的项目角色有
- 308335260274237440 (项目管理员)
- 308335260676890624 (数据工程师)
- 308335260844662784 (运维工程师)
- 308335260945326080 (普通成员)
   */
  RoleIds: Array<string>
}

/**
 * GetTaskVersion请求参数结构体
 */
export interface GetTaskVersionRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 任务ID
   */
  TaskId: string
  /**
   * 提交版本ID，不填默认拿最新提交版本
   */
  VersionId?: string
}

/**
 * GetOpsAsyncJob返回参数结构体
 */
export interface GetOpsAsyncJobResponse {
  /**
   * 异步操作详情结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: OpsAsyncJobDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteSQLFolder请求参数结构体
 */
export interface DeleteSQLFolderRequest {
  /**
   * 文件夹Id
   */
  FolderId: string
  /**
   * 项目id
   */
  ProjectId: string
}

/**
 * 血缘Pair对象
 */
export interface LineagePair {
  /**
   * 来源
   */
  Source: LineageResouce
  /**
   * 目标
   */
  Target: LineageResouce
  /**
   * 血缘加工过程
   */
  Processes: Array<LineageProcess>
}

/**
 * ListDatabasePage
 */
export interface ListDatabasePage {
  /**
   * 数据库记录列表
   */
  Items?: Array<DatabaseInfo>
  /**
   * 分页总页数
   */
  PageCount?: number
  /**
   * 分页大小
   */
  PageSize?: number
  /**
   * 分页页码
   */
  PageNumber?: number
  /**
   * 记录总数
   */
  TotalCount?: number
}

/**
 * ListResourceGroups请求参数结构体
 */
export interface ListResourceGroupsRequest {
  /**
   * 执行资源组类型

- Schedule --- 调度资源组
- Integration --- 集成资源组
- DataService -- 数据服务资源组
   */
  Type?: string
  /**
   * 资源组id
   */
  Id?: string
  /**
   * 搜索的执行资源组名称
   */
  Name?: string
  /**
   * 项目空间id查询列表
   */
  ProjectIds?: Array<string>
  /**
   * 页数
   */
  PageNumber?: number
  /**
   * 页大小
   */
  PageSize?: number
}

/**
 * 文件夹信息
 */
export interface WorkflowFolder {
  /**
   * 项目ID
   */
  ProjectId?: string
  /**
   * 文件夹ID
   */
  FolderId?: string
  /**
   * 文件夹绝对路径
   */
  FolderPath?: string
  /**
   * 创建人ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateUserUin?: string
}

/**
 * GetAlarmMessage返回参数结构体
 */
export interface GetAlarmMessageResponse {
  /**
   * 告警信息
   */
  Data?: AlarmMessage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 更新任务基本属性信息
 */
export interface UpdateTaskBaseAttribute {
  /**
   * 任务名称
   */
  TaskName: string
  /**
   * 任务负责人ID
   */
  OwnerUin: string
  /**
   * 任务描述
   */
  TaskDescription: string
}

/**
 * GetOpsTaskCode请求参数结构体
 */
export interface GetOpsTaskCodeRequest {
  /**
   * 所属项目id
   */
  ProjectId: string
  /**
   * 任务Id
   */
  TaskId: string
}

/**
 * RegisterLineage请求参数结构体
 */
export interface RegisterLineageRequest {
  /**
   * 需要注册的血缘关系列表
   */
  Relations: Array<LineagePair>
}

/**
 * GetDataBackfillPlan请求参数结构体
 */
export interface GetDataBackfillPlanRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 补录计划id
   */
  DataBackfillPlanId: string
  /**
   * 展示时区，默认UTC+8
   */
  TimeZone?: string
}

/**
 * ListProcessLineage请求参数结构体
 */
export interface ListProcessLineageRequest {
  /**
   * 任务唯一ID
   */
  ProcessId: string
  /**
   * 任务类型    //调度任务     SCHEDULE_TASK,     //集成任务     INTEGRATION_TASK,     //第三方上报     THIRD_REPORT,     //数据建模     TABLE_MODEL,     //模型创建指标     MODEL_METRIC,     //原子指标创建衍生指标     METRIC_METRIC,     //数据服务     DATA_SERVICE
   */
  ProcessType: string
  /**
   * 页码
   */
  PageNumber: number
  /**
   * 分页大小
   */
  PageSize: number
  /**
   * 来源：WEDATA|THIRD 默认WEDATA
   */
  Platform: string
}

/**
 * UpdateProject返回参数结构体
 */
export interface UpdateProjectResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateResourceFile请求参数结构体
 */
export interface CreateResourceFileRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 资源文件名称, 尽可能和上传文件名保持一致
   */
  ResourceName: string
  /**
   * cos存储桶名称, 可从GetResourceCosPath接口获取
   */
  BucketName: string
  /**
   * BucketName桶对应的cos存储桶区域
   */
  CosRegion: string
  /**
   * 项目中资源文件上传的路径, 取值示例: /wedata/qxxxm/, 根目录,请使用/即可
   */
  ParentFolderPath: string
  /**
   * - 上传文件及手填两种方式只能选择其一，如果两者均提供，取值顺序为文件>手填值
-   手填值必须是存在的cos路径, /datastudio/resource/ 为固定前缀, projectId 为项目ID,需传入具体值, parentFolderPath为父文件夹路径, name为文件名, 手填值取值示例:     /datastudio/resource/projectId/parentFolderPath/name 

   */
  ResourceFile: string
  /**
   * bundle客户端ID
   */
  BundleId?: string
  /**
   * bundle客户端信息
   */
  BundleInfo?: string
}

/**
 * ListDatabase请求参数结构体
 */
export interface ListDatabaseRequest {
  /**
   * 页码，从1开始
   */
  PageNumber: number
  /**
   * 分页大小，最大500
   */
  PageSize: number
  /**
   * 目录名称
   */
  CatalogName?: string
  /**
   * 数据源ID
   */
  DatasourceId?: number
  /**
   * 数据库名称搜索关键字
   */
  Keyword?: string
}

/**
 * GetOpsAlarmRule请求参数结构体
 */
export interface GetOpsAlarmRuleRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 告警规则唯一id
   */
  AlarmRuleId: string
}

/**
 * StopSQLScriptRun返回参数结构体
 */
export interface StopSQLScriptRunResponse {
  /**
   * 执行结果
   */
  Data?: SQLStopResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListOpsTasks返回参数结构体
 */
export interface ListOpsTasksResponse {
  /**
   * 任务列表
   */
  Data?: ListOpsTasksPage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListProjects请求参数结构体
 */
export interface ListProjectsRequest {
  /**
   * 项目id列表
   */
  ProjectIds?: Array<string>
  /**
   * 项目名或项目唯一标识名，支持模糊搜索
   */
  ProjectName?: string
  /**
   * 项目状态，可选值：0（禁用）、1（正常）
   */
  Status?: number
  /**
   * 项目模式，可选值：SIMPLE、STANDARD
   */
  ProjectModel?: string
  /**
   * 请求的数据页数，用于翻页
   */
  PageNumber?: number
  /**
   * 每页显示的条数，默认为 10 条
   */
  PageSize?: number
}

/**
 * CreateProjectMember返回参数结构体
 */
export interface CreateProjectMemberResponse {
  /**
   * 返回数据
   */
  Data?: ProjectResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListOpsAlarmRules返回参数结构体
 */
export interface ListOpsAlarmRulesResponse {
  /**
   * 告警信息信息响应
   */
  Data?: ListAlarmRulesResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateOpsAlarmRule请求参数结构体
 */
export interface UpdateOpsAlarmRuleRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 告警规则唯一id，通过接口GetAlarmRule/ListAlarmRule获取
   */
  AlarmRuleId: string
  /**
   * 告警规则新的规则名称
   */
  AlarmRuleName?: string
  /**
   * 监控对象类型, 
任务维度监控： 可按照任务/工作流/项目来配置：1.任务、2.工作流、3.项目（默认为1.任务） 
项目维度监控： 项目整体任务波动告警， 7：项目波动监控告警
   */
  MonitorObjectType?: number
  /**
   * 根据MonitorType 的设置传入不同的业务id，如下1（任务）： MonitorObjectIds为任务id列表2（工作流）： MonitorObjectIds 为工作流id列表(工作流id可从接口ListWorkflows获取)3（项目）： MonitorObjectIds为项目id列表
   */
  MonitorObjectIds?: Array<string>
  /**
   * 告警规则监控类型 failure：失败告警 ；overtime：超时告警 success：成功告警; backTrackingOrRerunSuccess: 补录重跑成功告警 backTrackingOrRerunFailure：补录重跑失败告警； 项目波动告警 projectFailureInstanceUpwardFluctuationAlarm： 当天失败实例数向上波动率超过阀值告警； projectFailureInstanceUpwardVolatilityAlarm：当天失败实例数向上波动量超过阀值告警 projectSuccessInstanceDownwardFluctuationAlarm：当天成功实例数向下波动率超过阀值告警； projectSuccessInstanceDownwardVolatilityAlarm： 当天成功实例数向下波动量超过阀值告警 projectFailureInstanceCountAlarm: 当天失败实例数超过阀值告警 projectFailureInstanceProportionAlarm： 当天失败实例数占比超过阀值告警 离线集成任务对账告警： reconciliationFailure： 离线对账任务失败告警 reconciliationOvertime： 离线对账任务运行超时告警 reconciliationMismatch： 数据对账任务不一致条数超过阀值告警
   */
  AlarmTypes?: Array<string>
  /**
   * 告警规则配置信息 成功告警无需配置；失败告警可以配置首次失败告警或者所有重试失败告警；超时配置需要配置超时类型及超时阀值；项目波动告警需要配置波动率及防抖周期配置
   */
  AlarmRuleDetail?: AlarmRuleDetail
  /**
   * 告警规则的启用状态0--禁用1--启用
   */
  Status?: number
  /**
   * 告警级别 1.普通、2.重要、3.紧急
   */
  AlarmLevel?: number
  /**
   * 告警接收人配置信息
   */
  AlarmGroups?: Array<AlarmGroup>
  /**
   * 告警描述信息
   */
  Description?: string
}

/**
 * 查询任务上游依赖详情分页
 */
export interface ParentDependencyConfigPage {
  /**
   * 结果总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 总页数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPageNumber?: number
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
  Items?: Array<OpsTaskDepend>
}

/**
 * ListUpstreamOpsTasks返回参数结构体
 */
export interface ListUpstreamOpsTasksResponse {
  /**
   * 上游任务详情
   */
  Data?: ParentDependencyConfigPage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteProjectMember请求参数结构体
 */
export interface DeleteProjectMemberRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 用户ID列表
   */
  UserUins: Array<string>
}

/**
 * GetSQLFolder返回参数结构体
 */
export interface GetSQLFolderResponse {
  /**
   * sql文件夹
   */
  Data?: SQLFolderNode
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
   * 项目创建人id
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatorUin?: string
  /**
   * 项目责任人id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectOwnerUin?: string
  /**
   * 项目状态：0：禁用，1：启用，-3:禁用中，2：启用中
   */
  Status?: number
  /**
   * 项目模式，SIMPLE：简单模式 STANDARD：标准模式
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectModel?: string
}

/**
 * DeleteOpsAlarmRule返回参数结构体
 */
export interface DeleteOpsAlarmRuleResponse {
  /**
   * 是否删除成功
   */
  Data?: DeleteAlarmRuleResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetTask请求参数结构体
 */
export interface GetTaskRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 任务ID
   */
  TaskId: string
}

/**
 * 告警信息
 */
export interface AlarmMessage {
  /**
   * 告警消息Id
   */
  AlarmMessageId?: number
  /**
   * 告警时间，同一条告警可能发送多次，只显示最新的告警时间
   */
  AlarmTime?: string
  /**
   * 任务名称
   */
  TaskName?: string
  /**
   * 任务Id
   */
  TaskId?: string
  /**
   * 任务的实例数据时间
   */
  CurRunDate?: string
  /**
   * 告警原因
   */
  AlarmReason?: string
  /**
   * 告警级别，1.普通， 2.重要，3.紧急
   */
  AlarmLevel?: number
  /**
   * 告警规则Id
   */
  AlarmRuleId?: string
  /**
   * 告警渠道 1.邮件，2.短信，3.微信，4.语音，5.企业微信，6.Http，7.企业微信群， 8.飞书群，9.钉钉群，10.Slack群,11.Teams群（默认1.邮件），7.企业微信群，8.飞书群，9.钉钉群，10.Slack群，11.Teams群
   */
  AlarmWays?: Array<string>
  /**
   * 告警接收人
   */
  AlarmRecipients?: Array<string>
}

/**
 * StartOpsTasks请求参数结构体
 */
export interface StartOpsTasksRequest {
  /**
   * 所属项目Id
   */
  ProjectId: string
  /**
   * 任务Id列表
   */
  TaskIds: Array<string>
  /**
   * 启动时是否补录上次暂停到当前的中间实例，默认false即不补录
   */
  EnableDataBackfill?: boolean
}

/**
 * ListCatalog返回参数结构体
 */
export interface ListCatalogResponse {
  /**
   * 分页数据
   */
  Data?: ListCatalogPage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetResourceFile请求参数结构体
 */
export interface GetResourceFileRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 资源文件ID,可通过ListResourceFiles接口获取
   */
  ResourceId: string
}

/**
 * 批量修改任务负责人结果
 */
export interface UpdateTasksOwner {
  /**
   * 修改任务责任人结果
   */
  Status?: boolean
}

/**
 * 实例列表分页实体
 */
export interface TaskInstancePage {
  /**
   * **总条数**
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * **总分页数**
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPageNumber?: number
  /**
   * 页码
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
  /**
   * 每页条目数
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * 数据列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<TaskInstance>
}

/**
 * ListColumnLineage返回参数结构体
 */
export interface ListColumnLineageResponse {
  /**
   * 分页数据
   */
  Data?: ListLineagePage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 创建数据探索脚本文件夹返回类
 */
export interface SqlCreateResult {
  /**
   * 文件夹id
注意：此字段可能返回 null，表示取不到有效值。
   */
  FolderId?: string
}

/**
 * 创建告警规则响应结果
 */
export interface CreateAlarmRuleData {
  /**
   * 告警规则唯一id
   */
  AlarmRuleId?: string
}

/**
 * 数据探索脚本业务处理实体
 */
export interface SQLScript {
  /**
   * 脚本id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScriptId?: string
  /**
   * 脚本名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScriptName?: string
  /**
   * 脚本所有者 uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUin?: string
  /**
   * 父文件夹path，/aaa/bbb/ccc
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentFolderPath?: string
  /**
   * 脚本配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScriptConfig?: SQLScriptConfig
  /**
   * 脚本内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScriptContent?: string
  /**
   * 最近一次操作人
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateUserUin?: string
  /**
   * 项目id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * 更新时间 yyyy-MM-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 创建时间 yyyy-MM-dd hh:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 权限范围：SHARED, PRIVATE
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccessScope?: string
  /**
   * 节点全路径，/aaa/bbb/ccc.ipynb，由各个节点的名称组成
注意：此字段可能返回 null，表示取不到有效值。
   */
  Path?: string
}

/**
 * 创建资源文件结果
 */
export interface CreateResourceFileResult {
  /**
   * 资源文件ID
   */
  ResourceId?: string
}

/**
 * ListUpstreamTaskInstances返回参数结构体
 */
export interface ListUpstreamTaskInstancesResponse {
  /**
   * 上游实例列表
   */
  Data?: TaskInstancePage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 键值对
 */
export interface KVPair {
  /**
   * 键名
注意：此字段可能返回 null，表示取不到有效值。
   */
  K?: string
  /**
   * 值，请勿传SQL(请求会被视为攻击接口)，如果有需要，请将SQL进行Base64转码并解码。
注意：此字段可能返回 null，表示取不到有效值。
   */
  V?: string
}

/**
 * CreateDataSource返回参数结构体
 */
export interface CreateDataSourceResponse {
  /**
   * 主键ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: DataSourceResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListUpstreamTaskInstances请求参数结构体
 */
export interface ListUpstreamTaskInstancesRequest {
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * **实例唯一标识**
   */
  InstanceKey: string
  /**
   * **时区** timeZone, 默认UTC+8
   */
  TimeZone?: string
  /**
   * **页码，整型**配合pageSize使用且不能小于1， 默认值1
   */
  PageNumber?: number
  /**
   * **每页显示的条数，默认为10，最小值为1、最大值为100
   */
  PageSize?: number
}

/**
 * 数据探索脚本文件树节点
 */
export interface CodeFolderNode {
  /**
   * 唯一标识
   */
  Id?: string
  /**
   * 名称
   */
  Title?: string
  /**
   * 类型 folder，script
   */
  Type?: string
  /**
   * 是否叶子节点
   */
  IsLeaf?: boolean
  /**
   * 业务参数	
注意：此字段可能返回 null，表示取不到有效值。
   */
  Params?: string
  /**
   * 权限范围: SHARED, PRIVATE
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccessScope?: string
  /**
   * 节点路径
   */
  Path?: string
  /**
   * 目录/文件责任人uin
   */
  OwnerUin?: string
  /**
   * 创建人
   */
  CreateUserUin?: string
  /**
   * 当前用户对节点拥有的权限	
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodePermission?: string
  /**
   * 子节点列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Children?: Array<CodeFolderNode>
  /**
   * 父文件夹路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentFolderPath?: string
}

/**
 * 资源组监控指标
 */
export interface ResourceGroupMetrics {
  /**
   * 资源组规格相关：cpu个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  CpuNum?: number
  /**
   * 资源组规格相关：磁盘规格
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiskVolume?: number
  /**
   * 资源组规格相关：内存大小，单位:G
注意：此字段可能返回 null，表示取不到有效值。
   */
  MemSize?: number
  /**
   * 资源组生命周期, 单位：天
注意：此字段可能返回 null，表示取不到有效值。
   */
  LifeCycle?: number
  /**
   * 资源组规格相关：最高并发
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaximumConcurrency?: number
  /**
   * 资源组状态

- 0 --- 初始化中
- 1 --- 运行中
- 2 --- 运行异常
- 3 --- 释放中
- 4 --- 已释放
- 5 --- 创建中
- 6 --- 创建失败
- 7 --- 更新中
- 8 --- 更新失败
- 9 --- 已到期
- 10 --- 释放失败
- 11 --- 使用中
- 12 --- 未使用
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 指标详情
   */
  MetricSnapshots?: Array<MetricData>
}

/**
 * UpdateSQLScript返回参数结构体
 */
export interface UpdateSQLScriptResponse {
  /**
   * 结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: SQLScript
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 创建文件夹结果
 */
export interface CreateFolderResult {
  /**
   * 创建成功的文件夹ID。如果创建失败则报错。
   */
  FolderId?: string
}

/**
 * LineageNodeInfo  血缘关系实体
 */
export interface LineageNodeInfo {
  /**
   * 当前资源
注意：此字段可能返回 null，表示取不到有效值。
   */
  Resource?: LineageResource
  /**
   * 关系
注意：此字段可能返回 null，表示取不到有效值。
   */
  Relation?: LineageRelation
}

/**
 * 目录信息
 */
export interface CatalogInfo {
  /**
   * 目录名称
   */
  Name?: string
}

/**
 * ListDownstreamTasks请求参数结构体
 */
export interface ListDownstreamTasksRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 任务ID
   */
  TaskId: string
  /**
   * 分页大小
   */
  PageNumber?: number
  /**
   * 分页页码
   */
  PageSize?: number
}

/**
 * DeleteWorkflowFolder请求参数结构体
 */
export interface DeleteWorkflowFolderRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 文件夹ID，可通过ListWorkflowFolders接口获取
   */
  FolderId: string
}

/**
 * RunSQLScript返回参数结构体
 */
export interface RunSQLScriptResponse {
  /**
   * 数据探索任务
   */
  Data?: JobDto
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 创建项目的结果信息
 */
export interface CreateProjectResult {
  /**
   * 项目id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
}

/**
 * GetTableColumns返回参数结构体
 */
export interface GetTableColumnsResponse {
  /**
   * 表字段列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<ColumnInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteOpsAlarmRule请求参数结构体
 */
export interface DeleteOpsAlarmRuleRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 告警规则唯一id，接口CreateAlarmRule返回
与AlarmRuleName二选一
   */
  AlarmRuleId: string
}

/**
 * 展示任务id和任务名称信息
 */
export interface BriefTask {
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
   * 任务创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 任务责任人id，一个任务可能有多个责任人
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUinList?: Array<string>
}

/**
 * 项目返回结果
 */
export interface ProjectResult {
  /**
   * 返回的结果 true/false
   */
  Status?: boolean
}

/**
 * ListDataBackfillInstances返回参数结构体
 */
export interface ListDataBackfillInstancesResponse {
  /**
   * 单个补录计划下的所有补录实例
   */
  Data?: BackfillInstanceCollection
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListLineagePage
 */
export interface ListProcessLineagePage {
  /**
   * 血缘pair列表
   */
  Items?: Array<LineagePair>
  /**
   * 分页总页数
   */
  PageCount?: number
  /**
   * 分页大小
   */
  PageSize?: number
  /**
   * 分页页码
   */
  PageNumber?: number
  /**
   * 记录总数
   */
  TotalCount?: number
}

/**
 * DisableProject返回参数结构体
 */
export interface DisableProjectResponse {
  /**
   * 无
   */
  Data?: ProjectResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLineage请求参数结构体
 */
export interface DeleteLineageRequest {
  /**
   * 需要删除的血缘关系列表
   */
  Relations: Array<LineagePair>
}

/**
 * CreateOpsAlarmRule请求参数结构体
 */
export interface CreateOpsAlarmRuleRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 告警规则名称
   */
  AlarmRuleName: string
  /**
   * 监控对象业务id列表，根据MonitorType 的设置传入不同的业务id，如下1（任务）： MonitorObjectIds为任务id列表2（工作流）： MonitorObjectIds 为工作流id列表(工作流id可从接口ListWorkflows获取)3（项目）：  MonitorObjectIds为项目id列表
   */
  MonitorObjectIds: Array<string>
  /**
   * 告警规则监控类型 failure：失败告警 ；overtime：超时告警 success：成功告警; backTrackingOrRerunSuccess: 补录重跑成功告警 backTrackingOrRerunFailure：补录重跑失败告警； 
项目波动告警 projectFailureInstanceUpwardFluctuationAlarm： 当天失败实例数向上波动率超过阀值告警； projectSuccessInstanceDownwardFluctuationAlarm：当天成功实例数向下波动率超过阀值告警； 
离线集成任务对账告警： reconciliationFailure： 离线对账任务失败告警 reconciliationOvertime： 离线对账任务运行超时告警 reconciliationMismatch： 数据对账任务不一致条数超过阀值告警
   */
  AlarmTypes: Array<string>
  /**
   * 告警接收人配置信息
   */
  AlarmGroups: Array<AlarmGroup>
  /**
   * 监控对象类型, 
任务维度监控： 可按照任务/工作流/项目来配置：1.任务、2.工作流、3.项目（默认为1.任务）
项目维度监控： 项目整体任务波动告警，  7：项目波动监控告警
   */
  MonitorObjectType?: number
  /**
   * 告警规则配置信息
成功告警无需配置；失败告警可以配置首次失败告警或者所有重试失败告警；超时配置需要配置超时类型及超时阀值；项目波动告警需要配置波动率及防抖周期配置
   */
  AlarmRuleDetail?: AlarmRuleDetail
  /**
   * 告警级别 1.普通、2.重要、3.紧急（默认1.普通）
   */
  AlarmLevel?: number
  /**
   * 告警规则描述
   */
  Description?: string
}

/**
 * SetSuccessTaskInstancesAsync返回参数结构体
 */
export interface SetSuccessTaskInstancesAsyncResponse {
  /**
   * 批量置成功操作的返回的异步id, 可以在接口GetAsyncJob获取具体执行详情
   */
  Data?: OpsAsyncResponse
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateSQLScript请求参数结构体
 */
export interface UpdateSQLScriptRequest {
  /**
   * 探索脚本Id
   */
  ScriptId: string
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 数据探索脚本配置
   */
  ScriptConfig?: SQLScriptConfig
  /**
   * 脚本内容, 需要用Base64编码
   */
  ScriptContent?: string
}

/**
 * 参数
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
 * DeleteDataSource返回参数结构体
 */
export interface DeleteDataSourceResponse {
  /**
   * 是否删除成功
   */
  Data?: DataSourceStatus
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 参数传递-引用参数
 */
export interface InTaskParameter {
  /**
   * 参数名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamKey: string
  /**
   * 参数描述：格式为 项目标识.任务名称.参数名；例：project_wedata_1.sh_250820_104107.pp_out
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamDesc: string
  /**
   * 父任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  FromTaskId: string
  /**
   * 父任务参数key
注意：此字段可能返回 null，表示取不到有效值。
   */
  FromParamKey: string
}

/**
 * ListResourceFolders请求参数结构体
 */
export interface ListResourceFoldersRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 资源文件夹绝对路径，取值示例
/wedata/test
   */
  ParentFolderPath: string
  /**
   * 数据页数，大于等于1。默认1
   */
  PageNumber?: number
  /**
   * 每页显示的数据条数，最小为10条，最大为200 条。默认10
   */
  PageSize?: number
}

/**
 * GetDataSource返回参数结构体
 */
export interface GetDataSourceResponse {
  /**
   * 数据源列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: DataSource
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetDataBackfillPlan返回参数结构体
 */
export interface GetDataBackfillPlanResponse {
  /**
   * 补录详情
   */
  Data?: DataBackfill
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * KillTaskInstancesAsync请求参数结构体
 */
export interface KillTaskInstancesAsyncRequest {
  /**
   * 项目Id
   */
  ProjectId: string
  /**
   * 实例id列表,可以从ListInstances中获取
   */
  InstanceKeyList: Array<string>
}

/**
 * ListDataBackfillInstances请求参数结构体
 */
export interface ListDataBackfillInstancesRequest {
  /**
   * 所属项目Id
   */
  ProjectId: string
  /**
   * 补录计划Id
   */
  DataBackfillPlanId: string
  /**
   * 任务Id
   */
  TaskId: string
  /**
   * 页码
   */
  PageNumber?: number
  /**
   * 分页大小
   */
  PageSize?: number
}

/**
 * CodeStudio文件夹对象操作结果
 */
export interface CodeStudioFolderActionResult {
  /**
   * 成功true，失败false
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: boolean
  /**
   * 文件夹ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  FolderId?: string
}

/**
 * GetResourceGroupMetrics请求参数结构体
 */
export interface GetResourceGroupMetricsRequest {
  /**
   * 执行资源组id
   */
  ResourceGroupId: string
  /**
   * 使用趋势开始时间(毫秒)，默认最近一小时
   */
  StartTime?: number
  /**
   * 使用趋势结束时间(毫秒)，默认当前
   */
  EndTime?: number
  /**
   * 指标维度

- all --- 全部
- task --- 任务指标
- system --- 系统指标
   */
  MetricType?: string
  /**
   * 指标采集粒度，单位分钟，默认 1分钟
   */
  Granularity?: number
}

/**
 * BusinessMetadata
 */
export interface BusinessMetadata {
  /**
   * 标签名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagNames?: Array<string>
}

/**
 * ListProjects返回参数结构体
 */
export interface ListProjectsResponse {
  /**
   * 项目列表
   */
  Data?: ProjectBrief
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 删除工作流结果
 */
export interface DeleteWorkflowResult {
  /**
   * 删除工作流是否成功
   */
  Status?: boolean
}

/**
 * 任务调度配置信息
 */
export interface TaskSchedulerConfiguration {
  /**
   * 周期类型：支持的类型为

ONEOFF_CYCLE: 一次性
YEAR_CYCLE: 年
MONTH_CYCLE: 月
WEEK_CYCLE: 周
DAY_CYCLE: 天
HOUR_CYCLE: 小时
MINUTE_CYCLE: 分钟
CRONTAB_CYCLE: crontab表达式类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleType?: string
  /**
   * 时区
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScheduleTimeZone?: string
  /**
   * 0 2 3 1,L,2 * ?	
注意：此字段可能返回 null，表示取不到有效值。
   */
  CrontabExpression?: string
  /**
   * 生效日期
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 结束日期
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 执行时间 左闭区间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutionStartTime?: string
  /**
   * 执行时间 右闭区间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutionEndTime?: string
  /**
   * 调度类型: 0 正常调度 1 空跑调度
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScheduleRunType?: number
  /**
   * 日历调度 取值为 0 和 1， 1为打开，0为关闭，默认为0
注意：此字段可能返回 null，表示取不到有效值。
   */
  CalendarOpen?: string
  /**
   * 日历调度 日历 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CalendarId?: string
  /**
   * 日历调度 日历名称, 需要从 DescribeScheduleCalendarPageList 中获取
注意：此字段可能返回 null，表示取不到有效值。
   */
  CalendarName?: string
  /**
   * 自依赖, 默认值 serial, 取值为：parallel(并行), serial(串行), orderly(有序)
注意：此字段可能返回 null，表示取不到有效值。
   */
  SelfDepend?: string
  /**
   * 上游依赖数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpstreamDependencyConfigList?: Array<DependencyTaskBrief>
  /**
   * 下游依赖数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  DownStreamDependencyConfigList?: Array<DependencyTaskBrief>
  /**
   * 事件数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventListenerList?: Array<EventListener>
  /**
   * 任务调度优先级 运行优先级 4高 5中 6低 , 默认:6
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunPriority?: number
  /**
   * 重试策略 重试等待时间,单位分钟: 默认: 5
注意：此字段可能返回 null，表示取不到有效值。
   */
  RetryWait?: number
  /**
   * 重试策略 最大尝试次数, 默认: 4
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxRetryAttempts?: number
  /**
   * 超时处理策略 运行耗时超时（单位：分钟）默认为 -1
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutionTTL?: number
  /**
   * 超时处理策略 等待总时长耗时超时（单位：分钟）默认为 -1
注意：此字段可能返回 null，表示取不到有效值。
   */
  WaitExecutionTotalTTL?: string
  /**
   * 重跑&补录配置, 默认为 ALL; , ALL 运行成功或失败后皆可重跑或补录, FAILURE 运行成功后不可重跑或补录，运行失败后可重跑或补录, NONE 运行成功或失败后皆不可重跑或补录;
注意：此字段可能返回 null，表示取不到有效值。
   */
  AllowRedoType?: string
  /**
   * 输出参数数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamTaskOutList?: Array<OutTaskParameter>
  /**
   * 输入参数数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamTaskInList?: Array<InTaskParameter>
  /**
   * 产出登记
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskOutputRegistryList?: Array<TaskDataRegistry>
  /**
   * **实例生成策略**
* T_PLUS_0: T+0生成,默认策略
* T_PLUS_1: T+1生成
注意：此字段可能返回 null，表示取不到有效值。
   */
  InitStrategy?: string
}

/**
 * UpdateWorkflowFolder返回参数结构体
 */
export interface UpdateWorkflowFolderResponse {
  /**
   * 更新文件夹结果，如果更新失败则报错。
   */
  Data?: UpdateFolderResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDataSource请求参数结构体
 */
export interface DeleteDataSourceRequest {
  /**
   * 项目id
   */
  ProjectId: string
  /**
   * 数据源id
   */
  Id: number
}

/**
 * StopSQLScriptRun请求参数结构体
 */
export interface StopSQLScriptRunRequest {
  /**
   * 查询id
   */
  JobId: string
  /**
   * 项目ID
   */
  ProjectId: string
}

/**
 * 告警规则详情
 */
export interface AlarmRuleData {
  /**
   * 告警规则id
   */
  AlarmRuleId?: string
  /**
   * 告警规则名称
   */
  AlarmRuleName?: string
  /**
   * 告警规则描述
   */
  Description?: string
  /**
   * 监控对象类型,
任务维度监控： 可按照任务/工作流/项目来配置：1.任务、2.工作流、3.项目（默认为1.任务） 
项目维度监控： 项目整体任务波动告警， 7：项目波动监控告警
   */
  MonitorObjectType?: number
  /**
   * 根据MonitorType 的设置传入不同的业务id，如下1（任务）： MonitorObjectIds为任务id列表2（工作流）： MonitorObjectIds 为工作流id列表(工作流id可从接口ListWorkflows获取)3（项目）： MonitorObjectIds为项目id列表
   */
  MonitorObjectIds?: Array<string>
  /**
   * 告警规则监控类型
failure：失败告警 ；overtime：超时告警 success：成功告警; backTrackingOrRerunSuccess: 补录重跑成功告警 backTrackingOrRerunFailure：补录重跑失败告警；
项目波动告警
projectFailureInstanceUpwardFluctuationAlarm： 当天失败实例数向上波动率超过阀值告警；
projectSuccessInstanceDownwardFluctuationAlarm：当天成功实例数向下波动率超过阀值告警；

离线集成任务对账告警：
reconciliationFailure： 离线对账任务失败告警
reconciliationOvertime： 离线对账任务运行超时告警
reconciliationMismatch： 数据对账任务不一致条数超过阀值告警

   */
  AlarmTypes?: Array<string>
  /**
   * 告警规则是否启用
0-- 禁用 1--启用
   */
  Status?: number
  /**
   * 告警规则配置信息 成功告警无需配置；失败告警可以配置首次失败告警或者所有重试失败告警；超时配置需要配置超时类型及超时阀值；项目波动告警需要配置波动率及防抖周期配置
   */
  AlarmRuleDetail?: AlarmRuleDetail
  /**
   * 告警级别 1.普通、2.重要、3.紧急
   */
  AlarmLevel?: number
  /**
   * 告警规则创建人uid
   */
  OwnerUin?: string
  /**
   * bundle 客户端绑定的告警规则:  为空是正常的告警规则，不为空则是对应bundle客户端绑定的规则
注意：此字段可能返回 null，表示取不到有效值。
   */
  BundleId?: string
  /**
   * bundleId不为空 则表示绑定的bundle客户端名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  BundleInfo?: string
  /**
   * 告警接收人配置列表
   */
  AlarmGroups?: Array<AlarmGroup>
}

/**
 * UpdateCodeFile返回参数结构体
 */
export interface UpdateCodeFileResponse {
  /**
   * 结果
   */
  Data?: CodeFile
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 告警疲劳告警配置
 */
export interface NotificationFatigue {
  /**
   * 告警次数
   */
  NotifyCount?: number
  /**
   * 告警间隔，分钟
   */
  NotifyInterval?: number
  /**
   * 免打扰时间，例如示例值
[{DaysOfWeek: [1, 2], StartTime: "00:00:00", EndTime: "09:00:00"}]	
每周一、周二的00:00到09:00免打扰
注意：此字段可能返回 null，表示取不到有效值。
   */
  QuietIntervals?: Array<AlarmQuietInterval>
}

/**
 * SQL脚本文件树节点
 */
export interface SQLFolderNode {
  /**
   * 唯一标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * 名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 类型 folder，script
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 父文件夹path，/aaa/bbb/ccc
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentFolderPath?: string
  /**
   * 是否叶子节点
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsLeaf?: boolean
  /**
   * 业务参数	
注意：此字段可能返回 null，表示取不到有效值。
   */
  Params?: string
  /**
   * 权限范围: SHARED, PRIVATE
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccessScope?: string
  /**
   * 节点路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  Path?: string
  /**
   * 创建人
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateUserUin?: string
  /**
   * 当前用户对节点拥有的权限	
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodePermission?: string
  /**
   * 子节点列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Children?: Array<SQLFolderNode>
  /**
   * 文件责任人
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUin?: string
}

/**
 * 数据库信息
 */
export interface DatabaseInfo {
  /**
   * 数据库GUID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Guid?: string
  /**
   * 数据库名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 数据库目录
注意：此字段可能返回 null，表示取不到有效值。
   */
  CatalogName?: string
  /**
   * 数据库描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 数据库位置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Location?: string
  /**
   * 数据库存储大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageSize?: number
}

/**
 * 任务版本列表信息
 */
export interface TaskVersion {
  /**
   * 保存时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 版本号
注意：此字段可能返回 null，表示取不到有效值。
   */
  VersionNum?: string
  /**
   * 创建人
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateUserUin?: string
  /**
   * 保存版本id
注意：此字段可能返回 null，表示取不到有效值。
   */
  VersionId?: string
  /**
   * 版本描述信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  VersionRemark?: string
  /**
   * 审批状态（只有提交版本有）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApproveStatus?: string
  /**
   * 生产状态（只有提交版本有）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 审批人（只有提交版本有）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApproveUserUin?: string
}

/**
 * GetCodeFile返回参数结构体
 */
export interface GetCodeFileResponse {
  /**
   * 代码文件详情
   */
  Data?: CodeFile
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资源文件分页
 */
export interface WorkflowFolderPage {
  /**
   * 数据页数，大于等于1
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
  /**
   * 每页显示的数据条数，最小为10条，最大为200 条
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
  /**
   * 文件夹总数
   */
  TotalCount?: number
  /**
   * 总页数
   */
  TotalPageNumber?: number
  /**
   * 文件夹列表
   */
  Items?: Array<WorkflowFolder>
}

/**
 * 任务代码
 */
export interface TaskCodeResult {
  /**
   * 代码内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  CodeInfo?: string
  /**
   * 代码文件大小，单位KB
注意：此字段可能返回 null，表示取不到有效值。
   */
  CodeFileSize?: string
}

/**
 * 补录计划日期范围
 */
export interface DataBackfillRange {
  /**
   * 开始日期，格式yyyy-MM-dd 表示从指定日期的00:00:00开始
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartDate?: string
  /**
   * 结束日期，格式yyyy-MM-dd，表示从指定日期的 23:59:59结束
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndDate?: string
  /**
   * 在[StartDate, EndDate]之间每天的开始时间点，格式HH:mm,只针对小时及周期小于小时的任务生效
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutionStartTime?: string
  /**
   * 在[StartDate, EndDate]之间每天的结束时间点，格式HH:mm,只针对小时及周期小于小时的任务生效
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutionEndTime?: string
}

/**
 * DeleteCodeFile返回参数结构体
 */
export interface DeleteCodeFileResponse {
  /**
   * 执行结果
   */
  Data?: CodeStudioFileActionResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务运维工作流列表详情
 */
export interface TaskOpsInfo {
  /**
   * 任务ID
   */
  TaskId?: string
  /**
   * 任务名
   */
  TaskName?: string
  /**
   * 负责人Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUin?: string
  /**
   * 任务状态:
- Y: 调度中
- F: 已下线
- O: 已暂停
- T: 下线中
- INVALID: 已失效
   */
  Status?: string
  /**
   * 文件夹id
   */
  FolderId?: string
  /**
   * 文件夹名字
   */
  FolderName?: string
  /**
   * 工作流id
   */
  WorkflowId?: string
  /**
   * 工作流名称
   */
  WorkflowName?: string
  /**
   * 项目id
   */
  ProjectId?: string
  /**
   * 项目名称
   */
  ProjectName?: string
  /**
   * 更新人名称
   */
  UpdateUserUin?: string
  /**
   * 任务类型Id：
   * 21:JDBC SQL
   * 23:TDSQL-PostgreSQL
   * 26:OfflineSynchronization
   * 30:Python
   * 31:PySpark
   * 33:Impala
   * 34:Hive SQL
   * 35:Shell
   * 36:Spark SQL
   * 38:Shell Form Mode
   * 39:Spark
   * 40:TCHouse-P
   * 41:Kettle
   * 42:Tchouse-X
   * 43:TCHouse-X SQL
   * 46:DLC Spark
   * 47:TiOne
   * 48:Trino
   * 50:DLC PySpark
   * 92:MapReduce
   * 130:Branch Node
   * 131:Merged Node
   * 132:Notebook
   * 133:SSH
   * 134:StarRocks
   * 137:For-each
   * 138:Setats SQL
   */
  TaskTypeId?: number
  /**
   * 任务类型描述
 - 通用数据同步
 - ETLTaskType
 - ETLTaskType
 - python
 - pyspark
 - HiveSQLTaskType
 - shell
 - SparkSQLTaskType
 - JDBCSQLTaskType
 - DLCTaskType
 - ImpalaTaskType
 - CDWTaskType
 - kettle
 - DLCSparkTaskType
 - TiOne机器学习
 - TrinoTaskType
 - DLCPyspark
 - spark
 - mr
 - shell脚本
 - hivesql脚本
 - 自定义业务通用
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskTypeDesc?: string
  /**
   * 任务周期类型
* ONEOFF_CYCLE: 一次性
* YEAR_CYCLE: 年
* MONTH_CYCLE: 月
* WEEK_CYCLE: 周
* DAY_CYCLE: 天
* HOUR_CYCLE: 小时
* MINUTE_CYCLE: 分钟
* CRONTAB_CYCLE: crontab表达式类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  CycleType?: string
  /**
   * 资源组id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutorGroupId?: string
  /**
   * 调度描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScheduleDesc?: string
  /**
   * 资源组名称
   */
  ExecutorGroupName?: string
  /**
   * 最新调度提交时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastSchedulerCommitTime?: string
  /**
   * 首次执行时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  FirstRunTime?: string
  /**
   * 最近一次提交时间
   */
  FirstSubmitTime?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 最近更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastUpdateTime?: string
}

/**
 * DeleteResourceGroup返回参数结构体
 */
export interface DeleteResourceGroupResponse {
  /**
   * 是否销毁成功
   */
  Data?: ResourceStatus
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * LineageProcess 血缘产出过程
 */
export interface LineageProcess {
  /**
   * 原始唯一ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProcessId: string
  /**
   * 任务类型
    //调度任务
    SCHEDULE_TASK,
    //集成任务
    INTEGRATION_TASK,
    //第三方上报
    THIRD_REPORT,
    //数据建模
    TABLE_MODEL,
    //模型创建指标
    MODEL_METRIC,
    //原子指标创建衍生指标
    METRIC_METRIC,
    //数据服务
    DATA_SERVICE
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProcessType: string
  /**
   * WEDATA, THIRD;
注意：此字段可能返回 null，表示取不到有效值。
   */
  Platform: string
  /**
   * 任务子类型
 SQL_TASK,
    //集成实时任务血缘
    INTEGRATED_STREAM,
    //集成离线任务血缘
    INTEGRATED_OFFLINE;
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProcessSubType?: string
  /**
   * 额外扩展参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProcessProperties?: Array<LineageProperty>
  /**
   * 血缘任务唯一节点ID
   */
  LineageNodeId?: string
}

/**
 * GetTaskInstanceLog返回参数结构体
 */
export interface GetTaskInstanceLogResponse {
  /**
   * 调度实例详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: InstanceLog
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListCodeFolderContents返回参数结构体
 */
export interface ListCodeFolderContentsResponse {
  /**
   * 结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<CodeFolderNode>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 依赖任务信息

取值说明表：

| 当前任务周期类型 | 上游任务周期类型 | 配置方式 | MainCyclicConfig取值 | 时间维度/实例范围           | SubordinateCyclicConfig取值       | offset取值             |
| ---------------- | ---------------- | -------- | -------------------- | --------------------------- | --------------------------------- | ---------------------- |
| HOUR_CYCLE       | YEAR_CYCLE       | 推荐策略 | YEAR                 | 按年/本年                   | CURRENT_YEAR                      | 无                     |
| MINUTE_CYCLE     | MONTH_CYCLE      | 推荐策略 | MONTH                | 按月/本月                   | CURRENT_MONTH                     | 无                     |
| DAY_CYCLE        | WEEK_CYCLE       | 推荐策略 | WEEK                 | 按周/本周                   | CURRENT_WEEK                      | 无                     |
| DAY_CYCLE        | WEEK_CYCLE       | 推荐策略 | DAY                  | 按天/最近一次数据时间的实例 | RECENT_DATE                       | 无                     |
| HOUR_CYCLE       | HOUR_CYCLE       | 推荐策略 | HOUR                 | 按小时/最近实例             | CURRENT_HOUR                      | 无                     |
| HOUR_CYCLE       | HOUR_CYCLE       | 推荐策略 | HOUR                 | 按小时/前一周期             | PREVIOUS_HOUR_CYCLE               | 无                     |
| HOUR_CYCLE       | DAY_CYCLE        | 推荐策略 | DAY                  | 按天/当天                   | CURRENT_DAY                       | 无                     |
| WEEK_CYCLE       | DAY_CYCLE        | 推荐策略 | WEEK                 | 按周/上周                   | PREVIOUS_WEEK                     | 无                     |
| WEEK_CYCLE       | DAY_CYCLE        | 推荐策略 | WEEK                 | 按周/上周五                 | PREVIOUS_FRIDAY                   | 无                     |
| WEEK_CYCLE       | DAY_CYCLE        | 推荐策略 | WEEK                 | 按周/上周日                 | PREVIOUS_WEEKEND                  | 无                     |
| WEEK_CYCLE       | DAY_CYCLE        | 推荐策略 | WEEK                 | 按周/本周                   | CURRENT_WEEK                      | 无                     |
| WEEK_CYCLE       | DAY_CYCLE        | 推荐策略 | DAY                  | 按天/当天         、          | CURRENT_DAY                       | 无                     |
| WEEK_CYCLE       | DAY_CYCLE        | 推荐策略 | DAY                  | 按天/前一天                 | PREVIOUS_DAY                      | 无                     |
| WEEK_CYCLE       | ONEOFF_CYCLE     | 推荐策略 | WEEK                 | 按周/本周                   | CURRENT_WEEK                      | 无                     |
| HOUR_CYCLE       | MINUTE_CYCLE     | 推荐策略 | HOUR                 | 按小时/前一个小时(-60,0]    | PREVIOUS_HOUR_LATER_OFFSET_MINUTE | 无                     |
| HOUR_CYCLE       | MINUTE_CYCLE     | 推荐策略 | HOUR                 | 按小时/前一个小时           | PREVIOUS_HOUR                     | 无                     |
| HOUR_CYCLE       | MINUTE_CYCLE     | 推荐策略 | HOUR                 | 按小时/当前小时             | CURRENT_HOUR                      | 无                     |
| YEAR_CYCLE       | WEEK_CYCLE       | 推荐策略 | YEAR                 | 按年/本年                   | CURRENT_YEAR                      | 无                     |
| WEEK_CYCLE       | YEAR_CYCLE       | 推荐策略 | YEAR                 | 按年/本年                   | CURRENT_YEAR                      | 无                     |
| MINUTE_CYCLE     | YEAR_CYCLE       | 推荐策略 | YEAR                 | 按年/本年                   | CURRENT_YEAR                      | 无                     |
| WEEK_CYCLE       | HOUR_CYCLE       | 推荐策略 | WEEK                 | 按周/上周                   | PREVIOUS_WEEK                     | 无                     |
| WEEK_CYCLE       | HOUR_CYCLE       | 推荐策略 | WEEK                 | 按周/本周                   | CURRENT_WEEK                      | 无                     |
| MINUTE_CYCLE     | HOUR_CYCLE       | 推荐策略 | HOUR                 | 按小时/当前小时             | CURRENT_HOUR                      | 无                     |
| HOUR_CYCLE       | MONTH_CYCLE      | 推荐策略 | MONTH                | 按月/本月                   | CURRENT_MONTH                     | 无                     |
| MONTH_CYCLE      | HOUR_CYCLE       | 推荐策略 | MONTH                | 按月/上月                   | PREVIOUS_MONTH                    | 无                     |
| MONTH_CYCLE      | HOUR_CYCLE       | 推荐策略 | MONTH                | 按月/本月                   | CURRENT_MONTH                     | 无                     |
| MONTH_CYCLE      | ONEOFF_CYCLE     | 推荐策略 | MONTH                | 按月/当月                   | CURRENT_MONTH                     | 无                     |
| DAY_CYCLE        | MONTH_CYCLE      | 推荐策略 | MONTH                | 按月/本月                   | CURRENT_MONTH                     | 无                     |
| DAY_CYCLE        | MONTH_CYCLE      | 推荐策略 | DAY                  | 按天/最近一次数据时间的实例 | RECENT_DATE                       | 无                     |
| MONTH_CYCLE      | YEAR_CYCLE       | 推荐策略 | YEAR                 | 按年/本年                   | CURRENT_YEAR                      | 无                     |
| ONEOFF_CYCLE     | WEEK_CYCLE       | 推荐策略 | WEEK                 | 按周/本周                   | CURRENT_WEEK                      | 无                     |
| MINUTE_CYCLE     | MINUTE_CYCLE     | 推荐策略 | MINUTE               | 按分钟/当前分钟             | CURRENT_MINUTE                    | 无                     |
| MINUTE_CYCLE     | MINUTE_CYCLE     | 推荐策略 | MINUTE               | 按分钟/前一周期             | PREVIOUS_MINUTE_CYCLE             | 无                     |
| YEAR_CYCLE       | MINUTE_CYCLE     | 推荐策略 | YEAR                 | 按年/本年                   | CURRENT_YEAR                      | 无                     |
| ONEOFF_CYCLE     | DAY_CYCLE        | 推荐策略 | DAY                  | 按天/当天                   | CURRENT_DAY                       | 无                     |
| DAY_CYCLE        | MINUTE_CYCLE     | 推荐策略 | DAY                  | 按天/前一天(-24 * 60,0]     | PREVIOUS_DAY_LATER_OFFSET_MINUTE  | 无                     |
| DAY_CYCLE        | MINUTE_CYCLE     | 推荐策略 | DAY                  | 按天/前一天                 | PREVIOUS_DAY                      | 无                     |
| DAY_CYCLE        | MINUTE_CYCLE     | 推荐策略 | DAY                  | 按天/当天                   | CURRENT_DAY                       | 无                     |
| MINUTE_CYCLE     | DAY_CYCLE        | 推荐策略 | DAY                  | 按天/当天                   | CURRENT_DAY                       | 无                     |
| WEEK_CYCLE       | WEEK_CYCLE       | 推荐策略 | WEEK                 | 按周/本周                   | CURRENT_WEEK                      | 无                     |
| WEEK_CYCLE       | WEEK_CYCLE       | 推荐策略 | DAY                  | 按天/最近一次数据时间的实例 | RECENT_DATE                       | 无                     |
| YEAR_CYCLE       | YEAR_CYCLE       | 推荐策略 | DAY                  | 按天/最近一次数据时间的实例 | RECENT_DATE                       | 无                     |
| YEAR_CYCLE       | YEAR_CYCLE       | 推荐策略 | YEAR                 | 按年/本年                   | CURRENT_YEAR                      | 无                     |
| YEAR_CYCLE       | HOUR_CYCLE       | 推荐策略 | YEAR                 | 按年/本年                   | CURRENT_YEAR                      | 无                     |
| MINUTE_CYCLE     | WEEK_CYCLE       | 推荐策略 | WEEK                 | 按周/本周                   | CURRENT_WEEK                      | 无                     |
| ONEOFF_CYCLE     | MINUTE_CYCLE     | 推荐策略 | DAY                  | 按天/当天                   | CURRENT_DAY                       | 无                     |
| HOUR_CYCLE       | ONEOFF_CYCLE     | 推荐策略 | DAY                  | 按天/当天                   | CURRENT_DAY                       | 无                     |
| WEEK_CYCLE       | MINUTE_CYCLE     | 推荐策略 | WEEK                 | 按周/上周                   | PREVIOUS_WEEK                     | 无                     |
| WEEK_CYCLE       | MINUTE_CYCLE     | 推荐策略 | WEEK                 | 按周/本周                   | CURRENT_WEEK                      | 无                     |
| DAY_CYCLE        | HOUR_CYCLE       | 推荐策略 | DAY                  | 按天/前一天(-24,0]          | PREVIOUS_DAY_LATER_OFFSET_HOUR    | 无                     |
| DAY_CYCLE        | HOUR_CYCLE       | 推荐策略 | DAY                  | 按天/前一天[-24,0)          | PREVIOUS_DAY                      | 无                     |
| DAY_CYCLE        | HOUR_CYCLE       | 推荐策略 | DAY                  | 按天/当天                   | CURRENT_DAY                       | 无                     |
| YEAR_CYCLE       | MONTH_CYCLE      | 推荐策略 | DAY                  | 按天/最近一次数据时间的实例 | RECENT_DATE                       | 无                     |
| YEAR_CYCLE       | MONTH_CYCLE      | 推荐策略 | MONTH                | 按月/本年所有月             | ALL_MONTH_OF_YEAR                 | 无                     |
| YEAR_CYCLE       | MONTH_CYCLE      | 推荐策略 | MONTH                | 按月/本月                   | CURRENT_MONTH                     | 无                     |
| YEAR_CYCLE       | MONTH_CYCLE      | 推荐策略 | MONTH                | 按月/上月                   | PREVIOUS_MONTH                    | 无                     |
| YEAR_CYCLE       | MONTH_CYCLE      | 推荐策略 | MONTH                | 按月/上月末                 | PREVIOUS_END_OF_MONTH             | 无                     |
| YEAR_CYCLE       | MONTH_CYCLE      | 推荐策略 | MONTH                | 按月/上月初                 | PREVIOUS_BEGIN_OF_MONTH           | 无                     |
| ONEOFF_CYCLE     | YEAR_CYCLE       | 推荐策略 | YEAR                 | 按年/本年                   | CURRENT_YEAR                      | 无                     |
| DAY_CYCLE        | DAY_CYCLE        | 推荐策略 | DAY                  | 按天/当天                   | CURRENT_DAY                       | 无                     |
| ONEOFF_CYCLE     | HOUR_CYCLE       | 推荐策略 | DAY                  | 按天/当天                   | CURRENT_DAY                       | 无                     |
| DAY_CYCLE        | ONEOFF_CYCLE     | 推荐策略 | DAY                  | 按天/当天                   | CURRENT_DAY                       | 无                     |
| MINUTE_CYCLE     | ONEOFF_CYCLE     | 推荐策略 | DAY                  | 按天/当天                   | CURRENT_DAY                       | 无                     |
| WEEK_CYCLE       | MONTH_CYCLE      | 推荐策略 | MONTH                | 按月/本月                   | CURRENT_MONTH                     | 无                     |
| WEEK_CYCLE       | MONTH_CYCLE      | 推荐策略 | DAY                  | 按天/最近一次数据时间的实例 | RECENT_DATE                       | 无                     |
| YEAR_CYCLE       | ONEOFF_CYCLE     | 推荐策略 | YEAR                 | 按年/当年                   | CURRENT_YEAR                      | 无                     |
| MONTH_CYCLE      | DAY_CYCLE        | 推荐策略 | MONTH                | 按月/上月                   | PREVIOUS_MONTH                    | 无                     |
| MONTH_CYCLE      | DAY_CYCLE        | 推荐策略 | MONTH                | 按月/上月末                 | PREVIOUS_END_OF_MONTH             | 无                     |
| MONTH_CYCLE      | DAY_CYCLE        | 推荐策略 | MONTH                | 按月/本月                   | CURRENT_MONTH                     | 无                     |
| MONTH_CYCLE      | DAY_CYCLE        | 推荐策略 | DAY                  | 按天/当天                   | CURRENT_DAY                       | 无                     |
| MONTH_CYCLE      | DAY_CYCLE        | 推荐策略 | DAY                  | 按天/前一天                 | PREVIOUS_DAY                      | 无                     |
| YEAR_CYCLE       | DAY_CYCLE        | 推荐策略 | DAY                  | 按天/本年所有天             | ALL_DAY_OF_YEAR                   | 无                     |
| YEAR_CYCLE       | DAY_CYCLE        | 推荐策略 | DAY                  | 按天/当天                   | CURRENT_DAY                       | 无                     |
| YEAR_CYCLE       | DAY_CYCLE        | 推荐策略 | DAY                  | 按天/前一天                 | PREVIOUS_DAY                      | 无                     |
| HOUR_CYCLE       | WEEK_CYCLE       | 推荐策略 | WEEK                 | 按周/本周                   | CURRENT_WEEK                      | 无                     |
| MONTH_CYCLE      | MONTH_CYCLE      | 推荐策略 | MONTH                | 按月/当月                   | CURRENT_MONTH                     | 无                     |
| MONTH_CYCLE      | MONTH_CYCLE      | 推荐策略 | DAY                  | 按天/最近一次数据时间的实例 | RECENT_DATE                       | 无                     |
| MONTH_CYCLE      | MINUTE_CYCLE     | 推荐策略 | MONTH                | 按月/上月                   | PREVIOUS_MONTH                    | 无                     |
| MONTH_CYCLE      | MINUTE_CYCLE     | 推荐策略 | MONTH                | 按月/本月                   | CURRENT_MONTH                     | 无                     |
| MONTH_CYCLE      | WEEK_CYCLE       | 推荐策略 | MONTH                | 按月/上月                   | PREVIOUS_MONTH                    | 无                     |
| MONTH_CYCLE      | WEEK_CYCLE       | 推荐策略 | MONTH                | 按月/本月                   | CURRENT_MONTH                     | 无                     |
| MONTH_CYCLE      | WEEK_CYCLE       | 推荐策略 | DAY                  | 按天/最近一次数据时间的实例 | RECENT_DATE                       | 无                     |
| DAY_CYCLE        | YEAR_CYCLE       | 推荐策略 | YEAR                 | 按年/本年                   | CURRENT_YEAR                      | 无                     |
| DAY_CYCLE        | YEAR_CYCLE       | 推荐策略 | DAY                  | 按天/最近一次数据时间的实例 | RECENT_DATE                       | 无                     |
| ONEOFF_CYCLE     | ONEOFF_CYCLE     | 推荐策略 | DAY                  | 按天/当天                   | CURRENT_DAY                       | 无                     |
| ONEOFF_CYCLE     | MONTH_CYCLE      | 推荐策略 | MONTH                | 按月/本月                   | CURRENT_MONTH                     | 无                     |
| CRONTAB_CYCLE    | CRONTAB_CYCLE    | 推荐策略 | CRONTAB              | 无                          | CURRENT                           | 无                     |
| HOUR_CYCLE       | HOUR_CYCLE       | 自定义   | RANGE_HOUR           | 区间(小时)                  | 无                                | 逗号分隔的整数，如-1,0 |
| HOUR_CYCLE       | DAY_CYCLE        | 自定义   | RANGE_DAY            | 区间(天)                    | 无                                | 逗号分隔的整数，如-1,0 |
| WEEK_CYCLE       | DAY_CYCLE        | 自定义   | RANGE_DAY            | 区间(天)                    | 无                                | 逗号分隔的整数，如-1,0 |
| HOUR_CYCLE       | MINUTE_CYCLE     | 自定义   | RANGE_MINUTE         | 区间(分钟)                  | 无                                | 逗号分隔的整数，如-1,0 |
| WEEK_CYCLE       | HOUR_CYCLE       | 自定义   | RANGE_HOUR           | 区间(小时)                  | 无                                | 逗号分隔的整数，如-1,0 |
| MINUTE_CYCLE     | HOUR_CYCLE       | 自定义   | RANGE_HOUR           | 区间(小时)                  | 无                                | 逗号分隔的整数，如-1,0 |
| MONTH_CYCLE      | HOUR_CYCLE       | 自定义   | RANGE_HOUR           | 区间(小时)                  | 无                                | 逗号分隔的整数，如-1,0 |
| MINUTE_CYCLE     | MINUTE_CYCLE     | 自定义   | RANGE_MINUTE         | 区间(分钟)                  | 无                                | 逗号分隔的整数，如-1,0 |
| YEAR_CYCLE       | MINUTE_CYCLE     | 自定义   | RANGE_MINUTE         | 区间(分钟)                  | 无                                | 逗号分隔的整数，如-1,0 |
| DAY_CYCLE        | MINUTE_CYCLE     | 自定义   | RANGE_MINUTE         | 区间(分钟)                  | 无                                | 逗号分隔的整数，如-1,0 |
| MINUTE_CYCLE     | DAY_CYCLE        | 自定义   | RANGE_DAY            | 区间(天)                    | 无                                | 逗号分隔的整数，如-1,0 |
| YEAR_CYCLE       | HOUR_CYCLE       | 自定义   | RANGE_HOUR           | 区间(小时)                  | 无                                | 逗号分隔的整数，如-1,0 |
| WEEK_CYCLE       | MINUTE_CYCLE     | 自定义   | RANGE_MINUTE         | 区间(分钟)                  | 无                                | 逗号分隔的整数，如-1,0 |
| DAY_CYCLE        | HOUR_CYCLE       | 自定义   | RANGE_HOUR           | 区间(小时)                  | 无                                | 逗号分隔的整数，如-1,0 |
| DAY_CYCLE        | DAY_CYCLE        | 自定义   | RANGE_DAY            | 区间(天)                    | 无                                | 逗号分隔的整数，如-1,0 |
| MONTH_CYCLE      | DAY_CYCLE        | 自定义   | RANGE_DAY            | 区间(天)                    | 无                                | 逗号分隔的整数，如-1,0 |
| YEAR_CYCLE       | DAY_CYCLE        | 自定义   | RANGE_DAY            | 区间(天)                    | 无                                | 逗号分隔的整数，如-1,0 |
| MONTH_CYCLE      | MINUTE_CYCLE     | 自定义   | RANGE_MINUTE         | 区间(分钟)                  | 无                                | 逗号分隔的整数，如-1,0 |
| HOUR_CYCLE       | HOUR_CYCLE       | 自定义   | LIST_HOUR            | 列表(小时)                  | 无                                | 逗号分隔的整数，如-1,0 |
| HOUR_CYCLE       | DAY_CYCLE        | 自定义   | LIST_DAY             | 列表(天)                    | 无                                | 逗号分隔的整数，如-1,0 |
| WEEK_CYCLE       | DAY_CYCLE        | 自定义   | LIST_DAY             | 列表(天)                    | 无                                | 逗号分隔的整数，如-1,0 |
| HOUR_CYCLE       | MINUTE_CYCLE     | 自定义   | LIST_MINUTE          | 列表(分钟)                  | 无                                | 逗号分隔的整数，如-1,0 |
| WEEK_CYCLE       | HOUR_CYCLE       | 自定义   | LIST_HOUR            | 列表(小时)                  | 无                                | 逗号分隔的整数，如-1,0 |
| MINUTE_CYCLE     | HOUR_CYCLE       | 自定义   | LIST_HOUR            | 列表(小时)                  | 无                                | 逗号分隔的整数，如-1,0 |
| MONTH_CYCLE      | HOUR_CYCLE       | 自定义   | LIST_HOUR            | 列表(小时)                  | 无                                | 逗号分隔的整数，如-1,0 |
| MINUTE_CYCLE     | MINUTE_CYCLE     | 自定义   | LIST_MINUTE          | 列表(分钟)                  | 无                                | 逗号分隔的整数，如-1,0 |
| YEAR_CYCLE       | MINUTE_CYCLE     | 自定义   | LIST_MINUTE          | 列表(分钟)                  | 无                                | 逗号分隔的整数，如-1,0 |
| DAY_CYCLE        | MINUTE_CYCLE     | 自定义   | LIST_MINUTE          | 列表(分钟)                  | 无                                | 逗号分隔的整数，如-1,0 |
| MINUTE_CYCLE     | DAY_CYCLE        | 自定义   | LIST_DAY             | 列表(天)                    | 无                                | 逗号分隔的整数，如-1,0 |
| YEAR_CYCLE       | HOUR_CYCLE       | 自定义   | LIST_HOUR            | 列表(小时)                  | 无                                | 逗号分隔的整数，如-1,0 |
| WEEK_CYCLE       | MINUTE_CYCLE     | 自定义   | LIST_MINUTE          | 列表(分钟)                  | 无                                | 逗号分隔的整数，如-1,0 |
| DAY_CYCLE        | HOUR_CYCLE       | 自定义   | LIST_HOUR            | 列表(小时)                  | 无                                | 逗号分隔的整数，如-1,0 |
| DAY_CYCLE        | DAY_CYCLE        | 自定义   | LIST_DAY             | 列表(天)                    | 无                                | 逗号分隔的整数，如-1,0 |
| MONTH_CYCLE      | DAY_CYCLE        | 自定义   | LIST_DAY             | 列表(天)                    | 无                                | 逗号分隔的整数，如-1,0 |
| YEAR_CYCLE       | DAY_CYCLE        | 自定义   | LIST_DAY             | 列表(天)                    | 无                                | 逗号分隔的整数，如-1,0 |
| MONTH_CYCLE      | MINUTE_CYCLE     | 自定义   | LIST_MINUTE          | 列表(分钟)                  | 无                                | 逗号分隔的整数，如-1,0 |
 */
export interface DependencyTaskBrief {
  /**
   * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId: string
  /**
   * 主依赖配置，取值为：

* CRONTAB
* DAY
* HOUR
* LIST_DAY
* LIST_HOUR
* LIST_MINUTE
* MINUTE
* MONTH
* RANGE_DAY
* RANGE_HOUR
* RANGE_MINUTE
* WEEK
* YEAR
注意：此字段可能返回 null，表示取不到有效值。
   */
  MainCyclicConfig: string
  /**
   * 次依赖配置，取值为：
* ALL_DAY_OF_YEAR
* ALL_MONTH_OF_YEAR
* CURRENT
* CURRENT_DAY
* CURRENT_HOUR
* CURRENT_MINUTE
* CURRENT_MONTH
* CURRENT_WEEK
* CURRENT_YEAR
* PREVIOUS_BEGIN_OF_MONTH
* PREVIOUS_DAY
* PREVIOUS_DAY_LATER_OFFSET_HOUR
* PREVIOUS_DAY_LATER_OFFSET_MINUTE
* PREVIOUS_END_OF_MONTH
* PREVIOUS_FRIDAY
* PREVIOUS_HOUR
* PREVIOUS_HOUR_CYCLE
* PREVIOUS_HOUR_LATER_OFFSET_MINUTE
* PREVIOUS_MINUTE_CYCLE
* PREVIOUS_MONTH
* PREVIOUS_WEEK
* PREVIOUS_WEEKEND
* RECENT_DATE
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubordinateCyclicConfig?: string
  /**
   * 区间、列表模式下的偏移量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Offset?: string
  /**
   * 依赖执行策略
注意：此字段可能返回 null，表示取不到有效值。
   */
  DependencyStrategy?: DependencyStrategyTask
}

/**
 * UpdateCodeFolder请求参数结构体
 */
export interface UpdateCodeFolderRequest {
  /**
   * 项目ID
   */
  ProjectId: string
  /**
   * 文件夹ID，参数值来自CreateCodeFolder接口的返回
   */
  FolderId: string
  /**
   * 文件夹名称
   */
  FolderName: string
}

/**
 * 资源文件分页
 */
export interface ResourceFilePage {
  /**
   * 任务集合信息
   */
  Items?: Array<ResourceFileItem>
  /**
   * 总页数
   */
  TotalPageNumber?: number
  /**
   * 总数量
   */
  TotalCount?: number
  /**
   * 当前页
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNumber?: number
  /**
   * 每页显示数
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageSize?: number
}

/**
 * 资源组操作结果
 */
export interface ResourceResult {
  /**
   * 是否成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: boolean
  /**
   * 资源组id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceGroupId?: string
}

/**
 * ColumnInfo
 */
export interface ColumnInfo {
  /**
   * 字段类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 字段名称
   */
  Name?: string
  /**
   * 字段长度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Length?: number
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
}

/**
 * GetOpsWorkflow返回参数结构体
 */
export interface GetOpsWorkflowResponse {
  /**
   * 工作流调度详情
   */
  Data?: OpsWorkflowDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据源操作结果
 */
export interface DataSourceStatus {
  /**
   * 数据源操作状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: boolean
}

/**
 * GetTable请求参数结构体
 */
export interface GetTableRequest {
  /**
   * 表GUID
   */
  TableGuid: string
}

/**
 * CreateResourceFolder返回参数结构体
 */
export interface CreateResourceFolderResponse {
  /**
   * 创建文件夹结果，如果创建失败则报错。
   */
  Data?: CreateFolderResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
