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
const DescribeClusterPersonArrivedMallResponse = models.DescribeClusterPersonArrivedMallResponse;
const DescribePersonRequest = models.DescribePersonRequest;
const DescribeClusterPersonArrivedMallRequest = models.DescribeClusterPersonArrivedMallRequest;
const PersonTraceRoute = models.PersonTraceRoute;
const ZoneFlowAndAvrStayTime = models.ZoneFlowAndAvrStayTime;
const DescribeZoneTrafficInfoResponse = models.DescribeZoneTrafficInfoResponse;
const DescribeShopTrafficInfoRequest = models.DescribeShopTrafficInfoRequest;
const HourTrafficInfoDetail = models.HourTrafficInfoDetail;
const DescribePersonTraceResponse = models.DescribePersonTraceResponse;
const ZoneTrafficInfo = models.ZoneTrafficInfo;
const PersonProfile = models.PersonProfile;
const DescribePersonInfoRequest = models.DescribePersonInfoRequest;
const ZoneAgeGroupAvrStayTime = models.ZoneAgeGroupAvrStayTime;
const PersonTracePoint = models.PersonTracePoint;
const ZoneHourFlow = models.ZoneHourFlow;
const GenderAgeTrafficDetail = models.GenderAgeTrafficDetail;
const RegisterCallbackResponse = models.RegisterCallbackResponse;
const DescribeFaceIdByTempIdRequest = models.DescribeFaceIdByTempIdRequest;
const DescribeZoneFlowAndStayTimeResponse = models.DescribeZoneFlowAndStayTimeResponse;
const DescribeZoneFlowHourlyByZoneIdResponse = models.DescribeZoneFlowHourlyByZoneIdResponse;
const DescribePersonArrivedMallResponse = models.DescribePersonArrivedMallResponse;
const NetworkAndShopInfo = models.NetworkAndShopInfo;
const NetworkInfo = models.NetworkInfo;
const DescribePersonInfoResponse = models.DescribePersonInfoResponse;
const NetworkHistoryInfo = models.NetworkHistoryInfo;
const DescribeTrajectoryDataRequest = models.DescribeTrajectoryDataRequest;
const DailyTracePoint = models.DailyTracePoint;
const DescribeNetworkInfoResponse = models.DescribeNetworkInfoResponse;
const DescribePersonVisitInfoRequest = models.DescribePersonVisitInfoRequest;
const ZoneTrafficInfoDetail = models.ZoneTrafficInfoDetail;
const DescribeZoneFlowGenderInfoByZoneIdRequest = models.DescribeZoneFlowGenderInfoByZoneIdRequest;
const CreateAccountResponse = models.CreateAccountResponse;
const DescribeHistoryNetworkInfoResponse = models.DescribeHistoryNetworkInfoResponse;
const CreateFacePictureResponse = models.CreateFacePictureResponse;
const DescribeZoneFlowGenderAvrStayTimeByZoneIdRequest = models.DescribeZoneFlowGenderAvrStayTimeByZoneIdRequest;
const DescribeShopInfoResponse = models.DescribeShopInfoResponse;
const ShopInfo = models.ShopInfo;
const DescribeZoneFlowDailyByZoneIdResponse = models.DescribeZoneFlowDailyByZoneIdResponse;
const NetworkLastInfo = models.NetworkLastInfo;
const DescribeShopHourTrafficInfoRequest = models.DescribeShopHourTrafficInfoRequest;
const DescribeZoneFlowAgeInfoByZoneIdResponse = models.DescribeZoneFlowAgeInfoByZoneIdResponse;
const DescribePersonResponse = models.DescribePersonResponse;
const PersonVisitInfo = models.PersonVisitInfo;
const DescribeClusterPersonTraceResponse = models.DescribeClusterPersonTraceResponse;
const DescribeShopInfoRequest = models.DescribeShopInfoRequest;
const CreateFacePictureRequest = models.CreateFacePictureRequest;
const DescribeZoneFlowAgeInfoByZoneIdRequest = models.DescribeZoneFlowAgeInfoByZoneIdRequest;
const DescribePersonTraceDetailRequest = models.DescribePersonTraceDetailRequest;
const CreateAccountRequest = models.CreateAccountRequest;
const DescribeShopTrafficInfoResponse = models.DescribeShopTrafficInfoResponse;
const RegisterCallbackRequest = models.RegisterCallbackRequest;
const DescribeZoneFlowGenderAvrStayTimeByZoneIdResponse = models.DescribeZoneFlowGenderAvrStayTimeByZoneIdResponse;
const ArrivedMallInfo = models.ArrivedMallInfo;
const PersonInfo = models.PersonInfo;
const PersonCoordinate = models.PersonCoordinate;
const DescribeFaceIdByTempIdResponse = models.DescribeFaceIdByTempIdResponse;
const DescribeZoneTrafficInfoRequest = models.DescribeZoneTrafficInfoRequest;
const DescribeCameraPersonResponse = models.DescribeCameraPersonResponse;
const ShopHourTrafficInfo = models.ShopHourTrafficInfo;
const ModifyPersonTagInfoResponse = models.ModifyPersonTagInfoResponse;
const CameraPersonInfo = models.CameraPersonInfo;
const DescribeClusterPersonTraceRequest = models.DescribeClusterPersonTraceRequest;
const PersonTagInfo = models.PersonTagInfo;
const DescribeShopHourTrafficInfoResponse = models.DescribeShopHourTrafficInfoResponse;
const DescribePersonVisitInfoResponse = models.DescribePersonVisitInfoResponse;
const DescribeNetworkInfoRequest = models.DescribeNetworkInfoRequest;
const DescribeHistoryNetworkInfoRequest = models.DescribeHistoryNetworkInfoRequest;
const DescribeZoneFlowHourlyByZoneIdRequest = models.DescribeZoneFlowHourlyByZoneIdRequest;
const DescribeCameraPersonRequest = models.DescribeCameraPersonRequest;
const DescribeZoneFlowDailyByZoneIdRequest = models.DescribeZoneFlowDailyByZoneIdRequest;
const TrajectorySunData = models.TrajectorySunData;
const DescribeZoneFlowGenderInfoByZoneIdResponse = models.DescribeZoneFlowGenderInfoByZoneIdResponse;
const ModifyPersonTagInfoRequest = models.ModifyPersonTagInfoRequest;
const ZoneDayFlow = models.ZoneDayFlow;
const DescribePersonTraceRequest = models.DescribePersonTraceRequest;
const DescribeZoneFlowAndStayTimeRequest = models.DescribeZoneFlowAndStayTimeRequest;
const DescribePersonTraceDetailResponse = models.DescribePersonTraceDetailResponse;
const ShopDayTrafficInfo = models.ShopDayTrafficInfo;
const DescribePersonArrivedMallRequest = models.DescribePersonArrivedMallRequest;
const DescribeTrajectoryDataResponse = models.DescribeTrajectoryDataResponse;


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
     * 获取指定区域人流各年龄占比
     * @param {DescribeZoneFlowAgeInfoByZoneIdRequest} req
     * @param {function(string, DescribeZoneFlowAgeInfoByZoneIdResponse):void} cb
     * @public
     */
    DescribeZoneFlowAgeInfoByZoneId(req, cb) {
        let resp = new DescribeZoneFlowAgeInfoByZoneIdResponse();
        this.request("DescribeZoneFlowAgeInfoByZoneId", req, resp, cb);
    }

    /**
     * 获取指定区域不同年龄段男女平均停留时间
     * @param {DescribeZoneFlowGenderAvrStayTimeByZoneIdRequest} req
     * @param {function(string, DescribeZoneFlowGenderAvrStayTimeByZoneIdResponse):void} cb
     * @public
     */
    DescribeZoneFlowGenderAvrStayTimeByZoneId(req, cb) {
        let resp = new DescribeZoneFlowGenderAvrStayTimeByZoneIdResponse();
        this.request("DescribeZoneFlowGenderAvrStayTimeByZoneId", req, resp, cb);
    }

    /**
     * 获取区域人流和停留时间
     * @param {DescribeZoneFlowAndStayTimeRequest} req
     * @param {function(string, DescribeZoneFlowAndStayTimeResponse):void} cb
     * @public
     */
    DescribeZoneFlowAndStayTime(req, cb) {
        let resp = new DescribeZoneFlowAndStayTimeResponse();
        this.request("DescribeZoneFlowAndStayTime", req, resp, cb);
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
     * 获取指定区域分时客流量
     * @param {DescribeZoneFlowHourlyByZoneIdRequest} req
     * @param {function(string, DescribeZoneFlowHourlyByZoneIdResponse):void} cb
     * @public
     */
    DescribeZoneFlowHourlyByZoneId(req, cb) {
        let resp = new DescribeZoneFlowHourlyByZoneIdResponse();
        this.request("DescribeZoneFlowHourlyByZoneId", req, resp, cb);
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
     * 查询客户单次到场轨迹明细
     * @param {DescribePersonTraceDetailRequest} req
     * @param {function(string, DescribePersonTraceDetailResponse):void} cb
     * @public
     */
    DescribePersonTraceDetail(req, cb) {
        let resp = new DescribePersonTraceDetailResponse();
        this.request("DescribePersonTraceDetail", req, resp, cb);
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
     * 通过上传指定规格的人脸图片，创建黑名单用户或者白名单用户。
     * @param {CreateFacePictureRequest} req
     * @param {function(string, CreateFacePictureResponse):void} cb
     * @public
     */
    CreateFacePicture(req, cb) {
        let resp = new CreateFacePictureResponse();
        this.request("CreateFacePicture", req, resp, cb);
    }

    /**
     * 创建集团门店管理员账号
     * @param {CreateAccountRequest} req
     * @param {function(string, CreateAccountResponse):void} cb
     * @public
     */
    CreateAccount(req, cb) {
        let resp = new CreateAccountResponse();
        this.request("CreateAccount", req, resp, cb);
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
     * 输出开始时间到结束时间段内的进出场数据。
     * @param {DescribePersonTraceRequest} req
     * @param {function(string, DescribePersonTraceResponse):void} cb
     * @public
     */
    DescribePersonTrace(req, cb) {
        let resp = new DescribePersonTraceResponse();
        this.request("DescribePersonTrace", req, resp, cb);
    }

    /**
     * 获取指定区域每日客流量
     * @param {DescribeZoneFlowDailyByZoneIdRequest} req
     * @param {function(string, DescribeZoneFlowDailyByZoneIdResponse):void} cb
     * @public
     */
    DescribeZoneFlowDailyByZoneId(req, cb) {
        let resp = new DescribeZoneFlowDailyByZoneIdResponse();
        this.request("DescribeZoneFlowDailyByZoneId", req, resp, cb);
    }

    /**
     * 输出开始时间到结束时间段内的进出场数据。不做按天聚合的情况下，每次进出场，产生一条进出场数据。


     * @param {DescribePersonArrivedMallRequest} req
     * @param {function(string, DescribePersonArrivedMallResponse):void} cb
     * @public
     */
    DescribePersonArrivedMall(req, cb) {
        let resp = new DescribePersonArrivedMallResponse();
        this.request("DescribePersonArrivedMall", req, resp, cb);
    }

    /**
     * 输出开始时间到结束时间段内的进出场数据。按天聚合的情况下，每天多次进出场算一次，以最初进场时间为进场时间，最后离场时间为离场时间。停留时间为多次进出场的停留时间之和。
     * @param {DescribeClusterPersonArrivedMallRequest} req
     * @param {function(string, DescribeClusterPersonArrivedMallResponse):void} cb
     * @public
     */
    DescribeClusterPersonArrivedMall(req, cb) {
        let resp = new DescribeClusterPersonArrivedMallResponse();
        this.request("DescribeClusterPersonArrivedMall", req, resp, cb);
    }

    /**
     * 查询指定某一卖场的用户信息
     * @param {DescribePersonRequest} req
     * @param {function(string, DescribePersonResponse):void} cb
     * @public
     */
    DescribePerson(req, cb) {
        let resp = new DescribePersonResponse();
        this.request("DescribePerson", req, resp, cb);
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
     * 获取指定区域性别占比
     * @param {DescribeZoneFlowGenderInfoByZoneIdRequest} req
     * @param {function(string, DescribeZoneFlowGenderInfoByZoneIdResponse):void} cb
     * @public
     */
    DescribeZoneFlowGenderInfoByZoneId(req, cb) {
        let resp = new DescribeZoneFlowGenderInfoByZoneIdResponse();
        this.request("DescribeZoneFlowGenderInfoByZoneId", req, resp, cb);
    }

    /**
     * 输出开始时间到结束时间段内的进出场数据。按天聚合的情况下，每天多次进出场算一次，以最初进场时间为进场时间，最后离场时间为离场时间。
     * @param {DescribeClusterPersonTraceRequest} req
     * @param {function(string, DescribeClusterPersonTraceResponse):void} cb
     * @public
     */
    DescribeClusterPersonTrace(req, cb) {
        let resp = new DescribeClusterPersonTraceResponse();
        this.request("DescribeClusterPersonTrace", req, resp, cb);
    }

    /**
     * 获取动线轨迹信息
     * @param {DescribeTrajectoryDataRequest} req
     * @param {function(string, DescribeTrajectoryDataResponse):void} cb
     * @public
     */
    DescribeTrajectoryData(req, cb) {
        let resp = new DescribeTrajectoryDataResponse();
        this.request("DescribeTrajectoryData", req, resp, cb);
    }


}
module.exports = YoumallClient;
