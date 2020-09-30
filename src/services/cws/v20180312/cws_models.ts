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
 * ModifySiteAttribute请求参数结构体
 */
export interface ModifySiteAttributeRequest {
  /**
   * 站点ID
   */
  SiteId: number

  /**
   * 站点名称
   */
  Name?: string

  /**
   * 网站是否需要登录扫描：0-未知；-1-不需要；1-需要
   */
  NeedLogin?: number

  /**
   * 登录后的cookie
   */
  LoginCookie?: string

  /**
   * 用于测试cookie是否有效的URL
   */
  LoginCheckUrl?: string

  /**
   * 用于测试cookie是否有效的关键字
   */
  LoginCheckKw?: string

  /**
   * 禁止扫描器扫描的目录关键字
   */
  ScanDisallow?: string
}

/**
 * 监控任务详细数据
 */
export interface MonitorsDetail {
  /**
   * 监控任务基础信息。
   */
  Basic?: Monitor

  /**
   * 监控任务包含的站点列表。
   */
  Sites?: Array<MonitorMiniSite>

  /**
   * 监控任务包含的站点列表数量。
   */
  SiteNumber?: number

  /**
   * 监控任务包含的受漏洞威胁的站点列表。
   */
  ImpactSites?: Array<MonitorMiniSite>

  /**
   * 监控任务包含的受漏洞威胁的站点列表数量。
   */
  ImpactSiteNumber?: number

  /**
   * 高风险漏洞数量。
   */
  VulsHighNumber?: number

  /**
   * 中风险漏洞数量。
   */
  VulsMiddleNumber?: number

  /**
   * 低风险漏洞数量。
   */
  VulsLowNumber?: number

  /**
   * 提示数量。
   */
  VulsNoticeNumber?: number

  /**
   * 监控任务包含的站点列表的平均扫描进度。
   */
  Progress: number

  /**
   * 扫描页面总数。
   */
  PageCount: number

  /**
   * 内容检测数量。
   */
  ContentNumber: number
}

/**
 * DescribeSites返回参数结构体
 */
export interface DescribeSitesResponse {
  /**
   * 站点数量。
   */
  TotalCount?: number

  /**
   * 站点信息列表。
   */
  Sites?: Array<Site>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMonitors返回参数结构体
 */
export interface DescribeMonitorsResponse {
  /**
   * 监控任务列表。
   */
  Monitors?: Array<MonitorsDetail>

  /**
   * 监控任务数量。
   */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteSites请求参数结构体
 */
export interface DeleteSitesRequest {
  /**
   * 站点ID列表
   */
  SiteIds: Array<number>
}

/**
 * DescribeConfig请求参数结构体
 */
export type DescribeConfigRequest = null

/**
 * DescribeVuls请求参数结构体
 */
export interface DescribeVulsRequest {
  /**
   * 站点ID
   */
  SiteId?: number

  /**
   * 监控任务ID
   */
  MonitorId?: number

  /**
   * 过滤条件
   */
  Filters?: Array<Filter>

  /**
   * 偏移量，默认为0
   */
  Offset?: number

  /**
   * 返回数量，默认为10，最大值为100
   */
  Limit?: number
}

/**
 * ModifyConfigAttribute返回参数结构体
 */
export interface ModifyConfigAttributeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSites返回参数结构体
 */
export interface CreateSitesResponse {
  /**
   * 新增站点数。
   */
  Number?: number

  /**
   * 站点数组
   */
  Sites?: Array<MiniSite>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVulsNumber请求参数结构体
 */
export type DescribeVulsNumberRequest = null

/**
 * ModifyMonitorAttribute返回参数结构体
 */
export interface ModifyMonitorAttributeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySiteAttribute返回参数结构体
 */
export interface ModifySiteAttributeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateVulsReport请求参数结构体
 */
export interface CreateVulsReportRequest {
  /**
   * 站点ID
   */
  SiteId?: number

  /**
   * 监控任务ID
   */
  MonitorId?: number
}

/**
 * CreateSitesScans返回参数结构体
 */
export interface CreateSitesScansResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 站点验证数据
 */
export interface SitesVerification {
  /**
   * 根域名。
   */
  Domain?: string

