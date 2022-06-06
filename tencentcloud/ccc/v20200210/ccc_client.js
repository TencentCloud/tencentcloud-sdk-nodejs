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
const StopAutoCalloutTaskRequest = models.StopAutoCalloutTaskRequest;
const BindStaffSkillGroupListRequest = models.BindStaffSkillGroupListRequest;
const DescribePSTNActiveSessionListRequest = models.DescribePSTNActiveSessionListRequest;
const IVRKeyPressedElement = models.IVRKeyPressedElement;
const CreateAutoCalloutTaskRequest = models.CreateAutoCalloutTaskRequest;
const CreateSDKLoginTokenResponse = models.CreateSDKLoginTokenResponse;
const DescribeCallInMetricsResponse = models.DescribeCallInMetricsResponse;
const CallInSkillGroupMetrics = models.CallInSkillGroupMetrics;
const DescribeStaffInfoListResponse = models.DescribeStaffInfoListResponse;
const CreateAutoCalloutTaskResponse = models.CreateAutoCalloutTaskResponse;
const TelCdrInfo = models.TelCdrInfo;
const CreateUserSigRequest = models.CreateUserSigRequest;
const PhoneNumBuyInfo = models.PhoneNumBuyInfo;
const UnbindStaffSkillGroupListRequest = models.UnbindStaffSkillGroupListRequest;
const DescribeIMCdrsRequest = models.DescribeIMCdrsRequest;
const DescribeAutoCalloutTaskResponse = models.DescribeAutoCalloutTaskResponse;
const DescribeStaffStatusMetricsRequest = models.DescribeStaffStatusMetricsRequest;
const DescribeAutoCalloutTaskRequest = models.DescribeAutoCalloutTaskRequest;
const SkillGroupItem = models.SkillGroupItem;
const CreateUserSigResponse = models.CreateUserSigResponse;
const DeleteStaffRequest = models.DeleteStaffRequest;
const DescribeTelSessionRequest = models.DescribeTelSessionRequest;
const CallInMetrics = models.CallInMetrics;
const DescribeCCCBuyInfoListRequest = models.DescribeCCCBuyInfoListRequest;
const DeleteStaffResponse = models.DeleteStaffResponse;
const ErrStaffItem = models.ErrStaffItem;
const StaffStatusExtra = models.StaffStatusExtra;
const DescribeSkillGroupInfoListRequest = models.DescribeSkillGroupInfoListRequest;
const CreateStaffRequest = models.CreateStaffRequest;
const DescribeChatMessagesResponse = models.DescribeChatMessagesResponse;
const SdkAppIdBuyInfo = models.SdkAppIdBuyInfo;
const CallInNumberMetrics = models.CallInNumberMetrics;
const AutoCalloutTaskCalleeInfo = models.AutoCalloutTaskCalleeInfo;
const DescribePSTNActiveSessionListResponse = models.DescribePSTNActiveSessionListResponse;
const CreateCallOutSessionResponse = models.CreateCallOutSessionResponse;
const IMCdrInfo = models.IMCdrInfo;
const StaffBuyInfo = models.StaffBuyInfo;
const DescribeProtectedTelCdrResponse = models.DescribeProtectedTelCdrResponse;
const DescribeAutoCalloutTasksRequest = models.DescribeAutoCalloutTasksRequest;
const DescribeChatMessagesRequest = models.DescribeChatMessagesRequest;
const PSTNSession = models.PSTNSession;
const DescribeTelSessionResponse = models.DescribeTelSessionResponse;
const DescribeStaffInfoListRequest = models.DescribeStaffInfoListRequest;
const AutoCalloutTaskInfo = models.AutoCalloutTaskInfo;
const StaffInfo = models.StaffInfo;
const PSTNSessionInfo = models.PSTNSessionInfo;
const ServeParticipant = models.ServeParticipant;
const DescribeTelCdrResponse = models.DescribeTelCdrResponse;
const DescribeStaffStatusMetricsResponse = models.DescribeStaffStatusMetricsResponse;
const DescribeTelCallInfoResponse = models.DescribeTelCallInfoResponse;
const SkillGroupInfoItem = models.SkillGroupInfoItem;
const StopAutoCalloutTaskResponse = models.StopAutoCalloutTaskResponse;
const DescribeSeatUserListResponse = models.DescribeSeatUserListResponse;
const DescribeSeatUserListRequest = models.DescribeSeatUserListRequest;
const CreateCallOutSessionRequest = models.CreateCallOutSessionRequest;
const StaffStatusMetrics = models.StaffStatusMetrics;
const BindStaffSkillGroupListResponse = models.BindStaffSkillGroupListResponse;
const DescribeAutoCalloutTasksResponse = models.DescribeAutoCalloutTasksResponse;
const PackageBuyInfo = models.PackageBuyInfo;
const DescribeTelCdrRequest = models.DescribeTelCdrRequest;
const DescribeProtectedTelCdrRequest = models.DescribeProtectedTelCdrRequest;
const MessageBody = models.MessageBody;
const CreateSDKLoginTokenRequest = models.CreateSDKLoginTokenRequest;
const DescribeTelCallInfoRequest = models.DescribeTelCallInfoRequest;
const DescribeCCCBuyInfoListResponse = models.DescribeCCCBuyInfoListResponse;
const UnbindStaffSkillGroupListResponse = models.UnbindStaffSkillGroupListResponse;
const SeatUserInfo = models.SeatUserInfo;
const DescribeCallInMetricsRequest = models.DescribeCallInMetricsRequest;
const CreateStaffResponse = models.CreateStaffResponse;
const Message = models.Message;
const DescribeSkillGroupInfoListResponse = models.DescribeSkillGroupInfoListResponse;
const DescribeIMCdrsResponse = models.DescribeIMCdrsResponse;


/**
 * ccc client
 * @class
 */
class CccClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ccc.tencentcloudapi.com", "2020-02-10", credential, region, profile);
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
     * 包括具体聊天内容
     * @param {DescribeChatMessagesRequest} req
     * @param {function(string, DescribeChatMessagesResponse):void} cb
     * @public
     */
    DescribeChatMessages(req, cb) {
        let resp = new DescribeChatMessagesResponse();
        this.request("DescribeChatMessages", req, resp, cb);
    }

    /**
     * 包括全媒体和文本两种类型
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
     * 废弃接口下架

获取坐席用户列表（废弃）
     * @param {DescribeSeatUserListRequest} req
     * @param {function(string, DescribeSeatUserListResponse):void} cb
     * @public
     */
    DescribeSeatUserList(req, cb) {
        let resp = new DescribeSeatUserListResponse();
        this.request("DescribeSeatUserList", req, resp, cb);
    }


}
module.exports = CccClient;
