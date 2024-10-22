/**
 * DescribeCaptchaOperData返回参数结构体
 */
export interface DescribeCaptchaOperDataResponse {
    /**
     * 成功返回 0 其它失败
     */
    CaptchaCode?: number;
    /**
     * 返回信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CaptchaMsg?: string;
    /**
     * 用户操作数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: CaptchaOperDataRes;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    CaptchaCode?: number;
    /**
     * 返回信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CaptchaMsg?: string;
    /**
     * 用户操作数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: CaptchaOperDataRes;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetTotalTicketStatistics请求参数结构体
 */
export interface GetTotalTicketStatisticsRequest {
    /**
     * 开始时间
     */
    StartTimeStr: string;
    /**
     * 结束时间
     */
    EndTimeStr: string;
    /**
     * 查询粒度
  分钟：“1”
  小时：“2”
  天：“3”
     */
    Dimension: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCaptchaRceResult返回参数结构体
 */
export interface DescribeCaptchaRceResultResponse {
    /**
     * 1 OK 验证通过
  7 captcha no match 传入的Randstr不合法，请检查Randstr是否与前端返回的Randstr一致
  8 ticket expired 传入的Ticket已过期（Ticket有效期5分钟），请重新生成Ticket、Randstr进行校验
  9 ticket reused 传入的Ticket被重复使用，请重新生成Ticket、Randstr进行校验
  15 decrypt fail 传入的Ticket不合法，请检查Ticket是否与前端返回的Ticket一致
  16 appid-ticket mismatch 传入的CaptchaAppId错误，请检查CaptchaAppId是否与前端传入的CaptchaAppId一致，并且保障CaptchaAppId是从验证码控制台【验证管理】->【基础配置】中获取
  21 diff 票据校验异常，可能的原因是（1）若Ticket包含trerror前缀，一般是由于用户网络较差，导致前端自动容灾，而生成了容灾票据，业务侧可根据需要进行跳过或二次处理。（2）若Ticket不包含trerror前缀，则是由于验证码风控系统发现请求有安全风险，业务侧可根据需要进行拦截。
  100 appid-secretkey-ticket mismatch 参数校验错误，（1）请检查CaptchaAppId与AppSecretKey是否正确，CaptchaAppId、AppSecretKey需要在验证码控制台【验证管理】>【基础配置】中获取（2）请检查传入的Ticket是否由传入的CaptchaAppId生成
     */
    CaptchaCode?: number;
    /**
     * 状态描述及验证错误信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CaptchaMsg?: string;
    /**
     * 无感验证模式下，该参数返回验证结果：
  EvilLevel=0 请求无恶意
  EvilLevel=100 请求有恶意
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EvilLevel?: number;
    /**
     * 前端获取验证码时间，时间戳格式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GetCaptchaTime?: number;
    /**
     * 拦截类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EvilBitmap?: number;
    /**
     * 提交验证码时间
     */
    SubmitCaptchaTime?: number;
    /**
     * rce检测结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RceResult?: RceResult;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetRequestStatistics返回参数结构体
 */
export interface GetRequestStatisticsResponse {
    /**
     * 查询后数据块
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: CaptchaStatisticObj;
    /**
     * 验证码返回码
     */
    CaptchaCode?: number;
    /**
     * 验证码返回信息
     */
    CaptchaMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetRequestStatistics请求参数结构体
 */
export interface GetRequestStatisticsRequest {
    /**
     * 验证码AppId
     */
    CaptchaAppId: string;
    /**
     * 开始时间字符串
     */
    StartTimeStr: string;
    /**
     * 结束时间字符串
     */
    EndTimeStr: string;
    /**
     * 查询粒度
     */
    Dimension: string;
}
/**
 * 验证码拼装Rce结果，Rce结果部分
 */
export interface RceResult {
    /**
     * 用户ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserId?: string;
    /**
     * 操作时间戳
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PostTime?: number;
    /**
     * 业务参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssociateAccount?: string;
    /**
     * 用户Ip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserIp?: string;
    /**
     * 风险等级
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RiskLevel?: string;
    /**
     * 风险类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RiskType?: Array<number | bigint>;
    /**
     * 设备唯一ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConstId?: string;
    /**
     * 风险扩展参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RiskInformation?: string;
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
    RiskType: Array<number | bigint>;
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
 * GetTicketStatistics请求参数结构体
 */
export interface GetTicketStatisticsRequest {
    /**
     * 验证码AppId
     */
    CaptchaAppId: string;
    /**
     * 开始时间字符串
     */
    StartTimeStr: string;
    /**
     * 结束时间字符串
     */
    EndTimeStr: string;
    /**
     * 查询粒度
     */
    Dimension: string;
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
 * GetTotalTicketStatistics返回参数结构体
 */
export interface GetTotalTicketStatisticsResponse {
    /**
     * 返回数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: CaptchaStatisticObj;
    /**
     * 返回码
     */
    CaptchaCode?: number;
    /**
     * 返回信息
     */
    CaptchaMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 验证码票据校验趋势obj
 */
export interface TicketCheckTrendObj {
    /**
     * 时间参数
     */
    Ftime: string;
    /**
     * 票据校验量
     */
    TicketCount: number;
    /**
     * 票据通过量
     */
    TicketThroughput: number;
    /**
     * 票据拦截量
     */
    TicketIntercept: number;
}
/**
 * DescribeCaptchaMiniData返回参数结构体
 */
export interface DescribeCaptchaMiniDataResponse {
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 拦截率趋势obj
 */
export interface InterceptPerTrendObj {
    /**
     * 时间参数
     */
    Ftime: string;
    /**
     * 拦截率
     */
    RequestInterceptPer: number;
    /**
     * 答案拦截率
     */
    AnswerInterceptPer: number;
    /**
     * 策略拦截率
     */
    PolicyInterceptPer: number;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 票据校验总量
     */
    CheckTicketSum?: number;
    /**
     * 票据验证通过量
     */
    TicketThroughputSum?: number;
    /**
     * 票据验证拦截量
     */
    TicketInterceptSum?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * DescribeCaptchaResult返回参数结构体
 */
export interface DescribeCaptchaResultResponse {
    /**
     * 1 OK 验证通过
  7 captcha no match 传入的Randstr不合法，请检查Randstr是否与前端返回的Randstr一致
  8 ticket expired 传入的Ticket已过期（Ticket有效期5分钟），请重新生成Ticket、Randstr进行校验
  9 ticket reused 传入的Ticket被重复使用，请重新生成Ticket、Randstr进行校验
  15 decrypt fail 传入的Ticket不合法，请检查Ticket是否与前端返回的Ticket一致
  16 appid-ticket mismatch 传入的CaptchaAppId错误，请检查CaptchaAppId是否与前端传入的CaptchaAppId一致，并且保障CaptchaAppId是从验证码控制台【验证管理】->【基础配置】中获取
  21 diff 票据校验异常，可能的原因是（1）若Ticket包含trerror前缀，一般是由于用户网络较差，导致前端自动容灾，而生成了容灾票据，业务侧可根据需要进行跳过或二次处理。（2）若Ticket不包含trerror前缀，则是由于验证码风控系统发现请求有安全风险，业务侧可根据需要进行拦截。
  100 appid-secretkey-ticket mismatch 参数校验错误，（1）请检查CaptchaAppId与AppSecretKey是否正确，CaptchaAppId、AppSecretKey需要在验证码控制台【验证管理】>【基础配置】中获取（2）请检查传入的Ticket是否由传入的CaptchaAppId生成
     */
    CaptchaCode?: number;
    /**
     * 状态描述及验证错误信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CaptchaMsg?: string;
    /**
     * 无感验证模式下，该参数返回验证结果：
  EvilLevel=0 请求无恶意
  EvilLevel=100 请求有恶意
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EvilLevel?: number;
    /**
     * 前端获取验证码时间，时间戳格式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GetCaptchaTime?: number;
    /**
     * 拦截类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EvilBitmap?: number;
    /**
     * 提交验证码时间
     */
    SubmitCaptchaTime?: number;
    /**
     * 设备风险大类
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeviceRiskCategory?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
    CaptchaCode?: number;
    /**
     * 状态描述及验证错误信息
  注意：此字段可能返回 null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CaptchaMsg?: string;
    /**
     * 拦截策略返回信息
  注意：此字段可能返回 null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ManageMarketingRiskValue?: OutputManageMarketingRiskValue;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetTicketStatistics返回参数结构体
 */
export interface GetTicketStatisticsResponse {
    /**
     * 查询后数据块
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: CaptchaStatisticObj;
    /**
     * 验证码返回码
     */
    CaptchaCode?: number;
    /**
     * 验证码返回信息
     */
    CaptchaMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetTotalRequestStatistics请求参数结构体
 */
export interface GetTotalRequestStatisticsRequest {
    /**
     * 开始时间字符串
     */
    StartTimeStr: string;
    /**
     * 结束时间字符串
     */
    EndTimeStr: string;
    /**
     * 查询粒度
     */
    Dimension: string;
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
 * GetTotalRequestStatistics返回参数结构体
 */
export interface GetTotalRequestStatisticsResponse {
    /**
     * 查询后数据块
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: CaptchaStatisticObj;
    /**
     * 验证码返回码
     */
    CaptchaCode?: number;
    /**
     * 验证码返回信息
     */
    CaptchaMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * 验证码请求趋势图obj
 */
export interface RequestTrendObj {
    /**
     * 时间参数
     */
    Ftime: string;
    /**
     * 请求量
     */
    RequestAction: number;
    /**
     * 验证量
     */
    RequestVerify: number;
    /**
     * 通过量
     */
    RequestThroughput: number;
    /**
     * 拦截量
     */
    RequestIntercept: number;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCaptchaResult请求参数结构体
 */
export interface DescribeCaptchaResultRequest {
    /**
     * 固定填值：9。
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
     * 预留字段
     */
    BusinessId?: number;
    /**
     * 预留字段
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
 * 验证码统计图Obj
 */
export interface CaptchaStatisticObj {
    /**
     * 请求总量
     */
    ActionTotal: number;
    /**
     * 验证总量
     */
    VerifyTotal: number;
    /**
     * 验证通过总量
     */
    VerifyThroughTotal: number;
    /**
     * 验证拦截总量
     */
    VerifyInterceptTotal: number;
    /**
     * 票据校验总量
     */
    TicketTotal: number;
    /**
     * 票据通过总量
     */
    TicketThroughTotal: number;
    /**
     * 票据拦截总量
     */
    TicketInterceptTotal: number;
    /**
     * 请求趋势图
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RequestTrend: Array<RequestTrendObj>;
    /**
     * 拦截率趋势图
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InterceptPerTrend: Array<InterceptPerTrendObj>;
    /**
     * 票据校验趋势图
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TicketCheckTrend: Array<TicketCheckTrendObj>;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCaptchaRceResult请求参数结构体
 */
export interface DescribeCaptchaRceResultRequest {
    /**
     * 固定填值：9。
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
     * 预留字段
     */
    BusinessId?: number;
    /**
     * 预留字段
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 固定填值：9
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
    CaptchaCode?: number;
    /**
     * 返回信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CaptchaMsg?: string;
    /**
     * 验证码票据信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: CaptchaTicketDataRes;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 1     ticket verification succeeded     票据验证成功
  7     CaptchaAppId does not match     票据与验证码应用APPID不匹配
  8     ticket expired     票据超时
  10    ticket format error     票据格式不正确
  15    ticket decryption failed     票据解密失败
  16    CaptchaAppId wrong format     检查验证码应用APPID错误
  21    (1)ticket error     票据验证错误 (2)diff 一般是由于用户网络较差，导致前端自动容灾，而生成了容灾票据，业务侧可根据需要进行跳过或二次处理
  25    invalid ticket     无效票据
  26    system internal error     系统内部错误
  31    UnauthorizedOperation.Unauthorized   无有效套餐包/账户已欠费
  100   param err     参数校验错误
     */
    CaptchaCode?: number;
    /**
     * 状态描述及验证错误信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CaptchaMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
