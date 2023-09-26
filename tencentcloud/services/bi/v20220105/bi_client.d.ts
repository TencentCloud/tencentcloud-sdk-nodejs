import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeUserRoleListResponse, ModifyProjectResponse, DeleteProjectRequest, DescribeUserProjectListResponse, CreateDatasourceRequest, DeleteDatasourceRequest, ModifyDatasourceResponse, ApplyEmbedIntervalRequest, DeleteUserRoleResponse, DescribeUserProjectListRequest, CreateDatasourceCloudResponse, DeleteUserRoleRequest, CreateUserRoleRequest, DescribeProjectListResponse, CreateEmbedTokenRequest, CreateUserRoleProjectResponse, DescribeProjectInfoRequest, ModifyUserRoleProjectResponse, ModifyDatasourceCloudRequest, ModifyDatasourceCloudResponse, ModifyDatasourceRequest, ModifyProjectRequest, ModifyUserRoleProjectRequest, CreateUserRoleResponse, DescribeProjectListRequest, DeleteUserRoleProjectRequest, CreateProjectResponse, DescribeProjectInfoResponse, DescribeUserRoleListRequest, DeleteProjectResponse, CreateEmbedTokenResponse, CreateUserRoleProjectRequest, DescribeDatasourceListRequest, ApplyEmbedIntervalResponse, CreateDatasourceResponse, DeleteUserRoleProjectResponse, CreateDatasourceCloudRequest, DescribeDatasourceListResponse, DeleteDatasourceResponse, CreateProjectRequest } from "./bi_models";
/**
 * bi client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 更新数据源
     */
    ModifyDatasource(req: ModifyDatasourceRequest, cb?: (error: string, rep: ModifyDatasourceResponse) => void): Promise<ModifyDatasourceResponse>;
    /**
     * 查询数据源列表
     */
    DescribeDatasourceList(req: DescribeDatasourceListRequest, cb?: (error: string, rep: DescribeDatasourceListResponse) => void): Promise<DescribeDatasourceListResponse>;
    /**
     * 创建数据源
     */
    CreateDatasource(req: CreateDatasourceRequest, cb?: (error: string, rep: CreateDatasourceResponse) => void): Promise<CreateDatasourceResponse>;
    /**
     * 项目内-创建用户角色
     */
    CreateUserRoleProject(req: CreateUserRoleProjectRequest, cb?: (error: string, rep: CreateUserRoleProjectResponse) => void): Promise<CreateUserRoleProjectResponse>;
    /**
     * 更新云数据库
     */
    ModifyDatasourceCloud(req: ModifyDatasourceCloudRequest, cb?: (error: string, rep: ModifyDatasourceCloudResponse) => void): Promise<ModifyDatasourceCloudResponse>;
    /**
     * 创建嵌出报表-强鉴权
     */
    CreateEmbedToken(req: CreateEmbedTokenRequest, cb?: (error: string, rep: CreateEmbedTokenResponse) => void): Promise<CreateEmbedTokenResponse>;
    /**
     * 项目详情接口
     */
    DescribeProjectInfo(req: DescribeProjectInfoRequest, cb?: (error: string, rep: DescribeProjectInfoResponse) => void): Promise<DescribeProjectInfoResponse>;
    /**
     * 创建项目
     */
    CreateProject(req: CreateProjectRequest, cb?: (error: string, rep: CreateProjectResponse) => void): Promise<CreateProjectResponse>;
    /**
     * 创建用户角色
     */
    CreateUserRole(req: CreateUserRoleRequest, cb?: (error: string, rep: CreateUserRoleResponse) => void): Promise<CreateUserRoleResponse>;
    /**
     * 项目内-用户接口
     */
    DescribeUserProjectList(req: DescribeUserProjectListRequest, cb?: (error: string, rep: DescribeUserProjectListResponse) => void): Promise<DescribeUserProjectListResponse>;
    /**
     * 删除数据源
     */
    DeleteDatasource(req: DeleteDatasourceRequest, cb?: (error: string, rep: DeleteDatasourceResponse) => void): Promise<DeleteDatasourceResponse>;
    /**
     * 申请延长Token可用时间接口-强鉴权
     */
    ApplyEmbedInterval(req: ApplyEmbedIntervalRequest, cb?: (error: string, rep: ApplyEmbedIntervalResponse) => void): Promise<ApplyEmbedIntervalResponse>;
    /**
     * 删除用户角色，会删除用户
     */
    DeleteUserRole(req: DeleteUserRoleRequest, cb?: (error: string, rep: DeleteUserRoleResponse) => void): Promise<DeleteUserRoleResponse>;
    /**
     * 项目-修改用户角色信息
     */
    ModifyUserRoleProject(req: ModifyUserRoleProjectRequest, cb?: (error: string, rep: ModifyUserRoleProjectResponse) => void): Promise<ModifyUserRoleProjectResponse>;
    /**
     * 修改项目信息
     */
    ModifyProject(req: ModifyProjectRequest, cb?: (error: string, rep: ModifyProjectResponse) => void): Promise<ModifyProjectResponse>;
    /**
     * 项目信息
     */
    DescribeProjectList(req: DescribeProjectListRequest, cb?: (error: string, rep: DescribeProjectListResponse) => void): Promise<DescribeProjectListResponse>;
    /**
     * 用户角色列表
     */
    DescribeUserRoleList(req: DescribeUserRoleListRequest, cb?: (error: string, rep: DescribeUserRoleListResponse) => void): Promise<DescribeUserRoleListResponse>;
    /**
     * 创建云数据库
     */
    CreateDatasourceCloud(req: CreateDatasourceCloudRequest, cb?: (error: string, rep: CreateDatasourceCloudResponse) => void): Promise<CreateDatasourceCloudResponse>;
    /**
     * 项目内-删除用户角色
     */
    DeleteUserRoleProject(req: DeleteUserRoleProjectRequest, cb?: (error: string, rep: DeleteUserRoleProjectResponse) => void): Promise<DeleteUserRoleProjectResponse>;
    /**
     * 删除项目
     */
    DeleteProject(req: DeleteProjectRequest, cb?: (error: string, rep: DeleteProjectResponse) => void): Promise<DeleteProjectResponse>;
}
