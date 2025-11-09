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
 * StartSandboxInstance请求参数结构体
 */
export interface StartSandboxInstanceRequest {
  /**
   * 沙箱工具 ID，与 ToolName 至少有一个要填
   */
  ToolId?: string
  /**
   * 沙箱工具名称，与 ToolId 至少有一个要填
   */
  ToolName?: string
  /**
   * 超时时间，超过这个时间就自动回收实例。支持格式：5m、300s、1h 等，默认 5m。最小 30s，最大 24h
   */
  Timeout?: string
  /**
   * 幂等性 Token，长度不超过 64 字符
   */
  ClientToken?: string
}

/**
 * 沙箱实例结构体
 */
export interface SandboxInstance {
  /**
   * 沙箱实例唯一标识符
   */
  InstanceId: string
  /**
   * 所属沙箱工具 ID
   */
  ToolId: string
  /**
   * 所属沙箱工具名称
   */
  ToolName: string
  /**
   * 实例状态：STARTING（启动中）、RUNNING（运行中）、STOPPING（停止中）、STOPPED（已停止）、STOP_FAILED（停止失败）、FAILED（失败状态）
   */
  Status: string
  /**
   * 超时时间（秒），null 表示无超时设置
   */
  TimeoutSeconds?: number
  /**
   * 过期时间（ISO 8601 格式），null 表示无过期时间
   */
  ExpiresAt?: string
  /**
   * 停止原因：manual（手动）、timeout（超时）、error（错误）、system（系统），仅在状态为 STOPPED、STOP_FAILED 或 FAILED 时有值。当 provider 停止失败时，状态为 STOP_FAILED，原因为 error
   */
  StopReason?: string
  /**
   * 创建时间（ISO 8601 格式）
   */
  CreateTime?: string
  /**
   * 更新时间（ISO 8601 格式）
   */
  UpdateTime?: string
}

/**
 * StopSandboxInstance请求参数结构体
 */
export interface StopSandboxInstanceRequest {
  /**
   * 沙箱实例ID
   */
  InstanceId: string
}

/**
 * DescribeSandboxToolList返回参数结构体
 */
