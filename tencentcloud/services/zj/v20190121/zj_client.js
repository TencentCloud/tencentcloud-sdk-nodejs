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
 * zj client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("zj.tencentcloudapi.com", "2019-01-21", clientConfig);
    }
    /**
     * 获取彩信实例列表
     */
    async DescribeMmsInstanceList(req, cb) {
        return this.request("DescribeMmsInstanceList", req, cb);
    }
    /**
     * 删除人群包
     */
    async DelCrowdPack(req, cb) {
        return this.request("DelCrowdPack", req, cb);
    }
    /**
     * 删除短信模板
     */
    async DelTemplate(req, cb) {
        return this.request("DelTemplate", req, cb);
    }
    /**
     * 添加短信人群包信息
     */
    async AddCrowdPackInfo(req, cb) {
        return this.request("AddCrowdPackInfo", req, cb);
    }
    /**
     * 创建普通短信签名信息
     */
    async AddSmsSign(req, cb) {
        return this.request("AddSmsSign", req, cb);
    }
    /**
     * 删除超级短信样例
     */
    async DeleteMmsInstance(req, cb) {
        return this.request("DeleteMmsInstance", req, cb);
    }
    /**
     * 获取人群包列表接口
     */
    async GetCrowdPackList(req, cb) {
        return this.request("GetCrowdPackList", req, cb);
    }
    /**
     * 根据短信标题、模板内容等创建短信模板
     */
    async AddSmsTemplate(req, cb) {
        return this.request("AddSmsTemplate", req, cb);
    }
    /**
     * 发送短信
     */
    async SendSms(req, cb) {
        return this.request("SendSms", req, cb);
    }
    /**
     * 获取短信活动状态信息
     */
    async GetSmsCampaignStatus(req, cb) {
        return this.request("GetSmsCampaignStatus", req, cb);
    }
    /**
     * 获取普通短信签名信息
     */
    async DescribeSmsSignList(req, cb) {
        return this.request("DescribeSmsSignList", req, cb);
    }
    /**
     * 获取模板信息
     */
    async DescribeSmsTemplateList(req, cb) {
        return this.request("DescribeSmsTemplateList", req, cb);
    }
    /**
     * 获取短信超短活动统计数据
     */
    async DescribeSmsCampaignStatistics(req, cb) {
        return this.request("DescribeSmsCampaignStatistics", req, cb);
    }
    /**
     * 创建超级短信的素材样例内容
     */
    async CreateMmsInstance(req, cb) {
        return this.request("CreateMmsInstance", req, cb);
    }
    /**
     * 获取彩信实例信息
     */
    async DescribeMmsInstanceInfo(req, cb) {
        return this.request("DescribeMmsInstanceInfo", req, cb);
    }
    /**
     * 取消短信推送活动
     */
    async CancelCampaign(req, cb) {
        return this.request("CancelCampaign", req, cb);
    }
    /**
     * 获取账号短信额度配置信息
     */
    async GetSmsAmountInfo(req, cb) {
        return this.request("GetSmsAmountInfo", req, cb);
    }
    /**
     * 推送超级短信
     */
    async PushMmsContent(req, cb) {
        return this.request("PushMmsContent", req, cb);
    }
    /**
     * 创建短信推送活动
     */
    async CreateCampaign(req, cb) {
        return this.request("CreateCampaign", req, cb);
    }
    /**
     * 获取短信人群包cos上传需要的信息
     */
    async GetCrowdUploadInfo(req, cb) {
        return this.request("GetCrowdUploadInfo", req, cb);
    }
    /**
     * 对未审核或者审核未通过的短信模板内容进行编辑修改
     */
    async ModifySmsTemplate(req, cb) {
        return this.request("ModifySmsTemplate", req, cb);
    }
}
exports.Client = Client;
