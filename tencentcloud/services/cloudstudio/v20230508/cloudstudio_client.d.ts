import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeConfigRequest, DescribeWorkspacesRequest, RunWorkspaceRequest, CreateWorkspaceTokenResponse, CreateWorkspaceTokenRequest, CreateWorkspaceRequest, RunWorkspaceResponse, StopWorkspaceResponse, RemoveWorkspaceResponse, RemoveWorkspaceRequest, StopWorkspaceRequest, ModifyWorkspaceResponse, CreateWorkspaceResponse, DescribeConfigResponse, DescribeImagesRequest, DescribeWorkspacesResponse, ModifyWorkspaceRequest, DescribeImagesResponse } from "./cloudstudio_models";
/**
 * cloudstudio client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取用户配置
     */
    DescribeConfig(req: DescribeConfigRequest, cb?: (error: string, rep: DescribeConfigResponse) => void): Promise<DescribeConfigResponse>;
    /**
     * 修改工作空间
     */
    ModifyWorkspace(req: ModifyWorkspaceRequest, cb?: (error: string, rep: ModifyWorkspaceResponse) => void): Promise<ModifyWorkspaceResponse>;
    /**
     * 获取用户工作空间列表
     */
    DescribeWorkspaces(req: DescribeWorkspacesRequest, cb?: (error: string, rep: DescribeWorkspacesResponse) => void): Promise<DescribeWorkspacesResponse>;
    /**
     * 获取基础镜像列表
     */
    DescribeImages(req?: DescribeImagesRequest, cb?: (error: string, rep: DescribeImagesResponse) => void): Promise<DescribeImagesResponse>;
    /**
     * 创建工作空间
     */
    CreateWorkspace(req: CreateWorkspaceRequest, cb?: (error: string, rep: CreateWorkspaceResponse) => void): Promise<CreateWorkspaceResponse>;
    /**
     * 创建工作空间临时访问凭证，重复调用会创建新的 Token，旧的 Token 将会自动失效
     */
    CreateWorkspaceToken(req: CreateWorkspaceTokenRequest, cb?: (error: string, rep: CreateWorkspaceTokenResponse) => void): Promise<CreateWorkspaceTokenResponse>;
    /**
     * 删除工作空间
     */
    RemoveWorkspace(req: RemoveWorkspaceRequest, cb?: (error: string, rep: RemoveWorkspaceResponse) => void): Promise<RemoveWorkspaceResponse>;
    /**
     * 停止运行空间
     */
    StopWorkspace(req: StopWorkspaceRequest, cb?: (error: string, rep: StopWorkspaceResponse) => void): Promise<StopWorkspaceResponse>;
    /**
     * 运行空间
     */
    RunWorkspace(req: RunWorkspaceRequest, cb?: (error: string, rep: RunWorkspaceResponse) => void): Promise<RunWorkspaceResponse>;
}
