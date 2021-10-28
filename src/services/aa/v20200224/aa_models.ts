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
 * 网赚防刷相关参数
 */
export interface CrowdAntiRushInfo {
  /**
   * 助力场景建议填写：活动发起人微信OpenID。
   */
  SponsorOpenId?: string

  /**
   * 助力场景建议填写：发起人设备号。
   */
  SponsorDeviceNumber?: string

  /**
   * 助力场景建议填写：发起人手机号。
   */
  SponsorPhone?: string

  /**
   * 助力场景建议填写：发起人IP。
   */
  SponsorIp?: string

  /**
   * 助力场景建议填写：活动链接。
   */
  CampaignUrl?: string
}

/**
 * QueryActivityAntiRush返回参数结构体
 */
export interface QueryActivityAntiRushResponse {
  /**
      * 操作时间戳，单位：秒。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PostTime: string

  /**
      * 用户操作的真实外网 IP。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserIp: string

  /**
      * 0：表示无恶意。
1 - 4：恶意等级由低到高。
      */
  Level: number

  /**
      * 风险类型。

账号风险：

1，账号信用低，账号近期存在因恶意被处罚历史，网络低活跃，被举报等因素；
2，垃圾账号，疑似批量注册小号，近期存在严重违规或大量举报；
3，无效账号，送检账号参数无法成功解析，请检查微信openid是否有误 ，QQopenid是否与appidU对应，手机号是否有误。
4，黑名单，该账号在业务侧有过拉黑记录
5，白名单，该账号在业务侧有过加白名单记录

行为风险：
101，批量操作，存在ip/设备/环境等因素的聚集性异常；
102，自动机，疑似自动机批量请求；
104，微信登录态无效，检查wxToken参数，是否已经失效；

环境风险：
201，环境异常，操作ip/设备/环境存在异常。当前ip为非常用ip或恶意ip段；
205，非公网有效ip，传进来的IP地址为内网ip地址或者ip保留地址；
206，设备异常，该设备存在异常的使用行为
      */
  RiskType: Array<number>

  /**
      * accountType是QQ或微信开放账号时，用于标识QQ或微信用户登录后关联业务自身的账号ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  AssociateAccount: string

  /**
      * uid值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Uid: string

  /**
      * 用户操作的目的ID 
比如：点赞，该字段就是被点 赞的消息 id，如果是投票，就是被投号码的 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  RootId: string

  /**
      * 业务侧错误码。成功时返回Success，错误时返回具体业务错误原因。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CodeDesc: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 活动防刷高级版业务出参。
 */
export interface OutputActivityAntiRushAdvancedValue {
  /**
      * 账号ID。对应输入参数：
AccountType是1时，对应QQ的OpenID。
AccountType是2时，对应微信的OpenID/UnionID。
AccountType是4时，对应手机号。
AccountType是8时，对应imei、idfa、imeiMD5或者idfaMD5。
AccountType是0时，对应账号信息。
AccountType是10004时，对应手机号的MD5。
      */
  UserId: string

  /**
   * 操作时间戳，单位秒（对应输入参数）。
   */
  PostTime: number

  /**
      * AccountType 是 QQ 或微信开放账号时，用于标识 QQ 或微信用户登录后关联业务自身的账号ID（对应输入参数）。
注意：此字段可能返回 null，表示取不到有效值。
      */
  AssociateAccount: string

  /**
   * 操作来源的外网IP（对应输入参数）。
   */
  UserIp: string

  /**
      * 风险值：
0：表示无恶意。
1～4：恶意等级由低到高。
      */
  Level: number

  /**
      * 风险类型，详情请参见下文RiskType详细说明。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RiskType: Array<number>
}

/**
 * QQ账号信息。
 */
export interface QQAccountInfo {
  /**
   * QQ的OpenID。
   */
  QQOpenId: string

  /**
   * QQ分配给网站或应用的AppId，用来唯一标识网站或应用。
   */
  AppIdUser: string

  /**
   * 用于标识QQ用户登录后所关联业务自身的账号ID。
   */
  AssociateAccount?: string

  /**
   * 账号绑定的手机号。
   */
  MobilePhone?: string

  /**
   * 用户设备号。
   */
  DeviceId?: string
}

/**
 * ManageMarketingRisk请求参数结构体
 */
export interface ManageMarketingRiskRequest {
  /**
   * 业务入参
   */
  BusinessSecurityData: InputManageMarketingRisk
}

/**
 * 影响风控出参
 */
export interface OutputManageMarketingRisk {
  /**
      * 返回码。0表示成功，非0标识失败错误码。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Code: number

  /**
      * UTF-8编码，出错消息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Message: string

  /**
      * 业务详情。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value: OutputManageMarketingRiskValue
}

/**
 * 诈骗信息。
 */
export interface OnlineScamInfo {
  /**
   * 内容标签。
   */
  ContentLabel?: string

