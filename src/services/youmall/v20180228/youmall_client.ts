/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  DescribeClusterPersonArrivedMallResponse,
  DescribeShopTrafficInfoRequest,
  GenderAgeTrafficDetail,
  DescribeZoneFlowAndStayTimeResponse,
  DescribePersonArrivedMallResponse,
  ModifyPersonTypeResponse,
  HourTrafficInfoDetail,
  DescribeZoneFlowDailyByZoneIdResponse,
  DescribeZoneFlowAgeInfoByZoneIdResponse,
  DescribeClusterPersonTraceResponse,
  DescribePersonInfoRequest,
  DescribePersonInfoByFacePictureResponse,
  DescribePersonTraceDetailRequest,
  CreateAccountRequest,
  NetworkLastInfo,
  DescribeZoneFlowGenderAvrStayTimeByZoneIdResponse,
  DeletePersonFeatureResponse,
  DescribeCameraPersonResponse,
  ModifyPersonTagInfoResponse,
  DescribeShopHourTrafficInfoResponse,
  RegisterCallbackResponse,
  NetworkInfo,
  DescribeClusterPersonArrivedMallRequest,
  DescribeZoneFlowGenderInfoByZoneIdResponse,
  DescribeHistoryNetworkInfoRequest,
  DescribePersonTraceDetailResponse,
  DescribePersonInfoByFacePictureRequest,
  DescribePersonVisitInfoRequest,
  DescribeZoneTrafficInfoResponse,
  DeletePersonFeatureRequest,
  DescribeFaceIdByTempIdRequest,
  PersonProfile,
  DescribePersonResponse,
  DescribeTrajectoryDataRequest,
  DescribeZoneTrafficInfoRequest,
  ModifyPersonFeatureInfoResponse,
  ZoneTrafficInfoDetail,
  DescribeZoneFlowGenderAvrStayTimeByZoneIdRequest,
  ZoneFlowAndAvrStayTime,
  SceneInfo,
  CameraPersonInfo,
  DescribePersonVisitInfoResponse,
  DescribeNetworkInfoRequest,
  DescribeZoneFlowAndStayTimeRequest,
  DescribeZoneFlowHourlyByZoneIdRequest,
  DescribeFaceIdByTempIdResponse,
  TrajectorySunData,
  ModifyPersonTagInfoRequest,
  ShopDayTrafficInfo,
  DescribePersonRequest,
  DescribePersonTraceResponse,
  PersonTraceRoute,
  PersonTracePoint,
  ZoneTrafficInfo,
  DescribeNetworkInfoResponse,
  NetworkAndShopInfo,
  DescribeZoneFlowGenderInfoByZoneIdRequest,
  DescribeShopHourTrafficInfoRequest,
  RegisterCallbackRequest,
  DescribeShopInfoRequest,
  NetworkHistoryInfo,
  PersonInfo,
  PersonTagInfo,
  ZoneHourFlow,
  ShopHourTrafficInfo,
  DescribeClusterPersonTraceRequest,
  PersonCoordinate,
  ModifyPersonFeatureInfoRequest,
  ZoneDayFlow,
  DescribePersonTraceRequest,
  DescribeZoneFlowHourlyByZoneIdResponse,
  DescribeZoneFlowDailyByZoneIdRequest,
  DescribePersonInfoResponse,
  DailyTracePoint,
  CreateAccountResponse,
  DescribeHistoryNetworkInfoResponse,
  CreateFacePictureResponse,
  DescribeShopInfoResponse,
  PersonVisitInfo,
  CreateFacePictureRequest,
  DescribeZoneFlowAgeInfoByZoneIdRequest,
  ShopInfo,
  ModifyPersonTypeRequest,
  ArrivedMallInfo,
  ZoneAgeGroupAvrStayTime,
  DescribePersonArrivedMallRequest,
  DescribeCameraPersonRequest,
  DescribeShopTrafficInfoResponse,
  DescribeTrajectoryDataResponse,
} from "./youmall_models"

