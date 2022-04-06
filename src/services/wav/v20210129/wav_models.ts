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
 * 活动参与详情
 */
export interface ActivityJoinDetail {
  /**
      * 活动id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ActivityId: number

  /**
      * 活动名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  ActivityName: string

  /**
      * 销售姓名
注意：此字段可能返回 null，表示取不到有效值。
      */
  SalesName: string

  /**
      * 销售电话
注意：此字段可能返回 null，表示取不到有效值。
      */
  SalesPhone: string

  /**
      * 参与id
注意：此字段可能返回 null，表示取不到有效值。
      */
  JoinId: number

  /**
      * 活码id
注意：此字段可能返回 null，表示取不到有效值。
      */
  LiveCodeId: number

  /**
      * 用户电话
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserPhone: string

  /**
      * 用户姓名
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserName: string

  /**
      * 活动数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  ActivityData: string

  /**
      * 线索id
注意：此字段可能返回 null，表示取不到有效值。
      */
  LeadId: number

  /**
      * 参与时间戳，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
      */
  JoinTime: number

  /**
      * 线索是否是重复创建， 0 ：新建、 1：合并、 2：重复， 默认为0
注意：此字段可能返回 null，表示取不到有效值。
      */
  Duplicate: number

  /**
      * 重复线索id
注意：此字段可能返回 null，表示取不到有效值。
      */
  DuplicateLeadId: number

  /**
      * 是否为参与多次活动， 1：参与一次、2、参与多次，默认为0
注意：此字段可能返回 null，表示取不到有效值。
      */
  JoinState: number

  /**
      * 创建时间戳，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: number

  /**
      * 更新时间戳，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: number
}

/**
 * QueryVehicleInfoList返回参数结构体
 */
export interface QueryVehicleInfoListResponse {
  /**
      * 车系车型信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageData: Array<VehicleInfo>

  /**
      * 分页游标，下次调用带上该值，则从当前的位置继续往后拉取新增的数据，以实现增量拉取。
注意：此字段可能返回 null，表示取不到有效值。
      */
  NextCursor: string

  /**
      * 是否还有更多数据。0-否；1-是。
注意：此字段可能返回 null，表示取不到有效值。
      */
  HasMore: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCorpTag返回参数结构体
 */
export interface CreateCorpTagResponse {
  /**
   * 标签组信息
   */
  TagGroup: TagGroup

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryChatArchivingList返回参数结构体
 */
export interface QueryChatArchivingListResponse {
  /**
      * 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空
注意：此字段可能返回 null，表示取不到有效值。
      */
  NextCursor: string

  /**
      * 会话存档列表响应参数
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageData: Array<ChatArchivingDetail>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * license相关信息
 */
export interface LicenseInfo {
  /**
   * license编号
   */
  License: string

  /**
   * license版本；1-基础版，2-标准版，3-增值版
   */
  LicenseEdition: number

  /**
   * 生效开始时间, 格式yyyy-MM-dd HH:mm:ss
   */
  ResourceStartTime: string

  /**
   * 生效结束时间, 格式yyyy-MM-dd HH:mm:ss
   */
  ResourceEndTime: string

  /**
      * 隔离截止时间, 格式yyyy-MM-dd HH:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsolationDeadline: string

  /**
      * 资源计划销毁时间, 格式yyyy-MM-dd HH:mm:ss
注意：此字段可能返回 null，表示取不到有效值。
      */
  DestroyTime: string

  /**
   * 资源状态，1.正常，2.隔离，3.销毁
   */
  Status: number

  /**
      * 扩展信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Extra: string
}

/**
 * 外部联系人SaaS使用明细数据
 */
export interface CustomerActionEventDetail {
  /**
   * 事件码
   */
  EventCode: string

  /**
   * 事件类型
   */
  EventType: number

  /**
   * 事件来源
   */
  EventSource: number

  /**
   * 外部联系人id
   */
  ExternalUserId: string

  /**
   * 销售顾问id
   */
  SalesId: number

  /**
   * 素材类型
   */
  MaterialType: number

  /**
   * 素材编号id
   */
  MaterialId: number

  /**
   * 事件上报时间，单位：秒
   */
  EventTime: number
}

/**
 * QueryCustomerEventDetailStatistics返回参数结构体
 */
export interface QueryCustomerEventDetailStatisticsResponse {
  /**
      * 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空
注意：此字段可能返回 null，表示取不到有效值。
      */
  NextCursor: string

