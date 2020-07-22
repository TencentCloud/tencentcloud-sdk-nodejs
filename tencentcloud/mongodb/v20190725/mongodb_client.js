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
const IsolateDBInstanceRequest = models.IsolateDBInstanceRequest;
const ResetDBInstancePasswordResponse = models.ResetDBInstancePasswordResponse;
const CreateBackupDBInstanceResponse = models.CreateBackupDBInstanceResponse;
const DBInstancePrice = models.DBInstancePrice;
const BackupFile = models.BackupFile;
const InquirePriceCreateDBInstancesRequest = models.InquirePriceCreateDBInstancesRequest;
const DescribeSlowLogPatternsResponse = models.DescribeSlowLogPatternsResponse;
const SlowLogPattern = models.SlowLogPattern;
const CreateDBInstanceHourRequest = models.CreateDBInstanceHourRequest;
const AssignProjectRequest = models.AssignProjectRequest;
const DescribeSlowLogsResponse = models.DescribeSlowLogsResponse;
const ClientConnection = models.ClientConnection;
const InquirePriceModifyDBInstanceSpecRequest = models.InquirePriceModifyDBInstanceSpecRequest;
const BackupInfo = models.BackupInfo;
const InquirePriceRenewDBInstancesRequest = models.InquirePriceRenewDBInstancesRequest;
const DescribeAsyncRequestInfoRequest = models.DescribeAsyncRequestInfoRequest;
const SpecificationInfo = models.SpecificationInfo;
const DescribeSlowLogsRequest = models.DescribeSlowLogsRequest;
const DescribeSlowLogPatternsRequest = models.DescribeSlowLogPatternsRequest;
const FlushInstanceRouterConfigResponse = models.FlushInstanceRouterConfigResponse;
const InquirePriceModifyDBInstanceSpecResponse = models.InquirePriceModifyDBInstanceSpecResponse;
const SpecItem = models.SpecItem;
const DescribeSpecInfoResponse = models.DescribeSpecInfoResponse;
const InquirePriceRenewDBInstancesResponse = models.InquirePriceRenewDBInstancesResponse;
const ResetDBInstancePasswordRequest = models.ResetDBInstancePasswordRequest;
const TagInfo = models.TagInfo;
const DescribeDBInstancesResponse = models.DescribeDBInstancesResponse;
const OfflineIsolatedDBInstanceRequest = models.OfflineIsolatedDBInstanceRequest;
const DescribeDBInstanceDealRequest = models.DescribeDBInstanceDealRequest;
const DescribeDBInstancesRequest = models.DescribeDBInstancesRequest;
const DescribeAsyncRequestInfoResponse = models.DescribeAsyncRequestInfoResponse;
const CreateDBInstanceResponse = models.CreateDBInstanceResponse;
const AssignProjectResponse = models.AssignProjectResponse;
const DescribeDBBackupsRequest = models.DescribeDBBackupsRequest;
const DescribeClientConnectionsRequest = models.DescribeClientConnectionsRequest;
const DescribeDBInstanceDealResponse = models.DescribeDBInstanceDealResponse;
const ModifyDBInstanceSpecResponse = models.ModifyDBInstanceSpecResponse;
const ShardInfo = models.ShardInfo;
const OfflineIsolatedDBInstanceResponse = models.OfflineIsolatedDBInstanceResponse;
const IsolateDBInstanceResponse = models.IsolateDBInstanceResponse;
const DescribeBackupAccessRequest = models.DescribeBackupAccessRequest;
const RenameInstanceRequest = models.RenameInstanceRequest;
const RenewDBInstancesResponse = models.RenewDBInstancesResponse;
const RenameInstanceResponse = models.RenameInstanceResponse;
const DescribeClientConnectionsResponse = models.DescribeClientConnectionsResponse;
const FlushInstanceRouterConfigRequest = models.FlushInstanceRouterConfigRequest;
const DBInstanceInfo = models.DBInstanceInfo;
const DescribeBackupAccessResponse = models.DescribeBackupAccessResponse;
const DescribeDBBackupsResponse = models.DescribeDBBackupsResponse;
const InstanceDetail = models.InstanceDetail;
const ModifyDBInstanceSpecRequest = models.ModifyDBInstanceSpecRequest;
const CreateDBInstanceHourResponse = models.CreateDBInstanceHourResponse;
const CreateBackupDBInstanceRequest = models.CreateBackupDBInstanceRequest;
const InstanceChargePrepaid = models.InstanceChargePrepaid;
const InquirePriceCreateDBInstancesResponse = models.InquirePriceCreateDBInstancesResponse;
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
     * 本接口（DescribeDBBackups）用于查询实例备份列表，目前只支持7天内的备份查询。
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
     * 本接口（DescribeBackupAccess）用于获取备份文件的下载授权，具体的备份文件信息可通过查询实例备份列表（DescribeDBBackups）接口获取
     * @param {DescribeBackupAccessRequest} req
     * @param {function(string, DescribeBackupAccessResponse):void} cb
     * @public
     */
    DescribeBackupAccess(req, cb) {
        let resp = new DescribeBackupAccessResponse();
        this.request("DescribeBackupAccess", req, resp, cb);
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
     * 本接口(CreateDBInstanceHour)用于创建按量计费的MongoDB云数据库实例。
     * @param {CreateDBInstanceHourRequest} req
     * @param {function(string, CreateDBInstanceHourResponse):void} cb
     * @public
     */
    CreateDBInstanceHour(req, cb) {
        let resp = new CreateDBInstanceHourResponse();
        this.request("CreateDBInstanceHour", req, resp, cb);
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
     * 本接口用于创建数据库实例询价。本接口参数中必须传入region参数，否则无法通过校验。本接口仅允许针对购买限制范围内的实例配置进行询价。
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


}
module.exports = MongodbClient;
