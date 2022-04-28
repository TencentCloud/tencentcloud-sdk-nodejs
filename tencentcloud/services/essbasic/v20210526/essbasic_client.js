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
 * essbasic client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("essbasic.tencentcloudapi.com", "2021-05-26", clientConfig);
    }
    /**
     * 接口（CreateFlowsByTemplates）用于使用多个模板批量创建流程。当前可批量发起合同（流程）数量最大为20个。
     */
    async CreateFlowsByTemplates(req, cb) {
        return this.request("CreateFlowsByTemplates", req, cb);
    }
    /**
     * 此接口（GetDownloadFlowUrl）用于创建电子签批量下载地址，支持客户合同（流程）按照自定义文件夹形式 分类下载。
当前接口限制最多合同（流程）50个.

     */
    async GetDownloadFlowUrl(req, cb) {
        return this.request("GetDownloadFlowUrl", req, cb);
    }
    /**
     * 通过此接口（DescribeTemplates）查询该企业在电子签渠道版中配置的有效模板列表
     */
    async DescribeTemplates(req, cb) {
        return this.request("DescribeTemplates", req, cb);
    }
    /**
     * 接口（ChannelCreateFlowByFiles）用于渠道版通过文件创建流程。此接口不可直接使用，需要运营申请
     */
    async ChannelCreateFlowByFiles(req, cb) {
        return this.request("ChannelCreateFlowByFiles", req, cb);
    }
    /**
     * 该接口 (PrepareFlows) 用于创建待发起文件
用户通过该接口进入流程发起的确认页面，进行发起信息二次确认， 如果确认则进行正常发起。
目前该接口只支持B2C。
     */
    async PrepareFlows(req, cb) {
        return this.request("PrepareFlows", req, cb);
    }
    /**
     * 此接口（OperateChannelTemplate）用于渠道侧将模板库中的模板对合作企业进行查询和设置, 其中包括可见性的修改以及对合作企业的设置.
1、同步标识=select时：
返回渠道侧模板库当前模板的属性.
2、同步标识=update或者delete时：
对渠道子客进行模板库中模板授权,修改操作
     */
    async OperateChannelTemplate(req, cb) {
        return this.request("OperateChannelTemplate", req, cb);
    }
    /**
     * 渠道通过图片为子客代创建印章，图片最大5m；此接口不可直接使用，需要运营申请
     */
    async CreateSealByImage(req, cb) {
        return this.request("CreateSealByImage", req, cb);
    }
    /**
     * 创建参与者签署短链
     */
    async CreateSignUrls(req, cb) {
        return this.request("CreateSignUrls", req, cb);
    }
    /**
     * 此接口（CreateConsoleLoginUrl）用于创建电子签控制台登录链接。若企业未激活，调用同步企业信息、同步经办人信息

     */
    async CreateConsoleLoginUrl(req, cb) {
        return this.request("CreateConsoleLoginUrl", req, cb);
    }
    /**
     * 此接口（SyncProxyOrganizationOperators）用于同步渠道合作企业经办人列表
     */
    async SyncProxyOrganizationOperators(req, cb) {
        return this.request("SyncProxyOrganizationOperators", req, cb);
    }
    /**
     * 此接口（DescribeUsage）用于获取渠道所有合作企业流量消耗情况。
 注: 此接口每日限频2次，若要扩大限制次数,请提前与客服经理或邮件至e-contract@tencent.com进行联系。
     */
    async DescribeUsage(req, cb) {
        return this.request("DescribeUsage", req, cb);
    }
    /**
     * 此接口（DescribeFlowDetailInfo）用于查询合同(流程)的详细信息。
     */
    async DescribeFlowDetailInfo(req, cb) {
        return this.request("DescribeFlowDetailInfo", req, cb);
    }
    /**
     * 此接口（SyncProxyOrganization）用于同步渠道侧企业信息
     */
    async SyncProxyOrganization(req, cb) {
        return this.request("SyncProxyOrganization", req, cb);
    }
    /**
     * 根据流程信息批量获取资源下载链接
     */
    async DescribeResourceUrlsByFlows(req, cb) {
        return this.request("DescribeResourceUrlsByFlows", req, cb);
    }
    /**
     * 此接口（UploadFiles）用于文件上传。
调用时需要设置Domain 为 file.ess.tencent.cn
     */
    async UploadFiles(req, cb) {
        return this.request("UploadFiles", req, cb);
    }
}
exports.Client = Client;
