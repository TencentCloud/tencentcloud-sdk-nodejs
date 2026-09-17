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
 * PauseSandboxInstance返回参数结构体
 */
export interface PauseSandboxInstanceResponse {
  /**
   * <p>目标沙箱实例当前的状态</p><p>枚举值：</p><ul><li>PAUSING： 正在暂停中</li><li>PAUSED： 已暂停</li><li>PAUSE_FAILED： 暂停失败</li></ul>
   */
  InstanceStatus?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PauseSandboxInstance请求参数结构体
 */
export interface PauseSandboxInstanceRequest {
  /**
   * <p>沙箱实例ID</p>
   */
  InstanceId: string
  /**
   * <p>可选。带内存暂停，恢复后保留进程和内存状态。true=带内存；false=仅磁盘；不传=系统默认（当前默认 true，带内存）。</p>
   */
  Memory?: boolean
}

/**
 * 沙箱工具中实例存储挂载配置
 */
export interface StorageMount {
  /**
   * <p>存储挂载配置名称</p>
   */
  Name?: string
  /**
   * <p>存储配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageSource?: StorageSource
  /**
   * <p>沙箱实例本地挂载路径</p>
   */
  MountPath?: string
  /**
   * <p>存储挂载读写权限配置，默认为false</p>
   */
  ReadOnly?: boolean
}

/**
 * 沙箱实例对象存储挂载配置
 */
export interface CosStorageSource {
  /**
   * 对象存储访问域名
   */
  Endpoint?: string
  /**
   * 对象存储桶名称
   */
  BucketName?: string
  /**
   * 对象存储桶路径，必须为以/起始的绝对路径
   */
  BucketPath?: string
}

/**
 * StartSandboxInstance请求参数结构体
 */
export interface StartSandboxInstanceRequest {
  /**
   * <p>沙箱工具 ID，与 ToolName 至少有一个要填</p>
   */
  ToolId?: string
  /**
   * <p>沙箱工具名称，与 ToolId 至少有一个要填</p>
   */
  ToolName?: string
  /**
   * <p>超时时间，超过这个时间就自动回收实例。支持格式：5m、300s、1h 等，默认 5m。最小 30s，最大 24h</p>
   */
  Timeout?: string
  /**
   * <p>幂等性 Token，长度不超过 64 字符</p>
   */
  ClientToken?: string
  /**
   * <p>沙箱实例存储挂载配置</p>
   */
  MountOptions?: Array<MountOption>
  /**
   * <p>沙箱实例自定义配置</p>
   */
  CustomConfiguration?: CustomConfiguration
  /**
   * <p>沙箱访问认证模式</p><p>枚举值：</p><ul><li>DEFAULT： 默认，即TOKEN认证</li><li>TOKEN： Token认证，即所有端口访问都需携带Token</li><li>NONE： 免认证，即所有端口访问无需携带Token</li><li>PUBLIC： 公开模式，即ENVD管理端口（49983）访问需携带Token，其他端口无需携带Token</li></ul><p>默认值：DEFAULT</p>
   */
  AuthMode?: string
  /**
   * <p>沙箱元数据</p>
   */
  Metadata?: Array<MetadataVar>
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
 * CreateDeployment请求参数结构体
 */
export interface CreateDeploymentRequest {
  /**
   * <p>唯一的 Deployment 名称，必须符合 DNS-1123 命名规范，创建后不可修改。</p>
   */
  DeploymentName: string
  /**
   * <p>用于关联 Sandbox Tool 的标识，格式为 sdt- 加 8 位小写 base36 字符。</p>
   */
  ToolId?: string
  /**
   * <p>伸缩配置；省略的成员由服务端补全默认值。</p>
   */
  ScalingConfiguration?: ScalingConfiguration
  /**
   * <p>空闲生命周期配置；省略的成员由服务端补全默认值。</p>
   */
  LifecycleConfiguration?: LifecycleConfiguration
  /**
   * <p>Affinity 配置；省略或空 Mode 表示不启用。</p>
   */
  AffinityConfiguration?: AffinityConfiguration
  /**
   * <p>标签</p>
   */
  Tags?: Array<Tag>
}

/**
 * 文件存储配置
 */
export interface CfsStorageSource {
  /**
   * CFS资源ID
   */
  FileSystemId?: string
  /**
   * CFS挂载路径
   */
  Path?: string
}

/**
 * Deployment 对 Sandbox Instance 的亲和配置。
 */
export interface AffinityConfiguration {
  /**
   * <p>Affinity 模式。</p><p>枚举值：</p><ul><li>BEST_EFFORT：优先复用原 Instance，不可用时允许改选。</li><li>STRICT：只复用原 Instance，不可用时失败且不改选。</li><li>EXCLUSIVE：一个 Affinity ID 独占一个 Instance，不能迁移。</li></ul><p>缺失或空字符串表示关闭 Affinity。</p>
   */
  Mode?: string
  /**
   * <p>请求和响应使用的 Affinity Header 名称。必须符合 HTTP field-name token 语法，长度为 1..128 个 ASCII 字节，且不能使用平台保留 Header。</p>
   */
  HeaderName?: string
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
 * metadata 项
 */
export interface MetadataVar {
  /**
   * <p>元数据名</p>
   */
  Name?: string
  /**
   * <p>元数据值</p>
   */
  Value?: string
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
 * 桌面电脑环境类沙箱配置
 */
export interface ComputerConfiguration {
  /**
   * <p>waa沙箱工具配置</p>
   */
  WAAConfiguration?: WAAConfiguration
  /**
   * <p>配置内置 OSWorld</p>
   */
  OSWorldConfiguration?: OSWorldConfiguration
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
 * AcquireDeploymentToken请求参数结构体
 */
export interface AcquireDeploymentTokenRequest {
  /**
   * <p>目标 ACTIVE Deployment 的稳定 ID。</p>
   */
  DeploymentId: string
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
 * 沙箱网络配置
 */
export interface NetworkConfiguration {
  /**
   * 网络模式（当前支持 PUBLIC, VPC, SANDBOX）
   */
  NetworkMode: string
  /**
   * VPC网络相关配置
   */
  VpcConfig?: VPCConfig
}

/**
 * AcquireDeploymentToken返回参数结构体
 */
export interface AcquireDeploymentTokenResponse {
  /**
   * <p>只用于目标 Deployment 数据面入口的短期 bearer Token，格式为 dpt_ 加非空、无 padding 的 Base64URL opaque 后缀。</p>
   */
  Token?: string
  /**
   * <p>Token 的绝对过期时间，UTC、秒精度 RFC3339 格式。</p>
   */
  ExpiresAt?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeploymentList返回参数结构体
 */
export interface DescribeDeploymentListResponse {
  /**
   * <p>当前页完整 Deployment；无匹配时为空数组。</p>
   */
  DeploymentSet?: Array<Deployment>
  /**
   * <p>应用 Filters 后、分页前的结果总数。</p>
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSandboxTool请求参数结构体
 */
export interface CreateSandboxToolRequest {
  /**
   * <p>沙箱工具名称，长度 1-50 字符，支持英文、数字、下划线和连接线。同一 AppId 下沙箱工具名称必须唯一</p>
   */
  ToolName: string
  /**
   * <p>沙箱工具类型，目前支持：browser、code-interpreter、custom等</p><p>枚举值：</p><ul><li>browser： browser</li><li>code-interpreter： code-interpreter</li><li>mobile： mobile</li><li>osworld： osworld</li><li>custom： custom</li><li>swebench： swebench</li><li>aio： aio</li><li>android-world： android-world</li><li>waa： waa</li></ul>
   */
  ToolType: string
  /**
   * <p>网络配置</p>
   */
  NetworkConfiguration: NetworkConfiguration
  /**
   * <p>沙箱工具描述，最大长度 200 字符</p>
   */
  Description?: string
  /**
   * <p>默认超时时间，支持格式：5m、300s、1h 等，不指定则使用系统默认值（5 分钟）。最大 24 小时</p>
   */
  DefaultTimeout?: string
  /**
   * <p>标签规格，为沙箱工具绑定标签，支持多种资源类型的标签绑定</p>
   */
  Tags?: Array<Tag>
  /**
   * <p>幂等性 Token，长度不超过 64 字符</p>
   */
  ClientToken?: string
  /**
   * <p>角色ARN</p>
   */
  RoleArn?: string
  /**
   * <p>沙箱工具存储配置</p>
   */
  StorageMounts?: Array<StorageMount>
  /**
   * <p>沙箱工具自定义配置</p>
   */
  CustomConfiguration?: CustomConfiguration
  /**
   * <p>桌面电脑环境类沙箱配置</p>
   */
  ComputerConfiguration?: ComputerConfiguration
  /**
   * <p>沙箱工具日志推送相关配置</p>
   */
  LogConfiguration?: LogConfiguration
  /**
   * <p>常驻沙箱标识</p>
   */
  Persistent?: boolean
}

/**
 * HTTP GET 探测动作配置
 */
export interface HttpGetAction {
  /**
   * 路径
   */
  Path?: string
  /**
   * 端口
   */
  Port?: number
  /**
   * 协议
   */
  Scheme?: string
}

/**
 * DescribePreCacheImageTask返回参数结构体
 */
export interface DescribePreCacheImageTaskResponse {
  /**
   * <p>镜像地址</p>
   */
  Image?: string
  /**
   * <p>镜像 Digest</p>
   */
  ImageDigest?: string
  /**
   * <p>镜像仓库类型：<code>enterprise</code>、<code>personal</code>。</p>
   */
  ImageRegistryType?: string
  /**
   * <p>镜像预热状态</p>
   */
  Status?: string
  /**
   * <p>镜像预热状态描述</p>
   */
  Message?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResumeSandboxInstance请求参数结构体
 */
export interface ResumeSandboxInstanceRequest {
  /**
   * <p>沙箱实例ID</p>
   */
  InstanceId: string
  /**
   * <p>超时时间，超过这个时间就自动回收实例。支持格式：5m、300s、1h 等，默认 5m。最小 30s，最大 24h</p>
   */
  Timeout?: string
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
 * OSWorld 内置版本配置
 */
export interface OSWorldConfiguration {
  /**
   * <p>指定内置 OSWorld 版本</p><p>枚举值：</p><ul><li>osworld1： osworld v1</li><li>osworld2： osworld v2</li></ul><p>默认值：osworld1</p>
   */
  Version?: string
}

/**
 * Deployment 稳定访问入口定义
 */
export interface Deployment {
  /**
   * <p>Deployment 稳定 ID，格式为 dpl- 加 8 位小写 base36 字符。</p>
   */
  DeploymentId?: string
  /**
   * <p>唯一且创建后不可修改的名称，必须符合 DNS-1123 命名规范。</p>
   */
  DeploymentName?: string
  /**
   * <p>用于关联 Sandbox Tool 的标识，格式为 sdt- 加 8 位小写 base36 字符。</p>
   */
  ToolId?: string
  /**
   * <p>完整的活跃容量配置。</p>
   */
  ScalingConfiguration?: ScalingConfiguration
  /**
   * <p>完整的空闲生命周期配置。</p>
   */
  LifecycleConfiguration?: LifecycleConfiguration
  /**
   * <p>可选 Affinity 配置；未启用时省略。</p>
   */
  AffinityConfiguration?: AffinityConfiguration
  /**
   * <p>Deployment 控制面状态。</p><p>枚举值：</p><ul><li>ACTIVE：入口可用。</li><li>DELETING：入口已关闭并正在异步删除。</li><li>DELETE_FAILED：最近一次异步删除失败，可再次调用 DeleteDeployment。</li></ul>
   */
  Status?: string
  /**
   * <p>DELETE_FAILED 状态下 1..1024 个 UTF-8 字节的安全失败摘要，格式为 {Code}[.{SubCode}]: {Message}；其他状态省略。</p>
   */
  StatusReason?: string
  /**
   * <p>创建时间，UTC、秒精度 RFC3339 格式。</p>
   */
  CreatedTime?: string
  /**
   * <p>最近一次成功公共配置写入或 Deployment 状态迁移时间，UTC、秒精度 RFC3339 格式。</p>
   */
  UpdatedTime?: string
  /**
   * <p>标签</p>
   */
  Tags?: Array<Tag>
}

/**
 * DeleteDeployment返回参数结构体
 */
export interface DeleteDeploymentResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资源配置
 */
export interface ResourceConfiguration {
  /**
   * <p>cpu 资源量</p>
   */
  CPU?: string
  /**
   * <p>内存资源量</p>
   */
  Memory?: string
  /**
   * <p>自定义磁盘大小</p><p>枚举值：</p><ul><li>1Gi： 1Gi</li><li>5Gi： 5Gi</li><li>10Gi： 10Gi</li><li>20Gi： 20Gi</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Storage?: string
}

/**
 * CreateSandboxTool返回参数结构体
 */
export interface CreateSandboxToolResponse {
  /**
   * <p>创建的沙箱工具 ID</p>
   */
  ToolId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeployment返回参数结构体
 */
export interface DescribeDeploymentResponse {
  /**
   * <p>完整 Deployment。</p>
   */
  Deployment?: Deployment
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeAPIKeyList请求参数结构体
 */
export type DescribeAPIKeyListRequest = null

/**
 * 沙箱实例结构体
 */
export interface SandboxInstance {
  /**
   * <p>沙箱实例唯一标识符</p>
   */
  InstanceId: string
  /**
   * <p>所属沙箱工具 ID</p>
   */
  ToolId: string
  /**
   * <p>所属沙箱工具名称</p>
   */
  ToolName: string
  /**
   * <p>实例状态：STARTING（启动中）、RUNNING（运行中）、STOPPING（停止中）、STOPPED（已停止）、STOP_FAILED（停止失败）、FAILED（失败状态）</p>
   */
  Status: string
  /**
   * <p>是否常驻实例</p>
   */
  Persistent?: boolean
  /**
   * <p>超时时间（秒），null 表示无超时设置</p>
   */
  TimeoutSeconds?: number
  /**
   * <p>过期时间（ISO 8601 格式），null 表示无过期时间</p>
   */
  ExpiresAt?: string
  /**
   * <p>停止原因：manual（手动）、timeout（超时）、error（错误）、system（系统），仅在状态为 STOPPED、STOP_FAILED 或 FAILED 时有值。当 provider 停止失败时，状态为 STOP_FAILED，原因为 error</p>
   */
  StopReason?: string
  /**
   * <p>创建时间（ISO 8601 格式）</p>
   */
  CreateTime?: string
  /**
   * <p>更新时间（ISO 8601 格式）</p>
   */
  UpdateTime?: string
  /**
   * <p>存储挂载选项</p>
   */
  MountOptions?: Array<MountOption>
  /**
   * <p>沙箱实例自定义配置</p>
   */
  CustomConfiguration?: CustomConfigurationDetail
  /**
   * <p>桌面电脑环境类沙箱配置</p>
   */
  ComputerConfiguration?: ComputerConfiguration
  /**
   * <p>网络模式</p><p>枚举值：</p><ul><li>PUBLIC： 公网访问</li><li>SANDBOX： 无网络</li><li>INTERNAL_SERVICE： 腾讯云内部公共服务</li></ul><p>可以覆盖工具级别的网络配置。但如果一个工具本身就不支持 VPC 网络，那么即便在实例设置里选了 VPC 模式，也是无效的</p>
   */
  NetworkMode?: string
  /**
   * <p>沙箱实例元数据</p>
   */
  Metadata?: Array<MetadataVar>
  /**
   * <p>沙箱访问认证模式</p><p>枚举值：</p><ul><li>DEFAULT： 默认，即 TOKEN 认证</li><li>TOKEN： Token认证，即所有端口访问都需携带TOKEN</li><li>NONE： 免认证，即所有端口访问无需携带TOKEN</li><li>PUBLIC： 公开模式，即ENVD管理端口（49983）访问需携带TOKEN，其他端口无需携带TOKEN</li></ul><p>默认值：DEFAULT</p>
   */
  AuthMode?: string
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
 * 端口配置
 */
export interface PortConfiguration {
  /**
   * 端口名
   */
  Name?: string
  /**
   * 端口
   */
  Port?: number
  /**
   * 协议
   */
  Protocol?: string
}

/**
 * 沙箱自定义 dns 配置
 */
export interface DNSConfig {
  /**
   * <p>DNS 服务器地址</p><p>参数格式：需要有效 IP 地址</p><p>默认值：10.0.0.1</p>
   */
  Servers: Array<string>
  /**
   * <p>搜索域(对应 resolv.conf 的 search 指令)</p>
   */
  Searches?: Array<string>
  /**
   * <p>配置项(对应  resolv.conf 选项)</p>
   */
  Options?: Array<string>
}

/**
 * Deployment 活跃容量配置
 */
export interface ScalingConfiguration {
  /**
   * <p>活跃 Sandbox Instance 下限，必须大于等于 0。</p>
   */
  MinInstanceCount?: number
  /**
   * <p>活跃 Sandbox Instance 上限，必须大于等于 1，并且不小于 MinInstanceCount。</p>
   */
  MaxInstanceCount?: number
  /**
   * <p>每个活跃 Sandbox Instance 同时持有的 Deployment 请求或连接 Lease 上限，必须大于等于 1。</p>
   */
  MaxInstanceRequestConcurrency?: number
}

/**
 * 沙箱工具结构体
 */
export interface SandboxTool {
  /**
   * <p>沙箱工具唯一标识符</p>
   */
  ToolId: string
  /**
   * <p>沙箱工具名称，长度 1-50 字符，支持中英文、数字、下划线。同一 AppId 下沙箱工具名称必须唯一</p>
   */
  ToolName?: string
  /**
   * <p>沙箱工具类型，取值：browser（浏览器工具）、code-interpreter（代码解释器工具）、computer（计算机控制工具）、mobile（移动设备工具）</p>
   */
  ToolType?: string
  /**
   * <p>沙箱工具状态，取值：CREATING（创建中）、ACTIVE（可用）、DELETING（删除中）、FAILED（失败）</p>
   */
  Status?: string
  /**
   * <p>沙箱工具描述信息，最大长度 200 字符</p>
   */
  Description?: string
  /**
   * <p>是否常驻沙箱</p>
   */
  Persistent?: boolean
  /**
   * <p>默认超时时间，支持格式：5m、300s、1h 等，不指定则使用系统默认值（5 分钟）。最大 24 小时</p>
   */
  DefaultTimeoutSeconds?: number
  /**
   * <p>网络配置</p>
   */
  NetworkConfiguration?: NetworkConfiguration
  /**
   * <p>标签规格，包含资源标签绑定关系。用于为沙箱工具绑定标签，支持多种资源类型的标签绑定</p>
   */
  Tags?: Array<Tag>
  /**
   * <p>沙箱工具创建时间，格式：ISO8601</p>
   */
  CreateTime?: string
  /**
   * <p>沙箱工具更新时间，格式：ISO8601</p>
   */
  UpdateTime?: string
  /**
   * <p>沙箱工具绑定角色ARN</p>
   */
  RoleArn?: string
  /**
   * <p>沙箱工具中实例存储挂载配置</p>
   */
  StorageMounts?: Array<StorageMount>
  /**
   * <p>沙箱工具自定义配置</p>
   */
  CustomConfiguration?: CustomConfigurationDetail
  /**
   * <p>沙箱工具日志推送相关配置</p>
   */
  LogConfiguration?: LogConfiguration
  /**
   * <p>桌面电脑环境类沙箱配置</p>
   */
  ComputerConfiguration?: ComputerConfiguration
  /**
   * <p>用于说明沙箱工具处于该状态的原因</p>
   */
  StatusReason?: string
}

/**
 * DescribePreCacheImageTask请求参数结构体
 */
export interface DescribePreCacheImageTaskRequest {
  /**
   * <p>镜像地址</p>
   */
  Image: string
  /**
   * <p>镜像 Digest</p>
   */
  ImageDigest: string
  /**
   * <p>镜像仓库类型：<code>enterprise</code>、<code>personal</code>、<code>custom</code> 。</p><p>枚举值：</p><ul><li>enterprise： tcr 企业容器镜像服务</li><li>personal： ccr 个人容器镜像服务</li></ul>
   */
  ImageRegistryType: string
}

/**
 * 沙箱实例存储挂载配置可选项，用于覆盖沙箱工具的存储配置的部分选项，并提供子路径挂载配置。
 */
export interface MountOption {
  /**
   * 指定沙箱工具中的存储配置名称
   */
  Name?: string
  /**
   * 沙箱实例本地挂载路径（可选），默认继承工具中的存储配置
   */
  MountPath?: string
  /**
   * 沙箱实例存储挂载子路径（可选）
   */
  SubPath?: string
  /**
   * 沙箱实例存储挂载读写权限（可选），默认继承工具存储配置
   */
  ReadOnly?: boolean
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
   * <p>创建的沙箱实例完整信息</p>
   */
  Instance?: SandboxInstance
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 沙箱自定义配置
 */
export interface CustomConfiguration {
  /**
   * <p>镜像地址</p>
   */
  Image?: string
  /**
   * <p>镜像仓库类型：<code>enterprise</code>、<code>personal</code>、<code>custom</code></p><p>枚举值：</p><ul><li>enterprise： tcr 企业容器镜像服务</li><li>personal： ccr 个人容器镜像服务</li></ul>
   */
  ImageRegistryType?: string
  /**
   * <p>启动命令</p>
   */
  Command?: Array<string>
  /**
   * <p>启动参数</p>
   */
  Args?: Array<string>
  /**
   * <p>环境变量</p>
   */
  Env?: Array<EnvVar>
  /**
   * <p>端口配置</p>
   */
  Ports?: Array<PortConfiguration>
  /**
   * <p>资源配置</p>
   */
  Resources?: ResourceConfiguration
  /**
   * <p>探针配置</p>
   */
  Probe?: ProbeConfiguration
  /**
   * <p>沙箱 DNS 配置</p>
   */
  DNSConfig?: DNSConfig
}

/**
 * 镜像卷挂载源配置
 */
export interface ImageStorageSource {
  /**
   * <p>镜像地址</p>
   */
  Reference?: string
  /**
   * <p>镜像仓库类型：<code>enterprise</code>、<code>personal</code>。</p>
   */
  ImageRegistryType?: string
  /**
   * <p>镜像内部的路径</p>
   */
  SubPath?: string
  /**
   * <p>镜像 Digest，请求时无需传入</p>
   */
  Digest?: string
}

/**
 * AcquireSandboxInstanceToken请求参数结构体
 */
export interface AcquireSandboxInstanceTokenRequest {
  /**
   * <p>沙箱实例ID，生成的访问Token将仅可用于访问此沙箱实例</p>
   */
  InstanceId: string
}

/**
 * waa自定义配置项
 */
export interface WAAConfiguration {
  /**
   * <p>自定义waa镜像ID</p>
   */
  ImageId?: string
}

/**
 * 日志源配置
 */
export interface LogSources {
  /**
   * <p>需要采集的日志文件路径，必须是 /logs/ 目录下的文件，不支持子目录，最大支持 10 个文件。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Files?: Array<string>
}

/**
 * 挂载存储配置
 */
export interface StorageSource {
  /**
   * <p>对象存储桶配置</p>
   */
  Cos?: CosStorageSource
  /**
   * <p>镜像卷配置</p>
   */
  Image?: ImageStorageSource
  /**
   * <p>文件存储配置</p>
   */
  Cfs?: CfsStorageSource
  /**
   * <p>AgentBucket 存储配置</p>
   */
  AgentBucket?: AgentBucketStorageSource
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
 * CreatePreCacheImageTask返回参数结构体
 */
export interface CreatePreCacheImageTaskResponse {
  /**
   * <p>镜像地址</p>
   */
  Image?: string
  /**
   * <p>镜像 Digest</p>
   */
  ImageDigest?: string
  /**
   * <p>镜像仓库类型：<code>enterprise</code>、<code>personal</code>。</p>
   */
  ImageRegistryType?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeployment请求参数结构体
 */
export interface DescribeDeploymentRequest {
  /**
   * <p>待查询的 Deployment ID。</p>
   */
  DeploymentId: string
}

/**
 * DescribeSandboxInstanceList请求参数结构体
 */
export interface DescribeSandboxInstanceListRequest {
  /**
   * <p>沙箱实例ID列表，指定要查询的实例。如果为空则查询所有实例。最大支持100个ID</p>
   */
  InstanceIds?: Array<string>
  /**
   * <p>沙箱工具ID，指定时查询该沙箱模板下的实例，为空则查询所有沙箱模板的实例</p>
   */
  ToolId?: string
  /**
   * <p>偏移量，默认为0</p>
   */
  Offset?: number
  /**
   * <p>返回数量，默认为20，最大值为100</p>
   */
  Limit?: number
  /**
   * <p>过滤条件</p>
   */
  Filters?: Array<Filter>
  /**
   * <p>每次调用返回的最大结果数。如果查询返回的时候有NextToken返回，您可以使用NextToken值获取更多页结果， 当NextToke返回空或者返回的结果数量小于MaxResults时，表示没有更多数据了。允许的最大页面大小为 100。</p>
   */
  MaxResults?: number
  /**
   * <p>如果NextToken返回非空字符串 ，表示还有更多可用结果。 NextToken是每个页面唯一的分页令牌。使用返回的令牌再次调用以检索下一页。需要保持所有其他参数不变。每个分页令牌在 24 小时后过期。</p>
   */
  NextToken?: string
  /**
   * <p>是否返回符合当前查询条件的沙箱实例总数，仅在使用 MaxResults/NextToken 分页时生效。设置为 true 时，首次请求（NextToken 为空）计算并返回精确的 TotalCount；后续使用 NextToken 翻页时返回首次请求计算的 TotalCount，分页期间该值保持不变。重新发起不带 NextToken 的请求时将重新计算。使用 NextToken 翻页时，本参数及其他查询参数必须与首次请求保持一致。默认值为 false，此时 TotalCount 返回 0。</p>
   */
  NeedTotalCount?: boolean
}

/**
 * 沙箱自定义配置详细信息
 */
export interface CustomConfigurationDetail {
  /**
   * <p>镜像地址</p>
   */
  Image?: string
  /**
   * <p>镜像仓库类型：<code>enterprise</code>、<code>personal</code>、<code>custom</code>。</p><p>枚举值：</p><ul><li>enterprise： TCR 企业容器镜像服务</li><li>personal： CCR 个人容器镜像服务</li></ul>
   */
  ImageRegistryType?: string
  /**
   * <p>镜像 Digest</p>
   */
  ImageDigest?: string
  /**
   * <p>启动命令</p>
   */
  Command?: Array<string>
  /**
   * <p>启动参数</p>
   */
  Args?: Array<string>
  /**
   * <p>环境变量</p>
   */
  Env?: Array<EnvVar>
  /**
   * <p>端口配置</p>
   */
  Ports?: Array<PortConfiguration>
  /**
   * <p>资源配置</p>
   */
  Resources?: ResourceConfiguration
  /**
   * <p>探针配置</p>
   */
  Probe?: ProbeConfiguration
  /**
   * <p>沙箱 DNS 配置</p>
   */
  DNSConfig?: DNSConfig
}

/**
 * CreateDeployment返回参数结构体
 */
export interface CreateDeploymentResponse {
  /**
   * <p>已创建并完成默认值物化的 Deployment。</p>
   */
  Deployment?: Deployment
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDeployment请求参数结构体
 */
export interface ModifyDeploymentRequest {
  /**
   * <p>待修改的 Deployment ID。</p>
   */
  DeploymentId: string
  /**
   * <p>完整替换伸缩配置；提供时必须包含全部三个成员。</p>
   */
  ScalingConfiguration?: ScalingConfiguration
  /**
   * <p>完整替换生命周期配置；提供时必须包含全部两个成员。</p>
   */
  LifecycleConfiguration?: LifecycleConfiguration
  /**
   * <p>标签</p>
   */
  Tags?: Array<Tag>
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
 * UpdateSandboxTool返回参数结构体
 */
export interface UpdateSandboxToolResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 沙箱工具VPC相关配置
 */
export interface VPCConfig {
  /**
   * <p>VPC子网ID列表</p>
   */
  SubnetIds?: Array<string>
  /**
   * <p>安全组ID列表</p>
   */
  SecurityGroupIds?: Array<string>
}

/**
 * 用于记录 Agent Bucket 的 Storage Source
 */
export interface AgentBucketStorageSource {
  /**
   * <p>用于传入 AgentBucket 的 LibraryID</p>
   */
  LibraryId?: string
  /**
   * <p>用于传入 AgentBucket 的 spaceId</p>
   */
  SpaceId?: string
  /**
   * <p>用于传入 AgentBucket 的 AccessDomain</p>
   */
  AccessDomain?: string
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
   * <p>访问Token</p>
   */
  Token?: string
  /**
   * <p>过期时间</p>
   */
  ExpiresAt?: string
  /**
   * <p>除管控面envd端口(49983)以外端口的访问Token</p>
   */
  TrafficToken?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 健康检查探针配置
 */
export interface ProbeConfiguration {
  /**
   * HTTP GET 探测配置
   */
  HttpGet?: HttpGetAction
  /**
   * 健康检查就绪超时
   */
  ReadyTimeoutMs?: number
  /**
   * 健康检查单次探测超时
   */
  ProbeTimeoutMs?: number
  /**
   * 健康检查间隔
   */
  ProbePeriodMs?: number
  /**
   * 健康检查成功阈值
   */
  SuccessThreshold?: number
  /**
   * 健康检查失败阈值
   */
  FailureThreshold?: number
}

/**
 * ModifyDeployment返回参数结构体
 */
export interface ModifyDeploymentResponse {
  /**
   * <p>修改后的完整 Deployment。</p>
   */
  Deployment?: Deployment
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePreCacheImageTask请求参数结构体
 */
export interface CreatePreCacheImageTaskRequest {
  /**
   * <p>镜像地址</p>
   */
  Image: string
  /**
   * <p>镜像仓库类型：<code>enterprise</code>、<code>personal</code>、<code>custom</code></p><p>枚举值：</p><ul><li>enterprise： tcr 企业容器镜像服务</li><li>personal： ccr 个人容器镜像服务</li></ul>
   */
  ImageRegistryType: string
}

/**
 * 沙箱工具日志推送CLS相关配置
 */
export interface CLSConfig {
  /**
   * 沙箱工具日志推送所使用的CLS日志主题ID
   */
  TopicId?: string
}

/**
 * 沙箱工具日志采集相关配置
 */
export interface LogConfiguration {
  /**
   * <p>日志推送CLS的配置。</p>
   */
  CLSConfig?: CLSConfig
  /**
   * <p>日志源配置</p>
   */
  LogSources?: LogSources
}

/**
 * DeleteDeployment请求参数结构体
 */
export interface DeleteDeploymentRequest {
  /**
   * <p>待删除的 Deployment ID。</p>
   */
  DeploymentId: string
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
   * <p>沙箱工具ID</p>
   */
  ToolId: string
  /**
   * <p>沙箱工具描述，最大长度200字符</p>
   */
  Description?: string
  /**
   * <p>网络配置</p>
   */
  NetworkConfiguration?: NetworkConfiguration
  /**
   * <p>标签</p>
   */
  Tags?: Array<Tag>
  /**
   * <p>沙箱工具自定义配置</p>
   */
  CustomConfiguration?: CustomConfiguration
  /**
   * <p>桌面电脑环境类沙箱配置</p>
   */
  ComputerConfiguration?: ComputerConfiguration
}

/**
 * ResumeSandboxInstance返回参数结构体
 */
export interface ResumeSandboxInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Deployment 管理的 Sandbox Instance 的空闲生命周期配置
 */
export interface LifecycleConfiguration {
  /**
   * <p>Sandbox Instance 没有活跃 Deployment 请求或连接后进入 IdleAction 的秒数，必须大于等于 30。</p>
   */
  IdleTimeoutSeconds?: number
  /**
   * <p>空闲处理动作。</p><p>枚举值：</p><ul><li>STOP：停止并释放 Sandbox Instance。</li><li>PAUSE：暂停并保留 Sandbox Instance 状态。</li></ul>
   */
  IdleAction?: string
}

/**
 * 环境变量
 */
export interface EnvVar {
  /**
   * 环境变量名
   */
  Name?: string
  /**
   * 环境变量值
   */
  Value?: string
}

/**
 * DescribeSandboxInstanceList返回参数结构体
 */
export interface DescribeSandboxInstanceListResponse {
  /**
   * <p>沙箱实例列表</p>
   */
  InstanceSet?: Array<SandboxInstance>
  /**
   * <p>符合条件的实例总数</p>
   */
  TotalCount?: number
  /**
   * <p>如果NextToken返回非空字符串 ，表示还有更多可用结果。 NextToken是每个页面唯一的分页令牌。使用返回的令牌再次调用以检索下一页。需要保持所有其他参数不变。每个分页令牌在 24 小时后过期。</p>
   */
  NextToken?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeploymentList请求参数结构体
 */
export interface DescribeDeploymentListRequest {
  /**
   * <p>分页偏移量，默认 0，必须大于等于 0。</p>
   */
  Offset?: number
  /**
   * <p>分页返回数量，默认 20，范围 1..200。</p>
   */
  Limit?: number
  /**
   * <p>查询过滤条件。</p><p>Filter.Name 枚举值：</p><ul><li>deployment-id：按 DeploymentId 精确匹配</li><li>deployment-name：按 DeploymentName 精确匹配</li><li>deployment-name-like：按 DeploymentName 进行普通文本包含匹配，%、_ 等字符没有通配语义</li><li>tool-id：按 ToolId 精确匹配</li><li>status：按 Deployment 状态精确匹配，支持 ACTIVE、DELETING、DELETE_FAILED</li></ul><p>所有匹配均区分大小写。不同 Filter 之间为 AND，同一 Filter 的 Values 之间为 OR。</p>
   */
  Filters?: Array<Filter>
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
 * UpdateSandboxInstance请求参数结构体
 */
export interface UpdateSandboxInstanceRequest {
  /**
   * <p>沙箱实例ID</p>
   */
  InstanceId: string
  /**
   * <p>新的超时时间（从设置时开始重新计算超时），支持格式：5m、300s、1h等。最小30s，最大24h。如果不指定则保持原有超时设置</p>
   */
  Timeout?: string
  /**
   * <p>沙箱实例元数据</p>
   */
  Metadata?: Array<MetadataVar>
}
