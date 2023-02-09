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
     * 解绑号码外呼技能组
     */
    async UnbindNumberCallOutSkillGroup(req, cb) {
        return this.request("UnbindNumberCallOutSkillGroup", req, cb);
    }
    /**
     * 查询话机列表信息
     */
    async DescribeExtensions(req, cb) {
        return this.request("DescribeExtensions", req, cb);
    }
    /**
     * 创建话机账号
     */
    async CreateExtension(req, cb) {
        return this.request("CreateExtension", req, cb);
    }
    /**
     * 获取坐席信息列表
     */
    async DescribeStaffInfoList(req, cb) {
        return this.request("DescribeStaffInfoList", req, cb);
    }
    /**
     * 挂断电话
     */
    async HangUpCall(req, cb) {
        return this.request("HangUpCall", req, cb);
    }
    /**
     * 获取当前正在通话的会话列表
     */
    async DescribePSTNActiveSessionList(req, cb) {
        return this.request("DescribePSTNActiveSessionList", req, cb);
    }
    /**
     * 删除话机账号
     */
    async DeleteExtension(req, cb) {
        return this.request("DeleteExtension", req, cb);
    }
    /**
     * 绑定坐席所属技能组
     */
    async BindStaffSkillGroupList(req, cb) {
        return this.request("BindStaffSkillGroupList", req, cb);
    }
    /**
     * 绑定号码外呼技能组
     */
    async BindNumberCallOutSkillGroup(req, cb) {
        return this.request("BindNumberCallOutSkillGroup", req, cb);
    }
    /**
     * 获取包括全媒体和文本会话两种类型的服务记录。
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
     * 修改客服账号
     */
    async ModifyStaff(req, cb) {
        return this.request("ModifyStaff", req, cb);
    }
    /**
     * 批量查询自动任务外呼
     */
    async DescribeAutoCalloutTasks(req, cb) {
        return this.request("DescribeAutoCalloutTasks", req, cb);
    }
    /**
     * 重置话机注册密码
     */
    async ResetExtensionPassword(req, cb) {
        return this.request("ResetExtensionPassword", req, cb);
    }
    /**
     * 按实例获取电话消耗统计
     */
    async DescribeTelCallInfo(req, cb) {
        return this.request("DescribeTelCallInfo", req, cb);
    }
    /**
     * 获取话机信息
     */
    async DescribeExtension(req, cb) {
        return this.request("DescribeExtension", req, cb);
    }
    /**
     * 查询单状态
     */
    async DescribeCarrierPrivilegeNumberApplicants(req, cb) {
        return this.request("DescribeCarrierPrivilegeNumberApplicants", req, cb);
    }
    /**
     * 创建外呼会话，当前仅支持双呼，即先使用平台号码呼出到坐席手机上，坐席接听后，然后再外呼用户，而且由于运营商频率限制，坐席手机号必须先加白名单，避免频控导致外呼失败。
     */
    async CreateCallOutSession(req, cb) {
        return this.request("CreateCallOutSession", req, cb);
    }
    /**
     * 获取 PSTN 会话信息
     */
    async DescribeTelSession(req, cb) {
        return this.request("DescribeTelSession", req, cb);
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
     * 用于无限频率地呼叫坐席手机
     */
    async CreateCarrierPrivilegeNumberApplicant(req, cb) {
        return this.request("CreateCarrierPrivilegeNumberApplicant", req, cb);
    }
    /**
     * 获取指定服务记录文本聊天内容，需要先使用查询在线客服记录（DescribeIMCdrs） API 获取服务记录 SessionId。

文本聊天记录只保存了 1 年内的，1 年之前会自动清理。
     */
    async DescribeChatMessages(req, cb) {
        return this.request("DescribeChatMessages", req, cb);
    }
    /**
     * 获取用户购买信息列表
     */
    async DescribeCCCBuyInfoList(req, cb) {
        return this.request("DescribeCCCBuyInfoList", req, cb);
    }
    /**
     * 创建技能组
     */
    async CreateCCCSkillGroup(req, cb) {
        return this.request("CreateCCCSkillGroup", req, cb);
    }
    /**
     * 解绑坐席所属技能组
     */
    async UnbindStaffSkillGroupList(req, cb) {
        return this.request("UnbindStaffSkillGroupList", req, cb);
    }
    /**
     * 停用号码
     */
    async DisableCCCPhoneNumber(req, cb) {
        return this.request("DisableCCCPhoneNumber", req, cb);
    }
    /**
     * 获取坐席实时状态统计指标
     */
    async DescribeStaffStatusMetrics(req, cb) {
        return this.request("DescribeStaffStatusMetrics", req, cb);
    }
    /**
     * 创建客服账号。
     */
    async CreateStaff(req, cb) {
        return this.request("CreateStaff", req, cb);
    }
    /**
     * 创建自动外呼任务
     */
    async CreateAutoCalloutTask(req, cb) {
        return this.request("CreateAutoCalloutTask", req, cb);
    }
    /**
     * 修改话机账号(绑定技能组、绑定坐席账号)
     */
    async ModifyExtension(req, cb) {
        return this.request("ModifyExtension", req, cb);
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
     * 查询生效运营商白名单规则
     */
    async DescribeActiveCarrierPrivilegeNumber(req, cb) {
        return this.request("DescribeActiveCarrierPrivilegeNumber", req, cb);
    }
    /**
     * 查询号码列表
     */
    async DescribeNumbers(req, cb) {
        return this.request("DescribeNumbers", req, cb);
    }
}
exports.Client = Client;
