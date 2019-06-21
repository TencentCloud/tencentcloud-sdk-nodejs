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
const PlanDetailInfo = models.PlanDetailInfo;
const AppSetInfo = models.AppSetInfo;
const CreateShieldPlanInstanceResponse = models.CreateShieldPlanInstanceResponse;
const ScanInfo = models.ScanInfo;
const CreateResourceInstancesRequest = models.CreateResourceInstancesRequest;
const DescribeShieldInstancesResponse = models.DescribeShieldInstancesResponse;
const PluginInfo = models.PluginInfo;
const ScanSensitiveList = models.ScanSensitiveList;
const DescribeShieldResultRequest = models.DescribeShieldResultRequest;
const CreateShieldInstanceRequest = models.CreateShieldInstanceRequest;
const CreateCosSecKeyInstanceRequest = models.CreateCosSecKeyInstanceRequest;
const DescribeScanResultsResponse = models.DescribeScanResultsResponse;
const CreateScanInstancesRequest = models.CreateScanInstancesRequest;
const DescribeUserBaseInfoInstanceResponse = models.DescribeUserBaseInfoInstanceResponse;
const CreateShieldPlanInstanceRequest = models.CreateShieldPlanInstanceRequest;
const ScanSetInfo = models.ScanSetInfo;
const AppScanSet = models.AppScanSet;
const ShieldPlanInfo = models.ShieldPlanInfo;
const CreateBindInstanceRequest = models.CreateBindInstanceRequest;
const CreateShieldInstanceResponse = models.CreateShieldInstanceResponse;
const DeleteShieldInstancesRequest = models.DeleteShieldInstancesRequest;
const ResourceInfo = models.ResourceInfo;
const DescribeShieldInstancesRequest = models.DescribeShieldInstancesRequest;
const CreateScanInstancesResponse = models.CreateScanInstancesResponse;
const DescribeScanInstancesResponse = models.DescribeScanInstancesResponse;
const VulInfo = models.VulInfo;
const AppInfo = models.AppInfo;
const ServiceInfo = models.ServiceInfo;
const SoInfo = models.SoInfo;
const DescribeShieldPlanInstanceResponse = models.DescribeShieldPlanInstanceResponse;
const ScanSensitiveInfo = models.ScanSensitiveInfo;
const ResourceServiceInfo = models.ResourceServiceInfo;
const DescribeResourceInstancesRequest = models.DescribeResourceInstancesRequest;
const AdInfo = models.AdInfo;
const DescribeShieldPlanInstanceRequest = models.DescribeShieldPlanInstanceRequest;
const ShieldInfo = models.ShieldInfo;
const ScanPermissionList = models.ScanPermissionList;
const CreateResourceInstancesResponse = models.CreateResourceInstancesResponse;
const AppDetailInfo = models.AppDetailInfo;
const DeleteScanInstancesResponse = models.DeleteScanInstancesResponse;
const Filter = models.Filter;
const DeleteShieldInstancesResponse = models.DeleteShieldInstancesResponse;
const DescribeScanInstancesRequest = models.DescribeScanInstancesRequest;
const DescribeUserBaseInfoInstanceRequest = models.DescribeUserBaseInfoInstanceRequest;
const DescribeResourceInstancesResponse = models.DescribeResourceInstancesResponse;
const DescribeScanResultsRequest = models.DescribeScanResultsRequest;
const CreateCosSecKeyInstanceResponse = models.CreateCosSecKeyInstanceResponse;
const VirusInfo = models.VirusInfo;
const ScanPermissionInfo = models.ScanPermissionInfo;
const PlanInfo = models.PlanInfo;
const DescribeShieldResultResponse = models.DescribeShieldResultResponse;
const CreateBindInstanceResponse = models.CreateBindInstanceResponse;
const VulList = models.VulList;
const BindInfo = models.BindInfo;
const DeleteScanInstancesRequest = models.DeleteScanInstancesRequest;


/**
 * ms client
 * @class
 */
class MsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("ms.tencentcloudapi.com", "2018-04-08", credential, region, profile);
    }
    
    /**
     * 用户通过该接口批量提交应用进行应用扫描，扫描后需通过DescribeScanResults接口查询扫描结果
     * @param {CreateScanInstancesRequest} req
     * @param {function(string, CreateScanInstancesResponse):void} cb
     * @public
     */
    CreateScanInstances(req, cb) {
        let resp = new CreateScanInstancesResponse();
        this.request("CreateScanInstances", req, resp, cb);
    }

    /**
     * 通过唯一标识获取加固的结果
     * @param {DescribeShieldResultRequest} req
     * @param {function(string, DescribeShieldResultResponse):void} cb
     * @public
     */
    DescribeShieldResult(req, cb) {
        let resp = new DescribeShieldResultResponse();
        this.request("DescribeShieldResult", req, resp, cb);
    }

    /**
     * 删除一个或者多个app扫描信息
     * @param {DeleteScanInstancesRequest} req
     * @param {function(string, DeleteScanInstancesResponse):void} cb
     * @public
     */
    DeleteScanInstances(req, cb) {
        let resp = new DeleteScanInstancesResponse();
        this.request("DeleteScanInstances", req, resp, cb);
    }

    /**
     * 用户可以使用该接口自建资源，只支持白名单用户
     * @param {CreateResourceInstancesRequest} req
     * @param {function(string, CreateResourceInstancesResponse):void} cb
     * @public
     */
    CreateResourceInstances(req, cb) {
        let resp = new CreateResourceInstancesResponse();
        this.request("CreateResourceInstances", req, resp, cb);
    }

    /**
     * 将应用和资源进行绑定
     * @param {CreateBindInstanceRequest} req
     * @param {function(string, CreateBindInstanceResponse):void} cb
     * @public
     */
    CreateBindInstance(req, cb) {
        let resp = new CreateBindInstanceResponse();
        this.request("CreateBindInstance", req, resp, cb);
    }

    /**
     * 获取云COS文件存储临时密钥，密钥仅限于临时上传文件，有访问限制和时效性。
     * @param {CreateCosSecKeyInstanceRequest} req
     * @param {function(string, CreateCosSecKeyInstanceResponse):void} cb
     * @public
     */
    CreateCosSecKeyInstance(req, cb) {
        let resp = new CreateCosSecKeyInstanceResponse();
        this.request("CreateCosSecKeyInstance", req, resp, cb);
    }

    /**
     * 获取某个用户的所有资源信息
     * @param {DescribeResourceInstancesRequest} req
     * @param {function(string, DescribeResourceInstancesResponse):void} cb
     * @public
     */
    DescribeResourceInstances(req, cb) {
        let resp = new DescribeResourceInstancesResponse();
        this.request("DescribeResourceInstances", req, resp, cb);
    }

    /**
     * 用户通过CreateScanInstances接口提交应用进行风险批量扫描后，用此接口批量获取风险详细信息,包含漏洞信息，广告信息，插件信息和病毒信息
     * @param {DescribeScanResultsRequest} req
     * @param {function(string, DescribeScanResultsResponse):void} cb
     * @public
     */
    DescribeScanResults(req, cb) {
        let resp = new DescribeScanResultsResponse();
        this.request("DescribeScanResults", req, resp, cb);
    }

    /**
     * 查询加固策略
     * @param {DescribeShieldPlanInstanceRequest} req
     * @param {function(string, DescribeShieldPlanInstanceResponse):void} cb
     * @public
     */
    DescribeShieldPlanInstance(req, cb) {
        let resp = new DescribeShieldPlanInstanceResponse();
        this.request("DescribeShieldPlanInstance", req, resp, cb);
    }

    /**
     * 用户通过该接口提交应用进行应用加固，加固后需通过DescribeShieldResult接口查询加固结果
     * @param {CreateShieldInstanceRequest} req
     * @param {function(string, CreateShieldInstanceResponse):void} cb
     * @public
     */
    CreateShieldInstance(req, cb) {
        let resp = new CreateShieldInstanceResponse();
        this.request("CreateShieldInstance", req, resp, cb);
    }

    /**
     * 本接口用于查看app列表。
可以通过指定任务唯一标识ItemId来查询指定app的详细信息，或通过设定过滤器来查询满足过滤条件的app的详细信息。 指定偏移(Offset)和限制(Limit)来选择结果中的一部分，默认返回满足条件的前20个app信息。

     * @param {DescribeShieldInstancesRequest} req
     * @param {function(string, DescribeShieldInstancesResponse):void} cb
     * @public
     */
    DescribeShieldInstances(req, cb) {
        let resp = new DescribeShieldInstancesResponse();
        this.request("DescribeShieldInstances", req, resp, cb);
    }

    /**
     * 对资源进行策略新增
     * @param {CreateShieldPlanInstanceRequest} req
     * @param {function(string, CreateShieldPlanInstanceResponse):void} cb
     * @public
     */
    CreateShieldPlanInstance(req, cb) {
        let resp = new CreateShieldPlanInstanceResponse();
        this.request("CreateShieldPlanInstance", req, resp, cb);
    }

    /**
     * 获取用户基础信息
     * @param {DescribeUserBaseInfoInstanceRequest} req
     * @param {function(string, DescribeUserBaseInfoInstanceResponse):void} cb
     * @public
     */
    DescribeUserBaseInfoInstance(req, cb) {
        let resp = new DescribeUserBaseInfoInstanceResponse();
        this.request("DescribeUserBaseInfoInstance", req, resp, cb);
    }

    /**
     * 本接口用于查看app列表。
可以通过指定任务唯一标识ItemId来查询指定app的详细信息，或通过设定过滤器来查询满足过滤条件的app的详细信息。 指定偏移(Offset)和限制(Limit)来选择结果中的一部分，默认返回满足条件的前20个app信息。
     * @param {DescribeScanInstancesRequest} req
     * @param {function(string, DescribeScanInstancesResponse):void} cb
     * @public
     */
    DescribeScanInstances(req, cb) {
        let resp = new DescribeScanInstancesResponse();
        this.request("DescribeScanInstances", req, resp, cb);
    }

    /**
     * 删除一个或者多个app加固信息
     * @param {DeleteShieldInstancesRequest} req
     * @param {function(string, DeleteShieldInstancesResponse):void} cb
     * @public
     */
    DeleteShieldInstances(req, cb) {
        let resp = new DeleteShieldInstancesResponse();
        this.request("DeleteShieldInstances", req, resp, cb);
    }


}
module.exports = MsClient;
