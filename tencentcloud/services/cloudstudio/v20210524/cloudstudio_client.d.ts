import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { RecoverWorkspaceResponse, DescribeWorkspaceIsReadyRequest, DescribeWorkspaceStatusRequest, CreateCustomizeTemplatesRequest, RecoverWorkspaceRequest, DescribeCustomizeTemplatesByIdRequest, CreateWorkspaceByVersionControlRequest, ModifyCustomizeTemplateVersionControlRequest, CreateCustomizeTemplatesResponse, RunWorkspaceRequest, DescribeWorkspaceStatusResponse, CreateWorkspaceByAgentRequest, DeleteCustomizeTemplatesByIdRequest, StopWorkspaceRequest, DescribeWorkspaceEnvListResponse, DescribeWorkspaceStatusListResponse, ModifyCustomizeTemplatesFullByIdRequest, ModifyCustomizeTemplateVersionControlResponse, DescribeWorkspaceEnvListRequest, ModifyWorkspaceAttributesResponse, DescribeCustomizeTemplatesPresetsRequest, StopWorkspaceResponse, DescribeWorkspaceNameExistRequest, DescribeWorkspaceStatusListRequest, RemoveWorkspaceRequest, DescribeCustomizeTemplatesRequest, RunWorkspaceResponse, DescribeCustomizeTemplatesByIdResponse, DescribeWorkspaceNameExistResponse, CreateWorkspaceByTemplateResponse, CreateWorkspaceByAgentResponse, RemoveWorkspaceResponse, CreateWorkspaceTemporaryTokenRequest, ModifyCustomizeTemplatesFullByIdResponse, DescribeCustomizeTemplatesResponse, CreateWorkspaceByVersionControlResponse, ModifyCustomizeTemplatesPartByIdRequest, DescribeWorkspaceIsReadyResponse, DeleteCustomizeTemplatesByIdResponse, CreateWorkspaceTemporaryTokenResponse, DescribeCustomizeTemplatesPresetsResponse, CreateWorkspaceByTemplateRequest, ModifyCustomizeTemplatesPartByIdResponse, ModifyWorkspaceAttributesRequest } from "./cloudstudio_models";
/**
 * cloudstudio client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取特定模板信息
     */
    DescribeCustomizeTemplatesById(req: DescribeCustomizeTemplatesByIdRequest, cb?: (error: string, rep: DescribeCustomizeTemplatesByIdResponse) => void): Promise<DescribeCustomizeTemplatesByIdResponse>;
    /**
     * 为工作空间创建临时访问凭证，重复调用会创建新的 Token，旧的 Token 将会自动失效
     */
    CreateWorkspaceTemporaryToken(req: CreateWorkspaceTemporaryTokenRequest, cb?: (error: string, rep: CreateWorkspaceTemporaryTokenResponse) => void): Promise<CreateWorkspaceTemporaryTokenResponse>;
    /**
     * 全量修改自定义模板，忽略空
     */
    ModifyCustomizeTemplatesPartById(req: ModifyCustomizeTemplatesPartByIdRequest, cb?: (error: string, rep: ModifyCustomizeTemplatesPartByIdResponse) => void): Promise<ModifyCustomizeTemplatesPartByIdResponse>;
    /**
     * 获取工作空间是否已经启动就绪
     */
    DescribeWorkspaceIsReady(req: DescribeWorkspaceIsReadyRequest, cb?: (error: string, rep: DescribeWorkspaceIsReadyResponse) => void): Promise<DescribeWorkspaceIsReadyResponse>;
    /**
     * 运行空间
     */
    RunWorkspace(req: RunWorkspaceRequest, cb?: (error: string, rep: RunWorkspaceResponse) => void): Promise<RunWorkspaceResponse>;
    /**
     * 获取所有模板列表
     */
    DescribeCustomizeTemplates(req: DescribeCustomizeTemplatesRequest, cb?: (error: string, rep: DescribeCustomizeTemplatesResponse) => void): Promise<DescribeCustomizeTemplatesResponse>;
    /**
     * 恢复工作空间

     */
    RecoverWorkspace(req: RecoverWorkspaceRequest, cb?: (error: string, rep: RecoverWorkspaceResponse) => void): Promise<RecoverWorkspaceResponse>;
    /**
     * 根据模板创建工作空间
     */
    CreateWorkspaceByVersionControl(req: CreateWorkspaceByVersionControlRequest, cb?: (error: string, rep: CreateWorkspaceByVersionControlResponse) => void): Promise<CreateWorkspaceByVersionControlResponse>;
    /**
     * 修改模板默认代码仓库
     */
    ModifyCustomizeTemplateVersionControl(req: ModifyCustomizeTemplateVersionControlRequest, cb?: (error: string, rep: ModifyCustomizeTemplateVersionControlResponse) => void): Promise<ModifyCustomizeTemplateVersionControlResponse>;
    /**
     * 云服务器方式创建工作空间
     */
    CreateWorkspaceByAgent(req: CreateWorkspaceByAgentRequest, cb?: (error: string, rep: CreateWorkspaceByAgentResponse) => void): Promise<CreateWorkspaceByAgentResponse>;
    /**
     * 删除工作空间
     */
    RemoveWorkspace(req: RemoveWorkspaceRequest, cb?: (error: string, rep: RemoveWorkspaceResponse) => void): Promise<RemoveWorkspaceResponse>;
    /**
     * 环境列表接口返回信息
     */
    DescribeWorkspaceEnvList(req: DescribeWorkspaceEnvListRequest, cb?: (error: string, rep: DescribeWorkspaceEnvListResponse) => void): Promise<DescribeWorkspaceEnvListResponse>;
    /**
     * 删除自定义模板
     */
    DeleteCustomizeTemplatesById(req: DeleteCustomizeTemplatesByIdRequest, cb?: (error: string, rep: DeleteCustomizeTemplatesByIdResponse) => void): Promise<DeleteCustomizeTemplatesByIdResponse>;
    /**
     * 停止运行空间
     */
    StopWorkspace(req: StopWorkspaceRequest, cb?: (error: string, rep: StopWorkspaceResponse) => void): Promise<StopWorkspaceResponse>;
    /**
     * 获取工作空间元信息
     */
    DescribeWorkspaceStatus(req: DescribeWorkspaceStatusRequest, cb?: (error: string, rep: DescribeWorkspaceStatusResponse) => void): Promise<DescribeWorkspaceStatusResponse>;
    /**
     * 获取创建模板的预置参数
     */
    DescribeCustomizeTemplatesPresets(req: DescribeCustomizeTemplatesPresetsRequest, cb?: (error: string, rep: DescribeCustomizeTemplatesPresetsResponse) => void): Promise<DescribeCustomizeTemplatesPresetsResponse>;
    /**
     * 添加自定义模板
     */
    CreateCustomizeTemplates(req: CreateCustomizeTemplatesRequest, cb?: (error: string, rep: CreateCustomizeTemplatesResponse) => void): Promise<CreateCustomizeTemplatesResponse>;
    /**
     * 全量修改自定义模板，不忽略空
     */
    ModifyCustomizeTemplatesFullById(req: ModifyCustomizeTemplatesFullByIdRequest, cb?: (error: string, rep: ModifyCustomizeTemplatesFullByIdResponse) => void): Promise<ModifyCustomizeTemplatesFullByIdResponse>;
    /**
     * 快速开始, 基于模板创建工作空间
     */
    CreateWorkspaceByTemplate(req: CreateWorkspaceByTemplateRequest, cb?: (error: string, rep: CreateWorkspaceByTemplateResponse) => void): Promise<CreateWorkspaceByTemplateResponse>;
    /**
     * 获取用户工作空间列表
     */
    DescribeWorkspaceStatusList(req: DescribeWorkspaceStatusListRequest, cb?: (error: string, rep: DescribeWorkspaceStatusListResponse) => void): Promise<DescribeWorkspaceStatusListResponse>;
    /**
     * 检查工作空间是否存在
     */
    DescribeWorkspaceNameExist(req: DescribeWorkspaceNameExistRequest, cb?: (error: string, rep: DescribeWorkspaceNameExistResponse) => void): Promise<DescribeWorkspaceNameExistResponse>;
    /**
     * 修改工作空间的名称和描述
     */
    ModifyWorkspaceAttributes(req: ModifyWorkspaceAttributesRequest, cb?: (error: string, rep: ModifyWorkspaceAttributesResponse) => void): Promise<ModifyWorkspaceAttributesResponse>;
}
