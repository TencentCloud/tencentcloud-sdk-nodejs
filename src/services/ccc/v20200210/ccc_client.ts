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
  DescribeExtensionRequest,
  CreateCCCSkillGroupResponse,
  ModifyStaffPasswordRequest,
  StopAutoCalloutTaskRequest,
  CreateIVRSessionRequest,
  CompanyApplyInfo,
  CreateSDKLoginTokenResponse,
  ModifyStaffRequest,
  DescribeAIAgentInfoListResponse,
  DescribeIvrAudioListResponse,
  DescribePredictiveDialingCampaignsElement,
  SetStaffStatusResponse,
  ServerPushText,
  ResetExtensionPasswordRequest,
  DisableCCCPhoneNumberResponse,
  Filter,
  DescribeProtectedTelCdrResponse,
  DescribeAutoCalloutTaskRequest,
  CalleeAttribute,
  CreateUserSigResponse,
  CreateAICallRequest,
  StaffInfo,
  CreateAdminURLResponse,
  PausePredictiveDialingCampaignRequest,
  ForwardingConfig,
  DescribeAILatencyRequest,
  CreateCallOutSessionResponse,
  AIAgentInfo,
  DescribeCarrierPrivilegeNumberApplicantsRequest,
  DisableCCCPhoneNumberRequest,
  ModifyStaffPasswordResponse,
  ControlAIConversationResponse,
  TransferToManualRequest,
  CreatePredictiveDialingCampaignRequest,
  RestoreMemberOnlineResponse,
  AbortAgentCruiseDialingCampaignResponse,
  DescribeChatMessagesResponse,
  DescribeSessionDetailResponse,
  ServeParticipant,
  PlaySoundCallResponse,
  AICallExtractResultElement,
  DescribeTelCallInfoResponse,
  DescribeExtensionsResponse,
  StaffStatusMetrics,
  DeleteExtensionRequest,
  DescribePredictiveDialingCampaignRequest,
  DescribePredictiveDialingCampaignResponse,
  CreateAIAgentCallResponse,
  DescribeAILatencyResponse,
  DescribeAutoCalloutTasksResponse,
  PackageBuyInfo,
  AICallExtractConfigElement,
  AICallExtractResultInfo,
  IMCdrInfo,
  CreateAgentCruiseDialingCampaignRequest,
  DescribeAICallExtractResultRequest,
  CreateStaffResponse,
  DescribePredictiveDialingCampaignsRequest,
  DescribeSkillGroupInfoListResponse,
  DescribeNumbersResponse,
  ZHToneWordsInfo,
  DeletePredictiveDialingCampaignRequest,
  UploadIvrAudioRequest,
  DescribeStaffInfoListResponse,
  AILatencyStatisticsInfo,
  UnbindNumberCallOutSkillGroupRequest,
  CreateCarrierPrivilegeNumberApplicantRequest,
  ResumePredictiveDialingCampaignResponse,
  FlashSMSRecord,
  CallInSkillGroupMetrics,
  CreateExtensionResponse,
  CreateUserSigRequest,
  CreateCCCSkillGroupRequest,
  DescribePredictiveDialingSessionsResponse,
  DeleteCCCSkillGroupRequest,
  PauseAutoCalloutTaskRequest,
  CreateCompanyApplyRequest,
  BindNumberCallInInterfaceRequest,
  DescribeTelSessionRequest,
  DescribeIMCdrsRequest,
  SessionEvent,
  DescribeSkillGroupInfoListRequest,
  CreateCarrierPrivilegeNumberApplicantResponse,
  Interface,
  AutoCalloutTaskCalleeInfo,
  SeatUserInfo,
  UpdateCCCSkillGroupResponse,
  AsrData,
  CarrierPrivilegeNumberApplicant,
  ErrStaffItem,
  PausePredictiveDialingCampaignResponse,
  ResumePredictiveDialingCampaignRequest,
  PSTNSession,
  UpdatePredictiveDialingCampaignRequest,
  DescribeStaffInfoListRequest,
  AutoCalloutTaskInfo,
  DescribeIvrAudioListRequest,
  PauseAutoCalloutTaskResponse,
  BindNumberCallInInterfaceResponse,
  ForceMemberOfflineRequest,
  SkillGroupInfoItem,
  UploadIvrAudioResponse,
  CreateAIAgentCallRequest,
  UpdateCCCSkillGroupRequest,
  RestoreMemberOnlineRequest,
  TimeRange,
  DescribeStaffStatusHistoryResponse,
  DescribeTelCdrRequest,
  ModifyStaffResponse,
  ModifyExtensionRequest,
  CreatePredictiveDialingCampaignResponse,
  DescribeAIAnalysisResultResponse,
  UpdatePredictiveDialingCampaignResponse,
  ModifyOwnNumberApplyRequest,
  PSTNSessionInfo,
  Message,
  DescribeFlashSMSListResponse,
  AbortPredictiveDialingCampaignResponse,
  DescribeIMCdrsResponse,
  DescribeNumbersRequest,
  ExtensionInfo,
  BindNumberCallOutSkillGroupRequest,
  DeletePredictiveDialingCampaignResponse,
  IVRKeyPressedElement,
  DescribeFlashSMSListRequest,
  UnbindNumberCallOutSkillGroupResponse,
  DescribeAgentCruiseDialingCampaignRequest,
  DescribePSTNActiveSessionListRequest,
  CreateAutoCalloutTaskResponse,
  DescribeAICallExtractResultResponse,
  DeleteCCCSkillGroupResponse,
  UploadIvrAudioFailedInfo,
  DescribeSessionDetailRequest,
  ModifyExtensionResponse,
  DescribeCompanyListResponse,
  NumberInfo,
  DeleteStaffRequest,
  CallInMetrics,
  DescribeCCCBuyInfoListRequest,
  OwnNumberApplyDetailItem,
  DescribeIMCdrListResponse,
  DescribePredictiveDialingCampaignsResponse,
  DescribeTelCallInfoRequest,
  Variable,
  CallInNumberMetrics,
  CreateExtensionRequest,
  StaffSkillGroupList,
  SetStaffStatusRequest,
  ResetExtensionPasswordResponse,
  ForwardingTarget,
  CreateAutoCalloutTaskRequest,
  AILatencyDetail,
  AITransferItem,
  EventStaffElement,
  AbortAgentCruiseDialingCampaignRequest,
  ForceMemberOfflineResponse,
  CreateOwnNumberApplyResponse,
  BindNumberCallOutSkillGroupResponse,
  HangUpCallResponse,
  TransferToManualResponse,
  StopAutoCalloutTaskResponse,
  AbortPredictiveDialingCampaignRequest,
  ToneWordInfo,
  TelCdrInfo,
  SkillGroupItem,
  MessageBody,
  PhoneNumBuyInfo,
  DescribeAIAnalysisResultRequest,
  ModifyCompanyApplyResponse,
  DescribeCCCBuyInfoListResponse,
  ActiveCarrierPrivilegeNumber,
  UnbindStaffSkillGroupListResponse,
  ResumeAutoCalloutTaskRequest,
  ControlAIConversationRequest,
  UploadAudioInfo,
  CompanyStateInfo,
  DeleteExtensionResponse,
  BindStaffSkillGroupListRequest,
  CreateAgentCruiseDialingCampaignResponse,
  ModifyOwnNumberApplyResponse,
  UnbindStaffSkillGroupListRequest,
  SetStaffStatusItem,
  DescribeCallInMetricsResponse,
  ModifyCompanyApplyRequest,
  DescribeAgentCruiseDialingCampaignResponse,
  CreateAICallResponse,
  DescribeCompanyListRequest,
  CreateIVRSessionResponse,
  IMSatisfaction,
  DescribeActiveCarrierPrivilegeNumberResponse,
  HangUpCallRequest,
  ClientInfo,
  DescribeTelCdrResponse,
  InvokeLLM,
  DescribeStaffStatusMetricsRequest,
  DeleteStaffResponse,
  DescribeAIAgentInfoListRequest,
  StaffStatusExtra,
  DescribeStaffStatusHistoryRequest,
  CreateStaffRequest,
  CreateCompanyApplyResponse,
  SdkAppIdBuyInfo,
  DescribePSTNActiveSessionListResponse,
  EventStaffDetail,
  AILatencyStatistics,
  StaffStatus,
  DescribeIMCdrListRequest,
  AIAnalysisResult,
  DescribeAutoCalloutTasksRequest,
  PlaySoundCallRequest,
  DescribeChatMessagesRequest,
  DescribeTelSessionResponse,
  SetStaffStatusRspItem,
  CreateAdminURLRequest,
  DescribeAutoCalloutTaskResponse,
  DescribeStaffStatusMetricsResponse,
  ResumeAutoCalloutTaskResponse,
  AudioFileInfo,
  DescribeCarrierPrivilegeNumberApplicantsResponse,
  CreateCallOutSessionRequest,
  BindStaffSkillGroupListResponse,
  DescribeTelRecordAsrResponse,
  DescribeExtensionsRequest,
  DescribeProtectedTelCdrRequest,
  DescribePredictiveDialingSessionsRequest,
  CreateSDKLoginTokenRequest,
  DescribeActiveCarrierPrivilegeNumberRequest,
  StaffBuyInfo,
  CreateOwnNumberApplyRequest,
  DescribeCallInMetricsRequest,
  DescribeExtensionResponse,
  DescribeTelRecordAsrRequest,
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
   * 特定场景下讲会话转接到人工坐席
   */
  async TransferToManual(
    req: TransferToManualRequest,
    cb?: (error: string, rep: TransferToManualResponse) => void
  ): Promise<TransferToManualResponse> {
    return this.request("TransferToManual", req, cb)
  }

  /**
   * 对与座席通话中的会话，进行放音
   */
  async PlaySoundCall(
    req: PlaySoundCallRequest,
    cb?: (error: string, rep: PlaySoundCallResponse) => void
  ): Promise<PlaySoundCallResponse> {
    return this.request("PlaySoundCall", req, cb)
  }

  /**
   * 修改公司资质申请，只能修改状态为驳回或待审核的申请单。（1、首次使用接口，建议先在云联络中心控制台查看各个资料模板:https://console.cloud.tencent.com/ccc/enterprise/update。2、参数中图片Url建议使用腾讯云Cos存储的临时链接）
   */
  async ModifyCompanyApply(
    req: ModifyCompanyApplyRequest,
    cb?: (error: string, rep: ModifyCompanyApplyResponse) => void
  ): Promise<ModifyCompanyApplyResponse> {
    return this.request("ModifyCompanyApply", req, cb)
  }

  /**
   * 获取 AI 会话分析结果
   */
  async DescribeAIAnalysisResult(
    req: DescribeAIAnalysisResultRequest,
    cb?: (error: string, rep: DescribeAIAnalysisResultResponse) => void
  ): Promise<DescribeAIAnalysisResultResponse> {
    return this.request("DescribeAIAnalysisResult", req, cb)
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
     * 调用该接口，可以通过 Session ID 查询指定会话在特定时间段内，AI服务的处理时延明细与统计数据，时延信息包括：
- 端到端（ETE）时延：统计从用户语音输入到 AI 返回完整响应的整体耗时。
- 自动语音识别（ASR）时延：统计语音输入被识别为文本所需的处理耗时。
- 大语言模型（LLM）时延：统计 AI 模型生成文本内容的推理耗时。
- 语音合成（TTS）时延：统计文本转换为语音音频的合成耗时。
     */
  async DescribeAILatency(
    req: DescribeAILatencyRequest,
    cb?: (error: string, rep: DescribeAILatencyResponse) => void
  ): Promise<DescribeAILatencyResponse> {
    return this.request("DescribeAILatency", req, cb)
  }

  /**
   * 批量查询自动外呼任务
   */
  async DescribeAutoCalloutTasks(
    req: DescribeAutoCalloutTasksRequest,
    cb?: (error: string, rep: DescribeAutoCalloutTasksResponse) => void
  ): Promise<DescribeAutoCalloutTasksResponse> {
    return this.request("DescribeAutoCalloutTasks", req, cb)
  }

  /**
     * 用于通过 TaskId **暂停一个正在执行的自动外呼任务**。调用该接口后，任务将被临时中断，不再发起新的外呼请求；已发起的通话不受影响。
暂停后的任务可通过 [恢复暂停的自动外呼任务](https://cloud.tencent.com/document/product/679/125356) 接口继续执行。如需永久终止任务，请参考 [停止自动外呼任务](https://cloud.tencent.com/document/product/679/69192)。
     */
  async PauseAutoCalloutTask(
    req: PauseAutoCalloutTaskRequest,
    cb?: (error: string, rep: PauseAutoCalloutTaskResponse) => void
  ): Promise<PauseAutoCalloutTaskResponse> {
    return this.request("PauseAutoCalloutTask", req, cb)
  }

  /**
   * 停止座席巡航式外呼任务
   */
  async AbortAgentCruiseDialingCampaign(
    req: AbortAgentCruiseDialingCampaignRequest,
    cb?: (error: string, rep: AbortAgentCruiseDialingCampaignResponse) => void
  ): Promise<AbortAgentCruiseDialingCampaignResponse> {
    return this.request("AbortAgentCruiseDialingCampaign", req, cb)
  }

  /**
     * 用于 **直接调用AI模型** 发起 **单次** 外呼通话，支持通过API参数直接配置模型、提示词、语音等全部通话要素。

该功能需购买语音智能体通话套餐，并且仅限自有电话号码使用。详情请参考 [语音智能体通话购买指引](https://cloud.tencent.com/document/product/679/125953)。
     */
  async CreateAICall(
    req: CreateAICallRequest,
    cb?: (error: string, rep: CreateAICallResponse) => void
  ): Promise<CreateAICallResponse> {
    return this.request("CreateAICall", req, cb)
  }

  /**
   * 查询 座席巡航式外呼任务
   */
  async DescribeAgentCruiseDialingCampaign(
    req: DescribeAgentCruiseDialingCampaignRequest,
    cb?: (error: string, rep: DescribeAgentCruiseDialingCampaignResponse) => void
  ): Promise<DescribeAgentCruiseDialingCampaignResponse> {
    return this.request("DescribeAgentCruiseDialingCampaign", req, cb)
  }

  /**
   * 删除技能组
   */
  async DeleteCCCSkillGroup(
    req: DeleteCCCSkillGroupRequest,
    cb?: (error: string, rep: DeleteCCCSkillGroupResponse) => void
  ): Promise<DeleteCCCSkillGroupResponse> {
    return this.request("DeleteCCCSkillGroup", req, cb)
  }

  /**
   * 修改客户自携号码审批单
   */
  async ModifyOwnNumberApply(
    req: ModifyOwnNumberApplyRequest,
    cb?: (error: string, rep: ModifyOwnNumberApplyResponse) => void
  ): Promise<ModifyOwnNumberApplyResponse> {
    return this.request("ModifyOwnNumberApply", req, cb)
  }

  /**
   * 查询预测式外呼任务
   */
  async DescribePredictiveDialingCampaign(
    req: DescribePredictiveDialingCampaignRequest,
    cb?: (error: string, rep: DescribePredictiveDialingCampaignResponse) => void
  ): Promise<DescribePredictiveDialingCampaignResponse> {
    return this.request("DescribePredictiveDialingCampaign", req, cb)
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
   * 停止自动外呼任务
   */
  async StopAutoCalloutTask(
    req: StopAutoCalloutTaskRequest,
    cb?: (error: string, rep: StopAutoCalloutTaskResponse) => void
  ): Promise<StopAutoCalloutTaskResponse> {
    return this.request("StopAutoCalloutTask", req, cb)
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
   * 绑定座席所属技能组
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
   * 查询座席状态历史
   */
  async DescribeStaffStatusHistory(
    req: DescribeStaffStatusHistoryRequest,
    cb?: (error: string, rep: DescribeStaffStatusHistoryResponse) => void
  ): Promise<DescribeStaffStatusHistoryResponse> {
    return this.request("DescribeStaffStatusHistory", req, cb)
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
   * 查询IVR音频文件列表信息
   */
  async DescribeIvrAudioList(
    req: DescribeIvrAudioListRequest,
    cb?: (error: string, rep: DescribeIvrAudioListResponse) => void
  ): Promise<DescribeIvrAudioListResponse> {
    return this.request("DescribeIvrAudioList", req, cb)
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
   * 停用号码
   */
  async DisableCCCPhoneNumber(
    req: DisableCCCPhoneNumberRequest,
    cb?: (error: string, rep: DisableCCCPhoneNumberResponse) => void
  ): Promise<DisableCCCPhoneNumberResponse> {
    return this.request("DisableCCCPhoneNumber", req, cb)
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
   * 重置话机注册密码
   */
  async ResetExtensionPassword(
    req: ResetExtensionPasswordRequest,
    cb?: (error: string, rep: ResetExtensionPasswordResponse) => void
  ): Promise<ResetExtensionPasswordResponse> {
    return this.request("ResetExtensionPassword", req, cb)
  }

  /**
   * 设置 staff 状态
   */
  async SetStaffStatus(
    req: SetStaffStatusRequest,
    cb?: (error: string, rep: SetStaffStatusResponse) => void
  ): Promise<SetStaffStatusResponse> {
    return this.request("SetStaffStatus", req, cb)
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
   * 上传IVR中使用的音频文件，每日上传文件限制50个。（参数中音频文件Url建议使用腾讯云Cos存储的临时链接）
   */
  async UploadIvrAudio(
    req: UploadIvrAudioRequest,
    cb?: (error: string, rep: UploadIvrAudioResponse) => void
  ): Promise<UploadIvrAudioResponse> {
    return this.request("UploadIvrAudio", req, cb)
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
   * 获取闪信记录列表
   */
  async DescribeFlashSMSList(
    req: DescribeFlashSMSListRequest,
    cb?: (error: string, rep: DescribeFlashSMSListResponse) => void
  ): Promise<DescribeFlashSMSListResponse> {
    return this.request("DescribeFlashSMSList", req, cb)
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
     * 创建外呼会话，当前仅支持双呼，即先使用平台号码呼出到座席手机上，座席接听后，然后再外呼用户，而且由于运营商频率限制，座席手机号必须先加白名单，避免频控导致外呼失败。所以调用此接口前，下述操作均已完成
1. UserId 指定的座席已经[绑定手机号](https://cloud.tencent.com/document/product/679/76067#.E6.AD.A5.E9.AA.A42.EF.BC.9A.E5.AE.8C.E5.96.84.E8.B4.A6.E5.8F.B7.E4.BF.A1.E6.81.AF)
2. 座席绑定的手机号已经[申请并通过了外呼白名单](https://cloud.tencent.com/document/product/679/76744#.E6.93.8D.E4.BD.9C.E6.AD.A5.E9.AA.A4)
3. 当前座席侧只能呼叫其手机，所以 IsForceMobile 字段当前必须为 true
4. 被叫不要填当前 UserId 所绑定的手机号，否则会造成占线呼叫失败
     */
  async CreateCallOutSession(
    req: CreateCallOutSessionRequest,
    cb?: (error: string, rep: CreateCallOutSessionResponse) => void
  ): Promise<CreateCallOutSessionResponse> {
    return this.request("CreateCallOutSession", req, cb)
  }

  /**
   * 查询预测式外呼任务列表
   */
  async DescribePredictiveDialingCampaigns(
    req: DescribePredictiveDialingCampaignsRequest,
    cb?: (error: string, rep: DescribePredictiveDialingCampaignsResponse) => void
  ): Promise<DescribePredictiveDialingCampaignsResponse> {
    return this.request("DescribePredictiveDialingCampaigns", req, cb)
  }

  /**
     * 用于通过 TaskId 查询**自动外呼任务的详细信息**，包括任务基础配置、起止时间、外呼名单、执行状态以及实际通话情况等。
该接口通常与 [创建批量自动外呼任务](https://cloud.tencent.com/document/product/679/69194) 配合使用，用于在任务创建后查看任务配置是否生效、任务当前状态，以及后续执行过程中的实时进展。
     */
  async DescribeAutoCalloutTask(
    req: DescribeAutoCalloutTaskRequest,
    cb?: (error: string, rep: DescribeAutoCalloutTaskResponse) => void
  ): Promise<DescribeAutoCalloutTaskResponse> {
    return this.request("DescribeAutoCalloutTask", req, cb)
  }

  /**
   * 查询预测式外呼呼叫列表
   */
  async DescribePredictiveDialingSessions(
    req: DescribePredictiveDialingSessionsRequest,
    cb?: (error: string, rep: DescribePredictiveDialingSessionsResponse) => void
  ): Promise<DescribePredictiveDialingSessionsResponse> {
    return this.request("DescribePredictiveDialingSessions", req, cb)
  }

  /**
   * 创建公司资质申请（1、首次使用接口，建议先在云联络中心控制台查看各个资料模板:https://console.cloud.tencent.com/ccc/enterprise/update。2、参数中图片Url建议使用腾讯云Cos存储的临时链接）
   */
  async CreateCompanyApply(
    req: CreateCompanyApplyRequest,
    cb?: (error: string, rep: CreateCompanyApplyResponse) => void
  ): Promise<CreateCompanyApplyResponse> {
    return this.request("CreateCompanyApply", req, cb)
  }

  /**
   * 提供服务端控制机器人的功能
   */
  async ControlAIConversation(
    req: ControlAIConversationRequest,
    cb?: (error: string, rep: ControlAIConversationResponse) => void
  ): Promise<ControlAIConversationResponse> {
    return this.request("ControlAIConversation", req, cb)
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
   * 解绑号码外呼技能组
   */
  async UnbindNumberCallOutSkillGroup(
    req: UnbindNumberCallOutSkillGroupRequest,
    cb?: (error: string, rep: UnbindNumberCallOutSkillGroupResponse) => void
  ): Promise<UnbindNumberCallOutSkillGroupResponse> {
    return this.request("UnbindNumberCallOutSkillGroup", req, cb)
  }

  /**
   * 获取通话详情
   */
  async DescribeSessionDetail(
    req: DescribeSessionDetailRequest,
    cb?: (error: string, rep: DescribeSessionDetailResponse) => void
  ): Promise<DescribeSessionDetailResponse> {
    return this.request("DescribeSessionDetail", req, cb)
  }

  /**
   * 创建预测式外呼任务
   */
  async CreatePredictiveDialingCampaign(
    req: CreatePredictiveDialingCampaignRequest,
    cb?: (error: string, rep: CreatePredictiveDialingCampaignResponse) => void
  ): Promise<CreatePredictiveDialingCampaignResponse> {
    return this.request("CreatePredictiveDialingCampaign", req, cb)
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
   * 本接口用于：在语音智能体通话结束后，通过 Session ID 查询指定会话的 **话后标签** 结果。相关话后标签需提前在管理端完成配置，具体说明请参见 [话后标签](https://cloud.tencent.com/document/product/679/119800) 。
   */
  async DescribeAICallExtractResult(
    req: DescribeAICallExtractResultRequest,
    cb?: (error: string, rep: DescribeAICallExtractResultResponse) => void
  ): Promise<DescribeAICallExtractResultResponse> {
    return this.request("DescribeAICallExtractResult", req, cb)
  }

  /**
   * 座席巡航式外呼。
   */
  async CreateAgentCruiseDialingCampaign(
    req: CreateAgentCruiseDialingCampaignRequest,
    cb?: (error: string, rep: CreateAgentCruiseDialingCampaignResponse) => void
  ): Promise<CreateAgentCruiseDialingCampaignResponse> {
    return this.request("CreateAgentCruiseDialingCampaign", req, cb)
  }

  /**
   * 本接口用于分页查询指定实例（SdkAppId）下已配置的智能体信息列表，包括智能体ID和名称等基本信息。
   */
  async DescribeAIAgentInfoList(
    req: DescribeAIAgentInfoListRequest,
    cb?: (error: string, rep: DescribeAIAgentInfoListResponse) => void
  ): Promise<DescribeAIAgentInfoListResponse> {
    return this.request("DescribeAIAgentInfoList", req, cb)
  }

  /**
   * 创建客户自携号码接入审核
   */
  async CreateOwnNumberApply(
    req: CreateOwnNumberApplyRequest,
    cb?: (error: string, rep: CreateOwnNumberApplyResponse) => void
  ): Promise<CreateOwnNumberApplyResponse> {
    return this.request("CreateOwnNumberApply", req, cb)
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
   * 恢复预测式外呼任务
   */
  async ResumePredictiveDialingCampaign(
    req: ResumePredictiveDialingCampaignRequest,
    cb?: (error: string, rep: ResumePredictiveDialingCampaignResponse) => void
  ): Promise<ResumePredictiveDialingCampaignResponse> {
    return this.request("ResumePredictiveDialingCampaign", req, cb)
  }

  /**
   * 新建技能组
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
   * 修改座席的密码
   */
  async ModifyStaffPassword(
    req: ModifyStaffPasswordRequest,
    cb?: (error: string, rep: ModifyStaffPasswordResponse) => void
  ): Promise<ModifyStaffPasswordResponse> {
    return this.request("ModifyStaffPassword", req, cb)
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
   * 绑定号码呼入回调接口
   */
  async BindNumberCallInInterface(
    req: BindNumberCallInInterfaceRequest,
    cb?: (error: string, rep: BindNumberCallInInterfaceResponse) => void
  ): Promise<BindNumberCallInInterfaceResponse> {
    return this.request("BindNumberCallInInterface", req, cb)
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
   * 创建关联 IVR 的会话，仅高级版支持，目前支持呼入和自动外呼两种 IVR 类型。收到请求后 TCCC 会先尝试呼通被叫，然后进入 IVR 流程。
   */
  async CreateIVRSession(
    req: CreateIVRSessionRequest,
    cb?: (error: string, rep: CreateIVRSessionResponse) => void
  ): Promise<CreateIVRSessionResponse> {
    return this.request("CreateIVRSession", req, cb)
  }

  /**
     * 用于**创建批量自动外呼通话**，系统将根据任务配置，自动向指定的**被叫号码列表**发起外呼通话。该接口可调用配置完成的智能体发起批量的外呼任务，你可以在管理端-智能体管理中，新建语音智能体，进行 [对话流程配置](https://cloud.tencent.com/document/product/679/119796)。若需创建单次智能体外呼任务，请参考文档 [创建单次智能体通话](https://cloud.tencent.com/document/product/679/115681)。

该功能需购买语音智能体通话套餐，并且仅限自有电话号码使用。详情请参考 [语音智能体通话购买指引](https://cloud.tencent.com/document/product/679/125953)。
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
   * 更新技能组
   */
  async UpdateCCCSkillGroup(
    req: UpdateCCCSkillGroupRequest,
    cb?: (error: string, rep: UpdateCCCSkillGroupResponse) => void
  ): Promise<UpdateCCCSkillGroupResponse> {
    return this.request("UpdateCCCSkillGroup", req, cb)
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
   * 拉取会话录音转文本信息
   */
  async DescribeTelRecordAsr(
    req: DescribeTelRecordAsrRequest,
    cb?: (error: string, rep: DescribeTelRecordAsrResponse) => void
  ): Promise<DescribeTelRecordAsrResponse> {
    return this.request("DescribeTelRecordAsr", req, cb)
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
   * 暂停预测式外呼任务
   */
  async PausePredictiveDialingCampaign(
    req: PausePredictiveDialingCampaignRequest,
    cb?: (error: string, rep: PausePredictiveDialingCampaignResponse) => void
  ): Promise<PausePredictiveDialingCampaignResponse> {
    return this.request("PausePredictiveDialingCampaign", req, cb)
  }

  /**
   * 创建管理端访问链接
   */
  async CreateAdminURL(
    req: CreateAdminURLRequest,
    cb?: (error: string, rep: CreateAdminURLResponse) => void
  ): Promise<CreateAdminURLResponse> {
    return this.request("CreateAdminURL", req, cb)
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
   * 获取包括全媒体和文本会话两种类型的服务记录。
   */
  async DescribeIMCdrList(
    req: DescribeIMCdrListRequest,
    cb?: (error: string, rep: DescribeIMCdrListResponse) => void
  ): Promise<DescribeIMCdrListResponse> {
    return this.request("DescribeIMCdrList", req, cb)
  }

  /**
   * 强制客服下线
   */
  async ForceMemberOffline(
    req: ForceMemberOfflineRequest,
    cb?: (error: string, rep: ForceMemberOfflineResponse) => void
  ): Promise<ForceMemberOfflineResponse> {
    return this.request("ForceMemberOffline", req, cb)
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
   * 用于通过 TaskId **恢复一个已被暂停的自动外呼任务**。该接口适用于在调用 [暂停自动外呼任务](https://cloud.tencent.com/document/product/679/125357) 后，需继续执行剩余外呼计划的场景。调用成功后，任务将从暂停状态恢复，重新发起未完成的外呼请求。
   */
  async ResumeAutoCalloutTask(
    req: ResumeAutoCalloutTaskRequest,
    cb?: (error: string, rep: ResumeAutoCalloutTaskResponse) => void
  ): Promise<ResumeAutoCalloutTaskResponse> {
    return this.request("ResumeAutoCalloutTask", req, cb)
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

  /**
   * 停止预测式外呼任务
   */
  async AbortPredictiveDialingCampaign(
    req: AbortPredictiveDialingCampaignRequest,
    cb?: (error: string, rep: AbortPredictiveDialingCampaignResponse) => void
  ): Promise<AbortPredictiveDialingCampaignResponse> {
    return this.request("AbortPredictiveDialingCampaign", req, cb)
  }

  /**
   * 查询公司资质申请列表
   */
  async DescribeCompanyList(
    req: DescribeCompanyListRequest,
    cb?: (error: string, rep: DescribeCompanyListResponse) => void
  ): Promise<DescribeCompanyListResponse> {
    return this.request("DescribeCompanyList", req, cb)
  }

  /**
     * 用于创建**一次性的智能体外呼通话**。你可以在管理端-智能体管理中，新建语音智能体，进行 [对话流程配置](https://cloud.tencent.com/document/product/679/119796) 。该接口可调用配置完成的智能体发起单次的外呼任务。若需创建批量智能体外呼任务，请参考文档 [创建自动外呼任务](https://cloud.tencent.com/document/product/679/69194)。

该功能需购买语音智能体通话套餐，并且仅限自有电话号码使用。详情请参考 [语音智能体通话购买指引](https://cloud.tencent.com/document/product/679/125953)。
     */
  async CreateAIAgentCall(
    req: CreateAIAgentCallRequest,
    cb?: (error: string, rep: CreateAIAgentCallResponse) => void
  ): Promise<CreateAIAgentCallResponse> {
    return this.request("CreateAIAgentCall", req, cb)
  }

  /**
   * 删除预测式外呼任务
   */
  async DeletePredictiveDialingCampaign(
    req: DeletePredictiveDialingCampaignRequest,
    cb?: (error: string, rep: DeletePredictiveDialingCampaignResponse) => void
  ): Promise<DeletePredictiveDialingCampaignResponse> {
    return this.request("DeletePredictiveDialingCampaign", req, cb)
  }

  /**
   * 恢复客服上线
   */
  async RestoreMemberOnline(
    req: RestoreMemberOnlineRequest,
    cb?: (error: string, rep: RestoreMemberOnlineResponse) => void
  ): Promise<RestoreMemberOnlineResponse> {
    return this.request("RestoreMemberOnline", req, cb)
  }

  /**
   * 任务未启动前，更新预测式外呼任务。
   */
  async UpdatePredictiveDialingCampaign(
    req: UpdatePredictiveDialingCampaignRequest,
    cb?: (error: string, rep: UpdatePredictiveDialingCampaignResponse) => void
  ): Promise<UpdatePredictiveDialingCampaignResponse> {
    return this.request("UpdatePredictiveDialingCampaign", req, cb)
  }
}
