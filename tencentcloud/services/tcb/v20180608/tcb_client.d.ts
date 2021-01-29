import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeEnvLimitResponse, CheckTcbServiceResponse, DescribeCloudBaseRunServerVersionRequest, DescribeCloudBaseRunServerVersionResponse, CommonServiceAPIResponse, DescribePostpayPackageFreeQuotasRequest, DescribeEnvLimitRequest, DescribeCloudBaseBuildServiceResponse, DescribeEndUsersRequest, DescribeEndUserStatisticRequest, DescribeCloudBaseRunResourceForExtendRequest, ModifyEndUserRequest, DescribeAuthDomainsResponse, CreateHostingDomainRequest, DescribeCloudBaseRunResourceRequest, DescribePostpayFreeQuotasRequest, ModifyDatabaseACLRequest, DestroyStaticStoreRequest, DescribeSmsQuotasRequest, DescribeQuotaDataResponse, CommonServiceAPIRequest, CreateStaticStoreRequest, DeleteCloudBaseProjectLatestVersionResponse, CreateAuthDomainResponse, DescribeEnvsRequest, DescribeExtraPkgBillingInfoRequest, DeleteEndUserRequest, DescribeEnvFreeQuotaRequest, DescribeEndUserLoginStatisticResponse, CreateCloudBaseRunResourceResponse, DestroyStaticStoreResponse, DeleteEndUserResponse, ModifyDatabaseACLResponse, EstablishCloudBaseRunServerResponse, DestroyEnvRequest, DestroyEnvResponse, DescribeEnvsResponse, CreateAuthDomainRequest, CreateHostingDomainResponse, CreateCloudBaseRunServerVersionRequest, CreatePostpayPackageResponse, EstablishCloudBaseRunServerRequest, DescribeDownloadFileRequest, ReinstateEnvResponse, DescribeEnvFreeQuotaResponse, CreateAndDeployCloudBaseProjectResponse, DescribeCloudBaseRunResourceForExtendResponse, CreateAndDeployCloudBaseProjectRequest, ReinstateEnvRequest, DescribeDatabaseACLRequest, CreateCloudBaseRunServerVersionResponse, DescribeEndUserLoginStatisticRequest, DeleteCloudBaseProjectLatestVersionRequest, DescribeCloudBaseProjectLatestVersionListResponse, DescribeSmsQuotasResponse, ModifyEnvResponse, DescribeDownloadFileResponse, DescribeQuotaDataRequest, CreateStaticStoreResponse, DescribeCloudBaseRunResourceResponse, DescribeCloudBaseRunVersionSnapshotRequest, DescribePostpayFreeQuotasResponse, DescribeEndUsersResponse, DescribeCloudBaseProjectLatestVersionListRequest, DescribeEndUserStatisticResponse, CreatePostpayPackageRequest, DescribeCloudBaseBuildServiceRequest, CheckTcbServiceRequest, CreateCloudBaseRunResourceRequest, ModifyEndUserResponse, DescribeAuthDomainsRequest, DescribeDatabaseACLResponse, ModifyEnvRequest, DescribeCloudBaseRunVersionSnapshotResponse, DescribePostpayPackageFreeQuotasResponse, DescribeExtraPkgBillingInfoResponse } from "./tcb_models";
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
     * 查询后付费短信资源量
