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
 * 数据库对象
 */
export interface DatabaseInfo {
  /**
   * 数据库名称。
   */
  DatabaseName: string

  /**
      * 数据库描述信息，长度 0~256。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Comment?: string

  /**
      * 数据库属性列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Properties?: Array<Property>
}

/**
 * DescribeTasks请求参数结构体
 */
export interface DescribeTasksRequest {
  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
      * 过滤条件，如下支持的过滤类型，传参Name应为以下其中一个,每个过滤参数支持的过滤值不超过5个。
task-id - String - （任务ID过滤）task-id取值形如：e386471f-139a-4e59-877f-50ece8135b99。
task-state - String - （任务状态过滤）取值范围 0(初始化)， 1(运行中)， 2(成功)， -1(失败)。
task-sql-keyword - String - （SQL语句关键字）取值形如：DROP TABLE。
      */
  Filters?: Array<Filter>

  /**
   * 排序字段，支持如下字段类型，create-time
   */
  SortBy?: string

  /**
   * 排序方式，desc表示正序，asc表示反序
   */
  Sorting?: string

  /**
   * 起始时间点，格式为yyyy-mm-dd HH:MM:SS。
   */
  StartTime?: string

  /**
   * 结束时间点，格式为yyyy-mm-dd HH:MM:SS时间跨度在(0,30天]，支持最近45天数据查询。
   */
  EndTime?: string
}

/**
 * script实例。
 */
export interface Script {
  /**
      * 脚本Id，长度36字节。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ScriptId: string

  /**
      * 脚本名称，长度0-25。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ScriptName: string

  /**
      * 脚本描述，长度0-50。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ScriptDesc: string

  /**
      * 默认关联数据库。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DatabaseName: string

  /**
      * SQL描述，长度0-10000。
注意：此字段可能返回 null，表示取不到有效值。
      */
  SQLStatement: string

  /**
      * 更新时间戳， 单位：ms。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: number
}

/**
 * DescribeDatabases请求参数结构体
 */
export interface DescribeDatabasesRequest {
  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit?: number

  /**
   * 数据偏移量，从0开始，默认为0。
   */
  Offset?: number

  /**
   * 模糊匹配，库名关键字。
   */
  KeyWord?: string
}

/**
 * DescribeTable请求参数结构体
 */
export interface DescribeTableRequest {
  /**
   * 查询对象表名称
   */
  TableName: string

  /**
   * 查询表所在的数据库名称。
   */
  DatabaseName: string
}

/**
 * 数据格式其它类型。
 */
export interface Other {
  /**
   * 枚举类型，默认值为Json，可选值为[Json, Parquet, ORC, AVRD]之一。
   */
  Format: string
}

/**
 * 任务实例。
 */
export interface TaskResponseInfo {
  /**
   * 任务所属Database的名称。
   */
  DatabaseName: string

  /**
   * 任务数据量。
   */
  DataAmount: number

  /**
   * 任务Id。
   */
  Id: string

  /**
   * 计算时长，单位： ms。
   */
  UsedTime: number

  /**
   * 任务输出路径。
   */
  OutputPath: string

  /**
   * 任务创建时间。
   */
  CreateTime: string

  /**
   * 任务状态, 0 初始化， 1 执行中， 2 执行成功，3 数据写入中，-1 执行失败。
   */
  State: number

  /**
   * 任务SQL类型，DDL|DML等
   */
  SQLType: string

  /**
   * 任务SQL语句
   */
  SQL: string

  /**
   * 结果是否过期。
   */
  ResultExpired: boolean

  /**
   * 数据影响统计信息。
   */
  RowAffectInfo: string

  /**
      * 任务结果数据表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DataSet: string

  /**
   * 失败信息, 例如：errorMessage。该字段已废弃。
   */
  Error: string

  /**
   * 任务执行进度num/100(%)
   */
  Percentage: number

  /**
   * 任务执行输出信息。
   */
  OutputMessage: string
}

/**
 * DescribeViews返回参数结构体
 */
export interface DescribeViewsResponse {
  /**
   * 视图对象列表。
   */
  ViewList: Array<ViewResponseInfo>

  /**
   * 实例总数。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTask返回参数结构体
 */
export interface CreateTaskResponse {
  /**
      * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据库和数据表属性信息
 */
export interface Property {
  /**
   * 属性key名称。
   */
  Key: string

  /**
   * 属性key对应的value。
   */
  Value: string
}

/**
 * DeleteScript请求参数结构体
 */
export interface DeleteScriptRequest {
  /**
   * 脚本id，其可以通过DescribeScripts接口提取
   */
  ScriptIds: Array<string>
}

/**
 * DescribeTable返回参数结构体
 */
export interface DescribeTableResponse {
  /**
   * 数据表对象
   */
  Table: TableResponseInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTask请求参数结构体
 */
export interface CreateTaskRequest {
  /**
   * 计算任务，该参数中包含任务类型及其相关配置信息
   */
  Task: Task

