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
 * ImportSnapshots返回参数结构体
 */
export interface ImportSnapshotsResponse {
  /**
      * TaskId由 AppInstanceId-taskId 组成，以区分不同集群的任务
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 比较表格的Meta信息
 */
export interface CompareTablesInfo {
  /**
   * 源表格的集群id
   */
  SrcTableClusterId: string

  /**
   * 源表格的表格组id
   */
  SrcTableGroupId: string

  /**
   * 源表格的表名
   */
  SrcTableName: string

  /**
   * 目标表格的集群id
   */
  DstTableClusterId: string

  /**
   * 目标表格的表格组id
   */
  DstTableGroupId: string

  /**
   * 目标表格的表名
   */
  DstTableName: string

  /**
   * 源表格的实例id
   */
  SrcTableInstanceId: string

  /**
   * 目标表格的实例id
   */
  DstTableInstanceId: string
}

/**
 * ModifyClusterName请求参数结构体
 */
export interface ModifyClusterNameRequest {
  /**
   * 需要修改名称的集群ID
   */
  ClusterId: string

  /**
   * 需要修改的集群名称，可使用中文或英文字符，最大长度32个字符
   */
  ClusterName: string
}

/**
 * ModifyTableGroupName返回参数结构体
 */
export interface ModifyTableGroupNameResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTableTags请求参数结构体
 */
export interface DescribeTableTagsRequest {
  /**
   * 表格所属集群ID
   */
  ClusterId: string

  /**
   * 表格列表
   */
  SelectedTables: Array<SelectedTableInfoNew>
}

/**
 * ModifyClusterPassword返回参数结构体
 */
export interface ModifyClusterPasswordResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCluster返回参数结构体
 */
export interface DeleteClusterResponse {
  /**
   * 删除集群生成的任务ID
   */
  TaskId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTableIndex返回参数结构体
 */
export interface DeleteTableIndexResponse {
  /**
   * 删除表格分布式索引结果数量
   */
  TotalCount?: number

  /**
   * 删除表格分布式索引结果列表
   */
  TableResults?: Array<TableResultNew>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 表格回档结果信息
 */
export interface TableRollbackResultNew {
  /**
      * 表格实例ID，形如：tcaplus-3be64cbb
注意：此字段可能返回 null，表示取不到有效值。
      */
  TableInstanceId: string

  /**
      * 任务ID，对于创建单任务的接口有效
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskId: string

  /**
      * 表格名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  TableName: string

  /**
      * 表格数据结构类型，如：`GENERIC`或`LIST`
注意：此字段可能返回 null，表示取不到有效值。
      */
  TableType: string

  /**
      * 表格数据描述语言（IDL）类型，如：`PROTO`或`TDR`
注意：此字段可能返回 null，表示取不到有效值。
      */
  TableIdlType: string

  /**
      * 表格所属表格组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  TableGroupId: string

  /**
      * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Error: ErrorInfo

  /**
      * 任务ID列表，对于创建多任务的接口有效
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskIds: Array<string>

  /**
      * 上传的key文件ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileId: string

  /**
      * 校验成功Key数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  SuccKeyNum: number

  /**
      * Key文件中包含总的Key数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalKeyNum: number
}

/**
 * 申请单id及其状态
 */
export interface ApplyStatus {
  /**
   * 集群id-申请单id
   */
  ApplicationId: string

  /**
   * 处理状态-1-撤回 1-通过 2-驳回，非0状态的申请单不可改变状态。
   */
  ApplicationStatus: number

  /**
   * 申请单类型
   */
  ApplicationType: number

  /**
   * 集群Id
   */
  ClusterId: string
}

/**
 * TcaplusDB服务地域信息详情
 */
export interface RegionInfo {
  /**
   * 地域Ap-Code
   */
  RegionName: string

  /**
   * 地域缩写
   */
  RegionAbbr: string

  /**
   * 地域ID
   */
  RegionId: number

  /**
   * 是否支持ipv6，0:不支持，1:支持
   */
  Ipv6Enable: number
}

/**
 * DescribeTables返回参数结构体
 */
export interface DescribeTablesResponse {
  /**
   * 表格数量
   */
  TotalCount: number

  /**
   * 表格详情结果列表
   */
  TableInfos: Array<TableInfoNew>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySnapshots返回参数结构体
 */
export interface ModifySnapshotsResponse {
  /**
   * 批量修改的快照数量
   */
  TotalCount: number

  /**
   * 批量修改的快照结果列表
   */
  TableResults: Array<SnapshotResult>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateApply返回参数结构体
 */
export interface UpdateApplyResponse {
  /**
      * 已更新的申请单列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  ApplyResults: Array<ApplyResult>

  /**
   * 更新数量
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCluster请求参数结构体
 */
export interface DeleteClusterRequest {
  /**
   * 待删除的集群ID
   */
  ClusterId: string
}

/**
 * 附带被选中字段信息的表格列表
 */
export interface SelectedTableWithField {
  /**
   * 表所属表格组ID
   */
  TableGroupId: string

  /**
   * 表格名称
   */
  TableName: string

  /**
   * 表实例ID
   */
  TableInstanceId?: string

  /**
   * 表格描述语言类型：`PROTO`或`TDR`
   */
  TableIdlType?: string

  /**
   * 表格数据结构类型：`GENERIC`或`LIST`
   */
  TableType?: string

  /**
   * 待创建索引、缓写、数据订阅的字段列表
   */
  SelectedFields?: Array<FieldInfo>

  /**
   * 索引分片数
   */
  ShardNum?: number

  /**
   * ckafka实例信息
   */
  KafkaInfo?: KafkaInfo
}

/**
 * DeleteTableIndex请求参数结构体
 */
export interface DeleteTableIndexRequest {
  /**
   * 表格所属集群实例ID
   */
  ClusterId: string

  /**
   * 待删除分布式索引的表格列表
   */
  SelectedTables: Array<SelectedTableInfoNew>
}

/**
 * proxy机器信息
 */
export interface ProxyMachineInfo {
  /**
   * 唯一id
   */
  ProxyUid: string

  /**
   * 机器类型
   */
  MachineType: string

  /**
   * 可分配proxy资源数
   */
  AvailableCount: number
}

/**
 * DescribeTasks返回参数结构体
 */
export interface DescribeTasksResponse {
  /**
   * 任务数量
   */
  TotalCount?: number

  /**
   * 查询到的任务详情列表
   */
  TaskInfos?: Array<TaskInfoNew>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTables请求参数结构体
 */
export interface DeleteTablesRequest {
  /**
   * 待删除表所在集群ID
   */
  ClusterId: string

  /**
   * 待删除表信息列表
   */
  SelectedTables: Array<SelectedTableInfoNew>
}

/**
 * DescribeRegions返回参数结构体
 */
export interface DescribeRegionsResponse {
  /**
   * 可用区详情结果数量
   */
  TotalCount?: number

