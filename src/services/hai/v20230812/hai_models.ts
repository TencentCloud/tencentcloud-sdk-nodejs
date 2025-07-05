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
 * HAI 实例的网络配置和消耗情况
 */
export interface NetworkStatus {
  /**
   * HAI 的实例 ID
   */
  InstanceId?: string
  /**
   * 公网 IP 地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  AddressIp?: string
  /**
   * 出带宽上限，单位Mbps
注意：此字段可能返回 null，表示取不到有效值。
   */
  Bandwidth?: number
  /**
   * 流量包总量，单位GB
   */
  TotalTrafficAmount?: number
  /**
   * 流量包剩余量，单位GB
   */
  RemainingTrafficAmount?: number
}

/**
 * InquirePriceRunInstances返回参数结构体
 */
export interface InquirePriceRunInstancesResponse {
  /**
   * 发货参数对应的价格组合，当DryRun=True，会返回空
   */
  Price?: Price
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResizeInstanceDisk返回参数结构体
 */
export interface ResizeInstanceDiskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeServiceLoginSettings返回参数结构体
 */
export interface DescribeServiceLoginSettingsResponse {
  /**
   * 服务登录配置详情
   */
  LoginSettings?: Array<LoginSetting>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResetInstancesPassword返回参数结构体
 */
export interface ResetInstancesPasswordResponse {
  /**
   * task任务id
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceNetworkStatus返回参数结构体
 */
export interface DescribeInstanceNetworkStatusResponse {
  /**
   * 查询结果集长度
   */
  TotalCount?: number
  /**
   * 查询结果集
   */
  NetworkStatusSet?: Array<NetworkStatus>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例信息
 */
export interface Instance {
  /**
   * 实例id
   */
  InstanceId?: string
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 实例状态：
PENDING：表示创建中
LAUNCH_FAILED：表示创建失败
RUNNING：表示运行中
ARREARS：表示待回收
STOPPED_NO_CHARGE：表示关机不收费
TERMINATING：表示销毁中
TERMINATED：表示已销毁
   */
  InstanceState?: string
  /**
   * 应用名称

   */
  ApplicationName?: string
  /**
   * 算力套餐名称

   */
  BundleName?: string
  /**
   * 实例所包含的GPU卡数
   */
  GPUCount?: number
  /**
   * 算力

   */
  GPUPerformance?: string
  /**
   * 显存，单位：GB
   */
  GPUMemory?: string
  /**
   * CPU核数，单位：核
   */
  CPU?: string
  /**
   * 内存，单位：GB

   */
  Memory?: string
  /**
   * 系统盘数据
   */
  SystemDisk?: SystemDisk
  /**
   * 内网ip地址
   */
  PrivateIpAddresses?: Array<string>
  /**
   * 公网ip地址
   */
  PublicIpAddresses?: Array<string>
  /**
   * 安全组ID

   */
  SecurityGroupIds?: Array<string>
  /**
   * 实例最新操作
   */
  LatestOperation?: string
  /**
   * 实例最新操作状态：
SUCCESS：表示操作成功
OPERATING：表示操作执行中
FAILED：表示操作失败

   */
  LatestOperationState?: string
  /**
   * 实例创建时间，时间格式："YYYY-MM-DD HH:MM:SS"
   */
  CreateTime?: string
  /**
   * 公网出带宽上限，默认10Mbps，单位：Mbps
   */
  MaxOutBandwidth?: string
  /**
   * 每月免费流量，默认500G，单位：GB
   */
  MaxFreeTraffic?: string
  /**
   * 应用配置环境
   */
  ConfigurationEnvironment?: string
  /**
   * 实例包含的登录服务详情
   */
  LoginServices?: Array<LoginService>
  /**
   * 应用服务的操作系统类型；参数：linux、windows
   */
  OSType?: string
}

/**
 * TerminateInstances请求参数结构体
 */
export interface TerminateInstancesRequest {
  /**
   * 实例ID列表。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1721/101612) API获取实例ID列表。单次能查询100个InstanceId。
   */
  InstanceIds: Array<string>
  /**
   * 默认为False，True代表只验证接口连通性
   */
  DryRun?: boolean
}

/**
 * TerminateInstances返回参数结构体
 */
export interface TerminateInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeApplications返回参数结构体
 */
export interface DescribeApplicationsResponse {
  /**
   * 应用总数
   */
  TotalCount?: number
  /**
   * 分页返回的应用列表
   */
  ApplicationSet?: Array<ApplicationInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartInstance请求参数结构体
 */
export interface StartInstanceRequest {
  /**
   * 实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1721/101612) API获取实例ID。
   */
  InstanceId: string
  /**
   * 默认为False，True代表只验证接口连通性
   */
  DryRun?: boolean
}

/**
 * 某服务的登录配置
 */
export interface LoginSetting {
  /**
   * 服务名称
   */
  ServiceName?: string
  /**
   * 服务登录url
   */
  Url?: string
}

/**
 * 地域列表
 */
export interface RegionInfo {
  /**
   * 地域
   */
  Region?: string
  /**
   * 地域名称
   */
  RegionName?: string
  /**
   * 地域是否可用状态
AVAILABLE：可用

   */
  RegionState?: string
  /**
   * 学术加速是否支持：
NO_NEED_SUPPORT表示不需支持；NOT_SUPPORT_YET表示暂未支持；ALREADY_SUPPORT表示已经支持。
   */
  ScholarRocketSupportState?: string
}

/**
 * ResizeInstanceDisk请求参数结构体
 */
export interface ResizeInstanceDiskRequest {
  /**
   * 需要扩容云盘的HAI实例ID
   */
  InstanceId: string
  /**
   * 扩容云硬盘大小，单位为GB，必须大于当前云硬盘大小。
   */
  DiskSize: number
}

/**
 * 费用数据结构体
 */
export interface Price {
  /**
   * 实例价格信息
   */
  InstancePrice?: ItemPrice
  /**
   * 云盘价格信息
   */
  CloudDiskPrice?: ItemPrice
  /**
   * 分实例价格
   */
  PriceDetailSet?: Array<ItemPriceDetail>
}

/**
 * StopInstance请求参数结构体
 */
export interface StopInstanceRequest {
  /**
   * 实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1721/101612) API获取实例ID。
   */
  InstanceId: string
  /**
   * hai实例关机的模式，目前仅支持关机不收费：
STOP_CHARGE -- 关闭hai实例，释放计算资源，停止收取计算资源的费用。
注意：默认值为STOP_CHARGE
   */
  StopMode?: string
  /**
   * 默认为False，True代表只验证接口连通性
   */
  DryRun?: boolean
}

/**
 * DescribeMuskPrompts请求参数结构体
 */
export interface DescribeMuskPromptsRequest {
  /**
   * workgroup id
   */
  WorkgroupId: string
  /**
   * workflow id
   */
  WorkflowId: string
  /**
   * offset
   */
  Offset: number
  /**
   * limit
   */
  Limit: number
  /**
   * 过滤参数 支持过滤的键值： PromptId，Status
   */
  Filters?: Array<Filter>
}

/**
 * DescribeScenes返回参数结构体
 */
export interface DescribeScenesResponse {
  /**
   * 场景详情
   */
  SceneSet?: Array<SceneInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeApplications请求参数结构体
 */
export interface DescribeApplicationsRequest {
  /**
   * 应用id列表。单次请求数量上限为100个。
   */
  ApplicationIds?: Array<string>
  /**
   * 过滤器，跟ApplicationIds不能共用，支持的filter主要有：application-id: 精确匹配;scene-id: 精确匹配，通过调用接口 [DescribeScenes](https://cloud.tencent.com/document/api/1721/101608)获取;application-name: 模糊匹配;application-type: 精确匹配，枚举类型如下：PUBLIC_APPLICATION（公共应用）/ PRIVATE_APPLICATION（自定义应用）/ COMMUNITY_APPLICATION（社区应用）;
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，不得小于0，默认为0
   */
  Offset?: number
  /**
   * 返回量，不得大于100，默认为20
   */
  Limit?: number
  /**
   * 应用列表排序的依据字段。取值范围："CREATED_TIME"：依据应用的创建时间排序。 "APPLICATION_SIZE"：依据应用的大小排序。默认按应用的创建时间排序。
   */
  OrderField?: string
  /**
   * 输出应用列表的排列顺序。取值范围："ASC"：升序排列。 "DESC"：降序排列。默认按降序排列。
   */
  Order?: string
}

/**
 * 场景详情
 */
export interface SceneInfo {
  /**
   * 场景id

   */
  SceneId?: string
  /**
   * 场景名

   */
  SceneName?: string
}

/**
 * CreateApplication请求参数结构体
 */
export interface CreateApplicationRequest {
  /**
   * 需要制作自定义应用的HAI实例ID
   */
  InstanceId: string
  /**
   * 自定义应用的应用名称
   */
  ApplicationName: string
  /**
   * 自定义应用的描述
   */
  ApplicationDescription?: string
}

/**
 * ResetInstancesPassword请求参数结构体
 */
export interface ResetInstancesPasswordRequest {
  /**
   * 实例ID列表
   */
  InstanceIds: Array<string>
  /**
   * 实例密码必须8-30位，推荐使用12位以上密码，不能以“/”开头，至少包含以下字符中的三种不同字符，字符种类：<br><li>小写字母：[a-z]</li><br><li>大写字母：[A-Z]</li><br><li>数字：0-9</li><br><li>特殊字符： ()\`\~!@#$%^&\*-+=\_|{}[]:;'<>,.?/</li>
   */
  Password: string
  /**
   * 默认为False，True代表只验证接口连通性
   */
  DryRun?: boolean
}

/**
 * RunInstances请求参数结构体
 */
export interface RunInstancesRequest {
  /**
   * 应用ID通过调用接口[DescribeApplications](https://cloud.tencent.com/document/api/1721/101609)获取。
   */
  ApplicationId: string
  /**
   * 算力套餐类型, 枚举：XL,XL_2X, 3XL, 3XL_2X, 4XL, 24GB_A
   */
  BundleType: string
  /**
   * 实例系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。
   */
  SystemDisk?: SystemDisk
  /**
   * 购买实例数量，单次请求实例数量上限为10.
   */
  InstanceCount?: number
  /**
   * 实例显示名称，名称长度限制为128个字符.
   */
  InstanceName?: string
  /**
   * 幂等请求的token
   */
  ClientToken?: string
  /**
   * DryRun为True就是只验接口连通性，默认为False
   */
  DryRun?: boolean
}

/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
  /**
   * 实例总数

   */
  TotalCount?: number
  /**
   * 分页实例详情

   */
  InstanceSet?: Array<Instance>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述了操作系统所在块设备即系统盘的信息
 */
export interface SystemDisk {
  /**
   * 系统盘类型。取值范围：<li>CLOUD_PREMIUM：高性能云硬盘</li><li>CLOUD_HSSD：增强型SSD云盘</li>默认取值：当前有库存的硬盘类型。
   */
  DiskType?: string
  /**
   * 系统盘大小，单位：GB。默认值为 80，取值范围：80-1000
   */
  DiskSize?: number
  /**
   * 系统盘分区盘符
   */
  DiskName?: string
}

/**
 * RunInstances返回参数结构体
 */
export interface RunInstancesResponse {
  /**
   * 实例ID列表
   */
  InstanceIdSet?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
  /**
   * 实例元组，数量上限100
   */
  InstanceIds?: Array<string>
  /**
   * 描述键值对过滤器，用于条件过滤查询。目前支持的过滤器有： instance-id，实例id； instance-state，实例状态：RUNNING，PENDING，STOPPED，ARREARS，STOPPED_NO_CHARGE； charge-type，付费方式：PREPAID_BY_MONTH，POSTPAID_BY_HOUR； public-ip-address，公网IP过滤
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认为0，不得大于100
   */
  Offset?: number
  /**
   * 返回量，默认为20，不能小于0
   */
  Limit?: number
}

/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等

- 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
- 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 */
export interface Filter {
  /**
   * 需要过滤的字段。
   */
  Name: string
  /**
   * 字段的过滤值。
   */
  Values: Array<string>
}

/**
 * musk prompt详情
 */
export interface MuskPromptInfo {
  /**
   * workflow id
   */
  WorkflowId?: string
  /**
   * workgroup id
   */
  WorkgroupId?: string
  /**
   * prompt id
   */
  PromptId?: string
  /**
   * 生成的内容
   */
  OutputResource?: Array<string>
  /**
   * prompt status 
0: 执行中
1: 执行成功
2: 执行失败
   */
  Status?: number
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
  /**
   * 任务执行耗时，单位毫秒
   */
  Cost?: number
  /**
   * 任务执行失败错误信息
   */
  ErrorMessage?: string
}

/**
 * DescribeScenes请求参数结构体
 */
export interface DescribeScenesRequest {
  /**
   * 场景id列表，单次能查询100个场景id
   */
  SceneIds?: Array<string>
}

/**
 * DescribeRegions返回参数结构体
 */
export interface DescribeRegionsResponse {
  /**
   * 地域列表
   */
  RegionSet?: Array<RegionInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InquirePriceRunInstances请求参数结构体
 */
export interface InquirePriceRunInstancesRequest {
  /**
   * 应用ID通过调用接口[DescribeApplications](https://cloud.tencent.com/document/api/1721/101609)获取。
   */
  ApplicationId: string
  /**
   * 算力套餐类型, 枚举：XL,XL_2X, 3XL, 3XL_2X, 4XL, 24GB_A.
   */
  BundleType: string
  /**
   * 实例系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。
   */
  SystemDisk?: SystemDisk
  /**
   * 购买实例数量，单次请求实例数量上限为10。
   */
  InstanceCount?: number
  /**
   * 实例显示名称，名称长度限制为128个字符。
   */
  InstanceName?: string
  /**
   * 幂等请求token
   */
  ClientToken?: string
  /**
   * DryRun为True就是只验接口连通性，默认为False
   */
  DryRun?: boolean
  /**
   * 付费方式，POSTPAID_BY_HOUR按量后付费，PREPAID_BY_MONTH预付费按月，PREPAID_BY_DAY预付费按天
   */
  InstanceChargeType?: string
  /**
   * 预付费参数
   */
  InstanceChargePrepaid?: InstanceChargePrepaid
}

/**
 * StartInstance返回参数结构体
 */
export interface StartInstanceResponse {
  /**
   * task任务id
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateMuskPrompt返回参数结构体
 */
export interface CreateMuskPromptResponse {
  /**
   * prompt id
   */
  PromptId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeServiceLoginSettings请求参数结构体
 */
export interface DescribeServiceLoginSettingsRequest {
  /**
   * 实例ID通过调用接口[DescribeInstances](https://cloud.tencent.com/document/api/1721/101612)获取。
   */
  InstanceId: string
  /**
   * 服务名称
   */
  ServiceName?: string
}

/**
 * 应用信息
 */
export interface ApplicationInfo {
  /**
   * 应用id

   */
  ApplicationId?: string
  /**
   * 应用名称
   */
  ApplicationName?: string
  /**
   * 应用描述

   */
  Description?: string
  /**
   * 应用的环境配置
   */
  ConfigEnvironment?: string
  /**
   * 系统盘大小下限，单位GB
   */
  MinSystemDiskSize?: number
  /**
   * 应用类型，目前该项取值可以为PUBLIC_APPLICATION（公共应用）；PRIVATE_APPLICATION（自定义应用）；COMMUNITY_APPLICATION（社区应用）
   */
  ApplicationType?: string
  /**
   * 应用状态：CREATING-创建中；ONLINE -正常在线；DELETING -删除中；ARREARS - 欠费隔离
示例值：ONLINE
   */
  ApplicationState?: string
  /**
   * 应用创建时间，格式：%Y-%m-%d %H:%M:%S
   */
  CreateTime?: string
  /**
   * 应用大小，单位GB
   */
  ApplicationSize?: number
}

/**
 * CreateApplication返回参数结构体
 */
export interface CreateApplicationResponse {
  /**
   * HAI自定义应用ID
   */
  ApplicationId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 分实例价格
 */
export interface ItemPriceDetail {
  /**
   * 实例id
   */
  InstanceId?: string
  /**
   * 实例价格详情
   */
  InstancePrice?: ItemPrice
  /**
   * 磁盘价格详情
   */
  CloudDiskPrice?: ItemPrice
  /**
   * 该实例的总价钱
   */
  InstanceTotalPrice?: ItemPrice
}

/**
 * CreateMuskPrompt请求参数结构体
 */
export interface CreateMuskPromptRequest {
  /**
   * workgroup id
   */
  WorkgroupId: string
  /**
   * workflow id
   */
  WorkflowId: string
  /**
   * prompt 参数
   */
  PromptParams: string
}

/**
 * DescribeRegions请求参数结构体
 */
export type DescribeRegionsRequest = null

/**
 * 套餐价格
 */
export interface ItemPrice {
  /**
   * 原单价，元
   */
  UnitPrice?: number
  /**
   * 折扣后单价，元
   */
  DiscountUnitPrice?: number
  /**
   * 折扣
   */
  Discount?: number
  /**
   * 单位：时/月

   */
  ChargeUnit?: string
  /**
   * 商品数量
   */
  Amount?: number
}

/**
 * DescribeInstanceNetworkStatus请求参数结构体
 */
export interface DescribeInstanceNetworkStatusRequest {
  /**
   * 实例ID数组，单次请求最多不超过100个实例；实例ID通过调用接口[DescribeInstances](https://cloud.tencent.com/document/api/1721/101612)获取。
   */
  InstanceIds: Array<string>
}

/**
 * 登录服务详情
 */
export interface LoginService {
  /**
   * 登录方式名称
   */
  ServiceName?: string
}

/**
 * StopInstance返回参数结构体
 */
export interface StopInstanceResponse {
  /**
   * task任务id
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例预付费入参
 */
export interface InstanceChargePrepaid {
  /**
   * 时长，默认值：1
   */
  Period?: number
  /**
   * 续费标志可选参数：
NOTIFY_AND_MANUAL_RENEW：表示默认状态(用户未设置，即初始状态：若用户有预付费不停服特权，也会对该值进行自动续费)
NOTIFY_AND_AUTO_RENEW：表示自动续费
DISABLE_NOTIFY_AND_MANUAL_RENEW：表示明确不自动续费(用户设置)
默认值：NOTIFY_AND_MANUAL_RENEW

   */
  RenewFlag?: string
  /**
   * 时长单位，枚举： MONTH, DAY, HOUR；释义：月，日，小时
   */
  TimeUnit?: string
}

/**
 * DescribeMuskPrompts返回参数结构体
 */
export interface DescribeMuskPromptsResponse {
  /**
   * total count
   */
  TotalCount?: number
  /**
   * prompt列表详情
   */
  MuskPromptInfos?: Array<MuskPromptInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
