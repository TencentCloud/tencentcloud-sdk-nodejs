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
 * 集群概览信息。
 */
export interface ClusterOverview {
  /**
   * 集群ID。
   */
  ClusterId: string

  /**
   * 集群状态。取值范围：<br><li>PENDING：创建中<br><li>INITING：初始化中<br><li>INIT_FAILED：初始化失败<br><li>RUNNING：运行中<br><li>TERMINATING：销毁中
   */
  ClusterStatus: string

  /**
   * 集群名称。
   */
  ClusterName: string

  /**
   * 集群位置信息。
   */
  Placement: Placement

  /**
   * 集群创建时间。
   */
  CreateTime: string

  /**
   * 集群调度器。
   */
  SchedulerType: string

  /**
   * 计算节点数量。
   */
  ComputeNodeCount: number

  /**
   * 计算节点概览。
   */
  ComputeNodeSet: Array<ComputeNodeOverview>

  /**
   * 管控节点数量。
   */
  ManagerNodeCount: number

  /**
   * 管控节点概览。
   */
  ManagerNodeSet: Array<ManagerNodeOverview>

  /**
   * 登录节点概览。
   */
  LoginNodeSet: Array<LoginNodeOverview>

  /**
   * 登录节点数量。
   */
  LoginNodeCount: number
}

/**
 * DescribeClusters请求参数结构体
 */
export interface DescribeClustersRequest {
  /**
   * 集群ID列表。通过该参数可以指定需要查询信息的集群列表。<br>如果您不指定该参数，则返回Limit数量以内的集群信息。
   */
  ClusterIds?: Array<string>

  /**
   * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
   */
  Offset?: number

  /**
   * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
   */
  Limit?: number
}

/**
 * 描述了实例登录相关配置与信息。
 */
export interface LoginSettings {
  /**
   * 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下：<br><li>Linux实例密码必须8到30位，至少包括两项[a-z]，[A-Z]、[0-9] 和 [( ) \` ~ ! @ # $ % ^ & *  - + = | { } [ ] : ; ' , . ? / ]中的特殊符号。<br><li>Windows实例密码必须12到30位，至少包括三项[a-z]，[A-Z]，[0-9] 和 [( ) \` ~ ! @ # $ % ^ & * - + = | { } [ ] : ; ' , . ? /]中的特殊符号。<br><br>若不指定该参数，则由系统随机生成密码，并通过站内信方式通知到用户。
   */
  Password?: string
}

/**
 * DeleteCluster返回参数结构体
 */
export interface DeleteClusterResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述了实例的公网可访问性，声明了实例的公网使用计费模式，最大带宽等
 */
export interface InternetAccessible {
  /**
      * 网络计费类型。取值范围：
BANDWIDTH_PREPAID：预付费按带宽结算
TRAFFIC_POSTPAID_BY_HOUR：流量按小时后付费
BANDWIDTH_POSTPAID_BY_HOUR：带宽按小时后付费
BANDWIDTH_PACKAGE：带宽包用户
默认取值：非带宽包用户默认与子机付费类型保持一致。
      */
  InternetChargeType?: string

  /**
   * 公网出带宽上限，单位：Mbps。默认值：0Mbps。不同机型带宽上限范围不一致，具体限制详见购买网络带宽。
   */
  InternetMaxBandwidthOut?: number
}

/**
 * 描述CFS文件系统版本和挂载信息
 */
export interface CFSOption {
  /**
   * 文件系统本地挂载路径
   */
  LocalPath: string

  /**
   * 文件系统远程挂载ip及路径
   */
  RemotePath: string

  /**
      * 文件系统协议类型，默认值NFS 3.0。
<li>NFS 3.0。
<li>NFS 4.0。
<li>TURBO。
      */
  Protocol?: string

  /**
   * 文件系统存储类型，默认值SD；其中 SD 为通用标准型标准型存储， HP为通用性能型存储， TB为turbo标准型， TP 为turbo性能型。
   */
  StorageType?: string
}

/**
 * 登录节点信息。
 */
export interface LoginNode {
  /**
   * 节点[计费类型](https://cloud.tencent.com/document/product/213/2180)。<br><li>PREPAID：预付费，即包年包月<br><li>POSTPAID_BY_HOUR：按小时后付费<br><li>SPOTPAID：竞价付费<br>默认值：POSTPAID_BY_HOUR。
   */
  InstanceChargeType?: string

