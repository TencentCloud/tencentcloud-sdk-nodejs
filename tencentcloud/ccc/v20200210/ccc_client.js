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
const DescribeTelCdrRequest = models.DescribeTelCdrRequest;
const DescribeTelCdrResponse = models.DescribeTelCdrResponse;
const DescribeIMCdrsResponse = models.DescribeIMCdrsResponse;
const DescribeChatMessagesRequest = models.DescribeChatMessagesRequest;
const CreateSDKLoginTokenResponse = models.CreateSDKLoginTokenResponse;
const DescribeIMCdrsRequest = models.DescribeIMCdrsRequest;
const MessageBody = models.MessageBody;
const CreateSDKLoginTokenRequest = models.CreateSDKLoginTokenRequest;
const CreateStaffResponse = models.CreateStaffResponse;
const TelCdrInfo = models.TelCdrInfo;
const SeatUserInfo = models.SeatUserInfo;
const CreateStaffRequest = models.CreateStaffRequest;
const DescribeChatMessagesResponse = models.DescribeChatMessagesResponse;
const Message = models.Message;
const IMCdrInfo = models.IMCdrInfo;


/**
 * ccc client
 * @class
 */
class CccClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ccc.tencentcloudapi.com", "2020-02-10", credential, region, profile);
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
     * 创建客服账号。
     * @param {CreateStaffRequest} req
     * @param {function(string, CreateStaffResponse):void} cb
     * @public
     */
    CreateStaff(req, cb) {
        let resp = new CreateStaffResponse();
        this.request("CreateStaff", req, resp, cb);
    }


}
module.exports = CccClient;
