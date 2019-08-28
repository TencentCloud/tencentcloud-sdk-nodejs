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
const DeleteServiceConfigResponse = models.DeleteServiceConfigResponse;
const DescribeServiceConfigsResponse = models.DescribeServiceConfigsResponse;
const DeleteServiceResponse = models.DeleteServiceResponse;
const UpdateServiceResponse = models.UpdateServiceResponse;
const DescribeServicesResponse = models.DescribeServicesResponse;
const Conditions = models.Conditions;
const DescribeServiceConfigsRequest = models.DescribeServiceConfigsRequest;
const Option = models.Option;
const Service = models.Service;
const DescribeRuntimesResponse = models.DescribeRuntimesResponse;
const CreateServiceResponse = models.CreateServiceResponse;
const CreateServiceRequest = models.CreateServiceRequest;
const UpdateServiceRequest = models.UpdateServiceRequest;
const Filter = models.Filter;
const CreateServiceConfigResponse = models.CreateServiceConfigResponse;
const DeleteServiceRequest = models.DeleteServiceRequest;
const Runtime = models.Runtime;
const Scaler = models.Scaler;
const ServiceConfig = models.ServiceConfig;
const DescribeRuntimesRequest = models.DescribeRuntimesRequest;
const CreateServiceConfigRequest = models.CreateServiceConfigRequest;
const DeleteServiceConfigRequest = models.DeleteServiceConfigRequest;
const ServiceStatus = models.ServiceStatus;
const DescribeServicesRequest = models.DescribeServicesRequest;


/**
 * tiems client
 * @class
 */
class TiemsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tiems.tencentcloudapi.com", "2019-04-16", credential, region, profile);
    }
    
    /**
     * 创建服务
     * @param {CreateServiceRequest} req
     * @param {function(string, CreateServiceResponse):void} cb
     * @public
     */
    CreateService(req, cb) {
        let resp = new CreateServiceResponse();
        this.request("CreateService", req, resp, cb);
    }

    /**
     * 描述服务
     * @param {DescribeServicesRequest} req
     * @param {function(string, DescribeServicesResponse):void} cb
     * @public
     */
    DescribeServices(req, cb) {
        let resp = new DescribeServicesResponse();
        this.request("DescribeServices", req, resp, cb);
    }

    /**
     * 创建服务配置
     * @param {CreateServiceConfigRequest} req
     * @param {function(string, CreateServiceConfigResponse):void} cb
     * @public
     */
    CreateServiceConfig(req, cb) {
        let resp = new CreateServiceConfigResponse();
        this.request("CreateServiceConfig", req, resp, cb);
    }

    /**
     * 描述服务配置
     * @param {DescribeServiceConfigsRequest} req
     * @param {function(string, DescribeServiceConfigsResponse):void} cb
     * @public
     */
    DescribeServiceConfigs(req, cb) {
        let resp = new DescribeServiceConfigsResponse();
        this.request("DescribeServiceConfigs", req, resp, cb);
    }

    /**
     * 删除服务
     * @param {DeleteServiceRequest} req
     * @param {function(string, DeleteServiceResponse):void} cb
     * @public
     */
    DeleteService(req, cb) {
        let resp = new DeleteServiceResponse();
        this.request("DeleteService", req, resp, cb);
    }

    /**
     * 删除服务配置
     * @param {DeleteServiceConfigRequest} req
     * @param {function(string, DeleteServiceConfigResponse):void} cb
     * @public
     */
    DeleteServiceConfig(req, cb) {
        let resp = new DeleteServiceConfigResponse();
        this.request("DeleteServiceConfig", req, resp, cb);
    }

    /**
     * 描述服务运行环境
     * @param {DescribeRuntimesRequest} req
     * @param {function(string, DescribeRuntimesResponse):void} cb
     * @public
     */
    DescribeRuntimes(req, cb) {
        let resp = new DescribeRuntimesResponse();
        this.request("DescribeRuntimes", req, resp, cb);
    }

    /**
     * 更新服务
     * @param {UpdateServiceRequest} req
     * @param {function(string, UpdateServiceResponse):void} cb
     * @public
     */
    UpdateService(req, cb) {
        let resp = new UpdateServiceResponse();
        this.request("UpdateService", req, resp, cb);
    }


}
module.exports = TiemsClient;