  /**
      * 内容风险等级：
0：正常。
1：可疑。
      */
  ContentRiskLevel?: number

  /**
      * 内容产生形式：
0：对话。
1：广播。
      */
  ContentType?: number

  /**
      * 诈骗账号类型：
1：11位手机号。
2：QQ账号。
      */
  FraudType?: number

  /**
   * 诈骗账号，手机号或QQ账号。
   */
  FraudAccount?: string
}

/**
 * 营销风控入参
 */
export interface InputManageMarketingRisk {
  /**
   * 账号信息。
   */
  Account: AccountInfo

  /**
   * 登录来源的外网IP
   */
  UserIp: string

  /**
   * 用户操作时间戳，单位秒（格林威治时间精确到秒，如1501590972）。
   */
  PostTime: number

  /**
      * 场景类型。(后续不再支持，请使用SceneCode字段)
1：活动防刷
2：登录保护
3：注册保护
4：活动防刷高级版（网赚）
      */
  SceneType?: number

  /**
   * 用户唯一标识。
   */
  UserId?: string

  /**
   * 设备指纹token。
   */
  DeviceToken?: string

  /**
   * 设备指纹BusinessId
   */
  DeviceBusinessId?: number

  /**
   * 业务ID。网站或应用在多个业务中使用此服务，通过此ID区分统计数据。
   */
  BusinessId?: number

  /**
   * 昵称，UTF-8 编码。
   */
  Nickname?: string

  /**
   * 用户邮箱地址（非系统自动生成）。
   */
  EmailAddress?: string

  /**
      * 是否识别设备异常：
0：不识别。
1：识别。
      */
  CheckDevice?: number

  /**
   * 用户HTTP请求中的Cookie进行2次hash的值，只要保证相同Cookie的hash值一致即可。
   */
  CookieHash?: string

  /**
   * 用户HTTP请求的Referer值。
   */
  Referer?: string

  /**
   * 用户HTTP请求的User-Agent值。
   */
  UserAgent?: string

  /**
   * 用户HTTP请求的X-Forwarded-For值。
   */
  XForwardedFor?: string

  /**
   * MAC地址或设备唯一标识。
   */
  MacAddress?: string

  /**
   * 网赚防刷相关信息。SceneType为4时填写。
   */
  CrowdAntiRush?: CrowdAntiRushInfo

  /**
   * 场景Code，控制台上获取
   */
  SceneCode?: string

  /**
   * 详细信息
   */
  Details?: Array<InputDetails>

  /**
      * 设备类型：
1：Android
2：IOS
      */
  DeviceType?: number
}

/**
 * 活动防刷高级版业务入参。
 */
export interface InputActivityAntiRushAdvanced {
  /**
   * 账号信息。
   */
  Account: AccountInfo

  /**
   * 用户IP（外网有效IP地址）。
   */
  UserIp: string

  /**
   * 用户操作时间戳，单位秒（格林威治时间精确到秒，如1501590972）。
   */
  PostTime: number

  /**
   * 可选填写。详情请跳转至SponsorInfo查看。
   */
  Sponsor?: SponsorInfo

  /**
   * 可选填写。详情请跳转至OnlineScamInfo查看。
   */
  OnlineScam?: OnlineScamInfo

  /**
   * 业务ID。网站或应用在多个业务中使用此服务，通过此ID区分统计数据。
   */
  BusinessId?: number

  /**
   * 昵称，UTF-8 编码。
   */
  Nickname?: string

  /**
   * 用户邮箱地址（非系统自动生成）。
   */
  EmailAddress?: string

  /**
      * 是否识别设备异常：
0：不识别。
1：识别。
      */
  CheckDevice?: number

  /**
   * 用户HTTP请求中的Cookie进行2次hash的值，只要保证相同Cookie的hash值一致即可。
   */
  CookieHash?: string

  /**
   * 用户HTTP请求的Referer值。
   */
  Referer?: string

  /**
   * 用户HTTP请求的User-Agent值。
   */
  UserAgent?: string

  /**
   * 用户HTTP请求的X-Forwarded-For值。
   */
  XForwardedFor?: string

  /**
   * MAC地址或设备唯一标识。
   */
  MacAddress?: string