  /**
   * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月节点的购买时长、是否设置自动续费等属性。若指定节点的付费模式为预付费则该参数必传。
   */
  InstanceChargePrepaid?: InstanceChargePrepaid

  /**
      * 节点机型。不同实例机型指定了不同的资源规格。
<br><li>具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。
      */
  InstanceType?: string

  /**
   * 节点系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。
   */
  SystemDisk?: Array<SystemDisk>

  /**
   * 节点数据盘配置信息。若不指定该参数，则默认不购买数据盘。支持购买的时候指定21块数据盘，其中最多包含1块LOCAL_BASIC数据盘或者LOCAL_SSD数据盘，最多包含20块CLOUD_BASIC数据盘、CLOUD_PREMIUM数据盘或者CLOUD_SSD数据盘。
   */
  DataDisks?: Array<DataDisk>

  /**
   * 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。
   */
  InternetAccessible?: Array<InternetAccessible>

  /**
      * 节点显示名称。<br><li>
不指定节点显示名称则默认显示‘未命名’。
最多支持60个字符。
      */
  InstanceName?: string
}

/**
 * CreateCluster请求参数结构体
 */
export interface CreateClusterRequest {
  /**
   * 集群中实例所在的位置。
   */
  Placement: Placement

  /**
   * 指定管理节点。
   */
  ManagerNode?: ManagerNode

  /**
   * 指定管理节点的数量。默认取值：1。取值范围：1～2。
   */
  ManagerNodeCount?: number

  /**
   * 指定计算节点。
   */
  ComputeNode?: ComputeNode

  /**
   * 指定计算节点的数量。默认取值：0。
   */
  ComputeNodeCount?: number

  /**
   * 调度器类型。<br><li>SGE：SGE调度器。<br><li>SLURM：SLURM调度器。
   */
  SchedulerType?: string

  /**
   * 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-xxx`。目前仅支持公有镜像。
   */
  ImageId?: string

  /**
   * 私有网络相关信息配置。
   */
  VirtualPrivateCloud?: VirtualPrivateCloud

  /**
   * 集群登录设置。
   */
  LoginSettings?: LoginSettings

  /**
   * 集群中实例所属安全组。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。
   */
  SecurityGroupIds?: Array<string>

  /**
   * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
   */
  ClientToken?: string

  /**
      * 是否只预检此次请求。
true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数，请求格式，业务限制和云服务器库存。
如果检查不通过，则返回对应错误码；
如果检查通过，则返回RequestId.
false（默认）：发送正常请求，通过检查后直接创建实例
      */
  DryRun?: boolean

  /**
      * 域名字服务类型。默认值：NIS
<li>NIS：NIS域名字服务。
      */
  AccountType?: string

  /**
   * 集群显示名称。
   */
  ClusterName?: string

  /**
   * 集群存储选项
   */
  StorageOption?: StorageOption

  /**
      * 已废弃。
指定登录节点。
      */
  LoginNode?: Array<LoginNode>

  /**
      * 已废弃。
指定登录节点的数量。默认取值：0。取值范围：0～10。
      */
  LoginNodeCount?: number

  /**
   * 创建集群时同时绑定的标签对说明。
   */
  Tags?: Array<Tag>
}

/**
 * 标签键值对。
 */
export interface Tag {
  /**
   * 标签键
   */
  Key: string

  /**
   * 标签值
   */
  Value: string
}

/**
 * CreateCluster返回参数结构体
 */
export interface CreateClusterResponse {
  /**
      * 集群ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClusterId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BindAutoScalingGroup返回参数结构体
 */
export interface BindAutoScalingGroupResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 管控节点概览。
 */
export interface ManagerNodeOverview {
  /**
      * 管控节点ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  NodeId: string
}

/**
 * 管控节点信息
 */
export interface ManagerNode {
  /**
   * 节点[计费类型](https://cloud.tencent.com/document/product/213/2180)。<br><li>PREPAID：预付费，即包年包月<br><li>POSTPAID_BY_HOUR：按小时后付费<br>默认值：POSTPAID_BY_HOUR。
   */
  InstanceChargeType?: string

  /**
   * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月节点的购买时长、是否设置自动续费等属性。若指定节点的付费模式为预付费则该参数必传。
   */
  InstanceChargePrepaid?: InstanceChargePrepaid

  /**
      * 节点机型。不同实例机型指定了不同的资源规格。
<br><li>对于付费模式为PREPAID或POSTPAID\_BY\_HOUR的实例创建，具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。
      */
  InstanceType?: string

  /**
   * 节点系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。
   */
  SystemDisk?: SystemDisk

