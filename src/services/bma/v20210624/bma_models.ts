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
 * 保护网站信息
 */
export interface ProtectURLInfo {
  /**
   * xxx
   */
  ProtectURLId: number

  /**
   * xxx
   */
  ProtectURL: string

  /**
   * xxx
   */
  ProtectWeb: string

  /**
   * xxx
   */
  ProtectURLStatus: number

  /**
   * xxx
   */
  ProtectURLNote: string

  /**
   * xxx
   */
  CreateTime: string
}

/**
 * ModifyCRWhiteList请求参数结构体
 */
export interface ModifyCRWhiteListRequest {
  /**
   * 白名单ID
   */
  WhiteListId?: number

  /**
   * 平台名称
   */
  PlatForm?: string

  /**
   * 平台站点链接
   */
  PlatUrl?: string

  /**
   * 作者ID
   */
  AuthorId?: string

  /**
   * 作品ID
   */
  WorksId?: number

  /**
   * xxx
   */
  WorkId?: number

  /**
   * xxx
   */
  WhiteSites?: string
}

/**
 * CreateCRUserVerify请求参数结构体
 */
export interface CreateCRUserVerifyRequest {
  /**
   * 用户真实姓名
   */
  UserName: string

  /**
   * 用户身份证ID
   */
  UserID: string

  /**
   * 用户手机号码
   */
  UserPhone: string

  /**
   * 短信验证码
   */
  VerificationCode: string

  /**
   * xxx
   */
  Type?: string
}

/**
 * CreateBPFalseTicket返回参数结构体
 */
export interface CreateBPFalseTicketResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCRRightFile请求参数结构体
 */
export interface CreateCRRightFileRequest {
  /**
   * xxx
   */
  WorkId: number

  /**
   * xxx
   */
  FileList: Array<File>
}

/**
 * CreateCRRight返回参数结构体
 */
export interface CreateCRRightResponse {
  /**
   * 侵权ID
   */
  TortId: number

  /**
   * xxx
   */
  TortNum: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCRWork返回参数结构体
 */
export interface CreateCRWorkResponse {
  /**
   * 作品ID
   */
  WorkId: number

  /**
   * x
   */
  EvidenceId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCRRight请求参数结构体
 */
export interface CreateCRRightRequest {
  /**
   * 已存证的作品ID
   */
  WorkId: number

  /**
   * 侵权链接
   */
  TortUrl: string

  /**
   * 侵权标题
   */
  TortTitle?: string

  /**
   * 侵权平台
   */
  TortPlat?: string

  /**
   * 发函结果回调地址
   */
  RightUrl?: string

  /**
   * x
   */
  FileUrl?: string

  /**
   * x
   */
  ValidStartDate?: string

  /**
   * x
   */
  ValidEndDate?: string

  /**
   * x
   */
  CommFileUrl?: string

  /**
   * x
   */
  CommValidStartDate?: string

  /**
   * x
   */
  CommValidEndDate?: string

  /**
   * x
   */
  HomeFileUrl?: string

  /**
   * x
   */
  HomeValidStartDate?: string

  /**
   * x
   */
  HomeValidEndDate?: string

  /**
   * x
   */
  IsProducer?: string
}

/**
 * CreateBPOfflineTicket返回参数结构体
 */
export interface CreateBPOfflineTicketResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCRTort请求参数结构体
 */
export interface CreateCRTortRequest {
  /**
   * xx
   */
  WorkId: number

  /**
   * xx
   */
  TortURL: string

  /**
   * xx
   */
  TortPlat?: string

  /**
   * xx
   */
  TortTitle?: string
}

/**
 * UpdateCRWork请求参数结构体
 */
export interface UpdateCRWorkRequest {
  /**
   * xx
   */
  WorkId: number

  /**
   * xx
   */
  ContentType?: string

  /**
   * xx
   */
  Content?: string

  /**
   * xx
   */
  CertType?: string
}

/**
 * DescribeBPFakeURLs请求参数结构体
 */
export interface DescribeBPFakeURLsRequest {
  /**
   * xxx
   */
  Filters?: Array<Filter>

  /**
   * xxx
   */
  PageSize?: number

  /**
   * xxx
   */
  PageNumber?: number
}

/**
 * ModifyCRBlockStatus返回参数结构体
 */
export interface ModifyCRBlockStatusResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 版权保护-监测结果
 */
export interface Monitor {
  /**
   * 作品ID
   */
  WorkId: number

