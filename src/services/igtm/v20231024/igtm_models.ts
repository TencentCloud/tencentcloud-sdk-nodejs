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
 * 地址池
 */
export interface AddressPool {
  /**
   * 地址池 id
注意：此字段可能返回 null，表示取不到有效值。
   */
  PoolId?: number
  /**
   * 地址池名
注意：此字段可能返回 null，表示取不到有效值。
   */
  PoolName?: string
  /**
   * 地址池地址类型：IPV4、IPV6、DOMAIN
注意：此字段可能返回 null，表示取不到有效值。
   */
  AddrType?: string
  /**
   * 流量策略: WEIGHT负载均衡，ALL解析全部
注意：此字段可能返回 null，表示取不到有效值。
   */
  TrafficStrategy?: string
  /**
   * 监控器id
注意：此字段可能返回 null，表示取不到有效值。
   */
  MonitorId?: number
  /**
   * OK正常，DOWN故障，WARN风险，UNKNOWN未知
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 地址数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AddressNum?: number
  /**
   * 探点数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MonitorGroupNum?: number
  /**
   * 探测任务数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MonitorTaskNum?: number
  /**
   * 实例相关信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceInfo?: Array<InstanceInfo>
  /**
   * 地址池地址信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  AddressSet?: Array<Address>
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedOn?: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedOn?: string
}

/**
 * 地址池详情
 */
export interface AddressPoolDetail {
  /**
   * 地址池 id
注意：此字段可能返回 null，表示取不到有效值。
   */
  PoolId?: number
  /**
   * 地址池名
注意：此字段可能返回 null，表示取不到有效值。
   */
  PoolName?: string
  /**
   * 地址池地址类型：IPV4、IPV6、DOMAIN
注意：此字段可能返回 null，表示取不到有效值。
   */
  AddrType?: string
  /**
   * 流量策略: WEIGHT负载均衡，ALL解析全部
注意：此字段可能返回 null，表示取不到有效值。
   */
  TrafficStrategy?: string
  /**
   * 监控器id
注意：此字段可能返回 null，表示取不到有效值。
   */
  MonitorId?: number
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedOn?: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedOn?: string
}

/**
 * DescribeMonitors返回参数结构体
 */
export interface DescribeMonitorsResponse {
  /**
   * 监控器列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  MonitorDataSet?: Array<MonitorDetail>
  /**
   * 数量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDetectors返回参数结构体
 */
export interface DescribeDetectorsResponse {
  /**
   * 探测器组列表
   */
  DetectorGroupSet?: Array<DetectorGroup>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAddressPool返回参数结构体
 */
export interface DeleteAddressPoolResponse {
  /**
   * 是否成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 地址池
 */
export interface Strategy {
  /**
   * 实例id
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId: string
  /**
   * 策略名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name: string
  /**
   * 地址来源
注意：此字段可能返回 null，表示取不到有效值。
   */
  Source: Array<Source>
  /**
   * 策略id
注意：此字段可能返回 null，表示取不到有效值。
   */
  StrategyId?: number
  /**
   * 健康状态：ok健康、warn风险、down故障
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 生效的主力池id，null则为未知
注意：此字段可能返回 null，表示取不到有效值。
   */
  ActivateMainPoolId?: number
  /**
   * 当前生效地址池所在级数，为0则代表兜底生效，null则为未知
注意：此字段可能返回 null，表示取不到有效值。
   */
  ActivateLevel?: number
  /**
   * 当前生效地址池集合类型：main主力；fallback兜底
注意：此字段可能返回 null，表示取不到有效值。
   */
  ActivePoolType?: string
  /**
   * 当前生效地址池流量策略：all解析所有；weight负载均衡
注意：此字段可能返回 null，表示取不到有效值。
   */
  ActiveTrafficStrategy?: string
  /**
   * 监控器数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  MonitorNum?: number
  /**
   * 是否开启：ENABLED开启；DISABLED关闭
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsEnabled?: string
  /**
   * 是否保留线路：enabled保留，disabled不保留，只保留默认线路
注意：此字段可能返回 null，表示取不到有效值。
   */
  KeepDomainRecords?: string
  /**
   * 调度模式：AUTO默认；PAUSE仅暂停不切换
注意：此字段可能返回 null，表示取不到有效值。
   */
  SwitchPoolType?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedOn?: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedOn?: string
}

/**
 * CreateStrategy返回参数结构体
 */
export interface CreateStrategyResponse {
  /**
   * 新增策略id
注意：此字段可能返回 null，表示取不到有效值。
   */
  StrategyId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAddressPool请求参数结构体
 */
export interface DeleteAddressPoolRequest {
  /**
   * 地址池id
   */
  PoolId: number
}

/**
 * ModifyInstanceConfig返回参数结构体
 */
export interface ModifyInstanceConfigResponse {
  /**
   * 实例详情
   */
  Instance?: InstanceDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeStrategyDetail请求参数结构体
 */
export interface DescribeStrategyDetailRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 策略 id
   */
  StrategyId: number
}

/**
 * DeleteMonitor请求参数结构体
 */
export interface DeleteMonitorRequest {
  /**
   * 监控器id
   */
  MonitorId: number
}

/**
 * DescribeAddressPoolList请求参数结构体
 */
export interface DescribeAddressPoolListRequest {
  /**
   * 告警过滤条件：PoolName：地址池名称；MonitorId：监控器id
   */
  Filters?: Array<ResourceFilter>
  /**
   * 页数
   */
  Offset?: number
  /**
   * 每页数
   */
  Limit?: number
}

/**
 * ModifyStrategy返回参数结构体
 */
export interface ModifyStrategyResponse {
  /**
   * 是否成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDnsLineList请求参数结构体
 */
export interface DescribeDnsLineListRequest {
  /**
   * 实例id
   */
  InstanceId: string
}

/**
 * DescribeInstanceList请求参数结构体
 */
export interface DescribeInstanceListRequest {
  /**
   * 分页偏移量
   */
  Offset?: number
  /**
   * 分页数
   */
  Limit?: number
  /**
   * Name: "实例名称" 模糊查询Domain: "域名" 模糊查询MonitorId: "监控器 id" PoolId: "地址池id", AccessDomain接入主域名
   */
  Filters?: Array<ResourceFilter>
}

/**
 * 解析线路
 */
export interface Source {
  /**
   * 解析请求来源线路id
   */
  DnsLineId: number
  /**
   * 解析请求来源线路名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
}

/**
 * 返回实例
 */
export interface InstanceDetail {
  /**
   * 实例id
   */
  InstanceId?: string
  /**
   * 实例名
   */
  InstanceName?: string
  /**
   * 业务域名
   */
  Domain?: string
  /**
   * Cname域名接入方式
CUSTOM: 自定义接入域名
SYSTEM: 系统接入域名
   */
  AccessType?: string
  /**
   * 接入子域名
   */
  AccessSubDomain?: string
  /**
   * 接入域名
   */
  AccessDomain?: string
  /**
   * 解析生效时间
   */
  GlobalTtl?: number
  /**
   * 套餐类型
FREE: 免费版
STANDARD：标准版
ULTIMATE：旗舰版
注意：此字段可能返回 null，表示取不到有效值。
   */
  PackageType?: string
  /**
   * 实例运行状态
NORMAL: 健康
FAULTY: 有风险
DOWN: 宕机
UNKNOWN: 未知
   */
  WorkingStatus?: string
  /**
   * 实例状态
ENABLED: 正常
DISABLED: 禁用
   */
  Status?: string
  /**
   * cname是否接入：true已接入；false未接入
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsCnameConfigured?: boolean
  /**
   * 备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
  /**
   * 策略数量
   */
  StrategyNum?: number
  /**
   * 绑定地址池个数
   */
  AddressPoolNum?: number
  /**
   * 绑定监控器数量
   */
  MonitorNum?: number
  /**
   * 实例绑定套餐资源id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceId?: string
  /**
   * 订阅事件列表
   */
  NotifyEventSet?: Array<string>
  /**
   * 实例创建时间
   */
  CreatedOn?: string
  /**
   * 实例更新时间
   */
  UpdatedOn?: string
}

/**
 * 地址所属地域
 */
export interface AddressLocation {
  /**
   * ip地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Addr?: string
  /**
   * 所属地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Location?: string
}

/**
 * 探测任务套餐
 */
export interface DetectTaskPackage {
  /**
   * 资源id
   */
  ResourceId?: string
  /**
   * 资源类型
TASK 探测任务
   */
  ResourceType?: string
  /**
   * 额度
   */
  Quota?: number
  /**
   * 套餐过期时间
   */
  CurrentDeadline?: string
  /**
   * 套餐创建时间
   */
  CreateTime?: string
  /**
   * 是否过期0否1是
   */
  IsExpire?: number
  /**
   * 状态
ENABLED: 正常
ISOLATED: 隔离
DESTROYED：销毁
REFUNDED：已退款
   */
  Status?: string
  /**
   * 是否自动续费0不1是
   */
  AutoRenewFlag?: number
  /**
   * 备注
   */
  Remark?: string
  /**
   * 计费项
   */
  CostItemList?: Array<CostItem>
  /**
   * 探测任务类型：100系统设定；200计费；300管理系统；110D监控迁移的免费任务；120容灾切换任务
注意：此字段可能返回 null，表示取不到有效值。
   */
  Group?: number
}

/**
 * CreateAddressPool请求参数结构体
 */
export interface CreateAddressPoolRequest {
  /**
   * 地址池名称，不允许重复
   */
  PoolName: string
  /**
   * 流量策略：WEIGHT负载均衡，ALL解析所有健康地址
   */
  TrafficStrategy: string
  /**
   * 地址列表
   */
  AddressSet: Array<Address>
  /**
   * 监控器id
   */
  MonitorId?: number
}

/**
 * DescribeDetectTaskPackageList返回参数结构体
 */
export interface DescribeDetectTaskPackageListResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 探测任务套餐列表
   */
  TaskPackageSet?: Array<DetectTaskPackage>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAddressPoolDetail返回参数结构体
 */
export interface DescribeAddressPoolDetailResponse {
  /**
   * 资源组详情描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  AddressPool?: AddressPoolDetail
  /**
   * 资源组中的资源列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  AddressSet?: Array<Address>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeQuotas请求参数结构体
 */
export interface DescribeQuotasRequest {
  /**
   * 接入域名
   */
  AccessDomain?: string
}

/**
 * 主力地址池
 */
export interface MainAddressPool {
  /**
   * 集合中的地址池id与权重，数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  AddressPools: Array<MainPoolWeight>
  /**
   * 地址池集合id
注意：此字段可能返回 null，表示取不到有效值。
   */
  MainAddressPoolId?: number
  /**
   * 切换阀值，不能大于主力集合内地址总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MinSurviveNum?: number
  /**
   * 切换策略:ALL解析所有地址；WEIGHT：负载均衡。当为ALL时，解析地址的权重值为1；当为WEIGHT时；权重为地址池权重*地址权重
注意：此字段可能返回 null，表示取不到有效值。
   */
  TrafficStrategy?: string
}

/**
 * 配额
 */
export interface Quota {
  /**
   * 探测任务配额
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskQuota?: number
  /**
   * 地址池配额
注意：此字段可能返回 null，表示取不到有效值。
   */
  PoolQuota?: number
  /**
   * 地址配额
注意：此字段可能返回 null，表示取不到有效值。
   */
  AddressQuota?: number
  /**
   * 探点资源数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MonitorQuota?: number
  /**
   * 消息资源数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MessageQuota?: number
  /**
   * 已使用探测任务数
注意：此字段可能返回 null，表示取不到有效值。
   */
  UsedTaskQuota?: number
  /**
   * 已使用体验实例数
注意：此字段可能返回 null，表示取不到有效值。
   */
  UsedFreeInstanceNum?: number
  /**
   * 已使用付费实例
注意：此字段可能返回 null，表示取不到有效值。
   */
  UsedBillInstanceNum?: number
  /**
   * 体验套餐总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  FreePackageNum?: number
  /**
   * 已使用付费套餐数
注意：此字段可能返回 null，表示取不到有效值。
   */
  UsedBillPackageNum?: number
  /**
   * 付费套餐总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  BillPackageNum?: number
}

/**
 * ModifyMonitor请求参数结构体
 */
export interface ModifyMonitorRequest {
  /**
   * 监控器id
   */
  MonitorId: number
  /**
   * 监控器名称
   */
  MonitorName: string
  /**
   * 检查协议，可选值 PING TCP HTTP HTTPS
   */
  CheckProtocol: string
  /**
   * 检查间隔（秒），可选值 15 60 120 300
   */
  CheckInterval: number
  /**
   * 超时时间，单位:秒，可选值 2  3  5  10
   */
  Timeout: number
  /**
   * 重试次数，可选值为 0，1，2
   */
  FailTimes: number
  /**
   * 失败比例，可选值为 20 30 40 50 60 70 80 100，默认值为50
   */
  FailRate: number
  /**
   * 监控节点类型，可选值有AUTO INTERNAL OVERSEAS IPV6 ALL
   */
  DetectorStyle: string
  /**
   * 探测器组id列表
   */
  DetectorGroupIds: Array<number | bigint>
  /**
   * PING 包数目， 当CheckProtocol=ping时必填，可选值 20 50 100
   */
  PingNum?: number
  /**
   * 检查端口，可选值为1-65535之间的整数
   */
  TcpPort?: number
  /**
   * Host 设置，默认为业务域名
   */
  Host?: string
  /**
   * URL 路径，默认为“/”
   */
  Path?: string
  /**
   * 返回错误码阈值, 可选值为 400 和 500, 默认值500
   */
  ReturnCodeThreshold?: number
  /**
   * 跟随 3XX 重定向 ，不开启为 DISABLED， 开启为 ENABLED，默认不开启
   */
  EnableRedirect?: string
  /**
   * 启用 SNI，不开启为 DISABLED， 开启为 ENABLED，默认不开启
   */
  EnableSni?: string
  /**
   * 丢包率告警阈值，当CheckProtocol=ping时必填，取值在10 30 50 80 90 100
   */
  PacketLossRate?: number
  /**
   * 持续周期数，可选值1-5
   */
  ContinuePeriod?: number
}

/**
 * DescribeInstancePackageList返回参数结构体
 */
export interface DescribeInstancePackageListResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 实例套餐列表
   */
  InstanceSet?: Array<InstancePackage>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 返回实例
 */
export interface Instance {
  /**
   * 实例id
   */
  InstanceId?: string
  /**
   * 实例名
   */
  InstanceName?: string
  /**
   * 资源 id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceId?: string
  /**
   * 业务域名
   */
  Domain?: string
  /**
   * Cname域名接入方式
CUSTOM: 自定义接入域名
SYSTEM: 系统接入域名
   */
  AccessType?: string
  /**
   * 接入域名
   */
  AccessDomain?: string
  /**
   * 接入子域名
   */
  AccessSubDomain?: string
  /**
   * 全局记录过期时间
   */
  GlobalTtl?: number
  /**
   * 套餐类型
FREE: 免费版
STANDARD：标准版
ULTIMATE：旗舰版
注意：此字段可能返回 null，表示取不到有效值。
   */
  PackageType?: string
  /**
   * 实例运行状态
NORMAL: 健康
FAULTY: 有风险
DOWN: 宕机
UNKNOWN: 未知
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkingStatus?: string
  /**
   * 实例状态
ENABLED: 正常
DISABLED: 禁用
   */
  Status?: string
  /**
   * 是否cname接入：true已接入；false未接入
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsCnameConfigured?: boolean
  /**
   * 备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
  /**
   * 策略数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  StrategyNum?: number
  /**
   * 绑定地址池个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AddressPoolNum?: number
  /**
   * 绑定监控器数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  MonitorNum?: number
  /**
   * 地址池id
注意：此字段可能返回 null，表示取不到有效值。
   */
  PoolId?: number
  /**
   * 地址池名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  PoolName?: string
  /**
   * 实例创建时间
   */
  CreatedOn?: string
  /**
   * 实例更新时间
   */
  UpdatedOn?: string
}

/**
 * ModifyStrategy请求参数结构体
 */
export interface ModifyStrategyRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 策略id
   */
  StrategyId: number
  /**
   * 解析线路，需要全量传参
   */
  Source: Array<Source>
  /**
   * 主力地址池集合，需要全量传参
   */
  MainAddressPoolSet: Array<MainAddressPool>
  /**
   * 兜底地址池集合，需要全量传参
   */
  FallbackAddressPoolSet: Array<MainAddressPool>
  /**
   * 策略名称，不允许重复
   */
  StrategyName?: string
  /**
   * 策略开启状态：ENABLED开启；DISABLED关闭
   */
  IsEnabled?: string
  /**
   * 是否开启策略强制保留默认线路 disabled, enabled，默认不开启且只有一个策略能开启
   */
  KeepDomainRecords?: string
  /**
   * 调度模式：AUTO默认；STOP仅暂停不切换
   */
  SwitchPoolType?: string
}

/**
 * DescribeDetectors请求参数结构体
 */
export type DescribeDetectorsRequest = null

/**
 * DeleteStrategy请求参数结构体
 */
export interface DeleteStrategyRequest {
  /**
   * 策略id
   */
  StrategyId: number
  /**
   * 实例id
   */
  InstanceId: string
}

/**
 * CreateInstance请求参数结构体
 */
export interface CreateInstanceRequest {
  /**
   * 业务域名
   */
  Domain: string
  /**
   * CUSTOM: 自定义接入域名
SYSTEM: 系统接入域名
   */
  AccessType: string
  /**
   * 解析生效时间
   */
  GlobalTtl: number
  /**
   * 套餐类型
FREE: 免费版
STANDARD：标准版
ULTIMATE：旗舰版
   */
  PackageType: string
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 接入主域名
   */
  AccessDomain?: string
  /**
   * 接入子域名
   */
  AccessSubDomain?: string
  /**
   * 备注
   */
  Remark?: string
  /**
   * 套餐资源id，必填
   */
  ResourceId?: string
}

/**
 * DescribeAddressPoolDetail请求参数结构体
 */
export interface DescribeAddressPoolDetailRequest {
  /**
   * 地址池id
   */
  PoolId: number
}

/**
 * CreateMonitor请求参数结构体
 */
export interface CreateMonitorRequest {
  /**
   * 监控器名称
   */
  MonitorName: string
  /**
   * 探测协议，可选值 PING TCP HTTP HTTPS
   */
  CheckProtocol: string
  /**
   * 检查间隔（秒），可选值有15 60 120 300
   */
  CheckInterval: number
  /**
   * 超时时间，单位秒，可选值为2 3 5 10
   */
  Timeout: number
  /**
   * 重试次数，可选值为 0，1，2
   */
  FailTimes: number
  /**
   * 失败比例，取值为 20 30 40 50 60 70 80 100，默认值50
   */
  FailRate: number
  /**
   * 监控节点类型，可选值有AUTO INTERNAL OVERSEAS IPV6 ALL
   */
  DetectorStyle: string
  /**
   * 探测器组id列表以,分隔
   */
  DetectorGroupIds: Array<number | bigint>
  /**
   * PING 包数目，当CheckProtocol=ping时必填，可选值有20 50 100
   */
  PingNum?: number
  /**
   * 检查端口，可选值在1-65535之间
   */
  TcpPort?: number
  /**
   * Host 设置，默认为业务域名
   */
  Host?: string
  /**
   * URL 路径，默认为“/”
   */
  Path?: string
  /**
   * 返回错误码阈值, 可选值为 400 和 500, 默认值500
   */
  ReturnCodeThreshold?: number
  /**
   * 跟随 3XX 重定向 ，不开启为 DISABLED， 开启为 ENABLED，默认不开启
   */
  EnableRedirect?: string
  /**
   * 启用 SNI，不开启为 DISABLED， 开启为 ENABLED，默认不开启
   */
  EnableSni?: string
  /**
   * 丢包率告警阈值，当CheckProtocol=ping时必填取值为10 30 50 80 90 100
   */
  PacketLossRate?: number
  /**
   * 持续周期数，可选值1-5
   */
  ContinuePeriod?: number
}

/**
 * DescribeDetectTaskPackageList请求参数结构体
 */
export interface DescribeDetectTaskPackageListRequest {
  /**
   * 每页条数
   */
  Limit?: number
  /**
   * 探测任务过滤条件：ResourceId 探测任务的资源id，PeriodStart 最小过期时间,PeriodEnd 最大过期时间
   */
  Filters?: Array<ResourceFilter>
}

/**
 * DescribeStrategyList返回参数结构体
 */
export interface DescribeStrategyListResponse {
  /**
   * 策略列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  StrategySet?: Array<Strategy>
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateStrategy请求参数结构体
 */
export interface CreateStrategyRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 策略名称，不允许重复
   */
  StrategyName: string
  /**
   * 解析线路
   */
  Source: Array<Source>
  /**
   * 主力地址池集合，最多允许配置四级
   */
  MainAddressPoolSet: Array<MainAddressPool>
  /**
   * 兜底地址池集合，只允许配置一级，且地址池数量为1
   */
  FallbackAddressPoolSet: Array<MainAddressPool>
  /**
   * 是否开启策略强制保留默认线路 disabled, enabled，默认不开启且只有一个策略能开启
   */
  KeepDomainRecords?: string
  /**
   * 策略调度模式：AUTO默认切换；STOP仅暂停不切换
   */
  SwitchPoolType?: string
}

/**
 * DescribeDnsLineList返回参数结构体
 */
export interface DescribeDnsLineListResponse {
  /**
   * 地址池列表
   */
  DnsLineSet?: Array<GroupLine>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceDetail返回参数结构体
 */
export interface DescribeInstanceDetailResponse {
  /**
   * 实例详情
   */
  Instance?: InstanceDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMonitorDetail返回参数结构体
 */
export interface DescribeMonitorDetailResponse {
  /**
   * 探测规则
注意：此字段可能返回 null，表示取不到有效值。
   */
  MonitorDetail?: MonitorDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceDetail请求参数结构体
 */
export type DescribeInstanceDetailRequest = null

/**
 * 线路列表
 */
export interface GroupLine {
  /**
   * 分组线路id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DnsLineId: number
  /**
   * 父节点 0为根节点
注意：此字段可能返回 null，表示取不到有效值。
   */
  Parent: number
  /**
   * 线路名
注意：此字段可能返回 null，表示取不到有效值。
   */
  LineName: string
  /**
   * 10=9 DNSPod 线路 id
注意：此字段可能返回 null，表示取不到有效值。
   */
  LineId: string
  /**
   * 是否已使用过
注意：此字段可能返回 null，表示取不到有效值。
   */
  Useful: boolean
  /**
   * 0为未使用
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubGroup: number
  /**
   * 权限标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  LinePackage?: number
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  Weight?: number
}

/**
 * 添加地址池地址
 */
export interface Address {
  /**
   * 地址值：只支持ipv4、ipv6和域名格式；
不支持回环地址、保留地址、内网地址与腾讯保留网段
注意：此字段可能返回 null，表示取不到有效值。
   */
  Addr: string
  /**
   * 是否启用:DISABLED不启用；ENABLED启用
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsEnable: string
  /**
   * 地址id
注意：此字段可能返回 null，表示取不到有效值。
   */
  AddressId?: number
  /**
   * 地址名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Location?: string
  /**
   * OK正常，DOWN故障，WARN风险，UNKNOWN探测中，UNMONITORED未知
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 权重，流量策略为WEIGHT时，必填；范围1-100
注意：此字段可能返回 null，表示取不到有效值。
   */
  Weight?: number
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedOn?: string
  /**
   * 修改时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedOn?: string
}

/**
 * CreateInstance返回参数结构体
 */
export interface CreateInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 探测组
 */
export interface DetectorGroup {
  /**
   * 线路组id GroupLineId
   */
  Gid: number
  /**
   * bgp, international, isp
   */
  GroupType?: string
  /**
   * 组名
   */
  GroupName?: string
  /**
   * ipv4, ipv6
   */
  InternetFamily?: string
  /**
   * 支持的套餐类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  PackageSet?: Array<string>
}

/**
 * DescribeDetectPackageDetail请求参数结构体
 */
export interface DescribeDetectPackageDetailRequest {
  /**
   * 资源id
   */
  ResourceId: string
}

/**
 * 主力地址池id与权重
 */
export interface MainPoolWeight {
  /**
   * 地址池id
注意：此字段可能返回 null，表示取不到有效值。
   */
  PoolId: number
  /**
   * 权重
注意：此字段可能返回 null，表示取不到有效值。
   */
  Weight?: number
}

/**
 * ModifyAddressPool返回参数结构体
 */
export interface ModifyAddressPoolResponse {
  /**
   * 是否修改成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAddressPool返回参数结构体
 */
export interface CreateAddressPoolResponse {
  /**
   * 地址池id
   */
  AddressPoolId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstancePackageList请求参数结构体
 */
export interface DescribeInstancePackageListRequest {
  /**
   * 每页条数
   */
  Limit?: number
  /**
   * InstanceId实例Id，InstanceName实例名称，ResourceId套餐Id，PackageType套餐类型
   */
  Filters?: Array<ResourceFilter>
  /**
   * 是否使用：0未使用1已使用
   */
  IsUsed?: number
}

/**
 * DescribeStrategyDetail返回参数结构体
 */
export interface DescribeStrategyDetailResponse {
  /**
   * 策略详情
   */
  StrategyDetail?: StrategyDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMonitors请求参数结构体
 */
export interface DescribeMonitorsRequest {
  /**
   * 分页，偏移值
   */
  Offset?: number
  /**
   * 分页，当前分页记录数
   */
  Limit?: number
  /**
   * 是否查探测次数0否1是
   */
  IsDetectNum?: number
}

/**
 * ModifyMonitor返回参数结构体
 */
export interface ModifyMonitorResponse {
  /**
   * success 为修改成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 计费项
 */
export interface CostItem {
  /**
   * 计费项名称
   */
  CostName?: string
  /**
   * 计费项值
   */
  CostValue?: number
}

/**
 * DescribeAddressLocation请求参数结构体
 */
export interface DescribeAddressLocationRequest {
  /**
   * 地址数组
   */
  Address: Array<string>
}

/**
 * DescribeStrategyList请求参数结构体
 */
export interface DescribeStrategyListRequest {
  /**
   * 实例 id
   */
  InstanceId: string
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 每页条数
   */
  Limit?: number
  /**
   * 策略过滤条件：StrategyName：策略名称
   */
  Filters?: Array<ResourceFilter>
}

/**
 * DescribeMonitorDetail请求参数结构体
 */
export interface DescribeMonitorDetailRequest {
  /**
   * 监控器id
   */
  MonitorId: number
}

/**
 * DescribeDetectPackageDetail返回参数结构体
 */
export interface DescribeDetectPackageDetailResponse {
  /**
   * 资源id
   */
  ResourceId?: string
  /**
   * 资源类型 TASK 探测任务
   */
  ResourceType?: string
  /**
   * 额度
   */
  Quota?: number
  /**
   * 过期时间
   */
  CurrentDeadline?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 是否过期
   */
  IsExpire?: number
  /**
   * 状态 ENABLED: 正常 ISOLATED: 隔离 DESTROYED：销毁 REFUNDED：已退款
   */
  Status?: string
  /**
   * 是否自动续费0不1是
   */
  AutoRenewFlag?: number
  /**
   * 备注
   */
  Remark?: string
  /**
   * 计费项
   */
  CostItemList?: Array<CostItem>
  /**
   * 使用数量
   */
  UsedNum?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 监控器详情
 */
export interface MonitorDetail {
  /**
   * 探测规则id
   */
  MonitorId?: number
  /**
   * 监控器名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  MonitorName?: string
  /**
   * 所属用户
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin?: string
  /**
   * 监控节点id组
注意：此字段可能返回 null，表示取不到有效值。
   */
  DetectorGroupIds?: Array<number | bigint>
  /**
   * 探测协议 PING TCP HTTP HTTPS
注意：此字段可能返回 null，表示取不到有效值。
   */
  CheckProtocol?: string
  /**
   * 探测周期
注意：此字段可能返回 null，表示取不到有效值。
   */
  CheckInterval?: number
  /**
   * 发包数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  PingNum?: number
  /**
   * tcp端口
注意：此字段可能返回 null，表示取不到有效值。
   */
  TcpPort?: number
  /**
   * 探测 host
注意：此字段可能返回 null，表示取不到有效值。
   */
  Host?: string
  /**
   * 探测路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  Path?: string
  /**
   * 返回值阈值
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReturnCodeThreshold?: number
  /**
   * 是否开启3xx重定向跟随 ENABLED DISABLED
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableRedirect?: string
  /**
   * 是否启用 sni
ENABLED DISABLED
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableSni?: string
  /**
   * 丢包率上限
注意：此字段可能返回 null，表示取不到有效值。
   */
  PacketLossRate?: number
  /**
   * 探测超时
注意：此字段可能返回 null，表示取不到有效值。
   */
  Timeout?: number
  /**
   * 失败次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailTimes?: number
  /**
   * 失败率上限100
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailRate?: number
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedOn?: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedOn?: string
  /**
   * 监控节点类型
AUTO INTERNAL OVERSEAS IPV6 ALL
注意：此字段可能返回 null，表示取不到有效值。
   */
  DetectorStyle?: string
  /**
   * 探测次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  DetectNum?: number
  /**
   * 持续周期数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContinuePeriod?: number
}

/**
 * DescribeAddressPoolList返回参数结构体
 */
export interface DescribeAddressPoolListResponse {
  /**
   * 资源组列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  AddressPoolSet?: Array<AddressPool>
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateMonitor返回参数结构体
 */
export interface CreateMonitorResponse {
  /**
   * 监控器id
注意：此字段可能返回 null，表示取不到有效值。
   */
  MonitorId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例相关信息
 */
export interface InstanceInfo {
  /**
   * 实例id
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceName?: string
}

/**
 * 实例套餐
 */
export interface InstancePackage {
  /**
   * 实例套餐资源id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceId?: string
  /**
   * 实例id
   */
  InstanceId?: string
  /**
   * 实例名
   */
  InstanceName?: string
  /**
   * 套餐类型
FREE: 免费版
STANDARD：标准版
ULTIMATE：旗舰版
   */
  PackageType?: string
  /**
   * 套餐过期时间
   */
  CurrentDeadline?: string
  /**
   * 套餐创建时间
   */
  CreateTime?: string
  /**
   * 是否过期0否1是
   */
  IsExpire?: number
  /**
   * 实例状态
ENABLED: 正常
DISABLED: 禁用
   */
  Status?: string
  /**
   * 是否自动续费0不1是
   */
  AutoRenewFlag?: number
  /**
   * 备注
   */
  Remark?: string
  /**
   * 计费项
   */
  CostItemList?: Array<CostItem>
  /**
   * 最小检查间隔时间s
   */
  MinCheckInterval?: number
  /**
   * 最小TTL s
   */
  MinGlobalTtl?: number
  /**
   * 流量策略类型：ALL返回全部，WEIGHT权重
   */
  TrafficStrategy?: Array<string>
  /**
   * 策略类型：LOCATION按地理位置调度，DELAY按延迟调度
   */
  ScheduleStrategy?: Array<string>
}

/**
 * DeleteStrategy返回参数结构体
 */
export interface DeleteStrategyResponse {
  /**
   * 是否成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAddressPool请求参数结构体
 */
export interface ModifyAddressPoolRequest {
  /**
   * 地址池id
   */
  PoolId: number
  /**
   * 地址池名称，不允许重复
   */
  PoolName?: string
  /**
   * 流量策略: WEIGHT负载均衡，ALl解析全部
   */
  TrafficStrategy?: string
  /**
   * 监控器id
   */
  MonitorId?: number
  /**
   * 地址列表
   */
  AddressSet?: Array<Address>
}

/**
 * 实例配置详情
 */
export interface InstanceConfig {
  /**
   * 实例名称
   */
  InstanceName: string
  /**
   * 业务域名
   */
  Domain: string
  /**
   * CUSTOM: 自定义接入域名
SYSTEM: 系统接入域名
   */
  AccessType: string
  /**
   * 备注
   */
  Remark: string
  /**
   * 全局记录过期时间
   */
  GlobalTtl: number
  /**
   * 接入主域名，自定义接入域名时必填

   */
  AccessDomain?: string
  /**
   * 接入子域名，自定义接入域名时必填
   */
  AccessSubDomain?: string
}

/**
 * 策略详情
 */
export interface StrategyDetail {
  /**
   * 实例id
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId: string
  /**
   * 策略id
注意：此字段可能返回 null，表示取不到有效值。
   */
  StrategyId: number
  /**
   * 策略名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name: string
  /**
   * 线路
注意：此字段可能返回 null，表示取不到有效值。
   */
  Source: Array<Source>
  /**
   * 主力地址池集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  MainAddressPoolSet: Array<MainAddressPool>
  /**
   * 兜底地址池id
注意：此字段可能返回 null，表示取不到有效值。
   */
  FallbackAddressPoolSet: Array<MainAddressPool>
  /**
   * 是否保留线路：enabled保留，disabled不保留，只保留默认线路
注意：此字段可能返回 null，表示取不到有效值。
   */
  KeepDomainRecords?: string
  /**
   * 生效主力地址池id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ActivateMainPoolId?: number
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedOn?: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedOn?: string
  /**
   * 调度模式：AUTO默认；PAUSE仅暂停不切换
注意：此字段可能返回 null，表示取不到有效值。
   */
  SwitchPoolType?: string
}

/**
 * DescribeQuotas返回参数结构体
 */
export interface DescribeQuotasResponse {
  /**
   * 配额id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Quotas?: Quota
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyInstanceConfig请求参数结构体
 */
export interface ModifyInstanceConfigRequest {
  /**
   * 实例配置详情
   */
  InstanceConfig?: InstanceConfig
}

/**
 * DescribeAddressLocation返回参数结构体
 */
export interface DescribeAddressLocationResponse {
  /**
   * 所属地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  AddressLocation?: Array<AddressLocation>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceList返回参数结构体
 */
export interface DescribeInstanceListResponse {
  /**
   * 实例列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceSet?: Array<Instance>
  /**
   * 列表总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 是否支持系统域名接入：true支持；false不支持
注意：此字段可能返回 null，表示取不到有效值。
   */
  SystemAccessEnabled?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询时过滤条件。
 */
export interface ResourceFilter {
  /**
   * 过滤字段名，支持的列表如下：
- type：主资源类型，CDN。
- instanceId：IGTM实例ID。此为必传参数，未传将导致接口查询失败。
   */
  Name: string
  /**
   * 过滤字段值。

   */
  Value: Array<string>
  /**
   * 是否启用模糊查询，仅支持过滤字段名为domain。
模糊查询时，Value长度最大为1，否则Value长度最大为5。(预留字段，暂未使用)
   */
  Fuzzy?: boolean
}

/**
 * DeleteMonitor返回参数结构体
 */
export interface DeleteMonitorResponse {
  /**
   * 成功返回
注意：此字段可能返回 null，表示取不到有效值。
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
