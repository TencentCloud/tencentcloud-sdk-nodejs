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
 * SearchResources返回参数结构体
 */
export interface SearchResourcesResponse {
  /**
   * <p>下一页Token，为空时表示无更多数据</p>
   */
  NextToken?: string
  /**
   * <p>资源列表</p>
   */
  Resources?: Array<ResourceSummary>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资源信息
 */
export interface ResourceSummary {
  /**
   * <p>资源ID</p>
   */
  ResourceId?: string
  /**
   * <p>资源别名</p>
   */
  ResourceAlias?: string
  /**
   * <p>uin</p>
   */
  Uin?: number
  /**
   * <p>资源类型</p>
   */
  ResourceType?: string
  /**
   * <p>地域编码</p>
   */
  RegionCode?: string
  /**
   * <p>可用区编码</p>
   */
  ZoneCode?: string
  /**
   * <p>付费类型，包括后付费(0)、预付费(1)、预留实例(2)</p>
   */
  PayMode?: string
  /**
   * <p>资源创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>资源过期时间</p>
   */
  ExpireTime?: string
  /**
   * <p>内网IP</p>
   */
  PrivateIpAddress?: Array<string>
  /**
   * <p>外网IP</p>
   */
  PublicIpAddress?: Array<string>
  /**
   * <p>标签</p>
   */
  Tags?: Array<Tag>
}

/**
 * SearchResources请求参数结构体
 */
export interface SearchResourcesRequest {
  /**
   * <p>视图ID</p>
   */
  ViewId?: string
  /**
   * <p>每页返回的最大记录数</p>
   */
  MaxResults?: number
  /**
   * <p>分页Token，首次查询不传</p>
   */
  NextToken?: string
  /**
   * <p>过滤条件列表</p>
   */
  Filters?: Array<ExtendedFilter>
  /**
   * <p>排序条件</p><p>枚举值：</p><ul><li>CreateTime： 表示按资源创建时间排序</li><li>ExpireTime： 表示按资源到期时间排序</li><li>IpAddress： 表示按资源IP地址排序</li></ul>
   */
  SortBy?: string
  /**
   * <p>排序顺序</p><p>枚举值：</p><ul><li>Asc： 升序</li><li>Desc： 降序</li></ul><p>默认值：Asc</p>
   */
  SortOrder?: string
}

/**
 * 过滤器
 */
export interface ExtendedFilter {
  /**
   * <p>过滤条件键</p><p>枚举值：</p><ul><li>ResourceType： 资源类型</li><li>ResourceId： 资源ID</li><li>ResourceAlias： 资源名称</li><li>PayMode： 计费模式</li><li>RegionCode： 地域编码</li><li>ZoneCode： 可用区编码</li><li>PublicIpAddress： 外网IP</li><li>PrivateIpAddress： 内网IP</li><li>VpcId： VPC ID</li><li>SubnetId： 子网ID</li><li>Tag： 标签</li></ul>
   */
  Key: string
  /**
   * <p>过滤条件值</p>
   */
  Values: Array<string>
  /**
   * <p>匹配方式</p><p>枚举值：</p><ul><li>Equals： 等于</li><li>NotEquals： 不等于</li><li>Contains： 包含</li><li>NotContains： 不包含</li><li>Exists： 存在</li><li>NotExists： 不存在</li></ul>
   */
  MatchType?: string
}

/**
 * 标签键值对
 */
export interface Tag {
  /**
   * 标签键
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key: string
  /**
   * 标签值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value: string
}

/**
 * DescribeResource请求参数结构体
 */
export interface DescribeResourceRequest {
  /**
   * <p>资源类型</p>
   */
  ResourceType: string
  /**
   * <p>地域编码</p>
   */
  RegionCode: string
  /**
   * <p>资源ID</p>
   */
  ResourceId: string
  /**
   * <p>视图ID</p>
   */
  ViewId?: string
}

/**
 * DescribeResource返回参数结构体
 */
export interface DescribeResourceResponse {
  /**
   * <p>资源ID</p>
   */
  ResourceId?: string
  /**
   * <p>资源别名</p>
   */
  ResourceAlias?: string
  /**
   * <p>uin</p>
   */
  Uin?: number
  /**
   * <p>资源类型</p>
   */
  ResourceType?: string
  /**
   * <p>地域编码</p>
   */
  RegionCode?: string
  /**
   * <p>可用区编码</p>
   */
  ZoneCode?: string
  /**
   * <p>付费类型</p>
   */
  PayMode?: string
  /**
   * <p>资源创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>资源过期时间</p>
   */
  ExpireTime?: string
  /**
   * <p>内网IP</p>
   */
  PrivateIpAddress?: Array<string>
  /**
   * <p>外网IP</p>
   */
  PublicIpAddress?: Array<string>
  /**
   * <p>资源属性</p>
   */
  Properties?: string
  /**
   * <p>标签信息</p>
   */
  Tags?: Array<Tag>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
