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
 * InquireAuditCredit返回参数结构体
 */
export interface InquireAuditCreditResponse {
  /**
   * 可创建跟踪集的数量
   */
  AuditAmount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopLogging请求参数结构体
 */
export interface StopLoggingRequest {
  /**
   * 跟踪集名称
   */
  AuditName: string
}

/**
 * cmq地域信息
 */
export interface CmqRegionInfo {
  /**
   * cmq地域
   */
  CmqRegion?: string

  /**
   * 地域描述
   */
  CmqRegionName?: string
}

/**
 * GetAttributeKey请求参数结构体
 */
export interface GetAttributeKeyRequest {
  /**
   * 网站类型，取值范围是zh和en。如果不传值默认zh
   */
  WebsiteType?: string
}

/**
 * DeleteAudit返回参数结构体
 */
export interface DeleteAuditResponse {
  /**
   * 是否删除成功
   */
  IsSuccess?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateAudit请求参数结构体
 */
export interface UpdateAuditRequest {
  /**
   * 跟踪集名称
   */
  AuditName: string

  /**
   * 队列名称。队列名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。如果IsEnableCmqNotify值是1的话，此值属于必填字段。如果不是新创建的队列，云审计不会去校验该队列是否真的存在，请谨慎填写，避免日志通知不成功，导致您的数据丢失。
   */
  CmqQueueName?: string

  /**
   * 队列所在的地域。可以通过ListCmqEnableRegion获取支持的cmq地域。如果IsEnableCmqNotify值是1的话，此值属于必填字段。
   */
  CmqRegion?: string

  /**
   * cos的存储桶名称。仅支持小写英文字母和数字即[a-z，0-9]、中划线“-”及其组合。用户自定义的字符串支持1 - 40个字符。存储桶命名不能以“-”开头或结尾。如果不是新创建的存储桶，云审计不会去校验该存储桶是否真的存在，请谨慎填写，避免日志投递不成功，导致您的数据丢失。
   */
  CosBucketName?: string

  /**
   * cos地域。目前支持的地域可以使用ListCosEnableRegion来获取。
   */
  CosRegion?: string

  /**
   * 是否创建新的cos存储桶。1：是，0：否。
   */
  IsCreateNewBucket?: number

  /**
   * 是否创建新的队列。1：是，0：否。如果IsEnableCmqNotify值是1的话，此值属于必填字段。
   */
  IsCreateNewQueue?: number

  /**
   * 是否开启cmq消息通知。1：是，0：否。目前仅支持cmq的队列服务。如果开启cmq消息通知服务，云审计会将您的日志内容实时投递到您指定地域的指定队列中。
   */
  IsEnableCmqNotify?: number

  /**
   * 是否开启kms加密。1：是，0：否。如果开启KMS加密，数据在投递到cos时，会将数据加密。
   */
  IsEnableKmsEncry?: number

  /**
   * CMK的全局唯一标识符，如果不是新创建的kms，该值是必填值。可以通过ListKeyAliasByRegion来获取。云审计不会校验KeyId的合法性，请您谨慎填写，避免给您的数据造成损失。
   */
  KeyId?: string

  /**
   * kms地域。目前支持的地域可以使用ListKmsEnableRegion来获取。必须要和cos的地域保持一致。
   */
  KmsRegion?: string

  /**
   * 日志文件前缀。3-40个字符，只能包含 ASCII 编码字母 a-z，A-Z，数字 0-9。
   */
  LogFilePrefix?: string

  /**
   * 管理事件的读写属性。1：只读，2：只写，3：全部。
   */
  ReadWriteAttribute?: number
}

/**
 * InquireAuditCredit请求参数结构体
 */
export type InquireAuditCreditRequest = null

/**
 * ListCosEnableRegion返回参数结构体
 */
export interface ListCosEnableRegionResponse {
  /**
   * 云审计支持的cos可用区
   */
  EnableRegions?: Array<CosRegionInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * LookUpEvents请求参数结构体
 */
export interface LookUpEventsRequest {
  /**
   * 结束时间
   */
  EndTime: number

  /**
   * 开始时间
   */
  StartTime: number

  /**
   * 检索条件
   */
  LookupAttributes?: Array<LookupAttribute>

  /**
   * 返回日志的最大条数
   */
  MaxResults?: number

  /**
   * 云审计模式，有效值：standard | quick，其中standard是标准模式，quick是极速模式。默认为标准模式
   */
  Mode?: string

  /**
   * 查看更多日志的凭证
   */
  NextToken?: string
}

/**
 * StartLogging请求参数结构体
 */
export interface StartLoggingRequest {
  /**
   * 跟踪集名称
   */
  AuditName: string
}

/**
 * CreateAudit返回参数结构体
 */
export interface CreateAuditResponse {
  /**
   * 是否创建成功。
   */
  IsSuccess?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartLogging返回参数结构体
 */
export interface StartLoggingResponse {
  /**
   * 是否开启成功
   */
  IsSuccess?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AttributeKey值详情
 */
export interface AttributeKeyDetail {
  /**
   * 中文标签
   */
  Label: string

