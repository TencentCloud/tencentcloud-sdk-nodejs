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
 * DescribeCloudDedicatedZoneResourceSummary请求参数结构体
 */
export interface DescribeCloudDedicatedZoneResourceSummaryRequest {
  /**
   * 专属可用区唯一标识
   */
  CdzId: string
}

/**
 * 专属可用区资源统计项数据详情，对应一个具体的垂直产品的资源统计项。
 */
export interface CloudDedicatedZoneResourceStatisticsInfo {
  /**
   * 资源统计项名称
   */
  Item?: string
  /**
   * 资源统计项单位
   */
  Unit?: string
  /**
   * 资源总量
   */
  Total?: string
  /**
   * 已用资源
   */
  Usage?: string
  /**
   * 已用资源占比
   */
  UsageRate?: string
  /**
   * 剩余资源
   */
  Remain?: string
  /**
   * 剩余资源占比
   */
  RemainRate?: string
  /**
   * 本周一零点资源使用率
   */
  ThisMondayUsageRate?: string
  /**
   * 本周资源增长比例
   */
  ThisMondayUsageGrowthRate?: string
  /**
   * 上周资源增长比例
   */
  LastMondayUsageGrowthRate?: string
}

/**
 * DescribeCloudDedicatedZoneHosts返回参数结构体
 */
export interface DescribeCloudDedicatedZoneHostsResponse {
  /**
   * 返回Host和Host上部署的实例信息之间的关系
   */
  CloudDedicatedZoneHostsInfoSet?: Array<CloudDedicatedZoneHostsInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 专属可用区资源水位数据扩展信息，包含可用区当地时间等数据。
 */
export interface ExtraInfo {
  /**
   * 专属可用区当地时间本周一日期
注意：此字段可能返回 null，表示取不到有效值。
   */
  ThisMondayLocalDate?: string
  /**
   * 专属可用区当地时间上周一日期
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastMondayLocalDate?: string
}

/**
 * CDZ的母机和子机的对应关系
 */
export interface CloudDedicatedZoneHostsInfo {
  /**
   * Host的唯一标识uuid
注意：此字段可能返回 null，表示取不到有效值。
   */
  HostUuid?: string
  /**
   * 实例名称数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstancesInfo?: Array<string>
}

/**
 * DescribeCloudDedicatedZoneHosts请求参数结构体
 */
export interface DescribeCloudDedicatedZoneHostsRequest {
  /**
   * 专属可用区ID
   */
  CloudDedicatedZoneID: string
  /**
   * 一个或多个Host面的CVM实例信息。最大支持查询100台Host。
   */
  HostUuids?: Array<string>
  /**
   * 查询一个实例或者多个实例所在的Host上面的CVM实例信息。最大支持查询100台实例。
   */
  InstanceIds?: Array<string>
  /**
   * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。该参数仅与CloudDedicatedZoneID有关，传递了HostUuids和InstanceIds则会失效。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API 简介中的相关小节。该参数仅与CloudDedicatedZoneID有关，传递了HostUuids和InstanceIds则会失效。
   */
  Limit?: number
}

/**
 * 专属可用区资源水位数据详情，对应一个具体的垂直产品。
 */
export interface CloudDedicatedZoneResourceSummaryInfo {
  /**
   * 产品名称
   */
  ProductName?: string
  /**
   * 子产品名称
   */
  SubProductName?: string
  /**
   * 资源统计详情
   */
  Statistics?: Array<CloudDedicatedZoneResourceStatisticsInfo>
}

/**
 * DescribeCloudDedicatedZoneResourceSummary返回参数结构体
 */
export interface DescribeCloudDedicatedZoneResourceSummaryResponse {
  /**
   * 资源水位详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceSummarySet?: Array<CloudDedicatedZoneResourceSummaryInfo>
  /**
   * 资源水位扩展信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtraInfo?: ExtraInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
