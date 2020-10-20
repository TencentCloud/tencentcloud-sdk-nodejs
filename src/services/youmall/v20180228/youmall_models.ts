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

/**
 * DescribeClusterPersonArrivedMall返回参数结构体
 */
export interface DescribeClusterPersonArrivedMallResponse {
  /**
   * 卖场系统编码
   */
  MallId?: string

  /**
   * 卖场客户编码
   */
  MallCode?: string

  /**
   * 客户编码
   */
  PersonId?: string

  /**
   * 到场信息
   */
  ArrivedMallSet?: Array<ArrivedMallInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeShopTrafficInfo请求参数结构体
 */
export interface DescribeShopTrafficInfoRequest {
  /**
   * 公司ID
   */
  CompanyId: string

  /**
   * 门店ID
   */
  ShopId: number

  /**
   * 开始日期，格式yyyy-MM-dd
   */
  StartDate: string

  /**
   * 介绍日期，格式yyyy-MM-dd
   */
  EndDate: string

  /**
   * 偏移量：分页控制参数，第一页传0，第n页Offset=(n-1)*Limit
   */
  Offset: number

  /**
   * Limit:每页的数据项，最大100，超过100会被强制指定为100
   */
  Limit: number
}

/**
 * 性别年龄分组下的客流信息
 */
export interface GenderAgeTrafficDetail {
  /**
   * 性别: 0男1女
   */
  Gender: number

  /**
   * 年龄区间，枚举值：0-17、18-23、24-30、31-40、41-50、51-60、>60
   */
  AgeGap: string

  /**
   * 客流量
   */
  TrafficCount: number
}

/**
 * DescribeZoneFlowAndStayTime返回参数结构体
 */
export interface DescribeZoneFlowAndStayTimeResponse {
  /**
   * 集团id
   */
  CompanyId?: string

  /**
   * 店铺id
   */
  ShopId?: number

  /**
   * 各区域人流数目和停留时长
   */
  Data?: Array<ZoneFlowAndAvrStayTime>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePersonArrivedMall返回参数结构体
 */
export interface DescribePersonArrivedMallResponse {
  /**
   * 卖场系统编码
   */
  MallId?: string

  /**
   * 卖场用户编码
   */
  MallCode?: string

  /**
   * 客户编码
   */
  PersonId?: string

  /**
   * 到场轨迹
   */
  ArrivedMallSet?: Array<ArrivedMallInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyPersonType返回参数结构体
 */
export interface ModifyPersonTypeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 分时客流量详细信息
 */
export interface HourTrafficInfoDetail {
  /**
   * 小时 取值为：0，1，2，3，4，5，6，7，8，9，10，11，12，13，14，15，16，17，18，19，20，21，22，23
   */
  Hour: number

  /**
   * 分时客流量
   */
  HourTrafficTotalCount: number
}

/**
 * DescribeZoneFlowDailyByZoneId返回参数结构体
 */
export interface DescribeZoneFlowDailyByZoneIdResponse {
  /**
   * 集团id
   */
  CompanyId?: string

  /**
   * 店铺id
   */
  ShopId?: number

  /**
   * 区域ID
   */
  ZoneId?: number

  /**
   * 区域名称
   */
  ZoneName?: string

  /**
   * 每日人流量
   */
  Data?: Array<ZoneDayFlow>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeZoneFlowAgeInfoByZoneId返回参数结构体
 */
export interface DescribeZoneFlowAgeInfoByZoneIdResponse {
  /**
   * 集团ID
   */
  CompanyId?: string

  /**
   * 店铺ID
   */
  ShopId?: number

  /**
   * 区域ID
   */
  ZoneId?: number

  /**
   * 区域名称
   */
  ZoneName?: string

  /**
   * 当前年龄段占比
   */
  Data?: Array<number>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterPersonTrace返回参数结构体
 */
export interface DescribeClusterPersonTraceResponse {
  /**
   * 卖场系统编码
   */
  MallId?: string

  /**
   * 卖场用户编码
   */
  MallCode?: string

  /**
   * 客户编码
   */
  PersonId?: string

  /**
   * 轨迹序列
   */
  TracePointSet?: Array<DailyTracePoint>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePersonInfo请求参数结构体
 */
export interface DescribePersonInfoRequest {
  /**
   * 公司ID
   */
  CompanyId: string

  /**
   * 门店ID
   */
  ShopId: number

  /**
   * 起始ID，第一次拉取时StartPersonId传0，后续送入的值为上一页最后一条数据项的PersonId
   */
  StartPersonId: number

  /**
   * 偏移量：分页控制参数，第一页传0，第n页Offset=(n-1)*Limit
   */
  Offset: number

  /**
   * Limit:每页的数据项，最大100，超过100会被强制指定为100
   */
  Limit: number

  /**
   * 图片url过期时间：在当前时间+PictureExpires秒后，图片url无法继续正常访问；单位s；默认值1*24*60*60（1天）
   */
  PictureExpires?: number

  /**
   * 身份类型(0表示普通顾客，1 白名单，2 表示黑名单）
   */
  PersonType?: number
}

/**
 * DescribePersonInfoByFacePicture返回参数结构体
 */
export interface DescribePersonInfoByFacePictureResponse {
  /**
   * 集团id
   */
  CompanyId?: string

