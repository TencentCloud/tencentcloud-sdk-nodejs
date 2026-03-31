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
 * DescribeEnvLimit返回参数结构体
 */
export interface DescribeEnvLimitResponse {
  /**
   * 环境总数上限
   */
  MaxEnvNum?: number
  /**
   * 目前环境总数
   */
  CurrentEnvNum?: number
  /**
   * 免费环境数量上限
   */
  MaxFreeEnvNum?: number
  /**
   * 目前免费环境数量
   */
  CurrentFreeEnvNum?: number
  /**
   * 总计允许销毁环境次数上限
   */
  MaxDeleteTotal?: number
  /**
   * 目前已销毁环境次数
   */
  CurrentDeleteTotal?: number
  /**
   * 每月允许销毁环境次数上限
   */
  MaxDeleteMonthly?: number
  /**
   * 本月已销毁环境次数
   */
  CurrentDeleteMonthly?: number
  /**
   * 微信网关体验版可购买月份数
   */
  MaxFreeTrialNum?: number
  /**
   * 微信网关体验版已购买月份数
   */
  CurrentFreeTrialNum?: number
  /**
   * 转支付限额总数
   */
  ChangePayTotal?: number
  /**
   * 当前已用转支付次数
   */
  CurrentChangePayTotal?: number
  /**
   * 转支付每月限额
   */
  ChangePayMonthly?: number
  /**
   * 本月已用转支付额度
   */
  CurrentChangePayMonthly?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListTables返回参数结构体
 */
export interface ListTablesResponse {
  /**
   * 表信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tables?: Array<TableInfo>
  /**
   * 分页信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Pager?: Pager
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetProviders请求参数结构体
 */
export interface GetProvidersRequest {
  /**
   * 环境 ID，用于指定需要查询配置第三方身份源的云开发环境。
   */
  EnvId: string
}

/**
 * 订单信息
 */
export interface OrderInfo {
  /**
   * 订单号
   */
  TranId?: string
  /**
   * 订单要切换的套餐ID
   */
  PackageId?: string
  /**
   * 订单类型
<li>1 购买</li>
<li>2 续费</li>
<li>3 变配</li>
   */
  TranType?: string
  /**
   * 订单状态。
<li>1未支付</li>
<li>2 支付中</li>
<li>3 发货中</li>
<li>4 发货成功</li>
<li>5 发货失败</li>
<li>6 已退款</li>
<li>7 已取消</li>
<li>100 已删除</li>
   */
  TranStatus?: string
  /**
   * 订单更新时间
   */
  UpdateTime?: string
  /**
   * 订单创建时间
   */
  CreateTime?: string
  /**
   * 付费模式.
<li>prepayment 预付费</li>
<li>postpaid 后付费</li>
   */
  PayMode?: string
  /**
   * 订单绑定的扩展ID
   */
  ExtensionId?: string
  /**
   * 资源初始化结果(仅当ExtensionId不为空时有效): successful(初始化成功), failed(初始化失败), doing(初始化进行中), init(准备初始化)
   */
  ResourceReady?: string
  /**
   * 安装标记。建议使用方统一转大小写之后再判断。
<li>QuickStart：快速启动来源</li>
<li>Activity：活动来源</li>
   */
  Flag?: string
  /**
   * 下单时的参数
   */
  ReqBody?: string
}

/**
 * CheckTcbService返回参数结构体
 */
export interface CheckTcbServiceResponse {
  /**
   * true表示已开通
   */
  Initialized?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 可以为每种语言配置一个字符串。比如：name，中文展示为：名字，英文展示为 name，韩文展示为：이름
 */
export interface LocalizedMessage {
  /**
   * 默认展示的文本
   */
  Message: string
  /**
   * 针对每种语言展示的文字
   */
  Localized?: Array<MessageLocalized>
}

/**
 * DescribeCloudBaseRunServerVersion请求参数结构体
 */
export interface DescribeCloudBaseRunServerVersionRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 服务名称
   */
  ServerName: string
  /**
   * 版本名称
   */
  VersionName: string
}

/**
 * CreateVmInstance返回参数结构体
 */
export interface CreateVmInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyEnvPlan请求参数结构体
 */
export interface ModifyEnvPlanRequest {
  /**
   * 所需变更套餐的环境ID
   */
  EnvId: string
  /**
   * 目标套餐Id。
对于云开发环境套餐，可通过 [DescribeBaasPackageList](https://cloud.tencent.com/document/product/876/78167) 接口获取，对应其出参的PackageName
   */
  PackageId: string
  /**
   * 是否自动选择代金券支付。
   */
  AutoVoucher?: boolean
}

/**
 * AddProvider请求参数结构体
 */
export interface AddProviderRequest {
  /**
   * 云开发环境 ID，用于唯一标识当前操作所属的云开发环境。
   */
  EnvId: string
  /**
   * 身份源的显示名称，支持国际化多语言配置。用户在登录页面看到的身份源名称将使用该字段，建议根据实际业务场景填写易于识别的名称，例如：企业微信、GitHub 等。
   */
  Name: LocalizedMessage
  /**
   * 身份源协议类型，决定该身份源使用何种认证协议与第三方平台对接。可选值：
OAUTH：标准 OAuth 2.0 协议
OIDC：OpenID Connect 协议
SAML：SAML 2.0 协议
WX_MICRO_APP：微信小程序登录
WX_QRCODE_MICRO_APP：微信小程序扫码登录
WX_CLOUDBASE_MICRO_APP：云开发托管小程序登录
WX_MP：微信公众号网页授权登录
WX_OPEN：微信开放平台扫码登录
WX_WORK_INTERNAL：企业微信自建应用登录
WX_WORK_AGENT：企业微信代开发应用登录
WX_WORK_THIRD_PARTY：企业微信第三方应用登录
WX_WORK_THIRD_PARTY_ASSOCIATION：企业微信第三方应用关联登录
CUSTOM：自定义登录
EMAIL：邮箱登录
   */
  ProviderType: string
  /**
   * 身份源的唯一标识符，用于在系统内区分不同的身份源。格式要求：2~32 位，仅支持小写英文字母和数字，不可包含空格或特殊字符。若不填写，系统将自动生成。例如：github、google。
   */
  Id?: string
  /**
   * 身份源图标的访问地址，将展示在登录页的身份源按钮上。建议使用 64×64 像素的 SVG 格式图片以保证清晰度，支持 HTTP/HTTPS 公网可访问的图片链接。
   */
  Picture?: string
  /**
   * 身份源对应的官方主页地址。该信息将在用户查看自己的第三方账号绑定列表时展示，帮助用户识别已绑定的身份源来源。例如 GitHub 身份源可填写：https://github.com。
   */
  Homepage?: string
  /**
   * 身份认证源协议连接配置，包含与第三方平台对接所需的核心参数，如 ClientId、ClientSecret、授权端点、Token 端点、回调地址、Scope、SAML Metadata、请求和响应参数映射等。不同 ProviderType 对应不同的配置项要求。
   */
  Config?: ProviderConfig
  /**
   * 是否开启透传登录模式。可选值：TRUE（开启）、FALSE（关闭）、UNSPECIFIED（默认为 FALSE，企业微信代开发应用 WX_WORK_AGENT 类型默认为 TRUE）。开启后，平台不会持久化存储用户数据，仅将第三方身份源返回的用户信息透传给业务方，适用于不希望平台留存用户数据的场景。注意：开启透传模式时，ReuseUserId 将自动设为 TRUE，AutoSignUpWithProviderUser 将自动设为 FALSE。
   */
  TransparentMode?: string
  /**
   * 身份源的详细描述信息，支持国际化多语言配置。可用于向用户说明该身份源的用途或使用场景，例如：谷歌授权登录。
   */
  Description?: LocalizedMessage
  /**
   * 是否直接复用第三方身份源的用户 ID 作为平台的用户 ID。可选值：TRUE（直接复用，适用于已有用户体系迁移场景）、FALSE（不复用，由平台生成独立用户 ID）、UNSPECIFIED（默认为 FALSE，但当 TransparentMode 为 TRUE 时自动设为 TRUE）。注意：开启后需确保第三方用户 ID 的唯一性，避免 ID 冲突。
   */
  ReuseUserId?: string
  /**
   * 身份源的启用状态。可选值：TRUE（启用，用户可通过该身份源登录）、FALSE（禁用，登录入口将被隐藏，已有绑定关系不受影响）、UNSPECIFIED（默认为 TRUE）。
   */
  On?: string
  /**
   * 是否开启邮箱自动关联登录。可选值：TRUE（开启）、FALSE（关闭）、UNSPECIFIED（默认为 FALSE）。开启后，若第三方身份源返回的邮箱与系统中已有用户的邮箱一致，则自动将该第三方账号与已有用户关联并完成登录，无需用户手动绑定。
   */
  AutoSignInWhenEmailMatch?: string
  /**
   * 是否开启手机号自动关联登录。可选值：TRUE（开启）、FALSE（关闭）、UNSPECIFIED（默认行为等同 TRUE）。开启后，若第三方身份源返回的手机号与系统中已有用户的手机号一致，则自动将该第三方账号与已有用户关联并完成登录，无需用户手动绑定。注意：该字段默认行为（UNSPECIFIED）与 AutoSignInWhenEmailMatch 不同，手机号匹配在未显式关闭时默认生效。
   */
  AutoSignInWhenPhoneNumberMatch?: string
}

/**
 * ModifyClsTopic返回参数结构体
 */
export interface ModifyClsTopicResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteProvider返回参数结构体
 */
export interface DeleteProviderResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 本类型用于UpdateTable接口中描述待创建索引信息
 */
export interface CreateIndex {
  /**
   * 索引名称
   */
  IndexName?: string
  /**
   * 索引结构
   */
  MgoKeySchema?: MgoKeySchema
}

/**
 * TDSQL-C数据库详情
 */
export interface ClusterDetail {
  /**
   * 是否开启公网访问
   */
  IsOpenPubNetAccess?: boolean
  /**
   * 最大算力
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxCpu?: number
  /**
   * 最小算力
注意：此字段可能返回 null，表示取不到有效值。
   */
  MinCpu?: number
  /**
   * TDSQL-C集群状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 存储用量（单位：MB）
注意：此字段可能返回 null，表示取不到有效值。
   */
  UsedStorage?: number
  /**
   * 最大存储量（单位：GB）
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageLimit?: number
  /**
   * 数据库类型
   */
  DbType?: string
  /**
   * 数据库类型
   */
  DbVersion?: string
  /**
   * 公网访问状态；open开启，opening开启中，closed关闭，closing关闭中
   */
  WanStatus?: string
  /**
   * 数据库集群状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterStatus?: string
  /**
   * serverless状态
   */
  ServerlessStatus?: string
}

/**
 * 数据库连接器实例信息
 */
export interface DbInstance {
  /**
   * 云开发环境ID
   */
  EnvId?: string
  /**
   * MySQL 连接器实例 ID；`"default"` 或为空表示使用 TCB 环境的默认连接器
   */
  InstanceId?: string
  /**
   * 数据库名；为空时使用连接器配置的默认数据库名
   */
  Schema?: string
}

/**
 * DescribeMySQLClusterDetail返回参数结构体
 */
export interface DescribeMySQLClusterDetailResponse {
  /**
   * 集群详情
   */
  Data?: MySQLClusterDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * HTTP访问服务路径重写配置
 */
export interface HTTPServicePathRewrite {
  /**
   * 路径前缀重写。StaticStorePrefix、Prefix只能填一个
   */
  Prefix?: string
}

/**
 * CreateVmInstance请求参数结构体
 */
export interface CreateVmInstanceRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 服务器类型：
LightHouse = 轻量云服务器
CVM = 云服务器
   */
  Type: string
  /**
   * 轻量云服务器套餐ID。 当Type=LightHouse时必传
   */
  LightHouseBundleId?: string
  /**
   * 轻量云服务器镜像ID。当Type=LightHouse时必传
   */
  LightHouseBlueprintId?: string
  /**
   * 服务器别名
   */
  InstanceName?: string
  /**
   * 登录方式
   */
  LoginConfiguration?: VMLoginConfiguration
}

/**
 * DescribeEnvs请求参数结构体
 */
export interface DescribeEnvsRequest {
  /**
   * 环境ID，如果传了这个参数则只返回该环境的相关信息
   */
  EnvId?: string
  /**
   * 指定Channels字段为可见渠道列表或不可见渠道列表
如只想获取渠道A的环境 就填写IsVisible= true,Channels = ["A"], 过滤渠道A拉取其他渠道环境时填写IsVisible= false,Channels = ["A"]
   */
  IsVisible?: boolean
  /**
   * 渠道列表，代表可见或不可见渠道由IsVisible参数指定
   */
  Channels?: Array<string>
  /**
   * 分页参数，单页限制个数
   */
  Limit?: number
  /**
   * 分页参数，偏移量
   */
  Offset?: number
}

/**
 * 删除tcb用户返回值
 */
export interface DeleteUsersResp {
  /**
   * 成功个数
   */
  SuccessCount?: number
  /**
   * 失败个数
   */
  FailedCount?: number
}

/**
 * DescribeEnvLimit请求参数结构体
 */
export type DescribeEnvLimitRequest = null

/**
 * DescribeCloudBaseBuildService返回参数结构体
 */
export interface DescribeCloudBaseBuildServiceResponse {
  /**
   * 上传url
   */
  UploadUrl?: string
  /**
   * 上传header
   */
  UploadHeaders?: Array<KVPair>
  /**
   * 包名
   */
  PackageName?: string
  /**
   * 包版本
   */
  PackageVersion?: string
  /**
   * 下载链接
   */
  DownloadUrl?: string
  /**
   * 下载Httpheader
   */
  DownloadHeaders?: Array<KVPair>
  /**
   * 下载链接是否过期
   */
  OutDate?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询HTTP访问服务输出路由信息
 */
export interface HTTPServiceRoute {
  /**
   * 路径
   */
  Path?: string
  /**
   * 路径重写
   */
  PathRewrite?: HTTPServicePathRewrite
  /**
   * 上游服务类型。SCF: 云函数，CBR: 云托管，STATIC_STORE: 静态托管，WEB_SCF: WEB云函数，LH: Lighthouse
   */
  UpstreamResourceType?: string
  /**
   * 上游服务名
   */
  UpstreamResourceName?: string
  /**
   * 是否开启安全域名
   */
  EnableSafeDomain?: boolean
  /**
   * 是否开启身份认证
   */
  EnableAuth?: boolean
  /**
   * 是否开启路径透传
   */
  EnablePathTransmission?: boolean
  /**
   * QPS限频策略
   */
  QPSPolicy?: HTTPServiceRouteQPSPolicy
  /**
   * 是否开启路由
   */
  Enable?: boolean
  /**
   * 路由创建时间
   */
  CreateTime?: string
  /**
   * 路由更新时间
   */
  UpdateTime?: string
}

/**
 * DescribeMySQLTaskStatus请求参数结构体
 */
export interface DescribeMySQLTaskStatusRequest {
  /**
   * 云开发环境ID
   */
  EnvId: string
  /**
   * 任务Id
   */
  TaskId?: string
  /**
   * 任务名
   */
  TaskName?: string
}

/**
 * 封禁配置
 */
export interface BanConfig {
  /**
   * ip白名单，支持ipv4、ipv6，支持CIDR
   */
  IpWhiteList?: Array<string>
  /**
   * ip黑名单，支持ipv4、ipv6，支持CIDR
   */
  IpBlackList?: Array<string>
  /**
   * 地域白名单（国家英文名）
   */
  CountryWhiteList?: Array<string>
  /**
   * 地域黑名单（国家英文名）
   */
  CountryBlackList?: Array<string>
}

/**
 * ModifyUser返回参数结构体
 */
export interface ModifyUserResponse {
  /**
   * 修改用户返回值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: ModifyUserResp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CLS日志结果
 */
export interface LogResObject {
  /**
   * 获取更多检索结果的游标
   */
  Context?: string
  /**
   * 搜索结果是否已经全部返回
   */
  ListOver?: boolean
  /**
   * 日志内容信息
   */
  Results?: Array<LogObject>
  /**
   * 日志聚合结果
   */
  AnalysisRecords?: Array<string>
}

/**
 * ModifyEnv返回参数结构体
 */
export interface ModifyEnvResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 索引的key值
 */
export interface Indexkey {
  /**
   * 键名
   */
  Name?: string
  /**
   * 方向：specify 1 for ascending or -1 for descending
   */
  Direction?: string
}

/**
 * 邮箱smtp配置
 */
export interface EmailSmtpConfig {
  /**
   * 邮件发送者的邮箱地址，即收件人看到的发件人地址。需为有效的邮箱格式，且须与 SMTP 服务器的授权账号一致，否则可能被邮件服务商拒绝发送。例如：abc@example.com
   */
  SenderAddress?: string
  /**
   * SMTP 邮件服务器的域名或 IP 地址，用于建立邮件发送连接。不同邮件服务商的 SMTP 地址不同，例如 QQ 邮箱为 smtp.qq.com，Gmail 为 smtp.gmail.com，请以实际服务商提供的地址为准。
   */
  ServerHost?: string
  /**
   * SMTP 邮件服务器的端口号，需与所选安全模式（SecurityMode）匹配。常用端口：465（SSL 加密）、587（STARTTLS 加密）、25（无加密，不推荐）。建议优先使用 465 或 587 以保障传输安全。
   */
  ServerPort?: number
  /**
   * SMTP 服务器的登录账号，通常为发件人的完整邮箱地址。部分邮件服务商支持使用独立的 SMTP 授权账号，请以实际服务商的要求为准。
   */
  AccountUsername?: string
  /**
   * SMTP 服务器的登录密码。注意：部分邮件服务商（如 QQ 邮箱、163 邮箱）不支持直接使用账号登录密码，需在邮箱设置中开启 SMTP 服务并生成专用的授权码，请以实际服务商的要求为准。
   */
  AccountPassword?: string
  /**
   * SMTP 连接的加密模式，用于保障邮件传输安全。可选值：AUTO（自动选择，优先使用安全连接）、SSL（全程 SSL/TLS 加密，通常配合端口 465 使用）、STARTSSL（通过 STARTTLS 命令升级为加密连接，通常配合端口 587 使用）、NO_SSL（不使用加密，仅建议在内网或测试环境中使用）。推荐使用 AUTO 或 SSL 以确保传输安全。
   */
  SecurityMode?: string
}

/**
 * DescribeHTTPServiceRoute请求参数结构体
 */
export interface DescribeHTTPServiceRouteRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 过滤条件。Key的含义参考对应字段，Value精确匹配。可过滤: Domain、Path、DomainType、UpstreamResourceType。可过滤的Values单条不超过100
   */
  Filters?: Array<Filter>
  /**
   * 分页偏移量。默认 0
   */
  Offset?: number
  /**
   * 分页限制。默认20，最大值1000
   */
  Limit?: number
}

/**
 * MongoDB连接器配置
 */
export interface MongoConnector {
  /**
   * 连接器实例ID
   */
  InstanceId?: string
  /**
   * MongoDB数据库名
   */
  DatabaseName?: string
}

/**
 * DescribeCurveData返回参数结构体
 */
export interface DescribeCurveDataResponse {
  /**
   * 开始时间, 会根据数据的统计周期进行取整
   */
  StartTime?: string
  /**
   * 结束时间, 会根据数据的统计周期进行取整
   */
  EndTime?: string
  /**
   * 指标名
   */
  MetricName?: string
  /**
   * 统计周期(单位秒), 当时间区间为1天内, 统计周期为5分钟; 当时间区间选择为1天以上, 15天以下, 统计周期为1小时; 当时间区间选择为15天以上, 180天以下, 统计周期为1天
   */
  Period?: number
  /**
   * 有效的监控数据, 每个有效监控数据的上报时间可以从时间数组中的对应位置上获取到
   */
  Values?: Array<number | bigint>
  /**
   * 各数据点的时间戳数组（Unix 时间戳，秒级），与  ⁠Values⁠  一一对应
   */
  Time?: Array<number | bigint>
  /**
   * 有效的监控数据, 每个有效监控数据的上报时间可以从时间数组中的对应位置上获取到
   */
  NewValues?: Array<number>
  /**
   *  聚合方式， ⁠"last"⁠  表示取时间段内最后一个值，“max”表示取时间段内最大值，“avg”表示取时间段内的平均值
   */
  Statistics?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBaasPackageList请求参数结构体
 */
export interface DescribeBaasPackageListRequest {
  /**
   * tcb产品套餐ID，不填拉取全量package信息。
   */
  PackageName?: string
  /**
   * 环境ID
   */
  EnvId?: string
  /**
   * 套餐归属方，填写后只返回对应的套餐 包含miniapp与qcloud两种 默认为miniapp
   */
  Source?: string
  /**
   * 套餐归属环境渠道
   */
  EnvChannel?: string
  /**
   * 拉取套餐用途：
1）new 新购
2）modify变配
3）renew续费
   */
  TargetAction?: string
  /**
   * 预留字段，同一商品会对应多个类型套餐，对指标有不同侧重。
计算型calculation
流量型flux
容量型capactiy
   */
  GroupName?: string
  /**
   * 类型分组过滤。默认为["default"]
   */
  PackageTypeList?: Array<string>
  /**
   * 付费渠道，与回包billTags中的计费参数相关，不填返回默认值。
   */
  PaymentChannel?: string
}

/**
 * cls日志信息
 */
export interface ClsInfo {
  /**
   * cls所属地域
   */
  ClsRegion: string
  /**
   * cls日志集ID
   */
  ClsLogsetId: string
  /**
   * cls日志主题ID
   */
  ClsTopicId: string
  /**
   * 创建时间
   */
  CreateTime: string
}

/**
 * 网关版本详情
 */
export interface GatewayVersionItem {
  /**
   * 版本名
   */
  VersionName: string
  /**
   * 版本流量权重
   */
  Weight: number
  /**
   * 创建状态
   */
  Status?: string
  /**
   * 创建时间
   */
  CreatedTime?: string
  /**
   * 更新时间
   */
  UpdatedTime?: string
  /**
   * 构建ID
   */
  BuildId?: number
  /**
   * 备注
   */
  Remark?: string
  /**
   * 优先级
   */
  Priority?: number
  /**
   * 是否默认版本
   */
  IsDefault?: boolean
  /**
   * 网关版本自定义配置
   */
  CustomConfig?: WxGatewayCustomConfig
}

/**
 * DescribeAuthDomains返回参数结构体
 */
export interface DescribeAuthDomainsResponse {
  /**
   * 安全域名列表
   */
  Domains?: Array<AuthDomain>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云主机实例
 */
export interface VmInstance {
  /**
   * 实例id
   */
  InstanceId?: string
  /**
   * 实例状态
   */
  Status?: string
  /**
   * 实例地域
   */
  Region?: string
}

/**
 * ModifyClsTopic请求参数结构体
 */
export interface ModifyClsTopicRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 日志生命周期，单位天，可取值范围1~3600，取值为3640时代表永久保存
   */
  Period?: number
}

/**
 * DescribeLoginConfig请求参数结构体
 */
export interface DescribeLoginConfigRequest {
  /**
   * 环境id
   */
  EnvId: string
}

/**
 * CreateHTTPServiceRoute请求参数结构体
 */
export interface CreateHTTPServiceRouteRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 域名路由信息
   */
  Domain: HTTPServiceDomainParam
}

/**
 * CreateHostingDomain请求参数结构体
 */
export interface CreateHostingDomainRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 域名
   */
  Domain: string
  /**
   * 证书ID
   */
  CertId: string
}

/**
 * tke集群信息
 */
export interface TkeClusterInfo {
  /**
   * 集群ID
   */
  ClusterId?: string
  /**
   * 集群的vpcId
   */
  VpcId?: string
  /**
   * 版本内网CLB所在子网Id
   */
  VersionClbSubnetId?: string
}

/**
 * ModifyLoginConfig请求参数结构体
 */
export interface ModifyLoginConfigRequest {
  /**
   * 环境 ID，用于指定需要修改登录策略的云开发环境。
   */
  EnvId: string
  /**
   * 手机号短信登录开关。设置为 true 开启手机号短信登录，允许用户使用手机号和短信验证码进行登录和注册；设置为 false 关闭手机号短信登录。
   */
  PhoneNumberLogin: boolean
  /**
   * 邮箱登录开关。设置为 true 开启邮箱登录，允许用户使用邮箱和密码进行登录和注册；设置为 false 关闭邮箱登录。
   */
  EmailLogin: boolean
  /**
   * 用户名密码登录开关。设置为 true 开启用户名密码登录，允许用户使用用户名和密码进行登录和注册；设置为 false 关闭用户名密码登录。
   */
  UserNameLogin: boolean
  /**
   * 匿名登录开关。设置为 true 开启匿名登录，允许用户无需注册即可以匿名身份访问应用；设置为 false 关闭匿名登录。
   */
  AnonymousLogin: boolean
  /**
   * 短信验证码发送配置，用于设置短信验证码的发送通道类型和日发送限额。不传则不修改当前配置。
   */
  SmsVerificationConfig?: VerificationConfig
  /**
   * MFA 多因子认证登录配置，用于设置多因子认证开关及验证方式（短信、邮箱、TOTP、强制绑定手机号）。不传则不修改当前配置。
   */
  MfaConfig?: MFALoginConfig
  /**
   * 密码更新策略配置，用于设置首次登录强制修改密码和定期强制修改密码策略。不传则不修改当前配置。
   */
  PwdUpdateStrategy?: PasswordUpdateLoginConfig
}

/**
 * ModifyDatabaseACL请求参数结构体
 */
export interface ModifyDatabaseACLRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 集合名称
   */
  CollectionName: string
  /**
   * 权限标签。包含以下取值：
<li> READONLY：所有用户可读，仅创建者和管理员可写</li>
<li> PRIVATE：仅创建者及管理员可读写</li>
<li> ADMINWRITE：所有用户可读，仅管理员可写</li>
<li> ADMINONLY：仅管理员可读写</li>
   */
  AclTag: string
}

/**
 * DescribeCloudBaseRunServerVersion返回参数结构体
 */
export interface DescribeCloudBaseRunServerVersionResponse {
  /**
   * 版本名称
   */
  VersionName?: string
  /**
   * 备注
   */
  Remark?: string
  /**
   * Dockerfile的路径
   */
  DockerfilePath?: string
  /**
   * DockerBuild的目录
   */
  BuildDir?: string
  /**
   * 请使用CPUSize
   */
  Cpu?: number
  /**
   * 请使用MemSize
   */
  Mem?: number
  /**
   * 副本最小值
   */
  MinNum?: number
  /**
   * 副本最大值
   */
  MaxNum?: number
  /**
   * 策略类型
   */
  PolicyType?: string
  /**
   * 策略阈值
   */
  PolicyThreshold?: number
  /**
   * 环境变量
   */
  EnvParams?: string
  /**
   * 创建时间
   */
  CreatedTime?: string
  /**
   * 更新时间
   */
  UpdatedTime?: string
  /**
   * 版本的IP
   */
  VersionIP?: string
  /**
   * 版本的端口号
   */
  VersionPort?: number
  /**
   * 版本状态
   */
  Status?: string
  /**
   * 代码包的名字
   */
  PackageName?: string
  /**
   * 代码版本的名字
   */
  PackageVersion?: string
  /**
   * 枚举（package/repository/image)
   */
  UploadType?: string
  /**
   * Repo的类型(gitlab/github/coding)
   */
  RepoType?: string
  /**
   * 地址
   */
  Repo?: string
  /**
   * 分支
   */
  Branch?: string
  /**
   * 服务名字
   */
  ServerName?: string
  /**
   * 是否对于外网开放
   */
  IsPublic?: boolean
  /**
   * vpc id
   */
  VpcId?: string
  /**
   * 子网实例id
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetIds?: Array<string>
  /**
   * 日志采集路径
   */
  CustomLogs?: string
  /**
   * 监听端口
   */
  ContainerPort?: number
  /**
   * 延迟多长时间开始健康检查（单位s）
   */
  InitialDelaySeconds?: number
  /**
   * 镜像地址
   */
  ImageUrl?: string
  /**
   * CPU 大小
   */
  CpuSize?: number
  /**
   * MEM 大小
   */
  MemSize?: number
  /**
   * 是否有Dockerfile：0-default has, 1-has, 2-has not
   */
  HasDockerfile?: number
  /**
   * 基础镜像
   */
  BaseImage?: string
  /**
   * 容器启动入口命令
   */
  EntryPoint?: string
  /**
   * 仓库语言
   */
  RepoLanguage?: string
  /**
   * 自动扩缩容策略组
注意：此字段可能返回 null，表示取不到有效值。
   */
  PolicyDetail?: Array<HpaPolicy>
  /**
   * Tke集群信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  TkeClusterInfo?: TkeClusterInfo
  /**
   * 版本工作负载类型；deployment/deamonset
   */
  TkeWorkloadType?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeGatewayVersions返回参数结构体
 */
export interface DescribeGatewayVersionsResponse {
  /**
   * 网关id
   */
  GatewayId?: string
  /**
   * 版本总数
   */
  TotalCount?: number
  /**
   * 版本信息详情
   */
  GatewayVersionItems?: Array<GatewayVersionItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateEnvResource请求参数结构体
 */
export interface CreateEnvResourceRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 资源类型。代表本次开通哪些资源。 可取值以及含义： - log : 表示日志资源，当前仅支持 log（日志资源类型），后续版本可能扩展，该数组不能为空，且每个元素必须为合法的资源类型值
   */
  Resources: Array<string>
}

/**
 * DescribeVmInstances请求参数结构体
 */
export interface DescribeVmInstancesRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 服务器类型： LightHouse = 轻量云服务器 CVM = 云服务器
   */
  Type: string
}

/**
 * DescribeHostingDomainTask请求参数结构体
 */
export interface DescribeHostingDomainTaskRequest {
  /**
   * 环境ID
   */
  EnvId: string
}

/**
 * 邮箱登录配置
 */
export interface EmailProviderConfig {
  /**
   * smtp配置
   */
  SmtpConfig?: EmailSmtpConfig
  /**
   * 可选：TRUE，FALSE，如果On为TRUE，则表示采用默认代发。
   */
  On?: string
}

/**
 * 查询用户返回结果
 */
export interface DescribeUserListResp {
  /**
   * 用户总数
   */
  Total?: number
  /**
   * 用户列表
   */
  UserList?: Array<User>
}

/**
 * 云开发新套餐详情
 */
export interface BaasPackageInfo {
  /**
   * DAU产品套餐ID
   */
  PackageName?: string
  /**
   * DAU套餐中文名称
   */
  PackageTitle?: string
  /**
   * 套餐分组
   */
  GroupName?: string
  /**
   * 套餐分组中文名
   */
  GroupTitle?: string
  /**
   * json格式化计费标签，例如：
{"pid":2, "cids":{"create": 2, "renew": 2, "modify": 2}, "productCode":"p_tcb_mp", "subProductCode":"sp_tcb_mp_cloudbase_dau"}
   */
  BillTags?: string
  /**
   * json格式化用户资源限制，例如：
{"Qps":1000,"InvokeNum":{"TimeUnit":"m", "Unit":"万次", "MaxSize": 100},"Capacity":{"TimeUnit":"m", "Unit":"GB", "MaxSize": 100}, "Cdn":{"Flux":{"TimeUnit":"m", "Unit":"GB", "MaxSize": 100}, "BackFlux":{"TimeUnit":"m", "Unit":"GB", "MaxSize": 100}},"Scf":{"Concurrency":1000,"OutFlux":{"TimeUnit":"m", "Unit":"GB", "MaxSize": 100},"MemoryUse":{"TimeUnit":"m", "Unit":"WGBS", "MaxSize": 100000}}}
   */
  ResourceLimit?: string
  /**
   * json格式化高级限制，例如：
{"CMSEnable":false,"ProvisionedConcurrencyMem":512000, "PictureProcessing":false, "SecurityAudit":false, "RealTimePush":false, "TemplateMessageBatchPush":false, "Payment":false}
   */
  AdvanceLimit?: string
  /**
   * 套餐描述
   */
  PackageDescription?: string
  /**
   * 是否对外展示
   */
  IsExternal?: boolean
}

/**
 * ModifyHTTPServiceRoute请求参数结构体
 */
export interface ModifyHTTPServiceRouteRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 域名路由信息
   */
  Domain: HTTPServiceDomainParam
}