  /**
   * 手机制造商ID，如果手机注册，请带上此信息。
   */
  VendorId?: string
}

/**
 * 其它账号信息。
 */
export interface OtherAccountInfo {
  /**
      * 其它账号信息：
AccountType是4时，填入真实的手机号（如13123456789）。
AccountType是8时，支持 imei、idfa、imeiMD5、idfaMD5 入参。
AccountType是0时，填入账号信息。
AccountType是10004时，填入手机号的MD5值。
注：imeiMd5 加密方式为：imei 明文小写后，进行 MD5 加密，加密后取小写值。IdfaMd5 加密方式为：idfa 明文大写后，进行 MD5 加密，加密后取小写值。
      */
  AccountId: string

  /**
   * 手机号，若 AccountType 是4（手机号）、或10004（手机号 MD5），则无需重复填写，否则填入对应的手机号（如13123456789）。
   */
  MobilePhone?: string

  /**
   * 用户设备号。若 AccountType 是8（设备号），则无需重复填写，否则填入对应的设备号。
   */
  DeviceId?: string
}

/**
 * 账号信息。
 */
export interface AccountInfo {
  /**
      * 用户账号类型（默认开通 QQ 开放账号、手机号，手机 MD5 账号类型查询。如需使用微信开放账号，则需要 提交工单 由腾讯云进行资格审核，审核通过后方可正常使用微信开放账号）：
1：QQ开放账号。
2：微信开放账号。
4：手机号（暂仅支持国内手机号）。
8：设备号（imei/imeiMD5/idfa/idfaMd5）。
0：其他。
10004：手机号MD5（标准中国大陆手机号11位，MD5后取32位小写值）
      */
  AccountType: number

  /**
   * QQ账号信息，AccountType是1时，该字段必填。
   */
  QQAccount?: QQAccountInfo

  /**
   * 微信账号信息，AccountType是2时，该字段必填。
   */
  WeChatAccount?: WeChatAccountInfo

  /**
   * 其它账号信息，AccountType是0、4、8或10004时，该字段必填。
   */
  OtherAccount?: OtherAccountInfo
}

/**
 * QueryActivityAntiRushAdvanced返回参数结构体
 */
export interface QueryActivityAntiRushAdvancedResponse {
  /**
   * 结果信息
   */
  Data?: OutputActivityAntiRushAdvanced

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ManageMarketingRisk返回参数结构体
 */
export interface ManageMarketingRiskResponse {
  /**
      * 业务出参
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data?: OutputManageMarketingRisk

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 微信账号信息。
 */
export interface WeChatAccountInfo {
  /**
   * 微信的OpenID/UnionID 。
   */
  WeChatOpenId: string

  /**
      * 微信开放账号类型：
1：微信公众号/微信第三方登录。
2：微信小程序。
      */
  WeChatSubType?: number

  /**
   * 随机串。如果WeChatSubType是2，该字段必填。Token签名随机数，建议16个字符。
   */
  RandStr?: string

  /**
      * 如果WeChatSubType是1，填入授权的access_token（注意：不是普通access_token，详情请参阅官方说明文档。获取网页版本的access_token时，scope字段必需填写snsapi_userinfo。
如果WeChatSubType是2，填入以session_key为密钥签名随机数RandStr（hmac_sha256签名算法）得到的字符串。
      */
  WeChatAccessToken?: string

  /**
   * 用于标识微信用户登录后所关联业务自身的账号ID。
   */
  AssociateAccount?: string

  /**
   * 账号绑定的手机号。
   */
  MobilePhone?: string

  /**
   * 用户设备号。
   */
  DeviceId?: string
}

/**
 * 助力场景信息
 */
export interface SponsorInfo {
  /**
   * 助力场景建议填写：活动发起人微信OpenID。
   */
  SponsorOpenId?: string

  /**
   * 助力场景建议填写：发起人设备号。
   */
  SponsorDeviceId?: string

  /**
   * 助力场景建议填写：发起人手机号。
   */
  SponsorPhone?: string

  /**
   * 助力场景建议填写：发起人IP。
   */
  SponsorIp?: string

  /**
   * 助力场景建议填写：活动链接。
   */
  CampaignUrl?: string
}

/**
 * QueryActivityAntiRush请求参数结构体
 */
export interface QueryActivityAntiRushRequest {
  /**
   * 账号类型
   */
  AccountType: string

  /**
   * uid值
   */
  Uid: string

  /**
   * 用户的真实外网 IP。若填入非外网有效ip，会返回level=0的风控结果，risktype中会有205的风险码返回作为标识
   */
  UserIp: string

  /**
   * 用户操作时间戳。
   */
  PostTime: string

  /**
   * accountType 是QQ开放账号时，该参数必填，表示 QQ 开放平台分配给网站或应用的 AppID，用来唯一标识网站或应用。
   */
  AppIdU?: string

  /**
   * 昵称，UTF-8 编码。
   */
  NickName?: string