  /**
   * 店铺id
   */
  ShopId?: number

  /**
   * 顾客face id
   */
  PersonId?: number

  /**
   * 顾客底图url
   */
  PictureUrl?: string

  /**
   * 顾客类型（0表示普通顾客，1 白名单，2 表示黑名单，101表示集团白名单，102表示集团黑名单）
   */
  PersonType?: number

  /**
   * 顾客首次进店时间
   */
  FirstVisitTime?: string

  /**
   * 顾客历史到访次数
   */
  VisitTimes?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePersonTraceDetail请求参数结构体
 */
export interface DescribePersonTraceDetailRequest {
  /**
   * 卖场编码
   */
  MallId: string

  /**
   * 客户编码
   */
  PersonId: string

  /**
   * 轨迹编码
   */
  TraceId: string
}

/**
 * CreateAccount请求参数结构体
 */
export interface CreateAccountRequest {
  /**
   * 集团ID
   */
  CompanyId: string

  /**
   * 账号名；需要是手机号
   */
  Name: string

  /**
   * 密码；需要是(`~!@#$%^&*()_+=-）中的至少两种且八位以上
   */
  Password: string

  /**
   * 客户门店编码
   */
  ShopCode: string

  /**
   * 备注说明; 30个字符以内
   */
  Remark?: string
}

/**
 * 获取当前门店最新网络状态数据返回结构
 */
export interface NetworkLastInfo {
  /**
   * 总数
   */
  Count: number

  /**
   * 网络状态
   */
  Infos: Array<NetworkAndShopInfo>
}

/**
 * DescribeZoneFlowGenderAvrStayTimeByZoneId返回参数结构体
 */
export interface DescribeZoneFlowGenderAvrStayTimeByZoneIdResponse {
  /**
   * 集团ID
   */
  CompanyId?: string

  /**
   * 店铺ID
   */
  ShopId?: number

  /**
   * 区域ID
   */
  ZoneId?: number

  /**
   * 区域名称
   */
  ZoneName?: string

  /**
   * 不同年龄段男女停留时间（返回格式为数组，从第 1 个到最后一个数据，年龄段分别为 0-17，18 - 23,  24 - 30, 31 - 40, 41 - 50, 51 - 60, 61 - 100）
   */
  Data?: Array<ZoneAgeGroupAvrStayTime>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePersonFeature返回参数结构体
 */
export interface DeletePersonFeatureResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCameraPerson返回参数结构体
 */
export interface DescribeCameraPersonResponse {
  /**
   * 集团id
   */
  CompanyId?: string

  /**
   * 店铺id
   */
  ShopId?: number

  /**
   * 摄像机id
   */
  CameraId?: number

  /**
   * pos机id
   */
  PosId?: string

  /**
   * 抓取的顾客信息
   */
  Infos?: Array<CameraPersonInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyPersonTagInfo返回参数结构体
 */
export interface ModifyPersonTagInfoResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeShopHourTrafficInfo返回参数结构体
 */
export interface DescribeShopHourTrafficInfoResponse {
  /**
   * 公司ID
   */
  CompanyId?: string

  /**
   * 门店ID
   */
  ShopId?: number

  /**
   * 查询结果总数
   */
  TotalCount?: number

  /**
   * 分时客流信息
   */
  ShopHourTrafficInfoSet?: Array<ShopHourTrafficInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RegisterCallback返回参数结构体
 */
export interface RegisterCallbackResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 没有店铺信息的网络状态
 */
export interface NetworkInfo {
  /**
   * 上传带宽，单位Mb/s，-1：未知
   */
  Upload: number

  /**
   * 下载带宽，单位Mb/s，-1：未知
   */
  Download: number

  /**
   * 最小延迟，单位ms，-1：未知
   */
  MinRtt: number

  /**
   * 平均延迟，单位ms，-1：未知
   */
  AvgRtt: number

  /**
   * 最大延迟，单位ms，-1：未知
   */
  MaxRtt: number

  /**
   * 平均偏差延迟，单位ms，-1：未知
   */
  MdevRtt: number

  /**
   * 丢包率百分比，-1：未知
   */
  Loss: number

  /**
   * 更新时间戳
   */
  UpdateTime: number

  /**
   * 上报网络状态设备
   */
  Mac: string
}

/**
 * DescribeClusterPersonArrivedMall请求参数结构体
 */
export interface DescribeClusterPersonArrivedMallRequest {
  /**
   * 卖场编码
   */
  MallId: string

  /**
   * 客户编码
   */
  PersonId: string

  /**
   * 查询开始时间
   */
  StartTime: string

  /**
   * 查询结束时间
   */
  EndTime: string
}

/**
 * DescribeZoneFlowGenderInfoByZoneId返回参数结构体
 */
export interface DescribeZoneFlowGenderInfoByZoneIdResponse {
  /**
   * 集团ID
   */
  CompanyId?: string

  /**
   * 店铺ID
   */
  ShopId?: number

  /**
   * 区域ID
   */
  ZoneId?: number

  /**
   * 区域名称
   */
  ZoneName?: string

  /**
   * 男性占比
   */
  MalePercent?: number

  /**
   * 女性占比
   */
  FemalePercent?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeHistoryNetworkInfo请求参数结构体
 */
export interface DescribeHistoryNetworkInfoRequest {
  /**
   * 请求时间戳
   */
  Time: number

