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
const CreateInstanceResult = models.CreateInstanceResult;
const LoginSettings = models.LoginSettings;
const VPCSettings = models.VPCSettings;
const TerminateTasksResponse = models.TerminateTasksResponse;
const ScaleOutInstanceResponse = models.ScaleOutInstanceResponse;
const InquiryPriceCreateInstanceRequest = models.InquiryPriceCreateInstanceRequest;
const ClusterInstanceInfo = models.ClusterInstanceInfo;
const ClusterInfoResult = models.ClusterInfoResult;
const ResourceSpec = models.ResourceSpec;
const CreateInstanceResponse = models.CreateInstanceResponse;
const ScaleOutInstanceResult = models.ScaleOutInstanceResult;
const InquiryPriceCreateInstanceResponse = models.InquiryPriceCreateInstanceResponse;
const PreExecuteFileSettings = models.PreExecuteFileSettings;
const CreateInstanceRequest = models.CreateInstanceRequest;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const InquiryPriceScaleOutInstanceRequest = models.InquiryPriceScaleOutInstanceRequest;
const Placement = models.Placement;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const COSSettings = models.COSSettings;
const ScaleOutInstanceRequest = models.ScaleOutInstanceRequest;
const InquiryPriceScaleOutInstanceResponse = models.InquiryPriceScaleOutInstanceResponse;
const TerminateTasksRequest = models.TerminateTasksRequest;
const EMRProductConfigSettings = models.EMRProductConfigSettings;
const NodeSpec = models.NodeSpec;
const TerminateInstanceRequest = models.TerminateInstanceRequest;
const TerminateInstanceResponse = models.TerminateInstanceResponse;
const InquiryPriceResult = models.InquiryPriceResult;
const TerminateResult = models.TerminateResult;
const MultiDisk = models.MultiDisk;


/**
 * emr client
 * @class
 */
class EmrClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("emr.tencentcloudapi.com", "2019-01-03", credential, region, profile);
    }
    
    /**
     * 缩容Task节点
     * @param {TerminateTasksRequest} req
     * @param {function(string, TerminateTasksResponse):void} cb
     * @public
     */
    TerminateTasks(req, cb) {
        let resp = new TerminateTasksResponse();
        this.request("TerminateTasks", req, resp, cb);
    }

    /**
     * 查询EMR实例
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * 销毁EMR实例
     * @param {TerminateInstanceRequest} req
     * @param {function(string, TerminateInstanceResponse):void} cb
     * @public
     */
    TerminateInstance(req, cb) {
        let resp = new TerminateInstanceResponse();
        this.request("TerminateInstance", req, resp, cb);
    }

    /**
     * 创建EMR实例
     * @param {CreateInstanceRequest} req
     * @param {function(string, CreateInstanceResponse):void} cb
     * @public
     */
    CreateInstance(req, cb) {
        let resp = new CreateInstanceResponse();
        this.request("CreateInstance", req, resp, cb);
    }

    /**
     * 创建实例询价
     * @param {InquiryPriceCreateInstanceRequest} req
     * @param {function(string, InquiryPriceCreateInstanceResponse):void} cb
     * @public
     */
    InquiryPriceCreateInstance(req, cb) {
        let resp = new InquiryPriceCreateInstanceResponse();
        this.request("InquiryPriceCreateInstance", req, resp, cb);
    }

    /**
     * 扩容询价. 当扩容时候，请通过该接口查询价格。
     * @param {InquiryPriceScaleOutInstanceRequest} req
     * @param {function(string, InquiryPriceScaleOutInstanceResponse):void} cb
     * @public
     */
    InquiryPriceScaleOutInstance(req, cb) {
        let resp = new InquiryPriceScaleOutInstanceResponse();
        this.request("InquiryPriceScaleOutInstance", req, resp, cb);
    }

    /**
     * 实例扩容
     * @param {ScaleOutInstanceRequest} req
     * @param {function(string, ScaleOutInstanceResponse):void} cb
     * @public
     */
    ScaleOutInstance(req, cb) {
        let resp = new ScaleOutInstanceResponse();
        this.request("ScaleOutInstance", req, resp, cb);
    }


}
module.exports = EmrClient;
