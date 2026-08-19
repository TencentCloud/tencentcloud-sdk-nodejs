/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
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
 * 做任务事件详情
 */
export interface TaskEvent {
  /**
   * <p>营销活动ID</p>
   */
  PromotionId?: string
  /**
   * <p>营销活动名称</p>
   */
  PromotionName?: string
  /**
   * <p>营销活动描述</p>
   */
  Description?: string
  /**
   * <p>邀请人ID</p>
   */
  InviterUserId?: string
  /**
   * <p>任务ID</p>
   */
  TaskId?: string
  /**
   * <p>任务名称</p>
   */
  TaskName?: string
  /**
   * <p>任务类型，如签到打卡、观看广告、累计步数等</p>
   */
  TaskType?: string
  /**
   * <p>任务完成耗时</p><p>单位：毫秒</p>
   */
  TaskCostTime?: number
  /**
   * <p>与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{&quot;Key&quot;: &quot;ApproverName&quot;, &quot;Value&quot;: &quot;bob&quot;},{&quot;Key&quot;:&quot;ApproverPhone&quot;,&quot;Value&quot;: &quot;+86131****5678&quot;}]</p>
   */
  Cust?: Array<Cust>
}

/**
 * 数字订单
 */
export interface DigitalOrder {
  /**
   * <p>数字资产</p>
   */
  DigitalAsset?: string
  /**
   * <p>数字资产类型</p><p>枚举值：</p><ul><li>coin： 代币</li><li>commodity： 大宗商品</li><li>crypto： 加密货币</li><li>fiat： 法币</li><li>token： 通证</li><li>stock： 股票</li><li>bond： 债券</li></ul>
   */
  AssetType?: string
  /**
   * <p>订单类型</p><p>枚举值：</p><ul><li>limit： 限价单</li><li>market： 市价单</li><li>stop_limit： 止损限价单</li><li>stop_loss： 止损单</li><li>take_profit： 止盈单</li><li>take_profit_limit： 止盈限价单</li></ul>
   */
  OrderType?: string
  /**
   * <p>数字资产的数量</p>
   */
  Volume?: number
}

/**
 * 账单信息
 */
export interface Billing {
  /**
   * <p>账单地址</p>
   */
  Address?: Address
  /**
   * <p>账单联系电话</p><p>参数格式：符合E.164标准的带“+”、地区编码和号码的格式</p>
   */
  Phone?: string
  /**
   * <p>账单邮箱</p>
   */
  Email?: string
  /**
   * <p>账单接收人姓名</p>
   */
  Recipient?: string
}

/**
 * 决策信息
 */
