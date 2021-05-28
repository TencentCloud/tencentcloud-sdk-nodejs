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
const DuplicateImagePersonalRequest = models.DuplicateImagePersonalRequest;
const ManageExternalEndpointRequest = models.ManageExternalEndpointRequest;
const DescribeImagePersonalResponse = models.DescribeImagePersonalResponse;
const DescribeUserQuotaPersonalRequest = models.DescribeUserQuotaPersonalRequest;
const WebhookTarget = models.WebhookTarget;
const DescribeReplicationInstancesResponse = models.DescribeReplicationInstancesResponse;
const DescribeReplicationInstanceCreateTasksResponse = models.DescribeReplicationInstanceCreateTasksResponse;
const WebhookTriggerLog = models.WebhookTriggerLog;
const AccessVpc = models.AccessVpc;
const ModifyTagRetentionRuleRequest = models.ModifyTagRetentionRuleRequest;
const ModifyRepositoryResponse = models.ModifyRepositoryResponse;
const TriggerInvokePara = models.TriggerInvokePara;
const DescribeNamespacesResponse = models.DescribeNamespacesResponse;
const TriggerLogResp = models.TriggerLogResp;
const DownloadHelmChartRequest = models.DownloadHelmChartRequest;
const RetentionRule = models.RetentionRule;
const CreateInstanceResponse = models.CreateInstanceResponse;
const DeleteInstanceTokenRequest = models.DeleteInstanceTokenRequest;
const TaskDetail = models.TaskDetail;
const ModifyRepositoryRequest = models.ModifyRepositoryRequest;
const RegistryCondition = models.RegistryCondition;
const DescribeInternalEndpointDnsStatusRequest = models.DescribeInternalEndpointDnsStatusRequest;
const CreateApplicationTriggerPersonalRequest = models.CreateApplicationTriggerPersonalRequest;
const AutoDelStrategyInfo = models.AutoDelStrategyInfo;
const DeleteInternalEndpointDnsRequest = models.DeleteInternalEndpointDnsRequest;
const ValidateNamespaceExistPersonalRequest = models.ValidateNamespaceExistPersonalRequest;
const RegistryChargePrepaid = models.RegistryChargePrepaid;
const RenewInstanceResponse = models.RenewInstanceResponse;
const Registry = models.Registry;
const DescribeRepositoriesResponse = models.DescribeRepositoriesResponse;
const VpcAndDomainInfo = models.VpcAndDomainInfo;
const DeleteInstanceTokenResponse = models.DeleteInstanceTokenResponse;
const DescribeInstancesResponse = models.DescribeInstancesResponse;
const CreateReplicationInstanceRequest = models.CreateReplicationInstanceRequest;
const ModifyInstanceTokenResponse = models.ModifyInstanceTokenResponse;
const DescribeApplicationTriggerPersonalRequest = models.DescribeApplicationTriggerPersonalRequest;
const FavorResp = models.FavorResp;
const DeleteNamespacePersonalRequest = models.DeleteNamespacePersonalRequest;
const NamespaceInfo = models.NamespaceInfo;
const RenewInstanceRequest = models.RenewInstanceRequest;
const CreateTagRetentionRuleResponse = models.CreateTagRetentionRuleResponse;
const Limit = models.Limit;
const DescribeChartDownloadInfoResponse = models.DescribeChartDownloadInfoResponse;
const DescribeExternalEndpointStatusRequest = models.DescribeExternalEndpointStatusRequest;
const DeleteRepositoryResponse = models.DeleteRepositoryResponse;
const DeleteImagePersonalResponse = models.DeleteImagePersonalResponse;
const DownloadHelmChartResponse = models.DownloadHelmChartResponse;
const ManageReplicationRequest = models.ManageReplicationRequest;
const DeleteWebhookTriggerResponse = models.DeleteWebhookTriggerResponse;
const DeleteImageLifecycleGlobalPersonalResponse = models.DeleteImageLifecycleGlobalPersonalResponse;
const DescribeReplicationInstanceSyncStatusResponse = models.DescribeReplicationInstanceSyncStatusResponse;
const Tag = models.Tag;
const DupImageTagResp = models.DupImageTagResp;
const DeleteApplicationTriggerPersonalResponse = models.DeleteApplicationTriggerPersonalResponse;
const DescribeRepositoryFilterPersonalRequest = models.DescribeRepositoryFilterPersonalRequest;
const DescribeTagRetentionExecutionTaskResponse = models.DescribeTagRetentionExecutionTaskResponse;
const DescribeInternalEndpointsResponse = models.DescribeInternalEndpointsResponse;
const DescribeRepositoryPersonalRequest = models.DescribeRepositoryPersonalRequest;
const AutoDelStrategyInfoResp = models.AutoDelStrategyInfoResp;
const TriggerResp = models.TriggerResp;
const DeleteApplicationTriggerPersonalRequest = models.DeleteApplicationTriggerPersonalRequest;
const SearchUserRepositoryResp = models.SearchUserRepositoryResp;
const CreateTagRetentionRuleRequest = models.CreateTagRetentionRuleRequest;
const DuplicateImagePersonalResponse = models.DuplicateImagePersonalResponse;
const DescribeImageLifecyclePersonalResponse = models.DescribeImageLifecyclePersonalResponse;
const ModifyInstanceTokenRequest = models.ModifyInstanceTokenRequest;
const DeleteImageLifecyclePersonalResponse = models.DeleteImageLifecyclePersonalResponse;
const CreateNamespaceResponse = models.CreateNamespaceResponse;
const DescribeRepositoryOwnerPersonalResponse = models.DescribeRepositoryOwnerPersonalResponse;
const VpcPrivateDomainStatus = models.VpcPrivateDomainStatus;
const DescribeSecurityPoliciesResponse = models.DescribeSecurityPoliciesResponse;
const DescribeReplicationInstancesRequest = models.DescribeReplicationInstancesRequest;
const CreateImageLifecyclePersonalResponse = models.CreateImageLifecyclePersonalResponse;
const RepoIsExistResp = models.RepoIsExistResp;
const TcrImageInfo = models.TcrImageInfo;
const DescribeImageLifecycleGlobalPersonalResponse = models.DescribeImageLifecycleGlobalPersonalResponse;
const CreateNamespacePersonalResponse = models.CreateNamespacePersonalResponse;
const DescribeReplicationInstanceSyncStatusRequest = models.DescribeReplicationInstanceSyncStatusRequest;
const DeleteInstanceResponse = models.DeleteInstanceResponse;
const DeleteImageLifecycleGlobalPersonalRequest = models.DeleteImageLifecycleGlobalPersonalRequest;
const DescribeInstanceStatusRequest = models.DescribeInstanceStatusRequest;
const ModifyWebhookTriggerRequest = models.ModifyWebhookTriggerRequest;
const DescribeInstanceStatusResponse = models.DescribeInstanceStatusResponse;
const DeleteNamespaceResponse = models.DeleteNamespaceResponse;
const TagInfoResp = models.TagInfoResp;
const Favors = models.Favors;
const DescribeRepositoryPersonalResponse = models.DescribeRepositoryPersonalResponse;
const CreateSecurityPolicyResponse = models.CreateSecurityPolicyResponse;
const DescribeRepositoriesRequest = models.DescribeRepositoriesRequest;
const DescribeImageFilterPersonalRequest = models.DescribeImageFilterPersonalRequest;
const ModifyNamespaceResponse = models.ModifyNamespaceResponse;
const ValidateRepositoryExistPersonalRequest = models.ValidateRepositoryExistPersonalRequest;
const ModifyUserPasswordPersonalResponse = models.ModifyUserPasswordPersonalResponse;
const TcrNamespaceInfo = models.TcrNamespaceInfo;
const DescribeImagesResponse = models.DescribeImagesResponse;
const ModifyRepositoryInfoPersonalResponse = models.ModifyRepositoryInfoPersonalResponse;
const DescribeWebhookTriggerLogRequest = models.DescribeWebhookTriggerLogRequest;
const CreateUserPersonalRequest = models.CreateUserPersonalRequest;
const DescribeTagRetentionExecutionTaskRequest = models.DescribeTagRetentionExecutionTaskRequest;
const ReplicationRule = models.ReplicationRule;
const RepoInfoResp = models.RepoInfoResp;
const DeleteTagRetentionRuleResponse = models.DeleteTagRetentionRuleResponse;
const DeleteSecurityPolicyResponse = models.DeleteSecurityPolicyResponse;
const DescribeInternalEndpointDnsStatusResponse = models.DescribeInternalEndpointDnsStatusResponse;
const RegistryStatus = models.RegistryStatus;
const SecurityPolicy = models.SecurityPolicy;
const DescribeNamespacePersonalRequest = models.DescribeNamespacePersonalRequest;
const DeleteRepositoryPersonalResponse = models.DeleteRepositoryPersonalResponse;
const CreateInstanceTokenResponse = models.CreateInstanceTokenResponse;
const DescribeApplicationTriggerLogPersonalResp = models.DescribeApplicationTriggerLogPersonalResp;
const DeleteImagePersonalRequest = models.DeleteImagePersonalRequest;
const DescribeApplicationTriggerPersonalResponse = models.DescribeApplicationTriggerPersonalResponse;
const RetentionTask = models.RetentionTask;
const NamespaceInfoResp = models.NamespaceInfoResp;
const CreateRepositoryPersonalRequest = models.CreateRepositoryPersonalRequest;
const DescribeImageFilterPersonalResponse = models.DescribeImageFilterPersonalResponse;
const CreateImageLifecyclePersonalRequest = models.CreateImageLifecyclePersonalRequest;
const DeleteWebhookTriggerRequest = models.DeleteWebhookTriggerRequest;
const TriggerInvokeResult = models.TriggerInvokeResult;
const CreateUserPersonalResponse = models.CreateUserPersonalResponse;
const DescribeWebhookTriggerResponse = models.DescribeWebhookTriggerResponse;
const DescribeImageManifestsRequest = models.DescribeImageManifestsRequest;
const ModifyNamespaceRequest = models.ModifyNamespaceRequest;
const DeleteImageRequest = models.DeleteImageRequest;
const ModifyRepositoryAccessPersonalRequest = models.ModifyRepositoryAccessPersonalRequest;
const TagSpecification = models.TagSpecification;
const DescribeNamespacesRequest = models.DescribeNamespacesRequest;
const DescribeImageLifecycleGlobalPersonalRequest = models.DescribeImageLifecycleGlobalPersonalRequest;
const DescribeImageLifecyclePersonalRequest = models.DescribeImageLifecyclePersonalRequest;
const DeleteSecurityPolicyRequest = models.DeleteSecurityPolicyRequest;
const RepositoryInfoResp = models.RepositoryInfoResp;
const CreateInstanceRequest = models.CreateInstanceRequest;
const DescribeInstanceTokenRequest = models.DescribeInstanceTokenRequest;
const BatchDeleteRepositoryPersonalResponse = models.BatchDeleteRepositoryPersonalResponse;
const CreateNamespaceRequest = models.CreateNamespaceRequest;
const BatchDeleteRepositoryPersonalRequest = models.BatchDeleteRepositoryPersonalRequest;
const TriggerInvokeCondition = models.TriggerInvokeCondition;
const DescribeChartDownloadInfoRequest = models.DescribeChartDownloadInfoRequest;
const ValidateRepositoryExistPersonalResponse = models.ValidateRepositoryExistPersonalResponse;
const DescribeExternalEndpointStatusResponse = models.DescribeExternalEndpointStatusResponse;
const ModifySecurityPolicyRequest = models.ModifySecurityPolicyRequest;
const NamespaceIsExistsResp = models.NamespaceIsExistsResp;
const DescribeInstancesRequest = models.DescribeInstancesRequest;
const CreateInternalEndpointDnsRequest = models.CreateInternalEndpointDnsRequest;
const Filter = models.Filter;
const RetentionExecution = models.RetentionExecution;
const ManageReplicationResponse = models.ManageReplicationResponse;
const DescribeReplicationInstanceCreateTasksRequest = models.DescribeReplicationInstanceCreateTasksRequest;
const ModifyWebhookTriggerResponse = models.ModifyWebhookTriggerResponse;
const RepoInfo = models.RepoInfo;
const ManageImageLifecycleGlobalPersonalRequest = models.ManageImageLifecycleGlobalPersonalRequest;
const DescribeUserQuotaPersonalResponse = models.DescribeUserQuotaPersonalResponse;
const DescribeImagePersonalRequest = models.DescribeImagePersonalRequest;
const ModifySecurityPolicyResponse = models.ModifySecurityPolicyResponse;
const DeleteImageLifecyclePersonalRequest = models.DeleteImageLifecyclePersonalRequest;
const ModifyApplicationTriggerPersonalResponse = models.ModifyApplicationTriggerPersonalResponse;
const DeleteInstanceRequest = models.DeleteInstanceRequest;
const DescribeImageManifestsResponse = models.DescribeImageManifestsResponse;
const DescribeNamespacePersonalResponse = models.DescribeNamespacePersonalResponse;
const DeleteNamespacePersonalResponse = models.DeleteNamespacePersonalResponse;
const Header = models.Header;
const RetentionPolicy = models.RetentionPolicy;
const CreateSecurityPolicyRequest = models.CreateSecurityPolicyRequest;
const CreateWebhookTriggerRequest = models.CreateWebhookTriggerRequest;
const DescribeRepositoryOwnerPersonalRequest = models.DescribeRepositoryOwnerPersonalRequest;
const ModifyRepositoryInfoPersonalRequest = models.ModifyRepositoryInfoPersonalRequest;
const DescribeApplicationTriggerLogPersonalRequest = models.DescribeApplicationTriggerLogPersonalRequest;
const DescribeFavorRepositoryPersonalRequest = models.DescribeFavorRepositoryPersonalRequest;
const DescribeApplicationTriggerLogPersonalResponse = models.DescribeApplicationTriggerLogPersonalResponse;
const ManageInternalEndpointResponse = models.ManageInternalEndpointResponse;
const CreateRepositoryPersonalResponse = models.CreateRepositoryPersonalResponse;
const DescribeRepositoryFilterPersonalResponse = models.DescribeRepositoryFilterPersonalResponse;
const CreateTagRetentionExecutionResponse = models.CreateTagRetentionExecutionResponse;
const DescribeFavorRepositoryPersonalResponse = models.DescribeFavorRepositoryPersonalResponse;
const CheckInstanceNameResponse = models.CheckInstanceNameResponse;
const ManageImageLifecycleGlobalPersonalResponse = models.ManageImageLifecycleGlobalPersonalResponse;
const DescribeTagRetentionRulesResponse = models.DescribeTagRetentionRulesResponse;
const ModifyRepositoryAccessPersonalResponse = models.ModifyRepositoryAccessPersonalResponse;
const ManageExternalEndpointResponse = models.ManageExternalEndpointResponse;
const ModifyApplicationTriggerPersonalRequest = models.ModifyApplicationTriggerPersonalRequest;
const CreateReplicationInstanceResponse = models.CreateReplicationInstanceResponse;
const CreateInstanceTokenRequest = models.CreateInstanceTokenRequest;
const ModifyUserPasswordPersonalRequest = models.ModifyUserPasswordPersonalRequest;
const DescribeSecurityPoliciesRequest = models.DescribeSecurityPoliciesRequest;
const ReplicationRegistry = models.ReplicationRegistry;
const DescribeInternalEndpointsRequest = models.DescribeInternalEndpointsRequest;
const ValidateNamespaceExistPersonalResponse = models.ValidateNamespaceExistPersonalResponse;
const DescribeWebhookTriggerLogResponse = models.DescribeWebhookTriggerLogResponse;
const DescribeApplicationTriggerPersonalResp = models.DescribeApplicationTriggerPersonalResp;
const TagInfo = models.TagInfo;
const CreateRepositoryRequest = models.CreateRepositoryRequest;
const DeleteImageResponse = models.DeleteImageResponse;
const DescribeWebhookTriggerRequest = models.DescribeWebhookTriggerRequest;
const DeleteNamespaceRequest = models.DeleteNamespaceRequest;
const BatchDeleteImagePersonalRequest = models.BatchDeleteImagePersonalRequest;
const DescribeImagesRequest = models.DescribeImagesRequest;
const ModifyTagRetentionRuleResponse = models.ModifyTagRetentionRuleResponse;
const DescribeTagRetentionExecutionRequest = models.DescribeTagRetentionExecutionRequest;
const CreateRepositoryResponse = models.CreateRepositoryResponse;
const DescribeTagRetentionRulesRequest = models.DescribeTagRetentionRulesRequest;
const RespLimit = models.RespLimit;
const CheckInstanceNameRequest = models.CheckInstanceNameRequest;
const DescribeInstanceTokenResponse = models.DescribeInstanceTokenResponse;
const SameImagesResp = models.SameImagesResp;
const DescribeTagRetentionExecutionResponse = models.DescribeTagRetentionExecutionResponse;
const CreateNamespacePersonalRequest = models.CreateNamespacePersonalRequest;
const WebhookTrigger = models.WebhookTrigger;
const CreateWebhookTriggerResponse = models.CreateWebhookTriggerResponse;
const ReplicationFilter = models.ReplicationFilter;
const DeleteTagRetentionRuleRequest = models.DeleteTagRetentionRuleRequest;
const TcrRepositoryInfo = models.TcrRepositoryInfo;
const TcrInstanceToken = models.TcrInstanceToken;
const DeleteRepositoryRequest = models.DeleteRepositoryRequest;
const CreateInternalEndpointDnsResponse = models.CreateInternalEndpointDnsResponse;
const CreateTagRetentionExecutionRequest = models.CreateTagRetentionExecutionRequest;
const CreateApplicationTriggerPersonalResponse = models.CreateApplicationTriggerPersonalResponse;
const ManageInternalEndpointRequest = models.ManageInternalEndpointRequest;
const BatchDeleteImagePersonalResponse = models.BatchDeleteImagePersonalResponse;
const DeleteInternalEndpointDnsResponse = models.DeleteInternalEndpointDnsResponse;
const DeleteRepositoryPersonalRequest = models.DeleteRepositoryPersonalRequest;