  /**
   * 节点数据盘配置信息。若不指定该参数，则默认不购买数据盘。支持购买的时候指定21块数据盘，其中最多包含1块LOCAL_BASIC数据盘或者LOCAL_SSD数据盘，最多包含20块CLOUD_BASIC数据盘、CLOUD_PREMIUM数据盘或者CLOUD_SSD数据盘。
   */
  DataDisks?: Array<DataDisk>

  /**
   * 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。
   */
  InternetAccessible?: InternetAccessible

  /**
      * 节点显示名称。<br><li>
不指定节点显示名称则默认显示‘未命名’。
</li><li>购买多个节点，如果指定模式串`{R:x}`，表示生成数字[`[x, x+n-1]`，其中`n`表示购买节点的数量，例如`server_{R:3}`，购买1个时，节点显示名称为`server_3`；购买2个时，节点显示名称分别为`server_3`，`server_4`。支持指定多个模式串`{R:x}`。
购买多个节点，如果不指定模式串，则在节点显示名称添加后缀`1、2...n`，其中`n`表示购买节点的数量，例如`server_`，购买2个时，节点显示名称分别为`server_1`，`server_2`。</li><li>
最多支持60个字符（包含模式串）。
      */
  InstanceName?: string
}

/**
 * DeleteCluster请求参数结构体
 */
export interface DeleteClusterRequest {
  /**
   * 集群ID。
   */
  ClusterId: string
}

/**
 * 计算节点概览。
 */
export interface ComputeNodeOverview {
  /**
      * 计算节点ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  NodeId: string
}

/**
 * 描述了操作系统所在块设备即系统盘的信息
 */
export interface SystemDisk {
  /**
      * 系统盘类型。系统盘类型限制详见存储概述。取值范围：
LOCAL_BASIC：本地硬盘
LOCAL_SSD：本地SSD硬盘
CLOUD_BASIC：普通云硬盘
CLOUD_SSD：SSD云硬盘
CLOUD_PREMIUM：高性能云硬盘

默认取值：当前有库存的硬盘类型。
      */
  DiskType?: string

  /**
   * 系统盘大小，单位：GB。默认值为 50
   */
  DiskSize?: number
}

/**
 * 描述了实例的抽象位置
 */
export interface Placement {
  /**
   * 实例所属的可用区名称。该参数可以通过调用  [DescribeZones](https://cloud.tencent.com/document/product/213/15707) 的返回值中的Zone字段来获取。
   */
  Zone: string
}

/**
 * BindAutoScalingGroup请求参数结构体
 */
export interface BindAutoScalingGroupRequest {
  /**
   * 集群ID。
   */
  ClusterId: string

  /**
   * 弹性伸缩启动配置ID。
   */
  LaunchConfigurationId: string

  /**
   * 弹性伸缩组ID。
   */
  AutoScalingGroupId: string

  /**
   * 队列名称。
   */
  QueueName?: string

  /**
   * 任务连续等待时间，队列的任务处于连续等待的时间。单位秒。默认值120。
   */
  ExpansionBusyTime?: number

  /**
   * 节点连续空闲（未运行作业）时间，一个节点连续处于空闲状态时间。单位秒。默认值300。
   */
  ShrinkIdleTime?: number

  /**
   * 是否开启自动扩容，默认值true。
   */
  EnableAutoExpansion?: boolean

  /**
   * 是否开启自动缩容，默认值true。
   */
  EnableAutoShrink?: boolean

  /**
      * 是否只预检此次请求。
true：发送检查请求，不会绑定弹性伸缩组。检查项包括是否填写了必需参数，请求格式，业务限制。
如果检查不通过，则返回对应错误码；
如果检查通过，则返回RequestId。
false（默认）：发送正常请求，通过检查后直接绑定弹性伸缩组。
      */
  DryRun?: boolean
}

/**
 * 描述了VPC相关信息
 */
export interface VirtualPrivateCloud {
  /**
   * 私有网络ID，形如`vpc-xxx`。有效的VpcId可通过登录[控制台](https://console.cloud.tencent.com/vpc/vpc?rid=1)查询；也可以调用接口 [DescribeVpcEx](/document/api/215/1372) ，从接口返回中的`unVpcId`字段获取。若在创建子机时VpcId与SubnetId同时传入`DEFAULT`，则强制使用默认vpc网络。
   */
  VpcId: string