  /**
   * 作品名称
   */
  WorkName: string

  /**
   * 作品内容类型 01-视频 02-音频 03-文本 04-图片
   */
  WorkType: string

  /**
   * 侵权平台数量
   */
  TortPlatNum: number

  /**
   * 侵权链接数量
   */
  TortURLNum: number

  /**
   * 监测时间
   */
  MonitorTime: string

  /**
   * 0-待监测 1-监测中 2-不监测 3-暂停监测
   */
  MonitorStatus: number

  /**
   * 作品类型
   */
  WorkCategory: string

  /**
   * xx
   */
  InsertTime: string

  /**
   * xx
   */
  MonitorNote: string
}

/**
 * ModifyCRObtainStatus请求参数结构体
 */
export interface ModifyCRObtainStatusRequest {
  /**
   * xxx
   */
  TortId: number

  /**
   * xxx
   */
  ObtainType: number

  /**
   * xxx
   */
  ObtainDuration: number

  /**
   * xxx
   */
  ObtainUrl?: string
}

/**
 * 举报网址信息
 */
export interface ReportFakeURLInfo {
  /**
   * xxx
   */
  FakeURLId: number

  /**
   * xxx
   */
  DetectTime: string

  /**
   * xxx
   */
  ProtectURL: string

  /**
   * xxx
   */
  ProtectWeb: string

  /**
   * xxx
   */
  FakeURL: string

  /**
   * xxx
   */
  Snapshot: string

  /**
   * xxx
   */
  IP: string

  /**
   * xxx
   */
  IPLoc: string

  /**
   * xxx
   */
  Heat: number

  /**
   * xxx
   */
  Status: number

  /**
   * xxx
   */
  Note: string

  /**
   * xxx
   */
  FakeURLCompany: string

  /**
   * xxx
   */
  FakeURLAttr: string

  /**
   * xxx
   */
  FakeURLName: string

  /**
   * xxx
   */
  FakeURLICP: string

  /**
   * xxx
   */
  FakeURLCreateTime: string

  /**
   * xxx
   */
  FakeURLExpireTime: string

  /**
   * xxx
   */
  BlockTime: string
}

/**
 * DescribeCRWorkInfo请求参数结构体
 */
export interface DescribeCRWorkInfoRequest {
  /**
   * xxx
   */
  WorkId: number
}

/**
 * ModifyBPOfflineAttachment请求参数结构体
 */
export interface ModifyBPOfflineAttachmentRequest {
  /**
   * xx
   */
  LicenseName?: string

  /**
   * xx
   */
  AuthorizationName?: string

  /**
   * xx
   */
  BrandName?: string

  /**
   * xx
   */
  BrandCertificateName?: string

  /**
   * xx
   */
  TransferName?: string
}

/**
 * DescribeBPFakeURLs返回参数结构体
 */
export interface DescribeBPFakeURLsResponse {
  /**
   * xxx
   */
  FakeURLInfos: Array<FakeURLInfo>

  /**
   * xxx
   */
  TotalCount: number

  /**
   * xxx
   */
  ExportURL: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateBPOfflineAttachment返回参数结构体
 */
export interface CreateBPOfflineAttachmentResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBPReportFakeURLs请求参数结构体
 */
export interface DescribeBPReportFakeURLsRequest {
  /**
   * xxx
   */
  Filters?: Array<Filter>

  /**
   * xxx
   */
  PageSize?: number

  /**
   * xxx
   */
  PageNumber?: number
}

/**
 * 监测侵权信息详情
 */
export interface MonitorTort {
  /**
   * 侵权信息ID
   */
  TortId: number

  /**
   * 侵权标题
   */
  TortTitle: string

  /**
   * 侵权平台
   */
  TortPlat: string

  /**
   * 侵权链接
   */
  TortURL: string

  /**
   * 侵权链接发布时间
   */
  PubTime: string

  /**
   * 作者
   */
  Author: string

  /**
   * xxx
   */
  DetectTime: string

  /**
   * 1
   */
  ObtainStatus: number

  /**
   * 1
   */
  RightStatus: number

  /**
   * 1
   */
  BlockStatus: number

  /**
   * 1
   */
  TortNum: string

  /**
   * 1
   */
  ObtainNote: string