export interface Decision {
  /**
   * <p>决策结果</p><ul><li>pass：通过</li><li>review：复审</li><li>reject：拒绝</li></ul>
   */
  DecisionResult?: string
  /**
   * <p>命中策略后的决策动作，可在控制台配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Disposition?: string
}

/**
 * 个人信息
 */
export interface Person {
  /**
   * <p>姓名全称</p>
   */
  Name?: string
  /**
   * <p>性别</p>
   */
  Gender?: string
  /**
   * <p>出生日期</p><p>参数格式：YYYY-MM-DD</p>
   */
  Birthday?: string
  /**
   * <p>学历</p>
   */
  Degree?: string
  /**
   * <p>职业</p>
   */
  Occupation?: string
}

/**
 * 环境基础信息
 */
export interface Environment {
  /**
   * <p>IP地理位置信息</p>
   */
  Location?: IPLocation
  /**
   * <p>IP基础网络信息</p>
   */
  Network?: IPNetwork
}

/**
 * 数字钱包
 */
export interface Wallet {
  /**
   * <p>钱包类型</p><p>枚举值：</p><ul><li>crypto： 加密货币</li><li>digital： 数字货币</li><li>fiat： 法币</li></ul>
   */
  WalletType: string
  /**
   * <p>钱包地址，通常为钱包的唯一标识</p>
   */
  WalletAddress: string
  /**
   * <p>钱包归属人姓名</p>
   */
  WalletHolderName?: string
  /**
   * <p>钱包供应商，wechat、alipay、paypal等</p>
   */
  WalletProvider?: string
}

/**
 * 风险分
 */
export interface Score {
  /**
   * <p>风险分值，范围[1, 1000]，分值越大，风险越高</p>
   */
  RiskScore?: number
  /**
   * <p>风险标签</p>
   */
  RiskLabels?: Array<RiskLabel>
}

/**
 * 领红包事件详情
 */
export interface ClaimRedPacketEvent {
  /**
   * <p>营销活动ID</p>
   */
  PromotionId?: string
  /**
   * <p>营销活动名称</p>
   */
  PromotionName?: string
  /**
   * <p>营销活动描述</p>
   */
  Description?: string
  /**
   * <p>邀请人ID</p>
   */
  InviterUserId?: string
  /**
   * <p>红包ID</p>
   */
  RedPacketId?: string
  /**
   * <p>红包类型，如手气红包、口令红包、均分红包等</p>
   */
  RedPacketType?: string
  /**
   * <p>红包金额</p>
   */
  RedPacketAmount?: Amount
  /**
   * <p>与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{&quot;Key&quot;: &quot;ApproverName&quot;, &quot;Value&quot;: &quot;bob&quot;},{&quot;Key&quot;:&quot;ApproverPhone&quot;,&quot;Value&quot;: &quot;+86131****5678&quot;}]</p>
   */
  Cust?: Array<Cust>
}

/**
 * 营销活动码
 */
export interface PromotionCode {
  /**
   * <p>活动码ID</p>
   */
  Id: string
  /**
   * <p>活动码类型，例如：qrcode-二维码、barcode-条形码、miniprogram_code-小程序码</p>
   */
  Type?: string
  /**
   * <p>活动码图片URL或链接</p>
   */
  ImageLink?: string
  /**
   * <p>营销活动码使用地址</p>
   */
  Address?: Address
  /**
   * <p>营销活动码关联的商品</p>
   */
  Items?: Array<Item>
}

/**
 * 拒付事件详情
 */
export interface ChargeBackEvent {
  /**
   * <p>交易ID</p>
   */
  TransactionId: string
  /**
   * <p>订单 ID，当一笔交易关联多个订单（合并支付）时请输入所有订单ID</p>
   */
  OrderId: Array<string>
  /**
   * <p>拒付理由码，参考各卡组织定义的拒付码，例如：10.1、13.1、 4870、4871等</p>
   */
  ChargeBackCode: string
  /**
   * <p>拒付原因，参考各卡组织定义的拒付原因，例如：未收到商品、欺诈等</p>
   */
  ChargeBackReason: string
  /**
   * <p>拒付申诉阶段</p><p>枚举值：</p><ul><li>need_response： 需要商家回应</li><li>information_supplied： 商家已提供信息</li><li>chargeback_reversed： 拒付已撤销</li><li>chargeback_sustained： 拒付已成立</li></ul>
   */
  ChargeBackProcess?: string
  /**
   * <p>拒付金额</p>
   */
  ChargeBackAmount?: Amount
  /**
   * <p>与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{&quot;Key&quot;: &quot;ApproverName&quot;, &quot;Value&quot;: &quot;bob&quot;},{&quot;Key&quot;:&quot;ApproverPhone&quot;,&quot;Value&quot;: &quot;+86131****5678&quot;}]</p>
   */
  Cust?: Array<Cust>
}

/**
 * ReportEvent请求参数结构体
 */
export interface ReportEventRequest {
  /**
   * <p>事件码，标准事件包含：</p><p>枚举值：</p><ul><li>login： 登录</li><li>register： 注册</li><li>create_order： 创建订单</li><li>transaction： 交易支付</li><li>charge_back： 拒付</li><li>sms： 短信</li><li>logout： 登出</li><li>modify_account： 修改账号</li><li>modify_password： 修改密码</li><li>security_verification： 安全验证</li><li>add_promotion： 参加营销活动</li><li>redeem： 兑奖</li><li>withdraw： 提现</li><li>cust_event： 自定义事件，cust_xxx</li><li>scan_code： 扫码</li><li>lucky_draw： 抽奖</li><li>task： 做任务</li><li>invitation： 邀请</li><li>claim_red_packet： 领红包</li><li>browse： 浏览</li></ul><p>自定义事件可与RCE约定后进行风险评估</p>
   */
  EventCode: string
  /**
   * <p>事件的发生时间</p><p>参数格式：符合ISO 8601标准的带UTC时区的毫秒级时间</p>
   */
  EventTime: string
  /**
   * <p>用户当前会话 ID， 用于关联用户登录前后的动作，如果没有传UserId，则SessionId必传，如缺失则可填充空字符串</p>
   */
  SessionId: string
  /**
   * <p>用户设备指纹token标识，在您的网站或者应用程序中集成设备指纹的SDK后获取</p>
   */
  DeviceToken: string
  /**
   * <p>客户端 IP 地址（IPv4或IPv6）</p>
   */
  UserIp: string
  /**
   * <p>事件详情，根据您输入的事件码传入对应的事件信息</p>
   */
  EventDetail: EventDetail
  /**
   * <p>用户在您系统中的唯一ID</p>
   */
  UserId?: string
  /**
   * <p>用户邮箱</p>
   */
  UserEmail?: string
  /**
   * <p>用户提供的联系方式</p><p>参数格式：符合E.164标准的带“+”、地区编码和号码的格式</p>
   */
  UserPhone?: string
  /**
   * <p>web浏览器相关信息，若您已集成我们的设备指纹SDK，则无需传入此字段</p>
   */
  Browser?: Browser
  /**
   * <p>应用程序、操作系统和移动设备详细信息，若您已集成我们的设备指纹SDK，则无需传入此字段</p>
   */
  App?: App
  /**
   * <p>数据授权信息，国内地域必填</p>
   */
  DataAuthorization?: DataAuthorization
  /**
   * <p>手机号码加密方式，国内地域必填</p><p>枚举值：</p><ul><li>md5： md5加密</li><li>plain： 明文</li></ul>
   */
  UserPhoneEncrypt?: string
  /**
   * <p>微信开放账号</p>
   */
  WeChatOpenId?: string
  /**
   * <p>QQ开放账号</p>
   */
  QQOpenId?: string
  /**
   * <p>QQ应用ID，当传入QQ开放账号时，该字段必填，QQ分配给网站或应用的AppId，用来唯一标识网站或应用</p>
   */
  QQAppId?: string
}

/**
 * 提现事件详情
 */
export interface WithdrawEvent {
  /**
   * <p>提现金额</p>
   */
  Amount: Amount
  /**
   * <p>提现方式</p><p>枚举值：</p><ul><li>card： 银行卡</li><li>wallet： 电子钱包</li></ul>
   */
  Method: string
  /**
   * <p>提现银行卡，当提现方式是card时必填</p>
   */
  Card?: Card
  /**
   * <p>提现数字钱包，当提现方式是wallet时必填</p>
   */
  Wallet?: Wallet
  /**
   * <p>提现结果</p>
   */
  Result?: Result
  /**
   * <p>与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{&quot;Key&quot;: &quot;ApproverName&quot;, &quot;Value&quot;: &quot;bob&quot;},{&quot;Key&quot;:&quot;ApproverPhone&quot;,&quot;Value&quot;: &quot;+86131****5678&quot;}]</p>
   */
  Cust?: Array<Cust>
}

/**
 * 商家信息
 */
export interface Merchant {
  /**
   * <p>商家ID</p>
   */
  MerchantId: string
  /**
   * <p>商家名称</p>
   */
  Name?: string
  /**
   * <p>商家的注册时间</p><p>参数格式：符合ISO 8601标准的带UTC时区的毫秒级时间</p>
   */
  RegisterTime?: string
  /**
   * <p>商家类别代码</p><p>参数格式：符合ISO 18245标准的4位编号</p>
   */
  Category?: string
  /**
   * <p>商家电话</p><p>参数格式：符合E.164标准的带“+”、地区编码和号码的格式</p>
   */
  Phone?: string
  /**
   * <p>商家邮件</p>
   */
  Email?: string
  /**
   * <p>商家店铺网址</p>
   */
  URL?: string
  /**
   * <p>商家地址</p>
   */
  Address?: Address
  /**
   * <p>商家等级</p>
   */
  Level?: string
  /**
   * <p>经营类型</p><p>枚举值：</p><ul><li>person： 个人</li><li>company： 企业</li></ul>
   */
  BusinessType?: string
  /**
   * <p>商家在售商品数量</p>
   */
  GoodsQuantity?: number
  /**
   * <p>商家历史销售数量</p>
   */
  HistoricSalesQuantity?: number
  /**
   * <p>商家历史销售总额</p>
   */
  HistoricSalesAmount?: Amount
}

/**
 * 物流信息
 */
export interface Delivery {
  /**
   * <p>物流方式</p><ul><li>physical：物理投送</li><li>electonic：电子投送</li></ul>
   */
  DeliveryMethod?: string
  /**
   * <p>物流费用</p>
   */
  DeliveryAmount?: Amount
  /**
   * <p>收货地址</p>
   */
  DeliveryAddress?: Address
  /**
   * <p>收货人电话</p><p>参数格式：符合E.164标准的带“+”、地区编码和号码的格式</p>
   */
  ConsigneePhone?: string
  /**
   * <p>收货人邮箱</p>
   */
  ConsigneeEmail?: string
  /**
   * <p>收货人姓名</p>
   */
  ConsigneeName?: string
  /**
   * <p>是否加急</p>
   */
  Expedited?: boolean
  /**
   * <p>物流厂商，一般是物流的公司</p>
   */
  DeliveryCarrier?: string
  /**
   * <p>物流追踪单号</p>
   */
  DeliveryTracking?: string
}

/**
 * 与RCE约定的定制化参数，K:V 格式的对象数组
 */
export interface Cust {
  /**
   * <p>标识符</p>
   */
  Key?: string
  /**
   * <p>数据</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
}

/**
 * 环境风险评估返回结果
 */
export interface AssessEnvironmentRiskRsp {
  /**
   * <p>IP环境风险分信息</p>
   */
  Score?: DataScore
  /**
   * <p>IP环境基础信息</p>
   */
  Environment?: Environment
}

/**
 * AssessEnvironmentRisk返回参数结构体
 */
export interface AssessEnvironmentRiskResponse {
  /**
   * <p>环境风险评估返回结果</p>
   */
  Data?: AssessEnvironmentRiskRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 支付方式，支持多种支付方式
 */
export interface PaymentMethod {
  /**
   * <p>支付方式</p><p>枚举值：</p><ul><li>cash： 现金</li><li>check： 支票</li><li>credit_card： 信用卡</li><li>debit_card： 借记卡</li><li>crypto_currency： 加密货币</li><li>digital_wallet： 数字钱包</li><li>gift_card： 礼品卡</li><li>points： 积分</li><li>in_app_purchase： APP内购买</li><li>electronic_fund_transfer： 电子资金转账</li><li>financing： 融资</li><li>invoice： 发票</li><li>prepaid_card： 预付卡</li><li>sepa_credit： SEPA信用转账</li></ul>
   */
  PaymentType: string
  /**
   * <p>支付渠道</p>
   */
  PaymentChannel?: string
  /**
   * <p>银行卡信息，当用支付方式是credit_card、debit_card时必填</p>
   */
  Card?: Card
  /**
   * <p>SEPA直接借记授权</p><p>枚举值：</p><ul><li>true： 是</li><li>false： 否</li></ul>
   */
  SEPADirectDebitMandate?: boolean
  /**
   * <p>数字钱包</p>
   */
  DigitalWallet?: Wallet
}

/**
 * 抽奖事件详情
 */
export interface LuckyDrawEvent {
  /**
   * <p>营销活动ID</p>
   */
  PromotionId?: string
  /**
   * <p>营销活动名称</p>
   */
  PromotionName?: string
  /**
   * <p>营销活动描述</p>
   */
  Description?: string
  /**
   * <p>邀请人ID</p>
   */
  InviterUserId?: string
  /**
   * <p>抽奖次数</p><p>单位：次数</p>
   */
  LuckyDrawCount?: number
  /**
   * <p>抽奖类型</p>
   */
  LuckyDrawType?: string
  /**
   * <p>与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{&quot;Key&quot;: &quot;ApproverName&quot;, &quot;Value&quot;: &quot;bob&quot;},{&quot;Key&quot;:&quot;ApproverPhone&quot;,&quot;Value&quot;: &quot;+86131****5678&quot;}]</p>
   */
  Cust?: Array<Cust>
}

/**
 * AssessDeviceRiskPremiumPro请求参数结构体
 */
export interface AssessDeviceRiskPremiumProRequest {
  /**
   * <p>用户设备指纹token标识，在您的网站或者应用程序中集成设备指纹的SDK后获取</p>
   */
  DeviceToken: string
  /**
   * <p>客户端 IP 地址（IPv4或IPv6）</p>
   */
  UserIp?: string
}

/**
 * 订单信息
 */
export interface Order {
  /**
   * <p>订单ID</p>
   */
  OrderId: string
  /**
   * <p>订单金额</p>
   */
  Amount: Amount
  /**
   * <p>商品信息</p>
   */
  Items?: Array<Item>
  /**
   * <p>物流信息</p>
   */
  Delivery?: Delivery
}

/**
 * AssessDeviceRiskPro返回参数结构体
 */
export interface AssessDeviceRiskProResponse {
  /**
   * <p>设备风险评估基础版返回结果</p>
   */
  Data?: AssessDeviceRiskRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 账号信息
 */
export interface User {
  /**
   * <p>用户等级</p>
   */
  UserLevel?: string
  /**
   * <p>用户积分</p>
   */
  UserPoint?: CreditPoint
  /**
   * <p>用户类型</p>
   */
  UserType?: string
}

/**
 * 地址
 */
export interface Address {
  /**
   * <p>国家</p><p>参数格式：符合ISO 3166标准</p>
   */
  Country?: string
  /**
   * <p>省份</p>
   */
  Region?: string
  /**
   * <p>城市</p>
   */
  City?: string
  /**
   * <p>地区</p>
   */
  District?: string
  /**
   * <p>详细地址</p>
   */
  Detail?: string
  /**
   * <p>邮政编码</p>
   */
  ZipCode?: string
}

/**
 * 设备基础信息
 */
export interface Device {
  /**
   * <p>设备ID</p>
   */
  DeviceId?: string
  /**
   * <p>App版本信息</p>
   */
  AppVersion?: string
  /**
   * <p>品牌</p>
   */
  Brand?: string
  /**
   * <p>客户端IP</p>
   */
  ClientIp?: string
  /**
   * <p>机型</p>
   */
  Model?: string
  /**
   * <p>网络类型</p>
   */
  NetworkType?: string
  /**
   * <p>应用包名</p>
   */
  PackageName?: string
  /**
   * <p>平台</p><p>枚举值：</p><ul><li>2： Android</li><li>3： IOS</li><li>4： H5</li><li>5： 微信小程序</li></ul>
   */
  Platform?: string
  /**
   * <p>系统版本</p>
   */
  SystemVersion?: string
  /**
   * <p>SDK版本</p>
   */
  SdkBuildVersion?: string
  /**
   * <p>验签token，验签功能启用请联系我们。</p>
   */
  SignToken?: string
  /**
   * <p>token生成时间戳，毫秒级。</p>
   */
  TokenTime?: string
  /**
   * <p>隐私浏览器类型，当检测到隐私浏览器时返回，仅H5。</p>
   */
  PrivacyBrowser?: string
}

/**
 * 数据授权信息
 */
export interface DataAuthorization {
  /**
   * <p>数据委托方，客户主体名称</p>
   */
  DataProviderName?: string
  /**
   * <p>数据受托方，腾讯云主体名称，固定填：腾讯云计算（北京）有限责任公司</p>
   */
  DataRecipientName?: string
  /**
   * <p>客户请求RCE所提供的用户数据类型，支持多选</p><p>枚举值：</p><ul><li>1： 手机号</li><li>2： 微信开放账号</li><li>3： QQ开放账号</li><li>4： IP地址</li><li>5： URL网址</li><li>999： 其他</li></ul>
   */
  UserDataType?: Array<number | bigint>
  /**
   * <p>客户是否已按合规指南要求获取用户授权，同意客户委托腾讯云处理入参信息</p><p>枚举值：</p><ul><li>true： 已授权</li><li>false： 未授权</li></ul>
   */
  IsAuthorized?: boolean
  /**
   * <p>客户是否已按合规指南要求获取用户授权，同意腾讯云结合客户提供的信息，对已合法收集的用户数据进行必要处理得出服务结果，并返回给客户</p><p>枚举值：</p><ul><li>true： 已授权</li><li>false： 未授权</li></ul>
   */
  IsOrderHanding?: boolean
  /**
   * <p>客户获得的用户授权期限Unix时间戳（单位秒），不填默认无固定期限</p>
   */
  AuthorizationDeadline?: number
  /**
   * <p>客户获得用户授权所依赖的协议地址</p>
   */
  PrivacyPolicyLink?: string
}

/**
 * 创建订单事件详情
 */
export interface CreateOrderEvent {
  /**
   * <p>订单ID</p>
   */
  OrderId: string
  /**
   * <p>订单金额</p>
   */
  Amount: Amount
  /**
   * <p>商家信息</p>
   */
  Merchant: Merchant
  /**
   * <p>账单信息</p>
   */
  Billing?: Billing
  /**
   * <p>商品信息</p>
   */
  Items?: Array<Item>
  /**
   * <p>物流信息</p>
   */
  Delivery?: Delivery
  /**
   * <p>营销活动信息</p>
   */
  Promotions?: Array<Promotion>
  /**
   * <p>与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{&quot;Key&quot;: &quot;ApproverName&quot;, &quot;Value&quot;: &quot;bob&quot;},{&quot;Key&quot;:&quot;ApproverPhone&quot;,&quot;Value&quot;: &quot;+86131****5678&quot;}]</p>
   */
  Cust?: Array<Cust>
}

/**
 * 银行卡
 */
export interface Card {
  /**
   * <p>发卡行识别码卡号前6位</p><p>参数格式：符合ISO 13616-1标准</p>
   */
  CardBin: string
  /**
   * <p>发卡行识别码卡号后4位</p><p>参数格式：符合ISO 13616-1标准</p>
   */
  LastFourDigits: string
  /**
   * <p>发行国家</p>
   */
  Country?: string
  /**
   * <p>发行银行</p>
   */
  Bank?: string
  /**
   * <p>支付卡类型</p><p>枚举值：</p><ul><li>credit： 信用卡</li><li>debit： 借记卡</li><li>charge： 签账卡</li></ul>
   */
  Type?: string
  /**
   * <p>支付卡品牌</p>
   */
  Brand?: string
  /**
   * <p>支付卡等级</p>
   */
  Level?: string
  /**
   * <p>持有者姓名</p>
   */
  HolderName?: string
  /**
   * <p>过期日期</p><p>参数格式：YYYY-MM-DD</p>
   */
  ExpireTime?: string
}

/**
 * 事件结果
 */
export interface Result {
  /**
   * <p>实际是否完成状态</p><p>枚举值：</p><ul><li>success： 成功</li><li>failure： 失败</li></ul>
   */
  Status: string
  /**
   * <p>失败原因</p>
   */
  FailureReason?: string
}

/**
 * ReportEvent返回参数结构体
 */
export interface ReportEventResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 风险标签
 */
export interface RiskLabel {
  /**
   * <p>风险ID</p>
   */
  Id?: string
  /**
   * <p>风险描述</p>
   */
  Reason?: string
}

/**
 * 自定义事件
 */
export interface CustEvent {
  /**
   * <p>与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{&quot;Key&quot;: &quot;ApproverName&quot;, &quot;Value&quot;: &quot;bob&quot;},{&quot;Key&quot;:&quot;ApproverPhone&quot;,&quot;Value&quot;: &quot;+86131****5678&quot;}]</p>
   */
  Cust?: Array<Cust>
}

/**
 * IP地理位置信息
 */
export interface IPLocation {
  /**
   * <p>IP地址所属国家</p>
   */
  Country?: string
  /**
   * <p>IP地址所属省份</p>
   */
  Region?: string
  /**
   * <p>IP地址所属城市</p>
   */
  City?: string
  /**
   * <p>IP地址所属地区</p>
   */
  District?: string
  /**
   * <p>IP地址的经度</p>
   */
  Longitude?: string
  /**
   * <p>IP地址的纬度</p>
   */
  Latitude?: string
  /**
   * <p>IP地址所属时区</p>
   */
  Timezone?: string
  /**
   * <p>IP地址的邮政编码</p>
   */
  ZipCode?: string
}

/**
 * 风险分信息
 */
export interface DataScore {
  /**
   * <p>风险等级</p>
   */
  RiskLevel?: number
  /**
   * <p>风险标签</p>
   */
  RiskLabels?: Array<RiskLabel>
  /**
   * <p>综合风险分数。</p><p>取值范围：[1, 1000]</p><p>数值越大，风险越大。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RiskScore?: number
}

/**
 * 浏览事件详情
 */
export interface BrowseEvent {
  /**
   * <p>当前浏览网页的类型，例如主页、搜索页等</p>
   */
  PageType?: string
  /**
   * <p>当前浏览的网页URL</p>
   */
  PageUrl?: string
  /**
   * <p>浏览耗时</p><p>单位：毫秒</p>
   */
  Duration?: number
  /**
   * <p>网页内容类型，例如广告、视频、文章等</p>
   */
  ContentType?: string
  /**
   * <p>网页内容ID</p>
   */
  ContentId?: string
  /**
   * <p>上一个网页的类型，例如主页、搜索页等</p>
   */
  ReferPageType?: string
  /**
   * <p>上一个网页URL</p>
   */
  ReferPageUrl?: string
  /**
   * <p>游客账号ID</p>
   */
  GuestId?: string
  /**
   * <p>与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{&quot;Key&quot;: &quot;ApproverName&quot;, &quot;Value&quot;: &quot;bob&quot;},{&quot;Key&quot;:&quot;ApproverPhone&quot;,&quot;Value&quot;: &quot;+86131****5678&quot;}]</p>
   */
  Cust?: Array<Cust>
}

/**
 * AssessDeviceRiskPremiumPro返回参数结构体
 */
export interface AssessDeviceRiskPremiumProResponse {
  /**
   * <p>设备风险评估高级版返回结果</p>
   */
  Data?: AssessDeviceRiskPremiumRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AssessDeviceRiskPro请求参数结构体
 */
export interface AssessDeviceRiskProRequest {
  /**
   * <p>用户设备指纹token标识，在您的网站或者应用程序中集成设备指纹的SDK后获取</p>
   */
  DeviceToken: string
  /**
   * <p>客户端 IP 地址（IPv4或IPv6）</p>
   */
  UserIp?: string
}

/**
 * 账号积分
 */
export interface CreditPoint {
  /**
   * <p>积分分值</p>
   */
  Point: number
  /**
   * <p>积分类型</p>
   */
  PointType: string
}

/**
 * 商品信息
 */
export interface Item {
  /**
   * <p>商品ID</p>
   */
  ItemId: string
  /**
   * <p>商品名称</p>
   */
  ItemName?: string
  /**
   * <p>商品类别</p>
   */
  Category?: string
  /**
   * <p>商品单价</p>
   */
  Price?: Amount
  /**
   * <p>如果商品有UPC码（Universal Product Code），请提供</p>
   */
  UPC?: string
  /**
   * <p>如果商品有EAN码（European Article Number），请提供</p>
   */
  EAN?: string
  /**
   * <p>如果商品有SKU码（Stock Keeping Unit），请提供</p>
   */
  SKU?: string
  /**
   * <p>如果商品有ISBN码（International Standard Book Number ），请提供</p>
   */
  ISBN?: string
  /**
   * <p>商品品牌</p>
   */
  Brand?: string
  /**
   * <p>商品数量</p>
   */
  Quantity?: number
  /**
   * <p>生产厂商</p>
   */
  Manufacturer?: string
  /**
   * <p>商品标签</p>
   */
  Tags?: string
}

/**
 * 金额
 */
export interface Amount {
  /**
   * <p>原始货币类型</p><p>参数格式：符合ISO 4217标准</p>
   */
  Currency: string
  /**
   * <p>原始金额</p>
   */
  OriginalAmount: number
  /**
   * <p>当前币种对美金的汇率</p>
   */
  ExchangeRateUSD?: number
  /**
   * <p>当前币种对人民币的汇率</p>
   */
  ExchangeRateCNY?: number
}

/**
 * 短信事件详情
 */
export interface SMSEvent {
  /**
   * <p>用户基础信息</p>
   */
  UserInfo?: User
  /**
   * <p>本次短信发送标识 ID</p>
   */
  SMSId?: string
  /**
   * <p>用户实际完成验证码时间</p><p>参数格式：符合ISO 8601标准的带UTC时区的毫秒级时间</p>
   */
  ReceivedTime?: string
  /**
   * <p>记录用户收到短信的动作</p><ul><li>no_action：用户无动作</li><li>safe：用户确认本人操作</li><li>compromised：用户反馈为第三方操作</li></ul>
   */
  Action?: string
  /**
   * <p>短信回执结果</p>
   */
  SMSResult?: Result
  /**
   * <p>与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{&quot;Key&quot;: &quot;ApproverName&quot;, &quot;Value&quot;: &quot;bob&quot;},{&quot;Key&quot;:&quot;ApproverPhone&quot;,&quot;Value&quot;: &quot;+86131****5678&quot;}]</p>
   */
  Cust?: Array<Cust>
}

/**
 * AssessRisk返回参数结构体
 */
export interface AssessRiskResponse {
  /**
   * <p>事件风险评估结果</p>
   */
  Data?: AssessRiskRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AssessEnvironmentRisk请求参数结构体
 */
export interface AssessEnvironmentRiskRequest {
  /**
   * <p>客户端 IP 地址（IPv4或IPv6）</p>
   */
  UserIp: string
}

/**
 * 参加营销活动事件详情
 */
export interface AddPromotionEvent {
  /**
   * <p>营销活动ID</p>
   */
  PromotionId: string
  /**
   * <p>营销活动名称</p>
   */
  PromotionName?: string
  /**
   * <p>营销活动描述</p>
   */
  Description?: string
  /**
   * <p>邀请人ID</p>
   */
  InviterUserId?: string
  /**
   * <p>营销活动关联的优惠券</p>
   */
  Coupon?: Coupon
  /**
   * <p>营销活动关联的积分活动</p>
   */
  Point?: CreditPoint
  /**
   * <p>参加营销活动结果</p>
   */
  Result?: Result
  /**
   * <p>与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{&quot;Key&quot;: &quot;ApproverName&quot;, &quot;Value&quot;: &quot;bob&quot;},{&quot;Key&quot;:&quot;ApproverPhone&quot;,&quot;Value&quot;: &quot;+86131****5678&quot;}]</p>
   */
  Cust?: Array<Cust>
}

/**
 * 营销活动
 */
export interface Promotion {
  /**
   * <p>营销活动ID</p>
   */
  PromotionId: string
  /**
   * <p>营销活动名称</p>
   */
  PromotionName?: string
  /**
   * <p>营销活动描述</p>
   */
  Description?: string
  /**
   * <p>邀请人ID</p>
   */
  InviterUserId?: string
  /**
   * <p>优惠券</p>
   */
  Coupon?: Coupon
  /**
   * <p>积分</p>
   */
  CreditPoint?: CreditPoint
}

/**
 * 修改账号事件详情
 */
export interface ModifyAccountEvent {
  /**
   * <p>用户基础信息</p>
   */
  UserInfo?: User
  /**
   * <p>用户填写的个人信息</p>
   */
  Person?: Person
  /**
   * <p>用户填写的账单地址</p>
   */
  BillingAddress?: Address
  /**
   * <p>用户填写的收货地址</p>
   */
  DeliveryAddress?: Address
  /**
   * <p>与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{&quot;Key&quot;: &quot;ApproverName&quot;, &quot;Value&quot;: &quot;bob&quot;},{&quot;Key&quot;:&quot;ApproverPhone&quot;,&quot;Value&quot;: &quot;+86131****5678&quot;}]</p>
   */
  Cust?: Array<Cust>
}

/**
 * 邀请人信息
 */
export interface Inviter {
  /**
   * <p>邀请人ID</p>
   */
  InviterUserId: string
  /**
   * <p>邀请人电话号码</p><p>参数格式：符合E.164标准的带“+”、地区编码和号码的格式</p>
   */
  InviterPhone?: string
  /**
   * <p>邀请码</p>
   */
  InviteCode?: string
  /**
   * <p>邀请渠道</p>
   */
  InviteChannel?: string
}

/**
 * 登出事件详情
 */
export interface LogoutEvent {
  /**
   * <p>用户基础信息</p>
   */
  UserInfo?: User
  /**
   * <p>用户登录时输入的用户名</p>
   */
  UserLoginName?: string
  /**
   * <p>与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{&quot;Key&quot;: &quot;ApproverName&quot;, &quot;Value&quot;: &quot;bob&quot;},{&quot;Key&quot;:&quot;ApproverPhone&quot;,&quot;Value&quot;: &quot;+86131****5678&quot;}]</p>
   */
  Cust?: Array<Cust>
}

/**
 * 浏览器信息
 */
export interface Browser {
  /**
   * <p>与网站交互的浏览器的用户代理</p>
   */
  UserAgent?: string
  /**
   * <p>浏览器支持的用户请求语言</p><p>参数格式：符合ISO 3166标准</p>
   */
  AcceptLanguage?: string
  /**
   * <p>浏览器当前网站内容的语言</p><p>参数格式：符合ISO 3166标准</p>
   */
  ContentLanguage?: string
}

/**
 * 支付结果
 */
export interface PaymentResult {
  /**
   * <p>支付状态</p><p>枚举值：</p><ul><li>success： 成功</li><li>failure： 失败</li></ul>
   */
  Status: string
  /**
   * <p>支付失败原因</p>
   */
  FailureReason?: string
  /**
   * <p>是否使用3DS，枚举值：</p><ul><li>是：true</li><li>否：false</li></ul>
   */
  ThreeDomainSecure?: boolean
  /**
   * <p>ECI返回码</p>
   */
  ECICode?: string
  /**
   * <p>AVS响应结果（地址验证）</p>
   */
  AVSCode?: string
  /**
   * <p>CVC验证结果（交易真实性验证）</p>
   */
  CVCCode?: string
}

/**
 * 交易事件详情
 */
export interface TransactionEvent {
  /**
   * <p>交易唯一标识</p>
   */
  TransactionId: string
  /**
   * <p>您系统中的订单 ID，当一笔交易关联多个订单（合并支付）时请输入所有订单ID</p>
   */
  OrderId: Array<string>
  /**
   * <p>交易金额</p>
   */
  PaymentAmount: Amount
  /**
   * <p>支付方式，支持多种支付方式</p>
   */
  PaymentMethod: PaymentMethod
  /**
   * <p>交易类型</p><p>枚举值：</p><ul><li>sale： 一次性完成授权与扣款（最常见）</li><li>authorize： 仅授权（冻结金额）</li><li>capture： 执行扣款（在授权后）</li><li>void： 取消待处理的授权或扣款</li><li>refund： 退款（部分或全部）</li><li>deposit： 向账户存款</li><li>withdrawal： 从账户提现</li><li>transfer： 账户间转账</li><li>buy： 购买资产（如加密货币）</li><li>sell： 出售资产</li><li>send： 发送资金/资产（如跨钱包转账）</li><li>receive： 接收资金/资产</li></ul><p>默认值：sale</p>
   */
  TransactionType?: string
  /**
   * <p>账单信息</p>
   */
  Billing?: Billing
  /**
   * <p>物流信息</p>
   */
  Delivery?: Delivery
  /**
   * <p>商家信息</p>
   */
  Merchant?: Merchant
  /**
   * <p>支付结果</p>
   */
  PaymentResult?: PaymentResult
  /**
   * <p>接收方的用户ID，适用于 transfer 交易类型</p>
   */
  TransferRecipientUserId?: string
  /**
   * <p>发送方的物理地址，适用于 transfer 交易类型</p>
   */
  TransferSentAddress?: Address
  /**
   * <p>接收方的物理地址，适用于 transfer 交易类型</p>
   */
  TransferReceivedAddress?: Address
  /**
   * <p>数字订单列表</p>
   */
  DigitalOrders?: Array<DigitalOrder>
  /**
   * <p>接收加密货币的钱包</p>
   */
  ReceiverWallet?: Wallet
  /**
   * <p>与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{&quot;Key&quot;: &quot;ApproverName&quot;, &quot;Value&quot;: &quot;bob&quot;},{&quot;Key&quot;:&quot;ApproverPhone&quot;,&quot;Value&quot;: &quot;+86131****5678&quot;}]</p>
   */
  Cust?: Array<Cust>
}

/**
 * 事件风险评估返回结果
 */
export interface AssessRiskRsp {
  /**
   * <p>决策信息</p>
   */
  Decision?: Decision
  /**
   * <p>风险分，根据您开启的产品服务计算的评分结果</p>
   */
  Score?: Score
  /**
   * <p>扩展信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtraInfo?: Array<Cust>
}

/**
 * 修改密码事件详情
 */
export interface ModifyPasswordEvent {
  /**
   * <p>修改原因</p><p>枚举值：</p><ul><li>user_modify： 用户主动修改</li><li>forgot_password： 忘记密码</li><li>forced_reset： 系统强制重置</li></ul>
   */
  Reason?: string
  /**
   * <p>与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{&quot;Key&quot;: &quot;ApproverName&quot;, &quot;Value&quot;: &quot;bob&quot;},{&quot;Key&quot;:&quot;ApproverPhone&quot;,&quot;Value&quot;: &quot;+86131****5678&quot;}]</p>
   */
  Cust?: Array<Cust>
}

/**
 * 设备风险评估基础版返回结果
 */
export interface AssessDeviceRiskRsp {
  /**
   * <p>设备风险分信息</p>
   */
  Score?: DataScore
  /**
   * <p>设备基础信息</p>
   */
  Device?: Device
  /**
   * <p>IP环境基础信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Environment?: Environment
}

/**
 * 优惠券
 */
export interface Coupon {
  /**
   * <p>优惠券ID</p>
   */
  CouponId?: string
  /**
   * <p>优惠券名称</p>
   */
  CouponName?: string
  /**
   * <p>优惠券开始时间</p><p>参数格式：符合ISO 8601标准的带UTC时区的毫秒级时间</p>
   */
  StartTime?: string
  /**
   * <p>优惠券过期时间</p><p>参数格式：符合ISO 8601标准的带UTC时区的毫秒级时间</p>
   */
  ExpireTime?: string
  /**
   * <p>折扣百分比，如果折扣为 10%，则发送“0.1”</p>
   */
  PercentageRate?: number
  /**
   * <p>折扣金额</p>
   */
  DiscountAmount?: Amount
  /**
   * <p>优惠券门槛</p>
   */
  Threshold?: number
}

/**
 * 注册事件详情
 */
export interface RegisterEvent {
  /**
   * <p>注册结果</p>
   */
  RegisterResult?: Result
  /**
   * <p>用户基础信息</p>
   */
  UserInfo?: User
  /**
   * <p>用户注册时填写的个人信息</p>
   */
  Person?: Person
  /**
   * <p>用户注册时填写的账单地址</p>
   */
  BillingAddress?: Address
  /**
   * <p>用户注册时填写的收货地址</p>
   */
  DeliveryAddress?: Address
  /**
   * <p>邀请人信息</p>
   */
  Inviter?: Inviter
  /**
   * <p>与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{&quot;Key&quot;: &quot;ApproverName&quot;, &quot;Value&quot;: &quot;bob&quot;},{&quot;Key&quot;:&quot;ApproverPhone&quot;,&quot;Value&quot;: &quot;+86131****5678&quot;}]</p>
   */
  Cust?: Array<Cust>
}

/**
 * 应用程序信息
 */
export interface App {
  /**
   * <p>应用程序运行的移动设备的操作系统类型</p>
   */
  OS?: string
  /**
   * <p>应用程序运行的移动设备的操作系统版本</p>
   */
  OSVersion?: string
  /**
   * <p>应用程序运行的移动设备的生产厂商</p>
   */
  DeviceManufacturer?: string
  /**
   * <p>应用程序运行的移动设备的型号</p>
   */
  DeviceModel?: string
  /**
   * <p>应用程序运行的移动设备的唯一ID，对于iOS为IFV标识，对于Android为Android ID</p>
   */
  DeviceId?: string
  /**
   * <p>应用程序名称</p>
   */
  AppName?: string
  /**
   * <p>应用程序版本</p>
   */
  AppVersion?: string
  /**
   * <p>应用程序提供的语言</p>
   */
  ClientLanguage?: string
}

/**
 * 登录事件详情
 */
export interface LoginEvent {
  /**
   * <p>用户基础信息</p>
   */
  UserInfo?: User
  /**
   * <p>用户登录时输入的用户名</p>
   */
  UserLoginName?: string
  /**
   * <p>登录结果</p>
   */
  LoginResult?: Result
  /**
   * <p>与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{&quot;Key&quot;: &quot;ApproverName&quot;, &quot;Value&quot;: &quot;bob&quot;},{&quot;Key&quot;:&quot;ApproverPhone&quot;,&quot;Value&quot;: &quot;+86131****5678&quot;}]</p>
   */
  Cust?: Array<Cust>
}

/**
 * 事件详情
 */
export interface EventDetail {
  /**
   * <p>登录</p>
   */
  Login?: LoginEvent
  /**
   * <p>注册（变更用户信息）</p>
   */
  Register?: RegisterEvent
  /**
   * <p>创建订单</p>
   */
  CreateOrder?: CreateOrderEvent
  /**
   * <p>交易支付</p>
   */
  Transaction?: TransactionEvent
  /**
   * <p>短信</p>
   */
  Sms?: SMSEvent
  /**
   * <p>拒付</p>
   */
  ChargeBack?: ChargeBackEvent
  /**
   * <p>登出</p>
   */
  Logout?: LogoutEvent
  /**
   * <p>修改账号</p>
   */
  ModifyAccount?: ModifyAccountEvent
  /**
   * <p>修改密码</p>
   */
  ModifyPassword?: ModifyPasswordEvent
  /**
   * <p>安全验证</p>
   */
  SecurityVerification?: SecurityVerificationEvent
  /**
   * <p>参加营销活动</p>
   */
  AddPromotion?: AddPromotionEvent
  /**
   * <p>兑奖</p>
   */
  Redeem?: RedeemEvent
  /**
   * <p>提现</p>
   */
  Withdraw?: WithdrawEvent
  /**
   * <p>自定义事件</p>
   */
  CustEvent?: CustEvent
  /**
   * <p>扫码</p>
   */
  ScanCode?: ScanCodeEvent
  /**
   * <p>抽奖</p>
   */
  LuckyDraw?: LuckyDrawEvent
  /**
   * <p>做任务</p>
   */
  Task?: TaskEvent
  /**
   * <p>邀请</p>
   */
  Invitation?: InvitationEvent
  /**
   * <p>领红包</p>
   */
  ClaimRedPacket?: ClaimRedPacketEvent
  /**
   * <p>浏览</p>
   */
  Browse?: BrowseEvent
}

/**
 * IP基础网络信息
 */
export interface IPNetwork {
  /**
   * <p>互联网服务提供商</p>
   */
  ISP?: string
  /**
   * <p>自治系统号</p>
   */
  ASN?: string
  /**
   * <p>IP注册组织名称</p>
   */
  Organization?: string
  /**
   * <p>是否保留IP</p>
   */
  IsReserved?: boolean
  /**
   * <p>是否网关IP</p>
   */
  IsGateway?: boolean
  /**
   * <p>是否任播网络</p>
   */
  IsAnycast?: boolean
  /**
   * <p>是否移动网络</p>
   */
  IsMobile?: boolean
  /**
   * <p>是否动态IP</p>
   */
  IsDynamic?: boolean
  /**
   * <p>是否网络出口</p>
   */
  IsEgress?: boolean
  /**
   * <p>是否域名解析</p>
   */
  IsDNS?: boolean
  /**
   * <p>是否教育机构</p>
   */
  IsEducation?: boolean
  /**
   * <p>是否组织机构</p>
   */
  IsInstitution?: boolean
  /**
   * <p>是否企业专线</p>
   */
  IsCompany?: boolean
  /**
   * <p>是否家用宽带</p>
   */
  IsResidence?: boolean
  /**
   * <p>是否云服务</p>
   */
  IsCloudService?: boolean
  /**
   * <p>是否基础设施</p>
   */
  IsInfrastructure?: boolean
  /**
   * <p>是否邮箱服务</p>
   */
  IsMXServer?: boolean
}

/**
 * 安全验证事件详情
 */
export interface SecurityVerificationEvent {
  /**
   * <p>安全验证所处的事件类型</p><p>枚举值：</p><ul><li>register： 注册</li><li>login： 登录</li><li>modify_account： 修改账号</li><li>modify_password： 修改密码</li><li>create_order： 创建订单</li><li>transaction： 交易支付</li><li>modify_order： 修改订单</li><li>withdraw： 提现</li><li>add_promotion： 参加营销活动</li><li>redeem： 兑奖</li></ul>
   */
  VerificationEvent: string
  /**
   * <p>安全验证类型，sms-短信、phone_call-电话、email-邮件、captcha-验证码、shared_knowledge-共享知识、face-人脸、fingerprint-指纹等</p>
   */
  VerificationType: string
  /**
   * <p>安全验证的内容，例如：用于验证的电话号码、邮件、验证码或者问题，当安全验证类型是sms、phone_call、email、captcha、shared_knowledge时输入</p>
   */
  VerificationContent?: string
  /**
   * <p>安全验证结果</p>
   */
  VerificationResult?: Result
  /**
   * <p>与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{&quot;Key&quot;: &quot;ApproverName&quot;, &quot;Value&quot;: &quot;bob&quot;},{&quot;Key&quot;:&quot;ApproverPhone&quot;,&quot;Value&quot;: &quot;+86131****5678&quot;}]</p>
   */
  Cust?: Array<Cust>
}

/**
 * 设备风险评估高级版返回结果
 */
export interface AssessDeviceRiskPremiumRsp {
  /**
   * <p>决策信息</p>
   */
  Decision?: Decision
  /**
   * <p>设备风险分信息</p>
   */
  Score?: DataScore
  /**
   * <p>设备基础信息</p>
   */
  Device?: Device
  /**
   * <p>IP环境基础信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Environment?: Environment
}

/**
 * 兑奖事件详情
 */
export interface RedeemEvent {
  /**
   * <p>营销活动ID</p>
   */
  PromotionId: string
  /**
   * <p>营销活动名称</p>
   */
  PromotionName?: string
  /**
   * <p>营销活动描述</p>
   */
  Description?: string
  /**
   * <p>邀请人ID</p>
   */
  InviterUserId?: string
  /**
   * <p>兑奖关联的订单信息</p>
   */
  Order?: Order
  /**
   * <p>兑奖结果</p>
   */
  Result?: Result
  /**
   * <p>与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{&quot;Key&quot;: &quot;ApproverName&quot;, &quot;Value&quot;: &quot;bob&quot;},{&quot;Key&quot;:&quot;ApproverPhone&quot;,&quot;Value&quot;: &quot;+86131****5678&quot;}]</p>
   */
  Cust?: Array<Cust>
}

/**
 * 邀请事件详情
 */
export interface InvitationEvent {
  /**
   * <p>受邀请人ID</p>
   */
  InviteeUserId: string
  /**
   * <p>营销活动ID</p>
   */
  PromotionId?: string
  /**
   * <p>营销活动名称</p>
   */
  PromotionName?: string
  /**
   * <p>营销活动描述</p>
   */
  Description?: string
  /**
   * <p>受邀请人电话号码</p><p>参数格式：符合E.164标准的带“+”、地区编码和号码的格式</p>
   */
  InviteePhone?: string
  /**
   * <p>邀请码</p>
   */
  InvitationCode?: string
  /**
   * <p>邀请链接</p>
   */
  InvitationUrl?: string
  /**
   * <p>邀请渠道，如微信、抖音、小红书等</p>
   */
  InvitationChannel?: string
  /**
   * <p>与RCE约定的定制化信息，为K:V 格式的对象数组，示例：[{&quot;Key&quot;: &quot;ApproverName&quot;, &quot;Value&quot;: &quot;bob&quot;},{&quot;Key&quot;:&quot;ApproverPhone&quot;,&quot;Value&quot;: &quot;+86131****5678&quot;}]</p>
   */
  Cust?: Array<Cust>
}

/**
 * AssessRisk请求参数结构体
 */
export interface AssessRiskRequest {
  /**
   * <p>事件码，标准事件包含：</p><p>枚举值：</p><ul><li>login： 登录</li><li>register： 注册</li><li>create_order： 创建订单</li><li>transaction： 交易支付</li><li>charge_back： 拒付</li><li>sms： 短信</li><li>logout： 登出</li><li>modify_account： 修改账号</li><li>modify_password： 修改密码</li><li>security_verification： 安全验证</li><li>add_promotion： 参加营销活动</li><li>redeem： 兑奖</li><li>withdraw： 提现</li><li>cust_event： 自定义事件，cust_xxx</li><li>scan_code： 扫码</li><li>lucky_draw： 抽奖</li><li>task： 做任务</li><li>invitation： 邀请</li><li>claim_red_packet： 领红包</li><li>browse： 浏览</li></ul><p>自定义事件可与RCE约定后进行风险评估</p>
   */
  EventCode: string
  /**
   * <p>事件的发生时间</p><p>参数格式：符合ISO 8601标准的带UTC时区的毫秒级时间</p>
   */
  EventTime: string
  /**
   * <p>用户当前会话 ID， 用于关联用户登录前后的动作，如果没有传UserId，则SessionId必传，如缺失则可填充空字符串</p>
   */
  SessionId: string
  /**
   * <p>用户设备指纹token标识，在您的网站或者应用程序中集成设备指纹的SDK后获取</p>
   */
  DeviceToken: string
  /**
   * <p>客户端 IP 地址（IPv4或IPv6）</p>
   */
  UserIp: string
  /**
   * <p>事件详情，根据您输入的事件码传入对应的事件信息</p>
   */
  EventDetail: EventDetail
  /**
   * <p>用户在您系统中的唯一ID</p>
   */
  UserId?: string
  /**
   * <p>用户邮箱</p>
   */
  UserEmail?: string
  /**
   * <p>用户提供的联系方式</p><p>参数格式：符合E.164标准的带“+”、地区编码和号码的格式</p>
   */
  UserPhone?: string
  /**
   * <p>web浏览器相关信息，若您已集成我们的设备指纹SDK，则无需传入此字段</p>
   */
  Browser?: Browser
  /**
   * <p>应用程序、操作系统和移动设备详细信息，若您已集成我们的设备指纹SDK，则无需传入此字段</p>
   */
  App?: App
  /**
   * <p>数据授权信息，国内地域必填</p>
   */
  DataAuthorization?: DataAuthorization
  /**
   * <p>手机号码加密方式，国内地域必填</p><p>枚举值：</p><ul><li>md5： md5加密</li><li>plain： 明文</li></ul>
   */
  UserPhoneEncrypt?: string
  /**
   * <p>微信开放账号</p>
   */
  WeChatOpenId?: string
  /**
   * <p>QQ开放账号</p>
   */
  QQOpenId?: string
  /**
   * <p>QQ应用ID，当传入QQ开放账号时，该字段必填，QQ分配给网站或应用的AppId，用来唯一标识网站或应用</p>
   */
  QQAppId?: string
}

/**
 * 扫码事件详情
 */
export interface ScanCodeEvent {
  /**
   * <p>营销活动码</p>
   */
  PromotionCode: PromotionCode
  /**
   * <p>营销活动ID</p>
   */
  PromotionId?: string
  /**
   * <p>营销活动名称</p>
   */
  PromotionName?: string
  /**
   * <p>营销活动描述</p>
   */
  Description?: string
  /**
   * <p>邀请人ID</p>
   */
  InviterUserId?: string
  /**
   * <p>与RCE约定的定制化信息，为K:V 格式的对象数组， 示例：[{&quot;Key&quot;: &quot;ApproverName&quot;, &quot;Value&quot;: &quot;bob&quot;},{&quot;Key&quot;:&quot;ApproverPhone&quot;,&quot;Value&quot;: &quot;+86131****5678&quot;}]</p>
   */
  Cust?: Array<Cust>
}