  /**
   * 优mall集团id，通过"指定身份标识获取客户门店列表"接口获取
   */
  CompanyId: string

  /**
   * 优mall店铺id，通过"指定身份标识获取客户门店列表"接口获取，为0则拉取集团全部店铺当前
   */
  ShopId: number

  /**
   * 拉取开始日期，格式：2018-09-05
   */
  StartDay: string

  /**
   * 拉取结束日期，格式L:2018-09-05，超过StartDay 90天，按StartDay+90天算
   */
  EndDay: string

  /**
   * 拉取条数，默认10
   */
  Limit?: number

  /**
   * 拉取偏移，返回offset之后的数据
   */
  Offset?: number
}

/**
 * DescribePersonTraceDetail返回参数结构体
 */
export interface DescribePersonTraceDetailResponse {
  /**
   * 卖场编码
   */
  MallId?: string

  /**
   * 客户编码
   */
  PersonId?: string

  /**
   * 轨迹编码
   */
  TraceId?: string

  /**
   * 轨迹点坐标序列
   */
  CoordinateSet?: Array<PersonCoordinate>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePersonInfoByFacePicture请求参数结构体
 */
export interface DescribePersonInfoByFacePictureRequest {
  /**
   * 优mall集团id，通过"指定身份标识获取客户门店列表"接口获取
   */
  CompanyId: string

  /**
   * 优mall店铺id，通过"指定身份标识获取客户门店列表"接口获取
   */
  ShopId: number

  /**
   * 人脸图片BASE编码
   */
  Picture: string
}

/**
 * DescribePersonVisitInfo请求参数结构体
 */
export interface DescribePersonVisitInfoRequest {
  /**
   * 公司ID
   */
  CompanyId: string

  /**
   * 门店ID
   */
  ShopId: number

  /**
   * 偏移量：分页控制参数，第一页传0，第n页Offset=(n-1)*Limit
   */
  Offset: number

  /**
   * Limit:每页的数据项，最大100，超过100会被强制指定为100
   */
  Limit: number

  /**
   * 开始日期，格式yyyy-MM-dd，已废弃，请使用StartDateTime
   */
  StartDate?: string

  /**
   * 结束日期，格式yyyy-MM-dd，已废弃，请使用EndDateTime
   */
  EndDate?: string

  /**
   * 图片url过期时间：在当前时间+PictureExpires秒后，图片url无法继续正常访问；单位s；默认值1*24*60*60（1天）
   */
  PictureExpires?: number

  /**
   * 开始时间，格式yyyy-MM-dd HH:mm:ss
   */
  StartDateTime?: string

  /**
   * 结束时间，格式yyyy-MM-dd HH:mm:ss
   */
  EndDateTime?: string
}

/**
 * DescribeZoneTrafficInfo返回参数结构体
 */
export interface DescribeZoneTrafficInfoResponse {
  /**
   * 公司ID
   */
  CompanyId?: string

  /**
   * 门店ID
   */
  ShopId?: number

  /**
   * 查询结果总数
   */
  TotalCount?: number

  /**
   * 区域客流信息列表
   */
  ZoneTrafficInfoSet?: Array<ZoneTrafficInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePersonFeature请求参数结构体
 */
export interface DeletePersonFeatureRequest {
  /**
   * 公司ID
   */
  CompanyId: string

  /**
   * 门店ID
   */
  ShopId: number

  /**
   * 顾客ID
   */
  PersonId: number
}

/**
 * DescribeFaceIdByTempId请求参数结构体
 */
export interface DescribeFaceIdByTempIdRequest {
  /**
   * 优mall集团id，通过"指定身份标识获取客户门店列表"接口获取
   */
  CompanyId: string

  /**
   * 优mall店铺id，通过"指定身份标识获取客户门店列表"接口获取
   */
  ShopId: number

  /**
   * 临时id
   */
  TempId: string

  /**
   * 摄像头id
   */
  CameraId: number

  /**
   * pos机id
   */
  PosId?: string

  /**
   * 图片url过期时间：在当前时间+PictureExpires秒后，图片url无法继续正常访问；单位s；默认值1*24*60*60（1天）
   */
  PictureExpires?: number
}

/**
 * 来访客人基本资料
 */
export interface PersonProfile {
  /**
   * 客人编码
   */
  PersonId: string

  /**
   * 性别
   */
  Gender: number

  /**
   * 年龄
   */
  Age: number

  /**
   * 首次到场时间
   */
  FirstArrivedTime: string

  /**
   * 来访次数
   */
  ArrivedCount: number

  /**
   * 客户图片
   */
  PicUrl: string

  /**
   * 置信度
   */
  Similarity: number
}

/**
 * DescribePerson返回参数结构体
 */
export interface DescribePersonResponse {
  /**
   * 总计客户数量
   */
  TotalCount?: number

  /**
   * 客户信息
   */
  PersonSet?: Array<PersonProfile>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTrajectoryData请求参数结构体
 */
export interface DescribeTrajectoryDataRequest {
  /**
   * 集团ID
   */
  CompanyId: string

  /**
   * 店铺ID
   */
  ShopId: number

  /**
   * 开始日期，格式yyyy-MM-dd
   */
  StartDate: string

  /**
   * 结束日期，格式yyyy-MM-dd
   */
  EndDate: string