  /**
      * 外部联系人SaaS使用明细统计响应数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageData: Array<CustomerActionEventDetail>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryExternalContactDetail请求参数结构体
 */
export interface QueryExternalContactDetailRequest {
  /**
   * 外部联系人的userid，注意不是企业成员的帐号
   */
  ExternalUserId: string

  /**
   * 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填。当客户在企业内的跟进人超过500人时需要使用cursor参数进行分页获取
   */
  Cursor?: string

  /**
   * 当前接口Limit不需要传参， 保留Limit只是为了保持向后兼容性， Limit默认值为500，当返回结果超过500时， NextCursor才有返回值
   */
  Limit?: number
}

/**
 * QueryExternalUserMappingInfo返回参数结构体
 */
export interface QueryExternalUserMappingInfoResponse {
  /**
      * 外部联系人映射信息, 只返回映射成功的记录
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExternalUserIdMapping: Array<ExternalUserMappingInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryStaffEventDetailStatistics请求参数结构体
 */
export interface QueryStaffEventDetailStatisticsRequest {
  /**
   * 查询开始时间， 单位秒
   */
  BeginTime: number

  /**
   * 查询结束时间， 单位秒
   */
  EndTime: number

  /**
   * 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
   */
  Cursor?: string

  /**
   * 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值
   */
  Limit?: number
}

/**
 * QueryUserInfoList请求参数结构体
 */
export interface QueryUserInfoListRequest {
  /**
   * 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
   */
  Cursor?: string

  /**
   * 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值
   */
  Limit?: number
}

/**
 * 外部联系人事件信息
 */
export interface ExternalUserEventInfo {
  /**
   * 事件编码, 添加外部联系人(ADD_EXTERNAL_CUSTOMER)/成员删除外部联系人(DELETE_EXTERNAL_CUSTOMER)/外部联系人删除成员(DELETE_FOLLOW_USER)
   */
  EventCode: string

  /**
   * 外部联系人id
   */
  ExternalUserId: string

  /**
   * 企微SaaS的成员id
   */
  SalesId: string

  /**
   * 事件上报时间戳，单位：秒
   */
  EventTime: number
}

/**
 * 渠道活码详情
 */
export interface ChannelCodeInnerDetail {
  /**
   * 渠道活码id
   */
  Id: number

  /**
   * 欢迎语类型，0：普通欢迎语、1:渠道欢迎语
   */
  Type: number

  /**
   * 渠道来源
   */
  Source: string

  /**
   * 渠道来源名称
   */
  SourceName: string

  /**
   * 二维码名称
   */
  Name: string

  /**
   * 使用成员用户id集
   */
  UseUserIdList: Array<number>

  /**
   * 使用成员企微账号id集
   */
  UseUserOpenIdList: Array<string>

  /**
   * 标签
   */
  TagList: Array<WeComTagDetail>

  /**
   * 自动通过好友，0：开启、1：关闭，默认0开启
   */
  SkipVerify: number

  /**
   * 添加好友人数
   */
  Friends: number

  /**
   * 备注
   */
  Remark: string

  /**
   * 欢迎语id（通过欢迎语新增返回的id）
   */
  MsgId: number

  /**
   * 联系我config_id
   */
  ConfigId: string

  /**
   * 联系我二维码地址
   */
  QrCodeUrl: string

  /**
   * 记录状态， 0：有效、1：无效
   */
  RecStatus: number

  /**
   * 应用ID
   */
  AppId: string
}

/**
 * 客户信息
 */
export interface ExternalContact {
  /**
   * 外部联系人的userId
   */
  ExternalUserId: string

  /**
   * 外部联系人性别 0-未知 1-男性 2-女性
   */
  Gender: number

  /**
   * 外部联系人的名称
   */
  Name: string

  /**
   * 外部联系人的类型，1表示该外部联系人是微信用户，2表示该外部联系人是企业微信用户
   */
  Type: number

  /**
      * 外部联系人在微信开放平台的唯一身份标识（微信unionid），通过此字段企业可将外部联系人与公众号/小程序用户关联起来。仅当联系人类型是微信用户，且企业或第三方服务商绑定了微信开发者ID有此字段。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UnionId: string

  /**
      * 外部联系人联系电话
注意：此字段可能返回 null，表示取不到有效值。
      */
  Phone: string
}

/**
 * QueryExternalUserEventList请求参数结构体
 */
export interface QueryExternalUserEventListRequest {
  /**
   * 查询开始时间， 单位秒
   */
  BeginTime: number

