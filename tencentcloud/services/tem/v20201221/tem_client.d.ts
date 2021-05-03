import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifyNamespaceRequest, ModifyIngressRequest, DescribeNamespacesRequest, CreateCosTokenResponse, CreateCosTokenRequest, ModifyNamespaceResponse, DescribeNamespacesResponse, CreateNamespaceRequest, ModifyIngressResponse, CreateNamespaceResponse } from "./tem_models";
/**
 * tem client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 编辑命名空间
     */
    ModifyNamespace(req: ModifyNamespaceRequest, cb?: (error: string, rep: ModifyNamespaceResponse) => void): Promise<ModifyNamespaceResponse>;
    /**
     * 生成Cos临时秘钥
     */
    CreateCosToken(req: CreateCosTokenRequest, cb?: (error: string, rep: CreateCosTokenResponse) => void): Promise<CreateCosTokenResponse>;
    /**
     * 创建或者更新 Ingress 规则
     */
    ModifyIngress(req: ModifyIngressRequest, cb?: (error: string, rep: ModifyIngressResponse) => void): Promise<ModifyIngressResponse>;
    /**
     * 获取租户命名空间列表
     */
    DescribeNamespaces(req: DescribeNamespacesRequest, cb?: (error: string, rep: DescribeNamespacesResponse) => void): Promise<DescribeNamespacesResponse>;
    /**
     * 创建命名空间
     */
    CreateNamespace(req: CreateNamespaceRequest, cb?: (error: string, rep: CreateNamespaceResponse) => void): Promise<CreateNamespaceResponse>;
}
