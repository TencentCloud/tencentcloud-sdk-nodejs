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
const TerminateDBInstanceRequest = models.TerminateDBInstanceRequest;
const CreateDBInstanceRequest = models.CreateDBInstanceRequest;
const UpgradeDBInstanceHourRequest = models.UpgradeDBInstanceHourRequest;
const CreateDBInstanceHourRequest = models.CreateDBInstanceHourRequest;
const AssignProjectRequest = models.AssignProjectRequest;
const ClientConnection = models.ClientConnection;
const DescribeDBInstancesRequest = models.DescribeDBInstancesRequest;
const SetPasswordResponse = models.SetPasswordResponse;
const SpecificationInfo = models.SpecificationInfo;
const MongoDBInstanceDetail = models.MongoDBInstanceDetail;
const DescribeSpecInfoResponse = models.DescribeSpecInfoResponse;
const TagInfo = models.TagInfo;
const DescribeSlowLogResponse = models.DescribeSlowLogResponse;
const DescribeDBInstancesResponse = models.DescribeDBInstancesResponse;
const CreateDBInstanceResponse = models.CreateDBInstanceResponse;
const SetPasswordRequest = models.SetPasswordRequest;
const AssignProjectResponse = models.AssignProjectResponse;
const DescribeSlowLogRequest = models.DescribeSlowLogRequest;
const DescribeClientConnectionsRequest = models.DescribeClientConnectionsRequest;
const SetAutoRenewResponse = models.SetAutoRenewResponse;
const MongoDBInstance = models.MongoDBInstance;
const RenameInstanceRequest = models.RenameInstanceRequest;
const UpgradeDBInstanceResponse = models.UpgradeDBInstanceResponse;
const SetAutoRenewRequest = models.SetAutoRenewRequest;
const RenameInstanceResponse = models.RenameInstanceResponse;
const DescribeClientConnectionsResponse = models.DescribeClientConnectionsResponse;
const UpgradeDBInstanceHourResponse = models.UpgradeDBInstanceHourResponse;
const UpgradeDBInstanceRequest = models.UpgradeDBInstanceRequest;
const CreateDBInstanceHourResponse = models.CreateDBInstanceHourResponse;
const TerminateDBInstanceResponse = models.TerminateDBInstanceResponse;
const MongodbShardInfo = models.MongodbShardInfo;
const SpecItem = models.SpecItem;


/**
 * mongodb client
 * @class
 */
class MongodbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("mongodb.tencentcloudapi.com", "2018-04-08", credential, region, profile);
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
     * 本接口(TerminateDBInstance)用于销毁按量计费的MongoDB云数据库实例
     * @param {TerminateDBInstanceRequest} req
     * @param {function(string, TerminateDBInstanceResponse):void} cb
     * @public
     */
    TerminateDBInstance(req, cb) {
        let resp = new TerminateDBInstanceResponse();
        this.request("TerminateDBInstance", req, resp, cb);
    }

    /**
     * 本接口(CreateDBInstance)用于创建包年包月的MongoDB云数据库实例。
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
     * 本接口(CreateDBInstanceHour)用于创建按量计费的MongoDB云数据库实例（包括主实例、灾备实例和只读实例），可通过传入实例规格、实例类型、MongoDB版本、购买时长和数量等信息创建云数据库实例。
     * @param {CreateDBInstanceHourRequest} req
     * @param {function(string, CreateDBInstanceHourResponse):void} cb
     * @public
     */
    CreateDBInstanceHour(req, cb) {
        let resp = new CreateDBInstanceHourResponse();
        this.request("CreateDBInstanceHour", req, resp, cb);
    }

    /**
     * 本接口(DescribeSlowLogs)用于获取云数据库实例的慢查询日志。
     * @param {DescribeSlowLogRequest} req
     * @param {function(string, DescribeSlowLogResponse):void} cb
     * @public
     */
    DescribeSlowLog(req, cb) {
        let resp = new DescribeSlowLogResponse();
        this.request("DescribeSlowLog", req, resp, cb);
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
     * 本接口(UpgradeDBInstance)用于升级包年包月的MongoDB云数据库实例，可以扩容内存、存储以及Oplog
     * @param {UpgradeDBInstanceRequest} req
     * @param {function(string, UpgradeDBInstanceResponse):void} cb
     * @public
     */
    UpgradeDBInstance(req, cb) {
        let resp = new UpgradeDBInstanceResponse();
        this.request("UpgradeDBInstance", req, resp, cb);
    }

    /**
     * 本接口(SetAutoRenew)用于设置包年包月云数据库实例的续费选项。
     * @param {SetAutoRenewRequest} req
     * @param {function(string, SetAutoRenewResponse):void} cb
     * @public
     */
    SetAutoRenew(req, cb) {
        let resp = new SetAutoRenewResponse();
        this.request("SetAutoRenew", req, resp, cb);
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
     * 本接口(SetPassword)用于设置云数据库账户的密码。


     * @param {SetPasswordRequest} req
     * @param {function(string, SetPasswordResponse):void} cb
     * @public
     */
    SetPassword(req, cb) {
        let resp = new SetPasswordResponse();
        this.request("SetPassword", req, resp, cb);
    }

    /**
     * 本接口(UpgradeDBInstanceHour)用于升级按量计费的MongoDB云数据库实例，可以扩容内存、存储以及oplog
     * @param {UpgradeDBInstanceHourRequest} req
     * @param {function(string, UpgradeDBInstanceHourResponse):void} cb
     * @public
     */
    UpgradeDBInstanceHour(req, cb) {
        let resp = new UpgradeDBInstanceHourResponse();
        this.request("UpgradeDBInstanceHour", req, resp, cb);
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


}
module.exports = MongodbClient;