  /**
   * 1
   */
  WorkTitle: string
}

/**
 * CreateBPFakeURL请求参数结构体
 */
export interface CreateBPFakeURLRequest {
  /**
   * xxx
   */
  ProtectURLId?: number

  /**
   * xxx
   */
  FakeURL?: string

  /**
   * xxx
   */
  SnapshotNames?: Array<string>

  /**
   * xxx
   */
  Note?: string
}

/**
 * CreateBPProtectURLs返回参数结构体
 */
export interface CreateBPProtectURLsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBPProtectURLs返回参数结构体
 */
export interface DescribeBPProtectURLsResponse {
  /**
   * xxx
   */
  ProtectURLInfos: Array<ProtectURLInfo>

  /**
   * xxx
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCRMonitors返回参数结构体
 */
export interface DescribeCRMonitorsResponse {
  /**
   * 监测结果
   */
  Monitors: Array<Monitor>

  /**
   * 记录总条数
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCRCompanyVerify返回参数结构体
 */
export interface CreateCRCompanyVerifyResponse {
  /**
   * 认证状态 0-认证成功 1-认证失败
   */
  Status: number

  /**
   * 认证结果返回
   */
  Note: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateBPOfflineAttachment请求参数结构体
 */
export interface CreateBPOfflineAttachmentRequest {
  /**
   * xxx
   */
  BrandName?: string

  /**
   * xx
   */
  BrandCertificateName?: string

  /**
   * xx
   */
  TransferName?: string

  /**
   * xx
   */
  AuthorizationName?: string
}

/**
 * CreateBPProtectURLs请求参数结构体
 */
export interface CreateBPProtectURLsRequest {
  /**
   * xxx
   */
  CompanyName?: string

  /**
   * xxx
   */
  Phone?: string

  /**
   * xxx
   */
  LicenseName?: string

  /**
   * xxx
   */
  ProtectURLs?: Array<string>

  /**
   * xxx
   */
  ProtectWebs?: Array<string>
}

/**
 * UpdateCRWork返回参数结构体
 */
export interface UpdateCRWorkResponse {
  /**
   * xx
   */
  WorkId: number

  /**
   * xx
   */
  EvidenceId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCRBlockStatus请求参数结构体
 */
export interface ModifyCRBlockStatusRequest {
  /**
   * 侵权ID
   */
  TortId: number

  /**
   * 拦截结果回调地址
   */
  BlockUrl?: string
}

/**
 * ModifyCRMonitor请求参数结构体
 */
export interface ModifyCRMonitorRequest {
  /**
   * 作品ID
   */
  WorkId: number

  /**
   * 监测状态 1-开启监测 2-关闭监测
   */
  MonitorStatus: string

  /**
   * 默认不停止，支持续期
   */
  MonitorEnd?: string
}

/**
 * DescribeCRMonitorDetail返回参数结构体
 */
export interface DescribeCRMonitorDetailResponse {
  /**
   * MonitorTort数组
   */
  Torts: Array<MonitorTort>

  /**
   * 总记录数
   */
  TotalCount: number

  /**
   * x
   */
  MonitorStatus: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCRWork请求参数结构体
 */
export interface CreateCRWorkRequest {
  /**
   * 作品名称
   */
  WorkName: string

  /**
   * 作品分类
   */
  WorkCategory: string

  /**
   * 作品内容类型
   */
  WorkType: string

  /**
   * 作品标签
   */
  WorkSign?: string

  /**
   * 作品图片
   */
  WorkPic?: string

  /**
   * 创作描述
   */
  WorkDesc?: string

  /**
   * 是否原创 0:否 1:是
   */
  IsOriginal?: string

  /**
   * 是否发布 0：未发布 1：已发布
   */
  IsRelease?: string

  /**
   * 著作权人ID
   */
  ProducerID?: number

  /**
   * 创作时间
   */
  ProduceTime?: string

  /**
   * 样品文件路径
   */
  SampleContentURL?: string

  /**
   * 样本下载Url
   */
  SampleDownloadURL?: string

  /**
   * 授予类型
   */
  GrantType?: string

  /**
   * 作品发布Url
   */
  SamplePublicURL?: string

  /**
   * 是否启用监测 0：不启用 1：启用 默认为0
   */
  IsMonitor?: string

  /**
   * 是否启用存证0：不启用 1：启用 默认为1
   */
  IsCert?: string

  /**
   * 存证回调地址
   */
  CertUrl?: string