1 有免费包的返回SmsFreeQuota结构所有字段
2 没有免费包，有付费包，付费返回复用SmsFreeQuota结构，其中只有 TodayUsedQuota 字段有效
3 都没有返回为空数组
     */
    DescribeSmsQuotas(req: DescribeSmsQuotasRequest, cb?: (error: string, rep: DescribeSmsQuotasResponse) => void): Promise<DescribeSmsQuotasResponse>;
    /**
     * 获取环境列表，含环境下的各个资源信息。尤其是各资源的唯一标识，是请求各资源的关键参数
     */
    DescribeEnvs(req: DescribeEnvsRequest, cb?: (error: string, rep: DescribeEnvsResponse) => void): Promise<DescribeEnvsResponse>;
    /**
     * 增加安全域名
     */
    CreateAuthDomain(req: CreateAuthDomainRequest, cb?: (error: string, rep: CreateAuthDomainResponse) => void): Promise<CreateAuthDomainResponse>;
    /**
     * 创建服务版本
     */
    CreateCloudBaseRunServerVersion(req: CreateCloudBaseRunServerVersionRequest, cb?: (error: string, rep: CreateCloudBaseRunServerVersionResponse) => void): Promise<CreateCloudBaseRunServerVersionResponse>;
    /**
     * 查询服务版本的详情，CPU和MEM  请使用CPUSize和MemSize
     */
    DescribeCloudBaseRunServerVersion(req: DescribeCloudBaseRunServerVersionRequest, cb?: (error: string, rep: DescribeCloudBaseRunServerVersionResponse) => void): Promise<DescribeCloudBaseRunServerVersionResponse>;
    /**
     * 获取安全域名列表
     */
    DescribeAuthDomains(req: DescribeAuthDomainsRequest, cb?: (error: string, rep: DescribeAuthDomainsResponse) => void): Promise<DescribeAuthDomainsResponse>;
    /**
     * 开通后付费资源
     */
    CreatePostpayPackage(req: CreatePostpayPackageRequest, cb?: (error: string, rep: CreatePostpayPackageResponse) => void): Promise<CreatePostpayPackageResponse>;
    /**
     * 查看容器托管的集群状态
     */
    DescribeCloudBaseRunResource(req: DescribeCloudBaseRunResourceRequest, cb?: (error: string, rep: DescribeCloudBaseRunResourceResponse) => void): Promise<DescribeCloudBaseRunResourceResponse>;
    /**
     * 获取云开发项目列表
     */
    DescribeCloudBaseProjectLatestVersionList(req: DescribeCloudBaseProjectLatestVersionListRequest, cb?: (error: string, rep: DescribeCloudBaseProjectLatestVersionListResponse) => void): Promise<DescribeCloudBaseProjectLatestVersionListResponse>;
    /**
     * 针对已隔离的免费环境，可以通过本接口将其恢复访问。
     */
    ReinstateEnv(req: ReinstateEnvRequest, cb?: (error: string, rep: ReinstateEnvResponse) => void): Promise<ReinstateEnvResponse>;
    /**
     * 获取终端用户总量与平台分布情况
     */
    DescribeEndUserStatistic(req: DescribeEndUserStatisticRequest, cb?: (error: string, rep: DescribeEndUserStatisticResponse) => void): Promise<DescribeEndUserStatisticResponse>;
    /**
     * 查看容器托管的集群状态扩展使用
     */
    DescribeCloudBaseRunResourceForExtend(req: DescribeCloudBaseRunResourceForExtendRequest, cb?: (error: string, rep: DescribeCloudBaseRunResourceForExtendResponse) => void): Promise<DescribeCloudBaseRunResourceForExtendResponse>;
    /**
     * 管理终端用户
     */
    ModifyEndUser(req: ModifyEndUserRequest, cb?: (error: string, rep: ModifyEndUserResponse) => void): Promise<ModifyEndUserResponse>;
    /**
     * 获取增值包计费相关信息
     */
    DescribeExtraPkgBillingInfo(req: DescribeExtraPkgBillingInfoRequest, cb?: (error: string, rep: DescribeExtraPkgBillingInfoResponse) => void): Promise<DescribeExtraPkgBillingInfoResponse>;
    /**
     * 获取后付费免费额度
     */
    DescribePostpayPackageFreeQuotas(req: DescribePostpayPackageFreeQuotasRequest, cb?: (error: string, rep: DescribePostpayPackageFreeQuotasResponse) => void): Promise<DescribePostpayPackageFreeQuotasResponse>;
    /**
     * 创建云应用服务
     */
    EstablishCloudBaseRunServer(req: EstablishCloudBaseRunServerRequest, cb?: (error: string, rep: EstablishCloudBaseRunServerResponse) => void): Promise<EstablishCloudBaseRunServerResponse>;
    /**
     * TCB云API统一入口
     */
    CommonServiceAPI(req: CommonServiceAPIRequest, cb?: (error: string, rep: CommonServiceAPIResponse) => void): Promise<CommonServiceAPIResponse>;
    /**
     * 创建云开发项目
     */
    CreateAndDeployCloudBaseProject(req: CreateAndDeployCloudBaseProjectRequest, cb?: (error: string, rep: CreateAndDeployCloudBaseProjectResponse) => void): Promise<CreateAndDeployCloudBaseProjectResponse>;
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
     * 开通容器托管的资源，包括集群创建，VPC配置，异步任务创建，镜像托管，Coding等，查看创建结果需要根据DescribeCloudBaseRunResource接口来查看
     */
    CreateCloudBaseRunResource(req: CreateCloudBaseRunResourceRequest, cb?: (error: string, rep: CreateCloudBaseRunResourceResponse) => void): Promise<CreateCloudBaseRunResourceResponse>;
    /**
     * 删除云项目
     */
    DeleteCloudBaseProjectLatestVersion(req: DeleteCloudBaseProjectLatestVersionRequest, cb?: (error: string, rep: DeleteCloudBaseProjectLatestVersionResponse) => void): Promise<DeleteCloudBaseProjectLatestVersionResponse>;
    /**
     * 获取下载文件信息
     */
    DescribeDownloadFile(req: DescribeDownloadFileRequest, cb?: (error: string, rep: DescribeDownloadFileResponse) => void): Promise<DescribeDownloadFileResponse>;
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
     * 查询后付费资源免费量
     */
    DescribePostpayFreeQuotas(req: DescribePostpayFreeQuotasRequest, cb?: (error: string, rep: DescribePostpayFreeQuotasResponse) => void): Promise<DescribePostpayFreeQuotasResponse>;
    /**
     * 查询后付费免费配额信息
     */
    DescribeEnvFreeQuota(req: DescribeEnvFreeQuotaRequest, cb?: (error: string, rep: DescribeEnvFreeQuotaResponse) => void): Promise<DescribeEnvFreeQuotaResponse>;
}