  /**
   * 可用区详情结果列表
   */
  RegionInfos?: Array<RegionInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetTableDataFlow返回参数结构体
 */
export interface SetTableDataFlowResponse {
  /**
   * 表格数据订阅创建结果数量
   */
  TotalCount: number

  /**
   * 表格数据订阅创建结果列表
   */
  TableResults: Array<TableResultNew>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 被选中的表信息
 */
export interface SelectedTableInfoNew {
  /**
   * 表所属表格组ID
   */
  TableGroupId: string

  /**
   * 表格名称
   */
  TableName: string

  /**
   * 表实例ID
   */
  TableInstanceId?: string

  /**
   * 表格描述语言类型：`PROTO`或`TDR`
   */
  TableIdlType?: string

  /**
   * 表格数据结构类型：`GENERIC`或`LIST`
   */
  TableType?: string

  /**
   * LIST表元素个数
   */
  ListElementNum?: number

  /**
   * 表格预留容量（GB）
   */
  ReservedVolume?: number

  /**
   * 表格预留读CU
   */
  ReservedReadQps?: number

  /**
   * 表格预留写CU
   */
  ReservedWriteQps?: number

  /**
   * 表格备注信息
   */
  Memo?: string

  /**
   * Key回档文件名，回档专用
   */
  FileName?: string

  /**
   * Key回档文件扩展名，回档专用
   */
  FileExtType?: string

  /**
   * Key回档文件大小，回档专用
   */
  FileSize?: number

  /**
   * Key回档文件内容，回档专用
   */
  FileContent?: string
}

/**
 * ModifyClusterPassword请求参数结构体
 */
export interface ModifyClusterPasswordRequest {
  /**
   * 需要修改密码的集群ID
   */
  ClusterId: string

  /**
   * 集群旧密码
   */
  OldPassword: string

  /**
   * 集群旧密码预期失效时间
   */
  OldPasswordExpireTime: string

  /**
   * 集群新密码，密码必须是a-zA-Z0-9的字符,且必须包含数字和大小写字母
   */
  NewPassword: string

  /**
   * 更新模式： `1` 更新密码；`2` 更新旧密码失效时间，默认为`1` 模式
   */
  Mode?: string
}

/**
 * DescribeMachine返回参数结构体
 */
export interface DescribeMachineResponse {
  /**
   * 独占机器资源列表
   */
  PoolList?: Array<PoolInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTableDataFlow请求参数结构体
 */
export interface DeleteTableDataFlowRequest {
  /**
   * 表格所属集群实例ID
   */
  ClusterId: string

  /**
   * 待删除分布式索引的表格列表
   */
  SelectedTables: Array<SelectedTableInfoNew>
}

/**
 * DeleteTableGroup请求参数结构体
 */
export interface DeleteTableGroupRequest {
  /**
   * 表格组所属的集群ID
   */
  ClusterId: string

  /**
   * 表格组ID
   */
  TableGroupId: string
}

/**
 * DescribeSnapshots请求参数结构体
 */
export interface DescribeSnapshotsRequest {
  /**
   * 表格所属集群id
   */
  ClusterId: string

  /**
   * 所属表格组ID
   */
  TableGroupId?: string

  /**
   * 表名称
   */
  TableName?: string

  /**
   * 快照名称
   */
  SnapshotName?: string
}

/**
 * 表格组标签信息
 */
export interface TagsInfoOfTableGroup {
  /**
      * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClusterId: string

  /**
      * 表格组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  TableGroupId: string

  /**
      * 标签信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tags: Array<TagInfoUnit>

  /**
      * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Error: ErrorInfo
}

/**
 * DescribeApplications返回参数结构体
 */
export interface DescribeApplicationsResponse {
  /**
   * 申请单列表
   */
  Applications: Array<Application>

  /**
   * 申请单个数
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTableGroup请求参数结构体
 */
export interface CreateTableGroupRequest {
  /**
   * 表格组所属集群ID
   */
  ClusterId: string

  /**
   * 表格组名称，可以采用中文、英文或数字字符，最大长度32个字符
   */
  TableGroupName: string

  /**
   * 表格组ID，可以由用户指定，但在同一个集群内不能重复，如果不指定则采用自增的模式
   */
  TableGroupId?: string

  /**
   * 表格组标签列表
   */
  ResourceTags?: Array<TagInfoUnit>
}

/**
 * ModifyClusterMachine返回参数结构体
 */
export interface ModifyClusterMachineResponse {
  /**
   * 集群id
   */
  ClusterId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 表格标签信息
 */
export interface TagsInfoOfTable {
  /**
      * 表格实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  TableInstanceId: string

  /**
      * 表格名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  TableName: string

  /**
      * 表格组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  TableGroupId: string

  /**
      * 标签信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tags: Array<TagInfoUnit>

  /**
      * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Error: ErrorInfo
}

/**
 * DeleteIdlFiles返回参数结构体
 */
export interface DeleteIdlFilesResponse {
  /**
   * 结果记录数量
   */
  TotalCount?: number

  /**
   * 删除结果
   */
  IdlFileInfos?: Array<IdlFileInfoWithoutContent>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 表格字段信息列表
 */
export interface FieldInfo {
  /**
   * 表格字段名称
   */
  FieldName: string

  /**
   * 字段是否是主键字段
   */
  IsPrimaryKey: string

  /**
   * 字段类型
   */
  FieldType?: string

  /**
   * 字段长度
   */
  FieldSize?: number
}

/**
 * ModifyTableTags请求参数结构体
 */
export interface ModifyTableTagsRequest {
  /**
   * 待修改标签表格所属集群ID
   */
  ClusterId: string

  /**
   * 待修改标签表格列表
   */
  SelectedTables: Array<SelectedTableInfoNew>

  /**
   * 待增加或修改的标签列表
   */
  ReplaceTags?: Array<TagInfoUnit>

  /**
   * 待删除的标签列表
   */
  DeleteTags?: Array<TagInfoUnit>
}

/**
 * 合服结果
 */
export interface MergeTableResult {
  /**
      * 任务Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskId: string

  /**
      * 成功时此字段返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Error: ErrorInfo

  /**
   * 对比的表格信息
   */
  Table: CompareTablesInfo

  /**
      * 申请单Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ApplicationId: string
}

/**
 * 更新申请单结果
 */
export interface ApplyResult {
  /**
   * 申请单id
   */
  ApplicationId: string

  /**
   * 申请类型
   */
  ApplicationType: number

  /**
      * 处理状态 0-待审核 1-已经审核并提交任务 2-已驳回
注意：此字段可能返回 null，表示取不到有效值。
      */
  ApplicationStatus: number

  /**
      * 已提交的任务Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskId: string

  /**
      * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Error: ErrorInfo
}

/**
 * DescribeTasks请求参数结构体
 */
export interface DescribeTasksRequest {
  /**
   * 需要查询任务所属的集群ID列表
   */
  ClusterIds?: Array<string>

  /**
   * 需要查询的任务ID列表
   */
  TaskIds?: Array<string>

  /**
   * 过滤条件，本接口支持：Content，TaskType, Operator, Time
   */
  Filters?: Array<Filter>

