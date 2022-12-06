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
 * DescribeInstanceShards请求参数结构体
 */
export interface DescribeInstanceShardsRequest {
  /**
   * 集群实例ID
   */
  InstanceId: string
}

/**
 * ModifyClusterConfigs请求参数结构体
 */
export interface ModifyClusterConfigsRequest {
  /**
   * 集群ID，例如cdwch-xxxx
   */
  InstanceId: string

  /**
   * 配置文件修改信息
   */
  ModifyConfContext: Array<ConfigSubmitContext>

  /**
   * 修改原因
   */
  Remark?: string
}

/**
 * CreateBackUpSchedule请求参数结构体
 */
export interface CreateBackUpScheduleRequest {
  /**
   * 编辑时需要传
   */
  ScheduleId?: number

  /**
   * 选择的星期 逗号分隔
   */
  WeekDays?: string

  /**
   * 执行小时
   */
  ExecuteHour?: number

  /**
   * 备份表列表
   */
  BackUpTables?: Array<BackupTableContent>
}

/**
 * DescribeInstanceShards返回参数结构体
 */
export interface DescribeInstanceShardsResponse {
  /**
      * 实例shard信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceShardsList: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * OpenBackUp请求参数结构体
 */
export interface OpenBackUpRequest {
  /**
   * 集群id
   */
  InstanceId: string

  /**
   * OPEN 或者CLOSE
   */
  OperationType: string

  /**
   * 桶名字
   */
  CosBucketName: string
}

/**
 * ModifyClusterConfigs返回参数结构体
 */
export interface ModifyClusterConfigsResponse {
  /**
   * 流程相关信息
   */
  FlowId: number

  /**
   * 错误信息
   */
  ErrorMsg: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 磁盘规格描述
 */
export interface DiskSpec {
  /**
   * 磁盘类型，例如“CLOUD_SSD", "LOCAL_SSD"等
   */
  DiskType: string

  /**
   * 磁盘类型说明，例如"云SSD", "本地SSD"等
   */
  DiskDesc: string

  /**
   * 磁盘最小规格大小，单位G
   */
  MinDiskSize: number

  /**
   * 磁盘最大规格大小，单位G
   */
  MaxDiskSize: number

  /**
   * 磁盘数目
   */
  DiskCount: number
}

/**
 * 备份表信息
 */
export interface BackupTableContent {
  /**
   * 数据库
   */
  Database: string

  /**
   * 表
   */
  Table: string

  /**
   * 表总字节数
   */
  TotalBytes: number

  /**
   * 虚拟cluster
   */
  VCluster?: string

  /**
   * 表ip
   */
  Ips?: string
}

/**
 * OpenBackUp返回参数结构体
 */
export interface OpenBackUpResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyUserNewPrivilege请求参数结构体
 */
export type ModifyUserNewPrivilegeRequest = null

/**
 * DescribeSpec请求参数结构体
 */
export interface DescribeSpecRequest {
  /**
   * 地域信息，例如"ap-guangzhou-1"
   */
  Zone: string

  /**
   * 计费类型，PREPAID 包年包月，POSTPAID_BY_HOUR 按量计费
   */
  PayMode?: string

  /**
   * 是否弹性ck
   */
  IsElastic?: boolean
}

/**
 * 配置文件修改信息
 */
export interface ConfigSubmitContext {
  /**
   * 配置文件名称
   */
  FileName: string

  /**
   * 配置文件旧内容，base64编码
   */
  OldConfValue: string

  /**
   * 配置文件新内容，base64编码
   */
  NewConfValue: string

  /**
   * 保存配置文件的路径
   */
  FilePath?: string
}

/**
 * ActionAlterCkUser返回参数结构体
 */
export interface ActionAlterCkUserResponse {
  /**
      * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrMsg: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCkSqlApis请求参数结构体
 */
export interface DescribeCkSqlApisRequest {
  /**
   * 实例id
   */
  InstanceId: string

  /**
      * api接口名称,GetClusters:获取集群cluster列表
GetSystemUsers:获取系统用户列表
CheckNodeCluster: 检查节点是否隶属一个cluster
GetClusterDatabases: 获取一个cluster下的数据库列表
GetClusterTables: 获取一个cluster下的数据库表列表
GetPrivilegeUsers: 获取授权的用户列表
GET_USER_CLUSTER_PRIVILEGES:获取用户cluster下的权限   
GetUserClusterNewPrivileges:获取用户cluster下的权限 (新版）
RevokeClusterUser:解绑cluster用户
DeleteSystemUser:删除系统用户 —— 必须所有cluster先解绑
GetUserOptionMessages:获取用户配置备注信息
GET_USER_CONFIGS:获取用户配置列表  QUOTA、PROFILE、POLICY
      */
  ApiType: string

  /**
   * 集群名称，GET_SYSTEM_USERS，GET_PRIVILEGE_USERS，GET_CLUSTER_DATABASES，GET_CLUSTER_TABLES 必填
   */
  Cluster?: string

  /**
   * 用户名称，api与user相关的必填
   */
  UserName?: string
}

/**
 * ActionAlterCkUser请求参数结构体
 */
export interface ActionAlterCkUserRequest {
  /**
   * 用户信息
   */
  UserInfo: CkUserAlterInfo

  /**
      * api接口类型，
AddSystemUser新增用户，UpdateSystemUser，修改用户
      */
  ApiType: string
}

/**
 * 新增或是修改ck用户
 */
export interface CkUserAlterInfo {
  /**
   * 集群实例id
   */
  InstanceId: string

  /**
   * 用户名
   */
  UserName: string

  /**
   * 密码
   */
  PassWord: string

  /**
   * 描述
   */
  Describe?: string
}

/**
 * CreateBackUpSchedule返回参数结构体
 */
export interface CreateBackUpScheduleResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资源规格描述信息
 */
export interface ResourceSpec {
  /**
   * 规格名称，例如“SCH1"
   */
  Name: string

  /**
   * cpu核数
   */
  Cpu: number

  /**
   * 内存大小，单位G
   */
  Mem: number

  /**
   * 分类标记，STANDARD/BIGDATA/HIGHIO分别表示标准型/大数据型/高IO
   */
  Type: string

  /**
   * 系统盘描述信息
   */
  SystemDisk: DiskSpec

  /**
   * 数据盘描述信息
   */
  DataDisk: DiskSpec

  /**
   * 最大节点数目限制
   */
  MaxNodeSize: number

  /**
      * 是否可用，false代表售罄
注意：此字段可能返回 null，表示取不到有效值。
      */
  Available: boolean

  /**
      * 规格描述信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ComputeSpecDesc: string

  /**
      * 规格名
注意：此字段可能返回 null，表示取不到有效值。
      */
  DisplayName: string

  /**
      * 库存数
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceQuota: number
}

/**
 * DescribeSpec返回参数结构体
 */
export interface DescribeSpecResponse {
  /**
   * zookeeper节点规格描述
   */
  CommonSpec: Array<ResourceSpec>

  /**
   * 数据节点规格描述
   */
  DataSpec: Array<ResourceSpec>

  /**
      * 云盘列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  AttachCBSSpec: Array<DiskSpec>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCkSqlApis返回参数结构体
 */
export interface DescribeCkSqlApisResponse {
  /**
      * 返回的查询数据，大部分情况是list，也可能是bool
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReturnData: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyUserNewPrivilege返回参数结构体
 */
export interface ModifyUserNewPrivilegeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
