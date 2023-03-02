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
const CreateBPFakeAPPResponse = models.CreateBPFakeAPPResponse;
const DeleteBPWhiteListResponse = models.DeleteBPWhiteListResponse;
const DescribeBPBrandsResponse = models.DescribeBPBrandsResponse;
const DescribeBPBrandsRequest = models.DescribeBPBrandsRequest;
const CreateBPBrandRequest = models.CreateBPBrandRequest;
const DescribeBPFakeURLsRequest = models.DescribeBPFakeURLsRequest;
const FakeAPPData = models.FakeAPPData;
const WhiteListData = models.WhiteListData;
const TrademarkData = models.TrademarkData;
const DescribeBPFakeURLsResponse = models.DescribeBPFakeURLsResponse;
const CreateBPFakeURLRequest = models.CreateBPFakeURLRequest;
const CreateBPFakeAPPListResponse = models.CreateBPFakeAPPListResponse;
const DescribeBPWhiteListsResponse = models.DescribeBPWhiteListsResponse;
const CreateBPFakeAPPListRequest = models.CreateBPFakeAPPListRequest;
const Filter = models.Filter;
const CreateBPWhiteListResponse = models.CreateBPWhiteListResponse;
const ServiceData = models.ServiceData;
const FakeURLData = models.FakeURLData;
const DeleteBPWhiteListRequest = models.DeleteBPWhiteListRequest;
const DescribeBPWhiteListsRequest = models.DescribeBPWhiteListsRequest;
const CreateBPFakeURLsResponse = models.CreateBPFakeURLsResponse;
const DescribeBPFakeAPPListRequest = models.DescribeBPFakeAPPListRequest;
const CreateBPFakeAPPRequest = models.CreateBPFakeAPPRequest;
const BrandData = models.BrandData;
const CreateBPBrandResponse = models.CreateBPBrandResponse;
const CreateBPFakeURLResponse = models.CreateBPFakeURLResponse;
const CreateBPWhiteListRequest = models.CreateBPWhiteListRequest;
const CreateBPFakeURLsRequest = models.CreateBPFakeURLsRequest;
const DescribeBPFakeAPPListResponse = models.DescribeBPFakeAPPListResponse;


/**
 * bma client
 * @class
 */
class BmaClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("bma.tencentcloudapi.com", "2022-11-15", credential, region, profile);
    }
    
    /**
     * 查询白名单列表
     * @param {DescribeBPWhiteListsRequest} req
     * @param {function(string, DescribeBPWhiteListsResponse):void} cb
     * @public
     */
    DescribeBPWhiteLists(req, cb) {
        let resp = new DescribeBPWhiteListsResponse();
        this.request("DescribeBPWhiteLists", req, resp, cb);
    }

    /**
     * 添加白名单
     * @param {CreateBPWhiteListRequest} req
     * @param {function(string, CreateBPWhiteListResponse):void} cb
     * @public
     */
    CreateBPWhiteList(req, cb) {
        let resp = new CreateBPWhiteListResponse();
        this.request("CreateBPWhiteList", req, resp, cb);
    }

    /**
     * 仿冒应用举报
     * @param {CreateBPFakeAPPRequest} req
     * @param {function(string, CreateBPFakeAPPResponse):void} cb
     * @public
     */
    CreateBPFakeAPP(req, cb) {
        let resp = new CreateBPFakeAPPResponse();
        this.request("CreateBPFakeAPP", req, resp, cb);
    }

    /**
     * 删除白名单
     * @param {DeleteBPWhiteListRequest} req
     * @param {function(string, DeleteBPWhiteListResponse):void} cb
     * @public
     */
    DeleteBPWhiteList(req, cb) {
        let resp = new DeleteBPWhiteListResponse();
        this.request("DeleteBPWhiteList", req, resp, cb);
    }

    /**
     * 批量仿冒网址举报
     * @param {CreateBPFakeURLsRequest} req
     * @param {function(string, CreateBPFakeURLsResponse):void} cb
     * @public
     */
    CreateBPFakeURLs(req, cb) {
        let resp = new CreateBPFakeURLsResponse();
        this.request("CreateBPFakeURLs", req, resp, cb);
    }

    /**
     * 添加品牌
     * @param {CreateBPBrandRequest} req
     * @param {function(string, CreateBPBrandResponse):void} cb
     * @public
     */
    CreateBPBrand(req, cb) {
        let resp = new CreateBPBrandResponse();
        this.request("CreateBPBrand", req, resp, cb);
    }

    /**
     * 查询品牌列表
     * @param {DescribeBPBrandsRequest} req
     * @param {function(string, DescribeBPBrandsResponse):void} cb
     * @public
     */
    DescribeBPBrands(req, cb) {
        let resp = new DescribeBPBrandsResponse();
        this.request("DescribeBPBrands", req, resp, cb);
    }

    /**
     * 批量仿冒应用举报
     * @param {CreateBPFakeAPPListRequest} req
     * @param {function(string, CreateBPFakeAPPListResponse):void} cb
     * @public
     */
    CreateBPFakeAPPList(req, cb) {
        let resp = new CreateBPFakeAPPListResponse();
        this.request("CreateBPFakeAPPList", req, resp, cb);
    }

    /**
     * 查询仿冒应用列表
     * @param {DescribeBPFakeAPPListRequest} req
     * @param {function(string, DescribeBPFakeAPPListResponse):void} cb
     * @public
     */
    DescribeBPFakeAPPList(req, cb) {
        let resp = new DescribeBPFakeAPPListResponse();
        this.request("DescribeBPFakeAPPList", req, resp, cb);
    }

    /**
     * 查询仿冒网址列表
     * @param {DescribeBPFakeURLsRequest} req
     * @param {function(string, DescribeBPFakeURLsResponse):void} cb
     * @public
     */
    DescribeBPFakeURLs(req, cb) {
        let resp = new DescribeBPFakeURLsResponse();
        this.request("DescribeBPFakeURLs", req, resp, cb);
    }

    /**
     * 仿冒网址举报
     * @param {CreateBPFakeURLRequest} req
     * @param {function(string, CreateBPFakeURLResponse):void} cb
     * @public
     */
    CreateBPFakeURL(req, cb) {
        let resp = new CreateBPFakeURLResponse();
        this.request("CreateBPFakeURL", req, resp, cb);
    }


}
module.exports = BmaClient;