  /**
   * 查询结束时间， 单位秒
   */
  EndTime: number

  /**
   * 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
   */
  Cursor?: string

  /**
   * 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值
   */
  Limit?: number
}

/**
 * 标签信息
 */
export interface TagInfo {
  /**
   * 标签名称, 最大长度限制15个字符
   */
  TagName: string

  /**
   * 标签组排序,值越大,排序越靠前
   */
  Sort?: number
}

/**
 * 标签详细信息
 */
export interface TagDetailInfo {
  /**
   * 标签名称
   */
  TagName: string

  /**
   * 标签业务ID
   */
  BizTagId: string

  /**
   * 企微标签ID
   */
  TagId: string

  /**
   * 标签排序的次序值，sort值大的排序靠前。有效的值范围是[0, 2^32)
   */
  Sort: number

  /**
   * 标签创建时间,单位为秒
   */
  CreateTime: number
}

/**
 * 车型车系信息
 */
export interface VehicleInfo {
  /**
   * 品牌id
   */
  BrandId: number

  /**
   * 品牌名称
   */
  BrandName: string

  /**
   * 车系id
   */
  SeriesId: number

  /**
   * 车系名称
   */
  SeriesName: string

  /**
   * 车型id
   */
  ModelId: number

  /**
   * 车型名称
   */
  ModelName: string
}

/**
 * 会话存档的视频消息类型
 */
export interface ChatArchivingMsgTypeVideo {
  /**
      * 视频时长，单位秒
注意：此字段可能返回 null，表示取不到有效值。
      */
  PlayLength: number

  /**
      * 文件大小
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileSize: number

  /**
   * 视频资源对象Cos下载地址
   */
  CosKey: string
}

/**
 * QueryMaterialList请求参数结构体
 */
export interface QueryMaterialListRequest {
  /**
   * 素材类型：0-图片，1-视频，3-文章，10-车型，11-名片
   */
  MaterialType: number

  /**
   * 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
   */
  Cursor?: string

  /**
   * 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值
   */
  Limit?: number
}

/**
 * CreateLead返回参数结构体
 */
export interface CreateLeadResponse {
  /**
   * 线索处理状态码： 0-表示创建成功， 1-表示线索合并，2-表示线索重复
   */
  BusinessCode: number

  /**
   * 线索处理结果描述
   */
  BusinessMsg: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryUserInfoList返回参数结构体
 */
export interface QueryUserInfoListResponse {
  /**
      * 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空
注意：此字段可能返回 null，表示取不到有效值。
      */
  NextCursor: string

  /**
      * 企业成员信息列表响应数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageData: Array<CorpUserInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryVehicleInfoList请求参数结构体
 */
export interface QueryVehicleInfoListRequest {
  /**
   * 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
   */
  Cursor?: string

  /**
   * 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值
   */
  Limit?: number
}

/**
 * QueryExternalUserEventList返回参数结构体
 */
export interface QueryExternalUserEventListResponse {
  /**
      * 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空
注意：此字段可能返回 null，表示取不到有效值。
      */
  NextCursor: string

  /**
      * 外部联系人事件信息响应数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageData: Array<ExternalUserEventInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryExternalContactList请求参数结构体
 */
export interface QueryExternalContactListRequest {
  /**
   * 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
   */
  Cursor?: string

  /**
   * 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值
   */
  Limit?: number
}

/**
 * 小程序码信息
 */
export interface MiniAppCodeInfo {
  /**
   * 主键id
   */
  Id: number

  /**
   * 小程序名称
   */
  MiniAppName: string

  /**
   * 小程序logo
   */
  MiniAppLogo: string

  /**
   * 小程序管理端地址
   */
  MiniAdminUrl: string

  /**
   * 状态：0正常，1删除
   */
  State: number

  /**
   * 创建时间戳，单位为秒
   */
  CreateTime: number

  /**
   * 更新时间戳，单位为秒
   */
  UpdateTime: number
}

/**
 * QueryClueInfoList返回参数结构体
 */
export interface QueryClueInfoListResponse {
  /**
      * 线索信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageData: Array<ClueInfoDetail>

  /**
      * 分页游标，下次调用带上该值，则从当前的位置继续往后拉，以实现增量拉取。
注意：此字段可能返回 null，表示取不到有效值。
      */
  NextCursor: string

