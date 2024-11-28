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
 * Subnet对象
 */
export interface Subnet {
  /**
   * VPC实例ID。
   */
  VpcId?: string
  /**
   * 子网实例ID，例如：subnet-bthucmmy。
   */
  SubnetId?: string
  /**
   * 子网名称。
   */
  SubnetName?: string
  /**
   * 子网的 IPv4 CIDR。
   */
  CidrBlock?: string
  /**
   * 创建时间。
   */
  CreatedTime?: string
  /**
   * 可用IP数。
   */
  AvailableIpAddressCount?: number
  /**
   * 子网的 IPv6 CIDR。
   */
  Ipv6CidrBlock?: string
  /**
   * 总IP数
   */
  TotalIpAddressCount?: number
  /**
   * 是否为默认Subnet
   */
  IsDefault?: boolean
}

/**
 * DescribeSubnet请求参数结构体
 */
export interface DescribeSubnetRequest {
  /**
   * 返回数量。Limit需要在[1, 100]之间。
   */
  Limit: number
  /**
   * 偏移量。偏移量最小为0。
   */
  Offset: number
  /**
   * 查询指定VpcId下的子网信息。
   */
  VpcId: string
  /**
   * 过滤条件
   */
  SearchWord?: string
}

/**
 * DescribeVsms返回参数结构体
 */
