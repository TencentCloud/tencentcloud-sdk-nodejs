/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  DeleteAgentRequest,
  DescribeAgentResponse,
  DescribeExpertListRequest,
  A2ASkillItem,
  DescribeMessageEventListResponse,
  AgentItem,
  UnbindExternalAgentRequest,
  DescribeBuiltinModelListResponse,
  CreateAgentVersionResponse,
  DescribeExternalAgentResponse,
  ModifyAgentVersionResponse,
  BindExternalAgentResponse,
  SkillCounts,
  BindExternalAgentRequest,
  ModifyAgentRoutingRequest,
  DescribeExternalAgentListResponse,
  DescribeExternalAgentRequest,
  CreateAgentVersionRequest,
  ModifyAgentVersionRequest,
  CreateAgentRequest,
  DescribeAgentVersionRequest,
  ModifyAgentRequest,
  DescribeAgentSessionResponse,
  CreateAgentResponse,
  DescribeAgentSessionRequest,
  UnbindExternalAgentResponse,
  DescribeSkillListRequest,
  DescribeAgentSessionListResponse,
  DescribeConnectorListResponse,
  DescribeAgentListResponse,
  CreateAgentSessionResponse,
  MessageEventMessage,
  ExternalAgentInfo,
  A2ASkillInput,
  ChatEndpoint,
  DescribeBuiltinModelListRequest,
  ConnectorInfo,
  CreateAgentSessionRequest,
  CreateAgentVersionFromSourceRequest,
  DescribeAgentVersionListResponse,
  DescribeExternalAgentListRequest,
  ModifyAgentA2AConfigRequest,
  AgentVersionItem,
  DescribeUserAccessTokenResponse,
  CreateAgentVersionFromSourceResponse,
  DescribeAgentListRequest,
  ModifyAgentA2AConfigResponse,
  TokenUsage,
  Filter,
  BuiltinModel,
  DescribeConnectorListRequest,
  RoutingItem,
  MessageEventToolCall,
  DescribeAgentVersionResponse,
  DescribeUserAccessTokenRequest,
  A2AConfig,
  DescribeAgentSessionListRequest,
  MessageEvent,
  MigrateAgentSessionResponse,
  DeleteAgentResponse,
  ExpertItem,
  DescribeAgentRequest,
  DescribeSkillListResponse,
  DescribeMessageEventListRequest,
  SessionItem,
  DescribeExpertListResponse,
  ExpertCounts,
  DescribeAgentVersionListRequest,
  SkillItem,
  ConnectorRefInput,
  ModifyAgentRoutingResponse,
  ModifyAgentResponse,
  MigrateAgentSessionRequest,
} from "./workbuddyenterprise_models"

