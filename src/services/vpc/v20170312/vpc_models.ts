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
 * DescribeNatsEipsInternal返回参数结构体
 */
export interface DescribeNatsEipsInternalResponse {
  /**
   * eip Ip列表
   */
  EipSet?: Array<string>
  /**
   * eip ip列表总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNatsEipsInternal请求参数结构体
 */
export interface DescribeNatsEipsInternalRequest {
  /**
   * limit
   */
  Limit?: number
  /**
   * offset
   */
  Offset?: number
}
