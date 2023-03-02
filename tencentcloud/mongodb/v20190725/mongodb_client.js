/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const DescribeSpecInfoRequest = models.DescribeSpecInfoRequest;
const CreateDBInstanceRequest = models.CreateDBInstanceRequest;
const DescribeCurrentOpResponse = models.DescribeCurrentOpResponse;
const DescribeAccountUsersRequest = models.DescribeAccountUsersRequest;
const CreateBackupDBInstanceResponse = models.CreateBackupDBInstanceResponse;
const DBInstancePrice = models.DBInstancePrice;
const KillOpsRequest = models.KillOpsRequest;
const InquirePriceRenewDBInstancesRequest = models.InquirePriceRenewDBInstancesRequest;
const DescribeSlowLogsRequest = models.DescribeSlowLogsRequest;
const FlushInstanceRouterConfigResponse = models.FlushInstanceRouterConfigResponse;
const DescribeSecurityGroupRequest = models.DescribeSecurityGroupRequest;
const SlowLogPattern = models.SlowLogPattern;
const AssignProjectResponse = models.AssignProjectResponse;
const DescribeDBInstanceDealResponse = models.DescribeDBInstanceDealResponse;
const OfflineIsolatedDBInstanceResponse = models.OfflineIsolatedDBInstanceResponse;
const IsolateDBInstanceResponse = models.IsolateDBInstanceResponse;
const InstanceMultiParam = models.InstanceMultiParam;
const DescribeBackupDownloadTaskResponse = models.DescribeBackupDownloadTaskResponse;
const FlushInstanceRouterConfigRequest = models.FlushInstanceRouterConfigRequest;
const DBInstanceInfo = models.DBInstanceInfo;
const SetAccountUserPrivilegeResponse = models.SetAccountUserPrivilegeResponse;
const ModifyDBInstanceNetworkAddressRequest = models.ModifyDBInstanceNetworkAddressRequest;
const CreateDBInstanceHourResponse = models.CreateDBInstanceHourResponse;
const DescribeDBInstanceNodePropertyRequest = models.DescribeDBInstanceNodePropertyRequest;
const Operation = models.Operation;
const SpecItem = models.SpecItem;
const ModifyDBInstanceNetworkAddressResponse = models.ModifyDBInstanceNetworkAddressResponse;
const CreateAccountUserResponse = models.CreateAccountUserResponse;
const DescribeSlowLogPatternsResponse = models.DescribeSlowLogPatternsResponse;
const BackupDownloadTaskStatus = models.BackupDownloadTaskStatus;
const DescribeSlowLogsResponse = models.DescribeSlowLogsResponse;
const InquirePriceModifyDBInstanceSpecRequest = models.InquirePriceModifyDBInstanceSpecRequest;
const BackupInfo = models.BackupInfo;
const DescribeDBInstancesRequest = models.DescribeDBInstancesRequest;
const CurrentOp = models.CurrentOp;
const ModifyDBInstanceSpecRequest = models.ModifyDBInstanceSpecRequest;
const Auth = models.Auth;
const ResetDBInstancePasswordRequest = models.ResetDBInstancePasswordRequest;
const InstanceIntegerParam = models.InstanceIntegerParam;
const ModifyNetworkAddress = models.ModifyNetworkAddress;
const DescribeAsyncRequestInfoResponse = models.DescribeAsyncRequestInfoResponse;
const CreateDBInstanceResponse = models.CreateDBInstanceResponse;
const CreateAccountUserRequest = models.CreateAccountUserRequest;
const InstanceTextParam = models.InstanceTextParam;
const ModifyDBInstanceSecurityGroupRequest = models.ModifyDBInstanceSecurityGroupRequest;
const DescribeAccountUsersResponse = models.DescribeAccountUsersResponse;
const DescribeBackupDownloadTaskRequest = models.DescribeBackupDownloadTaskRequest;
const DescribeClientConnectionsResponse = models.DescribeClientConnectionsResponse;
const TerminateDBInstancesRequest = models.TerminateDBInstancesRequest;
const DescribeDBBackupsResponse = models.DescribeDBBackupsResponse;
const ModifyDBInstanceSecurityGroupResponse = models.ModifyDBInstanceSecurityGroupResponse;
const UserInfo = models.UserInfo;
const DescribeInstanceParamsRequest = models.DescribeInstanceParamsRequest;
const NodeTag = models.NodeTag;
const InquirePriceCreateDBInstancesResponse = models.InquirePriceCreateDBInstancesResponse;
const DescribeSecurityGroupResponse = models.DescribeSecurityGroupResponse;
const SecurityGroup = models.SecurityGroup;
const ReplicaSetInfo = models.ReplicaSetInfo;
const ResetDBInstancePasswordResponse = models.ResetDBInstancePasswordResponse;
const ClientConnection = models.ClientConnection;
const ReplicateSetInfo = models.ReplicateSetInfo;
const DescribeDBInstanceDealRequest = models.DescribeDBInstanceDealRequest;
const DescribeAsyncRequestInfoRequest = models.DescribeAsyncRequestInfoRequest;
const CreateBackupDownloadTaskRequest = models.CreateBackupDownloadTaskRequest;
const InquirePriceModifyDBInstanceSpecResponse = models.InquirePriceModifyDBInstanceSpecResponse;
const SecurityGroupBound = models.SecurityGroupBound;
const DescribeDBInstanceNodePropertyResponse = models.DescribeDBInstanceNodePropertyResponse;
const DescribeCurrentOpRequest = models.DescribeCurrentOpRequest;
const BackupDownloadTask = models.BackupDownloadTask;
const DescribeDBBackupsRequest = models.DescribeDBBackupsRequest;
const DescribeClientConnectionsRequest = models.DescribeClientConnectionsRequest;
const ShardInfo = models.ShardInfo;
const TerminateDBInstancesResponse = models.TerminateDBInstancesResponse;
const RenameInstanceRequest = models.RenameInstanceRequest;
const RenewDBInstancesResponse = models.RenewDBInstancesResponse;
const InstanceEnumParam = models.InstanceEnumParam;
const RenameInstanceResponse = models.RenameInstanceResponse;
const CreateBackupDBInstanceRequest = models.CreateBackupDBInstanceRequest;
const SetAccountUserPrivilegeRequest = models.SetAccountUserPrivilegeRequest;
const NodeProperty = models.NodeProperty;
const KillOpsResponse = models.KillOpsResponse;
const IsolateDBInstanceRequest = models.IsolateDBInstanceRequest;
const CreateDBInstanceHourRequest = models.CreateDBInstanceHourRequest;
const AssignProjectRequest = models.AssignProjectRequest;
const CreateBackupDownloadTaskResponse = models.CreateBackupDownloadTaskResponse;
const SpecificationInfo = models.SpecificationInfo;
const DescribeSlowLogPatternsRequest = models.DescribeSlowLogPatternsRequest;
const DescribeSpecInfoResponse = models.DescribeSpecInfoResponse;
const InquirePriceRenewDBInstancesResponse = models.InquirePriceRenewDBInstancesResponse;
const TagInfo = models.TagInfo;
const DescribeDBInstancesResponse = models.DescribeDBInstancesResponse;
const OfflineIsolatedDBInstanceRequest = models.OfflineIsolatedDBInstanceRequest;
const InquirePriceCreateDBInstancesRequest = models.InquirePriceCreateDBInstancesRequest;
const DescribeInstanceParamsResponse = models.DescribeInstanceParamsResponse;
const InstanceDetail = models.InstanceDetail;
const ModifyDBInstanceSpecResponse = models.ModifyDBInstanceSpecResponse;
const InstanceChargePrepaid = models.InstanceChargePrepaid;
const RenewDBInstancesRequest = models.RenewDBInstancesRequest;


