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
const DescribeShopTrafficInfoRequest = models.DescribeShopTrafficInfoRequest;
const ZoneTrafficInfo = models.ZoneTrafficInfo;
const GenderAgeTrafficDetail = models.GenderAgeTrafficDetail;
const DescribeFaceIdByTempIdRequest = models.DescribeFaceIdByTempIdRequest;
const DescribePersonInfoResponse = models.DescribePersonInfoResponse;
const DescribeNetworkInfoResponse = models.DescribeNetworkInfoResponse;
const HourTrafficInfoDetail = models.HourTrafficInfoDetail;
const DescribeHistoryNetworkInfoResponse = models.DescribeHistoryNetworkInfoResponse;
const ShopInfo = models.ShopInfo;
const DescribeShopInfoResponse = models.DescribeShopInfoResponse;
const DescribeZoneTrafficInfoRequest = models.DescribeZoneTrafficInfoRequest;
const RegisterCallbackRequest = models.RegisterCallbackRequest;
const PersonVisitInfo = models.PersonVisitInfo;
const DescribeShopInfoRequest = models.DescribeShopInfoRequest;
const DescribePersonInfoRequest = models.DescribePersonInfoRequest;
const ZoneTrafficInfoDetail = models.ZoneTrafficInfoDetail;
const NetworkHistoryInfo = models.NetworkHistoryInfo;
const NetworkLastInfo = models.NetworkLastInfo;
const RegisterCallbackResponse = models.RegisterCallbackResponse;
const PersonInfo = models.PersonInfo;
const PersonTagInfo = models.PersonTagInfo;
const DescribeFaceIdByTempIdResponse = models.DescribeFaceIdByTempIdResponse;
const DescribeShopHourTrafficInfoRequest = models.DescribeShopHourTrafficInfoRequest;
const DescribeCameraPersonResponse = models.DescribeCameraPersonResponse;
const ShopHourTrafficInfo = models.ShopHourTrafficInfo;
const ModifyPersonTagInfoResponse = models.ModifyPersonTagInfoResponse;
const CameraPersonInfo = models.CameraPersonInfo;
const DescribeShopHourTrafficInfoResponse = models.DescribeShopHourTrafficInfoResponse;
const DescribePersonVisitInfoResponse = models.DescribePersonVisitInfoResponse;
const DescribeNetworkInfoRequest = models.DescribeNetworkInfoRequest;
const DescribeHistoryNetworkInfoRequest = models.DescribeHistoryNetworkInfoRequest;
const DescribeCameraPersonRequest = models.DescribeCameraPersonRequest;
const NetworkInfoNoShop = models.NetworkInfoNoShop;
const ModifyPersonTagInfoRequest = models.ModifyPersonTagInfoRequest;
const NetworkInfo = models.NetworkInfo;
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
     * 通过指定设备ID和指定时段，获取该时段内中收银台摄像设备抓取到顾客头像及身份ID
     * @param {DescribeCameraPersonRequest} req
     * @param {function(string, DescribeCameraPersonResponse):void} cb
     * @public
     */
    DescribeCameraPerson(req, cb) {
        let resp = new DescribeCameraPersonResponse();
        this.request("DescribeCameraPerson", req, resp, cb);
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
     * 返回当前门店历史网络状态数据
     * @param {DescribeHistoryNetworkInfoRequest} req
     * @param {function(string, DescribeHistoryNetworkInfoResponse):void} cb
     * @public
     */
    DescribeHistoryNetworkInfo(req, cb) {
        let resp = new DescribeHistoryNetworkInfoResponse();
        this.request("DescribeHistoryNetworkInfo", req, resp, cb);
    }

    /**
     * 返回当前门店最新网络状态数据
     * @param {DescribeNetworkInfoRequest} req
     * @param {function(string, DescribeNetworkInfoResponse):void} cb
     * @public
     */
    DescribeNetworkInfo(req, cb) {
        let resp = new DescribeNetworkInfoResponse();
        this.request("DescribeNetworkInfo", req, resp, cb);
    }

    /**
     * 通过DescribeCameraPerson接口上报的收银台身份ID查询顾客的FaceID。查询最佳时间为收银台上报的次日1点后。
     * @param {DescribeFaceIdByTempIdRequest} req
     * @param {function(string, DescribeFaceIdByTempIdResponse):void} cb
     * @public
     */
    DescribeFaceIdByTempId(req, cb) {
        let resp = new DescribeFaceIdByTempIdResponse();
        this.request("DescribeFaceIdByTempId", req, resp, cb);
    }

    /**
     * 标记到店顾客的身份类型，例如黑名单、白名单等

     * @param {ModifyPersonTagInfoRequest} req
     * @param {function(string, ModifyPersonTagInfoResponse):void} cb
     * @public
     */
    ModifyPersonTagInfo(req, cb) {
        let resp = new ModifyPersonTagInfoResponse();
        this.request("ModifyPersonTagInfo", req, resp, cb);
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


}
module.exports = YoumallClient;
