import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateResourceRequest, DescribeConfigDataResponse, DescribeApplicationInfoResponse, ModifyIngressResponse, DeleteApplicationServiceRequest, RestartApplicationPodRequest, DestroyLogConfigResponse, ResumeDeployApplicationResponse, DescribeApplicationPodsRequest, DeleteIngressResponse, DeleteApplicationResponse, ModifyApplicationAutoscalerResponse, RollingUpdateApplicationByVersionRequest, CreateCosTokenResponse, ModifyLogConfigResponse, RollingUpdateApplicationByVersionResponse, StopApplicationRequest, ModifyApplicationInfoRequest, DestroyEnvironmentRequest, CreateEnvironmentResponse, DescribeEnvironmentStatusRequest, RevertDeployApplicationResponse, DescribeApplicationsResponse, CreateCosTokenRequest, DescribeEnvironmentsRequest, CreateEnvironmentRequest, DescribeApplicationServiceListResponse, DescribeLogConfigRequest, DescribeEnvironmentStatusResponse, DescribeApplicationPodsResponse, DescribeConfigDataListRequest, EnableApplicationAutoscalerResponse, ModifyApplicationAutoscalerRequest, ModifyConfigDataResponse, ModifyIngressRequest, DescribeIngressesRequest, CreateLogConfigRequest, RestartApplicationResponse, DescribeIngressesResponse, ModifyConfigDataRequest, CreateConfigDataResponse, DescribeApplicationsStatusRequest, DescribeIngressResponse, CreateResourceResponse, ModifyApplicationInfoResponse, RestartApplicationRequest, DestroyEnvironmentResponse, DisableApplicationAutoscalerResponse, DescribeIngressRequest, StopApplicationResponse, DeployApplicationResponse, RestartApplicationPodResponse, DeleteApplicationRequest, CreateApplicationAutoscalerResponse, DeleteApplicationAutoscalerRequest, DescribeApplicationAutoscalerListRequest, DescribeApplicationsStatusResponse, DescribeDeployApplicationDetailRequest, DeleteIngressRequest, DisableApplicationAutoscalerRequest, DescribeRelatedIngressesRequest, GenerateApplicationPackageDownloadUrlRequest, DescribeEnvironmentsResponse, DeleteApplicationAutoscalerResponse, DescribeRelatedIngressesResponse, DescribeEnvironmentRequest, DescribePagedLogConfigListRequest, DescribeApplicationServiceListRequest, DescribeDeployApplicationDetailResponse, DescribeEnvironmentResponse, CreateApplicationAutoscalerRequest, DeleteApplicationServiceResponse, ResumeDeployApplicationRequest, DescribeConfigDataRequest, CreateLogConfigResponse, DescribeConfigDataListResponse, ModifyApplicationServiceRequest, DescribePagedLogConfigListResponse, CreateConfigDataRequest, DeployApplicationRequest, DescribeApplicationAutoscalerListResponse, DestroyConfigDataRequest, DestroyConfigDataResponse, DescribeApplicationsRequest, DescribeApplicationInfoRequest, CreateApplicationRequest, CreateApplicationServiceRequest, ModifyApplicationReplicasResponse, ModifyEnvironmentRequest, GenerateApplicationPackageDownloadUrlResponse, CreateApplicationServiceResponse, DescribeLogConfigResponse, RevertDeployApplicationRequest, CreateApplicationResponse, ModifyApplicationServiceResponse, ModifyEnvironmentResponse, ModifyApplicationReplicasRequest, ModifyLogConfigRequest, DestroyLogConfigRequest, EnableApplicationAutoscalerRequest } from "./tem_models";
/**
 * tem client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 编辑配置
     */
    ModifyConfigData(req: ModifyConfigDataRequest, cb?: (error: string, rep: ModifyConfigDataResponse) => void): Promise<ModifyConfigDataResponse>;
    /**
     * 单环境下所有应用状态查看
     */
    DescribeApplicationsStatus(req: DescribeApplicationsStatusRequest, cb?: (error: string, rep: DescribeApplicationsStatusResponse) => void): Promise<DescribeApplicationsStatusResponse>;
    /**
     * 查询应用访问方式列表
     */
    DescribeApplicationServiceList(req: DescribeApplicationServiceListRequest, cb?: (error: string, rep: DescribeApplicationServiceListResponse) => void): Promise<DescribeApplicationServiceListResponse>;
    /**
     * 查询分页的日志收集配置列表
     */
    DescribePagedLogConfigList(req: DescribePagedLogConfigListRequest, cb?: (error: string, rep: DescribePagedLogConfigListResponse) => void): Promise<DescribePagedLogConfigListResponse>;
    /**
     * 此接口没有被使用了

创建或者更新 Ingress 规则
     */
    ModifyIngress(req: ModifyIngressRequest, cb?: (error: string, rep: ModifyIngressResponse) => void): Promise<ModifyIngressResponse>;
    /**
     * 启用应用弹性策略组合
     */
    EnableApplicationAutoscaler(req: EnableApplicationAutoscalerRequest, cb?: (error: string, rep: EnableApplicationAutoscalerResponse) => void): Promise<EnableApplicationAutoscalerResponse>;
    /**
     * 修改应用实例数量
     */
    ModifyApplicationReplicas(req: ModifyApplicationReplicasRequest, cb?: (error: string, rep: ModifyApplicationReplicasResponse) => void): Promise<ModifyApplicationReplicasResponse>;
    /**
     * 创建弹性伸缩策略组合
     */
    CreateApplicationAutoscaler(req: CreateApplicationAutoscalerRequest, cb?: (error: string, rep: CreateApplicationAutoscalerResponse) => void): Promise<CreateApplicationAutoscalerResponse>;
    /**
     * 重启应用实例
     */
    RestartApplicationPod(req: RestartApplicationPodRequest, cb?: (error: string, rep: RestartApplicationPodResponse) => void): Promise<RestartApplicationPodResponse>;
    /**
     * 编辑日志收集配置
     */
    ModifyLogConfig(req: ModifyLogConfigRequest, cb?: (error: string, rep: ModifyLogConfigResponse) => void): Promise<ModifyLogConfigResponse>;
    /**
     * 服务删除
  - 停止当前运行服务
  - 删除服务相关资源
  - 删除服务
     */
    DeleteApplication(req: DeleteApplicationRequest, cb?: (error: string, rep: DeleteApplicationResponse) => void): Promise<DeleteApplicationResponse>;
    /**
     * 获取环境状态
     */
    DescribeEnvironmentStatus(req: DescribeEnvironmentStatusRequest, cb?: (error: string, rep: DescribeEnvironmentStatusResponse) => void): Promise<DescribeEnvironmentStatusResponse>;
    /**
     * 开始下一批次发布
     */
    ResumeDeployApplication(req: ResumeDeployApplicationRequest, cb?: (error: string, rep: ResumeDeployApplicationResponse) => void): Promise<ResumeDeployApplicationResponse>;
    /**
     * 删除 Ingress 规则
     */
    DeleteIngress(req: DeleteIngressRequest, cb?: (error: string, rep: DeleteIngressResponse) => void): Promise<DeleteIngressResponse>;
    /**
     * 应用部署
     */
    DeployApplication(req: DeployApplicationRequest, cb?: (error: string, rep: DeployApplicationResponse) => void): Promise<DeployApplicationResponse>;
    /**
     * 修改弹性伸缩策略组合
     */
    ModifyApplicationAutoscaler(req: ModifyApplicationAutoscalerRequest, cb?: (error: string, rep: ModifyApplicationAutoscalerResponse) => void): Promise<ModifyApplicationAutoscalerResponse>;
    /**
     * 获取分批发布详情
     */
    DescribeDeployApplicationDetail(req: DescribeDeployApplicationDetailRequest, cb?: (error: string, rep: DescribeDeployApplicationDetailResponse) => void): Promise<DescribeDeployApplicationDetailResponse>;
    /**
     * 修改服务访问方式列表
     */
    ModifyApplicationService(req: ModifyApplicationServiceRequest, cb?: (error: string, rep: ModifyApplicationServiceResponse) => void): Promise<ModifyApplicationServiceResponse>;
    /**
     * 编辑环境
     */
    ModifyEnvironment(req: ModifyEnvironmentRequest, cb?: (error: string, rep: ModifyEnvironmentResponse) => void): Promise<ModifyEnvironmentResponse>;
    /**
     * 获取环境基础信息
     */
    DescribeEnvironment(req: DescribeEnvironmentRequest, cb?: (error: string, rep: DescribeEnvironmentResponse) => void): Promise<DescribeEnvironmentResponse>;
    /**
     * 查询日志收集配置详情
     */
    DescribeLogConfig(req: DescribeLogConfigRequest, cb?: (error: string, rep: DescribeLogConfigResponse) => void): Promise<DescribeLogConfigResponse>;
    /**
     * 服务停止
     */
    StopApplication(req: StopApplicationRequest, cb?: (error: string, rep: StopApplicationResponse) => void): Promise<StopApplicationResponse>;
    /**
     * 创建日志收集配置
     */
    CreateLogConfig(req: CreateLogConfigRequest, cb?: (error: string, rep: CreateLogConfigResponse) => void): Promise<CreateLogConfigResponse>;
    /**
     * 新增访问方式
     */
    CreateApplicationService(req: CreateApplicationServiceRequest, cb?: (error: string, rep: CreateApplicationServiceResponse) => void): Promise<CreateApplicationServiceResponse>;
    /**
     * 服务基本信息查看
     */
    DescribeApplicationInfo(req: DescribeApplicationInfoRequest, cb?: (error: string, rep: DescribeApplicationInfoResponse) => void): Promise<DescribeApplicationInfoResponse>;
    /**
     * 创建配置
     */
    CreateConfigData(req: CreateConfigDataRequest, cb?: (error: string, rep: CreateConfigDataResponse) => void): Promise<CreateConfigDataResponse>;
    /**
     * 获取应用实例列表
     */
    DescribeApplicationPods(req: DescribeApplicationPodsRequest, cb?: (error: string, rep: DescribeApplicationPodsResponse) => void): Promise<DescribeApplicationPodsResponse>;
    /**
     * 删除应用弹性策略组合
     */
    DeleteApplicationAutoscaler(req: DeleteApplicationAutoscalerRequest, cb?: (error: string, rep: DeleteApplicationAutoscalerResponse) => void): Promise<DeleteApplicationAutoscalerResponse>;
    /**
     * 修改应用基本信息
     */
    ModifyApplicationInfo(req: ModifyApplicationInfoRequest, cb?: (error: string, rep: ModifyApplicationInfoResponse) => void): Promise<ModifyApplicationInfoResponse>;
    /**
     * 销毁配置
     */
    DestroyConfigData(req: DestroyConfigDataRequest, cb?: (error: string, rep: DestroyConfigDataResponse) => void): Promise<DestroyConfigDataResponse>;
    /**
     * 获取环境列表
     */
    DescribeEnvironments(req: DescribeEnvironmentsRequest, cb?: (error: string, rep: DescribeEnvironmentsResponse) => void): Promise<DescribeEnvironmentsResponse>;
    /**
     * 生成Cos临时密钥
     */
    CreateCosToken(req: CreateCosTokenRequest, cb?: (error: string, rep: CreateCosTokenResponse) => void): Promise<CreateCosTokenResponse>;
    /**
     * 查询 Ingress 规则
     */
    DescribeIngress(req: DescribeIngressRequest, cb?: (error: string, rep: DescribeIngressResponse) => void): Promise<DescribeIngressResponse>;
    /**
     * 删除一条访问方式
     */
    DeleteApplicationService(req: DeleteApplicationServiceRequest, cb?: (error: string, rep: DeleteApplicationServiceResponse) => void): Promise<DeleteApplicationServiceResponse>;
    /**
     * 生成应用程序包预签名下载链接
     */
    GenerateApplicationPackageDownloadUrl(req: GenerateApplicationPackageDownloadUrlRequest, cb?: (error: string, rep: GenerateApplicationPackageDownloadUrlResponse) => void): Promise<GenerateApplicationPackageDownloadUrlResponse>;
    /**
     * 创建环境
     */
    CreateEnvironment(req: CreateEnvironmentRequest, cb?: (error: string, rep: CreateEnvironmentResponse) => void): Promise<CreateEnvironmentResponse>;
    /**
     * 关闭应用弹性策略组合
     */
    DisableApplicationAutoscaler(req: DisableApplicationAutoscalerRequest, cb?: (error: string, rep: DisableApplicationAutoscalerResponse) => void): Promise<DisableApplicationAutoscalerResponse>;
    /**
     * 查询 Ingress 规则列表
     */
    DescribeIngresses(req: DescribeIngressesRequest, cb?: (error: string, rep: DescribeIngressesResponse) => void): Promise<DescribeIngressesResponse>;
    /**
     * 创建应用
     */
    CreateApplication(req: CreateApplicationRequest, cb?: (error: string, rep: CreateApplicationResponse) => void): Promise<CreateApplicationResponse>;
    /**
     * 服务重启
     */
    RestartApplication(req: RestartApplicationRequest, cb?: (error: string, rep: RestartApplicationResponse) => void): Promise<RestartApplicationResponse>;
    /**
     * 更新应用部署版本
     */
    RollingUpdateApplicationByVersion(req: RollingUpdateApplicationByVersionRequest, cb?: (error: string, rep: RollingUpdateApplicationByVersionResponse) => void): Promise<RollingUpdateApplicationByVersionResponse>;
    /**
     * 获取运行服务列表
     */
    DescribeApplications(req: DescribeApplicationsRequest, cb?: (error: string, rep: DescribeApplicationsResponse) => void): Promise<DescribeApplicationsResponse>;
    /**
     * 回滚分批发布
     */
    RevertDeployApplication(req: RevertDeployApplicationRequest, cb?: (error: string, rep: RevertDeployApplicationResponse) => void): Promise<RevertDeployApplicationResponse>;
    /**
     * 销毁日志收集配置
     */
    DestroyLogConfig(req: DestroyLogConfigRequest, cb?: (error: string, rep: DestroyLogConfigResponse) => void): Promise<DestroyLogConfigResponse>;
    /**
     * 查询应用关联的 Ingress 规则列表
     */
    DescribeRelatedIngresses(req: DescribeRelatedIngressesRequest, cb?: (error: string, rep: DescribeRelatedIngressesResponse) => void): Promise<DescribeRelatedIngressesResponse>;
    /**
     * 查询配置详情
     */
    DescribeConfigData(req: DescribeConfigDataRequest, cb?: (error: string, rep: DescribeConfigDataResponse) => void): Promise<DescribeConfigDataResponse>;
    /**
     * 绑定云资源
     */
    CreateResource(req: CreateResourceRequest, cb?: (error: string, rep: CreateResourceResponse) => void): Promise<CreateResourceResponse>;
    /**
     * 获取应用弹性策略组合
     */
    DescribeApplicationAutoscalerList(req: DescribeApplicationAutoscalerListRequest, cb?: (error: string, rep: DescribeApplicationAutoscalerListResponse) => void): Promise<DescribeApplicationAutoscalerListResponse>;
    /**
     * 销毁环境
     */
    DestroyEnvironment(req: DestroyEnvironmentRequest, cb?: (error: string, rep: DestroyEnvironmentResponse) => void): Promise<DestroyEnvironmentResponse>;
    /**
     * 查询配置列表
     */
    DescribeConfigDataList(req: DescribeConfigDataListRequest, cb?: (error: string, rep: DescribeConfigDataListResponse) => void): Promise<DescribeConfigDataListResponse>;
}
