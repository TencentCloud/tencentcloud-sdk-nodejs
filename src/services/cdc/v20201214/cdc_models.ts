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
 * DescribeDedicatedClusterInstanceTypes返回参数结构体
 */
export interface DescribeDedicatedClusterInstanceTypesResponse {
  /**
   * 支持的实例规格列表
   */
  DedicatedClusterInstanceTypeSet?: Array<DedicatedClusterInstanceType>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDedicatedClusters请求参数结构体
 */
export interface DescribeDedicatedClustersRequest {
  /**
   * 按照一个或者多个实例ID查询。实例ID形如：`cluster-xxxxxxxx`
   */
  DedicatedClusterIds?: Array<string>
  /**
   * 按照可用区名称过滤
   */
  Zones?: Array<string>
  /**
   * 按照站点id过滤
   */
  SiteIds?: Array<string>
  /**
   * 按照专用集群生命周期过滤
   */
  LifecycleStatuses?: Array<string>
  /**
   * 模糊匹配专用集群名称
   */
  Name?: string
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
 * DescribeDedicatedClusterTypes返回参数结构体
 */
export interface DescribeDedicatedClusterTypesResponse {
  /**
   * 专用集群配置列表
   */
  DedicatedClusterTypeSet?: Array<DedicatedClusterType>
  /**
   * 符合条件的个数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 专用宿主机支持的实例规格列表
 */
export interface DedicatedClusterInstanceType {
  /**
   * 可用区
   */
  Zone?: string
  /**
   * 规格名称
   */
  InstanceType?: string
  /**
   * 网卡类型，例如：25代表25G网卡
   */
  NetworkCard?: number
  /**
   * 实例的CPU核数，单位：核。
   */
  Cpu?: number
  /**
   * 实例内存容量，单位：`GB`。
   */
  Memory?: number
  /**
   * 实例机型系列。
   */
  InstanceFamily?: string
  /**
   * 机型名称。
   */
  TypeName?: string
  /**
   * 本地存储块数量。
   */
  StorageBlockAmount?: number
  /**
   * 内网带宽，单位Gbps。
   */
  InstanceBandwidth?: number
  /**
   * 网络收发包能力，单位万PPS。
   */
  InstancePps?: number
  /**
   * 处理器型号。
   */
  CpuType?: string
  /**
   * 实例的GPU数量。
   */
  Gpu?: number
  /**
   * 实例的FPGA数量。
   */
  Fpga?: number
  /**
   * 机型描述
   */
  Remark?: string
  /**
   * 实例是否售卖。取值范围： <br><li>SELL：表示实例可购买<br></li><li>SOLD_OUT：表示实例已售罄。</li>
   */
  Status?: string
}

/**
 * 专用集群配置
 */
export interface DedicatedClusterType {
  /**
   * 配置id
   */
  DedicatedClusterTypeId?: string
  /**
   * 配置描述，对应描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 配置名称，对应计算资源类型
   */
  Name?: string
  /**
   * 创建配置的时间
   */
  CreateTime?: string
  /**
   * 支持的存储类型列表
   */
  SupportedStorageType?: Array<string>
  /**
   * 支持的上连交换机的链路传输速率
   */
  SupportedUplinkGiB?: Array<number | bigint>
  /**
   * 支持的实例族列表
   */
  SupportedInstanceFamily?: Array<string>
  /**
   * 地板承重要求(KG)
   */
  Weight?: number
  /**
   * 功率要求(KW)
   */
  PowerDrawKva?: number
  /**
   * 显示计算资源规格详情，存储等资源不显示
   */
  ComputeFormatDesc?: string
}

/**
 * DeleteSites请求参数结构体
 */
export interface DeleteSitesRequest {
  /**
   * 要删除的站点id列表
   */
  SiteIds: Array<string>
}

/**
 * 用于购买页面添加cos信息
 */
export interface CosInfo {
  /**
   * COS存储大小，单位TB
   */
  Size: number
  /**
   * COS存储类型，默认为cos
   */
  Type: string
}

/**
 * 可用区信息
 */
export interface ZoneInfo {
  /**
   * 可用区名称
   */
  Zone?: string
  /**
   * 可用区描述
   */
  ZoneName?: string
  /**
   * 可用区ID
   */
  ZoneId?: number
  /**
   * 可用区状态，包含AVAILABLE和UNAVAILABLE。AVAILABLE代表可用，UNAVAILABLE代表不可用。
   */
  ZoneState?: string
}

/**
 * DescribeDedicatedClusterOverview返回参数结构体
 */
export interface DescribeDedicatedClusterOverviewResponse {
  /**
   * 云服务器数量
   */
  CvmCount?: number
  /**
   * 宿主机数量
   */
  HostCount?: number
  /**
   * vpn通道状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpnConnectionState?: string
  /**
   * vpn网关监控数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpngwBandwidthData?: VpngwBandwidthData
  /**
   * 本地网关信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  LocalNetInfo?: LocalNetInfo
  /**
   * vpn网关通道监控数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpnConnectionBandwidthData?: Array<VpngwBandwidthData>
  /**
   * 宿主机资源概览信息
   */
  HostDetailInfo?: Array<HostDetailInfo>
  /**
   * 热备宿主机数量
   */
  HostStandbyCount?: number
  /**
   * 普通宿主机数量
   */
  HostNormalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSites请求参数结构体
 */
export interface DescribeSitesRequest {
  /**
   * 按照站点id过滤
   */
  SiteIds?: Array<string>
  /**
   * 模糊匹配站点名称
   */
  Name?: string
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
 * DescribeDedicatedClusterTypes请求参数结构体
 */
export interface DescribeDedicatedClusterTypesRequest {
  /**
   * 模糊匹配专用集群配置名称
   */
  Name?: string
  /**
   * 待查询的专用集群配置id列表
   */
  DedicatedClusterTypeIds?: Array<string>
  /**
   * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
   */
  Limit?: number
  /**
   * 是否只查询计算规格类型
   */
  IsCompute?: boolean
}

/**
 * CreateSite返回参数结构体
 */
export interface CreateSiteResponse {
  /**
   * 创建Site生成的id
   */
  SiteId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDedicatedSupportedZones返回参数结构体
 */
export interface DescribeDedicatedSupportedZonesResponse {
  /**
   * 支持的可用区列表
   */
  ZoneSet?: Array<RegionZoneInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySiteInfo返回参数结构体
 */
export interface ModifySiteInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDedicatedClusterOrder请求参数结构体
 */
export interface CreateDedicatedClusterOrderRequest {
  /**
   * 专用集群id
   */
  DedicatedClusterId: string
  /**
   * order关联的专用集群类型数组
   */
  DedicatedClusterTypes?: Array<DedicatedClusterTypeInfo>
  /**
   * order关联的cos存储信息
   */
  CosInfo?: CosInfo
  /**
   * order关联的cbs存储信息
   */
  CbsInfo?: CbsInfo
  /**
   * 购买来源，默认为cloudApi
   */
  PurchaseSource?: string
  /**
   * 当调用API接口提交订单时，需要提交DedicatedClusterOrderId，此处DedicatedClusterOrderId是之前创建的订单，可通过DescribeDedicatedClusterOrders接口查询，这里传入DedicatedClusterOrderId用于调整订单和支付。
   */
  DedicatedClusterOrderId?: string
}

/**
 * ModifyOrderStatus请求参数结构体
 */
export interface ModifyOrderStatusRequest {
  /**
   * 要更新成的状态
   */
  Status: string
  /**
   * 大订单ID，可以在本地专用集群的基础信息页获取大订单ID
   */
  DedicatedClusterOrderId?: string
  /**
   * 小订单ID，进入大订单的详情页，可以看到小订单ID
   */
  SubOrderIds?: Array<string>
}

/**
 * 专用集群子订单
 */
export interface DedicatedClusterOrderItem {
  /**
   * 专用集群类型id
   */
  DedicatedClusterTypeId?: string
  /**
   * 支持的存储类型列表
   */
  SupportedStorageType?: Array<string>
  /**
   * 支持的上连交换机的链路传输速率(GiB)
   */
  SupportedUplinkSpeed?: Array<number | bigint>
  /**
   * 支持的实例族列表
   */
  SupportedInstanceFamily?: Array<string>
  /**
   * 地板承重要求(KG)
   */
  Weight?: number
  /**
   * 功率要求(KW)
   */
  PowerDraw?: number
  /**
   * 订单状态
   */
  SubOrderStatus?: string
  /**
   * 订单创建的时间
   */
  CreateTime?: string
  /**
   * 子订单ID
   */
  SubOrderId?: string
  /**
   * 关联的集群规格数量
   */
  Count?: number
  /**
   * 规格简单描述
   */
  Name?: string
  /**
   * 规格详细描述
   */
  Description?: string
  /**
   * CPU数
   */
  TotalCpu?: number
  /**
   * 内存数
   */
  TotalMem?: number
  /**
   * GPU数
   */
  TotalGpu?: number
  /**
   * 规格英文名
   */
  TypeName?: string
  /**
   * 规格展示
注意：此字段可能返回 null，表示取不到有效值。
   */
  ComputeFormat?: string
  /**
   * 规格类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  TypeFamily?: string
  /**
   * 0未支付，1已支付
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubOrderPayStatus?: number
}

/**
 * CreateSite请求参数结构体
 */
export interface CreateSiteRequest {
  /**
   * 站点名称
   */
  Name: string
  /**
   * 站点所在国家
   */
  Country: string
  /**
   * 站点所在省份
   */
  Province: string
  /**
   * 站点所在城市
   */
  City: string
  /**
   * 站点所在地区的详细地址信息
   */
  AddressLine: string
  /**
   * 站点描述
   */
  Description?: string
  /**
   * 注意事项
   */
  Note?: string
  /**
   * 您将使用光纤类型将CDC设备连接到网络。有单模和多模两种选项。取值范围："MM","SM"
   */
  FiberType?: string
  /**
   * 您将CDC连接到网络时采用的光学标准。此字段取决于上行链路速度、光纤类型和到上游设备的距离。
   */
  OpticalStandard?: string
  /**
   * 电源连接器类型
   */
  PowerConnectors?: string
  /**
   * 从机架上方还是下方供电。取值范围：["UP","DOWN"]
   */
  PowerFeedDrop?: string
  /**
   * 最大承重(KG)
   */
  MaxWeight?: number
  /**
   * 功耗(KW)
   */
  PowerDrawKva?: number
  /**
   * 网络到腾讯云Region区域的上行链路速度(Gbps)
   */
  UplinkSpeedGbps?: number
  /**
   * 将CDC连接到网络时，每台CDC网络设备(每个机架 2 台设备)使用的上行链路数量。
   */
  UplinkCount?: number
  /**
   * 是否满足下面环境条件：
1、场地没有材料要求或验收标准会影响 CDC 设备配送和安装。
2、确定的机架位置包含:
温度范围为 41 到 104°F (5 到 40°C)。
湿度范围为 10°F (-12°C)和 8% RH (相对湿度)到 70°F(21°C)和 80% RH。
机架位置的气流方向为从前向后，且应具有足够的 CFM (每分钟立方英尺)。CFM 必须是 CDC 配置的 kVA 功耗值的 145.8 倍。
   */
  ConditionRequirement?: boolean
  /**
   * 是否满足下面的尺寸条件：
您的装货站台可以容纳一个机架箱(高 x 宽 x 深 = 94" x 54" x 48")。
您可以提供从机架(高 x 宽 x 深 = 80" x 24" x 48")交货地点到机架最终安置位置的明确通道。测量深度时，应包括站台、走廊通道、门、转弯、坡道、货梯，并将其他通道限制考虑在内。
在最终的 CDC安置位置，前部间隙可以为 48" 或更大，后部间隙可以为 24" 或更大。
   */
  DimensionRequirement?: boolean
  /**
   * 是否提供冗余的上游设备(交换机或路由器)，以便两台  网络设备都能连接到网络设备。
   */
  RedundantNetworking?: boolean
  /**
   * 站点所在地区的邮编
   */
  PostalCode?: number
  /**
   * 站点所在地区的详细地址信息（补充）
   */
  OptionalAddressLine?: string
  /**
   * 是否需要腾讯云团队协助完成机架支撑工作
   */
  NeedHelp?: boolean
  /**
   * 是否电源冗余
   */
  RedundantPower?: boolean
  /**
   * 上游断路器是否具备
   */
  BreakerRequirement?: boolean
}

/**
 * DescribeDedicatedSupportedZones请求参数结构体
 */
export interface DescribeDedicatedSupportedZonesRequest {
  /**
   * 传入region列表
   */
  Regions?: Array<number | bigint>
}

/**
 * DedicatedClusterType => (Id, Count)
 */
export interface DedicatedClusterTypeInfo {
  /**
   * 集群类型Id
   */
  Id: string
  /**
   * 集群类型个数
   */
  Count: number
}

/**
 * ModifyOrderStatus返回参数结构体
 */
export interface ModifyOrderStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云硬盘的仓库级别信息
 */
export interface SetInfo {
  /**
   * 云硬盘仓库id
注意：此字段可能返回 null，表示取不到有效值。
   */
  SetId?: string
  /**
   * 云硬盘仓库名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SetName?: string
  /**
   * 云硬盘仓库类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  SetType?: string
  /**
   * 云硬盘仓库容量
注意：此字段可能返回 null，表示取不到有效值。
   */
  SetSize?: number
  /**
   * 云硬盘仓库状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  SetStatus?: string
  /**
   * 云硬盘仓库创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 读流量
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReadTraffic?: DetailData
  /**
   * 写流量
注意：此字段可能返回 null，表示取不到有效值。
   */
  WriteTraffic?: DetailData
  /**
   * 读IO
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReadIO?: DetailData
  /**
   * 写IO
注意：此字段可能返回 null，表示取不到有效值。
   */
  WriteIO?: DetailData
  /**
   * 平均等待时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Await?: DetailData
  /**
   * 利用率
注意：此字段可能返回 null，表示取不到有效值。
   */
  Util?: DetailData
}

/**
 * 入带宽数据
 */
export interface InBandwidth {
  /**
   * 时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  Timestamps: Array<number>
  /**
   * 时间对应的值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Values: Array<number>
}

/**
 * DescribeDedicatedClusterCosCapacity请求参数结构体
 */
export interface DescribeDedicatedClusterCosCapacityRequest {
  /**
   * 查询的专用集群id
   */
  DedicatedClusterId: string
}

/**
 * VPN网关的流量监控数据。
 */
export interface VpngwBandwidthData {
  /**
   * 出带宽流量
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutBandwidth?: OutBandwidth
  /**
   * 入带宽流量
   */
  InBandwidth?: InBandwidth
}

/**
 * DescribeSites返回参数结构体
 */
export interface DescribeSitesResponse {
  /**
   * 符合查询条件的站点列表
   */
  SiteSet?: Array<Site>
  /**
   * 符合条件的站点数量。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSitesDetail请求参数结构体
 */
export interface DescribeSitesDetailRequest {
  /**
   * 按照站点id过滤
   */
  SiteIds?: Array<string>
  /**
   * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
   */
  Limit?: number
  /**
   * 按照站定名称模糊匹配
   */
  Name?: string
}

/**
 * 带有时间戳的详细数据。
 */
export interface DetailData {
  /**
   * 时间戳
   */
  Timestamps?: Array<number>
  /**
   * 对应的具体值
   */
  Values?: Array<number>
}

/**
 * 专用集群订单
 */
export interface DedicatedClusterOrder {
  /**
   * 专用集群id
   */
  DedicatedClusterId?: string
  /**
   * 专用集群类型id（移到下一层级，已经废弃，后续将删除）
   */
  DedicatedClusterTypeId?: string
  /**
   * 支持的存储类型列表（移到下一层级，已经废弃，后续将删除）
   */
  SupportedStorageType?: Array<string>
  /**
   * 支持的上连交换机的链路传输速率(GiB)（移到下一层级，已经废弃，后续将删除）
   */
  SupportedUplinkSpeed?: Array<number | bigint>
  /**
   * 支持的实例族列表（移到下一层级，已经废弃，后续将删除）
   */
  SupportedInstanceFamily?: Array<string>
  /**
   * 地板承重要求(KG)
   */
  Weight?: number
  /**
   * 功率要求(KW)
   */
  PowerDraw?: number
  /**
   * 订单状态
   */
  OrderStatus?: string
  /**
   * 订单创建的时间
   */
  CreateTime?: string
  /**
   * 大订单ID
   */
  DedicatedClusterOrderId?: string
  /**
   * 订单类型，创建CREATE或扩容EXTEND
   */
  Action?: string
  /**
   * 子订单详情列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  DedicatedClusterOrderItems?: Array<DedicatedClusterOrderItem>
  /**
   * cpu值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Cpu?: number
  /**
   * mem值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mem?: number
  /**
   * gpu值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Gpu?: number
  /**
   * 0代表未支付，1代表已支付
注意：此字段可能返回 null，表示取不到有效值。
   */
  PayStatus?: number
  /**
   * 支付方式，一次性、按月、按年
注意：此字段可能返回 null，表示取不到有效值。
   */
  PayType?: string
  /**
   * 购买时长的单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeUnit?: string
  /**
   * 购买时长
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeSpan?: number
  /**
   * 订单类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  OrderType?: string
  /**
   * 验收状态
   */
  CheckStatus?: string
  /**
   * 交付预期时间
   */
  DeliverExpectTime?: string
  /**
   * 交付实际完成时间
   */
  DeliverFinishTime?: string
  /**
   * 验收预期时间
   */
  CheckExpectTime?: string
  /**
   * 验收实际完成时间
   */
  CheckFinishTime?: string
  /**
   * 订单SLA
   */
  OrderSLA?: string
  /**
   * 订单支付计划
   */
  OrderPayPlan?: string
}

/**
 * ModifyDedicatedClusterInfo请求参数结构体
 */
export interface ModifyDedicatedClusterInfoRequest {
  /**
   * 本地专用集群ID
   */
  DedicatedClusterId: string
  /**
   * 集群的新名称
   */
  Name?: string
  /**
   * 集群的新可用区
   */
  Zone?: string
  /**
   * 集群的新描述信息
   */
  Description?: string
  /**
   * 集群所在站点
   */
  SiteId?: string
}

/**
 * DescribeDedicatedClusterCbsStatistics请求参数结构体
 */
export interface DescribeDedicatedClusterCbsStatisticsRequest {
  /**
   * 查询的专用集群id
   */
  DedicatedClusterId: string
  /**
   * 云硬盘仓库id
   */
  SetId?: string
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
  /**
   * 时间范围精度，1分钟(ONE_MINUTE)/5分钟(FIVE_MINUTE)
   */
  Period?: string
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 返回数量，默认为20
   */
  Limit?: number
}

/**
 * DescribeDedicatedClusterHosts请求参数结构体
 */
export interface DescribeDedicatedClusterHostsRequest {
  /**
   * 集群id
   */
  DedicatedClusterId: string
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 返回数量，默认为20
   */
  Limit?: number
}

/**
 * CreateDedicatedClusterOrder返回参数结构体
 */
export interface CreateDedicatedClusterOrderResponse {
  /**
   * 专用集群订单id
注意：此字段可能返回 null，表示取不到有效值。
   */
  DedicatedClusterOrderId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDedicatedClusterCosCapacity返回参数结构体
 */
export interface DescribeDedicatedClusterCosCapacityResponse {
  /**
   * 本集群内cos容量信息，单位：‘GB’
   */
  CosCapacity?: CosCapacity
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RegionZoneInfo信息
 */
export interface RegionZoneInfo {
  /**
   * Region id
   */
  RegionId?: number
  /**
   * ZoneInfo数组
   */
  Zones?: Array<ZoneInfo>
}

/**
 * CreateDedicatedCluster返回参数结构体
 */
export interface CreateDedicatedClusterResponse {
  /**
   * 创建的专用集群id
   */
  DedicatedClusterId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 专用集群列表
 */
export interface DedicatedCluster {
  /**
   * 专用集群id。如"cluster-xxxxx"。
   */
  DedicatedClusterId?: string
  /**
   * 专用集群所属可用区名称。
   */
  Zone?: string
  /**
   * 专用集群的描述。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 专用集群的名称。
   */
  Name?: string
  /**
   * 专用集群的生命周期。如"PENDING"。
   */
  LifecycleStatus?: string
  /**
   * 专用集群的创建时间。
   */
  CreateTime?: string
  /**
   * 专用集群所属的站点id。
   */
  SiteId?: string
}

/**
 * DescribeSitesDetail返回参数结构体
 */
export interface DescribeSitesDetailResponse {
  /**
   * 站点详情
   */
  SiteDetailSet?: Array<SiteDetail>
  /**
   * 符合条件的站点总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDedicatedClusterOrders请求参数结构体
 */
export interface DescribeDedicatedClusterOrdersRequest {
  /**
   * 按照专用集群id过滤
   */
  DedicatedClusterIds?: Array<string>
  /**
   * 按照专用集群订单id过滤
   */
  DedicatedClusterOrderIds?: string
  /**
   * 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
   */
  Limit?: number
  /**
   * 订单状态为过滤条件：PENDING INCONSTRUCTION DELIVERING DELIVERED EXPIRED CANCELLED  OFFLINE
   */
  Status?: string
  /**
   * 订单类型为过滤条件：CREATE  EXTEND
   */
  ActionType?: string
  /**
   * 订单类型列表
   */
  OrderTypes?: Array<string>
}

/**
 * DescribeDedicatedClusters返回参数结构体
 */
export interface DescribeDedicatedClustersResponse {
  /**
   * 符合查询条件的专用集群列表
   */
  DedicatedClusterSet?: Array<DedicatedCluster>
  /**
   * 符合条件的专用集群数量。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CDC集群内宿主机的统计信息
 */
export interface HostStatistic {
  /**
   * 宿主机规格
   */
  HostType?: string
  /**
   * 宿主机机型系列
   */
  HostFamily?: string
  /**
   * 宿主机的CPU核数，单位：核
   */
  Cpu?: number
  /**
   * 宿主机内存大小，单位：GB
   */
  Memory?: number
  /**
   * 该规格宿主机的数量
   */
  Count?: number
  /**
   * 平均cpu负载百分比
   */
  CpuAverage?: number
  /**
   * 平均内存使用率百分比
   */
  MemAverage?: number
  /**
   * 平均网络流量
   */
  NetAverage?: number
  /**
   * cpu详细监控数据
   */
  CpuDetailData?: DetailData
  /**
   * 内存详细数据
   */
  MemDetailData?: DetailData
  /**
   * 网络速率详细数据
   */
  NetRateDetailData?: DetailData
  /**
   * 网速包详细数据
   */
  NetPacketDetailData?: DetailData
}

/**
 * 宿主机资源的概览详细信息。
 */
export interface HostDetailInfo {
  /**
   * 类型族
   */
  HostTypeFamily?: string
  /**
   * 总CPU
   */
  CpuTotal?: number
  /**
   * 可用CPU
   */
  CpuAvailable?: number
  /**
   * 总内存
   */
  MemTotal?: number
  /**
   * 可用内存
   */
  MemAvailable?: number
}

/**
 * 购买的cbs信息
 */
export interface CbsInfo {
  /**
   * cbs存储大小，单位TB
   */
  Size: number
  /**
   * cbs存储类型，默认为SSD
   */
  Type: string
}

/**
 * ModifySiteDeviceInfo返回参数结构体
 */
export interface ModifySiteDeviceInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDedicatedClusterCbsStatistics返回参数结构体
 */
export interface DescribeDedicatedClusterCbsStatisticsResponse {
  /**
   * 云硬盘仓库信息
   */
  SetList?: Array<SetInfo>
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDedicatedClusterHosts返回参数结构体
 */
export interface DescribeDedicatedClusterHostsResponse {
  /**
   * 宿主机信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  HostInfoSet?: Array<HostInfo>
  /**
   * 宿主机总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 本地网络信息
 */
export interface LocalNetInfo {
  /**
   * 协议
注意：此字段可能返回 null，表示取不到有效值。
   */
  Protocol: string
  /**
   * 网络id
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId: string
  /**
   * 路由信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  BGPRoute: string
  /**
   * 本地IP
注意：此字段可能返回 null，表示取不到有效值。
   */
  LocalIp: string
}

/**
 * DescribeDedicatedClusterInstanceTypes请求参数结构体
 */
export interface DescribeDedicatedClusterInstanceTypesRequest {
  /**
   * 查询的专用集群id
   */
  DedicatedClusterId: string
}

/**
 * ModifyDedicatedClusterInfo返回参数结构体
 */
export interface ModifyDedicatedClusterInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySiteInfo请求参数结构体
 */
export interface ModifySiteInfoRequest {
  /**
   * 机房ID
   */
  SiteId: string
  /**
   * 站点名称
   */
  Name?: string
  /**
   * 站点描述
   */
  Description?: string
  /**
   * 注意事项
   */
  Note?: string
  /**
   * 站点所在国家
   */
  Country?: string
  /**
   * 站点所在省份
   */
  Province?: string
  /**
   * 站点所在城市
   */
  City?: string
  /**
   * 站点所在地区的邮编
   */
  PostalCode?: string
  /**
   * 站点所在地区的详细地址信息
   */
  AddressLine?: string
}

/**
 * 站点详情
 */
export interface SiteDetail {
  /**
   * 站点id
   */
  SiteId?: string
  /**
   * 站点名称
   */
  Name?: string
  /**
   * 站点描述
   */
  Description?: string
  /**
   * 站点创建时间
   */
  CreateTime?: string
  /**
   * 光纤类型
   */
  FiberType?: string
  /**
   * 网络到腾讯云Region区域的上行链路速度
   */
  UplinkSpeedGbps?: number
  /**
   * 将CDC连接到网络时，每台CDC网络设备(每个机架 2 台设备)使用的上行链路数量。
   */
  UplinkCount?: number
  /**
   * 将CDC连接到网络时采用的光学标准
   */
  OpticalStandard?: string
  /**
   * 是否提供冗余的上游设备(交换机或路由器)，以便两台  网络设备都能连接到网络设备。
   */
  RedundantNetworking?: boolean
  /**
   * 电源连接器类型
   */
  PowerConnectors?: string
  /**
   * 从机架上方还是下方供电。
   */
  PowerFeedDrop?: string
  /**
   * 功耗(KW)
   */
  PowerDrawKva?: number
  /**
   * 是否满足下面环境条件：
1、场地没有材料要求或验收标准会影响 CDC 设备配送和安装。
2、确定的机架位置包含:
温度范围为 41 到 104°F (5 到 40°C)。
湿度范围为 10°F (-12°C)和 8% RH (相对湿度)到 70°F(21°C)和 80% RH。
机架位置的气流方向为从前向后，且应具有足够的 CFM (每分钟立方英尺)。CFM 必须是 CDC 配置的 kVA 功耗值的 145.8 倍。
   */
  ConditionRequirement?: boolean
  /**
   * 是否满足下面的尺寸条件：
您的装货站台可以容纳一个机架箱(高 x 宽 x 深 = 94" x 54" x 48")。
您可以提供从机架(高 x 宽 x 深 = 80" x 24" x 48")交货地点到机架最终安置位置的明确通道。测量深度时，应包括站台、走廊通道、门、转弯、坡道、货梯，并将其他通道限制考虑在内。
在最终的 CDC安置位置，前部间隙可以为 48" 或更大，后部间隙可以为 24" 或更大。
   */
  DimensionRequirement?: boolean
  /**
   * 最大承重(KG)
   */
  MaxWeight?: number
  /**
   * 站点地址
   */
  AddressLine?: string
  /**
   * 站点所在地区的详细地址信息（补充）
   */
  OptionalAddressLine?: string
  /**
   * 是否需要腾讯云团队协助完成机架支撑工作
   */
  NeedHelp?: boolean
  /**
   * 上游断路器是否具备
   */
  BreakerRequirement?: boolean
  /**
   * 是否电源冗余
   */
  RedundantPower?: boolean
  /**
   * 站点所在国家
   */
  Country?: string
  /**
   * 站点所在省份
   */
  Province?: string
  /**
   * 站点所在城市
   */
  City?: string
  /**
   * 站点所在地区的邮编
   */
  PostalCode?: number
}

/**
 * DeleteSites返回参数结构体
 */
export interface DeleteSitesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CDC集群内cos的容量信息
 */
export interface CosCapacity {
  /**
   * 已购cos的总容量大小，单位GB
   */
  TotalCapacity: number
  /**
   * 剩余可用cos的容量大小，单位GB
   */
  TotalFreeCapacity: number
  /**
   * 已用cos的容量大小，单位GB
   */
  TotalUsedCapacity: number
}

/**
 * CDC宿主机的详细信息
 */
export interface HostInfo {
  /**
   * 宿主机IP（废弃）
   */
  HostIp?: string
  /**
   * 云服务类型
   */
  ServiceType?: string
  /**
   * 宿主机运行状态
   */
  HostStatus?: string
  /**
   * 宿主机类型
   */
  HostType?: string
  /**
   * cpu可用数
   */
  CpuAvailable?: number
  /**
   * cpu总数
   */
  CpuTotal?: number
  /**
   * 内存可用数
   */
  MemAvailable?: number
  /**
   * 内存总数
   */
  MemTotal?: number
  /**
   * 运行时间
   */
  RunTime?: string
  /**
   * 到期时间
   */
  ExpireTime?: string
  /**
   * 宿主机id
注意：此字段可能返回 null，表示取不到有效值。
   */
  HostId?: string
}

/**
 * ModifySiteDeviceInfo请求参数结构体
 */
export interface ModifySiteDeviceInfoRequest {
  /**
   * 机房ID
   */
  SiteId: string
  /**
   * 您将使用光纤类型将CDC设备连接到网络。有单模和多模两种选项。
   */
  FiberType?: string
  /**
   * 您将CDC连接到网络时采用的光学标准。此字段取决于上行链路速度、光纤类型和到上游设备的距离。
   */
  OpticalStandard?: string
  /**
   * 电源连接器类型
   */
  PowerConnectors?: string
  /**
   * 从机架上方还是下方供电。取值范围：["UP","DOWN"]
   */
  PowerFeedDrop?: string
  /**
   * 最大承重(KG)
   */
  MaxWeight?: number
  /**
   * 功耗(KW)
   */
  PowerDrawKva?: number
  /**
   * 网络到腾讯云Region区域的上行链路速度(Gbps)
   */
  UplinkSpeedGbps?: number
  /**
   * 将CDC连接到网络时，每台CDC网络设备(每个机架 2 台设备)使用的上行链路数量。
   */
  UplinkCount?: number
  /**
   * 是否满足下面环境条件：
1、场地没有材料要求或验收标准会影响 CDC 设备配送和安装。
2、确定的机架位置包含:
温度范围为 41 到 104°F (5 到 40°C)。
湿度范围为 10°F (-12°C)和 8% RH (相对湿度)到 70°F(21°C)和 80% RH。
机架位置的气流方向为从前向后，且应具有足够的 CFM (每分钟立方英尺)，散热功率须达到CDC运行功率值的 145.8 倍以上。
   */
  ConditionRequirement?: boolean
  /**
   * 是否满足下面的尺寸条件：
您的装货站台可以容纳一个机架箱(高 x 宽 x 深 = 94" x 54" x 48")。
您可以提供从机架(高 x 宽 x 深 = 80" x 24" x 48")交货地点到机架最终安置位置的明确通道。测量深度时，应包括站台、走廊通道、门、转弯、坡道、货梯，并将其他通道限制考虑在内。
在最终的 CDC安置位置，前部间隙可以为 48" 或更大，后部间隙可以为 24" 或更大。
   */
  DimensionRequirement?: boolean
  /**
   * 是否提供冗余的上游设备(交换机或路由器)，以便实现网络出口的高可用。
   */
  RedundantNetworking?: boolean
  /**
   * 是否需要腾讯云团队协助完成机架支撑工作
   */
  NeedHelp?: boolean
  /**
   * 是否电源冗余
   */
  RedundantPower?: boolean
  /**
   * 上游断路器是否具备
   */
  BreakerRequirement?: boolean
}

/**
 * DescribeDedicatedClusterHostStatistics返回参数结构体
 */
export interface DescribeDedicatedClusterHostStatisticsResponse {
  /**
   * 该集群内宿主机的统计信息列表
   */
  HostStatisticSet?: Array<HostStatistic>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 客户站点信息
 */
export interface Site {
  /**
   * 站点名称
   */
  Name?: string
  /**
   * 站点id
   */
  SiteId?: string
  /**
   * 站点描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 站点创建时间
   */
  CreateTime?: string
}

/**
 * CreateDedicatedCluster请求参数结构体
 */
export interface CreateDedicatedClusterRequest {
  /**
   * 专用集群所属的SiteId
   */
  SiteId: string
  /**
   * 专用集群的名称
   */
  Name: string
  /**
   * 专用集群所属的可用区
   */
  Zone: string
  /**
   * 专用集群的描述
   */
  Description?: string
}

/**
 * DescribeDedicatedClusterOrders返回参数结构体
 */
export interface DescribeDedicatedClusterOrdersResponse {
  /**
   * 专用集群订单列表
   */
  DedicatedClusterOrderSet?: Array<DedicatedClusterOrder>
  /**
   * 符合条件的专用集群订单总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDedicatedClusterHostStatistics请求参数结构体
 */
export interface DescribeDedicatedClusterHostStatisticsRequest {
  /**
   * 查询的专用集群id
   */
  DedicatedClusterId: string
  /**
   * 宿主机id
   */
  HostId?: string
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
  /**
   * 时间范围精度，1分钟(ONE_MINUTE)/5分钟(FIVE_MINUTE)
   */
  Period?: string
}

/**
 * 出带宽数据。
 */
export interface OutBandwidth {
  /**
   * 时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  Timestamps: Array<number>
  /**
   * 对应时间的值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Values: Array<number>
}

/**
 * DescribeDedicatedClusterOverview请求参数结构体
 */
export interface DescribeDedicatedClusterOverviewRequest {
  /**
   * 集群id
   */
  DedicatedClusterId: string
}

/**
 * DeleteDedicatedClusters请求参数结构体
 */
export interface DeleteDedicatedClustersRequest {
  /**
   * 要删除的专用集群id
   */
  DedicatedClusterIds: Array<string>
}

/**
 * DeleteDedicatedClusters返回参数结构体
 */
export interface DeleteDedicatedClustersResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
