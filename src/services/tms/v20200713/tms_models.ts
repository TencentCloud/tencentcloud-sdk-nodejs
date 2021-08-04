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
 * 文本过滤条件
 */
export interface Filters {
  /**
      * 查询字段：
策略BizType
子账号SubUin
日期区间DateRange
      */
  Name: string

  /**
   * 查询值
   */
  Values: Array<string>
}

/**
 * 识别结果统计
 */
export interface Overview {
  /**
   * 总调用量
   */
  TotalCount: number

  /**
   * 总调用时长
   */
  TotalHour: number

  /**
   * 通过量
   */
  PassCount: number

  /**
   * 通过时长
   */
  PassHour: number

  /**
   * 违规量
   */
  EvilCount: number

  /**
   * 违规时长
   */
  EvilHour: number

  /**
   * 疑似违规量
   */
  SuspectCount: number

  /**
   * 疑似违规时长
   */
  SuspectHour: number
}

/**
 * 账号风险检测结果
 */
export interface RiskDetails {
  /**
   * 风险类别，RiskAccount，RiskIP, RiskIMEI
   */
  Label: string

  /**
   * 风险等级，1:疑似，2：恶意
   */
  Level: number
}

/**
 * DescribeTextStat请求参数结构体
 */
export interface DescribeTextStatRequest {
  /**
   * 审核类型 1: 机器审核; 2: 人工审核
   */
  AuditType: number

  /**
   * 查询条件
   */
  Filters: Array<Filters>
}

/**
 * TextModeration请求参数结构体
 */
export interface TextModerationRequest {
  /**
   * 文本内容Base64编码。限制原文长度不能超过10000个unicode字符
   */
  Content: string

  /**
   * 该字段用于标识业务场景。您可以在内容安全控制台创建对应的ID，配置不同的内容审核策略，通过接口调用，默认不填为0，后端使用默认策略
   */
  BizType?: string

  /**
   * 数据ID，英文字母、下划线、-组成，不超过64个字符
   */
  DataId?: string

  /**
   * 账号相关信息字段，填入后可识别违规风险账号
   */
  User?: User

  /**
   * 设备相关信息字段，填入后可识别违规风险设备
   */
  Device?: Device
}

/**
 * AccountTipoffAccess请求参数结构体
 */
export interface AccountTipoffAccessRequest {
  /**
   * 被举报账号，长度低于 128 个字符
   */
  ReportedAccount: string

  /**
   * 被举报账号类型(1-手机号 2-QQ号 3-微信号 4-QQ群号 5-微信openid 6-QQopenid 0-其它)
   */
  ReportedAccountType: number

  /**
   * 被举报账号所属恶意类型(1-诈骗，2-骚扰，3-广告，4-违法违规，5-赌博传销，0-其他)
   */
  EvilType: number

  /**
   * 举报者账号，长度低于 128 个字符
   */
  SenderAccount?: string

  /**
   * 举报者账号类型(1-手机号 2-QQ号 3-微信号 4-QQ群号 5-微信openid 6-QQopenid 0-其它)
   */
  SenderAccountType?: number

  /**
   * 举报者IP地址
   */
  SenderIP?: string

  /**
   * 包含被举报账号的恶意内容（比如文本、图片链接，长度低于1024个字符）
   */
  EvilContent?: string
}

/**
 * 自定义库列表
 */
export interface TextLib {
  /**
   * 库id
   */
  LibId: number

  /**
   * 库名
   */
  LibName: string
}

/**
 * 识别量统计
 */
export interface TrendCount {
  /**
      * 总调用量
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount: number

  /**
      * 总调用时长
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalHour: number

  /**
      * 通过量
注意：此字段可能返回 null，表示取不到有效值。
      */
  PassCount: number

  /**
      * 通过时长
注意：此字段可能返回 null，表示取不到有效值。
      */
  PassHour: number

  /**
      * 违规量
注意：此字段可能返回 null，表示取不到有效值。
      */
  EvilCount: number

  /**
      * 违规时长
注意：此字段可能返回 null，表示取不到有效值。
      */
  EvilHour: number

  /**
      * 疑似违规量
注意：此字段可能返回 null，表示取不到有效值。
      */
  SuspectCount: number

  /**
      * 疑似违规时长
注意：此字段可能返回 null，表示取不到有效值。
      */
  SuspectHour: number

  /**
      * 日期
注意：此字段可能返回 null，表示取不到有效值。
      */
  Date: string
}

/**
 * DescribeTextLib返回参数结构体
 */
export interface DescribeTextLibResponse {
  /**
   * 文本库id和name列表
   */
  TextLib: Array<TextLib>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 文本返回的详细结果
 */
export interface DetailResults {
  /**
      * 恶意标签，Normal：正常，Porn：色情，Abuse：谩骂，Ad：广告，Custom：自定义词库。
以及令人反感、不安全或不适宜的内容类型。
      */
  Label: string

  /**
      * 建议您拿到判断结果后的执行操作。
建议值，Block：建议屏蔽，Review：建议复审，Pass：建议通过
注意：此字段可能返回 null，表示取不到有效值。
      */
  Suggestion: string

