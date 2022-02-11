import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifyLibraryResponse, DescribeLibrariesResponse, SendSmsCodeResponse, DeleteLibraryRequest, DescribeTrafficPackagesRequest, DescribeTrafficPackagesResponse, DescribeLibrarySecretRequest, DescribeLibrarySecretResponse, SendSmsCodeRequest, DescribeOfficialInstancesRequest, DescribeLibrariesRequest, VerifySmsCodeResponse, ModifyLibraryRequest, DescribeOfficialOverviewRequest, DeleteLibraryResponse, DescribeOfficialInstancesResponse, VerifySmsCodeRequest, CreateLibraryResponse, CreateLibraryRequest, DescribeOfficialOverviewResponse } from "./smh_models";
/**
 * smh client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
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
     * 验证短信验证码以换绑官方云盘实例的超级管理员账号
     */
    VerifySmsCode(req: VerifySmsCodeRequest, cb?: (error: string, rep: VerifySmsCodeResponse) => void): Promise<VerifySmsCodeResponse>;
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
     * 查询 PaaS 服务媒体库密钥
     */
    DescribeLibrarySecret(req: DescribeLibrarySecretRequest, cb?: (error: string, rep: DescribeLibrarySecretResponse) => void): Promise<DescribeLibrarySecretResponse>;
}