export interface DescribeVsmsResponse {
  /**
   * 获取实例的总个数
   */
  TotalCount?: number
  /**
   * 资源信息
   */
  VsmList?: Array<ResourceInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSupportedHsm返回参数结构体
 */
export interface DescribeSupportedHsmResponse {
  /**
   * 当前地域所支持的设备列表
   */
  DeviceTypes?: Array<DeviceInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InquiryPriceBuyVsm请求参数结构体
 */
export interface InquiryPriceBuyVsmRequest {
  /**
   * 需购买实例的数量
   */
  GoodsNum: number
  /**
   * 付费模式：0表示按需计费/后付费，1表示预付费
   */
  PayMode: number
  /**
   * 商品的时间大小，整型参数，举例：当TimeSpan为1，TImeUnit为m时，表示询价购买时长为1个月时的价格
   */
  TimeSpan: string
  /**
   * 商品的时间单位，m表示月，y表示年
   */
  TimeUnit: string
  /**
   * 货币类型，默认为CNY
   */
  Currency?: string
  /**
   * 默认为CREATE，可选RENEW
   */
  Type?: string
  /**
   * Hsm服务类型，可选值virtualization、physical、GHSM、EHSM、SHSM
   */
  HsmType?: string
}

/**
 * DescribeVpc返回参数结构体
 */
export interface DescribeVpcResponse {
  /**
   * 可查询到的所有Vpc实例总数。
   */
  TotalCount?: number
  /**
   * Vpc对象列表
   */
  VpcList?: Array<Vpc>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyVsmAttributes请求参数结构体
 */
export interface ModifyVsmAttributesRequest {
  /**
   * 资源Id
   */
  ResourceId: string
  /**
   * UpdateResourceName-修改资源名称,
UpdateSgIds-修改安全组名称,
UpdateNetWork-修改网络,
Default-默认不修改
   */
  Type: Array<string>
  /**
   * 资源名称
   */
  ResourceName?: string
  /**
   * 安全组Id
   */
  SgIds?: Array<string>
  /**
   * 虚拟专网Id
   */
  VpcId?: string
  /**
   * 子网Id
   */
  SubnetId?: string
  /**
   * 告警开关，0表示关闭告警，1表示启用告警
   */
  AlarmStatus?: number
}

/**
 * GetAlarmEvent返回参数结构体
 */
export interface GetAlarmEventResponse {
  /**
   * 用户所有的告警策略
   */
  AlarmConfig?: Array<AlarmPolicy>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAlarmEvent请求参数结构体
 */
export interface ModifyAlarmEventRequest {
  /**
   * 告警事件，支持CPU、MEM、TCP
   */
  Event: string
  /**
   * 告警阈值
   */
  Limit: number
  /**
   * 告警状态，0表示停用，1表示启动
   */
  Status: number
  /**
   * 告警开始时间，只有在这个时间后才会发送告警，当跟EndTime同时为空时表示全天告警
   */
  BeginTime?: string
  /**
   * 告警结束时间，只有在这个时间前才会发送告警，当跟BeginTime同时为空时表示全天告警
   */
  EndTime?: string
}

/**
 * DescribeSubnet返回参数结构体
 */
export interface DescribeSubnetResponse {
  /**
   * 返回的子网数量。
   */
  TotalCount?: number
  /**
   * 返回的子网实例列表。
   */
  SubnetList?: Array<Subnet>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetVsmMonitorInfo返回参数结构体
 */
export interface GetVsmMonitorInfoResponse {
  /**
   * VSM监控信息
   */
  MonitorInfo?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 支持的Vsm类型信息
 */
export interface VsmInfo {
  /**
   * VSM类型名称
   */
  TypeName: string
  /**
   * VSM类型值
   */
  TypeID: number
}

/**
 * DescribeSupportedHsm请求参数结构体
 */
export interface DescribeSupportedHsmRequest {
  /**
   * Hsm类型，可选值all、virtulization、GHSM、EHSM、SHSM
   */
  HsmType?: string
}

/**
 * GetAlarmEvent请求参数结构体
 */
export type GetAlarmEventRequest = null

/**
 * DescribeHSMByVpcId返回参数结构体
 */
export interface DescribeHSMByVpcIdResponse {
  /**
   * HSM数量
   */
  TotalCount?: number
  /**
   * 作为查询条件的VpcId
   */
  VpcId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUsgRule返回参数结构体
 */
export interface DescribeUsgRuleResponse {
  /**
   * 安全组详情
   */
  SgRules?: Array<UsgRuleDetail>
  /**
   * 安全组详情数量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 标签
 */
export interface Tag {
  /**
   * 标签键
   */
  TagKey: string
  /**
   * 标签值
   */
  TagValue: string
}

/**
 * 资源信息
 */
export interface ResourceInfo {
  /**
   * 资源Id
   */
  ResourceId?: string
  /**
   * 资源名称
   */
  ResourceName?: string
  /**
   * 资源状态，1-正常，2-隔离，3-销毁
   */
  Status?: number
  /**
   * 资源IP
   */
  Vip?: string
  /**
   * 资源所属Vpc
   */
  VpcId?: string
  /**
   * 资源所属子网
   */
  SubnetId?: string
  /**
   * 资源所属HSM规格
   */
  Model?: string
  /**
   * 云加密机类型id
   */
  VsmType?: number
  /**
   * 地域Id
   */
  RegionId?: number
  /**
   * 区域Id
   */
  ZoneId?: number
  /**
   * 过期时间（Epoch Unix Timestamp）
   */
  ExpireTime?: number
  /**
   * 地域名
   */
  RegionName?: string
  /**
   * 区域名
   */
  ZoneName?: string
  /**
   * 实例的安全组列表
   */
  SgList?: Array<SgUnit>
  /**
   * 子网名称
   */
  SubnetName?: string
  /**
   * 当前实例是否已经过期
   */
  Expired?: boolean
  /**
   * 为正数表示实例距离过期时间还剩余多少秒，为负数表示已经过期多少秒
   */
  RemainSeconds?: number
  /**
   * Vpc名称
   */
  VpcName?: string
  /**
   * 创建者Uin账号
   */
  CreateUin?: string
  /**
   * 自动续费状态标识， 0-手动续费，1-自动续费，2-到期不续
   */
  RenewFlag?: number
  /**
   * 标签列表
   */
  Tags?: Array<Tag>
  /**
   * 厂商
   */
  Manufacturer?: string
  /**
   * 告警状态，0：停用，1：启用
   */
  AlarmStatus?: number
}

/**
 * DescribeVpc请求参数结构体
 */
export interface DescribeVpcRequest {
  /**
   * 返回偏移量。Offset最小为0。
   */
  Offset: number
  /**
   * 返回数量。Limit需要在[1, 100]之间。
   */
  Limit: number
  /**
   * 搜索关键字
   */
  SearchWord?: string
}

/**
 * 告警策略
 */
export interface AlarmPolicy {
  /**
   * 用户账号
   */
  Uin?: string
  /**
   * 告警事件
   */
  Event?: string
  /**
   * 告警阈值
   */
  Limit?: number
  /**
   * 告警策略是否生效，0：停用，1：启用
   */
  Status?: number
  /**
   * 在这个时间后才允许发送告警
   */
  BeginTime?: string
  /**
   * 在这个时间前才允许发送告警
   */
  EndTime?: string
}

/**
 * DescribeUsg请求参数结构体
 */
export interface DescribeUsgRequest {
  /**
   * 偏移量，当Offset和Limit均为0时将一次性返回用户所有的安全组列表。
   */
  Offset: number
  /**
   * 返回量，当Offset和Limit均为0时将一次性返回用户所有的安全组列表。
   */
  Limit: number
  /**
   * 过滤条件，支持安全组id
   */
  SearchWord?: string
}

/**
 * 支持的加密机类型信息
 */
export interface HsmInfo {
  /**
   * 加密机型号
   */
  Model?: string
  /**
   * 此类型的加密机所支持的VSM类型列表
   */
  VsmTypes?: Array<VsmInfo>
  /**
   * 加密机母机类型：virtualization、GHSM、EHSM、SHSM
   */
  HsmType?: string
}

/**
 * VPC对象
 */
export interface Vpc {
  /**
   * Vpc名称
   */
  VpcName?: string
  /**
   * VpcId
   */
  VpcId?: string
  /**
   * 创建时间
   */
  CreatedTime?: string
  /**
   * 是否为默认VPC
   */
  IsDefault?: boolean
}

/**
 * DescribeVsmAttributes返回参数结构体
 */
export interface DescribeVsmAttributesResponse {
  /**
   * 资源Id
   */
  ResourceId?: string
  /**
   * 资源名称
   */
  ResourceName?: string
  /**
   * 资源状态，1表示资源为正常，2表示资源处于隔离状态
   */
  Status?: number
  /**
   * 资源IP
   */
  Vip?: string
  /**
   * 资源所属Vpc
   */
  VpcId?: string
  /**
   * 资源所属子网
   */
  SubnetId?: string
  /**
   * 资源所属HSM的规格
   */
  Model?: string
  /**
   * 资源类型，17表示EVSM，33表示GVSM，49表示SVSM
   */
  VsmType?: number
  /**
   * 地域Id，返回腾讯云地域代码，如广州为1，北京为8
   */
  RegionId?: number
  /**
   * 区域Id，返回腾讯云每个地域的可用区代码
   */
  ZoneId?: number
  /**
   * 资源过期时间，以时间戳形式展示。
   */
  ExpireTime?: number
  /**
   * 安全组详情信息,如果未配置字段返回null
   */
  SgList?: Array<UsgRuleDetail>
  /**
   * 子网名
   */
  SubnetName?: string
  /**
   * 地域名
   */
  RegionName?: string
  /**
   * 区域名
   */
  ZoneName?: string
  /**
   * 实例是否已经过期
   */
  Expired?: boolean
  /**
   * 为正数表示实例距离过期时间剩余秒数，为负数表示实例已经过期多少秒
   */
  RemainSeconds?: number
  /**
   * 私有虚拟网络名称
   */
  VpcName?: string
  /**
   * VPC的IPv4 CIDR
   */
  VpcCidrBlock?: string
  /**
   * 子网的CIDR
   */
  SubnetCidrBlock?: string
  /**
   * 资源所关联的标签Tag
   */
  Tags?: Array<Tag>
  /**
   * 资源续费标识，0表示默认状态(用户未设置，即初始状态)， 1表示自动续费，2表示明确不自动续费(用户设置)
   */
  RenewFlag?: number
  /**
   * 厂商
   */
  Manufacturer?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 标签过滤参数
 */
export interface TagFilter {
  /**
   * 标签键
   */
  TagKey: string
  /**
   * 标签值
   */
  TagValue?: Array<string>
}

/**
 * DescribeHSMByVpcId请求参数结构体
 */
export interface DescribeHSMByVpcIdRequest {
  /**
   * VPC标识符
   */
  VpcId: string
}

/**
 * ModifyAlarmEvent返回参数结构体
 */
export interface ModifyAlarmEventResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 安全组规则详情
 */
export interface UsgRuleDetail {
  /**
   * 入站规则
   */
  InBound?: Array<UsgPolicy>
  /**
   * 出站规则
   */
  OutBound?: Array<UsgPolicy>
  /**
   * 安全组Id
   */
  SgId?: string
  /**
   * 安全组名称
   */
  SgName?: string
  /**
   * 备注
   */
  SgRemark?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 版本
   */
  Version?: number
}

/**
 * InquiryPriceBuyVsm返回参数结构体
 */
export interface InquiryPriceBuyVsmResponse {
  /**
   * 原始总金额，浮点型参数，精确到小数点后两位，如：2000.99
   */
  TotalCost?: number
  /**
   * 购买的实例数量
   */
  GoodsNum?: number
  /**
   * 商品的时间大小，整型参数，举例：当TimeSpan为1，TImeUnit为m时，表示询价购买时长为1个月时的价格
   */
  TimeSpan?: string
  /**
   * 商品的时间单位，m表示月，y表示年
   */
  TimeUnit?: string
  /**
   * 应付总金额，浮点型参数，精确到小数点后两位，如：2000.99
   */
  OriginalCost?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 安全组基础信息
 */
export interface SgUnit {
  /**
   * 安全组Id
   */
  SgId?: string
  /**
   * 安全组名称
   */
  SgName?: string
  /**
   * 备注
   */
  SgRemark?: string
  /**
   * 创建时间
   */
  CreateTime?: string
}

/**
 * DescribeHSMBySubnetId返回参数结构体
 */
export interface DescribeHSMBySubnetIdResponse {
  /**
   * HSM数量
   */
  TotalCount?: number
  /**
   * 作为查询条件的SubnetId
   */
  SubnetId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetVsmMonitorInfo请求参数结构体
 */
export interface GetVsmMonitorInfoRequest {
  /**
   * 资源Id
   */
  ResourceId: string
  /**
   * 资源名称
   */
  ResourceName?: string
}

/**
 * DescribeUsg返回参数结构体
 */
export interface DescribeUsgResponse {
  /**
   * 用户的安全组列表
   */
  SgList?: Array<SgUnit>
  /**
   * 返回的安全组数量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeHSMBySubnetId请求参数结构体
 */
export interface DescribeHSMBySubnetIdRequest {
  /**
   * Subnet标识符
   */
  SubnetId: string
}

/**
 * DescribeVsms请求参数结构体
 */
export interface DescribeVsmsRequest {
  /**
   * 偏移
   */
  Offset: number
  /**
   * 最大数量
   */
  Limit: number
  /**
   * 资源ID或者资源名字模糊查询的关键字
   */
  SearchWord?: string
  /**
   * 标签过滤条件
   */
  TagFilters?: Array<TagFilter>
  /**
   * 设备所属的厂商名称，根据厂商来进行筛选
   */
  Manufacturer?: string
  /**
   * Hsm服务类型，可选virtualization、physical、GHSM、EHSM、SHSM、all
   */
  HsmType?: string
}

/**
 * 设备厂商信息
 */
export interface DeviceInfo {
  /**
   * 厂商名称
   */
  Manufacturer?: string
  /**
   * 此厂商旗下的设备信息列表
   */
  HsmTypes?: Array<HsmInfo>
}

/**
 * DescribeUsgRule请求参数结构体
 */
export interface DescribeUsgRuleRequest {
  /**
   * 安全组Id列表
   */
  SgIds: Array<string>
}

/**
 * ModifyVsmAttributes返回参数结构体
 */
export interface ModifyVsmAttributesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVsmAttributes请求参数结构体
 */
export interface DescribeVsmAttributesRequest {
  /**
   * 资源Id
   */
  ResourceId: string
}

/**
 * 安全组策略
 */
export interface UsgPolicy {
  /**
   * cidr格式地址
   */
  Ip?: string
  /**
   * 安全组id代表的地址集合
   */
  Id?: string
  /**
   * 地址组id代表的地址集合
   */
  AddressModule?: string
  /**
   * 协议
   */
  Proto?: string
  /**
   * 端口
   */
  Port?: string
  /**
   * 服务组id代表的协议和端口集合
   */
  ServiceModule?: string
  /**
   * 备注
   */
  Desc?: string
  /**
   * 匹配后行为:ACCEPT/DROP
   */
  Action?: string
}