  /**
   * 查询列表偏移量
   */
  Offset?: number

  /**
   * 查询列表返回记录数
   */
  Limit?: number
}

/**
 * 新的快照过期时间
 */
export interface SnapshotInfoNew {
  /**
   * 所属表格组ID
   */
  TableGroupId: string

  /**
   * 表名称
   */
  TableName: string

  /**
   * 快照名称
   */
  SnapshotName: string

  /**
   * 快照过期时间点
   */
  SnapshotDeadTime?: string
}

/**
 * 审批申请单
 */
export interface Application {
  /**
   * 审批单号
   */
  ApplicationId: string

  /**
   * 申请类型
   */
  ApplicationType: number

  /**
   * 集群Id
   */
  ClusterId: string

  /**
   * 集群名称
   */
  ClusterName: string

  /**
      * 表格组名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  TableGroupName: string

  /**
   * 表格名称
   */
  TableName: string

  /**
   * 申请人
   */
  Applicant: string

  /**
   * 建单时间
   */
  CreatedTime: string

  /**
   * 处理状态 -1 撤回 0-待审核 1-已经审核并提交任务 2-已驳回
   */
  ApplicationStatus: number

  /**
   * 表格组Id
   */
  TableGroupId: string

  /**
   * 已提交的任务Id，未提交申请为0
   */
  TaskId: string

  /**
      * 腾讯云上table的唯一键
注意：此字段可能返回 null，表示取不到有效值。
      */
  TableInstanceId: string

  /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: string

  /**
      * 审批人
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExecuteUser: string

  /**
      * 执行状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExecuteStatus: string

  /**
      * 该申请单是否可以被当前用户审批
注意：此字段可能返回 null，表示取不到有效值。
      */
  CanCensor: boolean

  /**
      * 该申请单是否可以被当前用户撤回
注意：此字段可能返回 null，表示取不到有效值。
      */
  CanWithdrawal: boolean
}

/**
 * ClearTables返回参数结构体
 */
export interface ClearTablesResponse {
  /**
   * 清除表结果数量
   */
  TotalCount?: number

  /**
   * 清除表结果列表
   */
  TableResults?: Array<TableResultNew>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIdlFileInfos请求参数结构体
 */
export interface DescribeIdlFileInfosRequest {
  /**
   * 文件所属集群ID
   */
  ClusterId: string

  /**
   * 文件所属表格组ID
   */
  TableGroupIds?: Array<string>

  /**
   * 指定文件ID列表
   */
  IdlFileIds?: Array<string>

  /**
   * 查询列表偏移量
   */
  Offset?: number

  /**
   * 查询列表返回记录数
   */
  Limit?: number
}

/**
 * ModifyTableTags返回参数结构体
 */
export interface ModifyTableTagsResponse {
  /**
   * 返回结果总数
   */
  TotalCount?: number

  /**
   * 返回结果
   */
  TableResults?: Array<TableResultNew>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 创建快照结果
 */
export interface SnapshotResult {
  /**
      * 表格所属表格组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  TableGroupId: string

  /**
      * 表格名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  TableName: string

  /**
      * 任务ID，对于创建单任务的接口有效
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskId: string

  /**
      * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Error: ErrorInfo

  /**
      * 快照名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  SnapshotName: string

  /**
      * 快照的时间点
注意：此字段可能返回 null，表示取不到有效值。
      */
  SnapshotTime: string

  /**
      * 快照的过期时间点
注意：此字段可能返回 null，表示取不到有效值。
      */
  SnapshotDeadTime: string

  /**
      * 快照创建时间点
注意：此字段可能返回 null，表示取不到有效值。
      */
  SnapshotCreateTime: string

  /**
      * 快照大小
注意：此字段可能返回 null，表示取不到有效值。
      */
  SnapshotSize: number

  /**
      * 快照状态，0 生成中 1 正常 2 删除中 3 已失效 4 回档使用中
注意：此字段可能返回 null，表示取不到有效值。
      */
  SnapshotStatus: number
}

/**
 * ModifyCensorship请求参数结构体
 */
export interface ModifyCensorshipRequest {
  /**
   * 集群id
   */
  ClusterId: string

  /**
   * 集群是否开启审核 0-关闭 1-开启
   */
  Censorship: number

  /**
   * 审批人uin列表
   */
  Uins?: Array<string>
}

/**
 * 集群详细信息
 */
export interface ClusterInfo {
  /**
   * 集群名称
   */
  ClusterName: string

  /**
   * 集群ID
   */
  ClusterId: string

  /**
   * 集群所在地域
   */
  Region: string

  /**
   * 集群数据描述语言类型，如：`PROTO`,`TDR`
   */
  IdlType: string

  /**
   * 网络类型
   */
  NetworkType: string

  /**
   * 集群关联的用户私有网络实例ID
   */
  VpcId: string

  /**
   * 集群关联的用户子网实例ID
   */
  SubnetId: string

  /**
   * 创建时间
   */
  CreatedTime: string

  /**
   * 集群密码
   */
  Password: string

  /**
   * 密码状态
   */
  PasswordStatus: string

  /**
   * TcaplusDB SDK连接参数，接入ID
   */
  ApiAccessId: string

  /**
   * TcaplusDB SDK连接参数，接入地址
   */
  ApiAccessIp: string

  /**
   * TcaplusDB SDK连接参数，接入端口
   */
  ApiAccessPort: number

  /**
      * 如果PasswordStatus是unmodifiable说明有旧密码还未过期，此字段将显示旧密码过期的时间，否则为空
注意：此字段可能返回 null，表示取不到有效值。
      */
  OldPasswordExpireTime: string

  /**
      * TcaplusDB SDK连接参数，接入ipv6地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  ApiAccessIpv6: string

  /**
      * 集群类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClusterType: number

  /**
      * 集群状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClusterStatus: number

  /**
      * 读CU
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReadCapacityUnit: number

  /**
      * 写CU
注意：此字段可能返回 null，表示取不到有效值。
      */
  WriteCapacityUnit: number

  /**
      * 磁盘容量
注意：此字段可能返回 null，表示取不到有效值。
      */
  DiskVolume: number

  /**
      * 独占server机器信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServerList: Array<ServerDetailInfo>

  /**
      * 独占proxy机器信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProxyList: Array<ProxyDetailInfo>

  /**
   * 是否开启审核 0-不开启 1-开启
   */
  Censorship: number

  /**
      * 审批人uin列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  DbaUins: Array<string>

  /**
      * 是否开启了数据订阅
注意：此字段可能返回 null，表示取不到有效值。
      */
  DataFlowStatus: number

  /**
      * 数据订阅的kafka信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  KafkaInfo: KafkaInfo

  /**
      * 集群Txh备份文件多少天后过期删除
注意：此字段可能返回 null，表示取不到有效值。
      */
  TxhBackupExpireDay: number

  /**
      * 集群Ulog备份文件多少天后过期删除
注意：此字段可能返回 null，表示取不到有效值。
      */
  UlogBackupExpireDay: number

