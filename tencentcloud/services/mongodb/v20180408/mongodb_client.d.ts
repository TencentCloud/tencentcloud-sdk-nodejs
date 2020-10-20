import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeSpecInfoRequest, TerminateDBInstanceRequest, CreateDBInstanceRequest, UpgradeDBInstanceHourRequest, CreateDBInstanceHourRequest, AssignProjectRequest, DescribeDBInstancesRequest, SetPasswordResponse, DescribeSpecInfoResponse, DescribeSlowLogResponse, DescribeDBInstancesResponse, CreateDBInstanceResponse, SetPasswordRequest, AssignProjectResponse, DescribeSlowLogRequest, DescribeClientConnectionsRequest, SetAutoRenewResponse, RenameInstanceRequest, UpgradeDBInstanceResponse, SetAutoRenewRequest, RenameInstanceResponse, DescribeClientConnectionsResponse, UpgradeDBInstanceHourResponse, UpgradeDBInstanceRequest, CreateDBInstanceHourResponse, TerminateDBInstanceResponse } from "./mongodb_models";
/**
 * mongodb client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口(AssignProject)用于指定云数据库实例的所属项目。


     */
    AssignProject(req: AssignProjectRequest, cb?: (error: string, rep: AssignProjectResponse) => void): Promise<AssignProjectResponse>;
    /**
     * 本接口(TerminateDBInstance)用于销毁按量计费的MongoDB云数据库实例
     */
    TerminateDBInstance(req: TerminateDBInstanceRequest, cb?: (error: string, rep: TerminateDBInstanceResponse) => void): Promise<TerminateDBInstanceResponse>;
    /**
     * 本接口(CreateDBInstance)用于创建包年包月的MongoDB云数据库实例。
     */
    CreateDBInstance(req: CreateDBInstanceRequest, cb?: (error: string, rep: CreateDBInstanceResponse) => void): Promise<CreateDBInstanceResponse>;
    /**
     * 本接口(DescribeClientConnections)用于查询实例客户端连接信息，包括连接IP和连接数量。目前只支持3.2版本的MongoDB实例。
     */
    DescribeClientConnections(req: DescribeClientConnectionsRequest, cb?: (error: string, rep: DescribeClientConnectionsResponse) => void): Promise<DescribeClientConnectionsResponse>;
    /**
     * 本接口(CreateDBInstanceHour)用于创建按量计费的MongoDB云数据库实例（包括主实例、灾备实例和只读实例），可通过传入实例规格、实例类型、MongoDB版本、购买时长和数量等信息创建云数据库实例。
     */
    CreateDBInstanceHour(req: CreateDBInstanceHourRequest, cb?: (error: string, rep: CreateDBInstanceHourResponse) => void): Promise<CreateDBInstanceHourResponse>;
    /**
     * 本接口(DescribeSlowLogs)用于获取云数据库实例的慢查询日志。
     */
    DescribeSlowLog(req: DescribeSlowLogRequest, cb?: (error: string, rep: DescribeSlowLogResponse) => void): Promise<DescribeSlowLogResponse>;
    /**
     * 本接口(RenameInstance)用于修改云数据库实例的名称。
     */
    RenameInstance(req: RenameInstanceRequest, cb?: (error: string, rep: RenameInstanceResponse) => void): Promise<RenameInstanceResponse>;
    /**
     * 本接口(UpgradeDBInstance)用于升级包年包月的MongoDB云数据库实例，可以扩容内存、存储以及Oplog
     */
    UpgradeDBInstance(req: UpgradeDBInstanceRequest, cb?: (error: string, rep: UpgradeDBInstanceResponse) => void): Promise<UpgradeDBInstanceResponse>;
    /**
     * 本接口(SetAutoRenew)用于设置包年包月云数据库实例的续费选项。
     */
    SetAutoRenew(req: SetAutoRenewRequest, cb?: (error: string, rep: SetAutoRenewResponse) => void): Promise<SetAutoRenewResponse>;
    /**
     * 本接口(DescribeSpecInfo)用于查询实例的售卖规格。
     */
    DescribeSpecInfo(req: DescribeSpecInfoRequest, cb?: (error: string, rep: DescribeSpecInfoResponse) => void): Promise<DescribeSpecInfoResponse>;
    /**
     * 本接口(SetPassword)用于设置云数据库账户的密码。


     */
    SetPassword(req: SetPasswordRequest, cb?: (error: string, rep: SetPasswordResponse) => void): Promise<SetPasswordResponse>;
    /**
     * 本接口(UpgradeDBInstanceHour)用于升级按量计费的MongoDB云数据库实例，可以扩容内存、存储以及oplog
     */
    UpgradeDBInstanceHour(req: UpgradeDBInstanceHourRequest, cb?: (error: string, rep: UpgradeDBInstanceHourResponse) => void): Promise<UpgradeDBInstanceHourResponse>;
    /**
     * 本接口(DescribeDBInstances)用于查询云数据库实例列表，支持通过项目ID、实例ID、实例状态等过滤条件来筛选实例。支持查询主实例、灾备实例和只读实例信息列表。
     */
    DescribeDBInstances(req: DescribeDBInstancesRequest, cb?: (error: string, rep: DescribeDBInstancesResponse) => void): Promise<DescribeDBInstancesResponse>;
}
