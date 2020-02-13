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
const StorageInfo = models.StorageInfo;
const IsolateMysqlInstanceRequest = models.IsolateMysqlInstanceRequest;
const FunctionInfo = models.FunctionInfo;
const CreateMysqlInstanceRequest = models.CreateMysqlInstanceRequest;
const CommonServiceAPIResponse = models.CommonServiceAPIResponse;
const CreateMysqlInstanceResponse = models.CreateMysqlInstanceResponse;
const ModifyDatabaseACLRequest = models.ModifyDatabaseACLRequest;
const DescribeEnvsRequest = models.DescribeEnvsRequest;
const ModifyDatabaseACLResponse = models.ModifyDatabaseACLResponse;
const StaticStorageInfo = models.StaticStorageInfo;
const ModifyEnvResponse = models.ModifyEnvResponse;
const LogServiceInfo = models.LogServiceInfo;
const DatabasesInfo = models.DatabasesInfo;
const DescribeDatabaseACLRequest = models.DescribeDatabaseACLRequest;
const OfflineMysqlInstanceRequest = models.OfflineMysqlInstanceRequest;
const OfflineMysqlInstanceResponse = models.OfflineMysqlInstanceResponse;
const UpgradeMysqlInstanceResponse = models.UpgradeMysqlInstanceResponse;
const DescribeDatabaseACLResponse = models.DescribeDatabaseACLResponse;
const EnvInfo = models.EnvInfo;
const ModifyEnvRequest = models.ModifyEnvRequest;
const IsolateMysqlInstanceResponse = models.IsolateMysqlInstanceResponse;
const CommonServiceAPIRequest = models.CommonServiceAPIRequest;
const DescribeEnvsResponse = models.DescribeEnvsResponse;
const UpgradeMysqlInstanceRequest = models.UpgradeMysqlInstanceRequest;


/**
 * tcb client
 * @class
 */
class TcbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tcb.tencentcloudapi.com", "2018-06-08", credential, region, profile);
    }
    
    /**
     * 更新环境信息
     * @param {ModifyEnvRequest} req
     * @param {function(string, ModifyEnvResponse):void} cb
     * @public
     */
    ModifyEnv(req, cb) {
        let resp = new ModifyEnvResponse();
        this.request("ModifyEnv", req, resp, cb);
    }

    /**
     * 获取环境列表，含环境下的各个资源信息。尤其是各资源的唯一标识，是请求各资源的关键参数
     * @param {DescribeEnvsRequest} req
     * @param {function(string, DescribeEnvsResponse):void} cb
     * @public
     */
    DescribeEnvs(req, cb) {
        let resp = new DescribeEnvsResponse();
        this.request("DescribeEnvs", req, resp, cb);
    }

    /**
     * 创建mysql实例
     * @param {CreateMysqlInstanceRequest} req
     * @param {function(string, CreateMysqlInstanceResponse):void} cb
     * @public
     */
    CreateMysqlInstance(req, cb) {
        let resp = new CreateMysqlInstanceResponse();
        this.request("CreateMysqlInstance", req, resp, cb);
    }

    /**
     * 下线mysql实例
     * @param {OfflineMysqlInstanceRequest} req
     * @param {function(string, OfflineMysqlInstanceResponse):void} cb
     * @public
     */
    OfflineMysqlInstance(req, cb) {
        let resp = new OfflineMysqlInstanceResponse();
        this.request("OfflineMysqlInstance", req, resp, cb);
    }

    /**
     * 修改数据库权限
     * @param {ModifyDatabaseACLRequest} req
     * @param {function(string, ModifyDatabaseACLResponse):void} cb
     * @public
     */
    ModifyDatabaseACL(req, cb) {
        let resp = new ModifyDatabaseACLResponse();
        this.request("ModifyDatabaseACL", req, resp, cb);
    }

    /**
     * 升级mysql实例
     * @param {UpgradeMysqlInstanceRequest} req
     * @param {function(string, UpgradeMysqlInstanceResponse):void} cb
     * @public
     */
    UpgradeMysqlInstance(req, cb) {
        let resp = new UpgradeMysqlInstanceResponse();
        this.request("UpgradeMysqlInstance", req, resp, cb);
    }

    /**
     * TCB云API统一入口
     * @param {CommonServiceAPIRequest} req
     * @param {function(string, CommonServiceAPIResponse):void} cb
     * @public
     */
    CommonServiceAPI(req, cb) {
        let resp = new CommonServiceAPIResponse();
        this.request("CommonServiceAPI", req, resp, cb);
    }

    /**
     * 获取数据库权限
     * @param {DescribeDatabaseACLRequest} req
     * @param {function(string, DescribeDatabaseACLResponse):void} cb
     * @public
     */
    DescribeDatabaseACL(req, cb) {
        let resp = new DescribeDatabaseACLResponse();
        this.request("DescribeDatabaseACL", req, resp, cb);
    }

    /**
     * 隔离mysql实例
     * @param {IsolateMysqlInstanceRequest} req
     * @param {function(string, IsolateMysqlInstanceResponse):void} cb
     * @public
     */
    IsolateMysqlInstance(req, cb) {
        let resp = new IsolateMysqlInstanceResponse();
        this.request("IsolateMysqlInstance", req, resp, cb);
    }


}
module.exports = TcbClient;
