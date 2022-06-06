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
const UploadFile = models.UploadFile;
const DescribeFileUrlsResponse = models.DescribeFileUrlsResponse;
const TemplateInfo = models.TemplateInfo;
const CreateDocumentResponse = models.CreateDocumentResponse;
const StartFlowRequest = models.StartFlowRequest;
const CancelFlowResponse = models.CancelFlowResponse;
const CreateDocumentRequest = models.CreateDocumentRequest;
const CreateFlowRequest = models.CreateFlowRequest;
const CreateSchemeUrlRequest = models.CreateSchemeUrlRequest;
const FileUrl = models.FileUrl;
const DescribeThirdPartyAuthCodeRequest = models.DescribeThirdPartyAuthCodeRequest;
const UploadFilesRequest = models.UploadFilesRequest;
const CancelFlowRequest = models.CancelFlowRequest;
const DescribeFlowBriefsResponse = models.DescribeFlowBriefsResponse;
const Component = models.Component;
const UploadFilesResponse = models.UploadFilesResponse;
const DescribeThirdPartyAuthCodeResponse = models.DescribeThirdPartyAuthCodeResponse;
const CreateFlowByFilesResponse = models.CreateFlowByFilesResponse;
const DescribeFlowBriefsRequest = models.DescribeFlowBriefsRequest;
const Recipient = models.Recipient;
const DescribeFileUrlsRequest = models.DescribeFileUrlsRequest;
const ApproverInfo = models.ApproverInfo;
const Caller = models.Caller;
const DescribeFlowTemplatesResponse = models.DescribeFlowTemplatesResponse;
const Filter = models.Filter;
const FileInfo = models.FileInfo;
const FlowCreateApprover = models.FlowCreateApprover;
const StartFlowResponse = models.StartFlowResponse;
const CreateSchemeUrlResponse = models.CreateSchemeUrlResponse;
const CreateFlowByFilesRequest = models.CreateFlowByFilesRequest;
const CreateFlowResponse = models.CreateFlowResponse;
const Agent = models.Agent;
const FormField = models.FormField;
const DescribeFlowTemplatesRequest = models.DescribeFlowTemplatesRequest;
const UserInfo = models.UserInfo;
const FlowBrief = models.FlowBrief;
const CcInfo = models.CcInfo;


/**
 * ess client
 * @class
 */
class EssClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ess.tencentcloudapi.com", "2020-11-11", credential, region, profile);
    }
    
    /**
     * 此接口用于发起流程
     * @param {StartFlowRequest} req
     * @param {function(string, StartFlowResponse):void} cb
     * @public
     */
    StartFlow(req, cb) {
        let resp = new StartFlowResponse();
        this.request("StartFlow", req, resp, cb);
    }

    /**
     * 用于撤销流程
     * @param {CancelFlowRequest} req
     * @param {function(string, CancelFlowResponse):void} cb
     * @public
     */
    CancelFlow(req, cb) {
        let resp = new CancelFlowResponse();
        this.request("CancelFlow", req, resp, cb);
    }

    /**
     * 创建电子文档
     * @param {CreateDocumentRequest} req
     * @param {function(string, CreateDocumentResponse):void} cb
     * @public
     */
    CreateDocument(req, cb) {
        let resp = new CreateDocumentResponse();
        this.request("CreateDocument", req, resp, cb);
    }

    /**
     * 查询文件下载URL
     * @param {DescribeFileUrlsRequest} req
     * @param {function(string, DescribeFileUrlsResponse):void} cb
     * @public
     */
    DescribeFileUrls(req, cb) {
        let resp = new DescribeFileUrlsResponse();
        this.request("DescribeFileUrls", req, resp, cb);
    }

    /**
     * 通过AuthCode查询用户是否实名
     * @param {DescribeThirdPartyAuthCodeRequest} req
     * @param {function(string, DescribeThirdPartyAuthCodeResponse):void} cb
     * @public
     */
    DescribeThirdPartyAuthCode(req, cb) {
        let resp = new DescribeThirdPartyAuthCodeResponse();
        this.request("DescribeThirdPartyAuthCode", req, resp, cb);
    }

    /**
     * 创建签署流程
     * @param {CreateFlowRequest} req
     * @param {function(string, CreateFlowResponse):void} cb
     * @public
     */
    CreateFlow(req, cb) {
        let resp = new CreateFlowResponse();
        this.request("CreateFlow", req, resp, cb);
    }

    /**
     * 获取小程序跳转链接

跳转到小程序的实现，参考官方文档（分为<a href="https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateToMiniProgram.html">全屏</a>、<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html">半屏</a>两种方式）


如您需要自主配置小程序跳转链接，请参考: <a href="https://tcloud-doc.isd.com/document/product/1323/74774">跳转小程序链接配置说明</a>
     * @param {CreateSchemeUrlRequest} req
     * @param {function(string, CreateSchemeUrlResponse):void} cb
     * @public
     */
    CreateSchemeUrl(req, cb) {
        let resp = new CreateSchemeUrlResponse();
        this.request("CreateSchemeUrl", req, resp, cb);
    }

    /**
     * 二期接口-查询模板
     * @param {DescribeFlowTemplatesRequest} req
     * @param {function(string, DescribeFlowTemplatesResponse):void} cb
     * @public
     */
    DescribeFlowTemplates(req, cb) {
        let resp = new DescribeFlowTemplatesResponse();
        this.request("DescribeFlowTemplates", req, resp, cb);
    }

    /**
     * 查询流程摘要
     * @param {DescribeFlowBriefsRequest} req
     * @param {function(string, DescribeFlowBriefsResponse):void} cb
     * @public
     */
    DescribeFlowBriefs(req, cb) {
        let resp = new DescribeFlowBriefsResponse();
        this.request("DescribeFlowBriefs", req, resp, cb);
    }

    /**
     * 此接口（CreateFlowByFiles）用来通过上传后的pdf资源编号来创建流程。
     * @param {CreateFlowByFilesRequest} req
     * @param {function(string, CreateFlowByFilesResponse):void} cb
     * @public
     */
    CreateFlowByFiles(req, cb) {
        let resp = new CreateFlowByFilesResponse();
        this.request("CreateFlowByFiles", req, resp, cb);
    }

    /**
     * 此接口（UploadFiles）用于文件上传。
调用时需要设置Domain 为 file.ess.tencent.cn，设置Version为2020-12-22
     * @param {UploadFilesRequest} req
     * @param {function(string, UploadFilesResponse):void} cb
     * @public
     */
    UploadFiles(req, cb) {
        let resp = new UploadFilesResponse();
        this.request("UploadFiles", req, resp, cb);
    }


}
module.exports = EssClient;
