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
const ProtectURLInfo = models.ProtectURLInfo;
const CreateCRObtainResponse = models.CreateCRObtainResponse;
const CreateCRUserVerifyRequest = models.CreateCRUserVerifyRequest;
const CreateBPFalseTicketResponse = models.CreateBPFalseTicketResponse;
const CreateCRRightFileRequest = models.CreateCRRightFileRequest;
const CreateCRRightResponse = models.CreateCRRightResponse;
const CreateCRWorkResponse = models.CreateCRWorkResponse;
const CreateCRRightRequest = models.CreateCRRightRequest;
const CreateBPOfflineTicketResponse = models.CreateBPOfflineTicketResponse;
const CreateCRTortRequest = models.CreateCRTortRequest;
const UpdateCRWorkRequest = models.UpdateCRWorkRequest;
const DescribeBPFakeURLsRequest = models.DescribeBPFakeURLsRequest;
const ModifyCRBlockStatusResponse = models.ModifyCRBlockStatusResponse;
const Monitor = models.Monitor;
const ModifyCRObtainStatusRequest = models.ModifyCRObtainStatusRequest;
const ReportFakeURLInfo = models.ReportFakeURLInfo;
const DescribeCRWorkInfoRequest = models.DescribeCRWorkInfoRequest;
const ModifyBPOfflineAttachmentRequest = models.ModifyBPOfflineAttachmentRequest;
const DescribeBPFakeURLsResponse = models.DescribeBPFakeURLsResponse;
const CreateBPOfflineAttachmentResponse = models.CreateBPOfflineAttachmentResponse;
const DescribeBPReportFakeURLsRequest = models.DescribeBPReportFakeURLsRequest;
const DescribeCRMonitorDetailResponse = models.DescribeCRMonitorDetailResponse;
const MonitorTort = models.MonitorTort;
const CreateBPFakeURLRequest = models.CreateBPFakeURLRequest;
const UpdateCRWorkResponse = models.UpdateCRWorkResponse;
const CreateBPProtectURLsResponse = models.CreateBPProtectURLsResponse;
const DescribeBPProtectURLsResponse = models.DescribeBPProtectURLsResponse;
const DescribeCRMonitorsResponse = models.DescribeCRMonitorsResponse;
const CreateCRCompanyVerifyResponse = models.CreateCRCompanyVerifyResponse;
const CreateBPOfflineAttachmentRequest = models.CreateBPOfflineAttachmentRequest;
const CreateCRDesktopCodeResponse = models.CreateCRDesktopCodeResponse;
const CreateBPProtectURLsRequest = models.CreateBPProtectURLsRequest;
const CreateCRObtainRequest = models.CreateCRObtainRequest;
const ModifyCRBlockStatusRequest = models.ModifyCRBlockStatusRequest;
const ModifyCRMonitorRequest = models.ModifyCRMonitorRequest;
const CreateCRDesktopCodeRequest = models.CreateCRDesktopCodeRequest;
const CreateCRWorkRequest = models.CreateCRWorkRequest;
const DescribeBPCompanyInfoRequest = models.DescribeBPCompanyInfoRequest;
const DescribeCRObtainDetailRequest = models.DescribeCRObtainDetailRequest;
const DescribeBPReportFakeURLsResponse = models.DescribeBPReportFakeURLsResponse;
const DescribeCRMonitorDetailRequest = models.DescribeCRMonitorDetailRequest;
const Filter = models.Filter;
const CreateCRBlockResponse = models.CreateCRBlockResponse;
const ModifyCRRightStatusRequest = models.ModifyCRRightStatusRequest;
const DescribeCRMonitorsRequest = models.DescribeCRMonitorsRequest;
const DescribeCRWorkInfoResponse = models.DescribeCRWorkInfoResponse;
const DescribeCRObtainDetailResponse = models.DescribeCRObtainDetailResponse;
const CreateCRRightFileResponse = models.CreateCRRightFileResponse;
const ModifyCRWhiteListResponse = models.ModifyCRWhiteListResponse;
const FakeURLInfo = models.FakeURLInfo;
const CreateBPOfflineTicketRequest = models.CreateBPOfflineTicketRequest;
const CreateCRUserVerifyResponse = models.CreateCRUserVerifyResponse;
const BrandData = models.BrandData;
const ModifyCRRightStatusResponse = models.ModifyCRRightStatusResponse;
const DescribeBPCompanyInfoResponse = models.DescribeBPCompanyInfoResponse;
const ModifyBPOfflineAttachmentResponse = models.ModifyBPOfflineAttachmentResponse;
const CreateCRBlockRequest = models.CreateCRBlockRequest;
const CreateBPFakeURLResponse = models.CreateBPFakeURLResponse;
const CreateCRTortResponse = models.CreateCRTortResponse;
const CreateBPFalseTicketRequest = models.CreateBPFalseTicketRequest;
const ModifyCRMonitorResponse = models.ModifyCRMonitorResponse;
const File = models.File;
const DescribeBPProtectURLsRequest = models.DescribeBPProtectURLsRequest;
const ModifyCRObtainStatusResponse = models.ModifyCRObtainStatusResponse;
const ModifyCRWhiteListRequest = models.ModifyCRWhiteListRequest;
const CreateCRCompanyVerifyRequest = models.CreateCRCompanyVerifyRequest;