  /**
   * txt解析域名验证的name。
   */
  TxtName?: string

  /**
   * txt解析域名验证的text。
   */
  TxtText?: string

  /**
   * 验证有效期，在此之前有效。
   */
  ValidTo?: string

  /**
   * 验证状态：0-未验证；1-已验证；2-验证失效，待重新验证。
   */
  VerifyStatus?: number

  /**
   * CreatedAt。
   */
  CreatedAt?: string

  /**
   * UpdatedAt。
   */
  UpdatedAt?: string

  /**
   * ID。
   */
  Id: number

  /**
   * 云用户appid
   */
  Appid: number

  /**
   * 用于验证站点的url，即访问该url获取验证数据。
   */
  VerifyUrl: string

  /**
   * 获取验证验证文件的url。
   */
  VerifyFileUrl: string
}

/**
 * DescribeSiteQuota返回参数结构体
 */
export interface DescribeSiteQuotaResponse {
  /**
   * 已购买的扫描次数。
   */
  Total?: number

  /**
   * 已使用的扫描次数。
   */
  Used?: number

  /**
   * 剩余可用的扫描次数。
   */
  Available?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVulsNumber返回参数结构体
 */
export interface DescribeVulsNumberResponse {
  /**
   * 受影响的网站总数。
   */
  ImpactSiteNumber?: number

  /**
   * 已验证的网站总数。
   */
  SiteNumber?: number

  /**
   * 高风险漏洞总数。
   */
  VulsHighNumber?: number

  /**
   * 中风险漏洞总数。
   */
  VulsMiddleNumber?: number

  /**
   * 低高风险漏洞总数。
   */
  VulsLowNumber?: number

  /**
   * 风险提示总数。
   */
  VulsNoticeNumber?: number

  /**
   * 扫描页面总数。
   */
  PageCount?: number

  /**
   * 已验证的网站列表。
   */
  Sites?: Array<MonitorMiniSite>

  /**
   * 受影响的网站列表。
   */
  ImpactSites?: Array<MonitorMiniSite>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateVulsMisinformation请求参数结构体
 */
export interface CreateVulsMisinformationRequest {
  /**
   * 漏洞ID列表
   */
  VulIds: Array<number>
}

/**
 * DescribeVulsNumberTimeline请求参数结构体
 */
export type DescribeVulsNumberTimelineRequest = null

/**
 * 监控任务中的站点信息。
 */
export interface MonitorMiniSite {
  /**
   * 站点ID。
   */
  SiteId?: number

  /**
   * 站点Url。
   */
  Url?: string
}

/**
 * CreateSitesScans请求参数结构体
 */
export interface CreateSitesScansRequest {
  /**
   * 站点的ID列表
   */
  SiteIds: Array<number>

  /**
   * 扫描模式，normal-正常扫描；deep-深度扫描
   */
  ScannerType: string

  /**
   * 扫描速率限制，每秒发送X个HTTP请求
   */
  RateLimit: number
}

/**
 * CreateMonitors返回参数结构体
 */
export interface CreateMonitorsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVuls返回参数结构体
 */
export interface DescribeVulsResponse {
  /**
   * 漏洞数量。
   */
  TotalCount?: number

  /**
   * 漏洞信息列表。
   */
  Vuls?: Array<Vul>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VerifySites返回参数结构体
 */
export interface VerifySitesResponse {
  /**
   * 验证成功的根域名数量。
   */
  SuccessNumber?: number

  /**
   * 验证失败的根域名数量。
   */
  FailNumber?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateMonitors请求参数结构体
 */
export interface CreateMonitorsRequest {
  /**
   * 站点的url列表
   */
  Urls: Array<string>

  /**
   * 任务名称
   */
  Name: string

  /**
   * 扫描模式，normal-正常扫描；deep-深度扫描
   */
  ScannerType: string

  /**
   * 扫描周期，单位小时，每X小时执行一次
   */
  Crontab: number

