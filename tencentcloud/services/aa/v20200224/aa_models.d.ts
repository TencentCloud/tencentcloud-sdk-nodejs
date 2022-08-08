/**
 * QueryActivityAntiRush返回参数结构体
 */
export interface QueryActivityAntiRushResponse {
    /**
      * 操作时间戳，单位：秒。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PostTime: string;
    /**
      * 用户操作的真实外网 IP。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserIp: string;
    /**
      * 0：表示无恶意。
1 - 4：恶意等级由低到高。
      */
    Level: number;
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
    RiskType: Array<number>;
    /**
      * accountType是QQ或微信开放账号时，用于标识QQ或微信用户登录后关联业务自身的账号ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    AssociateAccount: string;
    /**
      * uid值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Uid: string;
    /**
      * 用户操作的目的ID
比如：点赞，该字段就是被点 赞的消息 id，如果是投票，就是被投号码的 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    RootId: string;
    /**
      * 业务侧错误码。成功时返回Success，错误时返回具体业务错误原因。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CodeDesc: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * QueryActivityAntiRush请求参数结构体
 */
export interface QueryActivityAntiRushRequest {
    /**
      * 账号类型
      */
    AccountType: string;
    /**
      * uid值
      */
    Uid: string;
    /**
      * 用户的真实外网 IP。若填入非外网有效ip，会返回level=0的风控结果，risktype中会有205的风险码返回作为标识
      */
    UserIp: string;
    /**
      * 用户操作时间戳。
      */
    PostTime: string;
    /**
      * accountType 是QQ开放账号时，该参数必填，表示 QQ 开放平台分配给网站或应用的 AppID，用来唯一标识网站或应用。
      */
    AppIdU?: string;
    /**
      * 昵称，UTF-8 编码。
      */
    NickName?: string;
    /**
      * 手机号
      */
    PhoneNumber?: string;
    /**
      * 用户邮箱地址。
      */
    EmailAddress?: string;
    /**
      * 注册时间戳。
      */
    RegisterTime?: string;
    /**
      * 注册来源的外网 IP。
      */
    RegisterIp?: string;
    /**
      * 用户 HTTP 请求中的 cookie 进行2次 hash 的值，只要保证相同 cookie 的 hash 值一致即可。
      */
    CookieHash?: string;
    /**
      * 地址。
      */
    Address?: string;
    /**
      * 登录来源：
0：其他。
1：PC 网页。
2：移动页面。
3：App。
4：微信公众号。
      */
    LoginSource?: string;
    /**
      * 登录方式：
0：其他。
1：手动账号密码输入。
2：动态短信密码登录。
3：二维码扫描登录。
      */
    LoginType?: string;
    /**
      * 登录耗时，单位：秒。
      */
    LoginSpend?: string;
    /**
      * 用户操作的目的 ID，如点赞等，该字段就是被点赞的消息 ID，如果是投票，则为被投号码的 ID。
      */
    RootId?: string;
    /**
      * 用户 HTTP 请求的 referer 值。
      */
    Referer?: string;
    /**
      * 登录成功后跳转页面。
      */
    JumpUrl?: string;
    /**
      * 用户 HTTP 请求的 userAgent。
      */
    UserAgent?: string;
    /**
      * 用户 HTTP 请求中的 x_forward_for。
      */
    XForwardedFor?: string;
    /**
      * 用户操作过程中鼠标单击次数。
      */
    MouseClickCount?: string;
    /**
      * 用户操作过程中键盘单击次数。
      */
    KeyboardClickCount?: string;
    /**
      * MAC 地址或设备唯一标识。
      */
    MacAddress?: string;
    /**
      * 手机制造商 ID，如果手机注册，请带上此信息。
      */
    VendorId?: string;
    /**
      * 手机设备号。支持以下格式：
1.imei明文
2.idfa明文,
3.imei小写后MD5值小写
4.idfa大写后MD5值小写
      */
    Imei?: string;
    /**
      * App 客户端版本。
      */
    AppVersion?: string;
    /**
      * 业务 ID 网站或应用在多个业务中使用此服务，通过此 ID 区分统计数据。
      */
    BusinessId?: string;
    /**
      * 1：微信公众号。
2：微信小程序。
      */
    WxSubType?: string;
    /**
      * Token 签名随机数，WxSubType为微信小程序时必填，建议16个字符。
      */
    RandNum?: string;
    /**
      * token
      */
    WxToken?: string;
    /**
      * 是否识别设备异常：
0：不识别。
1：识别。
      */
    CheckDevice?: string;
}
