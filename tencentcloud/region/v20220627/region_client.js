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
const RegionProduct = models.RegionProduct;
const DescribeProductsRequest = models.DescribeProductsRequest;
const DescribeProductsResponse = models.DescribeProductsResponse;
const ZoneInfo = models.ZoneInfo;
const DescribeZonesRequest = models.DescribeZonesRequest;
const DescribeZonesResponse = models.DescribeZonesResponse;
const RegionInfo = models.RegionInfo;
const DescribeRegionsResponse = models.DescribeRegionsResponse;
const DescribeRegionsRequest = models.DescribeRegionsRequest;


/**
 * region client
 * @class
 */
class RegionClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("region.tencentcloudapi.com", "2022-06-27", credential, region, profile);
    }
    
    /**
     * 本接口(DescribeProducts)用于查询各个支持地域列表查询的产品信息。
     * @param {DescribeProductsRequest} req
     * @param {function(string, DescribeProductsResponse):void} cb
     * @public
     */
    DescribeProducts(req, cb) {
        let resp = new DescribeProductsResponse();
        this.request("DescribeProducts", req, resp, cb);
    }

    /**
     * 本接口(DescribeRegions)用于查询各个产品支持地域信息。
     * @param {DescribeRegionsRequest} req
     * @param {function(string, DescribeRegionsResponse):void} cb
     * @public
     */
    DescribeRegions(req, cb) {
        let resp = new DescribeRegionsResponse();
        this.request("DescribeRegions", req, resp, cb);
    }

    /**
     * 本接口(DescribeZones)用于查询产品可用区信息。
     * @param {DescribeZonesRequest} req
     * @param {function(string, DescribeZonesResponse):void} cb
     * @public
     */
    DescribeZones(req, cb) {
        let resp = new DescribeZonesResponse();
        this.request("DescribeZones", req, resp, cb);
    }


}
module.exports = RegionClient;