export interface DescribeSandboxToolListResponse {
  /**
   * 沙箱工具列表
   */
  SandboxToolSet?: Array<SandboxTool>
  /**
   * 符合条件的沙箱工具总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAPIKey返回参数结构体
 */
export interface CreateAPIKeyResponse {
  /**
   * 用户传入的API密钥名称，方便用户记忆
   */
  Name?: string
  /**
   * 生成的API密钥，仅返回此一次，后续无法获取
   */
  APIKey?: string
  /**
   * API密钥ID
   */
  KeyId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSandboxToolList请求参数结构体
 */
export interface DescribeSandboxToolListRequest {
  /**
   * 沙箱工具ID列表，指定要查询的工具。如果为空则查询所有工具。最大支持100个ID
   */
  ToolIds?: Array<string>
  /**
   * 偏移量，默认为0
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100
   */
  Limit?: number
  /**
   * 过滤条件
   */
  Filters?: Array<Filter>
}

/**
 * CreateSandboxTool请求参数结构体
 */
export interface CreateSandboxToolRequest {
  /**
   * 沙箱工具名称，长度 1-50 字符，支持英文、数字、下划线和连接线。同一 AppId 下沙箱工具名称必须唯一
   */
  ToolName: string
  /**
   * 沙箱工具类型，目前支持：browser、code-interpreter
   */
  ToolType: string
  /**
   * 网络配置
   */
  NetworkConfiguration: NetworkConfiguration
  /**
   * 沙箱工具描述，最大长度 200 字符
   */
  Description?: string
  /**
   * 默认超时时间，支持格式：5m、300s、1h 等，不指定则使用系统默认值（5 分钟）。最大 24 小时
   */
  DefaultTimeout?: string
  /**
   * 标签规格，为沙箱工具绑定标签，支持多种资源类型的标签绑定
   */
  Tags?: Array<Tag>
  /**
   * 幂等性 Token，长度不超过 64 字符
   */
  ClientToken?: string
}

/**
 * DeleteAPIKey返回参数结构体
 */
export interface DeleteAPIKeyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * API密钥简略信息
 */
export interface APIKeyInfo {
  /**
   * API密钥名称
   */
  Name?: string
  /**
   * API密钥ID
   */
  KeyId?: string
  /**
   * 密钥状态。可以为API_KEY_STATUS_ACTIVE，或API_KEY_STATUS_INACTIVE
   */
  Status?: string
  /**
   * 隐藏部分字符的API密钥，方便用户辨认
   */
  MaskedKey?: string
  /**
   * API密钥创建时间
   */
  CreatedAt?: string
}

/**
 * UpdateSandboxInstance返回参数结构体
 */
export interface UpdateSandboxInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteSandboxTool请求参数结构体
 */
export interface DeleteSandboxToolRequest {
  /**
   * 沙箱工具ID
   */
  ToolId: string
}

/**
 * CreateAPIKey请求参数结构体
 */
export interface CreateAPIKeyRequest {
  /**
   * API密钥名称，方便用户记忆
   */
  Name?: string
}

/**
 * 沙箱网络配置
 */
export interface NetworkConfiguration {
  /**
   * 网络模式（当前支持 PUBLIC）
   */
  NetworkMode: string
}

/**
 * DeleteSandboxTool返回参数结构体
 */
export interface DeleteSandboxToolResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 沙箱工具结构体
 */
export interface SandboxTool {
  /**
   * 沙箱工具唯一标识符
   */
  ToolId: string
  /**
   * 沙箱工具名称，长度 1-50 字符，支持中英文、数字、下划线。同一 AppId 下沙箱工具名称必须唯一
   */
  ToolName?: string
  /**
   * 沙箱工具类型，取值：browser（浏览器工具）、code-interpreter（代码解释器工具）、computer（计算机控制工具）、mobile（移动设备工具）
   */
  ToolType?: string
  /**
   * 沙箱工具状态，取值：CREATING（创建中）、ACTIVE（可用）、DELETING（删除中）、FAILED（失败）
   */
  Status?: string
  /**
   * 沙箱工具描述信息，最大长度 200 字符
   */
  Description?: string
  /**
   * 默认超时时间，支持格式：5m、300s、1h 等，不指定则使用系统默认值（5 分钟）。最大 24 小时
   */
  DefaultTimeoutSeconds?: number
  /**
   * 网络配置
   */
  NetworkConfiguration?: NetworkConfiguration
  /**
   * 标签规格，包含资源标签绑定关系。用于为沙箱工具绑定标签，支持多种资源类型的标签绑定
   */
  Tags?: Array<Tag>
  /**
   * 沙箱工具创建时间，格式：ISO8601
   */
  CreateTime?: string
  /**
   * 沙箱工具更新时间，格式：ISO8601
   */
  UpdateTime?: string
}

/**
 * 过滤列表规则
 */
export interface Filter {
  /**
   * 属性名称, 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
   */
  Name?: string
  /**
   * 属性值, 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
   */
  Values?: Array<string>
}

/**
 * StartSandboxInstance返回参数结构体
 */
export interface StartSandboxInstanceResponse {
  /**
   * 创建的沙箱实例完整信息
   */
  Instance?: SandboxInstance
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AcquireSandboxInstanceToken请求参数结构体
 */
export interface AcquireSandboxInstanceTokenRequest {
  /**
   * 沙箱实例ID，生成的访问Token将仅可用于访问此沙箱实例
   */
  InstanceId: string
}

/**
 * DescribeAPIKeyList返回参数结构体
 */
export interface DescribeAPIKeyListResponse {
  /**
   * API密钥简略信息列表。
   */
  APIKeySet?: Array<APIKeyInfo>
  /**
   * 列表中API密钥数量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSandboxInstanceList请求参数结构体
 */
export interface DescribeSandboxInstanceListRequest {
  /**
   * 沙箱实例ID列表，指定要查询的实例。如果为空则查询所有实例。最大支持100个ID
   */
  InstanceIds?: Array<string>
  /**
   * 沙箱工具ID，指定时查询该沙箱模板下的实例，为空则查询所有沙箱模板的实例
   */
  ToolId?: string
  /**
   * 偏移量，默认为0
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100
   */
  Limit?: number
  /**
   * 过滤条件
   */
  Filters?: Array<Filter>
}

/**
 * DescribeAPIKeyList请求参数结构体
 */
export type DescribeAPIKeyListRequest = null

/**
 * UpdateSandboxInstance请求参数结构体
 */
export interface UpdateSandboxInstanceRequest {
  /**
   * 沙箱实例ID
   */
  InstanceId: string
  /**
   * 新的超时时间（从设置时开始重新计算超时），支持格式：5m、300s、1h等。最小30s，最大24h。如果不指定则保持原有超时设置
   */
  Timeout?: string
}

/**
 * CreateSandboxTool返回参数结构体
 */
export interface CreateSandboxToolResponse {
  /**
   * 创建的沙箱工具 ID
   */
  ToolId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateSandboxTool返回参数结构体
 */
export interface UpdateSandboxToolResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAPIKey请求参数结构体
 */
export interface DeleteAPIKeyRequest {
  /**
   * 需要删除的API密钥ID
   */
  KeyId: string
}

/**
 * AcquireSandboxInstanceToken返回参数结构体
 */
export interface AcquireSandboxInstanceTokenResponse {
  /**
   * 访问Token
   */
  Token?: string
  /**
   * 过期时间
   */
  ExpiresAt?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopSandboxInstance返回参数结构体
 */
export interface StopSandboxInstanceResponse {
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
  Key?: string
  /**
   * 标签值
   */
  Value?: string
}

/**
 * UpdateSandboxTool请求参数结构体
 */
export interface UpdateSandboxToolRequest {
  /**
   * 沙箱工具ID
   */
  ToolId: string
  /**
   * 沙箱工具描述，最大长度200字符
   */
  Description?: string
  /**
   * 网络配置
   */
  NetworkConfiguration?: NetworkConfiguration
  /**
   * 标签
   */
  Tags?: Array<Tag>
}

/**
 * DescribeSandboxInstanceList返回参数结构体
 */
export interface DescribeSandboxInstanceListResponse {
  /**
   * 沙箱实例列表
   */
  InstanceSet?: Array<SandboxInstance>
  /**
   * 符合条件的实例总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
