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
 * 可恢复时间区间
 */
export interface ArchiveLogInterval {
  /**
   * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 大版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  MajorVersion?: string
  /**
   * 小版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  MinorVersion?: string
  /**
   * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
}

/**
 * IsolateDBInstance请求参数结构体
 */
export interface IsolateDBInstanceRequest {
  /**
   * 需要隔离的实例ID列表
   */
  InstanceIds: Array<string>
}

/**
 * ModifyBinlogStatus返回参数结构体
 */
export interface ModifyBinlogStatusResponse {
  /**
   * flow的流程id
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFlow请求参数结构体
 */
export type DescribeFlowRequest = null

/**
 * ModifyDBSBackupSetComment返回参数结构体
 */
export interface ModifyDBSBackupSetCommentResponse {
  /**
   * <p>是否成功</p>
   */
  IsSuccess?: boolean
  /**
   * <p>修改信息</p>
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInstanceName返回参数结构体
 */
export interface ModifyInstanceNameResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDatabaseTable请求参数结构体
 */
export interface DescribeDatabaseTableRequest {
  /**
   * 实例 ID，形如：tdsql3-ow7t8lmc。
   */
  InstanceId: string
  /**
   * 数据库名称，通过 DescribeDatabases 接口获取。
   */
  DbName: string
  /**
   * 表名称，通过 DescribeDatabaseObjects 接口获取。
   */
  Table: string
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
 * DescribeDBParameters请求参数结构体
 */
export interface DescribeDBParametersRequest {
  /**
   * 实例 ID，形如：tdsql3-ow728lmc。
   */
  InstanceId: string
}

/**
 * DescribeDatabaseTable返回参数结构体
 */
export interface DescribeDatabaseTableResponse {
  /**
   * 实例名称。
   */
  InstanceId: string
  /**
   * 数据库名称。
   */
  DbName: string
  /**
   * 表名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Table: string
  /**
   * 列信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Cols: Array<TableColumn>
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
   * 透传入参。
   */
  InstanceId: string
  /**
   * 数据库名称。
   */
  DbName: string
  /**
   * 表列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tables: Array<DatabaseTable>
  /**
   * 视图列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Views: Array<DatabaseView>
  /**
   * 存储过程列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Procs: Array<DatabaseProcedure>
  /**
   * 函数列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Funcs: Array<DatabaseFunction>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 安全出入口规则
 */
export interface SecurityGroupBound {
  /**
   * 来源 IP 或 IP 段，例如192.168.0.0/16
   */
  CidrIp?: string
  /**
   * 策略，ACCEPT 或者 DROP
   */
  Action?: string
  /**
   * 端口
   */
  PortRange?: string
  /**
   * 网络协议，支持 UDP、TCP 等
   */
  IpProtocol?: string
}

/**
 * CreateDBSBackup返回参数结构体
 */
export interface CreateDBSBackupResponse {
  /**
   * <p>备份集ID</p>
   */
  BackupSetId?: number
  /**
   * <p>是否成功</p>
   */
  IsSuccess?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDBSBackup请求参数结构体
 */
export interface CreateDBSBackupRequest {
  /**
   * <p>备份方式：physical、snapshot 这个值和DescribeDBSBackupPolicy接口返回的backupMethod保持一致</p>枚举值：<ul><li> physical： 物理备份</li><li> snapshot： 快照备份</li></ul>
   */
  BackupMethod: string
  /**
   * <p>备份类型：暂时只支持full</p>
   */
  BackupType: string
  /**
   * <p>实例ID</p>
   */
  InstanceId: string
  /**
   * <p>备份备注</p>
   */
  BackupName?: string
}

/**
 * DescribeBillingEnable返回参数结构体
 */
export interface DescribeBillingEnableResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DestroyInstances请求参数结构体
 */
export interface DestroyInstancesRequest {
  /**
   * 需要隔离的实例ID列表
   */
  InstanceIds: Array<string>
}

/**
 * DescribeBillingEnable请求参数结构体
 */
export type DescribeBillingEnableRequest = null

/**
 * DescribeDBSecurityGroups请求参数结构体
 */
export interface DescribeDBSecurityGroupsRequest {
  /**
   * 实例ID。
   */
  InstanceId: string
}

/**
 * 数据库列信息
 */
export interface TableColumn {
  /**
   * 列名称
   */
  Col: string
  /**
   * 列类型
   */
  Type: string
}

/**
 * ModifyDBParameters返回参数结构体
 */
export interface ModifyDBParametersResponse {
  /**
   * 123
   */
  TaskID: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInstanceName请求参数结构体
 */
export interface ModifyInstanceNameRequest {
  /**
   * 需要修改的实例id
   */
  InstanceId: string
  /**
   * 修改的实例名称，要求长度1-60，允许包含中文、英文大小写、数字、-、_
   */
  InstanceName: string
}

/**
 * DB参数描述
 */
export interface ParamDesc {
  /**
   * 参数名字
   */
  Param: string
  /**
   * 当前参数值
   */
  Value: string
  /**
   * 设置过的值，参数生效后，该值和value一样。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SetValue: string
  /**
   * 系统默认值
   */
  Default: string
  /**
   * 参数限制
注意：此字段可能返回 null，表示取不到有效值。
   */
  Constraint: ParamConstraint
  /**
   * 是否有设置过值，false:没有设置过值，true:有设置过值。
   */
  HaveSetValue: boolean
  /**
   * true:需要重启
   */
  NeedRestart: boolean
  /**
   * 参数描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description: string
}

/**
 * ModifyAutoRenewFlag请求参数结构体
 */
export interface ModifyAutoRenewFlagRequest {
  /**
   * 需要修改的实例列表
   */
  InstanceIds: Array<string>
  /**
   * 1表示开启自动续费，0为关闭自动续费
   */
  AutoRenewFlag: number
}

/**
 * ModifyDBSBackupPolicy返回参数结构体
 */
export interface ModifyDBSBackupPolicyResponse {
  /**
   * 是否成功
   */
  IsSuccess?: boolean
  /**
   * 消息
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBSCloneInstances返回参数结构体
 */
export interface DescribeDBSCloneInstancesResponse {
  /**
   * <p>克隆列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<CloneInstanceModel>
  /**
   * <p>总数</p>
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBSecurityGroups返回参数结构体
 */
export interface DescribeDBSecurityGroupsResponse {
  /**
   * 安全组详情。
   */
  Groups?: Array<SecurityGroup>
  /**
   * 实例VIP
注意：此字段可能返回 null，表示取不到有效值。
   */
  VIP?: string
  /**
   * 实例端口
注意：此字段可能返回 null，表示取不到有效值。
   */
  VPort?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 修改备份策略对象
 */
export interface BackupPolicyModelInput {
  /**
   * <p>备份结束时间</p>
   */
  BackupEndTime?: string
  /**
   * <p>备份方式  physical 物理备份 snapshot 快照备份</p>
   */
  BackupMethod?: string
  /**
   * <p>备份开始时间</p>
   */
  BackupStartTime?: string
  /**
   * <p>是否开启全量备份</p>
   */
  EnableFull?: number
  /**
   * <p>是否开启日志备份</p>
   */
  EnableLog?: number
  /**
   * <p>全备保留时间,目前只能设置7天</p>
   */
  FullRetentionPeriod?: number
  /**
   * <p>实例ID</p>
   */
  InstanceId?: string
  /**
   * <p>日志保留天数，目前只能设置保留7天</p>
   */
  LogRetentionPeriod?: number
  /**
   * <p>一周的哪几天进行备份</p>
   */
  PeriodTime?: string
  /**
   * <p>存储类型:COS,SNAPSHOT</p>枚举值：<ul><li> COS： COS存储</li><li> SNAPSHOT： 云盘快照</li></ul>
   */
  StorageType?: string
}

/**
 * 数据库函数信息
 */
export interface DatabaseFunction {
  /**
   * 函数名称
   */
  Func: string
}

/**
 * ModifyDBSBackupPolicy请求参数结构体
 */
export interface ModifyDBSBackupPolicyRequest {
  /**
   * 备份策略
   */
  BackupPolicy: BackupPolicyModelInput
  /**
   * 实例ID
   */
  InstanceId: string
}

/**
 * DescribeDBSCloneInstances请求参数结构体
 */
export interface DescribeDBSCloneInstancesRequest {
  /**
   * <p>源实例ID</p>
   */
  SourceInstanceId: string
  /**
   * <p>引擎类型</p>
   */
  DBType?: string
  /**
   * <p>结束创建时间</p>
   */
  EndCreateTime?: string
  /**
   * <p>克隆类型: PITR 时间点 BackupSet 备份集</p>
   */
  FilterCloneType?: string
  /**
   * <p>查询数量[0,200]</p>
   */
  Limit?: number
  /**
   * <p>查询偏移量[0,INF]</p>
   */
  Offset?: number
  /**
   * <p>排序字段: CloneTime,CreateTime</p>
   */
  OrderBy?: string
  /**
   * <p>排序类型:ASC,DESC</p>
   */
  OrderType?: string
  /**
   * <p>开始创建时间</p>
   */
  StartCreateTime?: string
}

/**
 * DescribeDatabaseObjects请求参数结构体
 */
export interface DescribeDatabaseObjectsRequest {
  /**
   * 实例 ID，形如：tdsql3-42f40429.
   */
  InstanceId: string
  /**
   * 数据库名称，通过 DescribeDatabases 接口获取。
   */
  DbName: string
}

/**
 * DescribeDBSAvailableRecoveryTime返回参数结构体
 */
export interface DescribeDBSAvailableRecoveryTimeResponse {
  /**
   * <p>结束时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * <p>可恢复时间区间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Intervals?: Array<ArchiveLogInterval>
  /**
   * <p>开始时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAutoRenewFlag返回参数结构体
 */
export interface ModifyAutoRenewFlagResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DestroyInstances返回参数结构体
 */
export interface DestroyInstancesResponse {
  /**
   * 解除隔离成功实例Id列表
   */
  SuccessInstanceIds: Array<string>
  /**
   * 解除隔离失败实例Id列表
   */
  FailedInstanceIds: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBParameters返回参数结构体
 */
export interface DescribeDBParametersResponse {
  /**
   * 实例 ID，形如：tdsql3-ow728lmc。
   */
  InstanceId: string
  /**
   * 请求实例的当前参数值
   */
  Params: Array<ParamDesc>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 安全组详情
 */
export interface SecurityGroup {
  /**
   * 项目ID
   */
  ProjectId?: number
  /**
   * 创建时间，时间格式：yyyy-mm-dd hh:mm:ss
   */
  CreateTime?: string
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
  SecurityGroupRemark?: string
  /**
   * 入站规则
   */
  Inbound?: Array<SecurityGroupBound>
  /**
   * 出站规则
   */
  Outbound?: Array<SecurityGroupBound>
}

/**
 * IsolateDBInstance返回参数结构体
 */
export interface IsolateDBInstanceResponse {
  /**
   * 隔离成功实例Id列表
   */
  SuccessInstanceIds: Array<string>
  /**
   * 隔离失败实例Id列表
   */
  FailedInstanceIds: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBSAvailableRecoveryTime请求参数结构体
 */
export interface DescribeDBSAvailableRecoveryTimeRequest {
  /**
   * <p>db实例ID</p>
   */
  InstanceId: string
  /**
   * <p>备份集ID,值来自 DescribeDBSBackupSets 接口返回</p>
   */
  BackupSetId?: number
}

/**
 * 数据库表信息
 */
export interface DatabaseTable {
  /**
   * 表名
   */
  Table: string
}

/**
 * DeleteDBSBackupSets返回参数结构体
 */
export interface DeleteDBSBackupSetsResponse {
  /**
   * <p>本次实际删除的备份数量</p>
   */
  Deleted?: number
  /**
   * <p>是否全部删除成功</p>
   */
  IsSuccess?: boolean
  /**
   * <p>需要删除的备份总数</p>
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFlow返回参数结构体
 */
export interface DescribeFlowResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 约束类型值的范围
 */
export interface ConstraintRange {
  /**
   * 约束类型为section时的最小值
   */
  Min: string
  /**
   * 约束类型为section时的最大值
   */
  Max: string
}

/**
 * CancelIsolateDBInstances返回参数结构体
 */
export interface CancelIsolateDBInstancesResponse {
  /**
   * 解除隔离成功实例Id列表
   */
  SuccessInstanceIds: Array<string>
  /**
   * 解除隔离失败实例Id列表
   */
  FailedInstanceIds: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 数据库视图信息
 */
export interface DatabaseView {
  /**
   * 视图名称
   */
  View: string
}

/**
 * CancelIsolateDBInstances请求参数结构体
 */
export interface CancelIsolateDBInstancesRequest {
  /**
   * 需要隔离的实例ID列表
   */
  InstanceIds: Array<string>
}

/**
 * ModifyDBSBackupSetComment请求参数结构体
 */
export interface ModifyDBSBackupSetCommentRequest {
  /**
   * <p>实例ID</p>
   */
  InstanceId: string
  /**
   * <p>备份集ID,值来自 DescribeDBSBackupSets 接口返回</p>
   */
  BackupSetId: number
  /**
   * <p>备份备注</p>
   */
  NewBackupName: string
}

/**
 * 数据库存储过程信息
 */
export interface DatabaseProcedure {
  /**
   * 存储过程名称
   */
  Proc: string
}

/**
 * 云数据库参数信息。
 */
export interface DBParamValue {
  /**
   * 参数名称
   */
  Param: string
  /**
   * 参数值
   */
  Value: string
}

/**
 * 参数约束
 */
export interface ParamConstraint {
  /**
   * 约束类型,如枚举enum，区间section
   */
  Type: string
  /**
   * 约束类型为enum时的可选值列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Enum: string
  /**
   * 约束类型为section时的范围
注意：此字段可能返回 null，表示取不到有效值。
   */
  Range: ConstraintRange
  /**
   * 约束类型为string时的可选值列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  String: string
}

/**
 * ModifyBinlogStatus请求参数结构体
 */
export interface ModifyBinlogStatusRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 1打开0关闭
   */
  Status: number
}

/**
 * ModifyDBParameters请求参数结构体
 */
export interface ModifyDBParametersRequest {
  /**
   * 实例 ID，形如：tdsql3-ow728lmc。
   */
  InstanceId: string
  /**
   * 参数列表，每一个元素是Param和Value的组合
   */
  Params: Array<DBParamValue>
}

/**
 * ModifyDBInstanceSecurityGroups请求参数结构体
 */
export interface ModifyDBInstanceSecurityGroupsRequest {
  /**
   * 实例ID。
   */
  InstanceId: string
  /**
   * 要修改的安全组 ID 列表，一个或者多个安全组 ID 组成的数组。
   */
  SecurityGroupIds: Array<string>
}

/**
 * DeleteDBSBackupSets请求参数结构体
 */
export interface DeleteDBSBackupSetsRequest {
  /**
   * <p>实例ID</p>
   */
  InstanceId: string
  /**
   * <p>备份集列表 ,值来自 DescribeDBSBackupSets 接口返回</p>
   */
  BackupSetIdList?: Array<number | bigint>
}

/**
 * 克隆实例对象
 */
export interface CloneInstanceModel {
  /**
   * 克隆任务结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CloneEndTime?: string
  /**
   * 克隆记录ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CloneId?: number
  /**
   * 克隆实例类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  CloneInsType?: string
  /**
   * 克隆实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CloneInstanceId?: string
  /**
   * 克隆实例是否已经删除
注意：此字段可能返回 null，表示取不到有效值。
   */
  CloneInstanceIsDeleted?: boolean
  /**
   * 克隆任务进度
注意：此字段可能返回 null，表示取不到有效值。
   */
  CloneProgress?: number
  /**
   * 克隆任务开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CloneStartTime?: string
  /**
   * 克隆任务状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  CloneStatus?: string
  /**
   * 克隆时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CloneTime?: string
  /**
   * 克隆类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  CloneType?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 引擎类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  DBType?: string
  /**
   * 地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * 源实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceInstanceId?: string
}