/**
 * workbuddyenterprise client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("workbuddyenterprise.tencentcloudapi.com", "2026-07-09", clientConfig)
  }

  /**
   * 分页查询 Expert 列表，支持关键词、分类、发布状态过滤。
   */
  async DescribeExpertList(
    req: DescribeExpertListRequest,
    cb?: (error: string, rep: DescribeExpertListResponse) => void
  ): Promise<DescribeExpertListResponse> {
    return this.request("DescribeExpertList", req, cb)
  }

  /**
   * 解除外部 agent 与 managed agent 的绑定
   */
  async UnbindExternalAgent(
    req: UnbindExternalAgentRequest,
    cb?: (error: string, rep: UnbindExternalAgentResponse) => void
  ): Promise<UnbindExternalAgentResponse> {
    return this.request("UnbindExternalAgent", req, cb)
  }

  /**
   * 查询单个 Agent 会话详情：返回会话基础信息（会话名称 / Agent / 版本 / 状态 / 来源 / 发起人）与可用的聊天接入点列表（EndpointSet）。数据面鉴权走 DescribeUserAccessToken 的用户级访问令牌。
   */
  async DescribeAgentSession(
    req: DescribeAgentSessionRequest,
    cb?: (error: string, rep: DescribeAgentSessionResponse) => void
  ): Promise<DescribeAgentSessionResponse> {
    return this.request("DescribeAgentSession", req, cb)
  }

  /**
   * 修改 Agent 的 A2A 配置。A2AEnabled 是 Agent 级唯一开关，与具体版本和流量分发策略无关。
   */
  async ModifyAgentA2AConfig(
    req: ModifyAgentA2AConfigRequest,
    cb?: (error: string, rep: ModifyAgentA2AConfigResponse) => void
  ): Promise<ModifyAgentA2AConfigResponse> {
    return this.request("ModifyAgentA2AConfig", req, cb)
  }

  /**
   * 查询单个版本的详细信息，包括 Manifest、Model、状态等。
   */
  async DescribeAgentVersion(
    req: DescribeAgentVersionRequest,
    cb?: (error: string, rep: DescribeAgentVersionResponse) => void
  ): Promise<DescribeAgentVersionResponse> {
    return this.request("DescribeAgentVersion", req, cb)
  }

  /**
   * 列某 managed agent 绑定的外部 agent 列表
   */
  async DescribeExternalAgentList(
    req: DescribeExternalAgentListRequest,
    cb?: (error: string, rep: DescribeExternalAgentListResponse) => void
  ): Promise<DescribeExternalAgentListResponse> {
    return this.request("DescribeExternalAgentList", req, cb)
  }

  /**
   * 查询指定 Agent 下的版本列表，支持分页和版本类型过滤。
   */
  async DescribeAgentVersionList(
    req: DescribeAgentVersionListRequest,
    cb?: (error: string, rep: DescribeAgentVersionListResponse) => void
  ): Promise<DescribeAgentVersionListResponse> {
    return this.request("DescribeAgentVersionList", req, cb)
  }

  /**
   * 将指定会话迁移到目标版本。SessionID / RuntimeID 保持不变，通过 AgentOS UpdateSession 在原沙箱上更新 manifest 到新版本；AgentId 必须与原 Session 一致（禁止跨 Agent 迁移）；ChatToken 复用旧值不轮转。
   */
  async MigrateAgentSession(
    req: MigrateAgentSessionRequest,
    cb?: (error: string, rep: MigrateAgentSessionResponse) => void
  ): Promise<MigrateAgentSessionResponse> {
    return this.request("MigrateAgentSession", req, cb)
  }

  /**
   * 覆盖式写入 Agent 路由配置（版本权重）。所有 VersionId 必须属于同一 Agent 且未弃用；允许空数组（下线 Agent 对外流量）；非空时权重总和须等于 1。
   */
  async ModifyAgentRouting(
    req: ModifyAgentRoutingRequest,
    cb?: (error: string, rep: ModifyAgentRoutingResponse) => void
  ): Promise<ModifyAgentRoutingResponse> {
    return this.request("ModifyAgentRouting", req, cb)
  }

  /**
   * 查询指定企业下的连接器列表（PageNumber/PageSize 分页，支持名称模糊与状态、来源过滤）。
   */
  async DescribeConnectorList(
    req: DescribeConnectorListRequest,
    cb?: (error: string, rep: DescribeConnectorListResponse) => void
  ): Promise<DescribeConnectorListResponse> {
    return this.request("DescribeConnectorList", req, cb)
  }

  /**
   * 分页查询 Skill 列表，支持关键词、分类、发布状态过滤。
   */
  async DescribeSkillList(
    req: DescribeSkillListRequest,
    cb?: (error: string, rep: DescribeSkillListResponse) => void
  ): Promise<DescribeSkillListResponse> {
    return this.request("DescribeSkillList", req, cb)
  }

  /**
   * 分页查询企业下所有会话（跨 Agent）：支持按 SessionId / Status / AgentId / UserId 过滤，按创建 / 更新时间排序，返回会话摘要列表。
   */
  async DescribeAgentSessionList(
    req: DescribeAgentSessionListRequest,
    cb?: (error: string, rep: DescribeAgentSessionListResponse) => void
  ): Promise<DescribeAgentSessionListResponse> {
    return this.request("DescribeAgentSessionList", req, cb)
  }

  /**
   * 查询当前企业的内置模型列表，支持分页与过滤。内置模型由平台预置，企业可按需启用/停用。过滤字段支持：ModelId（模型ID，模糊）、Name（模型名称，模糊）、Vendor（供应商，模糊）、Status（状态，精确：enabled/disabled）。
   */
  async DescribeBuiltinModelList(
    req: DescribeBuiltinModelListRequest,
    cb?: (error: string, rep: DescribeBuiltinModelListResponse) => void
  ): Promise<DescribeBuiltinModelListResponse> {
    return this.request("DescribeBuiltinModelList", req, cb)
  }

  /**
   * 修改 Agent 基础信息（名称、描述、头像）。AgentName / Description / AvatarUrl 均为可选，仅传递需要更新的字段。
   */
  async ModifyAgent(
    req: ModifyAgentRequest,
    cb?: (error: string, rep: ModifyAgentResponse) => void
  ): Promise<ModifyAgentResponse> {
    return this.request("ModifyAgent", req, cb)
  }

  /**
   * 创建一个新的 Managed Agent，同时自动生成 default 版本。配置采用 Manifest v2.0。
   */
  async CreateAgent(
    req: CreateAgentRequest,
    cb?: (error: string, rep: CreateAgentResponse) => void
  ): Promise<CreateAgentResponse> {
    return this.request("CreateAgent", req, cb)
  }

  /**
   * 基于源版本创建新版本：Manifest / Model / Description 传入即整体覆盖，未传则沿用源版本。
   */
  async CreateAgentVersionFromSource(
    req: CreateAgentVersionFromSourceRequest,
    cb?: (error: string, rep: CreateAgentVersionFromSourceResponse) => void
  ): Promise<CreateAgentVersionFromSourceResponse> {
    return this.request("CreateAgentVersionFromSource", req, cb)
  }

  /**
   * 原地更新 default 或 test 版本的 Manifest / Model / Description / SandboxTemplateId / ConnectorSet（prod 版本冻结不可修改），五个可选字段至少提供一个。ConnectorSet 为全量覆盖语义：缺省表示不改动连接器绑定；空数组表示解绑全部连接器。
   */
  async ModifyAgentVersion(
    req: ModifyAgentVersionRequest,
    cb?: (error: string, rep: ModifyAgentVersionResponse) => void
  ): Promise<ModifyAgentVersionResponse> {
    return this.request("ModifyAgentVersion", req, cb)
  }

  /**
   * 把外部 agent 绑定到某 managed agent
   */
  async BindExternalAgent(
    req: BindExternalAgentRequest,
    cb?: (error: string, rep: BindExternalAgentResponse) => void
  ): Promise<BindExternalAgentResponse> {
    return this.request("BindExternalAgent", req, cb)
  }

  /**
   * 查询某 managed agent 绑定的单个外部 agent 详情
   */
  async DescribeExternalAgent(
    req: DescribeExternalAgentRequest,
    cb?: (error: string, rep: DescribeExternalAgentResponse) => void
  ): Promise<DescribeExternalAgentResponse> {
    return this.request("DescribeExternalAgent", req, cb)
  }

  /**
   * 为指定 Agent 创建新的会话，返回会话 ID 和聊天凭证。
   */
  async CreateAgentSession(
    req: CreateAgentSessionRequest,
    cb?: (error: string, rep: CreateAgentSessionResponse) => void
  ): Promise<CreateAgentSessionResponse> {
    return this.request("CreateAgentSession", req, cb)
  }

  /**
   * 按 Session 分页查询消息事件
   */
  async DescribeMessageEventList(
    req: DescribeMessageEventListRequest,
    cb?: (error: string, rep: DescribeMessageEventListResponse) => void
  ): Promise<DescribeMessageEventListResponse> {
    return this.request("DescribeMessageEventList", req, cb)
  }

  /**
   * 查询单个 Agent 的详细信息，包括基础配置和路由配置。
   */
  async DescribeAgent(
    req: DescribeAgentRequest,
    cb?: (error: string, rep: DescribeAgentResponse) => void
  ): Promise<DescribeAgentResponse> {
    return this.request("DescribeAgent", req, cb)
  }

  /**
   * 根据调用者的 Uin / SubAccountUin 调用 OneID 换取用户级 access_token。换取到的 token 是 OneID 用户身份的短期凭证，供调用方以用户身份访问 OneID 开平接口。默认开启 JIT，SubAccountUin 不存在时自动在目标企业下创建影子用户。
   */
  async DescribeUserAccessToken(
    req?: DescribeUserAccessTokenRequest,
    cb?: (error: string, rep: DescribeUserAccessTokenResponse) => void
  ): Promise<DescribeUserAccessTokenResponse> {
    return this.request("DescribeUserAccessToken", req, cb)
  }

  /**
   * 删除指定的 Agent 及其所有版本。删除后不可恢复。
   */
  async DeleteAgent(
    req: DeleteAgentRequest,
    cb?: (error: string, rep: DeleteAgentResponse) => void
  ): Promise<DeleteAgentResponse> {
    return this.request("DeleteAgent", req, cb)
  }

  /**
   * 完全新建版本：外部准备完整 Manifest 后直接传入，不引用任何已有版本。
   */
  async CreateAgentVersion(
    req: CreateAgentVersionRequest,
    cb?: (error: string, rep: CreateAgentVersionResponse) => void
  ): Promise<CreateAgentVersionResponse> {
    return this.request("CreateAgentVersion", req, cb)
  }

  /**
   * 查询当前企业的 Agent 列表，支持分页、过滤和排序。
   */
  async DescribeAgentList(
    req: DescribeAgentListRequest,
    cb?: (error: string, rep: DescribeAgentListResponse) => void
  ): Promise<DescribeAgentListResponse> {
    return this.request("DescribeAgentList", req, cb)
  }
}