/**
 * bma client
 * @class
 */
class BmaClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("bma.tencentcloudapi.com", "2021-06-24", credential, region, profile);
    }
    
    /**
     * 更新作品
     * @param {UpdateCRWorkRequest} req
     * @param {function(string, UpdateCRWorkResponse):void} cb
     * @public
     */
    UpdateCRWork(req, cb) {
        let resp = new UpdateCRWorkResponse();
        this.request("UpdateCRWork", req, resp, cb);
    }

    /**
     * 新建过程取证码
     * @param {CreateCRDesktopCodeRequest} req
     * @param {function(string, CreateCRDesktopCodeResponse):void} cb
     * @public
     */
    CreateCRDesktopCode(req, cb) {
        let resp = new CreateCRDesktopCodeResponse();
        this.request("CreateCRDesktopCode", req, resp, cb);
    }

    /**
     * 查询企业信息
     * @param {DescribeBPCompanyInfoRequest} req
     * @param {function(string, DescribeBPCompanyInfoResponse):void} cb
     * @public
     */
    DescribeBPCompanyInfo(req, cb) {
        let resp = new DescribeBPCompanyInfoResponse();
        this.request("DescribeBPCompanyInfo", req, resp, cb);
    }

    /**
     * 本接口用于个人认证，新接入用户必须认证后才可以进行后续操作（个人认证和企业认证二选一），只需认证一次即可
     * @param {CreateCRUserVerifyRequest} req
     * @param {function(string, CreateCRUserVerifyResponse):void} cb
     * @public
     */
    CreateCRUserVerify(req, cb) {
        let resp = new CreateCRUserVerifyResponse();
        this.request("CreateCRUserVerify", req, resp, cb);
    }

    /**
     * 新建作品
     * @param {CreateCRWorkRequest} req
     * @param {function(string, CreateCRWorkResponse):void} cb
     * @public
     */
    CreateCRWork(req, cb) {
        let resp = new CreateCRWorkResponse();
        this.request("CreateCRWork", req, resp, cb);
    }

    /**
     * 添加下线工单
     * @param {CreateBPOfflineTicketRequest} req
     * @param {function(string, CreateBPOfflineTicketResponse):void} cb
     * @public
     */
    CreateBPOfflineTicket(req, cb) {
        let resp = new CreateBPOfflineTicketResponse();
        this.request("CreateBPOfflineTicket", req, resp, cb);
    }

    /**
     * 查询取证详情
     * @param {DescribeCRObtainDetailRequest} req
     * @param {function(string, DescribeCRObtainDetailResponse):void} cb
     * @public
     */
    DescribeCRObtainDetail(req, cb) {
        let resp = new DescribeCRObtainDetailResponse();
        this.request("DescribeCRObtainDetail", req, resp, cb);
    }

    /**
     * 新建协查处置

     * @param {CreateCRBlockRequest} req
     * @param {function(string, CreateCRBlockResponse):void} cb
     * @public
     */
    CreateCRBlock(req, cb) {
        let resp = new CreateCRBlockResponse();
        this.request("CreateCRBlock", req, resp, cb);
    }

    /**
     * 取证申请
     * @param {ModifyCRObtainStatusRequest} req
     * @param {function(string, ModifyCRObtainStatusResponse):void} cb
     * @public
     */
    ModifyCRObtainStatus(req, cb) {
        let resp = new ModifyCRObtainStatusResponse();
        this.request("ModifyCRObtainStatus", req, resp, cb);
    }

    /**
     * 版权保护-新建发函接口
     * @param {CreateCRRightRequest} req
     * @param {function(string, CreateCRRightResponse):void} cb
     * @public
     */
    CreateCRRight(req, cb) {
        let resp = new CreateCRRightResponse();
        this.request("CreateCRRight", req, resp, cb);
    }

    /**
     * 修改下线材料
     * @param {ModifyBPOfflineAttachmentRequest} req
     * @param {function(string, ModifyBPOfflineAttachmentResponse):void} cb
     * @public
     */
    ModifyBPOfflineAttachment(req, cb) {
        let resp = new ModifyBPOfflineAttachmentResponse();
        this.request("ModifyBPOfflineAttachment", req, resp, cb);
    }

    /**
     * 版权保护-新建取证接口
     * @param {CreateCRObtainRequest} req
     * @param {function(string, CreateCRObtainResponse):void} cb
     * @public
     */
    CreateCRObtain(req, cb) {
        let resp = new CreateCRObtainResponse();
        this.request("CreateCRObtain", req, resp, cb);
    }

    /**
     * 开启/关闭监测
     * @param {ModifyCRMonitorRequest} req
     * @param {function(string, ModifyCRMonitorResponse):void} cb
     * @public
     */
    ModifyCRMonitor(req, cb) {
        let resp = new ModifyCRMonitorResponse();
        this.request("ModifyCRMonitor", req, resp, cb);
    }

    /**
     * 版权保护-查询作品监测详情接口
     * @param {DescribeCRMonitorDetailRequest} req
     * @param {function(string, DescribeCRMonitorDetailResponse):void} cb
     * @public
     */
    DescribeCRMonitorDetail(req, cb) {
        let resp = new DescribeCRMonitorDetailResponse();
        this.request("DescribeCRMonitorDetail", req, resp, cb);
    }

    /**
     * 添加仿冒链接（举报）
     * @param {CreateBPFakeURLRequest} req
     * @param {function(string, CreateBPFakeURLResponse):void} cb
     * @public
     */
    CreateBPFakeURL(req, cb) {
        let resp = new CreateBPFakeURLResponse();
        this.request("CreateBPFakeURL", req, resp, cb);
    }

    /**
     * 权属文件添加
     * @param {CreateCRRightFileRequest} req
     * @param {function(string, CreateCRRightFileResponse):void} cb
     * @public
     */
    CreateCRRightFile(req, cb) {
        let resp = new CreateCRRightFileResponse();
        this.request("CreateCRRightFile", req, resp, cb);
    }

    /**
     * 修改白名单列表
     * @param {ModifyCRWhiteListRequest} req
     * @param {function(string, ModifyCRWhiteListResponse):void} cb
     * @public
     */
    ModifyCRWhiteList(req, cb) {
        let resp = new ModifyCRWhiteListResponse();
        this.request("ModifyCRWhiteList", req, resp, cb);
    }

    /**
     * 协查处置申请
     * @param {ModifyCRBlockStatusRequest} req
     * @param {function(string, ModifyCRBlockStatusResponse):void} cb
     * @public
     */
    ModifyCRBlockStatus(req, cb) {
        let resp = new ModifyCRBlockStatusResponse();
        this.request("ModifyCRBlockStatus", req, resp, cb);
    }

    /**
     * 添加误报工单
     * @param {CreateBPFalseTicketRequest} req
     * @param {function(string, CreateBPFalseTicketResponse):void} cb
     * @public
     */
    CreateBPFalseTicket(req, cb) {
        let resp = new CreateBPFalseTicketResponse();
        this.request("CreateBPFalseTicket", req, resp, cb);
    }

    /**
     * 添加保护网站
     * @param {CreateBPProtectURLsRequest} req
     * @param {function(string, CreateBPProtectURLsResponse):void} cb
     * @public
     */
    CreateBPProtectURLs(req, cb) {
        let resp = new CreateBPProtectURLsResponse();
        this.request("CreateBPProtectURLs", req, resp, cb);
    }

    /**
     * 查询举报列表
     * @param {DescribeBPReportFakeURLsRequest} req
     * @param {function(string, DescribeBPReportFakeURLsResponse):void} cb
     * @public
     */
    DescribeBPReportFakeURLs(req, cb) {
        let resp = new DescribeBPReportFakeURLsResponse();
        this.request("DescribeBPReportFakeURLs", req, resp, cb);
    }

    /**
     * 查询仿冒链接
     * @param {DescribeBPFakeURLsRequest} req
     * @param {function(string, DescribeBPFakeURLsResponse):void} cb
     * @public
     */
    DescribeBPFakeURLs(req, cb) {
        let resp = new DescribeBPFakeURLsResponse();
        this.request("DescribeBPFakeURLs", req, resp, cb);
    }

    /**
     * 查询作品基本信息
     * @param {DescribeCRWorkInfoRequest} req
     * @param {function(string, DescribeCRWorkInfoResponse):void} cb
     * @public
     */
    DescribeCRWorkInfo(req, cb) {
        let resp = new DescribeCRWorkInfoResponse();
        this.request("DescribeCRWorkInfo", req, resp, cb);
    }

    /**
     * 版权保护-查询监测列表接口
     * @param {DescribeCRMonitorsRequest} req
     * @param {function(string, DescribeCRMonitorsResponse):void} cb
     * @public
     */
    DescribeCRMonitors(req, cb) {
        let resp = new DescribeCRMonitorsResponse();
        this.request("DescribeCRMonitors", req, resp, cb);
    }

    /**
     * 发函申请
     * @param {ModifyCRRightStatusRequest} req
     * @param {function(string, ModifyCRRightStatusResponse):void} cb
     * @public
     */
    ModifyCRRightStatus(req, cb) {
        let resp = new ModifyCRRightStatusResponse();
        this.request("ModifyCRRightStatus", req, resp, cb);
    }

    /**
     * 添加下线材料
     * @param {CreateBPOfflineAttachmentRequest} req
     * @param {function(string, CreateBPOfflineAttachmentResponse):void} cb
     * @public
     */
    CreateBPOfflineAttachment(req, cb) {
        let resp = new CreateBPOfflineAttachmentResponse();
        this.request("CreateBPOfflineAttachment", req, resp, cb);
    }

    /**
     * 查询保护网站
     * @param {DescribeBPProtectURLsRequest} req
     * @param {function(string, DescribeBPProtectURLsResponse):void} cb
     * @public
     */
    DescribeBPProtectURLs(req, cb) {
        let resp = new DescribeBPProtectURLsResponse();
        this.request("DescribeBPProtectURLs", req, resp, cb);
    }

    /**
     * 举报侵权链接
     * @param {CreateCRTortRequest} req
     * @param {function(string, CreateCRTortResponse):void} cb
     * @public
     */
    CreateCRTort(req, cb) {
        let resp = new CreateCRTortResponse();
        this.request("CreateCRTort", req, resp, cb);
    }

    /**
     * 本接口用于企业认证，新接入用户必须认证后才可以进行后续操作（个人认证和企业认证二选一），只需认证一次即可
     * @param {CreateCRCompanyVerifyRequest} req
     * @param {function(string, CreateCRCompanyVerifyResponse):void} cb
     * @public
     */
    CreateCRCompanyVerify(req, cb) {
        let resp = new CreateCRCompanyVerifyResponse();
        this.request("CreateCRCompanyVerify", req, resp, cb);
    }


}
module.exports = BmaClient;
