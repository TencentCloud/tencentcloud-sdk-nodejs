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
const DescribeConfigDataResponse = models.DescribeConfigDataResponse;
const NamespacePage = models.NamespacePage;
const DescribeApplicationInfoResponse = models.DescribeApplicationInfoResponse;
const ModifyIngressResponse = models.ModifyIngressResponse;
const DeleteApplicationServiceRequest = models.DeleteApplicationServiceRequest;
const RestartApplicationPodRequest = models.RestartApplicationPodRequest;
const DestroyLogConfigResponse = models.DestroyLogConfigResponse;
const QueryFilter = models.QueryFilter;
const ResumeDeployApplicationResponse = models.ResumeDeployApplicationResponse;
const StorageConf = models.StorageConf;
const DescribeApplicationPodsRequest = models.DescribeApplicationPodsRequest;
const IngressTls = models.IngressTls;
const DeployServicePodDetail = models.DeployServicePodDetail;
const LogOutputConf = models.LogOutputConf;
const DeleteIngressResponse = models.DeleteIngressResponse;
const DeleteApplicationResponse = models.DeleteApplicationResponse;
const ModifyApplicationAutoscalerResponse = models.ModifyApplicationAutoscalerResponse;
const RollingUpdateApplicationByVersionRequest = models.RollingUpdateApplicationByVersionRequest;
const CreateCosTokenResponse = models.CreateCosTokenResponse;
const ModifyLogConfigResponse = models.ModifyLogConfigResponse;
const RollingUpdateApplicationByVersionResponse = models.RollingUpdateApplicationByVersionResponse;
const StopApplicationRequest = models.StopApplicationRequest;
const ModifyApplicationInfoRequest = models.ModifyApplicationInfoRequest;
const DestroyEnvironmentRequest = models.DestroyEnvironmentRequest;
const CreateEnvironmentResponse = models.CreateEnvironmentResponse;
const DescribeEnvironmentStatusRequest = models.DescribeEnvironmentStatusRequest;
const RevertDeployApplicationResponse = models.RevertDeployApplicationResponse;
const DeployStrategyConf = models.DeployStrategyConf;
const DescribeApplicationsResponse = models.DescribeApplicationsResponse;
const CreateCosTokenRequest = models.CreateCosTokenRequest;
const DescribeEnvironmentsRequest = models.DescribeEnvironmentsRequest;
const LogConfigListPage = models.LogConfigListPage;
const ServiceVersionBrief = models.ServiceVersionBrief;
const LogConfigExtractRule = models.LogConfigExtractRule;
const CreateEnvironmentRequest = models.CreateEnvironmentRequest;
const NodeInfo = models.NodeInfo;
const DescribeApplicationServiceListResponse = models.DescribeApplicationServiceListResponse;
const DescribeLogConfigRequest = models.DescribeLogConfigRequest;
const TemDeployApplicationDetailInfo = models.TemDeployApplicationDetailInfo;
const DescribeEnvironmentStatusResponse = models.DescribeEnvironmentStatusResponse;
const EsInfo = models.EsInfo;
const DescribeApplicationPodsResponse = models.DescribeApplicationPodsResponse;
const DescribeConfigDataListRequest = models.DescribeConfigDataListRequest;
const EnableApplicationAutoscalerResponse = models.EnableApplicationAutoscalerResponse;
const ServicePage = models.ServicePage;
const TemServiceVersionInfo = models.TemServiceVersionInfo;
const ServicePortMapping = models.ServicePortMapping;
const IngressInfo = models.IngressInfo;
const ModifyApplicationAutoscalerRequest = models.ModifyApplicationAutoscalerRequest;
const ModifyConfigDataResponse = models.ModifyConfigDataResponse;
const ModifyIngressRequest = models.ModifyIngressRequest;
const Tag = models.Tag;
const EnablePrometheusConf = models.EnablePrometheusConf;
const DescribeIngressesRequest = models.DescribeIngressesRequest;
const StorageMountConf = models.StorageMountConf;
const CreateLogConfigRequest = models.CreateLogConfigRequest;
const RestartApplicationResponse = models.RestartApplicationResponse;
const DescribeIngressesResponse = models.DescribeIngressesResponse;
const ModifyConfigDataRequest = models.ModifyConfigDataRequest;
const CreateConfigDataResponse = models.CreateConfigDataResponse;
const DescribeApplicationsStatusRequest = models.DescribeApplicationsStatusRequest;
const DescribeIngressResponse = models.DescribeIngressResponse;
const RunVersionPod = models.RunVersionPod;
const CreateResourceResponse = models.CreateResourceResponse;
const ModifyApplicationInfoResponse = models.ModifyApplicationInfoResponse;
const RestartApplicationRequest = models.RestartApplicationRequest;
const DestroyEnvironmentResponse = models.DestroyEnvironmentResponse;
const DisableApplicationAutoscalerResponse = models.DisableApplicationAutoscalerResponse;
const DescribeIngressRequest = models.DescribeIngressRequest;
const StopApplicationResponse = models.StopApplicationResponse;
const DeployApplicationResponse = models.DeployApplicationResponse;
const RestartApplicationPodResponse = models.RestartApplicationPodResponse;
const TemEnvironmentStoppingStatus = models.TemEnvironmentStoppingStatus;
const DeleteApplicationRequest = models.DeleteApplicationRequest;
const CreateApplicationAutoscalerResponse = models.CreateApplicationAutoscalerResponse;
const DeleteApplicationAutoscalerRequest = models.DeleteApplicationAutoscalerRequest;
const DescribeApplicationAutoscalerListRequest = models.DescribeApplicationAutoscalerListRequest;
const DescribeApplicationsStatusResponse = models.DescribeApplicationsStatusResponse;
const DescribeDeployApplicationDetailRequest = models.DescribeDeployApplicationDetailRequest;
const DeleteIngressRequest = models.DeleteIngressRequest;
const DisableApplicationAutoscalerRequest = models.DisableApplicationAutoscalerRequest;
const DescribeRelatedIngressesRequest = models.DescribeRelatedIngressesRequest;
const CosToken = models.CosToken;
const GenerateApplicationPackageDownloadUrlRequest = models.GenerateApplicationPackageDownloadUrlRequest;
const DescribeEnvironmentsResponse = models.DescribeEnvironmentsResponse;
const DeleteApplicationAutoscalerResponse = models.DeleteApplicationAutoscalerResponse;
const DescribeRelatedIngressesResponse = models.DescribeRelatedIngressesResponse;
const DescribeEnvironmentRequest = models.DescribeEnvironmentRequest;
const DescribePagedLogConfigListRequest = models.DescribePagedLogConfigListRequest;
const TemEnvironmentStartingStatus = models.TemEnvironmentStartingStatus;
const TemService = models.TemService;
const IngressRule = models.IngressRule;
const CronHorizontalAutoscaler = models.CronHorizontalAutoscaler;
const DescribeApplicationServiceListRequest = models.DescribeApplicationServiceListRequest;
const DescribeDeployApplicationDetailResponse = models.DescribeDeployApplicationDetailResponse;
const IngressRuleValue = models.IngressRuleValue;
const DescribeEnvironmentResponse = models.DescribeEnvironmentResponse;
const TemNamespaceInfo = models.TemNamespaceInfo;
const CreateApplicationAutoscalerRequest = models.CreateApplicationAutoscalerRequest;
const DeleteApplicationServiceResponse = models.DeleteApplicationServiceResponse;
const ConfigData = models.ConfigData;
const ResumeDeployApplicationRequest = models.ResumeDeployApplicationRequest;
const DescribeConfigDataRequest = models.DescribeConfigDataRequest;
const MountedSettingConf = models.MountedSettingConf;
const CreateLogConfigResponse = models.CreateLogConfigResponse;
const DescribeConfigDataListResponse = models.DescribeConfigDataListResponse;
const ModifyApplicationServiceRequest = models.ModifyApplicationServiceRequest;
const DescribePagedLogConfigListResponse = models.DescribePagedLogConfigListResponse;
const HealthCheckConfig = models.HealthCheckConfig;
const DeployServiceBatchDetail = models.DeployServiceBatchDetail;
const Autoscaler = models.Autoscaler;
const CreateConfigDataRequest = models.CreateConfigDataRequest;
const DescribeConfigDataListPage = models.DescribeConfigDataListPage;
const DeployApplicationRequest = models.DeployApplicationRequest;
const DescribeApplicationAutoscalerListResponse = models.DescribeApplicationAutoscalerListResponse;
const DestroyConfigDataRequest = models.DestroyConfigDataRequest;
const DestroyConfigDataResponse = models.DestroyConfigDataResponse;
const DescribeApplicationsRequest = models.DescribeApplicationsRequest;
const DescribeApplicationInfoRequest = models.DescribeApplicationInfoRequest;
const CreateApplicationRequest = models.CreateApplicationRequest;
const NamespaceStatusInfo = models.NamespaceStatusInfo;
const DescribeRunPodPage = models.DescribeRunPodPage;
const CreateApplicationServiceRequest = models.CreateApplicationServiceRequest;
const ModifyApplicationReplicasResponse = models.ModifyApplicationReplicasResponse;
const UseDefaultRepoParameters = models.UseDefaultRepoParameters;
const CronHorizontalAutoscalerSchedule = models.CronHorizontalAutoscalerSchedule;
const ModifyEnvironmentRequest = models.ModifyEnvironmentRequest;
const GenerateApplicationPackageDownloadUrlResponse = models.GenerateApplicationPackageDownloadUrlResponse;
const IngressRuleBackend = models.IngressRuleBackend;
const CreateApplicationServiceResponse = models.CreateApplicationServiceResponse;
const WorkloadInfo = models.WorkloadInfo;
const IngressRulePath = models.IngressRulePath;
const NamespaceInfo = models.NamespaceInfo;
const DescribeLogConfigResponse = models.DescribeLogConfigResponse;
const ServicePortMappingItem = models.ServicePortMappingItem;
const RevertDeployApplicationRequest = models.RevertDeployApplicationRequest;
const SortType = models.SortType;
const CreateApplicationResponse = models.CreateApplicationResponse;
const HorizontalAutoscaler = models.HorizontalAutoscaler;
const ModifyApplicationServiceResponse = models.ModifyApplicationServiceResponse;
const PortMapping = models.PortMapping;
const LogConfig = models.LogConfig;
const ModifyEnvironmentResponse = models.ModifyEnvironmentResponse;
const ModifyApplicationReplicasRequest = models.ModifyApplicationReplicasRequest;
const ModifyLogConfigRequest = models.ModifyLogConfigRequest;
const DestroyLogConfigRequest = models.DestroyLogConfigRequest;
const EnableApplicationAutoscalerRequest = models.EnableApplicationAutoscalerRequest;
const EksService = models.EksService;
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
     * 编辑配置
     * @param {ModifyConfigDataRequest} req
     * @param {function(string, ModifyConfigDataResponse):void} cb
     * @public
     */
    ModifyConfigData(req, cb) {
        let resp = new ModifyConfigDataResponse();
        this.request("ModifyConfigData", req, resp, cb);
    }

    /**
     * 单环境下所有应用状态查看
     * @param {DescribeApplicationsStatusRequest} req
     * @param {function(string, DescribeApplicationsStatusResponse):void} cb
     * @public
     */
    DescribeApplicationsStatus(req, cb) {
        let resp = new DescribeApplicationsStatusResponse();
        this.request("DescribeApplicationsStatus", req, resp, cb);
    }

    /**
     * 查询应用访问方式列表
     * @param {DescribeApplicationServiceListRequest} req
     * @param {function(string, DescribeApplicationServiceListResponse):void} cb
     * @public
     */
    DescribeApplicationServiceList(req, cb) {
        let resp = new DescribeApplicationServiceListResponse();
        this.request("DescribeApplicationServiceList", req, resp, cb);
    }

    /**
     * 查询分页的日志收集配置列表
     * @param {DescribePagedLogConfigListRequest} req
     * @param {function(string, DescribePagedLogConfigListResponse):void} cb
     * @public
     */
    DescribePagedLogConfigList(req, cb) {
        let resp = new DescribePagedLogConfigListResponse();
        this.request("DescribePagedLogConfigList", req, resp, cb);
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
     * 启用应用弹性策略组合
     * @param {EnableApplicationAutoscalerRequest} req
     * @param {function(string, EnableApplicationAutoscalerResponse):void} cb
     * @public
     */
    EnableApplicationAutoscaler(req, cb) {
        let resp = new EnableApplicationAutoscalerResponse();
        this.request("EnableApplicationAutoscaler", req, resp, cb);
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
     * 创建弹性伸缩策略组合
     * @param {CreateApplicationAutoscalerRequest} req
     * @param {function(string, CreateApplicationAutoscalerResponse):void} cb
     * @public
     */
    CreateApplicationAutoscaler(req, cb) {
        let resp = new CreateApplicationAutoscalerResponse();
        this.request("CreateApplicationAutoscaler", req, resp, cb);
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
     * 编辑日志收集配置
     * @param {ModifyLogConfigRequest} req
     * @param {function(string, ModifyLogConfigResponse):void} cb
     * @public
     */
    ModifyLogConfig(req, cb) {
        let resp = new ModifyLogConfigResponse();
        this.request("ModifyLogConfig", req, resp, cb);
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
     * 获取环境状态
     * @param {DescribeEnvironmentStatusRequest} req
     * @param {function(string, DescribeEnvironmentStatusResponse):void} cb
     * @public
     */
    DescribeEnvironmentStatus(req, cb) {
        let resp = new DescribeEnvironmentStatusResponse();
        this.request("DescribeEnvironmentStatus", req, resp, cb);
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
     * 修改弹性伸缩策略组合
     * @param {ModifyApplicationAutoscalerRequest} req
     * @param {function(string, ModifyApplicationAutoscalerResponse):void} cb
     * @public
     */
    ModifyApplicationAutoscaler(req, cb) {
        let resp = new ModifyApplicationAutoscalerResponse();
        this.request("ModifyApplicationAutoscaler", req, resp, cb);
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
     * 修改服务访问方式列表
     * @param {ModifyApplicationServiceRequest} req
     * @param {function(string, ModifyApplicationServiceResponse):void} cb
     * @public
     */
    ModifyApplicationService(req, cb) {
        let resp = new ModifyApplicationServiceResponse();
        this.request("ModifyApplicationService", req, resp, cb);
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
     * 获取环境基础信息
     * @param {DescribeEnvironmentRequest} req
     * @param {function(string, DescribeEnvironmentResponse):void} cb
     * @public
     */
    DescribeEnvironment(req, cb) {
        let resp = new DescribeEnvironmentResponse();
        this.request("DescribeEnvironment", req, resp, cb);
    }

    /**
     * 查询日志收集配置详情
     * @param {DescribeLogConfigRequest} req
     * @param {function(string, DescribeLogConfigResponse):void} cb
     * @public
     */
    DescribeLogConfig(req, cb) {
        let resp = new DescribeLogConfigResponse();
        this.request("DescribeLogConfig", req, resp, cb);
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
     * 创建日志收集配置
     * @param {CreateLogConfigRequest} req
     * @param {function(string, CreateLogConfigResponse):void} cb
     * @public
     */
    CreateLogConfig(req, cb) {
        let resp = new CreateLogConfigResponse();
        this.request("CreateLogConfig", req, resp, cb);
    }

    /**
     * 新增访问方式
     * @param {CreateApplicationServiceRequest} req
     * @param {function(string, CreateApplicationServiceResponse):void} cb
     * @public
     */
    CreateApplicationService(req, cb) {
        let resp = new CreateApplicationServiceResponse();
        this.request("CreateApplicationService", req, resp, cb);
    }

    /**
     * 服务基本信息查看
     * @param {DescribeApplicationInfoRequest} req
     * @param {function(string, DescribeApplicationInfoResponse):void} cb
     * @public
     */
    DescribeApplicationInfo(req, cb) {
        let resp = new DescribeApplicationInfoResponse();
        this.request("DescribeApplicationInfo", req, resp, cb);
    }

    /**
     * 创建配置
     * @param {CreateConfigDataRequest} req
     * @param {function(string, CreateConfigDataResponse):void} cb
     * @public
     */
    CreateConfigData(req, cb) {
        let resp = new CreateConfigDataResponse();
        this.request("CreateConfigData", req, resp, cb);
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
     * 删除应用弹性策略组合
     * @param {DeleteApplicationAutoscalerRequest} req
     * @param {function(string, DeleteApplicationAutoscalerResponse):void} cb
     * @public
     */
    DeleteApplicationAutoscaler(req, cb) {
        let resp = new DeleteApplicationAutoscalerResponse();
        this.request("DeleteApplicationAutoscaler", req, resp, cb);
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
     * 销毁配置
     * @param {DestroyConfigDataRequest} req
     * @param {function(string, DestroyConfigDataResponse):void} cb
     * @public
     */
    DestroyConfigData(req, cb) {
        let resp = new DestroyConfigDataResponse();
        this.request("DestroyConfigData", req, resp, cb);
    }

    /**
     * 获取环境列表
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
     * 删除一条访问方式
     * @param {DeleteApplicationServiceRequest} req
     * @param {function(string, DeleteApplicationServiceResponse):void} cb
     * @public
     */
    DeleteApplicationService(req, cb) {
        let resp = new DeleteApplicationServiceResponse();
        this.request("DeleteApplicationService", req, resp, cb);
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
     * 关闭应用弹性策略组合
     * @param {DisableApplicationAutoscalerRequest} req
     * @param {function(string, DisableApplicationAutoscalerResponse):void} cb
     * @public
     */
    DisableApplicationAutoscaler(req, cb) {
        let resp = new DisableApplicationAutoscalerResponse();
        this.request("DisableApplicationAutoscaler", req, resp, cb);
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
     * 获取运行服务列表
     * @param {DescribeApplicationsRequest} req
     * @param {function(string, DescribeApplicationsResponse):void} cb
     * @public
     */
    DescribeApplications(req, cb) {
        let resp = new DescribeApplicationsResponse();
        this.request("DescribeApplications", req, resp, cb);
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
     * 销毁日志收集配置
     * @param {DestroyLogConfigRequest} req
     * @param {function(string, DestroyLogConfigResponse):void} cb
     * @public
     */
    DestroyLogConfig(req, cb) {
        let resp = new DestroyLogConfigResponse();
        this.request("DestroyLogConfig", req, resp, cb);
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
     * 查询配置详情
     * @param {DescribeConfigDataRequest} req
     * @param {function(string, DescribeConfigDataResponse):void} cb
     * @public
     */
    DescribeConfigData(req, cb) {
        let resp = new DescribeConfigDataResponse();
        this.request("DescribeConfigData", req, resp, cb);
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
     * 获取应用弹性策略组合
     * @param {DescribeApplicationAutoscalerListRequest} req
     * @param {function(string, DescribeApplicationAutoscalerListResponse):void} cb
     * @public
     */
    DescribeApplicationAutoscalerList(req, cb) {
        let resp = new DescribeApplicationAutoscalerListResponse();
        this.request("DescribeApplicationAutoscalerList", req, resp, cb);
    }

    /**
     * 销毁环境
     * @param {DestroyEnvironmentRequest} req
     * @param {function(string, DestroyEnvironmentResponse):void} cb
     * @public
     */
    DestroyEnvironment(req, cb) {
        let resp = new DestroyEnvironmentResponse();
        this.request("DestroyEnvironment", req, resp, cb);
    }

    /**
     * 查询配置列表
     * @param {DescribeConfigDataListRequest} req
     * @param {function(string, DescribeConfigDataListResponse):void} cb
     * @public
     */
    DescribeConfigDataList(req, cb) {
        let resp = new DescribeConfigDataListResponse();
        this.request("DescribeConfigDataList", req, resp, cb);
    }


}
module.exports = TemClient;
