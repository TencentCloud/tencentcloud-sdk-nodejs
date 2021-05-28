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
注意：此字段可能返回 null，表示取不到有效值。
      */
  VpcId: string

  /**
      * 子网实例ID，例如：subnet-bthucmmy。
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubnetId: string

  /**
      * 子网名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubnetName: string

  /**
      * 子网的 IPv4 CIDR。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CidrBlock: string

  /**
      * 创建时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreatedTime: string

  /**
      * 可用IP数。
注意：此字段可能返回 null，表示取不到有效值。
      */
  AvailableIpAddressCount: number

  /**
      * 子网的 IPv6 CIDR。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Ipv6CidrBlock: string

  /**
      * 总IP数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalIpAddressCount: number

  /**
      * 是否为默认Subnet
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsDefault: boolean
}

/**
 * DescribeSubnet请求参数结构体
 */
export interface DescribeSubnetRequest {
  /**
   * 返回数量。
   */
  Limit: number

  /**
   * 偏移量。
   */
  Offset: number

  /**
   * 查询指定VpcId下的子网信息。
   */
  VpcId: string

  /**
   * 查找关键字
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
  TotalCount: number

  /**
      * 资源信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  VsmList: Array<ResourceInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  DeviceTypes: Array<DeviceInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
   * 商品的时间大小
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
}

/**
 * DescribeVpc返回参数结构体
 */
export interface DescribeVpcResponse {
  /**
   * 可查询到的所有Vpc实例总数。
   */
  TotalCount: number

  /**
      * Vpc对象列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  VpcList: Array<Vpc>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
}

/**
 * DescribeSubnet返回参数结构体
 */
export interface DescribeSubnetResponse {
  /**
   * 返回的子网数量。
   */
  TotalCount: number

  /**
      * 返回的子网实例列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubnetList: Array<Subnet>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
export type DescribeSupportedHsmRequest = null

/**
 * 安全组基础信息
 */
export interface SgUnit {
  /**
      * 安全组Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  SgId: string

  /**
      * 安全组名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  SgName: string

  /**
      * 备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  SgRemark: string

  /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: string
}

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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUsgRule返回参数结构体
 */
export interface DescribeUsgRuleResponse {
  /**
      * 安全组详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  SgRules?: Array<UsgRuleDetail>

  /**
      * 安全组详情数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResourceId: string

  /**
      * 资源名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResourceName: string

  /**
      * 资源状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: number

  /**
      * 资源IP
注意：此字段可能返回 null，表示取不到有效值。
      */
  Vip: string

  /**
      * 资源所属Vpc
注意：此字段可能返回 null，表示取不到有效值。
      */
  VpcId: string

  /**
      * 资源所属子网
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubnetId: string

  /**
      * 资源所属HSM规格
注意：此字段可能返回 null，表示取不到有效值。
      */
  Model: string

  /**
      * 资源类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  VsmType: number

  /**
      * 地域Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  RegionId: number

  /**
      * 区域Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ZoneId: number

  /**
      * 过期时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExpireTime: number

  /**
      * 地域名
注意：此字段可能返回 null，表示取不到有效值。
      */
  RegionName: string

  /**
      * 区域名
注意：此字段可能返回 null，表示取不到有效值。
      */
  ZoneName: string

  /**
      * 实例的安全组列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  SgList: Array<SgUnit>

  /**
      * 子网名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubnetName: string

  /**
      * 当前实例是否已经过期
注意：此字段可能返回 null，表示取不到有效值。
      */
  Expired: boolean

  /**
      * 为正数表示实例距离过期时间还剩余多少秒，为负数表示已经过期多少秒
注意：此字段可能返回 null，表示取不到有效值。
      */
  RemainSeconds: number

  /**
      * Vpc名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  VpcName: string

  /**
      * 创建者Uin账号
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateUin: string

  /**
      * 自动续费状态标识， 0-手动续费，1-自动续费，2-到期不续
注意：此字段可能返回 null，表示取不到有效值。
      */
  RenewFlag: number

  /**
      * 标签列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tags: Array<Tag>

  /**
      * 厂商
注意：此字段可能返回 null，表示取不到有效值。
      */
  Manufacturer: string
}

/**
 * DescribeVpc请求参数结构体
 */
export interface DescribeVpcRequest {
  /**
   * 返回偏移量。
   */
  Offset: number

  /**
   * 返回数量。
   */
  Limit: number

  /**
   * 搜索关键字
   */
  SearchWord?: string
}

/**
 * VPC对象
 */
export interface Vpc {
  /**
      * Vpc名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  VpcName: string

  /**
      * VpcId
注意：此字段可能返回 null，表示取不到有效值。
      */
  VpcId: string

  /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreatedTime: string

  /**
      * 是否为默认VPC
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsDefault: boolean
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
   * 搜索关键字
   */
  SearchWord?: string
}

/**
 * DescribeVsmAttributes返回参数结构体
 */
export interface DescribeVsmAttributesResponse {
  /**
   * 资源Id
   */
  ResourceId: string

  /**
   * 资源名称
   */
  ResourceName: string

  /**
   * 资源状态，1表示资源为正常，2表示资源处于隔离状态
   */
  Status: number

