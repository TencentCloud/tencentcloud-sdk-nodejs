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
 * 信息流用户信息
 */
export interface FeedUserInfo {
  /**
   * 用户唯一ID，客户自定义用户ID，作为一个用户的唯一标识
   */
  UserId: string
  /**
   * 用户设备ID数组，可传入用户的多个类型ID，详见UserIdInfo结构体，建议补齐，<b>用于构建用户画像信息</b>
   */
  UserIdList?: Array<UserIdInfo>
  /**
   * 用户标签，多个标签用英文冒号联接，<b>用作特征，强烈建议</b>
   */
  Tags?: string
  /**
   * 过滤列表，<b>会在推荐结果里过滤掉这类内容</b>
   */
  DislikeInfoList?: Array<DislikeInfo>
  /**
   * 用户年龄
   */
  Age?: number
  /**
   * 用户性别： 0 - 未知 1 - 男 2 - 女
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
   * 用户职业
   */
  Occupation?: string
  /**
   * 用户所属行业
   */
  Industry?: string
  /**
   * 用户常驻国家，ISO 3166-1 alpha-2编码，参考<a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2" target="_blank">ISO 3166-1 alpha-2</a>，中国：“CN”
   */
  ResidentCountry?: string
  /**
   * 用户常驻省份，ISO 3166-2行政区编码，如中国参考<a href="https://zh.wikipedia.org/wiki/ISO_3166-2:CN" target="_blank">ISO_3166-2:CN</a>，广东省：“CN-GD”
   */
  ResidentProvince?: string
  /**
   * 用户常驻城市，统一用国家最新标准地区行政编码，如：<a href="https://www.mca.gov.cn/article/sj/xzqh/2020/" target="_blank">2020年行政区编码</a>，
   */
  ResidentCity?: string
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
   * json字符串，用于画像数据的扩展，需要base64加密
   */
  Extension?: string
}

/**
 * 信息流内容
 */
export interface DocItem {
  /**
   * 内容唯一id，建议限制在128字符以内
   */
  ItemId: string
  /**
   * 内容类型：<br/>● article -图文<br>● text -纯文本<br/>● video -视频<br/>● short_video -时长15秒以内的视频<br/>● mini_video -竖屏视频<br/>● image -纯图片<br/>（如当前类型不满足，请登录控制台进入对应项目，在<b>物料管理->物料类型管理</b>中添加）
   */
  ItemType: string
  /**
   * 内容状态：
● 1 - 上架 
● 2 - 下架 
Status=2的内容不会在推荐结果中出现 
需要下架内容时，把Status的值修改为2即可
   */
  Status: number
  /**
   * 内容生成时间，秒级时间戳（1639624786），需大于0，<b>用作特征和物料管理</b>
   */
  PublishTimestamp: number
  /**
   * 内容过期时间，秒级时间戳（1639624786），如未填，则默认PublishTimestamp往后延一年，用作特征，过期则不会被推荐，<b>强烈建议</b>
   */
  ExpireTimestamp?: number
  /**
   * 类目层级数，例如3级类目，则填3，和CategoryPath字段的类数据匹配，<b>强烈建议</b>
   */
  CategoryLevel?: number
  /**
   * 类目路径，一级二级三级等依次用英文冒号联接，和CategoryLevel字段值匹配，如体育：“足球:巴塞罗那”。<b>用于物料池管理，强烈建议</b>
   */
  CategoryPath?: string
  /**
   * 内容标签，多个标签用英文冒号联接，<b>用作特征，强烈建议</b>
   */
  Tags?: string
  /**
   * 作者名，需保证作者名唯一，若有重名需要加编号区分。<b>用于召回过滤、规则打散，强烈建议</b>
   */
  Author?: string
  /**
   * 内容来源类型，客户自定义，<b>用于物料池管理</b>
   */
  SourceId?: string
  /**
   * 内容标题，<b>主要用于语义分析</b>
   */
  Title?: string
  /**
   * 正文关键片段，建议控制在500字符以内，<b>主要用于语义分析</b>
   */
  Content?: string
  /**
   * 正文详情，主要用于语义分析，当内容过大时建议用ContentUrl传递，<b>与Content可二选一</b>
   */
  ContentUrl?: string
  /**
   * 视频时长，时间秒，大于等于0，小于 3600 * 10。<b>视频内容必填，其它内容非必填，用作特征</b>
   */
  VideoDuration?: number
  /**
   * 国家，ISO 3166-1 alpha-2编码，参考<a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2" target="_blank">ISO 3166-1 alpha-2</a>，中国：“CN”，<b>用作特征</b>
   */
  Country?: string
  /**
   * 省份，ISO 3166-2行政区编码，如中国参考<a href="https://zh.wikipedia.org/wiki/ISO_3166-2:CN" target="_blank">ISO_3166-2:CN</a>，广东省：“CN-GD”，<b>用作特征</b>
   */
  Province?: string
  /**
   * 城市地区，统一用国家最新标准地区行政编码，如：<a href="https://www.mca.gov.cn/article/sj/xzqh/2020/" target="_blank">2020年行政区编码</a>，其他国家统一用国际公认城市简称或者城市编码，<b>用作特征</b>
   */
  City?: string
  /**
   * 作者粉丝数，<b>用作特征</b>
   */
  AuthorFans?: number
  /**
   * 作者评级，<b>用作特征</b>
   */
  AuthorLevel?: string
  /**
   * 内容累计收藏次数，<b>用作特征</b>
   */
  CollectCnt?: number
  /**
   * 内容累积点赞次数，<b>用作特征</b>
   */
  PraiseCnt?: number
  /**
   * 内容累计评论次数，<b>用作特征</b>
   */
  CommentCnt?: number
  /**
   * 内容累计分享次数，<b>用作特征</b>
   */
  ShareCnt?: number
  /**
   * 内容累积打赏数，<b>用作特征</b>
   */
  RewardCnt?: number
  /**
   * 内容质量评分，<b>用作特征</b>
   */
  Score?: number
  /**
   * json字符串，<b>用于物料池管理的自定义扩展</b>，需要base64加密
   */
  Extension?: string
}

