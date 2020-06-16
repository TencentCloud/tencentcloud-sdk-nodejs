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
const Subnet = models.Subnet;
const DescribeSubnetRequest = models.DescribeSubnetRequest;
const DescribeVsmsResponse = models.DescribeVsmsResponse;
const InquiryPriceBuyVsmRequest = models.InquiryPriceBuyVsmRequest;
const DescribeVpcResponse = models.DescribeVpcResponse;
const ModifyVsmAttributesRequest = models.ModifyVsmAttributesRequest;
const DescribeSubnetResponse = models.DescribeSubnetResponse;
const DescribeHSMByVpcIdRequest = models.DescribeHSMByVpcIdRequest;
const DescribeHSMByVpcIdResponse = models.DescribeHSMByVpcIdResponse;
const DescribeUsgRuleResponse = models.DescribeUsgRuleResponse;
const ResourceInfo = models.ResourceInfo;
const DescribeVpcRequest = models.DescribeVpcRequest;
const Vpc = models.Vpc;
const DescribeUsgRequest = models.DescribeUsgRequest;
const DescribeVsmAttributesResponse = models.DescribeVsmAttributesResponse;
const SgUnit = models.SgUnit;
const UsgRuleDetail = models.UsgRuleDetail;
const InquiryPriceBuyVsmResponse = models.InquiryPriceBuyVsmResponse;
const DescribeHSMBySubnetIdResponse = models.DescribeHSMBySubnetIdResponse;
const DescribeUsgResponse = models.DescribeUsgResponse;
const DescribeHSMBySubnetIdRequest = models.DescribeHSMBySubnetIdRequest;
const DescribeVsmsRequest = models.DescribeVsmsRequest;
const DescribeUsgRuleRequest = models.DescribeUsgRuleRequest;
const ModifyVsmAttributesResponse = models.ModifyVsmAttributesResponse;
const DescribeVsmAttributesRequest = models.DescribeVsmAttributesRequest;
const UsgPolicy = models.UsgPolicy;


/**
 * cloudhsm client
 * @class
 */
class CloudhsmClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cloudhsm.tencentcloudapi.com", "2019-11-12", credential, region, profile);
    }
    
    /**
     * 修改VSM属性
     * @param {ModifyVsmAttributesRequest} req
     * @param {function(string, ModifyVsmAttributesResponse):void} cb
     * @public
     */
    ModifyVsmAttributes(req, cb) {
        let resp = new ModifyVsmAttributesResponse();
        this.request("ModifyVsmAttributes", req, resp, cb);
    }

    /**
     * 获取VSM属性
     * @param {DescribeVsmAttributesRequest} req
     * @param {function(string, DescribeVsmAttributesResponse):void} cb
     * @public
     */
    DescribeVsmAttributes(req, cb) {
        let resp = new DescribeVsmAttributesResponse();
        this.request("DescribeVsmAttributes", req, resp, cb);
    }

    /**
     * 获取用户VSM列表
     * @param {DescribeVsmsRequest} req
     * @param {function(string, DescribeVsmsResponse):void} cb
     * @public
     */
    DescribeVsms(req, cb) {
        let resp = new DescribeVsmsResponse();
        this.request("DescribeVsms", req, resp, cb);
    }

    /**
     * 查询用户的私有网络列表
     * @param {DescribeVpcRequest} req
     * @param {function(string, DescribeVpcResponse):void} cb
     * @public
     */
    DescribeVpc(req, cb) {
        let resp = new DescribeVpcResponse();
        this.request("DescribeVpc", req, resp, cb);
    }

    /**
     * 通过VpcId获取Hsm资源数
     * @param {DescribeHSMByVpcIdRequest} req
     * @param {function(string, DescribeHSMByVpcIdResponse):void} cb
     * @public
     */
    DescribeHSMByVpcId(req, cb) {
        let resp = new DescribeHSMByVpcIdResponse();
        this.request("DescribeHSMByVpcId", req, resp, cb);
    }

    /**
     * 通过SubnetId获取Hsm资源数
     * @param {DescribeHSMBySubnetIdRequest} req
     * @param {function(string, DescribeHSMBySubnetIdResponse):void} cb
     * @public
     */
    DescribeHSMBySubnetId(req, cb) {
        let resp = new DescribeHSMBySubnetIdResponse();
        this.request("DescribeHSMBySubnetId", req, resp, cb);
    }

    /**
     * 根据用户的AppId获取用户安全组列表
     * @param {DescribeUsgRequest} req
     * @param {function(string, DescribeUsgResponse):void} cb
     * @public
     */
    DescribeUsg(req, cb) {
        let resp = new DescribeUsgResponse();
        this.request("DescribeUsg", req, resp, cb);
    }

    /**
     * 查询子网列表
     * @param {DescribeSubnetRequest} req
     * @param {function(string, DescribeSubnetResponse):void} cb
     * @public
     */
    DescribeSubnet(req, cb) {
        let resp = new DescribeSubnetResponse();
        this.request("DescribeSubnet", req, resp, cb);
    }

    /**
     * 购买询价接口
     * @param {InquiryPriceBuyVsmRequest} req
     * @param {function(string, InquiryPriceBuyVsmResponse):void} cb
     * @public
     */
    InquiryPriceBuyVsm(req, cb) {
        let resp = new InquiryPriceBuyVsmResponse();
        this.request("InquiryPriceBuyVsm", req, resp, cb);
    }

    /**
     * 获取安全组详情
     * @param {DescribeUsgRuleRequest} req
     * @param {function(string, DescribeUsgRuleResponse):void} cb
     * @public
     */
    DescribeUsgRule(req, cb) {
        let resp = new DescribeUsgRuleResponse();
        this.request("DescribeUsgRule", req, resp, cb);
    }


}
module.exports = CloudhsmClient;
