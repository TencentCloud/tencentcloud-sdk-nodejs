import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateHostingDomainResponse, CreateStaticStoreResponse, DescribeEnvLimitRequest, DescribeQuotaDataResponse, CheckTcbServiceResponse, DescribeEndUserLoginStatisticRequest, DescribeCloudBaseRunVersionSnapshotRequest, CreatePostpayPackageResponse, CommonServiceAPIRequest, DescribeEndUsersResponse, DescribeEnvLimitResponse, CreateStaticStoreRequest, CommonServiceAPIResponse, DescribeEndUserStatisticResponse, DescribeExtraPkgBillingInfoResponse, ReinstateEnvResponse, DescribePostpayPackageFreeQuotasRequest, CreateAuthDomainResponse, DescribeCloudBaseBuildServiceResponse, ModifyEnvRequest, DescribeEndUsersRequest, DescribeDownloadFileRequest, DescribeEnvsRequest, DescribeQuotaDataRequest, DescribeCloudBaseBuildServiceRequest, DescribeEndUserStatisticRequest, CheckTcbServiceRequest, ModifyDatabaseACLResponse, DescribeExtraPkgBillingInfoRequest, CreatePostpayPackageRequest, DescribeEnvFreeQuotaRequest, DescribeAuthDomainsRequest, DescribeEndUserLoginStatisticResponse, DescribeAuthDomainsResponse, ReinstateEnvRequest, DescribeDatabaseACLRequest, CreateHostingDomainRequest, DestroyStaticStoreResponse, DeleteEndUserResponse, DescribeEnvFreeQuotaResponse, ModifyEnvResponse, ModifyEndUserRequest, DescribeDatabaseACLResponse, DestroyEnvResponse, ModifyDatabaseACLRequest, DestroyStaticStoreRequest, ModifyEndUserResponse, DescribeCloudBaseRunVersionSnapshotResponse, DescribePostpayPackageFreeQuotasResponse, DeleteEndUserRequest, DescribeEnvsResponse, DescribeDownloadFileResponse, CreateAuthDomainRequest, DestroyEnvRequest } from "./tcb_models";
/**
 * tcb client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 创建托管域名
     */
    CreateHostingDomain(req: CreateHostingDomainRequest, cb?: (error: string, rep: CreateHostingDomainResponse) => void): Promise<CreateHostingDomainResponse>;
    /**
     * 获取终端用户列表
     */
    DescribeEndUsers(req: DescribeEndUsersRequest, cb?: (error: string, rep: DescribeEndUsersResponse) => void): Promise<DescribeEndUsersResponse>;
    /**
     * 获取环境列表，含环境下的各个资源信息。尤其是各资源的唯一标识，是请求各资源的关键参数
     */
    DescribeEnvs(req: DescribeEnvsRequest, cb?: (error: string, rep: DescribeEnvsResponse) => void): Promise<DescribeEnvsResponse>;
    /**
     * 增加安全域名
     */
    CreateAuthDomain(req: CreateAuthDomainRequest, cb?: (error: string, rep: CreateAuthDomainResponse) => void): Promise<CreateAuthDomainResponse>;
    /**
     * 获取下载文件信息
     */
    DescribeDownloadFile(req: DescribeDownloadFileRequest, cb?: (error: string, rep: DescribeDownloadFileResponse) => void): Promise<DescribeDownloadFileResponse>;
    /**
     * 获取安全域名列表
     */
    DescribeAuthDomains(req: DescribeAuthDomainsRequest, cb?: (error: string, rep: DescribeAuthDomainsResponse) => void): Promise<DescribeAuthDomainsResponse>;
    /**
     * 开通后付费资源
     */
    CreatePostpayPackage(req: CreatePostpayPackageRequest, cb?: (error: string, rep: CreatePostpayPackageResponse) => void): Promise<CreatePostpayPackageResponse>;
    /**
     * 针对已隔离的免费环境，可以通过本接口将其恢复访问。
     */
    ReinstateEnv(req: ReinstateEnvRequest, cb?: (error: string, rep: ReinstateEnvResponse) => void): Promise<ReinstateEnvResponse>;
    /**
     * 获取终端用户总量与平台分布情况
     */
    DescribeEndUserStatistic(req: DescribeEndUserStatisticRequest, cb?: (error: string, rep: DescribeEndUserStatisticResponse) => void): Promise<DescribeEndUserStatisticResponse>;
    /**
     * 管理终端用户
     */
    ModifyEndUser(req: ModifyEndUserRequest, cb?: (error: string, rep: ModifyEndUserResponse) => void): Promise<ModifyEndUserResponse>;
    /**
     * 获取后付费免费额度
     */
    DescribePostpayPackageFreeQuotas(req: DescribePostpayPackageFreeQuotasRequest, cb?: (error: string, rep: DescribePostpayPackageFreeQuotasResponse) => void): Promise<DescribePostpayPackageFreeQuotasResponse>;
    /**
     * TCB云API统一入口
     */
    CommonServiceAPI(req: CommonServiceAPIRequest, cb?: (error: string, rep: CommonServiceAPIResponse) => void): Promise<CommonServiceAPIResponse>;
    /**
     * 检查是否开通Tcb服务
     */
    CheckTcbService(req?: CheckTcbServiceRequest, cb?: (error: string, rep: CheckTcbServiceResponse) => void): Promise<CheckTcbServiceResponse>;
    /**
     * 删除终端用户
     */
    DeleteEndUser(req: DeleteEndUserRequest, cb?: (error: string, rep: DeleteEndUserResponse) => void): Promise<DeleteEndUserResponse>;
    /**
     * 获取环境终端用户新增与登录信息
     */
    DescribeEndUserLoginStatistic(req: DescribeEndUserLoginStatisticRequest, cb?: (error: string, rep: DescribeEndUserLoginStatisticResponse) => void): Promise<DescribeEndUserLoginStatisticResponse>;
    /**
     * 查询指定指标的配额使用量
     */
    DescribeQuotaData(req: DescribeQuotaDataRequest, cb?: (error: string, rep: DescribeQuotaDataResponse) => void): Promise<DescribeQuotaDataResponse>;
    /**
     * 获取增值包计费相关信息
     */
    DescribeExtraPkgBillingInfo(req: DescribeExtraPkgBillingInfoRequest, cb?: (error: string, rep: DescribeExtraPkgBillingInfoResponse) => void): Promise<DescribeExtraPkgBillingInfoResponse>;
    /**
     * 更新环境信息
     */
    ModifyEnv(req: ModifyEnvRequest, cb?: (error: string, rep: ModifyEnvResponse) => void): Promise<ModifyEnvResponse>;
    /**
     * 获取数据库权限
     */
    DescribeDatabaseACL(req: DescribeDatabaseACLRequest, cb?: (error: string, rep: DescribeDatabaseACLResponse) => void): Promise<DescribeDatabaseACLResponse>;
    /**
     * 销毁环境
     */
    DestroyEnv(req: DestroyEnvRequest, cb?: (error: string, rep: DestroyEnvResponse) => void): Promise<DestroyEnvResponse>;
    /**
     * 获取云托管代码上传url
     */
    DescribeCloudBaseBuildService(req: DescribeCloudBaseBuildServiceRequest, cb?: (error: string, rep: DescribeCloudBaseBuildServiceResponse) => void): Promise<DescribeCloudBaseBuildServiceResponse>;
    /**
     * 查询版本历史
     */
    DescribeCloudBaseRunVersionSnapshot(req: DescribeCloudBaseRunVersionSnapshotRequest, cb?: (error: string, rep: DescribeCloudBaseRunVersionSnapshotResponse) => void): Promise<DescribeCloudBaseRunVersionSnapshotResponse>;
    /**
     * 销毁静态托管资源，该接口创建异步销毁任务，资源最终状态可从DestroyStaticStore接口查看
     */
    DestroyStaticStore(req: DestroyStaticStoreRequest, cb?: (error: string, rep: DestroyStaticStoreResponse) => void): Promise<DestroyStaticStoreResponse>;
    /**
     * 修改数据库权限
     */
    ModifyDatabaseACL(req: ModifyDatabaseACLRequest, cb?: (error: string, rep: ModifyDatabaseACLResponse) => void): Promise<ModifyDatabaseACLResponse>;
    /**
     * 创建静态托管资源，包括COS和CDN，异步任务创建，查看创建结果需要根据DescribeStaticStore接口来查看
     */
    CreateStaticStore(req: CreateStaticStoreRequest, cb?: (error: string, rep: CreateStaticStoreResponse) => void): Promise<CreateStaticStoreResponse>;
    /**
     * 查询环境个数上限
     */
    DescribeEnvLimit(req?: DescribeEnvLimitRequest, cb?: (error: string, rep: DescribeEnvLimitResponse) => void): Promise<DescribeEnvLimitResponse>;
    /**
     * 查询后付费免费配额信息
     */
    DescribeEnvFreeQuota(req: DescribeEnvFreeQuotaRequest, cb?: (error: string, rep: DescribeEnvFreeQuotaResponse) => void): Promise<DescribeEnvFreeQuotaResponse>;
}
