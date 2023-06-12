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
 * 用户信息
 */
export interface UserIdInfo {
  /**
   * 用户ID类型：
1 - qq
2 - qq_md5：md5后的qq
3 - imei：设备imei（安卓10之后不会再授权imei，安卓10之后的imei映射关系可能拿不到，故安卓10之后的设备建议用oaid）
4 - imei_md5：md5后的imei
5 - idfa: Apple 向用户设备随机分配的设备标识符
6 - idfa_md5：md5之后的idfa
7 - gdt_openid：广点通生成的openid
8 - oaid：安卓10之后一种非永久性设备标识符
9 - oaid_md5：md5后的oaid
10 - wx_openid：微信openid
11 - qq_openid：QQ的openid
12 - phone：电话号码
13 - phone_md5：md5后的电话号码
14 - phone_sha256：SHA256加密的手机号
15 - phone_sm3：国密SM3加密的手机号
1000 - 客户自定义id
   */
  UserIdType: number
  /**
   * 用户id
   */
  UserId: string
}

/**
 * ReportMaterial返回参数结构体
 */
export interface ReportMaterialResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 行为数据
 */
export interface DocBehavior {
  /**
   * 内容唯一ID，如 2824324234
   */
  ItemId: string
  /**
   * 行为类型
   */
  BehaviorType: number
  /**
   * 行为值
   */
  BehaviorValue: string
  /**
   * 行为时间戳： 秒级时间戳（默认为当前时间）,不能延迟太久，尽量实时上报，否则会影响推荐结果的准确性。
   */
  BehaviorTimestamp: number
  /**
   * 场景id，在控制台创建场景后获取。
   */
  SceneId: string
  /**
   * 用户id列表
   */
  UserIdList: Array<UserIdInfo>
  /**
   * 会话id，使用获取推荐结果中返回的RecTraceId填入。<br>注意：如果和在线推荐请求中的traceId不同，会影响行为特征归因，影响推荐算法效果
   */
  RecTraceId: string
  /**
   * 算法来源：用来区分行为来源于哪个算法。值为**business，tencent，other** 三者之一<br>● business 表示业务自己的算法对照组<br>● tencent 为腾讯算法<br>● other 为其他算法
   */
  Source: string
  /**
   * 物料类型
   */
  ItemType?: number
  /**
   * 微信开放平台上查看appId
   */
  AppId?: string
  /**
   * 回传video_over事件的时候，回传的用户播放视频的总时长（真正播放的，拖动不算，单位为秒）
   */
  VideoPlayDuration?: number
  /**
   * 来源物料内容：用来标识在指定内容页面产生的行为，如需要统计用户在A内容详情页里，对推荐内容B点击等行为，则ReferrerItemId代表内容A，ItemId代表内容B
   */
  ReferrerItemId?: string
  /**
   * 国家，统一用简写，比如中国则填写CN
   */
  Country?: string
  /**
   * 省
   */
  Province?: string
  /**
   * 城市
   */
  City?: string
  /**
   * 区县
   */
  District?: string
  /**
   * 客户端ip
   */
  IP?: string
  /**
   * 客户端网络类型
   */
  Network?: string
  /**
   * 客户端平台，ios/android/h5
   */
  Platform?: string
  /**
   * 客户端app版本
   */
  AppVersion?: string
  /**
   * 操作系统版本
   */
  OsVersion?: string
  /**
   * 机型
   */
  DeviceModel?: string
  /**
   * json字符串，用于行为数据的扩展
   */
  Extension?: string
}

/**
 * 作者信息
 */