  /**
      * 是否还有更多数据。0-否；1-是。
注意：此字段可能返回 null，表示取不到有效值。
      */
  HasMore: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateChannelCode请求参数结构体
 */
export interface CreateChannelCodeRequest {
  /**
   * 欢迎语类型:0普通欢迎语,1渠道欢迎语
   */
  Type: number

  /**
   * 使用成员用户id集
   */
  UseUserId: Array<number>

  /**
   * 使用成员企微账号id集
   */
  UseUserOpenId: Array<string>

  /**
   * 应用ID,字典表中的APP_TYPE值,多个已逗号分隔
   */
  AppIds: string

  /**
   * 渠道来源
   */
  Source?: string

  /**
   * 渠道来源名称
   */
  SourceName?: string

  /**
   * 二维码名称
   */
  Name?: string

  /**
   * 标签
   */
  Tag?: Array<WeComTagDetail>

  /**
   * 自动通过好友：0开启 1关闭, 默认开启
   */
  SkipVerify?: number

  /**
   * 欢迎语id（通过欢迎语新增返回的id）
   */
  MsgId?: number

  /**
   * 备注
   */
  Remark?: string

  /**
   * 渠道类型 0 未知 1 公域 2私域
   */
  SourceType?: number
}

/**
 * QueryExternalContactDetail返回参数结构体
 */
export interface QueryExternalContactDetailResponse {
  /**
      * 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空
注意：此字段可能返回 null，表示取不到有效值。
      */
  NextCursor: string

  /**
      * 客户信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Customer: ExternalContact

  /**
      * 添加了此外部联系人的企业成员信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  FollowUser: Array<FollowUser>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 添加了此外部联系人的企业成员信息
 */
export interface FollowUser {
  /**
   * 添加了此外部联系人的企业成员userid
   */
  UserId: string

  /**
      * 该成员对此外部联系人的备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  Remark: string

  /**
      * 该成员对此外部联系人的描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  Description: string

  /**
   * 该成员添加此外部联系人的时间戳，单位为秒
   */
  CreateTime: number

  /**
   * 该成员添加此客户的来源，具体含义详见<a href="https://work.weixin.qq.com/api/doc/90000/90135/92114#%E6%9D%A5%E6%BA%90%E5%AE%9A%E4%B9%89">来源定义</a>
   */
  AddWay: number

  /**
   * 发起添加的userid，如果成员主动添加，为成员的userid；如果是客户主动添加，则为客户的外部联系人userid；如果是内部成员共享/管理员分配，则为对应的成员/管理员userid
   */
  OperUserId: string

  /**
      * 该成员添加此外部联系人所打标签信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tags: Array<ExternalContactTag>
}

/**
 * QueryExternalContactList返回参数结构体
 */
export interface QueryExternalContactListResponse {
  /**
      * 外部联系人信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageData: Array<ExternalContactSimpleInfo>

  /**
      * 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空
注意：此字段可能返回 null，表示取不到有效值。
      */
  NextCursor: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 外部联系人简短信息
 */
export interface ExternalContactSimpleInfo {
  /**
   * 外部联系人的userId
   */
  ExternalUserId: string

  /**
   * 添加了此外部联系人的企业成员userId
   */
  UserId: string

  /**
      * 添加了此外部联系人的企业成员的姓名
注意：此字段可能返回 null，表示取不到有效值。
      */
  SalesName: string

  /**
   * 添加了此外部联系人的企业成员的归属部门id列表
   */
  DepartmentIdList: Array<number>
}

/**
 * QueryActivityLiveCodeList返回参数结构体
 */
export interface QueryActivityLiveCodeListResponse {
  /**
      * 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空
注意：此字段可能返回 null，表示取不到有效值。
      */
  NextCursor: string

  /**
      * 活码列表响应参数
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageData: Array<LiveCodeDetail>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCorpTag请求参数结构体
 */
export interface CreateCorpTagRequest {
  /**
   * 标签组名称，最长为15个字符
   */
  GroupName: string

  /**
   * 标签信息数组
   */
  Tags: Array<TagInfo>