/**
 * DescribeQuotaData返回参数结构体
 */
export interface DescribeQuotaDataResponse {
  /**
   * 指标名
   */
  MetricName?: string
  /**
   * 指标的值
   */
  Value?: number
  /**
   * 指标的附加值信息
   */
  SubValue?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateBillDeal返回参数结构体
 */
export interface CreateBillDealResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DestroyMySQL返回参数结构体
 */
export interface DestroyMySQLResponse {
  /**
   * 销毁结果
   */
  Data?: DestroyMySQLResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 开通Mysql 结果
 */
export interface CreateMySQLResult {
  /**
   * 任务ID
   */
  TaskId?: string
}

/**
 * DescribeHTTPServiceRoute返回参数结构体
 */
export interface DescribeHTTPServiceRouteResponse {
  /**
   * 域名路由信息列表
   */
  Domains?: Array<HTTPServiceDomain>
  /**
   * 自定义接入的源站域名（HTTPService接入层域名）
   */
  OriginDomain?: string
  /**
   * 域名总数，分页查询使用总数判断是否已经拉取到所有数据
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 身份认证源协议连接配置。包含 OAuth 2.0 / OIDC 协议端点（授权端点、令牌端点、用户信息端点、JWKS 端点等）、客户端凭证（ClientId、ClientSecret）、SAML 元数据、请求与响应参数的字段映射等配置信息。OIDC 类型的认证源字段定义参考 https://openid.net/specs/openid-connect-discovery-1_0.html 规范。
 */
export interface ProviderConfig {
  /**
   * 身份提供方的唯一标识符（Issuer URL），用于验证 ID Token 中的 iss 字段。仅当 ProviderType 为 OIDC 时需要填写，值通常为第三方 OIDC 服务的根地址，例如：https://accounts.google.com。填写后平台将自动通过 /.well-known/openid-configuration 发现并填充 AuthorizationEndpoint、TokenEndpoint、UserinfoEndpoint、JwksUri 等端点地址。详情参考 OpenID Connect Discovery 标准。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Issuer?: string
  /**
   * 第三方身份提供方的 JSON Web Key Set 地址，用于获取公钥以验证 ID Token 签名。仅当 ProviderType 为 OIDC 时需要填写。若已填写 Issuer，该字段将通过 OpenID Connect Discovery 自动获取，无需手动填写。详情参考 OpenID Connect Discovery 标准。
注意：此字段可能返回 null，表示取不到有效值。
   */
  JwksUri?: string
  /**
   * 在第三方身份提供方注册的应用客户端 ID，用于标识当前接入应用。当 ProviderType 为 OIDC 或 OAUTH 时必须填写，可在对应平台的开发者控制台中获取。详情参考 OAuth 2.0 标准。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClientId?: string
  /**
   * 在第三方身份提供方注册的应用客户端密钥，与 ClientId 配合使用，用于在 Token 端点进行身份验证。当 ProviderType 为 OIDC 或 OAUTH 时必须填写，请妥善保管，避免泄露。详情参考 OAuth 2.0 标准。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClientSecret?: string
  /**
   * OAuth 授权完成后第三方平台回调的地址，需与在第三方平台注册的回调地址完全一致，否则授权将失败。当 ProviderType 为 OIDC 或 OAUTH 时必须填写，并需在对应平台的开发者控制台中配置该地址为合法回调地址。详情参考 OAuth 2.0 标准。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RedirectUri?: string
  /**
   * 向第三方身份提供方申请的权限范围，多个 scope 之间用空格分隔。当 ProviderType 为 OIDC 或 OAUTH 时必须填写，OIDC 场景下通常至少包含 openid，如需获取用户邮箱或手机号可追加 email、phone 等。若已填写 Issuer 且未指定 Scope，将自动使用 OpenID Connect Discovery 返回的 scopes_supported。详情参考 OAuth 2.0 标准。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Scope?: string
  /**
   * 第三方身份提供方的授权端点地址，用于发起 OAuth/OIDC 授权请求，引导用户跳转至第三方登录页面。当 ProviderType 为 OIDC 或 OAUTH 时必须填写。若已填写 Issuer，该字段将通过 OpenID Connect Discovery 自动获取，无需手动填写。详情参考 OAuth 2.0 / OIDC 标准。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuthorizationEndpoint?: string
  /**
   * 第三方身份提供方的 Token 端点地址，用于通过授权码（code）换取 Access Token 和 ID Token。当 ProviderType 为 OIDC 或 OAUTH 时必须填写。若已填写 Issuer，该字段将通过 OpenID Connect Discovery 自动获取，无需手动填写。详情参考 OAuth 2.0 / OIDC 标准。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TokenEndpoint?: string
  /**
   * 第三方身份提供方的用户信息端点地址，用于通过 Access Token 获取用户的基本信息（如昵称、头像、邮箱等）。当 ProviderType 为 OIDC 或 OAUTH 且需要获取用户详细信息时填写。若已填写 Issuer，该字段将通过 OpenID Connect Discovery 自动获取，无需手动填写。详情参考 OIDC 标准。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserinfoEndpoint?: string
  /**
   * OAuth/OIDC 授权请求的响应类型，决定授权端点返回的内容。可选值：code（授权码模式，推荐）、token（隐式模式，直接返回 Access Token）、id_token（直接返回 ID Token）。当 ProviderType 为 OIDC 时默认使用 id_token，其他类型默认使用 code。当 ProviderType 为 OIDC 或 OAUTH 时可选填写。详情参考 OAuth 2.0 / OIDC 标准。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResponseType?: string
  /**
   * 第三方身份提供方的单点退出端点地址。配置后，用户退出当前应用时将被跳转至该地址，使第三方 IDP 的登录态也一并失效，实现单点退出（SLO）。适用于 OIDC、OAUTH、SAML 等所有支持单点退出的身份源类型。不填则退出时仅清除本平台登录态。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SignoutEndpoint?: string
  /**
   * Token 端点的客户端身份验证方式，决定请求 Token 时如何传递 ClientId 和 ClientSecret。可选值：CLIENT_SECRET_POST（将凭证放在请求 Body 中传递）、CLIENT_SECRET_BASIC（将凭证通过 HTTP Basic Auth Header 传递）。当 ProviderType 为 OIDC 或 OAUTH 时可选填写，默认使用 CLIENT_SECRET_POST。详情参考 OIDC 标准。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TokenEndpointAuthMethod?: string
  /**
   * SAML 身份提供方的 Metadata XML 内容，包含 IDP 的实体 ID、SSO 端点地址、签名证书等关键信息，平台将据此完成 SAML 协议的对接配置。仅当 ProviderType 为 SAML 时可填写，通常可从第三方 IDP 的管理控制台中下载获取。详情参考 SAML 2.0 标准。
   */
  SamlMetadata?: string
  /**
   * 请求参数映射配置，用于处理非标准 OAuth 协议的参数转换。默认情况下平台严格遵循 OAuth 2.0 标准进行参数传递，若对接的第三方平台（如微信、企业微信等）使用了非标准的参数名称或传参方式，可通过该字段配置自定义的参数映射规则，以确保请求参数与第三方平台的要求一致。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RequestParametersMap?: ProviderRequestParametersMap
  /**
   * 响应参数映射配置，用于处理非标准 OAuth 协议的响应参数转换。默认情况下平台严格遵循 OAuth 2.0 标准解析响应参数，若对接的第三方平台（如微信、企业微信等）返回了非标准的字段名称或数据结构，可通过该字段配置自定义的响应参数映射规则，将第三方返回的字段映射为平台标准字段。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResponseParametersMap?: ProviderResponseParametersMap
}

/**
 * ModifySafeRule请求参数结构体
 */
export interface ModifySafeRuleRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 集合名称
   */
  CollectionName: string
  /**
   * 权限标签。包含以下取值：
<li> READONLY：所有用户可读，仅创建者和管理员可写</li>
<li> PRIVATE：仅创建者及管理员可读写</li>
<li> ADMINWRITE：所有用户可读，仅管理员可写</li>
<li> ADMINONLY：仅管理员可读写</li>
<li> CUSTOM：自定义安全规则</li>
   */
  AclTag: string
  /**
   * 安全规则内容。
当 AclTag=CUSTOM 时，此参数必填。
详情参考：[文档型数据库安全规则](https://docs.cloudbase.net/database/security-rules)
   */
  Rule?: string
}

/**
 * 键值对
 */
export interface KVPair {
  /**
   * 键
   */
  Key: string
  /**
   * 值
   */
  Value: string
}

/**
 * 函数的信息
 */
export interface FunctionInfo {
  /**
   * 命名空间
   */
  Namespace?: string
  /**
   * 所属地域。
当前支持ap-shanghai
   */
  Region?: string
}

/**
 * CreateEnv返回参数结构体
 */
export interface CreateEnvResponse {
  /**
   * 自动生成的环境ID
   */
  EnvId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RunCommands返回参数结构体
 */
export interface RunCommandsResponse {
  /**
   * 返回结果，返回结果为一个json字符串
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 静态托管资源信息
 */
export interface StaticStoreInfo {
  /**
   * 环境ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnvId?: string
  /**
   * 静态域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  CdnDomain?: string
  /**
   * COS桶
注意：此字段可能返回 null，表示取不到有效值。
   */
  Bucket?: string
  /**
   * cos区域
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  Regoin?: string
  /**
   * 资源状态:init(初始化)/process(处理中)/online(上线)/destroying(销毁中)/offline(下线))
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
}

/**
 * DescribeApiKeyList返回参数结构体
 */
export interface DescribeApiKeyListResponse {
  /**
   * API Key列表
   */
  Data?: Array<ApiKeyToken>
  /**
   * 总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RunSql返回参数结构体
 */
export interface RunSqlResponse {
  /**
   * 查询结果行，每个元素为 JSON 字符串
   */
  Items?: Array<string>
  /**
   * 列元数据信息，每个元素为 JSON 字符串，字段包含 `name/databaseType/nullable/length/precision/scale`
   */
  Infos?: Array<string>
  /**
   * 受影响的行数（INSERT/UPDATE/DELETE 等语句）
   */
  RowsAffected?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 三方认证入参映射。如果您的对接方不标准，则可以使用这个参数。默认情况下，该参数可以为空。比如：github,google,apple 接入，这些参数为空，但是国内的腾讯，新浪等则需要配置该参数。原因主要是：腾讯等公司在实现oauth时，未能完全遵循oauth标准。
 */
export interface ProviderRequestParametersMap {
  /**
   * OAuth 标准协议中的 client_id。不同第三方平台的字段名称可能不同，例如微信平台对应 appid、新浪微博对应 app_id。
   */
  ClientId?: string
  /**
   * OAuth 标准协议中的 client_secret，用于身份认证源的密钥鉴权。请妥善保管，避免泄露。
   */
  ClientSecret?: string
  /**
   * OAuth 标准协议中的 redirect_uri，即授权回调地址。用户完成第三方认证后将重定向至该地址。
   */
  RedirectUri?: string
  /**
   * 身份源注册用户时自动绑定的角色 ID。配置后，通过该身份源注册的新用户将自动关联指定角色。
   */
  RegisterUserRoleId?: string
  /**
   * 身份源注册用户时是否自动授予许可证。取值范围：
TRUE：自动授权许可证
FALSE：不自动授权（默认值）
   */
  RegisterUserAutoLicense?: string
  /**
   * OAuth 获取 Token 时认证信息的请求位置。取值范围：
URL：将认证信息放在请求 URL 参数中
Headers：将认证信息放在请求 Header 中
Body：将认证信息放在请求 Body 中
   */
  AuthPosition?: string
  /**
   * OAuth 授权模式匹配的参数字段名。用于指定获取 Token 请求中 grant_type 参数对应的字段名称。
   */
  GrantType?: string
  /**
   * OAuth 授权模式类型。用于指定 grant_type 的值，例如 client_credentials 表示客户端凭证模式。
   */
  ClientCredentials?: string
  /**
   * OAuth 返回中 access_token 的映射字段名。若第三方平台返回的 Token 字段名不是标准的 access_token，可通过此字段指定实际字段名。
   */
  AccessToken?: string
  /**
   * OAuth 返回中 Token 有效期的映射字段名。若第三方平台返回的有效期字段名不是标准的 expires_in，可通过此字段指定实际字段名。
   */
  ExpiresIn?: string
  /**
   * 身份源注册用户时的用户类型。取值范围：
externalUser：外部用户
internalUser：内部用户
默认值为 externalUser。
   */
  RegisterUserType?: string
}

/**
 * CreateUser返回参数结构体
 */
export interface CreateUserResponse {
  /**
   * 结果返回
   */
  Data?: CreateUserResp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEnvAccountCircle请求参数结构体
 */
export interface DescribeEnvAccountCircleRequest {
  /**
   * 环境ID
   */
  EnvId: string
}

/**
 * CreateBillDeal请求参数结构体
 */
export interface CreateBillDealRequest {
  /**
   * 当前下单的操作类型，可取[purchase,renew,modify]三种值，分别代表新购，续费，变配。
   */
  DealType: string
  /**
   * 购买的产品类型，可取[tcb-baas,tcb-promotion,tcb-package], 分别代表baas套餐、大促包、资源包
   */
  ProductType: string
  /**
   * 目标下单产品/套餐Id。
对于云开发环境套餐，可通过 DescribeBaasPackageList 接口获取，对应其出参的PackageName
   */
  PackageId: string
  /**
   * 默认只下单不支付，为ture则下单并支付。
如果需要下单并支付，请确保账户下有足够的余额，否则会导致下单失败。
   */
  CreateAndPay?: boolean
  /**
   * 购买时长，与TimeUnit字段搭配使用。
   */
  TimeSpan?: number
  /**
   * 购买时长单位,按各产品规则可选d(天),m(月),y(年),p(一次性)。
对于 云开发环境的 新购和续费，目前仅支持 按月购买（即 TimeUnit=m）。
   */
  TimeUnit?: string
  /**
   * 资源唯一标识。
在云开发环境 续费和变配 场景下必传，取值为环境ID。
   */
  ResourceId?: string
  /**
   * 来源可选[qcloud,miniapp]，默认qcloud。
miniapp表示微信云开发，主要适用于[小程序云开发](https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloud/billing/price.html)。

   */
  Source?: string
  /**
   * 环境别名，用于新购云开发环境时，给云开发环境起别名。
仅当 新购云开发环境（DealType=purchase 并且 ProductType=tcb-baas ）时有效。

### 格式要求
- 可选字符： 小写字母(a~z)、数字、减号(-)
- 不能以 减号(-) 开头或结尾
- 不能有连个连续的 减号(-)
- 长度不超过20位
   */
  Alias?: string
  /**
   * 环境id，当购买资源包和大促包时（ProductType取值为tcb-promotion 或 tcb-package）必传，表示资源包在哪个环境下生效。
   */
  EnvId?: string
  /**
   * 开启超限按量。
开启后，当 套餐内的资源点 和 资源包 都用尽后，会自动按量计费。
详见 [计费说明](https://cloud.tencent.com/document/product/876/127357)。
   */
  EnableExcess?: boolean
  /**
   * 变配目标套餐id，对于云开发环境变配场景下必传。
对于云开发环境套餐，可通过 DescribeBaasPackageList 接口获取，对应其出参的PackageName
   */
  ModifyPackageId?: string
  /**
   * jsonstr附加信息
   */
  Extension?: string
  /**
   * 是否自动选择代金券支付。
   */
  AutoVoucher?: boolean
  /**
   * 资源类型。
代表新购环境（DealType=purchase 并且 ProductType=tcb-baas ）时需要发货哪些资源。
可取值：flexdb, cos, cdn, scf

   */
  ResourceTypes?: Array<string>
  /**
   * 环境标签。
 代表新购环境（DealType=purchase 并且 ProductType=tcb-baas ）时需要打的标签。

   */
  EnvTags?: Array<Tag>
}

/**
 * RenewEnv返回参数结构体
 */
export interface RenewEnvResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMySQLClusterDetail请求参数结构体
 */
export interface DescribeMySQLClusterDetailRequest {
  /**
   * 云开发环境ID
   */
  EnvId: string
}

/**
 * CreateStaticStore请求参数结构体
 */
export interface CreateStaticStoreRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 是否启用统一域名
   */
  EnableUnion?: boolean
  /**
   * 外部存储源。
   */
  ExternalStorage?: ExternalStorage
}

/**
 * DescribeBillingInfo返回参数结构体
 */
export interface DescribeBillingInfoResponse {
  /**
   * 环境计费信息列表
   */
  EnvBillingInfoList?: Array<EnvBillingInfoItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAuthDomain返回参数结构体
 */
export interface CreateAuthDomainResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteApiKey返回参数结构体
 */
export interface DeleteApiKeyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DestroyStaticStore请求参数结构体
 */
export interface DestroyStaticStoreRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * cdn域名
   */
  CdnDomain?: string
}

/**
 * ModifyClient返回参数结构体
 */
export interface ModifyClientResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EditAuthConfig返回参数结构体
 */
export interface EditAuthConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云服务器登录方式
 */
export interface VMLoginConfiguration {
  /**
   * 登录方式。扫码登录时指定为 SCAN_LOGIN
   */
  LoginType?: string
  /**
   * 是否自动生成密码
   */
  AutoGeneratePassword?: string
  /**
   * 指定密码登录
   */
  Password?: string
  /**
   * 绑定密钥ID
   */
  KeyIds?: Array<string>
}

/**
 * RenewEnv请求参数结构体
 */
export interface RenewEnvRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 续费周期，单位：月。
默认值为 1，即续费1个月。
   */
  Period?: number
  /**
   * 是否自动选择代金券支付。
   */
  AutoVoucher?: boolean
}

/**
 * DescribeClient返回参数结构体
 */
export interface DescribeClientResponse {
  /**
   * 客户端的唯一标识符（Client ID），在 OAuth/OIDC 授权流程中作为 client_id 参数使用。创建时仅可传入环境 ID 或留空：传入环境 ID 时将直接使用该值作为客户端 ID（一个环境仅允许一个）；留空时由系统自动生成与环境 ID 关联的唯一 ID。创建后不可修改。
   */
  Id?: string
  /**
   * 客户端的创建时间，格式遵循 ISO 8601 标准（如：2024-01-01T00:00:00Z），由系统自动生成，不可手动修改。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedAt?: string
  /**
   * 客户端信息的最后修改时间，格式遵循 ISO 8601 标准（如：2024-01-01T00:00:00Z），每次更新应用配置时由系统自动更新。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedAt?: string
  /**
   * Refresh Token 的有效期，单位为秒。超过该时间后 Refresh Token 将失效，用户需重新登录。取值范围：最小 1800 秒（30 分钟），最大 2592000 秒（30 天），超出上限将自动截断为 30 天。若不设置则默认为 30 天。当该值小于等于 7200 秒时，系统会自动将 AccessTokenExpiresIn 调整为 RefreshTokenExpiresIn - 660 秒。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RefreshTokenExpiresIn?: number
  /**
   * Access Token 的有效期，单位为秒。超过该时间后 Access Token 将失效，需通过 Refresh Token 换取新的 Access Token。若不设置则默认为 7200 秒（2 小时）。设置值小于 1800 秒时将被忽略，使用系统默认值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccessTokenExpiresIn?: number
  /**
   * 单个用户在该客户端下允许同时登录的最大会话数量。取值范围：-1 至 50。-1 表示不限制设备数量；0 或不填默认按 User-Agent 区分设备（相同 User-Agent 共享一个会话，不同 User-Agent 各独立一个会话）；1 表示单设备登录，新登录将踢出旧会话；大于 1 时按真实设备 ID 限制，超出限制后最早登录的会话将被自动踢出。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxDevice?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteHTTPServiceRoute返回参数结构体
 */
export interface DeleteHTTPServiceRouteResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TDSQL-C网络信息类型
 */
export interface MySQLNetDetail {
  /**
   * 内网地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrivateNetAddress?: string
  /**
   * 外网地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  PubNetAddress?: string
  /**
   * 网络信息（VPCID/SubnetID）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Net?: string
  /**
   * 是否开通公网
   */
  PubNetAccessEnabled?: boolean
  /**
   * vpc id
   */
  VpcId?: string
  /**
   * vpc name
   */
  VpcName?: string
  /**
   * 子网ID
   */
  SubnetId?: string
  /**
   * 子网名
   */
  SubnetName?: string
}

/**
 * 本类型用于接口中描述待创建索引结构
 */
export interface MgoKeySchema {
  /**
   * 索引字段
   */
  MgoIndexKeys?: Array<MgoIndexKeys>
  /**
   * 是否唯一索引
   */
  MgoIsUnique?: boolean
  /**
   * 是否稀疏索引
   */
  MgoIsSparse?: boolean
}

/**
 * UpdateTable返回参数结构体
 */
export interface UpdateTableResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyEnvPlan返回参数结构体
 */
export interface ModifyEnvPlanResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RunSql请求参数结构体
 */
export interface RunSqlRequest {
  /**
   * 要执行的SQL语句
   */
  Sql: string
  /**
   * 云开发环境ID
   */
  EnvId: string
  /**
   * 数据库连接器实例信息
   */
  DbInstance?: DbInstance
  /**
   * 是否只读；当 `true` 时仅允许以 `SELECT/WITH/SHOW/DESCRIBE/DESC/EXPLAIN` 开头的 SQL
   */
  ReadOnly?: boolean
}

/**
 * DescribeCreateMySQLResult请求参数结构体
 */
export interface DescribeCreateMySQLResultRequest {
  /**
   * 云开发环境ID
   */
  EnvId: string
  /**
   * OpenMysql 返回任务 Id
   */
  TaskId?: string
}

/**
 * DescribeBillingInfo请求参数结构体
 */
export interface DescribeBillingInfoRequest {
  /**
   * 环境ID
   */
  EnvId?: string
}

/**
 * 扩缩容策略
 */
export interface HpaPolicy {
  /**
   * 策略类型
   */
  PolicyType?: string
  /**
   * 策略阈值
   */
  PolicyThreshold?: number
}

/**
 * 云开发路由限频策略
 */
export interface HTTPServiceRouteQPSPolicy {
  /**
   * QPS值，每秒请求次数
   */
  QPSTotal?: number
  /**
   * 客户端限频配置
   */
  QPSPerClient?: HTTPServiceQPSPerClient
}

/**
 * CLS日志单条信息
 */
export interface LogObject {
  /**
   * 日志属于的 topic ID
   */
  TopicId?: string
  /**
   * 日志主题的名字
   */
  TopicName?: string
  /**
   * 日志时间
   */
  Timestamp?: string
  /**
   * 日志内容
   */
  Content?: string
  /**
   * 采集路径
   */
  FileName?: string
  /**
   * 日志来源设备
   */
  Source?: string
}

/**
 * DestroyStaticStore返回参数结构体
 */
export interface DestroyStaticStoreResponse {
  /**
   * 条件任务结果(succ/fail)
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteVmInstance请求参数结构体
 */
export interface DeleteVmInstanceRequest {
  /**
   * 服务器实例id
   */
  InstanceId: string
  /**
   * 环境id
   */
  EnvId: string
}

/**
 * DescribeUserList返回参数结构体
 */
export interface DescribeUserListResponse {
  /**
   * 结果返回
   */
  Data?: DescribeUserListResp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTable请求参数结构体
 */
export interface CreateTableRequest {
  /**
   * 数据表名；长度不超过96个字符，可以为英文字母、数字、下划线(_)和短横线(-)的组合，且不能以下划线开头
   */
  TableName: string
  /**
   * FlexDB实例ID，如：tnt-nl7hjzasw
   */
  Tag?: string
  /**
   * FlexDB数据库权限信息
   */
  PermissionInfo?: PermissionInfo
  /**
   * 云开发环境ID
   */
  EnvId?: string
  /**
   * MongoDB连接器配置
   */
  MongoConnector?: MongoConnector
}

/**
 * CreateMySQL返回参数结构体
 */
export interface CreateMySQLResponse {
  /**
   * 开通结果
   */
  Data?: CreateMySQLResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAuthDomain返回参数结构体
 */
export interface DeleteAuthDomainResponse {
  /**
   * 删除的域名个数
   */
  Deleted?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteApiKey请求参数结构体
 */
export interface DeleteApiKeyRequest {
  /**
   * 环境 ID，用于标识该密钥归属的云开发环境，不同环境之间的数据相互隔离
   */
  EnvId: string
  /**
   * 密钥的唯一标识符，用于精确定位指定的 API 密钥。可通过查询密钥列表接口获取
   */
  KeyId: string
}

/**
 * ModifyProvider请求参数结构体
 */
export interface ModifyProviderRequest {
  /**
   * 云开发环境 ID，用于唯一标识当前操作所属的云开发环境。
   */
  EnvId: string
  /**
   * 身份源的唯一标识符，用于指定需要修改的目标身份源。格式要求：2~32 位，仅支持小写英文字母和数字，不可包含空格或特殊字符。例如：github、google。
   */
  Id: string
  /**
   * 身份源的显示名称，支持国际化多语言配置。用户在登录页面看到的身份源名称将使用该字段，建议根据实际业务场景填写易于识别的名称，例如：GitHub、Google 等。
   */
  Name?: LocalizedMessage
  /**
   * 身份源图标的访问地址，将展示在登录页的身份源按钮上。建议使用 64×64 像素的 SVG 格式图片以保证清晰度，支持 HTTP/HTTPS 公网可访问的图片链接。
   */
  Picture?: string
  /**
   * 身份源对应的官方主页地址。该信息将在用户查看自己的第三方账号绑定列表时展示，帮助用户识别已绑定的身份源来源。例如 GitHub 身份源可填写：https://github.com。
   */
  Homepage?: string
  /**
   * 身份源协议类型，决定该身份源使用何种认证协议与第三方平台对接。可选值：
OAUTH：标准 OAuth 2.0 协议
OIDC：OpenID Connect 协议
SAML：SAML 2.0 协议
WX_MICRO_APP：微信小程序登录
WX_QRCODE_MICRO_APP：微信小程序扫码登录
WX_CLOUDBASE_MICRO_APP：云开发托管小程序登录
WX_MP：微信公众号网页授权登录
WX_OPEN：微信开放平台扫码登录
WX_WORK_INTERNAL：企业微信自建应用登录
WX_WORK_AGENT：企业微信代开发应用登录
WX_WORK_THIRD_PARTY：企业微信第三方应用登录
WX_WORK_THIRD_PARTY_ASSOCIATION：企业微信第三方应用关联登录
CUSTOM：自定义登录
EMAIL：邮箱登录
   */
  ProviderType?: string
  /**
   * 身份认证源协议连接配置，包含与第三方平台对接所需的核心参数，如 ClientId、ClientSecret、授权端点、Token 端点、回调地址、Scope、SAML Metadata、请求和响应参数映射等。不同 ProviderType 对应不同的配置项要求。注意：CUSTOM 和 EMAIL 类型的身份源，其存储后端类型（StorageDb）不可修改。
   */
  Config?: ProviderConfig
  /**
   * 是否开启透传登录模式。可选值：TRUE（开启）、FALSE（关闭，默认值）。开启后，平台不会持久化存储用户数据，仅将第三方身份源返回的用户信息透传给业务方，适用于不希望平台留存用户数据的场景。注意：开启透传模式时，ReuseUserId 将被强制设为 TRUE，AutoSignUpWithProviderUser 将被强制设为 FALSE。
   */
  TransparentMode?: string
  /**
   * 身份源的启用状态。可选值：TRUE（启用，用户可通过该身份源登录）、FALSE（禁用，登录入口将被隐藏，已有绑定关系不受影响）、UNSPECIFIED（默认为 TRUE）。
   */
  On?: string
  /**
   * 身份源的详细描述信息，支持国际化多语言配置。可用于向用户说明该身份源的用途或使用场景，例如：谷歌授权登录。
   */
  Description?: LocalizedMessage
  /**
   * 是否直接复用第三方身份源的用户 ID 作为平台用户 ID。可选值：TRUE（开启，返回的用户 ID 将直接使用第三方身份源的用户 ID，适用于已有用户体系迁移场景）、FALSE（关闭，由平台生成独立用户 ID）、UNSPECIFIED（默认为 FALSE，但当 TransparentMode 为 TRUE 时将被强制设为 TRUE）。注意：开启后需确保第三方用户 ID 的全局唯一性，避免 ID 冲突。
   */
  ReuseUserId?: string
  /**
   * 邮箱身份源的专项配置，包含邮件服务商、发件人地址、SMTP 配置等参数，用于支持通过邮箱验证码或邮箱密码方式进行身份认证。仅当身份源 ID 为 email 时有效。若该身份源不存在，系统将自动创建一个默认关闭的邮箱身份源。
   */
  EmailConfig?: EmailProviderConfig
  /**
   * 是否开启邮箱自动关联登录。可选值：TRUE（开启）、FALSE（关闭）、UNSPECIFIED（默认为 FALSE）。开启后，若第三方身份源返回的邮箱与系统中已有用户的邮箱一致，则自动将该第三方账号与已有用户关联并完成登录，无需用户手动绑定。
   */
  AutoSignInWhenEmailMatch?: string
  /**
   * 是否开启手机号自动关联登录。可选值：TRUE（开启）、FALSE（关闭）、UNSPECIFIED（默认行为等同 TRUE）。开启后，若第三方身份源返回的手机号与系统中已有用户的手机号一致，则自动将该第三方账号与已有用户关联并完成登录，无需用户手动绑定。注意：该字段默认行为（UNSPECIFIED）与 AutoSignInWhenEmailMatch 不同，手机号匹配在未显式关闭时默认生效。
   */
  AutoSignInWhenPhoneNumberMatch?: string
}

/**
 * DeleteTable请求参数结构体
 */
export interface DeleteTableRequest {
  /**
   * 待删除的表名
   */
  TableName: string
  /**
   * FlexDB实例ID
   */
  Tag?: string
  /**
   * 云开发环境ID
   */
  EnvId?: string
  /**
   * MongoDB连接器配置
   */
  MongoConnector?: MongoConnector
}

/**
 * 环境信息
 */
export interface EnvInfo {
  /**
   * 账户下该环境唯一标识
   */
  EnvId?: string
  /**
   * 环境来源。包含以下取值：
<li>miniapp：微信小程序</li>
<li>qcloud ：腾讯云</li>
   */
  Source?: string
  /**
   * 环境别名，要以a-z开头，不能包含 a-zA-z0-9- 以外的字符
   */
  Alias?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 最后修改时间
   */
  UpdateTime?: string
  /**
   * 环境状态。包含以下取值：
<li>NORMAL：正常可用</li>
<li>UNAVAILABLE：服务不可用，可能是尚未初始化或者初始化过程中</li>
   */
  Status?: string
  /**
   * 数据库列表
   */
  Databases?: Array<DatabasesInfo>
  /**
   * 存储列表
   */
  Storages?: Array<StorageInfo>
  /**
   * 函数列表
   */
  Functions?: Array<FunctionInfo>
  /**
   * tcb产品套餐ID，参考DescribePackages接口的返回值。
   */
  PackageId?: string
  /**
   * 套餐中文名称，参考DescribePackages接口的返回值。
   */
  PackageName?: string
  /**
   * 云日志服务列表
   */
  LogServices?: Array<LogServiceInfo>
  /**
   * 静态资源信息
   */
  StaticStorages?: Array<StaticStorageInfo>
  /**
   * 是否到期自动降为免费版
   */
  IsAutoDegrade?: boolean
  /**
   * 环境渠道
   */
  EnvChannel?: string
  /**
   * 支付方式。包含以下取值：
<li> prepayment：预付费</li>
<li> postpaid：后付费</li>
   */
  PayMode?: string
  /**
   * 是否为默认环境
   */
  IsDefault?: boolean
  /**
   * 环境所属地域
   */
  Region?: string
  /**
   * 环境标签列表
   */
  Tags?: Array<Tag>
  /**
   * 自定义日志服务
   */
  CustomLogServices?: Array<ClsInfo>
  /**
   * 环境类型：baas, run, hoting, weda
   */
  EnvType?: string
  /**
   * 是否是dau新套餐
   */
  IsDauPackage?: boolean
  /**
   * 套餐类型:空\baas\tcbr
   */
  PackageType?: string
  /**
   * 架构类型
   */
  ArchitectureType?: string
  /**
   * 回收标志，默认为空
   */
  Recycle?: string
}

/**
 * DestroyEnv请求参数结构体
 */
export interface DestroyEnvRequest {
  /**
   * 环境Id
   */
  EnvId: string
  /**
   * 针对预付费 删除隔离中的环境时要传true 正常环境直接跳过隔离期删除
   */
  IsForce?: boolean
  /**
   * 是否绕过资源检查，资源包等额外资源，默认为false，如果为true，则不检查资源是否有数据，直接删除。
   */
  BypassCheck?: boolean
}

/**
 * DestroyEnv返回参数结构体
 */
export interface DestroyEnvResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTable返回参数结构体
 */
export interface DeleteTableResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddProvider返回参数结构体
 */
export interface AddProviderResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DestroyMySQL请求参数结构体
 */
export interface DestroyMySQLRequest {
  /**
   * 云开发环境ID
   */
  EnvId: string
}

/**
 * 环境计费信息
 */
export interface EnvBillingInfoItem {
  /**
   * 环境ID
   */
  EnvId?: string
  /**
   * tcb产品套餐ID，参考DescribePackages接口的返回值。
   */
  PackageId?: string
  /**
   * 自动续费标记
   */
  IsAutoRenew?: boolean
  /**
   * 状态。包含以下取值：
<li> 空字符串：初始化中</li>
<li> NORMAL：正常</li>
<li> ISOLATE：隔离</li>
   */
  Status?: string
  /**
   * 支付方式。包含以下取值：
<li> PREPAYMENT：预付费</li>
<li> POSTPAID：后付费</li>
   */
  PayMode?: string
  /**
   * 隔离时间，最近一次隔离的时间
   */
  IsolatedTime?: string
  /**
   * 过期时间，套餐即将到期的时间
   */
  ExpireTime?: string
  /**
   * 创建时间，第一次接入计费方案的时间。
   */
  CreateTime?: string
  /**
   * 更新时间，计费信息最近一次更新的时间。
   */
  UpdateTime?: string
  /**
   * true表示从未升级过付费版。
   */
  IsAlwaysFree?: boolean
  /**
   * 付费渠道。
<li> miniapp：小程序</li>
<li> qcloud：腾讯云</li>
   */
  PaymentChannel?: string
  /**
   * 最新的订单信息
   */
  OrderInfo?: OrderInfo
  /**
   * 免费配额信息。
   */
  FreeQuota?: string
  /**
   * 是否开启 `超过套餐额度部分转按量付费`
   */
  EnableOverrun?: boolean
  /**
   * 环境套餐类型
   */
  ExtPackageType?: string
  /**
   * 是否付费期环境，可取值：yes/no。
   */
  EnvCharged?: string
  /**
   * 是否已激活，可取值：yes/no。
   */
  EnvActivated?: string
}

/**
 * DescribeEnvs返回参数结构体
 */
export interface DescribeEnvsResponse {
  /**
   * 环境信息列表
   */
  EnvList?: Array<EnvInfo>
  /**
   * 环境个数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListTables请求参数结构体
 */
export interface ListTablesRequest {
  /**
   * 每页返回数量（0-1000)
   */
  MgoLimit: number
  /**
   * FlexDB实例ID
   */
  Tag?: string
  /**
   * 分页偏移量
   */
  MgoOffset?: number
  /**
   * 过滤标签数组，用于过滤表名，可选值如：HIDDEN、WEDA、WEDA_SYSTEM
   */
  Filters?: Array<string>
  /**
   * 模糊搜索查询值
   */
  SearchValue?: string
  /**
   * 是否展示隐藏表
   */
  ShowHidden?: boolean
  /**
   * 云开发环境ID
   */
  EnvId?: string
  /**
   * mongo连接器信息
   */
  MongoConnector?: MongoConnector
}

/**
 * CreateAuthDomain请求参数结构体
 */
export interface CreateAuthDomainRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 安全域名
   */
  Domains: Array<string>
}

/**
 * CreateHostingDomain返回参数结构体
 */
export interface CreateHostingDomainResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MySql 任务状态
 */
export interface MySQLTaskStatus {
  /**
   * SUCCESS | FAILED | PENDING
   */
  Status?: string
  /**
   * 状态描述
   */
  StatusDesc?: string
}

/**
 * 查询开通Mysql结果
 */
export interface DescribeCreateMySQLResult {
  /**
   * 状态 notexist | init | doing | success | fail
   */
  Status?: string
  /**
   * 失败原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailReason?: string
  /**
   * 是否已被冻结（只在 Status=success时有效）
   */
  FreezeStatus?: boolean
}

/**
 * DescribeCreateMySQLResult返回参数结构体
 */
export interface DescribeCreateMySQLResultResponse {
  /**
   * 查询开通结果
   */
  Data?: DescribeCreateMySQLResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSafeRule请求参数结构体
 */
export interface DescribeSafeRuleRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 集合名称
   */
  CollectionName: string
  /**
   * 微信AppId，微信必传
   */
  WxAppId?: string
}

/**
 * DeleteUsers请求参数结构体
 */
export interface DeleteUsersRequest {
  /**
   * 环境id
   */
  EnvId: string
  /**
   * tcb用户id列表, 一次最多支持删除100个
   */
  Uids: Array<string>
}

/**
 * DescribeBaasPackageList返回参数结构体
 */
export interface DescribeBaasPackageListResponse {
  /**
   * 套餐列表
   */
  PackageList?: Array<BaasPackageInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SearchClsLog返回参数结构体
 */
export interface SearchClsLogResponse {
  /**
   * 日志内容结果
   */
  LogResults?: LogResObject
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 身份源配置信息。描述云开发环境下用户登录身份源的完整配置，定义了用户通过何种方式进入系统并完成身份认证。支持多种类型：包括标准协议身份源（OAuth 2.0、OIDC、SAML 2.0）、内置身份源（邮箱登录、自定义登录）以及通过插件机制扩展的身份源（如 CAS）。每个身份源包含认证配置、启用状态、用户自动注册策略、信息透传模式等核心属性，是登录认证流程的核心数据结构。
 */
export interface Provider {
  /**
   * 身份源的唯一标识符，用于在系统内区分不同的身份源。格式要求：2~32 位，仅支持小写英文字母和数字，不可包含空格或特殊字符。创建后不可修改
   */
  Id: string
  /**
   * 身份源的安全认证配置，包含与第三方平台对接所需的核心参数，如 ClientId、ClientSecret、授权端点、Token 端点、回调地址、Scope 等。不同 ProviderType 对应不同的配置项。CUSTOM 类型无需手动配置（系统自动填充），OIDC 类型会根据 Issuer 自动补全端点信息，SAML 类型需提供 SamlMetadata（最大 10KB）
   */
  Config: ProviderConfig
  /**
   * 身份源的显示名称，支持国际化多语言配置。用户在登录页面看到的身份源名称将使用该字段，建议根据实际业务场景填写易于识别的名称。未传入时默认使用 Id 值作为显示名称
   */
  Name?: LocalizedMessage
  /**
   * 身份源图标的访问地址，将展示在登录页的身份源按钮上。建议使用 64×64 像素的 SVG 格式图片以保证清晰度，支持 HTTP/HTTPS 公网可访问的图片链接
注意：此字段可能返回 null，表示取不到有效值。
   */
  Picture?: string
  /**
   * 身份源对应的官方主页地址。该信息将在用户查看自己的第三方账号绑定列表时展示，帮助用户识别已绑定的身份源来源。例如 GitHub 身份源可填写：https://github.com
注意：此字段可能返回 null，表示取不到有效值。
   */
  Homepage?: string
  /**
   * 身份源协议类型，决定该身份源使用何种认证协议与第三方平台对接。可选值：OAUTH（标准 OAuth 2.0 协议）、OIDC（OpenID Connect 协议）、SAML（SAML 2.0 协议）、CUSTOM（自定义登录，使用 RSA 密钥对签名验证）、EMAIL（邮箱登录，需配合 EmailConfig 使用）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProviderType?: string
  /**
   * 控制第三方身份源登录时是否自动注册系统用户。可选值：TRUE（始终自动注册，无论第三方返回的用户信息是否包含手机号或邮箱）、FALSE（不自动注册，需用户手动绑定）、UNSPECIFIED（默认行为：仅当第三方身份源返回的用户信息中包含手机号或邮箱时才自动注册，否则登录完成后要求用户绑定手机号方可继续使用）。注意：企业微信类型（WX_WORK_AGENT/WX_WORK_INTERNAL/WX_WORK_THIRD_PARTY/WX_WORK_THIRD_PARTY_ASSOCIATION）和微信小程序类型（WX_MICRO_APP/WX_QRCODE_MICRO_APP/WX_OPEN）在 UNSPECIFIED 时会自动设为 TRUE。当 TransparentMode 为 TRUE 时，该字段将被强制设为 FALSE
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoSignUpWithProviderUser?: string
  /**
   * 身份源的启用状态。可选值：TRUE（启用，用户可通过该身份源登录）、FALSE（禁用，已有绑定关系不受影响）。未传入时默认为 TRUE（启用）
注意：此字段可能返回 null，表示取不到有效值。
   */
  On?: string
  /**
   * 身份源的详细描述信息，支持国际化多语言配置。可用于向用户说明该身份源的用途或使用场景。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: LocalizedMessage
  /**
   * 是否开启信息透传模式。可选值：TRUE（仅登录模式：平台不持久化存储用户数据，仅将第三方身份源返回的用户信息透传给业务方，适用于不希望平台留存用户数据的场景）、FALSE（登录且注册模式：平台正常注册并存储用户信息，默认值）。注意：开启透传模式时，AutoSignUpWithProviderUser 将被强制设为 FALSE；若 ReuseUserId 为 UNSPECIFIED，将被自动设为 TRUE。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TransparentMode?: string
  /**
   * 是否直接复用第三方身份源返回的用户标识（如 OpenID、UnionID 等）作为平台用户 ID。可选值：TRUE（开启，平台用户 ID 将直接使用第三方身份源返回的用户标识，适用于已有用户体系迁移场景）、FALSE（关闭，由平台生成独立用户 ID）。注意：开启后需确保第三方用户标识的全局唯一性，避免 ID 冲突。当 TransparentMode 为 TRUE 且该字段为 UNSPECIFIED 时，将被自动设为 TRUE
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReuseUserId?: string
  /**
   * 邮箱身份源的专项配置，仅当 ProviderType 为 EMAIL 时有效且必填。包含邮件服务商、发件人地址、SMTP 配置等参数，用于支持通过邮箱验证码方式进行身份认证。支持两种模式：自有 SMTP 服务器（需填写完整的 SMTP 配置）和平台代发（EmailConfig.On 设为 TRUE 时由平台随机分配 SMTP 服务器）
注意：此字段可能返回 null，表示取不到有效值。
   */
  EmailConfig?: EmailProviderConfig
  /**
   * 是否开启邮箱自动关联登录。可选值：TRUE（开启）、FALSE（关闭）、UNSPECIFIED（默认为 FALSE）。开启后，若第三方身份源返回的邮箱与系统中已有用户的邮箱一致，则自动将该第三方账号与已有用户关联绑定并完成登录，无需用户手动绑定
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoSignInWhenEmailMatch?: string
  /**
   * 是否开启手机号自动关联登录。可选值：TRUE（开启）、FALSE（关闭）、UNSPECIFIED（默认行为等同于 TRUE，即默认开启）。开启后，若第三方身份源返回的手机号与系统中已有用户的手机号一致，则自动将该第三方账号与已有用户关联绑定并完成登录，无需用户手动绑定
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoSignInWhenPhoneNumberMatch?: string
}

/**
 * DescribeSafeRule返回参数结构体
 */
export interface DescribeSafeRuleResponse {
  /**
   * 规则内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Rule?: string
  /**
   * 权限标签。包含以下取值：
<li> READONLY：所有用户可读，仅创建者和管理员可写</li>
<li> PRIVATE：仅创建者及管理员可读写</li>
<li> ADMINWRITE：所有用户可读，仅管理员可写</li>
<li> ADMINONLY：仅管理员可读写</li>
<li> CUSTOM：自定义安全规则</li>
   */
  AclTag?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 安全网关自定义日志配置
 */
export interface CustomLogConfig {
  /**
   * 是否需要请求体
   */
  NeedReqBodyLog?: boolean
  /**
   * 是否需要请求头
   */
  NeedReqHeaderLog?: boolean
  /**
   * 是否需要回包体
   */
  NeedRspBodyLog?: boolean
  /**
   * 是否需要回包头部信息
   */
  NeedRspHeaderLog?: boolean
  /**
   * cls set信息
   */
  LogSetId?: string
  /**
   * cls topicId
   */
  LogTopicId?: string
}

/**
 * DescribeApiKeyList请求参数结构体
 */
export interface DescribeApiKeyListRequest {
  /**
   * 环境 ID，用于标识该密钥归属的云开发环境，不同环境之间的数据相互隔离
   */
  EnvId: string
  /**
   * 分页查询的页码，从 1 开始。与 PageSize 配合使用，不传则默认返回第 1 页
   */
  PageNumber?: number
  /**
   * 分页查询每页返回的记录条数。与 PageNumber 配合使用，不传则使用系统默认值
   */
  PageSize?: number
  /**
   * 密钥类型过滤条件。可选值：api_key（服务端调用使用的 API 密钥，具有完整权限）、publish_key（客户端使用的公开密钥，权限受限）密钥类型过滤条件。不传默认值为api_key
   */
  KeyType?: string
}

/**
 * 本类型用于UpdateTable接口中描述待创建索引信息
 */
export interface MgoIndexKeys {
  /**
   * 无
   */
  Name?: string
  /**
   * 无
   */
  Direction?: string
}

/**
 * DescribeStaticStore请求参数结构体
 */
export interface DescribeStaticStoreRequest {
  /**
   * 环境ID
   */
  EnvId: string
}

/**
 * http访问服务客户端限频
 */
export interface HTTPServiceQPSPerClient {
  /**
   * 客户端维度限频标识。限制当前资源被单个客户端调用的频率，客户端标识支持 用户ID（UserID） 或 客户端 IP（ClientIP）。UserID 包括 云开发用户 ID 或 微信 openid，如果请求无 UserID 信息，则不会限制。
   */
  LimitBy?: string
  /**
   * 限制QPS值，每秒请求次数
   */
  LimitValue?: number
}

/**
 * DeleteUsers返回参数结构体
 */
export interface DeleteUsersResponse {
  /**
   * 删除用户结果
   */
  Data?: DeleteUsersResp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 登录短信验证码发送配置。用于管理登录时使用的短信验证码发送的通道相关设置，目前提供云开发默认短信包和客户自定义短信包，推荐使用云开发默认短信包。
如果使用自定义APIs发送短信，方法命名规则
方法名称：发送验证码
方法标识：SendVerificationCode
入参
Mobile：字符串（手机号，如：“+86 + 手机号”）
VerificationCode：字符串（验证码，如：“123456”）
返回值
ErrorCode：int（0 表示成功，非 0 表示失败）
ErrorMessage：字符串（ErrorCode 非 0 时，返回错误信息）
 */
export interface VerificationConfig {
  /**
   * 短信验证码发送通道类型。取值范围：
default：使用默认云开发短信包发送短信。
apis：使用云开发自定义 APIs 作为短信发送通道，需配合 Name 和 Method 参数使用。
不传则不修改当前配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 自定义 APIs 数据源唯一标识，当 Type 为 apis 时必填。用于定位微搭 APIs 中对应的数据源。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 自定义 APIs 方法名，当 Type 为 apis 时必填。指定微搭 APIs 中用于发送验证码的方法。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Method?: string
  /**
   * 单个手机号每日短信发送上限。默认值为 30，传 -1 表示不限制，如果设置为不限制，需要注意恶意攻击，导致短信套餐用量计费问题。仅支持正整数或 -1。不传则不修改当前配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SmsDayLimit?: number
}

/**
 * DescribeTables返回参数结构体
 */
export interface DescribeTablesResponse {
  /**
   * 表信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tables?: Array<TableInfo>
  /**
   * 分页信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Pager?: Pager
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEnvAccountCircle返回参数结构体
 */
export interface DescribeEnvAccountCircleResponse {
  /**
   * 环境计费周期开始时间
   */
  StartTime?: string
  /**
   * 环境计费周期结束时间
   */
  EndTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 多因子认证登录配置，用于管理 MFA（Multi-Factor Authentication）相关设置。包括 MFA 总开关、短信验证、邮箱验证、强制绑定手机号、TOTP 动态验证码等认证方式的独立开关配置。当 MFA 总开关（On）开启时，用户在登录后需完成额外的身份验证步骤。各子开关可独立控制具体的验证方式。不传则不修改当前配置。
 */
export interface MFALoginConfig {
  /**
   * MFA 多因子认证开关。取值范围：
TRUE：开启 MFA 多因子认证
FALSE：关闭 MFA 多因子认证
不传则不修改当前配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  On?: string
  /**
   * 短信验证开关，控制是否在 MFA 流程中启用短信验证码校验。取值范围：
TRUE：开启短信验证
FALSE：关闭短信验证
不传则不修改当前配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Sms?: string
  /**
   * 邮箱验证开关，控制是否在 MFA 流程中启用邮箱验证码校验。取值范围：
TRUE：开启邮箱验证
FALSE：关闭邮箱验证
不传则不修改当前配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Email?: string
  /**
   * 强制绑定手机号开关，控制用户在完成 MFA 认证前是否必须绑定手机号。取值范围：
TRUE：要求绑定手机号
FALSE：不要求绑定手机号
不传则不修改当前配置。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RequiredBindPhone?: string
}

/**
 * 待执行命令
 */
export interface MgoCommandParam {
  /**
   * 表名
   */
  TableName: string
  /**
   * 操作类型，可选类型为：UPDATE/QUERY/INSERT/DELETE/COMMAND，本操作必须按实际填写，监控会依赖该字段统计本次操作的类型，并实时减少用户配额，如果填写错误会误扣用户请求配额
   */
  CommandType: string
  /**
   * 待执行命令
   */
  Command: string
}

/**
 * VM规格
 */
export interface VMSpec {
  /**
   * LightHouse=轻量云服务器
CVM=云服务器
   */
  Type?: string
  /**
   * 轻量云服务器规格。
当Type=LightHouse时有效
   */
  LightHouseSpec?: VMSpecLightHouse
  /**
   * 价格信息
   */
  Price?: VMPrice
}

/**
 * ModifyDatabaseACL返回参数结构体
 */
export interface ModifyDatabaseACLResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 静态CDN资源信息
 */
export interface StaticStorageInfo {
  /**
   * 静态CDN域名
   */
  StaticDomain?: string
  /**
   * 静态CDN默认文件夹，当前为根目录
   */
  DefaultDirName?: string
  /**
   * 资源状态(process/online/offline/init)
   */
  Status?: string
  /**
   * cos所属区域
   */
  Region?: string
  /**
   * bucket信息
   */
  Bucket?: string
}

/**
 * CreateTable返回参数结构体
 */
export interface CreateTableResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用户信息
 */
export interface User {
  /**
   * 用户ID
   */
  Uid?: string
  /**
   * 用户名
   */
  Name?: string
  /**
   * 用户类型：internalUser-内部用户、externalUser-外部用户
   */
  Type?: string
  /**
   * 用户状态：ACTIVE（激活）、BLOCKED（冻结）
   */
  UserStatus?: string
  /**
   * 用户昵称
   */
  NickName?: string
  /**
   * 手机号
   */
  Phone?: string
  /**
   * 邮箱
   */
  Email?: string
  /**
   * 头像链接
   */
  AvatarUrl?: string
  /**
   * 用户描述
   */
  Description?: string
}

/**
 * 销毁 Mysql 结果
 */
export interface DestroyMySQLResult {
  /**
   * 是否成功
   */
  IsSuccess?: boolean
  /**
   * 任务ID
   */
  TaskId?: string
  /**
   * 任务名
   */
  TaskName?: string
}

/**
 * CreateMySQL请求参数结构体
 */
export interface CreateMySQLRequest {
  /**
   * 云开发环境ID
   */
  EnvId: string
  /**
   * Db类型: MYSQL
   */
  DbInstanceType: string
  /**
   * mysql版本
   */
  MysqlVersion?: string
  /**
   * vpc Id
   */
  VpcId?: string
  /**
   * 子网ID
   */
  SubnetId?: string
  /**
   * 0 区分表名大小写；1 不区分表名大小写(默认)
   */
  LowerCaseTableNames?: string
}

/**
 * 数据库资源信息
 */
export interface DatabasesInfo {
  /**
   * 数据库唯一标识
   */
  InstanceId?: string
  /**
   * 状态。包含以下取值：
<li>INITIALIZING：资源初始化中</li>
<li>RUNNING：运行中，可正常使用的状态</li>
<li>UNUSABLE：禁用，不可用</li>
<li>OVERDUE：资源过期</li>
   */
  Status?: string
  /**
   * 所属地域。
当前支持ap-shanghai
   */
  Region?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
}

/**
 * 查询HTTP访问服务输出的域名信息，每个域名内包含所有路由信息
 */
export interface HTTPServiceDomain {
  /**
   * 域名
   */
  Domain?: string
  /**
   * 域名类型。 HTTPSERVICE: HTTP访问服务，CBR: 云托管服务，ANYSERVICE: 任意服务，AI_AGENT: AI agent，VM: 主机，INTEGRATION_CALLBACK: 集成回调
   */
  DomainType?: string
  /**
   * 绑定类型。默认DIRECT。DIRECT: 直连到HTTP访问服务， CDN: 接入云开发CDN，CUSTOM: 自定义接入类型（其他CDN或者WAF）
   */
  AccessType?: string
  /**
   * 证书ID。当前账户下SSL平台的证书ID
   */
  CertId?: string
  /**
   * 协议类型。默认HTTP_AND_HTTPS。HTTP_AND_HTTPS: 同时开启http和https，HTTP_TO_HTTPS: http重定向成https，HTTPS_TO_HTTP: https重定向成http。如果未配置证书无法访问https或者进行重定向
   */
  Protocol?: string
  /**
   * 配置DNS解析的CNAME。根据AccessType返回不同的CNAME值。
   */
  Cname?: string
  /**
   * 是否是默认域名
   */
  IsDefault?: boolean
  /**
   * 域名开启状态
   */
  Enable?: boolean
  /**
   * 状态。PROCESSING、FAIL，SUCCESS。
   */
  Status?: string
  /**
   * DNS解析状态。OK： 解析正常，INVALID：解析不正确，域名未解析到当前Cname域名。
   */
  DNSStatus?: string
  /**
   * HTTP访问服务路由信息
   */
  Routes?: Array<HTTPServiceRoute>
  /**
   * 域名创建时间
   */
  CreateTime?: string
  /**
   * 域名更新时间
   */
  UpdateTime?: string
}

/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等
 */
export interface Filter {
  /**
   * 需要过滤的字段。过滤条件数量限制为10。
   */
  Name?: string
  /**
   * 字段的过滤值。
   */
  Values?: Array<string>
}

/**
 * 本类型用于UpdateTable接口中描述待删除索引信息
 */
export interface DropIndex {
  /**
   * 索引名称
   */
  IndexName?: string
}

/**
 * 登录配置中密码更新配置策略，用于管理使用用户名密码登录方式时，密码的过期策略和更新策略。例如，首次登录需要更新密码、定期过期密码等策略。
 */
export interface PasswordUpdateLoginConfig {
  /**
   * 首次登录强制修改密码开关。开启后，用户首次登录时将强制要求修改密码。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FirstLoginUpdate?: boolean
  /**
   * 定期强制修改密码开关。开启后，用户需按照 PeriodValue 和 PeriodType 指定的周期定期修改密码，超过周期未修改将在登录时强制要求修改。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PeriodUpdate?: boolean
  /**
   * 定期修改密码的周期数值，与 PeriodType 配合使用。例如 PeriodValue 为 6，PeriodType 为 MONTH，表示每 6 个月需修改一次密码。当 PeriodUpdate 为 true 时必填。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PeriodValue?: number
  /**
   * 定期修改密码的周期时间单位，与 PeriodValue 配合使用。取值范围：
WEEK：周
MONTH：月
YEAR：年
当 PeriodUpdate 为 true 时必填。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PeriodType?: string
}

/**
 * ReinstateEnv请求参数结构体
 */
export interface ReinstateEnvRequest {
  /**
   * 环境ID
   */
  EnvId: string
}

/**
 * DescribeDatabaseACL请求参数结构体
 */
export interface DescribeDatabaseACLRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 集合名称
   */
  CollectionName: string
}

/**
 * CreateApiKey返回参数结构体
 */
export interface CreateApiKeyResponse {
  /**
   * API Key 的唯一标识符，由系统基于 JWT Access Token Hash 自动生成。后续对该 API Key 进行查询、修改名称或删除操作时，均需使用该值作为定位参数
   */
  KeyId?: string
  /**
   * API Key 的名称，即创建时传入的 KeyName 参数值。对于 publish_key 类型，该值固定为 publish_key
   */
  Name?: string
  /**
   * API Key 的令牌值（JWT 格式），用于服务端接口调用时的身份认证。出于安全考虑，仅在创建时返回一次完整明文；后续通过列表查询接口获取时，api_key 类型将进行脱敏处理；publish_key 类型始终返回完整明文。请在创建后妥善保存
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApiKey?: string
  /**
   * API Key 的过期时间。对于 api_key 类型：若创建时未指定有效期，则该字段不返回，表示永不过期；若指定了有效期，则返回具体的过期时间。对于 publish_key 类型：始终返回，固定为 2099 年
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireAt?: string
  /**
   * API Key 的创建时间。对于 api_key 类型：为实际创建该 Key 时的时间。对于 publish_key 类型：若环境下已存在 publish_key，则返回首次创建的时间而非本次调用时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateAt?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * vm规格
 */
export interface VMSpecLightHouse {
  /**
   * LH主机的BundleId
   */
  BundleId?: string
  /**
   * 主机配置详情json
   */
  BundleConfig?: string
}

/**
 * DescribeMySQLTaskStatus返回参数结构体
 */
export interface DescribeMySQLTaskStatusResponse {
  /**
   * 任务状态
   */
  Data?: MySQLTaskStatus
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 表信息
 */
export interface TableInfo {
  /**
   * 表名
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableName?: string
  /**
   * 表中文档数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Count?: number
  /**
   * 表的大小（即表中文档总大小），单位：字节
注意：此字段可能返回 null，表示取不到有效值。
   */
  Size?: number
  /**
   * 索引数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexCount?: number
  /**
   * 索引占用空间，单位：字节
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexSize?: number
}

/**
 * DescribeLoginConfig返回参数结构体
 */
export interface DescribeLoginConfigResponse {
  /**
   * 是否开启邮箱登录方式。true 表示已开启，允许用户使用邮箱和密码进行登录；false 表示已关闭。
   */
  EmailLogin?: boolean
  /**
   * 是否开启匿名登录方式。true 表示已开启，允许用户无需注册即可以匿名身份登录；false 表示已关闭。
   */
  AnonymousLogin?: boolean
  /**
   * 是否开启用户名密码登录方式。true 表示已开启，允许用户使用用户名和密码进行登录；false 表示已关闭。
   */
  UserNameLogin?: boolean
  /**
   * 短信验证码发送配置，包含短信发送通道类型、自定义 APIs 数据源、调用方法及每日发送限额等信息。
   */
  SmsVerificationConfig?: VerificationConfig
  /**
   * 是否开启手机号短信登录方式。true 表示已开启，允许用户使用手机号和短信验证码进行登录和注册；false 表示已关闭。
   */
  PhoneNumberLogin?: boolean
  /**
   * MFA 多因子认证登录配置，包含 MFA 开关及各验证方式（短信、邮箱、TOTP、强制绑定手机号）的启用状态。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MfaConfig?: MFALoginConfig
  /**
   * 密码修改策略配置，包含首次登录强制修改密码开关及定期修改密码策略（周期和时间单位）。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PwdUpdateStrategy?: PasswordUpdateLoginConfig
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeGatewayVersions请求参数结构体
 */
export interface DescribeGatewayVersionsRequest {
  /**
   * 环境id
   */
  EnvId: string
  /**
   * 网关id
   */
  GatewayId: string
  /**
   * 版本名
   */
  VersionName?: string
}

/**
 * CreateEnvResource返回参数结构体
 */
export interface CreateEnvResourceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTables请求参数结构体
 */
export interface DescribeTablesRequest {
  /**
   * 分页条件
   */
  MgoLimit: number
  /**
   * 实例ID
   */
  Tag?: string
  /**
   * 分页条件
   */
  MgoOffset?: number
  /**
   * 环境id
   */
  EnvId?: string
  /**
   * MongoConnector
   */
  MongoConnector?: MongoConnector
  /**
   * 指定表名过滤，为空时返回所有表
   */
  TableNames?: Array<string>
}

/**
 * DescribeUserList请求参数结构体
 */
export interface DescribeUserListRequest {
  /**
   * 环境id
   */
  EnvId: string
  /**
   * 页码，从1开始，默认1
   */
  PageNo?: number
  /**
   * 每页数量，默认20，最大100
   */
  PageSize?: number
  /**
   * 用户名，模糊查询
   */
  Name?: string
  /**
   * 用户昵称，模糊查询
   */
  NickName?: string
  /**
   * 手机号，模糊查询
   */
  Phone?: string
  /**
   * 邮箱，模糊查询
   */
  Email?: string
}

/**
 * DescribeCurveData请求参数结构体
 */
export interface DescribeCurveDataRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * <h4>文档型数据库相关指标</h4>
<li> DbRead: 数据库读请求数 </li>
<li> DbWrite: 数据库写请求数 </li>
<li> DbCostTime10ms: 数据库耗时在10ms-50ms请求数 </li>
<li> DbCostTime50ms: 数据库耗时在50ms-100ms请求数 </li>
<li> DbCostTime100ms: 数据库耗时在100ms以上请求数 </li>
<li> DbSizepkg: 数据库容量，单位MB </li>

<h4>SQL型数据库相关指标</h4>
<li> MysqlStorageUsage: 关系型数据库容量，单位MB </li>
<li> MysqlCCU: CCU </li>
<li> MysqlCpuUsageRate:CPU利用率 </li>
<li> MysqlDbConnections:数据库连接数 </li>
<li> MysqlMemoryUse: 内存使用量，单位MB </li>
<li> MysqlSlowQueries:慢查询数 </li>
<li> MysqlTps: 提交数 </li>
<li> MysqlQps: QPS </li>

<h4>云函数相关指标</h4>
<li> FunctionCU: 资源用量</li>
<li> FunctionInvocation: 调用次数 </li>
<li> FunctionFlux: 外网出流量, 单位千字节(KB) </li>
<li> FunctionThrottle: 受限次数 </li>
<li> FunctionConcurrentExecutions: 并发执行个数</li>
<li> FunctionTimeout: 函数执行超时次数</li>
<li> FunctionGBs: 资源用量, 单位Mb*Ms </li>
<li> FunctionError: 云错误次数 </li>
<li> FunctionDuration: 运行时间, 单位毫秒 </li>
<li> FunctionConcurrencyMemoryMB: 并发执行内存量 </li>
<li>FunctionMemOverFlow：内存超限次数</li>
<li> FunctionIdleProvisioned: 预置并发闲置量 </li>
<li> FunctionProvisionedConcurrency: 预置并发个数 </li>

<h4>云托管相关指标</h4>
<li>TkeRspTimeService ： 响应时间，单位毫秒</li>
<li>TkeCpuUsedService ： CPU使用量</li>
<li>TkeMemUsedService ： 内存使用量</li>
<li>TkeQPSService ： QPS</li>
<li>TkePodNumService ： 实例个数</li>
<li>TkeHttpServiceNatPkg ： 外网出流量，单位byte</li>
<li>TkeCUUsedService ： 内存使用量(CU单位)</li>
<li>TkeInvokeNumService ： 调用量</li>
<li>TkeHttpErrorService ： 错误响应（404、500等）</li>

<h4>静态网站托管相关指标</h4>
<li>StaticFsFluxPkg：流量，单位byte</li>
<li>StaticFsSizePkg：存储容量，单位MB</li>

<h4>身份认证相关指标</h4>
<li>AuthInvocationNumPkg：调用次数</li>

<h4>API调用相关指标</h4>
<li>GwCloudDevelopmentSecureCallsInvocation：云开发API调用次数</li>
<li>GwWXInvocation：小程序API调用次数</li>

<h4>HTTP网关相关指标</h4>
<li>GwCloudDevelopmentStandardCallsInvocation：HTTP调用次数</li>

<h4>大模型相关指标</h4>
<li>AIPromptTokenNumPkg：输入Token</li>
<li>AICompletionTokenNumPkg：输出Token</li>
<li>AITotalTokenNumPkg：总Token</li>

<h4>知识库相关指标</h4>
<li>KnowledgeBaseCapacity：容量，单位bytes</li>


<h4>用户登录相关指标</h4>
<li>DayActiveLoginAnonymousUser：匿名用户登陆日活</li>
<li>DayActiveLoginAllUser ： 全部用户登陆日活</li>
<li>DayActiveLoginExternalUser ： 外部用户登陆日活</li>
<li>DayActiveLoginInternalUser ： 内部用户登陆日活</li>
   */
  MetricName: string
  /**
   * 开始时间，如2018-08-24 10:50:00, 开始时间需要早于结束时间至少五分钟(原因是因为目前统计粒度最小是5分钟)
   */
  StartTime: string
  /**
   * 结束时间，如2018-08-24 10:50:00, 结束时间需要晚于开始时间至少五分钟(原因是因为目前统计粒度最小是5分钟)
   */
  EndTime: string
  /**
   * 资源ID, 目前仅对文档型数据库、云函数、云托管相关的指标有意义。
如果想查询某个具体云函数/具体数据库集合的指标，则需传入对应的云函数名称/集合名称；如果只想查询整个namespace的指标, 则留空或不传。
云托管相关指标的查询，必须传入云托管服务名称。
   */
  ResourceID?: string
  /**
   * 微信AppId，微信必传
   */
  WxAppId?: string
  /**
   * 子资源信息。
查询云托管相关指标的具体版本的监控数据，需传入。
   */
  SubresourceID?: string
  /**
   * 网关路由
   */
  ThirdResource?: string
  /**
   * 统计周期(单位秒)，非必传，传入时仅支持传入300，3600，86400。不传采用默认以下默认规则：当时间区间为1天内, 统计周期为300；当时间区间选择为1天以上, 15天以下, 统计周期为3600； 当时间区间选择为15天以上, 180天以下, 统计周期为86400。
如果传入period，需遵循以下规则。EndTime-StartTime的时间范围不超过1 天，Period可以取300或3600；EndTime-StartTime的时间范围满足超过1天且不超过3 天，Period可以取300或3600或86400；EndTime-StartTime的时间范围超过3天时，Period可以取3600或86400。
   */
  Period?: number
}

/**
 * DescribeStaticStore返回参数结构体
 */
export interface DescribeStaticStoreResponse {
  /**
   * 静态托管资源信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<StaticStoreInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyHTTPServiceRoute返回参数结构体
 */
export interface ModifyHTTPServiceRouteResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetProviders返回参数结构体
 */
export interface GetProvidersResponse {
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 三方认证源列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<Provider>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeQuotaData请求参数结构体
 */
export interface DescribeQuotaDataRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * <li> 指标名: </li>
<li> StorageSizepkg: 当月存储空间容量, 单位MB </li>
<li> StorageReadpkg: 当月存储读请求次数 </li>
<li> StorageWritepkg: 当月存储写请求次数 </li>
<li> StorageCdnOriginFluxpkg: 当月CDN回源流量, 单位字节 </li>
<li> StorageCdnOriginFluxpkgDay: 当日CDN回源流量, 单位字节 </li>
<li> StorageReadpkgDay: 当日存储读请求次数 </li>
<li> StorageWritepkgDay: 当日写请求次数 </li>
<li> CDNFluxpkg: 当月CDN流量, 单位为字节 </li>
<li> CDNFluxpkgDay: 当日CDN流量, 单位为字节 </li>
<li> FunctionInvocationpkg: 当月云函数调用次数 </li>
<li> FunctionGBspkg: 当月云函数资源使用量, 单位Mb*Ms </li>
<li> FunctionFluxpkg: 当月云函数流量, 单位千字节(KB) </li>
<li> FunctionInvocationpkgDay: 当日云函数调用次数 </li>
<li> FunctionGBspkgDay: 当日云函数资源使用量, 单位Mb*Ms </li>
<li> FunctionFluxpkgDay: 当日云函数流量, 单位千字节(KB) </li>
<li> DbSizepkg: 当月数据库容量大小, 单位MB </li>
<li> DbReadpkg: 当日数据库读请求数 </li>
<li> DbWritepkg: 当日数据库写请求数 </li>
<li> StaticFsFluxPkgDay: 当日静态托管流量 </li>
<li> StaticFsFluxPkg: 当月静态托管流量</li>
<li> StaticFsSizePkg: 当月静态托管容量 </li>
<li> TkeCpuUsedPkg: 当月容器托管CPU使用量，单位核*秒 </li>
<li> TkeCpuUsedPkgDay: 当天容器托管CPU使用量，单位核*秒 </li>
<li> TkeMemUsedPkg: 当月容器托管内存使用量，单位MB*秒 </li>
<li> TkeMemUsedPkgDay: 当天容器托管内存使用量，单位MB*秒 </li>
<li> CodingBuildTimePkgDay: 当天容器托管构建时间使用量，单位毫秒 </li>
<li> TkeHttpServiceNatPkgDay: 当天容器托管流量使用量，单位B </li>
<li> CynosdbCcupkg: 当月微信云托管MySQL CCU使用量，单位个  （需要除以1000）</li>
<li> CynosdbStoragepkg: 当月微信云托管MySQL 存储使用量，单位MB  （需要除以1000）</li>
<li> CynosdbCcupkgDay: 当天微信云托管MySQL 存储使用量，单位个 （需要除以1000） </li>
<li> CynosdbStoragepkgDay: 当天微信云托管MySQL 存储使用量，单位MB （需要除以1000） </li>
   */
  MetricName: string
  /**
   * 资源ID, 目前仅对云函数、容器托管相关的指标有意义。云函数(FunctionInvocationpkg, FunctionGBspkg, FunctionFluxpkg)、容器托管（服务名称）。如果想查询某个云函数的指标则在ResourceId中传入函数名; 如果只想查询整个namespace的指标, 则留空或不传。
   */
  ResourceID?: string
}

/**
 * CreateStaticStore返回参数结构体
 */
export interface CreateStaticStoreResponse {
  /**
   * 创建静态资源结果(succ/fail)
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EditAuthConfig请求参数结构体
 */
export interface EditAuthConfigRequest {
  /**
   * 环境id
   */
  EnvId: string
  /**
   * 手机号登录配置 "TRUE",  "FALSE", "LOGIN_ONLY"
   */
  PhoneNumberLogin?: string
  /**
   * 匿名登录配置 "TRUE",  "FALSE"
   */
  AnonymousLogin?: string
  /**
   * 用户名密码登录配置 "TRUE",  "FALSE"
   */
  UsernameLogin?: string
}

/**
 * DescribeVmInstances返回参数结构体
 */
export interface DescribeVmInstancesResponse {
  /**
   * 主机实例列表
   */
  InstanceList?: Array<VmInstance>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * API Key 访问凭证信息。描述云开发环境下 API Key 的完整信息，包括标识符、名称、令牌值、创建时间和过期时间。支持两种类型：api_key（服务端管理员访问凭证，用于服务端接口调用的身份认证，可设置有效期，单个环境最多 5 个）和 publish_key（前端匿名访问凭证，固定有效期，每个环境仅保留一个）。注意：令牌值（ApiKey 字段）仅在创建时返回完整明文，列表查询时将进行脱敏处理。
 */
export interface ApiKeyToken {
  /**
   * API Key 的唯一标识符，由系统基于 UUID 自动生成的 Base64 URL 编码字符串。后续对该 API Key 进行删除、修改名称或精确查询操作时，均需使用该值作为定位参数
   */
  KeyId?: string
  /**
   * API Key 的名称，即创建时传入的 KeyName 参数值。对于 publish_key 类型，该值固定为 publish_key
   */
  Name?: string
  /**
   * API Key 的令牌值（JWT 格式），用于服务端接口调用时的身份认证。出于安全考虑，仅在创建时返回一次完整明文；后续通过列表查询接口获取时，api_key 类型将进行脱敏处理；publish_key 类型始终返回完整明文。请在创建后妥善保存
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApiKey?: string
  /**
   * API Key 的过期时间，格式遵循 ISO 8601 标准。对于 api_key 类型：若创建时未指定有效期（ExpireIn），则该字段不返回，表示永不过期；若指定了有效期，则返回具体的过期时间。对于 publish_key 类型：始终返回，固定为约 2099 年
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireAt?: string
  /**
   * API Key 的创建时间，格式遵循 ISO 8601 标准。对于 api_key 类型：为该 Key 实际创建时的时间。对于 publish_key 类型：若环境下已存在 publish_key 记录，则返回首次创建的时间而非本次调用时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateAt?: string
}

/**
 * StorageInfo 资源信息
 */
export interface StorageInfo {
  /**
   * 资源所属地域。
当前支持ap-shanghai
   */
  Region?: string
  /**
   * 桶名，存储资源的唯一标识
   */
  Bucket?: string
  /**
   * cdn 域名
   */
  CdnDomain?: string
  /**
   * 资源所属用户的腾讯云appId
   */
  AppId?: string
}

/**
 * 修改用户返回值
 */
export interface ModifyUserResp {
  /**
   * 是否成功
   */
  Success?: boolean
}

/**
 * ModifySafeRule返回参数结构体
 */
export interface ModifySafeRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTable请求参数结构体
 */
export interface DescribeTableRequest {
  /**
   * 表名
   */
  TableName: string
  /**
   * FlecDB实例ID
   */
  Tag?: string
  /**
   * 云开发环境ID
   */
  EnvId?: string
  /**
   * MongoDB连接器配置
   */
  MongoConnector?: MongoConnector
}

/**
 * UpdateTable请求参数结构体
 */
export interface UpdateTableRequest {
  /**
   * 表名
   */
  TableName: string
  /**
   * FlexDB实例ID
   */
  Tag?: string
  /**
   * 待删除索引信息
   */
  DropIndexes?: Array<DropIndex>
  /**
   * 待创建索引信息
   */
  CreateIndexes?: Array<CreateIndex>
  /**
   * 云开发环境ID
   */
  EnvId?: string
  /**
   * MongoDB连接器配置
   */
  MongoConnector?: MongoConnector
}

/**
 * 外部存储。
标识该存储介质，并非由云开发CloudBase创建，而是绑定的其他存储介质。
目前仅支持 [腾讯云-对象存储](https://cloud.tencent.com/document/product/436)。
 */
export interface ExternalStorage {
  /**
   * 桶名。
当 Provider=cos 时，表示腾讯云对象存储桶。
   */
  BucketName: string
  /**
   * Bucket所属地域。
当 Provider=cos 时，表示腾讯云对象存储桶的所属地域。
   */
  Region: string
  /**
   * 基础路径。
绑定之后，用户访问云存储内的文件，后台会自动以BasePath作为前缀，拼接到所访问的文件中。
例如：
  BasePath=my-cloudbase-path ， 当用户访问云存储内的 /tencentcloud.png 时，实际访问的完整路径是：/my-cloudbase-path/tencentcloud.png
   */
  BasePath: string
  /**
   * 是否启用外部存储
   */
  Enabled?: boolean
}

/**
 * 合法域名
 */
export interface AuthDomain {
  /**
   * 域名ID
   */
  Id?: string
  /**
   * 域名
   */
  Domain?: string
  /**
   * 域名类型。包含以下取值：
<li>SYSTEM</li>
<li>USER</li>
   */
  Type?: string
  /**
   * 状态。包含以下取值：
<li>ENABLE</li>
<li>DISABLE</li>
   */
  Status?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
}

/**
 * 云日志服务相关信息
 */
export interface LogServiceInfo {
  /**
   * log名
   */
  LogsetName?: string
  /**
   * log-id
   */
  LogsetId?: string
  /**
   * topic名
   */
  TopicName?: string
  /**
   * topic-id
   */
  TopicId?: string
  /**
   * cls日志所属地域
   */
  Region?: string
  /**
   * topic保存时长 默认7天
   */
  Period?: number
}

/**
 * DescribeClient请求参数结构体
 */
export interface DescribeClientRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 客户端的唯一标识符（Client ID），在 OAuth/OIDC 授权流程中作为 client_id 参数使用，创建后不可修改，一般使用环境id
   */
  Id: string
}

/**
 * DescribeHostingDomainTask返回参数结构体
 */
export interface DescribeHostingDomainTaskResponse {
  /**
   * todo/doing/done/error
   */
  Status?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAuthDomain请求参数结构体
 */
export interface DeleteAuthDomainRequest {
  /**
   * 开发者的环境ID
   */
  EnvId: string
  /**
   * 域名ID列表，支持批量传递
   */
  DomainIds: Array<string>
}

/**
 * CreateHTTPServiceRoute返回参数结构体
 */
export interface CreateHTTPServiceRouteResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 索引信息
 */
export interface IndexInfo {
  /**
   * 索引名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 索引大小，单位: 字节
注意：此字段可能返回 null，表示取不到有效值。
   */
  Size?: number
  /**
   * 索引键值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Keys?: Array<Indexkey>
  /**
   * 索引使用信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Accesses?: IndexAccesses
  /**
   * 是否为唯一索引
注意：此字段可能返回 null，表示取不到有效值。
   */
  Unique?: boolean
}

/**
 * ModifyClient请求参数结构体
 */
export interface ModifyClientRequest {
  /**
   * 客户端所属的云开发环境 ID，用于标识该应用归属的云开发环境。不同环境之间的应用数据相互隔离。
   */
  EnvId: string
  /**
   * 需要修改的客户端唯一标识符（Client ID），在 OAuth/OIDC 授权流程中作为 client_id 参数使用。该字段为定位参数，仅用于指定目标客户端，不可修改。
   */
  Id: string
  /**
   * Refresh Token 的有效期，单位为秒。超过该时间后 Refresh Token 将失效，用户需重新登录。取值范围：1800~2592000（即 30 分钟至 30 天），超出上限将被截断为 2592000。默认值为 2592000（即 30 天）。注意：当该值 ≤ 7200 时，AccessTokenExpiresIn 将被自动设为该值减去 660 秒。
   */
  RefreshTokenExpiresIn?: number
  /**
   * 单个用户在该应用下允许同时登录的最大会话数量。取值范围：-1~50。特殊值说明：-1 表示不限制设备数；0 表示按客户端 User-Agent 区分设备（相同 User-Agent 视为同一设备）；1~50 为精确的最大会话数限制，超出限制后最早登录的会话将被自动踢出。不传则保持原有配置不变。
   */
  MaxDevice?: number
  /**
   * Access Token 的有效期，单位为秒。超过该时间后 Access Token 将失效，需使用 Refresh Token 重新换取。最小有效值为 1800 秒（小于 1800 将被忽略，使用默认值），默认值为 7200（即 2 小时）。该值应小于 RefreshTokenExpiresIn。
   */
  AccessTokenExpiresIn?: number
}

/**
 * 三方认证出参映射。如果您的对接方不标准，则可以使用这个参数。默认情况下，该参数可以为空。比如：microsoft, github,google,apple 接入，这些参数为空，但是国内的腾讯，新浪等则需要配置该参数。原因主要是：腾讯等公司在实现oauth时，未能完全遵循oauth标准。
 */
export interface ProviderResponseParametersMap {
  /**
   * 用户唯一标识（sub）的映射字段名。对应 OIDC 标准中的 sub 字段，值为第三方平台返回的用户信息 JSON 中表示用户 ID 的字段路径。例如github平台填sub。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Sub?: string
  /**
   * 用户名称（name）的映射字段名。对应 OIDC 标准中的 name 字段，值为第三方平台返回的用户信息 JSON 中表示用户昵称或姓名的字段路径。例如github平台填 name。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 用户头像（picture）的映射字段名。对应 OIDC 标准中的 picture 字段，值为第三方平台返回的用户信息 JSON 中表示用户头像 URL 的字段路径。需要公网可访问的url。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Picture?: string
  /**
   * 用户登录名（username）的映射字段名。对应 OIDC 标准中的 preferred_username 字段，值为第三方平台返回的用户信息 JSON 中表示用户唯一登录名的字段, 例如可使用sub或email等唯一值的字段。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Username?: string
  /**
   * 用户邮箱（email）的映射字段名。对应 OIDC 标准中的 email 字段，值为第三方平台返回的用户信息 JSON 中表示用户邮箱地址的字段。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Email?: string
  /**
   * 用户手机号（phone_number）的映射字段名。对应 OIDC 标准中的 phone_number 字段，值为第三方平台返回的用户信息 JSON 中表示用户手机号的字段。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PhoneNumber?: string
  /**
   * 用户角色/分组（groups）的映射字段名。对应 OIDC 标准中的 groups 字段，值为第三方平台返回的用户信息 JSON 中表示用户所属角色或分组的字段路径。支持字符串数组类型的返回值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Groups?: string
}

/**
 * DescribeCloudBaseBuildService请求参数结构体
 */
export interface DescribeCloudBaseBuildServiceRequest {
  /**
   * 环境id
   */
  EnvId: string
  /**
   * 服务名
   */
  ServiceName: string
  /**
   * build类型,枚举值有: cloudbaserun, framework-ci
   */
  CIBusiness?: string
  /**
   * 服务版本
   */
  ServiceVersion?: string
  /**
   * 文件后缀
   */
  Suffix?: string
}

/**
 * SearchClsLog请求参数结构体
 */
export interface SearchClsLogRequest {
  /**
   * 环境唯一ID
   */
  EnvId: string
  /**
   * 查询起始时间条件
   */
  StartTime: string
  /**
   * 查询结束时间条件
   */
  EndTime: string
  /**
   * 查询语句， 例如查询云函数：(src:app OR src:system) AND log:\"START RequestId*\"，  聚合云函数请求状态：* | select request_id, max(status_code) as status  where ((request_id='44738f94-16dd-11f1-****' AND retry_num=0) AND retry_num=0)) AND status_code!=202 group by request_id, retry_num 查询云数据库[文档型]：module:database， 查询云数据库[文档型]事件：module:database AND eventType:(MongoSlowQuery)，MongoSlowQuery为文档型数据库慢查询事件 查询云数据库[SQL型]：module:rdb， 查询云数据库[SQL型]事件：module:rdb AND eventType:(MysqlFreeze OR MysqlRecover OR MysqlSlowQuery)，MysqlFreeze为mysql数据库冻结事件、MysqlRecover为mysql数据库恢复事件、MysqlSlowQuery为mysql数据库慢查询事件 查询审批流：module:workflow， 查询模型：module:model， 查询用户权限：module:auth， 查询大模型：module:llm AND logType:llm-tracelog 查询网关服务调用：logType:accesslog 查询应用发布/删除事件：module:app AND eventType:(AppProdPub OR AppProdDel)，AppProdPub为应用发布事件，AppProdDel为应用删除事件 以上仅为示例语句，实际使用时请根据具体日志内容进行调整，查询语句需严格遵循CLS（Cloud Log Service）语法规范 详细的语法规则请参考官方档：https://cloud.tencent.com/document/product/614/47044
   */
  QueryString: string
  /**
   * 单次要返回的日志条数，单次返回的最大条数为100
   */
  Limit: number
  /**
   * 加载更多使用，透传上次返回的 context 值，获取后续的日志内容，通过游标最多可获取10000条，请尽可能缩小时间范围
   */
  Context?: string
  /**
   * 按时间排序 asc（升序）或者 desc（降序），默认为 desc
   */
  Sort?: string
  /**
   * 是否使用Lucene语法，默认为false
   */
  UseLucene?: boolean
}

/**
 * InquireVmPrice请求参数结构体
 */
export interface InquireVmPriceRequest {
  /**
   * 服务器类型：
LightHouse = 轻量云服务器
CVM = 云服务器
   */
  Type: string
  /**
   * 轻量云服务器套餐ID。
当Type=LightHouse时必传
   */
  LightHouseBundleId?: string
  /**
   * 轻量云服务器镜像ID。当Type=LightHouse时必传
   */
  LightHouseBlueprintId?: string
}

/**
 * CheckTcbService请求参数结构体
 */
export type CheckTcbServiceRequest = null

/**
 * 创建或修改HTTP访问服务输入的域名信息，修改HTTP访问服务域名时对应字段不传参数表示不需要修改。
 */
export interface HTTPServiceDomainParam {
  /**
   * 域名。全局唯一。如果域名在其他环境下占用或者腾讯云CDN占用，可能会导致创建失败
   */
  Domain: string
  /**
   * 绑定类型。默认DIRECT。DIRECT: 直连到HTTP访问服务， CDN: 接入云开发CDN，CUSTOM: 自定义接入类型（其他CDN或者WAF）
   */
  AccessType?: string
  /**
   * 证书ID。当前账户下SSL平台的证书ID
   */
  CertId?: string
  /**
   * 协议类型。默认HTTP_AND_HTTPS。HTTP_AND_HTTPS: 同时开启http和https，HTTP_TO_HTTPS: http重定向成https，HTTPS_TO_HTTP: https重定向成http。如果未配置证书无法访问https或者进行重定向
   */
  Protocol?: string
  /**
   * 自定义CNAME。对应AccessType: Custom
   */
  CustomCname?: string
  /**
   * 域名开启状态，不传默认开启
   */
  Enable?: boolean
  /**
   * 创建/修改的HTTP访问服务路由列表。如果不传，仅创建或修改域名信息。列表最大支持传入20个
   */
  Routes?: Array<HTTPServiceRouteParam>
}

/**
 * FlexDB数据库权限信息
 */
export interface PermissionInfo {
  /**
   * "READONLY",   //公有读，私有写。所有用户可读，仅创建者及管理员可写  
"PRIVATE",    //私有读写，仅创建者及管理员可读写  
"ADMINWRITE", //所有用户可读，仅管理员可写  
"ADMINONLY",  //仅管理员可操作  
"CUSTOM",     // 安全规则
   */
  AclTag: string
  /**
   * 云开发环境ID
   */
  EnvId: string
  /**
   * 自定义规则
   */
  Rule?: string
}

/**
 * 分页信息
 */
export interface Pager {
  /**
   * 分页偏移量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Offset?: number
  /**
   * 每页返回记录数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Limit?: number
  /**
   * 文档集合总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
}

/**
 * DeleteVmInstance返回参数结构体
 */
export interface DeleteVmInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 标签键值对
 */
export interface Tag {
  /**
   * 标签键
   */
  Key: string
  /**
   * 标签值
   */
  Value: string
}

/**
 * CreateEnv请求参数结构体
 */
export interface CreateEnvRequest {
  /**
   * 环境别名。

### 格式要求
- 可选字符： 小写字母(a~z)、数字、减号(-)
- 不能以 减号(-) 开头或结尾
- 不能有连个连续的 减号(-)
- 长度不超过20位
示例值：cloud
   */
  Alias: string
  /**
   * 云开发环境套餐Id。
对于云开发环境套餐，可通过 [DescribeBaasPackageList](https://cloud.tencent.com/document/product/876/78167) 接口获取，对应其出参的PackageName。
   */
  PackageId: string
  /**
   * 资源类型。代表新购环境时需要发货哪些资源。
可取值以及含义：
- flexdb : 表示文档型数据库
- storage : 表示云存储
- function : 表示云函数

**该字段不可为空**
   */
  Resources: Array<string>
  /**
   * 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24。
默认值为1，即1个月。
   */
  Period?: number
  /**
   * 是否自动选择代金券支付。
   */
  AutoVoucher?: boolean
  /**
   * 环境标签。
可取值通过接口 [tag:DescribeTags](https://cloud.tencent.com/document/product/651/35316) 可获取到。
不传或为空则默认不打任何标签。
   */
  Tags?: Array<Tag>
  /**
   * 自动续费标识。取值范围：
- NOTIFY_AND_AUTO_RENEW：通知过期且自动续费
- NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费（需要手动续费，可通过接口 [RenewEnv](https://cloud.tencent.com/document/product/876/128590) 来续费）

默认取值：NOTIFY_AND_MANUAL_RENEW。
若该参数指定为NOTIFY_AND_AUTO_RENEW（即：自动续费），在账户余额充足的情况下，实例到期后将按月自动续费；但如果账户余额不足，将无法自动续费。请留意腾讯云短信和邮件通知。
   */
  RenewFlag?: string
}

/**
 * DeleteHTTPServiceRoute请求参数结构体
 */
export interface DeleteHTTPServiceRouteRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 域名
   */
  Domain: string
  /**
   * 路径列表。为空则表示删除此域名和所有路由
   */
  Paths?: Array<string>
}

/**
 * RunCommands请求参数结构体
 */
export interface RunCommandsRequest {
  /**
   * 待执行命令
   */
  MgoCommands: Array<MgoCommandParam>
  /**
   * 实例ID
   */
  Tag?: string
  /**
   * 环境id
   */
  EnvId?: string
  /**
   * Mongo连接器实例信息
   */
  MongoConnector?: MongoConnector
}

/**
 * 索引命中信息
 */
export interface IndexAccesses {
  /**
   * 索引命中次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Ops?: number
  /**
   * 命中次数从何时开始计数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Since?: string
}

/**
 * MySql 集群详情
 */
export interface MySQLClusterDetail {
  /**
   * 集群ID
   */
  DbClusterId?: string
  /**
   * 网络详情
   */
  NetInfo?: MySQLNetDetail
  /**
   * 数据库详情
   */
  DbInfo?: ClusterDetail
}

/**
 * DescribeAuthDomains请求参数结构体
 */
export interface DescribeAuthDomainsRequest {
  /**
   * 环境ID
   */
  EnvId: string
}

/**
 * DescribeVmSpec返回参数结构体
 */
export interface DescribeVmSpecResponse {
  /**
   * 规格列表
   */
  SpecList?: Array<VMSpec>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 多语言文字，在 Locale 中 展示的 Message
 */
export interface MessageLocalized {
  /**
   * 字符串
   */
  Message: string
  /**
   * 在该语言中
   */
  Locale: string
}

/**
 * 安全网关自定义配置
 */
export interface WxGatewayCustomConfig {
  /**
   * 是否开启x-real-ip
   */
  IsOpenXRealIp?: boolean
  /**
   * 封禁配置
   */
  BanConfig?: BanConfig
  /**
   * 获取源ip方式，PPV1(Proxy Protocol V1)、PPV2(Proxy Protocol V2)、TOA(tcp option address)
   */
  SourceIpType?: string
  /**
   * 日志信息
   */
  LogConfig?: CustomLogConfig
  /**
   * 是否开启http1.0
   */
  IsAcceptHttpOne?: boolean
}

/**
 * CreateUser请求参数结构体
 */
export interface CreateUserRequest {
  /**
   * 环境id
   */
  EnvId: string
  /**
   * 用户名，用户名规则：1. 长度1-64字符 2. 只能包含大小写英文字母、数字和符号 . _ - 3. 只能以字母或数字开头 4. 不能重复
   */
  Name: string
  /**
   * 用户ID，最多64字符，如不传则系统自动生成
   */
  Uid?: string
  /**
   * 用户类型：internalUser-内部用户、externalUser-外部用户，默认internalUser（内部用户）
   */
  Type?: string
  /**
   * 密码，传入Uid时密码可不传。密码规则：1. 长度8-32字符（推荐12位以上） 2. 不能以特殊字符开头 3. 至少包含以下四项中的三项：小写字母a-z、大写字母A-Z、数字0-9、特殊字符()!@#$%^&*\|?><_-
   */
  Password?: string
  /**
   * 用户状态：ACTIVE（激活）、BLOCKED（冻结），默认激活
   */
  UserStatus?: string
  /**
   * 用户昵称，长度2-64字符
   */
  NickName?: string
  /**
   * 手机号，不能重复
   */
  Phone?: string
  /**
   * 邮箱地址，不能重复
   */
  Email?: string
  /**
   * 头像链接，可访问的公网URL
   */
  AvatarUrl?: string
  /**
   * 用户描述，最多200字符
   */
  Description?: string
}

/**
 * DescribeTable返回参数结构体
 */
export interface DescribeTableResponse {
  /**
   * 索引相关信息
   */
  Indexes?: Array<IndexInfo>
  /**
   * 索引个数
   */
  IndexNum?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDatabaseACL返回参数结构体
 */
export interface DescribeDatabaseACLResponse {
  /**
   * 权限标签。包含以下取值：
<li> READONLY：所有用户可读，仅创建者和管理员可写</li>
<li> PRIVATE：仅创建者及管理员可读写</li>
<li> ADMINWRITE：所有用户可读，仅管理员可写</li>
<li> ADMINONLY：仅管理员可读写</li>
   */
  AclTag?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 虚拟主机价格
 */
export interface VMPrice {
  /**
   * 价格货币单位。取值范围CNY:人民币。USD:美元。
   */
  Currency?: string
  /**
   * 原始价格
   */
  OriginalPrice?: number
  /**
   * 折扣率
   */
  Discount?: number
  /**
   * 折扣后的价格
   */
  DiscountPrice?: number
  /**
   * 折扣前每天资源点
   */
  OriginalCredits?: number
  /**
   * 折扣后每天所需资源点
   */
  DiscountCredits?: number
}

/**
 * DeleteProvider请求参数结构体
 */
export interface DeleteProviderRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 认证源ID，比如：github, 格式必须为：2-32位小写英文字符串或数字
   */
  Id: string
}

/**
 * DescribeVmSpec请求参数结构体
 */
export interface DescribeVmSpecRequest {
  /**
   * 类型：
LightHouse = 轻量云服务器
CVM = 云服务器
   */
  Type?: string
}

/**
 * ReinstateEnv返回参数结构体
 */
export interface ReinstateEnvResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyProvider返回参数结构体
 */
export interface ModifyProviderResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyEnv请求参数结构体
 */
export interface ModifyEnvRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 环境备注名，要以a-z开头，不能包含 a-zA-z0-9- 以外的字符
   */
  Alias?: string
}

/**
 * ModifyUser请求参数结构体
 */
export interface ModifyUserRequest {
  /**
   * 环境id
   */
  EnvId: string
  /**
   * 用户Id, 不做修改
   */
  Uid: string
  /**
   * 用户名，用户名规则：1. 长度1-64字符 2. 只能包含大小写英文字母、数字和符号 . _ - 3. 只能以字母或数字开头 4. 不能重复，不传该字段或传空字符不修改
   */
  Name?: string
  /**
   * 用户类型：internalUser-内部用户、externalUser-外部用户，不传该字段或传空字符串不修改。
   */
  Type?: string
  /**
   * 密码，传入Uid时密码可不传。密码规则：1. 长度8-32字符（推荐12位以上） 2. 不能以特殊字符开头 3. 至少包含以下四项中的三项：小写字母a-z、大写字母A-Z、数字0-9、特殊字符()!@#$%^&*\|?><_-，不传该字段或传空字符串不修改
   */
  Password?: string
  /**
   * 用户状态：ACTIVE（激活）、BLOCKED（冻结），默认冻结，不传该字段或传空字符串不修改
   */
  UserStatus?: string
  /**
   * 用户昵称，长度2-64字符，不传该字段不修改，传空字符修改为空
   */
  NickName?: string
  /**
   * 手机号，11位数字，不传该字段不修改，传空字符串修改为空
   */
  Phone?: string
  /**
   * 邮箱地址，不传该字段不修改，传空字符修改为空
   */
  Email?: string
  /**
   * 头像链接，可访问的公网URL，不传该字段不修改，传空字符串修改为空
   */
  AvatarUrl?: string
  /**
   * 用户描述，最多200字符，不传该字段不修改，传空字符修改为空
   */
  Description?: string
}

/**
 * 创建或修改HTTP访问服务输入的路由信息，修改HTTP访问服务路由信息时对应字段不传参数表示不用修改。
 */
export interface HTTPServiceRouteParam {
  /**
   * 路径
   */
  Path: string
  /**
   * 上游服务类型。创建时必填，修改时可选填。SCF: 云函数，CBR: 云托管，STATIC_STORE: 静态托管，WEB_SCF: WEB云函数，LH: Lighthouse
   */
  UpstreamResourceType?: string
  /**
   * 上游服务名。创建时必填，修改时可选填
   */
  UpstreamResourceName?: string
  /**
   * 路径重写
   */
  PathRewrite?: HTTPServicePathRewrite
  /**
   * 是否开启安全域名。默认开启
   */
  EnableSafeDomain?: boolean
  /**
   * 是否开启身份认证。默认关闭
   */
  EnableAuth?: boolean
  /**
   * 是否开启路径透传。默认关闭
   */
  EnablePathTransmission?: boolean
  /**
   * QPS限频策略
   */
  QPSPolicy?: HTTPServiceRouteQPSPolicy
  /**
   * 是否开启路由
   */
  Enable?: boolean
}

/**
 * InquireVmPrice返回参数结构体
 */
export interface InquireVmPriceResponse {
  /**
   * 价格货币单位。取值范围CNY:人民币。USD:美元。
   */
  Currency?: string
  /**
   * 原价（主机原始每月价格）
   */
  OriginalPrice?: number
  /**
   * 折扣率
   */
  Discount?: number
  /**
   * 折扣后每月价格
   */
  DiscountPrice?: number
  /**
   * 折扣前每天资源点
   */
  OriginalCredits?: number
  /**
   * 折扣后每天资源点
   */
  DiscountCredits?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 创建用户返回结果
 */
export interface CreateUserResp {
  /**
   * 用户ID
   */
  Uid?: string
}

/**
 * ModifyLoginConfig返回参数结构体
 */
export interface ModifyLoginConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateApiKey请求参数结构体
 */
export interface CreateApiKeyRequest {
  /**
   * 环境 ID，用于标识该密钥归属的云开发环境，不同环境之间的数据相互隔离
   */
  EnvId: string
  /**
   * 密钥类型。可选值：api_key（服务端调用使用的 API 密钥，具有完整权限，请勿暴露在客户端）、publish_key（客户端使用的公开密钥，权限受限，可安全用于前端或移动端）。
   */
  KeyType: string
  /**
   * 密钥的自定义名称，用于在管理列表中标识和区分不同的密钥，建议填写能体现用途或归属的描述性名称，例如：server-prod、mobile-test
   */
  KeyName?: string
  /**
   * 密钥的有效期，单位为秒，最短不得低于 7200 秒。超过有效期后密钥将自动失效。不设置或设置为 0 则表示永不过期，建议根据安全需求合理设置有效期
   */
  ExpireIn?: number
}
