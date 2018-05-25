const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const CreateDBInstancesRequest = models.CreateDBInstancesRequest;
const InquiryPriceCreateDBInstancesResponse = models.InquiryPriceCreateDBInstancesResponse;
const DescribeRegionsRequest = models.DescribeRegionsRequest;
const SpecItemInfo = models.SpecItemInfo;
const DescribeDBInstancesRequest = models.DescribeDBInstancesRequest;
const DescribeZonesRequest = models.DescribeZonesRequest;
const RegionInfo = models.RegionInfo;
const DBInstance = models.DBInstance;
const InitDBInstancesRequest = models.InitDBInstancesRequest;
const DescribeDBInstancesResponse = models.DescribeDBInstancesResponse;
const SpecInfo = models.SpecInfo;
const DescribeProductConfigResponse = models.DescribeProductConfigResponse;
const DescribeProductConfigRequest = models.DescribeProductConfigRequest;
const InitDBInstancesResponse = models.InitDBInstancesResponse;
const Filter = models.Filter;
const DescribeRegionsResponse = models.DescribeRegionsResponse;
const DBInstanceNetInfo = models.DBInstanceNetInfo;
const DescribeDBInstanceAttributeResponse = models.DescribeDBInstanceAttributeResponse;
const InquiryPriceCreateDBInstancesRequest = models.InquiryPriceCreateDBInstancesRequest;
const DescribeZonesResponse = models.DescribeZonesResponse;
const DescribeDBInstanceAttributeRequest = models.DescribeDBInstanceAttributeRequest;
const CreateDBInstancesResponse = models.CreateDBInstancesResponse;
const ZoneInfo = models.ZoneInfo;


/**
 * postgres client
 * @class
 */
class PostgresClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("postgres.tencentcloudapi.com", "2017-03-12", credential, region, profile);
    }
    
    /**
     * 本接口 (InquiryPriceCreateDBInstances) 用于查询购买一个或多个实例的价格信息。
     * @param {InquiryPriceCreateDBInstancesRequest} req
     * @param {function(string, InquiryPriceCreateDBInstancesResponse):void} cb
     * @public
     */
    InquiryPriceCreateDBInstances(req, cb) {
        let resp = new InquiryPriceCreateDBInstancesResponse();
        this.request("InquiryPriceCreateDBInstances", req, resp, cb);
    }

    /**
     * 本接口 (InitDBInstances) 用于初始化云数据库PostgreSQL实例。
     * @param {InitDBInstancesRequest} req
     * @param {function(string, InitDBInstancesResponse):void} cb
     * @public
     */
    InitDBInstances(req, cb) {
        let resp = new InitDBInstancesResponse();
        this.request("InitDBInstances", req, resp, cb);
    }

    /**
     * 本接口 (DescribeRegions) 用于查询售卖地域信息。
     * @param {DescribeRegionsRequest} req
     * @param {function(string, DescribeRegionsResponse):void} cb
     * @public
     */
    DescribeRegions(req, cb) {
        let resp = new DescribeRegionsResponse();
        this.request("DescribeRegions", req, resp, cb);
    }

    /**
     * 本接口 (DescribeDBInstanceAttribute) 用于查询某个实例的详情信息。
     * @param {DescribeDBInstanceAttributeRequest} req
     * @param {function(string, DescribeDBInstanceAttributeResponse):void} cb
     * @public
     */
    DescribeDBInstanceAttribute(req, cb) {
        let resp = new DescribeDBInstanceAttributeResponse();
        this.request("DescribeDBInstanceAttribute", req, resp, cb);
    }

    /**
     * 本接口 (CreateDBInstances) 用于创建一个或者多个PostgreSQL实例。
     * @param {CreateDBInstancesRequest} req
     * @param {function(string, CreateDBInstancesResponse):void} cb
     * @public
     */
    CreateDBInstances(req, cb) {
        let resp = new CreateDBInstancesResponse();
        this.request("CreateDBInstances", req, resp, cb);
    }

    /**
     * 本接口 (DescribeProductConfig) 用于查询售卖规格配置。
     * @param {DescribeProductConfigRequest} req
     * @param {function(string, DescribeProductConfigResponse):void} cb
     * @public
     */
    DescribeProductConfig(req, cb) {
        let resp = new DescribeProductConfigResponse();
        this.request("DescribeProductConfig", req, resp, cb);
    }

    /**
     * 本接口 (DescribeDBInstances) 用于查询一个或多个实例的详细信息。
     * @param {DescribeDBInstancesRequest} req
     * @param {function(string, DescribeDBInstancesResponse):void} cb
     * @public
     */
    DescribeDBInstances(req, cb) {
        let resp = new DescribeDBInstancesResponse();
        this.request("DescribeDBInstances", req, resp, cb);
    }

    /**
     * 本接口 (DescribeZones) 用于查询支持的可用区信息。
     * @param {DescribeZonesRequest} req
     * @param {function(string, DescribeZonesResponse):void} cb
     * @public
     */
    DescribeZones(req, cb) {
        let resp = new DescribeZonesResponse();
        this.request("DescribeZones", req, resp, cb);
    }


}
module.exports = PostgresClient;
