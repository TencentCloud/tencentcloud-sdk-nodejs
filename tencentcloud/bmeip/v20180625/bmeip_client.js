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
const UnbindEipAclsRequest = models.UnbindEipAclsRequest;
const EipAclMap = models.EipAclMap;
const ModifyEipChargeResponse = models.ModifyEipChargeResponse;
const ModifyEipAclResponse = models.ModifyEipAclResponse;
const DescribeEipsResponse = models.DescribeEipsResponse;
const ModifyEipAclRequest = models.ModifyEipAclRequest;
const UnbindVpcIpRequest = models.UnbindVpcIpRequest;
const BindRsResponse = models.BindRsResponse;
const BindEipAclsResponse = models.BindEipAclsResponse;
const CreateEipRequest = models.CreateEipRequest;
const EipAclRule = models.EipAclRule;
const UnbindHostedResponse = models.UnbindHostedResponse;
const DeleteEipAclRequest = models.DeleteEipAclRequest;
const EipInfo = models.EipInfo;
const UnbindEipAclsResponse = models.UnbindEipAclsResponse;
const DescribeEipAclsResponse = models.DescribeEipAclsResponse;
const ModifyEipNameResponse = models.ModifyEipNameResponse;
const DescribeEipQuotaResponse = models.DescribeEipQuotaResponse;
const UnbindRsResponse = models.UnbindRsResponse;
const BindRsRequest = models.BindRsRequest;
const UnbindHostedRequest = models.UnbindHostedRequest;
const BindVpcIpResponse = models.BindVpcIpResponse;
const DescribeEipsRequest = models.DescribeEipsRequest;
const ModifyEipNameRequest = models.ModifyEipNameRequest;
const DeleteEipResponse = models.DeleteEipResponse;
const BindHostedResponse = models.BindHostedResponse;
const BindVpcIpRequest = models.BindVpcIpRequest;
const CreateEipAclRequest = models.CreateEipAclRequest;
const EipAcl = models.EipAcl;
const CreateEipResponse = models.CreateEipResponse;
const BindHostedRequest = models.BindHostedRequest;
const DescribeEipTaskResponse = models.DescribeEipTaskResponse;
const ModifyEipChargeRequest = models.ModifyEipChargeRequest;
const DescribeEipQuotaRequest = models.DescribeEipQuotaRequest;
const DeleteEipRequest = models.DeleteEipRequest;
const DeleteEipAclResponse = models.DeleteEipAclResponse;
const DescribeEipAclsRequest = models.DescribeEipAclsRequest;
const BindEipAclsRequest = models.BindEipAclsRequest;
const DescribeEipTaskRequest = models.DescribeEipTaskRequest;
const UnbindRsRequest = models.UnbindRsRequest;
const UnbindVpcIpResponse = models.UnbindVpcIpResponse;
const CreateEipAclResponse = models.CreateEipAclResponse;


/**
 * bmeip client
 * @class
 */
class BmeipClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("bmeip.tencentcloudapi.com", "2018-06-25", credential, region, profile);
    }
    
    /**
     * 解绑黑石EIP
     * @param {UnbindRsRequest} req
     * @param {function(string, UnbindRsResponse):void} cb
     * @public
     */
    UnbindRs(req, cb) {
        let resp = new UnbindRsResponse();
        this.request("UnbindRs", req, resp, cb);
    }

    /**
     * BindHosted接口用于绑定黑石弹性公网IP到黑石托管机器上
     * @param {BindHostedRequest} req
     * @param {function(string, BindHostedResponse):void} cb
     * @public
     */
    BindHosted(req, cb) {
        let resp = new BindHostedResponse();
        this.request("BindHosted", req, resp, cb);
    }

    /**
     * 创建黑石弹性公网 EIPACL
     * @param {CreateEipAclRequest} req
     * @param {function(string, CreateEipAclResponse):void} cb
     * @public
     */
    CreateEipAcl(req, cb) {
        let resp = new CreateEipAclResponse();
        this.request("CreateEipAcl", req, resp, cb);
    }

    /**
     * 创建黑石弹性公网IP
     * @param {CreateEipRequest} req
     * @param {function(string, CreateEipResponse):void} cb
     * @public
     */
    CreateEip(req, cb) {
        let resp = new CreateEipResponse();
        this.request("CreateEip", req, resp, cb);
    }

    /**
     * 修改弹性公网IP ACL
     * @param {ModifyEipAclRequest} req
     * @param {function(string, ModifyEipAclResponse):void} cb
     * @public
     */
    ModifyEipAcl(req, cb) {
        let resp = new ModifyEipAclResponse();
        this.request("ModifyEipAcl", req, resp, cb);
    }

    /**
     * 查询黑石EIP 限额
     * @param {DescribeEipQuotaRequest} req
     * @param {function(string, DescribeEipQuotaResponse):void} cb
     * @public
     */
    DescribeEipQuota(req, cb) {
        let resp = new DescribeEipQuotaResponse();
        this.request("DescribeEipQuota", req, resp, cb);
    }

    /**
     * 绑定黑石EIP
     * @param {BindRsRequest} req
     * @param {function(string, BindRsResponse):void} cb
     * @public
     */
    BindRs(req, cb) {
        let resp = new BindRsResponse();
        this.request("BindRs", req, resp, cb);
    }

    /**
     * 黑石EIP查询任务状态
     * @param {DescribeEipTaskRequest} req
     * @param {function(string, DescribeEipTaskResponse):void} cb
     * @public
     */
    DescribeEipTask(req, cb) {
        let resp = new DescribeEipTaskResponse();
        this.request("DescribeEipTask", req, resp, cb);
    }

    /**
     * UnbindHosted接口用于解绑托管机器上的EIP
     * @param {UnbindHostedRequest} req
     * @param {function(string, UnbindHostedResponse):void} cb
     * @public
     */
    UnbindHosted(req, cb) {
        let resp = new UnbindHostedResponse();
        this.request("UnbindHosted", req, resp, cb);
    }

    /**
     * 释放黑石弹性公网IP
     * @param {DeleteEipRequest} req
     * @param {function(string, DeleteEipResponse):void} cb
     * @public
     */
    DeleteEip(req, cb) {
        let resp = new DeleteEipResponse();
        this.request("DeleteEip", req, resp, cb);
    }

    /**
     * 黑石EIP修改计费方式
     * @param {ModifyEipChargeRequest} req
     * @param {function(string, ModifyEipChargeResponse):void} cb
     * @public
     */
    ModifyEipCharge(req, cb) {
        let resp = new ModifyEipChargeResponse();
        this.request("ModifyEipCharge", req, resp, cb);
    }

    /**
     * 更新黑石EIP名称
     * @param {ModifyEipNameRequest} req
     * @param {function(string, ModifyEipNameResponse):void} cb
     * @public
     */
    ModifyEipName(req, cb) {
        let resp = new ModifyEipNameResponse();
        this.request("ModifyEipName", req, resp, cb);
    }

    /**
     * 此接口用于为某个 EIP 关联 ACL。
     * @param {BindEipAclsRequest} req
     * @param {function(string, BindEipAclsResponse):void} cb
     * @public
     */
    BindEipAcls(req, cb) {
        let resp = new BindEipAclsResponse();
        this.request("BindEipAcls", req, resp, cb);
    }

    /**
     * 删除弹性公网IP ACL
     * @param {DeleteEipAclRequest} req
     * @param {function(string, DeleteEipAclResponse):void} cb
     * @public
     */
    DeleteEipAcl(req, cb) {
        let resp = new DeleteEipAclResponse();
        this.request("DeleteEipAcl", req, resp, cb);
    }

    /**
     * 解绑弹性公网IP ACL
     * @param {UnbindEipAclsRequest} req
     * @param {function(string, UnbindEipAclsResponse):void} cb
     * @public
     */
    UnbindEipAcls(req, cb) {
        let resp = new UnbindEipAclsResponse();
        this.request("UnbindEipAcls", req, resp, cb);
    }

    /**
     * 黑石EIP查询接口
     * @param {DescribeEipsRequest} req
     * @param {function(string, DescribeEipsResponse):void} cb
     * @public
     */
    DescribeEips(req, cb) {
        let resp = new DescribeEipsResponse();
        this.request("DescribeEips", req, resp, cb);
    }

    /**
     * 黑石EIP绑定VPCIP
     * @param {BindVpcIpRequest} req
     * @param {function(string, BindVpcIpResponse):void} cb
     * @public
     */
    BindVpcIp(req, cb) {
        let resp = new BindVpcIpResponse();
        this.request("BindVpcIp", req, resp, cb);
    }

    /**
     * 黑石EIP解绑VPCIP
     * @param {UnbindVpcIpRequest} req
     * @param {function(string, UnbindVpcIpResponse):void} cb
     * @public
     */
    UnbindVpcIp(req, cb) {
        let resp = new UnbindVpcIpResponse();
        this.request("UnbindVpcIp", req, resp, cb);
    }

    /**
     * 查询弹性公网IP ACL
     * @param {DescribeEipAclsRequest} req
     * @param {function(string, DescribeEipAclsResponse):void} cb
     * @public
     */
    DescribeEipAcls(req, cb) {
        let resp = new DescribeEipAclsResponse();
        this.request("DescribeEipAcls", req, resp, cb);
    }


}
module.exports = BmeipClient;
