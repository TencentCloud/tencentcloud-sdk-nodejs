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
  CreateIVRSessionRequest,
  CompanyApplyInfo,
  CreateSDKLoginTokenResponse,
  ModifyStaffRequest,
  DescribeIvrAudioListResponse,
  DescribePredictiveDialingCampaignsElement,
  ResetExtensionPasswordRequest,
  DisableCCCPhoneNumberResponse,
  DescribeProtectedTelCdrResponse,
  DescribeAutoCalloutTaskRequest,
  CreateUserSigResponse,
  CreateAICallRequest,
  CreateAdminURLResponse,
  PausePredictiveDialingCampaignRequest,
  CreateCallOutSessionResponse,
  DescribeCarrierPrivilegeNumberApplicantsRequest,
  DisableCCCPhoneNumberRequest,
  ModifyStaffPasswordResponse,
  CreatePredictiveDialingCampaignRequest,
  CreateCompanyApplyResponse,
  ServeParticipant,
  AICallExtractResultElement,
  DescribeTelCallInfoResponse,
  DescribeExtensionsResponse,
  StaffStatusMetrics,
  DeleteExtensionRequest,
  DescribePredictiveDialingCampaignRequest,
  DescribePredictiveDialingCampaignResponse,
  CreateAIAgentCallResponse,
  AICallExtractConfigElement,
  DescribeAutoCalloutTasksResponse,
  PackageBuyInfo,
  DescribeTelCdrRequest,
  AICallExtractResultInfo,
  DescribeIMCdrListResponse,
  DescribeAICallExtractResultRequest,
  CreateStaffResponse,
  DescribePredictiveDialingCampaignsRequest,
  DescribeSkillGroupInfoListResponse,
  DescribeNumbersResponse,
  DeletePredictiveDialingCampaignRequest,
  UploadIvrAudioRequest,
  DescribeStaffInfoListResponse,
  UnbindNumberCallOutSkillGroupRequest,
  CreateAutoCalloutTaskRequest,
  ResumePredictiveDialingCampaignResponse,
  CallInSkillGroupMetrics,
  CreateExtensionResponse,
  CreateUserSigRequest,
  CreateCCCSkillGroupRequest,
  DescribePredictiveDialingSessionsResponse,
  DescribeAutoCalloutTaskResponse,
  CreateCompanyApplyRequest,
  CreateCCCSkillGroupResponse,
  DescribeTelSessionRequest,
  DescribeIMCdrsRequest,
  DescribeSkillGroupInfoListRequest,
  CreateCarrierPrivilegeNumberApplicantResponse,
  AutoCalloutTaskCalleeInfo,
  SeatUserInfo,
  UpdateCCCSkillGroupResponse,
  AsrData,
  CarrierPrivilegeNumberApplicant,
  ErrStaffItem,
  PausePredictiveDialingCampaignResponse,
  PSTNSession,
  UpdatePredictiveDialingCampaignRequest,
  DescribeStaffInfoListRequest,
  AutoCalloutTaskInfo,
  DescribeIvrAudioListRequest,
  SkillGroupInfoItem,
  CreateAIAgentCallRequest,
  UpdateCCCSkillGroupRequest,
  ModifyStaffPasswordRequest,
  ModifyStaffResponse,
  ModifyExtensionRequest,
  CreatePredictiveDialingCampaignResponse,
  UpdatePredictiveDialingCampaignResponse,
  ModifyOwnNumberApplyRequest,
  PSTNSessionInfo,
  Message,
  AbortPredictiveDialingCampaignResponse,
  DescribeIMCdrsResponse,
  DescribeNumbersRequest,
  ExtensionInfo,
  BindNumberCallOutSkillGroupRequest,
  DeletePredictiveDialingCampaignResponse,
  IVRKeyPressedElement,
  UnbindNumberCallOutSkillGroupResponse,
  StaffInfo,
  CreateAutoCalloutTaskResponse,
  DescribeAICallExtractResultResponse,
  UploadIvrAudioResponse,
  ModifyExtensionResponse,
  DescribeCompanyListResponse,
  NumberInfo,
  DeleteStaffRequest,
  CallInMetrics,
  DescribeCCCBuyInfoListRequest,
  OwnNumberApplyDetailItem,
  DescribePredictiveDialingCampaignsResponse,
  DescribeTelCallInfoRequest,
  Variable,
  CallInNumberMetrics,
  CreateExtensionRequest,
  StaffSkillGroupList,
  ResetExtensionPasswordResponse,
  CreateCarrierPrivilegeNumberApplicantRequest,
  AITransferItem,
  Filter,
  UnbindStaffSkillGroupListRequest,
  CreateOwnNumberApplyResponse,
  BindNumberCallOutSkillGroupResponse,
  HangUpCallResponse,
  StopAutoCalloutTaskResponse,
  AbortPredictiveDialingCampaignRequest,
  TelCdrInfo,
  SkillGroupItem,
  MessageBody,
  PhoneNumBuyInfo,
  ModifyCompanyApplyResponse,
  DescribeCCCBuyInfoListResponse,
  ActiveCarrierPrivilegeNumber,
  UnbindStaffSkillGroupListResponse,
  ResumePredictiveDialingCampaignRequest,
  UploadAudioInfo,
  CompanyStateInfo,
  DeleteExtensionResponse,
  BindStaffSkillGroupListRequest,
  DescribePSTNActiveSessionListRequest,
  UploadIvrAudioFailedInfo,
  DescribeCallInMetricsResponse,
  ModifyCompanyApplyRequest,
  ModifyOwnNumberApplyResponse,
  CreateAICallResponse,
  DescribeCompanyListRequest,
  CreateIVRSessionResponse,
  IMSatisfaction,
  DescribeActiveCarrierPrivilegeNumberResponse,
  HangUpCallRequest,
  DescribeTelCdrResponse,
  DescribeStaffStatusMetricsRequest,
  DeleteStaffResponse,
  CalleeAttribute,
  StaffStatusExtra,
  CreateStaffRequest,
  DescribeChatMessagesResponse,
  SdkAppIdBuyInfo,
  DescribePSTNActiveSessionListResponse,
  IMCdrInfo,
  DescribeIMCdrListRequest,
  DescribeAutoCalloutTasksRequest,
  DescribeChatMessagesRequest,
  DescribeTelSessionResponse,
  CreateAdminURLRequest,
  DescribeStaffStatusMetricsResponse,
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
   * 修改客服账号
   */
  async ModifyStaff(
    req: ModifyStaffRequest,
    cb?: (error: string, rep: ModifyStaffResponse) => void
  ): Promise<ModifyStaffResponse> {
    return this.request("ModifyStaff", req, cb)
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
   * 批量查询自动外呼任务
   */
  async DescribeAutoCalloutTasks(
    req: DescribeAutoCalloutTasksRequest,
    cb?: (error: string, rep: DescribeAutoCalloutTasksResponse) => void
  ): Promise<DescribeAutoCalloutTasksResponse> {
    return this.request("DescribeAutoCalloutTasks", req, cb)
  }

  /**
     * 用于调用AI模型发起外呼通话，仅限自有电话号码使用，目前开通高级版座席**限时**免费体验。

发起通话前，请先确认您的AI模型是否兼容 OpenAI、Azure 或 Minimax 协议，并前往模型服务商网站获取相关鉴权信息。 具体功能说明请参考文档 [腾讯云联络中心AI通话平台](https://cloud.tencent.com/document/product/679/112100)。
     */
  async CreateAICall(
    req: CreateAICallRequest,
    cb?: (error: string, rep: CreateAICallResponse) => void
  ): Promise<CreateAICallResponse> {
    return this.request("CreateAICall", req, cb)
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
   * 停止自动外呼任务
   */
  async StopAutoCalloutTask(
    req: StopAutoCalloutTaskRequest,
    cb?: (error: string, rep: StopAutoCalloutTaskResponse) => void
  ): Promise<StopAutoCalloutTaskResponse> {
    return this.request("StopAutoCalloutTask", req, cb)
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
   * 修改公司资质申请，只能修改状态为驳回或待审核的申请单。（1、首次使用接口，建议先在云联络中心控制台查看各个资料模板:https://console.cloud.tencent.com/ccc/enterprise/update。2、参数中图片Url建议使用腾讯云Cos存储的临时链接）
   */
  async ModifyCompanyApply(
    req: ModifyCompanyApplyRequest,
    cb?: (error: string, rep: ModifyCompanyApplyResponse) => void
  ): Promise<ModifyCompanyApplyResponse> {
    return this.request("ModifyCompanyApply", req, cb)
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
   * 查询自动外呼任务详情
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
   * 修改客户自携号码审批单
   */
  async ModifyOwnNumberApply(
    req: ModifyOwnNumberApplyRequest,
    cb?: (error: string, rep: ModifyOwnNumberApplyResponse) => void
  ): Promise<ModifyOwnNumberApplyResponse> {
    return this.request("ModifyOwnNumberApply", req, cb)
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
   * 获取 AI 通话内容提取结果。
   */
  async DescribeAICallExtractResult(
    req: DescribeAICallExtractResultRequest,
    cb?: (error: string, rep: DescribeAICallExtractResultResponse) => void
  ): Promise<DescribeAICallExtractResultResponse> {
    return this.request("DescribeAICallExtractResult", req, cb)
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
   * 查询预测式外呼任务
   */
  async DescribePredictiveDialingCampaign(
    req: DescribePredictiveDialingCampaignRequest,
    cb?: (error: string, rep: DescribePredictiveDialingCampaignResponse) => void
  ): Promise<DescribePredictiveDialingCampaignResponse> {
    return this.request("DescribePredictiveDialingCampaign", req, cb)
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
     * 用于调用AI模型发起外呼通话，仅限自有电话号码使用，目前开通高级版座席**限时**免费体验。

发起通话前，请先确认您的AI模型是否兼容 OpenAI、Azure 或 Minimax 协议，并前往模型服务商网站获取相关鉴权信息。 具体功能说明请参考文档 [腾讯云联络中心AI通话平台](https://cloud.tencent.com/document/product/679/112100)。
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
   * 任务未启动前，更新预测式外呼任务。
   */
  async UpdatePredictiveDialingCampaign(
    req: UpdatePredictiveDialingCampaignRequest,
    cb?: (error: string, rep: UpdatePredictiveDialingCampaignResponse) => void
  ): Promise<UpdatePredictiveDialingCampaignResponse> {
    return this.request("UpdatePredictiveDialingCampaign", req, cb)
  }
}