  /**
   * 扫描速率限制，每秒发送X个HTTP请求
   */
  RateLimit: number

  /**
   * 首次扫描开始时间
   */
  FirstScanStartTime: string
}

/**
 * DeleteMonitors返回参数结构体
 */
export interface DeleteMonitorsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 监控任务基础数据
 */
export interface Monitor {
  /**
   * 监控任务ID。
   */
  Id?: number

  /**
   * 监控名称。
   */
  Name?: string

  /**
   * 监测状态：1-监测中；2-暂停监测。
   */
  MonitorStatus?: number

  /**
   * 监测模式，normal-正常扫描；deep-深度扫描。
   */
  ScannerType?: string

  /**
   * 扫描周期，单位小时，每X小时执行一次。
   */
  Crontab?: number

  /**
   * 指定扫描类型，3位数每位依次表示：扫描Web漏洞、扫描系统漏洞、扫描系统端口。
   */
  IncludedVulsTypes?: string

  /**
   * 速率限制，每秒发送X个HTTP请求。
   */
  RateLimit?: number

  /**
   * 首次扫描开始时间。
   */
  FirstScanStartTime?: string

  /**
   * 扫描状态：0-待扫描（无任何扫描结果）；1-扫描中（正在进行扫描）；2-已扫描（有扫描结果且不正在扫描）；3-扫描完成待同步结果。
   */
  ScanStatus?: number

  /**
   * 上一次扫描完成时间。
   */
  LastScanFinishTime?: string

  /**
   * 当前扫描开始时间，如扫描完成则为上一次扫描的开始时间。
   */
  CurrentScanStartTime?: string

  /**
   * CreatedAt。
   */
  CreatedAt?: string

  /**
   * UpdatedAt。
   */
  UpdatedAt?: string

  /**
   * 云用户appid。
   */
  Appid: number

  /**
   * 扫描状态：0-待检测；1-检测完成
   */
  ContentScanStatus: number
}

/**
 * 漏洞数据
 */
export interface Vul {
  /**
   * 漏洞ID。
   */
  Id?: number

  /**
   * 站点ID。
   */
  SiteId?: number

  /**
   * 扫描引擎的扫描任务ID。
   */
  TaskId?: number

  /**
   * 漏洞级别：high、middle、low、notice。
   */
  Level?: string

  /**
   * 漏洞名称。
   */
  Name?: string

  /**
   * 出现漏洞的url。
   */
  Url?: string

  /**
   * 网址/细节。
   */
  Html?: string

  /**
   * 漏洞类型。
   */
  Nickname?: string

  /**
   * 危害说明。
   */
  Harm?: string

  /**
   * 漏洞描述。
   */
  Describe?: string

  /**
   * 解决方案。
   */
  Solution?: string

  /**
   * 漏洞参考。
   */
  From?: string

  /**
   * 漏洞通过该参数攻击。
   */
  Parameter?: string

  /**
   * CreatedAt。
   */
  CreatedAt?: string

  /**
   * UpdatedAt。
   */
  UpdatedAt?: string

  /**
   * 是否已经添加误报，0-否，1-是。
   */
  IsReported: number

  /**
   * 云用户appid。
   */
  Appid: number

  /**
   * 云用户标识。
   */
  Uin: string
}

/**
 * 用户漏洞数随时间变化统计数据
 */
export interface VulsTimeline {
  /**
   * ID。
   */
  Id: number

  /**
   * 云用户appid。
   */
  Appid: number

  /**
   * 日期。
   */
  Date: string

  /**
   * 扫描页面总数量。
   */
  PageCount: number

  /**
   * 已验证网站总数量。
   */
  SiteNum: number

  /**
   * 受影响的网站总数量。
   */
  ImpactSiteNum: number

  /**
   * 高危漏洞总数量。
   */
  VulsHighNum: number

  /**
   * 中危漏洞总数量。
   */
  VulsMiddleNum: number

  /**
   * 低危漏洞总数量。
   */
  VulsLowNum: number

  /**
   * 风险提示总数量
   */
  VulsNoticeNum: number

  /**
   * 记录添加时间。
   */
  CreatedAt: string

