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
 * DescribeFakeWechatOfficials返回参数结构体
 */
export interface DescribeFakeWechatOfficialsResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 仿冒公众号
注意：此字段可能返回 null，表示取不到有效值。
   */
  List?: Array<DisplayFakeWechatOfficial>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeManages请求参数结构体
 */
export interface DescribeManagesRequest {
  /**
   * 企业ID列表，可多选
   */
  CustomerIdList?: Array<number | bigint>
  /**
   * 是否聚合数据
   */
  IsAggregation?: boolean
  /**
   * 是否新增数据
   */
  IsNew?: boolean
  /**
   * 企业ID
   */
  CustomerId?: number
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 分页偏移
   */
  Offset?: number
  /**
   * 子公司ID列表
   */
  EnterpriseUidList?: Array<string>
  /**
   * 数据输出格式：json、file，默认不填为json
   */
  Format?: string
  /**
   * 创建时间-开始
   */
  CreateAtStart?: string
  /**
   * 创建时间-结束
   */
  CreateAtEnd?: string
  /**
   * 更新时间-开始
   */
  UpdateAtStart?: string
  /**
   * 更新时间-结束
   */
  UpdateAtEnd?: string
  /**
   * 查询数组
   */
  Filters?: Array<Filter>
  /**
   * 是否显示被忽略的数据
   */
  Ignored?: boolean
}

/**
 * DescribeFakeApps请求参数结构体
 */
export interface DescribeFakeAppsRequest {
  /**
   * 企业ID列表，可多选
   */
  CustomerIdList?: Array<number | bigint>
  /**
   * 是否新增数据
   */
  IsNew?: boolean
  /**
   * 企业ID
   */
  CustomerId?: number
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 分页偏移
   */
  Offset?: number
  /**
   * 子公司ID列表
   */
  EnterpriseUidList?: Array<string>
  /**
   * 数据输出格式：json、file，默认不填为json
   */
  Format?: string
  /**
   * 创建时间-开始
   */
  CreateAtStart?: string
  /**
   * 创建时间-结束
   */
  CreateAtEnd?: string
  /**
   * 更新时间-开始
   */
  UpdateAtStart?: string
  /**
   * 更新时间-结束
   */
  UpdateAtEnd?: string
  /**
   * 查询数组
   */
  Filters?: Array<Filter>
  /**
   * 是否显示被忽略的数据
   */
  Ignored?: boolean
}

/**
 * DescribeJobRecords返回参数结构体
 */
export interface DescribeJobRecordsResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 数组
   */
  List?: Array<DisplayJobRecord>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 代码泄露详情
 */
export interface DisplayLeakageCode {
  /**
   * 主键ID
   */
  Id?: number
  /**
   * 公共字段
   */
  DisplayToolCommon?: DisplayToolCommon
  /**
   * 事件名称
   */
  Name?: string
  /**
   * 事件描述
   */
  Description?: string
  /**
   * 数据源
   */
  Source?: string
  /**
   * 风险等级：1-低危 2-中危 3-高危 4-严重 5-误报
   */
  RiskLevel?: number
  /**
   * 仓库名称
   */
  HubName?: string
  /**
   * 链接
   */
  Url?: string
  /**
   * 截图
   */
  Screenshot?: string
  /**
   * 建议
   */
  Suggestion?: string
  /**
   * 关键词
   */
  Keyword?: string
  /**
   * 处置状态：0-待处理 1-处理中 2-已处理
   */
  HandlingStatus?: number
  /**
   * 备注
   */
  Remark?: string
}

/**
 * DescribeApps请求参数结构体
 */
export interface DescribeAppsRequest {
  /**
   * 企业ID列表，可多选
   */
  CustomerIdList?: Array<number | bigint>
  /**
   * 子公司ID列表
   */
  EnterpriseUidList?: Array<string>
  /**
   * 是否新增数据
   */
  IsNew?: boolean
  /**
   * 企业ID
   */
  CustomerId?: number
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 分页偏移
   */
  Offset?: number
  /**
   * 数据输出格式：json、file，默认不填为json
   */
  Format?: string
  /**
   * 创建时间-开始
   */
  CreateAtStart?: string
  /**
   * 创建时间-结束
   */
  CreateAtEnd?: string
  /**
   * 更新时间-开始
   */
  UpdateAtStart?: string
  /**
   * 更新时间-结束
   */
  UpdateAtEnd?: string
  /**
   * 查询数组
   */
  Filters?: Array<Filter>
  /**
   * 是否显示被忽略的数据
   */
  Ignored?: boolean
}

/**
 * DescribeSensitiveInfos请求参数结构体
 */
export interface DescribeSensitiveInfosRequest {
  /**
   * 企业ID列表，可多选
   */
  CustomerIdList?: Array<number | bigint>
  /**
   * 是否聚合数据
   */
  IsAggregation?: boolean
  /**
   * 是否新增数据
   */
  IsNew?: boolean
  /**
   * 企业ID
   */
  CustomerId?: number
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 分页偏移
   */
  Offset?: number
  /**
   * 子公司ID列表
   */
  EnterpriseUidList?: Array<string>
  /**
   * 数据输出格式：json、file，默认不填为json
   */
  Format?: string
  /**
   * 创建时间-开始
   */
  CreateAtStart?: string
  /**
   * 创建时间-结束
   */
  CreateAtEnd?: string
  /**
   * 更新时间-开始
   */
  UpdateAtStart?: string
  /**
   * 更新时间-结束
   */
  UpdateAtEnd?: string
  /**
   * 查询数组
   */
  Filters?: Array<Filter>
  /**
   * 是否显示被忽略的数据
   */
  Ignored?: boolean
}

/**
 * 主机资产详情
 */
export interface DisplayAsset {
  /**
   * 主机资产Id
   */
  Id?: number
  /**
   * 操作系统类型
   */
  Os?: string
  /**
   * 主机地址
   */
  Ip?: string
  /**
   * 国家
   */
  Country?: string
  /**
   * 省份
   */
  Province?: string
  /**
   * 地域
   */
  City?: string
  /**
   * 运营商
   */
  Isp?: string
  /**
   * 公共字段
   */
  DisplayToolCommon?: DisplayToolCommon
  /**
   * 端口数据
   */
  Ports?: string
  /**
   * 服务数据
   */
  Services?: string
  /**
   * 域名数据
   */
  Domains?: string
  /**
   * 端口和服务最近更新时间
   */
  LastModify?: string
  /**
   * 是否为云资产
   */
  IsCloudAsset?: number
  /**
   * 云资产状态，-1为下线
   */
  CloudAssetStatus?: number
}

/**
 * DescribeWechatApplets返回参数结构体
 */
export interface DescribeWechatAppletsResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 数组
   */
  List?: Array<DisplayWechatApplet>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCustomers请求参数结构体
 */
export interface DescribeCustomersRequest {
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 分页偏移
   */
  Offset?: number
  /**
   * 查询数组
   */
  Filters?: Array<Filter>
  /**
   * 企业名称模糊搜索
   */
  Keyword?: string
}

/**
 * ModifyLabel请求参数结构体
 */
export interface ModifyLabelRequest {
  /**
   * 模块，包括：enterprise：企业架构，domain：主域名，sub_domain：子域名，asset：IP资产，port：端口服务，http：HTTP资产，vul：漏洞信息，app：APP，wechat_applet：微信小程序，wechat_official_account：微信公众号，github：Github信息泄露，manage：管理后台暴露，config：目录爆破，dark_web：暗网泄露，net_disk：文库网盘泄露，supply_chain：供应链，weak_password：弱口令，sensitive_info：敏感信息泄露
   */
  Module: string
  /**
   * 企业ID列表，可多选
   */
  CustomerIdList?: Array<number | bigint>
  /**
   * 资产或风险主键ID
   */
  Id?: number
  /**
   * 企业ID，在企业管理页面查看
   */
  CustomerId?: number
  /**
   * 是否聚合数据
   */
  IsAggregation?: boolean
  /**
   * 标签详情
   */
  Labels?: string
  /**
   * 资产或风险主键ID列表
   */
  Ids?: Array<number | bigint>
}

/**
 * 数据泄露详情
 */
