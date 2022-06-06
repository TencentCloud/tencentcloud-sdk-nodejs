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
const MountedSettingConf = models.MountedSettingConf;
const ModifyServiceInfoResponse = models.ModifyServiceInfoResponse;
const StorageMountConf = models.StorageMountConf;
const CreateResourceRequest = models.CreateResourceRequest;
const CreateServiceV2Response = models.CreateServiceV2Response;
const CreateCosTokenV2Request = models.CreateCosTokenV2Request;
const DeployServiceV2Response = models.DeployServiceV2Response;
const EsInfo = models.EsInfo;
const DescribeNamespacesResponse = models.DescribeNamespacesResponse;
const PortMapping = models.PortMapping;
const RestartServiceRunPodRequest = models.RestartServiceRunPodRequest;
const ModifyIngressResponse = models.ModifyIngressResponse;
const DeleteIngressRequest = models.DeleteIngressRequest;
const ModifyServiceInfoRequest = models.ModifyServiceInfoRequest;
const CreateNamespaceResponse = models.CreateNamespaceResponse;
const DescribeRelatedIngressesRequest = models.DescribeRelatedIngressesRequest;
const CosToken = models.CosToken;
const DescribeNamespacesRequest = models.DescribeNamespacesRequest;
const CreateCosTokenRequest = models.CreateCosTokenRequest;
const DeployServiceV2Request = models.DeployServiceV2Request;
const ModifyIngressRequest = models.ModifyIngressRequest;
const GenerateDownloadUrlResponse = models.GenerateDownloadUrlResponse;
const DescribeRelatedIngressesResponse = models.DescribeRelatedIngressesResponse;
const CreateNamespaceRequest = models.CreateNamespaceRequest;
const DescribeIngressesRequest = models.DescribeIngressesRequest;
const DescribeRunPodPage = models.DescribeRunPodPage;
const DescribeServiceRunPodListV2Request = models.DescribeServiceRunPodListV2Request;
const LogOutputConf = models.LogOutputConf;
const DescribeIngressesResponse = models.DescribeIngressesResponse;
const IngressInfo = models.IngressInfo;
const DeleteIngressResponse = models.DeleteIngressResponse;
const RestartServiceRunPodResponse = models.RestartServiceRunPodResponse;
const ModifyNamespaceRequest = models.ModifyNamespaceRequest;
const IngressRuleBackend = models.IngressRuleBackend;
const DescribeIngressResponse = models.DescribeIngressResponse;
const CreateCosTokenResponse = models.CreateCosTokenResponse;
const IngressRule = models.IngressRule;
const IngressRulePath = models.IngressRulePath;
const StorageConf = models.StorageConf;
const ModifyNamespaceResponse = models.ModifyNamespaceResponse;
const RunVersionPod = models.RunVersionPod;
const IngressRuleValue = models.IngressRuleValue;
const CreateResourceResponse = models.CreateResourceResponse;
const DescribeServiceRunPodListV2Response = models.DescribeServiceRunPodListV2Response;
const TemNamespaceInfo = models.TemNamespaceInfo;
const NamespacePage = models.NamespacePage;
const HealthCheckConfig = models.HealthCheckConfig;
const CreateCosTokenV2Response = models.CreateCosTokenV2Response;
const IngressTls = models.IngressTls;
const GenerateDownloadUrlRequest = models.GenerateDownloadUrlRequest;
const DeployStrategyConf = models.DeployStrategyConf;
const DescribeIngressRequest = models.DescribeIngressRequest;
const CreateServiceV2Request = models.CreateServiceV2Request;
const EksService = models.EksService;
const Pair = models.Pair;


/**
 * tem client
 * @class
 */
class TemClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tem.tencentcloudapi.com", "2020-12-21", credential, region, profile);
    }
    
    /**
     * 编辑环境
     * @param {ModifyNamespaceRequest} req
     * @param {function(string, ModifyNamespaceResponse):void} cb
     * @public
     */
    ModifyNamespace(req, cb) {
        let resp = new ModifyNamespaceResponse();
        this.request("ModifyNamespace", req, resp, cb);
    }

    /**
     * 创建环境
     * @param {CreateNamespaceRequest} req
     * @param {function(string, CreateNamespaceResponse):void} cb
     * @public
     */
    CreateNamespace(req, cb) {
        let resp = new CreateNamespaceResponse();
        this.request("CreateNamespace", req, resp, cb);
    }

    /**
     * 创建或者更新 Ingress 规则
     * @param {ModifyIngressRequest} req
     * @param {function(string, ModifyIngressResponse):void} cb
     * @public
     */
    ModifyIngress(req, cb) {
        let resp = new ModifyIngressResponse();
        this.request("ModifyIngress", req, resp, cb);
    }

    /**
     * 生成包预签名下载链接
     * @param {GenerateDownloadUrlRequest} req
     * @param {function(string, GenerateDownloadUrlResponse):void} cb
     * @public
     */
    GenerateDownloadUrl(req, cb) {
        let resp = new GenerateDownloadUrlResponse();
        this.request("GenerateDownloadUrl", req, resp, cb);
    }

    /**
     * 生成Cos临时秘钥
     * @param {CreateCosTokenRequest} req
     * @param {function(string, CreateCosTokenResponse):void} cb
     * @public
     */
    CreateCosToken(req, cb) {
        let resp = new CreateCosTokenResponse();
        this.request("CreateCosToken", req, resp, cb);
    }

    /**
     * 查询 Ingress 规则
     * @param {DescribeIngressRequest} req
     * @param {function(string, DescribeIngressResponse):void} cb
     * @public
     */
    DescribeIngress(req, cb) {
        let resp = new DescribeIngressResponse();
        this.request("DescribeIngress", req, resp, cb);
    }

    /**
     * 生成Cos临时秘钥
     * @param {CreateCosTokenV2Request} req
     * @param {function(string, CreateCosTokenV2Response):void} cb
     * @public
     */
    CreateCosTokenV2(req, cb) {
        let resp = new CreateCosTokenV2Response();
        this.request("CreateCosTokenV2", req, resp, cb);
    }

    /**
     * 服务部署
     * @param {DeployServiceV2Request} req
     * @param {function(string, DeployServiceV2Response):void} cb
     * @public
     */
    DeployServiceV2(req, cb) {
        let resp = new DeployServiceV2Response();
        this.request("DeployServiceV2", req, resp, cb);
    }

    /**
     * 创建服务
     * @param {CreateServiceV2Request} req
     * @param {function(string, CreateServiceV2Response):void} cb
     * @public
     */
    CreateServiceV2(req, cb) {
        let resp = new CreateServiceV2Response();
        this.request("CreateServiceV2", req, resp, cb);
    }

    /**
     * 查询服务关联的 Ingress 规则列表
     * @param {DescribeRelatedIngressesRequest} req
     * @param {function(string, DescribeRelatedIngressesResponse):void} cb
     * @public
     */
    DescribeRelatedIngresses(req, cb) {
        let resp = new DescribeRelatedIngressesResponse();
        this.request("DescribeRelatedIngresses", req, resp, cb);
    }

    /**
     * 修改服务基本信息
     * @param {ModifyServiceInfoRequest} req
     * @param {function(string, ModifyServiceInfoResponse):void} cb
     * @public
     */
    ModifyServiceInfo(req, cb) {
        let resp = new ModifyServiceInfoResponse();
        this.request("ModifyServiceInfo", req, resp, cb);
    }

    /**
     * 重启实例
     * @param {RestartServiceRunPodRequest} req
     * @param {function(string, RestartServiceRunPodResponse):void} cb
     * @public
     */
    RestartServiceRunPod(req, cb) {
        let resp = new RestartServiceRunPodResponse();
        this.request("RestartServiceRunPod", req, resp, cb);
    }

    /**
     * 绑定云资源
     * @param {CreateResourceRequest} req
     * @param {function(string, CreateResourceResponse):void} cb
     * @public
     */
    CreateResource(req, cb) {
        let resp = new CreateResourceResponse();
        this.request("CreateResource", req, resp, cb);
    }

    /**
     * 获取服务下面运行pod列表
     * @param {DescribeServiceRunPodListV2Request} req
     * @param {function(string, DescribeServiceRunPodListV2Response):void} cb
     * @public
     */
    DescribeServiceRunPodListV2(req, cb) {
        let resp = new DescribeServiceRunPodListV2Response();
        this.request("DescribeServiceRunPodListV2", req, resp, cb);
    }

    /**
     * 查询 Ingress 规则列表
     * @param {DescribeIngressesRequest} req
     * @param {function(string, DescribeIngressesResponse):void} cb
     * @public
     */
    DescribeIngresses(req, cb) {
        let resp = new DescribeIngressesResponse();
        this.request("DescribeIngresses", req, resp, cb);
    }

    /**
     * 获取租户环境列表
     * @param {DescribeNamespacesRequest} req
     * @param {function(string, DescribeNamespacesResponse):void} cb
     * @public
     */
    DescribeNamespaces(req, cb) {
        let resp = new DescribeNamespacesResponse();
        this.request("DescribeNamespaces", req, resp, cb);
    }

    /**
     * 删除 Ingress 规则
     * @param {DeleteIngressRequest} req
     * @param {function(string, DeleteIngressResponse):void} cb
     * @public
     */
    DeleteIngress(req, cb) {
        let resp = new DeleteIngressResponse();
        this.request("DeleteIngress", req, resp, cb);
    }


}
module.exports = TemClient;
