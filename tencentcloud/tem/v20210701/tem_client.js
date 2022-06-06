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
const RestartApplicationPodResponse = models.RestartApplicationPodResponse;
const DeleteApplicationRequest = models.DeleteApplicationRequest;
const CreateResourceRequest = models.CreateResourceRequest;
const ResumeDeployApplicationResponse = models.ResumeDeployApplicationResponse;
const RestartApplicationResponse = models.RestartApplicationResponse;
const StopApplicationRequest = models.StopApplicationRequest;
const HealthCheckConfig = models.HealthCheckConfig;
const TemDeployApplicationDetailInfo = models.TemDeployApplicationDetailInfo;
const DescribeDeployApplicationDetailRequest = models.DescribeDeployApplicationDetailRequest;
const EsInfo = models.EsInfo;
const DeployServiceBatchDetail = models.DeployServiceBatchDetail;
const DescribeApplicationPodsResponse = models.DescribeApplicationPodsResponse;
const DeleteIngressRequest = models.DeleteIngressRequest;
const RestartApplicationPodRequest = models.RestartApplicationPodRequest;
const DescribeRelatedIngressesRequest = models.DescribeRelatedIngressesRequest;
const ModifyEnvironmentResponse = models.ModifyEnvironmentResponse;
const CosToken = models.CosToken;
const GenerateApplicationPackageDownloadUrlRequest = models.GenerateApplicationPackageDownloadUrlRequest;
const DeployApplicationRequest = models.DeployApplicationRequest;
const IngressInfo = models.IngressInfo;
const ModifyIngressResponse = models.ModifyIngressResponse;
const DescribeEnvironmentsResponse = models.DescribeEnvironmentsResponse;
const ModifyIngressRequest = models.ModifyIngressRequest;
const DescribeApplicationPodsRequest = models.DescribeApplicationPodsRequest;
const CreateApplicationRequest = models.CreateApplicationRequest;
const EnablePrometheusConf = models.EnablePrometheusConf;
const DescribeRelatedIngressesResponse = models.DescribeRelatedIngressesResponse;
const DescribeIngressesRequest = models.DescribeIngressesRequest;
const DescribeRunPodPage = models.DescribeRunPodPage;
const IngressTls = models.IngressTls;
const DeployServicePodDetail = models.DeployServicePodDetail;
const ModifyApplicationReplicasResponse = models.ModifyApplicationReplicasResponse;
const ModifyApplicationReplicasRequest = models.ModifyApplicationReplicasRequest;
const LogOutputConf = models.LogOutputConf;
const DescribeIngressesResponse = models.DescribeIngressesResponse;
const DeleteIngressResponse = models.DeleteIngressResponse;
const TemNamespaceInfo = models.TemNamespaceInfo;
const GenerateApplicationPackageDownloadUrlResponse = models.GenerateApplicationPackageDownloadUrlResponse;
const IngressRuleBackend = models.IngressRuleBackend;
const DescribeIngressResponse = models.DescribeIngressResponse;
const CreateCosTokenResponse = models.CreateCosTokenResponse;
const IngressRule = models.IngressRule;
const CronHorizontalAutoscaler = models.CronHorizontalAutoscaler;
const RollingUpdateApplicationByVersionResponse = models.RollingUpdateApplicationByVersionResponse;
const RollingUpdateApplicationByVersionRequest = models.RollingUpdateApplicationByVersionRequest;
const RunVersionPod = models.RunVersionPod;
const DescribeDeployApplicationDetailResponse = models.DescribeDeployApplicationDetailResponse;
const IngressRuleValue = models.IngressRuleValue;
const CreateResourceResponse = models.CreateResourceResponse;
const ModifyApplicationInfoRequest = models.ModifyApplicationInfoRequest;
const ModifyApplicationInfoResponse = models.ModifyApplicationInfoResponse;
const DeleteApplicationResponse = models.DeleteApplicationResponse;
const IngressRulePath = models.IngressRulePath;
const CreateEnvironmentResponse = models.CreateEnvironmentResponse;
const NamespacePage = models.NamespacePage;
const RestartApplicationRequest = models.RestartApplicationRequest;
const CreateApplicationResponse = models.CreateApplicationResponse;
const HorizontalAutoscaler = models.HorizontalAutoscaler;
const RevertDeployApplicationRequest = models.RevertDeployApplicationRequest;
const StorageMountConf = models.StorageMountConf;
const ModifyEnvironmentRequest = models.ModifyEnvironmentRequest;
const PortMapping = models.PortMapping;
const UseDefaultRepoParameters = models.UseDefaultRepoParameters;
const RevertDeployApplicationResponse = models.RevertDeployApplicationResponse;
const DeployStrategyConf = models.DeployStrategyConf;
const DescribeIngressRequest = models.DescribeIngressRequest;
const CreateCosTokenRequest = models.CreateCosTokenRequest;
const DescribeEnvironmentsRequest = models.DescribeEnvironmentsRequest;
const StopApplicationResponse = models.StopApplicationResponse;
const EksService = models.EksService;
const CronHorizontalAutoscalerSchedule = models.CronHorizontalAutoscalerSchedule;
const ResumeDeployApplicationRequest = models.ResumeDeployApplicationRequest;
const DeployApplicationResponse = models.DeployApplicationResponse;
const StorageConf = models.StorageConf;
const CreateEnvironmentRequest = models.CreateEnvironmentRequest;
const Pair = models.Pair;