  /**
   * 限制返回数据的最大条数，最大 400（负数代为 400）
   */
  Limit: number

  /**
   * 顾客性别顾虑，0是男，1是女，其它代表不分性别
   */
  Gender: number
}

/**
 * DescribeZoneTrafficInfo请求参数结构体
 */
export interface DescribeZoneTrafficInfoRequest {
  /**
   * 公司ID
   */
  CompanyId: string

  /**
   * 店铺ID
   */
  ShopId: number

  /**
   * 开始日期，格式yyyy-MM-dd
   */
  StartDate: string

  /**
   * 结束日期，格式yyyy-MM-dd
   */
  EndDate: string

  /**
   * 偏移量：分页控制参数，第一页传0，第n页Offset=(n-1)*Limit
   */
  Offset: number

  /**
   * Limit:每页的数据项，最大100，超过100会被强制指定为100
   */
  Limit: number
}

/**
 * ModifyPersonFeatureInfo返回参数结构体
 */
export interface ModifyPersonFeatureInfoResponse {
  /**
   * 集团ID
   */
  CompanyId?: string

  /**
   * 店铺ID，如果不填表示操作集团身份库
   */
  ShopId?: number

  /**
   * 请求的顾客id
   */
  PersonId?: number

  /**
   * 图片实际绑定person_id，可能与请求的person_id不同，以此id为准
   */
  PersonIdBind?: number

  /**
   * 请求的顾客类型
   */
  PersonType?: number

  /**
   * 与请求的person_id类型相同、与请求图片特征相似的一个或多个person_id，需要额外确认这些id是否是同一个人
   */
  SimilarPersonIds?: Array<number>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 门店区域客流详细信息
 */
export interface ZoneTrafficInfoDetail {
  /**
   * 区域ID
   */
  ZoneId: number

  /**
   * 区域名称
   */
  ZoneName: string

  /**
   * 客流量
   */
  TrafficTotalCount: number

  /**
   * 平均停留时间
   */
  AvgStayTime: number
}

/**
 * DescribeZoneFlowGenderAvrStayTimeByZoneId请求参数结构体
 */
export interface DescribeZoneFlowGenderAvrStayTimeByZoneIdRequest {
  /**
   * 集团ID
   */
  CompanyId: string

  /**
   * 店铺ID
   */
  ShopId: number

  /**
   * 区域ID
   */
  ZoneId: number

  /**
   * 开始日期，格式yyyy-MM-dd
   */
  StartDate: string

  /**
   * 结束日期，格式yyyy-MM-dd
   */
  EndDate: string
}

/**
 * 客流停留统计子结构
 */
export interface ZoneFlowAndAvrStayTime {
  /**
   * 区域id
   */
  ZoneId: number

  /**
   * 区域名称
   */
  ZoneName: string

  /**
   * 人流量
   */
  FlowCount: number

  /**
   * 平均停留时长
   */
  AvrStayTime: number
}

/**
 * 场景图信息
 */
export interface SceneInfo {
  /**
   * 场景图
   */
  ScenePictureURL: string

  /**
   * 抓拍头像左上角X坐标在场景图中的像素点位置
   */
  HeadX: number

  /**
   * 抓拍头像左上角Y坐标在场景图中的像素点位置
   */
  HeadY: number

  /**
   * 抓拍头像在场景图中占有的像素宽度
   */
  HeadWidth: number

  /**
   * 抓拍头像在场景图中占有的像素高度
   */
  HeadHeight: number
}

/**
 * 摄像头抓图人物属性
 */
export interface CameraPersonInfo {
  /**
   * 临时id，还未生成face id时返回
   */
  TempId: string

  /**
   * 人脸face id
   */
  FaceId: number

  /**
   * 确定当次返回的哪个id有效，1-FaceId，2-TempId
   */
  IdType: number

  /**
   * 当次抓拍到的人脸图片base编码
   */
  FacePic: string

  /**
   * 当次抓拍时间戳
   */
  Time: number

  /**
   * 当前的person基本信息，图片以FacePic为准，结构体内未填
   */
  PersonInfo: PersonInfo
}

/**
 * DescribePersonVisitInfo返回参数结构体
 */
export interface DescribePersonVisitInfoResponse {
  /**
   * 公司ID
   */
  CompanyId?: string

  /**
   * 门店ID
   */
  ShopId?: number

  /**
   * 总数
   */
  TotalCount?: number

  /**
   * 用户到访明细
   */
  PersonVisitInfoSet?: Array<PersonVisitInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNetworkInfo请求参数结构体
 */
export interface DescribeNetworkInfoRequest {
  /**
   * 请求时间戳
   */
  Time: number

  /**
   * 优mall集团id，通过"指定身份标识获取客户门店列表"接口获取
   */
  CompanyId: string

  /**
   * 优mall店铺id，通过"指定身份标识获取客户门店列表"接口获取，不填则拉取集团全部店铺当前
   */
  ShopId?: number
}

/**
 * DescribeZoneFlowAndStayTime请求参数结构体
 */
export interface DescribeZoneFlowAndStayTimeRequest {
  /**
   * 集团ID
   */
  CompanyId: string

  /**
   * 店铺ID
   */
  ShopId: number

  /**
   * 开始日期，格式yyyy-MM-dd
   */
  StartDate: string

