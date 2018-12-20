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
const TerminateDBInstanceRequest = models.TerminateDBInstanceRequest;
const CreateDBInstanceRequest = models.CreateDBInstanceRequest;
const CreateDBInstanceResponse = models.CreateDBInstanceResponse;
const UpgradeDBInstanceHourResponse = models.UpgradeDBInstanceHourResponse;
const UpgradeDBInstanceHourRequest = models.UpgradeDBInstanceHourRequest;
const UpgradeDBInstanceRequest = models.UpgradeDBInstanceRequest;
const CreateDBInstanceHourResponse = models.CreateDBInstanceHourResponse;
const CreateDBInstanceHourRequest = models.CreateDBInstanceHourRequest;
const TerminateDBInstanceResponse = models.TerminateDBInstanceResponse;
const UpgradeDBInstanceResponse = models.UpgradeDBInstanceResponse;


/**
 * mongodb client
 * @class
 */
class MongodbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("mongodb.tencentcloudapi.com", "2018-04-08", credential, region, profile);
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
     * 本接口(CreateDBInstanceHour)用于创建按量计费的MongoDB云数据库实例（包括主实例、灾备实例和只读实例），可通过传入实例规格、实例类型、MongoDB版本、购买时长和数量等信息创建云数据库实例。
     * @param {CreateDBInstanceHourRequest} req
     * @param {function(string, CreateDBInstanceHourResponse):void} cb
     * @public
     */
    CreateDBInstanceHour(req, cb) {
        let resp = new CreateDBInstanceHourResponse();
        this.request("CreateDBInstanceHour", req, resp, cb);
    }


}
module.exports = MongodbClient;
