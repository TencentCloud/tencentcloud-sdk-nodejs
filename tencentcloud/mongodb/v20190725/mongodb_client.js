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
const DescribeBackupAccessResponse = models.DescribeBackupAccessResponse;
const CreateDBInstanceHourRequest = models.CreateDBInstanceHourRequest;
const AssignProjectRequest = models.AssignProjectRequest;
const ClientConnection = models.ClientConnection;
const BackupInfo = models.BackupInfo;
const DescribeDBInstancesRequest = models.DescribeDBInstancesRequest;
const SpecificationInfo = models.SpecificationInfo;
const ModifyDBInstanceSpecRequest = models.ModifyDBInstanceSpecRequest;
const DescribeSpecInfoResponse = models.DescribeSpecInfoResponse;
const TagInfo = models.TagInfo;
const DescribeDBInstancesResponse = models.DescribeDBInstancesResponse;
const OfflineIsolatedDBInstanceRequest = models.OfflineIsolatedDBInstanceRequest;
const CreateDBInstanceResponse = models.CreateDBInstanceResponse;
const AssignProjectResponse = models.AssignProjectResponse;
const DescribeDBBackupsRequest = models.DescribeDBBackupsRequest;
const DescribeClientConnectionsRequest = models.DescribeClientConnectionsRequest;
const ShardInfo = models.ShardInfo;
const OfflineIsolatedDBInstanceResponse = models.OfflineIsolatedDBInstanceResponse;
const IsolateDBInstanceResponse = models.IsolateDBInstanceResponse;
const DescribeBackupAccessRequest = models.DescribeBackupAccessRequest;
const RenameInstanceRequest = models.RenameInstanceRequest;
const RenameInstanceResponse = models.RenameInstanceResponse;
const DescribeClientConnectionsResponse = models.DescribeClientConnectionsResponse;
const DBInstanceInfo = models.DBInstanceInfo;
const BackupFile = models.BackupFile;
const DescribeDBBackupsResponse = models.DescribeDBBackupsResponse;
const InstanceDetail = models.InstanceDetail;
const ModifyDBInstanceSpecResponse = models.ModifyDBInstanceSpecResponse;
const CreateDBInstanceHourResponse = models.CreateDBInstanceHourResponse;
const SpecItem = models.SpecItem;


/**
 * mongodb client
 * @class
 */
class MongodbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("mongodb.tencentcloudapi.com", "2019-07-25", credential, region, profile);
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
     * 本接口(OfflineIsolatedInstances)用于立即下线隔离状态的云数据库实例。进行操作的实例状态必须为隔离状态。
     * @param {OfflineIsolatedDBInstanceRequest} req
     * @param {function(string, OfflineIsolatedDBInstanceResponse):void} cb
     * @public
     */
    OfflineIsolatedDBInstance(req, cb) {
        let resp = new OfflineIsolatedDBInstanceResponse();
        this.request("OfflineIsolatedDBInstance", req, resp, cb);
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
     * 本接口(DescribeClientConnections)用于查询实例客户端连接信息，包括连接IP和连接数量。目前只支持3.2版本的MongoDB实例。
     * @param {DescribeClientConnectionsRequest} req
     * @param {function(string, DescribeClientConnectionsResponse):void} cb
     * @public
     */
    DescribeClientConnections(req, cb) {
        let resp = new DescribeClientConnectionsResponse();
        this.request("DescribeClientConnections", req, resp, cb);
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


}
module.exports = MongodbClient;
