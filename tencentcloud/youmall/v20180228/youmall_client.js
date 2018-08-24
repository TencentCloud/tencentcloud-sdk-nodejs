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
const DescribePersonVisitInfoRequest = models.DescribePersonVisitInfoRequest;
const DescribeZoneTrafficInfoResponse = models.DescribeZoneTrafficInfoResponse;
const HourTrafficInfoDetail = models.HourTrafficInfoDetail;
const ZoneTrafficInfo = models.ZoneTrafficInfo;
const DescribePersonInfoResponse = models.DescribePersonInfoResponse;
const DescribeShopTrafficInfoRequest = models.DescribeShopTrafficInfoRequest;
const DescribeShopInfoResponse = models.DescribeShopInfoResponse;
const DescribeZoneTrafficInfoRequest = models.DescribeZoneTrafficInfoRequest;
const RegisterCallbackRequest = models.RegisterCallbackRequest;
const PersonVisitInfo = models.PersonVisitInfo;
const DescribeShopInfoRequest = models.DescribeShopInfoRequest;
const DescribePersonInfoRequest = models.DescribePersonInfoRequest;
const ZoneTrafficInfoDetail = models.ZoneTrafficInfoDetail;
const ShopInfo = models.ShopInfo;
const PersonInfo = models.PersonInfo;
const DescribeShopHourTrafficInfoRequest = models.DescribeShopHourTrafficInfoRequest;
const ShopHourTrafficInfo = models.ShopHourTrafficInfo;
const DescribeShopHourTrafficInfoResponse = models.DescribeShopHourTrafficInfoResponse;
const DescribePersonVisitInfoResponse = models.DescribePersonVisitInfoResponse;
const RegisterCallbackResponse = models.RegisterCallbackResponse;
const GenderAgeTrafficDetail = models.GenderAgeTrafficDetail;
const DescribeShopTrafficInfoResponse = models.DescribeShopTrafficInfoResponse;
const ShopDayTrafficInfo = models.ShopDayTrafficInfo;


/**
 * youmall client
 * @class
 */
class YoumallClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("youmall.tencentcloudapi.com", "2018-02-28", credential, region, profile);
    }
    
    /**
     * 指定门店获取所有顾客详情列表，包含客户ID、图片、年龄、性别
     * @param {DescribePersonInfoRequest} req
     * @param {function(string, DescribePersonInfoResponse):void} cb
     * @public
     */
    DescribePersonInfo(req, cb) {
        let resp = new DescribePersonInfoResponse();
        this.request("DescribePersonInfo", req, resp, cb);
    }

    /**
     * 根据客户身份标识获取客户下所有的门店信息列表
     * @param {DescribeShopInfoRequest} req
     * @param {function(string, DescribeShopInfoResponse):void} cb
     * @public
     */
    DescribeShopInfo(req, cb) {
        let resp = new DescribeShopInfoResponse();
        this.request("DescribeShopInfo", req, resp, cb);
    }

    /**
     * 按小时提供查询日期范围内门店的每天每小时累计客流人数数据，支持的时间范围：过去365天，含当天。
     * @param {DescribeShopHourTrafficInfoRequest} req
     * @param {function(string, DescribeShopHourTrafficInfoResponse):void} cb
     * @public
     */
    DescribeShopHourTrafficInfo(req, cb) {
        let resp = new DescribeShopHourTrafficInfoResponse();
        this.request("DescribeShopHourTrafficInfo", req, resp, cb);
    }

    /**
     * 按天提供查询日期范围内，客户指定门店下的所有区域（优Mall部署时已配置区域）的累计客流人次和平均停留时间。支持的时间范围：过去365天，含当天。
     * @param {DescribeZoneTrafficInfoRequest} req
     * @param {function(string, DescribeZoneTrafficInfoResponse):void} cb
     * @public
     */
    DescribeZoneTrafficInfo(req, cb) {
        let resp = new DescribeZoneTrafficInfoResponse();
        this.request("DescribeZoneTrafficInfo", req, resp, cb);
    }

    /**
     * 按天提供查询日期范围内门店的单日累计客流人数，支持的时间范围：过去365天，含当天。
     * @param {DescribeShopTrafficInfoRequest} req
     * @param {function(string, DescribeShopTrafficInfoResponse):void} cb
     * @public
     */
    DescribeShopTrafficInfo(req, cb) {
        let resp = new DescribeShopTrafficInfoResponse();
        this.request("DescribeShopTrafficInfo", req, resp, cb);
    }

    /**
     * 调用本接口在优Mall中注册自己集团的到店通知回调接口地址，接口协议为HTTP或HTTPS。注册后，若集团有特殊身份（例如老客）到店通知，优Mall后台将主动将到店信息push给该接口
     * @param {RegisterCallbackRequest} req
     * @param {function(string, RegisterCallbackResponse):void} cb
     * @public
     */
    RegisterCallback(req, cb) {
        let resp = new RegisterCallbackResponse();
        this.request("RegisterCallback", req, resp, cb);
    }

    /**
     * 获取门店指定时间范围内的所有用户到访信息记录，支持的时间范围：过去365天，含当天。
     * @param {DescribePersonVisitInfoRequest} req
     * @param {function(string, DescribePersonVisitInfoResponse):void} cb
     * @public
     */
    DescribePersonVisitInfo(req, cb) {
        let resp = new DescribePersonVisitInfoResponse();
        this.request("DescribePersonVisitInfo", req, resp, cb);
    }


}
module.exports = YoumallClient;