  /**
   * 数据库名称。任务在执行前均会USE该数据库， 除了首次建库时，其他情况建议均添加上。
   */
  DatabaseName?: string
}

/**
 * 查询表信息对象
 */
export interface TableResponseInfo {
  /**
   * 数据表基本信息。
   */
  TableBaseInfo: TableBaseInfo

  /**
      * 数据表列信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Columns: Array<Column>

  /**
      * 数据表分块信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Partitions: Array<Partition>

  /**
      * 数据存储路径。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Location: string

  /**
      * 数据表属性信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Properties: Array<Property>

  /**
      * 数据表更新时间, 单位: ms。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ModifiedTime: string

  /**
      * 数据表创建时间,单位: ms。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: string

  /**
      * 数据格式。
注意：此字段可能返回 null，表示取不到有效值。
      */
  InputFormat: string
}

/**
 * CreateScript返回参数结构体
 */
export interface CreateScriptResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务类型，任务如SQL查询等。
 */
export interface Task {
  /**
   * SQL查询任务
   */
  SQLTask: SQLTask
}

/**
 * DescribeTables返回参数结构体
 */
export interface DescribeTablesResponse {
  /**
   * 数据表对象列表。
   */
  TableList: Array<TableResponseInfo>

  /**
   * 实例总数。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SQL语句对象
 */
export interface Execution {
  /**
   * 自动生成SQL语句。
   */
  SQL: string
}

/**
 * DeleteScript返回参数结构体
 */
export interface DeleteScriptResponse {
  /**
   * 删除的脚本数量
   */
  ScriptsAffected: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTable返回参数结构体
 */
export interface CreateTableResponse {
  /**
   * 生成的建表执行语句对象。
   */
  Execution: Execution

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDatabase返回参数结构体
 */
export interface CreateDatabaseResponse {
  /**
   * 生成的建库执行语句对象。
   */
  Execution: Execution

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateScript请求参数结构体
 */
export interface CreateScriptRequest {
  /**
   * 脚本名称，最大不能超过255个字符。
   */
  ScriptName: string

  /**
   * base64编码后的sql语句
   */
  SQLStatement: string

  /**
   * 脚本描述,
   */
  ScriptDesc?: string

  /**
   * 数据库名称
   */
  DatabaseName?: string
}

/**
 * 数据表分块信息。
 */
export interface Partition {
  /**
   * 分区列名。
   */
  Name: string

  /**
   * 分区类型。
   */
  Type: string

  /**
   * 对分区的描述。
   */
  Comment: string
}

/**
 * 返回数据表的相关信息。
 */
export interface TableInfo {
  /**
   * 数据表配置信息。
   */
  TableBaseInfo: TableBaseInfo

  /**
   * 数据表格式。每次入参可选如下其一的KV结构，[TextFile，CSV，Json, Parquet, ORC, AVRD]。
   */
  DataFormat: DataFormat

  /**
   * 数据表列信息。
   */
  Columns: Array<Column>

  /**
   * 数据表分块信息。
   */
  Partitions: Array<Partition>

  /**
   * 数据存储路径。当前仅支持cos路径，格式如下：cosn://bucket-name/filepath。
   */
  Location: string
}

/**
 * 数据表列信息。
 */
export interface Column {
  /**
   * 列名称，不区分大小写，最大支持25个字符。
   */
  Name: string

  /**
      * 列类型，支持如下类型定义:
string|tinyint|smallint|int|bigint|boolean|float|double|decimal|timestamp|date|binary|array<data_type>|map<primitive_type, data_type>|struct<col_name : data_type [COMMENT col_comment], ...>|uniontype<data_type, data_type, ...>。
      */
  Type: string

  /**
      * 对该类的注释。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Comment?: string
}

/**
 * DescribeTasks返回参数结构体
 */
export interface DescribeTasksResponse {
  /**
   * 任务对象列表。
   */
  TaskList: Array<TaskResponseInfo>

  /**
   * 实例总数。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询列表过滤条件参数
 */
export interface Filter {
  /**
   * 属性名称, 若存在多个Filter时，Filter间的关系为逻辑或（OR）关系。
   */
  Name: string

  /**
   * 属性值, 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
   */
  Values: Array<string>
}

/**
 * DescribeScripts返回参数结构体
 */
export interface DescribeScriptsResponse {
  /**
      * Script列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Scripts: Array<Script>

  /**
   * 实例总数
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据表配置信息
 */
export interface TableBaseInfo {
  /**
   * 该数据表所属数据库名字
   */
  DatabaseName: string

  /**
   * 数据表名字
   */
  TableName: string
}

/**
 * 查询视图信息对象
 */
export interface ViewResponseInfo {
  /**
   * 视图基本信息。
   */
  ViewBaseInfo: ViewBaseInfo

  /**
      * 视图列信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Columns: Array<Column>

  /**
      * 视图属性信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Properties: Array<Property>

  /**
   * 视图创建时间。
   */
  CreateTime: string

  /**
   * 视图更新时间。
   */
  ModifiedTime: string
}

/**
 * 文本格式
 */
export interface TextFile {
  /**
   * 文本类型，本参数取值为TextFile。
   */
  Format: string

