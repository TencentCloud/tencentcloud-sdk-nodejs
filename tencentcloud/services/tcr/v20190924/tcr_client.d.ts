import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DeleteInstanceCustomizedDomainResponse, ManageImageLifecycleGlobalPersonalResponse, ManageExternalEndpointRequest, DescribeImagePersonalResponse, DescribeUserQuotaPersonalRequest, DeleteSignaturePolicyRequest, DescribeReplicationInstanceCreateTasksResponse, ModifyTagRetentionRuleRequest, ModifyRepositoryResponse, DescribeNamespacesResponse, DescribeInstanceCustomizedDomainResponse, DownloadHelmChartRequest, DuplicateImagePersonalRequest, CreateInstanceResponse, DeleteInstanceTokenRequest, ModifyRepositoryRequest, DescribeInternalEndpointDnsStatusRequest, CreateApplicationTriggerPersonalRequest, DeleteInternalEndpointDnsRequest, ValidateNamespaceExistPersonalRequest, ModifyInstanceRequest, RenewInstanceResponse, ManageInternalEndpointRequest, CreateImmutableTagRulesRequest, DescribeRepositoriesResponse, DeleteInstanceTokenResponse, DescribeInstancesResponse, CreateReplicationInstanceRequest, ModifyInstanceTokenResponse, DescribeApplicationTriggerLogPersonalResponse, DeleteNamespacePersonalRequest, ModifyImmutableTagRulesResponse, ModifyServiceAccountRequest, CreateImageAccelerationServiceResponse, CreateMultipleSecurityPolicyResponse, CreateTagRetentionRuleResponse, DescribeRegionsResponse, DescribeChartDownloadInfoResponse, DescribeServiceAccountsRequest, DescribeExternalEndpointStatusRequest, DeleteRepositoryResponse, DeleteImagePersonalResponse, DescribeWebhookTriggerLogResponse, DownloadHelmChartResponse, ManageReplicationRequest, DeleteWebhookTriggerResponse, DeleteImageLifecycleGlobalPersonalResponse, ModifySecurityPolicyRequest, DescribeReplicationInstanceSyncStatusResponse, DeleteInstanceCustomizedDomainRequest, CreateImmutableTagRulesResponse, DeleteApplicationTriggerPersonalResponse, DescribeRepositoryFilterPersonalRequest, DescribeTagRetentionExecutionTaskResponse, DescribeInternalEndpointsResponse, DeleteImmutableTagRulesResponse, DescribeRepositoryPersonalRequest, ModifyTagRetentionRuleResponse, DeleteApplicationTriggerPersonalRequest, CreateTagRetentionRuleRequest, DuplicateImagePersonalResponse, DescribeImageLifecyclePersonalResponse, DescribeInstanceStatusResponse, CreateImageAccelerationServiceRequest, DescribeWebhookTriggerResponse, ModifyInstanceTokenRequest, CreateNamespaceResponse, ModifyImmutableTagRulesRequest, DescribeRepositoryOwnerPersonalResponse, DescribeSecurityPoliciesResponse, CreateSignatureResponse, DeleteRepositoryTagsRequest, DescribeImageLifecycleGlobalPersonalResponse, CreateNamespacePersonalResponse, DescribeReplicationInstanceSyncStatusRequest, DeleteInstanceResponse, DeleteImageLifecycleGlobalPersonalRequest, DescribeInstanceStatusRequest, ModifyWebhookTriggerRequest, DeleteReplicationInstanceRequest, DeleteNamespaceResponse, DeleteNamespacePersonalResponse, CreateSignatureRequest, DescribeRepositoryPersonalResponse, CreateSecurityPolicyResponse, DescribeRepositoriesRequest, CreateUserPersonalRequest, DeleteServiceAccountResponse, ModifyNamespaceResponse, ValidateRepositoryExistPersonalRequest, ModifyUserPasswordPersonalResponse, DescribeImagesResponse, ModifyRepositoryInfoPersonalResponse, DescribeWebhookTriggerLogRequest, RenewInstanceRequest, DescribeImageFilterPersonalRequest, DescribeTagRetentionExecutionTaskRequest, DeleteRepositoryTagsResponse, DeleteMultipleSecurityPolicyRequest, DeleteSecurityPolicyResponse, CreateSignaturePolicyResponse, DescribeInternalEndpointDnsStatusResponse, DescribeNamespacePersonalRequest, DeleteRepositoryPersonalResponse, CreateInstanceTokenResponse, DeleteImagePersonalRequest, DescribeApplicationTriggerPersonalResponse, DescribeImageAccelerateServiceResponse, CreateRepositoryPersonalRequest, ModifyServiceAccountPasswordRequest, DescribeImageFilterPersonalResponse, DescribeReplicationInstancesRequest, DeleteWebhookTriggerRequest, DeleteSignaturePolicyResponse, CreateUserPersonalResponse, DeleteServiceAccountRequest, DescribeImageManifestsRequest, ModifyNamespaceRequest, DeleteImageRequest, ModifyRepositoryAccessPersonalRequest, CreateMultipleSecurityPolicyRequest, DescribeNamespacesRequest, ModifyRepositoryAccessPersonalResponse, DescribeImageLifecycleGlobalPersonalRequest, DescribeImageLifecyclePersonalRequest, DeleteSecurityPolicyRequest, CreateInstanceRequest, DescribeInstanceTokenRequest, BatchDeleteRepositoryPersonalResponse, CreateNamespaceRequest, CreateServiceAccountResponse, BatchDeleteRepositoryPersonalRequest, DescribeChartDownloadInfoRequest, ValidateRepositoryExistPersonalResponse, DeleteImageAccelerateServiceRequest, CheckInstanceResponse, DescribeInstancesRequest, CreateInternalEndpointDnsRequest, DescribeImmutableTagRulesRequest, DuplicateImageResponse, DescribeReplicationInstanceCreateTasksRequest, ModifyWebhookTriggerResponse, ManageImageLifecycleGlobalPersonalRequest, DescribeUserQuotaPersonalResponse, DescribeImagePersonalRequest, CreateServiceAccountRequest, DescribeRepositoryFilterPersonalResponse, ModifySecurityPolicyResponse, ModifyApplicationTriggerPersonalResponse, DeleteInstanceRequest, DescribeImageManifestsResponse, DescribeNamespacePersonalResponse, DeleteReplicationInstanceResponse, DescribeWebhookTriggerRequest, DescribeReplicationInstancesResponse, CreateSecurityPolicyRequest, ManageReplicationResponse, CreateWebhookTriggerRequest, DeleteImageAccelerateServiceResponse, ModifyRepositoryInfoPersonalRequest, DescribeApplicationTriggerLogPersonalRequest, DescribeGCJobsResponse, DescribeFavorRepositoryPersonalRequest, DescribeApplicationTriggerPersonalRequest, DeleteMultipleSecurityPolicyResponse, ManageInternalEndpointResponse, CreateRepositoryPersonalResponse, CreateInstanceCustomizedDomainRequest, CreateTagRetentionExecutionResponse, DescribeFavorRepositoryPersonalResponse, CheckInstanceNameResponse, DeleteTagRetentionRuleResponse, DescribeRepositoryOwnerPersonalRequest, DescribeExternalEndpointStatusResponse, DescribeTagRetentionRulesResponse, DescribeRegionsRequest, ManageExternalEndpointResponse, DescribeImmutableTagRulesResponse, ModifyApplicationTriggerPersonalRequest, CreateReplicationInstanceResponse, CreateInstanceTokenRequest, DescribeServiceAccountsResponse, CreateInstanceCustomizedDomainResponse, DescribeSecurityPoliciesRequest, ModifyInstanceResponse, DescribeInternalEndpointsRequest, ValidateNamespaceExistPersonalResponse, CheckInstanceRequest, CreateRepositoryRequest, DeleteImageResponse, DescribeImageAccelerateServiceRequest, DeleteNamespaceRequest, BatchDeleteImagePersonalRequest, DescribeImagesRequest, DescribeGCJobsRequest, DescribeTagRetentionExecutionRequest, CreateRepositoryResponse, DescribeTagRetentionRulesRequest, CheckInstanceNameRequest, DescribeInstanceAllNamespacesRequest, DescribeInstanceTokenResponse, DescribeInstanceCustomizedDomainRequest, DescribeTagRetentionExecutionResponse, CreateNamespacePersonalRequest, DeleteImmutableTagRulesRequest, CreateWebhookTriggerResponse, ModifyServiceAccountResponse, CreateSignaturePolicyRequest, DeleteTagRetentionRuleRequest, ModifyUserPasswordPersonalRequest, DeleteRepositoryRequest, CreateInternalEndpointDnsResponse, DuplicateImageRequest, CreateTagRetentionExecutionRequest, DescribeInstanceAllNamespacesResponse, ModifyServiceAccountPasswordResponse, CreateApplicationTriggerPersonalResponse, BatchDeleteImagePersonalResponse, DeleteInternalEndpointDnsResponse, DeleteRepositoryPersonalRequest } from "./tcr_models";
/**
 * tcr client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 用于获取个人版全局镜像版本自动清理策略
     */
    DescribeImageLifecycleGlobalPersonal(req?: DescribeImageLifecycleGlobalPersonalRequest, cb?: (error: string, rep: DescribeImageLifecycleGlobalPersonalResponse) => void): Promise<DescribeImageLifecycleGlobalPersonalResponse>;
    /**
     * 查询从实例列表
     */
    DescribeReplicationInstances(req: DescribeReplicationInstancesRequest, cb?: (error: string, rep: DescribeReplicationInstancesResponse) => void): Promise<DescribeReplicationInstancesResponse>;
    /**
     * 删除实例公网访问白名单策略

注意：当PolicyIndex和CidrBlock同时存在时，CidrBlock优先级更高
     */
    DeleteSecurityPolicy(req: DeleteSecurityPolicyRequest, cb?: (error: string, rep: DeleteSecurityPolicyResponse) => void): Promise<DeleteSecurityPolicyResponse>;
    /**
     * 用于获取个人版镜像仓库tag列表
     */
    DescribeImagePersonal(req: DescribeImagePersonalRequest, cb?: (error: string, rep: DescribeImagePersonalResponse) => void): Promise<DescribeImagePersonalResponse>;
    /**
     * 删除从实例
     */
    DeleteReplicationInstance(req: DeleteReplicationInstanceRequest, cb?: (error: string, rep: DeleteReplicationInstanceResponse) => void): Promise<DeleteReplicationInstanceResponse>;
    /**
     * 用于在企业版中创建命名空间
     */
    CreateNamespace(req: CreateNamespaceRequest, cb?: (error: string, rep: CreateNamespaceResponse) => void): Promise<CreateNamespaceResponse>;
    /**
     * 查询镜像仓库列表或指定镜像仓库信息
     */
    DescribeRepositories(req: DescribeRepositoriesRequest, cb?: (error: string, rep: DescribeRepositoriesResponse) => void): Promise<DescribeRepositoriesResponse>;
    /**
     * 管理实例同步
     */
    ManageReplication(req: ManageReplicationRequest, cb?: (error: string, rep: ManageReplicationResponse) => void): Promise<ManageReplicationResponse>;
    /**
     * 获取触发器日志
     */
    DescribeWebhookTriggerLog(req: DescribeWebhookTriggerLogRequest, cb?: (error: string, rep: DescribeWebhookTriggerLogResponse) => void): Promise<DescribeWebhookTriggerLogResponse>;
    /**
     * 查询容器镜像Manifest信息
     */
    DescribeImageManifests(req: DescribeImageManifestsRequest, cb?: (error: string, rep: DescribeImageManifestsResponse) => void): Promise<DescribeImageManifestsResponse>;
    /**
     * 用于设置个人版全局镜像版本自动清理策略
     */
    ManageImageLifecycleGlobalPersonal(req: ManageImageLifecycleGlobalPersonalRequest, cb?: (error: string, rep: ManageImageLifecycleGlobalPersonalResponse) => void): Promise<ManageImageLifecycleGlobalPersonalResponse>;
    /**
     * 创建自定义域名
     */
    CreateInstanceCustomizedDomain(req: CreateInstanceCustomizedDomainRequest, cb?: (error: string, rep: CreateInstanceCustomizedDomainResponse) => void): Promise<CreateInstanceCustomizedDomainResponse>;
    /**
     *  删除镜像不可变规则
     */
    DeleteImmutableTagRules(req: DeleteImmutableTagRulesRequest, cb?: (error: string, rep: DeleteImmutableTagRulesResponse) => void): Promise<DeleteImmutableTagRulesResponse>;
    /**
     * 用于在个人版中删除tag
     */
    DeleteImagePersonal(req: DeleteImagePersonalRequest, cb?: (error: string, rep: DeleteImagePersonalResponse) => void): Promise<DeleteImagePersonalResponse>;
    /**
     * 创建镜像加速服务
     */
    CreateImageAccelerationService(req: CreateImageAccelerationServiceRequest, cb?: (error: string, rep: CreateImageAccelerationServiceResponse) => void): Promise<CreateImageAccelerationServiceResponse>;
    /**
     * 更新触发器
     */
    ModifyWebhookTrigger(req: ModifyWebhookTriggerRequest, cb?: (error: string, rep: ModifyWebhookTriggerResponse) => void): Promise<ModifyWebhookTriggerResponse>;
    /**
     * 用于个人版镜像仓库中批量删除镜像仓库
     */
    BatchDeleteRepositoryPersonal(req: BatchDeleteRepositoryPersonalRequest, cb?: (error: string, rep: BatchDeleteRepositoryPersonalResponse) => void): Promise<BatchDeleteRepositoryPersonalResponse>;
    /**
     * 删除触发器
     */
    DeleteWebhookTrigger(req: DeleteWebhookTriggerRequest, cb?: (error: string, rep: DeleteWebhookTriggerResponse) => void): Promise<DeleteWebhookTriggerResponse>;
    /**
     * 查询创建从实例任务状态
     */
    DescribeReplicationInstanceCreateTasks(req: DescribeReplicationInstanceCreateTasksRequest, cb?: (error: string, rep: DescribeReplicationInstanceCreateTasksResponse) => void): Promise<DescribeReplicationInstanceCreateTasksResponse>;
    /**
     * 删除镜像加速服务
     */
    DeleteImageAccelerateService(req: DeleteImageAccelerateServiceRequest, cb?: (error: string, rep: DeleteImageAccelerateServiceResponse) => void): Promise<DeleteImageAccelerateServiceResponse>;
    /**
     * 查询个人收藏仓库
     */
    DescribeFavorRepositoryPersonal(req: DescribeFavorRepositoryPersonalRequest, cb?: (error: string, rep: DescribeFavorRepositoryPersonalResponse) => void): Promise<DescribeFavorRepositoryPersonalResponse>;
    /**
     * 用于在TCR实例中，创建多个白名单策略
     */
    CreateMultipleSecurityPolicy(req: CreateMultipleSecurityPolicyRequest, cb?: (error: string, rep: CreateMultipleSecurityPolicyResponse) => void): Promise<CreateMultipleSecurityPolicyResponse>;
    /**
     * 删除服务级账号
     */
    DeleteServiceAccount(req: DeleteServiceAccountRequest, cb?: (error: string, rep: DeleteServiceAccountResponse) => void): Promise<DeleteServiceAccountResponse>;
    /**
     * 查询镜像版本保留规则
     */
    DescribeTagRetentionRules(req: DescribeTagRetentionRulesRequest, cb?: (error: string, rep: DescribeTagRetentionRulesResponse) => void): Promise<DescribeTagRetentionRulesResponse>;
    /**
     * 用于在个人版镜像仓库中复制镜像版本
     */
    DuplicateImagePersonal(req: DuplicateImagePersonalRequest, cb?: (error: string, rep: DuplicateImagePersonalResponse) => void): Promise<DuplicateImagePersonalResponse>;
    /**
     * 创建版本保留规则
     */
    CreateTagRetentionRule(req: CreateTagRetentionRuleRequest, cb?: (error: string, rep: CreateTagRetentionRuleResponse) => void): Promise<CreateTagRetentionRuleResponse>;
    /**
     * 用于删除个人版全局镜像版本自动清理策略
     */
    DeleteImageLifecycleGlobalPersonal(req?: DeleteImageLifecycleGlobalPersonalRequest, cb?: (error: string, rep: DeleteImageLifecycleGlobalPersonalResponse) => void): Promise<DeleteImageLifecycleGlobalPersonalResponse>;
    /**
     * 查询从实例同步状态
     */
    DescribeReplicationInstanceSyncStatus(req: DescribeReplicationInstanceSyncStatusRequest, cb?: (error: string, rep: DescribeReplicationInstanceSyncStatusResponse) => void): Promise<DescribeReplicationInstanceSyncStatusResponse>;
    /**
     * 删除共享版命名空间
     */
    DeleteNamespacePersonal(req: DeleteNamespacePersonalRequest, cb?: (error: string, rep: DeleteNamespacePersonalResponse) => void): Promise<DeleteNamespacePersonalResponse>;
    /**
     * 用于更新个人版镜像仓库的访问属性
     */
    ModifyRepositoryAccessPersonal(req: ModifyRepositoryAccessPersonalRequest, cb?: (error: string, rep: ModifyRepositoryAccessPersonalResponse) => void): Promise<ModifyRepositoryAccessPersonalResponse>;
    /**
     * 更新实例信息
     */
    ModifyInstance(req: ModifyInstanceRequest, cb?: (error: string, rep: ModifyInstanceResponse) => void): Promise<ModifyInstanceResponse>;
    /**
     * 用于查询应用更新触发器
     */
    DescribeApplicationTriggerPersonal(req: DescribeApplicationTriggerPersonalRequest, cb?: (error: string, rep: DescribeApplicationTriggerPersonalResponse) => void): Promise<DescribeApplicationTriggerPersonalResponse>;
    /**
     * 更新服务级账号密码
     */
    ModifyServiceAccountPassword(req: ModifyServiceAccountPasswordRequest, cb?: (error: string, rep: ModifyServiceAccountPasswordResponse) => void): Promise<ModifyServiceAccountPasswordResponse>;
    /**
     * 查询版本保留执行记录
     */
    DescribeTagRetentionExecution(req: DescribeTagRetentionExecutionRequest, cb?: (error: string, rep: DescribeTagRetentionExecutionResponse) => void): Promise<DescribeTagRetentionExecutionResponse>;
    /**
     * 删除自定义域名
     */
    DeleteInstanceCustomizedDomain(req: DeleteInstanceCustomizedDomainRequest, cb?: (error: string, rep: DeleteInstanceCustomizedDomainResponse) => void): Promise<DeleteInstanceCustomizedDomainResponse>;
    /**
     * GC 最近10条历史
     */
    DescribeGCJobs(req: DescribeGCJobsRequest, cb?: (error: string, rep: DescribeGCJobsResponse) => void): Promise<DescribeGCJobsResponse>;
    /**
     * 查询镜像加速服务状态
     */
    DescribeImageAccelerateService(req: DescribeImageAccelerateServiceRequest, cb?: (error: string, rep: DescribeImageAccelerateServiceResponse) => void): Promise<DescribeImageAccelerateServiceResponse>;
    /**
     * 用于在个人版镜像仓库中更新容器镜像描述
     */
    ModifyRepositoryInfoPersonal(req: ModifyRepositoryInfoPersonalRequest, cb?: (error: string, rep: ModifyRepositoryInfoPersonalResponse) => void): Promise<ModifyRepositoryInfoPersonalResponse>;
    /**
     * 手动执行版本保留
     */
    CreateTagRetentionExecution(req: CreateTagRetentionExecutionRequest, cb?: (error: string, rep: CreateTagRetentionExecutionResponse) => void): Promise<CreateTagRetentionExecutionResponse>;
    /**
     * 检查待创建的实例名称是否符合规范
     */
    CheckInstanceName(req: CheckInstanceNameRequest, cb?: (error: string, rep: CheckInstanceNameResponse) => void): Promise<CheckInstanceNameResponse>;
    /**
     * 用于校验企业版实例信息
     */
    CheckInstance(req: CheckInstanceRequest, cb?: (error: string, rep: CheckInstanceResponse) => void): Promise<CheckInstanceResponse>;
    /**
     * 查询个人版命名空间信息
     */
    DescribeNamespacePersonal(req: DescribeNamespacePersonalRequest, cb?: (error: string, rep: DescribeNamespacePersonalResponse) => void): Promise<DescribeNamespacePersonalResponse>;
    /**
     * 查询所有有实例命名空间列表
     */
    DescribeInstanceAllNamespaces(req: DescribeInstanceAllNamespacesRequest, cb?: (error: string, rep: DescribeInstanceAllNamespacesResponse) => void): Promise<DescribeInstanceAllNamespacesResponse>;
    /**
     * 查询个人版仓库信息
     */
    DescribeRepositoryPersonal(req: DescribeRepositoryPersonalRequest, cb?: (error: string, rep: DescribeRepositoryPersonalResponse) => void): Promise<DescribeRepositoryPersonalResponse>;
    /**
     * 预付费实例续费，同时支持按量计费转包年包月
     */
    RenewInstance(req: RenewInstanceRequest, cb?: (error: string, rep: RenewInstanceResponse) => void): Promise<RenewInstanceResponse>;
    /**
     * 创建实例
     */
    CreateInstance(req: CreateInstanceRequest, cb?: (error: string, rep: CreateInstanceResponse) => void): Promise<CreateInstanceResponse>;
    /**
     * 用于在TCR中获取可用区域
     */
    DescribeRegions(req?: DescribeRegionsRequest, cb?: (error: string, rep: DescribeRegionsResponse) => void): Promise<DescribeRegionsResponse>;
    /**
     * 查询实例公网访问白名单策略
     */
    DescribeSecurityPolicies(req: DescribeSecurityPoliciesRequest, cb?: (error: string, rep: DescribeSecurityPoliciesResponse) => void): Promise<DescribeSecurityPoliciesResponse>;
    /**
     * 用于在个人版镜像仓库中批量删除Tag
     */
    BatchDeleteImagePersonal(req: BatchDeleteImagePersonalRequest, cb?: (error: string, rep: BatchDeleteImagePersonalResponse) => void): Promise<BatchDeleteImagePersonalResponse>;
    /**
     * 创建从实例
     */
    CreateReplicationInstance(req: CreateReplicationInstanceRequest, cb?: (error: string, rep: CreateReplicationInstanceResponse) => void): Promise<CreateReplicationInstanceResponse>;
    /**
     * 用于企业版创建镜像仓库
     */
    CreateRepository(req: CreateRepositoryRequest, cb?: (error: string, rep: CreateRepositoryResponse) => void): Promise<CreateRepositoryResponse>;
    /**
     * 管理实例公网访问
     */
    ManageExternalEndpoint(req: ManageExternalEndpointRequest, cb?: (error: string, rep: ManageExternalEndpointResponse) => void): Promise<ManageExternalEndpointResponse>;
    /**
     * 更新实例公网访问白名单
     */
    ModifySecurityPolicy(req: ModifySecurityPolicyRequest, cb?: (error: string, rep: ModifySecurityPolicyResponse) => void): Promise<ModifySecurityPolicyResponse>;
    /**
     * 查询版本保留执行任务
     */
    DescribeTagRetentionExecutionTask(req: DescribeTagRetentionExecutionTaskRequest, cb?: (error: string, rep: DescribeTagRetentionExecutionTaskResponse) => void): Promise<DescribeTagRetentionExecutionTaskResponse>;
    /**
     * 用于删除实例多个公网访问白名单策略
     */
    DeleteMultipleSecurityPolicy(req: DeleteMultipleSecurityPolicyRequest, cb?: (error: string, rep: DeleteMultipleSecurityPolicyResponse) => void): Promise<DeleteMultipleSecurityPolicyResponse>;
    /**
     * 用于获取个人版仓库中自动清理策略
     */
    DescribeImageLifecyclePersonal(req: DescribeImageLifecyclePersonalRequest, cb?: (error: string, rep: DescribeImageLifecyclePersonalResponse) => void): Promise<DescribeImageLifecyclePersonalResponse>;
    /**
     * 用于在个人版镜像仓库中，获取满足输入搜索条件的用户镜像仓库
     */
    DescribeRepositoryFilterPersonal(req: DescribeRepositoryFilterPersonalRequest, cb?: (error: string, rep: DescribeRepositoryFilterPersonalResponse) => void): Promise<DescribeRepositoryFilterPersonalResponse>;
    /**
     * 创建个人用户
     */
    CreateUserPersonal(req: CreateUserPersonalRequest, cb?: (error: string, rep: CreateUserPersonalResponse) => void): Promise<CreateUserPersonalResponse>;
    /**
     * 查询实例自定义域名列表
     */
    DescribeInstanceCustomizedDomain(req: DescribeInstanceCustomizedDomainRequest, cb?: (error: string, rep: DescribeInstanceCustomizedDomainResponse) => void): Promise<DescribeInstanceCustomizedDomainResponse>;
    /**
     * 更新命名空间信息
     */
    ModifyNamespace(req: ModifyNamespaceRequest, cb?: (error: string, rep: ModifyNamespaceResponse) => void): Promise<ModifyNamespaceResponse>;
    /**
     * 列出镜像不可变规则
     */
    DescribeImmutableTagRules(req: DescribeImmutableTagRulesRequest, cb?: (error: string, rep: DescribeImmutableTagRulesResponse) => void): Promise<DescribeImmutableTagRulesResponse>;
    /**
     * 创建实例公网访问白名单策略
     */
    CreateSecurityPolicy(req: CreateSecurityPolicyRequest, cb?: (error: string, rep: CreateSecurityPolicyResponse) => void): Promise<CreateSecurityPolicyResponse>;
    /**
     * 创建镜像签名策略
     */
    CreateSignaturePolicy(req: CreateSignaturePolicyRequest, cb?: (error: string, rep: CreateSignaturePolicyResponse) => void): Promise<CreateSignaturePolicyResponse>;
    /**
     * 删除镜像仓库企业版实例
     */
    DeleteInstance(req: DeleteInstanceRequest, cb?: (error: string, rep: DeleteInstanceResponse) => void): Promise<DeleteInstanceResponse>;
    /**
     * 更新镜像仓库信息，可修改仓库描述信息
     */
    ModifyRepository(req: ModifyRepositoryRequest, cb?: (error: string, rep: ModifyRepositoryResponse) => void): Promise<ModifyRepositoryResponse>;
    /**
     * 用于在企业版中返回Chart的下载信息
     */
    DescribeChartDownloadInfo(req: DescribeChartDownloadInfoRequest, cb?: (error: string, rep: DescribeChartDownloadInfoResponse) => void): Promise<DescribeChartDownloadInfoResponse>;
    /**
     * 更新服务级账号
     */
    ModifyServiceAccount(req: ModifyServiceAccountRequest, cb?: (error: string, rep: ModifyServiceAccountResponse) => void): Promise<ModifyServiceAccountResponse>;
    /**
     * 查询个人用户配额
     */
    DescribeUserQuotaPersonal(req?: DescribeUserQuotaPersonalRequest, cb?: (error: string, rep: DescribeUserQuotaPersonalResponse) => void): Promise<DescribeUserQuotaPersonalResponse>;
    /**
     * 创建镜像不可变规则
     */
    CreateImmutableTagRules(req: CreateImmutableTagRulesRequest, cb?: (error: string, rep: CreateImmutableTagRulesResponse) => void): Promise<CreateImmutableTagRulesResponse>;
    /**
     * 用于企业版批量删除Repository Tag
     */
    DeleteRepositoryTags(req: DeleteRepositoryTagsRequest, cb?: (error: string, rep: DeleteRepositoryTagsResponse) => void): Promise<DeleteRepositoryTagsResponse>;
    /**
     * 查询长期访问凭证信息
     */
    DescribeInstanceToken(req: DescribeInstanceTokenRequest, cb?: (error: string, rep: DescribeInstanceTokenResponse) => void): Promise<DescribeInstanceTokenResponse>;
    /**
     * 用于在TCR中下载helm chart
     */
    DownloadHelmChart(req: DownloadHelmChartRequest, cb?: (error: string, rep: DownloadHelmChartResponse) => void): Promise<DownloadHelmChartResponse>;
    /**
     * 更新镜像不可变规则
     */
    ModifyImmutableTagRules(req: ModifyImmutableTagRulesRequest, cb?: (error: string, rep: ModifyImmutableTagRulesResponse) => void): Promise<ModifyImmutableTagRulesResponse>;
    /**
     * 用于删除应用更新触发器
     */
    DeleteApplicationTriggerPersonal(req: DeleteApplicationTriggerPersonalRequest, cb?: (error: string, rep: DeleteApplicationTriggerPersonalResponse) => void): Promise<DeleteApplicationTriggerPersonalResponse>;
    /**
     * 创建tcr内网私有域名解析
     */
    CreateInternalEndpointDns(req: CreateInternalEndpointDnsRequest, cb?: (error: string, rep: CreateInternalEndpointDnsResponse) => void): Promise<CreateInternalEndpointDnsResponse>;
    /**
     * 更新实例内指定长期访问凭证的启用状态
     */
    ModifyInstanceToken(req: ModifyInstanceTokenRequest, cb?: (error: string, rep: ModifyInstanceTokenResponse) => void): Promise<ModifyInstanceTokenResponse>;
    /**
     * 创建触发器
     */
    CreateWebhookTrigger(req: CreateWebhookTriggerRequest, cb?: (error: string, rep: CreateWebhookTriggerResponse) => void): Promise<CreateWebhookTriggerResponse>;
    /**
     * 用于创建应用更新触发器
     */
    CreateApplicationTriggerPersonal(req: CreateApplicationTriggerPersonalRequest, cb?: (error: string, rep: CreateApplicationTriggerPersonalResponse) => void): Promise<CreateApplicationTriggerPersonalResponse>;
    /**
     * 用于判断个人版仓库是否存在
     */
    ValidateRepositoryExistPersonal(req: ValidateRepositoryExistPersonalRequest, cb?: (error: string, rep: ValidateRepositoryExistPersonalResponse) => void): Promise<ValidateRepositoryExistPersonalResponse>;
    /**
     * 用于修改应用更新触发器
     */
    ModifyApplicationTriggerPersonal(req: ModifyApplicationTriggerPersonalRequest, cb?: (error: string, rep: ModifyApplicationTriggerPersonalResponse) => void): Promise<ModifyApplicationTriggerPersonalResponse>;
    /**
     * 查询命名空间列表或指定命名空间信息
     */
    DescribeNamespaces(req: DescribeNamespacesRequest, cb?: (error: string, rep: DescribeNamespacesResponse) => void): Promise<DescribeNamespacesResponse>;
    /**
     * 查询服务级账号
     */
    DescribeServiceAccounts(req: DescribeServiceAccountsRequest, cb?: (error: string, rep: DescribeServiceAccountsResponse) => void): Promise<DescribeServiceAccountsResponse>;
    /**
     * 为一个镜像版本创建签名
     */
    CreateSignature(req: CreateSignatureRequest, cb?: (error: string, rep: CreateSignatureResponse) => void): Promise<CreateSignatureResponse>;
    /**
     * 删除tcr内网私有域名解析
     */
    DeleteInternalEndpointDns(req: DeleteInternalEndpointDnsRequest, cb?: (error: string, rep: DeleteInternalEndpointDnsResponse) => void): Promise<DeleteInternalEndpointDnsResponse>;
    /**
     * 更新版本保留规则
     */
    ModifyTagRetentionRule(req: ModifyTagRetentionRuleRequest, cb?: (error: string, rep: ModifyTagRetentionRuleResponse) => void): Promise<ModifyTagRetentionRuleResponse>;
    /**
     * 用于在个人版中查询与指定tag镜像内容相同的tag列表
     */
    DescribeImageFilterPersonal(req: DescribeImageFilterPersonalRequest, cb?: (error: string, rep: DescribeImageFilterPersonalResponse) => void): Promise<DescribeImageFilterPersonalResponse>;
    /**
     * 删除镜像仓库
     */
    DeleteRepository(req: DeleteRepositoryRequest, cb?: (error: string, rep: DeleteRepositoryResponse) => void): Promise<DeleteRepositoryResponse>;
    /**
     * 用于在个人版中获取用户全部的镜像仓库列表
     */
    DescribeRepositoryOwnerPersonal(req: DescribeRepositoryOwnerPersonalRequest, cb?: (error: string, rep: DescribeRepositoryOwnerPersonalResponse) => void): Promise<DescribeRepositoryOwnerPersonalResponse>;
    /**
     * 查询镜像版本列表或指定容器镜像信息
     */
    DescribeImages(req: DescribeImagesRequest, cb?: (error: string, rep: DescribeImagesResponse) => void): Promise<DescribeImagesResponse>;
    /**
     * 删除版本保留规则
     */
    DeleteTagRetentionRule(req: DeleteTagRetentionRuleRequest, cb?: (error: string, rep: DeleteTagRetentionRuleResponse) => void): Promise<DeleteTagRetentionRuleResponse>;
    /**
     * 删除命名空间
     */
    DeleteNamespace(req: DeleteNamespaceRequest, cb?: (error: string, rep: DeleteNamespaceResponse) => void): Promise<DeleteNamespaceResponse>;
    /**
     * 删除命名空间加签策略
     */
    DeleteSignaturePolicy(req: DeleteSignaturePolicyRequest, cb?: (error: string, rep: DeleteSignaturePolicyResponse) => void): Promise<DeleteSignaturePolicyResponse>;
    /**
     * 创建服务级账户
     */
    CreateServiceAccount(req: CreateServiceAccountRequest, cb?: (error: string, rep: CreateServiceAccountResponse) => void): Promise<CreateServiceAccountResponse>;
    /**
     * 查询实例信息
     */
    DescribeInstances(req: DescribeInstancesRequest, cb?: (error: string, rep: DescribeInstancesResponse) => void): Promise<DescribeInstancesResponse>;
    /**
     * 用于个人版镜像仓库中删除
     */
    DeleteRepositoryPersonal(req: DeleteRepositoryPersonalRequest, cb?: (error: string, rep: DeleteRepositoryPersonalResponse) => void): Promise<DeleteRepositoryPersonalResponse>;
    /**
     * 用于查询应用更新触发器触发日志
     */
    DescribeApplicationTriggerLogPersonal(req: DescribeApplicationTriggerLogPersonalRequest, cb?: (error: string, rep: DescribeApplicationTriggerLogPersonalResponse) => void): Promise<DescribeApplicationTriggerLogPersonalResponse>;
    /**
     * 删除长期访问凭证
     */
    DeleteInstanceToken(req: DeleteInstanceTokenRequest, cb?: (error: string, rep: DeleteInstanceTokenResponse) => void): Promise<DeleteInstanceTokenResponse>;
    /**
     * 修改个人用户登录密码
     */
    ModifyUserPasswordPersonal(req: ModifyUserPasswordPersonalRequest, cb?: (error: string, rep: ModifyUserPasswordPersonalResponse) => void): Promise<ModifyUserPasswordPersonalResponse>;
    /**
     * 查询触发器
     */
    DescribeWebhookTrigger(req: DescribeWebhookTriggerRequest, cb?: (error: string, rep: DescribeWebhookTriggerResponse) => void): Promise<DescribeWebhookTriggerResponse>;
    /**
     * 管理实例内网访问VPC链接
     */
    ManageInternalEndpoint(req: ManageInternalEndpointRequest, cb?: (error: string, rep: ManageInternalEndpointResponse) => void): Promise<ManageInternalEndpointResponse>;
    /**
     * 用于在企业版镜像仓库中复制镜像版本
     */
    DuplicateImage(req: DuplicateImageRequest, cb?: (error: string, rep: DuplicateImageResponse) => void): Promise<DuplicateImageResponse>;
    /**
     * 查询实例当前状态以及过程信息
     */
    DescribeInstanceStatus(req: DescribeInstanceStatusRequest, cb?: (error: string, rep: DescribeInstanceStatusResponse) => void): Promise<DescribeInstanceStatusResponse>;
    /**
     * 用于在个人版仓库中创建镜像仓库
     */
    CreateRepositoryPersonal(req: CreateRepositoryPersonalRequest, cb?: (error: string, rep: CreateRepositoryPersonalResponse) => void): Promise<CreateRepositoryPersonalResponse>;
    /**
     * 删除指定镜像
     */
    DeleteImage(req: DeleteImageRequest, cb?: (error: string, rep: DeleteImageResponse) => void): Promise<DeleteImageResponse>;
    /**
     * 查询个人版用户命名空间是否存在
     */
    ValidateNamespaceExistPersonal(req: ValidateNamespaceExistPersonalRequest, cb?: (error: string, rep: ValidateNamespaceExistPersonalResponse) => void): Promise<ValidateNamespaceExistPersonalResponse>;
    /**
     * 创建个人版镜像仓库命名空间，此命名空间全局唯一
     */
    CreateNamespacePersonal(req: CreateNamespacePersonalRequest, cb?: (error: string, rep: CreateNamespacePersonalResponse) => void): Promise<CreateNamespacePersonalResponse>;
    /**
     * 查询实例公网访问入口状态
     */
    DescribeExternalEndpointStatus(req: DescribeExternalEndpointStatusRequest, cb?: (error: string, rep: DescribeExternalEndpointStatusResponse) => void): Promise<DescribeExternalEndpointStatusResponse>;
    /**
     * 查询实例内网访问VPC链接
     */
    DescribeInternalEndpoints(req: DescribeInternalEndpointsRequest, cb?: (error: string, rep: DescribeInternalEndpointsResponse) => void): Promise<DescribeInternalEndpointsResponse>;
    /**
     * 批量查询vpc是否已经添加私有域名解析
     */
    DescribeInternalEndpointDnsStatus(req: DescribeInternalEndpointDnsStatusRequest, cb?: (error: string, rep: DescribeInternalEndpointDnsStatusResponse) => void): Promise<DescribeInternalEndpointDnsStatusResponse>;
    /**
     * 创建实例的临时或长期访问凭证
     */
    CreateInstanceToken(req: CreateInstanceTokenRequest, cb?: (error: string, rep: CreateInstanceTokenResponse) => void): Promise<CreateInstanceTokenResponse>;
}
