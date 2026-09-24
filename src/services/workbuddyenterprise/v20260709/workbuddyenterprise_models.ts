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
 * DeleteAgent请求参数结构体
 */
export interface DeleteAgentRequest {
  /**
   * <p>Agent 业务 ID</p>
   */
  AgentId: string
}

/**
 * DescribeAgent返回参数结构体
 */
export interface DescribeAgentResponse {
  /**
   * Agent 业务 ID
   */
  AgentId?: string
  /**
   * Agent 名称
   */
  AgentName?: string
  /**
   * Agent 描述
   */
  Description?: string
  /**
   * 头像 URL
   */
  AvatarUrl?: string
  /**
   * 是否调试 Agent
   */
  IsDebug?: boolean
  /**
   * 创建时间（RFC3339）
   */
  CreatedTime?: string
  /**
   * 更新时间（RFC3339）
   */
  ModifiedTime?: string
  /**
   * 当前活跃 session 数（ACTIVE/CREATING/MIGRATING，未软删）；仅 DescribeAgent 读路径填充，写路径回显不下发
   */
  ActiveSessionCount?: number
  /**
   * 流量路由配置（VersionId 恒为字符串，防 JS 精度丢失）
   */
  RoutingSet?: Array<RoutingItem>
  /**
   * A2A 对外互通配置与注册态（只读回显；原四个平铺字段收进结构）
   */
  A2AConfig?: A2AConfig
  /**
   * 绑定的 OneID 企业账号 ID。允许为空：未绑定的存量与新建 Agent 该字段缺省，绑定后回显绑定值
   */
  AccountId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeExpertList请求参数结构体
 */
export interface DescribeExpertListRequest {
  /**
   * <p>专家来源，必填：BUILTIN（内置）/ CUSTOM（自建）</p>
   */
  Source: string
  /**
   * <p>标准过滤条件：ExpertId（精确，多值 OR，携带即按 ID 批量查询，忽略分页）/ Keyword（模糊）</p>
   */
  Filters?: Array<Filter>
  /**
   * <p>偏移量，从 0 开始，默认 0（按 ID 批量查询时忽略）</p>
   */
  Offset?: number
  /**
   * <p>每页数量，默认 20，最大 200（按 ID 批量查询时忽略）</p>
   */
  Limit?: number
}

/**
 * A2A skill 列表项（出参用，来自 A2A card 解析结果）
 */
export interface A2ASkillItem {
  /**
   * A2A skill ID（加 A2A 前缀与内部 SkillId 概念区分）
注意：此字段可能返回 null，表示取不到有效值。
   */
  A2ASkillId?: string
  /**
   * skill 名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * skill 描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
}

/**
 * DescribeMessageEventList返回参数结构体
 */
export interface DescribeMessageEventListResponse {
  /**
   * <p>消息事件列表</p>
   */
  MessageEventSet?: Array<MessageEvent>
  /**
   * <p>符合过滤条件的事件总数</p>
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Agent 列表项（原 AgentSummary；Agent 级纯字段，不再内嵌版本信息）
 */
export interface AgentItem {
  /**
   * Agent 业务 ID（全局唯一，数字字符串形态）
注意：此字段可能返回 null，表示取不到有效值。
   */
  AgentId?: string
  /**
   * Agent 名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  AgentName?: string
  /**
   * Agent 描述；未填写时缺省
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 头像 URL；未设置时缺省
注意：此字段可能返回 null，表示取不到有效值。
   */
  AvatarUrl?: string
  /**
   * 创建时间，RFC3339 UTC 格式（如 2026-06-01T09:00:00Z）
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedTime?: string
  /**
   * 更新时间，RFC3339 UTC 格式（如 2026-09-10T15:20:00Z）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifiedTime?: string
  /**
   * Agent 级 A2A 开关。false 恒输出（未开启不等于字段缺失）；A2AEndpoint / A2AStatus 由本接口在 A2A 开启时直接下发
注意：此字段可能返回 null，表示取不到有效值。
   */
  A2AEnabled?: boolean
  /**
   * 历史会话总数（t_managed_agent_sessions 未软删计数，含全部状态）。注意与 DescribeAgent.ActiveSessionCount（活跃会话数）口径不同
注意：此字段可能返回 null，表示取不到有效值。
   */
  SessionCount?: number
  /**
   * 最新版本的模型标识，取 latest_version_id 指向版本的 model；Agent 尚无版本时缺省
注意：此字段可能返回 null，表示取不到有效值。
   */
  Model?: string
  /**
   * 最新版本 ID（latest_version_id 转字符串，19 位雪花数字形态）；Agent 尚无版本时缺省
注意：此字段可能返回 null，表示取不到有效值。
   */
  LatestVersionId?: string
  /**
   * 最新版本名（可能为 default / test-N / prod-N 任意类型）；Agent 尚无版本时缺省
注意：此字段可能返回 null，表示取不到有效值。
   */
  LatestVersionName?: string
  /**
   * 对外 A2A card 发现地址（Agent Card JSON 地址），仅 A2AEnabled=true 的行下发；未注册 / registry 读失败时缺省
注意：此字段可能返回 null，表示取不到有效值。
   */
  A2AEndpoint?: string
  /**
   * A2A 注册态：DRAFT / REGISTERED / DISABLED / NONE / UNKNOWN，仅 A2AEnabled=true 的行下发，与 DescribeAgent.A2AConfig.A2AStatus 同枚举；用于「开关已开但地址尚未生成」的空态文案
注意：此字段可能返回 null，表示取不到有效值。
   */
  A2AStatus?: string
  /**
   * 公网链接访问开关。false 恒输出（未开启不等于字段缺失）
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicApiEnabled?: boolean
  /**
   * 公网访问地址，仅 PublicApiEnabled=true 的行下发。固定拼法 https://{AgentId}-{region}.{endpoint_suffix}，与 DescribeAgentPublicAccess.Url 同规则；endpoint_suffix 未配置时为空
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublicApiUrl?: string
  /**
   * 创建人 UIN（建号时落库的 sub_account_uin；主账号自建时为主账号 uin）。注意语义为「实际操作建号的账号」
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatorUin?: string
  /**
   * 绑定的 OneID 企业账号 ID（数字字符串形态，如 1438693592234206274）；空=未绑定（缺省）。与 DescribeAgent.AgentInfo.AccountId 同源同语义；创建时可选传入，之后不可变
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccountId?: string
}

/**
 * UnbindExternalAgent请求参数结构体
 */
export interface UnbindExternalAgentRequest {
  /**
   * TMA managed agent 业务 ID
   */
  AgentId: string
  /**
   * 已绑定的外部 A2A agent ID
   */
  A2AAgentId?: string
  /**
   * 绑定记录 ID（自增 ID 字符串）
   */
  BindingId?: string
  /**
   * 版本 ID
   */
  VersionId?: string
}

/**
 * DescribeBuiltinModelList返回参数结构体
 */
export interface DescribeBuiltinModelListResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 内置模型列表（分页后）
   */
  BuiltinModelSet?: Array<BuiltinModel>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAgentVersion返回参数结构体
 */
export interface CreateAgentVersionResponse {
  /**
   * <p>版本 ID</p>
   */
  VersionId?: string
  /**
   * <p>Agent 业务 ID</p>
   */
  AgentId?: string
  /**
   * <p>版本名称</p>
   */
  VersionName?: string
  /**
   * <p>版本类型：DEFAULT / TEST / PROD</p>
   */
  VersionType?: string
  /**
   * <p>版本变更说明</p>
   */
  Description?: string
  /**
   * <p>模型标识</p>
   */
  Model?: string
  /**
   * <p>Manifest v2.0 精简 manifest 原文（JSON 字符串）</p>
   */
  Manifest?: string
  /**
   * <p>版本状态：DRAFT / ENABLED / DISABLED</p>
   */
  Status?: string
  /**
   * <p>创建时间</p>
   */
  CreatedTime?: string
  /**
   * <p>更新时间</p>
   */
  ModifiedTime?: string
  /**
   * <p>绑定的沙箱模板 ID；未绑定时为空，创建会话沙箱使用系统默认模板。</p>
   */
  SandboxTemplateId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeExternalAgent返回参数结构体
 */
export interface DescribeExternalAgentResponse {
  /**
   * <p>外部 A2A agent ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  A2AAgentId?: string
  /**
   * <p>外部 Agent 名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * <p>描述</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * <p>外部 A2A Server URL</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Endpoint?: string
  /**
   * <p>绑定记录 ID（已绑定时返回）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BindingId?: string
  /**
   * <p>是否已绑定到当前 Agent</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Bound?: boolean
  /**
   * <p>头像地址（取自 provider card 的 iconUrl；为空时前端回落首字母头像）</p>
   */
  IconUrl?: string
  /**
   * <p>外部 agent card 声明的版本号</p>
   */
  A2AVersion?: string
  /**
   * <p>A2A card skills 集合</p>
   */
  A2ASkillSet?: Array<A2ASkillItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAgentVersion返回参数结构体
 */
export interface ModifyAgentVersionResponse {
  /**
   * 版本 ID
   */
  VersionId?: string
  /**
   * Agent 业务 ID
   */
  AgentId?: string
  /**
   * 版本名称
   */
  VersionName?: string
  /**
   * 版本类型：DEFAULT / TEST / PROD
   */
  VersionType?: string
  /**
   * 版本变更说明
   */
  Description?: string
  /**
   * 模型标识
   */
  Model?: string
  /**
   * Manifest v2.0 精简 manifest 原文（JSON 字符串）
   */
  Manifest?: string
  /**
   * 版本状态：DRAFT / ENABLED / DISABLED
   */
  Status?: string
  /**
   * 创建时间
   */
  CreatedTime?: string
  /**
   * 更新时间
   */
  ModifiedTime?: string
  /**
   * 绑定的沙箱模板 ID；未绑定时为空，创建会话沙箱使用系统默认模板。
   */
  SandboxTemplateId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BindExternalAgent返回参数结构体
 */
export interface BindExternalAgentResponse {
  /**
   * 操作结果状态（大写枚举）：BOUND=已绑定 / UNBOUND=已解绑
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 绑定记录 ID（自增 ID 字符串）
注意：此字段可能返回 null，表示取不到有效值。
   */
  BindingId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 全局技能计数
 */
export interface SkillCounts {
  /**
   * 内置技能数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Builtin?: number
  /**
   * 自建技能数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Custom?: number
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
}

/**
 * BindExternalAgent请求参数结构体
 */
export interface BindExternalAgentRequest {
  /**
   * TMA managed agent 业务 ID（CloudAgentID）
   */
  AgentId: string
  /**
   * 已注册的外部 A2A agent ID
   */
  A2AAgentId: string
  /**
   * 版本 ID
   */
  VersionId?: string
}

/**
 * ModifyAgentRouting请求参数结构体
 */
export interface ModifyAgentRoutingRequest {
  /**
   * Agent 业务 ID
   */
  AgentId: string
  /**
   * 路由配置，覆盖式写入（与出参 AgentInfo.RoutingSet 命名对齐）
   */
  RoutingSet: Array<RoutingItem>
}

/**
 * DescribeExternalAgentList返回参数结构体
 */
export interface DescribeExternalAgentListResponse {
  /**
   * 符合条件的外部 Agent 总数
   */
  TotalCount?: number
  /**
   * 外部 Agent 集合（可见卡片全集 ∪ URL 直连型存量 binding 的合并视图）
   */
  ExternalAgentSet?: Array<ExternalAgentInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeExternalAgent请求参数结构体
 */
export interface DescribeExternalAgentRequest {
  /**
   * <p>TMA managed agent 业务 ID（CloudAgentID）</p>
   */
  AgentId: string
  /**
   * <p>已绑定的外部 A2A agent ID</p>
   */
  A2AAgentId: string
}

/**
 * CreateAgentVersion请求参数结构体
 */
export interface CreateAgentVersionRequest {
  /**
   * <p>Agent 业务 ID</p>
   */
  AgentId: string
  /**
   * <p>Manifest v2.0 精简 manifest 原文（JSON 对象序列化后的字符串）</p>
   */
  Manifest: string
  /**
   * <p>模型标识</p>
   */
  Model?: string
  /**
   * <p>版本变更说明</p>
   */
  Description?: string
  /**
   * <p>沙箱模板 ID。可选；传入时模板须属于当前企业且可用（未删除、状态正常），绑定到新建的 test/prod 版本。</p>
   */
  SandboxTemplateId?: string
}

/**
 * ModifyAgentVersion请求参数结构体
 */
export interface ModifyAgentVersionRequest {
  /**
   * Agent 业务 ID
   */
  AgentId: string
  /**
   * 版本 ID（仅 default 或 test 版本可原地更新，prod 拒绝）
   */
  VersionId: string
  /**
   * Manifest v2.0 原文（可选；Manifest / Model / Description / SandboxTemplateId / ConnectorSet 五个可选字段至少提供一个）
   */
  Manifest?: string
  /**
   * 模型标识（可选）
   */
  Model?: string
  /**
   * 版本变更说明（可选）
   */
  Description?: string
  /**
   * 沙箱模板 ID。可选，patch 语义：null 不修改；空串解绑（恢复系统默认模板）；非空时模板须属于当前企业且可用（未删除、状态正常）。
   */
  SandboxTemplateId?: string
  /**
   * 该版本最终绑定的连接器集合（全量覆盖语义）：缺省 = 本次不改动连接器绑定；空数组 = 解绑全部连接器；非空 = 物化为 manifest v2 mcp_servers 网关条目，manifest 中不在本集合内的连接器条目会被移除（解绑在服务端闭环，无需调用方改写 Manifest）
   */
  ConnectorSet?: Array<ConnectorRefInput>
}

/**
 * CreateAgent请求参数结构体
 */
export interface CreateAgentRequest {
  /**
   * Agent 名称
   */
  AgentName: string
  /**
   * Agent 描述
   */
  Description?: string
  /**
   * 头像 URL
   */
  AvatarUrl?: string
  /**
   * 模型标识
   */
  Model?: string
  /**
   * Manifest v2.0 原文（JSON 字符串），作为 default 版本初始内容。ConnectorSet 非空时 Manifest 不可为空，否则返回 InvalidParameter
   */
  Manifest?: string
  /**
   * 该 Agent 最终绑定的连接器集合（全量覆盖语义）：缺省 = 不绑定连接器；非空 = 物化为 manifest v2 mcp_servers 网关条目。ConnectorSet 非空时 Manifest 不可为空，否则返回 InvalidParameter
   */
  ConnectorSet?: Array<ConnectorRefInput>
  /**
   * 绑定的 OneID 企业账号 ID。非空时必须是当前主账号已在企业授权表（t_managed_agent_enterprise_authorization）中授权的租户，否则返回 UnauthorizedOperation.AccountNotAuthorized。绑定后不可修改。TrimSpace 后长度 1~64 字符
   */
  AccountId?: string
}

/**
 * DescribeAgentVersion请求参数结构体
 */
export interface DescribeAgentVersionRequest {
  /**
   * <p>Agent 业务 ID</p>
   */
  AgentId: string
  /**
   * <p>版本 ID</p>
   */
  VersionId: string
}

/**
 * ModifyAgent请求参数结构体
 */
export interface ModifyAgentRequest {
  /**
   * Agent 业务 ID
   */
  AgentId: string
  /**
   * Agent 名称（可选，仅传递需要更新的字段）
   */
  AgentName?: string
  /**
   * Agent 描述（可选）
   */
  Description?: string
  /**
   * 头像 URL（可选）
   */
  AvatarUrl?: string
}

/**
 * DescribeAgentSession返回参数结构体
 */
export interface DescribeAgentSessionResponse {
  /**
   * 会话 ID
   */
  SessionId?: string
  /**
   * 会话名称（AgentOS 侧生成的 AI 标题 / 用户改名）；缺失时为空，调用方可兜底展示 SessionId 后缀
   */
  SessionName?: string
  /**
   * Agent 业务 ID
   */
  AgentId?: string
  /**
   * Agent 名称
   */
  AgentName?: string
  /**
   * 版本 ID
   */
  VersionId?: string
  /**
   * 会话使用的版本名称（与 VersionId 区分：此为版本名，非 ID）
   */
  VersionName?: string
  /**
   * 版本状态：DRAFT / ENABLED / DISABLED
   */
  Status?: string
  /**
   * 创建者 Uin
   */
  Creator?: string
  /**
   * 连接器来源：ENTERPRISE_AGENT / ASSISTANT
   */
  Source?: string
  /**
   * 可用的聊天接入点列表（详情独有）
   */
  EndpointSet?: Array<ChatEndpoint>
  /**
   * 创建时间
   */
  CreatedTime?: string
  /**
   * 更新时间（RFC3339）
   */
  ModifiedTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAgent返回参数结构体
 */
export interface CreateAgentResponse {
  /**
   * Agent 业务 ID
   */
  AgentId?: string
  /**
   * Agent 名称
   */
  AgentName?: string
  /**
   * Agent 描述
   */
  Description?: string
  /**
   * 头像 URL
   */
  AvatarUrl?: string
  /**
   * 是否调试 Agent
   */
  IsDebug?: boolean
  /**
   * 创建时间（RFC3339）
   */
  CreatedTime?: string
  /**
   * 更新时间（RFC3339）
   */
  ModifiedTime?: string
  /**
   * 流量路由配置（VersionId 恒为字符串，防 JS 精度丢失）
   */
  RoutingSet?: Array<RoutingItem>
  /**
   * A2A 对外互通配置与注册态（只读回显；原四个平铺字段收进结构）
   */
  A2AConfig?: A2AConfig
  /**
   * 绑定的 OneID 企业账号 ID。允许为空：未绑定的存量与新建 Agent 该字段缺省，绑定后回显绑定值
   */
  AccountId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAgentSession请求参数结构体
 */
export interface DescribeAgentSessionRequest {
  /**
   * 会话 ID
   */
  SessionId: string
}

/**
 * UnbindExternalAgent返回参数结构体
 */
export interface UnbindExternalAgentResponse {
  /**
   * 操作结果状态（大写枚举）：BOUND=已绑定 / UNBOUND=已解绑
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSkillList请求参数结构体
 */
export interface DescribeSkillListRequest {
  /**
   * 技能来源，必填：BUILTIN（内置）/ CUSTOM（自建）/ AUTHORIZED（企业授权）。数据通路判别，非筛选条件
   */
  Source: string
  /**
   * 标准过滤条件：SkillId（精确，多值 OR ≤100，携带即按 ID 批量查询）/ Keyword（模糊）/ PublishStatus（DRAFT/PUBLISHED/ALL）/ Status（ENABLED/DISABLED/ALL）
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认 0（按 ID 批量查询时忽略）
   */
  Offset?: number
  /**
   * 每页数量，默认 20，最大 200（按 ID 批量查询时忽略）
   */
  Limit?: number
  /**
   * 授权方企业账号标识；仅 Source=AUTHORIZED 时生效。不传则由后端用 Uin 推导全部已授权范围；未携带 SkillId 的分页查询必传
   */
  AccountId?: string
  /**
   * 仅 Source=AUTHORIZED 时生效。Agent 绑定了 OneID 租户时，授权集合强制收窄到绑定租户；显式传入的 AccountId 必须等于绑定值，否则请求被拒绝。绑定 Agent 的分页查询可不传 AccountId（服务端按绑定值收窄到单一授权方）
   */
  AgentId?: string
}

/**
 * DescribeAgentSessionList返回参数结构体
 */
export interface DescribeAgentSessionListResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 会话列表
   */
  SessionSet?: Array<SessionItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeConnectorList返回参数结构体
 */
export interface DescribeConnectorListResponse {
  /**
   * 符合条件的连接器总数
   */
  TotalCount?: number
  /**
   * 连接器列表（分页后）；连接器挂调用方主账号 UIN 下，不挂 OneID 企业
   */
  ConnectorSet?: Array<ConnectorInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAgentList返回参数结构体
 */
export interface DescribeAgentListResponse {
  /**
   * 符合条件的 Agent 总数
   */
  TotalCount?: number
  /**
   * Agent 列表（分页后）；元素含 A2A / 公网 API 访问开关与地址、创建人 UIN、绑定的企业账号 ID
   */
  AgentSet?: Array<AgentItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAgentSession返回参数结构体
 */
export interface CreateAgentSessionResponse {
  /**
   * <p>会话 ID</p>
   */
  SessionId?: string
  /**
   * <p>可用的聊天接入点列表（当前仅含一个 PUBLIC 公网接入点；空数组 = 无可用接入点）</p>
   */
  EndpointSet?: Array<ChatEndpoint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 消息内容
 */
export interface MessageEventMessage {
  /**
   * <p>文本内容</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Content?: string
  /**
   * <p>Token用量</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TokenUsage?: TokenUsage
}

/**
 * 外部 Agent 列表/详情项
 */
export interface ExternalAgentInfo {
  /**
   * 外部 A2A agent ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  A2AAgentId?: string
  /**
   * 外部 Agent 名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 外部 A2A Server URL
注意：此字段可能返回 null，表示取不到有效值。
   */
  Endpoint?: string
  /**
   * 绑定记录 ID（已绑定时返回）
注意：此字段可能返回 null，表示取不到有效值。
   */
  BindingId?: string
  /**
   * 是否已绑定到当前 Agent
注意：此字段可能返回 null，表示取不到有效值。
   */
  Bound?: boolean
  /**
   * 头像地址（取自 provider card 的 iconUrl）
注意：此字段可能返回 null，表示取不到有效值。
   */
  IconUrl?: string
  /**
   * 外部 agent card 声明的版本号
注意：此字段可能返回 null，表示取不到有效值。
   */
  A2AVersion?: string
  /**
   * A2A card skills 集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  A2ASkillSet?: Array<A2ASkillItem>
}

/**
 * A2A skill 录入项（注册外部 Agent 时传入）
 */
export interface A2ASkillInput {
  /**
   * <p>A2A skill ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  A2ASkillId?: string
  /**
   * <p>skill 名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * <p>skill 描述</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * <p>标签</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<string>
  /**
   * <p>示例</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Examples?: Array<string>
}

/**
 * 聊天接入点。EndpointType 现在就引入枚举：当前仅返回一个 PUBLIC 元素，将来新增私网端点与 VPC 属性为纯增量。
 */
export interface ChatEndpoint {
  /**
   * 接入点类型：PUBLIC（公网）/ PRIVATE（私网，预留）
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndpointType?: string
  /**
   * 接入点地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Url?: string
}

/**
 * DescribeBuiltinModelList请求参数结构体
 */
export interface DescribeBuiltinModelListRequest {
  /**
   * 偏移量，从 0 开始
   */
  Offset?: number
  /**
   * 返回数量，缺省为 20，最大 100
   */
  Limit?: number
  /**
   * 过滤条件数组，多个 Filter 之间为 AND 关系，同一 Filter 内多个 Values 为 OR 关系
   */
  Filters?: Array<Filter>
  /**
   * OneID 企业账号 ID，可选。传入时拉取该账号对应企业的模型（要求当前主账号 UIN 已授权该账号），不传时使用服务配置的企业 ID
   */
  AccountId?: string
}

/**
 * 连接器详情（主表 + 最新版本展开）。
 */
export interface ConnectorInfo {
  /**
   * 连接器 ID
   */
  ConnectorId?: string
  /**
   * 连接器短标识（终身不变，跨版本稳定）
   */
  ConnectorSlug?: string
  /**
   * 版本级连接器密钥
   */
  ConnectorKey?: string
  /**
   * 连接器名称
   */
  Name?: string
  /**
   * 连接器描述
   */
  Description?: string
  /**
   * 头像 URL
   */
  AvatarUrl?: string
  /**
   * 连接器来源：ENTERPRISE_AGENT / ASSISTANT
   */
  Source?: string
  /**
   * 归属企业 ID
   */
  EnterpriseId?: string
  /**
   * 连接器类型：MCP_SERVER / A2A / API_SERVICE
   */
  Type?: string
  /**
   * 上游服务地址
   */
  ServiceUrl?: string
  /**
   * 授权方式列表：NONE / ONEID / OAUTH2_IDP
   */
  AuthModes?: Array<string>
  /**
   * 最新版本号
   */
  LatestVersionNo?: number
  /**
   * 连接器状态：ACTIVE / DISABLED
   */
  Status?: string
  /**
   * 创建人 ID
   */
  CreatorId?: string
  /**
   * 创建时间（ISO8601，UTC）
   */
  CreatedTime?: string
  /**
   * 最后修改时间（ISO8601，UTC）
   */
  ModifiedTime?: string
}

/**
 * CreateAgentSession请求参数结构体
 */
export interface CreateAgentSessionRequest {
  /**
   * <p>Agent 业务 ID</p>
   */
  AgentId: string
  /**
   * <p>指定版本 ID（可选）。非空且合法时固定使用该版本，跳过 routing_config 权重挑选；指定版本需归属同一 Agent 且未被废弃</p>
   */
  VersionId?: string
}

/**
 * CreateAgentVersionFromSource请求参数结构体
 */
export interface CreateAgentVersionFromSourceRequest {
  /**
   * <p>Agent 业务 ID</p>
   */
  AgentId: string
  /**
   * <p>源版本 ID，同 Agent 下未 DISABLED 的任意版本</p>
   */
  SourceVersionId: string
  /**
   * <p>可选，覆盖源版本的 Model</p>
   */
  Model?: string
  /**
   * <p>可选，覆盖源版本的 Description</p>
   */
  Description?: string
  /**
   * <p>可选，完整 v2.0 manifest JSON 字符串；传入则整体覆盖源版本 manifest</p>
   */
  Manifest?: string
  /**
   * <p>沙箱模板 ID。可选，patch 语义：null 沿用源版本绑定的模板；空串解绑（恢复系统默认模板）；非空时模板须属于当前企业且可用（未删除、状态正常）。</p>
   */
  SandboxTemplateId?: string
}

/**
 * DescribeAgentVersionList返回参数结构体
 */
export interface DescribeAgentVersionListResponse {
  /**
   * <p>总数</p>
   */
  TotalCount?: number
  /**
   * <p>版本列表（原 VersionSet；集合名带实体前缀以区分 Skill 版本接口的同名字段）</p>
   */
  AgentVersionSet?: Array<AgentVersionItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeExternalAgentList请求参数结构体
 */
export interface DescribeExternalAgentListRequest {
  /**
   * Agent 业务 ID（必填：绑定状态的归属主体）
   */
  AgentId: string
  /**
   * 标准过滤条件，支持的 Name：Bound（BOUND=仅已绑定 / UNBOUND=仅未绑定 / ALL=全部，缺省 ALL）
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，从 0 开始，默认 0
   */
  Offset?: number
  /**
   * 每页数量，默认 20，最大 200
   */
  Limit?: number
  /**
   * 外部 Agent 列表查询关键字
   */
  DescribeExternalAgentList?: string
  /**
   * 版本 ID
   */
  VersionId?: string
}

/**
 * ModifyAgentA2AConfig请求参数结构体
 */
export interface ModifyAgentA2AConfigRequest {
  /**
   * <p>Agent 业务 ID</p>
   */
  AgentId: string
  /**
   * <p>Agent 级唯一 A2A 开关</p>
   */
  A2AEnabled?: boolean
  /**
   * <p>A2A 技能集合（原 A2ASkills）</p>
   */
  A2ASkillSet?: Array<A2ASkillInput>
}

/**
 * Agent 版本列表项（原 AgentVersionSummary / AgentVersionBrief 合并，字段取并集）
 */
export interface AgentVersionItem {
  /**
   * 版本 ID（雪花算法生成的数字字符串，唯一标识）
注意：此字段可能返回 null，表示取不到有效值。
   */
  VersionId?: string
  /**
   * 版本名称，形如 default / test-N / prod-N（N 为同类型版本的自增序号）
注意：此字段可能返回 null，表示取不到有效值。
   */
  VersionName?: string
  /**
   * 版本类型（服务端按 VersionName 派生）：DEFAULT（默认版本，可编辑）/ TEST（测试版本，可编辑）/ PROD（生产版本，内容冻结）
注意：此字段可能返回 null，表示取不到有效值。
   */
  VersionType?: string
  /**
   * 版本绑定的模型标识；未设置时缺省
注意：此字段可能返回 null，表示取不到有效值。
   */
  Model?: string
  /**
   * 版本运行时使用的沙箱模板业务 ID；空字符串表示使用默认沙箱
注意：此字段可能返回 null，表示取不到有效值。
   */
  SandboxTemplateId?: string
  /**
   * 版本状态：DRAFT（草稿）/ ENABLED（已启用）/ DISABLED（已停用）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * <p>该版本累计承接的会话总数（历史累计值，只增不减）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SessionCount?: number
  /**
   * 创建时间，RFC3339 UTC 格式（如 2026-08-01T10:00:00Z）
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedTime?: string
  /**
   * 更新时间，RFC3339 UTC 格式（如 2026-08-10T15:30:00Z）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifiedTime?: string
}

/**
 * DescribeUserAccessToken返回参数结构体
 */
export interface DescribeUserAccessTokenResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAgentVersionFromSource返回参数结构体
 */
export interface CreateAgentVersionFromSourceResponse {
  /**
   * <p>版本 ID</p>
   */
  VersionId?: string
  /**
   * <p>Agent 业务 ID</p>
   */
  AgentId?: string
  /**
   * <p>版本名称</p>
   */
  VersionName?: string
  /**
   * <p>版本类型：DEFAULT / TEST / PROD</p>
   */
  VersionType?: string
  /**
   * <p>版本变更说明</p>
   */
  Description?: string
  /**
   * <p>模型标识</p>
   */
  Model?: string
  /**
   * <p>Manifest v2.0 精简 manifest 原文（JSON 字符串）</p>
   */
  Manifest?: string
  /**
   * <p>版本状态：DRAFT / ENABLED / DISABLED</p>
   */
  Status?: string
  /**
   * <p>创建时间</p>
   */
  CreatedTime?: string
  /**
   * <p>更新时间</p>
   */
  ModifiedTime?: string
  /**
   * <p>绑定的沙箱模板 ID；未绑定时为空，创建会话沙箱使用系统默认模板。</p>
   */
  SandboxTemplateId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAgentList请求参数结构体
 */
export interface DescribeAgentListRequest {
  /**
   * 偏移量，从 0 开始
   */
  Offset?: number
  /**
   * 返回数量，缺省为 20，最大 100
   */
  Limit?: number
  /**
   * 过滤条件数组，多个 Filter 之间为 AND 关系，同一 Filter 内多个 Values 为 OR 关系
   */
  Filters?: Array<Filter>
  /**
   * 排序字段
   */
  SortBy?: string
  /**
   * 排序方向：ASC / DESC
   */
  SortDirection?: string
}

/**
 * ModifyAgentA2AConfig返回参数结构体
 */
export interface ModifyAgentA2AConfigResponse {
  /**
   * <p>Agent 业务 ID</p>
   */
  AgentId?: string
  /**
   * <p>Agent 名称</p>
   */
  AgentName?: string
  /**
   * <p>Agent 描述</p>
   */
  Description?: string
  /**
   * <p>头像 URL</p>
   */
  AvatarUrl?: string
  /**
   * <p>是否调试 Agent</p>
   */
  IsDebug?: boolean
  /**
   * <p>创建时间（RFC3339）</p>
   */
  CreatedTime?: string
  /**
   * <p>更新时间（RFC3339）</p>
   */
  ModifiedTime?: string
  /**
   * <p>流量路由配置（VersionId 恒为字符串，防 JS 精度丢失）</p>
   */
  RoutingSet?: Array<RoutingItem>
  /**
   * <p>A2A 对外互通配置与注册态（只读回显；原四个平铺字段收进结构）</p>
   */
  A2AConfig?: A2AConfig
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Token用量
 */
export interface TokenUsage {
  /**
   * <p>输入Token</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  InputTokens?: number
  /**
   * <p>输出Token</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputTokens?: number
  /**
   * <p>总Token</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalTokens?: number
  /**
   * <p>统计口径</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Scope?: string
}

/**
 * 云 API 通用过滤结构。多个 Filter 之间为 AND 关系；同一 Filter 内多个 Values 为 OR 关系。
 */
export interface Filter {
  /**
   * 过滤属性名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 过滤值列表（同一 Filter 内多个值为 OR 关系）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Values?: Array<string>
  /**
   * 是否精确匹配，默认 false（模糊匹配）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExactMatch?: boolean
}

/**
 * 内置模型信息
 */
export interface BuiltinModel {
  /**
   * 模型唯一标识
   */
  ModelId?: string
  /**
   * 模型名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 供应商，如 TENCENT、OPENAI、ANTHROPIC、DEEPSEEK 等
注意：此字段可能返回 null，表示取不到有效值。
   */
  Vendor?: string
  /**
   * 最大输出 Token 数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxOutputTokens?: number
  /**
   * 最大输入 Token 数
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxInputTokens?: number
  /**
   * 是否支持函数调用（Tool Call）
注意：此字段可能返回 null，表示取不到有效值。
   */
  SupportsToolCall?: boolean
  /**
   * 是否支持视觉（图片输入）
注意：此字段可能返回 null，表示取不到有效值。
   */
  SupportsImages?: boolean
  /**
   * 模型中文描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  DescriptionZh?: string
  /**
   * 模型英文描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  DescriptionEn?: string
  /**
   * 模型标签列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<string>
  /**
   * 支持的客户端列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Clients?: Array<string>
  /**
   * 服务接入地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceEndpoint?: string
  /**
   * 状态：ENABLED（已启用）/ DISABLED（已停用）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 本企业内绑定该模型的 Agent 数（过滤软删除 Agent/版本与调试 Agent）
注意：此字段可能返回 null，表示取不到有效值。
   */
  AgentCount?: number
}

/**
 * DescribeConnectorList请求参数结构体
 */
export interface DescribeConnectorListRequest {
  /**
   * 过滤条件数组，多个 Filter 之间为 AND 关系。支持 Name：Name（名称模糊匹配）/ Status（ACTIVE / DISABLED）/ Source（ENTERPRISE_AGENT / ASSISTANT）
   */
  Filters?: Array<Filter>
  /**
   * 已废弃：服务端不再读取，请使用 Offset/Limit。字段保留仅为过渡兼容，后续下线
   */
  PageNumber?: number
  /**
   * 已废弃：服务端不再读取，请使用 Offset/Limit。字段保留仅为过渡兼容，后续下线
   */
  PageSize?: number
  /**
   * 偏移量，0 基准，缺省 0（标准 CAPI 分页参数）
   */
  Offset?: number
  /**
   * 每页数量，取值 1-100，缺省 20（标准 CAPI 分页参数）
   */
  Limit?: number
}

/**
 * 路由项
 */
export interface RoutingItem {
  /**
   * 版本 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  VersionId?: string
  /**
   * 权重，(0, 1] 之间的浮点百分比
注意：此字段可能返回 null，表示取不到有效值。
   */
  Weight?: number
}

/**
 * 工具调用
 */
export interface MessageEventToolCall {
  /**
   * <p>调用ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ToolCallId?: string
  /**
   * <p>工具名</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ToolName?: string
  /**
   * <p>状态 PENDING/IN_PROGRESS/SUCCEEDED/FAILED</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * <p>工具调用Input（已递归脱敏，JSON 字符串）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Input?: string
  /**
   * <p>工具调用Output（已递归脱敏，JSON 字符串）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: string
  /**
   * <p>结束时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndedAt?: string
  /**
   * <p>耗时毫秒</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DurationMs?: number
  /**
   * <p>调用开始时间（RFC3339 格式）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartedAt?: string
}

/**
 * DescribeAgentVersion返回参数结构体
 */
export interface DescribeAgentVersionResponse {
  /**
   * <p>版本 ID</p>
   */
  VersionId?: string
  /**
   * <p>Agent 业务 ID</p>
   */
  AgentId?: string
  /**
   * <p>版本名称</p>
   */
  VersionName?: string
  /**
   * <p>版本类型：DEFAULT / TEST / PROD</p>
   */
  VersionType?: string
  /**
   * <p>版本变更说明</p>
   */
  Description?: string
  /**
   * <p>模型标识</p>
   */
  Model?: string
  /**
   * <p>Manifest v2.0 精简 manifest 原文（JSON 字符串）</p>
   */
  Manifest?: string
  /**
   * <p>版本状态：DRAFT / ENABLED / DISABLED</p>
   */
  Status?: string
  /**
   * <p>创建时间</p>
   */
  CreatedTime?: string
  /**
   * <p>更新时间</p>
   */
  ModifiedTime?: string
  /**
   * <p>绑定的沙箱模板 ID；未绑定时为空，创建会话沙箱使用系统默认模板。</p>
   */
  SandboxTemplateId?: string
  /**
   * <p>该版本累计承接的会话总数（历史累计值，只增不减）</p>
   */
  SessionCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUserAccessToken请求参数结构体
 */
export type DescribeUserAccessTokenRequest = null

/**
 * Agent 的 A2A 对外互通配置与注册态
 */
export interface A2AConfig {
  /**
   * Agent 级唯一 A2A 开关
注意：此字段可能返回 null，表示取不到有效值。
   */
  A2AEnabled?: boolean
  /**
   * 对外 A2A handle（已注册时；仅 DescribeAgent / ModifyAgentA2AConfig 填充）
注意：此字段可能返回 null，表示取不到有效值。
   */
  A2APublicRef?: string
  /**
   * 对外 A2A card 发现地址（已注册时）
注意：此字段可能返回 null，表示取不到有效值。
   */
  A2AEndpoint?: string
  /**
   * 注册状态：DRAFT / REGISTERED / DISABLED / NONE / UNKNOWN
注意：此字段可能返回 null，表示取不到有效值。
   */
  A2AStatus?: string
}

/**
 * DescribeAgentSessionList请求参数结构体
 */
export interface DescribeAgentSessionListRequest {
  /**
   * 偏移量，从 0 开始
   */
  Offset?: number
  /**
   * 返回数量，缺省为 20，最大 100
   */
  Limit?: number
  /**
   * 排序字段
   */
  SortBy?: string
  /**
   * 排序方向：ASC / DESC
   */
  SortDirection?: string
  /**
   * 过滤条件数组，多个 Filter 之间为 AND 关系，同一 Filter 内多个 Values 为 OR 关系
   */
  Filters?: Array<Filter>
}

/**
 * 消息事件
 */
export interface MessageEvent {
  /**
   * <p>序号</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Sequence?: number
  /**
   * <p>类型 USER/TOOL/ASSISTANT</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventType?: string
  /**
   * <p>发生时间 ISO8601</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  OccurredAt?: string
  /**
   * <p>消息内容</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: MessageEventMessage
  /**
   * <p>工具调用</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ToolCall?: MessageEventToolCall
}

/**
 * MigrateAgentSession返回参数结构体
 */
export interface MigrateAgentSessionResponse {
  /**
   * <p>会话 ID（回显原值，保持不变）</p>
   */
  SessionId?: string
  /**
   * <p>迁移后的会话状态</p>
   */
  Status?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAgent返回参数结构体
 */
export interface DeleteAgentResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 专家列表/详情项
 */
export interface ExpertItem {
  /**
   * <p>专家来源：builtin、custom</p>
   */
  Source?: string
  /**
   * <p>展示名</p>
   */
  DisplayName?: string
  /**
   * <p>描述</p>
   */
  Description?: string
  /**
   * <p>图标 URL</p>
   */
  Icon?: string
  /**
   * <p>是否启用</p>
   */
  Enabled?: boolean
  /**
   * <p>下载 URL</p>
   */
  DownloadUrl?: string
  /**
   * <p>更新时间</p>
   */
  ModifiedTime?: string
  /**
   * <p>启停状态：enabled、disabled</p>
   */
  Status?: string
  /**
   * <p>专家标识</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpertId?: string
  /**
   * <p>当前生效版本号</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpertVersion?: string
}

/**
 * DescribeAgent请求参数结构体
 */
export interface DescribeAgentRequest {
  /**
   * <p>Agent 业务 ID</p>
   */
  AgentId: string
}

/**
 * DescribeSkillList返回参数结构体
 */
export interface DescribeSkillListResponse {
  /**
   * 符合条件的技能总数（按 ID 批量时为实际命中数）
   */
  TotalCount?: number
  /**
   * 技能列表（仅列表展示所需字段，完整信息走 DescribeSkill）
   */
  SkillSet?: Array<SkillItem>
  /**
   * 全局计数（不受 keyword 影响）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Counts?: SkillCounts
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMessageEventList请求参数结构体
 */
export interface DescribeMessageEventListRequest {
  /**
   * <p>Session ID</p>
   */
  SessionId: string
  /**
   * <p>Agent ID</p>
   */
  AgentId: string
  /**
   * <p>偏移量</p>
   */
  Offset?: number
  /**
   * <p>返回数量，默认 100，最大 100</p>
   */
  Limit?: number
  /**
   * <p>过滤条件数组，多个 Filter 之间为 AND 关系，同一 Filter 内多个 Values 为 OR 关系</p>
   */
  Filters?: Array<Filter>
}

/**
 * 会话列表项
 */
export interface SessionItem {
  /**
   * 会话 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  SessionId?: string
  /**
   * 会话名称（AI 生成标题或用户改名；缺失时为空）
注意：此字段可能返回 null，表示取不到有效值。
   */
  SessionName?: string
  /**
   * Agent 业务 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  AgentId?: string
  /**
   * Agent 名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  AgentName?: string
  /**
   * 会话使用的版本名称（与 VersionId 区分：此为版本名，非 ID；原 AgentVersion）
注意：此字段可能返回 null，表示取不到有效值。
   */
  VersionName?: string
  /**
   * 会话使用的 Agent 版本 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  VersionId?: string
  /**
   * 会话状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 创建者 Uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  Creator?: string
  /**
   * 会话来源
注意：此字段可能返回 null，表示取不到有效值。
   */
  Source?: string
  /**
   * 创建时间（RFC3339）
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedTime?: string
  /**
   * 更新时间（RFC3339）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModifiedTime?: string
}

/**
 * DescribeExpertList返回参数结构体
 */
export interface DescribeExpertListResponse {
  /**
   * <p>符合条件的专家总数（按 ID 批量时为实际命中数）</p>
   */
  TotalCount?: number
  /**
   * <p>专家列表</p>
   */
  ExpertSet?: Array<ExpertItem>
  /**
   * <p>全局计数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Counts?: ExpertCounts
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 全局专家计数
 */
export interface ExpertCounts {
  /**
   * <p>内置专家数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Builtin?: number
  /**
   * <p>自建专家数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Custom?: number
  /**
   * <p>总数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
}

/**
 * DescribeAgentVersionList请求参数结构体
 */
export interface DescribeAgentVersionListRequest {
  /**
   * <p>Agent 业务 ID</p>
   */
  AgentId: string
  /**
   * <p>偏移量，从 0 开始</p>
   */
  Offset?: number
  /**
   * <p>返回数量，缺省为 20，最大 100</p>
   */
  Limit?: number
  /**
   * <p>过滤条件数组，多个 Filter 之间为 AND 关系，同一 Filter 内多个 Values 为 OR 关系</p>
   */
  Filters?: Array<Filter>
}

/**
 * Skill 列表项（按列表页展示裁剪：名称/版本/描述/状态/操作五列 + 编排所需的 Source 与 DownloadUrl）
 */
export interface SkillItem {
  /**
   * 技能来源：BUILTIN（内置）/ CUSTOM（自建）/ AUTHORIZED（企业授权）
   */
  Source?: string
  /**
   * <p>slug（仅 custom 返回）</p>
   */
  Name?: string
  /**
   * <p>展示名</p>
   */
  DisplayName?: string
  /**
   * <p>描述</p>
   */
  Description?: string
  /**
   * <p>图标 URL</p>
   */
  Icon?: string
  /**
   * <p>是否启用</p>
   */
  Enabled?: boolean
  /**
   * <p>下载 URL</p>
   */
  DownloadUrl?: string
  /**
   * <p>技能标识</p>
   */
  SkillId?: string
  /**
   * <p>当前生效版本号</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SkillVersion?: string
  /**
   * 创建时间，RFC3339 UTC 格式（如 2026-08-11T09:23:10Z）
   */
  CreateTime?: string
  /**
   * 更新时间，RFC3339 UTC 格式（如 2026-09-15T06:51:26Z）
   */
  UpdateTime?: string
}

/**
 * 连接器引用入参
 */
export interface ConnectorRefInput {
  /**
   * connector 主表 ID（雪花 ID 数字串）
   */
  ConnectorId?: string
}

/**
 * ModifyAgentRouting返回参数结构体
 */
export interface ModifyAgentRoutingResponse {
  /**
   * Agent 业务 ID
   */
  AgentId?: string
  /**
   * Agent 名称
   */
  AgentName?: string
  /**
   * Agent 描述
   */
  Description?: string
  /**
   * 头像 URL
   */
  AvatarUrl?: string
  /**
   * 是否调试 Agent
   */
  IsDebug?: boolean
  /**
   * 创建时间（RFC3339）
   */
  CreatedTime?: string
  /**
   * 更新时间（RFC3339）
   */
  ModifiedTime?: string
  /**
   * 流量路由配置（VersionId 恒为字符串，防 JS 精度丢失）
   */
  RoutingSet?: Array<RoutingItem>
  /**
   * A2A 对外互通配置与注册态（只读回显；原四个平铺字段收进结构）
   */
  A2AConfig?: A2AConfig
  /**
   * 绑定的 OneID 企业账号 ID。允许为空：未绑定的存量与新建 Agent 该字段缺省，绑定后回显绑定值
   */
  AccountId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAgent返回参数结构体
 */
export interface ModifyAgentResponse {
  /**
   * Agent 业务 ID
   */
  AgentId?: string
  /**
   * Agent 名称
   */
  AgentName?: string
  /**
   * Agent 描述
   */
  Description?: string
  /**
   * 头像 URL
   */
  AvatarUrl?: string
  /**
   * 是否调试 Agent
   */
  IsDebug?: boolean
  /**
   * 创建时间（RFC3339）
   */
  CreatedTime?: string
  /**
   * 更新时间（RFC3339）
   */
  ModifiedTime?: string
  /**
   * 流量路由配置（VersionId 恒为字符串，防 JS 精度丢失）
   */
  RoutingSet?: Array<RoutingItem>
  /**
   * A2A 对外互通配置与注册态（只读回显；原四个平铺字段收进结构）
   */
  A2AConfig?: A2AConfig
  /**
   * 绑定的 OneID 企业账号 ID。允许为空：未绑定的存量与新建 Agent 该字段缺省，绑定后回显绑定值
   */
  AccountId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MigrateAgentSession请求参数结构体
 */
export interface MigrateAgentSessionRequest {
  /**
   * <p>待迁移的会话 ID（必填）</p>
   */
  SessionId: string
  /**
   * <p>目标 Agent 业务 ID（必填），必须与 Session 原 Agent 相同</p>
   */
  AgentId: string
  /**
   * <p>目标版本 ID（必填，字符串形式）。需归属同一 Agent 且未被废弃</p>
   */
  TargetVersionId: string
}