export interface DisplayLeakageData {
  /**
   * 主键ID
   */
  Id?: number
  /**
   * 公共字段
   */
  DisplayToolCommon?: DisplayToolCommon
  /**
   * 事件名称
   */
  Name?: string
  /**
   * 事件描述
   */
  Description?: string
  /**
   * 数据源
   */
  Source?: string
  /**
   * 风险等级：1-低危 2-中危 3-高危 4-严重 5-误报
   */
  RiskLevel?: number
  /**
   * 链接
   */
  Url?: string
  /**
   * 截图
   */
  Screenshot?: string
  /**
   * 建议
   */
  Suggestion?: string
  /**
   * 关键词
   */
  Keyword?: string
  /**
   * 处置状态：0-待处理 1-处理中 2-已处理
   */
  HandlingStatus?: number
  /**
   * 备注
   */
  Remark?: string
}

/**
 * DescribeFakeWebsites返回参数结构体
 */
export interface DescribeFakeWebsitesResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 仿冒网站
注意：此字段可能返回 null，表示取不到有效值。
   */
  List?: Array<DisplayFakeWebsite>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 微信公众号详情
 */
export interface DisplayWechatOfficialAccount {
  /**
   * 主键ID
   */
  Id?: number
  /**
   * 公共字段
   */
  DisplayToolCommon?: DisplayToolCommon
  /**
   * 名称
   */
  Name?: string
  /**
   * 图片地址
   */
  Logo?: string
  /**
   * 账号
   */
  AccountId?: string
  /**
   * 二维码
   */
  QrCode?: string
  /**
   * 描述
   */
  Description?: string
  /**
   * 认证主体
   */
  RecordSubject?: string
}

/**
 * 目录爆破详情
 */
export interface DisplayConfig {
  /**
   * 主键Id
   */
  Id?: number
  /**
   * 地址
   */
  Url?: string
  /**
   * 站点标题
   */
  Title?: string
  /**
   * 状态码
   */
  Code?: number
  /**
   * 响应长度
   */
  ContentLength?: number
  /**
   * 公共字段
   */
  DisplayToolCommon?: DisplayToolCommon
  /**
   * Ip数据
   */
  Ip?: string
  /**
   * AI评分
   */
  AIRating?: number
  /**
   * AI分析
   */
  AIAnalysis?: string
  /**
   * 风险等级: 1-低危, 2-中危, 3-高危, 4-危级, 5-误报
   */
  RiskLevel?: number
  /**
   * 建议
   */
  Suggestion?: string
  /**
   * 是否为云资产
   */
  IsCloudAsset?: number
  /**
   * 云资产状态，-1为下线
   */
  CloudAssetStatus?: number
}

/**
 * DescribeNetDisks返回参数结构体
 */
export interface DescribeNetDisksResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 数组
   */
  List?: Array<DisplayNetDisk>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateJobRecord返回参数结构体
 */