  /**
   * 结束日期，格式yyyy-MM-dd
   */
  EndDate: string
}

/**
 * DescribeZoneFlowHourlyByZoneId请求参数结构体
 */
export interface DescribeZoneFlowHourlyByZoneIdRequest {
  /**
   * 集团ID
   */
  CompanyId: string

  /**
   * 店铺ID
   */
  ShopId: number

  /**
   * 区域ID
   */
  ZoneId: number

  /**
   * 开始日期，格式yyyy-MM-dd
   */
  StartDate: string

  /**
   * 结束日期，格式yyyy-MM-dd
   */
  EndDate: string
}

/**
 * DescribeFaceIdByTempId返回参数结构体
 */
export interface DescribeFaceIdByTempIdResponse {
  /**
   * 集团id
   */
  CompanyId?: string

  /**
   * 店铺id
   */
  ShopId?: number

  /**
   * 摄像机id
   */
  CameraId?: number

  /**
   * pos机id
   */
  PosId?: string

  /**
   * 请求的临时id
   */
  TempId?: string

  /**
   * 临时id对应的face id
   */
  FaceId?: number

  /**
   * 顾客属性信息
   */
  PersonInfo?: PersonInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 轨迹动线信息子结构
 */
export interface TrajectorySunData {
  /**
   * 区域动线，形如 x-x-x-x-x，其中 x 为区域 ID
   */
  Zones: string

  /**
   * 该动线出现次数
   */
  Count: number

  /**
   * 该动线平均停留时间（秒）
   */
  AvgStayTime: number
}

/**
 * ModifyPersonTagInfo请求参数结构体
 */
export interface ModifyPersonTagInfoRequest {
  /**
   * 优mall集团id，通过"指定身份标识获取客户门店列表"接口获取
   */
  CompanyId: string

  /**
   * 优mall店铺id，通过"指定身份标识获取客户门店列表"接口获取，为0则拉取集团全部店铺当前
   */
  ShopId: number

  /**
   * 需要设置的顾客信息，批量设置最大为10个
   */
  Tags: Array<PersonTagInfo>
}

/**
 * 门店客流量列表信息
 */
export interface ShopDayTrafficInfo {
  /**
   * 日期
   */
  Date: string

  /**
   * 客流量
   */
  DayTrafficTotalCount: number

  /**
   * 性别年龄分组下的客流信息
   */
  GenderAgeTrafficDetailSet: Array<GenderAgeTrafficDetail>
}

/**
 * DescribePerson请求参数结构体
 */
export interface DescribePersonRequest {
  /**
   * 卖场编码
   */
  MallId: string

  /**
   * 查询偏移
   */
  Offset?: number

  /**
   * 查询数量，默认20，最大查询数量100
   */
  Limit?: number
}

/**
 * DescribePersonTrace返回参数结构体
 */
export interface DescribePersonTraceResponse {
  /**
   * 卖场系统编码
   */
  MallId?: string

  /**
   * 卖场用户编码
   */
  MallCode?: string

  /**
   * 客户编码
   */
  PersonId?: string

  /**
   * 轨迹列表
   */
  TraceRouteSet?: Array<PersonTraceRoute>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 客户轨迹序列
 */
export interface PersonTraceRoute {
  /**
   * 轨迹编码
   */
  TraceId: string

  /**
   * 轨迹点序列
   */
  TracePointSet: Array<PersonTracePoint>
}

/**
 * 客户轨迹点
 */
export interface PersonTracePoint {
  /**
   * 卖场区域编码
   */
  MallAreaId: number

  /**
   * 门店编码
   */
  ShopId: number

  /**
   * 卖场区域类型
   */
  MallAreaType: number

  /**
   * 轨迹事件
   */
  TraceEventType: number

  /**
   * 轨迹事件发生时间点
   */
  TraceEventTime: string

  /**
   * 抓拍图片
   */
  CapPic: string

  /**
   * 购物袋类型
   */
  ShoppingBagType: number

  /**
   * 购物袋数量
   */
  ShoppingBagCount: number
}

/**
 * 门店区域客流信息
 */
export interface ZoneTrafficInfo {
  /**
   * 日期
   */
  Date: string

  /**
   * 门店区域客流详细信息
   */
  ZoneTrafficInfoDetailSet: Array<ZoneTrafficInfoDetail>
}

/**
 * DescribeNetworkInfo返回参数结构体
 */
export interface DescribeNetworkInfoResponse {
  /**
   * 网络状态详情
   */
  InstanceSet?: NetworkLastInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 网络状态
 */
export interface NetworkAndShopInfo {
  /**
   * 集团id
   */
  CompanyId: string

  /**
   * 店铺id
   */
  ShopId: number

  /**
   * 店铺省份
   */
  Province: string

  /**
   * 店铺城市
   */
  City: string

  /**
   * 店铺名
   */
  ShopName: string

  /**
   * 上传带宽，单位Mb/s，-1：未知
   */
  Upload: number

  /**
   * 下载带宽，单位Mb/s，-1：未知
   */
  Download: number

  /**
   * 最小延迟，单位ms，-1：未知
   */
  MinRtt: number

  /**
   * 平均延迟，单位ms，-1：未知
   */
  AvgRtt: number

  /**
   * 最大延迟，单位ms，-1：未知
   */
  MaxRtt: number

