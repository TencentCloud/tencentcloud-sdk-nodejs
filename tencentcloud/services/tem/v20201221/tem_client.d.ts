import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifyServiceInfoResponse, CreateResourceRequest, CreateServiceV2Response, CreateCosTokenV2Request, DeployServiceV2Response, DescribeNamespacesResponse, RestartServiceRunPodRequest, ModifyIngressResponse, DeleteIngressRequest, ModifyServiceInfoRequest, CreateNamespaceResponse, DescribeRelatedIngressesRequest, DescribeNamespacesRequest, CreateCosTokenRequest, DeployServiceV2Request, ModifyIngressRequest, GenerateDownloadUrlResponse, DescribeRelatedIngressesResponse, CreateNamespaceRequest, DescribeIngressesRequest, DescribeServiceRunPodListV2Request, DescribeIngressesResponse, DeleteIngressResponse, RestartServiceRunPodResponse, ModifyNamespaceRequest, DescribeIngressResponse, CreateCosTokenResponse, ModifyNamespaceResponse, CreateResourceResponse, DescribeServiceRunPodListV2Response, CreateCosTokenV2Response, GenerateDownloadUrlRequest, DescribeIngressRequest, CreateServiceV2Request } from "./tem_models";
/**
 * tem client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 编辑环境
     */
    ModifyNamespace(req: ModifyNamespaceRequest, cb?: (error: string, rep: ModifyNamespaceResponse) => void): Promise<ModifyNamespaceResponse>;
    /**
     * 创建环境
     */
    CreateNamespace(req: CreateNamespaceRequest, cb?: (error: string, rep: CreateNamespaceResponse) => void): Promise<CreateNamespaceResponse>;
    /**
     * 创建或者更新 Ingress 规则
     */
    ModifyIngress(req: ModifyIngressRequest, cb?: (error: string, rep: ModifyIngressResponse) => void): Promise<ModifyIngressResponse>;
    /**
     * 生成包预签名下载链接
     */
    GenerateDownloadUrl(req: GenerateDownloadUrlRequest, cb?: (error: string, rep: GenerateDownloadUrlResponse) => void): Promise<GenerateDownloadUrlResponse>;
    /**
     * 生成Cos临时秘钥
     */
    CreateCosToken(req: CreateCosTokenRequest, cb?: (error: string, rep: CreateCosTokenResponse) => void): Promise<CreateCosTokenResponse>;
    /**
     * 查询 Ingress 规则
     */
    DescribeIngress(req: DescribeIngressRequest, cb?: (error: string, rep: DescribeIngressResponse) => void): Promise<DescribeIngressResponse>;
    /**
     * 生成Cos临时秘钥
     */
    CreateCosTokenV2(req: CreateCosTokenV2Request, cb?: (error: string, rep: CreateCosTokenV2Response) => void): Promise<CreateCosTokenV2Response>;
    /**
     * 服务部署
     */
    DeployServiceV2(req: DeployServiceV2Request, cb?: (error: string, rep: DeployServiceV2Response) => void): Promise<DeployServiceV2Response>;
    /**
     * 创建服务
     */
    CreateServiceV2(req: CreateServiceV2Request, cb?: (error: string, rep: CreateServiceV2Response) => void): Promise<CreateServiceV2Response>;
    /**
     * 查询服务关联的 Ingress 规则列表
     */
    DescribeRelatedIngresses(req: DescribeRelatedIngressesRequest, cb?: (error: string, rep: DescribeRelatedIngressesResponse) => void): Promise<DescribeRelatedIngressesResponse>;
    /**
     * 修改服务基本信息
     */
    ModifyServiceInfo(req: ModifyServiceInfoRequest, cb?: (error: string, rep: ModifyServiceInfoResponse) => void): Promise<ModifyServiceInfoResponse>;
    /**
     * 重启实例
     */
    RestartServiceRunPod(req: RestartServiceRunPodRequest, cb?: (error: string, rep: RestartServiceRunPodResponse) => void): Promise<RestartServiceRunPodResponse>;
    /**
     * 绑定云资源
     */
    CreateResource(req: CreateResourceRequest, cb?: (error: string, rep: CreateResourceResponse) => void): Promise<CreateResourceResponse>;
    /**
     * 获取服务下面运行pod列表
     */
    DescribeServiceRunPodListV2(req: DescribeServiceRunPodListV2Request, cb?: (error: string, rep: DescribeServiceRunPodListV2Response) => void): Promise<DescribeServiceRunPodListV2Response>;
    /**
     * 查询 Ingress 规则列表
     */
    DescribeIngresses(req: DescribeIngressesRequest, cb?: (error: string, rep: DescribeIngressesResponse) => void): Promise<DescribeIngressesResponse>;
    /**
     * 获取租户环境列表
     */
    DescribeNamespaces(req: DescribeNamespacesRequest, cb?: (error: string, rep: DescribeNamespacesResponse) => void): Promise<DescribeNamespacesResponse>;
    /**
     * 删除 Ingress 规则
     */
    DeleteIngress(req: DeleteIngressRequest, cb?: (error: string, rep: DeleteIngressResponse) => void): Promise<DeleteIngressResponse>;
}