export interface CreateJobRecordResponse {
  /**
   * 任务Id
   */
  Id?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCustomers返回参数结构体
 */
export interface DescribeCustomersResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 企业列表
   */
  List?: Array<Customer>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDomains返回参数结构体
 */
export interface DescribeDomainsResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 数组
   */
  List?: Array<DisplayDomain>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 暗网详情
 */
export interface DisplayDarkWeb {
  /**
   * 主键ID
   */
  Id?: number
  /**
   * 内容
   */
  Content?: string
  /**
   * 命中关键字
   */
  MatchedKeywords?: string
  /**
   * APP地址
   */
  Url?: string
  /**
   * 公共字段
   */
  DisplayToolCommon?: DisplayToolCommon
  /**
   * 状态：unrepaired:未修复，repaired:已修复，ignore:已忽略
   */
  Status?: string
}

/**
 * DescribePorts返回参数结构体
 */
export interface DescribePortsResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 数组
   */
  List?: Array<DisplayPort>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSensitiveInfos返回参数结构体
 */
export interface DescribeSensitiveInfosResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 数组
   */
  List?: Array<DisplaySensitiveInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeConfigs返回参数结构体
 */
export interface DescribeConfigsResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 数组
   */
  List?: Array<DisplayConfig>
  /**
   * 全部路径数量
   */
  AllConfigNum?: number
  /**
   * 高风险路径数量
   */
  HighRiskConfigNum?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 链路详情扫描目标和ID
 */
export interface IdndValue {
  /**
   * 详情ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: number
  /**
   * 目标
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
}

/**
 * 邮箱泄露详情
 */
export interface DisplayLeakageEmail {
  /**
   * 主键ID
   */
  Id?: number
  /**
   * 公共字段
   */
  DisplayToolCommon?: DisplayToolCommon
  /**
   * 邮箱
   */
  Email?: string
  /**
   * 用户名
   */
  Username?: string
  /**
   * 数据源
   */
  Source?: string
  /**
   * 风险等级：1-低危 2-中危 3-高危 4-严重 5-误报
   */
  RiskLevel?: number
  /**
   * 建议
   */
  Suggestion?: string
  /**
   * 关键词
   */
  Keyword?: string
  /**
   * 处置状态：0-待处理 1-处理中 2-已处理
   */
  HandlingStatus?: number
  /**
   * 备注
   */
  Remark?: string
}

/**
 * DescribeFakeWebsites请求参数结构体
 */
export interface DescribeFakeWebsitesRequest {
  /**
   * 企业ID列表，可多选
   */
  CustomerIdList?: Array<number | bigint>
  /**
   * 是否新增数据
   */
  IsNew?: boolean
  /**
   * 企业ID
   */
  CustomerId?: number
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 分页偏移
   */
  Offset?: number
  /**
   * 子公司ID列表
   */
  EnterpriseUidList?: Array<string>
  /**
   * 数据输出格式：json、file，默认不填为json
   */
  Format?: string
  /**
   * 创建时间-开始
   */
  CreateAtStart?: string
  /**
   * 创建时间-结束
   */
  CreateAtEnd?: string
  /**
   * 更新时间-开始
   */
  UpdateAtStart?: string
  /**
   * 更新时间-结束
   */
  UpdateAtEnd?: string
  /**
   * 查询数组
   */
  Filters?: Array<Filter>
  /**
   * 是否显示被忽略的数据
   */
  Ignored?: boolean
}

/**
 * ModifyCustomer返回参数结构体
 */
export interface ModifyCustomerResponse {
  /**
   * 企业ID
   */
  Id?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateJobRecord请求参数结构体
 */
export interface CreateJobRecordRequest {
  /**
   * 企业ID
   */
  CustomerId: number
  /**
   * 任务类型：即时任务
   */
  TaskType: string
  /**
   * 资产收集、漏洞信息、弱口令、目录爆破、暗网泄露、Github泄露、文库网盘泄露、敏感信息泄露，其中资产收集必包含，多个用英文逗号隔离，例如：资产收集,漏洞信息
   */
  ScanType?: string
  /**
   * qps设置
   */
  Qps?: number
  /**
   * 是否包含完整扫描
   */
  IsIncludeFullScan?: boolean
}

/**
 * DescribeSuspiciousAssets返回参数结构体
 */
export interface DescribeSuspiciousAssetsResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 数组
   */
  List?: Array<DisplaySuspiciousAsset>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 链路详情
 */
export interface DisplayJobRecordDetail {
  /**
   * 发现时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeAt?: string
  /**
   * 模块
注意：此字段可能返回 null，表示取不到有效值。
   */
  Module?: string
  /**
   * 模块名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModuleName?: string
  /**
   * 任务id
注意：此字段可能返回 null，表示取不到有效值。
   */
  JobRecordId?: number
  /**
   * 目标
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<IdndValue>
}

/**
 * DescribeAssets请求参数结构体
 */
export interface DescribeAssetsRequest {
  /**
   * 企业ID列表，可多选
   */
  CustomerIdList?: Array<number | bigint>
  /**
   * 是否新增数据
   */
  IsNew?: boolean
  /**
   * 企业ID
   */
  CustomerId?: number
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 分页偏移
   */
  Offset?: number
  /**
   * 子公司ID列表
   */
  EnterpriseUidList?: Array<string>
  /**
   * 数据输出格式：json、file，默认不填为json
   */
  Format?: string
  /**
   * 创建时间-开始
   */
  CreateAtStart?: string
  /**
   * 创建时间-结束
   */
  CreateAtEnd?: string
  /**
   * 更新时间-开始
   */
  UpdateAtStart?: string
  /**
   * 更新时间-结束
   */
  UpdateAtEnd?: string
  /**
   * 查询数组
   */
  Filters?: Array<Filter>
  /**
   * 是否显示被忽略的数据
   */
  Ignored?: boolean
}

/**
 * DescribeJobRecordDetails请求参数结构体
 */
export interface DescribeJobRecordDetailsRequest {
  /**
   * 数据类型，包括：enterprise(企业架构)，domain(主域名)，sub_domain(子域名)，asset(主机资产)，port(端口服务)，http(网站资产)，vul(漏洞信息)，app(APP)，wechat_applet(微信小程序)，wechat_official_account(微信公众号)，github(Github泄露)，manage(后台识别)，config(目录爆破)，dark_web(暗网泄露)，net_disk(文库网盘泄露)，social_engineering(员工信息)，supply_chain(供应链信息)，weak_password(弱口令)，sensitive_info(敏感信息泄露)，suspicious_asset(影子资产)
   */
  Module: string
  /**
   * 结果id
   */
  Id: number
  /**
   * 任务id
   */
  JobRecordId?: number
}

/**
 * DescribeSubDomains请求参数结构体
 */
export interface DescribeSubDomainsRequest {
  /**
   * 企业ID列表，可多选
   */
  CustomerIdList?: Array<number | bigint>
  /**
   * 是否新增数据
   */
  IsNew?: boolean
  /**
   * 企业ID
   */
  CustomerId?: number
  /**
   * 是否聚合数据
   */
  IsAggregation?: boolean
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 分页偏移
   */
  Offset?: number
  /**
   * 子公司ID列表
   */
  EnterpriseUidList?: Array<string>
  /**
   * 数据输出格式：json、file，默认不填为json
   */
  Format?: string
  /**
   * 创建时间-开始
   */
  CreateAtStart?: string
  /**
   * 创建时间-结束
   */
  CreateAtEnd?: string
  /**
   * 更新时间-开始
   */
  UpdateAtStart?: string
  /**
   * 更新时间-结束
   */
  UpdateAtEnd?: string
  /**
   * 查询数组
   */
  Filters?: Array<Filter>
  /**
   * 是否显示被忽略的数据
   */
  Ignored?: boolean
  /**
   * 是否只查询离线子域名
   */
  OnlyOffline?: boolean
}

/**
 * 仿冒网站详情
 */
export interface DisplayFakeWebsite {
  /**
   * 主键ID
   */
  Id?: number
  /**
   * 公共字段
   */
  DisplayToolCommon?: DisplayToolCommon
  /**
   * 仿冒网站
   */
  Website?: string
  /**
   * ip位置
   */
  IPLocation?: string
  /**
   * 截图
   */
  Screenshot?: string
  /**
   * 处置状态：0-待处理 1-处理中 2-已处理
   */
  HandlingStatus?: number
  /**
   * 关停状态：0-(默认状态) 1-关停审核中 2-已拦截 3-已拒绝 4-下线流程中 5-已下线 6-下线失败
   */
  ShutdownStatus?: number
  /**
   * 关停时间
   */
  ShutdownTime?: string
}

/**
 * DescribeVuls返回参数结构体
 */
export interface DescribeVulsResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 数组
   */
  List?: Array<DisplayVul>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeGithubs返回参数结构体
 */
export interface DescribeGithubsResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 数组
   */
  List?: Array<DisplayGithub>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLeakageEmails返回参数结构体
 */
export interface DescribeLeakageEmailsResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  List?: Array<DisplayLeakageEmail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAssets返回参数结构体
 */
export interface DescribeAssetsResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 主机资产数组
   */
  List?: Array<DisplayAsset>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 企业架构详情
 */
export interface DisplayEnterprise {
  /**
   * 主键Id
   */
  Id?: number
  /**
   * 公共字段
   */
  DisplayToolCommon?: DisplayToolCommon
  /**
   * 子公司上级
   */
  ParentEnterpriseUid?: string
  /**
   * 企业名称
   */
  Name?: string
  /**
   * 公司简称
   */
  Abbreviation?: string
  /**
   * 统一社会信用代码
   */
  CreditCode?: string
  /**
   * 企业状态
   */
  Status?: string
  /**
   * 注册资本
   */
  RegisteredCapital?: string
  /**
   * 持股比例
   */
  ShareholdingRatio?: string
  /**
   * 法人代表
   */
  LegalPerson?: string
  /**
   * 类型
   */
  Type?: string
  /**
   * 行业类型
   */
  Industry?: string
  /**
   * 子公司唯一uid
   */
  EnterpriseUid?: string
  /**
   * 主域名数量
   */
  DomainCount?: number
  /**
   * 子域名数量
   */
  SubDomainCount?: number
  /**
   * 网站数量
   */
  HttpCount?: number
  /**
   * 漏洞数量
   */
  VulCount?: number
}

/**
 * StopJobRecord请求参数结构体
 */
export interface StopJobRecordRequest {
  /**
   * 企业ID
   */
  CustomerId?: number
  /**
   * 任务ID
   */
  JobRecordId?: number
}

/**
 * 敏感信息泄露数据
 */
export interface DisplaySensitiveInfo {
  /**
   * 主键Id
   */
  Id?: number
  /**
   * 类型
   */
  Type?: string
  /**
   * 来源
   */
  Source?: string
  /**
   * 值
   */
  Value?: string
  /**
   * 公共字段
   */
  DisplayToolCommon?: DisplayToolCommon
  /**
   * 是否为云资产：0-非云资产 1-是云资产
   */
  IsCloudAsset?: number
  /**
   * 云资产是否下线：-1-已下线 0-正常
   */
  CloudAssetStatus?: number
}

/**
 * ModifyLabel返回参数结构体
 */
export interface ModifyLabelResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEnterprises请求参数结构体
 */
export interface DescribeEnterprisesRequest {
  /**
   * 企业ID列表，可多选
   */
  CustomerIdList?: Array<number | bigint>
  /**
   * 是否新增数据
   */
  IsNew?: boolean
  /**
   * 企业ID
   */
  CustomerId?: number
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 分页偏移
   */
  Offset?: number
  /**
   * 子公司ID列表
   */
  EnterpriseUidList?: Array<string>
  /**
   * 数据输出格式：json、file，默认不填为json
   */
  Format?: string
  /**
   * 创建时间-开始
   */
  CreateAtStart?: string
  /**
   * 创建时间-结束
   */
  CreateAtEnd?: string
  /**
   * 更新时间-开始
   */
  UpdateAtStart?: string
  /**
   * 更新时间-结束
   */
  UpdateAtEnd?: string
  /**
   * 查询数组
   */
  Filters?: Array<Filter>
  /**
   * 是否显示被忽略的数据
   */
  Ignored?: boolean
  /**
   * 是否展示统计数据
   */
  IsShowStatistics?: boolean
}

/**
 * DescribeLeakageCodes请求参数结构体
 */
export interface DescribeLeakageCodesRequest {
  /**
   * 企业ID列表，可多选
   */
  CustomerIdList?: Array<number | bigint>
  /**
   * 是否聚合数据
   */
  IsAggregation?: boolean
  /**
   * 是否新增数据
   */
  IsNew?: boolean
  /**
   * 企业ID
   */
  CustomerId?: number
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 分页偏移
   */
  Offset?: number
  /**
   * 子公司ID列表
   */
  EnterpriseUidList?: Array<string>
  /**
   * 数据输出格式：json、file，默认不填为json
   */
  Format?: string
  /**
   * 创建时间-开始
   */
  CreateAtStart?: string
  /**
   * 创建时间-结束
   */
  CreateAtEnd?: string
  /**
   * 更新时间-开始
   */
  UpdateAtStart?: string
  /**
   * 更新时间-结束
   */
  UpdateAtEnd?: string
  /**
   * 查询数组
   */
  Filters?: Array<Filter>
  /**
   * 是否显示被忽略的数据
   */
  Ignored?: boolean
}

/**
 * 仿冒小程序详情
 */
export interface DisplayFakeMiniProgram {
  /**
   * 主键ID
   */
  Id?: number
  /**
   * 公共字段
   */
  DisplayToolCommon?: DisplayToolCommon
  /**
   * 仿冒小程序名称
   */
  ProgramName?: string
  /**
   * 小程序ID
   */
  ProgramId?: string
  /**
   * 类别
   */
  Category?: string
  /**
   * 二维码
   */
  QrCode?: string
  /**
   * 处置状态：0-待处理 1-处理中 2-已处理
   */
  HandlingStatus?: number
  /**
   * 关停状态：0-(默认状态) 1-关停审核中 2-已拦截 3-已拒绝 4-下线流程中 5-已下线 6-下线失败
   */
  ShutdownStatus?: number
  /**
   * 关停时间
   */
  ShutdownTime?: string
}

/**
 * 仿冒公众号详情
 */
export interface DisplayFakeWechatOfficial {
  /**
   * 主键ID
   */
  Id?: number
  /**
   * 公共字段
   */
  DisplayToolCommon?: DisplayToolCommon
  /**
   * 仿冒公众号名称
   */
  AccountName?: string
  /**
   * 公众号ID
   */
  WechatId?: string
  /**
   * 头像
   */
  Avatar?: string
  /**
   * 二维码
   */
  QrCode?: string
  /**
   * 处置状态：0-待处理 1-处理中 2-已处理
   */
  HandlingStatus?: number
  /**
   * 关停状态：0-(默认状态) 1-关停审核中 2-已拦截 3-已拒绝 4-下线流程中 5-已下线 6-下线失败
   */
  ShutdownStatus?: number
  /**
   * 关停时间
   */
  ShutdownTime?: string
}

/**
 * Http详情
 */
export interface DisplayHttp {
  /**
   * 主键ID
   */
  Id?: number
  /**
   * 公共字段
   */
  DisplayToolCommon?: DisplayToolCommon
  /**
   * Url
   */
  Url?: string
  /**
   * 标题
   */
  Title?: string
  /**
   * 报文长度
   */
  ContentLength?: number
  /**
   * 报文内容
   */
  Content?: string
  /**
   * 截图缩略图URL
   */
  ScreenshotThumbUrl?: string
  /**
   * 截图URL
   */
  ScreenshotUrl?: string
  /**
   * 状态码
   */
  Code?: number
  /**
   * Api地址
   */
  Api?: string
  /**
   * 解析的IP
   */
  Ip?: string
  /**
   * 证书信息
   */
  Ssl?: string
  /**
   * ssl证书过期时间
   */
  SslExpiredTime?: string
  /**
   * 资产是否发生变动
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsChange?: boolean
  /**
   * 是否为云资产：0-非云资产 1-是云资产
   */
  IsCloudAsset?: number
  /**
   * 云资产是否下线：-1-已下线 0-正常
   */
  CloudAssetStatus?: number
  /**
   * 可用率（百分比）
   */
  AvailabilityRate?: number
  /**
   * 可用状态 1:异常 0:正常
   */
  AvailabilityState?: number
  /**
   * 平均响应时间：单位ms
   */
  ResponseTime?: number
  /**
   * 域名解析状态 1:异常 0:正常
   */
  AnalysisState?: number
}

/**
 * DescribePorts请求参数结构体
 */
export interface DescribePortsRequest {
  /**
   * 企业ID列表，可多选
   */
  CustomerIdList?: Array<number | bigint>
  /**
   * 是否聚合数据
   */
  IsAggregation?: boolean
  /**
   * 是否新增数据
   */
  IsNew?: boolean
  /**
   * 企业ID
   */
  CustomerId?: number
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 分页偏移
   */
  Offset?: number
  /**
   * 子公司ID列表
   */
  EnterpriseUidList?: Array<string>
  /**
   * 数据输出格式：json、file，默认不填为json
   */
  Format?: string
  /**
   * 创建时间-开始
   */
  CreateAtStart?: string
  /**
   * 创建时间-结束
   */
  CreateAtEnd?: string
  /**
   * 更新时间-开始
   */
  UpdateAtStart?: string
  /**
   * 更新时间-结束
   */
  UpdateAtEnd?: string
  /**
   * 查询数组
   */
  Filters?: Array<Filter>
  /**
   * 是否显示被忽略的数据
   */
  Ignored?: boolean
}

/**
 * 微信小程序详情
 */
export interface DisplayWechatApplet {
  /**
   * 主键ID
   */
  Id?: number
  /**
   * 公共字段
   */
  DisplayToolCommon?: DisplayToolCommon
  /**
   * 名称
   */
  Name?: string
  /**
   * 图片地址
   */
  Logo?: string
  /**
   * 账号
   */
  AccountId?: string
  /**
   * 二维码
   */
  QrCode?: string
  /**
   * 描述
   */
  Description?: string
  /**
   * 认证主体
   */
  RecordSubject?: string
  /**
   * 账号Appid
   */
  AccountAppid?: string
}

/**
 * DescribeGithubs请求参数结构体
 */
export interface DescribeGithubsRequest {
  /**
   * 是否新增数据
   */
  IsNew?: boolean
  /**
   * 企业ID
   */
  CustomerId?: number
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 分页偏移
   */
  Offset?: number
  /**
   * 子公司ID列表
   */
  EnterpriseUidList?: Array<string>
  /**
   * 数据输出格式：json、file，默认不填为json
   */
  Format?: string
  /**
   * 创建时间-开始
   */
  CreateAtStart?: string
  /**
   * 创建时间-结束
   */
  CreateAtEnd?: string
  /**
   * 更新时间-开始
   */
  UpdateAtStart?: string
  /**
   * 更新时间-结束
   */
  UpdateAtEnd?: string
  /**
   * 查询数组
   */
  Filters?: Array<Filter>
  /**
   * 是否显示被忽略的数据
   */
  Ignored?: boolean
}

/**
 * DescribeWechatOfficialAccounts返回参数结构体
 */
export interface DescribeWechatOfficialAccountsResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 数组
   */
  List?: Array<DisplayWechatOfficialAccount>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWechatOfficialAccounts请求参数结构体
 */
export interface DescribeWechatOfficialAccountsRequest {
  /**
   * 企业ID列表，可多选
   */
  CustomerIdList?: Array<number | bigint>
  /**
   * 是否新增数据
   */
  IsNew?: boolean
  /**
   * 企业ID
   */
  CustomerId?: number
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 分页偏移
   */
  Offset?: number
  /**
   * 子公司ID列表
   */
  EnterpriseUidList?: Array<string>
  /**
   * 数据输出格式：json、file，默认不填为json
   */
  Format?: string
  /**
   * 创建时间-开始
   */
  CreateAtStart?: string
  /**
   * 创建时间-结束
   */
  CreateAtEnd?: string
  /**
   * 更新时间-开始
   */
  UpdateAtStart?: string
  /**
   * 更新时间-结束
   */
  UpdateAtEnd?: string
  /**
   * 查询数组
   */
  Filters?: Array<Filter>
  /**
   * 是否显示被忽略的数据
   */
  Ignored?: boolean
}

/**
 * 仿冒应用详情
 */
export interface DisplayFakeApp {
  /**
   * 主键ID
   */
  Id?: number
  /**
   * 公共字段
   */
  DisplayToolCommon?: DisplayToolCommon
  /**
   * 仿冒应用名称
   */
  AppName?: string
  /**
   * 仿冒应用包名称
   */
  PackageName?: string
  /**
   * 下载链接
   */
  DownloadUrl?: string
  /**
   * 处置状态：0-待处理 1-处理中 2-已处理
   */
  HandlingStatus?: number
  /**
   * 关停状态：0-(默认状态) 1-关停审核中 2-已拦截 3-已拒绝 4-下线流程中 5-已下线 6-下线失败
   */
  ShutdownStatus?: number
  /**
   * 关停时间
   */
  ShutdownTime?: string
}

/**
 * DescribeDarkWebs请求参数结构体
 */
export interface DescribeDarkWebsRequest {
  /**
   * 企业ID列表，可多选
   */
  CustomerIdList?: Array<number | bigint>
  /**
   * 是否新增数据
   */
  IsNew?: boolean
  /**
   * 企业ID
   */
  CustomerId?: number
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 分页偏移
   */
  Offset?: number
  /**
   * 子公司ID列表
   */
  EnterpriseUidList?: Array<string>
  /**
   * 数据输出格式：json、file，默认不填为json
   */
  Format?: string
  /**
   * 创建时间-开始
   */
  CreateAtStart?: string
  /**
   * 创建时间-结束
   */
  CreateAtEnd?: string
  /**
   * 更新时间-开始
   */
  UpdateAtStart?: string
  /**
   * 更新时间-结束
   */
  UpdateAtEnd?: string
  /**
   * 查询数组
   */
  Filters?: Array<Filter>
  /**
   * 是否显示被忽略的数据
   */
  Ignored?: boolean
}

/**
 * DescribeHttps请求参数结构体
 */
export interface DescribeHttpsRequest {
  /**
   * 企业ID列表，可多选
   */
  CustomerIdList?: Array<number | bigint>
  /**
   * 是否聚合数据
   */
  IsAggregation?: boolean
  /**
   * 是否新增数据
   */
  IsNew?: boolean
  /**
   * 企业ID
   */
  CustomerId?: number
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 分页偏移
   */
  Offset?: number
  /**
   * 子公司ID列表
   */
  EnterpriseUidList?: Array<string>
  /**
   * 数据输出格式：json、file，默认不填为json
   */
  Format?: string
  /**
   * 创建时间-开始
   */
  CreateAtStart?: string
  /**
   * 创建时间-结束
   */
  CreateAtEnd?: string
  /**
   * 更新时间-开始
   */
  UpdateAtStart?: string
  /**
   * 更新时间-结束
   */
  UpdateAtEnd?: string
  /**
   * 查询数组
   */
  Filters?: Array<Filter>
  /**
   * 是否显示被忽略的数据
   */
  Ignored?: boolean
  /**
   * 是否显示变更
   */
  IsShowChange?: boolean
  /**
   * 是否仅显示过期风险资产
   */
  HasExpirationRisk?: boolean
  /**
   * 是否只查询离线网站
   */
  OnlyOffline?: boolean
}

/**
 * DescribeEnterprises返回参数结构体
 */
export interface DescribeEnterprisesResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 数组
   */
  List?: Array<DisplayEnterprise>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNetDisks请求参数结构体
 */
export interface DescribeNetDisksRequest {
  /**
   * 企业ID列表，可多选
   */
  CustomerIdList?: Array<number | bigint>
  /**
   * 是否新增数据
   */
  IsNew?: boolean
  /**
   * 企业ID
   */
  CustomerId?: number
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 分页偏移
   */
  Offset?: number
  /**
   * 子公司ID列表
   */
  EnterpriseUidList?: Array<string>
  /**
   * 数据输出格式：json、file，默认不填为json
   */
  Format?: string
  /**
   * 创建时间-开始
   */
  CreateAtStart?: string
  /**
   * 创建时间-结束
   */
  CreateAtEnd?: string
  /**
   * 更新时间-开始
   */
  UpdateAtStart?: string
  /**
   * 更新时间-结束
   */
  UpdateAtEnd?: string
  /**
   * 查询数组
   */
  Filters?: Array<Filter>
  /**
   * 是否显示被忽略的数据
   */
  Ignored?: boolean
}

/**
 * ModifyCustomer请求参数结构体
 */
export interface ModifyCustomerRequest {
  /**
   * 企业名称
   */
  Name: string
  /**
   * 百分比取值范围为30-100
   */
  Percent: number
  /**
   * 资产收集、漏洞信息、弱口令、目录爆破、暗网泄露、Github泄露、文库网盘泄露、敏感信息泄露，其中资产收集必包含，多个用英文逗号隔离，例如：资产收集,漏洞信息
   */
  ScanType: string
  /**
   * 企业ID
   */
  Id: number
  /**
   * 周期测绘时间
   */
  ScanCron?: string
  /**
   * 是否立即启动
   */
  IsScanNow?: boolean
  /**
   * 是否启用周期测绘
   */
  EnableCron?: boolean
  /**
   * 是否扫描子公司
   */
  EnableScanSubEnterprise?: boolean
  /**
   * 是否授权
   */
  EnableAuth?: boolean
  /**
   * 授权开始时间
   */
  AuthStartAt?: string
  /**
   * 授权结束时间
   */
  AuthEndAt?: string
  /**
   * 授权文件id
   */
  AuthFile?: string
  /**
   * 测绘时间配置项，采用json字符串格式
   */
  ScanTime?: string
  /**
   * 企业图标
   */
  Icon?: string
  /**
   * 并发
   */
  Qps?: number
  /**
   * 子公司拓展层次
   */
  SubCompanyLevel?: number
  /**
   * 是否包含完整的扫描
   */
  IsIncludeFullScan?: boolean
}

/**
 * 移动资产详情
 */
export interface DisplayApp {
  /**
   * 主键ID
   */
  Id?: number
  /**
   * 公共字段
   */
  DisplayToolCommon?: DisplayToolCommon
  /**
   * APP名称
   */
  Name?: string
  /**
   * 描述
   */
  Description?: string
  /**
   * 开发者
   */
  Developer?: string
  /**
   * 下载地址
   */
  DownloadUrl?: string
  /**
   * 图片
   */
  Logo?: string
  /**
   * 包名
   */
  PackageName?: string
  /**
   * 平台
   */
  Platform?: string
  /**
   * 服务端地址
   */
  ServerUrl?: string
  /**
   * app版本
   */
  AppVersion?: string
}

/**
 * 网盘泄露详情
 */
export interface DisplayNetDisk {
  /**
   * 主键ID
   */
  Id?: number
  /**
   * 内容
   */
  Content?: string
  /**
   * 命中关键字
   */
  MatchedKeywords?: string
  /**
   * 泄露地址
   */
  Url?: string
  /**
   * 状态
   */
  Status?: string
  /**
   * 公共字段
   */
  DisplayToolCommon?: DisplayToolCommon
  /**
   * 泄露平台
   */
  Platform?: string
}

/**
 * 子域名详情
 */
export interface DisplaySubDomain {
  /**
   * 主键ID
   */
  Id?: number
  /**
   * 子域名
   */
  SubDomain?: string
  /**
   * Ip
   */
  Ip?: string
  /**
   * 国家
   */
  Country?: string
  /**
   * 省份
   */
  Province?: string
  /**
   * 城市
   */
  City?: string
  /**
   * 互联网服务提供商
   */
  Isp?: string
  /**
   * 公共字段
   */
  DisplayToolCommon?: DisplayToolCommon
  /**
   * 是否为云资产：0-非云资产 1-是云资产
   */
  IsCloudAsset?: number
  /**
   * 云资产是否下线：-1-已下线 0-正常
   */
  CloudAssetStatus?: number
  /**
   * 可用率（百分比）
   */
  AvailabilityRate?: number
  /**
   * 可用状态 1:异常 0:正常
   */
  AvailabilityState?: number
  /**
   * 域名解析状态 1:异常 0:正常
   */
  AnalysisState?: number
  /**
   * 平均时延：单位ms
   */
  AverageDelay?: number
  /**
   * 丢包率（百分比）
   */
  LossRate?: number
}

/**
 * DescribeSuspiciousAssets请求参数结构体
 */
export interface DescribeSuspiciousAssetsRequest {
  /**
   * 企业ID列表，可多选
   */
  CustomerIdList?: Array<number | bigint>
  /**
   * 是否聚合数据
   */
  IsAggregation?: boolean
  /**
   * 是否新增数据
   */
  IsNew?: boolean
  /**
   * 企业ID
   */
  CustomerId?: number
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 分页偏移
   */
  Offset?: number
  /**
   * 子公司ID列表
   */
  EnterpriseUidList?: Array<string>
  /**
   * 数据输出格式：json、file，默认不填为json
   */
  Format?: string
  /**
   * 创建时间-开始
   */
  CreateAtStart?: string
  /**
   * 创建时间-结束
   */
  CreateAtEnd?: string
  /**
   * 更新时间-开始
   */
  UpdateAtStart?: string
  /**
   * 更新时间-结束
   */
  UpdateAtEnd?: string
  /**
   * 查询数组
   */
  Filters?: Array<Filter>
  /**
   * 是否显示被忽略的数据
   */
  Ignored?: boolean
}

/**
 * 支持按照各字段过滤
 */
export interface Filter {
  /**
   * 要搜索的字段
   */
  Name?: string
  /**
   * 目标值列表
   */
  Values?: Array<string>
}

/**
 * 漏洞详情
 */
export interface DisplayVul {
  /**
   * 主键ID
   */
  Id?: number
  /**
   * 公共字段
   */
  DisplayToolCommon?: DisplayToolCommon
  /**
   * 解析的IP
   */
  Ip?: string
  /**
   * 端口
   */
  Port?: number
  /**
   * Url地址
   */
  Url?: string
  /**
   * 风险等级：1：提示, 2:低危, 3:中危, 4:高危, 5: 严重
   */
  Level?: number
  /**
   * 漏洞名称
   */
  Name?: string
  /**
   * 是否修复，0:未修复，1:已修复
   */
  RepairStatus?: number
  /**
   * 建议
   */
  Suggestion?: string
  /**
   * 发现时间
   */
  DiscoverTime?: string
  /**
   * AI研判
   */
  AiJudge?: string
  /**
   * 状态：unrepaired:未修复，repaired:已修复, offline:资产已下线, ignore:已忽略
   */
  Status?: string
  /**
   * 上次复测时间
   */
  LastCheckTime?: string
  /**
   * 是否为云资产：0-非云资产 1-是云资产
   */
  IsCloudAsset?: number
  /**
   * 云资产是否下线：-1-已下线 0-正常
   */
  CloudAssetStatus?: number
  /**
   * 域名解析状态 1:异常 0:正常
   */
  AnalysisState?: number
}

/**
 * DescribeWechatApplets请求参数结构体
 */
export interface DescribeWechatAppletsRequest {
  /**
   * 企业ID列表，可多选
   */
  CustomerIdList?: Array<number | bigint>
  /**
   * 企业ID
   */
  CustomerId?: number
  /**
   * 是否新增数据
   */
  IsNew?: boolean
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 分页偏移
   */
  Offset?: number
  /**
   * 子公司ID列表
   */
  EnterpriseUidList?: Array<string>
  /**
   * 数据输出格式：json、file，默认不填为json
   */
  Format?: string
  /**
   * 创建时间-开始
   */
  CreateAtStart?: string
  /**
   * 创建时间-结束
   */
  CreateAtEnd?: string
  /**
   * 更新时间-开始
   */
  UpdateAtStart?: string
  /**
   * 更新时间-结束
   */
  UpdateAtEnd?: string
  /**
   * 查询数组
   */
  Filters?: Array<Filter>
  /**
   * 是否显示被忽略的数据
   */
  Ignored?: boolean
}

/**
 * DescribeFakeApps返回参数结构体
 */
export interface DescribeFakeAppsResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 仿冒应用
注意：此字段可能返回 null，表示取不到有效值。
   */
  List?: Array<DisplayFakeApp>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 弱口令详情
 */
export interface DisplayWeakPassword {
  /**
   * 主键ID
   */
  Id?: number
  /**
   * 公共字段
   */
  DisplayToolCommon?: DisplayToolCommon
  /**
   * 解析的IP
   */
  Ip?: string
  /**
   * 端口
   */
  Port?: number
  /**
   * Url地址
   */
  Url?: string
  /**
   * 弱口令类型
   */
  Type?: string
  /**
   * 弱口令账号
   */
  Account?: string
  /**
   * 弱口令密码
   */
  Password?: string
  /**
   * 是否为蜜罐
   */
  IsHoneypot?: boolean
  /**
   * 截图
   */
  ScreenshotUrl?: string
  /**
   * 状态：unrepaired:未修复，repaired:已修复, offline:资产已下线, ignore:已忽略, checking:复测中
   */
  Status?: string
  /**
   * 上次复测时间
   */
  LastCheckTime?: string
  /**
   * 是否为云资产：0-非云资产 1-是云资产
   */
  IsCloudAsset?: number
  /**
   * 云资产是否下线：-1-已下线 0-正常
   */
  CloudAssetStatus?: number
}

/**
 * DescribeLeakageEmails请求参数结构体
 */
export interface DescribeLeakageEmailsRequest {
  /**
   * 企业ID列表，可多选
   */
  CustomerIdList?: Array<number | bigint>
  /**
   * 是否聚合数据
   */
  IsAggregation?: boolean
  /**
   * 是否新增数据
   */
  IsNew?: boolean
  /**
   * 企业ID
   */
  CustomerId?: number
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 分页偏移
   */
  Offset?: number
  /**
   * 子公司ID列表
   */
  EnterpriseUidList?: Array<string>
  /**
   * 数据输出格式：json、file，默认不填为json
   */
  Format?: string
  /**
   * 创建时间-开始
   */
  CreateAtStart?: string
  /**
   * 创建时间-结束
   */
  CreateAtEnd?: string
  /**
   * 更新时间-开始
   */
  UpdateAtStart?: string
  /**
   * 更新时间-结束
   */
  UpdateAtEnd?: string
  /**
   * 查询数组
   */
  Filters?: Array<Filter>
  /**
   * 是否显示被忽略的数据
   */
  Ignored?: boolean
}

/**
 * CreateCustomer返回参数结构体
 */
export interface CreateCustomerResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeManages返回参数结构体
 */
export interface DescribeManagesResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 数组
   */
  List?: Array<DisplayManage>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeConfigs请求参数结构体
 */
export interface DescribeConfigsRequest {
  /**
   * 企业ID列表，可多选
   */
  CustomerIdList?: Array<number | bigint>
  /**
   * 是否聚合数据
   */
  IsAggregation?: boolean
  /**
   * 是否新增数据
   */
  IsNew?: boolean
  /**
   * 企业ID
   */
  CustomerId?: number
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 分页偏移
   */
  Offset?: number
  /**
   * 子公司ID列表
   */
  EnterpriseUidList?: Array<string>
  /**
   * 数据输出格式：json、file，默认不填为json
   */
  Format?: string
  /**
   * 创建时间-开始
   */
  CreateAtStart?: string
  /**
   * 创建时间-结束
   */
  CreateAtEnd?: string
  /**
   * 更新时间-开始
   */
  UpdateAtStart?: string
  /**
   * 更新时间-结束
   */
  UpdateAtEnd?: string
  /**
   * 查询数组
   */
  Filters?: Array<Filter>
  /**
   * 是否显示被忽略的数据
   */
  Ignored?: boolean
  /**
   * 支持按照响应长度排序，例如：+ContentLength或-ContentLength，+是递增，-是递减
   */
  OrderBy?: string
}

/**
 * DescribeWeakPasswords请求参数结构体
 */
export interface DescribeWeakPasswordsRequest {
  /**
   * 企业ID列表，可多选
   */
  CustomerIdList?: Array<number | bigint>
  /**
   * 是否新增数据
   */
  IsNew?: boolean
  /**
   * 企业ID
   */
  CustomerId?: number
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 分页偏移
   */
  Offset?: number
  /**
   * 子公司ID列表
   */
  EnterpriseUidList?: Array<string>
  /**
   * 数据输出格式：json、file，默认不填为json
   */
  Format?: string
  /**
   * 创建时间-开始
   */
  CreateAtStart?: string
  /**
   * 创建时间-结束
   */
  CreateAtEnd?: string
  /**
   * 更新时间-开始
   */
  UpdateAtStart?: string
  /**
   * 更新时间-结束
   */
  UpdateAtEnd?: string
  /**
   * 查询数组
   */
  Filters?: Array<Filter>
  /**
   * 是否显示被忽略的数据
   */
  Ignored?: boolean
}

/**
 * 端口详情
 */
export interface DisplayPort {
  /**
   * 主键ID
   */
  Id?: number
  /**
   * 公共字段
   */
  DisplayToolCommon?: DisplayToolCommon
  /**
   * IP或域名地址
   */
  Asset?: string
  /**
   * 解析的IP
   */
  Ip?: string
  /**
   * 端口
   */
  Port?: number
  /**
   * 是否高危
   */
  IsHighRisk?: boolean
  /**
   * 组件名称
   */
  App?: string
  /**
   * 服务名称
   */
  Service?: string
  /**
   * 端口响应详情
   */
  Banner?: string
  /**
   * 上次检测时间
   */
  LastCheckTime?: string
  /**
   * 状态，close:连接超时，端口可能已关闭，open:端口开放, checking:复测中, ignore:已忽略
   */
  Status?: string
  /**
   * 是否为云资产：0-非云资产 1-是云资产
   */
  IsCloudAsset?: number
  /**
   * 云资产是否下线：-1-已下线 0-正常
   */
  CloudAssetStatus?: number
  /**
   * 域名解析状态 1:异常 0:正常
   */
  AnalysisState?: number
}

/**
 * StopJobRecord返回参数结构体
 */
export interface StopJobRecordResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFakeMiniPrograms请求参数结构体
 */
export interface DescribeFakeMiniProgramsRequest {
  /**
   * 企业ID列表，可多选
   */
  CustomerIdList?: Array<number | bigint>
  /**
   * 是否新增数据
   */
  IsNew?: boolean
  /**
   * 企业ID
   */
  CustomerId?: number
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 分页偏移
   */
  Offset?: number
  /**
   * 子公司ID列表
   */
  EnterpriseUidList?: Array<string>
  /**
   * 数据输出格式：json、file，默认不填为json
   */
  Format?: string
  /**
   * 创建时间-开始
   */
  CreateAtStart?: string
  /**
   * 创建时间-结束
   */
  CreateAtEnd?: string
  /**
   * 更新时间-开始
   */
  UpdateAtStart?: string
  /**
   * 更新时间-结束
   */
  UpdateAtEnd?: string
  /**
   * 查询数组
   */
  Filters?: Array<Filter>
  /**
   * 是否显示被忽略的数据
   */
  Ignored?: boolean
}

/**
 * 任务详情
 */
export interface DisplayJobRecord {
  /**
   * 任务Id
   */
  Id?: number
  /**
   * 企业ID
   */
  CustomerId?: number
  /**
   * 企业名称
   */
  CustomerName?: string
  /**
   * 周期任务详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Crontab?: string
  /**
   * 状态：2-错误/已停止，3-进行中，1-已完成, 4-停止
   */
  Status?: number
  /**
   * 新增数据
   */
  NewCount?: number
  /**
   * 创建时间
   */
  CreateAt?: string
  /**
   * 更新时间
   */
  UpdateAt?: string
  /**
   * 子任务进度
   */
  Progress?: JobRecordProgress
  /**
   * 并发设置
   */
  Qps?: number
  /**
   * 任务类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskType?: string
  /**
   * 客户Uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin?: string
  /**
   * 客户appid
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: number
}

/**
 * CreateCustomer请求参数结构体
 */
export interface CreateCustomerRequest {
  /**
   * 企业名称
   */
  Name: string
  /**
   * 资产收集、漏洞信息、弱口令、目录爆破、暗网泄露、Github泄露、文库网盘泄露、敏感信息泄露，其中资产收集必包含，多个用英文逗号隔离，例如：资产收集,漏洞信息
   */
  ScanType: string
  /**
   * 百分比取值范围为30-100
   */
  Percent?: number
  /**
   * 周期测绘时间
   */
  ScanCron?: string
  /**
   * 是否立即启动
   */
  IsScanNow?: boolean
  /**
   * 是否启用周期测绘
   */
  EnableCron?: boolean
  /**
   * 是否扫描子公司
   */
  EnableScanSubEnterprise?: boolean
  /**
   * 是否授权
   */
  EnableAuth?: boolean
  /**
   * 授权开始时间
   */
  AuthStartAt?: string
  /**
   * 授权结束时间
   */
  AuthEndAt?: string
  /**
   * 授权文件id
   */
  AuthFile?: string
  /**
   * 测绘时间配置项，采用json字符串格式
   */
  ScanTime?: string
  /**
   * 企业相关的关键字
   */
  Keywords?: string
  /**
   * 图标
   */
  Icon?: string
  /**
   * 并发设置
   */
  Qps?: number
  /**
   * 限制子公司层级，-1表示不限制
   */
  SubCompanyLevel?: number
  /**
   * 是否以企业名称为起点做完整扫描(包含手动上传),如只想扫描特定的某几个域名，则传false。
   */
  IsIncludeFullScan?: boolean
}

/**
 * DescribeLeakageDatas请求参数结构体
 */
export interface DescribeLeakageDatasRequest {
  /**
   * 企业ID列表，可多选
   */
  CustomerIdList?: Array<number | bigint>
  /**
   * 是否聚合数据
   */
  IsAggregation?: boolean
  /**
   * 是否新增数据
   */
  IsNew?: boolean
  /**
   * 企业ID
   */
  CustomerId?: number
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 分页偏移
   */
  Offset?: number
  /**
   * 子公司ID列表
   */
  EnterpriseUidList?: Array<string>
  /**
   * 数据输出格式：json、file，默认不填为json
   */
  Format?: string
  /**
   * 创建时间-开始
   */
  CreateAtStart?: string
  /**
   * 创建时间-结束
   */
  CreateAtEnd?: string
  /**
   * 更新时间-开始
   */
  UpdateAtStart?: string
  /**
   * 更新时间-结束
   */
  UpdateAtEnd?: string
  /**
   * 查询数组
   */
  Filters?: Array<Filter>
  /**
   * 是否显示被忽略的数据
   */
  Ignored?: boolean
}

/**
 * DescribeJobRecordDetails返回参数结构体
 */
export interface DescribeJobRecordDetailsResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 数组
   */
  List?: Array<DisplayJobRecordDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVuls请求参数结构体
 */
export interface DescribeVulsRequest {
  /**
   * 企业ID列表，可多选
   */
  CustomerIdList?: Array<number | bigint>
  /**
   * 是否新增数据
   */
  IsNew?: boolean
  /**
   * 企业ID
   */
  CustomerId?: number
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 分页偏移
   */
  Offset?: number
  /**
   * 子公司ID列表
   */
  EnterpriseUidList?: Array<string>
  /**
   * 数据输出格式：json、file，默认不填为json
   */
  Format?: string
  /**
   * 创建时间-开始
   */
  CreateAtStart?: string
  /**
   * 创建时间-结束
   */
  CreateAtEnd?: string
  /**
   * 更新时间-开始
   */
  UpdateAtStart?: string
  /**
   * 更新时间-结束
   */
  UpdateAtEnd?: string
  /**
   * 查询数组
   */
  Filters?: Array<Filter>
  /**
   * 是否显示被忽略的数据
   */
  Ignored?: boolean
}

/**
 * Github泄露详情
 */
export interface DisplayGithub {
  /**
   * 主键ID
   */
  Id?: number
  /**
   * 内容
   */
  Content?: string
  /**
   * 命中关键字
   */
  MatchedKeywords?: string
  /**
   * 泄露地址
   */
  Url?: string
  /**
   * 状态
   */
  Status?: string
  /**
   * 公共字段
   */
  DisplayToolCommon?: DisplayToolCommon
}

/**
 * 数据管理公共字段
 */
export interface DisplayToolCommon {
  /**
   * 子公司ID
   */
  EnterpriseUid?: string
  /**
   * 子公司名称
   */
  EnterpriseName?: string
  /**
   * 主任务ID
   */
  JobId?: number
  /**
   * 单任务ID
   */
  JobStageId?: number
  /**
   * 是否忽略
   */
  Ignored?: boolean
  /**
   * 子任务ID
   */
  JobRecordId?: number
  /**
   * 企业ID
   */
  CustomerId?: number
  /**
   * 企业名称
   */
  CustomerName?: string
  /**
   * 详情
   */
  Detail?: string
  /**
   * Md5值
   */
  Md5?: string
  /**
   * 创建时间
   */
  CreateAt?: string
  /**
   * 更新时间
   */
  UpdateAt?: string
  /**
   * 标签列表，json格式：{\"tag1\":[\"责任人xxx\"],\"tag2\":[\"测试站\"]}
   */
  Labels?: string
}

/**
 * 企业详情
 */
export interface Customer {
  /**
   * 企业ID
   */
  Id?: number
  /**
   * 企业名称
   */
  Name?: string
  /**
   * 股权占比
   */
  Percent?: number
  /**
   * 资产收集、漏洞信息、弱口令、目录爆破、暗网泄露、Github泄露、文库网盘泄露、敏感信息泄露，其中资产收集必包含，多个用英文逗号隔离，例如：资产收集,漏洞信息
   */
  ScanType?: string
  /**
   * 创建账号
   */
  Creator?: string
  /**
   * 腾讯云客户AppId
   */
  AppId?: number
  /**
   * 腾讯云客户Uin
   */
  Uin?: string
  /**
   * 创建时间
   */
  CreateAt?: string
  /**
   * 更新时间
   */
  UpdateAt?: string
  /**
   * 周期测绘时间
   */
  ScanCron?: string
  /**
   * 是否启用周期测绘
   */
  EnableCron?: boolean
  /**
   * 是否扫描子公司
   */
  EnableScanSubEnterprise?: boolean
  /**
   * 是否授权
   */
  EnableAuth?: boolean
  /**
   * 授权开始时间
   */
  AuthStartAt?: string
  /**
   * 授权结束时间
   */
  AuthEndAt?: string
  /**
   * 授权文件id
   */
  AuthFile?: string
  /**
   * 测绘时间配置项
   */
  ScanTime?: string
  /**
   * 图标
   */
  Icon?: string
  /**
   * 关键字
   */
  Keywords?: string
  /**
   * Qps设置，10-500，默认100
   */
  Qps?: number
  /**
   * 子公司拓展层次
   */
  SubCompanyLevel?: number
  /**
   * 是否包含完整扫描
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsIncludeFullScan?: boolean
  /**
   * 是否识别集团成员
   */
  EnableGroupMemberDiscovered?: boolean
}

/**
 * 后台详情
 */
export interface DisplayManage {
  /**
   * 主键ID
   */
  Id?: number
  /**
   * 公共字段
   */
  DisplayToolCommon?: DisplayToolCommon
  /**
   * Url
   */
  Url?: string
  /**
   * 标题
   */
  Title?: string
  /**
   * Icon
   */
  Icon?: string
  /**
   * 缩略图
   */
  Screenshot?: string
  /**
   * 状态码
   */
  Code?: number
  /**
   * 后台Host
   */
  Host?: string
  /**
   * 状态：not_converged:未收敛, converged:已收敛, ignore:已忽略

   */
  Status?: string
  /**
   * 是否为云资产：0-非云资产 1-是云资产
   */
  IsCloudAsset?: number
  /**
   * 云资产是否下线：-1-已下线 0-正常
   */
  CloudAssetStatus?: number
}

/**
 * 主域名详情
 */
export interface DisplayDomain {
  /**
   * 主键ID
   */
  Id?: number
  /**
   * 主域名
   */
  Domain?: string
  /**
   * ICP
   */
  ICP?: string
  /**
   * 注册时间
   */
  RegisteredTime?: string
  /**
   * 过期时间
   */
  ExpiredTime?: string
  /**
   * 公司
   */
  Company?: string
  /**
   * 公共字段
   */
  DisplayToolCommon?: DisplayToolCommon
  /**
   * 是否为云资产
   */
  IsCloudAsset?: number
  /**
   * 云资产状态，-1为下线
   */
  CloudAssetStatus?: number
}

/**
 * DescribeFakeMiniPrograms返回参数结构体
 */
export interface DescribeFakeMiniProgramsResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 仿冒小程序
注意：此字段可能返回 null，表示取不到有效值。
   */
  List?: Array<DisplayFakeMiniProgram>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSubDomains返回参数结构体
 */
export interface DescribeSubDomainsResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 数组
   */
  List?: Array<DisplaySubDomain>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeHttps返回参数结构体
 */
export interface DescribeHttpsResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 数组
   */
  List?: Array<DisplayHttp>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLeakageDatas返回参数结构体
 */
export interface DescribeLeakageDatasResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  List?: Array<DisplayLeakageData>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeApps返回参数结构体
 */
export interface DescribeAppsResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 移动资产数组
   */
  List?: Array<DisplayApp>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWeakPasswords返回参数结构体
 */
export interface DescribeWeakPasswordsResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 数组
   */
  List?: Array<DisplayWeakPassword>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFakeWechatOfficials请求参数结构体
 */
export interface DescribeFakeWechatOfficialsRequest {
  /**
   * 企业ID列表，可多选
   */
  CustomerIdList?: Array<number | bigint>
  /**
   * 是否新增数据
   */
  IsNew?: boolean
  /**
   * 企业ID
   */
  CustomerId?: number
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 分页偏移
   */
  Offset?: number
  /**
   * 子公司ID列表
   */
  EnterpriseUidList?: Array<string>
  /**
   * 数据输出格式：json、file，默认不填为json
   */
  Format?: string
  /**
   * 创建时间-开始
   */
  CreateAtStart?: string
  /**
   * 创建时间-结束
   */
  CreateAtEnd?: string
  /**
   * 更新时间-开始
   */
  UpdateAtStart?: string
  /**
   * 更新时间-结束
   */
  UpdateAtEnd?: string
  /**
   * 查询数组
   */
  Filters?: Array<Filter>
  /**
   * 是否显示被忽略的数据
   */
  Ignored?: boolean
}

/**
 * 影子资产详情
 */
export interface DisplaySuspiciousAsset {
  /**
   * 主键ID
   */
  Id?: number
  /**
   * 公共字段
   */
  DisplayToolCommon?: DisplayToolCommon
  /**
   * Url
   */
  Url?: string
  /**
   * 标题
   */
  Title?: string
  /**
   * 报文长度
   */
  ContentLength?: number
  /**
   * 报文内容
   */
  Content?: string
  /**
   * 截图缩略图URL
   */
  ScreenshotThumbUrl?: string
  /**
   * 截图URL
   */
  ScreenshotUrl?: string
  /**
   * 状态码
   */
  Code?: number
  /**
   * Api
   */
  Api?: string
  /**
   * 解析的IP
   */
  Ip?: string
  /**
   * 证书信息
   */
  Ssl?: string
  /**
   * ssl证书过期时间
   */
  SslExpiredTime?: string
  /**
   * 来源类型
   */
  SourceType?: string
  /**
   * 来源值
   */
  SourceValue?: string
  /**
   * 是否信任
   */
  Trusted?: boolean
  /**
   * 所属者
   */
  Owner?: string
  /**
   * 根域名
   */
  RootDomain?: string
}

/**
 * DescribeJobRecords请求参数结构体
 */
export interface DescribeJobRecordsRequest {
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 分页偏移
   */
  Offset?: number
  /**
   * 查询数组
   */
  Filters?: Array<Filter>
}

/**
 * DescribeLeakageCodes返回参数结构体
 */
export interface DescribeLeakageCodesResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  List?: Array<DisplayLeakageCode>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDomains请求参数结构体
 */
export interface DescribeDomainsRequest {
  /**
   * 企业ID列表，可多选
   */
  CustomerIdList?: Array<number | bigint>
  /**
   * 是否新增数据
   */
  IsNew?: boolean
  /**
   * 企业ID
   */
  CustomerId?: number
  /**
   * 分页大小
   */
  Limit?: number
  /**
   * 分页偏移
   */
  Offset?: number
  /**
   * 子公司ID列表
   */
  EnterpriseUidList?: Array<string>
  /**
   * 数据输出格式：json、file，默认不填为json
   */
  Format?: string
  /**
   * 创建时间-开始
   */
  CreateAtStart?: string
  /**
   * 创建时间-结束
   */
  CreateAtEnd?: string
  /**
   * 更新时间-开始
   */
  UpdateAtStart?: string
  /**
   * 更新时间-结束
   */
  UpdateAtEnd?: string
  /**
   * 查询数组
   */
  Filters?: Array<Filter>
  /**
   * 是否显示被忽略的数据
   */
  Ignored?: boolean
}

/**
 * 子任务进度
 */
export interface JobRecordProgress {
  /**
   * 正在执行的任务数
   */
  Doing?: number
  /**
   * 已完成的任务数
   */
  Done?: number
  /**
   * 发生错误的任务数
   */
  Error?: number
  /**
   * 超时
   */
  Timeout?: number
  /**
   * 停止
   */
  Stop?: number
  /**
   * 暂停
   */
  Todo?: number
}

/**
 * DescribeDarkWebs返回参数结构体
 */
export interface DescribeDarkWebsResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 数组
   */
  List?: Array<DisplayDarkWeb>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