  /**
   * 标签组次序值。sort值大的排序靠前。有效的值范围是[0, 2^32)
   */
  Sort?: number
}

/**
 * 外部联系人映射信息
 */
export interface ExternalUserMappingInfo {
  /**
   * 企业主体对应的外部联系人userId
   */
  CorpExternalUserId: string

  /**
      * 乐销车应用主体对应的外部联系人, 当不存在好友关系时，该字段值为空
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExternalUserId: string
}

/**
 * QueryLicenseInfo返回参数结构体
 */
export interface QueryLicenseInfoResponse {
  /**
      * license响应信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  LicenseInfo: LicenseInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 企业成员信息
 */
export interface CorpUserInfo {
  /**
   * 企业成员UserId
   */
  UserId: number

  /**
      * 企业成员在SaaS名片内填写的姓名
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserName: string

  /**
      * 企业成员在企微原生通讯录内的id
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserOpenId: string

  /**
      * 成员所属经销商id，可为空
注意：此字段可能返回 null，表示取不到有效值。
      */
  DealerId: number

  /**
      * 成员所属门店id，可为空
注意：此字段可能返回 null，表示取不到有效值。
      */
  ShopId: number

  /**
      * 企业成员手机号
注意：此字段可能返回 null，表示取不到有效值。
      */
  Phone: string

  /**
      * 成员所属部门id列表，仅返回该应用有查看权限的部门id；成员授权模式下，固定返回根部门id，即固定为1；多个部门使用逗号分割
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrgIds: string

  /**
      * 主部门，仅当应用对主部门有查看权限时返回
注意：此字段可能返回 null，表示取不到有效值。
      */
  MainDepartment: string

  /**
      * 是否为部门负责人，第三方应用可为空。与orgIds值一一对应，多个部门使用逗号隔开，0-否， 1-是
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsLeaderInDept: string

  /**
   * 激活状态: 0=已激活，1=已禁用，-1=退出企业"
   */
  Status: number
}

/**
 * QueryClueInfoList请求参数结构体
 */
export interface QueryClueInfoListRequest {
  /**
   * 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
   */
  Cursor?: string

  /**
   * 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值
   */
  Limit?: number
}

/**
 * CRM统计数据响应
 */
export interface CrmStatisticsData {
  /**
   * 新增线索
   */
  LeadCnt: number

  /**
   * 新增建档
   */
  BuildCnt: number

  /**
   * 新增到店
   */
  InvitedCnt: number

  /**
   * 新增下订
   */
  OrderedCnt: number

  /**
   * 新增成交
   */
  DeliveredCnt: number

  /**
   * 新增战败
   */
  DefeatCnt: number

  /**
   * 新增好友
   */
  NewContactCnt: number

  /**
   * 统计时间, 单位：天
   */
  StatisticalTime: string
}

/**
 * 素材信息响应体
 */
export interface MaterialInfo {
  /**
   * 素材id
   */
  MaterialId: number

  /**
      * 素材名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaterialName: string

  /**
   * 素材状态, -1: 删除 0: 启用 1: 禁用
   */
  Status: number
}

/**
 * 活动详情
 */
export interface ActivityDetail {
  /**
      * 活动id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ActivityId: number

  /**
      * 活动名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  ActivityName: string

  /**
      * 活动状态，10:未开始状态、20:已开始（进行中）状态、30:已结束状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  ActivityState: number

  /**
      * 活动类型，100:留资活动
注意：此字段可能返回 null，表示取不到有效值。
      */
  ActivityType: number

  /**
      * 活动开始时间戳，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
      */
  StartTime: number

  /**
      * 活动结束时间戳，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
      */
  EndTime: number

  /**
      * 活动主图
注意：此字段可能返回 null，表示取不到有效值。
      */
  MainPhoto: string

  /**
      * 协议编号
注意：此字段可能返回 null，表示取不到有效值。
      */
  PrivacyAgreementId: string

  /**
      * 活动更新时间戳，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: number

  /**
      * 活动数据列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  ActivityDataList: string
}

/**
 * 活动活码详情
 */
export interface LiveCodeDetail {
  /**
   * 活码id
   */
  LiveCodeId: number

  /**
   * 活码名称
   */
  LiveCodeName: string

  /**
      * 短链url
注意：此字段可能返回 null，表示取不到有效值。
      */
  ShortChainAddress: string

  /**
      * 活码二维码
注意：此字段可能返回 null，表示取不到有效值。
      */
  LiveCodePreview: string