/**
 * tem client
 * @class
 */
class TemClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tem.tencentcloudapi.com", "2021-07-01", credential, region, profile);
    }
    
    /**
     * 修改应用实例数量
     * @param {ModifyApplicationReplicasRequest} req
     * @param {function(string, ModifyApplicationReplicasResponse):void} cb
     * @public
     */
    ModifyApplicationReplicas(req, cb) {
        let resp = new ModifyApplicationReplicasResponse();
        this.request("ModifyApplicationReplicas", req, resp, cb);
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
     * 服务删除
  - 停止当前运行服务
  - 删除服务相关资源
  - 删除服务
     * @param {DeleteApplicationRequest} req
     * @param {function(string, DeleteApplicationResponse):void} cb
     * @public
     */
    DeleteApplication(req, cb) {
        let resp = new DeleteApplicationResponse();
        this.request("DeleteApplication", req, resp, cb);
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

    /**
     * 应用部署
     * @param {DeployApplicationRequest} req
     * @param {function(string, DeployApplicationResponse):void} cb
     * @public
     */
    DeployApplication(req, cb) {
        let resp = new DeployApplicationResponse();
        this.request("DeployApplication", req, resp, cb);
    }

    /**
     * 获取分批发布详情
     * @param {DescribeDeployApplicationDetailRequest} req
     * @param {function(string, DescribeDeployApplicationDetailResponse):void} cb
     * @public
     */
    DescribeDeployApplicationDetail(req, cb) {
        let resp = new DescribeDeployApplicationDetailResponse();
        this.request("DescribeDeployApplicationDetail", req, resp, cb);
    }

    /**
     * 开始下一批次发布
     * @param {ResumeDeployApplicationRequest} req
     * @param {function(string, ResumeDeployApplicationResponse):void} cb
     * @public
     */
    ResumeDeployApplication(req, cb) {
        let resp = new ResumeDeployApplicationResponse();
        this.request("ResumeDeployApplication", req, resp, cb);
    }

    /**
     * 编辑环境
     * @param {ModifyEnvironmentRequest} req
     * @param {function(string, ModifyEnvironmentResponse):void} cb
     * @public
     */
    ModifyEnvironment(req, cb) {
        let resp = new ModifyEnvironmentResponse();
        this.request("ModifyEnvironment", req, resp, cb);
    }

    /**
     * 服务停止
     * @param {StopApplicationRequest} req
     * @param {function(string, StopApplicationResponse):void} cb
     * @public
     */
    StopApplication(req, cb) {
        let resp = new StopApplicationResponse();
        this.request("StopApplication", req, resp, cb);
    }

    /**
     * 获取应用实例列表
     * @param {DescribeApplicationPodsRequest} req
     * @param {function(string, DescribeApplicationPodsResponse):void} cb
     * @public
     */
    DescribeApplicationPods(req, cb) {
        let resp = new DescribeApplicationPodsResponse();
        this.request("DescribeApplicationPods", req, resp, cb);
    }

    /**
     * 服务重启
     * @param {RestartApplicationRequest} req
     * @param {function(string, RestartApplicationResponse):void} cb
     * @public
     */
    RestartApplication(req, cb) {
        let resp = new RestartApplicationResponse();
        this.request("RestartApplication", req, resp, cb);
    }

    /**
     * 修改应用基本信息
     * @param {ModifyApplicationInfoRequest} req
     * @param {function(string, ModifyApplicationInfoResponse):void} cb
     * @public
     */
    ModifyApplicationInfo(req, cb) {
        let resp = new ModifyApplicationInfoResponse();
        this.request("ModifyApplicationInfo", req, resp, cb);
    }

    /**
     * 获取租户环境列表
     * @param {DescribeEnvironmentsRequest} req
     * @param {function(string, DescribeEnvironmentsResponse):void} cb
     * @public
     */
    DescribeEnvironments(req, cb) {
        let resp = new DescribeEnvironmentsResponse();
        this.request("DescribeEnvironments", req, resp, cb);
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
     * 生成应用程序包预签名下载链接
     * @param {GenerateApplicationPackageDownloadUrlRequest} req
     * @param {function(string, GenerateApplicationPackageDownloadUrlResponse):void} cb
     * @public
     */
    GenerateApplicationPackageDownloadUrl(req, cb) {
        let resp = new GenerateApplicationPackageDownloadUrlResponse();
        this.request("GenerateApplicationPackageDownloadUrl", req, resp, cb);
    }

    /**
     * 创建环境
     * @param {CreateEnvironmentRequest} req
     * @param {function(string, CreateEnvironmentResponse):void} cb
     * @public
     */
    CreateEnvironment(req, cb) {
        let resp = new CreateEnvironmentResponse();
        this.request("CreateEnvironment", req, resp, cb);
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
     * 创建应用
     * @param {CreateApplicationRequest} req
     * @param {function(string, CreateApplicationResponse):void} cb
     * @public
     */
    CreateApplication(req, cb) {
        let resp = new CreateApplicationResponse();
        this.request("CreateApplication", req, resp, cb);
    }

    /**
     * 重启应用实例
     * @param {RestartApplicationPodRequest} req
     * @param {function(string, RestartApplicationPodResponse):void} cb
     * @public
     */
    RestartApplicationPod(req, cb) {
        let resp = new RestartApplicationPodResponse();
        this.request("RestartApplicationPod", req, resp, cb);
    }

    /**
     * 更新应用部署版本
     * @param {RollingUpdateApplicationByVersionRequest} req
     * @param {function(string, RollingUpdateApplicationByVersionResponse):void} cb
     * @public
     */
    RollingUpdateApplicationByVersion(req, cb) {
        let resp = new RollingUpdateApplicationByVersionResponse();
        this.request("RollingUpdateApplicationByVersion", req, resp, cb);
    }

    /**
     * 回滚分批发布
     * @param {RevertDeployApplicationRequest} req
     * @param {function(string, RevertDeployApplicationResponse):void} cb
     * @public
     */
    RevertDeployApplication(req, cb) {
        let resp = new RevertDeployApplicationResponse();
        this.request("RevertDeployApplication", req, resp, cb);
    }

    /**
     * 查询应用关联的 Ingress 规则列表
     * @param {DescribeRelatedIngressesRequest} req
     * @param {function(string, DescribeRelatedIngressesResponse):void} cb
     * @public
     */
    DescribeRelatedIngresses(req, cb) {
        let resp = new DescribeRelatedIngressesResponse();
        this.request("DescribeRelatedIngresses", req, resp, cb);
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


}
module.exports = TemClient;
