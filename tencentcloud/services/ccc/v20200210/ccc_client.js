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
     * 修改客服账号
     */
    async ModifyStaff(req, cb) {
        return this.request("ModifyStaff", req, cb);
    }
    /**
     * 查询话机列表信息
     */
    async DescribeExtensions(req, cb) {
        return this.request("DescribeExtensions", req, cb);
    }
    /**
     * 批量查询自动外呼任务
     */
    async DescribeAutoCalloutTasks(req, cb) {
        return this.request("DescribeAutoCalloutTasks", req, cb);
    }
    /**
     * 获取坐席信息列表
     */
    async DescribeStaffInfoList(req, cb) {
        return this.request("DescribeStaffInfoList", req, cb);
    }
    /**
     * 停用号码
     */
    async DisableCCCPhoneNumber(req, cb) {
        return this.request("DisableCCCPhoneNumber", req, cb);
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
     * 绑定座席所属技能组
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
     * 查询IVR音频文件列表信息
     */
    async DescribeIvrAudioList(req, cb) {
        return this.request("DescribeIvrAudioList", req, cb);
    }
    /**
     * 删除坐席信息
     */
    async DeleteStaff(req, cb) {
        return this.request("DeleteStaff", req, cb);
    }
    /**
     * 修改公司资质申请，只能修改状态为驳回或待审核的申请单。（1、首次使用接口，建议先在云联络中心控制台查看各个资料模板:https://console.cloud.tencent.com/ccc/enterprise/update。2、参数中图片Url建议使用腾讯云Cos存储的临时链接）
     */
    async ModifyCompanyApply(req, cb) {
        return this.request("ModifyCompanyApply", req, cb);
    }
    /**
     * 创建话机账号
     */
    async CreateExtension(req, cb) {
        return this.request("CreateExtension", req, cb);
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
     * 获取 PSTN 会话信息
     */
    async DescribeTelSession(req, cb) {
        return this.request("DescribeTelSession", req, cb);
    }
    /**
     * 创建外呼会话，当前仅支持双呼，即先使用平台号码呼出到坐席手机上，坐席接听后，然后再外呼用户，而且由于运营商频率限制，坐席手机号必须先加白名单，避免频控导致外呼失败。
     */
    async CreateCallOutSession(req, cb) {
        return this.request("CreateCallOutSession", req, cb);
    }
    /**
     * 查询预测式外呼任务列表
     */
    async DescribePredictiveDialingCampaigns(req, cb) {
        return this.request("DescribePredictiveDialingCampaigns", req, cb);
    }
    /**
     * 查询自动外呼任务详情
     */
    async DescribeAutoCalloutTask(req, cb) {
        return this.request("DescribeAutoCalloutTask", req, cb);
    }
    /**
     * 查询预测式外呼呼叫列表
     */
    async DescribePredictiveDialingSessions(req, cb) {
        return this.request("DescribePredictiveDialingSessions", req, cb);
    }
    /**
     * 创建公司资质申请（1、首次使用接口，建议先在云联络中心控制台查看各个资料模板:https://console.cloud.tencent.com/ccc/enterprise/update。2、参数中图片Url建议使用腾讯云Cos存储的临时链接）
     */
    async CreateCompanyApply(req, cb) {
        return this.request("CreateCompanyApply", req, cb);
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
     * 解绑号码外呼技能组
     */
    async UnbindNumberCallOutSkillGroup(req, cb) {
        return this.request("UnbindNumberCallOutSkillGroup", req, cb);
    }
    /**
     * 停止自动外呼任务
     */
    async StopAutoCalloutTask(req, cb) {
        return this.request("StopAutoCalloutTask", req, cb);
    }
    /**
     * 创建预测式外呼任务
     */
    async CreatePredictiveDialingCampaign(req, cb) {
        return this.request("CreatePredictiveDialingCampaign", req, cb);
    }
    /**
     * 用于无限频率地呼叫坐席手机
     */
    async CreateCarrierPrivilegeNumberApplicant(req, cb) {
        return this.request("CreateCarrierPrivilegeNumberApplicant", req, cb);
    }
    /**
     * 上传IVR中使用的音频文件，每日上传文件限制50个。（参数中音频文件Url建议使用腾讯云Cos存储的临时链接）
     */
    async UploadIvrAudio(req, cb) {
        return this.request("UploadIvrAudio", req, cb);
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
     * 恢复预测式外呼任务
     */
    async ResumePredictiveDialingCampaign(req, cb) {
        return this.request("ResumePredictiveDialingCampaign", req, cb);
    }
    /**
     * 新建技能组
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
     * 修改座席的密码
     */
    async ModifyStaffPassword(req, cb) {
        return this.request("ModifyStaffPassword", req, cb);
    }
    /**
     * 查询预测式外呼任务
     */
    async DescribePredictiveDialingCampaign(req, cb) {
        return this.request("DescribePredictiveDialingCampaign", req, cb);
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
     * 更新技能组
     */
    async UpdateCCCSkillGroup(req, cb) {
        return this.request("UpdateCCCSkillGroup", req, cb);
    }
    /**
     * 创建用户数据签名
     */
    async CreateUserSig(req, cb) {
        return this.request("CreateUserSig", req, cb);
    }
    /**
     * 挂断电话
     */
    async HangUpCall(req, cb) {
        return this.request("HangUpCall", req, cb);
    }
    /**
     * 暂停预测式外呼任务
     */
    async PausePredictiveDialingCampaign(req, cb) {
        return this.request("PausePredictiveDialingCampaign", req, cb);
    }
    /**
     * 创建管理端访问链接
     */
    async CreateAdminURL(req, cb) {
        return this.request("CreateAdminURL", req, cb);
    }
    /**
     * 获取主被叫受保护的电话服务记录与录音
     */
    async DescribeProtectedTelCdr(req, cb) {
        return this.request("DescribeProtectedTelCdr", req, cb);
    }
    /**
     * 获取包括全媒体和文本会话两种类型的服务记录。
     */
    async DescribeIMCdrList(req, cb) {
        return this.request("DescribeIMCdrList", req, cb);
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
    /**
     * 停止预测式外呼任务
     */
    async AbortPredictiveDialingCampaign(req, cb) {
        return this.request("AbortPredictiveDialingCampaign", req, cb);
    }
    /**
     * 查询公司资质申请列表
     */
    async DescribeCompanyList(req, cb) {
        return this.request("DescribeCompanyList", req, cb);
    }
    /**
     * 删除预测式外呼任务
     */
    async DeletePredictiveDialingCampaign(req, cb) {
        return this.request("DeletePredictiveDialingCampaign", req, cb);
    }
    /**
     * 任务未启动前，更新预测式外呼任务。
     */
    async UpdatePredictiveDialingCampaign(req, cb) {
        return this.request("UpdatePredictiveDialingCampaign", req, cb);
    }
}
exports.Client = Client;
