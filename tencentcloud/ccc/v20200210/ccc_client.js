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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const DescribeExtensionRequest = models.DescribeExtensionRequest;
const StopAutoCalloutTaskRequest = models.StopAutoCalloutTaskRequest;
const HangUpCallRequest = models.HangUpCallRequest;
const CreateSDKLoginTokenResponse = models.CreateSDKLoginTokenResponse;
const ModifyStaffRequest = models.ModifyStaffRequest;
const ResetExtensionPasswordRequest = models.ResetExtensionPasswordRequest;
const DisableCCCPhoneNumberResponse = models.DisableCCCPhoneNumberResponse;
const DescribeProtectedTelCdrResponse = models.DescribeProtectedTelCdrResponse;
const DescribeAutoCalloutTaskRequest = models.DescribeAutoCalloutTaskRequest;
const CreateUserSigResponse = models.CreateUserSigResponse;
const DescribeIMCdrsResponse = models.DescribeIMCdrsResponse;
const CreateCallOutSessionResponse = models.CreateCallOutSessionResponse;
const DescribeCarrierPrivilegeNumberApplicantsRequest = models.DescribeCarrierPrivilegeNumberApplicantsRequest;
const DisableCCCPhoneNumberRequest = models.DisableCCCPhoneNumberRequest;
const ServeParticipant = models.ServeParticipant;
const DescribeExtensionsResponse = models.DescribeExtensionsResponse;
const DeleteExtensionRequest = models.DeleteExtensionRequest;
const DescribeTelCallInfoResponse = models.DescribeTelCallInfoResponse;
const StaffStatusMetrics = models.StaffStatusMetrics;
const DescribeTelCdrRequest = models.DescribeTelCdrRequest;
const DescribeAutoCalloutTasksResponse = models.DescribeAutoCalloutTasksResponse;
const PackageBuyInfo = models.PackageBuyInfo;
const ModifyExtensionResponse = models.ModifyExtensionResponse;
const SeatUserInfo = models.SeatUserInfo;
const CreateStaffResponse = models.CreateStaffResponse;
const DescribeSkillGroupInfoListResponse = models.DescribeSkillGroupInfoListResponse;
const DescribeNumbersResponse = models.DescribeNumbersResponse;
const DescribeStaffInfoListResponse = models.DescribeStaffInfoListResponse;
const UnbindNumberCallOutSkillGroupRequest = models.UnbindNumberCallOutSkillGroupRequest;
const CreateCarrierPrivilegeNumberApplicantRequest = models.CreateCarrierPrivilegeNumberApplicantRequest;
const CallInSkillGroupMetrics = models.CallInSkillGroupMetrics;
const CreateExtensionResponse = models.CreateExtensionResponse;
const CreateUserSigRequest = models.CreateUserSigRequest;
const CreateCCCSkillGroupRequest = models.CreateCCCSkillGroupRequest;
const DescribeAutoCalloutTaskResponse = models.DescribeAutoCalloutTaskResponse;
const CreateCCCSkillGroupResponse = models.CreateCCCSkillGroupResponse;
const DescribeTelSessionRequest = models.DescribeTelSessionRequest;
const DescribeIMCdrsRequest = models.DescribeIMCdrsRequest;
const DescribeSkillGroupInfoListRequest = models.DescribeSkillGroupInfoListRequest;
const CreateCarrierPrivilegeNumberApplicantResponse = models.CreateCarrierPrivilegeNumberApplicantResponse;
const AutoCalloutTaskCalleeInfo = models.AutoCalloutTaskCalleeInfo;
const CarrierPrivilegeNumberApplicant = models.CarrierPrivilegeNumberApplicant;
const ErrStaffItem = models.ErrStaffItem;
const PSTNSession = models.PSTNSession;
const DescribeStaffInfoListRequest = models.DescribeStaffInfoListRequest;
const AutoCalloutTaskInfo = models.AutoCalloutTaskInfo;
const SkillGroupInfoItem = models.SkillGroupInfoItem;
const ResetExtensionPasswordResponse = models.ResetExtensionPasswordResponse;
const ModifyExtensionRequest = models.ModifyExtensionRequest;
const PSTNSessionInfo = models.PSTNSessionInfo;
const Message = models.Message;
const DescribeNumbersRequest = models.DescribeNumbersRequest;
const ExtensionInfo = models.ExtensionInfo;
const BindNumberCallOutSkillGroupRequest = models.BindNumberCallOutSkillGroupRequest;
const IVRKeyPressedElement = models.IVRKeyPressedElement;
const UnbindNumberCallOutSkillGroupResponse = models.UnbindNumberCallOutSkillGroupResponse;
const StaffInfo = models.StaffInfo;
const CreateAutoCalloutTaskResponse = models.CreateAutoCalloutTaskResponse;
const TelCdrInfo = models.TelCdrInfo;
const NumberInfo = models.NumberInfo;
const DeleteStaffRequest = models.DeleteStaffRequest;
const CallInMetrics = models.CallInMetrics;
const DescribeCCCBuyInfoListRequest = models.DescribeCCCBuyInfoListRequest;
const DescribeTelCallInfoRequest = models.DescribeTelCallInfoRequest;
const Variable = models.Variable;
const CallInNumberMetrics = models.CallInNumberMetrics;
const CreateExtensionRequest = models.CreateExtensionRequest;
const CreateAutoCalloutTaskRequest = models.CreateAutoCalloutTaskRequest;
const Filter = models.Filter;
const UnbindStaffSkillGroupListRequest = models.UnbindStaffSkillGroupListRequest;
const BindNumberCallOutSkillGroupResponse = models.BindNumberCallOutSkillGroupResponse;
const CreateCallOutSessionRequest = models.CreateCallOutSessionRequest;
const StopAutoCalloutTaskResponse = models.StopAutoCalloutTaskResponse;
const SkillGroupItem = models.SkillGroupItem;
const MessageBody = models.MessageBody;
const PhoneNumBuyInfo = models.PhoneNumBuyInfo;
const DescribeCCCBuyInfoListResponse = models.DescribeCCCBuyInfoListResponse;
const ActiveCarrierPrivilegeNumber = models.ActiveCarrierPrivilegeNumber;
const UnbindStaffSkillGroupListResponse = models.UnbindStaffSkillGroupListResponse;
const DeleteExtensionResponse = models.DeleteExtensionResponse;
const BindStaffSkillGroupListRequest = models.BindStaffSkillGroupListRequest;
const DescribePSTNActiveSessionListRequest = models.DescribePSTNActiveSessionListRequest;
const DescribeCallInMetricsResponse = models.DescribeCallInMetricsResponse;
const DescribeActiveCarrierPrivilegeNumberResponse = models.DescribeActiveCarrierPrivilegeNumberResponse;
const IMSatisfaction = models.IMSatisfaction;
const DescribeTelCdrResponse = models.DescribeTelCdrResponse;
const DescribeStaffStatusMetricsRequest = models.DescribeStaffStatusMetricsRequest;
const DeleteStaffResponse = models.DeleteStaffResponse;
const StaffStatusExtra = models.StaffStatusExtra;
const CreateStaffRequest = models.CreateStaffRequest;
const DescribeChatMessagesResponse = models.DescribeChatMessagesResponse;
const SdkAppIdBuyInfo = models.SdkAppIdBuyInfo;
const DescribePSTNActiveSessionListResponse = models.DescribePSTNActiveSessionListResponse;
const IMCdrInfo = models.IMCdrInfo;
const DescribeAutoCalloutTasksRequest = models.DescribeAutoCalloutTasksRequest;
const DescribeChatMessagesRequest = models.DescribeChatMessagesRequest;
const DescribeTelSessionResponse = models.DescribeTelSessionResponse;
const ModifyStaffResponse = models.ModifyStaffResponse;
const DescribeStaffStatusMetricsResponse = models.DescribeStaffStatusMetricsResponse;
const DescribeCarrierPrivilegeNumberApplicantsResponse = models.DescribeCarrierPrivilegeNumberApplicantsResponse;
const HangUpCallResponse = models.HangUpCallResponse;
const BindStaffSkillGroupListResponse = models.BindStaffSkillGroupListResponse;
const DescribeExtensionsRequest = models.DescribeExtensionsRequest;
const DescribeProtectedTelCdrRequest = models.DescribeProtectedTelCdrRequest;
const CreateSDKLoginTokenRequest = models.CreateSDKLoginTokenRequest;
const DescribeActiveCarrierPrivilegeNumberRequest = models.DescribeActiveCarrierPrivilegeNumberRequest;
const StaffBuyInfo = models.StaffBuyInfo;
const DescribeCallInMetricsRequest = models.DescribeCallInMetricsRequest;
const DescribeExtensionResponse = models.DescribeExtensionResponse;


