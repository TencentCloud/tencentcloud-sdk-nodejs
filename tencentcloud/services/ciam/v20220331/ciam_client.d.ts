import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { UpdateUserRequest, DescribeUserByIdRequest, ListUserRequest, DeleteUsersRequest, UpdateUserStatusResponse, ResetPasswordRequest, CreateUserResponse, SetPasswordResponse, ListUserByPropertyResponse, DescribeUserByIdResponse, DeleteUsersResponse, ResetPasswordResponse, SetPasswordRequest, UpdateUserStatusRequest, ListUserByPropertyRequest, LinkAccountResponse, CreateUserRequest, LinkAccountRequest, ListUserResponse, UpdateUserResponse } from "./ciam_models";
/**
 * ciam client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 批量删除用户
     */
    DeleteUsers(req: DeleteUsersRequest, cb?: (error: string, rep: DeleteUsersResponse) => void): Promise<DeleteUsersResponse>;
    /**
     * 更新用户
     */
    UpdateUser(req: UpdateUserRequest, cb?: (error: string, rep: UpdateUserResponse) => void): Promise<UpdateUserResponse>;
    /**
     * 查询用户列表
     */
    ListUser(req: ListUserRequest, cb?: (error: string, rep: ListUserResponse) => void): Promise<ListUserResponse>;
    /**
     * 更新用户状态
     */
    UpdateUserStatus(req: UpdateUserStatusRequest, cb?: (error: string, rep: UpdateUserStatusResponse) => void): Promise<UpdateUserStatusResponse>;
    /**
     * 根据属性查询用户列表
     */
    ListUserByProperty(req: ListUserByPropertyRequest, cb?: (error: string, rep: ListUserByPropertyResponse) => void): Promise<ListUserByPropertyResponse>;
    /**
     * 根据ID查询用户信息
     */
    DescribeUserById(req: DescribeUserByIdRequest, cb?: (error: string, rep: DescribeUserByIdResponse) => void): Promise<DescribeUserByIdResponse>;
    /**
     * 创建用户
     */
    CreateUser(req: CreateUserRequest, cb?: (error: string, rep: CreateUserResponse) => void): Promise<CreateUserResponse>;
    /**
     * 设置用户密码
     */
    SetPassword(req: SetPasswordRequest, cb?: (error: string, rep: SetPasswordResponse) => void): Promise<SetPasswordResponse>;
    /**
     * 账号融合
     */
    LinkAccount(req: LinkAccountRequest, cb?: (error: string, rep: LinkAccountResponse) => void): Promise<LinkAccountResponse>;
    /**
     * 重置用户密码
     */
    ResetPassword(req: ResetPasswordRequest, cb?: (error: string, rep: ResetPasswordResponse) => void): Promise<ResetPasswordResponse>;
}