/**
 * youmall client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("youmall.tencentcloudapi.com", "2018-02-28", clientConfig)
  }

  /**
   * 通过指定设备ID和指定时段，获取该时段内中收银台摄像设备抓取到顾客头像及身份ID
   */
  async DescribeCameraPerson(
    req: DescribeCameraPersonRequest,
    cb?: (error: string, rep: DescribeCameraPersonResponse) => void
  ): Promise<DescribeCameraPersonResponse> {
    return this.request("DescribeCameraPerson", req, cb)
  }

  /**
   * 指定门店获取所有顾客详情列表，包含客户ID、图片、年龄、性别
   */
  async DescribePersonInfo(
    req: DescribePersonInfoRequest,
    cb?: (error: string, rep: DescribePersonInfoResponse) => void
  ): Promise<DescribePersonInfoResponse> {
    return this.request("DescribePersonInfo", req, cb)
  }

  /**
   * 按天提供查询日期范围内，客户指定门店下的所有区域（优Mall部署时已配置区域）的累计客流人次和平均停留时间。支持的时间范围：过去365天，含当天。
   */
  async DescribeZoneTrafficInfo(
    req: DescribeZoneTrafficInfoRequest,
    cb?: (error: string, rep: DescribeZoneTrafficInfoResponse) => void
  ): Promise<DescribeZoneTrafficInfoResponse> {
    return this.request("DescribeZoneTrafficInfo", req, cb)
  }

  /**
   * 获取指定区域人流各年龄占比
   */
  async DescribeZoneFlowAgeInfoByZoneId(
    req: DescribeZoneFlowAgeInfoByZoneIdRequest,
    cb?: (error: string, rep: DescribeZoneFlowAgeInfoByZoneIdResponse) => void
  ): Promise<DescribeZoneFlowAgeInfoByZoneIdResponse> {
    return this.request("DescribeZoneFlowAgeInfoByZoneId", req, cb)
  }

  /**
   * 调用本接口在优Mall中注册自己集团的到店通知回调接口地址，接口协议为HTTP或HTTPS。注册后，若集团有特殊身份（例如老客）到店通知，优Mall后台将主动将到店信息push给该接口
   */
  async RegisterCallback(
    req: RegisterCallbackRequest,
    cb?: (error: string, rep: RegisterCallbackResponse) => void
  ): Promise<RegisterCallbackResponse> {
    return this.request("RegisterCallback", req, cb)
  }

  /**
   * 获取指定区域不同年龄段男女平均停留时间
   */
  async DescribeZoneFlowGenderAvrStayTimeByZoneId(
    req: DescribeZoneFlowGenderAvrStayTimeByZoneIdRequest,
    cb?: (error: string, rep: DescribeZoneFlowGenderAvrStayTimeByZoneIdResponse) => void
  ): Promise<DescribeZoneFlowGenderAvrStayTimeByZoneIdResponse> {
    return this.request("DescribeZoneFlowGenderAvrStayTimeByZoneId", req, cb)
  }

  /**
   * 获取区域人流和停留时间
   */
  async DescribeZoneFlowAndStayTime(
    req: DescribeZoneFlowAndStayTimeRequest,
    cb?: (error: string, rep: DescribeZoneFlowAndStayTimeResponse) => void
  ): Promise<DescribeZoneFlowAndStayTimeResponse> {
    return this.request("DescribeZoneFlowAndStayTime", req, cb)
  }

  /**
   * 获取门店指定时间范围内的所有用户到访信息记录，支持的时间范围：过去365天，含当天。
   */
  async DescribePersonVisitInfo(
    req: DescribePersonVisitInfoRequest,
    cb?: (error: string, rep: DescribePersonVisitInfoResponse) => void
  ): Promise<DescribePersonVisitInfoResponse> {
    return this.request("DescribePersonVisitInfo", req, cb)
  }

  /**
   * 获取指定区域分时客流量
   */
  async DescribeZoneFlowHourlyByZoneId(
    req: DescribeZoneFlowHourlyByZoneIdRequest,
    cb?: (error: string, rep: DescribeZoneFlowHourlyByZoneIdResponse) => void
  ): Promise<DescribeZoneFlowHourlyByZoneIdResponse> {
    return this.request("DescribeZoneFlowHourlyByZoneId", req, cb)
  }

  /**
   * 根据客户身份标识获取客户下所有的门店信息列表
   */
  async DescribeShopInfo(
    req: DescribeShopInfoRequest,
    cb?: (error: string, rep: DescribeShopInfoResponse) => void
  ): Promise<DescribeShopInfoResponse> {
    return this.request("DescribeShopInfo", req, cb)
  }

  /**
   * 通过DescribeCameraPerson接口上报的收银台身份ID查询顾客的FaceID。查询最佳时间为收银台上报的次日1点后。
   */
  async DescribeFaceIdByTempId(
    req: DescribeFaceIdByTempIdRequest,
    cb?: (error: string, rep: DescribeFaceIdByTempIdResponse) => void
  ): Promise<DescribeFaceIdByTempIdResponse> {
    return this.request("DescribeFaceIdByTempId", req, cb)
  }

  /**
   * 获取指定区域性别占比
   */
  async DescribeZoneFlowGenderInfoByZoneId(
    req: DescribeZoneFlowGenderInfoByZoneIdRequest,
    cb?: (error: string, rep: DescribeZoneFlowGenderInfoByZoneIdResponse) => void
  ): Promise<DescribeZoneFlowGenderInfoByZoneIdResponse> {
    return this.request("DescribeZoneFlowGenderInfoByZoneId", req, cb)
  }

  /**
   * 按天提供查询日期范围内门店的单日累计客流人数，支持的时间范围：过去365天，含当天。
   */
  async DescribeShopTrafficInfo(
    req: DescribeShopTrafficInfoRequest,
    cb?: (error: string, rep: DescribeShopTrafficInfoResponse) => void
  ): Promise<DescribeShopTrafficInfoResponse> {
    return this.request("DescribeShopTrafficInfo", req, cb)
  }

  /**
   * 通过上传人脸图片检索系统face id、顾客身份信息及底图
   */
  async DescribePersonInfoByFacePicture(
    req: DescribePersonInfoByFacePictureRequest,
    cb?: (error: string, rep: DescribePersonInfoByFacePictureResponse) => void
  ): Promise<DescribePersonInfoByFacePictureResponse> {
    return this.request("DescribePersonInfoByFacePicture", req, cb)
  }

  /**
   * 通过上传指定规格的人脸图片，创建黑名单用户或者白名单用户。
   */
  async CreateFacePicture(
    req: CreateFacePictureRequest,
    cb?: (error: string, rep: CreateFacePictureResponse) => void
  ): Promise<CreateFacePictureResponse> {
    return this.request("CreateFacePicture", req, cb)
  }

  /**
   * 创建集团门店管理员账号
   */
  async CreateAccount(
    req: CreateAccountRequest,
    cb?: (error: string, rep: CreateAccountResponse) => void
  ): Promise<CreateAccountResponse> {
    return this.request("CreateAccount", req, cb)
  }

  /**
   * 按小时提供查询日期范围内门店的每天每小时累计客流人数数据，支持的时间范围：过去365天，含当天。
   */
  async DescribeShopHourTrafficInfo(
    req: DescribeShopHourTrafficInfoRequest,
    cb?: (error: string, rep: DescribeShopHourTrafficInfoResponse) => void
  ): Promise<DescribeShopHourTrafficInfoResponse> {
    return this.request("DescribeShopHourTrafficInfo", req, cb)
  }

  /**
   * 输出开始时间到结束时间段内的进出场数据。
   */
  async DescribePersonTrace(
    req: DescribePersonTraceRequest,
    cb?: (error: string, rep: DescribePersonTraceResponse) => void
  ): Promise<DescribePersonTraceResponse> {
    return this.request("DescribePersonTrace", req, cb)
  }

  /**
   * 获取指定区域每日客流量
   */
  async DescribeZoneFlowDailyByZoneId(
    req: DescribeZoneFlowDailyByZoneIdRequest,
    cb?: (error: string, rep: DescribeZoneFlowDailyByZoneIdResponse) => void
  ): Promise<DescribeZoneFlowDailyByZoneIdResponse> {
    return this.request("DescribeZoneFlowDailyByZoneId", req, cb)
  }

  /**
     * 输出开始时间到结束时间段内的进出场数据。不做按天聚合的情况下，每次进出场，产生一条进出场数据。


     */
  async DescribePersonArrivedMall(
    req: DescribePersonArrivedMallRequest,
    cb?: (error: string, rep: DescribePersonArrivedMallResponse) => void
  ): Promise<DescribePersonArrivedMallResponse> {
    return this.request("DescribePersonArrivedMall", req, cb)
  }

  /**
   * 输出开始时间到结束时间段内的进出场数据。按天聚合的情况下，每天多次进出场算一次，以最初进场时间为进场时间，最后离场时间为离场时间。停留时间为多次进出场的停留时间之和。
   */
  async DescribeClusterPersonArrivedMall(
    req: DescribeClusterPersonArrivedMallRequest,
    cb?: (error: string, rep: DescribeClusterPersonArrivedMallResponse) => void
  ): Promise<DescribeClusterPersonArrivedMallResponse> {
    return this.request("DescribeClusterPersonArrivedMall", req, cb)
  }

  /**
   * 查询客户单次到场轨迹明细
   */
  async DescribePersonTraceDetail(
    req: DescribePersonTraceDetailRequest,
    cb?: (error: string, rep: DescribePersonTraceDetailResponse) => void
  ): Promise<DescribePersonTraceDetailResponse> {
    return this.request("DescribePersonTraceDetail", req, cb)
  }

  /**
   * 修改顾客身份类型接口
   */
  async ModifyPersonType(
    req: ModifyPersonTypeRequest,
    cb?: (error: string, rep: ModifyPersonTypeResponse) => void
  ): Promise<ModifyPersonTypeResponse> {
    return this.request("ModifyPersonType", req, cb)
  }

  /**
   * 支持修改黑白名单类型的顾客特征
   */
  async ModifyPersonFeatureInfo(
    req: ModifyPersonFeatureInfoRequest,
    cb?: (error: string, rep: ModifyPersonFeatureInfoResponse) => void
  ): Promise<ModifyPersonFeatureInfoResponse> {
    return this.request("ModifyPersonFeatureInfo", req, cb)
  }

  /**
   * 返回当前门店历史网络状态数据
   */
  async DescribeHistoryNetworkInfo(
    req: DescribeHistoryNetworkInfoRequest,
    cb?: (error: string, rep: DescribeHistoryNetworkInfoResponse) => void
  ): Promise<DescribeHistoryNetworkInfoResponse> {
    return this.request("DescribeHistoryNetworkInfo", req, cb)
  }

  /**
   * 返回当前门店最新网络状态数据
   */
  async DescribeNetworkInfo(
    req: DescribeNetworkInfoRequest,
    cb?: (error: string, rep: DescribeNetworkInfoResponse) => void
  ): Promise<DescribeNetworkInfoResponse> {
    return this.request("DescribeNetworkInfo", req, cb)
  }

  /**
   * 删除顾客特征，仅支持删除黑名单或者白名单用户特征。
   */
  async DeletePersonFeature(
    req: DeletePersonFeatureRequest,
    cb?: (error: string, rep: DeletePersonFeatureResponse) => void
  ): Promise<DeletePersonFeatureResponse> {
    return this.request("DeletePersonFeature", req, cb)
  }

  /**
     * 标记到店顾客的身份类型，例如黑名单、白名单等

     */
  async ModifyPersonTagInfo(
    req: ModifyPersonTagInfoRequest,
    cb?: (error: string, rep: ModifyPersonTagInfoResponse) => void
  ): Promise<ModifyPersonTagInfoResponse> {
    return this.request("ModifyPersonTagInfo", req, cb)
  }

  /**
   * 查询指定某一卖场的用户信息
   */
  async DescribePerson(
    req: DescribePersonRequest,
    cb?: (error: string, rep: DescribePersonResponse) => void
  ): Promise<DescribePersonResponse> {
    return this.request("DescribePerson", req, cb)
  }

  /**
   * 输出开始时间到结束时间段内的进出场数据。按天聚合的情况下，每天多次进出场算一次，以最初进场时间为进场时间，最后离场时间为离场时间。
   */
  async DescribeClusterPersonTrace(
    req: DescribeClusterPersonTraceRequest,
    cb?: (error: string, rep: DescribeClusterPersonTraceResponse) => void
  ): Promise<DescribeClusterPersonTraceResponse> {
    return this.request("DescribeClusterPersonTrace", req, cb)
  }

  /**
   * 获取动线轨迹信息
   */
  async DescribeTrajectoryData(
    req: DescribeTrajectoryDataRequest,
    cb?: (error: string, rep: DescribeTrajectoryDataResponse) => void
  ): Promise<DescribeTrajectoryDataResponse> {
    return this.request("DescribeTrajectoryData", req, cb)
  }
}