  /**
      * 该标签下命中的关键词
注意：此字段可能返回 null，表示取不到有效值。
      */
  Keywords: Array<string>

  /**
      * 该标签模型命中的分值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Score: number

  /**
      * 仅当Label为Custom自定义关键词时有效，表示自定义关键词库类型，1:黑白库，2：自定义库
注意：此字段可能返回 null，表示取不到有效值。
      */
  LibType: number

  /**
      * 仅当Label为Custom自定义关键词时有效，表示自定义库id
注意：此字段可能返回 null，表示取不到有效值。
      */
  LibId: string

  /**
      * 仅当Labe为Custom自定义关键词时有效，表示自定义库名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  LibName: string
}

/**
 * 违规数据分布
 */
export interface EvilCount {
  /**
   * ----非必选，该参数功能暂未对外开放
   */
  EvilType: string

  /**
   * 分布类型总量
   */
  Count: number
}

/**
 * 设备信息
 */
export interface Device {
  /**
   * 用户IP
   */
  IP?: string

  /**
   * Mac地址
   */
  Mac?: string

  /**
   * 设备指纹Token
   */
  TokenId?: string

  /**
   * 设备指纹ID
   */
  DeviceId?: string

  /**
   * 设备序列号
   */
  IMEI?: string

  /**
   * IOS设备，Identifier For Advertising（广告标识符）
   */
  IDFA?: string

  /**
   * IOS设备，IDFV - Identifier For Vendor（应用开发商标识符）
   */
  IDFV?: string
}

/**
 * 举报接口响应数据
 */
export interface TipoffResponse {
  /**
   * 举报结果， "0-举报数据提交成功  99-举报数据提交失败"
   */
  ResultCode: number

  /**
   * 结果描述
   */
  ResultMsg: string
}

/**
 * AccountTipoffAccess返回参数结构体
 */
export interface AccountTipoffAccessResponse {
  /**
      * 举报接口响应数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data?: TipoffResponse

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTextLib请求参数结构体
 */
export interface DescribeTextLibRequest {
  /**
   * 内容类型 text: 1; image: 2; audio: 3; video: 4
   */
  StrategyType: number
}

/**
 * DescribeTextStat返回参数结构体
 */
export interface DescribeTextStatResponse {
  /**
   * 识别结果统计
   */
  Overview?: Overview

  /**
   * 识别量统计
   */
  TrendCount?: Array<TrendCount>

  /**
      * 违规数据分布
注意：此字段可能返回 null，表示取不到有效值。
      */
  EvilCount?: Array<EvilCount>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TextModeration返回参数结构体
 */
export interface TextModerationResponse {
  /**
   * 您在入参时所填入的Biztype参数
   */
  BizType: string

  /**
   * 数据是否属于恶意类型，0：正常 1：可疑
   */
  EvilFlag: number

  /**
   * 恶意标签，Normal：正常，Porn：色情，Abuse：谩骂，Ad：广告，Custom：自定义词库，以及令人反感、不安全或不适宜的内容类型
   */
  Label: string

  /**
      * 建议您拿到判断结果后的执行操作
建议值，Block：建议屏蔽，Review：建议复审，Pass：建议通过
      */
  Suggestion: string

  /**
      * 文本命中的关键词信息，用于提示您文本违规的具体原因，可能会返回多个命中的关键词。（如：加我微信）
如返回值为空，Score不为空，即识别结果（Label）是来自于语义模型判断的返回值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Keywords: Array<string>

  /**
      * 机器判断当前分类的置信度，取值范围：0.00~100.00。分数越高，表示越有可能属于当前分类。
（如：色情 99.99，则该样本属于色情的置信度非常高。）
      */
  Score: number

  /**
      * 接口识别样本后返回的详细结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  DetailResults: Array<DetailResults>

  /**
      * 接口识别样本中存在违规账号风险的检测结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  RiskDetails: Array<RiskDetails>

  /**
      * 扩展字段，用于特定信息返回，不同客户/Biztype下返回信息不同
注意：此字段可能返回 null，表示取不到有效值。
      */
  Extra: string

  /**
      * 请求参数中的DataId
注意：此字段可能返回 null，表示取不到有效值。
      */
  DataId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用户相关信息
 */
export interface User {
  /**
   * 用户账号ID，如填写，会根据账号历史恶意情况，判定消息有害结果，特别是有利于可疑恶意情况下的辅助判断。账号可以填写微信uin、QQ号、微信openid、QQopenid、字符串等。该字段和账号类别确定唯一账号。
   */
  UserId?: string

  /**
   * 用户昵称
   */
  Nickname?: string

  /**
   * 账号类别，"1-微信uin 2-QQ号 3-微信群uin 4-qq群号 5-微信openid 6-QQopenid 7-其它string"
   */
  AccountType?: number

  /**
   * 性别 默认0 未知 1 男性 2 女性
   */
  Gender?: number

  /**
   * 年龄 默认0 未知
   */
  Age?: number

  /**
   * 用户等级，默认0 未知 1 低 2 中 3 高
   */
  Level?: number

  /**
   * 手机号
   */
  Phone?: string
}