  /**
      * 集群Ulog备份文件过期策略是否为只读， 0： UlogBackupExpire是只读，不可修改， 1： UlogBackupExpire可以修改（当前业务存在Svrid第二段等于clusterid的机器）
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsReadOnlyUlogBackupExpireDay: number
}

/**
 * DisableRestProxy请求参数结构体
 */
export interface DisableRestProxyRequest {
  /**
   * 对应appid
   */
  ClusterId: string
}

/**
 * DescribeTablesInRecycle返回参数结构体
 */
export interface DescribeTablesInRecycleResponse {
  /**
   * 表格数量
   */
  TotalCount?: number

  /**
   * 表格详情结果列表
   */
  TableInfos?: Array<TableInfoNew>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTables返回参数结构体
 */
export interface ModifyTablesResponse {
  /**
   * 修改表结果数量
   */
  TotalCount?: number

  /**
   * 修改表结果列表
   */
  TableResults?: Array<TableResultNew>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteSnapshots请求参数结构体
 */
export interface DeleteSnapshotsRequest {
  /**
   * 表格所属集群id
   */
  ClusterId: string

  /**
   * 删除的快照列表
   */
  SelectedTables: Array<SnapshotInfoNew>
}

/**
 * ModifyTableGroupTags返回参数结构体
 */
export interface ModifyTableGroupTagsResponse {
  /**
      * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyClusterTags请求参数结构体
 */
export interface ModifyClusterTagsRequest {
  /**
   * 待修改标签的集群ID
   */
  ClusterId: string

  /**
   * 待增加或修改的标签列表
   */
  ReplaceTags?: Array<TagInfoUnit>

  /**
   * 待删除的标签
   */
  DeleteTags?: Array<TagInfoUnit>
}

/**
 * CreateSnapshots请求参数结构体
 */
export interface CreateSnapshotsRequest {
  /**
   * 表格所属集群id
   */
  ClusterId: string

  /**
   * 快照列表
   */
  SelectedTables: Array<SnapshotInfo>
}

/**
 * DescribeTableGroupTags返回参数结构体
 */
export interface DescribeTableGroupTagsResponse {
  /**
      * 表格组标签信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Rows?: Array<TagsInfoOfTableGroup>

  /**
      * 返回结果个数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetTableIndex请求参数结构体
 */
export interface SetTableIndexRequest {
  /**
   * 表所属集群实例ID
   */
  ClusterId: string

  /**
   * 待创建分布式索引表格列表
   */
  SelectedTables: Array<SelectedTableWithField>
}

/**
 * ModifyTableQuotas返回参数结构体
 */
export interface ModifyTableQuotasResponse {
  /**
   * 扩缩容结果数量
   */
  TotalCount?: number

  /**
   * 扩缩容结果列表
   */
  TableResults?: Array<TableResultNew>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RecoverRecycleTables请求参数结构体
 */
export interface RecoverRecycleTablesRequest {
  /**
   * 表所在集群ID
   */
  ClusterId: string

  /**
   * 待恢复表信息
   */
  SelectedTables: Array<SelectedTableInfoNew>
}

/**
 * DeleteSnapshots返回参数结构体
 */
export interface DeleteSnapshotsResponse {
  /**
   * 批量删除的快照数量
   */
  TotalCount: number

  /**
   * 批量删除的快照结果
   */
  TableResults: Array<SnapshotResult>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTables返回参数结构体
 */
export interface DeleteTablesResponse {
  /**
   * 删除表结果数量
   */
  TotalCount?: number

  /**
   * 删除表结果详情列表
   */
  TableResults?: Array<TableResultNew>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTableGroupName请求参数结构体
 */
export interface ModifyTableGroupNameRequest {
  /**
   * 表格组所属的集群ID
   */
  ClusterId: string

  /**
   * 待修改名称的表格组ID
   */
  TableGroupId: string

  /**
   * 新的表格组名称，可以使用中英文字符和符号
   */
  TableGroupName: string
}

/**
 * DescribeTableGroups请求参数结构体
 */
export interface DescribeTableGroupsRequest {
  /**
   * 表格组所属集群ID
   */
  ClusterId: string

  /**
   * 表格组ID列表
   */
  TableGroupIds?: Array<string>

  /**
   * 过滤条件，本接口支持：TableGroupName，TableGroupId
   */
  Filters?: Array<Filter>

  /**
   * 查询列表偏移量
   */
  Offset?: number

  /**
   * 查询列表返回记录数
   */
  Limit?: number
}

/**
 * DescribeUinInWhitelist请求参数结构体
 */
export type DescribeUinInWhitelistRequest = null

/**
 * MergeTablesData请求参数结构体
 */
export interface MergeTablesDataRequest {
  /**
   * 选取的表格
   */
  SelectedTables: Array<MergeTablesInfo>

  /**
   * true只做对比，false既对比又执行
   */
  IsOnlyCompare: boolean
}

/**
 * CreateCluster请求参数结构体
 */
export interface CreateClusterRequest {
  /**
   * 集群数据描述语言类型，如：`PROTO`，`TDR`或`MIX`
   */
  IdlType: string

  /**
   * 集群名称，可使用中文或英文字符，最大长度32个字符
   */
  ClusterName: string

  /**
   * 集群所绑定的私有网络实例ID，形如：vpc-f49l6u0z
   */
  VpcId: string

  /**
   * 集群所绑定的子网实例ID，形如：subnet-pxir56ns
   */
  SubnetId: string

  /**
   * 集群访问密码，必须是a-zA-Z0-9的字符,且必须包含数字和大小写字母
   */
  Password: string

  /**
   * 集群标签列表
   */
  ResourceTags?: Array<TagInfoUnit>

  /**
   * 集群是否开启IPv6功能
   */
  Ipv6Enable?: number

  /**
   * 独占集群占用的svr机器
   */
  ServerList?: Array<MachineInfo>

  /**
   * 独占集群占用的proxy机器
   */
  ProxyList?: Array<MachineInfo>

  /**
   * 集群类型1共享2独占
   */
  ClusterType?: number

  /**
   * 密码认证类型，0 静态认证， 1 签名认证
   */
  AuthType?: number
}

/**
 * ModifyTableGroupTags请求参数结构体
 */
export interface ModifyTableGroupTagsRequest {
  /**
   * 待修改标签表格组所属集群ID
   */
  ClusterId: string

  /**
   * 待修改标签表格组ID
   */
  TableGroupId: string

  /**
   * 待增加或修改的标签列表
   */
  ReplaceTags?: Array<TagInfoUnit>

  /**
   * 待删除的标签
   */
  DeleteTags?: Array<TagInfoUnit>
}

/**
 * EnableRestProxy请求参数结构体
 */
export interface EnableRestProxyRequest {
  /**
   * 对应于appid
   */
  ClusterId: string
}

/**
 * ModifyTableQuotas请求参数结构体
 */
export interface ModifyTableQuotasRequest {
  /**
   * 带扩缩容表所属集群ID
   */
  ClusterId: string