/**
 * ccc client
 * @class
 */
class CccClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ccc.tencentcloudapi.com", "2020-02-10", credential, region, profile);
    }
    
    /**
     * 解绑号码外呼技能组
     * @param {UnbindNumberCallOutSkillGroupRequest} req
     * @param {function(string, UnbindNumberCallOutSkillGroupResponse):void} cb
     * @public
     */
    UnbindNumberCallOutSkillGroup(req, cb) {
        let resp = new UnbindNumberCallOutSkillGroupResponse();
        this.request("UnbindNumberCallOutSkillGroup", req, resp, cb);
    }

    /**
     * 查询话机列表信息
     * @param {DescribeExtensionsRequest} req
     * @param {function(string, DescribeExtensionsResponse):void} cb
     * @public
     */
    DescribeExtensions(req, cb) {
        let resp = new DescribeExtensionsResponse();
        this.request("DescribeExtensions", req, resp, cb);
    }

    /**
     * 创建话机账号
     * @param {CreateExtensionRequest} req
     * @param {function(string, CreateExtensionResponse):void} cb
     * @public
     */
    CreateExtension(req, cb) {
        let resp = new CreateExtensionResponse();
        this.request("CreateExtension", req, resp, cb);
    }

    /**
     * 获取坐席信息列表
     * @param {DescribeStaffInfoListRequest} req
     * @param {function(string, DescribeStaffInfoListResponse):void} cb
     * @public
     */
    DescribeStaffInfoList(req, cb) {
        let resp = new DescribeStaffInfoListResponse();
        this.request("DescribeStaffInfoList", req, resp, cb);
    }

    /**
     * 挂断电话
     * @param {HangUpCallRequest} req
     * @param {function(string, HangUpCallResponse):void} cb
     * @public
     */
    HangUpCall(req, cb) {
        let resp = new HangUpCallResponse();
        this.request("HangUpCall", req, resp, cb);
    }

    /**
     * 获取当前正在通话的会话列表
     * @param {DescribePSTNActiveSessionListRequest} req
     * @param {function(string, DescribePSTNActiveSessionListResponse):void} cb
     * @public
     */
    DescribePSTNActiveSessionList(req, cb) {
        let resp = new DescribePSTNActiveSessionListResponse();
        this.request("DescribePSTNActiveSessionList", req, resp, cb);
    }

    /**
     * 删除话机账号
     * @param {DeleteExtensionRequest} req
     * @param {function(string, DeleteExtensionResponse):void} cb
     * @public
     */
    DeleteExtension(req, cb) {
        let resp = new DeleteExtensionResponse();
        this.request("DeleteExtension", req, resp, cb);
    }

    /**
     * 绑定坐席所属技能组
     * @param {BindStaffSkillGroupListRequest} req
     * @param {function(string, BindStaffSkillGroupListResponse):void} cb
     * @public
     */
    BindStaffSkillGroupList(req, cb) {
        let resp = new BindStaffSkillGroupListResponse();
        this.request("BindStaffSkillGroupList", req, resp, cb);
    }

    /**
     * 绑定号码外呼技能组
     * @param {BindNumberCallOutSkillGroupRequest} req
     * @param {function(string, BindNumberCallOutSkillGroupResponse):void} cb
     * @public
     */
    BindNumberCallOutSkillGroup(req, cb) {
        let resp = new BindNumberCallOutSkillGroupResponse();
        this.request("BindNumberCallOutSkillGroup", req, resp, cb);
    }

    /**
     * 获取包括全媒体和文本会话两种类型的服务记录。
     * @param {DescribeIMCdrsRequest} req
     * @param {function(string, DescribeIMCdrsResponse):void} cb
     * @public
     */
    DescribeIMCdrs(req, cb) {
        let resp = new DescribeIMCdrsResponse();
        this.request("DescribeIMCdrs", req, resp, cb);
    }

    /**
     * 删除坐席信息
     * @param {DeleteStaffRequest} req
     * @param {function(string, DeleteStaffResponse):void} cb
     * @public
     */
    DeleteStaff(req, cb) {
        let resp = new DeleteStaffResponse();
        this.request("DeleteStaff", req, resp, cb);
    }

    /**
     * 修改客服账号
     * @param {ModifyStaffRequest} req
     * @param {function(string, ModifyStaffResponse):void} cb
     * @public
     */
    ModifyStaff(req, cb) {
        let resp = new ModifyStaffResponse();
        this.request("ModifyStaff", req, resp, cb);
    }

    /**
     * 批量查询自动任务外呼
     * @param {DescribeAutoCalloutTasksRequest} req
     * @param {function(string, DescribeAutoCalloutTasksResponse):void} cb
     * @public
     */
    DescribeAutoCalloutTasks(req, cb) {
        let resp = new DescribeAutoCalloutTasksResponse();
        this.request("DescribeAutoCalloutTasks", req, resp, cb);
    }

    /**
     * 重置话机注册密码
     * @param {ResetExtensionPasswordRequest} req
     * @param {function(string, ResetExtensionPasswordResponse):void} cb
     * @public
     */
    ResetExtensionPassword(req, cb) {
        let resp = new ResetExtensionPasswordResponse();
        this.request("ResetExtensionPassword", req, resp, cb);
    }

    /**
     * 按实例获取电话消耗统计
     * @param {DescribeTelCallInfoRequest} req
     * @param {function(string, DescribeTelCallInfoResponse):void} cb
     * @public
     */
    DescribeTelCallInfo(req, cb) {
        let resp = new DescribeTelCallInfoResponse();
        this.request("DescribeTelCallInfo", req, resp, cb);
    }

    /**
     * 获取话机信息
     * @param {DescribeExtensionRequest} req
     * @param {function(string, DescribeExtensionResponse):void} cb
     * @public
     */
    DescribeExtension(req, cb) {
        let resp = new DescribeExtensionResponse();
        this.request("DescribeExtension", req, resp, cb);
    }

    /**
     * 查询单状态
     * @param {DescribeCarrierPrivilegeNumberApplicantsRequest} req
     * @param {function(string, DescribeCarrierPrivilegeNumberApplicantsResponse):void} cb
     * @public
     */
    DescribeCarrierPrivilegeNumberApplicants(req, cb) {
        let resp = new DescribeCarrierPrivilegeNumberApplicantsResponse();
        this.request("DescribeCarrierPrivilegeNumberApplicants", req, resp, cb);
    }

    /**
     * 创建外呼会话，当前仅支持双呼，即先使用平台号码呼出到坐席手机上，坐席接听后，然后再外呼用户，而且由于运营商频率限制，坐席手机号必须先加白名单，避免频控导致外呼失败。
     * @param {CreateCallOutSessionRequest} req
     * @param {function(string, CreateCallOutSessionResponse):void} cb
     * @public
     */
    CreateCallOutSession(req, cb) {
        let resp = new CreateCallOutSessionResponse();
        this.request("CreateCallOutSession", req, resp, cb);
    }

    /**
     * 获取 PSTN 会话信息
     * @param {DescribeTelSessionRequest} req
     * @param {function(string, DescribeTelSessionResponse):void} cb
     * @public
     */
    DescribeTelSession(req, cb) {
        let resp = new DescribeTelSessionResponse();
        this.request("DescribeTelSession", req, resp, cb);
    }

    /**
     * 查询自动外呼任务详情
     * @param {DescribeAutoCalloutTaskRequest} req
     * @param {function(string, DescribeAutoCalloutTaskResponse):void} cb
     * @public
     */
    DescribeAutoCalloutTask(req, cb) {
        let resp = new DescribeAutoCalloutTaskResponse();
        this.request("DescribeAutoCalloutTask", req, resp, cb);
    }

    /**
     * 获取电话服务记录与录音
     * @param {DescribeTelCdrRequest} req
     * @param {function(string, DescribeTelCdrResponse):void} cb
     * @public
     */
    DescribeTelCdr(req, cb) {
        let resp = new DescribeTelCdrResponse();
        this.request("DescribeTelCdr", req, resp, cb);
    }

    /**
     * 获取技能组信息列表
     * @param {DescribeSkillGroupInfoListRequest} req
     * @param {function(string, DescribeSkillGroupInfoListResponse):void} cb
     * @public
     */
    DescribeSkillGroupInfoList(req, cb) {
        let resp = new DescribeSkillGroupInfoListResponse();
        this.request("DescribeSkillGroupInfoList", req, resp, cb);
    }

    /**
     * 停止自动外呼任务
     * @param {StopAutoCalloutTaskRequest} req
     * @param {function(string, StopAutoCalloutTaskResponse):void} cb
     * @public
     */
    StopAutoCalloutTask(req, cb) {
        let resp = new StopAutoCalloutTaskResponse();
        this.request("StopAutoCalloutTask", req, resp, cb);
    }

    /**
     * 用于无限频率地呼叫坐席手机
     * @param {CreateCarrierPrivilegeNumberApplicantRequest} req
     * @param {function(string, CreateCarrierPrivilegeNumberApplicantResponse):void} cb
     * @public
     */
    CreateCarrierPrivilegeNumberApplicant(req, cb) {
        let resp = new CreateCarrierPrivilegeNumberApplicantResponse();
        this.request("CreateCarrierPrivilegeNumberApplicant", req, resp, cb);
    }

    /**
     * 获取指定服务记录文本聊天内容，需要先使用查询在线客服记录（DescribeIMCdrs） API 获取服务记录 SessionId。

文本聊天记录只保存了 1 年内的，1 年之前会自动清理。
     * @param {DescribeChatMessagesRequest} req
     * @param {function(string, DescribeChatMessagesResponse):void} cb
     * @public
     */
    DescribeChatMessages(req, cb) {
        let resp = new DescribeChatMessagesResponse();
        this.request("DescribeChatMessages", req, resp, cb);
    }

    /**
     * 获取用户购买信息列表
     * @param {DescribeCCCBuyInfoListRequest} req
     * @param {function(string, DescribeCCCBuyInfoListResponse):void} cb
     * @public
     */
    DescribeCCCBuyInfoList(req, cb) {
        let resp = new DescribeCCCBuyInfoListResponse();
        this.request("DescribeCCCBuyInfoList", req, resp, cb);
    }

    /**
     * 创建技能组
     * @param {CreateCCCSkillGroupRequest} req
     * @param {function(string, CreateCCCSkillGroupResponse):void} cb
     * @public
     */
    CreateCCCSkillGroup(req, cb) {
        let resp = new CreateCCCSkillGroupResponse();
        this.request("CreateCCCSkillGroup", req, resp, cb);
    }

    /**
     * 解绑坐席所属技能组
     * @param {UnbindStaffSkillGroupListRequest} req
     * @param {function(string, UnbindStaffSkillGroupListResponse):void} cb
     * @public
     */
    UnbindStaffSkillGroupList(req, cb) {
        let resp = new UnbindStaffSkillGroupListResponse();
        this.request("UnbindStaffSkillGroupList", req, resp, cb);
    }

    /**
     * 停用号码
     * @param {DisableCCCPhoneNumberRequest} req
     * @param {function(string, DisableCCCPhoneNumberResponse):void} cb
     * @public
     */
    DisableCCCPhoneNumber(req, cb) {
        let resp = new DisableCCCPhoneNumberResponse();
        this.request("DisableCCCPhoneNumber", req, resp, cb);
    }

    /**
     * 获取坐席实时状态统计指标
     * @param {DescribeStaffStatusMetricsRequest} req
     * @param {function(string, DescribeStaffStatusMetricsResponse):void} cb
     * @public
     */
    DescribeStaffStatusMetrics(req, cb) {
        let resp = new DescribeStaffStatusMetricsResponse();
        this.request("DescribeStaffStatusMetrics", req, resp, cb);
    }

    /**
     * 创建客服账号。
     * @param {CreateStaffRequest} req
     * @param {function(string, CreateStaffResponse):void} cb
     * @public
     */
    CreateStaff(req, cb) {
        let resp = new CreateStaffResponse();
        this.request("CreateStaff", req, resp, cb);
    }

    /**
     * 创建自动外呼任务
     * @param {CreateAutoCalloutTaskRequest} req
     * @param {function(string, CreateAutoCalloutTaskResponse):void} cb
     * @public
     */
    CreateAutoCalloutTask(req, cb) {
        let resp = new CreateAutoCalloutTaskResponse();
        this.request("CreateAutoCalloutTask", req, resp, cb);
    }

    /**
     * 修改话机账号(绑定技能组、绑定坐席账号)
     * @param {ModifyExtensionRequest} req
     * @param {function(string, ModifyExtensionResponse):void} cb
     * @public
     */
    ModifyExtension(req, cb) {
        let resp = new ModifyExtensionResponse();
        this.request("ModifyExtension", req, resp, cb);
    }

    /**
     * 创建用户数据签名
     * @param {CreateUserSigRequest} req
     * @param {function(string, CreateUserSigResponse):void} cb
     * @public
     */
    CreateUserSig(req, cb) {
        let resp = new CreateUserSigResponse();
        this.request("CreateUserSig", req, resp, cb);
    }

    /**
     * 获取主被叫受保护的电话服务记录与录音
     * @param {DescribeProtectedTelCdrRequest} req
     * @param {function(string, DescribeProtectedTelCdrResponse):void} cb
     * @public
     */
    DescribeProtectedTelCdr(req, cb) {
        let resp = new DescribeProtectedTelCdrResponse();
        this.request("DescribeProtectedTelCdr", req, resp, cb);
    }

    /**
     * 获取呼入实时数据统计指标
     * @param {DescribeCallInMetricsRequest} req
     * @param {function(string, DescribeCallInMetricsResponse):void} cb
     * @public
     */
    DescribeCallInMetrics(req, cb) {
        let resp = new DescribeCallInMetricsResponse();
        this.request("DescribeCallInMetrics", req, resp, cb);
    }

    /**
     * 创建 SDK 登录 Token。
     * @param {CreateSDKLoginTokenRequest} req
     * @param {function(string, CreateSDKLoginTokenResponse):void} cb
     * @public
     */
    CreateSDKLoginToken(req, cb) {
        let resp = new CreateSDKLoginTokenResponse();
        this.request("CreateSDKLoginToken", req, resp, cb);
    }

    /**
     * 查询生效运营商白名单规则
     * @param {DescribeActiveCarrierPrivilegeNumberRequest} req
     * @param {function(string, DescribeActiveCarrierPrivilegeNumberResponse):void} cb
     * @public
     */
    DescribeActiveCarrierPrivilegeNumber(req, cb) {
        let resp = new DescribeActiveCarrierPrivilegeNumberResponse();
        this.request("DescribeActiveCarrierPrivilegeNumber", req, resp, cb);
    }

    /**
     * 查询号码列表
     * @param {DescribeNumbersRequest} req
     * @param {function(string, DescribeNumbersResponse):void} cb
     * @public
     */
    DescribeNumbers(req, cb) {
        let resp = new DescribeNumbersResponse();
        this.request("DescribeNumbers", req, resp, cb);
    }


}
module.exports = CccClient;