  /**
   * 手机号
   */
  PhoneNumber?: string

  /**
   * 用户邮箱地址。
   */
  EmailAddress?: string

  /**
   * 注册时间戳。
   */
  RegisterTime?: string

  /**
   * 注册来源的外网 IP。
   */
  RegisterIp?: string

  /**
   * 用户 HTTP 请求中的 cookie 进行2次 hash 的值，只要保证相同 cookie 的 hash 值一致即可。
   */
  CookieHash?: string

  /**
   * 地址。
   */
  Address?: string

  /**
      * 登录来源：
0：其他。
1：PC 网页。
2：移动页面。
3：App。
4：微信公众号。
      */
  LoginSource?: string

  /**
      * 登录方式：
0：其他。
1：手动账号密码输入。
2：动态短信密码登录。
3：二维码扫描登录。
      */
  LoginType?: string

  /**
   * 登录耗时，单位：秒。
   */
  LoginSpend?: string

  /**
   * 用户操作的目的 ID，如点赞等，该字段就是被点赞的消息 ID，如果是投票，则为被投号码的 ID。
   */
  RootId?: string

  /**
   * 用户 HTTP 请求的 referer 值。
   */
  Referer?: string

  /**
   * 登录成功后跳转页面。
   */
  JumpUrl?: string

  /**
   * 用户 HTTP 请求的 userAgent。
   */
  UserAgent?: string

  /**
   * 用户 HTTP 请求中的 x_forward_for。
   */
  XForwardedFor?: string

  /**
   * 用户操作过程中鼠标单击次数。
   */
  MouseClickCount?: string

  /**
   * 用户操作过程中键盘单击次数。
   */
  KeyboardClickCount?: string

  /**
   * MAC 地址或设备唯一标识。
   */
  MacAddress?: string

  /**
   * 手机制造商 ID，如果手机注册，请带上此信息。
   */
  VendorId?: string

  /**
      * 手机设备号。支持以下格式：
1.imei明文
2.idfa明文,
3.imei小写后MD5值小写
4.idfa大写后MD5值小写
      */
  Imei?: string

  /**
   * App 客户端版本。
   */
  AppVersion?: string

  /**
   * 业务 ID 网站或应用在多个业务中使用此服务，通过此 ID 区分统计数据。
   */
  BusinessId?: string

  /**
      * 1：微信公众号。
2：微信小程序。
      */
  WxSubType?: string

  /**
   * Token 签名随机数，WxSubType为微信小程序时必填，建议16个字符。
   */
  RandNum?: string

  /**
   * token
   */
  WxToken?: string

  /**
      * 是否识别设备异常：
0：不识别。
1：识别。
      */
  CheckDevice?: string
}

/**
 * 入参的详细参数信息
 */
export interface InputDetails {
  /**
   * 字段名称
   */
  FieldName: string

  /**
   * 字段值
   */
  FieldValue: string
}

/**
 * 营销风控出参值
 */
export interface OutputManageMarketingRiskValue {
  /**
      * 账号ID。对应输入参数：
AccountType是1时，对应QQ的OpenID。
AccountType是2时，对应微信的OpenID/UnionID。
AccountType是4时，对应手机号。
AccountType是8时，对应imei、idfa、imeiMD5或者idfaMD5。
AccountType是0时，对应账号信息。
AccountType是10004时，对应手机号的MD5。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserId: string

  /**
      * 操作时间戳，单位秒（对应输入参数）。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PostTime: number

  /**
      * 对应输入参数，AccountType 是 QQ 或微信开放账号时，用于标识 QQ 或微信用户登录后关联业务自身的账号ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  AssociateAccount: string

  /**
      * 操作来源的外网IP（对应输入参数）。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserIp: string

  /**
      * 风险值
pass : 无恶意
review：需要人工审核
reject：拒绝，高风险恶意
注意：此字段可能返回 null，表示取不到有效值。
      */
  RiskLevel: string

  /**
      * 风险类型，请参考官网风险类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  RiskType: Array<number>
}

/**
 * 活动防刷高级版业务出参。
 */
export interface OutputActivityAntiRushAdvanced {
  /**
   * 返回码。0表示成功，非0标识失败错误码。
   */
  Code: number

  /**
   * UTF-8编码，出错消息。
   */
  Message: string

  /**
   * 服务调用结果。
   */
  Value: OutputActivityAntiRushAdvancedValue
}

/**
 * QueryActivityAntiRushAdvanced请求参数结构体
 */
export interface QueryActivityAntiRushAdvancedRequest {
  /**
   * 业务入参
   */
  BusinessSecurityData: InputActivityAntiRushAdvanced
}
