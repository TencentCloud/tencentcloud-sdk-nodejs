/**
 * DescribeCaptchaOperData返回参数结构体
 */
export interface DescribeCaptchaOperDataResponse {
    /**
      * 成功返回 0 其它失败
      */
    CaptchaCode: number;
    /**
      * 返回信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    CaptchaMsg: string;
    /**
      * 用户操作数据
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data: CaptchaOperDataRes;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCaptchaOperData方法 拦截情况type = 2 返回的数据结构
 */
export interface CaptchaOperDataInterceptUnit {
    /**
      * 时间
      */
    DateKey: string;
    /**
      * 停止验证数量
      */
    AllStopCnt: number;
    /**
      * 图片停止加载数量
      */
    PicStopCnt: number;
    /**
      * 策略拦截数量
      */
    StrategyStopCnt: number;
}
/**
 * DescribeCaptchaOperData方法 尝试次数分布 type = 4
 */
export interface CaptchaOperDataTryTimesDistributeUnit {
    /**
      * 尝试次数
      */
    TryCount: number;
    /**
      * 用户请求数量
      */
    UserCount: number;
}
/**
 * DescribeCaptchaMiniOperData返回参数结构体
 */
export interface DescribeCaptchaMiniOperDataResponse {
    /**
      * 成功返回 0 其它失败
      */
    CaptchaCode: number;
    /**
      * 返回信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    CaptchaMsg: string;
    /**
      * 用户操作数据
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data: CaptchaOperDataRes;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCaptchaMiniDataSum返回参数结构体
 */
export interface DescribeCaptchaMiniDataSumResponse {
    /**
      * 请求总量
注意：此字段可能返回 null，表示取不到有效值。
      */
    GetSum?: number;
    /**
      * 请求验证成功量
注意：此字段可能返回 null，表示取不到有效值。
      */
    VfySuccSum?: number;
    /**
      * 请求验证量
注意：此字段可能返回 null，表示取不到有效值。
      */
    VfySum?: number;
    /**
      * 拦截攻击量
注意：此字段可能返回 null，表示取不到有效值。
      */
    AttackSum?: number;
    /**
      * 返回信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    CaptchaMsg?: string;
    /**
      * 成功返回0  其它失败
注意：此字段可能返回 null，表示取不到有效值。
      */
    CaptchaCode?: number;
    /**
      * 票据校验总量
注意：此字段可能返回 null，表示取不到有效值。
      */
    CheckTicketSum?: number;
    /**
      * 票据验证通过量
注意：此字段可能返回 null，表示取不到有效值。
      */
    TicketThroughputSum?: number;
    /**
      * 票据验证拦截量
注意：此字段可能返回 null，表示取不到有效值。
      */
    TicketInterceptSum?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateCaptchaAppIdInfo请求参数结构体
 */
export interface UpdateCaptchaAppIdInfoRequest {
    /**
      * 验证码应用ID
      */
    CaptchaAppId: number;
    /**
      * 应用名
      */
    AppName: string;
    /**
      * 域名限制
      */
    DomainLimit: string;
    /**
      * 场景类型
      */
    SceneType: number;
    /**
      * 验证码类型
      */
    CapType: number;
    /**
      * 风险级别
      */
    EvilInterceptGrade: number;
    /**
      * 智能检测
      */
    SmartVerify: number;
    /**
      * 开启智能引擎
      */
    SmartEngine: number;
    /**
      * web风格
      */
    SchemeColor: string;
    /**
      * 语言
      */
    CaptchaLanguage: number;
    /**
      * 告警邮箱
      */
    MailAlarm: string;
    /**
      * 是否全屏
      */
    TopFullScreen: number;
    /**
      * 流量限制
      */
    TrafficThreshold: number;
}
/**
 * 拦截策略返回信息
 */
export interface OutputManageMarketingRiskValue {
    /**
      * 账号 ID。对应输入参数： AccountType 是 1 时，对应 QQ 的 OpenID。
AccountType 是 2 时，对应微信的 OpenID/UnionID。
AccountType 是 4 时，对应手机号。
AccountType 是 8 时，对应 imei、idfa、imeiMD5 或者 idfaMD5。
AccountType 是 0 时，对应账号信息。
AccountType 是 10004 时，对应手机号的 MD5。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserId: string;
    /**
      * 操作时间戳，单位秒（对应输入参数）。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PostTime: number;
    /**
      * 对应输入参数，AccountType 是 QQ 或微信开放账号时，用于标识 QQ 或微信用户登录 后关联业务自身的账号 ID。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AssociateAccount: string;
    /**
      * 业务详情。 注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserIp: string;
    /**
      * 风险值 pass : 无恶意
review：需要人工审核
reject：拒绝，高风险恶意
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RiskLevel: string;
    /**
      * 风险类型，请查看下面详细说明 注意：此字段可能返回 null，表示取不到有效值。
账号风险
        账号信用低	1	账号近期存在因恶意被处罚历史，网络低活跃，被举报等因素
    疑似 低活跃账号	11	账号活跃度与正常用户有差异
    垃圾账号	2	疑似批量注册小号，近期存在严重违规或大量举报
    疑似小号	21	账号有疑似线上养号，小号等行为
    疑似 违规账号	22	账号曾有违规行为、曾被举报过、曾因违规被处罚过等
    无效账号	3	送检账号参数无法成功解析，请检查微信 openid 是否有
    黑名单	4	该账号在业务侧有过拉黑记录
    白名单 	5	业务自行有添加过白名单记录
行为风险
        批量操作	101	存在 ip/设备/环境等因素的聚集性异常
    疑似 IP 属性聚集 	1011	出现 IP 聚集
    疑似 设备属性聚集 	1012	出现设备聚集
    自动机 	103	疑似自动机批量请求
    微信登录态无效 	104	检查 wxtoken 参数，是否已经失效
环境风险
        环境异常 	201	操作 ip/设备/环境存在异常。当前 ip 为非常用 ip 或恶意 ip 段
    疑似 非常用IP请求 	2011	当前请求 IP 非该账号常用 IP
    疑似 IP 异常 	2012	使用 idc 机房 ip 或 使用代理 ip 或 使用恶意 ip
    非公网有效 ip 	205	传进来的 IP 地址为内网 ip 地址或者 ip 保留地
注意：此字段可能返回 null，表示取不到有效值。
      */
    RiskType: Array<number>;
}
/**
 * DescribeCaptchaOperData 接口 返回数据类型集合
 */
export interface CaptchaOperDataRes {
    /**
      * 验证码加载耗时数据返回
注意：此字段可能返回 null，表示取不到有效值。
      */
    OperDataLoadTimeUnitArray: Array<CaptchaOperDataLoadTimeUnit>;
    /**
      * 验证码拦截情况数据返回
注意：此字段可能返回 null，表示取不到有效值。
      */
    OperDataInterceptUnitArray: Array<CaptchaOperDataInterceptUnit>;
    /**
      * 验证码尝试次数数据返回
注意：此字段可能返回 null，表示取不到有效值。
      */
    OperDataTryTimesUnitArray: Array<CaptchaOperDataTryTimesUnit>;
    /**
      * 验证码尝试次数分布数据返回
注意：此字段可能返回 null，表示取不到有效值。
      */
    OperDataTryTimesDistributeUnitArray: Array<CaptchaOperDataTryTimesDistributeUnit>;
}
/**
 * DescribeCaptchaTicketData 返回的数据结构
 */
export interface TicketInterceptUnit {
    /**
      * 时间
      */
    DateKey: string;
    /**
      * 票据验证拦截量
      */
    Intercept: number;
}
/**
 * DescribeCaptchaUserAllAppId请求参数结构体
 */
export declare type DescribeCaptchaUserAllAppIdRequest = null;
/**
 * DescribeCaptchaMiniData返回参数结构体
 */
export interface DescribeCaptchaMiniDataResponse {
    /**
      * 返回码 0 成功 其它失败
      */
    CaptchaCode: number;
    /**
      * 数据数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data: Array<CaptchaQueryData>;
    /**
      * 返回信息描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    CaptchaMsg: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateCaptchaAppIdInfo返回参数结构体
 */
export interface UpdateCaptchaAppIdInfoResponse {
    /**
      * 返回码 0 成功，其它失败
      */
    CaptchaCode?: number;
    /**
      * 返回操作信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    CaptchaMsg?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCaptchaMiniRiskResult请求参数结构体
 */
export interface DescribeCaptchaMiniRiskResultRequest {
    /**
      * 固定填值：9（滑块验证码）
      */
    CaptchaType: number;
    /**
      * 验证码返回给用户的票据
      */
    Ticket: string;
    /**
      * 业务侧获取到的验证码使用者的外网IP
      */
    UserIp: string;
    /**
      * 验证码应用APPID
      */
    CaptchaAppId: number;
    /**
      * 用于服务器端校验验证码票据的验证密钥，请妥善保密，请勿泄露给第三方
      */
    AppSecretKey: string;
    /**
      * 业务 ID，网站或应用在多个业务中使用此服务，通过此 ID 区分统计数据
      */
    BusinessId?: number;
    /**
      * 场景 ID，网站或应用的业务下有多个场景使用此服务，通过此 ID 区分统计数据
      */
    SceneId?: number;
    /**
      * mac 地址或设备唯一标识
      */
    MacAddress?: string;
    /**
      * 手机设备号
      */
    Imei?: string;
    /**
      * 验证场景：1 活动防刷场景，2 登录保护场景，3 注册保护场景。根据需求选择场景参数。
      */
    SceneCode?: number;
    /**
      * 用户操作来源的微信开放账号
      */
    WeChatOpenId?: string;
}
/**
 * 用户注册的APPID和应用名称对象
 */
export interface CaptchaUserAllAppId {
    /**
      * 验证码应用ID
      */
    CaptchaAppId: number;
    /**
      * 注册应用名称
      */
    AppName: string;
    /**
      * 腾讯云APPID
      */
    TcAppId: number;
    /**
      * 渠道信息
      */
    ChannelInfo: string;
}
/**
 * DescribeCaptchaDataSum返回参数结构体
 */
export interface DescribeCaptchaDataSumResponse {
    /**
      * 请求总量
      */
    GetSum?: number;
    /**
      * 请求验证成功量
      */
    VfySuccSum?: number;
    /**
      * 请求验证量
      */
    VfySum?: number;
    /**
      * 拦截攻击量
      */
    AttackSum?: number;
    /**
      * 返回信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    CaptchaMsg?: string;
    /**
      * 成功返回0  其它失败
      */
    CaptchaCode?: number;
    /**
      * 票据校验量
      */
    CheckTicketSum?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCaptchaTicketData请求参数结构体
 */
export interface DescribeCaptchaTicketDataRequest {
    /**
      * 验证码应用ID
      */
    CaptchaAppId: number;
    /**
      * 查询开始时间 例如：20200909
      */
    Start: number;
    /**
      * 查询结束时间 例如：20220314
      */
    End?: number;
}
/**
 * DescribeCaptchaMiniDataSum请求参数结构体
 */
export interface DescribeCaptchaMiniDataSumRequest {
    /**
      * 验证码应用ID
      */
    CaptchaAppId: number;
    /**
      * 查询开始时间
      */
    Start: number;
    /**
      * 查询结束时间
      */
    End: number;
}
/**
 * DescribeCaptchaOperData操作数据查询尝试次数 type = 3
 */
export interface CaptchaOperDataTryTimesUnit {
    /**
      * 时间
      */
    DateKey: string;
    /**
      * 平均尝试次数
      */
    CntPerPass: Array<number>;
    /**
      * market平均尝试次数
      */
    MarketCntPerPass: number;
}
/**
 * DescribeCaptchaOperData请求参数结构体
 */
export interface DescribeCaptchaOperDataRequest {
    /**
      * 验证码应用ID
      */
    CaptchaAppId: number;
    /**
      * 查询开始时间
      */
    Start: number;
    /**
      * 查询类型
      */
    Type: number;
    /**
      * 查询结束时间
      */
    End?: number;
}
/**
 * DescribeCaptchaDataSum请求参数结构体
 */
export interface DescribeCaptchaDataSumRequest {
    /**
      * 验证码应用ID
      */
    CaptchaAppId: number;
    /**
      * 查询开始时间
      */
    Start: number;
    /**
      * 查询结束时间
      */
    End: number;
}
/**
 * DescribeCaptchaMiniRiskResult返回参数结构体
 */
export interface DescribeCaptchaMiniRiskResultResponse {
    /**
      * 1 ticket verification succeeded 票据验证成功
7 CaptchaAppId does not match 票据与验证码应用APPID不匹配
8 ticket expired 票据超时
10 ticket format error 票据格式不正确
15 ticket decryption failed 票据解密失败
16 CaptchaAppId wrong format 检查验证码应用APPID错误
21 ticket error 票据验证错误
25 bad visitor 策略拦截
26 system internal error 系统内部错误
100 param err 参数校验错误
      */
    CaptchaCode: number;
    /**
      * 状态描述及验证错误信息
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CaptchaMsg: string;
    /**
      * 拦截策略返回信息
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ManageMarketingRiskValue: OutputManageMarketingRiskValue;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCaptchaTicketData 返回的数据结构
 */
export interface TicketAmountUnit {
    /**
      * 时间
      */
    DateKey: string;
    /**
      * 票据验证总量
      */
    Amount: number;
}
/**
 * 该类型为DescribeCaptchaData 方法返回数据类型
 */
export interface CaptchaQueryData {
    /**
      * 数量
      */
    Cnt: number;
    /**
      * 时间
      */
    Date: string;
}
/**
 * DescribeCaptchaTicketData 返回的数据结构
 */
export interface TicketThroughUnit {
    /**
      * 时间
      */
    DateKey: string;
    /**
      * 票据验证的通过量
      */
    Through: number;
}
/**
 * DescribeCaptchaData返回参数结构体
 */
export interface DescribeCaptchaDataResponse {
    /**
      * 返回码 0 成功 其它失败
      */
    CaptchaCode?: number;
    /**
      * 数据数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data?: Array<CaptchaQueryData>;
    /**
      * 返回信息描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    CaptchaMsg?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCaptchaResult请求参数结构体
 */
export interface DescribeCaptchaResultRequest {
    /**
      * 固定填值：9。可在控制台配置不同验证码类型。
      */
    CaptchaType: number;
    /**
      * 前端回调函数返回的用户验证票据
      */
    Ticket: string;
    /**
      * 业务侧获取到的验证码使用者的外网IP
      */
    UserIp: string;
    /**
      * 前端回调函数返回的随机字符串
      */
    Randstr: string;
    /**
      * 验证码应用ID。登录 [验证码控制台](https://console.cloud.tencent.com/captcha/graphical)，在验证列表的【密钥】列，即可查看到CaptchaAppId。
      */
    CaptchaAppId: number;
    /**
      * 验证码应用密钥。登录 [验证码控制台](https://console.cloud.tencent.com/captcha/graphical)，在验证列表的【密钥】列，即可查看到AppSecretKey。AppSecretKey属于服务器端校验验证码票据的密钥，请妥善保密，请勿泄露给第三方。
      */
    AppSecretKey: string;
    /**
      * 业务 ID，网站或应用在多个业务中使用此服务，通过此 ID 区分统计数据
      */
    BusinessId?: number;
    /**
      * 场景 ID，网站或应用的业务下有多个场景使用此服务，通过此 ID 区分统计数据
      */
    SceneId?: number;
    /**
      * mac 地址或设备唯一标识
      */
    MacAddress?: string;
    /**
      * 手机设备号
      */
    Imei?: string;
    /**
      * 是否返回前端获取验证码时间，取值1：需要返回
      */
    NeedGetCaptchaTime?: number;
}
/**
 * DescribeCaptchaResult返回参数结构体
 */
export interface DescribeCaptchaResultResponse {
    /**
      * 1 OK 验证通过
6 user code len error 验证码长度不匹配，请检查请求是否带Randstr参数，Randstr参数大小写是否有误
7 captcha no match 验证码答案不匹配/Randstr参数不匹配，请重新生成Randstr、Ticket进行校验
8 verify timeout 验证码签名超时，票据已过期，请重新生成Randstr、Ticket票进行校验
9 Sequnce repeat 验证码签名重放，票据重复使用，请重新生成Randstr、Ticket进行校验
10 Sequnce invalid 验证码签名序列
11 Cookie invalid 验证码cookie信息不合法，非法请求，可能存在不规范接入
12 sig len error 签名长度错误
13 verify ip no match ip不匹配，非法请求，可能存在不规范接入
15 decrypt fail 验证码签名解密失败，票据校验失败，请检查Ticket票据是否与前端返回Ticket一致
16 appid no match 验证码强校验appid错误，前端代码 data-appid 和后端 CaptchaAppId 所填写的值，必须和 验证码控制台 中【验证详情】>【基础配置】内的 AppID 一致,请检查CaptchaAppId是否为控制台基础配置界面系统分配的APPID
17 cmd no much 验证码系统命令不匹配
18 uin no match 号码不匹配
19 seq redirect 重定向验证
20 opt no vcode 操作使用pt免验证码校验错误
21 diff 差别，验证错误
该情况出现原因一般为，当验证码前端生成terror格式票据并进行后端票据校验时，用户网络较差，该情况下仍会返回可用票据，业务侧可以自行根据需要，进行票据生成或做其他处理。详情参见 [验证码Web前端接入-异常处理文档](https://cloud.tencent.com/document/product/1110/36841#.E5.BC.82.E5.B8.B8.E5.A4.84.E7.90.86)。
22 captcha type not match 验证码类型与拉取时不一致
23 verify type error 验证类型错误
24 invalid pkg 非法请求包
25 bad visitor 策略拦截
26 system busy 系统内部错误
100 param err appsecretkey 参数校验错误，CaptchaAppId 与对应 AppSecretKey 不一致，需检查 AppSecretKey 参数是否有误。其中 CaptchaAppId、 AppSecretKey 在 验证码控制台 的【验证详情】>【基础配置】中获取
104 Ticket Reuse 票据重复使用，同个票据验证多次，请重新生成Randstr、Ticket进行校验
      */
    CaptchaCode: number;
    /**
      * 状态描述及验证错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    CaptchaMsg: string;
    /**
      * [0,100]，恶意等级
注意：此字段可能返回 null，表示取不到有效值。
      */
    EvilLevel: number;
    /**
      * 前端获取验证码时间，时间戳格式
注意：此字段可能返回 null，表示取不到有效值。
      */
    GetCaptchaTime: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 操作数据查询方法DescribeCaptchaOperData 的返回结果，安全验证码加载耗时type = 1
 */
export interface CaptchaOperDataLoadTimeUnit {
    /**
      * 时间
      */
    DateKey: string;
    /**
      * Market加载时间
      */
    MarketLoadTime: number;
    /**
      * AppId加载时间
      */
    AppIdLoadTime: number;
}
/**
 * DescribeCaptchaMiniOperData请求参数结构体
 */
export interface DescribeCaptchaMiniOperDataRequest {
    /**
      * 验证码应用ID
      */
    CaptchaAppId: number;
    /**
      * 查询开始时间
      */
    Start: number;
    /**
      * 查询类型
      */
    Type: number;
    /**
      * 查询结束时间
      */
    End?: number;
}
/**
 * DescribeCaptchaAppIdInfo请求参数结构体
 */
export interface DescribeCaptchaAppIdInfoRequest {
    /**
      * 验证码应用注册APPID
      */
    CaptchaAppId: number;
}
/**
 * DescribeCaptchaAppIdInfo返回参数结构体
 */
export interface DescribeCaptchaAppIdInfoResponse {
    /**
      * 界面风格
      */
    SchemeColor?: string;
    /**
      * 语言
      */
    Language?: number;
    /**
      * 场景
      */
    SceneType?: number;
    /**
      * 防控风险等级
      */
    EvilInterceptGrade?: number;
    /**
      * 智能验证
      */
    SmartVerify?: number;
    /**
      * 智能引擎
      */
    SmartEngine?: number;
    /**
      * 验证码类型
      */
    CapType?: number;
    /**
      * 应用名称
      */
    AppName?: string;
    /**
      * 域名限制
      */
    DomainLimit?: string;
    /**
      * 邮件告警
注意：此字段可能返回 null，表示取不到有效值。
      */
    MailAlarm?: Array<string>;
    /**
      * 流量控制
      */
    TrafficThreshold?: number;
    /**
      * 加密key
      */
    EncryptKey?: string;
    /**
      * 是否全屏
      */
    TopFullScreen?: number;
    /**
      * 成功返回0 其它失败
      */
    CaptchaCode?: number;
    /**
      * 返回操作信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    CaptchaMsg?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCaptchaUserAllAppId返回参数结构体
 */
export interface DescribeCaptchaUserAllAppIdResponse {
    /**
      * 用户注册的所有Appid和应用名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data?: Array<CaptchaUserAllAppId>;
    /**
      * 成功返回 0  其它失败
      */
    CaptchaCode?: number;
    /**
      * 返回操作信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    CaptchaMsg?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCaptchaData请求参数结构体
 */
export interface DescribeCaptchaDataRequest {
    /**
      * 验证码应用ID
      */
    CaptchaAppId: number;
    /**
      * 查询开始时间
      */
    Start: number;
    /**
      * 查询结束时间
      */
    End: number;
    /**
      * 查询类型
      */
    Type: number;
}
/**
 * DescribeCaptchaMiniResult请求参数结构体
 */
export interface DescribeCaptchaMiniResultRequest {
    /**
      * 固定填值：9（滑块验证码）
      */
    CaptchaType: number;
    /**
      * 验证码返回给用户的票据
      */
    Ticket: string;
    /**
      * 业务侧获取到的验证码使用者的外网IP
      */
    UserIp: string;
    /**
      * 验证码应用ID。登录 [验证码控制台](https://console.cloud.tencent.com/captcha/graphical)，在验证列表的【密钥】列，即可查看到CaptchaAppId。
      */
    CaptchaAppId: number;
    /**
      * 验证码应用密钥。登录 [验证码控制台](https://console.cloud.tencent.com/captcha/graphical)，在验证列表的【密钥】列，即可查看到AppSecretKey。AppSecretKey属于服务器端校验验证码票据的密钥，请妥善保密，请勿泄露给第三方。
      */
    AppSecretKey: string;
    /**
      * 业务 ID，网站或应用在多个业务中使用此服务，通过此 ID 区分统计数据
      */
    BusinessId?: number;
    /**
      * 场景 ID，网站或应用的业务下有多个场景使用此服务，通过此 ID 区分统计数据
      */
    SceneId?: number;
    /**
      * mac 地址或设备唯一标识
      */
    MacAddress?: string;
    /**
      * 手机设备号
      */
    Imei?: string;
}
/**
 * DescribeCaptchaTicketData返回参数结构体
 */
export interface DescribeCaptchaTicketDataResponse {
    /**
      * 成功返回 0 其它失败
      */
    CaptchaCode: number;
    /**
      * 返回信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    CaptchaMsg: string;
    /**
      * 验证码票据信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data: CaptchaTicketDataRes;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCaptchaTicketData 接口 返回数据类型集合
 */
export interface CaptchaTicketDataRes {
    /**
      * 票据验证总量返回
      */
    TicketAmountArray: Array<TicketAmountUnit>;
    /**
      * 票据验证通过量返回
      */
    TicketThroughArray: Array<TicketThroughUnit>;
    /**
      * 票据验证拦截量返回
      */
    TicketInterceptArray: Array<TicketInterceptUnit>;
}
/**
 * DescribeCaptchaMiniResult返回参数结构体
 */
export interface DescribeCaptchaMiniResultResponse {
    /**
      * 1       ticket verification succeeded     票据验证成功
7       CaptchaAppId does not match     票据与验证码应用APPID不匹配
8       ticket expired     票据超时
10     ticket format error     票据格式不正确
15     ticket decryption failed     票据解密失败
16     CaptchaAppId wrong format     检查验证码应用APPID错误
21     ticket error     票据验证错误
25     invalid ticket     无效票据
26     system internal error     系统内部错误
100   param err     参数校验错误
      */
    CaptchaCode: number;
    /**
      * 状态描述及验证错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    CaptchaMsg: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCaptchaMiniData请求参数结构体
 */
export interface DescribeCaptchaMiniDataRequest {
    /**
      * 验证码应用ID
      */
    CaptchaAppId: number;
    /**
      * 查询开始时间 例如：2019112900
      */
    Start: number;
    /**
      * 查询结束时间 例如：2019112902
      */
    End: number;
    /**
      * 查询类型 安全验证码小程序插件分类查询数据接口，请求量type=0、通过量type=1、验证量type=2、拦截量type=3 小时级查询（五小时左右延迟）
      */
    Type: number;
}