  /**
   * 平均偏差延迟，单位ms，-1：未知
   */
  MdevRtt: number

  /**
   * 丢包率百分比，-1：未知
   */
  Loss: number

  /**
   * 更新时间戳
   */
  UpdateTime: number

  /**
   * 上报网络状态设备
   */
  Mac: string
}

/**
 * DescribeZoneFlowGenderInfoByZoneId请求参数结构体
 */
export interface DescribeZoneFlowGenderInfoByZoneIdRequest {
  /**
   * 集团ID
   */
  CompanyId: string

  /**
   * 店铺ID
   */
  ShopId: number

  /**
   * 区域ID
   */
  ZoneId: number

  /**
   * 开始日期，格式yyyy-MM-dd
   */
  StartDate: string

  /**
   * 结束日期，格式yyyy-MM-dd
   */
  EndDate: string
}

/**
 * DescribeShopHourTrafficInfo请求参数结构体
 */
export interface DescribeShopHourTrafficInfoRequest {
  /**
   * 公司ID
   */
  CompanyId: string

  /**
   * 门店ID
   */
  ShopId: number

  /**
   * 开始日期，格式：yyyy-MM-dd
   */
  StartDate: string

  /**
   * 结束日期，格式：yyyy-MM-dd
   */
  EndDate: string

  /**
   * 偏移量：分页控制参数，第一页传0，第n页Offset=(n-1)*Limit
   */
  Offset: number

  /**
   * Limit:每页的数据项，最大100，超过100会被强制指定为100
   */
  Limit: number
}

/**
 * RegisterCallback请求参数结构体
 */
export interface RegisterCallbackRequest {
  /**
   * 集团id，通过"指定身份标识获取客户门店列表"接口获取
   */
  CompanyId: string

  /**
   * 通知回调地址，完整url，示例（http://youmall.tencentcloudapi.com/）
   */
  BackUrl: string

  /**
   * 请求时间戳
   */
  Time: number

  /**
   * 是否需要顾客图片，1-需要图片，其它-不需要图片
   */
  NeedFacePic?: number
}

/**
 * DescribeShopInfo请求参数结构体
 */
export interface DescribeShopInfoRequest {
  /**
   * 偏移量：分页控制参数，第一页传0，第n页Offset=(n-1)*Limit
   */
  Offset: number

  /**
   * Limit:每页的数据项，最大100，超过100会被强制指定为100
   */
  Limit: number
}

/**
 * 查询网络状态历史数据输出
 */
export interface NetworkHistoryInfo {
  /**
   * 总数
   */
  Count: number

  /**
   * 集团id
   */
  CompanyId: string

  /**
   * 店铺id
   */
  ShopId: number

  /**
   * 店铺省份
   */
  Province: string

  /**
   * 店铺城市
   */
  City: string

  /**
   * 店铺名称
   */
  ShopName: string

  /**
   * 网络信息
   */
  Infos: Array<NetworkInfo>
}

/**
 * 用户信息
 */
export interface PersonInfo {
  /**
   * 用户ID
   */
  PersonId: number

  /**
   * 人脸图片Base64内容，已弃用，返回默认空值
   */
  PersonPicture: string

  /**
   * 性别：0男1女
   */
  Gender: number

  /**
   * 年龄
   */
  Age: number

  /**
   * 身份类型（0表示普通顾客，1 白名单，2 表示黑名单）
   */
  PersonType: number

  /**
   * 人脸图片Url，在有效期内可以访问下载
   */
  PersonPictureUrl: string

  /**
      * 身份子类型:
PersonType=0时(普通顾客)，0普通顾客
PersonType=1时(白名单)，0店员，1商场人员，2其他类型人员，3区域经理，4注册用户，5VIP用户
PersonType=2时(黑名单)，0普通黑名单，1小偷)
      */
  PersonSubType: number

  /**
   * 到访次数，-1表示未知
   */
  VisitTimes: number

  /**
   * 到访天数，-1表示未知
   */
  VisitDays: number
}

/**
 * 修改顾客属性参数
 */
export interface PersonTagInfo {
  /**
   * 顾客原类型
   */
  OldType: number

  /**
   * 顾客新类型
   */
  NewType: number

  /**
   * 顾客face id
   */
  PersonId: number
}

/**
 * 客流统计分时数据子结构
 */
export interface ZoneHourFlow {
  /**
   * 分时 0~23
   */
  Hour: number

  /**
   * 客流量
   */
  FlowCount: number
}

/**
 * 分时客流量信息
 */
export interface ShopHourTrafficInfo {
  /**
   * 日期，格式yyyy-MM-dd
   */
  Date: string

  /**
   * 分时客流详细信息
   */
  HourTrafficInfoDetailSet: Array<HourTrafficInfoDetail>
}

/**
 * DescribeClusterPersonTrace请求参数结构体
 */
export interface DescribeClusterPersonTraceRequest {
  /**
   * 卖场编码
   */
  MallId: string

  /**
   * 客户编码
   */
  PersonId: string

  /**
   * 查询开始时间
   */
  StartTime: string

  /**
   * 查询结束时间
   */
  EndTime: string
}

/**
 * 轨迹点坐标
 */
export interface PersonCoordinate {
  /**
   * CAD图X坐标
   */
  CADX: number

  /**
   * CAD图Y坐标
   */
  CADY: number