/**
 * ReportFeedItem请求参数结构体
 */
export interface ReportFeedItemRequest {
  /**
   * 实例ID，在控制台获取
   */
  InstanceId: string
  /**
   * 上报的信息流内容数组，一次数量不超过50
   */
  FeedItemList: Array<DocItem>
}

/**
 * ReportGoodsBehavior返回参数结构体
 */
export interface ReportGoodsBehaviorResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用户ID信息
 */
export interface UserIdInfo {
  /**
   * 用户ID类型： <br/>● qq: qq号码 <br/>● qq_md5：qq的md5值 <br/>● imei：设备imei <br/>● imei_md5：imei的md5值 <br/>● idfa: Apple 向用户设备随机分配的设备标识符 <br/>● idfa_md5：idfa的md5值 <br/>● oaid：安卓10之后一种非永久性设备标识符 <br/>● oaid_md5：md5后的oaid <br/>● wx_openid：微信openid <br/>● qq_openid：QQ的openid <br/>● phone：电话号码 <br/>● phone_md5：md5后的电话号码 <br/>● phone_sha256：SHA256加密的手机号 <br/>● phone_sm3：国密SM3加密的手机号 <br/>（如当前类型不满足，请<a href="https://console.cloud.tencent.com/workorder/category" target="_blank">提单</a>沟通解决方案）
   */
  Type: string
  /**
   * 用户ID值
   */
  Value: string
}

/**
 * FeedRecommend返回参数结构体
 */