  /**
   * 监测回调地址
   */
  MonitorUrl?: string

  /**
   * 创作性质（原创,改编,翻译,汇编,注释,整理,其他)
   */
  ProduceType?: string

  /**
   * xxx
   */
  WhiteLists?: Array<string>

  /**
   * x
   */
  WorkId?: number

  /**
   * xx
   */
  ProducerName?: string

  /**
   * xx
   */
  Nickname?: string

  /**
   * x
   */
  Authorization?: string

  /**
   * x
   */
  AuthorizationStartTime?: string

  /**
   * x
   */
  AuthorizationEndTime?: string

  /**
   * x
   */
  ContentType?: string

  /**
   * x
   */
  Content?: string

  /**
   * x
   */
  MonitorEndTime?: string
}

/**
 * DescribeBPCompanyInfo请求参数结构体
 */
export type DescribeBPCompanyInfoRequest = null

/**
 * DescribeBPReportFakeURLs返回参数结构体
 */
export interface DescribeBPReportFakeURLsResponse {
  /**
   * xxx
   */
  ReportFakeURLInfos: Array<ReportFakeURLInfo>

  /**
   * xxx
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCRMonitorDetail请求参数结构体
 */
export interface DescribeCRMonitorDetailRequest {
  /**
   * 作品ID
   */
  WorkId: number

  /**
   * 页数
   */
  PageSize?: number

  /**
   * 页码
   */
  PageNumber?: number

  /**
   * x
   */
  Filters?: Array<Filter>
}

/**
 * 过滤参数
 */
export type Filter = null

/**
 * CreateCRBlock返回参数结构体
 */
export interface CreateCRBlockResponse {
  /**
   * 侵权ID
   */
  TortId: number

  /**
   * xxx
   */
  TortNum: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCRRightStatus请求参数结构体
 */
export interface ModifyCRRightStatusRequest {
  /**
   * 侵权ID
   */
  TortId: number

  /**
   * 发函结果回调地址
   */
  RightUrl?: string
}

/**
 * DescribeCRMonitors请求参数结构体
 */
export interface DescribeCRMonitorsRequest {
  /**
   * 过滤条件
   */
  Filters?: Array<Filter>

  /**
   * 页数
   */
  PageSize?: number

  /**
   * 页码
   */
  PageNumber?: number
}

/**
 * DescribeCRWorkInfo返回参数结构体
 */
export interface DescribeCRWorkInfoResponse {
  /**
   * x
   */
  WorkName: string

  /**
   * x
   */
  MonitorStatus: number

  /**
   * x
   */
  AuthStatus: number

  /**
   * x
   */
  CommStatus: number

  /**
   * x
   */
  IsProducer: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCRRightFile返回参数结构体
 */
export interface CreateCRRightFileResponse {
  /**
   * xxx
   */
  FileIds: Array<number>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCRWhiteList返回参数结构体
 */
export interface ModifyCRWhiteListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 仿冒网站信息
 */
export interface FakeURLInfo {
  /**
   * xxx
   */
  FakeURLId: number

  /**
   * xxx
   */
  ProtectWeb: string

  /**
   * xxx
   */
  DetectTime: string

  /**
   * xxx
   */
  FakeURL: string

  /**
   * xxx
   */
  Snapshot: string

  /**
   * xxx
   */
  IP: string

  /**
   * xxx
   */
  IPLoc: string

  /**
   * xxx
   */
  Heat: number

  /**
   * xxx
   */
  Status: number

  /**
   * xxx
   */
  Note: string

  /**
   * xxx
   */
  FakeURLCompany: string

  /**
   * xxx
   */
  FakeURLAttr: string

  /**
   * xxx
   */
  FakeURLName: string

  /**
   * xxx
   */
  FakeURLICP: string

  /**
   * xxx
   */
  FakeURLCreateTime: string

  /**
   * xxx
   */
  FakeURLExpireTime: string
}

/**
 * CreateBPOfflineTicket请求参数结构体
 */
export interface CreateBPOfflineTicketRequest {
  /**
   * xxx
   */
  FakeURLId?: number
}

/**
 * CreateCRUserVerify返回参数结构体
 */
export interface CreateCRUserVerifyResponse {
  /**
   * 认证状态 0-认证成功 1-认证失败
   */
  Status: number

  /**
   * 认证结果返回
   */
  Note: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 商标信息
 */
export interface BrandData {
  /**
   * xxx
   */
  BrandName: string

