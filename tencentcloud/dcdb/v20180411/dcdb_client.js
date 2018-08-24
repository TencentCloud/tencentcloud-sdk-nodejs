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
const DescribeDBLogFilesRequest = models.DescribeDBLogFilesRequest;
const ZonesInfo = models.ZonesInfo;
const DescribeDCDBInstancesResponse = models.DescribeDCDBInstancesResponse;
const UpgradeDCDBInstanceResponse = models.UpgradeDCDBInstanceResponse;
const DescribeOrdersResponse = models.DescribeOrdersResponse;
const CreateDCDBInstanceRequest = models.CreateDCDBInstanceRequest;
const DescribeDCDBUpgradePriceRequest = models.DescribeDCDBUpgradePriceRequest;
const CreateDCDBInstanceResponse = models.CreateDCDBInstanceResponse;
const AddShardConfig = models.AddShardConfig;
const DescribeDCDBPriceResponse = models.DescribeDCDBPriceResponse;
const DescribeDCDBRenewalPriceRequest = models.DescribeDCDBRenewalPriceRequest;
const DescribeDCDBPriceRequest = models.DescribeDCDBPriceRequest;
const SplitShardConfig = models.SplitShardConfig;
const RegionInfo = models.RegionInfo;
const RenewDCDBInstanceResponse = models.RenewDCDBInstanceResponse;
const DescribeShardSpecResponse = models.DescribeShardSpecResponse;
const UpgradeDCDBInstanceRequest = models.UpgradeDCDBInstanceRequest;
const DescribeDCDBRenewalPriceResponse = models.DescribeDCDBRenewalPriceResponse;
const DescribeDCDBUpgradePriceResponse = models.DescribeDCDBUpgradePriceResponse;
const DescribeDCDBSaleInfoRequest = models.DescribeDCDBSaleInfoRequest;
const ExpandShardConfig = models.ExpandShardConfig;
const RenewDCDBInstanceRequest = models.RenewDCDBInstanceRequest;
const ShardZoneChooseInfo = models.ShardZoneChooseInfo;
const ShardInfo = models.ShardInfo;
const SpecConfig = models.SpecConfig;
const DescribeDCDBInstancesRequest = models.DescribeDCDBInstancesRequest;
const DescribeDCDBSaleInfoResponse = models.DescribeDCDBSaleInfoResponse;
const Deal = models.Deal;
const DescribeShardSpecRequest = models.DescribeShardSpecRequest;
const SpecConfigInfo = models.SpecConfigInfo;
const DescribeOrdersRequest = models.DescribeOrdersRequest;
const DescribeDBLogFilesResponse = models.DescribeDBLogFilesResponse;
const DCDBInstanceInfo = models.DCDBInstanceInfo;


/**
 * dcdb client
 * @class
 */
class DcdbClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("dcdb.tencentcloudapi.com", "2018-04-11", credential, region, profile);
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
