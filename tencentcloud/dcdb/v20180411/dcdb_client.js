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
const InitDCDBInstancesResponse = models.InitDCDBInstancesResponse;
const UpgradeDCDBInstanceResponse = models.UpgradeDCDBInstanceResponse;
const DescribeAccountPrivilegesResponse = models.DescribeAccountPrivilegesResponse;
const DescribeDatabasesRequest = models.DescribeDatabasesRequest;
const ParamDesc = models.ParamDesc;
const DescribeDBParametersRequest = models.DescribeDBParametersRequest;
const DescribeAccountsRequest = models.DescribeAccountsRequest;
const OpenDBExtranetAccessRequest = models.OpenDBExtranetAccessRequest;
const DescribeDCDBPriceResponse = models.DescribeDCDBPriceResponse;
const RenewDCDBInstanceResponse = models.RenewDCDBInstanceResponse;
const DescribeDBSyncModeResponse = models.DescribeDBSyncModeResponse;
const DescribeDCDBUpgradePriceResponse = models.DescribeDCDBUpgradePriceResponse;
const CreateAccountRequest = models.CreateAccountRequest;
const DescribeDBParametersResponse = models.DescribeDBParametersResponse;
const CloneAccountResponse = models.CloneAccountResponse;
const ModifyAccountDescriptionResponse = models.ModifyAccountDescriptionResponse;
const CreateDCDBInstanceResponse = models.CreateDCDBInstanceResponse;
const ParamConstraint = models.ParamConstraint;
const ModifyDBInstancesProjectResponse = models.ModifyDBInstancesProjectResponse;
const DatabaseView = models.DatabaseView;
const DescribeDBLogFilesRequest = models.DescribeDBLogFilesRequest;
const DescribeOrdersResponse = models.DescribeOrdersResponse;
const ResetAccountPasswordRequest = models.ResetAccountPasswordRequest;
const CopyAccountPrivilegesResponse = models.CopyAccountPrivilegesResponse;
const CloneAccountRequest = models.CloneAccountRequest;
const DescribeDCDBRenewalPriceRequest = models.DescribeDCDBRenewalPriceRequest;
const ParamModifyResult = models.ParamModifyResult;
const DescribeDCDBPriceRequest = models.DescribeDCDBPriceRequest;
const DatabaseFunction = models.DatabaseFunction;
const DescribeSqlLogsRequest = models.DescribeSqlLogsRequest;
const ResetAccountPasswordResponse = models.ResetAccountPasswordResponse;
const DescribeDCDBSaleInfoRequest = models.DescribeDCDBSaleInfoRequest;
const ExpandShardConfig = models.ExpandShardConfig;
const RenewDCDBInstanceRequest = models.RenewDCDBInstanceRequest;
const ShardZoneChooseInfo = models.ShardZoneChooseInfo;
const DatabaseTable = models.DatabaseTable;
const Deal = models.Deal;
const GrantAccountPrivilegesRequest = models.GrantAccountPrivilegesRequest;
const DescribeShardSpecRequest = models.DescribeShardSpecRequest;
const DescribeDCDBShardsRequest = models.DescribeDCDBShardsRequest;
const DBParamValue = models.DBParamValue;
const SpecConfigInfo = models.SpecConfigInfo;
const ModifyDBParametersRequest = models.ModifyDBParametersRequest;
const DCDBInstanceInfo = models.DCDBInstanceInfo;
const ZonesInfo = models.ZonesInfo;
const ModifyDBParametersResponse = models.ModifyDBParametersResponse;
const DCDBShardInfo = models.DCDBShardInfo;
const CopyAccountPrivilegesRequest = models.CopyAccountPrivilegesRequest;
const DescribeDatabaseTableRequest = models.DescribeDatabaseTableRequest;
const OpenDBExtranetAccessResponse = models.OpenDBExtranetAccessResponse;
const DescribeDatabaseObjectsResponse = models.DescribeDatabaseObjectsResponse;
const TableColumn = models.TableColumn;
const SplitShardConfig = models.SplitShardConfig;
const DescribeDCDBRenewalPriceResponse = models.DescribeDCDBRenewalPriceResponse;
const DescribeShardSpecResponse = models.DescribeShardSpecResponse;
const DescribeDCDBShardsResponse = models.DescribeDCDBShardsResponse;
const Database = models.Database;
const GrantAccountPrivilegesResponse = models.GrantAccountPrivilegesResponse;
const ShardInfo = models.ShardInfo;
const SpecConfig = models.SpecConfig;
const DescribeDCDBSaleInfoResponse = models.DescribeDCDBSaleInfoResponse;
const DescribeDBSyncModeRequest = models.DescribeDBSyncModeRequest;
const CloseDBExtranetAccessResponse = models.CloseDBExtranetAccessResponse;
const ModifyAccountDescriptionRequest = models.ModifyAccountDescriptionRequest;
const DescribeDatabasesResponse = models.DescribeDatabasesResponse;
const DescribeOrdersRequest = models.DescribeOrdersRequest;
const DescribeDBLogFilesResponse = models.DescribeDBLogFilesResponse;
const CloseDBExtranetAccessRequest = models.CloseDBExtranetAccessRequest;
const InitDCDBInstancesRequest = models.InitDCDBInstancesRequest;
const DescribeSqlLogsResponse = models.DescribeSqlLogsResponse;
const DeleteAccountRequest = models.DeleteAccountRequest;
const DescribeDCDBInstancesResponse = models.DescribeDCDBInstancesResponse;
const CreateDCDBInstanceRequest = models.CreateDCDBInstanceRequest;
const DescribeDCDBUpgradePriceRequest = models.DescribeDCDBUpgradePriceRequest;
const DatabaseProcedure = models.DatabaseProcedure;
const AddShardConfig = models.AddShardConfig;
const ModifyDBSyncModeRequest = models.ModifyDBSyncModeRequest;
const CreateAccountResponse = models.CreateAccountResponse;
const RegionInfo = models.RegionInfo;
const DescribeDatabaseObjectsRequest = models.DescribeDatabaseObjectsRequest;
const UpgradeDCDBInstanceRequest = models.UpgradeDCDBInstanceRequest;
const ConstraintRange = models.ConstraintRange;
const LogFileInfo = models.LogFileInfo;
const DBAccount = models.DBAccount;
const DescribeDatabaseTableResponse = models.DescribeDatabaseTableResponse;
const DescribeAccountPrivilegesRequest = models.DescribeAccountPrivilegesRequest;
const SqlLogItem = models.SqlLogItem;
const DescribeAccountsResponse = models.DescribeAccountsResponse;
const DescribeDCDBInstancesRequest = models.DescribeDCDBInstancesRequest;
const ModifyDBInstancesProjectRequest = models.ModifyDBInstancesProjectRequest;
const ModifyDBSyncModeResponse = models.ModifyDBSyncModeResponse;
const DeleteAccountResponse = models.DeleteAccountResponse;