  /**
   * 记录最近修改时间。
   */
  UpdatedAt: string
}

/**
 * CreateVulsMisinformation返回参数结构体
 */
export interface CreateVulsMisinformationResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VerifySites请求参数结构体
 */
export interface VerifySitesRequest {
  /**
   * 站点的url列表
   */
  Urls: Array<string>
}

/**
 * 站点信息。
 */
export interface MiniSite {
  /**
   * 站点ID。
   */
  SiteId: number

  /**
   * 站点Url。
   */
  Url: string
}

/**
 * ModifyMonitorAttribute请求参数结构体
 */
export interface ModifyMonitorAttributeRequest {
  /**
   * 监测任务ID
   */
  MonitorId: number

  /**
   * 站点的url列表
   */
  Urls: Array<string>

  /**
   * 任务名称
   */
  Name: string

  /**
   * 扫描模式，normal-正常扫描；deep-深度扫描
   */
  ScannerType: string

  /**
   * 扫描周期，单位小时，每X小时执行一次
   */
  Crontab: number

  /**
   * 扫描速率限制，每秒发送X个HTTP请求
   */
  RateLimit: number

  /**
   * 首次扫描开始时间
   */
  FirstScanStartTime: string

  /**
   * 监测状态：1-监测中；2-暂停监测
   */
  MonitorStatus: number
}

/**
 * DescribeVulsNumberTimeline返回参数结构体
 */
export interface DescribeVulsNumberTimelineResponse {
  /**
   * 统计数据记录数量。
   */
  TotalCount?: number

  /**
   * 用户漏洞数随时间变化统计数据。
   */
  VulsTimeline?: Array<VulsTimeline>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateVulsReport返回参数结构体
 */
export interface CreateVulsReportResponse {
  /**
   * 报告下载地址
   */
  ReportFileUrl?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSites请求参数结构体
 */
export interface CreateSitesRequest {
  /**
   * 站点的url列表
   */
  Urls: Array<string>

  /**
   * 访问网站的客户端标识
   */
  UserAgent?: string
}

/**
 * ModifyConfigAttribute请求参数结构体
 */
export interface ModifyConfigAttributeRequest {
  /**
   * 漏洞告警通知等级，4位分别代表：高危、中危、低危、提示
   */
  NoticeLevel?: string
}

/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等

若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 */
export interface Filter {
  /**
   * 过滤键的名称。
   */
  Name: string

  /**
   * 一个或者多个过滤值。
   */
  Values: Array<string>
}

/**
 * DescribeMonitors请求参数结构体
 */
export interface DescribeMonitorsRequest {
  /**
   * 监控任务ID列表
   */
  MonitorIds?: Array<number>

  /**
   * 过滤条件
   */
  Filters?: Array<Filter>

  /**
   * 偏移量，默认为0
   */
  Offset?: number

  /**
   * 返回数量，默认为10，最大值为100
   */
  Limit?: number
}

/**
 * DeleteSites返回参数结构体
 */
export interface DeleteSitesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteMonitors请求参数结构体
 */
export interface DeleteMonitorsRequest {
  /**
   * 监控任务ID列表
   */
  MonitorIds: Array<number>
}

/**
 * DescribeSitesVerification返回参数结构体
 */
export interface DescribeSitesVerificationResponse {
  /**
   * 验证信息数量。
   */
  TotalCount?: number

  /**
   * 验证信息列表。
   */
  SitesVerification?: Array<SitesVerification>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 站点数据
 */
export interface Site {
  /**
   * 站点ID。
   */
  Id?: number

  /**
   * 监控任务ID，为0时表示未加入监控任务。
   */
  MonitorId?: number

  /**
   * 站点url。
   */
  Url?: string

  /**
   * 站点名称。
   */
  Name?: string

  /**
   * 验证状态：0-未验证；1-已验证；2-验证失效，待重新验证。
   */
  VerifyStatus?: number

  /**
   * 监测状态：0-未监测；1-监测中；2-暂停监测。
   */
  MonitorStatus?: number