  /**
   * 活动id
   */
  ActivityId: number

  /**
   * 活动名称
   */
  ActivityName: string

  /**
   * 活码状态，-1：删除，0：启用，1禁用，默认为0
   */
  LiveCodeState: number

  /**
      * 活码参数，每个活码参数都是不一样的， 这个的值对应的是字符串json类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  LiveCodeData: string

  /**
   * 创建时间戳，单位为秒
   */
  CreateTime: number

  /**
   * 更新时间戳，单位为秒
   */
  UpdateTime: number
}

/**
 * 标签组信息
 */
export interface TagGroup {
  /**
   * 企微标签组id
   */
  GroupId: string

  /**
   * 标签组业务id
   */
  BizGroupId: string

  /**
   * 企微标签组名称，不能超过15个字符
   */
  GroupName: string

  /**
   * 标签组次序值。sort值大的排序靠前。有效的值范围是[0, 2^32)
   */
  Sort: number

  /**
   * 标签组创建时间,单位为秒
   */
  CreateTime: number

  /**
   * 标签组内的标签列表, 上限为20
   */
  Tags: Array<TagDetailInfo>
}

/**
 * 外部联系人标签
 */
export interface ExternalContactTag {
  /**
      * 该成员添加此外部联系人所打标签的分组名称（标签功能需要企业微信升级到2.7.5及以上版本）
注意：此字段可能返回 null，表示取不到有效值。
      */
  GroupName: string

  /**
      * 该成员添加此外部联系人所打标签名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  TagName: string

  /**
      * 该成员添加此外部联系人所打标签类型, 1-企业设置, 2-用户自定义
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type: number

  /**
      * 该成员添加此外部联系人所打企业标签的id，仅企业设置（type为1）的标签返回
注意：此字段可能返回 null，表示取不到有效值。
      */
  TagId: string
}

/**
 * 会话存档数据详情
 */
export interface ChatArchivingDetail {
  /**
   * 消息id
   */
  MsgId: string

  /**
   * 动作名称，switch表示切换企微账号，send表示企微普通消息
   */
  Action: string

  /**
      * 消息类型，当Action != "switch"时存在，例如video, text, voice 等，和企微开放文档一一对应
https://open.work.weixin.qq.com/api/doc/90000/90135/91774
注意：此字段可能返回 null，表示取不到有效值。
      */
  MsgType: string

  /**
      * 消息发送人
注意：此字段可能返回 null，表示取不到有效值。
      */
  From: string

  /**
      * 消息接收人列表，注意接收人可能只有一个
注意：此字段可能返回 null，表示取不到有效值。
      */
  ToList: Array<string>

  /**
      * 如果是群消息，则不为空
注意：此字段可能返回 null，表示取不到有效值。
      */
  RoomId: string

  /**
      * 消息发送的时间戳，单位为秒
注意：此字段可能返回 null，表示取不到有效值。
      */
  MsgTime: number

  /**
      * MsgType=video时的消息体，忽略此字段，见BodyJson字段
注意：此字段可能返回 null，表示取不到有效值。
      */
  Video: ChatArchivingMsgTypeVideo

  /**
      * 根据MsgType的不同取值，解析内容不同，参考：https://open.work.weixin.qq.com/api/doc/90000/90135/91774
注意：此字段可能返回 null，表示取不到有效值。
      */
  BodyJson: string
}

/**
 * QueryActivityList返回参数结构体
 */
export interface QueryActivityListResponse {
  /**
      * 分页游标
注意：此字段可能返回 null，表示取不到有效值。
      */
  NextCursor: string

  /**
      * 活码列表响应参数
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageData: Array<ActivityDetail>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryStaffEventDetailStatistics返回参数结构体
 */
export interface QueryStaffEventDetailStatisticsResponse {
  /**
      * 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空
注意：此字段可能返回 null，表示取不到有效值。
      */
  NextCursor: string

  /**
      * 企业成员SaaS使用明细统计响应数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageData: Array<SalesActionEventDetail>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryActivityJoinList请求参数结构体
 */
export interface QueryActivityJoinListRequest {
  /**
   * 活动id
   */
  ActivityId: number

  /**
   * 分页游标，对应结果返回的NextCursor,首次请求保持为空
   */
  Cursor?: string

