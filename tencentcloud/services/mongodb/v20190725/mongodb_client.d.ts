import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeSpecInfoRequest, CreateDBInstanceRequest, DescribeCurrentOpResponse, DescribeAccountUsersRequest, CreateBackupDBInstanceResponse, KillOpsRequest, InquirePriceRenewDBInstancesRequest, DescribeSlowLogsRequest, FlushInstanceRouterConfigResponse, AssignProjectResponse, DescribeDBInstanceDealResponse, OfflineIsolatedDBInstanceResponse, IsolateDBInstanceResponse, DescribeSecurityGroupRequest, DescribeBackupDownloadTaskResponse, FlushInstanceRouterConfigRequest, SetAccountUserPrivilegeResponse, ModifyDBInstanceNetworkAddressRequest, CreateDBInstanceHourResponse, DescribeDBInstanceNodePropertyRequest, DeleteAccountUserRequest, ModifyDBInstanceNetworkAddressResponse, CreateAccountUserResponse, DescribeSlowLogPatternsResponse, DescribeSlowLogsResponse, InquirePriceModifyDBInstanceSpecRequest, DescribeDBInstancesRequest, ModifyDBInstanceSpecRequest, ResetDBInstancePasswordRequest, DescribeAsyncRequestInfoResponse, CreateDBInstanceResponse, CreateAccountUserRequest, ModifyDBInstanceSecurityGroupRequest, DescribeAccountUsersResponse, DescribeBackupDownloadTaskRequest, DescribeClientConnectionsResponse, TerminateDBInstancesRequest, DescribeDBBackupsResponse, ModifyDBInstanceSecurityGroupResponse, DescribeInstanceParamsRequest, InquirePriceCreateDBInstancesResponse, DescribeSecurityGroupResponse, ResetDBInstancePasswordResponse, DescribeDBInstanceDealRequest, DescribeAsyncRequestInfoRequest, CreateBackupDownloadTaskRequest, InquirePriceModifyDBInstanceSpecResponse, DescribeDBInstanceNodePropertyResponse, DescribeCurrentOpRequest, DescribeDBBackupsRequest, DescribeClientConnectionsRequest, TerminateDBInstancesResponse, RenameInstanceRequest, RenewDBInstancesResponse, RenameInstanceResponse, CreateBackupDBInstanceRequest, SetAccountUserPrivilegeRequest, KillOpsResponse, IsolateDBInstanceRequest, CreateDBInstanceHourRequest, AssignProjectRequest, CreateBackupDownloadTaskResponse, DescribeSlowLogPatternsRequest, DescribeSpecInfoResponse, InquirePriceRenewDBInstancesResponse, DeleteAccountUserResponse, DescribeDBInstancesResponse, OfflineIsolatedDBInstanceRequest, InquirePriceCreateDBInstancesRequest, DescribeInstanceParamsResponse, ModifyDBInstanceSpecResponse, RenewDBInstancesRequest } from "./mongodb_models";
/**
 * mongodb client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口（TerminateDBInstances）可将包年包月实例退还隔离。
     */
    TerminateDBInstances(req: TerminateDBInstancesRequest, cb?: (error: string, rep: TerminateDBInstancesResponse) => void): Promise<TerminateDBInstancesResponse>;
    /**
     * 本接口用于查询节点的属性，包括节点所在可用区、节点名称、地址、角色、状态、主从延迟、优先级、投票权、标签等属性。
     */
    DescribeDBInstanceNodeProperty(req: DescribeDBInstanceNodePropertyRequest, cb?: (error: string, rep: DescribeDBInstanceNodePropertyResponse) => void): Promise<DescribeDBInstanceNodePropertyResponse>;
    /**
     * 本接口（DescribeDBInstanceDeal）用于获取MongoDB购买、续费及变配订单详细。
     */
    DescribeDBInstanceDeal(req: DescribeDBInstanceDealRequest, cb?: (error: string, rep: DescribeDBInstanceDealResponse) => void): Promise<DescribeDBInstanceDealResponse>;
    /**
     * 本接口(DescribeCurrentOp)用于查询MongoDB云数据库实例的当前正在执行的操作。
     */
    DescribeCurrentOp(req: DescribeCurrentOpRequest, cb?: (error: string, rep: DescribeCurrentOpResponse) => void): Promise<DescribeCurrentOpResponse>;
    /**
     * 本接口（DescribeClientConnections）用于查询实例客户端连接信息，包括连接 IP 和连接数量。
     */
    DescribeClientConnections(req: DescribeClientConnectionsRequest, cb?: (error: string, rep: DescribeClientConnectionsResponse) => void): Promise<DescribeClientConnectionsResponse>;
    /**
     * 修改实例用户的密码
     */
    ResetDBInstancePassword(req: ResetDBInstancePasswordRequest, cb?: (error: string, rep: ResetDBInstancePasswordResponse) => void): Promise<ResetDBInstancePasswordResponse>;
    /**
     * 本就口（DescribeSecurityGroup）用于查询实例绑定的安全组。
     */
    DescribeSecurityGroup(req: DescribeSecurityGroupRequest, cb?: (error: string, rep: DescribeSecurityGroupResponse) => void): Promise<DescribeSecurityGroupResponse>;
    /**
     * 本接口（SetAccountUserPrivilege）用于设置实例的账号权限。
     */
    SetAccountUserPrivilege(req: SetAccountUserPrivilegeRequest, cb?: (error: string, rep: SetAccountUserPrivilegeResponse) => void): Promise<SetAccountUserPrivilegeResponse>;
    /**
     * 在所有mongos上执行FlushRouterConfig命令
     */
    FlushInstanceRouterConfig(req: FlushInstanceRouterConfigRequest, cb?: (error: string, rep: FlushInstanceRouterConfigResponse) => void): Promise<FlushInstanceRouterConfigResponse>;
    /**
     * 本接口（DescribeDBBackups）用于查询实例备份列表，目前只支持查询7天内的备份记录。
     */
    DescribeDBBackups(req: DescribeDBBackupsRequest, cb?: (error: string, rep: DescribeDBBackupsResponse) => void): Promise<DescribeDBBackupsResponse>;
    /**
     * 本接口(IsolateDBInstance)用于隔离MongoDB云数据库按量计费实例。隔离后实例保留在回收站中，不能再写入数据。隔离一定时间后，实例会彻底删除，回收站保存时间请参考按量计费的服务条款。在隔离中的按量计费实例无法恢复，请谨慎操作。
     */
    IsolateDBInstance(req: IsolateDBInstanceRequest, cb?: (error: string, rep: IsolateDBInstanceResponse) => void): Promise<IsolateDBInstanceResponse>;
    /**
     * 本接口 (InquirePriceModifyDBInstanceSpec) 用于查询实例配置变更后的价格。
     */
    InquirePriceModifyDBInstanceSpec(req: InquirePriceModifyDBInstanceSpecRequest, cb?: (error: string, rep: InquirePriceModifyDBInstanceSpecResponse) => void): Promise<InquirePriceModifyDBInstanceSpecResponse>;
    /**
     * 查询异步任务状态接口
     */
    DescribeAsyncRequestInfo(req: DescribeAsyncRequestInfoRequest, cb?: (error: string, rep: DescribeAsyncRequestInfoResponse) => void): Promise<DescribeAsyncRequestInfoResponse>;
    /**
     * 本接口（CreateAccountUser）用于自定义实例访问账号。
     */
    CreateAccountUser(req: CreateAccountUserRequest, cb?: (error: string, rep: CreateAccountUserResponse) => void): Promise<CreateAccountUserResponse>;
    /**
     * 本接口（CreateDBInstanceHour）用于创建按量计费的MongoDB云数据库实例。
     */
    CreateDBInstanceHour(req: CreateDBInstanceHourRequest, cb?: (error: string, rep: CreateDBInstanceHourResponse) => void): Promise<CreateDBInstanceHourResponse>;
    /**
     * 本接口(RenewDBInstance)用于续费云数据库实例，仅支持付费模式为包年包月的实例。按量计费实例不需要续费。
     */
    RenewDBInstances(req: RenewDBInstancesRequest, cb?: (error: string, rep: RenewDBInstancesResponse) => void): Promise<RenewDBInstancesResponse>;
    /**
     * 本接口用来创建某个备份文件的下载任务
     */
    CreateBackupDownloadTask(req: CreateBackupDownloadTaskRequest, cb?: (error: string, rep: CreateBackupDownloadTaskResponse) => void): Promise<CreateBackupDownloadTaskResponse>;
    /**
     * 本接口（DescribeDBInstances）用于查询云数据库实例列表，支持通过项目ID、实例ID、实例状态等过滤条件来筛选主实例、灾备实例和只读实例信息列表。
     */
    DescribeDBInstances(req: DescribeDBInstancesRequest, cb?: (error: string, rep: DescribeDBInstancesResponse) => void): Promise<DescribeDBInstancesResponse>;
    /**
     * 本接口(OfflineIsolatedDBInstance)用于立即下线隔离状态的云数据库实例。进行操作的实例状态必须为隔离状态。
     */
    OfflineIsolatedDBInstance(req: OfflineIsolatedDBInstanceRequest, cb?: (error: string, rep: OfflineIsolatedDBInstanceResponse) => void): Promise<OfflineIsolatedDBInstanceResponse>;
    /**
     * 本接口（DescribeSlowLogPatterns）用于获取数据库实例慢日志的统计信息。
     */
    DescribeSlowLogPatterns(req: DescribeSlowLogPatternsRequest, cb?: (error: string, rep: DescribeSlowLogPatternsResponse) => void): Promise<DescribeSlowLogPatternsResponse>;
    /**
     * 本接口（DescribeSlowLogs）用于获取云数据库慢日志信息。接口只支持查询最近7天内慢日志。
     */
    DescribeSlowLogs(req: DescribeSlowLogsRequest, cb?: (error: string, rep: DescribeSlowLogsResponse) => void): Promise<DescribeSlowLogsResponse>;
    /**
     * 本接口(ModifyDBInstanceNetworkAddress)用于修改云数据库实例的网络信息，可进行基础网络转VPC网络和VPC网络之间的变换。
     */
    ModifyDBInstanceNetworkAddress(req: ModifyDBInstanceNetworkAddressRequest, cb?: (error: string, rep: ModifyDBInstanceNetworkAddressResponse) => void): Promise<ModifyDBInstanceNetworkAddressResponse>;
    /**
     * 本接口(CreateDBInstance)用于创建包年包月的MongoDB云数据库实例。接口支持的售卖规格，可从查询云数据库的售卖规格（DescribeSpecInfo）获取。
     */
    CreateDBInstance(req: CreateDBInstanceRequest, cb?: (error: string, rep: CreateDBInstanceResponse) => void): Promise<CreateDBInstanceResponse>;
    /**
     * 本接口(ModifyDBInstanceSpec)用于调整MongoDB云数据库实例配置。接口支持的售卖规格，可从查询云数据库的售卖规格（DescribeSpecInfo）获取。
     */
    ModifyDBInstanceSpec(req: ModifyDBInstanceSpecRequest, cb?: (error: string, rep: ModifyDBInstanceSpecResponse) => void): Promise<ModifyDBInstanceSpecResponse>;
    /**
     * 本接口（DescribeInstanceParams）用于查询当前实例可修改的参数列表。
     */
    DescribeInstanceParams(req: DescribeInstanceParamsRequest, cb?: (error: string, rep: DescribeInstanceParamsResponse) => void): Promise<DescribeInstanceParamsResponse>;
    /**
     * 本接口(DescribeSpecInfo)用于查询实例的售卖规格。
     */
    DescribeSpecInfo(req: DescribeSpecInfoRequest, cb?: (error: string, rep: DescribeSpecInfoResponse) => void): Promise<DescribeSpecInfoResponse>;
    /**
     * 查询备份下载任务信息
     */
    DescribeBackupDownloadTask(req: DescribeBackupDownloadTaskRequest, cb?: (error: string, rep: DescribeBackupDownloadTaskResponse) => void): Promise<DescribeBackupDownloadTaskResponse>;
    /**
     * 本接口（InquirePriceCreateDBInstances）用于创建数据库实例询价。本接口参数中必须传入region参数，否则无法通过校验。本接口仅允许针对购买限制范围内的实例配置进行询价。
     */
    InquirePriceCreateDBInstances(req: InquirePriceCreateDBInstancesRequest, cb?: (error: string, rep: InquirePriceCreateDBInstancesResponse) => void): Promise<InquirePriceCreateDBInstancesResponse>;
    /**
     * 本接口(AssignProject)用于指定云数据库实例的所属项目。

     */
    AssignProject(req: AssignProjectRequest, cb?: (error: string, rep: AssignProjectResponse) => void): Promise<AssignProjectResponse>;
    /**
     * 本接口（DescribeAccountUsers）用于获取当前实例的全部账号。
     */
    DescribeAccountUsers(req: DescribeAccountUsersRequest, cb?: (error: string, rep: DescribeAccountUsersResponse) => void): Promise<DescribeAccountUsersResponse>;
    /**
     * 本接口(RenameInstance)用于修改云数据库实例的名称。
     */
    RenameInstance(req: RenameInstanceRequest, cb?: (error: string, rep: RenameInstanceResponse) => void): Promise<RenameInstanceResponse>;
    /**
     * 本接口(KillOps)用于终止MongoDB云数据库实例上执行的特定操作。
     */
    KillOps(req: KillOpsRequest, cb?: (error: string, rep: KillOpsResponse) => void): Promise<KillOpsResponse>;
    /**
     * 本接口（CreateBackupDBInstance）用于备份实例。
     */
    CreateBackupDBInstance(req: CreateBackupDBInstanceRequest, cb?: (error: string, rep: CreateBackupDBInstanceResponse) => void): Promise<CreateBackupDBInstanceResponse>;
    /**
     * 本接口 (InquiryPriceRenewDBInstances) 用于续费包年包月实例询价。
     */
    InquirePriceRenewDBInstances(req: InquirePriceRenewDBInstancesRequest, cb?: (error: string, rep: InquirePriceRenewDBInstancesResponse) => void): Promise<InquirePriceRenewDBInstancesResponse>;
    /**
     * 本接口（DeleteAccountUser）用于删除实例的自定义账号。
     */
    DeleteAccountUser(req: DeleteAccountUserRequest, cb?: (error: string, rep: DeleteAccountUserResponse) => void): Promise<DeleteAccountUserResponse>;
    /**
     * 本接口（ModifyDBInstanceSecurityGroup）用于修改实例绑定的安全组
     */
    ModifyDBInstanceSecurityGroup(req: ModifyDBInstanceSecurityGroupRequest, cb?: (error: string, rep: ModifyDBInstanceSecurityGroupResponse) => void): Promise<ModifyDBInstanceSecurityGroupResponse>;
}