export interface AuthorInfo {
  /**
   * 作者id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * 作者名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 作者来源
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceId?: number
  /**
   * 关注类型：1-关注，2-取关
注意：此字段可能返回 null，表示取不到有效值。
   */
  FollowType?: number
  /**
   * 作者头像icon地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  IconUrl?: string
}

/**
 * 推荐物料信息
 */
export interface DocItem {
  /**
   * 内容唯一id
   */
  ItemId: string
  /**
   * 内容类型
   */
  ItemType: number
  /**
   * 内容状态：1 - 上架， 2 - 下架
   */
  Status: number
  /**
   * 内容生成时间，秒级时间戳（1639624786），需大于0
   */
  PublishTimestamp: number
  /**
   * 物料来源ID
   */
  SourceId?: number
  /**
   * 标题名称
   */
  Title?: string
  /**
   * 内容正文
   */
  Content?: string
  /**
   * 作者
   */
  Author?: string
  /**
   * 作者id
   */
  AuthorId?: string
  /**
   * 标签关键词，多个用英文分号分割
   */
  Keyword?: string
  /**
   * 内容物料描述：物料的描述信息，推荐系统会对内容的描述信息，使用否LP技术，进行分词、提取关键词，作为news的特征使用。
   */
  Desc?: string
  /**
   * 图片url
   */
  PicUrlList?: Array<string>
  /**
   * 视频url
   */
  VideoUrlList?: Array<string>
  /**
   * 视频时长，时间秒
   */
  VideoDuration?: number
  /**
   * 类目层级数，例如3级类目，则填3，和CategoryPath字段的类数据匹配
   */
  CategoryLevel?: number
  /**
   * 类目路径，一级二级三级等依次用英文冒号联接，如体育：“足球:巴塞罗那”
   */
  CategoryPath?: string
  /**
   * 国家，统一用简写，比如中国则填写CN
   */
  Country?: string
  /**
   * 省
   */
  Province?: string
  /**
   * 城市
   */
  City?: string
  /**
   * 区县
   */
  District?: string
  /**
   * 内容过期时间，秒级时间戳（1639624786），如未填，则默认PublishTimestamp往后延一年
   */
  ExpireTimestamp?: number
  /**
   * 所属话题
   */
  Topic?: string
  /**
   * 作者粉丝数
   */
  AuthorFans?: number
  /**
   * 作者评级
   */
  AuthorLevel?: string
  /**
   * 内容累计收藏次数
   */
  CollectCnt?: number
  /**
   * 内容累积点赞次数
   */
  PraiseCnt?: number
  /**
   * 内容累计评论次数
   */
  CommentCnt?: number
  /**
   * 内容累计分享次数
   */
  ShareCnt?: number
  /**
   * 内容累积打赏数
   */
  RewardCnt?: number
  /**
   * 内容质量评分，类似豆瓣电影的评分，这里为100分制，比如97分，满分100分，最低0分，范围外的将会被拦截
   */
  Score?: number
  /**
   * 内容池id，用于分内容池召回，一个内容支持指定一个或多个内容池， 内容池id不建议使用0（0表示不区分内容池）
   */
  PoolIdList?: Array<string>
  /**
   * 描述用户标签
   */
  TagInfoList?: Array<TagInfo>
  /**
   * json字符串，用于物料数据的扩展
   */
  Extension?: string
}

/**
 * ReportAction返回参数结构体
 */
export interface ReportActionResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 不喜欢信息
 */
export interface DislikeInfo {
  /**
   * 不喜欢的物料类别，对应物料上传协议中的字段名，如authorId，keyword，topic等
   */
  Type: string
  /**
   * type对应字段名的值，如具体的topic名，作者id等
   */
  Value: string
}

/**
 * ReportPortrait请求参数结构体
 */
export interface ReportPortraitRequest {
  /**
   * 推荐平台上的业务id
   */
  Bid: string
  /**
   * 上报的用户画像数组，数量不超过50
   */
  PortraitList: Array<PortraitInfo>
}

/**
 * ReportPortrait返回参数结构体
 */
export interface ReportPortraitResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ReportAction请求参数结构体
 */
export interface ReportActionRequest {
  /**
   * 业务id
   */
  Bid: string
  /**
   * 上报的行为对象数组，数量不超过50
   */
  DocBehaviorList: Array<DocBehavior>
}

/**
 * 画像信息
 */
export interface PortraitInfo {
  /**
   * 用户id列表
   */
  UserIdList: Array<UserIdInfo>
  /**
   * 如果"userIdType"是10则必传，在微信开放平台上查看appId
   */
  AppId?: string
  /**
   * 用户年龄，值域在 0-200
   */
  Age?: number
  /**
   * 用户性别：0-未知，1-男， 2-女
   */
  Gender?: number
  /**
   * 用户学历 ：小学，初中，高中，大专，本科，硕士，博士
   */
  Degree?: string
  /**
   * 用户毕业学校全称
   */
  School?: string
  /**
   * 用户职业，保证业务的唯一性
   */
  Occupation?: string
  /**
   * 用户所属行业，保证业务的唯一性
   */
  Industry?: string
  /**
   * 用户常驻国家，统一用简写，比如中国则填写CN
   */
  ResidentCountry?: string
  /**
   * 用户常驻省份
   */
  ResidentProvince?: string
  /**
   * 用户常驻城市
   */
  ResidentCity?: string
  /**
   * 用户常驻区县
   */
  ResidentDistrict?: string
  /**
   * 用户手机的MD5值
   */
  PhoneMd5?: string
  /**
   * 用户手机的IMEI号
   */
  PhoneImei?: string
  /**
   * 设备idfa信息
   */
  Idfa?: string
  /**
   * 用户注册时间，秒级时间戳（1639624786）
   */
  RegisterTimestamp?: number
  /**
   * 用户会员等级
   */
  MembershipLevel?: string
  /**
   * 用户上一次登录时间，秒级时间戳（1639624786）
   */
  LastLoginTimestamp?: number
  /**
   * 用户上一次登录的ip
   */
  LastLoginIp?: string
  /**
   * 用户信息的最后修改时间戳，秒级时间戳（1639624786）
   */
  LastModifyTimestamp?: number
  /**
   * 用户标签
   */
  TagInfoList?: Array<TagInfo>
  /**
   * 用户关注作者列表
   */
  AuthorInfoList?: Array<AuthorInfo>
  /**
   * 用户不喜欢列表
   */
  DislikeInfoList?: Array<DislikeInfo>
  /**
   * json字符串，用于画像数据的扩展
   */
  Extension?: string
  /**
   * 设备oaid信息
   */
  Oaid?: string
  /**
   * 设备AndroidId信息
   */
  AndroidId?: string
}

/**
 * RecommendContent请求参数结构体
 */
export interface RecommendContentRequest {
  /**
   * 业务id
   */
  Bid: string
  /**
   * 场景id：比如有“猜你喜欢”，“热门内容”等推荐模块，每一个模块都有一个scene_id来表示。 在控制台创建场景后获取。需要跟行为上报时的id一致
   */
  SceneId: string
  /**
   * 用户唯一ID数组，每个数组元素详见userId结构体，若不填，则接口返回热门结果
   */
  UserIdList?: Array<UserIdInfo>
  /**
   * 会话id：必须和行为数据上报时所填写的traceId相同，用于行为数据来自于那次在线推荐请求的归因。**注意：此处如果没传，则响应会返回一个全局唯一ID返回给客户，并需客户透传给行为日志上报接口**
   */
  RecTraceId?: string
  /**
   * 推荐数量：物料优选的结果， 默认50个，目前最多支持200个的内容返回，如果返回个数更多，会影响性能，容易超时。
   */
  ItemCnt?: number
  /**
   * 物料池id，用于召回该pool_id下的商品，如果有多个，用英文;分割。**注意：此处poolId需和物料上报时的poolIdList对应上**
   */
  PoolId?: string
  /**
   * 来源物料id，即用户当前浏览的物料id，用于在内容详情页获取关联推荐内容
   */
  CurrentItemId?: string
  /**
   * 请求响应超时时间，单位ms，默认300ms，数值设置的过小，会影响推荐效果，最小支持250ms
   */
  ResponseTimeout?: number
  /**
   * 返回结果中不同物料类型的比例，比例顺序需严格按照（图文，长视频，短视频，小视频）进行。只允许传[0,100]数字，多个请用**英文冒号**分割，且加起来不能超过100，以及比例数量不能超过**场景绑定的物料类型**（图文，长视频，短视频，小视频）数。**示例：**图文和短视频比例为40%:60%时，则填40:60图文和短视频比例为0%:100%时，则填0:100图文，长视频和短视频的比例为，图文占20%，剩余80%由长视频和短视频随机返回，则填20:80或仅填20均可
   */
  ItemTypeRatio?: string
}

/**
 * 推荐内容信息
 */
export interface RecItemData {
  /**
   * 推荐的内容id，即用户行为上报中的itemId
   */
  ItemId: string
  /**
   * 物料子类型，包括如下： 1-图文、2-长视频（横视频）、3-短视频（横视频）、4-小说、5-小视频（竖视频）、6-纯文本
注意：此字段可能返回 null，表示取不到有效值。
   */
  ItemType: number
  /**
   * 推荐内容的权重，取值范围[0,1000000]
注意：此字段可能返回 null，表示取不到有效值。
   */
  Weight: number
  /**
   * 推荐预测分
注意：此字段可能返回 null，表示取不到有效值。
   */
  Score: number
  /**
   * 关键词，多个用英文分号分割，和物料上传的keyword一致
注意：此字段可能返回 null，表示取不到有效值。
   */
  Keyword: string
}

/**
 * ReportMaterial请求参数结构体
 */
export interface ReportMaterialRequest {
  /**
   * 业务id
   */
  Bid: string
  /**
   * 上报的信息流数组，一次数量不超过50
   */
  DocItemList: Array<DocItem>
}

/**
 * RecommendContent返回参数结构体
 */
export interface RecommendContentResponse {
  /**
   * 推荐追踪id，用于行为上报。每次接口调用返回的traceId不同
   */
  RecTraceId: string
  /**
   * 标识具体的物料信息
   */
  DataList: Array<RecItemData>
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 标题信息
 */
export interface TagInfo {
  /**
   * 标签id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * 标签名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 推荐权重
注意：此字段可能返回 null，表示取不到有效值。
   */
  Weight?: number
}
