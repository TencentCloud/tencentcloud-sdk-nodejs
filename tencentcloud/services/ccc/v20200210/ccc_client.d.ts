import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeExtensionRequest, StopAutoCalloutTaskRequest, HangUpCallRequest, CreateSDKLoginTokenResponse, ModifyStaffRequest, ResetExtensionPasswordRequest, DisableCCCPhoneNumberResponse, DescribeProtectedTelCdrResponse, DescribeAutoCalloutTaskRequest, CreateUserSigResponse, DescribeIMCdrsResponse, CreateCallOutSessionResponse, DescribeCarrierPrivilegeNumberApplicantsRequest, DisableCCCPhoneNumberRequest, DescribeExtensionsResponse, DeleteExtensionRequest, DescribeTelCallInfoResponse, DescribeTelCdrRequest, DescribeAutoCalloutTasksResponse, ModifyExtensionResponse, CreateStaffResponse, DescribeSkillGroupInfoListResponse, DescribeNumbersResponse, DescribeStaffInfoListResponse, UnbindNumberCallOutSkillGroupRequest, CreateCarrierPrivilegeNumberApplicantRequest, CreateExtensionResponse, CreateUserSigRequest, CreateCCCSkillGroupRequest, DescribeAutoCalloutTaskResponse, CreateCCCSkillGroupResponse, DescribeTelSessionRequest, DescribeIMCdrsRequest, DescribeSkillGroupInfoListRequest, CreateCarrierPrivilegeNumberApplicantResponse, DescribeStaffInfoListRequest, ResetExtensionPasswordResponse, ModifyExtensionRequest, DescribeNumbersRequest, BindNumberCallOutSkillGroupRequest, UnbindNumberCallOutSkillGroupResponse, CreateAutoCalloutTaskResponse, DeleteStaffRequest, DescribeCCCBuyInfoListRequest, DescribeTelCallInfoRequest, CreateExtensionRequest, CreateAutoCalloutTaskRequest, UnbindStaffSkillGroupListRequest, BindNumberCallOutSkillGroupResponse, CreateCallOutSessionRequest, StopAutoCalloutTaskResponse, DescribeCCCBuyInfoListResponse, UnbindStaffSkillGroupListResponse, DeleteExtensionResponse, BindStaffSkillGroupListRequest, DescribePSTNActiveSessionListRequest, DescribeCallInMetricsResponse, DescribeActiveCarrierPrivilegeNumberResponse, DescribeTelCdrResponse, DescribeStaffStatusMetricsRequest, DeleteStaffResponse, CreateStaffRequest, DescribeChatMessagesResponse, DescribePSTNActiveSessionListResponse, DescribeAutoCalloutTasksRequest, DescribeChatMessagesRequest, DescribeTelSessionResponse, ModifyStaffResponse, DescribeStaffStatusMetricsResponse, DescribeCarrierPrivilegeNumberApplicantsResponse, HangUpCallResponse, BindStaffSkillGroupListResponse, DescribeExtensionsRequest, DescribeProtectedTelCdrRequest, CreateSDKLoginTokenRequest, DescribeActiveCarrierPrivilegeNumberRequest, DescribeCallInMetricsRequest, DescribeExtensionResponse } from "./ccc_models";
/**
 * ccc client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 解绑号码外呼技能组
     */
    UnbindNumberCallOutSkillGroup(req: UnbindNumberCallOutSkillGroupRequest, cb?: (error: string, rep: UnbindNumberCallOutSkillGroupResponse) => void): Promise<UnbindNumberCallOutSkillGroupResponse>;
    /**
     * 查询话机列表信息
     */
    DescribeExtensions(req: DescribeExtensionsRequest, cb?: (error: string, rep: DescribeExtensionsResponse) => void): Promise<DescribeExtensionsResponse>;
    /**
     * 创建话机账号
     */
    CreateExtension(req: CreateExtensionRequest, cb?: (error: string, rep: CreateExtensionResponse) => void): Promise<CreateExtensionResponse>;
    /**
     * 获取坐席信息列表
     */
    DescribeStaffInfoList(req: DescribeStaffInfoListRequest, cb?: (error: string, rep: DescribeStaffInfoListResponse) => void): Promise<DescribeStaffInfoListResponse>;
    /**
     * 挂断电话
     */
    HangUpCall(req: HangUpCallRequest, cb?: (error: string, rep: HangUpCallResponse) => void): Promise<HangUpCallResponse>;
    /**
     * 获取当前正在通话的会话列表
     */
    DescribePSTNActiveSessionList(req: DescribePSTNActiveSessionListRequest, cb?: (error: string, rep: DescribePSTNActiveSessionListResponse) => void): Promise<DescribePSTNActiveSessionListResponse>;
    /**
     * 删除话机账号
     */
    DeleteExtension(req: DeleteExtensionRequest, cb?: (error: string, rep: DeleteExtensionResponse) => void): Promise<DeleteExtensionResponse>;
    /**
     * 绑定坐席所属技能组
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
     * 删除坐席信息
     */
    DeleteStaff(req: DeleteStaffRequest, cb?: (error: string, rep: DeleteStaffResponse) => void): Promise<DeleteStaffResponse>;
    /**
     * 修改客服账号
     */
    ModifyStaff(req: ModifyStaffRequest, cb?: (error: string, rep: ModifyStaffResponse) => void): Promise<ModifyStaffResponse>;
    /**
     * 批量查询自动任务外呼
     */
    DescribeAutoCalloutTasks(req: DescribeAutoCalloutTasksRequest, cb?: (error: string, rep: DescribeAutoCalloutTasksResponse) => void): Promise<DescribeAutoCalloutTasksResponse>;
    /**
     * 重置话机注册密码
     */
    ResetExtensionPassword(req: ResetExtensionPasswordRequest, cb?: (error: string, rep: ResetExtensionPasswordResponse) => void): Promise<ResetExtensionPasswordResponse>;
    /**
     * 按实例获取电话消耗统计
     */
    DescribeTelCallInfo(req: DescribeTelCallInfoRequest, cb?: (error: string, rep: DescribeTelCallInfoResponse) => void): Promise<DescribeTelCallInfoResponse>;
    /**
     * 获取话机信息
     */
    DescribeExtension(req: DescribeExtensionRequest, cb?: (error: string, rep: DescribeExtensionResponse) => void): Promise<DescribeExtensionResponse>;
    /**
     * 查询单状态
     */
    DescribeCarrierPrivilegeNumberApplicants(req: DescribeCarrierPrivilegeNumberApplicantsRequest, cb?: (error: string, rep: DescribeCarrierPrivilegeNumberApplicantsResponse) => void): Promise<DescribeCarrierPrivilegeNumberApplicantsResponse>;
    /**
     * 创建外呼会话，当前仅支持双呼，即先使用平台号码呼出到坐席手机上，坐席接听后，然后再外呼用户，而且由于运营商频率限制，坐席手机号必须先加白名单，避免频控导致外呼失败。
     */
    CreateCallOutSession(req: CreateCallOutSessionRequest, cb?: (error: string, rep: CreateCallOutSessionResponse) => void): Promise<CreateCallOutSessionResponse>;
    /**
     * 获取 PSTN 会话信息
     */
    DescribeTelSession(req: DescribeTelSessionRequest, cb?: (error: string, rep: DescribeTelSessionResponse) => void): Promise<DescribeTelSessionResponse>;
    /**
     * 查询自动外呼任务详情
     */
    DescribeAutoCalloutTask(req: DescribeAutoCalloutTaskRequest, cb?: (error: string, rep: DescribeAutoCalloutTaskResponse) => void): Promise<DescribeAutoCalloutTaskResponse>;
    /**
     * 获取电话服务记录与录音
     */
    DescribeTelCdr(req: DescribeTelCdrRequest, cb?: (error: string, rep: DescribeTelCdrResponse) => void): Promise<DescribeTelCdrResponse>;
    /**
     * 获取技能组信息列表
     */
    DescribeSkillGroupInfoList(req: DescribeSkillGroupInfoListRequest, cb?: (error: string, rep: DescribeSkillGroupInfoListResponse) => void): Promise<DescribeSkillGroupInfoListResponse>;
    /**
     * 停止自动外呼任务
     */
    StopAutoCalloutTask(req: StopAutoCalloutTaskRequest, cb?: (error: string, rep: StopAutoCalloutTaskResponse) => void): Promise<StopAutoCalloutTaskResponse>;
    /**
     * 用于无限频率地呼叫坐席手机
     */
    CreateCarrierPrivilegeNumberApplicant(req: CreateCarrierPrivilegeNumberApplicantRequest, cb?: (error: string, rep: CreateCarrierPrivilegeNumberApplicantResponse) => void): Promise<CreateCarrierPrivilegeNumberApplicantResponse>;
    /**
     * 获取指定服务记录文本聊天内容，需要先使用查询在线客服记录（DescribeIMCdrs） API 获取服务记录 SessionId。

文本聊天记录只保存了 1 年内的，1 年之前会自动清理。
     */
    DescribeChatMessages(req: DescribeChatMessagesRequest, cb?: (error: string, rep: DescribeChatMessagesResponse) => void): Promise<DescribeChatMessagesResponse>;
    /**
     * 获取用户购买信息列表
     */
    DescribeCCCBuyInfoList(req: DescribeCCCBuyInfoListRequest, cb?: (error: string, rep: DescribeCCCBuyInfoListResponse) => void): Promise<DescribeCCCBuyInfoListResponse>;
    /**
     * 创建技能组
     */
    CreateCCCSkillGroup(req: CreateCCCSkillGroupRequest, cb?: (error: string, rep: CreateCCCSkillGroupResponse) => void): Promise<CreateCCCSkillGroupResponse>;
    /**
     * 解绑坐席所属技能组
     */
    UnbindStaffSkillGroupList(req: UnbindStaffSkillGroupListRequest, cb?: (error: string, rep: UnbindStaffSkillGroupListResponse) => void): Promise<UnbindStaffSkillGroupListResponse>;
    /**
     * 停用号码
     */
    DisableCCCPhoneNumber(req: DisableCCCPhoneNumberRequest, cb?: (error: string, rep: DisableCCCPhoneNumberResponse) => void): Promise<DisableCCCPhoneNumberResponse>;
    /**
     * 获取坐席实时状态统计指标
     */
    DescribeStaffStatusMetrics(req: DescribeStaffStatusMetricsRequest, cb?: (error: string, rep: DescribeStaffStatusMetricsResponse) => void): Promise<DescribeStaffStatusMetricsResponse>;
    /**
     * 创建客服账号。
     */
    CreateStaff(req: CreateStaffRequest, cb?: (error: string, rep: CreateStaffResponse) => void): Promise<CreateStaffResponse>;
    /**
     * 创建自动外呼任务
     */
    CreateAutoCalloutTask(req: CreateAutoCalloutTaskRequest, cb?: (error: string, rep: CreateAutoCalloutTaskResponse) => void): Promise<CreateAutoCalloutTaskResponse>;
    /**
     * 修改话机账号(绑定技能组、绑定坐席账号)
     */
    ModifyExtension(req: ModifyExtensionRequest, cb?: (error: string, rep: ModifyExtensionResponse) => void): Promise<ModifyExtensionResponse>;
    /**
     * 创建用户数据签名
     */
    CreateUserSig(req: CreateUserSigRequest, cb?: (error: string, rep: CreateUserSigResponse) => void): Promise<CreateUserSigResponse>;
    /**
     * 获取主被叫受保护的电话服务记录与录音
     */
    DescribeProtectedTelCdr(req: DescribeProtectedTelCdrRequest, cb?: (error: string, rep: DescribeProtectedTelCdrResponse) => void): Promise<DescribeProtectedTelCdrResponse>;
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
}