  /**
   * 扫描状态：0-待扫描（无任何扫描结果）；1-扫描中（正在进行扫描）；2-已扫描（有扫描结果且不正在扫描）；3-扫描完成待同步结果。
   */
  ScanStatus?: number

  /**
   * 最近一次的AIScanner的扫描任务id，注意取消的情况。
   */
  LastScanTaskId?: number

  /**
   * 最近一次扫描开始时间。
   */
  LastScanStartTime?: string

  /**
   * 最近一次扫描完成时间。
   */
  LastScanFinishTime?: string

  /**
   * 最近一次取消时间，取消即使用上一次扫描结果。
   */
  LastScanCancelTime?: string

  /**
   * 最近一次扫描扫描的页面数。
   */
  LastScanPageCount?: number

  /**
   * normal-正常扫描；deep-深度扫描。
   */
  LastScanScannerType?: string

  /**
   * 最近一次扫描高风险漏洞数量。
   */
  LastScanVulsHighNum?: number

  /**
   * 最近一次扫描中风险漏洞数量。
   */
  LastScanVulsMiddleNum?: number

  /**
   * 最近一次扫描低风险漏洞数量。
   */
  LastScanVulsLowNum?: number

  /**
   * 最近一次扫描提示信息数量。
   */
  LastScanVulsNoticeNum?: number

  /**
   * 记录添加时间。
   */
  CreatedAt?: string

  /**
   * 记录最近修改时间。
   */
  UpdatedAt?: string

  /**
   * 速率限制，每秒发送X个HTTP请求。
   */
  LastScanRateLimit?: number

  /**
   * 最近一次扫描漏洞总数量。
   */
  LastScanVulsNum?: number

  /**
   * 最近一次扫描提示总数量
   */
  LastScanNoticeNum?: number

  /**
   * 扫描进度，百分比整数
   */
  Progress: number

  /**
   * 云用户appid。
   */
  Appid: number

  /**
   * 云用户标识。
   */
  Uin: string

  /**
   * 网站是否需要登录扫描：0-未知；-1-不需要；1-需要。
   */
  NeedLogin: number

  /**
   * 登录后的cookie。
   */
  LoginCookie: string

  /**
   * 登录后的cookie是否有效：0-无效；1-有效。
   */
  LoginCookieValid: number

  /**
   * 用于测试cookie是否有效的URL。
   */
  LoginCheckUrl: string

  /**
   * 用于测试cookie是否有效的关键字。
   */
  LoginCheckKw: string

  /**
   * 禁止扫描器扫描的目录关键字。
   */
  ScanDisallow: string

  /**
   * 访问网站的客户端标识。
   */
  UserAgent: string

  /**
   * 内容检测状态：0-未检测；1-已检测；
   */
  ContentStatus: number

  /**
   * 最近一次扫描内容检测数量
   */
  LastScanContentNum: number
}

/**
 * DescribeConfig返回参数结构体
 */
export interface DescribeConfigResponse {
  /**
   * 漏洞告警通知等级，4位分别代表：高危、中危、低危、提示。
   */
  NoticeLevel?: string

  /**
   * 配置ID。
   */
  Id?: number

  /**
   * 记录创建时间。
   */
  CreatedAt?: string

  /**
   * 记录更新新建。
   */
  UpdatedAt?: string

  /**
   * 云用户appid。
   */
  Appid?: number

  /**
   * 内容检测通知等级-1:通知,0-不通知
   */
  ContentLevel?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSites请求参数结构体
 */
export interface DescribeSitesRequest {
  /**
   * 站点ID列表
   */
  SiteIds?: Array<number>

  /**
   * 过滤条件
   */
  Filters?: Array<Filter>

  /**
   * 偏移量，默认为0
   */
  Offset?: number

  /**
   * 返回数量，默认为10，最大值为100
   */
  Limit?: number
}

/**
 * DescribeSiteQuota请求参数结构体
 */
export type DescribeSiteQuotaRequest = null

/**
 * DescribeSitesVerification请求参数结构体
 */
export interface DescribeSitesVerificationRequest {
  /**
   * 站点的url列表
   */
  Urls: Array<string>
}
