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
const ListRuntimesMCResponse = models.ListRuntimesMCResponse;
const RuntimeMC = models.RuntimeMC;
const GetRuntimeResourceMonitorMetricMCResponse = models.GetRuntimeResourceMonitorMetricMCResponse;
const ListRuntimeDeployedInstancesMCRequest = models.ListRuntimeDeployedInstancesMCRequest;
const RuntimeExtensionMC = models.RuntimeExtensionMC;
const ListDeployableRuntimesMCResponse = models.ListDeployableRuntimesMCResponse;
const GetRuntimeMCResponse = models.GetRuntimeMCResponse;
const ListDeployableRuntimesMCRequest = models.ListDeployableRuntimesMCRequest;
const ListRuntimesMCRequest = models.ListRuntimesMCRequest;
const GetRuntimeMCRequest = models.GetRuntimeMCRequest;
const MetricValueMC = models.MetricValueMC;
const GetRuntimeResourceMonitorMetricMCRequest = models.GetRuntimeResourceMonitorMetricMCRequest;
const AbstractRuntimeMC = models.AbstractRuntimeMC;
const ListRuntimeDeployedInstancesMCResponse = models.ListRuntimeDeployedInstancesMCResponse;
const RuntimeDeployedInstanceMC = models.RuntimeDeployedInstanceMC;


/**
 * eis client
 * @class
 */
class EisClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("eis.tencentcloudapi.com", "2021-06-01", credential, region, profile);
    }
    
    /**
     * 获取运行时详情
     * @param {GetRuntimeMCRequest} req
     * @param {function(string, GetRuntimeMCResponse):void} cb
     * @public
     */
    GetRuntimeMC(req, cb) {
        let resp = new GetRuntimeMCResponse();
        this.request("GetRuntimeMC", req, resp, cb);
    }

    /**
     * 返回用户可用的运行时列表，发布应用时返回的运行时环境，仅shared和private运行时，无sandbox运行时，并且只有running/scaling状态的
     * @param {ListDeployableRuntimesMCRequest} req
     * @param {function(string, ListDeployableRuntimesMCResponse):void} cb
     * @public
     */
    ListDeployableRuntimesMC(req, cb) {
        let resp = new ListDeployableRuntimesMCResponse();
        this.request("ListDeployableRuntimesMC", req, resp, cb);
    }

    /**
     * 获取运行时资源监控详情，cpu，memory，bandwidth
     * @param {GetRuntimeResourceMonitorMetricMCRequest} req
     * @param {function(string, GetRuntimeResourceMonitorMetricMCResponse):void} cb
     * @public
     */
    GetRuntimeResourceMonitorMetricMC(req, cb) {
        let resp = new GetRuntimeResourceMonitorMetricMCResponse();
        this.request("GetRuntimeResourceMonitorMetricMC", req, resp, cb);
    }

    /**
     * 获取运行时部署的应用实例列表
     * @param {ListRuntimeDeployedInstancesMCRequest} req
     * @param {function(string, ListRuntimeDeployedInstancesMCResponse):void} cb
     * @public
     */
    ListRuntimeDeployedInstancesMC(req, cb) {
        let resp = new ListRuntimeDeployedInstancesMCResponse();
        this.request("ListRuntimeDeployedInstancesMC", req, resp, cb);
    }

    /**
     * 返回用户的运行时列表，运行时管理主页使用，包含沙箱、共享运行时及独立运行时环境，不包含已经删除的运行时
     * @param {ListRuntimesMCRequest} req
     * @param {function(string, ListRuntimesMCResponse):void} cb
     * @public
     */
    ListRuntimesMC(req, cb) {
        let resp = new ListRuntimesMCResponse();
        this.request("ListRuntimesMC", req, resp, cb);
    }


}
module.exports = EisClient;