  /**
      * 处理文本用的正则表达式。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Regex: string
}

/**
 * 数据表数据格式。
 */
export interface DataFormat {
  /**
      * 文本格式，TextFile。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TextFile: TextFile

  /**
      * 文本格式，CSV。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CSV: CSV

  /**
      * 文本格式，Json。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Json: Other

  /**
      * Parquet格式
注意：此字段可能返回 null，表示取不到有效值。
      */
  Parquet: Other

  /**
      * ORC格式
注意：此字段可能返回 null，表示取不到有效值。
      */
  ORC: Other

  /**
      * AVRO格式
注意：此字段可能返回 null，表示取不到有效值。
      */
  AVRO: Other
}

/**
 * CSV类型数据格式
 */
export interface CSV {
  /**
   * 压缩格式，["Snappy", "Gzip", "None"选一]。
   */
  CodeCompress?: string

  /**
   * CSV序列化及反序列化数据结构。
   */
  CSVSerde?: CSVSerde

  /**
      * 标题行，默认为0。
注意：此字段可能返回 null，表示取不到有效值。
      */
  HeadLines?: number

  /**
      * 格式，默认值为CSV
注意：此字段可能返回 null，表示取不到有效值。
      */
  Format?: string
}

/**
 * CreateTable请求参数结构体
 */
export interface CreateTableRequest {
  /**
   * 数据表配置信息
   */
  TableInfo: TableInfo
}

/**
 *  SQL查询任务
 */
export interface SQLTask {
  /**
   * base64加密后的SQL语句
   */
  SQL: string
}

/**
 * DescribeScripts请求参数结构体
 */
export interface DescribeScriptsRequest {
  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit?: number

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
   * 按字段排序，支持如下字段类型，update-time
   */
  SortBy?: string

  /**
   * 排序方式，desc表示正序，asc表示反序
   */
  Sorting?: string

  /**
      * 过滤条件，如下支持的过滤类型，传参Name应为其一
script-id - String - （过滤条件）script-id取值形如：157de0d1-26b4-4df2-a2d0-b64afc406c25。
script-name-keyword - String - （过滤条件）数据表名称,形如：script-test。
      */
  Filters?: Array<Filter>
}

/**
 * CSV序列化及反序列化数据结构
 */
export interface CSVSerde {
  /**
   * CSV序列化转义符，默认为"\\"，最长8个字符，如 Escape: "/\"
   */
  Escape?: string

  /**
   * CSV序列化字段域符，默认为"'"，最长8个字符, 如 Quote: "\""
   */
  Quote?: string

  /**
   * CSV序列化分隔符，默认为"\t"，最长8个字符, 如 Separator: "\t"
   */
  Separator?: string
}

/**
 * DescribeTables请求参数结构体
 */
export interface DescribeTablesRequest {
  /**
   * 列出该数据库下所属数据表。
   */
  DatabaseName: string

  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit?: number

  /**
   * 数据偏移量，从0开始，默认为0。
   */
  Offset?: number

  /**
      * 过滤条件，如下支持的过滤类型，传参Name应为其一
table-name - String - （过滤条件）数据表名称,形如：table-001。
table-id - String - （过滤条件）table id形如：12342。
      */
  Filters?: Array<Filter>
}

/**
 * CreateDatabase请求参数结构体
 */
export interface CreateDatabaseRequest {
  /**
   * 数据库基础信息
   */
  DatabaseInfo: DatabaseInfo
}

/**
 * DescribeViews请求参数结构体
 */
export interface DescribeViewsRequest {
  /**
   * 列出该数据库下所属数据表。
   */
  DatabaseName: string

  /**
   * 返回数量，默认为10，最大值为100。
   */
  Limit?: number

  /**
   * 数据偏移量，从0开始，默认为0。
   */
  Offset?: number

  /**
      * 过滤条件，如下支持的过滤类型，传参Name应为其一
view-name - String - （过滤条件）数据表名称,形如：view-001。
view-id - String - （过滤条件）view id形如：12342。
      */
  Filters?: Array<Filter>
}

/**
 * DescribeDatabases返回参数结构体
 */
export interface DescribeDatabasesResponse {
  /**
   * 数据库对象列表。
   */
  DatabaseList: Array<DatabaseResponseInfo>

  /**
   * 实例总数。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据库对象
 */
export interface DatabaseResponseInfo {
  /**
   * 数据库名称。
   */
  DatabaseName: string

  /**
      * 数据库描述信息，长度 0~256。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Comment?: string

  /**
      * 数据库属性列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Properties?: Array<Property>

  /**
      * 数据库创建时间戳，单位：s。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime?: string

  /**
      * 数据库更新时间戳，单位：s。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ModifiedTime?: string
}

/**
 * 视图基本配置信息
 */
export interface ViewBaseInfo {
  /**
   * 该视图所属数据库名字
   */
  DatabaseName: string

  /**
   * 视图名称
   */
  ViewName: string
}