  /**
   * 私有网络子网ID，形如`subnet-xxx`。有效的私有网络子网ID可通过登录[控制台](https://console.cloud.tencent.com/vpc/subnet?rid=1)查询；也可以调用接口  [DescribeSubnets](/document/api/215/15784) ，从接口返回中的`unSubnetId`字段获取。若在创建子机时SubnetId与VpcId同时传入`DEFAULT`，则强制使用默认vpc网络。
   */
  SubnetId: string
}

/**
 * 描述集群文件系统选项
 */
export interface StorageOption {
  /**
   * 集群挂载CFS文件系统选项
   */
  CFSOptions?: Array<CFSOption>

  /**
   * 集群挂在GooseFS文件系统选项
   */
  GooseFSOptions?: Array<GooseFSOption>
}

/**
 * 登录节点概览。
 */
export interface LoginNodeOverview {
  /**
   * 登录节点ID。
   */
  NodeId: string
}

/**
 * 计算节点信息。
 */
export interface ComputeNode {
  /**
   * 节点[计费类型](https://cloud.tencent.com/document/product/213/2180)。<br><li>PREPAID：预付费，即包年包月<br><li>POSTPAID_BY_HOUR：按小时后付费<br><li>SPOTPAID：竞价付费<br>默认值：POSTPAID_BY_HOUR。
   */
  InstanceChargeType?: string

  /**
   * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月节点的购买时长、是否设置自动续费等属性。若指定节点的付费模式为预付费则该参数必传。
   */
  InstanceChargePrepaid?: InstanceChargePrepaid

  /**
      * 节点机型。不同实例机型指定了不同的资源规格。
<br><li>具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。
      */
  InstanceType?: string

  /**
   * 节点系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。
   */
  SystemDisk?: SystemDisk

  /**
   * 节点数据盘配置信息。若不指定该参数，则默认不购买数据盘。支持购买的时候指定21块数据盘，其中最多包含1块LOCAL_BASIC数据盘或者LOCAL_SSD数据盘，最多包含20块CLOUD_BASIC数据盘、CLOUD_PREMIUM数据盘或者CLOUD_SSD数据盘。
   */
  DataDisks?: Array<DataDisk>

  /**
   * 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。
   */
  InternetAccessible?: InternetAccessible

  /**
      * 节点显示名称。<br><li>
不指定节点显示名称则默认显示‘未命名’。
最多支持60个字符。
      */
  InstanceName?: string
}

/**
 * DescribeClusters返回参数结构体
 */
export interface DescribeClustersResponse {
  /**
   * 集群概览信息列表。
   */
  ClusterSet: Array<ClusterOverview>

  /**
   * 集群数量。
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述GooseFS挂载信息
 */
export interface GooseFSOption {
  /**
   * 文件系统本地挂载路径
   */
  LocalPath: string

  /**
   * 文件系统远程挂载路径
   */
  RemotePath: string

  /**
   * 文件系统master的ip和端口
   */
  Masters: Array<string>
}

/**
 * 描述了实例的计费模式
 */
export interface InstanceChargePrepaid {
  /**
   * 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36, 48, 60。
   */
  Period: number

  /**
      * 自动续费标识。取值范围：
NOTIFY_AND_AUTO_RENEW：通知过期且自动续费
NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费
DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费

默认取值：NOTIFY_AND_MANUAL_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
      */
  RenewFlag?: string
}

/**
 * 描述了数据盘的信息
 */
export interface DataDisk {
  /**
   * 数据盘大小，单位：GB。最小调整步长为10G，不同数据盘类型取值范围不同，具体限制详见：[存储概述](https://cloud.tencent.com/document/product/213/4952)。默认值为0，表示不购买数据盘。更多限制详见产品文档。
   */
  DiskSize: number

  /**
   * 数据盘类型。数据盘类型限制详见[存储概述](https://cloud.tencent.com/document/product/213/4952)。取值范围：<br><li>LOCAL_BASIC：本地硬盘<br><li>LOCAL_SSD：本地SSD硬盘<br><li>LOCAL_NVME：本地NVME硬盘，与InstanceType强相关，不支持指定<br><li>LOCAL_PRO：本地HDD硬盘，与InstanceType强相关，不支持指定<br><li>CLOUD_BASIC：普通云硬盘<br><li>CLOUD_PREMIUM：高性能云硬盘<br><li>CLOUD_SSD：SSD云硬盘<br><li>CLOUD_HSSD：增强型SSD云硬盘<br><li>CLOUD_TSSD：极速型SSD云硬盘<br><br>默认取值：LOCAL_BASIC。
   */
  DiskType?: string
}