export interface FeedRecommendResponse {
  /**
   * 推荐返回的内容信息列表，返回结果已按策略规则做好了排序
   */
  DataList?: Array<RecItemData>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用户基础画像
 */
export type UserPortraitInfo = null

/**
 * 推荐返回的内容信息
 */
export interface RecGoodsData {
  /**
   * 推荐返回的商品ID
   */
  GoodsId: string
  /**
   * 推荐结果分，取值范围[0,1000000]
注意：此字段可能返回 null，表示取不到有效值。
   */
  Score: number
  /**
   * 推荐追踪id，本次推荐内容产生的后续行为上报均要用该GoodsTraceId上报。每次接口调用返回的GoodsTraceId不同
注意：此字段可能返回 null，表示取不到有效值。
   */
  GoodsTraceId: string
  /**
   * 商品所在位置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Position: number
}

/**
 * 电商物料内容
 */
export interface GoodsInfo {
  /**
   * 商品唯一ID，skuId或spuId，客户根据需求自行决定商品主键粒度。建议限制在128字符以内
   */
  GoodsId: string
  /**
   * 商品物料展示类型：<br/>● article -图文<br>● text -纯文本<br/>● video -视频<br/>● short_video -时长15秒以内的视频<br/>● mini_video -竖屏视频<br/>● image -纯图片<br/>（如当前类型不满足，请<a href="https://console.cloud.tencent.com/workorder/category" target="_blank">提单</a>沟通解决方案）
   */
  GoodsType: string
  /**
   * 商品状态：
● 1 - 上架 
● 2 - 下架 
Status=2的内容不会在推荐结果中出现 
需要下架内容时，把Status的值修改为2即可
   */
  Status: number
  /**
   * 商品生成时间，秒级时间戳（1639624786），需大于0，<b>用作特征和物料管理</b>
   */
  PublishTimestamp: number
  /**
   * 商品过期时间，秒级时间戳（1639624786），如未填，则默认PublishTimestamp往后延一年，<b>用作特征</b>，过期则不会被推荐，<b>强烈建议</b>
   */
  ExpireTimestamp?: number
  /**
   * spu((Standard Product Unit))维度id，商品聚合信息的最小单位，<b>强烈建议</b>
   */
  SpuId?: string
  /**
   * 类目层级数，例如3级类目，则填3，和CategoryPath字段的类数据匹配，<b>强烈建议</b>
   */
  CategoryLevel?: number
  /**
   * 类目路径，一级二级三级等依次用英文冒号联接，和CategoryLevel字段值匹配，如体育：“女装:裙子:半身裙”。<b>用于物料池管理，强烈建议</b>
   */
  CategoryPath?: string
  /**
   * 商品标题，<b>主要用于语义分析</b>，<b>强烈建议</b>
   */
  Title?: string
  /**
   * 商品标签，多个标签用英文冒号联接，<b>用作特征，强烈建议</b>
   */
  Tags?: string
  /**
   * 商品对应的品牌，取值用户自定义，可以是品牌id或品牌明文，<b>用作特征以及打散/过滤规则，强烈建议</b>
   */
  Brand?: string
  /**
   * 商品所属店铺ID，取值客户自定义，<b>用作特征，强烈建议</b>
   */
  ShopId?: string
  /**
   * 商品原始价格（单位：元，统一货币体系，如统一为RMB或美元等），<b>用作特征，强烈建议</b>
   */
  OrgPrice?: number
  /**
   * 商品当前价格（单位：元，统一货币体系，如统一为RMB或美元等），<b>用作特征，强烈建议</b>
   */
  CurPrice?: number
  /**
   * 商品来源类型，客户自定义，<b>用于物料池管理</b>
   */
  SourceId?: string
  /**
   * 商品正文关键片段，建议控制在500字符以内，<b>主要用于语义分析</b>
   */
  Content?: string
  /**
   * 商品正文详情，主要用于语义分析，当内容过大时建议用ContentUrl传递，<b>与Content可二选一</b>
   */
  ContentUrl?: string
  /**
   * 商品封面url，不超过10个，<b>用作特征</b>
   */
  PicUrlList?: Array<string>
  /**
   * 卖家所在国家，ISO 3166-1 alpha-2编码，参考<a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2" target="_blank">ISO 3166-1 alpha-2</a>，中国：“CN”，<b>用作特征</b>
   */
  Country?: string
  /**
   * 卖家所在省份，ISO 3166-2行政区编码，如中国参考<a href="https://zh.wikipedia.org/wiki/ISO_3166-2:CN" target="_blank">ISO_3166-2:CN</a>，广东省：“CN-GD”，<b>用作特征</b>
   */
  Province?: string
  /**
   * 卖家所在城市地区，统一用国家最新标准地区行政编码，如：<a href="https://www.mca.gov.cn/article/sj/xzqh/2020/" target="_blank">2020年行政区编码</a>，其他国家统一用国际公认城市简称或者城市编码，<b>用作特征</b>
   */
  City?: string
  /**
   * 商品是否包邮；1:包邮；2:不包邮；3:满足条件包邮，<b>用作特征</b>
   */
  FreeShipping?: number
  /**
   * 商品邮费（单位：元，统一货币体系，如统一为RMB或美元等），<b>用作特征</b>
   */
  ShippingPrice?: number
  /**
   * 商品累计好评次数，<b>用作特征</b>
   */
  PraiseCnt?: number
  /**
   * 商品累计评论次数，<b>用作特征</b>
   */
  CommentCnt?: number
  /**
   * 商品累计分享次数，<b>用作特征</b>
   */
  ShareCnt?: number
  /**
   * 商品累计收藏次数，<b>用作特征</b>
   */
  CollectCnt?: number
  /**
   * 商品累积成交次数，<b>用作特征</b>
   */
  OrderCnt?: number
  /**
   * 商品平均客户评分，取值范围用户自定，<b>用作特征</b>
   */
  Score?: number
  /**
   * json字符串，<b>用于物料池管理的自定义扩展</b>
   */
  Extension?: string
}

/**
 * 不喜欢信息
 */
export interface DislikeInfo {
  /**
   * 过滤的类别：<br>● author 作者名<br/>（如当前类型不满足，请<a href="https://console.cloud.tencent.com/workorder/category" target="_blank">提单</a>沟通解决方案）
   */
  Type: string
  /**
   * Type对应字段名的值，如：需要过滤的作者名
   */
  Value: string
}

/**
 * ReportFeedBehavior返回参数结构体
 */
export interface ReportFeedBehaviorResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ReportGoodsInfo返回参数结构体
 */
export interface ReportGoodsInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ReportFeedUser请求参数结构体
 */
export interface ReportFeedUserRequest {
  /**
   * 实例ID，在控制台获取
   */
  InstanceId: string
  /**
   * 上报的用户信息数组，数量不超过50
   */
  FeedUserList: Array<FeedUserInfo>
}

/**
 * 推荐返回的内容信息
 */
export interface RecItemData {
  /**
   * 推荐的内容ID
   */
  ItemId: string
  /**
   * 内容类型，同内容上报类型一致
注意：此字段可能返回 null，表示取不到有效值。
   */
  ItemType: string
  /**
   * 推荐追踪id，本次推荐内容产生的后续行为上报均要用该ItemTraceId上报。每次接口调用返回的ItemTraceId不同
注意：此字段可能返回 null，表示取不到有效值。
   */
  ItemTraceId: string
  /**
   * 推荐预测分，分值越高被推荐的理由越充分，取值范围[0,1000000]，用于做二次排序的参考
注意：此字段可能返回 null，表示取不到有效值。
   */
  Score: number
}

/**
 * 信息流行为
 */
export interface FeedBehaviorInfo {
  /**
   * 用户唯一ID，客户自定义用户ID，作为一个用户的唯一标识
   */
  UserId: string
  /**
   * 内容唯一id
   */
  ItemId: string
  /**
   * 行为类型：<br> ● expose - 曝光，<b>必须</b><br> ● click - 点击，<b>必须</b><br/>  ● stay - 详情页停留时长，<b>强烈建议</b><br/>  ● videoover - 视频播放时长，<b>强烈建议</b><br/> ●  like - 点赞&喜欢，<b>正效果</b><br/> ● collect - 收藏，<b>正效果</b><br/> ●  share - 转发&分享，<b>正效果</b><br/> ● reward - 打赏，<b>正效果</b><br/> ● unlike - 踩&不喜欢，<b>负效果</b><br/> ●  comment - 评论<br/> 不支持的行为类型，可以映射到未被使用的其他行为类型。如实际业务数据中有私信行为，没有收藏行为，可以将私信行为映射到收藏行为
   */
  BehaviorType: string
  /**
   * 行为类型对应的行为值：<br/> ● expose - 曝光，固定填1<br/> ● click - 点击，固定填1<br/>  ● stay - 详情页停留时长，填停留秒数，取值[1-86400]<br/>  ● videoover - 视频播放时长，填播放结束的秒数，取值[1-86400]<br/> ●  like - 点赞&喜欢，固定填1<br/> ● collect - 收藏，固定填1<br/> ●  share - 转发&分享，固定填1<br/> ● reward - 打赏，填打赏金额，没有则填1<br/> ● unlike - 踩&不喜欢，填不喜欢的原因，没有则填1<br/> ●  comment - 评论，填评论内容，如“上海加油”
   */
  BehaviorValue: string
  /**
   * 行为发生的时间戳： 秒级时间戳，尽量实时上报，最长不超过半小时否则会影响推荐结果的准确性
   */
  BehaviorTimestamp: number
  /**
   * 行为发生的场景ID，在控制台创建场景后获取
   */
  SceneId: string
  /**
   * 推荐追踪ID，使用推荐结果中返回的ItemTraceId填入。 
注意：如果和推荐结果中的ItemTraceId不同，会影响行为特征归因，影响推荐算法效果
   */
  ItemTraceId: string
  /**
   * 内容类型，跟内容上报类型一致，用于效果分析，不做内容校验，<b>强烈建议</b>
   */
  ItemType?: string
  /**
   * 相关推荐场景点击进入详情页的内容id，该字段用来注明行为发生于哪个内容的详情页推荐中，<b>相关推荐场景强烈建议</b>
   */
  ReferrerItemId?: string
  /**
   * 用户设备ID数组，可传入用户的多个类型ID，详见UserIdInfo结构体，建议补齐，<b>用于构建用户画像信息</b>
   */
  UserIdList?: Array<UserIdInfo>
  /**
   * 算法来源： <br>● business 业务自己的算法对照组<br/> ● tencent 腾讯算法<br/> ● other 其他算法<br/>默认为tencent，区分行为来源于哪个算法，<b>用于Poc阶段的效果对比验证</b>
   */
  Source?: string
  /**
   * 行为发生时的国家，ISO 3166-1 alpha-2编码，参考<a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2" target="_blank">ISO 3166-1 alpha-2</a>，中国：“CN”，<b>用作特征</b>
   */
  Country?: string
  /**
   * 行为发生时的省份，ISO 3166-2行政区编码，如中国参考<a href="https://zh.wikipedia.org/wiki/ISO_3166-2:CN" target="_blank">ISO_3166-2:CN</a>，广东省：“CN-GD”，<b>用作特征</b>
   */
  Province?: string
  /**
   * 行为发生时的城市地区，统一用国家最新标准地区行政编码，如：<a href="https://www.mca.gov.cn/article/sj/xzqh/2020/" target="_blank">2020年行政区编码</a>，其他国家统一用国际公认城市简称或者城市编码，<b>用作特征</b>
   */
  City?: string
  /**
   * 行为发生时的客户端ip，<b>用作特征</b>
   */
  IP?: string
  /**
   * 行为发生时的客户端网络类型，<b>用作特征</b>
   */
  Network?: string
  /**
   * 行为发生时的客户端平台，ios/android/h5，<b>用作特征</b>
   */
  Platform?: string
  /**
   * 行为发生时的客户端app版本，<b>用作特征</b>
   */
  AppVersion?: string
  /**
   * 行为发生时的操作系统版本，<b>用作特征</b>
   */
  OsVersion?: string
  /**
   * 行为发生时的机型，<b>用作特征</b>
   */
  DeviceModel?: string
  /**
   * json字符串，<b>用于行为数据的扩展</b>，需要base64加密
   */
  Extension?: string
}

/**
 * ReportFeedUser返回参数结构体
 */
export interface ReportFeedUserResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用户信息
 */
export type StrUserIdInfo = null

/**
 * ReportFeedItem返回参数结构体
 */
export interface ReportFeedItemResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeGoodsRecommend请求参数结构体
 */
export interface DescribeGoodsRecommendRequest {
  /**
   * 实例ID，在控制台获取
   */
  InstanceId: string
  /**
   * 场景ID，在控制台创建场景后获取
   */
  SceneId: string
  /**
   * 用户唯一ID，客户自定义用户ID，作为一个用户的唯一标识，需和行为数据上报接口中的UserId一致，否则影响特征关联
   */
  UserId: string
  /**
   * 用户设备ID数组，可传入用户的多个类型ID，用于关联画像信息
   */
  UserIdList?: Array<StrUserIdInfo>
  /**
   * 推荐返回数量，默认10个，最多支持50个的内容返回。如果有更多数量要求，<a href="https://console.cloud.tencent.com/workorder/category" target="_blank">提单</a>沟通解决
   */
  GoodsCnt?: number
  /**
   * 当场景是相关推荐时该值必填，场景是非相关推荐时该值无效
   */
  CurrentGoodsId?: string
  /**
   * 用户的实时特征信息，用作特征
   */
  UserPortraitInfo?: UserPortraitInfo
  /**
   * 本次请求针对该用户需要过滤的物品列表(不超过100个)
   */
  BlackGoodsList?: Array<string>
  /**
   * json字符串，扩展字段
   */
  Extension?: string
}

/**
 * ReportGoodsBehavior请求参数结构体
 */
export interface ReportGoodsBehaviorRequest {
  /**
   * 实例ID，在控制台获取
   */
  InstanceId: string
  /**
   * 上报的商品对应的用户行为数据数组，数量不超过50
   */
  GoodsBehaviorList: Array<GoodsBehaviorInfo>
}

/**
 * ReportGoodsInfo请求参数结构体
 */
export interface ReportGoodsInfoRequest {
  /**
   * 实例ID，在控制台获取
   */
  InstanceId: string
  /**
   * 上报的商品数组，一次数量不超过50
   */
  GoodsList: Array<GoodsInfo>
}

/**
 * ReportFeedBehavior请求参数结构体
 */
export interface ReportFeedBehaviorRequest {
  /**
   * 实例ID，在控制台获取
   */
  InstanceId: string
  /**
   * 上报的行为数据数组，数量不超过50
   */
  FeedBehaviorList: Array<FeedBehaviorInfo>
}

/**
 * 电商行为
 */
export interface GoodsBehaviorInfo {
  /**
   * 用户唯一ID，客户自定义用户ID，作为一个用户的唯一标识
   */
  UserId: string
  /**
   * 商品唯一ID，skuId或spuId，客户根据需求自行决定商品主键粒度
   */
  GoodsId: string
  /**
   * 行为类型：<br> ● expose - 曝光，<b>必须</b><br> ● click - 点击，<b>必须</b><br/>  ● stay - 详情页停留时长，<b>强烈建议</b><br/>  ● videoover - 视频播放时长，<b>强烈建议</b><br/> ●  like - 点赞&喜欢，<b>正效果</b><br/> ● collect - 收藏，<b>正效果</b><br/> ●  share - 转发&分享，<b>正效果</b><br/> ● reward - 打赏，<b>正效果</b><br/> ● unlike - 踩&不喜欢，<b>负效果</b><br/> ●  comment - 评论<br/> ●  order - 下单<br/> ●  buy - 购买成功<br/> ●  addcart - 加入购物车<br/>   
不支持的行为类型，可以映射到未被使用的其他行为类型。如实际业务数据中有私信行为，没有收藏行为，可以将私信行为映射到收藏行为
   */
  BehaviorType: string
  /**
   * 行为类型对应的行为值：<br/> ● expose - 曝光，固定填1<br/> ● click - 点击，固定填1<br/>  ● stay - 详情页停留时长，填停留秒数，取值[1-86400]<br/>  ● videoover - 视频播放时长，填播放结束的秒数，取值[1-86400]<br/> ●  like - 点赞&喜欢，固定填1<br/> ● collect - 收藏，固定填1<br/> ●  share - 转发&分享，固定填1<br/> ● reward - 打赏，填打赏金额，没有则填1<br/> ● unlike - 踩&不喜欢，填不喜欢的原因，没有则填1<br/> ●  comment - 评论，填评论内容，如“上海加油”<br/> ●  order - 下单，固定填1<br/> ●  buy - 购买成功，固定填1<br/> ●  addcart - 加入购物车，固定填1
   */
  BehaviorValue: string
  /**
   * 行为发生的时间戳： 秒级时间戳，尽量实时上报，最长不超过半小时否则会影响推荐结果的准确性
   */
  BehaviorTimestamp: number
  /**
   * 行为发生的场景ID，在控制台创建场景后获取
   */
  SceneId: string
  /**
   * 算法来源： <br>● business 业务自己的算法对照组<br/> ● tencent 腾讯算法<br/> ● other 其他算法<br/>默认为tencent，区分行为来源于哪个算法，<b>用于Poc阶段的效果对比验证</b>
   */
  Source: string
  /**
   * 标识行为发生在app内哪个页面，取值客户自定，可以是明文或id，建议传明文便于理解、分析，如首页，发现页，用户中心等
<b>用作上下文特征，刻画不同场景用户行为分布的差异</b>
   */
  Page?: string
  /**
   * 标识行为发生在页面的哪一区块，取值客户自定，可以是明文或id，建议传明文便于理解、分析，如横幅、广告位、猜你喜欢等
<b>用作上下文特征，刻画不同模块用户行为分布的差异</b>
   */
  Module?: string
  /**
   * 推荐追踪ID，使用推荐结果中返回的GoodsTraceId填入。 
注意：如果和推荐结果中的GoodsTraceId不同，会影响行为特征归因，影响推荐算法效果。<b>强烈建议</b>
   */
  GoodsTraceId?: string
  /**
   * 相关推荐场景点击进入详情页的内容id，该字段用来注明行为发生于哪个内容的详情页推荐中，<b>相关推荐场景强烈建议</b>
   */
  ReferrerGoodsId?: string
  /**
   * 订单商品购买个数，当behaviorType=order，buy或addcart时有值，<b>用作特征</b>
   */
  OrderGoodsCnt?: number
  /**
   * 订单总金额，当behaviorType=order或buy时有值（单位：元，统一货币体系，如统一为RMB，美元等），<b>用作特征</b>
   */
  OrderAmount?: number
  /**
   * 用户设备ID数组，可传入用户的多个类型ID，详见UserIdInfo结构体，建议补齐，<b>用于构建用户画像信息</b>
   */
  UserIdList?: Array<StrUserIdInfo>
  /**
   * 行为发生时用户基础特征信息，<b>用作特征</b>
   */
  UserPortraitInfo?: UserPortraitInfo
  /**
   * 标识行为发生在模块内的具体位置，如1、2、...
<b>用作上下文特征，刻画不同位置用户行为分布的差异</b>
   */
  Position?: number
  /**
   * json字符串，<b>用于行为数据的扩展</b>
   */
  Extension?: string
}

/**
 * DescribeGoodsRecommend返回参数结构体
 */
export interface DescribeGoodsRecommendResponse {
  /**
   * 推荐返回的商品信息列表
   */
  DataList?: Array<RecGoodsData>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * FeedRecommend请求参数结构体
 */
export interface FeedRecommendRequest {
  /**
   * 实例ID，在控制台获取
   */
  InstanceId: string
  /**
   * 场景ID，在控制台创建场景后获取
   */
  SceneId: string
  /**
   * 用户唯一ID，客户自定义用户ID，作为一个用户的唯一标识
   */
  UserId: string
  /**
   * 用户设备ID数组，可传入用户的多个类型ID，用于关联画像信息
   */
  UserIdList?: Array<UserIdInfo>
  /**
   * 推荐返回数量，默认10个，最多支持50个的内容返回。如果有更多数量要求，<a href="https://console.cloud.tencent.com/workorder/category" target="_blank">提单</a>沟通解决
   */
  ItemCnt?: number
  /**
   * 当场景是相关推荐时该值必填，场景是非相关推荐时该值无效
   */
  CurrentItemId?: string
  /**
   * 扩展字段，json字符串，需要base64加密
   */
  Extension?: string
}