  /**
   * 抓拍时间点
   */
  CapTime: string

  /**
   * 抓拍图片
   */
  CapPic: string

  /**
   * 卖场区域类型
   */
  MallAreaType: number

  /**
   * 坐标编号
   */
  PosId: number

  /**
   * 门店编号
   */
  ShopId: number

  /**
   * 事件
   */
  Event: string
}

/**
 * ModifyPersonFeatureInfo请求参数结构体
 */
export interface ModifyPersonFeatureInfoRequest {
  /**
   * 集团ID
   */
  CompanyId: string

  /**
   * 需要修改的顾客id
   */
  PersonId: number

  /**
   * 图片BASE编码
   */
  Picture: string

  /**
   * 图片名称（尽量不要重复）
   */
  PictureName: string

  /**
   * 人物类型，仅能操作黑白名单顾客（1 白名单，2 表示黑名单，101表示集团白名单，102表示集团黑名单）
   */
  PersonType: number

  /**
   * 店铺ID，如果不填表示操作集团身份库
   */
  ShopId?: number
}

/**
 * 每日客流统计子结构
 */
export interface ZoneDayFlow {
  /**
   * 日期，如 2018-08-6
   */
  Day: string

  /**
   * 客流量
   */
  FlowCount: number
}

/**
 * DescribePersonTrace请求参数结构体
 */
export interface DescribePersonTraceRequest {
  /**
   * 卖场编码
   */
  MallId: string

  /**
   * 客户编码
   */
  PersonId: string

  /**
   * 查询开始时间
   */
  StartTime: string

  /**
   * 查询结束时间
   */
  EndTime: string
}

/**
 * DescribeZoneFlowHourlyByZoneId返回参数结构体
 */
export interface DescribeZoneFlowHourlyByZoneIdResponse {
  /**
   * 集团ID
   */
  CompanyId?: string

  /**
   * 店铺ID
   */
  ShopId?: number

  /**
   * 区域ID
   */
  ZoneId?: number

  /**
   * 区域名称
   */
  ZoneName?: string

  /**
   * 各个分时人流量
   */
  Data?: Array<ZoneHourFlow>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeZoneFlowDailyByZoneId请求参数结构体
 */
export interface DescribeZoneFlowDailyByZoneIdRequest {
  /**
   * 集团ID
   */
  CompanyId: string

  /**
   * 店铺ID
   */
  ShopId: number

  /**
   * 区域ID
   */
  ZoneId: number

  /**
   * 开始日期，格式yyyy-MM-dd
   */
  StartDate: string

  /**
   * 结束日期，格式yyyy-MM-dd
   */
  EndDate: string
}

/**
 * DescribePersonInfo返回参数结构体
 */
export interface DescribePersonInfoResponse {
  /**
   * 公司ID
   */
  CompanyId?: string

  /**
   * 门店ID
   */
  ShopId?: number

  /**
   * 总数
   */
  TotalCount?: number

  /**
   * 用户信息
   */
  PersonInfoSet?: Array<PersonInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 客户天轨迹
 */
export interface DailyTracePoint {
  /**
   * 轨迹日期
   */
  TraceDate: string

  /**
   * 轨迹点序列
   */
  TracePointSet: Array<PersonTracePoint>
}

/**
 * CreateAccount返回参数结构体
 */
export interface CreateAccountResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeHistoryNetworkInfo返回参数结构体
 */
export interface DescribeHistoryNetworkInfoResponse {
  /**
   * 网络状态数据
   */
  InstanceSet?: NetworkHistoryInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateFacePicture返回参数结构体
 */
export interface CreateFacePictureResponse {
  /**
   * 人物ID
   */
  PersonId?: number

  /**
   * 0.正常建档 1.重复身份 2.未检测到人脸 3.检测到多个人脸 4.人脸大小过小 5.人脸质量不达标 6.其他错误
   */
  Status?: number

  /**
   * 图片url
   */
  PictureUrl?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeShopInfo返回参数结构体
 */
export interface DescribeShopInfoResponse {
  /**
   * 门店总数
   */
  TotalCount?: number

  /**
   * 门店列表信息
   */
  ShopInfoSet?: Array<ShopInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用户到访明细
 */
export interface PersonVisitInfo {
  /**
   * 用户ID
   */
  PersonId: number

  /**
   * 用户到访ID
   */
  VisitId: number

  /**
   * 到访时间：Unix时间戳
   */
  InTime: number

  /**
   * 抓拍到的头像Base64内容，已弃用，返回默认空值
   */
  CapturedPicture: string

  /**
   * 口罩类型：0不戴口罩，1戴口罩
   */
  MaskType: number

  /**
   * 眼镜类型：0不戴眼镜，1普通眼镜 , 2墨镜
   */
  GlassType: number

  /**
   * 发型：0 短发,  1长发
   */
  HairType: number

  /**
   * 抓拍到的头像Url，在有效期内可以访问下载
   */
  CapturedPictureUrl: string

  /**
   * 抓拍头像的场景图信息
   */
  SceneInfo: SceneInfo
}

/**
 * CreateFacePicture请求参数结构体
 */
export interface CreateFacePictureRequest {
  /**
   * 集团ID
   */
  CompanyId: string

