import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeUserLifecycleResponse, ModifyLibraryResponse, DescribeLibrariesResponse, SendSmsCodeResponse, DeleteUserRequest, DeleteLibraryRequest, DescribeTrafficPackagesRequest, DescribeTrafficPackagesResponse, CreateUserResponse, DescribeLibrarySecretRequest, DescribeLibrarySecretResponse, SendSmsCodeRequest, DeleteUserResponse, DescribeLibrariesRequest, ModifyUserResponse, VerifySmsCodeResponse, ModifyLibraryRequest, DescribeOfficialOverviewRequest, DeleteLibraryResponse, DescribeOfficialInstancesResponse, DescribeUserLifecycleRequest, VerifySmsCodeRequest, DescribeOfficialInstancesRequest, CreateUserRequest, CreateUserLifecycleResponse, CreateLibraryResponse, CreateUserLifecycleRequest, ModifyUserRequest, CreateLibraryRequest, DescribeOfficialOverviewResponse } from "./smh_models";
/**
 * smh client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 更新用户信息。
     */
    ModifyUser(req: ModifyUserRequest, cb?: (error: string, rep: ModifyUserResponse) => void): Promise<ModifyUserResponse>;
    /**
     * 一次删除多个用户。
     */
    DeleteUser(req: DeleteUserRequest, cb?: (error: string, rep: DeleteUserResponse) => void): Promise<DeleteUserResponse>;
    /**
     * 验证短信验证码以换绑官方云盘实例的超级管理员账号
     */
    VerifySmsCode(req: VerifySmsCodeRequest, cb?: (error: string, rep: VerifySmsCodeResponse) => void): Promise<VerifySmsCodeResponse>;
    /**
     * 查询官方云盘实例
     */
    DescribeOfficialInstances(req: DescribeOfficialInstancesRequest, cb?: (error: string, rep: DescribeOfficialInstancesResponse) => void): Promise<DescribeOfficialInstancesResponse>;
    /**
     * 创建 PaaS 服务媒体库
     */
    CreateLibrary(req: CreateLibraryRequest, cb?: (error: string, rep: CreateLibraryResponse) => void): Promise<CreateLibraryResponse>;
    /**
     * 发送用于换绑官方云盘实例的超级管理员账号的短信验证码
     */
    SendSmsCode(req: SendSmsCodeRequest, cb?: (error: string, rep: SendSmsCodeResponse) => void): Promise<SendSmsCodeResponse>;
    /**
     * 新建用户。
     */
    CreateUser(req: CreateUserRequest, cb?: (error: string, rep: CreateUserResponse) => void): Promise<CreateUserResponse>;
    /**
     * 设置用户生命周期。如果指定的用户已经设置了生命周期，重复调用此接口将覆盖已有的设置。也可用于清除指定用户的生命周期。
     */
    CreateUserLifecycle(req: CreateUserLifecycleRequest, cb?: (error: string, rep: CreateUserLifecycleResponse) => void): Promise<CreateUserLifecycleResponse>;
    /**
     * 查询 PaaS 服务媒体库列表
     */
    DescribeLibraries(req: DescribeLibrariesRequest, cb?: (error: string, rep: DescribeLibrariesResponse) => void): Promise<DescribeLibrariesResponse>;
    /**
     * 修改 PaaS 服务媒体库配置项
     */
    ModifyLibrary(req: ModifyLibraryRequest, cb?: (error: string, rep: ModifyLibraryResponse) => void): Promise<ModifyLibraryResponse>;
    /**
     * 查询官方云盘实例概览数据
     */
    DescribeOfficialOverview(req?: DescribeOfficialOverviewRequest, cb?: (error: string, rep: DescribeOfficialOverviewResponse) => void): Promise<DescribeOfficialOverviewResponse>;
    /**
     * 查询流量资源包
     */
    DescribeTrafficPackages(req: DescribeTrafficPackagesRequest, cb?: (error: string, rep: DescribeTrafficPackagesResponse) => void): Promise<DescribeTrafficPackagesResponse>;
    /**
     * 删除 PaaS 服务媒体库
     */
    DeleteLibrary(req: DeleteLibraryRequest, cb?: (error: string, rep: DeleteLibraryResponse) => void): Promise<DeleteLibraryResponse>;
    /**
     * 查询用户生命周期。
     */
    DescribeUserLifecycle(req: DescribeUserLifecycleRequest, cb?: (error: string, rep: DescribeUserLifecycleResponse) => void): Promise<DescribeUserLifecycleResponse>;
    /**
     * 查询 PaaS 服务媒体库密钥
     */
    DescribeLibrarySecret(req: DescribeLibrarySecretRequest, cb?: (error: string, rep: DescribeLibrarySecretResponse) => void): Promise<DescribeLibrarySecretResponse>;
}
