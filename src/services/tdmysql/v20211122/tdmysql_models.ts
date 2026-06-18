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
 * CreateDBInstances请求参数结构体
 */
export interface CreateDBInstancesRequest {
  /**
   * <p>创建实例区域</p>
   */
  Zone: string
  /**
   * <p>字符型vpcid</p>
   */
  VpcId: string
  /**
   * <p>字符型subnetid</p>
   */
  SubnetId: string
  /**
   * <p>购买规格</p>
   */
  SpecCode: string
  /**
   * <p>存储节点磁盘容量，单位GB</p>
   */
  Disk: number
  /**
   * <p>存储节点数量</p>
   */
  StorageNodeNum: number
  /**
   * <p>存储节点副本数量，最大为5，要求为奇数</p>
   */
  Replications: number
  /**
   * <p>创建实例个数，上限为10</p>
   */
  InstanceCount: number
  /**
   * <p>全能型副本数量</p>
   */
  FullReplications?: number
  /**
   * <p>创建实例版本，默认使用当前最新版本</p>
   */
  CreateVersion?: string
  /**
   * <p>实例名称，要求长度1-60，允许包含中文、英文大小写、数字、-、_</p>
   */
  InstanceName?: string
  /**
   * <p>标签键值对数组</p>
   */
  ResourceTags?: Array<ResourceTag>
  /**
   * <p>初始化实例参数。比如：<br>character_set_server（字符集，默认为utf8），<br>lower_case_table_names（表名大小写敏感，0 - 敏感；1-不敏感，默认为0）</p>
   */
  InitParams?: Array<InstanceParam>
  /**
   * <p>时间单位，m：月</p>
   */
  TimeUnit?: string
  /**
   * <p>商品的时间大小</p>
   */
  TimeSpan?: number
  /**
   * <p>存储节点CPU核数</p>
   */
  StorageNodeCpu?: number
  /**
   * <p>存储节点内存大小</p>
   */
  StorageNodeMem?: number
  /**
   * <p>付费模式，0表示按需计费/后付费，1表示预付费</p>
   */
  PayMode?: string
  /**
   * <p>管控节点数量</p>
   */
  MCNum?: number
  /**
   * <p>自定义端口</p>
   */
  Vport?: number
  /**
   * <p>多AZ可用区列表</p>
   */
  Zones?: Array<string>
  /**
   * <p>是否使用优惠卷</p>
   */
  AutoVoucher?: boolean
  /**
   * <p>优惠卷列表</p>
   */
  VoucherIds?: Array<string>
  /**
   * <p>实例架构类型，separate:分离架构；hybrid:对等架构</p>
   */
  InstanceType?: string
  /**
   * <p>磁盘类型,CLOUD_HSSD增强型SSD,CLOUD_TCS本地SSD盘</p>
   */
  StorageType?: string
  /**
   * <p>AZ模式，1:单AZ，2:多AZ非主AZ，3:多AZ主AZ</p>
   */
  AZMode?: number
  /**
   * <p>实例模式</p>
   */
  InstanceMode?: string
  /**
   * <p>参数模板id</p>
   */
  TemplateId?: string
  /**
   * <p>兼容模式，enum:MySQL,HBase</p>
   */
  SQLMode?: string
  /**
   * <p>svls实例的ccu变配配置</p>
   */
  AutoScaleConfig?: AutoScalingConfig
  /**
   * <p>绑定安全组列表</p>
   */
  SecurityGroupIds?: Array<string>
  /**
   * <p>root用户名,当前版本默认为dbaadmin，传值也会重置为dbaadmin</p>
   */
  UserName?: string
  /**
   * <p>dbaadmin密码</p>
   */
  Password?: string
  /**
   * <p>是否开启透明加密，0：不开启，1：开启</p>
   */
  EncryptionEnable?: number
}

/**
 * ModifyDBInstanceVPort请求参数结构体
 */
export interface ModifyDBInstanceVPortRequest {
  /**
   * 实例 ID，形如：tdsql3-5baee8df。
   */
  InstanceId: string
  /**
   * 新的VPC端口，3308
   */
  Vport: number
}

/**
 * ExpandInstance返回参数结构体
 */