  /**
   * xxx
   */
  BrandCertificateName: string

  /**
   * xxx
   */
  BrandStatus: number

  /**
   * xxx
   */
  BrandNote: string

  /**
   * xxx
   */
  TransferName: string

  /**
   * xxx
   */
  TransferStatus: number

  /**
   * xxx
   */
  TransferNote: string
}

/**
 * ModifyCRRightStatus返回参数结构体
 */
export interface ModifyCRRightStatusResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBPCompanyInfo返回参数结构体
 */
export interface DescribeBPCompanyInfoResponse {
  /**
   * xx
   */
  CompanyName: string

  /**
   * xx
   */
  Phone: string

  /**
   * xx
   */
  LicenseName: string

  /**
   * xx
   */
  LicenseStatus: number

  /**
   * xx
   */
  LicenseNote: string

  /**
   * xx
   */
  AuthorizationName: string

  /**
   * xx
   */
  AuthorizationStatus: number

  /**
   * xx
   */
  AuthorizationNote: string

  /**
   * xx
   */
  BrandDatas: Array<BrandData>

  /**
   * xx
   */
  CompanyId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyBPOfflineAttachment返回参数结构体
 */
export interface ModifyBPOfflineAttachmentResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCRBlock请求参数结构体
 */
export interface CreateCRBlockRequest {
  /**
   * 已存证的作品ID
   */
  WorkId: number

  /**
   * 侵权链接
   */
  TortUrl: string

  /**
   * 侵权标题
   */
  TortTitle?: string

  /**
   * 侵权平台
   */
  TortPlat?: string

  /**
   * 拦截结果回调地址
   */
  BlockUrl?: string

  /**
   * x
   */
  FileUrl?: string

  /**
   * x
   */
  ValidStartDate?: string

  /**
   * x
   */
  ValidEndDate?: string

  /**
   * xx
   */
  TortPic?: string

  /**
   * x
   */
  CommFileUrl?: string

  /**
   * x
   */
  CommValidStartDate?: string

  /**
   * x
   */
  CommValidEndDate?: string

  /**
   * x
   */
  IsProducer?: string
}

/**
 * CreateBPFakeURL返回参数结构体
 */
export interface CreateBPFakeURLResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCRTort返回参数结构体
 */
export interface CreateCRTortResponse {
  /**
   * xx
   */
  WorkId: number

  /**
   * xx
   */
  TortId: number

  /**
   * xx
   */
  TortTitle: string

  /**
   * xx
   */
  TortPlat: string

  /**
   * xx
   */
  TortURL: string

  /**
   * xx
   */
  TortDomain: string

  /**
   * xx
   */
  TortBodyName: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateBPFalseTicket请求参数结构体
 */
export interface CreateBPFalseTicketRequest {
  /**
   * xxx
   */
  FakeURL?: string
}

/**
 * ModifyCRMonitor返回参数结构体
 */
export interface ModifyCRMonitorResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 权属文件列表
 */
export interface File {
  /**
   * xxx
   */
  FileUrl: string

  /**
   * xxx
   */
  FileType: number

  /**
   * xxx
   */
  ValidStartDate: string

  /**
   * xxx
   */
  ValidEndDate: string
}

/**
 * DescribeBPProtectURLs请求参数结构体
 */
export interface DescribeBPProtectURLsRequest {
  /**
   * xxx
   */
  PageSize?: number

  /**
   * xxx
   */
  PageNumber?: number
}

/**
 * ModifyCRObtainStatus返回参数结构体
 */
export interface ModifyCRObtainStatusResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCRCompanyVerify请求参数结构体
 */
export interface CreateCRCompanyVerifyRequest {
  /**
   * 企业名称
   */
  CompanyName: string

  /**
   * 企业认证号码类型 1：社会信用代码 2：组织机构代码 3：企业工商注册码 4：其他 默认为1
   */
  CompanyIDType?: string

  /**
   * 企业证件号码
   */
  CompanyID?: string

  /**
   * 企业法人姓名
   */
  CompanyLegalName?: string

  /**
   * 管理员名称
   */
  ManagerName?: string

  /**
   * 管理员手机号
   */
  ManagerPhone?: string

  /**
   * 手机验证码
   */
  VerificationCode?: string

  /**
   * xxx
   */
  Type?: string
}