  /**
   * 人物类型（0表示普通顾客，1 白名单，2 表示黑名单，101表示集团白名单，102表示集团黑名单）
   */
  PersonType: number

  /**
   * 图片BASE编码
   */
  Picture: string

  /**
   * 图片名称
   */
  PictureName: string

  /**
   * 店铺ID，如果不填表示操作集团身份库
   */
  ShopId?: number

  /**
   * 是否强制更新：为ture时会为用户创建一个新的指定PersonType的身份;目前这个参数已废弃，可不传
   */
  IsForceUpload?: boolean
}

/**
 * DescribeZoneFlowAgeInfoByZoneId请求参数结构体
 */
export interface DescribeZoneFlowAgeInfoByZoneIdRequest {
  /**
   * 集团ID
   */
  CompanyId: string

  /**
   * 店铺ID
   */
  ShopId: number

  /**
   * 区域ID
   */
  ZoneId: number

  /**
   * 开始日期，格式yyyy-MM-dd
   */
  StartDate: string

  /**
   * 结束日期，格式yyyy-MM-dd
   */
  EndDate: string
}

/**
 * 客户所属的门店信息
 */
export interface ShopInfo {
  /**
   * 公司ID
   */
  CompanyId: string

  /**
   * 门店ID
   */
  ShopId: number

  /**
   * 门店名称
   */
  ShopName: string

  /**
   * 客户门店编码
   */
  ShopCode: string

  /**
   * 省
   */
  Province: string

  /**
   * 市
   */
  City: string

  /**
   * 公司名称
   */
  CompanyName: string
}

/**
 * ModifyPersonType请求参数结构体
 */
export interface ModifyPersonTypeRequest {
  /**
   * 集团ID
   */
  CompanyId: string

  /**
   * 门店ID
   */
  ShopId: number

  /**
   * 顾客ID
   */
  PersonId: number

  /**
   * 身份类型(0表示普通顾客，1 白名单，2 表示黑名单）
   */
  PersonType: number

  /**
      * 身份子类型:
PersonType=0时(普通顾客)，0普通顾客
PersonType=1时(白名单)，0店员，1商场人员，2其他类型人员，3区域经理，4注册会员，5VIP用户
PersonType=2时(黑名单)，0普通黑名单，1小偷)
      */
  PersonSubType: number
}

/**
 * 客户到场信息
 */
export interface ArrivedMallInfo {
  /**
   * 到场时间
   */
  ArrivedTime: string

  /**
   * 出场时间
   */
  LeaveTime: string

  /**
   * 停留时间，秒
   */
  StaySecond: number

  /**
   * 到场抓拍图片
   */
  InCapPic: string

  /**
   * 出场抓拍图片
   */
  OutCapPic: string

  /**
   * 轨迹编码
   */
  TraceId: string
}

/**
 * 区域性别平均停留时间子结构
 */
export interface ZoneAgeGroupAvrStayTime {
  /**
   * 男性平均停留时间
   */
  MaleAvrStayTime: number

  /**
   * 女性平均停留时间
   */
  FemaleAvrStayTime: number
}

/**
 * DescribePersonArrivedMall请求参数结构体
 */
export interface DescribePersonArrivedMallRequest {
  /**
   * 卖场编码
   */
  MallId: string

  /**
   * 客户编码
   */
  PersonId: string

  /**
   * 查询开始时间
   */
  StartTime: string

  /**
   * 查询结束时间
   */
  EndTime: string
}

/**
 * DescribeCameraPerson请求参数结构体
 */
export interface DescribeCameraPersonRequest {
  /**
   * 优mall集团id，通过"指定身份标识获取客户门店列表"接口获取
   */
  CompanyId: string

  /**
   * 优mall店铺id，通过"指定身份标识获取客户门店列表"接口获取
   */
  ShopId: number

  /**
   * 摄像头id
   */
  CameraId: number

  /**
   * 拉取开始时间戳，单位秒
   */
  StartTime: number

  /**
   * 拉取结束时间戳，单位秒，不超过StartTime+10秒，超过默认为StartTime+10
   */
  EndTime: number

  /**
   * pos机id
   */
  PosId?: string

  /**
   * 拉取图片数，默认为1，最大为3
   */
  Num?: number

  /**
   * 是否需要base64的图片，0-不需要，1-需要，默认0
   */
  IsNeedPic?: number
}

/**
 * DescribeShopTrafficInfo返回参数结构体
 */
export interface DescribeShopTrafficInfoResponse {
  /**
   * 公司ID
   */
  CompanyId?: string

  /**
   * 门店ID
   */
  ShopId?: number

  /**
   * 查询结果总数
   */
  TotalCount?: number

  /**
   * 客流信息列表
   */
  ShopDayTrafficInfoSet?: Array<ShopDayTrafficInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTrajectoryData返回参数结构体
 */
export interface DescribeTrajectoryDataResponse {
  /**
   * 集团ID
   */
  CompanyId?: string

  /**
   * 店铺ID
   */
  ShopId?: number

  /**
   * 总人数
   */
  TotalPerson?: number

  /**
   * 总动迹数目
   */
  TotalTrajectory?: number

  /**
   * 返回动迹中的总人数
   */
  Person?: number

  /**
   * 返回动迹的数目
   */
  Trajectory?: number

  /**
   * 返回动迹的具体信息
   */
  Data?: Array<TrajectorySunData>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
