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
 * 地域管理系统支持的产品信息
 */
export interface RegionProduct {
  /**
   * 产品名称，如cvm
   */
  Name: string
}

/**
 * DescribeProducts请求参数结构体
 */
export interface DescribeProductsRequest {
  /**
   * 返回数量，默认为 20，最大值为 100。
   */
  Limit?: number
  /**
   * 偏移量，默认为 0。
   */
  Offset?: number
}

/**
 * DescribeProducts返回参数结构体
 */
export interface DescribeProductsResponse {
  /**
   * 产品详细信息列表。
   */
  Products?: Array<RegionProduct>
  /**
   * 产品总数量。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 可用区信息
 */
export interface ZoneInfo {
  /**
   * 可用区名称，例如，ap-guangzhou-3
全网可用区名称如下：
<li> ap-chongqing-1 </li>
<li> ap-seoul-1 </li>
<li> ap-seoul-2 </li>
<li> ap-chengdu-1 </li>
<li> ap-chengdu-2 </li>
<li> ap-hongkong-1 </li>
<li> ap-hongkong-2 </li>
<li> ap-shenzhen-fsi-1 </li>
<li> ap-shenzhen-fsi-2 </li>
<li> ap-shenzhen-fsi-3 </li>
<li> ap-guangzhou-1（售罄）</li>
<li> ap-guangzhou-2（售罄）</li>
<li> ap-guangzhou-3 </li>
<li> ap-guangzhou-4 </li>
<li> ap-guangzhou-6 </li>
<li> ap-tokyo-1 </li>
<li> ap-singapore-1 </li>
<li> ap-singapore-2 </li>
<li> ap-shanghai-fsi-1 </li>
<li> ap-shanghai-fsi-2 </li>
<li> ap-shanghai-fsi-3 </li>
<li> ap-bangkok-1 </li>
<li> ap-shanghai-1（售罄） </li>
<li> ap-shanghai-2 </li>
<li> ap-shanghai-3 </li>
<li> ap-shanghai-4 </li>
<li> ap-shanghai-5 </li>
<li> ap-mumbai-1 </li>
<li> ap-mumbai-2 </li>
<li> ap-beijing-1 </li>
<li> ap-beijing-2 </li>
<li> ap-beijing-3 </li>
<li> ap-beijing-4 </li>
<li> ap-beijing-5 </li>
<li> na-siliconvalley-1 </li>
<li> na-siliconvalley-2 </li>
<li> eu-frankfurt-1 </li>
<li> na-ashburn-1 </li>
<li> na-ashburn-2 </li>
<li> ap-nanjing-1 </li>
<li> ap-nanjing-2 </li>
   */
  Zone?: string
  /**
   * 可用区描述，例如，广州三区
   */
  ZoneName?: string
  /**
   * 可用区ID
   */
  ZoneId?: string
  /**
   * 可用区状态，包含AVAILABLE和UNAVAILABLE。AVAILABLE代表可用，UNAVAILABLE代表不可用。
   */
  ZoneState?: string
  /**
   * 父级zone
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentZone?: string
  /**
   * 父级可用区ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentZoneId?: string
  /**
   * 父级可用区描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentZoneName?: string
  /**
   * zone类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ZoneType?: string
  /**
   * 控制台类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  MachineRoomTypeMC?: string
  /**
   * 和ZoneId一样，适用于控制台调用。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ZoneIdMC?: string
}

/**
 * DescribeZones请求参数结构体
 */
export interface DescribeZonesRequest {
  /**
   * 待查询产品的名称，例如cvm，具体取值请查询DescribeProducts接口
   */
  Product: string
  /**
   * 不传或者0表示不查询【可选业务白名单】，1表示查询【可选业务白名单】，该参数设置了1，只有在业务白名单查不到情况下，才会查该白名单
   */
  Scene?: number
}

/**
 * DescribeZones返回参数结构体
 */
export interface DescribeZonesResponse {
  /**
   * 可用区数量。
   */
  TotalCount?: number
  /**
   * 可用区列表信息。
   */
  ZoneSet?: Array<ZoneInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 地域信息
 */
export interface RegionInfo {
  /**
   * 地域名称，例如，ap-guangzhou
   */
  Region: string
  /**
   * 地域描述，例如，华南地区(广州)
   */
  RegionName: string
  /**
   * 地域是否可用状态
   */
  RegionState: string
  /**
   * 控制台类型，api调用时默认null
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegionTypeMC: number
  /**
   * 不同语言的地区
注意：此字段可能返回 null，表示取不到有效值。
   */
  LocationMC: string
  /**
   * 控制台展示的地域描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegionNameMC: string
  /**
   * 1
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegionIdMC: string
}

/**
 * DescribeRegions返回参数结构体
 */
export interface DescribeRegionsResponse {
  /**
   * 地域数量
   */
  TotalCount?: number
  /**
   * 地域列表信息
   */
  RegionSet?: Array<RegionInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRegions请求参数结构体
 */
export interface DescribeRegionsRequest {
  /**
   * 待查询产品的名称，例如cvm，具体取值请查询DescribeProducts接口
   */
  Product: string
  /**
   * 不传或者0表示不查询【可选业务白名单】，1表示查询【可选业务白名单】，该参数设置了1，只有在业务白名单查不到情况下，才会查该白名单
   */
  Scene?: number
}