  /**
   * 资源IP
   */
  Vip: string

  /**
   * 资源所属Vpc
   */
  VpcId: string

  /**
   * 资源所属子网
   */
  SubnetId: string

  /**
   * 资源所属HSM的规格
   */
  Model: string

  /**
   * 资源类型，17表示EVSM，33表示GVSM，49表示SVSM
   */
  VsmType: number

  /**
   * 地域Id，返回腾讯云地域代码，如广州为1，北京为8
   */
  RegionId: number

  /**
   * 区域Id，返回腾讯云每个地域的可用区代码
   */
  ZoneId: number

  /**
   * 过期时间
   */
  ExpireTime: number

  /**
      * 安全组详情信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  SgList: Array<UsgRuleDetail>

  /**
      * 子网名
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubnetName: string

  /**
      * 地域名
注意：此字段可能返回 null，表示取不到有效值。
      */
  RegionName: string

  /**
      * 区域名
注意：此字段可能返回 null，表示取不到有效值。
      */
  ZoneName: string

  /**
      * 实例是否已经过期
注意：此字段可能返回 null，表示取不到有效值。
      */
  Expired: boolean

  /**
      * 为正数表示实例距离过期时间剩余秒数，为负数表示实例已经过期多少秒
注意：此字段可能返回 null，表示取不到有效值。
      */
  RemainSeconds: number

  /**
      * 私有虚拟网络名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  VpcName: string

  /**
      * VPC的IPv4 CIDR
注意：此字段可能返回 null，表示取不到有效值。
      */
  VpcCidrBlock: string

  /**
      * 子网的CIDR
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubnetCidrBlock: string

  /**
      * 资源所关联的Tag
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tags: Array<Tag>

  /**
      * 资源续费标识，0表示默认状态(用户未设置，即初始状态)， 1表示自动续费，2表示明确不自动续费(用户设置)
注意：此字段可能返回 null，表示取不到有效值。
      */
  RenewFlag: number

  /**
      * 厂商
注意：此字段可能返回 null，表示取不到有效值。
      */
  Manufacturer: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * 安全组规则详情
 */
export interface UsgRuleDetail {
  /**
      * 入站规则
注意：此字段可能返回 null，表示取不到有效值。
      */
  InBound: Array<UsgPolicy>

  /**
      * 出站规则
注意：此字段可能返回 null，表示取不到有效值。
      */
  OutBound: Array<UsgPolicy>

  /**
      * 安全组Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  SgId: string

  /**
      * 安全组名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  SgName: string

  /**
      * 备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  SgRemark: string

  /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: string

  /**
      * 版本
注意：此字段可能返回 null，表示取不到有效值。
      */
  Version: number
}

/**
 * InquiryPriceBuyVsm返回参数结构体
 */
export interface InquiryPriceBuyVsmResponse {
  /**
      * 原始总金额
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCost: number

  /**
      * 购买的实例数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  GoodsNum: number

  /**
      * 商品的时间大小
注意：此字段可能返回 null，表示取不到有效值。
      */
  TimeSpan: string

  /**
      * 商品的时间单位
注意：此字段可能返回 null，表示取不到有效值。
      */
  TimeUnit: string

  /**
      * 应付总金额
注意：此字段可能返回 null，表示取不到有效值。
      */
  OriginalCost: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 支持的加密机类型信息
 */
export interface HsmInfo {
  /**
   * 加密机型号
   */
  Model: string

  /**
   * 此类型的加密机所支持的VSM类型列表
   */
  VsmTypes: Array<VsmInfo>
}

/**
 * DescribeUsg返回参数结构体
 */
export interface DescribeUsgResponse {
  /**
      * 用户的安全组列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  SgList: Array<SgUnit>

  /**
   * 返回的安全组数量
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
   * 查询关键字
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
}

/**
 * 设备厂商信息
 */
export interface DeviceInfo {
  /**
   * 厂商名称
   */
  Manufacturer: string

  /**
   * 此厂商旗下的设备信息列表
   */
  HsmTypes: Array<HsmInfo>
}

/**
 * DescribeUsgRule请求参数结构体
 */
export interface DescribeUsgRuleRequest {
  /**
   * 根据安全组Id获取安全组详情
   */
  SgIds: Array<string>
}

/**
 * ModifyVsmAttributes返回参数结构体
 */
export interface ModifyVsmAttributesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
注意：此字段可能返回 null，表示取不到有效值。
      */
  Ip: string

  /**
      * 安全组id代表的地址集合
注意：此字段可能返回 null，表示取不到有效值。
      */
  Id: string

  /**
      * 地址组id代表的地址集合
注意：此字段可能返回 null，表示取不到有效值。
      */
  AddressModule: string

  /**
      * 协议
注意：此字段可能返回 null，表示取不到有效值。
      */
  Proto: string

  /**
      * 端口
注意：此字段可能返回 null，表示取不到有效值。
      */
  Port: string

  /**
      * 服务组id代表的协议和端口集合
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServiceModule: string

  /**
      * 备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  Desc: string

  /**
      * 匹配后行为:ACCEPT/DROP
注意：此字段可能返回 null，表示取不到有效值。
      */
  Action: string
}
