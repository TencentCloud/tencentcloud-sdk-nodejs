import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { UpdateUserRequest, DescribeUserByIdRequest, ListUserRequest, ResetPasswordRequest, ListJobsRequest, DescribeUserRequest, DeleteUsersRequest, UpdateUserStatusResponse, ListUserByPropertyRequest, CreateUserResponse, UpdateUserGroupRequest, ResetPasswordResponse, ListUserGroupsRequest, ListUserByPropertyResponse, ListUserStoreRequest, CreateUserGroupResponse, CreateUserStoreRequest, DescribeUserByIdResponse, DeleteUserStoreResponse, CreateFileExportUserJobRequest, DeleteUserGroupsRequest, DeleteUserGroupsResponse, ListUserGroupsResponse, UpdateUserResponse, SetPasswordRequest, CreateUserGroupRequest, UpdateUserStatusRequest, ListJobsResponse, UpdateUserStoreResponse, LinkAccountResponse, CreateUserRequest, DeleteUserStoreRequest, DeleteUsersResponse, CreateApiImportUserJobRequest, CreateFileExportUserJobResponse, CreateApiImportUserJobResponse, LinkAccountRequest, UpdateUserStoreRequest, ListLogMessageByConditionRequest, UpdateUserGroupResponse, SetPasswordResponse, CreateUserStoreResponse, ListUserStoreResponse, DescribeUserResponse, ListUserResponse, ListLogMessageByConditionResponse } from "./ciam_models";
/**
 * ciam client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 更新用户状态
     */
    UpdateUserStatus(req: UpdateUserStatusRequest, cb?: (error: string, rep: UpdateUserStatusResponse) => void): Promise<UpdateUserStatusResponse>;
    /**
     * 查询任务详情
     */
    ListJobs(req: ListJobsRequest, cb?: (error: string, rep: ListJobsResponse) => void): Promise<ListJobsResponse>;
    /**
     * 删除用户目录
     */
    DeleteUserStore(req: DeleteUserStoreRequest, cb?: (error: string, rep: DeleteUserStoreResponse) => void): Promise<DeleteUserStoreResponse>;
    /**
     * 批量删除用户组
     */
    DeleteUserGroups(req: DeleteUserGroupsRequest, cb?: (error: string, rep: DeleteUserGroupsResponse) => void): Promise<DeleteUserGroupsResponse>;
    /**
     * 更新用户目录
     */
    UpdateUserStore(req: UpdateUserStoreRequest, cb?: (error: string, rep: UpdateUserStoreResponse) => void): Promise<UpdateUserStoreResponse>;
    /**
     * 新建接口导入用户任务
     */
    CreateApiImportUserJob(req: CreateApiImportUserJobRequest, cb?: (error: string, rep: CreateApiImportUserJobResponse) => void): Promise<CreateApiImportUserJobResponse>;
    /**
     * 账号融合
     */
    LinkAccount(req: LinkAccountRequest, cb?: (error: string, rep: LinkAccountResponse) => void): Promise<LinkAccountResponse>;
    /**
     * 重置用户密码
     */
    ResetPassword(req: ResetPasswordRequest, cb?: (error: string, rep: ResetPasswordResponse) => void): Promise<ResetPasswordResponse>;
    /**
     * 更新用户
     */
    UpdateUser(req: UpdateUserRequest, cb?: (error: string, rep: UpdateUserResponse) => void): Promise<UpdateUserResponse>;
    /**
     * 多条件查询用户信息
     */
    DescribeUser(req: DescribeUserRequest, cb?: (error: string, rep: DescribeUserResponse) => void): Promise<DescribeUserResponse>;
    /**
     * 查询用户组列表
     */
    ListUserGroups(req: ListUserGroupsRequest, cb?: (error: string, rep: ListUserGroupsResponse) => void): Promise<ListUserGroupsResponse>;
    /**
     * 查询用户列表
     */
    ListUser(req: ListUserRequest, cb?: (error: string, rep: ListUserResponse) => void): Promise<ListUserResponse>;
    /**
     * 更新用户组
     */
    UpdateUserGroup(req: UpdateUserGroupRequest, cb?: (error: string, rep: UpdateUserGroupResponse) => void): Promise<UpdateUserGroupResponse>;
    /**
     * 创建用户目录
     */
    CreateUserStore(req: CreateUserStoreRequest, cb?: (error: string, rep: CreateUserStoreResponse) => void): Promise<CreateUserStoreResponse>;
    /**
     * 批量删除用户
     */
    DeleteUsers(req: DeleteUsersRequest, cb?: (error: string, rep: DeleteUsersResponse) => void): Promise<DeleteUsersResponse>;
    /**
     * 根据属性查询用户列表
     */
    ListUserByProperty(req: ListUserByPropertyRequest, cb?: (error: string, rep: ListUserByPropertyResponse) => void): Promise<ListUserByPropertyResponse>;
    /**
     * 根据ID查询用户信息
     */
    DescribeUserById(req: DescribeUserByIdRequest, cb?: (error: string, rep: DescribeUserByIdResponse) => void): Promise<DescribeUserByIdResponse>;
    /**
     * 设置用户密码
     */
    SetPassword(req: SetPasswordRequest, cb?: (error: string, rep: SetPasswordResponse) => void): Promise<SetPasswordResponse>;
    /**
     * 新建文件导出用户任务
     */
    CreateFileExportUserJob(req: CreateFileExportUserJobRequest, cb?: (error: string, rep: CreateFileExportUserJobResponse) => void): Promise<CreateFileExportUserJobResponse>;
    /**
     * 查询用户目录列表
     */
    ListUserStore(req?: ListUserStoreRequest, cb?: (error: string, rep: ListUserStoreResponse) => void): Promise<ListUserStoreResponse>;
    /**
     * 创建用户组
     */
    CreateUserGroup(req: CreateUserGroupRequest, cb?: (error: string, rep: CreateUserGroupResponse) => void): Promise<CreateUserGroupResponse>;
    /**
     * 创建用户
     */
    CreateUser(req: CreateUserRequest, cb?: (error: string, rep: CreateUserResponse) => void): Promise<CreateUserResponse>;
    /**
     * 查询日志信息
     */
    ListLogMessageByCondition(req: ListLogMessageByConditionRequest, cb?: (error: string, rep: ListLogMessageByConditionResponse) => void): Promise<ListLogMessageByConditionResponse>;
}
