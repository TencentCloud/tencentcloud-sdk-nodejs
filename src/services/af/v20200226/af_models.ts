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
 * 金融借贷反欺诈 风险码输出类型
 */
export interface RiskDetailInfo {
  /**
   * 风险码
注意：此字段可能返回 null，表示取不到有效值。
   */
  RiskCode: string
  /**
   * 风险码对应的风险值
注意：此字段可能返回 null，表示取不到有效值。
   */
  RiskValue: string
}

/**
 * 反欺诈查询结果
 */
export interface AntiFraudRecord {
  /**
   * 公共错误码
注意：此字段可能返回 null，表示取不到有效值。
   */
  Code: string
  /**
   * 业务侧错误码。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CodeDesc: string
  /**
   * 业务侧错误信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message: string
  /**
   * 表示该条记录能否查到：1 为能查到；-1 为查不到，此时 RiskScore 返回-1；
注意：此字段可能返回 null，表示取不到有效值。
   */
  Found: string
  /**
   * 表示该条记录中的身份 ID 能否查到
1 为能查到
-1 为查不到
注意：此字段可能返回 null，表示取不到有效值。
   */
  IdFound: string
  /**
   * 当可查到时，返回 0~100 区间，值越高 欺诈可
能性越大。
当查不到时（即 found=-1），返回-1
注意：此字段可能返回 null，表示取不到有效值。
   */
  RiskScore: string
  /**
   * 扩展字段，对风险类型的说明。扩展字段并非必
然出现。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RiskInfo: Array<SimpleKindRiskDetail>
  /**
   * 默认出现，提供模型版本号说明及多模型返回需
要时用到；
注意：此字段可能返回 null，表示取不到有效值。
   */
  OtherModelScores: Array<OtherModelScoresDetail>
  /**
   * 表示请求时间，标准 sunix 时间戳，非必然出现
注意：此字段可能返回 null，表示取不到有效值。
   */
  PostTime: string
  /**
   * 拓展字段，非必然出现，和 ExtensionIn 对应；
注：非必然出现，需要返回时天御侧将说明；
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtensionOut: string
}

/**
 * AntiFraudFilter – 业务入参
 */
export interface AntiFraudFilter {
  /**
   * 业务方账号 ID
   */
  CustomerUin: string
  /**
   * 业务方APPID
   */
  CustomerAppid: string
  /**
   * 身份证号
注 1：下方 idCryptoType 为指定
加密方式
注 2：若 idNumber 加密则必传加
密方式
   */
  IdNumber: string
  /**
   * 手机号码（注：不需要带国家代码
例如：13430421011）
注 1：下方 phoneCryptoType 为
指定加密方式:
注 2：若 phoneNumber 加密则必
传加密方式
   */
  PhoneNumber: string
  /**
   * 业务场景 ID
   */
  Scene?: string
  /**
   * 默认不使用，业务方子
账号，若接口使用密钥对应是子账
号则必填
   */
  CustomerSubUin?: string
  /**
   * 已获取约定标识则传 1；
用于基于特定需求而传的标识字段
注：有约定则是必传，若未传则查
询接口失败
   */
  Authorization?: string
  /**
   * 姓名
注 ：不支持加密
   */
  Name?: string
  /**
   * 银行卡号
   */
  BankCardNumber?: string
  /**
   * 用户请求来源 IP
   */
  UserIp?: string
  /**
   * 国际移动设备识别码
   */
  Imei?: string
  /**
   * ios 系统广告标示符
   */
  Idfa?: string
  /**
   * 用户邮箱地址
   */
  EmailAddress?: string
  /**
   * 用户住址
   */
  Address?: string
  /**
   * MAC 地址
   */
  Mac?: string
  /**
   * 国际移动用户识别码
   */
  Imsi?: string
  /**
   * 关联的腾讯帐号 QQ：1；
开放帐号微信： 2；
   */
  AccountType?: string
  /**
   * 可选的 QQ 或微信 openid
   */
  Uid?: string
  /**
   * qq 或微信分配给网站或应用的
appid，用来唯一标识网站或应用
   */
  AppIdU?: string
  /**
   * ＷＩＦＩＭＡＣ
   */
  WifiMac?: string
  /**
   * WIFI 服务集标识
   */
  WifiSSID?: string
  /**
   * WIFI-BSSID
   */
  WifiBSSID?: string
  /**
   * 拓展字段类型 ID
注：默认不填写，需要时天御侧将
提供
   */
  ExtensionId?: string
  /**
   * 拓展字段内容
注：默认不填，需要时天御侧将提
供
   */
  ExtensionIn?: string
  /**
   * 业务 ID，默认不传
   */
  BusinessId?: string
  /**
   * 身份证加密类型
0：不加密（默认值）
1：md5
2：sha256
3：SM3
注：若 idNumber 加密则必传加密
方式
   */
  IdCryptoType?: string
  /**
   * 手机号加密类型
0：不加密（默认值）
1：md5,
2：sha256
3：SM3
注：若 phoneNumber 加密则必传
加密方式
   */
  PhoneCryptoType?: string
  /**
   * 姓名加密类型：——注：已经不支持加
密，该字段存在是为了兼容可能历史客户
版本；
0：不加密（默认值）
1：md5
   */
  NameCryptoType?: string
  /**
   * 是否使用旧回包
   */
  OldResponseType?: string
}

/**
 * AntiFraudCryptoFilter – 业务入参
 */
export interface AntiFraudCryptoFilter {
  /**
   * 约定用入参，默认不涉及默认BusinessSecurityData 与BusinessCrptoData 不传
   */
  CryptoType?: string
  /**
   * 约定用入参，默认不涉及
   */
  CryptoContent?: string
}

/**
 * 借贷反欺查询返回结果出参
 */
export interface FinanceAntiFraudRecord {
  /**
   * 表示该条记录能否查到：1为能查到，-1为查不到
注意：此字段可能返回 null，表示取不到有效值。
   */
  Found: string
  /**
   * 表示该条Id能否查到：1为能查到，-1为查不到
注意：此字段可能返回 null，表示取不到有效值。
   */
  IdFound: string
  /**
   * 评分0~100;值越高 欺诈可能性越大
注意：此字段可能返回 null，表示取不到有效值。
   */
  RiskScore: string
  /**
   * 扩展字段，对风险类型的说明
注意：此字段可能返回 null，表示取不到有效值。
   */
  RiskInfo: Array<RiskDetailInfo>
  /**
   * 多模型返回结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  OtherModelScores: Array<FinanceOtherModelScores>
  /**
   * 业务侧错误码。成功时返回0，错误时返回非0值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Code: string
  /**
   * 业务侧错误信息。成功时返回Success，错误时返回具体业务错误原因。
注意：此字段可能返回 null，表示取不到有效值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message: string
}

/**
 * DescribeAntiFraud返回参数结构体
 */
export interface DescribeAntiFraudResponse {
  /**
   * 返回结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data: FinanceAntiFraudRecord
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 扩展字段，对风险类型的说明
 */
export interface RiskDetail {
  /**
   * 风险码 参数详细定义请加微信：TYXGJ-01
   */
  RiskCode: number
}

/**
 * 借贷反欺返回结果出参中的多模型返回结果
 */
export interface FinanceOtherModelScores {
  /**
   * 模型ID序号
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelId: string
  /**
   * 模型ID序号对应的评分结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelScore: string
}

/**
 * 扩展字段，对风险类型的说明
 */
export interface SimpleKindRiskDetail {
  /**
   * 风险码
注意：此字段可能返回 null，表示取不到有效值。
   */
  RiskCode?: string
  /**
   * 风险码详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  RiskCodeValue?: string
}

/**
 * 扩展字段，对多模型返回结果的说明，被如下接口引用：GetAntiFraud。
 */
export interface OtherModelScoresDetail {
  /**
   * 模型版本号；默认顺序为 0、1、2、3、…其中：0=主模型，跟 RiskScore 保持一致；
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelId?: string
  /**
   * 模型版本对应的评分结果；Found=1 时：模型版本对应的评分结果，0~100 分
区间；Found=-1（未查到）时：全部模型结果返回-1
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelScore?: string
}

/**
 * GetAntiFraud请求参数结构体
 */
export interface GetAntiFraudRequest {
  /**
   * 默认不传，约定用原始业务
入参(二选一BusinessSecurityData 或
BusinessCryptoData)。
   */
  BusinessSecurityData?: AntiFraudFilter
  /**
   * 默认不传，约定用密文业务
入参(二选一
BusinessSecurityData 或
BusinessCryptoData)。
   */
  BusinessCryptoData?: AntiFraudCryptoFilter
}

/**
 * DescribeAntiFraud请求参数结构体
 */
export interface DescribeAntiFraudRequest {
  /**
   * 原始业务入参(二选一）
   */
  BusinessSecurityData?: FinanceAntiFraudFilter
  /**
   * 密文业务入参(二选一）
   */
  BusinessCryptoData?: FinanceAntiFraudCryptoFilter
}

/**
 * 借贷反欺诈原始业务入参
 */
export interface FinanceAntiFraudFilter {
  /**
   * 电话号码(五选二)
   */
  PhoneNumber?: string
  /**
   * 身份证Id(五选二) 参数详细定义请加微信：TYXGJ-01
   */
  IdNumber?: string
  /**
   * 银行卡号(五选二)
   */
  BankCardNumber?: string
  /**
   * 用户请求来源 IP(五选二)
   */
  UserIp?: string
  /**
   * 国际移动设备识别码(五选二)
   */
  Imei?: string
  /**
   * ios 系统广告标示符(五选二)
   */
  Idfa?: string
  /**
   * 业务场景ID，需要找技术对接
   */
  Scene?: string
  /**
   * 姓名
   */
  Name?: string
  /**
   * 用户邮箱地址
   */
  EmailAddress?: string
  /**
   * 用户住址
   */
  Address?: string
  /**
   * MAC 地址
   */
  Mac?: string
  /**
   * 国际移动用户识别码
   */
  Imsi?: string
  /**
   * 1：关联的腾讯帐号QQ；2：开放帐号微信
   */
  AccountType?: string
  /**
   * 可选的 QQ 或微信 openid
   */
  Uid?: string
  /**
   * qq 或微信分配给网站或应用的 appid，用来唯一标识网站或应用
   */
  AppIdU?: string
  /**
   * WIFI MAC
   */
  WifiMac?: string
  /**
   * WIFI 服务集标识
   */
  WifiSSID?: string
  /**
   * WIFI-BSSID
   */
  WifiBSSID?: string
  /**
   * 业务 ID，在多个业务中使用此服务，通过此ID 区分统计数据
   */
  BusinessId?: string
  /**
   * 手机号加密类型 0：不加密（默认值）；1：md5；2：sha256；3：SM3
   */
  PhoneCryptoType?: string
  /**
   * 身份证Id加密类型 0：不加密（默认值）；1：md5；2：sha256；3：SM3
   */
  IdCryptoType?: string
  /**
   * 姓名加密类型 0：不加密（默认值）；1：md5；2：sha256；3：SM3
   */
  NameCryptoType?: string
}

/**
 * QueryAntiFraud返回参数结构体
 */
export interface QueryAntiFraudResponse {
  /**
   * 表示该条记录能否查到：1为能查到，-1为查不到
   */
  Found?: number
  /**
   * 表示该条Id能否查到：1为能查到，-1为查不到
   */
  IdFound?: number
  /**
   * 0~100;值越高 欺诈可能性越大（注：该字段真实类型为有符号整型）
   */
  RiskScore?: number
  /**
   * 扩展字段，对风险类型的说明
   */
  RiskInfo?: Array<RiskDetail>
  /**
   * 业务侧错误码。成功时返回Success，错误时返回具体业务错误原因。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CodeDesc?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetAntiFraud返回参数结构体
 */
export interface GetAntiFraudResponse {
  /**
   * 反欺诈评分接口结果
   */
  Data: AntiFraudRecord
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryAntiFraud请求参数结构体
 */
export interface QueryAntiFraudRequest {
  /**
   * 电话号码(五选二)
   */
  PhoneNumber?: string
  /**
   * Id(五选二)
   */
  IdNumber?: string
  /**
   * 银行卡号(五选二)
   */
  BankCardNumber?: string
  /**
   * 用户请求来源 IP(五选二)
   */
  UserIp?: string
  /**
   * 国际移动设备识别码，和Idfa同时传入时，只看作一个关键入参(五选二)
   */
  Imei?: string
  /**
   * ios 系统广告标示符，和Imei同时传入时，只看作一个关键入参(五选二)
   */
  Idfa?: string
  /**
   * 业务场景 ID，需要找技术对接
   */
  Scene?: string
  /**
   * 姓名
   */
  Name?: string
  /**
   * 用户邮箱地址
   */
  EmailAddress?: string
  /**
   * 用户住址
   */
  Address?: string
  /**
   * MAC 地址
   */
  Mac?: string
  /**
   * 国际移动用户识别码
   */
  Imsi?: string
  /**
   * 关联的腾讯帐号 QQ：1；
开放帐号微信： 2；
   */
  AccountType?: string
  /**
   * 可选的 QQ 或微信 openid
   */
  Uid?: string
  /**
   * qq 或微信分配给网站或应用的 appid，用来
唯一标识网站或应用
   */
  AppIdU?: string
  /**
   * WIFI MAC
   */
  WifiMac?: string
  /**
   * WIFI 服务集标识
   */
  WifiSSID?: string
  /**
   * WIFI-BSSID
   */
  WifiBSSID?: string
  /**
   * 业务 ID，在多个业务中使用此服务，通过此
ID 区分统计数据
   */
  BusinessId?: string
  /**
   * Id加密类型
0：不加密（默认值）
1：md5
2：sha256
3：SM3
   */
  IdCryptoType?: string
  /**
   * 手机号加密类型
0：不加密（默认值）
1：md5, 2：sha256
3：SM3
   */
  PhoneCryptoType?: string
  /**
   * 姓名加密类型
0：不加密（默认值）
1：md5
   */
  NameCryptoType?: string
}

/**
 * 借贷反欺诈密文业务入参
 */
export interface FinanceAntiFraudCryptoFilter {
  /**
   * 值1定义：AES加密方式[加密模式ECB；填充格式pkcs7padding；秘钥16字节即128位
   */
  CryptoType?: string
  /**
   * 业务字段BusinessSecurityData的json数据格式，采用CryptoType相应的加密方式计算后得到的bash64编码内容。比如对{"PhoneNumber":"13430420001","IdNumber":"420115199501010001","BankCardNumber":"6214000100010001"}包体做加密。
   */
  CryptoContent?: string
}
