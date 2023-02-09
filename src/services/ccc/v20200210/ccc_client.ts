/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  DescribeExtensionRequest,
  StopAutoCalloutTaskRequest,
  HangUpCallRequest,
  CreateSDKLoginTokenResponse,
  ModifyStaffRequest,
  ResetExtensionPasswordRequest,
  DisableCCCPhoneNumberResponse,
  DescribeProtectedTelCdrResponse,
  DescribeAutoCalloutTaskRequest,
  CreateUserSigResponse,
  DescribeIMCdrsResponse,
  CreateCallOutSessionResponse,
  DescribeCarrierPrivilegeNumberApplicantsRequest,
  DisableCCCPhoneNumberRequest,
  ServeParticipant,
  DescribeExtensionsResponse,
  DeleteExtensionRequest,
  DescribeTelCallInfoResponse,
  StaffStatusMetrics,
  DescribeTelCdrRequest,
  DescribeAutoCalloutTasksResponse,
  PackageBuyInfo,
  ModifyExtensionResponse,
  SeatUserInfo,
  CreateStaffResponse,
  DescribeSkillGroupInfoListResponse,
  DescribeNumbersResponse,
  DescribeStaffInfoListResponse,
  UnbindNumberCallOutSkillGroupRequest,
  CreateCarrierPrivilegeNumberApplicantRequest,
  CallInSkillGroupMetrics,
  CreateExtensionResponse,
  CreateUserSigRequest,
  CreateCCCSkillGroupRequest,
  DescribeAutoCalloutTaskResponse,
  CreateCCCSkillGroupResponse,
  DescribeTelSessionRequest,
  DescribeIMCdrsRequest,
  DescribeSkillGroupInfoListRequest,
  CreateCarrierPrivilegeNumberApplicantResponse,
  AutoCalloutTaskCalleeInfo,
  CarrierPrivilegeNumberApplicant,
  ErrStaffItem,
  PSTNSession,
  DescribeStaffInfoListRequest,
  AutoCalloutTaskInfo,
  SkillGroupInfoItem,
  ResetExtensionPasswordResponse,
  ModifyExtensionRequest,
  PSTNSessionInfo,
  Message,
  DescribeNumbersRequest,
  ExtensionInfo,
  BindNumberCallOutSkillGroupRequest,
  IVRKeyPressedElement,
  UnbindNumberCallOutSkillGroupResponse,
  StaffInfo,
  CreateAutoCalloutTaskResponse,
  TelCdrInfo,
  NumberInfo,
  DeleteStaffRequest,
  CallInMetrics,
  DescribeCCCBuyInfoListRequest,
  DescribeTelCallInfoRequest,
  Variable,
  CallInNumberMetrics,
  CreateExtensionRequest,
  CreateAutoCalloutTaskRequest,
  Filter,
  UnbindStaffSkillGroupListRequest,
  BindNumberCallOutSkillGroupResponse,
  CreateCallOutSessionRequest,
  StopAutoCalloutTaskResponse,
  SkillGroupItem,
  MessageBody,
  PhoneNumBuyInfo,
  DescribeCCCBuyInfoListResponse,
  ActiveCarrierPrivilegeNumber,
  UnbindStaffSkillGroupListResponse,
  DeleteExtensionResponse,
  BindStaffSkillGroupListRequest,
  DescribePSTNActiveSessionListRequest,
  DescribeCallInMetricsResponse,
  DescribeActiveCarrierPrivilegeNumberResponse,
  IMSatisfaction,
  DescribeTelCdrResponse,
  DescribeStaffStatusMetricsRequest,
  DeleteStaffResponse,
  StaffStatusExtra,
  CreateStaffRequest,
  DescribeChatMessagesResponse,
  SdkAppIdBuyInfo,
  DescribePSTNActiveSessionListResponse,
  IMCdrInfo,
  DescribeAutoCalloutTasksRequest,
  DescribeChatMessagesRequest,
  DescribeTelSessionResponse,
  ModifyStaffResponse,
  DescribeStaffStatusMetricsResponse,
  DescribeCarrierPrivilegeNumberApplicantsResponse,
  HangUpCallResponse,
  BindStaffSkillGroupListResponse,
  DescribeExtensionsRequest,
  DescribeProtectedTelCdrRequest,
  CreateSDKLoginTokenRequest,
  DescribeActiveCarrierPrivilegeNumberRequest,
  StaffBuyInfo,
  DescribeCallInMetricsRequest,
  DescribeExtensionResponse,
} from "./ccc_models"