export interface ExpandInstanceResponse {
  /**
   * <p>异步任务ID，根据此ID可以调用查询任务接口获取任务状态</p>
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询售卖接口，zone信息返回类型
 */
export interface DescribeSaleZonesInfo {
  /**
   * <p>Zone英文字符串</p>
   */
  Zone?: string
  /**
   * <p>Zone中文字符串</p>
   */
  ZoneName?: string
  /**
   * <p>是否售卖，1：售卖；0：不售卖</p>
   */
  Enable?: number
  /**
   * <p>是否是默认主可用区,0不是，1是</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsDefaultMaster?: number
  /**
   * <p>可用区可选磁盘类型</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AvailableDiskTypes?: Array<string>
  /**
   * <p>是否是独享可用区</p>
   */
  SupportTypes?: Array<string>
  /**
   * <p>是否支持serverless</p>
   */
  IsSupportServerless?: boolean
}

/**
 * 备份方式统计对象，提供给 备份集统计详情 接口
 */
export interface BackupMethodStatisticsOutPut {
  /**
   * <p>自动备份大小，单位Byte</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoBackupSize?: Array<number | bigint>
  /**
   * <p>手动备份大小，单位Byte</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ManualBackupSize?: Array<number | bigint>
}

/**
 * DescribeDatabases请求参数结构体
 */
export interface DescribeDatabasesRequest {
  /**
   * <p>实例 ID，形如：tdsql3-ow7t8lmc。</p>
   */
  InstanceId: string
  /**
   * <p>分页索引</p>
   */
  Offset?: number
  /**
   * <p>每页数量</p>
   */
  Limit?: number
  /**
   * <p>数据库名称匹配表达式</p>
   */
  DatabaseRegexp?: string
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
 * ModifyInstanceNetwork返回参数结构体
 */
export interface ModifyInstanceNetworkResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInstanceSSLStatus返回参数结构体
 */
export interface ModifyInstanceSSLStatusResponse {
  /**
   * <p>异步流程ID</p>
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RestartDBInstances返回参数结构体
 */
export interface RestartDBInstancesResponse {
  /**
   * <p>异步任务id</p>
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSlowLogs请求参数结构体
 */
export interface DescribeSlowLogsRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 要检索日志的起始时间
   */
  StartTime: string
  /**
   * 要检索日志的结束时间
   */
  EndTime: string
  /**
   * 过滤条件
   */
  LogFilter?: Array<LogFilter>
  /**
   * 单页条数限制
   */
  Limit?: number
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 排序，可选：ASC，DESC
   */
  Order?: string
  /**
   * 排序条件，根据业务字段不同，可选排序字段不一样
   */
  OrderBy?: string
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
 * DescribeUserPrivileges返回参数结构体
 */
export interface DescribeUserPrivilegesResponse {
  /**
   * 权限列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Privileges: Array<string>
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
 * 实例列表过滤条件
 */
export interface InstanceFilter {
  /**
   * 过滤key，支持InstanceId、VpcId、SubnetId、Vip、Vport、Status、InstanceName、TagKey
   */
  Name?: string
  /**
   * 过滤value
   */
  Values?: Array<string>
}

/**
 * 执行计划
 */
export interface Explain {
  /**
   * <p>标识符</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ID?: string
  /**
   * <p>查询类型</p><p>枚举值：</p><ul><li>SIMPLE： 没有子查询和 UNION 的普通查询，单表或普通 JOIN 都是 SIMPLE。</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SelectType?: string
  /**
   * <p>表名</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Table?: string
  /**
   * <p>分区</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Partitions?: string
  /**
   * <p>访问类型</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * <p>可能使用的索引</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PossibleKeys?: string
  /**
   * <p>实际使用的索引</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key?: string
  /**
   * <p>使用的索引长度</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  KeyLen?: string
  /**
   * <p>与索引比较的列或常量</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Ref?: string
  /**
   * <p>估算扫描行数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Rows?: string
  /**
   * <p>条件过滤后剩余行的估算百分比</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Filtered?: string
  /**
   * <p>附加信息，如 Using index、Using filesort 等</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Extra?: string
}

/**
 * 备份统计对象
 */
export interface BackupStatisticsModel {
  /**
   * <p>总备份每天平均大小,单位Byte</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AverageSizePerDay?: number
  /**
   * <p>数据备份大小，单位Byte</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataBackupSize?: number
  /**
   * <p>日志备份大小，单位Byte</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogBackupSize?: number
  /**
   * <p>总备份集个数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * <p>总备份大小，单位Byte</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalSize?: number
}

/**
 * 备份策略对象
 */
export interface BackupPolicyModelOutPut {
  /**
   * <p>备份结束时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupEndTime?: string
  /**
   * <p>备份方式</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupMethod?: string
  /**
   * <p>备份开始时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupStartTime?: string
  /**
   * <p>引擎类型</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DBType?: string
  /**
   * <p>引擎版本</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DBVersion?: string
  /**
   * <p>是否开启全量备份</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableFull?: number
  /**
   * <p>是否开启日志备份</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableLog?: number
  /**
   * <p>预计下次备份时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpectedNextBackupPeriod?: string
  /**
   * <p>全备保留时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  FullRetentionPeriod?: number
  /**
   * <p>策略ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ID?: number
  /**
   * <p>实例ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * <p>日志保留天数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogRetentionPeriod?: number
  /**
   * <p>一周的哪几天进行备份</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PeriodTime?: string
  /**
   * <p>地域</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * <p>备份周期类型  0:Weekly</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PeriodType?: number
}

/**
 * ModifyInstanceSSLStatus请求参数结构体
 */
export interface ModifyInstanceSSLStatusRequest {
  /**
   * <p>实例ID</p>
   */
  InstanceId: string
  /**
   * <p>是否启用SSL</p>
   */
  Enabled: boolean
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
 * DescribeDBSBackupStatisticsDetail请求参数结构体
 */
export interface DescribeDBSBackupStatisticsDetailRequest {
  /**
   * <p>实例ID</p>
   */
  InstanceId: string
  /**
   * <p>结束时间</p>
   */
  EndTime?: string
  /**
   * <p>开始时间</p>
   */
  StartTime?: string
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
 * 存储节点规格
 */
export interface StorageNodeSpec {
  /**
   * <p>规格码</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpecCode?: string
  /**
   * <p>存储节点CPU核数</p>
   */
  StorageNodeCpu?: number
  /**
   * <p>存储节点内存大小</p>
   */
  StorageNodeMem?: number
  /**
   * <p>存储节点最大数量</p>
   */
  StorageNodeMaxNum?: number
  /**
   * <p>存储节点磁盘大小上限</p>
   */
  StorageNodeMaxDisk?: number
  /**
   * <p>存储节点最小数量</p>
   */
  StorageNodeMinNum?: number
  /**
   * <p>存储节点磁盘大小下限</p>
   */
  StorageNodeMinDisk?: number
  /**
   * <p>磁盘类型，CLOUD_HSSD增强型SSD,CLOUD_TCS本地SSD盘</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageType?: string
  /**
   * <p>存储节点默认磁盘大小，用于前端展示</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageNodeDefaultDisk?: number
  /**
   * <p>规格支持计费模式列表</p>
   */
  InstanceMode?: Array<string>
  /**
   * <p>磁盘类型CLOUD_DISK：云盘LOCAL_DISK：本地盘</p>
   */
  DiskTypeCategory?: string
}

/**
 * IsolateDBInstance返回参数结构体
 */
export interface IsolateDBInstanceResponse {
  /**
   * 隔离成功实例Id列表
   */
  SuccessInstanceIds?: Array<string>
  /**
   * 隔离失败实例Id列表
   */
  FailedInstanceIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResetUserPassword返回参数结构体
 */
export interface ResetUserPasswordResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceSSLStatus返回参数结构体
 */
export interface DescribeInstanceSSLStatusResponse {
  /**
   * <p>SSL启用状态</p><p>枚举值：</p><ul><li>Enabled： SSL已开启</li><li>Disabled： SSL已关闭</li><li>Enabling： SSL开启中</li><li>Disabling： SSL关闭中</li></ul>
   */
  SSLStatus?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 维护窗口配置
 */
export interface MaintenanceWindowInfo {
  /**
   *
   */
  StartTime?: number
  /**
   *
   */
  Duration?: number
  /**
   *
   */
  WeekDays?: Array<string>
}

/**
 * DescribeDBSBackupStatisticsDetail返回参数结构体
 */
export interface DescribeDBSBackupStatisticsDetailResponse {
  /**
   * <p>按备份方式统计</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupMethodStatistics?: BackupMethodStatisticsOutPut
  /**
   * <p>备份时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupTime?: Array<string>
  /**
   * <p>按备份数据类型统计</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupTypeStatistics?: BackupTypeStatisticsModel
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeDBSBackupPolicy返回参数结构体
 */
export interface DescribeDBSBackupPolicyResponse {
  /**
   * <p>备份策略列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<BackupPolicyModelOutPut>
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
 * 用于展示该节点的 Binlog 信息。
 */
export interface BinlogInfo {
  /**
   * 日志服务的唯一 ID
   */
  Sid?: string
  /**
   * 日志服务的类型
   */
  Type?: string
  /**
   * 实例的唯一 ID
   */
  InstanceId?: string
}

/**
 * Database级别权限列表
 */
export interface DatabasePrivileges {
  /**
   * database名
   */
  Database: string
  /**
   * 权限列表
   */
  Privileges: Array<string>
}

/**
 * 节点信息类型
 */
export interface NodeInfo {
  /**
   * <p>节点IP信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  IP?: string
  /**
   * <p>节点类型，如sqlengine，tdstore，mc</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * <p>节点唯一标识</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeId?: string
  /**
   * <p>节点端口信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Port?: number
  /**
   * <p>节点所属可用区</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Zone?: string
  /**
   * <p>节点所属机器ip</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Host?: string
  /**
   * <p>节点日志服务信息</p>
   */
  BinlogInfo?: Array<BinlogInfo>
  /**
   * <p>节点cpu个数</p>
   */
  Cpu?: number
  /**
   * <p>节点mem大小</p>
   */
  Mem?: number
  /**
   * <p>节点磁盘大小</p>
   */
  DataDisk?: number
}

/**
 * DescribeSpecs返回参数结构体
 */
export interface DescribeSpecsResponse {
  /**
   * <p>对等节点售卖规格列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  HybridNodeSpecs?: Array<StorageNodeSpec>
  /**
   * <p>svls节点售卖规格列表</p>
   */
  ServerlessCcuSpec?: Array<ServerlessCcu>
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
 * CreateCloneInstance返回参数结构体
 */
export interface CreateCloneInstanceResponse {
  /**
   * <p>克隆实例ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * <p>任务ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyUserPrivileges返回参数结构体
 */
export interface ModifyUserPrivilegesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSlowLogs返回参数结构体
 */
export interface DescribeSlowLogsResponse {
  /**
   * 日志总数
   */
  TotalCount?: number
  /**
   * 日志详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<SlowLogData>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 备份集查询的filter
 */
export interface BackupSetsReqFilter {
  /**
   * <p>备份方式,多个值用逗号隔开</p><p>枚举值：</p><ul><li>physical： 物理备份</li><li>snapshot： 快照备份</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupMethod?: string
  /**
   * <p>备份状态，多个值用逗号隔开，含义说明：等待调度pending， 运行中 running, 成功success,失败 failed</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupStatus?: string
  /**
   * <p>备份类型，多个值用逗号隔开，含义说明：全量备份 full</p><p>枚举值：</p><ul><li>full： 全量备份</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupType?: string
  /**
   * <p>备份触发方式</p><p>枚举值：</p><ul><li>0： 自动备份</li><li>1： 手工备份</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ManualBackup?: string
}

/**
 * DescribeDBSBackupSets返回参数结构体
 */
export interface DescribeDBSBackupSetsResponse {
  /**
   * <p>备份集列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<BackupSetModel>
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
 * CreateCloneInstance请求参数结构体
 */
export interface CreateCloneInstanceRequest {
  /**
   * <p>创建实例区域</p>
   */
  Zone: string
  /**
   * <p>字符型vpcid</p>
   */
  VpcId: string
  /**
   * <p>字符型subnetid</p>
   */
  SubnetId: string
  /**
   * <p>购买规格</p>
   */
  SpecCode: string
  /**
   * <p>存储节点磁盘容量，单位GB</p>
   */
  Disk: number
  /**
   * <p>存储节点数量</p>
   */
  StorageNodeNum: number
  /**
   * <p>源实例id</p>
   */
  InstanceId: string
  /**
   * <p>实例名称，要求长度1-60，允许包含中文、英文大小写、数字、-、_</p>
   */
  InstanceName?: string
  /**
   * <p>标签键值对数组</p>
   */
  ResourceTags?: Array<ResourceTag>
  /**
   * <p>备份回档名称</p>
   */
  BackupName?: string
  /**
   * <p>存储节点CPU核数</p>
   */
  StorageNodeCpu?: number
  /**
   * <p>存储节点内存大小</p>
   */
  StorageNodeMem?: number
  /**
   * <p>创建版本</p>
   */
  CreateVersion?: string
  /**
   * <p>创建端口号</p>
   */
  Vport?: number
  /**
   * <p>恢复时间点</p>
   */
  RecoverTime?: string
  /**
   * <p>实例架构类型，separate:分离架构；hybrid:对等架构</p>
   */
  InstanceType?: string
  /**
   * <p>磁盘类型，CLOUD_HSSD增强型SSD,CLOUD_TCS本地SSD盘</p>
   */
  StorageType?: string
  /**
   * <p>多可用区列表，Zones[0]表示主可用区</p>
   */
  Zones?: Array<string>
  /**
   * <p>全能型副本数</p>
   */
  FullReplications?: number
  /**
   * <p>实例模式，normal：标准型；enhanced:加强型</p>
   */
  InstanceMode?: string
  /**
   * <p>安全组id列表</p>
   */
  SecurityGroupIds?: Array<string>
}

/**
 * DescribeDBInstances请求参数结构体
 */
export interface DescribeDBInstancesRequest {
  /**
   * <p>过滤参数</p>
   */
  Filters?: Array<InstanceFilter>
  /**
   * <p>最大返回个数，默认为20，上限为100</p>
   */
  Limit?: number
  /**
   * <p>偏移量，取Limit整数倍</p>
   */
  Offset?: number
  /**
   * <p>指定查询引擎类型</p><p>枚举值：</p><ul><li>libra： 列存引擎</li></ul>
   */
  EngineType?: string
}

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
 * 查询售卖接口，region信息返回类型
 */
export interface DescribeSaleRegionInfo {
  /**
   * <p>Region英文字符串</p>
   */
  Region?: string
  /**
   * <p>售卖Zone列表</p>
   */
  ZoneList?: Array<DescribeSaleZonesInfo>
  /**
   * <p>Region中文字符串</p>
   */
  RegionName?: string
  /**
   * <p>是否售卖。1:售卖，0不售卖</p>
   */
  Enable?: number
  /**
   * <p>多可用可选数量</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AvailableZoneNum?: number
  /**
   * <p>是否允许使用日志副本</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsSupportedLogReplica?: boolean
  /**
   * <p>可用区组合</p>
   */
  ZoneGroup?: Array<DescribeSaleZonesGroup>
  /**
   * <p>是否支持serverless</p>
   */
  IsSupportServerless?: boolean
}

/**
 * DescribeSaleInfo请求参数结构体
 */
export interface DescribeSaleInfoRequest {
  /**
   * <p>灾备主实例地域</p>
   */
  SrcRegion?: string
  /**
   * <p>实例id</p><p>传入此参数表示返回这个实例所在的地域可用区的售卖信息</p>
   */
  InstanceId?: string
  /**
   * <p>指定支持某种类型实例的 sale 信息</p><p>枚举值：</p><ul><li>serverless： 返回支持 serverless 型实例的所有 region</li></ul><p>默认值：无</p><p>当前仅支持指定 serverless，传入其他信息或者不传则默认返回所有售卖地域信息</p>
   */
  InstanceType?: string
}

/**
 * DescribeDBSArchiveLogs请求参数结构体
 */
export interface DescribeDBSArchiveLogsRequest {
  /**
   * <p>实例ID</p>
   */
  InstanceId: string
  /**
   * <p>日志记录ID</p>
   */
  ArchiveLogId?: number
  /**
   * <p>结束时间</p>
   */
  EndTime?: string
  /**
   * <p>备份状态：pending,running,success,failed</p>
   */
  FilterStatus?: string
  /**
   * <p>条数限制</p>
   */
  Limit?: number
  /**
   * <p>偏移量</p>
   */
  Offset?: number
  /**
   * <p>排序字段，枚举：StartTime,EndTime,ExpiredTime,FileSize,BackupDuration</p>
   */
  OrderBy?: string
  /**
   * <p>排序方式：ASC：顺序, DESC：倒序</p>
   */
  OrderType?: string
  /**
   * <p>开始时间</p>
   */
  StartTime?: string
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
 * CreateUsers返回参数结构体
 */
export interface CreateUsersResponse {
  /**
   * <p>任务id</p>
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBSBackupPolicy请求参数结构体
 */
export interface ModifyDBSBackupPolicyRequest {
  /**
   * <p>备份策略</p>
   */
  BackupPolicy: BackupPolicyModelInput
  /**
   * <p>实例ID</p>
   */
  InstanceId: string
}

/**
 * DescribeDBInstanceDetail返回参数结构体
 */
export interface DescribeDBInstanceDetailResponse {
  /**
   * <p>实例名称</p>
   */
  InstanceName?: string
  /**
   * <p>区域</p>
   */
  Zone?: string
  /**
   * <p>字符型vpcid</p>
   */
  VpcId?: string
  /**
   * <p>字符型subnetid</p>
   */
  SubnetId?: string
  /**
   * <p>创建实例版本</p>
   */
  CreateVersion?: string
  /**
   * <p>子网IP</p>
   */
  Vip?: string
  /**
   * <p>子网端口</p>
   */
  Vport?: number
  /**
   * <p>实例状态</p>
   */
  Status?: string
  /**
   * <p>存储节点磁盘容量，单位GB</p>
   */
  Disk?: number
  /**
   * <p>存储节点数量</p>
   */
  StorageNodeNum?: number
  /**
   * <p>初始化实例参数</p>
   */
  InitParams?: Array<InstanceParam>
  /**
   * <p>实例标签信息</p>
   */
  ResourceTags?: Array<ResourceTag>
  /**
   * <p>创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>更新时间</p>
   */
  UpdateTime?: string
  /**
   * <p>存储节点副本数量</p>
   */
  Replications?: number
  /**
   * <p>全能型副本数</p>
   */
  FullReplications?: number
  /**
   * <p>字符集</p>
   */
  CharSet?: string
  /**
   * <p>节点信息</p>
   */
  Node?: Array<NodeInfo>
  /**
   * <p>实例所属地域</p>
   */
  Region?: string
  /**
   * <p>实例规格</p>
   */
  SpecCode?: string
  /**
   * <p>实例ID</p>
   */
  InstanceId?: string
  /**
   * <p>实例状态中文描述</p>
   */
  StatusDesc?: string
  /**
   * <p>存储节点CPU核数</p>
   */
  StorageNodeCpu?: number
  /**
   * <p>存储节点内存大小</p>
   */
  StorageNodeMem?: number
  /**
   * <p>续费标志</p>
   */
  RenewFlag?: number
  /**
   * <p>付费模式，0后付费，1预付费</p>
   */
  PayMode?: string
  /**
   * <p>过期时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireAt?: string
  /**
   * <p>隔离时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsolatedAt?: string
  /**
   * <p>实例架构类型，separate:分离架构；hybrid:对等架构</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceType?: string
  /**
   * <p>磁盘类型，CLOUD_HSSD增强型SSD,CLOUD_TCS本地SSD盘</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageType?: string
  /**
   * <p>实例节点可用区列表。Zones[0]表示主可用区</p>
   */
  Zones?: Array<string>
  /**
   * <p>最大节点磁盘使用量</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DiskUsage?: number
  /**
   * <p>binlog是否开启</p>
   */
  BinlogStatus?: number
  /**
   * <p>az模式，1: 单AZ 2: 多AZ非主AZ模式 3: 多AZ主AZ模式</p>
   */
  AZMode?: number
  /**
   * <p>灾备标志位，1: 无灾备关系；2: 灾备主实例；3: 灾备备实例</p>
   */
  StandbyFlag?: number
  /**
   * <p>cdc节点类型</p>
   */
  BinlogType?: string
  /**
   * <p>1表示支持，0表示不支持</p>
   */
  TimingModifyInstanceFlag?: number
  /**
   * <p>列存节点cpu核数</p>
   */
  ColumnarNodeCpu?: number
  /**
   * <p>列存节点mem内存大小</p>
   */
  ColumnarNodeMem?: number
  /**
   * <p>列存节点个数</p>
   */
  ColumnarNodeNum?: number
  /**
   * <p>列存节点磁盘大小</p>
   */
  ColumnarNodeDisk?: number
  /**
   * <p>列存节点磁盘类型</p>
   */
  ColumnarNodeStorageType?: string
  /**
   * <p>列存节点规格</p>
   */
  ColumnarNodeSpecCode?: string
  /**
   * <p>列存 vip</p>
   */
  ColumnarVip?: string
  /**
   * <p>列存 vport</p>
   */
  ColumnarVport?: number
  /**
   * <p>实例是否支持列存</p>
   */
  IsSupportColumnar?: boolean
  /**
   * <p>实例类型</p>
   */
  InstanceCategory?: number
  /**
   * <p>兼容模式</p>
   */
  SQLMode?: string
  /**
   * <p>是否支持修改全能型副本数量</p>
   */
  IsSwitchFullReplicationsEnable?: boolean
  /**
   * <p>实例类型</p>
   */
  InstanceMode?: string
  /**
   * <p>dumper vip</p>
   */
  DumperVip?: string
  /**
   * <p>dumper vport</p>
   */
  DumperVport?: number
  /**
   * <p>svls实例的ccu变配范围</p>
   */
  AutoScaleConfig?: AutoScalingConfig
  /**
   * <p>参数模板id</p>
   */
  TemplateId?: string
  /**
   * <p>参数模板名称</p>
   */
  TemplateName?: string
  /**
   * <p>实例分析引擎模式</p><p>枚举值：</p><ul><li>libra： LibraDB分析引擎实例</li></ul>
   */
  AnalysisMode?: string
  /**
   * <p>分析引擎实例关系</p>
   */
  AnalysisRelationInfos?: Array<AnalysisRelationInfo>
  /**
   * <p>分析引擎实例信息</p><p>Cpu、Memory、Disk复用顶层字段</p>
   */
  AnalysisInstanceInfo?: AnalysisInstanceInfo
  /**
   * <p>维护窗口配置</p>
   */
  MaintenanceWindow?: MaintenanceWindowInfo
  /**
   * <p>是否开启透明加密，0：未开启；1：已开启</p>
   */
  EncryptionEnable?: number
  /**
   * <p>真实使用的kms地域，用于后续调用kms服务</p>
   */
  EncryptionKmsRegion?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDatabaseObjects请求参数结构体
 */
export interface DescribeDatabaseObjectsRequest {
  /**
   * <p>实例 ID，形如：tdsql3-42f40429.</p>
   */
  InstanceId: string
  /**
   * <p>数据库名称，通过 DescribeDatabases 接口获取。</p>
   */
  DbName: string
  /**
   * <p>分页索引</p>
   */
  Offset?: number
  /**
   * <p>每页数量</p>
   */
  Limit?: number
  /**
   * <p>数据表名称匹配表达式</p>
   */
  TableRegexp?: string
}

/**
 * ModifyMaintenanceWindow请求参数结构体
 */
export interface ModifyMaintenanceWindowRequest {
  /**
   * <p>实例ID</p>
   */
  InstanceId: string
  /**
   * <p>运维窗口开始时间</p><p>参数格式：hh:mm:ss</p>
   */
  StartTime: string
  /**
   * <p>运维窗口持续时间</p><p>取值范围：[1, 3]</p><p>单位：时</p>
   */
  Duration: number
  /**
   * <p>运维窗口日期</p><p>枚举值：</p><ul><li>Monday： 星期一</li><li>Tuesday： 星期二</li><li>Wednesday： 星期三</li><li>Thursday： 星期四</li><li>Friday： 星期五</li><li>Saturday： 星期六</li><li>Sunday： 星期日</li></ul>
   */
  WeekDays: Array<string>
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
 * DescribeSaleInfo返回参数结构体
 */
export interface DescribeSaleInfoResponse {
  /**
   * <p>返回可售卖region信息</p>
   */
  RegionList?: Array<DescribeSaleRegionInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteUsers返回参数结构体
 */
export interface DeleteUsersResponse {
  /**
   * <p>任务id</p>
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeDBInstanceDetail请求参数结构体
 */
export interface DescribeDBInstanceDetailRequest {
  /**
   * <p>实例ID</p>
   */
  InstanceId: string
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
 * DescribeUsers请求参数结构体
 */
export interface DescribeUsersRequest {
  /**
   * 实例ID
   */
  InstanceId: string
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
 * 数据备份统计对象
 */
export interface DataBackupStatisticsModel {
  /**
   * 自动备份个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoBackupCount?: number
  /**
   * 自动备份大小，单位Byte
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoBackupSize?: number
  /**
   * 平均每个备份大小,单位Byte
注意：此字段可能返回 null，表示取不到有效值。
   */
  AverageSizePerBackup?: number
  /**
   * 平均每天备份大小,单位Byte
注意：此字段可能返回 null，表示取不到有效值。
   */
  AverageSizePerDay?: number
  /**
   * 手工备份个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ManualBackupCount?: number
  /**
   * 手工备份大小，单位Byte
注意：此字段可能返回 null，表示取不到有效值。
   */
  ManualBackupSize?: number
  /**
   * 数据备份个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 数据备份大小，单位Byte
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalSize?: number
}

/**
 * 慢日志过滤
 */
export interface LogFilter {
  /**
   * 过滤条件名称。

如：sql - SQL命令详情

host – 客户端 IP；
user – 数据库账户；
dbName – 数据库名称；
sqlType - SQL类型；
errCode - 错误码

execTime - 执行时间
lockWaitTime - 锁等待时间
ioWaitTime - IO等待时间
trxLivingTime - 事务执行时间
cpuTime- Cpu时间

threadId - 线程ID
trxId - 事物ID
checkRows - 扫描行数
affectRows - 影响行数
sentRows - 返回行数
   */
  Type?: string
  /**
   * 过滤条件匹配类型。支持：
INC – 包含；     （多个值之前是||的关系）
EXC – 不包含； （多个值之前是&&的关系）
EQS – 等于；     （多个值之前是||的关系）
NEQ – 不等于；（多个值之前是&&的关系）

RG – 范围；
   */
  Compare?: string
  /**
   * 过滤条件匹配值。当Compare=RG时，例：["1-100","200-300"]
   */
  Value?: Array<string>
}

/**
 * ModifyDBSBackupPolicy返回参数结构体
 */
export interface ModifyDBSBackupPolicyResponse {
  /**
   * <p>是否成功</p>
   */
  IsSuccess?: boolean
  /**
   * <p>消息</p>
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * CreateUsers请求参数结构体
 */
export interface CreateUsersRequest {
  /**
   * <p>实例id</p>
   */
  InstanceId: string
  /**
   * <p>新增用户列表</p>
   */
  Users?: Array<User>
  /**
   * <p>未加密密码</p>
   */
  Password?: string
  /**
   * <p>加密密码</p>
   */
  EncryptedPassword?: string
  /**
   * <p>用户描述</p>
   */
  Description?: string
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
 * DescribeInstanceSSLStatus请求参数结构体
 */
export interface DescribeInstanceSSLStatusRequest {
  /**
   * <p>实例ID</p>
   */
  InstanceId: string
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
 * DeleteUsers请求参数结构体
 */
export interface DeleteUsersRequest {
  /**
   * <p>实例id</p>
   */
  InstanceId: string
  /**
   * <p>批量删除用户列表</p>
   */
  Users?: Array<User>
}

/**
 * ModifyUserPrivileges请求参数结构体
 */
export interface ModifyUserPrivilegesRequest {
  /**
   * 实例 ID，形如：tdsql3-5baee8df。
   */
  InstanceId: string
  /**
   * 登录用户名和主机信息
   */
  Users: Array<User>
  /**
   * 全局权限
   */
  GlobalPrivileges?: Array<string>
  /**
   * Database级别权限
   */
  DatabasePrivileges?: Array<DatabasePrivileges>
  /**
   * Table级别权限
   */
  TablePrivileges?: Array<TablePrivileges>
}

/**
 * DescribeDBSArchiveLogs返回参数结构体
 */
export interface DescribeDBSArchiveLogsResponse {
  /**
   * <p>归档日志列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<ArchiveLogModel>
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
 * DescribeDatabaseObjects返回参数结构体
 */
export interface DescribeDatabaseObjectsResponse {
  /**
   * <p>透传入参。</p>
   */
  InstanceId?: string
  /**
   * <p>数据库名称。</p>
   */
  DbName?: string
  /**
   * <p>表列表。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tables?: Array<DatabaseTable>
  /**
   * <p>视图列表。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Views?: Array<DatabaseView>
  /**
   * <p>存储过程列表。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Procs?: Array<DatabaseProcedure>
  /**
   * <p>函数列表。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Funcs?: Array<DatabaseFunction>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMaintenanceWindow返回参数结构体
 */
export interface DescribeMaintenanceWindowResponse {
  /**
   * <p>实例ID</p>
   */
  InstanceId?: string
  /**
   * <p>运维窗口时间范围</p>
   */
  MaintenanceWindow?: string
  /**
   * <p>运维窗口天数范围</p>
   */
  WeekDays?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 节点信息
 */
export interface InstanceNode {
  /**
   * 主键
注意：此字段可能返回 null，表示取不到有效值。
   */
  ID?: number
  /**
   * 实例id
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * Node Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeId?: string
  /**
   * 实例Ip
注意：此字段可能返回 null，表示取不到有效值。
   */
  Ip?: string
  /**
   * 实例EniIp
注意：此字段可能返回 null，表示取不到有效值。
   */
  EniIp?: string
  /**
   * 实例Port
注意：此字段可能返回 null，表示取不到有效值。
   */
  Port?: number
  /**
   * 实例SpecCode
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpecCode?: string
  /**
   * 实例NodeName
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeName?: string
  /**
   * 实例Cpu
注意：此字段可能返回 null，表示取不到有效值。
   */
  Cpu?: number
  /**
   * 实例Mem
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mem?: number
  /**
   * 实例Disk
注意：此字段可能返回 null，表示取不到有效值。
   */
  Disk?: number
  /**
   * 实例类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 实例状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 实例版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  Version?: string
  /**
   * 实例地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Zone?: string
  /**
   * 实例LocalDNS
注意：此字段可能返回 null，表示取不到有效值。
   */
  LocalDNS?: string
  /**
   * 实例Region
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * 实例日志盘
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogDisk?: number
  /**
   * 实例数据盘
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataDisk?: number
  /**
   * 实例ZoneID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ZoneID?: string
  /**
   * 实例SpecName
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpecName?: string
  /**
   * 实例Replicas
注意：此字段可能返回 null，表示取不到有效值。
   */
  Replicas?: number
  /**
   * 实例Shards
注意：此字段可能返回 null，表示取不到有效值。
   */
  Shards?: number
  /**
   * 实例数据副本
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataReplicas?: number
  /**
   * 实例初始化参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Params?: string
  /**
   * 存储介质, CLOUD_PREMIUM:高性能云盘，CLOUD_SSD: SSD 云盘，CLOUD_HSSD: HSSD 云盘
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageType?: string
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
 * DescribeDBSBackupStatistics返回参数结构体
 */
export interface DescribeDBSBackupStatisticsResponse {
  /**
   * <p>备份方式统计</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupMethodStatistics?: BackupMethodStatisticsModel
  /**
   * <p>总备份集统计</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupStatistics?: BackupStatisticsModel
  /**
   * <p>数据备份统计</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataBackupStatistics?: DataBackupStatisticsModel
  /**
   * <p>日志备份统计</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogBackupStatistics?: LogBackupStatisticsModel
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 备份方式统计对象，提供给 备份集统计详情 接口
 */
export interface BackupTypeStatisticsModel {
  /**
   * <p>数据备份大小，单位Byte</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataBackupSize?: Array<number | bigint>
  /**
   * <p>日志备份大小，单位Byte</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogBackupSize?: Array<number | bigint>
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
 * 实例信息类型
 */
export interface InstanceInfo {
  /**
   * <p>计算节点数量</p>
   * @deprecated
   */
  ComputeNodeNum?: number
  /**
   * <p>区域</p>
   */
  Zone?: string
  /**
   * <p>创建实例版本</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateVersion?: string
  /**
   * <p>初始化实例参数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  InitParams?: Array<InstanceParam>
  /**
   * <p>实例状态：creating、created、initializing、running、modifying、isolating、isolated、destroying、destroyed</p>
   */
  Status?: string
  /**
   * <p>实例id</p>
   */
  InstanceId?: string
  /**
   * <p>存储节点数量</p>
   */
  StorageNodeNum?: number
  /**
   * <p>实例标签信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceTags?: Array<ResourceTag>
  /**
   * <p>实例名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceName?: string
  /**
   * <p>计算节点cpu核数</p>
   * @deprecated
   */
  Cpu?: number
  /**
   * <p>字符型vpcid</p>
   */
  VpcId?: string
  /**
   * <p>计算节点mem，单位GB</p>
   * @deprecated
   */
  Mem?: number
  /**
   * <p>子网IP</p>
   */
  Vip?: string
  /**
   * <p>字符型subnetid</p>
   */
  SubnetId?: string
  /**
   * <p>子网端口</p>
   */
  Vport?: number
  /**
   * <p>存储节点磁盘容量，单位GB</p>
   */
  Disk?: number
  /**
   * <p>实例创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>实例所属地域</p>
   */
  Region?: string
  /**
   * <p>实例状态中文描述</p>
   */
  StatusDesc?: string
  /**
   * <p>管控节点CPU核数</p>
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  MCCpu?: number
  /**
   * <p>管控节点CPU大小</p>
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  MCMem?: number
  /**
   * <p>计算节点CPU核数</p>
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  ComputerNodeCpu?: number
  /**
   * <p>计算节点内存大小</p>
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  ComputerNodeMem?: number
  /**
   * <p>存储节点CPU核数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageNodeCpu?: number
  /**
   * <p>存储节点内存大小</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageNodeMem?: number
  /**
   * <p>管控节点数量</p>
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  MCNum?: number
  /**
   * <p>续费标志</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RenewFlag?: number
  /**
   * <p>付费模式，0按量付费；1包年包月</p>
   */
  PayMode?: string
  /**
   * <p>用户标签，inner：内部用户；external：外部用户</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccountTag?: string
  /**
   * <p>实例架构类型，separate:分离架构；hyper:对等架构</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceType?: string
  /**
   * <p>磁盘类型，CLOUD_HSSD增强型SSD,CLOUD_TCS本地SSD盘</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageType?: string
  /**
   * <p>&quot;0000-00-00 00:00:00&quot;</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DestroyedAt?: string
  /**
   * <p>&quot;0000-00-00 00:00:00&quot;</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireAt?: string
  /**
   * <p>&quot;0000-00-00 00:00:00&quot;</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsolatedAt?: string
  /**
   * <p>&quot;0000-00-00 00:00:00&quot;</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsolatedFrom?: string
  /**
   * <p>1</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Replications?: number
  /**
   * <p>全能型副本数</p>
   */
  FullReplications?: number
  /**
   * <p>账号信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: number
  /**
   * <p>账号信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubAccountUin?: string
  /**
   * <p>账号信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin?: string
  /**
   * <p>AZ信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Zones?: Array<string>
  /**
   * <p>实例节点</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Nodes?: Array<InstanceNode>
  /**
   * <p>binlog是否打开</p>
   */
  BinlogStatus?: number
  /**
   * <p>cdc节点核数</p>
   * @deprecated
   */
  CdcNodeCpu?: number
  /**
   * <p>cdc节点内存大小</p>
   * @deprecated
   */
  CdcNodeMem?: number
  /**
   * <p>cdc节点数</p>
   * @deprecated
   */
  CdcNodeNum?: number
  /**
   * <p>az模式，1: 单AZ 2: 多AZ非主AZ模式 3: 多AZ主AZ模式</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AZMode?: number
  /**
   * <p>灾备标志位，1: 无灾备关系；2: 灾备主实例；3: 灾备备实例</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  StandbyFlag?: number
  /**
   * <p>连接的备实例数量（仅当 StandbyFlag == 2 时有效）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  StandbySecondaryNum?: number
  /**
   * <p>列存节点 cpu 核数</p>
   */
  ColumnarNodeCpu?: number
  /**
   * <p>列存节点内存大小</p>
   */
  ColumnarNodeMem?: number
  /**
   * <p>列存节点数</p>
   */
  ColumnarNodeNum?: number
  /**
   * <p>列存节点磁盘容量，单位GB</p>
   */
  ColumnarNodeDisk?: number
  /**
   * <p>列存节点磁盘类型</p>
   */
  ColumnarNodeStorageType?: string
  /**
   * <p>独享标志位，1： 主实例（独享型）, 2: 主实例, 3： 灾备实例, 4： 灾备实例（独享型）</p>
   */
  InstanceCategory?: number
  /**
   * <p>dbdc-xxxxx</p>
   */
  ExclusiveClusterId?: string
  /**
   * <p>兼容模式</p>
   */
  SQLMode?: string
  /**
   * <p>实例模式</p>
   */
  InstanceMode?: string
  /**
   * <p>实例发货平台</p>
   * @deprecated
   */
  ClusterId?: string
  /**
   * <p>自动扩容配置</p>
   */
  AutoScaleConfig?: AutoScalingConfig
  /**
   * <p>分析引擎模式</p><p>枚举值：</p><ul><li>libra： LibraDB分析引擎模式</li></ul>
   */
  AnalysisMode?: string
  /**
   * <p>分析引擎关系信息</p>
   */
  AnalysisRelationInfos?: Array<AnalysisRelationInfo>
  /**
   * <p>分析引擎实例信息</p>
   */
  AnalysisInstanceInfo?: AnalysisInstanceInfo
}

/**
 * 数据库账号信息
 */
export interface User {
  /**
   * 用户名
   */
  UserName: string
  /**
   * 主机
   */
  Host: string
}

/**
 * DescribeDBSBackupSets请求参数结构体
 */
export interface DescribeDBSBackupSetsRequest {
  /**
   * <p>实例ID</p>
   */
  InstanceId: string
  /**
   * <p>实例备份集ID</p>
   */
  BackupSetId?: number
  /**
   * <p>结束时间</p>
   */
  EndTime?: string
  /**
   * <p>过滤条件</p>
   */
  FilterBy?: BackupSetsReqFilter
  /**
   * <p>单次查询数量[0,200]</p>
   */
  Limit?: number
  /**
   * <p>本次查询偏移[0,INF]</p>
   */
  Offset?: number
  /**
   * <p>StartTime,EndTime,ExpiredTime,BackupSetId,BackupDuration</p>
   */
  OrderBy?: string
  /**
   * <p>ASC,DESC</p>
   */
  OrderType?: string
  /**
   * <p>开始时间</p>
   */
  StartTime?: string
}

/**
 * 分析引擎实例信息
 */
export interface AnalysisInstanceInfo {
  /**
   * <p>副本数</p>
   */
  ReplicasNum?: number
}

/**
 * serverless实例的ccu规格
 */
export interface ServerlessCcu {
  /**
   * <p>ccu最小值</p>
   */
  MinCcu?: number
  /**
   * <p>ccu最大值范围</p>
   */
  MaxCcu?: Array<number | bigint>
}

/**
 * 数据库信息
 */
export interface Database {
  /**
   * 数据库名称
   */
  DbName: string
}

/**
 * 查询售卖地域，提供推荐的可用区组合
 */
export interface DescribeSaleZonesGroup {
  /**
   * <p>可用区数</p>
   */
  ZoneNum?: number
  /**
   * <p>可用区组合</p>
   */
  Zones?: Array<string>
  /**
   * <p>支持的类型</p>
   */
  SupportTypes?: Array<string>
  /**
   * <p>支持的磁盘类型</p><p>枚举值：</p><ul><li>CLOUD_TCS： 本地盘</li><li>CLOUD_HSSD： 增强型云盘</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AvailableDiskTypes?: Array<string>
  /**
   * <p>是否支持serverless</p>
   */
  IsSupportServerless?: boolean
}

/**
 * DescribeDBSBackupStatistics请求参数结构体
 */
export interface DescribeDBSBackupStatisticsRequest {
  /**
   * <p>实例ID</p>
   */
  InstanceId: string
  /**
   * <p>结束时间</p>
   */
  EndTime?: string
  /**
   * <p>开始时间</p>
   */
  StartTime?: string
}

/**
 * DescribeUsers返回参数结构体
 */
export interface DescribeUsersResponse {
  /**
   * 用户列表
   */
  Users?: Array<UserInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 日志备份统计对象
 */
export interface LogBackupStatisticsModel {
  /**
   * <p>平均每个日志备份大小,单位Byte</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AverageSizePerBackup?: number
  /**
   * <p>平均每天日志备份大小,单位Byte</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AverageSizePerDay?: number
  /**
   * <p>日志备份个数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * <p>日志备份大小，单位Byte</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalSize?: number
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
 * 备份方式统计对象-提供给备份空间统计接口
 */
export interface BackupMethodStatisticsModel {
  /**
   * <p>自动备份大小，单位Byte</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoBackupSize?: number
  /**
   * <p>总备份每天平均大小，单位Byte</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AverageSizePerDay?: number
  /**
   * <p>手动备份大小，单位Byte</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ManualBackupSize?: number
  /**
   * <p>总备份大小，单位Byte</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalSize?: number
}

/**
 * DescribeDBSBackupPolicy请求参数结构体
 */
export interface DescribeDBSBackupPolicyRequest {
  /**
   * <p>实例ID</p>
   */
  InstanceId: string
}

/**
 * UpgradeInstance返回参数结构体
 */
export interface UpgradeInstanceResponse {
  /**
   * <p>任务ID</p>
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 慢日志信息
 */
export interface SlowLogData {
  /**
   * <p>Sql的执行时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Timestamp?: string
  /**
   * <p>Sql的执行时长（秒）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  QueryTime?: number
  /**
   * <p>Sql语句</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SqlText?: string
  /**
   * <p>客户端地址</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserHost?: string
  /**
   * <p>用户名</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserName?: string
  /**
   * <p>数据库名</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Database?: string
  /**
   * <p>锁时长（秒）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  LockTime?: number
  /**
   * <p>扫描行数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RowsExamined?: number
  /**
   * <p>结果集行数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RowsSent?: number
  /**
   * <p>事物ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TransactionId?: string
  /**
   * <p>rpc耗时</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RpcTime?: number
  /**
   * <p>与存储节点交互rpc耗时</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageRpcTime?: number
  /**
   * <p>rpc重试延迟耗时</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RpcRetryDelayTime?: number
  /**
   * <p>node名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeId?: string
  /**
   * <p>rpc 链路追踪</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RpcTrace?: string
  /**
   * <p>TDStore锁时长</p><p>单位：秒</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TDStoreLockTime?: number
  /**
   * <p>全局标识ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TraceId?: string
  /**
   * <p>执行计划</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Explain?: Array<Explain>
}

/**
 * ExpandInstance请求参数结构体
 */
export interface ExpandInstanceRequest {
  /**
   * <p>实例ID</p>
   */
  InstanceId: string
  /**
   * <p>存储节点扩容至多少个节点，如果没有变化，传当前节点数</p>
   */
  StorageNodeNum: number
  /**
   * <p>可用区列表</p>
   */
  Zones?: Array<string>
  /**
   * <p>az模式，1: 单AZ 2: 多AZ非主AZ模式 3: 多AZ主AZ模式</p>
   */
  AZMode?: number
  /**
   * <p>AZMode传3时，表示主AZ</p>
   */
  PrimaryAZ?: string
  /**
   * <p>全能型副本数，取值范围包括1-3</p>
   */
  FullReplications?: number
}

/**
 * DescribeDatabases返回参数结构体
 */
export interface DescribeDatabasesResponse {
  /**
   * <p>透传实例ID</p>
   */
  InstanceId?: string
  /**
   * <p>该实例上的数据库列表。</p>
   */
  Databases?: Array<Database>
  /**
   * <p>总数量</p>
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 归档日志对象
 */
export interface ArchiveLogModel {
  /**
   * 归档日志ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ArchiveLogId?: number
  /**
   * 备份耗时
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupDuration?: number
  /**
   * 备份集状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupStatus?: string
  /**
   * 备份结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMessage?: string
  /**
   * 过期时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpiredTime?: string
  /**
   * 备份文件名
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileName?: string
  /**
   * 备份集文件大小，单位Byte
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileSize?: number
  /**
   * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 备份开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
}

/**
 * 分析引擎关联关系
 */
export interface AnalysisRelationInfo {
  /**
   * <p>源实例Id</p>
   */
  PrimaryInstanceId?: string
  /**
   * <p>分析引擎实例Id</p>
   */
  AnalysisInstanceId?: string
  /**
   * <p>分析引擎关系状态</p><p>枚举值：</p><ul><li>creating： 创建中</li><li>running： 运行中</li><li>destroyed： 已销毁</li></ul>
   */
  Status?: string
  /**
   * <p>创建时间</p>
   */
  CreateAt?: string
  /**
   * <p>更新时间</p>
   */
  UpdateAt?: string
}

/**
 * tag参数
 */
export interface ResourceTag {
  /**
   * 标签键key
   */
  TagKey?: string
  /**
   * 标签值value
   */
  TagValue?: string
}

/**
 * ModifyMaintenanceWindow返回参数结构体
 */
export interface ModifyMaintenanceWindowResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * serverless实例的ccu范围
 */
export interface AutoScalingConfig {
  /**
   * <p>ccu最小值</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RangeMin: number
  /**
   * <p>ccu最大值</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RangeMax: number
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
 * ModifyAutoRenewFlag请求参数结构体
 */
export interface ModifyAutoRenewFlagRequest {
  /**
   * <p>需要修改的实例列表</p>
   */
  InstanceIds: Array<string>
  /**
   * <p>1表示开启自动续费，0为关闭自动续费</p>
   */
  AutoRenewFlag: number
}

/**
 * CreateDBSBackup请求参数结构体
 */
export interface CreateDBSBackupRequest {
  /**
   * <p>备份方式：physical、snapshot 这个值和DescribeDBSBackupPolicy接口返回的backupMethod保持一致</p><p>枚举值：</p><ul><li>physical： 物理备份</li><li>snapshot： 快照备份</li></ul>
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
 * DestroyInstances请求参数结构体
 */
export interface DestroyInstancesRequest {
  /**
   * 需要隔离的实例ID列表
   */
  InstanceIds: Array<string>
}

/**
 * DescribeMaintenanceWindow请求参数结构体
 */
export interface DescribeMaintenanceWindowRequest {
  /**
   * <p>实例ID</p>
   */
  InstanceId: string
}

/**
 * DescribeSpecs请求参数结构体
 */
export interface DescribeSpecsRequest {
  /**
   * <p>全能型副本数，当前支持范围：1-3，默认为3</p>
   */
  FullReplications?: number
  /**
   * <p>独享实例</p>
   */
  IsExclusiveInstance?: number
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
 * ModifyInstanceNetwork请求参数结构体
 */
export interface ModifyInstanceNetworkRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 希望转到的VPC网络的VpcId
   */
  VpcId: string
  /**
   * 希望转到的VPC网络的子网ID
   */
  SubnetId: string
  /**
   * VIP保留时长，单位小时，取值范围（0~168），0表示立即释放，有一分钟释放延迟。不传此参数，默认24小时释放VIP。
   */
  VipReleaseDelay?: number
  /**
   * 指定vip变更，不填表示随机vip
   */
  Vip?: string
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
 * DescribeDBInstances返回参数结构体
 */
export interface DescribeDBInstancesResponse {
  /**
   * <p>返回实例列表信息</p>
   */
  Instances?: Array<InstanceInfo>
  /**
   * <p>满足条件总数量</p>
   */
  TotalCount?: number
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
 * 用户信息类型
 */
export interface UserInfo {
  /**
   * 用户名
   */
  UserName?: string
  /**
   * 用户描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 主机IP，IP段以%结尾，表示允许该IP段的所有IP
   */
  Host?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
}

/**
 * RestartDBInstances请求参数结构体
 */
export interface RestartDBInstancesRequest {
  /**
   * <p>需要重启的实例ID的数组</p>
   */
  InstanceIds: Array<string>
  /**
   * <p>重启时间，不传表示立即重启</p>
   */
  RestartTime?: string
}

/**
 * ResetUserPassword请求参数结构体
 */
export interface ResetUserPasswordRequest {
  /**
   * 用户名
   */
  UserName: string
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 主机IP，IP段以%结尾，表示允许该IP段的所有IP
   */
  Host: string
  /**
   * 新密码，要求长度8-32，至少包含英文、数字和符号中的两种
   */
  Password?: string
  /**
   * 加密密码
   */
  EncryptedPassword?: string
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
 * 表级别权限
 */
export interface TablePrivileges {
  /**
   * DATABASE名
   */
  Database: string
  /**
   * 表名
   */
  Table: string
  /**
   * 权限列表
   */
  Privileges: Array<string>
}

/**
 * DescribeUserPrivileges请求参数结构体
 */
export interface DescribeUserPrivilegesRequest {
  /**
   * 实例 ID，形如：tdsql3-5baee8df。
   */
  InstanceId: string
  /**
   * 用户允许的访问 host，用户名+host唯一确定一个账号。
   */
  Host: string
  /**
   * 登录用户名。
   */
  UserName: string
  /**
   * 数据库名。如果为 \*，表示查询全局权限（即 \*.\*），此时忽略 Type 和 Object 参数
   */
  DbName: string
  /**
   * 具体的 Type 的名称，例如 Type 为 table 时就是具体的表名。DbName 和 Type 都为具体名称，则 Object 表示具体对象名，不能为 \* 或者为空
   */
  Object?: string
  /**
   * 类型,可以填入 table 、 view 、 proc 、 func 和 \*。当 DbName 为具体数据库名，Type为 \* 时，表示查询该数据库权限（即db.\*），此时忽略 Object 参数
   */
  ObjectType?: string
  /**
   * 当 Type=table 时，ColName 为 \* 表示查询表的权限，如果为具体字段名，表示查询对应字段的权限
   */
  ColName?: string
}

/**
 * DescribeDBSAvailableRecoveryTime请求参数结构体
 */
export interface DescribeDBSAvailableRecoveryTimeRequest {
  /**
   * <p>实例ID</p>
   */
  InstanceId: string
}

/**
 * ModifyDBInstanceVPort返回参数结构体
 */
export interface ModifyDBInstanceVPortResponse {
  /**
   * 返回异步任务FlowId
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpgradeInstance请求参数结构体
 */
export interface UpgradeInstanceRequest {
  /**
   * <p>实例ID</p>
   */
  InstanceId: string
  /**
   * <p>实例规格码</p>
   */
  SpecCode: string
  /**
   * <p>存储节点磁盘容量，单位GB</p>
   */
  Disk: number
  /**
   * <p>存储节点CPU核数</p>
   */
  StorageNodeCpu?: number
  /**
   * <p>存储节点内存大小</p>
   */
  StorageNodeMem?: number
  /**
   * <p>磁盘类型，需要修改磁盘类型时传</p>
   */
  StorageType?: string
}

/**
 * 备份集对象
 */
export interface BackupSetModel {
  /**
   * 备份集耗时，单位 sec
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupDuration?: number
  /**
   * 备份方式
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupMethod?: string
  /**
   * 备份备注名
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupName?: string
  /**
   * 备份集进度百分比
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupProgress?: number
  /**
   * 备份集ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupSetId?: number
  /**
   * 备份集状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupStatus?: string
  /**
   * 备份集类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupType?: string
  /**
   * 实例版本号
注意：此字段可能返回 null，表示取不到有效值。
   */
  DBVersion?: string
  /**
   * 备份结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 事务commit结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTrxTime?: string
  /**
   * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMessage?: string
  /**
   * 备份过期时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpiredTime?: string
  /**
   * 备份文件名
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileName?: string
  /**
   * 备份集文件大小，单位Byte
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileSize?: number
  /**
   * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 备份触发，0 - autobackup, 1 - manual
注意：此字段可能返回 null，表示取不到有效值。
   */
  ManualBackup?: number
  /**
   * 备份开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
}

/**
 * 初始化实例参数
 */
export interface InstanceParam {
  /**
   * 配置参数key
   */
  Param: string
  /**
   * 配置参数value
   */
  Value: string
}

/**
 * CreateDBInstances返回参数结构体
 */
export interface CreateDBInstancesResponse {
  /**
   * <p>实例ID</p>
   */
  InstanceIds?: Array<string>
  /**
   * <p>任务ID</p>
   */
  FlowId?: number
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
   * 实例ID。
   */
  InstanceId: string
  /**
   * 要修改的安全组 ID 列表，一个或者多个安全组 ID 组成的数组。
   */
  SecurityGroupIds: Array<string>
}
