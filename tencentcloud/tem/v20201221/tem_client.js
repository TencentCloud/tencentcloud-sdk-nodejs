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
const CreateResourceRequest = models.CreateResourceRequest;
const CreateServiceV2Response = models.CreateServiceV2Response;
const CreateCosTokenV2Request = models.CreateCosTokenV2Request;
const DeployServiceV2Response = models.DeployServiceV2Response;
const IngressTls = models.IngressTls;
const DescribeNamespacesResponse = models.DescribeNamespacesResponse;
const ModifyIngressResponse = models.ModifyIngressResponse;
const DeleteIngressRequest = models.DeleteIngressRequest;
const CreateNamespaceResponse = models.CreateNamespaceResponse;
const StorageMountConf = models.StorageMountConf;
const CosToken = models.CosToken;
const DescribeNamespacesRequest = models.DescribeNamespacesRequest;
const CreateCosTokenRequest = models.CreateCosTokenRequest;
const DeployServiceV2Request = models.DeployServiceV2Request;
const ModifyIngressRequest = models.ModifyIngressRequest;
const Pair = models.Pair;
const CreateNamespaceRequest = models.CreateNamespaceRequest;
const DescribeIngressesRequest = models.DescribeIngressesRequest;
const DescribeRunPodPage = models.DescribeRunPodPage;
const DescribeServiceRunPodListV2Request = models.DescribeServiceRunPodListV2Request;
const LogOutputConf = models.LogOutputConf;
const DescribeIngressesResponse = models.DescribeIngressesResponse;
const IngressInfo = models.IngressInfo;
const DeleteIngressResponse = models.DeleteIngressResponse;
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
const CreateCosTokenV2Response = models.CreateCosTokenV2Response;
const EsInfo = models.EsInfo;
const DescribeIngressRequest = models.DescribeIngressRequest;
const CreateServiceV2Request = models.CreateServiceV2Request;


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