  /**
   * 单页数据限制
   */
  Limit?: number
}

/**
 * 经销商信息
 */
export interface DealerInfo {
  /**
   * 企微SaaS平台经销商id
   */
  DealerId: number

  /**
   * 经销商名称
   */
  DealerName: string
}

/**
 * QueryExternalUserMappingInfo请求参数结构体
 */
export interface QueryExternalUserMappingInfoRequest {
  /**
   * 企业主体对应的外部联系人id列表，列表长度限制最大为50。
   */
  CorpExternalUserIdList: Array<string>
}

/**
 * QueryCrmStatistics返回参数结构体
 */
export interface QueryCrmStatisticsResponse {
  /**
      * 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空
注意：此字段可能返回 null，表示取不到有效值。
      */
  NextCursor: string

  /**
      * CRM统计响应数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageData: Array<CrmStatisticsData>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryChannelCodeList请求参数结构体
 */
export interface QueryChannelCodeListRequest {
  /**
   * 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
   */
  Cursor?: string

  /**
   * 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值
   */
  Limit?: number
}

/**
 * QueryDealerInfoList返回参数结构体
 */
export interface QueryDealerInfoListResponse {
  /**
      * 经销商信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageData: Array<DealerInfo>

  /**
      * 分页游标，下次调用带上该值，则从当前的位置继续往后拉取新增的数据，以实现增量拉取。
注意：此字段可能返回 null，表示取不到有效值。
      */
  NextCursor: string

  /**
      * 是否还有更多数据。0-否；1-是。
注意：此字段可能返回 null，表示取不到有效值。
      */
  HasMore: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 企微个人标签信息,渠道活码使用
 */
export interface WeComTagDetail {
  /**
      * 标签分组名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  GroupName?: string

  /**
      * 标签分组业务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  BizGroupId?: string

  /**
      * 标签名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  TagName?: string

  /**
      * 标签ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  TagId?: string

  /**
      * 标签业务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  BizTagId?: string

  /**
      * 标签分类，1：企业设置、2：用户自定义
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type?: number

  /**
      * 标签业务ID字符串格式
注意：此字段可能返回 null，表示取不到有效值。
      */
  BizTagIdStr?: string
}

/**
 * QueryActivityLiveCodeList请求参数结构体
 */
export interface QueryActivityLiveCodeListRequest {
  /**
   * 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
   */
  Cursor?: string

  /**
   * 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值
   */
  Limit?: number
}

/**
 * QueryActivityJoinList返回参数结构体
 */
export interface QueryActivityJoinListResponse {
  /**
      * 分页游标
注意：此字段可能返回 null，表示取不到有效值。
      */
  NextCursor: string

  /**
      * 活码列表响应参数
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageData: Array<ActivityJoinDetail>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 线索信息详情
 */
export interface ClueInfoDetail {
  /**
   * 线索id，线索唯一识别编码
   */
  ClueId: string

  /**
   * 接待客户经销商顾问所属组织id,多个组织使用逗号分割
   */
  DealerId: string

  /**
   * 线索获取时间，用户添加企业微信时间，单位是秒
   */
  EnquireTime: number

  /**
   * 客户在微信生态中唯一识别码
   */
  UnionId: string

  /**
   * 微信昵称
   */
  Name: string

  /**
   * 联系方式
   */
  Phone: string

  /**
   * 车系编号
   */
  SeriesCode: string

  /**
   * 车型编号
   */
  ModelCode: string

  /**
   * 省份编号
   */
  ProvinceCode: string

  /**
   * 城市编号
   */
  CityCode: string

  /**
   * 顾问名称
   */
  SalesName: string

  /**
   * 顾问电话
   */
  SalesPhone: string

  /**
   * 备注
   */
  Remark: string

  /**
   * 标签
   */
  TagList: Array<string>
}

/**
 * QueryDealerInfoList请求参数结构体
 */
export interface QueryDealerInfoListRequest {
  /**
   * 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
   */
  Cursor?: string

  /**
   * 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值
   */
  Limit?: number
}

/**
 * QueryMiniAppCodeList返回参数结构体
 */
export interface QueryMiniAppCodeListResponse {
  /**
      * 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空
注意：此字段可能返回 null，表示取不到有效值。
      */
  NextCursor: string