  /**
   * 已选中待修改的表配额列表
   */
  TableQuotas: Array<SelectedTableInfoNew>
}

/**
 * CompareIdlFiles返回参数结构体
 */
export interface CompareIdlFilesResponse {
  /**
   * 本次上传校验所有的IDL文件信息列表
   */
  IdlFiles?: Array<IdlFileInfo>

  /**
   * 本次校验合法的表格数量
   */
  TotalCount?: number

  /**
   * 读取IDL描述文件后,根据用户指示的所选中表格解析校验结果
   */
  TableInfos?: Array<ParsedTableInfoNew>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTables返回参数结构体
 */
export interface CreateTablesResponse {
  /**
   * 批量创建表格结果数量
   */
  TotalCount?: number

  /**
   * 批量创建表格结果列表
   */
  TableResults?: Array<TableResultNew>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRegions请求参数结构体
 */
export type DescribeRegionsRequest = null

/**
 * DescribeClusters返回参数结构体
 */
export interface DescribeClustersResponse {
  /**
   * 集群实例数
   */
  TotalCount: number

  /**
   * 集群实例列表
   */
  Clusters: Array<ClusterInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 合服请求入参
 */
export interface MergeTablesInfo {
  /**
   * 合服的表格信息
   */
  MergeTables: CompareTablesInfo

  /**
   * 是否检查索引
   */
  CheckIndex: boolean
}

/**
 * ModifyClusterTags返回参数结构体
 */
export interface ModifyClusterTagsResponse {
  /**
      * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterTags返回参数结构体
 */
export interface DescribeClusterTagsResponse {
  /**
      * 集群标签信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Rows?: Array<TagsInfoOfCluster>

  /**
      * 返回结果个数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群的标签信息
 */
export interface TagsInfoOfCluster {
  /**
      * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClusterId: string

  /**
      * 标签信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tags: Array<TagInfoUnit>

  /**
      * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Error: ErrorInfo
}

/**
 * SetTableIndex返回参数结构体
 */
export interface SetTableIndexResponse {
  /**
   * 表格分布式索引创建结果数量
   */
  TotalCount: number

  /**
   * 表格分布式索引创建结果列表
   */
  TableResults: Array<TableResultNew>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ClearTables请求参数结构体
 */
export interface ClearTablesRequest {
  /**
   * 表所属集群实例ID
   */
  ClusterId: string

  /**
   * 待清理表信息列表
   */
  SelectedTables: Array<SelectedTableInfoNew>
}

/**
 * DescribeIdlFileInfos返回参数结构体
 */
export interface DescribeIdlFileInfosResponse {
  /**
   * 文件数量
   */
  TotalCount?: number

  /**
   * 文件详情列表
   */
  IdlFileInfos?: Array<IdlFileInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * svr的机器列表ServerList
 */
export interface ServerMachineInfo {
  /**
   * 机器唯一id
   */
  ServerUid: string

  /**
   * 机器类型
   */
  MachineType: string
}

/**
 * CreateSnapshots返回参数结构体
 */
export interface CreateSnapshotsResponse {
  /**
   * 批量创建的快照数量
   */
  TotalCount: number

  /**
   * 批量创建的快照结果列表
   */
  TableResults: Array<SnapshotResult>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 表定义描述文件详情，包含文件内容
 */
export interface IdlFileInfo {
  /**
   * 文件名称，不包含扩展名
   */
  FileName: string

  /**
   * 数据描述语言（IDL）类型
   */
  FileType: string

  /**
   * 文件扩展名
   */
  FileExtType: string

  /**
   * 文件大小（Bytes）
   */
  FileSize: number

  /**
      * 文件ID，对于已上传的文件有意义
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileId?: number

  /**
      * 文件内容，对于本次新上传的文件有意义
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileContent?: string
}

/**
 * DisableRestProxy返回参数结构体
 */
export interface DisableRestProxyResponse {
  /**
   * RestProxy的状态，0为关闭，1为开启中，2为开启，3为关闭中
   */
  RestProxyStatus?: number

  /**
   * TaskId由 AppInstanceId-taskId 组成，以区分不同集群的任务
   */
  TaskId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 标签信息单元
 */
export interface TagInfoUnit {
  /**
   * 标签键
   */
  TagKey: string

  /**
      * 标签值
注意：此字段可能返回 null，表示取不到有效值。
      */
  TagValue?: string
}

/**
 * CreateCluster返回参数结构体
 */
export interface CreateClusterResponse {
  /**
   * 集群ID
   */
  ClusterId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusters请求参数结构体
 */
export interface DescribeClustersRequest {
  /**
   * 指定查询的集群ID列表
   */
  ClusterIds?: Array<string>

  /**
   * 查询过滤条件
   */
  Filters?: Array<Filter>

  /**
   * 查询列表偏移量
   */
  Offset?: number

  /**
   * 查询列表返回记录数，默认值20
   */
  Limit?: number

  /**
   * 是否启用Ipv6
   */
  Ipv6Enable?: number
}

/**
 * server独占机器的详细信息
 */
export interface ServerDetailInfo {
  /**
   * svr唯一id
   */
  ServerUid: string

  /**
   * 机器类型
   */
  MachineType: string

  /**
   * 内存占用量
   */
  MemoryRate: number

  /**
   * 磁盘占用量
   */
  DiskRate: number

  /**
   * 读次数
   */
  ReadNum: number

  /**
   * 写次数
   */
  WriteNum: number
}

/**
 * 表格详情信息
 */
export interface TableInfoNew {
  /**
      * 表格名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  TableName: string

  /**
      * 表格实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  TableInstanceId: string

  /**
      * 表格数据结构类型，如：`GENERIC`或`LIST`
注意：此字段可能返回 null，表示取不到有效值。
      */
  TableType: string

  /**
      * 表格数据描述语言（IDL）类型，如：`PROTO`或`TDR`
注意：此字段可能返回 null，表示取不到有效值。
      */
  TableIdlType: string

  /**
      * 表格所属集群ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClusterId: string

  /**
      * 表格所属集群名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClusterName: string

  /**
      * 表格所属表格组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  TableGroupId: string

  /**
      * 表格所属表格组名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  TableGroupName: string

  /**
      * 表格主键字段结构json字符串
注意：此字段可能返回 null，表示取不到有效值。
      */
  KeyStruct: string

  /**
      * 表格非主键字段结构json字符串
注意：此字段可能返回 null，表示取不到有效值。
      */
  ValueStruct: string

  /**
      * 表格分表因子集合，对PROTO类型表格有效
注意：此字段可能返回 null，表示取不到有效值。
      */
  ShardingKeySet: string

  /**
      * 表格索引键字段集合，对PROTO类型表格有效
注意：此字段可能返回 null，表示取不到有效值。
      */
  IndexStruct: string

  /**
      * LIST类型表格元素个数
注意：此字段可能返回 null，表示取不到有效值。
      */
  ListElementNum: number

