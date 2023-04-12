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
 * bma client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("bma.tencentcloudapi.com", "2021-06-24", clientConfig);
    }
    /**
     * 更新作品
     */
    async UpdateCRWork(req, cb) {
        return this.request("UpdateCRWork", req, cb);
    }
    /**
     * 新建过程取证码
     */
    async CreateCRDesktopCode(req, cb) {
        return this.request("CreateCRDesktopCode", req, cb);
    }
    /**
     * 查询企业信息
     */
    async DescribeBPCompanyInfo(req, cb) {
        return this.request("DescribeBPCompanyInfo", req, cb);
    }
    /**
     * 本接口用于个人认证，新接入用户必须认证后才可以进行后续操作（个人认证和企业认证二选一），只需认证一次即可
     */
    async CreateCRUserVerify(req, cb) {
        return this.request("CreateCRUserVerify", req, cb);
    }
    /**
     * 新建作品
     */
    async CreateCRWork(req, cb) {
        return this.request("CreateCRWork", req, cb);
    }
    /**
     * 添加下线工单
     */
    async CreateBPOfflineTicket(req, cb) {
        return this.request("CreateBPOfflineTicket", req, cb);
    }
    /**
     * 查询取证详情
     */
    async DescribeCRObtainDetail(req, cb) {
        return this.request("DescribeCRObtainDetail", req, cb);
    }
    /**
     * 新建协查处置

     */
    async CreateCRBlock(req, cb) {
        return this.request("CreateCRBlock", req, cb);
    }
    /**
     * 取证申请
     */
    async ModifyCRObtainStatus(req, cb) {
        return this.request("ModifyCRObtainStatus", req, cb);
    }
    /**
     * 版权保护-新建发函接口
     */
    async CreateCRRight(req, cb) {
        return this.request("CreateCRRight", req, cb);
    }
    /**
     * 修改下线材料
     */
    async ModifyBPOfflineAttachment(req, cb) {
        return this.request("ModifyBPOfflineAttachment", req, cb);
    }
    /**
     * 开启/关闭监测
     */
    async ModifyCRMonitor(req, cb) {
        return this.request("ModifyCRMonitor", req, cb);
    }
    /**
     * 版权保护-查询作品监测详情接口
     */
    async DescribeCRMonitorDetail(req, cb) {
        return this.request("DescribeCRMonitorDetail", req, cb);
    }
    /**
     * 添加仿冒链接（举报）
     */
    async CreateBPFakeURL(req, cb) {
        return this.request("CreateBPFakeURL", req, cb);
    }
    /**
     * 权属文件添加
     */
    async CreateCRRightFile(req, cb) {
        return this.request("CreateCRRightFile", req, cb);
    }
    /**
     * 修改白名单列表
     */
    async ModifyCRWhiteList(req, cb) {
        return this.request("ModifyCRWhiteList", req, cb);
    }
    /**
     * 协查处置申请
     */
    async ModifyCRBlockStatus(req, cb) {
        return this.request("ModifyCRBlockStatus", req, cb);
    }
    /**
     * 添加误报工单
     */
    async CreateBPFalseTicket(req, cb) {
        return this.request("CreateBPFalseTicket", req, cb);
    }
    /**
     * 添加保护网站
     */
    async CreateBPProtectURLs(req, cb) {
        return this.request("CreateBPProtectURLs", req, cb);
    }
    /**
     * 查询举报列表
     */
    async DescribeBPReportFakeURLs(req, cb) {
        return this.request("DescribeBPReportFakeURLs", req, cb);
    }
    /**
     * 查询仿冒链接
     */
    async DescribeBPFakeURLs(req, cb) {
        return this.request("DescribeBPFakeURLs", req, cb);
    }
    /**
     * 查询作品基本信息
     */
    async DescribeCRWorkInfo(req, cb) {
        return this.request("DescribeCRWorkInfo", req, cb);
    }
    /**
     * 版权保护-查询监测列表接口
     */
    async DescribeCRMonitors(req, cb) {
        return this.request("DescribeCRMonitors", req, cb);
    }
    /**
     * 发函申请
     */
    async ModifyCRRightStatus(req, cb) {
        return this.request("ModifyCRRightStatus", req, cb);
    }
    /**
     * 添加下线材料
     */
    async CreateBPOfflineAttachment(req, cb) {
        return this.request("CreateBPOfflineAttachment", req, cb);
    }
    /**
     * 查询保护网站
     */
    async DescribeBPProtectURLs(req, cb) {
        return this.request("DescribeBPProtectURLs", req, cb);
    }
    /**
     * 举报侵权链接
     */
    async CreateCRTort(req, cb) {
        return this.request("CreateCRTort", req, cb);
    }
    /**
     * 本接口用于企业认证，新接入用户必须认证后才可以进行后续操作（个人认证和企业认证二选一），只需认证一次即可
     */
    async CreateCRCompanyVerify(req, cb) {
        return this.request("CreateCRCompanyVerify", req, cb);
    }
}
exports.Client = Client;