  /**
   * 输入框类型
   */
  LabelType: string

  /**
   * 展示排序
   */
  Order: number

  /**
   * 初始化展示
   */
  Starter: string

  /**
   * AttributeKey值
   */
  Value: string
}

/**
 * ListCosEnableRegion请求参数结构体
 */
export interface ListCosEnableRegionRequest {
  /**
   * 站点类型。zh表示中国区，en表示国际区。默认中国区。
   */
  WebsiteType?: string
}

/**
 * ListKeyAliasByRegion返回参数结构体
 */
export interface ListKeyAliasByRegionResponse {
  /**
   * 密钥别名
   */
  KeyMetadatas?: Array<KeyMetadata>

  /**
   * CMK的总数量
   */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资源类型
 */
export interface Resource {
  /**
   * 资源名称
   */
  ResourceName?: string

  /**
   * 资源类型
   */
  ResourceType?: string
}

/**
 * ListAudits请求参数结构体
 */
export type ListAuditsRequest = null

/**
 * StopLogging返回参数结构体
 */
export interface StopLoggingResponse {
  /**
   * 是否关闭成功
   */
  IsSuccess?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 检索条件
 */
export interface LookupAttribute {
  /**
   * AttributeKey的有效取值范围是:RequestId、EventName、ReadOnly、Username、ResourceType、ResourceName和AccessKeyId，EventId
   */
  AttributeKey: string

  /**
   * AttributeValue
   */
  AttributeValue?: string
}

/**
 * ListAudits返回参数结构体
 */
export interface ListAuditsResponse {
  /**
   * 查询跟踪集概要集合
   */
  AuditSummarys?: Array<AuditSummary>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CMK属性
 */
export interface KeyMetadata {
  /**
   * 作为密钥更容易辨识，更容易被人看懂的别名
   */
  Alias?: string

  /**
   * CMK的全局唯一标识
   */
  KeyId?: string
}

/**
 * UpdateAudit返回参数结构体
 */
export interface UpdateAuditResponse {
  /**
   * 是否更新成功
   */
  IsSuccess?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAudit请求参数结构体
 */
export interface DescribeAuditRequest {
  /**
   * 跟踪集名称
   */
  AuditName: string
}

/**
 * ListKeyAliasByRegion请求参数结构体
 */
export interface ListKeyAliasByRegionRequest {
  /**
   * Kms地域
   */
  KmsRegion: string

  /**
   * 含义跟 SQL 查询的 Limit 一致，表示本次获最多获取 Limit 个元素。缺省值为10，最大值为200
   */
  Limit?: number

  /**
   * 含义跟 SQL 查询的 Offset 一致，表示本次获取从按一定顺序排列数组的第 Offset 个元素开始，缺省为0
   */
  Offset?: number
}

/**
 * CreateAudit请求参数结构体
 */
export interface CreateAuditRequest {
  /**
   * 跟踪集名称。3-128字符，只能包含 ASCII 编码字母 a-z，A-Z，数字 0-9，下划线 _。
   */
  AuditName: string

  /**
   * cos的存储桶名称。仅支持小写英文字母和数字即[a-z，0-9]、中划线“-”及其组合。用户自定义的字符串支持1 - 40个字符。存储桶命名不能以“-”开头或结尾。如果不是新创建的存储桶，云审计不会去校验该存储桶是否真的存在，请谨慎填写，避免日志投递不成功，导致您的数据丢失。
   */
  CosBucketName: string

  /**
   * cos地域。目前支持的地域可以使用ListCosEnableRegion来获取。
   */
  CosRegion: string

  /**
   * 是否创建新的cos存储桶。1：是，0：否。
   */
  IsCreateNewBucket: number

  /**
   * 是否开启cmq消息通知。1：是，0：否。目前仅支持cmq的队列服务。如果开启cmq消息通知服务，云审计会将您的日志内容实时投递到您指定地域的指定队列中。
   */
  IsEnableCmqNotify: number

  /**
   * 管理事件的读写属性。1：只读，2：只写，3：全部。
   */
  ReadWriteAttribute: number

  /**
   * 队列名称。队列名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。如果IsEnableCmqNotify值是1的话，此值属于必填字段。如果不是新创建的队列，云审计不会去校验该队列是否真的存在，请谨慎填写，避免日志通知不成功，导致您的数据丢失。
   */
  CmqQueueName?: string

  /**
   * 队列所在的地域。可以通过ListCmqEnableRegion获取支持的cmq地域。如果IsEnableCmqNotify值是1的话，此值属于必填字段。
   */
  CmqRegion?: string

  /**
   * 是否创建新的队列。1：是，0：否。如果IsEnableCmqNotify值是1的话，此值属于必填字段。
   */
  IsCreateNewQueue?: number

  /**
   * 是否开启kms加密。1：是，0：否。如果开启KMS加密，数据在投递到cos时，会将数据加密。
   */
  IsEnableKmsEncry?: number

