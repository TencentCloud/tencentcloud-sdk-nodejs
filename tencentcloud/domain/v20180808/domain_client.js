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
const UploadImageResponse = models.UploadImageResponse;
const BatchModifyDomainInfoRequest = models.BatchModifyDomainInfoRequest;
const TemplateInfo = models.TemplateInfo;
const UpdateProhibitionBatchRequest = models.UpdateProhibitionBatchRequest;
const DeleteTemplateResponse = models.DeleteTemplateResponse;
const TransferInDomainBatchRequest = models.TransferInDomainBatchRequest;
const CreateDomainBatchResponse = models.CreateDomainBatchResponse;
const DomainBatchDetailSet = models.DomainBatchDetailSet;
const ModifyDomainDNSBatchResponse = models.ModifyDomainDNSBatchResponse;
const RenewDomainBatchRequest = models.RenewDomainBatchRequest;
const DescribeTemplateResponse = models.DescribeTemplateResponse;
const UpdateProhibitionBatchResponse = models.UpdateProhibitionBatchResponse;
const CheckDomainResponse = models.CheckDomainResponse;
const RenewDomainBatchResponse = models.RenewDomainBatchResponse;
const PriceInfo = models.PriceInfo;
const DescribeTemplateRequest = models.DescribeTemplateRequest;
const TransferInDomainBatchResponse = models.TransferInDomainBatchResponse;
const BatchModifyDomainInfoResponse = models.BatchModifyDomainInfoResponse;
const DescribeDomainBaseInfoResponse = models.DescribeDomainBaseInfoResponse;
const DescribeTemplateListResponse = models.DescribeTemplateListResponse;
const TransferProhibitionBatchRequest = models.TransferProhibitionBatchRequest;
const DescribeBatchOperationLogDetailsRequest = models.DescribeBatchOperationLogDetailsRequest;
const DescribeDomainNameListResponse = models.DescribeDomainNameListResponse;
const ContactInfo = models.ContactInfo;
const DescribeDomainPriceListResponse = models.DescribeDomainPriceListResponse;
const CreateTemplateResponse = models.CreateTemplateResponse;
const CertificateInfo = models.CertificateInfo;
const DeleteTemplateRequest = models.DeleteTemplateRequest;
const CheckBatchStatusRequest = models.CheckBatchStatusRequest;
const SetDomainAutoRenewResponse = models.SetDomainAutoRenewResponse;
const CreateTemplateRequest = models.CreateTemplateRequest;
const BatchStatus = models.BatchStatus;
const DomainList = models.DomainList;
const DescribeDomainPriceListRequest = models.DescribeDomainPriceListRequest;
const CreateDomainBatchRequest = models.CreateDomainBatchRequest;
const DescribeDomainBaseInfoRequest = models.DescribeDomainBaseInfoRequest;
const DomainBaseInfo = models.DomainBaseInfo;
const DescribeDomainNameListRequest = models.DescribeDomainNameListRequest;
const DescribeBatchOperationLogsRequest = models.DescribeBatchOperationLogsRequest;
const UploadImageRequest = models.UploadImageRequest;
const CheckDomainRequest = models.CheckDomainRequest;
const DescribeBatchOperationLogsResponse = models.DescribeBatchOperationLogsResponse;
const TransferProhibitionBatchResponse = models.TransferProhibitionBatchResponse;
const ModifyDomainDNSBatchRequest = models.ModifyDomainDNSBatchRequest;
const DescribeBatchOperationLogDetailsResponse = models.DescribeBatchOperationLogDetailsResponse;
const CheckBatchStatusResponse = models.CheckBatchStatusResponse;
const DescribeTemplateListRequest = models.DescribeTemplateListRequest;
const ModifyDomainOwnerBatchResponse = models.ModifyDomainOwnerBatchResponse;
const SetDomainAutoRenewRequest = models.SetDomainAutoRenewRequest;
const ModifyDomainOwnerBatchRequest = models.ModifyDomainOwnerBatchRequest;
const DomainBatchLogSet = models.DomainBatchLogSet;


/**
 * domain client
 * @class
 */
class DomainClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("domain.tencentcloudapi.com", "2018-08-08", credential, region, profile);
    }
    
    /**
     * 本接口 (  DescribeDomainNameList ) 我的域名列表。

     * @param {DescribeDomainNameListRequest} req
     * @param {function(string, DescribeDomainNameListResponse):void} cb
     * @public
     */
    DescribeDomainNameList(req, cb) {
        let resp = new DescribeDomainNameListResponse();
        this.request("DescribeDomainNameList", req, resp, cb);
    }

    /**
     * 本接口 ( UploadImage ) 用于证件图片上传 。
     * @param {UploadImageRequest} req
     * @param {function(string, UploadImageResponse):void} cb
     * @public
     */
    UploadImage(req, cb) {
        let resp = new UploadImageResponse();
        this.request("UploadImage", req, resp, cb);
    }

    /**
     * 本接口 ( CreateTemplate ) 用于添加域名信息模板 。
     * @param {CreateTemplateRequest} req
     * @param {function(string, CreateTemplateResponse):void} cb
     * @public
     */
    CreateTemplate(req, cb) {
        let resp = new CreateTemplateResponse();
        this.request("CreateTemplate", req, resp, cb);
    }

    /**
     * 本接口 (DescribeTemplate) 用于获取模板信息。
     * @param {DescribeTemplateRequest} req
     * @param {function(string, DescribeTemplateResponse):void} cb
     * @public
     */
    DescribeTemplate(req, cb) {
        let resp = new DescribeTemplateResponse();
        this.request("DescribeTemplate", req, resp, cb);
    }

    /**
     * 本接口 ( ModifyDomainOwnerBatch) 用于域名批量账号间转移 。
     * @param {ModifyDomainOwnerBatchRequest} req
     * @param {function(string, ModifyDomainOwnerBatchResponse):void} cb
     * @public
     */
    ModifyDomainOwnerBatch(req, cb) {
        let resp = new ModifyDomainOwnerBatchResponse();
        this.request("ModifyDomainOwnerBatch", req, resp, cb);
    }

    /**
     * 本接口 ( CreateDomainBatch ) 用于批量域名注册 。
     * @param {CreateDomainBatchRequest} req
     * @param {function(string, CreateDomainBatchResponse):void} cb
     * @public
     */
    CreateDomainBatch(req, cb) {
        let resp = new CreateDomainBatchResponse();
        this.request("CreateDomainBatch", req, resp, cb);
    }

    /**
     * 本接口 (  DescribeDomainBaseInfo) 获取域名基本信息。

     * @param {DescribeDomainBaseInfoRequest} req
     * @param {function(string, DescribeDomainBaseInfoResponse):void} cb
     * @public
     */
    DescribeDomainBaseInfo(req, cb) {
        let resp = new DescribeDomainBaseInfoResponse();
        this.request("DescribeDomainBaseInfo", req, resp, cb);
    }

    /**
     * 本接口 ( DescribeBatchOperationLogs ) 用于获取批量操作日志 。
     * @param {DescribeBatchOperationLogsRequest} req
     * @param {function(string, DescribeBatchOperationLogsResponse):void} cb
     * @public
     */
    DescribeBatchOperationLogs(req, cb) {
        let resp = new DescribeBatchOperationLogsResponse();
        this.request("DescribeBatchOperationLogs", req, resp, cb);
    }

    /**
     * 本接口 ( DescribeBatchOperationLogDetails ) 用于获取批量操作日志详情。
     * @param {DescribeBatchOperationLogDetailsRequest} req
     * @param {function(string, DescribeBatchOperationLogDetailsResponse):void} cb
     * @public
     */
    DescribeBatchOperationLogDetails(req, cb) {
        let resp = new DescribeBatchOperationLogDetailsResponse();
        this.request("DescribeBatchOperationLogDetails", req, resp, cb);
    }

    /**
     * 本接口 ( DeleteTemplate ) 用于删除信息模板。
     * @param {DeleteTemplateRequest} req
     * @param {function(string, DeleteTemplateResponse):void} cb
     * @public
     */
    DeleteTemplate(req, cb) {
        let resp = new DeleteTemplateResponse();
        this.request("DeleteTemplate", req, resp, cb);
    }

    /**
     * 本接口 (DescribeTemplateList) 用于获取信息模板列表。

     * @param {DescribeTemplateListRequest} req
     * @param {function(string, DescribeTemplateListResponse):void} cb
     * @public
     */
    DescribeTemplateList(req, cb) {
        let resp = new DescribeTemplateListResponse();
        this.request("DescribeTemplateList", req, resp, cb);
    }

    /**
     * 本接口 ( RenewDomainBatch ) 用于批量续费域名 。

     * @param {RenewDomainBatchRequest} req
     * @param {function(string, RenewDomainBatchResponse):void} cb
     * @public
     */
    RenewDomainBatch(req, cb) {
        let resp = new RenewDomainBatchResponse();
        this.request("RenewDomainBatch", req, resp, cb);
    }

    /**
     * 本接口 ( TransferProhibitionBatch ) 用于批量禁止域名转移 。
     * @param {TransferProhibitionBatchRequest} req
     * @param {function(string, TransferProhibitionBatchResponse):void} cb
     * @public
     */
    TransferProhibitionBatch(req, cb) {
        let resp = new TransferProhibitionBatchResponse();
        this.request("TransferProhibitionBatch", req, resp, cb);
    }

    /**
     * 本接口 ( BatchModifyDomainInfo ) 用于批量域名信息修改 。
     * @param {BatchModifyDomainInfoRequest} req
     * @param {function(string, BatchModifyDomainInfoResponse):void} cb
     * @public
     */
    BatchModifyDomainInfo(req, cb) {
        let resp = new BatchModifyDomainInfoResponse();
        this.request("BatchModifyDomainInfo", req, resp, cb);
    }

    /**
     * 按照域名后缀获取对应的价格列表
     * @param {DescribeDomainPriceListRequest} req
     * @param {function(string, DescribeDomainPriceListResponse):void} cb
     * @public
     */
    DescribeDomainPriceList(req, cb) {
        let resp = new DescribeDomainPriceListResponse();
        this.request("DescribeDomainPriceList", req, resp, cb);
    }

    /**
     * 本接口 ( CheckBatchStatus ) 用于查询批量操作日志状态 。
     * @param {CheckBatchStatusRequest} req
     * @param {function(string, CheckBatchStatusResponse):void} cb
     * @public
     */
    CheckBatchStatus(req, cb) {
        let resp = new CheckBatchStatusResponse();
        this.request("CheckBatchStatus", req, resp, cb);
    }

    /**
     * 检查域名是否可以注册。
     * @param {CheckDomainRequest} req
     * @param {function(string, CheckDomainResponse):void} cb
     * @public
     */
    CheckDomain(req, cb) {
        let resp = new CheckDomainResponse();
        this.request("CheckDomain", req, resp, cb);
    }

    /**
     * 本接口 ( TransferInDomainBatch ) 用于批量转入域名 。
     * @param {TransferInDomainBatchRequest} req
     * @param {function(string, TransferInDomainBatchResponse):void} cb
     * @public
     */
    TransferInDomainBatch(req, cb) {
        let resp = new TransferInDomainBatchResponse();
        this.request("TransferInDomainBatch", req, resp, cb);
    }

    /**
     * 本接口 ( UpdateProhibitionBatch ) 用于批量禁止更新锁。
     * @param {UpdateProhibitionBatchRequest} req
     * @param {function(string, UpdateProhibitionBatchResponse):void} cb
     * @public
     */
    UpdateProhibitionBatch(req, cb) {
        let resp = new UpdateProhibitionBatchResponse();
        this.request("UpdateProhibitionBatch", req, resp, cb);
    }

    /**
     * 本接口 ( ModifyDomainDNSBatch) 用于批量域名 DNS 修改 。
     * @param {ModifyDomainDNSBatchRequest} req
     * @param {function(string, ModifyDomainDNSBatchResponse):void} cb
     * @public
     */
    ModifyDomainDNSBatch(req, cb) {
        let resp = new ModifyDomainDNSBatchResponse();
        this.request("ModifyDomainDNSBatch", req, resp, cb);
    }

    /**
     * 本接口 ( SetDomainAutoRenew ) 用于设置域名自动续费。
     * @param {SetDomainAutoRenewRequest} req
     * @param {function(string, SetDomainAutoRenewResponse):void} cb
     * @public
     */
    SetDomainAutoRenew(req, cb) {
        let resp = new SetDomainAutoRenewResponse();
        this.request("SetDomainAutoRenew", req, resp, cb);
    }


}
module.exports = DomainClient;