  /**
      * 小程序码列表响应数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageData: Array<MiniAppCodeInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateChannelCode返回参数结构体
 */
export interface CreateChannelCodeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryLicenseInfo请求参数结构体
 */
export interface QueryLicenseInfoRequest {
  /**
   * license编号
   */
  License: string
}

/**
 * QueryCustomerEventDetailStatistics请求参数结构体
 */
export interface QueryCustomerEventDetailStatisticsRequest {
  /**
   * 查询开始时间， 单位秒
   */
  BeginTime: number

  /**
   * 查询结束时间， 单位秒
   */
  EndTime: number

  /**
   * 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
   */
  Cursor?: string

  /**
   * 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值
   */
  Limit?: number
}

/**
 * QueryCrmStatistics请求参数结构体
 */
export interface QueryCrmStatisticsRequest {
  /**
   * 查询开始时间， 单位秒
   */
  BeginTime: number

  /**
   * 查询结束时间， 单位秒
   */
  EndTime: number

  /**
   * 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
   */
  Cursor?: string

  /**
   * 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值
   */
  Limit?: number

  /**
   * 请求的企业成员id，为空时默认全租户
   */
  SalesId?: string

  /**
   * 请求的部门id，为空时默认全租户
   */
  OrgId?: number
}

/**
 * QueryActivityList请求参数结构体
 */
export interface QueryActivityListRequest {
  /**
   * 分页游标，对应结果返回的NextCursor,首次请求保持为空
   */
  Cursor?: string

  /**
   * 单页数据限制
   */
  Limit?: number
}

/**
 * QueryMiniAppCodeList请求参数结构体
 */
export interface QueryMiniAppCodeListRequest {
  /**
   * 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
   */
  Cursor?: string

  /**
   * 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值
   */
  Limit?: number
}

/**
 * QueryChatArchivingList请求参数结构体
 */
export interface QueryChatArchivingListRequest {
  /**
   * 用于分页查询的游标，字符串类型，由上一次调用返回，首次调用可不填
   */
  Cursor?: string

  /**
   * 返回的最大记录数，整型，最大值100，默认值50，超过最大值时取最大值
   */
  Limit?: number
}

/**
 * CreateLead请求参数结构体
 */
export interface CreateLeadRequest {
  /**
   * 来源ID
   */
  ChannelId: number

  /**
   * 来源名称
   */
  ChannelName: string

  /**
   * 创建时间， 单位毫秒
   */
  CreateTime: number

  /**
   * 线索类型：1-400呼入，2-常规留资
   */
  SourceType: number

  /**
   * 经销商id
   */
  DealerId: number

  /**
   * 品牌id
   */
  BrandId: number

  /**
   * 车系id
   */
  SeriesId: number

  /**
   * 客户姓名
   */
  CustomerName: string

  /**
   * 客户手机号
   */
  CustomerPhone: string

  /**
   * 车型id
   */
  ModelId?: number

  /**
   * 客户性别: 0-未知, 1-男, 2-女
   */
  CustomerSex?: number

  /**
   * 销售姓名
   */
  SalesName?: string

  /**
   * 销售手机号
   */
  SalesPhone?: string

  /**
   * Cc坐席姓名
   */
  CcName?: string

  /**
   * 备注
   */
  Remark?: string
}

/**
 * QueryChannelCodeList返回参数结构体
 */
export interface QueryChannelCodeListResponse {
  /**
      * 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空
注意：此字段可能返回 null，表示取不到有效值。
      */
  NextCursor: string

  /**
      * 活码列表响应参数
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageData: Array<ChannelCodeInnerDetail>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 企业成员SaaS使用明细数据
 */
export interface SalesActionEventDetail {
  /**
   * 事件码
   */
  EventCode: string

  /**
   * 事件类型
   */
  EventType: number

  /**
   * 事件来源
   */
  EventSource: number

  /**
   * 销售顾问id
   */
  SalesId: number

  /**
   * 素材类型
   */
  MaterialType: number

  /**
   * 素材编号id
   */
  MaterialId: number

  /**
   * 事件上报时间，单位：秒
   */
  EventTime: number
}

/**
 * QueryMaterialList返回参数结构体
 */
export interface QueryMaterialListResponse {
  /**
      * 分页游标，再下次请求时填写以获取之后分页的记录，如果已经没有更多的数据则返回空
注意：此字段可能返回 null，表示取不到有效值。
      */
  NextCursor: string

  /**
      * 企业素材列表响应数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageData: Array<MaterialInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
