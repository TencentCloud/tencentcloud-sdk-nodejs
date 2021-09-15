/**
 * 借贷反欺诈密文业务入参
 */
export interface FinanceAntiFraudCryptoFilter {
    /**
      * 值1定义：AES加密方式[加密模式ECB；填充格式pkcs7padding；秘钥16字节即128位
      */
    CryptoType?: string;
    /**
      * 业务字段BusinessSecurityData的json数据格式，采用CryptoType相应的加密方式计算后得到的bash64编码内容。比如对{"PhoneNumber":"13430420001","IdNumber":"420115199501010001","BankCardNumber":"6214000100010001"}包体做加密。
      */
    CryptoContent?: string;
}
/**
 * 借贷反欺查询返回结果出参
 */
export interface FinanceAntiFraudRecord {
    /**
      * 表示该条记录能否查到：1为能查到，-1为查不到
注意：此字段可能返回 null，表示取不到有效值。
      */
    Found: string;
    /**
      * 表示该条Id能否查到：1为能查到，-1为查不到
注意：此字段可能返回 null，表示取不到有效值。
      */
    IdFound: string;
    /**
      * 评分0~100;值越高 欺诈可能性越大
注意：此字段可能返回 null，表示取不到有效值。
      */
    RiskScore: string;
    /**
      * 扩展字段，对风险类型的说明
注意：此字段可能返回 null，表示取不到有效值。
      */
    RiskInfo: Array<RiskDetailInfo>;
    /**
      * 多模型返回结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    OtherModelScores: Array<FinanceOtherModelScores>;
    /**
      * 业务侧错误码。成功时返回0，错误时返回非0值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Code: string;
    /**
      * 业务侧错误信息。成功时返回Success，错误时返回具体业务错误原因。
注意：此字段可能返回 null，表示取不到有效值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Message: string;
}
/**
 * DescribeAntiFraud返回参数结构体
 */
export interface DescribeAntiFraudResponse {
    /**
      * 返回结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data: FinanceAntiFraudRecord;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 扩展字段，对风险类型的说明
 */
export interface RiskDetail {
    /**
      * 风险码 参数详细定义请加微信：TYXGJ-01
      */
    RiskCode: number;
}
/**
 * 借贷反欺返回结果出参中的多模型返回结果
 */
export interface FinanceOtherModelScores {
    /**
      * 模型ID序号
注意：此字段可能返回 null，表示取不到有效值。
      */
    ModelId: string;
    /**
      * 模型ID序号对应的评分结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    ModelScore: string;
}
/**
 * 金融借贷反欺诈 风险码输出类型
 */
export interface RiskDetailInfo {
    /**
      * 风险码
注意：此字段可能返回 null，表示取不到有效值。
      */
    RiskCode: string;
    /**
      * 风险码对应的风险值
注意：此字段可能返回 null，表示取不到有效值。
      */
    RiskValue: string;
}
/**
 * DescribeAntiFraud请求参数结构体
 */
export interface DescribeAntiFraudRequest {
    /**
      * 原始业务入参(二选一）
      */
    BusinessSecurityData?: FinanceAntiFraudFilter;
    /**
      * 密文业务入参(二选一）
      */
    BusinessCryptoData?: FinanceAntiFraudCryptoFilter;
}
/**
 * 借贷反欺诈原始业务入参
 */
export interface FinanceAntiFraudFilter {
    /**
      * 电话号码(五选二)
      */
    PhoneNumber?: string;
    /**
      * 身份证Id(五选二) 参数详细定义请加微信：TYXGJ-01
      */
    IdNumber?: string;
    /**
      * 银行卡号(五选二)
      */
    BankCardNumber?: string;
    /**
      * 用户请求来源 IP(五选二)
      */
    UserIp?: string;
    /**
      * 国际移动设备识别码(五选二)
      */
    Imei?: string;
    /**
      * ios 系统广告标示符(五选二)
      */
    Idfa?: string;
    /**
      * 业务场景ID，需要找技术对接
      */
    Scene?: string;
    /**
      * 姓名
      */
    Name?: string;
    /**
      * 用户邮箱地址
      */
    EmailAddress?: string;
    /**
      * 用户住址
      */
    Address?: string;
    /**
      * MAC 地址
      */
    Mac?: string;
    /**
      * 国际移动用户识别码
      */
    Imsi?: string;
    /**
      * 1：关联的腾讯帐号QQ；2：开放帐号微信
      */
    AccountType?: string;
    /**
      * 可选的 QQ 或微信 openid
      */
    Uid?: string;
    /**
      * qq 或微信分配给网站或应用的 appid，用来唯一标识网站或应用
      */
    AppIdU?: string;
    /**
      * WIFI MAC
      */
    WifiMac?: string;
    /**
      * WIFI 服务集标识
      */
    WifiSSID?: string;
    /**
      * WIFI-BSSID
      */
    WifiBSSID?: string;
    /**
      * 业务 ID，在多个业务中使用此服务，通过此ID 区分统计数据
      */
    BusinessId?: string;
    /**
      * 手机号加密类型 0：不加密（默认值）；1：md5；2：sha256；3：SM3
      */
    PhoneCryptoType?: string;
    /**
      * 身份证Id加密类型 0：不加密（默认值）；1：md5；2：sha256；3：SM3
      */
    IdCryptoType?: string;
    /**
      * 姓名加密类型 0：不加密（默认值）；1：md5；2：sha256；3：SM3
      */
    NameCryptoType?: string;
}
/**
 * QueryAntiFraud请求参数结构体
 */
export interface QueryAntiFraudRequest {
    /**
      * 电话号码(五选二)
      */
    PhoneNumber?: string;
    /**
      * Id(五选二)
      */
    IdNumber?: string;
    /**
      * 银行卡号(五选二)
      */
    BankCardNumber?: string;
    /**
      * 用户请求来源 IP(五选二)
      */
    UserIp?: string;
    /**
      * 国际移动设备识别码(五选二)
      */
    Imei?: string;
    /**
      * ios 系统广告标示符(五选二)
      */
    Idfa?: string;
    /**
      * 业务场景 ID，需要找技术对接
      */
    Scene?: string;
    /**
      * 姓名
      */
    Name?: string;
    /**
      * 用户邮箱地址
      */
    EmailAddress?: string;
    /**
      * 用户住址
      */
    Address?: string;
    /**
      * MAC 地址
      */
    Mac?: string;
    /**
      * 国际移动用户识别码
      */
    Imsi?: string;
    /**
      * 关联的腾讯帐号 QQ：1；
开放帐号微信： 2；
      */
    AccountType?: string;
    /**
      * 可选的 QQ 或微信 openid
      */
    Uid?: string;
    /**
      * qq 或微信分配给网站或应用的 appid，用来
唯一标识网站或应用
      */
    AppIdU?: string;
    /**
      * WIFI MAC
      */
    WifiMac?: string;
    /**
      * WIFI 服务集标识
      */
    WifiSSID?: string;
    /**
      * WIFI-BSSID
      */
    WifiBSSID?: string;
    /**
      * 业务 ID，在多个业务中使用此服务，通过此
ID 区分统计数据
      */
    BusinessId?: string;
    /**
      * Id加密类型
0：不加密（默认值）
1：md5
2：sha256
3：SM3
      */
    IdCryptoType?: string;
    /**
      * 手机号加密类型
0：不加密（默认值）
1：md5, 2：sha256
3：SM3
      */
    PhoneCryptoType?: string;
    /**
      * 姓名加密类型
0：不加密（默认值）
1：md5
2：sha256
3：SM3
      */
    NameCryptoType?: string;
}
/**
 * QueryAntiFraud返回参数结构体
 */
export interface QueryAntiFraudResponse {
    /**
      * 表示该条记录能否查到：1为能查到，-1为查不到
      */
    Found?: number;
    /**
      * 表示该条Id能否查到：1为能查到，-1为查不到
      */
    IdFound?: number;
    /**
      * 0~100;值越高 欺诈可能性越大
      */
    RiskScore?: number;
    /**
      * 扩展字段，对风险类型的说明
      */
    RiskInfo?: Array<RiskDetail>;
    /**
      * 业务侧错误码。成功时返回Success，错误时返回具体业务错误原因。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CodeDesc?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