  /**
   * CMK的全局唯一标识符，如果不是新创建的kms，该值是必填值。可以通过ListKeyAliasByRegion来获取。云审计不会校验KeyId的合法性，请您谨慎填写，避免给您的数据造成损失。
   */
  KeyId?: string

  /**
   * kms地域。目前支持的地域可以使用ListKmsEnableRegion来获取。必须要和cos的地域保持一致。
   */
  KmsRegion?: string

  /**
   * 日志文件前缀。3-40个字符，只能包含 ASCII 编码字母 a-z，A-Z，数字 0-9。可以不填，默认以账号ID作为日志前缀。
   */
  LogFilePrefix?: string
}

/**
 * DeleteAudit请求参数结构体
 */
export interface DeleteAuditRequest {
  /**
   * 跟踪集名称
   */
  AuditName: string
}

/**
 * ListCmqEnableRegion请求参数结构体
 */
export interface ListCmqEnableRegionRequest {
  /**
   * 站点类型。zh表示中国区，en表示国际区。默认中国区。
   */
  WebsiteType?: string
}

/**
 * GetAttributeKey返回参数结构体
 */
export interface GetAttributeKeyResponse {
  /**
   * AttributeKey的有效取值范围
   */
  AttributeKeyDetails?: Array<AttributeKeyDetail>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListCmqEnableRegion返回参数结构体
 */
export interface ListCmqEnableRegionResponse {
  /**
   * 云审计支持的cmq的可用区
   */
  EnableRegions?: Array<CmqRegionInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * LookUpEvents返回参数结构体
 */
export interface LookUpEventsResponse {
  /**
   * 日志集合
   */
  Events?: Array<Event>

  /**
   * 日志集合是否结束
   */
  ListOver?: boolean

  /**
   * 查看更多日志的凭证
   */
  NextToken?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * cos地域信息
 */
export interface CosRegionInfo {
  /**
   * cos地域
   */
  CosRegion?: string

  /**
   * 地域描述
   */
  CosRegionName?: string
}

/**
 * DescribeAudit返回参数结构体
 */
export interface DescribeAuditResponse {
  /**
   * 跟踪集名称。
   */
  AuditName?: string

  /**
   * 跟踪集状态，1：开启，0：停止。
   */
  AuditStatus?: number

  /**
   * 队列名称。
   */
  CmqQueueName?: string

  /**
   * 队列所在地域。
   */
  CmqRegion?: string

  /**
   * cos存储桶名称。
   */
  CosBucketName?: string

  /**
   * cos存储桶所在地域。
   */
  CosRegion?: string

  /**
   * 是否开启cmq消息通知。1：是，0：否。
   */
  IsEnableCmqNotify?: number

  /**
   * 是否开启kms加密。1：是，0：否。如果开启KMS加密，数据在投递到cos时，会将数据加密。
   */
  IsEnableKmsEncry?: number

  /**
   * CMK的全局唯一标识符。
   */
  KeyId?: string

  /**
   * CMK别名。
   */
  KmsAlias?: string

  /**
   * kms地域。
   */
  KmsRegion?: string

  /**
   * 日志前缀。
   */
  LogFilePrefix?: string

  /**
   * 管理事件读写属性，1：只读，2：只写，3：全部
   */
  ReadWriteAttribute?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 日志详情
 */
export interface Event {
  /**
   * 资源对
   */
  Resources?: Resource

  /**
   * 主账号ID
   */
  AccountID?: number

  /**
   * 日志详情
   */
  CloudAuditEvent?: string

  /**
   * 鉴权错误码
   */
  ErrorCode?: number

  /**
   * 日志ID
   */
  EventId?: string

  /**
   * 事件名称
   */
  EventName?: string

  /**
   * 事件名称中文描述（此字段请按需使用，如果您是其他语言使用者，可以忽略该字段描述）
   */
  EventNameCn?: string

  /**
   * 事件地域
   */
  EventRegion?: string

  /**
   * 请求来源
   */
  EventSource?: string

  /**
   * 事件时间
   */
  EventTime?: string

  /**
   * 请求ID
   */
  RequestID?: string

  /**
   * 资源地域
   */
  ResourceRegion?: string

  /**
   * 资源类型中文描述（此字段请按需使用，如果您是其他语言使用者，可以忽略该字段描述）
   */
  ResourceTypeCn?: string

  /**
   * 证书ID
   */
  SecretId?: string

  /**
   * 源IP
   */
  SourceIPAddress?: string

  /**
   * 用户名
   */
  Username?: string
}

/**
 * 跟踪集概览
 */
export interface AuditSummary {
  /**
   * 跟踪集名称
   */
  AuditName?: string

  /**
   * 跟踪集状态，1：开启，0：关闭
   */
  AuditStatus?: number

  /**
   * COS存储桶名称
   */
  CosBucketName?: string

  /**
   * 日志前缀
   */
  LogFilePrefix?: string
}
