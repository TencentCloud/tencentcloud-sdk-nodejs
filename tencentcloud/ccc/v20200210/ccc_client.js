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
const DescribePSTNActiveSessionListRequest = models.DescribePSTNActiveSessionListRequest;
const IVRKeyPressedElement = models.IVRKeyPressedElement;
const CreateSDKLoginTokenResponse = models.CreateSDKLoginTokenResponse;
const DescribeStaffInfoListResponse = models.DescribeStaffInfoListResponse;
const CreateStaffResponse = models.CreateStaffResponse;
const DescribeTelCdrResponse = models.DescribeTelCdrResponse;
const DescribeIMCdrsResponse = models.DescribeIMCdrsResponse;
const DescribeTelSessionRequest = models.DescribeTelSessionRequest;
const DescribeIMCdrsRequest = models.DescribeIMCdrsRequest;
const TelCdrInfo = models.TelCdrInfo;
const StaffInfo = models.StaffInfo;
const DescribeSkillGroupInfoListRequest = models.DescribeSkillGroupInfoListRequest;
const DescribeTelCallInfoRequest = models.DescribeTelCallInfoRequest;
const DescribeChatMessagesResponse = models.DescribeChatMessagesResponse;
const DescribePSTNActiveSessionListResponse = models.DescribePSTNActiveSessionListResponse;
const IMCdrInfo = models.IMCdrInfo;
const DescribeChatMessagesRequest = models.DescribeChatMessagesRequest;
const PSTNSession = models.PSTNSession;
const DescribeTelSessionResponse = models.DescribeTelSessionResponse;
const DescribeStaffInfoListRequest = models.DescribeStaffInfoListRequest;
const SkillGroupInfoItem = models.SkillGroupInfoItem;
const ServeParticipant = models.ServeParticipant;
const DescribeSeatUserListResponse = models.DescribeSeatUserListResponse;
const DescribeSeatUserListRequest = models.DescribeSeatUserListRequest;
const DescribeTelCallInfoResponse = models.DescribeTelCallInfoResponse;
const CreateStaffRequest = models.CreateStaffRequest;
const DescribeTelCdrRequest = models.DescribeTelCdrRequest;
const SkillGroupItem = models.SkillGroupItem;
const MessageBody = models.MessageBody;
const CreateSDKLoginTokenRequest = models.CreateSDKLoginTokenRequest;
const SeatUserInfo = models.SeatUserInfo;
const PSTNSessionInfo = models.PSTNSessionInfo;
const Message = models.Message;
const DescribeSkillGroupInfoListResponse = models.DescribeSkillGroupInfoListResponse;


/**
 * ccc client
 * @class
 */
class CccClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ccc.tencentcloudapi.com", "2020-02-10", credential, region, profile);
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
     * 获取坐席用户列表（废弃）
     * @param {DescribeSeatUserListRequest} req
     * @param {function(string, DescribeSeatUserListResponse):void} cb
     * @public
     */
    DescribeSeatUserList(req, cb) {
        let resp = new DescribeSeatUserListResponse();
        this.request("DescribeSeatUserList", req, resp, cb);
    }

    /**
     * 获取 PSTN 活动会话列表。
     * @param {DescribePSTNActiveSessionListRequest} req
     * @param {function(string, DescribePSTNActiveSessionListResponse):void} cb
     * @public
     */
    DescribePSTNActiveSessionList(req, cb) {
        let resp = new DescribePSTNActiveSessionListResponse();
        this.request("DescribePSTNActiveSessionList", req, resp, cb);
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
     * 获取电话服务记录与录音
     * @param {DescribeTelCdrRequest} req
     * @param {function(string, DescribeTelCdrResponse):void} cb
     * @public
     */
    DescribeTelCdr(req, cb) {
        let resp = new DescribeTelCdrResponse();
        this.request("DescribeTelCdr", req, resp, cb);
    }


}
module.exports = CccClient;
