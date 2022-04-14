"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
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
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * ccc client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("ccc.tencentcloudapi.com", "2020-02-10", clientConfig);
    }
    /**
     * 获取坐席信息列表
     */
    async DescribeStaffInfoList(req, cb) {
        return this.request("DescribeStaffInfoList", req, cb);
    }
    /**
     * 获取当前正在通话的会话列表
     */
    async DescribePSTNActiveSessionList(req, cb) {
        return this.request("DescribePSTNActiveSessionList", req, cb);
    }
    /**
     * 绑定坐席所属技能组
     */
    async BindStaffSkillGroupList(req, cb) {
        return this.request("BindStaffSkillGroupList", req, cb);
    }
    /**
     * 包括具体聊天内容
     */
    async DescribeChatMessages(req, cb) {
        return this.request("DescribeChatMessages", req, cb);
    }
    /**
     * 包括全媒体和文本两种类型
     */
    async DescribeIMCdrs(req, cb) {
        return this.request("DescribeIMCdrs", req, cb);
    }
    /**
     * 删除坐席信息
     */
    async DeleteStaff(req, cb) {
        return this.request("DeleteStaff", req, cb);
    }
    /**
     * 批量查询自动任务外呼
     */
    async DescribeAutoCalloutTasks(req, cb) {
        return this.request("DescribeAutoCalloutTasks", req, cb);
    }
    /**
     * 创建客服账号。
     */
    async CreateStaff(req, cb) {
        return this.request("CreateStaff", req, cb);
    }
    /**
     * 获取 PSTN 会话信息
     */
    async DescribeTelSession(req, cb) {
        return this.request("DescribeTelSession", req, cb);
    }
    /**
     * 创建外呼会话
     */
    async CreateCallOutSession(req, cb) {
        return this.request("CreateCallOutSession", req, cb);
    }
    /**
     * 查询自动外呼任务详情
     */
    async DescribeAutoCalloutTask(req, cb) {
        return this.request("DescribeAutoCalloutTask", req, cb);
    }
    /**
     * 获取电话服务记录与录音
     */
    async DescribeTelCdr(req, cb) {
        return this.request("DescribeTelCdr", req, cb);
    }
    /**
     * 获取技能组信息列表
     */
    async DescribeSkillGroupInfoList(req, cb) {
        return this.request("DescribeSkillGroupInfoList", req, cb);
    }
    /**
     * 停止自动外呼任务
     */
    async StopAutoCalloutTask(req, cb) {
        return this.request("StopAutoCalloutTask", req, cb);
    }
    /**
     * 获取用户购买信息列表
     */
    async DescribeCCCBuyInfoList(req, cb) {
        return this.request("DescribeCCCBuyInfoList", req, cb);
    }
    /**
     * 解绑坐席所属技能组
     */
    async UnbindStaffSkillGroupList(req, cb) {
        return this.request("UnbindStaffSkillGroupList", req, cb);
    }
    /**
     * 获取坐席实时状态统计指标
     */
    async DescribeStaffStatusMetrics(req, cb) {
        return this.request("DescribeStaffStatusMetrics", req, cb);
    }
    /**
     * 按实例获取电话消耗统计
     */
    async DescribeTelCallInfo(req, cb) {
        return this.request("DescribeTelCallInfo", req, cb);
    }
    /**
     * 创建自动外呼任务
     */
    async CreateAutoCalloutTask(req, cb) {
        return this.request("CreateAutoCalloutTask", req, cb);
    }
    /**
     * 创建用户数据签名
     */
    async CreateUserSig(req, cb) {
        return this.request("CreateUserSig", req, cb);
    }
    /**
     * 获取主被叫受保护的电话服务记录与录音
     */
    async DescribeProtectedTelCdr(req, cb) {
        return this.request("DescribeProtectedTelCdr", req, cb);
    }
    /**
     * 获取呼入实时数据统计指标
     */
    async DescribeCallInMetrics(req, cb) {
        return this.request("DescribeCallInMetrics", req, cb);
    }
    /**
     * 创建 SDK 登录 Token。
     */
    async CreateSDKLoginToken(req, cb) {
        return this.request("CreateSDKLoginToken", req, cb);
    }
    /**
     * 废弃接口下架

获取坐席用户列表（废弃）
     */
    async DescribeSeatUserList(req, cb) {
        return this.request("DescribeSeatUserList", req, cb);
    }
}
exports.Client = Client;
