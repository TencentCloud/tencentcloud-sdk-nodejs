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
const DeleteAttackDownloadRecordRequest = models.DeleteAttackDownloadRecordRequest;
const ResponseCode = models.ResponseCode;
const AddCustomRuleRequest = models.AddCustomRuleRequest;
const Strategy = models.Strategy;
const ModifyCustomRuleStatusRequest = models.ModifyCustomRuleStatusRequest;
const DescribeCustomRulesRequest = models.DescribeCustomRulesRequest;
const DeleteSessionRequest = models.DeleteSessionRequest;
const DescribeCustomRulesPagingInfo = models.DescribeCustomRulesPagingInfo;
const DeleteDownloadRecordResponse = models.DeleteDownloadRecordResponse;
const DescribeCustomRulesResponse = models.DescribeCustomRulesResponse;
const DeleteDownloadRecordRequest = models.DeleteDownloadRecordRequest;
const ModifyCustomRuleStatusResponse = models.ModifyCustomRuleStatusResponse;
const DescribeUserClbWafRegionsRequest = models.DescribeUserClbWafRegionsRequest;
const DescribeUserClbWafRegionsResponse = models.DescribeUserClbWafRegionsResponse;
const DeleteAttackDownloadRecordResponse = models.DeleteAttackDownloadRecordResponse;
const DescribeCustomRulesRspRuleListItem = models.DescribeCustomRulesRspRuleListItem;
const CreateAttackDownloadTaskRequest = models.CreateAttackDownloadTaskRequest;
const CreateAttackDownloadTaskResponse = models.CreateAttackDownloadTaskResponse;
const DeleteSessionResponse = models.DeleteSessionResponse;
const AddCustomRuleResponse = models.AddCustomRuleResponse;


/**
 * waf client
 * @class
 */
class WafClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("waf.tencentcloudapi.com", "2018-01-25", credential, region, profile);
    }
    
    /**
     * 删除攻击日志下载任务记录
     * @param {DeleteAttackDownloadRecordRequest} req
     * @param {function(string, DeleteAttackDownloadRecordResponse):void} cb
     * @public
     */
    DeleteAttackDownloadRecord(req, cb) {
        let resp = new DeleteAttackDownloadRecordResponse();
        this.request("DeleteAttackDownloadRecord", req, resp, cb);
    }

    /**
     * 开启或禁用自定义策略
     * @param {ModifyCustomRuleStatusRequest} req
     * @param {function(string, ModifyCustomRuleStatusResponse):void} cb
     * @public
     */
    ModifyCustomRuleStatus(req, cb) {
        let resp = new ModifyCustomRuleStatusResponse();
        this.request("ModifyCustomRuleStatus", req, resp, cb);
    }

    /**
     * 获取防护配置中的自定义策略列表
     * @param {DescribeCustomRulesRequest} req
     * @param {function(string, DescribeCustomRulesResponse):void} cb
     * @public
     */
    DescribeCustomRules(req, cb) {
        let resp = new DescribeCustomRulesResponse();
        this.request("DescribeCustomRules", req, resp, cb);
    }

    /**
     * 删除访问日志下载记录
     * @param {DeleteDownloadRecordRequest} req
     * @param {function(string, DeleteDownloadRecordResponse):void} cb
     * @public
     */
    DeleteDownloadRecord(req, cb) {
        let resp = new DeleteDownloadRecordResponse();
        this.request("DeleteDownloadRecord", req, resp, cb);
    }

    /**
     * 增加自定义策略
     * @param {AddCustomRuleRequest} req
     * @param {function(string, AddCustomRuleResponse):void} cb
     * @public
     */
    AddCustomRule(req, cb) {
        let resp = new AddCustomRuleResponse();
        this.request("AddCustomRule", req, resp, cb);
    }

    /**
     * 删除CC攻击的session设置
     * @param {DeleteSessionRequest} req
     * @param {function(string, DeleteSessionResponse):void} cb
     * @public
     */
    DeleteSession(req, cb) {
        let resp = new DeleteSessionResponse();
        this.request("DeleteSession", req, resp, cb);
    }

    /**
     * 在负载均衡型WAF的添加、编辑域名配置的时候，需要展示负载均衡型WAF（clb-waf)支持的地域列表，通过DescribeUserClbWafRegions既可以获得当前对客户已经开放的地域列表
     * @param {DescribeUserClbWafRegionsRequest} req
     * @param {function(string, DescribeUserClbWafRegionsResponse):void} cb
     * @public
     */
    DescribeUserClbWafRegions(req, cb) {
        let resp = new DescribeUserClbWafRegionsResponse();
        this.request("DescribeUserClbWafRegions", req, resp, cb);
    }

    /**
     * 创建攻击日志下载任务
     * @param {CreateAttackDownloadTaskRequest} req
     * @param {function(string, CreateAttackDownloadTaskResponse):void} cb
     * @public
     */
    CreateAttackDownloadTask(req, cb) {
        let resp = new CreateAttackDownloadTaskResponse();
        this.request("CreateAttackDownloadTask", req, resp, cb);
    }


}
module.exports = WafClient;