/**
 * mongodb client
 * @class
 */
class MongodbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("mongodb.tencentcloudapi.com", "2019-07-25", credential, region, profile);
    }
    
    /**
     * 本接口（TerminateDBInstances）可将包年包月实例退还隔离。
     * @param {TerminateDBInstancesRequest} req
     * @param {function(string, TerminateDBInstancesResponse):void} cb
     * @public
     */
    TerminateDBInstances(req, cb) {
        let resp = new TerminateDBInstancesResponse();
        this.request("TerminateDBInstances", req, resp, cb);
    }

    /**
     * 本接口用于查询节点的属性，包括节点所在可用区、节点名称、地址、角色、状态、主从延迟、优先级、投票权、标签等属性。
     * @param {DescribeDBInstanceNodePropertyRequest} req
     * @param {function(string, DescribeDBInstanceNodePropertyResponse):void} cb
     * @public
     */
    DescribeDBInstanceNodeProperty(req, cb) {
        let resp = new DescribeDBInstanceNodePropertyResponse();
        this.request("DescribeDBInstanceNodeProperty", req, resp, cb);
    }

    /**
     * 本接口（DescribeDBInstanceDeal）用于获取MongoDB购买、续费及变配订单详细。
     * @param {DescribeDBInstanceDealRequest} req
     * @param {function(string, DescribeDBInstanceDealResponse):void} cb
     * @public
     */
    DescribeDBInstanceDeal(req, cb) {
        let resp = new DescribeDBInstanceDealResponse();
        this.request("DescribeDBInstanceDeal", req, resp, cb);
    }

    /**
     * 本接口(DescribeCurrentOp)用于查询MongoDB云数据库实例的当前正在执行的操作。
     * @param {DescribeCurrentOpRequest} req
     * @param {function(string, DescribeCurrentOpResponse):void} cb
     * @public
     */
    DescribeCurrentOp(req, cb) {
        let resp = new DescribeCurrentOpResponse();
        this.request("DescribeCurrentOp", req, resp, cb);
    }

    /**
     * 本接口(DescribeClientConnections)用于查询实例客户端连接信息，包括连接IP和连接数量。
     * @param {DescribeClientConnectionsRequest} req
     * @param {function(string, DescribeClientConnectionsResponse):void} cb
     * @public
     */
    DescribeClientConnections(req, cb) {
        let resp = new DescribeClientConnectionsResponse();
        this.request("DescribeClientConnections", req, resp, cb);
    }

    /**
     * 修改实例用户的密码
     * @param {ResetDBInstancePasswordRequest} req
     * @param {function(string, ResetDBInstancePasswordResponse):void} cb
     * @public
     */
    ResetDBInstancePassword(req, cb) {
        let resp = new ResetDBInstancePasswordResponse();
        this.request("ResetDBInstancePassword", req, resp, cb);
    }

    /**
     * 查询实例绑定的安全组
     * @param {DescribeSecurityGroupRequest} req
     * @param {function(string, DescribeSecurityGroupResponse):void} cb
     * @public
     */
    DescribeSecurityGroup(req, cb) {
        let resp = new DescribeSecurityGroupResponse();
        this.request("DescribeSecurityGroup", req, resp, cb);
    }

    /**
     * 本接口(SetAccountUserPrivilege)用于设置mongodb实例的账号权限。
     * @param {SetAccountUserPrivilegeRequest} req
     * @param {function(string, SetAccountUserPrivilegeResponse):void} cb
     * @public
     */
    SetAccountUserPrivilege(req, cb) {
        let resp = new SetAccountUserPrivilegeResponse();
        this.request("SetAccountUserPrivilege", req, resp, cb);
    }

    /**
     * 在所有mongos上执行FlushRouterConfig命令
     * @param {FlushInstanceRouterConfigRequest} req
     * @param {function(string, FlushInstanceRouterConfigResponse):void} cb
     * @public
     */
    FlushInstanceRouterConfig(req, cb) {
        let resp = new FlushInstanceRouterConfigResponse();
        this.request("FlushInstanceRouterConfig", req, resp, cb);
    }

    /**
     * 本接口（DescribeDBBackups）用于查询实例备份列表，目前只支持查询7天内的备份记录。
     * @param {DescribeDBBackupsRequest} req
     * @param {function(string, DescribeDBBackupsResponse):void} cb
     * @public
     */
    DescribeDBBackups(req, cb) {
        let resp = new DescribeDBBackupsResponse();
        this.request("DescribeDBBackups", req, resp, cb);
    }

    /**
     * 本接口(IsolateDBInstance)用于隔离MongoDB云数据库按量计费实例。隔离后实例保留在回收站中，不能再写入数据。隔离一定时间后，实例会彻底删除，回收站保存时间请参考按量计费的服务条款。在隔离中的按量计费实例无法恢复，请谨慎操作。
     * @param {IsolateDBInstanceRequest} req
     * @param {function(string, IsolateDBInstanceResponse):void} cb
     * @public
     */
    IsolateDBInstance(req, cb) {
        let resp = new IsolateDBInstanceResponse();
        this.request("IsolateDBInstance", req, resp, cb);
    }

    /**
     * 本接口 (InquirePriceModifyDBInstanceSpec) 用于调整实例的配置询价。
     * @param {InquirePriceModifyDBInstanceSpecRequest} req
     * @param {function(string, InquirePriceModifyDBInstanceSpecResponse):void} cb
     * @public
     */
    InquirePriceModifyDBInstanceSpec(req, cb) {
        let resp = new InquirePriceModifyDBInstanceSpecResponse();
        this.request("InquirePriceModifyDBInstanceSpec", req, resp, cb);
    }

    /**
     * 查询异步任务状态接口
     * @param {DescribeAsyncRequestInfoRequest} req
     * @param {function(string, DescribeAsyncRequestInfoResponse):void} cb
     * @public
     */
    DescribeAsyncRequestInfo(req, cb) {
        let resp = new DescribeAsyncRequestInfoResponse();
        this.request("DescribeAsyncRequestInfo", req, resp, cb);
    }

    /**
     * 本接口(CreateAccountUser)用于创建mongodb实例账号。
     * @param {CreateAccountUserRequest} req
     * @param {function(string, CreateAccountUserResponse):void} cb
     * @public
     */
    CreateAccountUser(req, cb) {
        let resp = new CreateAccountUserResponse();
        this.request("CreateAccountUser", req, resp, cb);
    }

    /**
     * 本接口（CreateDBInstanceHour）用于创建按量计费的MongoDB云数据库实例。
     * @param {CreateDBInstanceHourRequest} req
     * @param {function(string, CreateDBInstanceHourResponse):void} cb
     * @public
     */
    CreateDBInstanceHour(req, cb) {
        let resp = new CreateDBInstanceHourResponse();
        this.request("CreateDBInstanceHour", req, resp, cb);
    }

    /**
     * 本接口(RenewDBInstance)用于续费云数据库实例，仅支持付费模式为包年包月的实例。按量计费实例不需要续费。
     * @param {RenewDBInstancesRequest} req
     * @param {function(string, RenewDBInstancesResponse):void} cb
     * @public
     */
    RenewDBInstances(req, cb) {
        let resp = new RenewDBInstancesResponse();
        this.request("RenewDBInstances", req, resp, cb);
    }

    /**
     * 本接口用来创建某个备份文件的下载任务
     * @param {CreateBackupDownloadTaskRequest} req
     * @param {function(string, CreateBackupDownloadTaskResponse):void} cb
     * @public
     */
    CreateBackupDownloadTask(req, cb) {
        let resp = new CreateBackupDownloadTaskResponse();
        this.request("CreateBackupDownloadTask", req, resp, cb);
    }

    /**
     * 本接口(DescribeDBInstances)用于查询云数据库实例列表，支持通过项目ID、实例ID、实例状态等过滤条件来筛选实例。支持查询主实例、灾备实例和只读实例信息列表。
     * @param {DescribeDBInstancesRequest} req
     * @param {function(string, DescribeDBInstancesResponse):void} cb
     * @public
     */
    DescribeDBInstances(req, cb) {
        let resp = new DescribeDBInstancesResponse();
        this.request("DescribeDBInstances", req, resp, cb);
    }

    /**
     * 本接口(OfflineIsolatedDBInstance)用于立即下线隔离状态的云数据库实例。进行操作的实例状态必须为隔离状态。
     * @param {OfflineIsolatedDBInstanceRequest} req
     * @param {function(string, OfflineIsolatedDBInstanceResponse):void} cb
     * @public
     */
    OfflineIsolatedDBInstance(req, cb) {
        let resp = new OfflineIsolatedDBInstanceResponse();
        this.request("OfflineIsolatedDBInstance", req, resp, cb);
    }

    /**
     * 本接口（DescribeSlowLogPatterns）用于获取数据库实例慢日志的统计信息。
     * @param {DescribeSlowLogPatternsRequest} req
     * @param {function(string, DescribeSlowLogPatternsResponse):void} cb
     * @public
     */
    DescribeSlowLogPatterns(req, cb) {
        let resp = new DescribeSlowLogPatternsResponse();
        this.request("DescribeSlowLogPatterns", req, resp, cb);
    }

    /**
     * 本接口（DescribeSlowLogs）用于获取云数据库慢日志信息。接口只支持查询最近7天内慢日志。
     * @param {DescribeSlowLogsRequest} req
     * @param {function(string, DescribeSlowLogsResponse):void} cb
     * @public
     */
    DescribeSlowLogs(req, cb) {
        let resp = new DescribeSlowLogsResponse();
        this.request("DescribeSlowLogs", req, resp, cb);
    }

    /**
     * 本接口(ModifyDBInstanceNetworkAddress)用于修改云数据库实例的网络信息，可进行基础网络转VPC网络和VPC网络之间的变换。
     * @param {ModifyDBInstanceNetworkAddressRequest} req
     * @param {function(string, ModifyDBInstanceNetworkAddressResponse):void} cb
     * @public
     */
    ModifyDBInstanceNetworkAddress(req, cb) {
        let resp = new ModifyDBInstanceNetworkAddressResponse();
        this.request("ModifyDBInstanceNetworkAddress", req, resp, cb);
    }

    /**
     * 本接口(CreateDBInstance)用于创建包年包月的MongoDB云数据库实例。接口支持的售卖规格，可从查询云数据库的售卖规格（DescribeSpecInfo）获取。
     * @param {CreateDBInstanceRequest} req
     * @param {function(string, CreateDBInstanceResponse):void} cb
     * @public
     */
    CreateDBInstance(req, cb) {
        let resp = new CreateDBInstanceResponse();
        this.request("CreateDBInstance", req, resp, cb);
    }

    /**
     * 本接口(ModifyDBInstanceSpec)用于调整MongoDB云数据库实例配置。接口支持的售卖规格，可从查询云数据库的售卖规格（DescribeSpecInfo）获取。
     * @param {ModifyDBInstanceSpecRequest} req
     * @param {function(string, ModifyDBInstanceSpecResponse):void} cb
     * @public
     */
    ModifyDBInstanceSpec(req, cb) {
        let resp = new ModifyDBInstanceSpecResponse();
        this.request("ModifyDBInstanceSpec", req, resp, cb);
    }

    /**
     * 本接口(DescribeInstanceParams)用于查询当前实例可修改的参数列表。
     * @param {DescribeInstanceParamsRequest} req
     * @param {function(string, DescribeInstanceParamsResponse):void} cb
     * @public
     */
    DescribeInstanceParams(req, cb) {
        let resp = new DescribeInstanceParamsResponse();
        this.request("DescribeInstanceParams", req, resp, cb);
    }

    /**
     * 本接口(DescribeSpecInfo)用于查询实例的售卖规格。
     * @param {DescribeSpecInfoRequest} req
     * @param {function(string, DescribeSpecInfoResponse):void} cb
     * @public
     */
    DescribeSpecInfo(req, cb) {
        let resp = new DescribeSpecInfoResponse();
        this.request("DescribeSpecInfo", req, resp, cb);
    }

    /**
     * 查询备份下载任务信息
     * @param {DescribeBackupDownloadTaskRequest} req
     * @param {function(string, DescribeBackupDownloadTaskResponse):void} cb
     * @public
     */
    DescribeBackupDownloadTask(req, cb) {
        let resp = new DescribeBackupDownloadTaskResponse();
        this.request("DescribeBackupDownloadTask", req, resp, cb);
    }

    /**
     * 本接口（InquirePriceCreateDBInstances）用于创建数据库实例询价。本接口参数中必须传入region参数，否则无法通过校验。本接口仅允许针对购买限制范围内的实例配置进行询价。
     * @param {InquirePriceCreateDBInstancesRequest} req
     * @param {function(string, InquirePriceCreateDBInstancesResponse):void} cb
     * @public
     */
    InquirePriceCreateDBInstances(req, cb) {
        let resp = new InquirePriceCreateDBInstancesResponse();
        this.request("InquirePriceCreateDBInstances", req, resp, cb);
    }

    /**
     * 本接口(AssignProject)用于指定云数据库实例的所属项目。

     * @param {AssignProjectRequest} req
     * @param {function(string, AssignProjectResponse):void} cb
     * @public
     */
    AssignProject(req, cb) {
        let resp = new AssignProjectResponse();
        this.request("AssignProject", req, resp, cb);
    }

    /**
     * 本接口(DescribeAccountUsers)用于获取当前实例的全部账号。
     * @param {DescribeAccountUsersRequest} req
     * @param {function(string, DescribeAccountUsersResponse):void} cb
     * @public
     */
    DescribeAccountUsers(req, cb) {
        let resp = new DescribeAccountUsersResponse();
        this.request("DescribeAccountUsers", req, resp, cb);
    }

    /**
     * 本接口(RenameInstance)用于修改云数据库实例的名称。
     * @param {RenameInstanceRequest} req
     * @param {function(string, RenameInstanceResponse):void} cb
     * @public
     */
    RenameInstance(req, cb) {
        let resp = new RenameInstanceResponse();
        this.request("RenameInstance", req, resp, cb);
    }

    /**
     * 本接口(KillOps)用于终止MongoDB云数据库实例上执行的特定操作。
     * @param {KillOpsRequest} req
     * @param {function(string, KillOpsResponse):void} cb
     * @public
     */
    KillOps(req, cb) {
        let resp = new KillOpsResponse();
        this.request("KillOps", req, resp, cb);
    }

    /**
     * 备份实例接口
     * @param {CreateBackupDBInstanceRequest} req
     * @param {function(string, CreateBackupDBInstanceResponse):void} cb
     * @public
     */
    CreateBackupDBInstance(req, cb) {
        let resp = new CreateBackupDBInstanceResponse();
        this.request("CreateBackupDBInstance", req, resp, cb);
    }

    /**
     * 本接口 (InquiryPriceRenewDBInstances) 用于续费包年包月实例询价。
     * @param {InquirePriceRenewDBInstancesRequest} req
     * @param {function(string, InquirePriceRenewDBInstancesResponse):void} cb
     * @public
     */
    InquirePriceRenewDBInstances(req, cb) {
        let resp = new InquirePriceRenewDBInstancesResponse();
        this.request("InquirePriceRenewDBInstances", req, resp, cb);
    }

    /**
     * 修改实例绑定的安全组
     * @param {ModifyDBInstanceSecurityGroupRequest} req
     * @param {function(string, ModifyDBInstanceSecurityGroupResponse):void} cb
     * @public
     */
    ModifyDBInstanceSecurityGroup(req, cb) {
        let resp = new ModifyDBInstanceSecurityGroupResponse();
        this.request("ModifyDBInstanceSecurityGroup", req, resp, cb);
    }


}
module.exports = MongodbClient;
