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
 * 当前账号剩余解封配额信息。购买高防产品的用户默认解封配额为三个资源，系统将在每天零点（UTC+8）时区重置解封配额数，当天未使用的解封配额数不会累计到次日；DDoS 高防包（轻量版）解封配额数为每月三个资源，每月重置。
 */
export interface DDoSUnblockQuota {
  /**
   * <p>解封次数配额总数。</p>
   */
  TotalQuota?: number
  /**
   * <p>已使用的配额总数。</p>
   */
  UsedQuota?: number
  /**
   * <p>配额生效的起始时间。</p>
   */
  QuotaStartTime?: string
  /**
   * <p>配额生效的结束时间。</p>
   */
  QuotaEndTime?: string
}

/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤 ID、名称、状态等。 若存在多个 Filter 时，Filter 间的关系为逻辑与（AND）关系。 若同一个 Filter 存在多个 Values，同一 Filter 下 Values 间的关系为逻辑或（OR）关系。
 */
export interface Filter {
  /**
   * <p>需要过滤的字段；具体可选择值请查看对应的引用接口。</p>
   */
  Name: string
  /**
   * <p>字段的过滤值。</p>
   */
  Values: Array<string>
}

/**
 * UnblockResources返回参数结构体
 */
export interface UnblockResourcesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 封堵记录
 */
export interface DDoSBlockRecord {
  /**
   * <p>被封堵的资源，公网 IP，示例如下：</p><ul><li> 公网 IP：117.175.94.231。</li></ul>
   */
  Resource?: string
  /**
   * <p>被封堵的时间。</p>
   */
  BlockTime?: string
  /**
   * <p>封堵解封状态。</p><p>枚举值：</p><ul><li>Blocked：已封堵；</li><li>Unblocking：解封中；</li><li>Unblocked：已解封。</li></ul>
   */
  Status?: string
}

/**
 * DescribeDDoSBlockRecords返回参数结构体
 */
export interface DescribeDDoSBlockRecordsResponse {
  /**
   * <p>封堵解封记录总数。</p>
   */
  TotalCount?: number
  /**
   * <p>封堵解封记录。</p>
   */
  BlockRecords?: Array<DDoSBlockRecord>
  /**
   * <p>解封次数配额信息。</p>
   */
  UnblockQuotaInfo?: DDoSUnblockQuota
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UnblockResources请求参数结构体
 */
export interface UnblockResourcesRequest {
  /**
   * <p>申请解封的资源列表。支持按照公网 IP 解封；可通过 DescribeDDoSBlockRecords 接口获取被封堵的资源详情。参数示例如下：</p><ul><li>公网 IP：117.175.94.230。</li></ul><p>入参限制：列表长度最大限制 10。</p>
   */
  Resources: Array<string>
}

/**
 * DescribeDDoSBlockRecords请求参数结构体
 */
export interface DescribeDDoSBlockRecordsRequest {
  /**
   * <p>查询的起始时间。最高支持近一年的数据查询。</p><p>参数格式：2026-02-04T11:30:00+08:00。</p>
   */
  StartTime: string
  /**
   * <p>查询的结束时间。查询时间范围（EndTime - StartTime）需小于等于 31 天。</p><p>参数格式：2026-03-04T11:30:00+08:00。</p>
   */
  EndTime: string
  /**
   * <p>过滤条件，Filters.Values 的上限为 20。该参数不填写时，返回当前 appid 下所有被封堵过的资源列表。详细的过滤条件如下：</p><ul><li> Resource：可按照被封堵的 IP 或者被封堵的资源六段式进行过滤；</li><li> Status：可按照被封堵的资源状态进行过滤。</li></ul><p>当 Filters.Name 取值为 Status 时，Filters.Values 取值有：</p><ul><li>Blocked：已封堵；</li><li>Unblocking：解封中；</li><li>Unblocked：已解封。</li></ul>
   */
  Filters?: Array<Filter>
  /**
   * <p>分页查询限制数，最大值为 100。</p><p>默认值：20</p>
   */
  Limit?: number
  /**
   * <p>分页查询偏移量。</p><p>默认值：0</p>
   */
  Offset?: number
}