  /**
      * 表格所关联IDL文件信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  IdlFiles: Array<IdlFileInfo>

  /**
      * 表格预留容量（GB）
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReservedVolume: number

  /**
      * 表格预留读CU
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReservedReadQps: number

  /**
      * 表格预留写CU
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReservedWriteQps: number

  /**
      * 表格实际数据量大小（MB）
注意：此字段可能返回 null，表示取不到有效值。
      */
  TableSize: number

  /**
      * 表格状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: string

  /**
      * 表格创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreatedTime: string

  /**
      * 表格最后一次修改时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdatedTime: string

  /**
      * 表格备注信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Memo: string

  /**
      * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Error: ErrorInfo

  /**
      * TcaplusDB SDK数据访问接入ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ApiAccessId: string

  /**
      * SORTLIST类型表格排序字段个数
注意：此字段可能返回 null，表示取不到有效值。
      */
  SortFieldNum: number

  /**
      * SORTLIST类型表格排序顺序
注意：此字段可能返回 null，表示取不到有效值。
      */
  SortRule: number

  /**
      * 表格分布式索引/缓写、kafka数据订阅信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  DbClusterInfoStruct: string

  /**
      * 表格Txh备份文件多少天后过期删除
注意：此字段可能返回 null，表示取不到有效值。
      */
  TxhBackupExpireDay: number
}

/**
 * 任务信息详情
 */
export interface TaskInfoNew {
  /**
   * 任务ID
   */
  TaskId: string

  /**
   * 任务类型
   */
  TaskType: string

  /**
   * 任务所关联的TcaplusDB内部事务ID
   */
  TransId: string

  /**
   * 任务所属集群ID
   */
  ClusterId: string

  /**
   * 任务所属集群名称
   */
  ClusterName: string

  /**
   * 任务进度
   */
  Progress: number

  /**
   * 任务创建时间
   */
  StartTime: string

  /**
   * 任务最后更新时间
   */
  UpdateTime: string

  /**
   * 操作者
   */
  Operator: string

  /**
   * 任务详情
   */
  Content: string
}

/**
 * DeleteIdlFiles请求参数结构体
 */
export interface DeleteIdlFilesRequest {
  /**
   * IDL所属集群ID
   */
  ClusterId: string

  /**
   * 待删除的IDL文件信息列表
   */
  IdlFiles: Array<IdlFileInfo>
}

/**
 * CreateBackup返回参数结构体
 */
export interface CreateBackupResponse {
  /**
      * 创建的备份任务ID列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskIds: Array<string>

  /**
      * 创建的备份申请ID列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  ApplicationIds: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 部分key导入快照数据时所需要的key文件
 */
export interface KeyFile {
  /**
   * key文件名称
   */
  FileName: string

  /**
   * key文件扩展名
   */
  FileExtType: string

  /**
   * key文件内容
   */
  FileContent: string

  /**
   * key文件大小
   */
  FileSize?: number
}

/**
 * VerifyIdlFiles返回参数结构体
 */
export interface VerifyIdlFilesResponse {
  /**
   * 本次上传校验所有的IDL文件信息列表
   */
  IdlFiles?: Array<IdlFileInfo>

  /**
   * 读取IDL描述文件后解析出的合法表数量，不包含已经创建的表
   */
  TotalCount?: number

  /**
   * 读取IDL描述文件后解析出的合法表列表，不包含已经创建的表
   */
  TableInfos?: Array<ParsedTableInfoNew>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTableTags返回参数结构体
 */
export interface DescribeTableTagsResponse {
  /**
   * 返回结果总数
   */
  TotalCount?: number

  /**
   * 表格标签信息列表
   */
  Rows?: Array<TagsInfoOfTable>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTableGroup返回参数结构体
 */
export interface CreateTableGroupResponse {
  /**
   * 创建成功的表格组ID
   */
  TableGroupId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSnapshots返回参数结构体
 */
export interface DescribeSnapshotsResponse {
  /**
   * 快照数量
   */
  TotalCount: number

  /**
   * 快照结果列表
   */
  TableResults: Array<SnapshotResult>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VerifyIdlFiles请求参数结构体
 */
export interface VerifyIdlFilesRequest {
  /**
   * 待创建表格的集群ID
   */
  ClusterId: string

  /**
   * 待创建表格的表格组ID
   */
  TableGroupId?: string

  /**
   * 曾经上传过的IDL文件信息列表，与NewIdlFiles至少有一者
   */
  ExistingIdlFiles?: Array<IdlFileInfo>

  /**
   * 待上传的IDL文件信息列表，与ExistingIdlFiles至少有一者
   */
  NewIdlFiles?: Array<IdlFileInfo>
}

/**
 * EnableRestProxy返回参数结构体
 */
export interface EnableRestProxyResponse {
  /**
   * RestProxy的状态，0为关闭，1为开启中，2为开启，3为关闭中
   */
  RestProxyStatus?: number

  /**
   * TaskId由 AppInstanceId-taskId 组成，以区分不同集群的任务
   */
  TaskId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyClusterName返回参数结构体
 */
export interface ModifyClusterNameResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTables请求参数结构体
 */
export interface ModifyTablesRequest {
  /**
   * 待修改表格所在集群ID
   */
  ClusterId: string

  /**
   * 选中的改表IDL文件
   */
  IdlFiles: Array<IdlFileInfo>

  /**
   * 待改表格列表
   */
  SelectedTables: Array<SelectedTableInfoNew>
}

/**
 * SetTableDataFlow请求参数结构体
 */
export interface SetTableDataFlowRequest {
  /**
   * 表所属集群实例ID
   */
  ClusterId: string

  /**
   * 待创建分布式索引表格列表
   */
  SelectedTables: Array<SelectedTableWithField>
}

/**
 * DescribeTableGroupTags请求参数结构体
 */
export interface DescribeTableGroupTagsRequest {
  /**
   * 待查询标签表格组所属集群ID
   */
  ClusterId: string

  /**
   * 待查询标签表格组ID列表
   */
  TableGroupIds: Array<string>
}

/**
 * DescribeTablesInRecycle请求参数结构体
 */
export interface DescribeTablesInRecycleRequest {
  /**
   * 待查询表格所属集群ID
   */
  ClusterId?: string

  /**
   * 待查询表格所属表格组ID列表
   */
  TableGroupIds?: Array<string>

  /**
   * 过滤条件，本接口支持：TableName，TableInstanceId
   */
  Filters?: Array<Filter>

  /**
   * 查询结果偏移量
   */
  Offset?: number

  /**
   * 查询结果返回记录数量
   */
  Limit?: number
}

/**
 * DescribeTables请求参数结构体
 */
export interface DescribeTablesRequest {
  /**
   * 待查询表格所属集群ID
   */
  ClusterId?: string

  /**
   * 待查询表格所属表格组ID列表
   */
  TableGroupIds?: Array<string>

  /**
   * 待查询表格信息列表
   */
  SelectedTables?: Array<SelectedTableInfoNew>

  /**
   * 过滤条件，本接口支持：TableName，TableInstanceId
   */
  Filters?: Array<Filter>