/**
 * tcr client
 * @class
 */
class TcrClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tcr.tencentcloudapi.com", "2019-09-24", credential, region, profile);
    }
    
    /**
     * 更新命名空间信息，当前仅支持修改命名空间访问级别
     * @param {ModifyNamespaceRequest} req
     * @param {function(string, ModifyNamespaceResponse):void} cb
     * @public
     */
    ModifyNamespace(req, cb) {
        let resp = new ModifyNamespaceResponse();
        this.request("ModifyNamespace", req, resp, cb);
    }

    /**
     * 查询触发器
     * @param {DescribeWebhookTriggerRequest} req
     * @param {function(string, DescribeWebhookTriggerResponse):void} cb
     * @public
     */
    DescribeWebhookTrigger(req, cb) {
        let resp = new DescribeWebhookTriggerResponse();
        this.request("DescribeWebhookTrigger", req, resp, cb);
    }

    /**
     * 用于在个人版中查询与指定tag镜像内容相同的tag列表
     * @param {DescribeImageFilterPersonalRequest} req
     * @param {function(string, DescribeImageFilterPersonalResponse):void} cb
     * @public
     */
    DescribeImageFilterPersonal(req, cb) {
        let resp = new DescribeImageFilterPersonalResponse();
        this.request("DescribeImageFilterPersonal", req, resp, cb);
    }

    /**
     * 用于查询应用更新触发器
     * @param {DescribeApplicationTriggerPersonalRequest} req
     * @param {function(string, DescribeApplicationTriggerPersonalResponse):void} cb
     * @public
     */
    DescribeApplicationTriggerPersonal(req, cb) {
        let resp = new DescribeApplicationTriggerPersonalResponse();
        this.request("DescribeApplicationTriggerPersonal", req, resp, cb);
    }

    /**
     * 用于在个人版中创建清理策略
     * @param {CreateImageLifecyclePersonalRequest} req
     * @param {function(string, CreateImageLifecyclePersonalResponse):void} cb
     * @public
     */
    CreateImageLifecyclePersonal(req, cb) {
        let resp = new CreateImageLifecyclePersonalResponse();
        this.request("CreateImageLifecyclePersonal", req, resp, cb);
    }

    /**
     * 创建实例公网访问白名单策略
     * @param {CreateSecurityPolicyRequest} req
     * @param {function(string, CreateSecurityPolicyResponse):void} cb
     * @public
     */
    CreateSecurityPolicy(req, cb) {
        let resp = new CreateSecurityPolicyResponse();
        this.request("CreateSecurityPolicy", req, resp, cb);
    }

    /**
     * 删除实例公网访问白名单策略
     * @param {DeleteSecurityPolicyRequest} req
     * @param {function(string, DeleteSecurityPolicyResponse):void} cb
     * @public
     */
    DeleteSecurityPolicy(req, cb) {
        let resp = new DeleteSecurityPolicyResponse();
        this.request("DeleteSecurityPolicy", req, resp, cb);
    }

    /**
     * 管理实例内网访问VPC链接
     * @param {ManageInternalEndpointRequest} req
     * @param {function(string, ManageInternalEndpointResponse):void} cb
     * @public
     */
    ManageInternalEndpoint(req, cb) {
        let resp = new ManageInternalEndpointResponse();
        this.request("ManageInternalEndpoint", req, resp, cb);
    }

    /**
     * 查询版本保留规则
     * @param {DescribeTagRetentionRulesRequest} req
     * @param {function(string, DescribeTagRetentionRulesResponse):void} cb
     * @public
     */
    DescribeTagRetentionRules(req, cb) {
        let resp = new DescribeTagRetentionRulesResponse();
        this.request("DescribeTagRetentionRules", req, resp, cb);
    }

    /**
     * 用于获取个人版镜像仓库tag列表
     * @param {DescribeImagePersonalRequest} req
     * @param {function(string, DescribeImagePersonalResponse):void} cb
     * @public
     */
    DescribeImagePersonal(req, cb) {
        let resp = new DescribeImagePersonalResponse();
        this.request("DescribeImagePersonal", req, resp, cb);
    }

    /**
     * 用于获取个人版仓库中自动清理策略
     * @param {DescribeImageLifecyclePersonalRequest} req
     * @param {function(string, DescribeImageLifecyclePersonalResponse):void} cb
     * @public
     */
    DescribeImageLifecyclePersonal(req, cb) {
        let resp = new DescribeImageLifecyclePersonalResponse();
        this.request("DescribeImageLifecyclePersonal", req, resp, cb);
    }

    /**
     * 用于获取个人版全局镜像版本自动清理策略
     * @param {DescribeImageLifecycleGlobalPersonalRequest} req
     * @param {function(string, DescribeImageLifecycleGlobalPersonalResponse):void} cb
     * @public
     */
    DescribeImageLifecycleGlobalPersonal(req, cb) {
        let resp = new DescribeImageLifecycleGlobalPersonalResponse();
        this.request("DescribeImageLifecycleGlobalPersonal", req, resp, cb);
    }

    /**
     * 创建个人版镜像仓库命名空间，此命名空间全局唯一
     * @param {CreateNamespacePersonalRequest} req
     * @param {function(string, CreateNamespacePersonalResponse):void} cb
     * @public
     */
    CreateNamespacePersonal(req, cb) {
        let resp = new CreateNamespacePersonalResponse();
        this.request("CreateNamespacePersonal", req, resp, cb);
    }

    /**
     * 用于在企业版中创建命名空间
     * @param {CreateNamespaceRequest} req
     * @param {function(string, CreateNamespaceResponse):void} cb
     * @public
     */
    CreateNamespace(req, cb) {
        let resp = new CreateNamespaceResponse();
        this.request("CreateNamespace", req, resp, cb);
    }

    /**
     * 删除版本保留规则
     * @param {DeleteTagRetentionRuleRequest} req
     * @param {function(string, DeleteTagRetentionRuleResponse):void} cb
     * @public
     */
    DeleteTagRetentionRule(req, cb) {
        let resp = new DeleteTagRetentionRuleResponse();
        this.request("DeleteTagRetentionRule", req, resp, cb);
    }

    /**
     * 查询版本保留执行记录
     * @param {DescribeTagRetentionExecutionRequest} req
     * @param {function(string, DescribeTagRetentionExecutionResponse):void} cb
     * @public
     */
    DescribeTagRetentionExecution(req, cb) {
        let resp = new DescribeTagRetentionExecutionResponse();
        this.request("DescribeTagRetentionExecution", req, resp, cb);
    }

    /**
     * 查询个人用户配额
     * @param {DescribeUserQuotaPersonalRequest} req
     * @param {function(string, DescribeUserQuotaPersonalResponse):void} cb
     * @public
     */
    DescribeUserQuotaPersonal(req, cb) {
        let resp = new DescribeUserQuotaPersonalResponse();
        this.request("DescribeUserQuotaPersonal", req, resp, cb);
    }

    /**
     * 更新镜像仓库信息，可修改仓库描述信息
     * @param {ModifyRepositoryRequest} req
     * @param {function(string, ModifyRepositoryResponse):void} cb
     * @public
     */
    ModifyRepository(req, cb) {
        let resp = new ModifyRepositoryResponse();
        this.request("ModifyRepository", req, resp, cb);
    }

    /**
     * 用于在企业版中返回Chart的下载信息
     * @param {DescribeChartDownloadInfoRequest} req
     * @param {function(string, DescribeChartDownloadInfoResponse):void} cb
     * @public
     */
    DescribeChartDownloadInfo(req, cb) {
        let resp = new DescribeChartDownloadInfoResponse();
        this.request("DescribeChartDownloadInfo", req, resp, cb);
    }

    /**
     * 删除命名空间
     * @param {DeleteNamespaceRequest} req
     * @param {function(string, DeleteNamespaceResponse):void} cb
     * @public
     */
    DeleteNamespace(req, cb) {
        let resp = new DeleteNamespaceResponse();
        this.request("DeleteNamespace", req, resp, cb);
    }

    /**
     * 删除镜像仓库
     * @param {DeleteRepositoryRequest} req
     * @param {function(string, DeleteRepositoryResponse):void} cb
     * @public
     */
    DeleteRepository(req, cb) {
        let resp = new DeleteRepositoryResponse();
        this.request("DeleteRepository", req, resp, cb);
    }

    /**
     * 删除镜像仓库企业版实例
     * @param {DeleteInstanceRequest} req
     * @param {function(string, DeleteInstanceResponse):void} cb
     * @public
     */
    DeleteInstance(req, cb) {
        let resp = new DeleteInstanceResponse();
        this.request("DeleteInstance", req, resp, cb);
    }

    /**
     * 查询镜像仓库列表或指定镜像仓库信息
     * @param {DescribeRepositoriesRequest} req
     * @param {function(string, DescribeRepositoriesResponse):void} cb
     * @public
     */
    DescribeRepositories(req, cb) {
        let resp = new DescribeRepositoriesResponse();
        this.request("DescribeRepositories", req, resp, cb);
    }

    /**
     * 查询实例信息
     * @param {DescribeInstancesRequest} req
     * @param {function(string, DescribeInstancesResponse):void} cb
     * @public
     */
    DescribeInstances(req, cb) {
        let resp = new DescribeInstancesResponse();
        this.request("DescribeInstances", req, resp, cb);
    }

    /**
     * 用于修改应用更新触发器
     * @param {ModifyApplicationTriggerPersonalRequest} req
     * @param {function(string, ModifyApplicationTriggerPersonalResponse):void} cb
     * @public
     */
    ModifyApplicationTriggerPersonal(req, cb) {
        let resp = new ModifyApplicationTriggerPersonalResponse();
        this.request("ModifyApplicationTriggerPersonal", req, resp, cb);
    }

    /**
     * 用于在个人版镜像仓库中更新容器镜像描述
     * @param {ModifyRepositoryInfoPersonalRequest} req
     * @param {function(string, ModifyRepositoryInfoPersonalResponse):void} cb
     * @public
     */
    ModifyRepositoryInfoPersonal(req, cb) {
        let resp = new ModifyRepositoryInfoPersonalResponse();
        this.request("ModifyRepositoryInfoPersonal", req, resp, cb);
    }

    /**
     * 手动执行版本保留
     * @param {CreateTagRetentionExecutionRequest} req
     * @param {function(string, CreateTagRetentionExecutionResponse):void} cb
     * @public
     */
    CreateTagRetentionExecution(req, cb) {
        let resp = new CreateTagRetentionExecutionResponse();
        this.request("CreateTagRetentionExecution", req, resp, cb);
    }

    /**
     * 检查待创建的实例名称是否符合规范
     * @param {CheckInstanceNameRequest} req
     * @param {function(string, CheckInstanceNameResponse):void} cb
     * @public
     */
    CheckInstanceName(req, cb) {
        let resp = new CheckInstanceNameResponse();
        this.request("CheckInstanceName", req, resp, cb);
    }

    /**
     * 查询镜像版本列表或指定容器镜像信息
     * @param {DescribeImagesRequest} req
     * @param {function(string, DescribeImagesResponse):void} cb
     * @public
     */
    DescribeImages(req, cb) {
        let resp = new DescribeImagesResponse();
        this.request("DescribeImages", req, resp, cb);
    }

    /**
     * 查询个人版命名空间信息
     * @param {DescribeNamespacePersonalRequest} req
     * @param {function(string, DescribeNamespacePersonalResponse):void} cb
     * @public
     */
    DescribeNamespacePersonal(req, cb) {
        let resp = new DescribeNamespacePersonalResponse();
        this.request("DescribeNamespacePersonal", req, resp, cb);
    }

    /**
     * 用于个人版镜像仓库中删除
     * @param {DeleteRepositoryPersonalRequest} req
     * @param {function(string, DeleteRepositoryPersonalResponse):void} cb
     * @public
     */
    DeleteRepositoryPersonal(req, cb) {
        let resp = new DeleteRepositoryPersonalResponse();
        this.request("DeleteRepositoryPersonal", req, resp, cb);
    }

    /**
     * 查询个人版仓库信息
     * @param {DescribeRepositoryPersonalRequest} req
     * @param {function(string, DescribeRepositoryPersonalResponse):void} cb
     * @public
     */
    DescribeRepositoryPersonal(req, cb) {
        let resp = new DescribeRepositoryPersonalResponse();
        this.request("DescribeRepositoryPersonal", req, resp, cb);
    }

    /**
     * 查询容器镜像Manifest信息
     * @param {DescribeImageManifestsRequest} req
     * @param {function(string, DescribeImageManifestsResponse):void} cb
     * @public
     */
    DescribeImageManifests(req, cb) {
        let resp = new DescribeImageManifestsResponse();
        this.request("DescribeImageManifests", req, resp, cb);
    }

    /**
     * 查询长期访问凭证信息
     * @param {DescribeInstanceTokenRequest} req
     * @param {function(string, DescribeInstanceTokenResponse):void} cb
     * @public
     */
    DescribeInstanceToken(req, cb) {
        let resp = new DescribeInstanceTokenResponse();
        this.request("DescribeInstanceToken", req, resp, cb);
    }

    /**
     * 用于在TCR中下载helm chart
     * @param {DownloadHelmChartRequest} req
     * @param {function(string, DownloadHelmChartResponse):void} cb
     * @public
     */
    DownloadHelmChart(req, cb) {
        let resp = new DownloadHelmChartResponse();
        this.request("DownloadHelmChart", req, resp, cb);
    }

    /**
     * 用于设置个人版全局镜像版本自动清理策略
     * @param {ManageImageLifecycleGlobalPersonalRequest} req
     * @param {function(string, ManageImageLifecycleGlobalPersonalResponse):void} cb
     * @public
     */
    ManageImageLifecycleGlobalPersonal(req, cb) {
        let resp = new ManageImageLifecycleGlobalPersonalResponse();
        this.request("ManageImageLifecycleGlobalPersonal", req, resp, cb);
    }

    /**
     * 用于查询应用更新触发器触发日志
     * @param {DescribeApplicationTriggerLogPersonalRequest} req
     * @param {function(string, DescribeApplicationTriggerLogPersonalResponse):void} cb
     * @public
     */
    DescribeApplicationTriggerLogPersonal(req, cb) {
        let resp = new DescribeApplicationTriggerLogPersonalResponse();
        this.request("DescribeApplicationTriggerLogPersonal", req, resp, cb);
    }

    /**
     * 预付费实例续费，同时支持按量计费转包年包月
     * @param {RenewInstanceRequest} req
     * @param {function(string, RenewInstanceResponse):void} cb
     * @public
     */
    RenewInstance(req, cb) {
        let resp = new RenewInstanceResponse();
        this.request("RenewInstance", req, resp, cb);
    }

    /**
     * 删除长期访问凭证
     * @param {DeleteInstanceTokenRequest} req
     * @param {function(string, DeleteInstanceTokenResponse):void} cb
     * @public
     */
    DeleteInstanceToken(req, cb) {
        let resp = new DeleteInstanceTokenResponse();
        this.request("DeleteInstanceToken", req, resp, cb);
    }

    /**
     * 修改个人用户登录密码
     * @param {ModifyUserPasswordPersonalRequest} req
     * @param {function(string, ModifyUserPasswordPersonalResponse):void} cb
     * @public
     */
    ModifyUserPasswordPersonal(req, cb) {
        let resp = new ModifyUserPasswordPersonalResponse();
        this.request("ModifyUserPasswordPersonal", req, resp, cb);
    }

    /**
     * 用于删除应用更新触发器
     * @param {DeleteApplicationTriggerPersonalRequest} req
     * @param {function(string, DeleteApplicationTriggerPersonalResponse):void} cb
     * @public
     */
    DeleteApplicationTriggerPersonal(req, cb) {
        let resp = new DeleteApplicationTriggerPersonalResponse();
        this.request("DeleteApplicationTriggerPersonal", req, resp, cb);
    }

    /**
     * 创建tcr内网私有域名解析
     * @param {CreateInternalEndpointDnsRequest} req
     * @param {function(string, CreateInternalEndpointDnsResponse):void} cb
     * @public
     */
    CreateInternalEndpointDns(req, cb) {
        let resp = new CreateInternalEndpointDnsResponse();
        this.request("CreateInternalEndpointDns", req, resp, cb);
    }

    /**
     * 用于在个人版中删除tag
     * @param {DeleteImagePersonalRequest} req
     * @param {function(string, DeleteImagePersonalResponse):void} cb
     * @public
     */
    DeleteImagePersonal(req, cb) {
        let resp = new DeleteImagePersonalResponse();
        this.request("DeleteImagePersonal", req, resp, cb);
    }

    /**
     * 获取触发器日志
     * @param {DescribeWebhookTriggerLogRequest} req
     * @param {function(string, DescribeWebhookTriggerLogResponse):void} cb
     * @public
     */
    DescribeWebhookTriggerLog(req, cb) {
        let resp = new DescribeWebhookTriggerLogResponse();
        this.request("DescribeWebhookTriggerLog", req, resp, cb);
    }

    /**
     * 更新触发器
     * @param {ModifyWebhookTriggerRequest} req
     * @param {function(string, ModifyWebhookTriggerResponse):void} cb
     * @public
     */
    ModifyWebhookTrigger(req, cb) {
        let resp = new ModifyWebhookTriggerResponse();
        this.request("ModifyWebhookTrigger", req, resp, cb);
    }

    /**
     * 更新实例内指定长期访问凭证的启用状态
     * @param {ModifyInstanceTokenRequest} req
     * @param {function(string, ModifyInstanceTokenResponse):void} cb
     * @public
     */
    ModifyInstanceToken(req, cb) {
        let resp = new ModifyInstanceTokenResponse();
        this.request("ModifyInstanceToken", req, resp, cb);
    }

    /**
     * 创建实例
     * @param {CreateInstanceRequest} req
     * @param {function(string, CreateInstanceResponse):void} cb
     * @public
     */
    CreateInstance(req, cb) {
        let resp = new CreateInstanceResponse();
        this.request("CreateInstance", req, resp, cb);
    }

    /**
     * 查询创建从实例任务状态
     * @param {DescribeReplicationInstanceCreateTasksRequest} req
     * @param {function(string, DescribeReplicationInstanceCreateTasksResponse):void} cb
     * @public
     */
    DescribeReplicationInstanceCreateTasks(req, cb) {
        let resp = new DescribeReplicationInstanceCreateTasksResponse();
        this.request("DescribeReplicationInstanceCreateTasks", req, resp, cb);
    }

    /**
     * 创建触发器
     * @param {CreateWebhookTriggerRequest} req
     * @param {function(string, CreateWebhookTriggerResponse):void} cb
     * @public
     */
    CreateWebhookTrigger(req, cb) {
        let resp = new CreateWebhookTriggerResponse();
        this.request("CreateWebhookTrigger", req, resp, cb);
    }

    /**
     * 用于创建应用更新触发器
     * @param {CreateApplicationTriggerPersonalRequest} req
     * @param {function(string, CreateApplicationTriggerPersonalResponse):void} cb
     * @public
     */
    CreateApplicationTriggerPersonal(req, cb) {
        let resp = new CreateApplicationTriggerPersonalResponse();
        this.request("CreateApplicationTriggerPersonal", req, resp, cb);
    }

    /**
     * 查询实例公网访问白名单策略
     * @param {DescribeSecurityPoliciesRequest} req
     * @param {function(string, DescribeSecurityPoliciesResponse):void} cb
     * @public
     */
    DescribeSecurityPolicies(req, cb) {
        let resp = new DescribeSecurityPoliciesResponse();
        this.request("DescribeSecurityPolicies", req, resp, cb);
    }

    /**
     * 用于个人版镜像仓库中批量删除镜像仓库
     * @param {BatchDeleteRepositoryPersonalRequest} req
     * @param {function(string, BatchDeleteRepositoryPersonalResponse):void} cb
     * @public
     */
    BatchDeleteRepositoryPersonal(req, cb) {
        let resp = new BatchDeleteRepositoryPersonalResponse();
        this.request("BatchDeleteRepositoryPersonal", req, resp, cb);
    }

    /**
     * 更新版本保留规则
     * @param {ModifyTagRetentionRuleRequest} req
     * @param {function(string, ModifyTagRetentionRuleResponse):void} cb
     * @public
     */
    ModifyTagRetentionRule(req, cb) {
        let resp = new ModifyTagRetentionRuleResponse();
        this.request("ModifyTagRetentionRule", req, resp, cb);
    }

    /**
     * 查询版本保留执行任务
     * @param {DescribeTagRetentionExecutionTaskRequest} req
     * @param {function(string, DescribeTagRetentionExecutionTaskResponse):void} cb
     * @public
     */
    DescribeTagRetentionExecutionTask(req, cb) {
        let resp = new DescribeTagRetentionExecutionTaskResponse();
        this.request("DescribeTagRetentionExecutionTask", req, resp, cb);
    }

    /**
     * 删除触发器
     * @param {DeleteWebhookTriggerRequest} req
     * @param {function(string, DeleteWebhookTriggerResponse):void} cb
     * @public
     */
    DeleteWebhookTrigger(req, cb) {
        let resp = new DeleteWebhookTriggerResponse();
        this.request("DeleteWebhookTrigger", req, resp, cb);
    }

    /**
     * 创建从实例
     * @param {CreateReplicationInstanceRequest} req
     * @param {function(string, CreateReplicationInstanceResponse):void} cb
     * @public
     */
    CreateReplicationInstance(req, cb) {
        let resp = new CreateReplicationInstanceResponse();
        this.request("CreateReplicationInstance", req, resp, cb);
    }

    /**
     * 查询实例内网访问VPC链接
     * @param {DescribeInternalEndpointsRequest} req
     * @param {function(string, DescribeInternalEndpointsResponse):void} cb
     * @public
     */
    DescribeInternalEndpoints(req, cb) {
        let resp = new DescribeInternalEndpointsResponse();
        this.request("DescribeInternalEndpoints", req, resp, cb);
    }

    /**
     * 用于企业版创建镜像仓库
     * @param {CreateRepositoryRequest} req
     * @param {function(string, CreateRepositoryResponse):void} cb
     * @public
     */
    CreateRepository(req, cb) {
        let resp = new CreateRepositoryResponse();
        this.request("CreateRepository", req, resp, cb);
    }

    /**
     * 管理实例公网访问
     * @param {ManageExternalEndpointRequest} req
     * @param {function(string, ManageExternalEndpointResponse):void} cb
     * @public
     */
    ManageExternalEndpoint(req, cb) {
        let resp = new ManageExternalEndpointResponse();
        this.request("ManageExternalEndpoint", req, resp, cb);
    }

    /**
     * 查询个人收藏仓库
     * @param {DescribeFavorRepositoryPersonalRequest} req
     * @param {function(string, DescribeFavorRepositoryPersonalResponse):void} cb
     * @public
     */
    DescribeFavorRepositoryPersonal(req, cb) {
        let resp = new DescribeFavorRepositoryPersonalResponse();
        this.request("DescribeFavorRepositoryPersonal", req, resp, cb);
    }

    /**
     * 用于在个人版中获取用户全部的镜像仓库列表
     * @param {DescribeRepositoryOwnerPersonalRequest} req
     * @param {function(string, DescribeRepositoryOwnerPersonalResponse):void} cb
     * @public
     */
    DescribeRepositoryOwnerPersonal(req, cb) {
        let resp = new DescribeRepositoryOwnerPersonalResponse();
        this.request("DescribeRepositoryOwnerPersonal", req, resp, cb);
    }

    /**
     * 查询命名空间列表或指定命名空间信息
     * @param {DescribeNamespacesRequest} req
     * @param {function(string, DescribeNamespacesResponse):void} cb
     * @public
     */
    DescribeNamespaces(req, cb) {
        let resp = new DescribeNamespacesResponse();
        this.request("DescribeNamespaces", req, resp, cb);
    }

    /**
     * 查询实例当前状态以及过程信息
     * @param {DescribeInstanceStatusRequest} req
     * @param {function(string, DescribeInstanceStatusResponse):void} cb
     * @public
     */
    DescribeInstanceStatus(req, cb) {
        let resp = new DescribeInstanceStatusResponse();
        this.request("DescribeInstanceStatus", req, resp, cb);
    }

    /**
     * 用于在个人版仓库中创建镜像仓库
     * @param {CreateRepositoryPersonalRequest} req
     * @param {function(string, CreateRepositoryPersonalResponse):void} cb
     * @public
     */
    CreateRepositoryPersonal(req, cb) {
        let resp = new CreateRepositoryPersonalResponse();
        this.request("CreateRepositoryPersonal", req, resp, cb);
    }

    /**
     * 用于在个人版镜像仓库中批量删除Tag
     * @param {BatchDeleteImagePersonalRequest} req
     * @param {function(string, BatchDeleteImagePersonalResponse):void} cb
     * @public
     */
    BatchDeleteImagePersonal(req, cb) {
        let resp = new BatchDeleteImagePersonalResponse();
        this.request("BatchDeleteImagePersonal", req, resp, cb);
    }

    /**
     * 批量查询vpc是否已经添加私有域名解析
     * @param {DescribeInternalEndpointDnsStatusRequest} req
     * @param {function(string, DescribeInternalEndpointDnsStatusResponse):void} cb
     * @public
     */
    DescribeInternalEndpointDnsStatus(req, cb) {
        let resp = new DescribeInternalEndpointDnsStatusResponse();
        this.request("DescribeInternalEndpointDnsStatus", req, resp, cb);
    }

    /**
     * 用于在个人版镜像仓库中复制镜像版本
     * @param {DuplicateImagePersonalRequest} req
     * @param {function(string, DuplicateImagePersonalResponse):void} cb
     * @public
     */
    DuplicateImagePersonal(req, cb) {
        let resp = new DuplicateImagePersonalResponse();
        this.request("DuplicateImagePersonal", req, resp, cb);
    }

    /**
     * 管理实例同步
     * @param {ManageReplicationRequest} req
     * @param {function(string, ManageReplicationResponse):void} cb
     * @public
     */
    ManageReplication(req, cb) {
        let resp = new ManageReplicationResponse();
        this.request("ManageReplication", req, resp, cb);
    }

    /**
     * 更新实例公网访问白名单
     * @param {ModifySecurityPolicyRequest} req
     * @param {function(string, ModifySecurityPolicyResponse):void} cb
     * @public
     */
    ModifySecurityPolicy(req, cb) {
        let resp = new ModifySecurityPolicyResponse();
        this.request("ModifySecurityPolicy", req, resp, cb);
    }

    /**
     * 用于在个人版镜像仓库中，获取满足输入搜索条件的用户镜像仓库
     * @param {DescribeRepositoryFilterPersonalRequest} req
     * @param {function(string, DescribeRepositoryFilterPersonalResponse):void} cb
     * @public
     */
    DescribeRepositoryFilterPersonal(req, cb) {
        let resp = new DescribeRepositoryFilterPersonalResponse();
        this.request("DescribeRepositoryFilterPersonal", req, resp, cb);
    }

    /**
     * 查询个人版用户命名空间是否存在
     * @param {ValidateNamespaceExistPersonalRequest} req
     * @param {function(string, ValidateNamespaceExistPersonalResponse):void} cb
     * @public
     */
    ValidateNamespaceExistPersonal(req, cb) {
        let resp = new ValidateNamespaceExistPersonalResponse();
        this.request("ValidateNamespaceExistPersonal", req, resp, cb);
    }

    /**
     * 创建版本保留规则
     * @param {CreateTagRetentionRuleRequest} req
     * @param {function(string, CreateTagRetentionRuleResponse):void} cb
     * @public
     */
    CreateTagRetentionRule(req, cb) {
        let resp = new CreateTagRetentionRuleResponse();
        this.request("CreateTagRetentionRule", req, resp, cb);
    }

    /**
     * 创建个人用户
     * @param {CreateUserPersonalRequest} req
     * @param {function(string, CreateUserPersonalResponse):void} cb
     * @public
     */
    CreateUserPersonal(req, cb) {
        let resp = new CreateUserPersonalResponse();
        this.request("CreateUserPersonal", req, resp, cb);
    }

    /**
     * 查询实例公网访问入口状态
     * @param {DescribeExternalEndpointStatusRequest} req
     * @param {function(string, DescribeExternalEndpointStatusResponse):void} cb
     * @public
     */
    DescribeExternalEndpointStatus(req, cb) {
        let resp = new DescribeExternalEndpointStatusResponse();
        this.request("DescribeExternalEndpointStatus", req, resp, cb);
    }

    /**
     * 用于删除个人版全局镜像版本自动清理策略
     * @param {DeleteImageLifecycleGlobalPersonalRequest} req
     * @param {function(string, DeleteImageLifecycleGlobalPersonalResponse):void} cb
     * @public
     */
    DeleteImageLifecycleGlobalPersonal(req, cb) {
        let resp = new DeleteImageLifecycleGlobalPersonalResponse();
        this.request("DeleteImageLifecycleGlobalPersonal", req, resp, cb);
    }

    /**
     * 查询从实例同步状态
     * @param {DescribeReplicationInstanceSyncStatusRequest} req
     * @param {function(string, DescribeReplicationInstanceSyncStatusResponse):void} cb
     * @public
     */
    DescribeReplicationInstanceSyncStatus(req, cb) {
        let resp = new DescribeReplicationInstanceSyncStatusResponse();
        this.request("DescribeReplicationInstanceSyncStatus", req, resp, cb);
    }

    /**
     * 删除共享版命名空间
     * @param {DeleteNamespacePersonalRequest} req
     * @param {function(string, DeleteNamespacePersonalResponse):void} cb
     * @public
     */
    DeleteNamespacePersonal(req, cb) {
        let resp = new DeleteNamespacePersonalResponse();
        this.request("DeleteNamespacePersonal", req, resp, cb);
    }

    /**
     * 用于更新个人版镜像仓库的访问属性
     * @param {ModifyRepositoryAccessPersonalRequest} req
     * @param {function(string, ModifyRepositoryAccessPersonalResponse):void} cb
     * @public
     */
    ModifyRepositoryAccessPersonal(req, cb) {
        let resp = new ModifyRepositoryAccessPersonalResponse();
        this.request("ModifyRepositoryAccessPersonal", req, resp, cb);
    }

    /**
     * 删除tcr内网私有域名解析
     * @param {DeleteInternalEndpointDnsRequest} req
     * @param {function(string, DeleteInternalEndpointDnsResponse):void} cb
     * @public
     */
    DeleteInternalEndpointDns(req, cb) {
        let resp = new DeleteInternalEndpointDnsResponse();
        this.request("DeleteInternalEndpointDns", req, resp, cb);
    }

    /**
     * 用于在个人版镜像仓库中删除仓库Tag自动清理策略
     * @param {DeleteImageLifecyclePersonalRequest} req
     * @param {function(string, DeleteImageLifecyclePersonalResponse):void} cb
     * @public
     */
    DeleteImageLifecyclePersonal(req, cb) {
        let resp = new DeleteImageLifecyclePersonalResponse();
        this.request("DeleteImageLifecyclePersonal", req, resp, cb);
    }

    /**
     * 用于判断个人版仓库是否存在
     * @param {ValidateRepositoryExistPersonalRequest} req
     * @param {function(string, ValidateRepositoryExistPersonalResponse):void} cb
     * @public
     */
    ValidateRepositoryExistPersonal(req, cb) {
        let resp = new ValidateRepositoryExistPersonalResponse();
        this.request("ValidateRepositoryExistPersonal", req, resp, cb);
    }

    /**
     * 删除指定镜像
     * @param {DeleteImageRequest} req
     * @param {function(string, DeleteImageResponse):void} cb
     * @public
     */
    DeleteImage(req, cb) {
        let resp = new DeleteImageResponse();
        this.request("DeleteImage", req, resp, cb);
    }

    /**
     * 查询从实例列表
     * @param {DescribeReplicationInstancesRequest} req
     * @param {function(string, DescribeReplicationInstancesResponse):void} cb
     * @public
     */
    DescribeReplicationInstances(req, cb) {
        let resp = new DescribeReplicationInstancesResponse();
        this.request("DescribeReplicationInstances", req, resp, cb);
    }

    /**
     * 创建实例的临时或长期访问凭证
     * @param {CreateInstanceTokenRequest} req
     * @param {function(string, CreateInstanceTokenResponse):void} cb
     * @public
     */
    CreateInstanceToken(req, cb) {
        let resp = new CreateInstanceTokenResponse();
        this.request("CreateInstanceToken", req, resp, cb);
    }


}
module.exports = TcrClient;