/**
 * ccc client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("ccc.tencentcloudapi.com", "2020-02-10", clientConfig)
  }

  /**
   * 解绑号码外呼技能组
   */
  async UnbindNumberCallOutSkillGroup(
    req: UnbindNumberCallOutSkillGroupRequest,
    cb?: (error: string, rep: UnbindNumberCallOutSkillGroupResponse) => void
  ): Promise<UnbindNumberCallOutSkillGroupResponse> {
    return this.request("UnbindNumberCallOutSkillGroup", req, cb)
  }

  /**
   * 查询话机列表信息
   */
  async DescribeExtensions(
    req: DescribeExtensionsRequest,
    cb?: (error: string, rep: DescribeExtensionsResponse) => void
  ): Promise<DescribeExtensionsResponse> {
    return this.request("DescribeExtensions", req, cb)
  }

  /**
   * 创建话机账号
   */
  async CreateExtension(
    req: CreateExtensionRequest,
    cb?: (error: string, rep: CreateExtensionResponse) => void
  ): Promise<CreateExtensionResponse> {
    return this.request("CreateExtension", req, cb)
  }

  /**
   * 获取坐席信息列表
   */
  async DescribeStaffInfoList(
    req: DescribeStaffInfoListRequest,
    cb?: (error: string, rep: DescribeStaffInfoListResponse) => void
  ): Promise<DescribeStaffInfoListResponse> {
    return this.request("DescribeStaffInfoList", req, cb)
  }

  /**
   * 挂断电话
   */
  async HangUpCall(
    req: HangUpCallRequest,
    cb?: (error: string, rep: HangUpCallResponse) => void
  ): Promise<HangUpCallResponse> {
    return this.request("HangUpCall", req, cb)
  }

  /**
   * 获取当前正在通话的会话列表
   */
  async DescribePSTNActiveSessionList(
    req: DescribePSTNActiveSessionListRequest,
    cb?: (error: string, rep: DescribePSTNActiveSessionListResponse) => void
  ): Promise<DescribePSTNActiveSessionListResponse> {
    return this.request("DescribePSTNActiveSessionList", req, cb)
  }

  /**
   * 删除话机账号
   */
  async DeleteExtension(
    req: DeleteExtensionRequest,
    cb?: (error: string, rep: DeleteExtensionResponse) => void
  ): Promise<DeleteExtensionResponse> {
    return this.request("DeleteExtension", req, cb)
  }

  /**
   * 绑定坐席所属技能组
   */
  async BindStaffSkillGroupList(
    req: BindStaffSkillGroupListRequest,
    cb?: (error: string, rep: BindStaffSkillGroupListResponse) => void
  ): Promise<BindStaffSkillGroupListResponse> {
    return this.request("BindStaffSkillGroupList", req, cb)
  }

  /**
   * 绑定号码外呼技能组
   */
  async BindNumberCallOutSkillGroup(
    req: BindNumberCallOutSkillGroupRequest,
    cb?: (error: string, rep: BindNumberCallOutSkillGroupResponse) => void
  ): Promise<BindNumberCallOutSkillGroupResponse> {
    return this.request("BindNumberCallOutSkillGroup", req, cb)
  }

  /**
   * 获取包括全媒体和文本会话两种类型的服务记录。
   */
  async DescribeIMCdrs(
    req: DescribeIMCdrsRequest,
    cb?: (error: string, rep: DescribeIMCdrsResponse) => void
  ): Promise<DescribeIMCdrsResponse> {
    return this.request("DescribeIMCdrs", req, cb)
  }

  /**
   * 删除坐席信息
   */
  async DeleteStaff(
    req: DeleteStaffRequest,
    cb?: (error: string, rep: DeleteStaffResponse) => void
  ): Promise<DeleteStaffResponse> {
    return this.request("DeleteStaff", req, cb)
  }

  /**
   * 修改客服账号
   */
  async ModifyStaff(
    req: ModifyStaffRequest,
    cb?: (error: string, rep: ModifyStaffResponse) => void
  ): Promise<ModifyStaffResponse> {
    return this.request("ModifyStaff", req, cb)
  }

  /**
   * 批量查询自动任务外呼
   */
  async DescribeAutoCalloutTasks(
    req: DescribeAutoCalloutTasksRequest,
    cb?: (error: string, rep: DescribeAutoCalloutTasksResponse) => void
  ): Promise<DescribeAutoCalloutTasksResponse> {
    return this.request("DescribeAutoCalloutTasks", req, cb)
  }

  /**
   * 重置话机注册密码
   */
  async ResetExtensionPassword(
    req: ResetExtensionPasswordRequest,
    cb?: (error: string, rep: ResetExtensionPasswordResponse) => void
  ): Promise<ResetExtensionPasswordResponse> {
    return this.request("ResetExtensionPassword", req, cb)
  }

  /**
   * 按实例获取电话消耗统计
   */
  async DescribeTelCallInfo(
    req: DescribeTelCallInfoRequest,
    cb?: (error: string, rep: DescribeTelCallInfoResponse) => void
  ): Promise<DescribeTelCallInfoResponse> {
    return this.request("DescribeTelCallInfo", req, cb)
  }

  /**
   * 获取话机信息
   */
  async DescribeExtension(
    req: DescribeExtensionRequest,
    cb?: (error: string, rep: DescribeExtensionResponse) => void
  ): Promise<DescribeExtensionResponse> {
    return this.request("DescribeExtension", req, cb)
  }

  /**
   * 查询单状态
   */
  async DescribeCarrierPrivilegeNumberApplicants(
    req: DescribeCarrierPrivilegeNumberApplicantsRequest,
    cb?: (error: string, rep: DescribeCarrierPrivilegeNumberApplicantsResponse) => void
  ): Promise<DescribeCarrierPrivilegeNumberApplicantsResponse> {
    return this.request("DescribeCarrierPrivilegeNumberApplicants", req, cb)
  }

  /**
   * 创建外呼会话，当前仅支持双呼，即先使用平台号码呼出到坐席手机上，坐席接听后，然后再外呼用户，而且由于运营商频率限制，坐席手机号必须先加白名单，避免频控导致外呼失败。
   */
  async CreateCallOutSession(
    req: CreateCallOutSessionRequest,
    cb?: (error: string, rep: CreateCallOutSessionResponse) => void
  ): Promise<CreateCallOutSessionResponse> {
    return this.request("CreateCallOutSession", req, cb)
  }

  /**
   * 获取 PSTN 会话信息
   */
  async DescribeTelSession(
    req: DescribeTelSessionRequest,
    cb?: (error: string, rep: DescribeTelSessionResponse) => void
  ): Promise<DescribeTelSessionResponse> {
    return this.request("DescribeTelSession", req, cb)
  }

  /**
   * 查询自动外呼任务详情
   */
  async DescribeAutoCalloutTask(
    req: DescribeAutoCalloutTaskRequest,
    cb?: (error: string, rep: DescribeAutoCalloutTaskResponse) => void
  ): Promise<DescribeAutoCalloutTaskResponse> {
    return this.request("DescribeAutoCalloutTask", req, cb)
  }

  /**
   * 获取电话服务记录与录音
   */
  async DescribeTelCdr(
    req: DescribeTelCdrRequest,
    cb?: (error: string, rep: DescribeTelCdrResponse) => void
  ): Promise<DescribeTelCdrResponse> {
    return this.request("DescribeTelCdr", req, cb)
  }

  /**
   * 获取技能组信息列表
   */
  async DescribeSkillGroupInfoList(
    req: DescribeSkillGroupInfoListRequest,
    cb?: (error: string, rep: DescribeSkillGroupInfoListResponse) => void
  ): Promise<DescribeSkillGroupInfoListResponse> {
    return this.request("DescribeSkillGroupInfoList", req, cb)
  }

  /**
   * 停止自动外呼任务
   */
  async StopAutoCalloutTask(
    req: StopAutoCalloutTaskRequest,
    cb?: (error: string, rep: StopAutoCalloutTaskResponse) => void
  ): Promise<StopAutoCalloutTaskResponse> {
    return this.request("StopAutoCalloutTask", req, cb)
  }

  /**
   * 用于无限频率地呼叫坐席手机
   */
  async CreateCarrierPrivilegeNumberApplicant(
    req: CreateCarrierPrivilegeNumberApplicantRequest,
    cb?: (error: string, rep: CreateCarrierPrivilegeNumberApplicantResponse) => void
  ): Promise<CreateCarrierPrivilegeNumberApplicantResponse> {
    return this.request("CreateCarrierPrivilegeNumberApplicant", req, cb)
  }

  /**
     * 获取指定服务记录文本聊天内容，需要先使用查询在线客服记录（DescribeIMCdrs） API 获取服务记录 SessionId。

文本聊天记录只保存了 1 年内的，1 年之前会自动清理。
     */
  async DescribeChatMessages(
    req: DescribeChatMessagesRequest,
    cb?: (error: string, rep: DescribeChatMessagesResponse) => void
  ): Promise<DescribeChatMessagesResponse> {
    return this.request("DescribeChatMessages", req, cb)
  }

  /**
   * 获取用户购买信息列表
   */
  async DescribeCCCBuyInfoList(
    req: DescribeCCCBuyInfoListRequest,
    cb?: (error: string, rep: DescribeCCCBuyInfoListResponse) => void
  ): Promise<DescribeCCCBuyInfoListResponse> {
    return this.request("DescribeCCCBuyInfoList", req, cb)
  }

  /**
   * 创建技能组
   */
  async CreateCCCSkillGroup(
    req: CreateCCCSkillGroupRequest,
    cb?: (error: string, rep: CreateCCCSkillGroupResponse) => void
  ): Promise<CreateCCCSkillGroupResponse> {
    return this.request("CreateCCCSkillGroup", req, cb)
  }

  /**
   * 解绑坐席所属技能组
   */
  async UnbindStaffSkillGroupList(
    req: UnbindStaffSkillGroupListRequest,
    cb?: (error: string, rep: UnbindStaffSkillGroupListResponse) => void
  ): Promise<UnbindStaffSkillGroupListResponse> {
    return this.request("UnbindStaffSkillGroupList", req, cb)
  }

  /**
   * 停用号码
   */
  async DisableCCCPhoneNumber(
    req: DisableCCCPhoneNumberRequest,
    cb?: (error: string, rep: DisableCCCPhoneNumberResponse) => void
  ): Promise<DisableCCCPhoneNumberResponse> {
    return this.request("DisableCCCPhoneNumber", req, cb)
  }

  /**
   * 获取坐席实时状态统计指标
   */
  async DescribeStaffStatusMetrics(
    req: DescribeStaffStatusMetricsRequest,
    cb?: (error: string, rep: DescribeStaffStatusMetricsResponse) => void
  ): Promise<DescribeStaffStatusMetricsResponse> {
    return this.request("DescribeStaffStatusMetrics", req, cb)
  }

  /**
   * 创建客服账号。
   */
  async CreateStaff(
    req: CreateStaffRequest,
    cb?: (error: string, rep: CreateStaffResponse) => void
  ): Promise<CreateStaffResponse> {
    return this.request("CreateStaff", req, cb)
  }

  /**
   * 创建自动外呼任务
   */
  async CreateAutoCalloutTask(
    req: CreateAutoCalloutTaskRequest,
    cb?: (error: string, rep: CreateAutoCalloutTaskResponse) => void
  ): Promise<CreateAutoCalloutTaskResponse> {
    return this.request("CreateAutoCalloutTask", req, cb)
  }

  /**
   * 修改话机账号(绑定技能组、绑定坐席账号)
   */
  async ModifyExtension(
    req: ModifyExtensionRequest,
    cb?: (error: string, rep: ModifyExtensionResponse) => void
  ): Promise<ModifyExtensionResponse> {
    return this.request("ModifyExtension", req, cb)
  }

  /**
   * 创建用户数据签名
   */
  async CreateUserSig(
    req: CreateUserSigRequest,
    cb?: (error: string, rep: CreateUserSigResponse) => void
  ): Promise<CreateUserSigResponse> {
    return this.request("CreateUserSig", req, cb)
  }

  /**
   * 获取主被叫受保护的电话服务记录与录音
   */
  async DescribeProtectedTelCdr(
    req: DescribeProtectedTelCdrRequest,
    cb?: (error: string, rep: DescribeProtectedTelCdrResponse) => void
  ): Promise<DescribeProtectedTelCdrResponse> {
    return this.request("DescribeProtectedTelCdr", req, cb)
  }

  /**
   * 获取呼入实时数据统计指标
   */
  async DescribeCallInMetrics(
    req: DescribeCallInMetricsRequest,
    cb?: (error: string, rep: DescribeCallInMetricsResponse) => void
  ): Promise<DescribeCallInMetricsResponse> {
    return this.request("DescribeCallInMetrics", req, cb)
  }

  /**
   * 创建 SDK 登录 Token。
   */
  async CreateSDKLoginToken(
    req: CreateSDKLoginTokenRequest,
    cb?: (error: string, rep: CreateSDKLoginTokenResponse) => void
  ): Promise<CreateSDKLoginTokenResponse> {
    return this.request("CreateSDKLoginToken", req, cb)
  }

  /**
   * 查询生效运营商白名单规则
   */
  async DescribeActiveCarrierPrivilegeNumber(
    req: DescribeActiveCarrierPrivilegeNumberRequest,
    cb?: (error: string, rep: DescribeActiveCarrierPrivilegeNumberResponse) => void
  ): Promise<DescribeActiveCarrierPrivilegeNumberResponse> {
    return this.request("DescribeActiveCarrierPrivilegeNumber", req, cb)
  }

  /**
   * 查询号码列表
   */
  async DescribeNumbers(
    req: DescribeNumbersRequest,
    cb?: (error: string, rep: DescribeNumbersResponse) => void
  ): Promise<DescribeNumbersResponse> {
    return this.request("DescribeNumbers", req, cb)
  }
}