/**
 * dcdb client
 * @class
 */
class DcdbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dcdb.tencentcloudapi.com", "2018-04-11", credential, region, profile);
    }
    
    /**
     * 本接口（DescribeAccountPrivileges）用于查询云数据库账号权限。
注意：注意：相同用户名，不同Host是不同的账号。
     * @param {DescribeAccountPrivilegesRequest} req
     * @param {function(string, DescribeAccountPrivilegesResponse):void} cb
     * @public
     */
    DescribeAccountPrivileges(req, cb) {
        let resp = new DescribeAccountPrivilegesResponse();
        this.request("DescribeAccountPrivileges", req, resp, cb);
    }

    /**
     * 本接口（DescribeOrders）用于查询分布式数据库订单信息。传入订单Id来查询订单关联的分布式数据库实例，和对应的任务流程ID。
     * @param {DescribeOrdersRequest} req
     * @param {function(string, DescribeOrdersResponse):void} cb
     * @public
     */
    DescribeOrders(req, cb) {
        let resp = new DescribeOrdersResponse();
        this.request("DescribeOrders", req, resp, cb);
    }

    /**
     * 本接口（DescribeDatabaseObjects）用于查询云数据库实例的数据库中的对象列表，包含表、存储过程、视图和函数。
     * @param {DescribeDatabaseObjectsRequest} req
     * @param {function(string, DescribeDatabaseObjectsResponse):void} cb
     * @public
     */
    DescribeDatabaseObjects(req, cb) {
        let resp = new DescribeDatabaseObjectsResponse();
        this.request("DescribeDatabaseObjects", req, resp, cb);
    }

    /**
     * 查询可创建的分布式数据库可售卖的分片规格配置。
     * @param {DescribeShardSpecRequest} req
     * @param {function(string, DescribeShardSpecResponse):void} cb
     * @public
     */
    DescribeShardSpec(req, cb) {
        let resp = new DescribeShardSpecResponse();
        this.request("DescribeShardSpec", req, resp, cb);
    }

    /**
     * 本接口（DescribeDCDBUpgradePrice）用于查询升级分布式数据库实例价格。
     * @param {DescribeDCDBUpgradePriceRequest} req
     * @param {function(string, DescribeDCDBUpgradePriceResponse):void} cb
     * @public
     */
    DescribeDCDBUpgradePrice(req, cb) {
        let resp = new DescribeDCDBUpgradePriceResponse();
        this.request("DescribeDCDBUpgradePrice", req, resp, cb);
    }

    /**
     * 本接口（ModifyAccountDescription）用于修改云数据库账号备注。
注意：相同用户名，不同Host是不同的账号。
     * @param {ModifyAccountDescriptionRequest} req
     * @param {function(string, ModifyAccountDescriptionResponse):void} cb
     * @public
     */
    ModifyAccountDescription(req, cb) {
        let resp = new ModifyAccountDescriptionResponse();
        this.request("ModifyAccountDescription", req, resp, cb);
    }

    /**
     * 本接口（ResetAccountPassword）用于重置云数据库账号的密码。
注意：相同用户名，不同Host是不同的账号。
     * @param {ResetAccountPasswordRequest} req
     * @param {function(string, ResetAccountPasswordResponse):void} cb
     * @public
     */
    ResetAccountPassword(req, cb) {
        let resp = new ResetAccountPasswordResponse();
        this.request("ResetAccountPassword", req, resp, cb);
    }

    /**
     * 本接口（DescribeDCDBPrice）用于在购买实例前，查询实例的价格。
     * @param {DescribeDCDBPriceRequest} req
     * @param {function(string, DescribeDCDBPriceResponse):void} cb
     * @public
     */
    DescribeDCDBPrice(req, cb) {
        let resp = new DescribeDCDBPriceResponse();
        this.request("DescribeDCDBPrice", req, resp, cb);
    }

    /**
     * 本接口(ModifyDBParameters)用于修改数据库参数。
     * @param {ModifyDBParametersRequest} req
     * @param {function(string, ModifyDBParametersResponse):void} cb
     * @public
     */
    ModifyDBParameters(req, cb) {
        let resp = new ModifyDBParametersResponse();
        this.request("ModifyDBParameters", req, resp, cb);
    }

    /**
     * 本接口(DescribeDCDBSaleInfo)用于查询分布式数据库可售卖的地域和可用区信息。
     * @param {DescribeDCDBSaleInfoRequest} req
     * @param {function(string, DescribeDCDBSaleInfoResponse):void} cb
     * @public
     */
    DescribeDCDBSaleInfo(req, cb) {
        let resp = new DescribeDCDBSaleInfoResponse();
        this.request("DescribeDCDBSaleInfo", req, resp, cb);
    }

    /**
     * 本接口（OpenDBExtranetAccess）用于开通云数据库实例的外网访问。开通外网访问后，您可通过外网域名和端口访问实例，可使用查询实例列表接口获取外网域名和端口信息。
     * @param {OpenDBExtranetAccessRequest} req
     * @param {function(string, OpenDBExtranetAccessResponse):void} cb
     * @public
     */
    OpenDBExtranetAccess(req, cb) {
        let resp = new OpenDBExtranetAccessResponse();
        this.request("OpenDBExtranetAccess", req, resp, cb);
    }

    /**
     * 本接口(InitDCDBInstances)用于初始化云数据库实例，包括设置默认字符集、表名大小写敏感等。
     * @param {InitDCDBInstancesRequest} req
     * @param {function(string, InitDCDBInstancesResponse):void} cb
     * @public
     */
    InitDCDBInstances(req, cb) {
        let resp = new InitDCDBInstancesResponse();
        this.request("InitDCDBInstances", req, resp, cb);
    }

    /**
     * 本接口（DescribeAccounts）用于查询指定云数据库实例的账号列表。
     * @param {DescribeAccountsRequest} req
     * @param {function(string, DescribeAccountsResponse):void} cb
     * @public
     */
    DescribeAccounts(req, cb) {
        let resp = new DescribeAccountsResponse();
        this.request("DescribeAccounts", req, resp, cb);
    }

    /**
     * 本接口（GrantAccountPrivileges）用于给云数据库账号赋权。
注意：相同用户名，不同Host是不同的账号。
     * @param {GrantAccountPrivilegesRequest} req
     * @param {function(string, GrantAccountPrivilegesResponse):void} cb
     * @public
     */
    GrantAccountPrivileges(req, cb) {
        let resp = new GrantAccountPrivilegesResponse();
        this.request("GrantAccountPrivileges", req, resp, cb);
    }

    /**
     * 本接口（RenewDCDBInstance）用于续费分布式数据库实例。
     * @param {RenewDCDBInstanceRequest} req
     * @param {function(string, RenewDCDBInstanceResponse):void} cb
     * @public
     */
    RenewDCDBInstance(req, cb) {
        let resp = new RenewDCDBInstanceResponse();
        this.request("RenewDCDBInstance", req, resp, cb);
    }

    /**
     * 本接口（DeleteAccount）用于删除云数据库账号。用户名+host唯一确定一个账号。
     * @param {DeleteAccountRequest} req
     * @param {function(string, DeleteAccountResponse):void} cb
     * @public
     */
    DeleteAccount(req, cb) {
        let resp = new DeleteAccountResponse();
        this.request("DeleteAccount", req, resp, cb);
    }

    /**
     * 本接口(DescribeDBParameters)用于获取数据库的当前参数设置。
     * @param {DescribeDBParametersRequest} req
     * @param {function(string, DescribeDBParametersResponse):void} cb
     * @public
     */
    DescribeDBParameters(req, cb) {
        let resp = new DescribeDBParametersResponse();
        this.request("DescribeDBParameters", req, resp, cb);
    }

    /**
     * 本接口（ModifyDBInstancesProject）用于修改云数据库实例所属项目。
     * @param {ModifyDBInstancesProjectRequest} req
     * @param {function(string, ModifyDBInstancesProjectResponse):void} cb
     * @public
     */
    ModifyDBInstancesProject(req, cb) {
        let resp = new ModifyDBInstancesProjectResponse();
        this.request("ModifyDBInstancesProject", req, resp, cb);
    }

    /**
     * 本接口（DescribeSqlLogs）用于获取实例SQL日志。
     * @param {DescribeSqlLogsRequest} req
     * @param {function(string, DescribeSqlLogsResponse):void} cb
     * @public
     */
    DescribeSqlLogs(req, cb) {
        let resp = new DescribeSqlLogsResponse();
        this.request("DescribeSqlLogs", req, resp, cb);
    }

    /**
     * 本接口(DescribeDBLogFiles)用于获取数据库的各种日志列表，包括冷备、binlog、errlog和slowlog。
     * @param {DescribeDBLogFilesRequest} req
     * @param {function(string, DescribeDBLogFilesResponse):void} cb
     * @public
     */
    DescribeDBLogFiles(req, cb) {
        let resp = new DescribeDBLogFilesResponse();
        this.request("DescribeDBLogFiles", req, resp, cb);
    }

    /**
     * 本接口（DescribeDBSyncMode）用于查询云数据库实例的同步模式。
     * @param {DescribeDBSyncModeRequest} req
     * @param {function(string, DescribeDBSyncModeResponse):void} cb
     * @public
     */
    DescribeDBSyncMode(req, cb) {
        let resp = new DescribeDBSyncModeResponse();
        this.request("DescribeDBSyncMode", req, resp, cb);
    }

    /**
     * 本接口（CreateAccount）用于创建云数据库账号。一个实例可以创建多个不同的账号，相同的用户名+不同的host是不同的账号。
     * @param {CreateAccountRequest} req
     * @param {function(string, CreateAccountResponse):void} cb
     * @public
     */
    CreateAccount(req, cb) {
        let resp = new CreateAccountResponse();
        this.request("CreateAccount", req, resp, cb);
    }

    /**
     * 本接口（UpgradeDCDBInstance）用于升级分布式数据库实例。本接口完成下单和支付两个动作，如果发生支付失败的错误，调用用户账户相关接口中的支付订单接口（PayDeals）重新支付即可。
     * @param {UpgradeDCDBInstanceRequest} req
     * @param {function(string, UpgradeDCDBInstanceResponse):void} cb
     * @public
     */
    UpgradeDCDBInstance(req, cb) {
        let resp = new UpgradeDCDBInstanceResponse();
        this.request("UpgradeDCDBInstance", req, resp, cb);
    }

    /**
     * 本接口（ModifyDBSyncMode）用于修改云数据库实例的同步模式。
     * @param {ModifyDBSyncModeRequest} req
     * @param {function(string, ModifyDBSyncModeResponse):void} cb
     * @public
     */
    ModifyDBSyncMode(req, cb) {
        let resp = new ModifyDBSyncModeResponse();
        this.request("ModifyDBSyncMode", req, resp, cb);
    }

    /**
     * 本接口(CloseDBExtranetAccess)用于关闭云数据库实例的外网访问。关闭外网访问后，外网地址将不可访问，查询实例列表接口将不返回对应实例的外网域名和端口信息。
     * @param {CloseDBExtranetAccessRequest} req
     * @param {function(string, CloseDBExtranetAccessResponse):void} cb
     * @public
     */
    CloseDBExtranetAccess(req, cb) {
        let resp = new CloseDBExtranetAccessResponse();
        this.request("CloseDBExtranetAccess", req, resp, cb);
    }

    /**
     * 查询云数据库实例列表，支持通过项目ID、实例ID、内网地址、实例名称等来筛选实例。
如果不指定任何筛选条件，则默认返回10条实例记录，单次请求最多支持返回100条实例记录。
     * @param {DescribeDCDBInstancesRequest} req
     * @param {function(string, DescribeDCDBInstancesResponse):void} cb
     * @public
     */
    DescribeDCDBInstances(req, cb) {
        let resp = new DescribeDCDBInstancesResponse();
        this.request("DescribeDCDBInstances", req, resp, cb);
    }

    /**
     * 本接口（CopyAccountPrivileges）用于复制云数据库账号的权限。
注意：相同用户名，不同Host是不同的账号，Readonly属性相同的账号之间才能复制权限。
     * @param {CopyAccountPrivilegesRequest} req
     * @param {function(string, CopyAccountPrivilegesResponse):void} cb
     * @public
     */
    CopyAccountPrivileges(req, cb) {
        let resp = new CopyAccountPrivilegesResponse();
        this.request("CopyAccountPrivileges", req, resp, cb);
    }

    /**
     * 本接口（DescribeDCDBShards）用于查询云数据库实例的分片信息。
     * @param {DescribeDCDBShardsRequest} req
     * @param {function(string, DescribeDCDBShardsResponse):void} cb
     * @public
     */
    DescribeDCDBShards(req, cb) {
        let resp = new DescribeDCDBShardsResponse();
        this.request("DescribeDCDBShards", req, resp, cb);
    }

    /**
     * 本接口（CreateDCDBInstance）用于创建包年包月的云数据库实例，可通过传入实例规格、数据库版本号、购买时长等信息创建云数据库实例。
     * @param {CreateDCDBInstanceRequest} req
     * @param {function(string, CreateDCDBInstanceResponse):void} cb
     * @public
     */
    CreateDCDBInstance(req, cb) {
        let resp = new CreateDCDBInstanceResponse();
        this.request("CreateDCDBInstance", req, resp, cb);
    }

    /**
     * 本接口（DescribeDatabases）用于查询云数据库实例的数据库列表。
     * @param {DescribeDatabasesRequest} req
     * @param {function(string, DescribeDatabasesResponse):void} cb
     * @public
     */
    DescribeDatabases(req, cb) {
        let resp = new DescribeDatabasesResponse();
        this.request("DescribeDatabases", req, resp, cb);
    }

    /**
     * 本接口（DescribeDatabaseObjects）用于查询云数据库实例的表信息。
     * @param {DescribeDatabaseTableRequest} req
     * @param {function(string, DescribeDatabaseTableResponse):void} cb
     * @public
     */
    DescribeDatabaseTable(req, cb) {
        let resp = new DescribeDatabaseTableResponse();
        this.request("DescribeDatabaseTable", req, resp, cb);
    }

    /**
     * 本接口（CloneAccount）用于克隆实例账户。
     * @param {CloneAccountRequest} req
     * @param {function(string, CloneAccountResponse):void} cb
     * @public
     */
    CloneAccount(req, cb) {
        let resp = new CloneAccountResponse();
        this.request("CloneAccount", req, resp, cb);
    }

    /**
     * 本接口（DescribeDCDBRenewalPrice）用于在续费分布式数据库实例时，查询续费的价格。
     * @param {DescribeDCDBRenewalPriceRequest} req
     * @param {function(string, DescribeDCDBRenewalPriceResponse):void} cb
     * @public
     */
    DescribeDCDBRenewalPrice(req, cb) {
        let resp = new DescribeDCDBRenewalPriceResponse();
        this.request("DescribeDCDBRenewalPrice", req, resp, cb);
    }


}
module.exports = DcdbClient;