  /**
   * 查询结果偏移量
   */
  Offset?: number

  /**
   * 查询结果返回记录数量
   */
  Limit?: number
}

/**
 * ckafka地址信息
 */
export interface KafkaInfo {
  /**
   * kafaka address
   */
  Address: string

  /**
   * kafaka topic
   */
  Topic: string

  /**
   * kafka username
   */
  User: string

  /**
   * kafka password
   */
  Password: string

  /**
   * ckafka实例
   */
  Instance: string

  /**
   * 是否走VPC
   */
  IsVpc: number
}

/**
 * DeleteTableDataFlow返回参数结构体
 */
export interface DeleteTableDataFlowResponse {
  /**
   * 删除表格分布式索引结果数量
   */
  TotalCount: number

  /**
   * 删除表格分布式索引结果列表
   */
  TableResults: Array<TableResultNew>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateApply请求参数结构体
 */
export interface UpdateApplyRequest {
  /**
   * 申请单状态
   */
  ApplyStatus: Array<ApplyStatus>
}

/**
 * ModifyTableMemos请求参数结构体
 */
export interface ModifyTableMemosRequest {
  /**
   * 表所属集群实例ID
   */
  ClusterId: string

  /**
   * 选定表详情列表
   */
  TableMemos: Array<SelectedTableInfoNew>
}

/**
 * DescribeUinInWhitelist返回参数结构体
 */
export interface DescribeUinInWhitelistResponse {
  /**
   * 查询结果：`FALSE` 否；`TRUE` 是
   */
  Result?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 快照列表
 */
export interface SnapshotInfo {
  /**
   * 所属表格组ID
   */
  TableGroupId: string

  /**
   * 表名称
   */
  TableName: string

  /**
   * 快照名称
   */
  SnapshotName: string

  /**
   * 快照时间点
   */
  SnapshotTime: string

  /**
   * 快照过期时间点
   */
  SnapshotDeadTime: string
}

/**
 * 从IDL表描述文件中解析出来的表信息
 */
export interface ParsedTableInfoNew {
  /**
      * 表格描述语言类型：`PROTO`或`TDR`
注意：此字段可能返回 null，表示取不到有效值。
      */
  TableIdlType: string

  /**
      * 表格实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  TableInstanceId: string

  /**
      * 表格名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  TableName: string

  /**
      * 表格数据结构类型：`GENERIC`或`LIST`
注意：此字段可能返回 null，表示取不到有效值。
      */
  TableType: string

  /**
      * 主键字段信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  KeyFields: string

  /**
      * 原主键字段信息，改表校验时有效
注意：此字段可能返回 null，表示取不到有效值。
      */
  OldKeyFields: string

  /**
      * 非主键字段信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ValueFields: string

  /**
      * 原非主键字段信息，改表校验时有效
注意：此字段可能返回 null，表示取不到有效值。
      */
  OldValueFields: string

  /**
      * 所属表格组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  TableGroupId: string

  /**
      * 主键字段总大小
注意：此字段可能返回 null，表示取不到有效值。
      */
  SumKeyFieldSize: number

  /**
      * 非主键字段总大小
注意：此字段可能返回 null，表示取不到有效值。
      */
  SumValueFieldSize: number

  /**
      * 索引键集合
注意：此字段可能返回 null，表示取不到有效值。
      */
  IndexKeySet: string

  /**
      * 分表因子集合
注意：此字段可能返回 null，表示取不到有效值。
      */
  ShardingKeySet: string

  /**
      * TDR版本号
注意：此字段可能返回 null，表示取不到有效值。
      */
  TdrVersion: number

  /**
      * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Error: ErrorInfo

  /**
      * LIST类型表格元素个数
注意：此字段可能返回 null，表示取不到有效值。
      */
  ListElementNum: number

  /**
      * SORTLIST类型表格排序字段个数
注意：此字段可能返回 null，表示取不到有效值。
      */
  SortFieldNum: number

  /**
      * SORTLIST类型表格排序顺序
注意：此字段可能返回 null，表示取不到有效值。
      */
  SortRule: number
}

/**
 * RollbackTables返回参数结构体
 */
export interface RollbackTablesResponse {
  /**
   * 表格回档任务结果数量
   */
  TotalCount?: number

  /**
   * 表格回档任务结果列表
   */
  TableResults?: Array<TableRollbackResultNew>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 机器类型和数量
 */
export interface MachineInfo {
  /**
   * 机器类型
   */
  MachineType: string

  /**
   * 机器数量
   */
  MachineNum: number
}

/**
 * CreateBackup请求参数结构体
 */
export interface CreateBackupRequest {
  /**
   * 待创建备份表所属集群ID
   */
  ClusterId: string

  /**
   * 待创建备份表信息列表
   */
  SelectedTables: Array<SelectedTableInfoNew>

  /**
   * 备注信息
   */
  Remark?: string
}

/**
 * 表处理结果信息
 */
export interface TableResultNew {
  /**
      * 表格实例ID，形如：tcaplus-3be64cbb
注意：此字段可能返回 null，表示取不到有效值。
      */
  TableInstanceId: string

  /**
      * 任务ID，对于创建单任务的接口有效
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskId: string

  /**
      * 表格名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  TableName: string

  /**
      * 表格数据结构类型，如：`GENERIC`或`LIST`
注意：此字段可能返回 null，表示取不到有效值。
      */
  TableType: string

  /**
      * 表数据描述语言（IDL）类型，如：`PROTO`或`TDR`
注意：此字段可能返回 null，表示取不到有效值。
      */
  TableIdlType: string

  /**
      * 表格所属表格组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  TableGroupId: string

  /**
      * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Error: ErrorInfo

  /**
      * 任务ID列表，对于创建多任务的接口有效
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskIds: Array<string>

  /**
      * 腾讯云申请审核单Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ApplicationId: string
}

/**
 * CreateTables请求参数结构体
 */
export interface CreateTablesRequest {
  /**
   * 待创建表格所属集群ID
   */
  ClusterId: string

  /**
   * 用户选定的建表格IDL文件列表
   */
  IdlFiles: Array<IdlFileInfo>

  /**
   * 待创建表格信息列表
   */
  SelectedTables: Array<SelectedTableInfoNew>

  /**
   * 表格标签列表
   */
  ResourceTags?: Array<TagInfoUnit>
}

/**
 * DescribeClusterTags请求参数结构体
 */
export interface DescribeClusterTagsRequest {
  /**
   * 集群ID列表
   */
  ClusterIds: Array<string>
}

/**
 * RecoverRecycleTables返回参数结构体
 */
export interface RecoverRecycleTablesResponse {
  /**
   * 恢复表结果数量
   */
  TotalCount?: number

  /**
   * 恢复表信息列表
   */
  TableResults?: Array<TableResultNew>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MergeTablesData返回参数结构体
 */
export interface MergeTablesDataResponse {
  /**
   * 合服结果集
   */
  Results: Array<MergeTableResult>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeApplications请求参数结构体
 */
export interface DescribeApplicationsRequest {
  /**
   * 集群ID，用于获取指定集群的单据
   */
  ClusterId?: string

