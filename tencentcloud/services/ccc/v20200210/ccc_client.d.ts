import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeExtensionRequest, StopAutoCalloutTaskRequest, CreateIVRSessionRequest, CreateSDKLoginTokenResponse, ModifyStaffRequest, DescribeIvrAudioListResponse, ResetExtensionPasswordRequest, DisableCCCPhoneNumberResponse, DescribeProtectedTelCdrResponse, DescribeAutoCalloutTaskRequest, CreateUserSigResponse, CreateAICallRequest, CreateAdminURLResponse, PausePredictiveDialingCampaignRequest, CreateCallOutSessionResponse, DescribeCarrierPrivilegeNumberApplicantsRequest, DisableCCCPhoneNumberRequest, ModifyStaffPasswordResponse, CreatePredictiveDialingCampaignRequest, CreateCompanyApplyResponse, DescribeTelCallInfoResponse, DescribeExtensionsResponse, DeleteExtensionRequest, DescribePredictiveDialingCampaignRequest, DescribePredictiveDialingCampaignResponse, CreateAIAgentCallResponse, DescribeAutoCalloutTasksResponse, DescribeTelCdrRequest, DescribeIMCdrListResponse, DescribeAICallExtractResultRequest, CreateStaffResponse, DescribePredictiveDialingCampaignsRequest, DescribeSkillGroupInfoListResponse, DescribeNumbersResponse, DeletePredictiveDialingCampaignRequest, UploadIvrAudioRequest, DescribeStaffInfoListResponse, UnbindNumberCallOutSkillGroupRequest, CreateAutoCalloutTaskRequest, ResumePredictiveDialingCampaignResponse, CreateExtensionResponse, CreateUserSigRequest, CreateCCCSkillGroupRequest, DescribePredictiveDialingSessionsResponse, DescribeAutoCalloutTaskResponse, CreateCompanyApplyRequest, CreateCCCSkillGroupResponse, DescribeTelSessionRequest, DescribeIMCdrsRequest, DescribeSkillGroupInfoListRequest, CreateCarrierPrivilegeNumberApplicantResponse, UpdateCCCSkillGroupResponse, PausePredictiveDialingCampaignResponse, UpdatePredictiveDialingCampaignRequest, DescribeStaffInfoListRequest, DescribeIvrAudioListRequest, CreateAIAgentCallRequest, UpdateCCCSkillGroupRequest, ModifyStaffPasswordRequest, ModifyStaffResponse, ModifyExtensionRequest, CreatePredictiveDialingCampaignResponse, UpdatePredictiveDialingCampaignResponse, ModifyOwnNumberApplyRequest, AbortPredictiveDialingCampaignResponse, DescribeIMCdrsResponse, DescribeNumbersRequest, BindNumberCallOutSkillGroupRequest, DeletePredictiveDialingCampaignResponse, UnbindNumberCallOutSkillGroupResponse, CreateAutoCalloutTaskResponse, DescribeAICallExtractResultResponse, UploadIvrAudioResponse, ModifyExtensionResponse, DescribeCompanyListResponse, DeleteStaffRequest, DescribeCCCBuyInfoListRequest, DescribePredictiveDialingCampaignsResponse, DescribeTelCallInfoRequest, CreateExtensionRequest, ResetExtensionPasswordResponse, CreateCarrierPrivilegeNumberApplicantRequest, UnbindStaffSkillGroupListRequest, CreateOwnNumberApplyResponse, BindNumberCallOutSkillGroupResponse, HangUpCallResponse, StopAutoCalloutTaskResponse, AbortPredictiveDialingCampaignRequest, ModifyCompanyApplyResponse, DescribeCCCBuyInfoListResponse, UnbindStaffSkillGroupListResponse, ResumePredictiveDialingCampaignRequest, DeleteExtensionResponse, BindStaffSkillGroupListRequest, DescribePSTNActiveSessionListRequest, DescribeCallInMetricsResponse, ModifyCompanyApplyRequest, ModifyOwnNumberApplyResponse, CreateAICallResponse, DescribeCompanyListRequest, CreateIVRSessionResponse, DescribeActiveCarrierPrivilegeNumberResponse, HangUpCallRequest, DescribeTelCdrResponse, DescribeStaffStatusMetricsRequest, DeleteStaffResponse, CreateStaffRequest, DescribeChatMessagesResponse, DescribePSTNActiveSessionListResponse, DescribeIMCdrListRequest, DescribeAutoCalloutTasksRequest, DescribeChatMessagesRequest, DescribeTelSessionResponse, CreateAdminURLRequest, DescribeStaffStatusMetricsResponse, DescribeCarrierPrivilegeNumberApplicantsResponse, CreateCallOutSessionRequest, BindStaffSkillGroupListResponse, DescribeTelRecordAsrResponse, DescribeExtensionsRequest, DescribeProtectedTelCdrRequest, DescribePredictiveDialingSessionsRequest, CreateSDKLoginTokenRequest, DescribeActiveCarrierPrivilegeNumberRequest, CreateOwnNumberApplyRequest, DescribeCallInMetricsRequest, DescribeExtensionResponse, DescribeTelRecordAsrRequest } from "./ccc_models";
/**
 * ccc client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 修改客服账号
     */
    ModifyStaff(req: ModifyStaffRequest, cb?: (error: string, rep: ModifyStaffResponse) => void): Promise<ModifyStaffResponse>;
    /**
     * 查询话机列表信息
     */
    DescribeExtensions(req: DescribeExtensionsRequest, cb?: (error: string, rep: DescribeExtensionsResponse) => void): Promise<DescribeExtensionsResponse>;
    /**
     * 批量查询自动外呼任务
     */
    DescribeAutoCalloutTasks(req: DescribeAutoCalloutTasksRequest, cb?: (error: string, rep: DescribeAutoCalloutTasksResponse) => void): Promise<DescribeAutoCalloutTasksResponse>;
    /**
     * 用于调用AI模型发起外呼通话，仅限自有电话号码使用，目前开通高级版座席**限时**免费体验。

发起通话前，请先确认您的AI模型是否兼容 OpenAI、Azure 或 Minimax 协议，并前往模型服务商网站获取相关鉴权信息。 具体功能说明请参考文档 [腾讯云联络中心AI通话平台](https://cloud.tencent.com/document/product/679/112100)。
     */
    CreateAICall(req: CreateAICallRequest, cb?: (error: string, rep: CreateAICallResponse) => void): Promise<CreateAICallResponse>;
    /**
     * 拉取会话录音转文本信息
     */
    DescribeTelRecordAsr(req: DescribeTelRecordAsrRequest, cb?: (error: string, rep: DescribeTelRecordAsrResponse) => void): Promise<DescribeTelRecordAsrResponse>;
    /**
     * 停止自动外呼任务
     */
    StopAutoCalloutTask(req: StopAutoCalloutTaskRequest, cb?: (error: string, rep: StopAutoCalloutTaskResponse) => void): Promise<StopAutoCalloutTaskResponse>;
    /**
     * 停用号码
     */
    DisableCCCPhoneNumber(req: DisableCCCPhoneNumberRequest, cb?: (error: string, rep: DisableCCCPhoneNumberResponse) => void): Promise<DisableCCCPhoneNumberResponse>;
    /**
     * 获取当前正在通话的会话列表
     */
    DescribePSTNActiveSessionList(req: DescribePSTNActiveSessionListRequest, cb?: (error: string, rep: DescribePSTNActiveSessionListResponse) => void): Promise<DescribePSTNActiveSessionListResponse>;
    /**
     * 删除话机账号
     */
    DeleteExtension(req: DeleteExtensionRequest, cb?: (error: string, rep: DeleteExtensionResponse) => void): Promise<DeleteExtensionResponse>;
    /**
     * 获取指定服务记录文本聊天内容，需要先使用查询在线客服记录（DescribeIMCdrs） API 获取服务记录 SessionId。

文本聊天记录只保存了 1 年内的，1 年之前会自动清理。
     */
    DescribeChatMessages(req: DescribeChatMessagesRequest, cb?: (error: string, rep: DescribeChatMessagesResponse) => void): Promise<DescribeChatMessagesResponse>;
    /**
     * 绑定座席所属技能组
     */
    BindStaffSkillGroupList(req: BindStaffSkillGroupListRequest, cb?: (error: string, rep: BindStaffSkillGroupListResponse) => void): Promise<BindStaffSkillGroupListResponse>;
    /**
     * 绑定号码外呼技能组
     */
    BindNumberCallOutSkillGroup(req: BindNumberCallOutSkillGroupRequest, cb?: (error: string, rep: BindNumberCallOutSkillGroupResponse) => void): Promise<BindNumberCallOutSkillGroupResponse>;
    /**
     * 获取包括全媒体和文本会话两种类型的服务记录。
     */
    DescribeIMCdrs(req: DescribeIMCdrsRequest, cb?: (error: string, rep: DescribeIMCdrsResponse) => void): Promise<DescribeIMCdrsResponse>;
    /**
     * 查询IVR音频文件列表信息
     */
    DescribeIvrAudioList(req: DescribeIvrAudioListRequest, cb?: (error: string, rep: DescribeIvrAudioListResponse) => void): Promise<DescribeIvrAudioListResponse>;
    /**
     * 删除坐席信息
     */
    DeleteStaff(req: DeleteStaffRequest, cb?: (error: string, rep: DeleteStaffResponse) => void): Promise<DeleteStaffResponse>;
    /**
     * 修改公司资质申请，只能修改状态为驳回或待审核的申请单。（1、首次使用接口，建议先在云联络中心控制台查看各个资料模板:https://console.cloud.tencent.com/ccc/enterprise/update。2、参数中图片Url建议使用腾讯云Cos存储的临时链接）
     */
    ModifyCompanyApply(req: ModifyCompanyApplyRequest, cb?: (error: string, rep: ModifyCompanyApplyResponse) => void): Promise<ModifyCompanyApplyResponse>;
    /**
     * 创建话机账号
     */
    CreateExtension(req: CreateExtensionRequest, cb?: (error: string, rep: CreateExtensionResponse) => void): Promise<CreateExtensionResponse>;
    /**
     * 重置话机注册密码
     */
    ResetExtensionPassword(req: ResetExtensionPasswordRequest, cb?: (error: string, rep: ResetExtensionPasswordResponse) => void): Promise<ResetExtensionPasswordResponse>;
    /**
     * 按实例获取电话消耗统计
     */
    DescribeTelCallInfo(req: DescribeTelCallInfoRequest, cb?: (error: string, rep: DescribeTelCallInfoResponse) => void): Promise<DescribeTelCallInfoResponse>;
    /**
     * 上传IVR中使用的音频文件，每日上传文件限制50个。（参数中音频文件Url建议使用腾讯云Cos存储的临时链接）
     */
    UploadIvrAudio(req: UploadIvrAudioRequest, cb?: (error: string, rep: UploadIvrAudioResponse) => void): Promise<UploadIvrAudioResponse>;
    /**
     * 获取话机信息
     */
    DescribeExtension(req: DescribeExtensionRequest, cb?: (error: string, rep: DescribeExtensionResponse) => void): Promise<DescribeExtensionResponse>;
    /**
     * 查询单状态
     */
    DescribeCarrierPrivilegeNumberApplicants(req: DescribeCarrierPrivilegeNumberApplicantsRequest, cb?: (error: string, rep: DescribeCarrierPrivilegeNumberApplicantsResponse) => void): Promise<DescribeCarrierPrivilegeNumberApplicantsResponse>;
    /**
     * 获取 PSTN 会话信息
     */
    DescribeTelSession(req: DescribeTelSessionRequest, cb?: (error: string, rep: DescribeTelSessionResponse) => void): Promise<DescribeTelSessionResponse>;
    /**
     * 创建外呼会话，当前仅支持双呼，即先使用平台号码呼出到座席手机上，座席接听后，然后再外呼用户，而且由于运营商频率限制，座席手机号必须先加白名单，避免频控导致外呼失败。所以调用此接口前，下述操作均已完成
1. UserId 指定的座席已经[绑定手机号](https://cloud.tencent.com/document/product/679/76067#.E6.AD.A5.E9.AA.A42.EF.BC.9A.E5.AE.8C.E5.96.84.E8.B4.A6.E5.8F.B7.E4.BF.A1.E6.81.AF)
2. 座席绑定的手机号已经[申请并通过了外呼白名单](https://cloud.tencent.com/document/product/679/76744#.E6.93.8D.E4.BD.9C.E6.AD.A5.E9.AA.A4)
3. 当前座席侧只能呼叫其手机，所以 IsForceMobile 字段当前必须为 true
4. 被叫不要填当前 UserId 所绑定的手机号，否则会造成占线呼叫失败
     */
    CreateCallOutSession(req: CreateCallOutSessionRequest, cb?: (error: string, rep: CreateCallOutSessionResponse) => void): Promise<CreateCallOutSessionResponse>;
    /**
     * 查询预测式外呼任务列表
     */
    DescribePredictiveDialingCampaigns(req: DescribePredictiveDialingCampaignsRequest, cb?: (error: string, rep: DescribePredictiveDialingCampaignsResponse) => void): Promise<DescribePredictiveDialingCampaignsResponse>;
    /**
     * 查询自动外呼任务详情
     */
    DescribeAutoCalloutTask(req: DescribeAutoCalloutTaskRequest, cb?: (error: string, rep: DescribeAutoCalloutTaskResponse) => void): Promise<DescribeAutoCalloutTaskResponse>;
    /**
     * 查询预测式外呼呼叫列表
     */
    DescribePredictiveDialingSessions(req: DescribePredictiveDialingSessionsRequest, cb?: (error: string, rep: DescribePredictiveDialingSessionsResponse) => void): Promise<DescribePredictiveDialingSessionsResponse>;
    /**
     * 创建公司资质申请（1、首次使用接口，建议先在云联络中心控制台查看各个资料模板:https://console.cloud.tencent.com/ccc/enterprise/update。2、参数中图片Url建议使用腾讯云Cos存储的临时链接）
     */
    CreateCompanyApply(req: CreateCompanyApplyRequest, cb?: (error: string, rep: CreateCompanyApplyResponse) => void): Promise<CreateCompanyApplyResponse>;
    /**
     * 获取电话服务记录与录音
     */
    DescribeTelCdr(req: DescribeTelCdrRequest, cb?: (error: string, rep: DescribeTelCdrResponse) => void): Promise<DescribeTelCdrResponse>;
    /**
     * 获取技能组信息列表
     */
    DescribeSkillGroupInfoList(req: DescribeSkillGroupInfoListRequest, cb?: (error: string, rep: DescribeSkillGroupInfoListResponse) => void): Promise<DescribeSkillGroupInfoListResponse>;
    /**
     * 解绑号码外呼技能组
     */
    UnbindNumberCallOutSkillGroup(req: UnbindNumberCallOutSkillGroupRequest, cb?: (error: string, rep: UnbindNumberCallOutSkillGroupResponse) => void): Promise<UnbindNumberCallOutSkillGroupResponse>;
    /**
     * 修改客户自携号码审批单
     */
    ModifyOwnNumberApply(req: ModifyOwnNumberApplyRequest, cb?: (error: string, rep: ModifyOwnNumberApplyResponse) => void): Promise<ModifyOwnNumberApplyResponse>;
    /**
     * 创建预测式外呼任务
     */
    CreatePredictiveDialingCampaign(req: CreatePredictiveDialingCampaignRequest, cb?: (error: string, rep: CreatePredictiveDialingCampaignResponse) => void): Promise<CreatePredictiveDialingCampaignResponse>;
    /**
     * 用于无限频率地呼叫坐席手机
     */
    CreateCarrierPrivilegeNumberApplicant(req: CreateCarrierPrivilegeNumberApplicantRequest, cb?: (error: string, rep: CreateCarrierPrivilegeNumberApplicantResponse) => void): Promise<CreateCarrierPrivilegeNumberApplicantResponse>;
    /**
     * 获取 AI 通话内容提取结果。
     */
    DescribeAICallExtractResult(req: DescribeAICallExtractResultRequest, cb?: (error: string, rep: DescribeAICallExtractResultResponse) => void): Promise<DescribeAICallExtractResultResponse>;
    /**
     * 创建客户自携号码接入审核
     */
    CreateOwnNumberApply(req: CreateOwnNumberApplyRequest, cb?: (error: string, rep: CreateOwnNumberApplyResponse) => void): Promise<CreateOwnNumberApplyResponse>;
    /**
     * 获取用户购买信息列表
     */
    DescribeCCCBuyInfoList(req: DescribeCCCBuyInfoListRequest, cb?: (error: string, rep: DescribeCCCBuyInfoListResponse) => void): Promise<DescribeCCCBuyInfoListResponse>;
    /**
     * 恢复预测式外呼任务
     */
    ResumePredictiveDialingCampaign(req: ResumePredictiveDialingCampaignRequest, cb?: (error: string, rep: ResumePredictiveDialingCampaignResponse) => void): Promise<ResumePredictiveDialingCampaignResponse>;
    /**
     * 新建技能组
     */
    CreateCCCSkillGroup(req: CreateCCCSkillGroupRequest, cb?: (error: string, rep: CreateCCCSkillGroupResponse) => void): Promise<CreateCCCSkillGroupResponse>;
    /**
     * 解绑坐席所属技能组
     */
    UnbindStaffSkillGroupList(req: UnbindStaffSkillGroupListRequest, cb?: (error: string, rep: UnbindStaffSkillGroupListResponse) => void): Promise<UnbindStaffSkillGroupListResponse>;
    /**
     * 修改座席的密码
     */
    ModifyStaffPassword(req: ModifyStaffPasswordRequest, cb?: (error: string, rep: ModifyStaffPasswordResponse) => void): Promise<ModifyStaffPasswordResponse>;
    /**
     * 获取坐席信息列表
     */
    DescribeStaffInfoList(req: DescribeStaffInfoListRequest, cb?: (error: string, rep: DescribeStaffInfoListResponse) => void): Promise<DescribeStaffInfoListResponse>;
    /**
     * 查询预测式外呼任务
     */
    DescribePredictiveDialingCampaign(req: DescribePredictiveDialingCampaignRequest, cb?: (error: string, rep: DescribePredictiveDialingCampaignResponse) => void): Promise<DescribePredictiveDialingCampaignResponse>;
    /**
     * 获取坐席实时状态统计指标
     */
    DescribeStaffStatusMetrics(req: DescribeStaffStatusMetricsRequest, cb?: (error: string, rep: DescribeStaffStatusMetricsResponse) => void): Promise<DescribeStaffStatusMetricsResponse>;
    /**
     * 创建客服账号。
     */
    CreateStaff(req: CreateStaffRequest, cb?: (error: string, rep: CreateStaffResponse) => void): Promise<CreateStaffResponse>;
    /**
     * 创建关联 IVR 的会话，仅高级版支持，目前支持呼入和自动外呼两种 IVR 类型。收到请求后 TCCC 会先尝试呼通被叫，然后进入 IVR 流程。
     */
    CreateIVRSession(req: CreateIVRSessionRequest, cb?: (error: string, rep: CreateIVRSessionResponse) => void): Promise<CreateIVRSessionResponse>;
    /**
     * 创建自动外呼任务
     */
    CreateAutoCalloutTask(req: CreateAutoCalloutTaskRequest, cb?: (error: string, rep: CreateAutoCalloutTaskResponse) => void): Promise<CreateAutoCalloutTaskResponse>;
    /**
     * 修改话机账号(绑定技能组、绑定坐席账号)
     */
    ModifyExtension(req: ModifyExtensionRequest, cb?: (error: string, rep: ModifyExtensionResponse) => void): Promise<ModifyExtensionResponse>;
    /**
     * 更新技能组
     */
    UpdateCCCSkillGroup(req: UpdateCCCSkillGroupRequest, cb?: (error: string, rep: UpdateCCCSkillGroupResponse) => void): Promise<UpdateCCCSkillGroupResponse>;
    /**
     * 创建用户数据签名
     */
    CreateUserSig(req: CreateUserSigRequest, cb?: (error: string, rep: CreateUserSigResponse) => void): Promise<CreateUserSigResponse>;
    /**
     * 挂断电话
     */
    HangUpCall(req: HangUpCallRequest, cb?: (error: string, rep: HangUpCallResponse) => void): Promise<HangUpCallResponse>;
    /**
     * 暂停预测式外呼任务
     */
    PausePredictiveDialingCampaign(req: PausePredictiveDialingCampaignRequest, cb?: (error: string, rep: PausePredictiveDialingCampaignResponse) => void): Promise<PausePredictiveDialingCampaignResponse>;
    /**
     * 创建管理端访问链接
     */
    CreateAdminURL(req: CreateAdminURLRequest, cb?: (error: string, rep: CreateAdminURLResponse) => void): Promise<CreateAdminURLResponse>;
    /**
     * 获取主被叫受保护的电话服务记录与录音
     */
    DescribeProtectedTelCdr(req: DescribeProtectedTelCdrRequest, cb?: (error: string, rep: DescribeProtectedTelCdrResponse) => void): Promise<DescribeProtectedTelCdrResponse>;
    /**
     * 获取包括全媒体和文本会话两种类型的服务记录。
     */
    DescribeIMCdrList(req: DescribeIMCdrListRequest, cb?: (error: string, rep: DescribeIMCdrListResponse) => void): Promise<DescribeIMCdrListResponse>;
    /**
     * 获取呼入实时数据统计指标
     */
    DescribeCallInMetrics(req: DescribeCallInMetricsRequest, cb?: (error: string, rep: DescribeCallInMetricsResponse) => void): Promise<DescribeCallInMetricsResponse>;
    /**
     * 创建 SDK 登录 Token。
     */
    CreateSDKLoginToken(req: CreateSDKLoginTokenRequest, cb?: (error: string, rep: CreateSDKLoginTokenResponse) => void): Promise<CreateSDKLoginTokenResponse>;
    /**
     * 查询生效运营商白名单规则
     */
    DescribeActiveCarrierPrivilegeNumber(req: DescribeActiveCarrierPrivilegeNumberRequest, cb?: (error: string, rep: DescribeActiveCarrierPrivilegeNumberResponse) => void): Promise<DescribeActiveCarrierPrivilegeNumberResponse>;
    /**
     * 查询号码列表
     */
    DescribeNumbers(req: DescribeNumbersRequest, cb?: (error: string, rep: DescribeNumbersResponse) => void): Promise<DescribeNumbersResponse>;
    /**
     * 停止预测式外呼任务
     */
    AbortPredictiveDialingCampaign(req: AbortPredictiveDialingCampaignRequest, cb?: (error: string, rep: AbortPredictiveDialingCampaignResponse) => void): Promise<AbortPredictiveDialingCampaignResponse>;
    /**
     * 查询公司资质申请列表
     */
    DescribeCompanyList(req: DescribeCompanyListRequest, cb?: (error: string, rep: DescribeCompanyListResponse) => void): Promise<DescribeCompanyListResponse>;
    /**
     * 用于调用AI模型发起外呼通话，仅限自有电话号码使用，目前开通高级版座席**限时**免费体验。

发起通话前，请先确认您的AI模型是否兼容 OpenAI、Azure 或 Minimax 协议，并前往模型服务商网站获取相关鉴权信息。 具体功能说明请参考文档 [腾讯云联络中心AI通话平台](https://cloud.tencent.com/document/product/679/112100)。
     */
    CreateAIAgentCall(req: CreateAIAgentCallRequest, cb?: (error: string, rep: CreateAIAgentCallResponse) => void): Promise<CreateAIAgentCallResponse>;
    /**
     * 删除预测式外呼任务
     */
    DeletePredictiveDialingCampaign(req: DeletePredictiveDialingCampaignRequest, cb?: (error: string, rep: DeletePredictiveDialingCampaignResponse) => void): Promise<DeletePredictiveDialingCampaignResponse>;
    /**
     * 任务未启动前，更新预测式外呼任务。
     */
    UpdatePredictiveDialingCampaign(req: UpdatePredictiveDialingCampaignRequest, cb?: (error: string, rep: UpdatePredictiveDialingCampaignResponse) => void): Promise<UpdatePredictiveDialingCampaignResponse>;
}
