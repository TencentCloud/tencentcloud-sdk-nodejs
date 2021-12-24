import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { RestartApplicationPodResponse, DeleteApplicationRequest, CreateResourceRequest, ResumeDeployApplicationResponse, RestartApplicationResponse, StopApplicationRequest, DescribeDeployApplicationDetailRequest, DescribeApplicationPodsResponse, DeleteIngressRequest, RestartApplicationPodRequest, DescribeRelatedIngressesRequest, ModifyEnvironmentResponse, GenerateApplicationPackageDownloadUrlRequest, DeployApplicationRequest, ModifyIngressResponse, DescribeEnvironmentsResponse, ModifyIngressRequest, DescribeApplicationPodsRequest, CreateApplicationRequest, DescribeRelatedIngressesResponse, DescribeIngressesRequest, ModifyApplicationReplicasResponse, ModifyApplicationReplicasRequest, DescribeIngressesResponse, DeleteIngressResponse, GenerateApplicationPackageDownloadUrlResponse, DescribeIngressResponse, CreateCosTokenResponse, RollingUpdateApplicationByVersionResponse, RollingUpdateApplicationByVersionRequest, DescribeDeployApplicationDetailResponse, CreateResourceResponse, ModifyApplicationInfoRequest, ModifyApplicationInfoResponse, DeleteApplicationResponse, CreateEnvironmentResponse, RestartApplicationRequest, CreateApplicationResponse, RevertDeployApplicationRequest, ModifyEnvironmentRequest, RevertDeployApplicationResponse, DescribeIngressRequest, CreateCosTokenRequest, DescribeEnvironmentsRequest, StopApplicationResponse, ResumeDeployApplicationRequest, DeployApplicationResponse, CreateEnvironmentRequest } from "./tem_models";
/**
 * tem client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 修改应用实例数量
     */
    ModifyApplicationReplicas(req: ModifyApplicationReplicasRequest, cb?: (error: string, rep: ModifyApplicationReplicasResponse) => void): Promise<ModifyApplicationReplicasResponse>;
    /**
     * 创建或者更新 Ingress 规则
     */
    ModifyIngress(req: ModifyIngressRequest, cb?: (error: string, rep: ModifyIngressResponse) => void): Promise<ModifyIngressResponse>;
    /**
     * 服务删除
  - 停止当前运行服务
  - 删除服务相关资源
  - 删除服务
     */
    DeleteApplication(req: DeleteApplicationRequest, cb?: (error: string, rep: DeleteApplicationResponse) => void): Promise<DeleteApplicationResponse>;
    /**
     * 删除 Ingress 规则
     */
    DeleteIngress(req: DeleteIngressRequest, cb?: (error: string, rep: DeleteIngressResponse) => void): Promise<DeleteIngressResponse>;
    /**
     * 应用部署
     */
    DeployApplication(req: DeployApplicationRequest, cb?: (error: string, rep: DeployApplicationResponse) => void): Promise<DeployApplicationResponse>;
    /**
     * 获取分批发布详情
     */
    DescribeDeployApplicationDetail(req: DescribeDeployApplicationDetailRequest, cb?: (error: string, rep: DescribeDeployApplicationDetailResponse) => void): Promise<DescribeDeployApplicationDetailResponse>;
    /**
     * 开始下一批次发布
     */
    ResumeDeployApplication(req: ResumeDeployApplicationRequest, cb?: (error: string, rep: ResumeDeployApplicationResponse) => void): Promise<ResumeDeployApplicationResponse>;
    /**
     * 编辑环境
     */
    ModifyEnvironment(req: ModifyEnvironmentRequest, cb?: (error: string, rep: ModifyEnvironmentResponse) => void): Promise<ModifyEnvironmentResponse>;
    /**
     * 服务停止
     */
    StopApplication(req: StopApplicationRequest, cb?: (error: string, rep: StopApplicationResponse) => void): Promise<StopApplicationResponse>;
    /**
     * 获取应用实例列表
     */
    DescribeApplicationPods(req: DescribeApplicationPodsRequest, cb?: (error: string, rep: DescribeApplicationPodsResponse) => void): Promise<DescribeApplicationPodsResponse>;
    /**
     * 服务重启
     */
    RestartApplication(req: RestartApplicationRequest, cb?: (error: string, rep: RestartApplicationResponse) => void): Promise<RestartApplicationResponse>;
    /**
     * 修改应用基本信息
     */
    ModifyApplicationInfo(req: ModifyApplicationInfoRequest, cb?: (error: string, rep: ModifyApplicationInfoResponse) => void): Promise<ModifyApplicationInfoResponse>;
    /**
     * 获取租户环境列表
     */
    DescribeEnvironments(req: DescribeEnvironmentsRequest, cb?: (error: string, rep: DescribeEnvironmentsResponse) => void): Promise<DescribeEnvironmentsResponse>;
    /**
     * 生成Cos临时秘钥
     */
    CreateCosToken(req: CreateCosTokenRequest, cb?: (error: string, rep: CreateCosTokenResponse) => void): Promise<CreateCosTokenResponse>;
    /**
     * 查询 Ingress 规则
     */
    DescribeIngress(req: DescribeIngressRequest, cb?: (error: string, rep: DescribeIngressResponse) => void): Promise<DescribeIngressResponse>;
    /**
     * 生成应用程序包预签名下载链接
     */
    GenerateApplicationPackageDownloadUrl(req: GenerateApplicationPackageDownloadUrlRequest, cb?: (error: string, rep: GenerateApplicationPackageDownloadUrlResponse) => void): Promise<GenerateApplicationPackageDownloadUrlResponse>;
    /**
     * 创建环境
     */
    CreateEnvironment(req: CreateEnvironmentRequest, cb?: (error: string, rep: CreateEnvironmentResponse) => void): Promise<CreateEnvironmentResponse>;
    /**
     * 查询 Ingress 规则列表
     */
    DescribeIngresses(req: DescribeIngressesRequest, cb?: (error: string, rep: DescribeIngressesResponse) => void): Promise<DescribeIngressesResponse>;
    /**
     * 创建应用
     */
    CreateApplication(req: CreateApplicationRequest, cb?: (error: string, rep: CreateApplicationResponse) => void): Promise<CreateApplicationResponse>;
    /**
     * 重启应用实例
     */
    RestartApplicationPod(req: RestartApplicationPodRequest, cb?: (error: string, rep: RestartApplicationPodResponse) => void): Promise<RestartApplicationPodResponse>;
    /**
     * 更新应用部署版本
     */
    RollingUpdateApplicationByVersion(req: RollingUpdateApplicationByVersionRequest, cb?: (error: string, rep: RollingUpdateApplicationByVersionResponse) => void): Promise<RollingUpdateApplicationByVersionResponse>;
    /**
     * 回滚分批发布
     */
    RevertDeployApplication(req: RevertDeployApplicationRequest, cb?: (error: string, rep: RevertDeployApplicationResponse) => void): Promise<RevertDeployApplicationResponse>;
    /**
     * 查询应用关联的 Ingress 规则列表
     */
    DescribeRelatedIngresses(req: DescribeRelatedIngressesRequest, cb?: (error: string, rep: DescribeRelatedIngressesResponse) => void): Promise<DescribeRelatedIngressesResponse>;
    /**
     * 绑定云资源
     */
    CreateResource(req: CreateResourceRequest, cb?: (error: string, rep: CreateResourceResponse) => void): Promise<CreateResourceResponse>;
}