  /**
   * 分页，限制当前返回多少条记录，大于等于10
   */
  Limit?: number

  /**
   * 分页，从多少条数据开始返回
   */
  Offset?: number

  /**
   * 申请单状态，用于过滤，0-待审核 1-已经审核并提交任务 2-已驳回
   */
  CensorStatus?: number

  /**
   * 表格组id，用于过滤
   */
  TableGroupId?: string

  /**
   * 表格名，用于过滤
   */
  TableName?: string

  /**
   * 申请人uin，用于过滤
   */
  Applicant?: string

  /**
   * 申请类型，用于过滤，0加表 1删除表 2清理表 3修改表 4表重建 5存储层扩缩容 6接入层扩缩容 7复制表数据 8key回档
   */
  ApplyType?: number
}

/**
 * DescribeTableGroups返回参数结构体
 */
export interface DescribeTableGroupsResponse {
  /**
   * 表格组数量
   */
  TotalCount?: number

  /**
   * 表格组信息列表
   */
  TableGroups?: Array<TableGroupInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTableGroup返回参数结构体
 */
export interface DeleteTableGroupResponse {
  /**
   * 删除表格组所创建的任务ID
   */
  TaskId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * center资源池中的机器信息
 */
export interface PoolInfo {
  /**
   * 唯一id
   */
  PoolUid: number

  /**
   * 是否支持ipv6
   */
  Ipv6Enable: number

  /**
   * 剩余可用app
   */
  AvailableAppCount: number

  /**
   * svr机器列表
   */
  ServerList: Array<ServerMachineInfo>

  /**
   * proxy机器列表
   */
  ProxyList: Array<ProxyMachineInfo>
}

/**
 * DescribeMachine请求参数结构体
 */
export interface DescribeMachineRequest {
  /**
   * 不为0，表示查询支持ipv6的机器
   */
  Ipv6Enable?: number
}

/**
 * RollbackTables请求参数结构体
 */
export interface RollbackTablesRequest {
  /**
   * 待回档表格所在集群ID
   */
  ClusterId: string

  /**
   * 待回档表格列表
   */
  SelectedTables: Array<SelectedTableInfoNew>

  /**
   * 待回档时间
   */
  RollbackTime: string

  /**
   * 回档模式，支持：`KEYS`
   */
  Mode?: string
}

/**
 * ModifyCensorship返回参数结构体
 */
export interface ModifyCensorshipResponse {
  /**
   * 集群id
   */
  ClusterId: string

  /**
      * 已加入审批人的uin
注意：此字段可能返回 null，表示取不到有效值。
      */
  Uins: Array<string>

  /**
   * 集群是否开启审核 0-关闭 1-开启
   */
  Censorship: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CompareIdlFiles请求参数结构体
 */
export interface CompareIdlFilesRequest {
  /**
   * 待修改表格所在集群ID
   */
  ClusterId: string

  /**
   * 待修改表格列表
   */
  SelectedTables: Array<SelectedTableInfoNew>

  /**
   * 选中的已上传IDL文件列表，与NewIdlFiles必选其一
   */
  ExistingIdlFiles?: Array<IdlFileInfo>

  /**
   * 本次上传IDL文件列表，与ExistingIdlFiles必选其一
   */
  NewIdlFiles?: Array<IdlFileInfo>
}

/**
 * 独占的proxy详细信息
 */
export interface ProxyDetailInfo {
  /**
   * proxy的唯一id
   */
  ProxyUid: string

  /**
   * 机器类型
   */
  MachineType: string

  /**
   * 请求包速度
   */
  ProcessSpeed: number

  /**
   * 请求包时延
   */
  AverageProcessDelay: number

  /**
   * 慢处理包速度
   */
  SlowProcessSpeed: number
}

/**
 * 表定义描述文件详情，不包含文件内容
 */
export interface IdlFileInfoWithoutContent {
  /**
      * 文件名称，不包含扩展名
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileName: string

  /**
      * 数据描述语言（IDL）类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileType: string

  /**
      * 文件扩展名
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileExtType: string

  /**
      * 文件大小（Bytes）
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileSize: number

  /**
      * 文件ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileId: number

  /**
      * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Error: ErrorInfo
}

/**
 * ModifyTableMemos返回参数结构体
 */
export interface ModifyTableMemosResponse {
  /**
   * 表备注修改结果数量
   */
  TotalCount?: number

  /**
   * 表备注修改结果列表
   */
  TableResults?: Array<TableResultNew>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyClusterMachine请求参数结构体
 */
export interface ModifyClusterMachineRequest {
  /**
   * 集群id
   */
  ClusterId: string

  /**
   * svr占用的机器
   */
  ServerList: Array<MachineInfo>

  /**
   * proxy占用的机器
   */
  ProxyList: Array<MachineInfo>

  /**
   * 集群类型1共享集群2独占集群
   */
  ClusterType: number
}

/**
 * 过滤条件
 */
export interface Filter {
  /**
   * 过滤字段名
   */
  Name: string

  /**
   * 过滤字段值
   */
  Value?: string

  /**
   * 过滤字段值
   */
  Values?: Array<string>
}

/**
 * ModifySnapshots请求参数结构体
 */
export interface ModifySnapshotsRequest {
  /**
   * 表格所属集群id
   */
  ClusterId: string

  /**
   * 快照列表
   */
  SelectedTables: Array<SnapshotInfoNew>
}

/**
 * ImportSnapshots请求参数结构体
 */
export interface ImportSnapshotsRequest {
  /**
   * 表格所属的集群id
   */
  ClusterId: string

  /**
   * 用于导入的快照信息
   */
  Snapshots: SnapshotInfo

  /**
   * 是否导入部分记录，TRUE表示导入部分记录，FALSE表示全表导入
   */
  ImportSpecialKey: string

  /**
   * 是否导入到当前表，TRUE表示导入到当前表，FALSE表示导入到新表
   */
  ImportOriginTable: string

  /**
   * 部分记录的key文件
   */
  KeyFile?: KeyFile

  /**
   * 如果导入到新表，此为新表所属的表格组id
   */
  NewTableGroupId?: string

  /**
   * 如果导入到新表，此为新表的表名，系统会以该名称自动创建一张结构相同的空表
   */
  NewTableName?: string
}

/**
 * 描述每个实例（应用，大区或表）处理过程中可能出现的错误详情。
 */
export interface ErrorInfo {
  /**
   * 错误码
   */
  Code: string

  /**
   * 错误信息
   */
  Message: string
}

/**
 * 表格组详细信息
 */
export interface TableGroupInfo {
  /**
   * 表格组ID
   */
  TableGroupId: string

  /**
   * 表格组名称
   */
  TableGroupName: string

  /**
   * 表格组创建时间
   */
  CreatedTime: string

  /**
   * 表格组包含的表格数量
   */
  TableCount: number

  /**
   * 表格组包含的表格存储总量（MB）
   */
  TotalSize: number
}
