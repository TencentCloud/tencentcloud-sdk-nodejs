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
 * DescribeCertificateBindResourceTaskDetail请求参数结构体
 */
export interface DescribeCertificateBindResourceTaskDetailRequest {
  /**
   * 任务ID，根据任务ID查询绑定云资源结果
   */
  TaskId: string
  /**
   * 每页展示数量， 默认10，最大值100; 分页总数为云资源地域下实例总数， 即第一页会拉群每个云资源的地域下面Limit数量实例
   */
  Limit?: string
  /**
   * 当前偏移量
   */
  Offset?: string
  /**
   * 查询资源类型的结果详情， 不传则查询所有
   */
  ResourceTypes?: Array<string>
  /**
   * 查询地域列表的数据，CLB、TKE、WAF、APIGATEWAY、TCB支持地域查询， 其他资源类型不支持
   */
  Regions?: Array<string>
}

/**
 * 云原生网关证书信息
 */
export interface GatewayCertificate {
  /**
   * 网关证书ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * 网关证书名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 绑定域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  BindDomains?: Array<string>
  /**
   * 证书来源
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertSource?: string
  /**
   * 当前绑定的SSL证书ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertId?: string
}

/**
 * DescribeHostDdosInstanceList请求参数结构体
 */
export interface DescribeHostDdosInstanceListRequest {
  /**
   * 待部署的证书ID
   */
  CertificateId: string
  /**
   * 部署资源类型
   */
  ResourceType: string
  /**
   * 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时
   */
  IsCache?: number
  /**
   * 过滤参数列表； FilterKey：domainMatch（查询域名是否匹配的实例列表） FilterValue：1，表示查询匹配； 0，表示查询不匹配； 默认查询匹配
   */
  Filters?: Array<Filter>
  /**
   * 已部署的证书ID
   */
  OldCertificateId?: string
}

/**
 * CompleteCertificate请求参数结构体
 */
export interface CompleteCertificateRequest {
  /**
   * 证书ID
   */
  CertificateId: string
}

/**
 * DownloadCertificate返回参数结构体
 */
export interface DownloadCertificateResponse {
  /**
   * ZIP base64 编码内容，base64 解码后可保存为 ZIP 文件。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Content?: string
  /**
   * MIME 类型：application/zip = ZIP 压缩文件。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContentType?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 管理人信息
 */
export interface ManagerInfo {
  /**
   * 状态: audit: 审核中 ok: 审核通过 invalid: 失效 expiring: 即将过期 expired: 已过期
   */
  Status: string
  /**
   * 管理人姓名
   */
  ManagerFirstName: string
  /**
   * 管理人姓名
   */
  ManagerLastName: string
  /**
   * 管理人职位
   */
  ManagerPosition: string
  /**
   * 管理人电话
   */
  ManagerPhone: string
  /**
   * 管理人邮箱
   */
  ManagerMail: string
  /**
   * 管理人所属部门
   */
  ManagerDepartment: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime: string
  /**
   * 管理人域名数量
   */
  DomainCount: number
  /**
   * 管理人证书数量
   */
  CertCount: number
  /**
   * 管理人ID
   */
  ManagerId: number
  /**
   * 审核有效到期时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireTime: string
  /**
   * 最近一次提交审核时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubmitAuditTime: string
  /**
   * 审核通过时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  VerifyTime: string
  /**
   * 具体审核状态信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatusInfo: Array<ManagerStatusInfo>
}

/**
 * DescribeHostDeployRecordDetail返回参数结构体
 */
export interface DescribeHostDeployRecordDetailResponse {
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 证书部署记录列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeployRecordDetailList?: Array<DeployRecordDetail>
  /**
   * 成功总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  SuccessTotalCount?: number
  /**
   * 失败总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailedTotalCount?: number
  /**
   * 部署中总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunningTotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TCB访问服务实例
 */
export interface TCBAccessInstance {
  /**
   * 域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Domain?: string
  /**
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 统一域名状态

注意：此字段可能返回 null，表示取不到有效值。
   */
  UnionStatus?: number
  /**
   * 是否被抢占, 被抢占表示域名被其他环境绑定了，需要解绑或者重新绑定。

注意：此字段可能返回 null，表示取不到有效值。
   */
  IsPreempted?: boolean
  /**
   * icp黑名单封禁状态，0-未封禁，1-封禁

注意：此字段可能返回 null，表示取不到有效值。
   */
  ICPStatus?: number
  /**
   * 已绑定证书ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  OldCertificateId?: string
}

/**
 * 部署记录详情
 */
export interface DeployRecordDetail {
  /**
   * 部署记录详情ID
   */
  Id?: number
  /**
   * 部署证书ID
   */
  CertId?: string
  /**
   * 原绑定证书ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  OldCertId?: string
  /**
   * 部署实例ID
   */
  InstanceId?: string
  /**
   * 部署实例名称
   */
  InstanceName?: string
  /**
   * 部署监听器ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ListenerId?: string
  /**
   * 部署域名列表
   */
  Domains?: Array<string>
  /**
   * 部署监听器协议
注意：此字段可能返回 null，表示取不到有效值。
   */
  Protocol?: string
  /**
   * 部署状态
   */
  Status?: number
  /**
   * 部署错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMsg?: string
  /**
   * 部署记录详情创建时间
   */
  CreateTime?: string
  /**
   * 部署记录详情最后一次更新时间
   */
  UpdateTime?: string
  /**
   * 部署监听器名称
   */
  ListenerName?: string
  /**
   * 是否开启SNI
   */
  SniSwitch?: number
  /**
   * COS存储桶名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Bucket?: string
  /**
   * 命名空间名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Namespace?: string
  /**
   * secret名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecretName?: string
  /**
   * 端口
注意：此字段可能返回 null，表示取不到有效值。
   */
  Port?: number
  /**
   * TCB环境ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnvId?: string
  /**
   * 部署的TCB类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  TCBType?: string
  /**
   * 部署的TCB地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
}

/**
 * CancelCertificateOrder请求参数结构体
 */
export interface CancelCertificateOrderRequest {
  /**
   * 证书 ID。
   */
  CertificateId: string
}

/**
 * ModifyCertificateProject返回参数结构体
 */
export interface ModifyCertificateProjectResponse {
  /**
   * 修改所属项目成功的证书集合。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SuccessCertificates?: Array<string>
  /**
   * 修改所属项目失败的证书集合。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailCertificates?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 获取证书列表（DescribeCertificates）返回参数键为 Certificates 的内容。
 */
export interface Certificates {
  /**
   * 用户 UIN。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUin?: string
  /**
   * 项目 ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * 证书来源。
注意：此字段可能返回 null，表示取不到有效值。
   */
  From?: string
  /**
   * 证书套餐类型：
2 = TrustAsia TLS RSA CA，3 = SecureSite 增强型企业版（EV Pro）， 4 = SecureSite 增强型（EV）， 5 = SecureSite 企业型专业版（OV Pro）， 6 = SecureSite 企业型（OV）， 7 = SecureSite 企业型（OV）通配符， 8 = Geotrust 增强型（EV）， 9 = Geotrust 企业型（OV）， 10 = Geotrust 企业型（OV）通配符， 11 = TrustAsia 域名型多域名 SSL 证书， 12 = TrustAsia 域名型（DV）通配符， 13 = TrustAsia 企业型通配符（OV）SSL 证书（D3）， 14 = TrustAsia 企业型（OV）SSL 证书（D3）， 15 = TrustAsia 企业型多域名 （OV）SSL 证书（D3）， 16 = TrustAsia 增强型 （EV）SSL 证书（D3）， 17 = TrustAsia 增强型多域名（EV）SSL 证书（D3）， 18 = GlobalSign 企业型（OV）SSL 证书， 19 = GlobalSign 企业型通配符 （OV）SSL 证书， 20 = GlobalSign 增强型 （EV）SSL 证书， 21 = TrustAsia 企业型通配符多域名（OV）SSL 证书（D3）， 22 = GlobalSign 企业型多域名（OV）SSL 证书， 23 = GlobalSign 企业型通配符多域名（OV）SSL 证书， 24 = GlobalSign 增强型多域名（EV）SSL 证书，25 = Wotrus 域名型证书，26 = Wotrus 域名型多域名证书，27 = Wotrus 域名型通配符证书，28 = Wotrus 企业型证书，29 = Wotrus 企业型多域名证书，30 = Wotrus 企业型通配符证书，31 = Wotrus 增强型证书，32 = Wotrus 增强型多域名证书，33 = Wotrus 国密域名型证书，34 = Wotrus 国密域名型多域名证书，35 = Wotrus 国密域名型通配符证书，37 = Wotrus 国密企业型证书，38 = Wotrus 国密企业型多域名证书，39 = Wotrus 国密企业型通配符证书，40 = Wotrus 国密增强型证书，41 = Wotrus 国密增强型多域名证书，42 = TrustAsia 域名型通配符多域名证书，43 = DNSPod-企业型(OV)SSL证书，44 = DNSPod-企业型(OV)通配符SSL证书，45 = DNSPod-企业型(OV)多域名SSL证书， 46 = DNSPod-增强型(EV)SSL证书，47 = DNSPod-增强型(EV)多域名SSL证书，48 = DNSPod-域名型(DV)SSL证书，49 = DNSPod-域名型(DV)通配符SSL证书，50 = DNSPod-域名型(DV)多域名SSL证书，51 = DNSPod（国密）-企业型(OV)SSL证书，52 = DNSPod（国密）-企业型(OV)通配符SSL证书，53 = DNSPod（国密）-企业型(OV)多域名SSL证书，54 = DNSPod（国密）-域名型(DV)SSL证书，55 = DNSPod（国密）-域名型(DV)通配符SSL证书， 56 = DNSPod（国密）-域名型(DV)多域名SSL证书，57 = SecureSite 企业型专业版多域名(OV Pro)，58 = SecureSite 企业型多域名(OV)，59 = SecureSite 增强型专业版多域名(EV Pro)，60 = SecureSite 增强型多域名(EV)，61 = Geotrust 增强型多域名(EV)
注意：此字段可能返回 null，表示取不到有效值。
   */
  PackageType?: string
  /**
   * 证书类型：CA = 客户端证书，SVR = 服务器证书。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertificateType?: string
  /**
   * 颁发者。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductZhName?: string
  /**
   * 主域名。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Domain?: string
  /**
   * 备注名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Alias?: string
  /**
   * 状态。0：审核中，1：已通过，2：审核失败，3：已过期，4：验证方式为 DNS_AUTO 类型的证书， 已添加DNS记录，5：企业证书，待提交，6：订单取消中，7：已取消，8：已提交资料， 待上传确认函，9：证书吊销中，10：已吊销，11：重颁发中，12：待上传吊销确认函，13：免费证书待提交资料状态，14：已退款，
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 证书扩展信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertificateExtra?: CertificateExtra
  /**
   * 漏洞扫描状态：INACTIVE = 未开启，ACTIVE = 已开启
注意：此字段可能返回 null，表示取不到有效值。
   */
  VulnerabilityStatus?: string
  /**
   * 状态信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatusMsg?: string
  /**
   * 验证类型：DNS_AUTO = 自动DNS验证，DNS = 手动DNS验证，FILE = 文件验证，EMAIL = 邮件验证。
注意：此字段可能返回 null，表示取不到有效值。
   */
  VerifyType?: string
  /**
   * 证书生效时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertBeginTime?: string
  /**
   * 证书过期时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertEndTime?: string
  /**
   * 证书有效期，单位（月）。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ValidityPeriod?: string
  /**
   * 创建时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  InsertTime?: string
  /**
   * 证书 ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertificateId?: string
  /**
   * 证书包含的多个域名（包含主域名）。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubjectAltName?: Array<string>
  /**
   * 证书类型名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PackageTypeName?: string
  /**
   * 状态名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatusName?: string
  /**
   * 是否为 VIP 客户。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsVip?: boolean
  /**
   * 是否为 DV 版证书。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsDv?: boolean
  /**
   * 是否为泛域名证书。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsWildcard?: boolean
  /**
   * 是否启用了漏洞扫描功能。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsVulnerability?: boolean
  /**
   * 是否可续费。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RenewAble?: boolean
  /**
   * 项目信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectInfo?: ProjectInfo
  /**
   * 关联的云资源，暂不可用
注意：此字段可能返回 null，表示取不到有效值。
   */
  BoundResource?: Array<string>
  /**
   * 是否可部署。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Deployable?: boolean
  /**
   * 标签列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tags>
  /**
   * 是否已忽略到期通知
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsIgnore?: boolean
  /**
   * 是否国密证书
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsSM?: boolean
  /**
   * 证书算法
注意：此字段可能返回 null，表示取不到有效值。
   */
  EncryptAlgorithm?: string
  /**
   * 上传CA证书的加密算法
注意：此字段可能返回 null，表示取不到有效值。
   */
  CAEncryptAlgorithms?: Array<string>
  /**
   * 上传CA证书的过期时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CAEndTimes?: Array<string>
  /**
   * 上传CA证书的通用名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  CACommonNames?: Array<string>
  /**
   * 证书预审核信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  PreAuditInfo?: PreAuditInfo
  /**
   * 是否自动续费
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoRenewFlag?: number
  /**
   * 托管状态，0，托管中，5，资源替换中， 10， 托管完成， -1未托管 
注意：此字段可能返回 null，表示取不到有效值。
   */
  HostingStatus?: number
  /**
   * 托管完成时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  HostingCompleteTime?: string
  /**
   * 托管新证书ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  HostingRenewCertId?: string
  /**
   * 存在的续费证书ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  HasRenewOrder?: string
  /**
   * 重颁发证书原证书是否删除
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReplaceOriCertIsDelete?: boolean
  /**
   * 是否即将过期， 证书即将到期的30天内为即将过期
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsExpiring?: boolean
  /**
   * DV证书添加验证截止时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  DVAuthDeadline?: string
  /**
   * 域名验证通过时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ValidationPassedTime?: string
  /**
   * 证书关联的多域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertSANs?: Array<string>
  /**
   * 域名验证驳回信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  AwaitingValidationMsg?: string
  /**
   * 是否允许下载
注意：此字段可能返回 null，表示取不到有效值。
   */
  AllowDownload?: boolean
  /**
   * 证书域名是否全部在DNSPOD托管解析
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsDNSPODResolve?: boolean
  /**
   * 是否是权益点购买的证书
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsPackage?: boolean
  /**
   * 是否存在私钥密码
注意：此字段可能返回 null，表示取不到有效值。
   */
  KeyPasswordCustomFlag?: boolean
  /**
   * 支持下载的WEB服务器类型： nginx、apache、iis、tomcat、jks、root、other
注意：此字段可能返回 null，表示取不到有效值。
   */
  SupportDownloadType?: SupportDownloadType
}

/**
 * 获取证书列表（DescribeCertificates）返回参数键为 Certificates 数组下，key为CertificateExtra 的内容。
 */
export interface CertificateExtra {
  /**
   * 证书可配置域名数量。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DomainNumber?: string
  /**
   * 原始证书 ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OriginCertificateId?: string
  /**
   * 重颁发证书原始 ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReplacedBy?: string
  /**
   * 重颁发证书新 ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReplacedFor?: string
  /**
   * 新订单证书 ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RenewOrder?: string
  /**
   * 是否是国密证书
注意：此字段可能返回 null，表示取不到有效值。
   */
  SMCert?: number
  /**
   * 公司类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  CompanyType?: number
}

/**
 * edgeone实例详情 - 异步关联云资源数据结构
 */
export interface TeoInstanceList {
  /**
   * edgeone实例详情	
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceList?: Array<TeoInstanceDetail>
  /**
   * edgeone实例总数
   */
  TotalCount?: number
}

/**
 * 根证书
 */
export interface RootCertificates {
  /**
   * 国密签名证书
注意：此字段可能返回 null，表示取不到有效值。
   */
  Sign: string
  /**
   * 国密加密证书
注意：此字段可能返回 null，表示取不到有效值。
   */
  Encrypt: string
  /**
   * 标准证书
注意：此字段可能返回 null，表示取不到有效值。
   */
  Standard: string
}

/**
 * CDN实例详情
 */
export interface CdnInstanceDetail {
  /**
   * 域名
   */
  Domain?: string
  /**
   * 已部署证书ID
   */
  CertId?: string
  /**
   * 域名状态
   */
  Status?: string
  /**
   * 域名计费状态
   */
  HttpsBillingSwitch?: string
}

/**
 * VerifyManager返回参数结构体
 */
export interface VerifyManagerResponse {
  /**
   * 管理人ID
   */
  ManagerId: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCertificateDetail请求参数结构体
 */
export interface DescribeCertificateDetailRequest {
  /**
   * 证书 ID。
   */
  CertificateId: string
}

/**
 * tke namespace详情
 */
export interface TkeNameSpaceDetail {
  /**
   * namespace名称
   */
  Name: string
  /**
   * secret列表
   */
  SecretList: Array<TkeSecretDetail>
}

/**
 * CreateCertificateBindResourceSyncTask返回参数结构体
 */
export interface CreateCertificateBindResourceSyncTaskResponse {
  /**
   * 证书关联云资源异步任务ID列表
   */
  CertTaskIds?: Array<CertTaskId>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * tke实例详情 - 异步关联云资源数据结构
 */
export interface TkeInstanceList {
  /**
   * 地域
   */
  Region?: string
  /**
   * tke实例详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceList?: Array<TkeInstanceDetail>
  /**
   * 该地域下tke实例总数
   */
  TotalCount?: number
}

/**
 * DescribeDeployedResources请求参数结构体
 */
export interface DescribeDeployedResourcesRequest {
  /**
   * 证书ID
   */
  CertificateIds: Array<string>
  /**
   * 资源类型:clb,cdn,live,waf,antiddos
   */
  ResourceType: string
}

/**
 * TCB静态托管服务实例
 */
export interface TCBHostInstance {
  /**
   * 域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Domain?: string
  /**
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 解析状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  DNSStatus?: string
  /**
   * 已绑定证书ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  OldCertificateId?: string
}

/**
 * UploadRevokeLetter请求参数结构体
 */
export interface UploadRevokeLetterRequest {
  /**
   * 证书 ID。
   */
  CertificateId: string
  /**
   * base64编码后的证书确认函文件，格式应为jpg、jpeg、png、pdf，大小应在1kb与1.4M之间。
   */
  RevokeLetter: string
}

/**
 * CLB实例监听器
 */
export interface ClbListener {
  /**
   * 监听器ID
   */
  ListenerId: string
  /**
   * 监听器名称
   */
  ListenerName: string
  /**
   * 是否开启SNI，1为开启，0为关闭
   */
  SniSwitch: number
  /**
   * 监听器协议类型， HTTPS|TCP_SSL
   */
  Protocol: string
  /**
   * 监听器绑定的证书数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Certificate: Certificate
  /**
   * 监听器规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Rules: Array<ClbListenerRule>
  /**
   * 不匹配域名列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  NoMatchDomains?: Array<string>
}

/**
 * DescribeCompanies返回参数结构体
 */
export interface DescribeCompaniesResponse {
  /**
   * 公司列表
   */
  Companies: Array<CompanyInfo>
  /**
   * 公司总数
   */
  TotalCount: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckCertificateChain返回参数结构体
 */
export interface CheckCertificateChainResponse {
  /**
   * true为通过检查，false为未通过检查。
   */
  IsValid?: boolean
  /**
   * true为可信CA，false为不可信CA。
   */
  IsTrustedCA?: boolean
  /**
   * 包含证书链中每一段证书的通用名称。
   */
  Chains?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeHostCosInstanceList返回参数结构体
 */
export interface DescribeHostCosInstanceListResponse {
  /**
   * COS实例列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceList?: Array<CosInstanceDetail>
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 异步刷新总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AsyncTotalNum?: number
  /**
   * 异步刷新当前执行数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AsyncOffset?: number
  /**
   * 当前缓存读取时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  AsyncCacheTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 返回参数键为 DvAuths 的内容。
 */
export interface DvAuths {
  /**
   * DV 认证密钥。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DvAuthKey: string
  /**
   * DV 认证值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DvAuthValue: string
  /**
   * DV 认证值域名。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DvAuthDomain: string
  /**
   * DV 认证值路径。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DvAuthPath: string
  /**
   * DV 认证子域名，
注意：此字段可能返回 null，表示取不到有效值。
   */
  DvAuthSubDomain: string
  /**
   * DV 认证类型。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DvAuthVerifyType: string
}

/**
 * ModifyCertificateAlias请求参数结构体
 */
export interface ModifyCertificateAliasRequest {
  /**
   * 证书 ID。
   */
  CertificateId: string
  /**
   * 备注名称。
   */
  Alias?: string
}

/**
 * DescribeManagerDetail请求参数结构体
 */
export interface DescribeManagerDetailRequest {
  /**
   * 管理人ID
   */
  ManagerId: number
  /**
   * 分页每页数量
   */
  Limit?: number
  /**
   * 分页偏移量
   */
  Offset?: number
}

/**
 * CLB监听器规则
 */
export interface ClbListenerRule {
  /**
   * 规则ID
   */
  LocationId: string
  /**
   * 规则绑定的域名
   */
  Domain: string
  /**
   * 规则是否匹配待绑定证书的域名
   */
  IsMatch: boolean
  /**
   * 规则已绑定的证书数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Certificate: Certificate
  /**
   * 不匹配域名列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  NoMatchDomains?: Array<string>
}

/**
 * Lighthouse实例
 */
export interface LighthouseInstanceDetail {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 实例名称
   */
  InstanceName: string
  /**
   * IP地址
   */
  IP: Array<string>
  /**
   * 可选择域名
   */
  Domain: Array<string>
}

/**
 * DescribeCertificateOperateLogs请求参数结构体
 */
export interface DescribeCertificateOperateLogsRequest {
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 请求日志数量，默认为20。
   */
  Limit?: number
  /**
   * 开始时间，默认15天前。
   */
  StartTime?: string
  /**
   * 结束时间，默认现在时间。
   */
  EndTime?: string
}

/**
 * CancelCertificateOrder返回参数结构体
 */
export interface CancelCertificateOrderResponse {
  /**
   * 取消订单成功的证书 ID。
   */
  CertificateId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCertificatesExpiringNotificationSwitch返回参数结构体
 */
export interface ModifyCertificatesExpiringNotificationSwitchResponse {
  /**
   * 证书ID列表
   */
  CertificateIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 权益包基本信息
 */
export interface PackageInfo {
  /**
   * 权益包ID。
   */
  PackageId: string
  /**
   * 权益包内权益点总量。
   */
  Total: number
  /**
   * 权益包内权益点余量。
   */
  Balance: number
  /**
   * 权益包名称。
   */
  Type: string
  /**
   * 权益点是转入时，来源信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceUin: number
  /**
   * 权益点状态。
   */
  Status: string
  /**
   * 过期时间。
   */
  ExpireTime: string
  /**
   * 更新时间。
   */
  UpdateTime: string
  /**
   * 生成时间。
   */
  CreateTime: string
  /**
   * 来源类型。
   */
  SourceType: string
  /**
   * 转移信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TransferOutInfos: Array<PackageTransferOutInfo>
}

/**
 * DescribeHostLiveInstanceList请求参数结构体
 */
export interface DescribeHostLiveInstanceListRequest {
  /**
   * 待部署的证书ID
   */
  CertificateId: string
  /**
   * 部署资源类型
   */
  ResourceType: string
  /**
   * 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时
   */
  IsCache?: number
  /**
   * 过滤参数列表； FilterKey：domainMatch（查询域名是否匹配的实例列表） FilterValue：1，表示查询匹配； 0，表示查询不匹配； 默认查询匹配
   */
  Filters?: Array<Filter>
  /**
   * 已部署的证书ID
   */
  OldCertificateId?: string
}

/**
 * DescribeHostDdosInstanceList返回参数结构体
 */
export interface DescribeHostDdosInstanceListResponse {
  /**
   * DDOS实例列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceList?: Array<DdosInstanceDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 更新记录详情列表
 */
export interface UpdateRecordDetails {
  /**
   * 部署资源类型
   */
  ResourceType: string
  /**
   * 部署资源详情列表
   */
  List: Array<UpdateRecordDetail>
  /**
   * 该部署资源总数
   */
  TotalCount?: number
}

/**
 * DescribeCertificateDetail返回参数结构体
 */
export interface DescribeCertificateDetailResponse {
  /**
   * 用户 UIN。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUin?: string
  /**
   * 项目 ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * 证书来源：trustasia = 亚洲诚信，upload = 用户上传。
注意：此字段可能返回 null，表示取不到有效值。
   */
  From?: string
  /**
   * 证书类型：CA = 客户端证书，SVR = 服务器证书。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertificateType?: string
  /**
   * 证书套餐类型：null = 用户上传证书（没有套餐类型），1 = GeoTrust DV SSL CA - G3， 2 = TrustAsia TLS RSA CA， 3 = SecureSite 增强型企业版（EV Pro）， 4 = SecureSite 增强型（EV）， 5 = SecureSite 企业型专业版（OV Pro）， 6 = SecureSite 企业型（OV）， 7 = SecureSite 企业型（OV）通配符， 8 = Geotrust 增强型（EV）， 9 = Geotrust 企业型（OV）， 10 = Geotrust 企业型（OV）通配符， 11 = TrustAsia 域名型多域名 SSL 证书， 12 = TrustAsia 域名型（DV）通配符， 13 = TrustAsia 企业型通配符（OV）SSL 证书（D3）， 14 = TrustAsia 企业型（OV）SSL 证书（D3）， 15 = TrustAsia 企业型多域名 （OV）SSL 证书（D3）， 16 = TrustAsia 增强型 （EV）SSL 证书（D3）， 17 = TrustAsia 增强型多域名（EV）SSL 证书（D3）， 18 = GlobalSign 企业型（OV）SSL 证书， 19 = GlobalSign 企业型通配符 （OV）SSL 证书， 20 = GlobalSign 增强型 （EV）SSL 证书， 21 = TrustAsia 企业型通配符多域名（OV）SSL 证书（D3）， 22 = GlobalSign 企业型多域名（OV）SSL 证书， 23 = GlobalSign 企业型通配符多域名（OV）SSL 证书， 24 = GlobalSign 增强型多域名（EV）SSL 证书，25 = Wotrus 域名型证书，26 = Wotrus 域名型多域名证书，27 = Wotrus 域名型通配符证书，28 = Wotrus 企业型证书，29 = Wotrus 企业型多域名证书，30 = Wotrus 企业型通配符证书，31 = Wotrus 增强型证书，32 = Wotrus 增强型多域名证书，33 = DNSPod 国密域名型证书，34 = DNSPod 国密域名型多域名证书，35 = DNSPod 国密域名型通配符证书，37 = DNSPod 国密企业型证书，38 = DNSPod 国密企业型多域名证书，39 = DNSPod 国密企业型通配符证书，40 = DNSPod 国密增强型证书，41 = DNSPod 国密增强型多域名证书，42 = TrustAsia 域名型通配符多域名证书。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PackageType?: string
  /**
   * 颁发者。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductZhName?: string
  /**
   * 域名。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Domain?: string
  /**
   * 备注名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Alias?: string
  /**
   * 证书状态：0 = 审核中，1 = 已通过，2 = 审核失败，3 = 已过期，4 = 已添加DNS记录，5 = 企业证书，待提交，6 = 订单取消中，7 = 已取消，8 = 已提交资料， 待上传确认函，9 = 证书吊销中，10 = 已吊销，11 = 重颁发中，12 = 待上传吊销确认函，13 = 免费证书待提交资料。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 状态信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatusMsg?: string
  /**
   * 验证类型：DNS_AUTO = 自动DNS验证，DNS = 手动DNS验证，FILE = 文件验证，EMAIL = 邮件验证。
注意：此字段可能返回 null，表示取不到有效值。
   */
  VerifyType?: string
  /**
   * 漏洞扫描状态。
注意：此字段可能返回 null，表示取不到有效值。
   */
  VulnerabilityStatus?: string
  /**
   * 证书生效时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertBeginTime?: string
  /**
   * 证书失效时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertEndTime?: string
  /**
   * 证书有效期：单位（月）。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ValidityPeriod?: string
  /**
   * 申请时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  InsertTime?: string
  /**
   * 订单 ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OrderId?: string
  /**
   * 证书扩展信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertificateExtra?: CertificateExtra
  /**
   * 证书私钥
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertificatePrivateKey?: string
  /**
   * 证书公钥（即证书内容）
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertificatePublicKey?: string
  /**
   * DV 认证信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DvAuthDetail?: DvAuthDetail
  /**
   * 漏洞扫描评估报告。
注意：此字段可能返回 null，表示取不到有效值。
   */
  VulnerabilityReport?: string
  /**
   * 证书 ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertificateId?: string
  /**
   * 证书类型名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TypeName?: string
  /**
   * 状态描述。
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatusName?: string
  /**
   * 证书包含的多个域名（不包含主域名，主域名使用Domain字段）
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubjectAltName?: Array<string>
  /**
   * 是否为付费证书。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsVip?: boolean
  /**
   * 是否为泛域名证书。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsWildcard?: boolean
  /**
   * 是否为 DV 版证书。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsDv?: boolean
  /**
   * 是否启用了漏洞扫描功能。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsVulnerability?: boolean
  /**
   * 提交的资料信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubmittedData?: SubmittedData
  /**
   * 是否可续费。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RenewAble?: boolean
  /**
   * 是否可部署。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Deployable?: boolean
  /**
   * 关联标签列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tags>
  /**
   * 根证书。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RootCert?: RootCertificates
  /**
   * 国密加密证书
注意：此字段可能返回 null，表示取不到有效值。
   */
  EncryptCert?: string
  /**
   * 国密加密私钥
注意：此字段可能返回 null，表示取不到有效值。
   */
  EncryptPrivateKey?: string
  /**
   * 签名证书 SHA1指纹
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertFingerprint?: string
  /**
   * 加密证书 SHA1指纹 （国密证书特有）
注意：此字段可能返回 null，表示取不到有效值。
   */
  EncryptCertFingerprint?: string
  /**
   * 证书算法
注意：此字段可能返回 null，表示取不到有效值。
   */
  EncryptAlgorithm?: string
  /**
   * DV证书吊销验证值
注意：此字段可能返回 null，表示取不到有效值。
   */
  DvRevokeAuthDetail?: Array<DvAuths>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCertificateResubmit请求参数结构体
 */
export interface ModifyCertificateResubmitRequest {
  /**
   * 证书ID。
   */
  CertificateId: string
}

/**
 * 支持下载的类型
 */
export interface SupportDownloadType {
  /**
   * 是否可以下载nginx可用格式
   */
  NGINX?: boolean
  /**
   * 是否可以下载apache可用格式
   */
  APACHE?: boolean
  /**
   * 是否可以下载tomcat可用格式
   */
  TOMCAT?: boolean
  /**
   * 是否可以下载iis可用格式
   */
  IIS?: boolean
  /**
   * 是否可以下载JKS可用格式
   */
  JKS?: boolean
  /**
   * 是否可以下载其他格式
   */
  OTHER?: boolean
  /**
   * 是否可以下载根证书
   */
  ROOT?: boolean
}

/**
 * DownloadCertificate请求参数结构体
 */
export interface DownloadCertificateRequest {
  /**
   * 证书 ID。
   */
  CertificateId: string
}

/**
 * DescribeHostTkeInstanceList返回参数结构体
 */
export interface DescribeHostTkeInstanceListResponse {
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * CLB实例监听器列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceList?: Array<TkeInstanceDetail>
  /**
   * 异步刷新总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AsyncTotalNum?: number
  /**
   * 异步刷新当前执行数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AsyncOffset?: number
  /**
   * 当前缓存读取时间	
注意：此字段可能返回 null，表示取不到有效值。
   */
  AsyncCacheTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCertificateBindResourceTaskResult请求参数结构体
 */
export interface DescribeCertificateBindResourceTaskResultRequest {
  /**
   * 任务ID，根据任务ID查询绑定云资源结果， 最大支持100个
   */
  TaskIds: Array<string>
}

/**
 * 更新记录详情
 */
export interface UpdateRecordDetail {
  /**
   * 详情记录id
   */
  Id?: number
  /**
   * 新证书ID
   */
  CertId?: string
  /**
   * 旧证书ID
   */
  OldCertId?: string
  /**
   * 部署域名列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Domains?: Array<string>
  /**
   * 部署资源类型
   */
  ResourceType?: string
  /**
   * 部署地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * 部署状态
   */
  Status?: number
  /**
   * 部署错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMsg?: string
  /**
   * 部署时间
   */
  CreateTime?: string
  /**
   * 最后一次更新时间
   */
  UpdateTime?: string
  /**
   * 部署实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 部署实例名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceName?: string
  /**
   * 部署监听器ID（CLB专用）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ListenerId?: string
  /**
   * 部署监听器名称（CLB专用）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ListenerName?: string
  /**
   * 协议
注意：此字段可能返回 null，表示取不到有效值。
   */
  Protocol?: string
  /**
   * 是否开启SNI（CLB专用）
注意：此字段可能返回 null，表示取不到有效值。
   */
  SniSwitch?: number
  /**
   * bucket名称（COS专用）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Bucket?: string
  /**
   * 端口
注意：此字段可能返回 null，表示取不到有效值。
   */
  Port?: number
  /**
   * 命名空间（TKE专用）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Namespace?: string
  /**
   * secret名称（TKE专用）
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecretName?: string
  /**
   * 环境ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnvId?: string
  /**
   * TCB部署类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  TCBType?: string
}

/**
 * 绑定资源结果
 */
export interface BindResourceResult {
  /**
   * 资源类型：clb、cdn、waf、live、vod、ddos、tke、apigateway、tcb、teo（edgeOne）
   */
  ResourceType?: string
  /**
   * 绑定资源地域结果
   */
  BindResourceRegionResult?: Array<BindResourceRegionResult>
}

/**
 * ApplyCertificate返回参数结构体
 */
export interface ApplyCertificateResponse {
  /**
   * 证书 ID。
   */
  CertificateId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeHostDeployRecord请求参数结构体
 */
export interface DescribeHostDeployRecordRequest {
  /**
   * 待部署的证书ID
   */
  CertificateId: string
  /**
   * 分页偏移量，从0开始。
   */
  Offset?: number
  /**
   * 每页数量，默认10。
   */
  Limit?: number
  /**
   * 资源类型
   */
  ResourceType?: string
}

/**
 * 更新异步任务进度
 */
export interface UpdateSyncProgressRegion {
  /**
   * 资源类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 执行完成数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  OffsetCount?: number
  /**
   * 异步更新进度状态：0， 待处理， 1 已处理， 3 处理中
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
}

/**
 * CreateCertificateBindResourceSyncTask请求参数结构体
 */
export interface CreateCertificateBindResourceSyncTaskRequest {
  /**
   * 证书ID列表，总数不能超过100
   */
  CertificateIds: Array<string>
  /**
   * 是否使用缓存， 1使用缓存，0不使用缓存； 默认为1使用缓存； 若当前证书ID存在半小时已完成的任务， 则使用缓存的情况下， 会读取半小时内离当前时间最近的查询结果
   */
  IsCache: number
}

/**
 * COS实例详情
 */
export interface CosInstanceDetail {
  /**
   * 域名
   */
  Domain: string
  /**
   * 已绑定的证书ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertId: string
  /**
   * ENABLED: 域名上线状态
DISABLED:域名下线状态
   */
  Status: string
  /**
   * 存储桶名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Bucket: string
  /**
   * 存储桶地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region: string
}

/**
 * UploadConfirmLetter返回参数结构体
 */
export interface UploadConfirmLetterResponse {
  /**
   * 证书ID
   */
  CertificateId?: string
  /**
   * 是否成功
   */
  IsSuccess?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeHostUpdateRecordDetail请求参数结构体
 */
export interface DescribeHostUpdateRecordDetailRequest {
  /**
   * 一键更新记录ID
   */
  DeployRecordId: string
  /**
   * 每页数量，默认10。
   */
  Limit?: string
  /**
   * 分页偏移量，从0开始。
   */
  Offset?: string
}

/**
 * ReplaceCertificate返回参数结构体
 */
export interface ReplaceCertificateResponse {
  /**
   * 证书 ID。
   */
  CertificateId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 异步任务证书关联云资源结果
 */
export interface SyncTaskBindResourceResult {
  /**
   * 任务ID
   */
  TaskId?: string
  /**
   * 关联云资源结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  BindResourceResult?: Array<BindResourceResult>
  /**
   * 关联云资源异步查询结果： 0表示查询中， 1表示查询成功。 2表示查询异常； 若状态为1，则查看BindResourceResult结果；若状态为2，则查看Error原因
   */
  Status?: number
  /**
   * 关联云资源错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Error?: Error
  /**
   * 当前结果缓存时间
   */
  CacheTime?: string
}

/**
 * clb实例详情
 */
export interface ClbInstanceDetail {
  /**
   * CLB实例ID
   */
  LoadBalancerId: string
  /**
   * CLB实例名称
   */
  LoadBalancerName: string
  /**
   * CLB监听器列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Listeners: Array<ClbListener>
}

/**
 * 更新异步任务进度
 */
export interface UpdateSyncProgress {
  /**
   * 资源类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceType?: string
  /**
   * 地域结果列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateSyncProgressRegions?: Array<UpdateSyncProgressRegion>
  /**
   * 异步更新进度状态：0， 待处理， 1 已处理， 3 处理中
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
}

/**
 * DescribeManagers返回参数结构体
 */
export interface DescribeManagersResponse {
  /**
   * 公司管理人列表
   */
  Managers: Array<ManagerInfo>
  /**
   * 公司管理人总数
   */
  TotalCount: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Vod实例
 */
export interface VodInstanceDetail {
  /**
   * 域名
   */
  Domain: string
  /**
   * 证书ID
   */
  CertId: string
}

/**
 * DescribeCertificate返回参数结构体
 */
export interface DescribeCertificateResponse {
  /**
   * 用户 UIN。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUin?: string
  /**
   * 项目 ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * 证书来源：trustasia = 亚洲诚信，upload = 用户上传。
注意：此字段可能返回 null，表示取不到有效值。
   */
  From?: string
  /**
   * 证书类型：CA = 客户端证书，SVR = 服务器证书。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertificateType?: string
  /**
   * 证书套餐类型：1 = GeoTrust DV SSL CA - G3， 2 = TrustAsia TLS RSA CA， 3 = SecureSite 增强型企业版（EV Pro）， 4 = SecureSite 增强型（EV）， 5 = SecureSite 企业型专业版（OV Pro）， 6 = SecureSite 企业型（OV）， 7 = SecureSite 企业型（OV）通配符， 8 = Geotrust 增强型（EV）， 9 = Geotrust 企业型（OV）， 10 = Geotrust 企业型（OV）通配符， 11 = TrustAsia 域名型多域名 SSL 证书， 12 = TrustAsia 域名型（DV）通配符， 13 = TrustAsia 企业型通配符（OV）SSL 证书（D3）， 14 = TrustAsia 企业型（OV）SSL 证书（D3）， 15 = TrustAsia 企业型多域名 （OV）SSL 证书（D3）， 16 = TrustAsia 增强型 （EV）SSL 证书（D3）， 17 = TrustAsia 增强型多域名（EV）SSL 证书（D3）， 18 = GlobalSign 企业型（OV）SSL 证书， 19 = GlobalSign 企业型通配符 （OV）SSL 证书， 20 = GlobalSign 增强型 （EV）SSL 证书， 21 = TrustAsia 企业型通配符多域名（OV）SSL 证书（D3）， 22 = GlobalSign 企业型多域名（OV）SSL 证书， 23 = GlobalSign 企业型通配符多域名（OV）SSL 证书， 24 = GlobalSign 增强型多域名（EV）SSL 证书。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PackageType?: string
  /**
   * 证书颁发者名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductZhName?: string
  /**
   * 域名。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Domain?: string
  /**
   * 备注名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Alias?: string
  /**
   * 证书状态：0 = 审核中，1 = 已通过，2 = 审核失败，3 = 已过期，4 = 已添加DNS记录，5 = 企业证书，待提交，6 = 订单取消中，7 = 已取消，8 = 已提交资料， 待上传确认函，9 = 证书吊销中，10 = 已吊销，11 = 重颁发中，12 = 待上传吊销确认函。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 状态信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatusMsg?: string
  /**
   * 验证类型：DNS_AUTO = 自动DNS验证，DNS = 手动DNS验证，FILE = 文件验证，EMAIL = 邮件验证。
注意：此字段可能返回 null，表示取不到有效值。
   */
  VerifyType?: string
  /**
   * 漏洞扫描状态。
注意：此字段可能返回 null，表示取不到有效值。
   */
  VulnerabilityStatus?: string
  /**
   * 证书生效时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertBeginTime?: string
  /**
   * 证书失效时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertEndTime?: string
  /**
   * 证书有效期：单位(月)。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ValidityPeriod?: string
  /**
   * 申请时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  InsertTime?: string
  /**
   * 订单 ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OrderId?: string
  /**
   * 证书扩展信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertificateExtra?: CertificateExtra
  /**
   * DV 认证信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DvAuthDetail?: DvAuthDetail
  /**
   * 漏洞扫描评估报告。
注意：此字段可能返回 null，表示取不到有效值。
   */
  VulnerabilityReport?: string
  /**
   * 证书 ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertificateId?: string
  /**
   * 证书类型名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PackageTypeName?: string
  /**
   * 状态描述。
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatusName?: string
  /**
   * 证书包含的多个域名（包含主域名）。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubjectAltName?: Array<string>
  /**
   * 是否为 VIP 客户。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsVip?: boolean
  /**
   * 是否为泛域名证书。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsWildcard?: boolean
  /**
   * 是否为 DV 版证书。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsDv?: boolean
  /**
   * 是否启用了漏洞扫描功能。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsVulnerability?: boolean
  /**
   * 是否可重颁发证书。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RenewAble?: boolean
  /**
   * 提交的资料信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubmittedData?: SubmittedData
  /**
   * 是否可部署。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Deployable?: boolean
  /**
   * 标签列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tags>
  /**
   * CA证书的所有加密方式	
注意：此字段可能返回 null，表示取不到有效值。
   */
  CAEncryptAlgorithms?: Array<string>
  /**
   * CA证书的所有通用名称	
注意：此字段可能返回 null，表示取不到有效值。
   */
  CACommonNames?: Array<string>
  /**
   * CA证书所有的到期时间	
注意：此字段可能返回 null，表示取不到有效值。
   */
  CAEndTimes?: Array<string>
  /**
   * DV证书吊销验证值
注意：此字段可能返回 null，表示取不到有效值。
   */
  DvRevokeAuthDetail?: Array<DvAuths>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 权益包转出详情
 */
export interface PackageTransferOutInfo {
  /**
   * 权益包ID。
   */
  PackageId: string
  /**
   * 转移码。
   */
  TransferCode: string
  /**
   * 本次转移点数。
   */
  TransferCount: number
  /**
   * 转入的PackageID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReceivePackageId: string
  /**
   * 本次转移过期时间。
   */
  ExpireTime: string
  /**
   * 本次转移生成时间。
   */
  CreateTime: string
  /**
   * 本次转移更新时间。
   */
  UpdateTime: string
  /**
   * 转移状态。
   */
  TransferStatus: string
  /**
   * 接收者uin。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReceiverUin: number
  /**
   * 接收时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReceiveTime: string
}

/**
 * tse实例详情
 */
export interface TSEInstanceDetail {
  /**
   * 网关ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  GatewayId?: string
  /**
   * 网关名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  GatewayName?: string
  /**
   * 网关证书列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertificateList?: Array<GatewayCertificate>
}

/**
 * DescribeDeleteCertificatesTaskResult返回参数结构体
 */
export interface DescribeDeleteCertificatesTaskResultResponse {
  /**
   * 批量删除证书异步任务结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeleteTaskResult?: Array<DeleteTaskResult>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云资源地域列表
 */
export interface ResourceTypeRegions {
  /**
   * 云资源类型
   */
  ResourceType?: string
  /**
   * 地域列表
   */
  Regions?: Array<string>
}

/**
 * DeleteManager请求参数结构体
 */
export interface DeleteManagerRequest {
  /**
   * 管理人ID
   */
  ManagerId: number
}

/**
 * DescribeHostUpdateRecord返回参数结构体
 */
export interface DescribeHostUpdateRecordResponse {
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount: number
  /**
   * 证书部署记录列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeployRecordList: Array<UpdateRecordInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateCertificateRecordRollback返回参数结构体
 */
export interface UpdateCertificateRecordRollbackResponse {
  /**
   * 回滚部署记录ID
   */
  DeployRecordId: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeHostVodInstanceList请求参数结构体
 */
export interface DescribeHostVodInstanceListRequest {
  /**
   * 待部署的证书ID
   */
  CertificateId: string
  /**
   * 部署资源类型 vod
   */
  ResourceType: string
  /**
   * 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时
   */
  IsCache?: number
  /**
   * 过滤参数列表
   */
  Filters?: Array<Filter>
  /**
   * 已部署的证书ID
   */
  OldCertificateId?: string
}

/**
 * DescribeCertificateBindResourceTaskDetail返回参数结构体
 */
export interface DescribeCertificateBindResourceTaskDetailResponse {
  /**
   * 关联clb资源详情	
注意：此字段可能返回 null，表示取不到有效值。
   */
  CLB?: Array<ClbInstanceList>
  /**
   * 关联cdn资源详情	
注意：此字段可能返回 null，表示取不到有效值。
   */
  CDN?: Array<CdnInstanceList>
  /**
   * 关联waf资源详情	
注意：此字段可能返回 null，表示取不到有效值。
   */
  WAF?: Array<WafInstanceList>
  /**
   * 关联ddos资源详情	
注意：此字段可能返回 null，表示取不到有效值。
   */
  DDOS?: Array<DdosInstanceList>
  /**
   * 关联live资源详情	
注意：此字段可能返回 null，表示取不到有效值。
   */
  LIVE?: Array<LiveInstanceList>
  /**
   * 关联vod资源详情	
注意：此字段可能返回 null，表示取不到有效值。
   */
  VOD?: Array<VODInstanceList>
  /**
   * 关联tke资源详情	
注意：此字段可能返回 null，表示取不到有效值。
   */
  TKE?: Array<TkeInstanceList>
  /**
   * 关联apigateway资源详情	
注意：此字段可能返回 null，表示取不到有效值。
   */
  APIGATEWAY?: Array<ApiGatewayInstanceList>
  /**
   * 关联tcb资源详情	
注意：此字段可能返回 null，表示取不到有效值。
   */
  TCB?: Array<TCBInstanceList>
  /**
   * 关联teo资源详情	
注意：此字段可能返回 null，表示取不到有效值。
   */
  TEO?: Array<TeoInstanceList>
  /**
   * 关联云资源异步查询结果： 0表示查询中， 1表示查询成功。 2表示查询异常； 若状态为1，则查看BindResourceResult结果；若状态为2，则查看Error原因
   */
  Status?: number
  /**
   * 当前结果缓存时间
   */
  CacheTime?: string
  /**
   * 关联tse资源详情	
注意：此字段可能返回 null，表示取不到有效值。
   */
  TSE?: Array<TSEInstanceList>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeployCertificateRecordRetry返回参数结构体
 */
export interface DeployCertificateRecordRetryResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 获取证书列表（DescribeCertificate）返回参数键为 DvAuthDetail 的内容。
 */
export interface DvAuthDetail {
  /**
   * DV 认证密钥。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DvAuthKey?: string
  /**
   * DV 认证值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DvAuthValue?: string
  /**
   * DV 认证值域名。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DvAuthDomain: string
  /**
   * DV 认证值路径。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DvAuthPath: string
  /**
   * DV 认证子域名。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DvAuthKeySubDomain: string
  /**
   * DV 认证信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DvAuths: Array<DvAuths>
}

/**
 * cdn实例详情 - 异步关联云资源数据结构
 */
export interface CdnInstanceList {
  /**
   * 该地域下CDN域名总数
   */
  TotalCount?: number
  /**
   * cdn域名详情	
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceList?: Array<CdnInstanceDetail>
}

/**
 * UpdateCertificateRecordRetry请求参数结构体
 */
export interface UpdateCertificateRecordRetryRequest {
  /**
   * 待重试部署记录ID
   */
  DeployRecordId?: number
  /**
   * 待重试部署记录详情ID
   */
  DeployRecordDetailId?: number
}

/**
 * ddos复杂类型
 */
export interface DdosInstanceDetail {
  /**
   * 域名
   */
  Domain: string
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 协议类型
   */
  Protocol: string
  /**
   * 证书ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertId: string
  /**
   * 转发端口
   */
  VirtualPort: string
}

/**
 * DescribeHostWafInstanceList返回参数结构体
 */
export interface DescribeHostWafInstanceListResponse {
  /**
   * WAF实例列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceList?: Array<LiveInstanceDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeployedResources返回参数结构体
 */
export interface DescribeDeployedResourcesResponse {
  /**
   * 资源详情
   */
  DeployedResources?: Array<DeployedResources>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCertificateByPackage返回参数结构体
 */
export interface CreateCertificateByPackageResponse {
  /**
   * 证书ID。
   */
  CertificateId?: string
  /**
   * 批量购买证书时返回多个证书ID。
   */
  CertificateIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCertificate请求参数结构体
 */
export interface CreateCertificateRequest {
  /**
   * 证书商品ID，3 = SecureSite 增强型企业版（EV Pro）， 4 = SecureSite 增强型（EV）， 5 = SecureSite 企业型专业版（OV Pro）， 6 = SecureSite 企业型（OV）， 7 = SecureSite 企业型（OV）通配符， 8 = Geotrust 增强型（EV）， 9 = Geotrust 企业型（OV）， 10 = Geotrust 企业型（OV）通配符， 11 = TrustAsia 域名型多域名 SSL 证书， 12 = TrustAsia 域名型（DV）通配符， 13 = TrustAsia 企业型通配符（OV）SSL 证书（D3）， 14 = TrustAsia 企业型（OV）SSL 证书（D3）， 15 = TrustAsia 企业型多域名 （OV）SSL 证书（D3）， 16 = TrustAsia 增强型 （EV）SSL 证书（D3）， 17 = TrustAsia 增强型多域名（EV）SSL 证书（D3）， 18 = GlobalSign 企业型（OV）SSL 证书， 19 = GlobalSign 企业型通配符 （OV）SSL 证书， 20 = GlobalSign 增强型 （EV）SSL 证书， 21 = TrustAsia 企业型通配符多域名（OV）SSL 证书（D3）， 22 = GlobalSign 企业型多域名（OV）SSL 证书， 23 = GlobalSign 企业型通配符多域名（OV）SSL 证书， 24 = GlobalSign 增强型多域名（EV）SSL 证书，25 = Wotrus 域名型证书，26 = Wotrus 域名型多域名证书，27 = Wotrus 域名型通配符证书，28 = Wotrus 企业型证书，29 = Wotrus 企业型多域名证书，30 = Wotrus 企业型通配符证书，31 = Wotrus 增强型证书，32 = Wotrus 增强型多域名证书，33 = DNSPod 国密域名型证书，34 = DNSPod 国密域名型多域名证书，35 = DNSPod 国密域名型通配符证书，37 = DNSPod 国密企业型证书，38 = DNSPod 国密企业型多域名证书，39 = DNSPod 国密企业型通配符证书，40 = DNSPod 国密增强型证书，41 = DNSPod 国密增强型多域名证书，42 = TrustAsia 域名型通配符多域名证书。
   */
  ProductId: number
  /**
   * 证书包含的域名数量
   */
  DomainNum: number
  /**
   * 证书年限，当前只支持 1 年证书的购买
   */
  TimeSpan: number
}

/**
 * DescribeCertificates返回参数结构体
 */
export interface DescribeCertificatesResponse {
  /**
   * 总数量。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Certificates?: Array<Certificates>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CommitCertificateInformation返回参数结构体
 */
export interface CommitCertificateInformationResponse {
  /**
   * CA机构侧订单号。
   */
  OrderId?: string
  /**
   * 证书状态：0 = 审核中，1 = 已通过，2 = 审核失败，3 = 已过期，4 = 已添加DNS记录，5 = 企业证书，待提交，6 = 订单取消中，7 = 已取消，8 = 已提交资料， 待上传确认函，9 = 证书吊销中，10 = 已吊销，11 = 重颁发中，12 = 待上传吊销确认函，13 = 免费证书待提交资料。
   */
  Status?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteManager返回参数结构体
 */
export interface DeleteManagerResponse {
  /**
   * 管理人ID
   */
  ManagerId: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubmitAuditManager请求参数结构体
 */
export interface SubmitAuditManagerRequest {
  /**
   * 管理人ID
   */
  ManagerId: number
}

/**
 * UploadCertificate返回参数结构体
 */
export interface UploadCertificateResponse {
  /**
   * 证书 ID。
   */
  CertificateId?: string
  /**
   * 重复证书的ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  RepeatCertId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeployCertificateInstance返回参数结构体
 */
export interface DeployCertificateInstanceResponse {
  /**
   * 云资源部署任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeployRecordId?: number
  /**
   * 部署状态，1表示部署成功，0表示部署失败
   */
  DeployStatus?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * live实例详情
 */
export interface LiveInstanceDetail {
  /**
   * 域名
   */
  Domain: string
  /**
   * 已绑定的证书ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertId: string
  /**
   * -1：域名未关联证书。
1： 域名https已开启。
0： 域名https已关闭。
   */
  Status: number
}

/**
 * SubmitCertificateInformation请求参数结构体
 */
export interface SubmitCertificateInformationRequest {
  /**
   * 证书 ID。
   */
  CertificateId: string
  /**
   * CSR 生成方式：online = 在线生成, parse = 手动上传。
   */
  CsrType?: string
  /**
   * 上传的 CSR 内容。
   */
  CsrContent?: string
  /**
   * 绑定证书的域名。
   */
  CertificateDomain?: string
  /**
   * 上传的域名数组（多域名证书可以上传）。
   */
  DomainList?: Array<string>
  /**
   * 私钥密码（非必填）。
   */
  KeyPassword?: string
  /**
   * 公司名称。
   */
  OrganizationName?: string
  /**
   * 部门名称。
   */
  OrganizationDivision?: string
  /**
   * 公司详细地址。
   */
  OrganizationAddress?: string
  /**
   * 国家名称，如中国：CN 。
   */
  OrganizationCountry?: string
  /**
   * 公司所在城市。
   */
  OrganizationCity?: string
  /**
   * 公司所在省份。
   */
  OrganizationRegion?: string
  /**
   * 公司邮编。
   */
  PostalCode?: string
  /**
   * 公司座机区号。
   */
  PhoneAreaCode?: string
  /**
   * 公司座机号码。
   */
  PhoneNumber?: string
  /**
   * 证书验证方式。验证类型：DNS_AUTO = 自动DNS验证（仅支持在腾讯云解析且解析状态正常的域名使用该验证类型），DNS = 手动DNS验证，FILE = 文件验证。
   */
  VerifyType?: string
  /**
   * 管理人名。
   */
  AdminFirstName?: string
  /**
   * 管理人姓。
   */
  AdminLastName?: string
  /**
   * 管理人手机号码。
   */
  AdminPhoneNum?: string
  /**
   * 管理人邮箱地址。
   */
  AdminEmail?: string
  /**
   * 管理人职位。
   */
  AdminPosition?: string
  /**
   * 联系人名。
   */
  ContactFirstName?: string
  /**
   * 联系人姓。
   */
  ContactLastName?: string
  /**
   * 联系人邮箱地址。
   */
  ContactEmail?: string
  /**
   * 联系人手机号码。
   */
  ContactNumber?: string
  /**
   * 联系人职位。
   */
  ContactPosition?: string
}

/**
 * TCB环境
 */
export interface TCBEnvironment {
  /**
   * 唯一ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ID?: string
  /**
   * 来源
注意：此字段可能返回 null，表示取不到有效值。
   */
  Source?: string
  /**
   * 名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
}

/**
 * waf实例详情
 */
export interface WafInstanceDetail {
  /**
   * 域名
   */
  Domain?: string
  /**
   * 证书ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertId?: string
  /**
   * 是否保持长连接，1是，0 否
注意：此字段可能返回 null，表示取不到有效值。
   */
  Keepalive?: number
}

/**
 * DescribeCertificates请求参数结构体
 */
export interface DescribeCertificatesRequest {
  /**
   * 分页偏移量，从0开始。
   */
  Offset?: number
  /**
   * 每页数量，默认10。最大1000
   */
  Limit?: number
  /**
   * 搜索关键词，可搜索证书 ID、备注名称、域名。例如： a8xHcaIs。
   */
  SearchKey?: string
  /**
   * 证书类型：CA = 客户端证书，SVR = 服务器证书。
   */
  CertificateType?: string
  /**
   * 项目 ID。
   */
  ProjectId?: number
  /**
   * 按到期时间排序：DESC = 降序， ASC = 升序。
   */
  ExpirationSort?: string
  /**
   * 证书状态：0 = 审核中，1 = 已通过，2 = 审核失败，3 = 已过期，4 = 已添加DNS记录，5 = 企业证书，待提交，6 = 订单取消中，7 = 已取消，8 = 已提交资料， 待上传确认函，9 = 证书吊销中，10 = 已吊销，11 = 重颁发中，12 = 待上传吊销确认函，13 = 免费证书待提交资料。
   */
  CertificateStatus?: Array<number | bigint>
  /**
   * 是否可部署，可选值：1 = 可部署，0 =  不可部署。
   */
  Deployable?: number
  /**
   * 是否筛选上传托管的 1筛选，0不筛选
   */
  Upload?: number
  /**
   * 是否筛选可续期证书 1筛选 0不筛选
   */
  Renew?: number
  /**
   * 筛选来源， upload：上传证书， buy：腾讯云证书， 不传默认全部
   */
  FilterSource?: string
  /**
   * 是否筛选国密证书。1:筛选  0:不筛选
   */
  IsSM?: number
  /**
   * 筛选证书是否即将过期，传1是筛选，0不筛选
   */
  FilterExpiring?: number
  /**
   * 是否可托管，可选值：1 = 可托管，0 =  不可托管。
   */
  Hostable?: number
  /**
   * 筛选指定标签的证书
   */
  Tags?: Array<Tags>
  /**
   * //是否筛选等待签发的证书，传1是筛选，0和null不筛选
   */
  IsPendingIssue?: number
}

/**
 * UpdateCertificateRecordRollback请求参数结构体
 */
export interface UpdateCertificateRecordRollbackRequest {
  /**
   * 待重试部署记录ID
   */
  DeployRecordId?: number
}

/**
 * apigateway实例详情 - 异步关联云资源数据结构
 */
export interface ApiGatewayInstanceList {
  /**
   * 地域
   */
  Region?: string
  /**
   * apigateway实例详情	
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceList?: Array<ApiGatewayInstanceDetail>
  /**
   * 该地域下apigateway实例总数
   */
  TotalCount?: number
}

/**
 * teo实例详情
 */
export interface TeoInstanceDetail {
  /**
   * 域名
   */
  Host: string
  /**
   * 证书ID
   */
  CertId: string
  /**
   * 区域ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ZoneId?: string
  /**
   * 域名状态
   */
  Status?: string
}

/**
 * DescribeHostClbInstanceList返回参数结构体
 */
export interface DescribeHostClbInstanceListResponse {
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * CLB实例监听器列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceList?: Array<ClbInstanceDetail>
  /**
   * 异步刷新总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AsyncTotalNum?: number
  /**
   * 异步刷新当前执行数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AsyncOffset?: number
  /**
   * 当前缓存读取时间	
注意：此字段可能返回 null，表示取不到有效值。
   */
  AsyncCacheTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RevokeCertificate请求参数结构体
 */
export interface RevokeCertificateRequest {
  /**
   * 证书 ID。
   */
  CertificateId: string
  /**
   * 吊销证书原因。
   */
  Reason?: string
}

/**
 * 预审核信息列表
 */
export interface PreAuditInfo {
  /**
   * 证书总年限
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPeriod: number
  /**
   * 证书当前年限
注意：此字段可能返回 null，表示取不到有效值。
   */
  NowPeriod: number
  /**
   * 证书预审核管理人ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ManagerId: string
}

/**
 * DescribeManagerDetail返回参数结构体
 */
export interface DescribeManagerDetailResponse {
  /**
   * 状态: audit: 审核中 ok: 审核通过 invalid: 失效 expiring: 即将过期 expired: 已过期
   */
  Status: string
  /**
   * 管理人姓名
   */
  ManagerFirstName: string
  /**
   * 管理人邮箱
   */
  ManagerMail: string
  /**
   * 联系人姓名
   */
  ContactFirstName: string
  /**
   * 管理人姓名
   */
  ManagerLastName: string
  /**
   * 联系人职位
   */
  ContactPosition: string
  /**
   * 管理人职位
   */
  ManagerPosition: string
  /**
   * 核验通过时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  VerifyTime: string
  /**
   * 创建时间
   */
  CreateTime: string
  /**
   * 核验过期时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireTime: string
  /**
   * 联系人姓名
   */
  ContactLastName: string
  /**
   * 管理人电话
   */
  ManagerPhone: string
  /**
   * 联系人电话
   */
  ContactPhone: string
  /**
   * 联系人邮箱
   */
  ContactMail: string
  /**
   * 管理人所属部门
   */
  ManagerDepartment: string
  /**
   * 管理人所属公司信息
   */
  CompanyInfo: CompanyInfo
  /**
   * 管理人公司ID
   */
  CompanyId: number
  /**
   * 管理人ID
   */
  ManagerId: number
  /**
   * 审核状态详细信息
   */
  StatusInfo: Array<ManagerStatusInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CLB证书详情
 */
export interface Certificate {
  /**
   * 证书ID
   */
  CertId?: string
  /**
   * 证书绑定的域名
   */
  DnsNames?: Array<string>
  /**
   * 根证书ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertCaId?: string
  /**
   * 证书认证模式：UNIDIRECTIONAL单向认证，MUTUAL双向认证
注意：此字段可能返回 null，表示取不到有效值。
   */
  SSLMode?: string
}

/**
 * CreateCertificateByPackage请求参数结构体
 */
export interface CreateCertificateByPackageRequest {
  /**
   * 证书产品PID。
   */
  ProductPid: number
  /**
   * 要消耗的权益包ID。
   */
  PackageIds: Array<string>
  /**
   * 证书域名数量。
   */
  DomainCount: string
  /**
   * 多年期证书年限。
   */
  Period: number
  /**
   * 要续费的原证书ID（续费时填写）。
   */
  OldCertificateId?: string
  /**
   * 续费时CSR生成方式（original、upload、online）。
   */
  RenewGenCsrMethod?: string
  /**
   * 续费时选择上传CSR时填写CSR。
   */
  RenewCsr?: string
  /**
   * 续费证书CSR的算法类型。
   */
  RenewAlgorithmType?: string
  /**
   * 续费证书CSR的算法参数。
   */
  RenewAlgorithmParam?: string
  /**
   * 项目ID。
   */
  ProjectId?: number
  /**
   * 标签。
   */
  Tags?: Array<Tags>
  /**
   * 续费证书的私钥密码。
   */
  RenewKeyPass?: string
  /**
   * 批量购买证书时预填写的域名。
   */
  DomainNames?: string
  /**
   * 批量购买证书数量。
   */
  CertificateCount?: number
  /**
   * 预填写的管理人ID。
   */
  ManagerId?: number
  /**
   * 预填写的公司ID。
   */
  CompanyId?: number
  /**
   * 验证方式
   */
  VerifyType?: string
}

/**
 * CommitCertificateInformation请求参数结构体
 */
export interface CommitCertificateInformationRequest {
  /**
   * 证书 ID。
   */
  CertificateId: string
  /**
   * 域名验证方式
   */
  VerifyType?: string
}

/**
 * 批量删除证书异步任务结果
 */
export interface DeleteTaskResult {
  /**
   * 任务ID
   */
  TaskId?: string
  /**
   * 证书ID
   */
  CertId?: string
  /**
   * 异步查询结果： 0表示任务进行中、 1表示任务成功、 2表示任务失败、3表示未授权服务角色导致任务失败、4表示有未解绑的云资源导致任务失败、5表示查询关联云资源超时导致任务失败
   */
  Status?: number
  /**
   * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Error?: string
  /**
   * 当前结果缓存时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CacheTime?: string
  /**
   * 包含的域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Domains?: Array<string>
}

/**
 * DescribeHostDeployRecordDetail请求参数结构体
 */
export interface DescribeHostDeployRecordDetailRequest {
  /**
   * 部署记录ID
   */
  DeployRecordId: string
  /**
   * 分页偏移量，从0开始。
   */
  Offset?: number
  /**
   * 每页数量，默认10。
   */
  Limit?: number
}

/**
 * UpdateCertificateInstance请求参数结构体
 */
export interface UpdateCertificateInstanceRequest {
  /**
   * 一键更新原证书ID， 查询绑定该证书的云资源然后进行证书更新
   */
  OldCertificateId: string
  /**
   * 需要部署的资源类型，参数值可选（小写）：clb、cdn、waf、live、ddos、teo、apigateway、vod、tke、tcb、tse
   */
  ResourceTypes: Array<string>
  /**
   * 一键更新新证书ID，不传该则证书公钥和私钥必传
   */
  CertificateId?: string
  /**
   * 需要部署的地域列表（废弃）
   * @deprecated
   */
  Regions?: Array<string>
  /**
   * 云资源需要部署的地域列表，支持地域的云资源类型必传，如：clb、tke、apigateway、waf、tcb、tse等
   */
  ResourceTypesRegions?: Array<ResourceTypeRegions>
  /**
   * 证书公钥， 若上传证书公钥， 则CertificateId不用传
   */
  CertificatePublicKey?: string
  /**
   * 证书私钥，若上传证书公钥， 则CertificateId不用传
   */
  CertificatePrivateKey?: string
  /**
   * 旧证书是否忽略到期提醒  0:不忽略通知。1:忽略通知，忽略OldCertificateId到期提醒
   */
  ExpiringNotificationSwitch?: number
  /**
   * 相同的证书是否允许重复上传，若选择上传证书， 则可以配置该参数
   */
  Repeatable?: boolean
  /**
   * 是否允许下载，若选择上传证书， 则可以配置该参数
   */
  AllowDownload?: boolean
  /**
   * 标签列表，若选择上传证书， 则可以配置该参数
   */
  Tags?: Array<Tags>
  /**
   * 项目 ID，若选择上传证书， 则可以配置该参数
   */
  ProjectId?: number
}

/**
 * ReplaceCertificate请求参数结构体
 */
export interface ReplaceCertificateRequest {
  /**
   * 证书 ID。
   */
  CertificateId: string
  /**
   * 验证类型：DNS_AUTO = 自动DNS验证（仅支持在腾讯云解析且解析状态正常的域名使用该验证类型），DNS = 手动DNS验证，FILE = 文件验证。
   */
  ValidType: string
  /**
   * 类型，默认 Original。可选项：Original = 原证书 CSR，Upload = 手动上传，Online = 在线生成。
   */
  CsrType?: string
  /**
   * CSR 内容。
   */
  CsrContent?: string
  /**
   * KEY 密码。
   */
  CsrkeyPassword?: string
  /**
   * 重颁发原因。
   */
  Reason?: string
  /**
   * CSR加密方式，可选：RSA、ECC、SM2
（CsrType为Online才可选）， 默认为RSA
   */
  CertCSREncryptAlgo?: string
  /**
   * CSR加密参数，CsrEncryptAlgo为RSA时， 可选2048、4096等默认为2048；CsrEncryptAlgo为ECC时，可选prime256v1，secp384r1等，默认为prime256v1;
   */
  CertCSRKeyParameter?: string
}

/**
 * 公司信息
 */
export interface CompanyInfo {
  /**
   * 公司名称
   */
  CompanyName: string
  /**
   * 公司ID
   */
  CompanyId: number
  /**
   * 公司所在国家
   */
  CompanyCountry: string
  /**
   * 公司所在省份
   */
  CompanyProvince: string
  /**
   * 公司所在城市
   */
  CompanyCity: string
  /**
   * 公司所在详细地址
   */
  CompanyAddress: string
  /**
   * 公司电话
   */
  CompanyPhone: string
  /**
   * 类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  IdType?: string
  /**
   * ID号
注意：此字段可能返回 null，表示取不到有效值。
   */
  IdNumber?: string
}

/**
 * tke secret详情
 */
export interface TkeSecretDetail {
  /**
   * secret名称
   */
  Name: string
  /**
   * 证书ID
   */
  CertId: string
  /**
   * ingress列表
   */
  IngressList: Array<TkeIngressDetail>
  /**
   * 和新证书不匹配的域名列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  NoMatchDomains: Array<string>
}

/**
 * DescribeHostDeployRecord返回参数结构体
 */
export interface DescribeHostDeployRecordResponse {
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount: number
  /**
   * 证书部署记录列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeployRecordList: Array<DeployRecordInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 标签
 */
export interface Tags {
  /**
   * 标签键
   */
  TagKey: string
  /**
   * 标签值
   */
  TagValue: string
}

/**
 * DescribeDownloadCertificateUrl返回参数结构体
 */
export interface DescribeDownloadCertificateUrlResponse {
  /**
   * 下载链接
   */
  DownloadCertificateUrl: string
  /**
   * 下载文件的名称
   */
  DownloadFilename: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeHostTkeInstanceList请求参数结构体
 */
export interface DescribeHostTkeInstanceListRequest {
  /**
   * 待部署的证书ID
   */
  CertificateId: string
  /**
   * 分页偏移量，从0开始。
   */
  Offset?: number
  /**
   * 每页数量，默认10。
   */
  Limit?: number
  /**
   * 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时
   */
  IsCache?: number
  /**
   * 过滤参数列表； FilterKey：domainMatch（查询域名是否匹配的实例列表） FilterValue：1，表示查询匹配； 0，表示查询不匹配； 默认查询匹配
   */
  Filters?: Array<Filter>
  /**
   * 是否异步缓存
   */
  AsyncCache?: number
  /**
   * 原证书ID
   */
  OldCertificateId?: string
}

/**
 * DeployCertificateRecordRollback请求参数结构体
 */
export interface DeployCertificateRecordRollbackRequest {
  /**
   * 待重试部署记录ID
   */
  DeployRecordId?: number
}

/**
 * DeleteCertificate返回参数结构体
 */
export interface DeleteCertificateResponse {
  /**
   * 删除结果（true：删除成功，false：删除失败）
   */
  DeleteResult?: boolean
  /**
   * 异步删除的任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RevokeCertificate返回参数结构体
 */
export interface RevokeCertificateResponse {
  /**
   * 吊销证书域名验证信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RevokeDomainValidateAuths?: Array<RevokeDomainValidateAuths>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资源详情
 */
export interface DeployedResources {
  /**
   * 证书ID
   */
  CertificateId: string
  /**
   * 数量
   */
  Count: number
  /**
   * 资源标识:clb,cdn,live,waf,antiddos
   */
  Type: string
  /**
   * 不建议使用。字段返回和Resources相同。本字段后续只返回null
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceIds: Array<string>
  /**
   * 关联资源ID或关联域名。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Resources: Array<string>
}

/**
 * ModifyCertificateProject请求参数结构体
 */
export interface ModifyCertificateProjectRequest {
  /**
   * 需要修改所属项目的证书 ID 集合，最多100个证书。
   */
  CertificateIdList: Array<string>
  /**
   * 项目 ID。
   */
  ProjectId: number
}

/**
 * DescribeCertificate请求参数结构体
 */
export interface DescribeCertificateRequest {
  /**
   * 证书 ID。
   */
  CertificateId: string
}

/**
 * DescribeHostVodInstanceList返回参数结构体
 */
export interface DescribeHostVodInstanceListResponse {
  /**
   * Vod实例列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceList?: Array<VodInstanceDetail>
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * waf实例详情 - 异步关联云资源数据结构
 */
export interface WafInstanceList {
  /**
   * 地域
   */
  Region?: string
  /**
   * waf实例详情	
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceList?: Array<WafInstanceDetail>
  /**
   * 该地域下waf实例总数
   */
  TotalCount?: number
}

/**
 * ModifyCertificatesExpiringNotificationSwitch请求参数结构体
 */
export interface ModifyCertificatesExpiringNotificationSwitchRequest {
  /**
   * 证书ID列表。最多50个
   */
  CertificateIds: Array<string>
  /**
   * 0:不忽略通知。1:忽略通知
   */
  SwitchStatus: number
}

/**
 * 过滤参数列表
 */
export interface Filter {
  /**
   * 过滤参数key
   */
  FilterKey: string
  /**
   * 过滤参数值
   */
  FilterValue: string
}

/**
 * 返回参数键为 RevokeDomainValidateAuths 的内容。
 */
export interface RevokeDomainValidateAuths {
  /**
   * DV 认证值路径。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DomainValidateAuthPath: string
  /**
   * DV 认证 KEY。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DomainValidateAuthKey: string
  /**
   * DV 认证值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DomainValidateAuthValue: string
  /**
   * DV 认证域名。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DomainValidateAuthDomain: string
}

/**
 * DescribeHostUpdateRecordDetail返回参数结构体
 */
export interface DescribeHostUpdateRecordDetailResponse {
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 证书部署记录列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordDetailList?: Array<UpdateRecordDetails>
  /**
   * 成功总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  SuccessTotalCount?: number
  /**
   * 失败总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailedTotalCount?: number
  /**
   * 部署中总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunningTotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeleteCertificatesTaskResult请求参数结构体
 */
export interface DescribeDeleteCertificatesTaskResultRequest {
  /**
   * DeleteCertificates接口返回的任务ID， 最大支持100个
   */
  TaskIds: Array<string>
}

/**
 * DescribeHostUpdateRecord请求参数结构体
 */
export interface DescribeHostUpdateRecordRequest {
  /**
   * 分页偏移量，从0开始。
   */
  Offset?: number
  /**
   * 每页数量，默认10。
   */
  Limit?: number
  /**
   * 新证书ID
   */
  CertificateId?: string
  /**
   * 原证书ID
   */
  OldCertificateId?: string
}

/**
 * DescribeHostClbInstanceList请求参数结构体
 */
export interface DescribeHostClbInstanceListRequest {
  /**
   * 待部署的证书ID
   */
  CertificateId: string
  /**
   * 分页偏移量，从0开始。
   */
  Offset?: number
  /**
   * 每页数量，默认10。
   */
  Limit?: number
  /**
   * 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时
   */
  IsCache?: number
  /**
   * 过滤参数列表； FilterKey：domainMatch（查询域名是否匹配的实例列表） FilterValue：1，表示查询匹配； 0，表示查询不匹配； 默认查询匹配
   */
  Filters?: Array<Filter>
  /**
   * 是否异步缓存
   */
  AsyncCache?: number
  /**
   * 原证书ID
   */
  OldCertificateId?: string
}

/**
 * VerifyManager请求参数结构体
 */
export interface VerifyManagerRequest {
  /**
   * 管理人ID
   */
  ManagerId: number
}

/**
 * 证书异步任务ID
 */
export interface CertTaskId {
  /**
   * 证书ID
   */
  CertId?: string
  /**
   * 异步任务ID
   */
  TaskId?: string
}

/**
 * DescribeHostLiveInstanceList返回参数结构体
 */
export interface DescribeHostLiveInstanceListResponse {
  /**
   * live实例列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceList?: Array<LiveInstanceDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeHostApiGatewayInstanceList请求参数结构体
 */
export interface DescribeHostApiGatewayInstanceListRequest {
  /**
   * 待部署的证书ID
   */
  CertificateId: string
  /**
   * 部署资源类型
   */
  ResourceType: string
  /**
   * 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时
   */
  IsCache?: number
  /**
   * 过滤参数列表； FilterKey：domainMatch（查询域名是否匹配的实例列表） FilterValue：1，表示查询匹配； 0，表示查询不匹配； 默认查询匹配
   */
  Filters?: Array<Filter>
  /**
   * 已部署的证书ID
   */
  OldCertificateId?: string
}

/**
 * TCB访问服务列表
 */
export interface TCBAccessService {
  /**
   * 实例列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceList?: Array<TCBAccessInstance>
  /**
   * 数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
}

/**
 * ddos实例详情 - 异步关联云资源数据结构
 */
export interface DdosInstanceList {
  /**
   * 该地域下ddos域名总数
   */
  TotalCount?: number
  /**
   * ddos实例详情	
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceList?: Array<DdosInstanceDetail>
}

/**
 * DescribeDownloadCertificateUrl请求参数结构体
 */
export interface DescribeDownloadCertificateUrlRequest {
  /**
   * 证书ID
   */
  CertificateId: string
  /**
   * 下载的服务类型: nginx tomcat apache iis jks other root
   */
  ServiceType?: string
}

/**
 * 获取证书列表（DescribeCertificate）返回参数键为 SubmittedData 的内容。
 */
export interface SubmittedData {
  /**
   * CSR 类型，（online = 在线生成CSR，parse = 粘贴 CSR）。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CsrType?: string
  /**
   * CSR 内容。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CsrContent?: string
  /**
   * 域名信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertificateDomain?: string
  /**
   * DNS 信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DomainList?: Array<string>
  /**
   * 私钥密码。
注意：此字段可能返回 null，表示取不到有效值。
   */
  KeyPassword?: string
  /**
   * 企业或单位名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OrganizationName?: string
  /**
   * 部门。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OrganizationDivision?: string
  /**
   * 地址。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OrganizationAddress?: string
  /**
   * 国家。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OrganizationCountry?: string
  /**
   * 市。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OrganizationCity?: string
  /**
   * 省。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OrganizationRegion?: string
  /**
   * 邮政编码。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PostalCode?: string
  /**
   * 座机区号。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PhoneAreaCode?: string
  /**
   * 座机号码。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PhoneNumber?: string
  /**
   * 管理员名。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdminFirstName?: string
  /**
   * 管理员姓。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdminLastName?: string
  /**
   * 管理员电话号码。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdminPhoneNum?: string
  /**
   * 管理员邮箱地址。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdminEmail?: string
  /**
   * 管理员职位。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdminPosition?: string
  /**
   * 联系人名。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContactFirstName?: string
  /**
   * 联系人姓。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContactLastName?: string
  /**
   * 联系人电话号码。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContactNumber?: string
  /**
   * 联系人邮箱地址，
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContactEmail?: string
  /**
   * 联系人职位。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContactPosition?: string
  /**
   * 验证类型。
注意：此字段可能返回 null，表示取不到有效值。
   */
  VerifyType?: string
}

/**
 * DeployCertificateRecordRollback返回参数结构体
 */
export interface DeployCertificateRecordRollbackResponse {
  /**
   * 回滚部署记录ID
   */
  DeployRecordId: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * tcb地域实例详情 - 异步关联云资源数据结构
 */
export interface TCBInstanceList {
  /**
   * 地域
   */
  Region?: string
  /**
   * tcb环境实例详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Environments?: Array<TCBEnvironments>
}

/**
 * DescribeHostCosInstanceList请求参数结构体
 */
export interface DescribeHostCosInstanceListRequest {
  /**
   * 待部署的证书ID
   */
  CertificateId?: string
  /**
   * 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时
   */
  IsCache?: number
  /**
   * 过滤参数列表
   */
  Filters?: Array<Filter>
  /**
   * 部署资源类型 cos
   */
  ResourceType?: string
  /**
   * 原证书ID
   */
  OldCertificateId?: string
  /**
   * 分页偏移量，从0开始。
   */
  Offset?: number
  /**
   * 每页数量，默认10。
   */
  Limit?: number
  /**
   * 是否异步
   */
  AsyncCache?: number
}

/**
 * DescribeHostCdnInstanceList返回参数结构体
 */
export interface DescribeHostCdnInstanceListResponse {
  /**
   * CDN实例列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceList?: Array<CdnInstanceDetail>
  /**
   * CDN域名总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 异步刷新总数	
注意：此字段可能返回 null，表示取不到有效值。
   */
  AsyncTotalNum?: number
  /**
   * 异步刷新当前执行数	
注意：此字段可能返回 null，表示取不到有效值。
   */
  AsyncOffset?: number
  /**
   * 当前缓存读取时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  AsyncCacheTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * tke ingress实例详情
 */
export interface TkeIngressDetail {
  /**
   * ingress名称
   */
  IngressName: string
  /**
   * tls域名列表
   */
  TlsDomains: Array<string>
  /**
   * ingress域名列表
   */
  Domains: Array<string>
}

/**
 * DeployCertificateInstance请求参数结构体
 */
export interface DeployCertificateInstanceRequest {
  /**
   * 待部署的证书ID
   */
  CertificateId: string
  /**
   * 需要部署实例列表
   */
  InstanceIdList: Array<string>
  /**
   * 部署的云资源类型
   */
  ResourceType?: string
  /**
   * 部署云资源状态：
云直播：
-1：域名未关联证书。
1： 域名https已开启。
0： 域名https已关闭。
   */
  Status?: number
  /**
   * 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时
   */
  IsCache?: number
}

/**
 * apiGateway实例详情
 */
export interface ApiGatewayInstanceDetail {
  /**
   * 实例ID
   */
  ServiceId: string
  /**
   * 实例名称
   */
  ServiceName: string
  /**
   * 域名
   */
  Domain: string
  /**
   * 证书ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertId: string
  /**
   * 使用协议
   */
  Protocol: string
}

/**
 * live实例详情 - 异步关联云资源数据结构
 */
export interface LiveInstanceList {
  /**
   * 该地域下live实例总数
   */
  TotalCount?: number
  /**
   * live实例详情	
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceList?: Array<LiveInstanceDetail>
}

/**
 * DeleteCertificate请求参数结构体
 */
export interface DeleteCertificateRequest {
  /**
   * 证书 ID。
   */
  CertificateId: string
  /**
   * 删除时是否检查证书关联了云资源。默认不检查。如选择检查(需要授权服务角色SSL_QCSLinkedRoleInReplaceLoadCertificate)删除将变成异步,接口会返回异步任务ID。需使用DescribeDeleteCertificatesTaskResult接口查询删除是否成功。
   */
  IsCheckResource?: boolean
}

/**
 * DescribeCertificateOperateLogs返回参数结构体
 */
export interface DescribeCertificateOperateLogsResponse {
  /**
   * 当前查询条件日志总数。
   */
  AllTotal?: number
  /**
   * 本次请求返回的日志数量。
   */
  TotalCount?: number
  /**
   * 证书操作日志列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OperateLogs?: Array<OperationLog>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeHostLighthouseInstanceList请求参数结构体
 */
export interface DescribeHostLighthouseInstanceListRequest {
  /**
   * 待部署的证书ID
   */
  CertificateId: string
  /**
   * 部署资源类型 lighthouse
   */
  ResourceType: string
  /**
   * 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时
   */
  IsCache?: number
  /**
   * 过滤参数列表
   */
  Filters?: Array<Filter>
}

/**
 * DescribeHostCdnInstanceList请求参数结构体
 */
export interface DescribeHostCdnInstanceListRequest {
  /**
   * 待部署的证书ID
   */
  CertificateId: string
  /**
   * 部署资源类型
   */
  ResourceType: string
  /**
   * 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时
   */
  IsCache?: number
  /**
   * 过滤参数列表； FilterKey：domainMatch（查询域名是否匹配的实例列表） FilterValue：1，表示查询匹配； 0，表示查询不匹配； 默认查询匹配
   */
  Filters?: Array<Filter>
  /**
   * 原证书ID
   */
  OldCertificateId?: string
  /**
   * 分页偏移量，从0开始。
   */
  Offset?: number
  /**
   * 每页数量，默认10。
   */
  Limit?: number
  /**
   * 是否异步
   */
  AsyncCache?: number
}

/**
 * DescribeHostTeoInstanceList返回参数结构体
 */
export interface DescribeHostTeoInstanceListResponse {
  /**
   * teo实例列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceList?: Array<TeoInstanceDetail>
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeHostWafInstanceList请求参数结构体
 */
export interface DescribeHostWafInstanceListRequest {
  /**
   * 待部署的证书ID
   */
  CertificateId: string
  /**
   * 部署资源类型
   */
  ResourceType: string
  /**
   * 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时
   */
  IsCache?: number
  /**
   * 过滤参数列表； FilterKey：domainMatch（查询域名是否匹配的实例列表） FilterValue：1，表示查询匹配； 0，表示查询不匹配； 默认查询匹配
   */
  Filters?: Array<Filter>
  /**
   * 已部署的证书ID
   */
  OldCertificateId?: string
}

/**
 * UploadRevokeLetter返回参数结构体
 */
export interface UploadRevokeLetterResponse {
  /**
   * 证书 ID。
   */
  CertificateId: string
  /**
   * 是否成功。
   */
  IsSuccess: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CancelAuditCertificate请求参数结构体
 */
export interface CancelAuditCertificateRequest {
  /**
   * 证书ID
   */
  CertificateId: string
}

/**
 * ModifyCertificateResubmit返回参数结构体
 */
export interface ModifyCertificateResubmitResponse {
  /**
   * 证书ID。
   */
  CertificateId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubmitAuditManager返回参数结构体
 */
export interface SubmitAuditManagerResponse {
  /**
   * 管理人ID
   */
  ManagerId: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateCertificateInstance返回参数结构体
 */
export interface UpdateCertificateInstanceResponse {
  /**
   * 云资源部署任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeployRecordId?: number
  /**
   * 部署状态，1表示部署成功，0表示部署失败
   */
  DeployStatus?: number
  /**
   * 更新异步创建任务进度详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateSyncProgress?: Array<UpdateSyncProgress>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UploadCertificate请求参数结构体
 */
export interface UploadCertificateRequest {
  /**
   * 证书内容。
   */
  CertificatePublicKey: string
  /**
   * 私钥内容，证书类型为 SVR 时必填，为 CA 时可不填。
   */
  CertificatePrivateKey?: string
  /**
   * 证书类型，默认 SVR。CA = CA证书，SVR = 服务器证书。
   */
  CertificateType?: string
  /**
   * 备注名称。
   */
  Alias?: string
  /**
   * 项目 ID。
   */
  ProjectId?: number
  /**
   * 证书用途/证书来源。“CLB，CDN，WAF，LIVE，DDOS”
   */
  CertificateUse?: string
  /**
   * 标签列表
   */
  Tags?: Array<Tags>
  /**
   * 相同的证书是否允许重复上传
   */
  Repeatable?: boolean
}

/**
 * 证书操作日志。
 */
export interface OperationLog {
  /**
   * 操作证书动作。
   */
  Action?: string
  /**
   * 操作时间。
   */
  CreatedOn?: string
  /**
   * 主账号
注意：此字段可能返回 null，表示取不到有效值。
   */
  Uin?: string
  /**
   * 子账号
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubAccountUin?: string
  /**
   * 证书ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertId?: string
  /**
   * 操作
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
}

/**
 * ModifyCertificateAlias返回参数结构体
 */
export interface ModifyCertificateAliasResponse {
  /**
   * 修改成功的证书 ID。
   */
  CertificateId: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ApplyCertificate请求参数结构体
 */
export interface ApplyCertificateRequest {
  /**
   * 验证方式：DNS_AUTO = 自动DNS验证，DNS = 手动DNS验证，FILE = 文件验证。
   */
  DvAuthMethod: string
  /**
   * 域名。
   */
  DomainName: string
  /**
   * 项目 ID。
   */
  ProjectId?: number
  /**
   * 证书类型，目前仅支持类型83。83 = TrustAsia C1 DV Free。
   */
  PackageType?: string
  /**
   * 邮箱。
   */
  ContactEmail?: string
  /**
   * 手机。
   */
  ContactPhone?: string
  /**
   * 有效期，默认3个月，目前仅支持3个月。
   */
  ValidityPeriod?: string
  /**
   * 加密算法，支持 RSA及ECC。
   */
  CsrEncryptAlgo?: string
  /**
   * 密钥对参数，RSA仅支持2048。ECC仅支持prime256v1。加密算法选择ECC时，此参数必填
   */
  CsrKeyParameter?: string
  /**
   * CSR 的加密密码。
   */
  CsrKeyPassword?: string
  /**
   * 备注名称。
   */
  Alias?: string
  /**
   * 原证书 ID，用于重新申请。
   */
  OldCertificateId?: string
  /**
   * 权益包ID，用于免费证书扩容包使用
   */
  PackageId?: string
  /**
   * 签发后是否删除自动域名验证记录， 默认为否；仅域名为DNS_AUTO验证类型支持传参
   */
  DeleteDnsAutoRecord?: boolean
  /**
   * 域名数组（多域名证书可以上传）。
   */
  DnsNames?: Array<string>
}

/**
 * CreateCertificate返回参数结构体
 */
export interface CreateCertificateResponse {
  /**
   * 证书ID列表
   */
  CertificateIds: Array<string>
  /**
   * 订单号列表
   */
  DealIds: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 错误异常
 */
export interface Error {
  /**
   * 异常错误码
注意：此字段可能返回 null，表示取不到有效值。
   */
  Code?: string
  /**
   * 异常错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
}

/**
 * 部署记录信息
 */
export interface UpdateRecordInfo {
  /**
   * 记录ID
   */
  Id: number
  /**
   * 新证书ID
   */
  CertId: string
  /**
   * 原证书ID
   */
  OldCertId: string
  /**
   * 部署资源类型列表
   */
  ResourceTypes: Array<string>
  /**
   * 部署地域列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Regions: Array<string>
  /**
   * 部署状态
   */
  Status: number
  /**
   * 部署时间
   */
  CreateTime: string
  /**
   * 最后一次更新时间
   */
  UpdateTime: string
}

/**
 * DescribeHostApiGatewayInstanceList返回参数结构体
 */
export interface DescribeHostApiGatewayInstanceListResponse {
  /**
   * apiGateway实例列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceList?: Array<ApiGatewayInstanceDetail>
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeployCertificateRecordRetry请求参数结构体
 */
export interface DeployCertificateRecordRetryRequest {
  /**
   * 待重试部署记录ID
   */
  DeployRecordId?: number
  /**
   * 待重试部署记录详情ID
   */
  DeployRecordDetailId?: number
}

/**
 * DescribeCertificateBindResourceTaskResult返回参数结构体
 */
export interface DescribeCertificateBindResourceTaskResultResponse {
  /**
   * 异步任务绑定关联云资源结果列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  SyncTaskBindResourceResult?: Array<SyncTaskBindResourceResult>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 获取证书列表（DescribeCertificates）返回参数键为 Certificates 下，key为 ProjectInfo 的内容。
 */
export interface ProjectInfo {
  /**
   * 项目名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectName: string
  /**
   * 项目创建用户 UIN。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectCreatorUin: number
  /**
   * 项目创建时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectCreateTime: string
  /**
   * 项目信息简述。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectResume: string
  /**
   * 用户 UIN。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUin: number
  /**
   * 项目 ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId: string
}

/**
 * DescribeHostTeoInstanceList请求参数结构体
 */
export interface DescribeHostTeoInstanceListRequest {
  /**
   * 待部署的证书ID
   */
  CertificateId: string
  /**
   * 部署资源类型
   */
  ResourceType: string
  /**
   * 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时
   */
  IsCache?: number
  /**
   * 过滤参数列表； FilterKey：domainMatch（查询域名是否匹配的实例列表） FilterValue：1，表示查询匹配； 0，表示查询不匹配； 默认查询匹配
   */
  Filters?: Array<Filter>
  /**
   * 已部署的证书ID
   */
  OldCertificateId?: string
  /**
   * 分页偏移量，从0开始。
   */
  Offset?: number
  /**
   * 每页数量，默认10。
   */
  Limit?: number
  /**
   * 是否异步
   */
  AsyncCache?: number
}

/**
 * 绑定资源地域结果
 */
export interface BindResourceRegionResult {
  /**
   * 地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * 关联资源总数
   */
  TotalCount?: number
}

/**
 * tke实例详情
 */
export interface TkeInstanceDetail {
  /**
   * 集群ID
   */
  ClusterId?: string
  /**
   * 集群名称
   */
  ClusterName?: string
  /**
   * 集群命名空间列表
   */
  NamespaceList?: Array<TkeNameSpaceDetail>
  /**
   * 集群类型
   */
  ClusterType?: string
  /**
   * 集群版本
   */
  ClusterVersion?: string
}

/**
 * UploadConfirmLetter请求参数结构体
 */
export interface UploadConfirmLetterRequest {
  /**
   * 证书ID
   */
  CertificateId: string
  /**
   * base64编码后的证书确认函文件，格式应为jpg、jpeg、png、pdf，大小应在1kb与1.4M之间。
   */
  ConfirmLetter: string
}

/**
 * SubmitCertificateInformation返回参数结构体
 */
export interface SubmitCertificateInformationResponse {
  /**
   * 证书 ID。
   */
  CertificateId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * tcb环境实例详情 - 异步关联云资源数据结构
 */
export interface TCBEnvironments {
  /**
   * tcb环境	
注意：此字段可能返回 null，表示取不到有效值。
   */
  Environment?: TCBEnvironment
  /**
   * 访问服务	
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccessService?: TCBAccessService
  /**
   * 静态托管	
注意：此字段可能返回 null，表示取不到有效值。
   */
  HostService?: TCBHostService
}

/**
 * clb实例详情 - 异步关联云资源数据结构
 */
export interface ClbInstanceList {
  /**
   * 地域
   */
  Region?: string
  /**
   * clb实例详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceList?: Array<ClbInstanceDetail>
  /**
   * 该地域下Clb实例总数
   */
  TotalCount?: number
}

/**
 * UpdateCertificateRecordRetry返回参数结构体
 */
export interface UpdateCertificateRecordRetryResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePackages请求参数结构体
 */
export interface DescribePackagesRequest {
  /**
   * 偏移量，默认0。
   */
  Offset?: number
  /**
   * 限制数目，默认20。
   */
  Limit?: number
  /**
   * 按状态筛选。
   */
  Status?: string
  /**
   * 按过期时间升序或降序排列。
   */
  ExpireTime?: string
  /**
   * 按权益包ID搜索。
   */
  PackageId?: string
  /**
   * 按权益包类型搜索。
   */
  Type?: string
  /**
   * 子产品编号
   */
  Pid?: number
}

/**
 * TCB静态托管服务列表
 */
export interface TCBHostService {
  /**
   * 实例列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceList?: Array<TCBHostInstance>
  /**
   * 数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
}

/**
 * CheckCertificateChain请求参数结构体
 */
export interface CheckCertificateChainRequest {
  /**
   * 待检查的证书链
   */
  CertificateChain: string
}

/**
 * DescribeCompanies请求参数结构体
 */
export interface DescribeCompaniesRequest {
  /**
   * 分页偏移量
   */
  Offset?: number
  /**
   * 分页每页限制数
   */
  Limit?: number
  /**
   * 公司ID
   */
  CompanyId?: number
}

/**
 * 管理人的四种审核状态
 */
export type ManagerStatusInfo = null

/**
 * CancelAuditCertificate返回参数结构体
 */
export interface CancelAuditCertificateResponse {
  /**
   * 操作是否成功
   */
  Result: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 部署记录信息
 */
export interface DeployRecordInfo {
  /**
   * 部署记录ID
   */
  Id: number
  /**
   * 部署证书ID
   */
  CertId: string
  /**
   * 部署资源类型
   */
  ResourceType: string
  /**
   * 部署地域
   */
  Region: string
  /**
   * 部署状态
   */
  Status: number
  /**
   * 部署时间
   */
  CreateTime: string
  /**
   * 最近一次更新时间
   */
  UpdateTime: string
}

/**
 * DescribePackages返回参数结构体
 */
export interface DescribePackagesResponse {
  /**
   * 权益包列表。
   */
  Packages: Array<PackageInfo>
  /**
   * 总条数。
   */
  TotalCount: number
  /**
   * 权益点总余额。
   */
  TotalBalance: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeManagers请求参数结构体
 */
export interface DescribeManagersRequest {
  /**
   * 公司ID
   */
  CompanyId: number
  /**
   * 分页偏移量
   */
  Offset?: number
  /**
   * 分页每页数量
   */
  Limit?: number
  /**
   * 管理人姓名（将废弃），请使用SearchKey
   */
  ManagerName?: string
  /**
   * 模糊查询管理人邮箱（将废弃），请使用SearchKey
   */
  ManagerMail?: string
  /**
   * 根据管理人状态进行筛选，取值有
'none' 未提交审核
'audit', 亚信审核中
'CAaudit' CA审核中
'ok' 已审核
'invalid'  审核失败
'expiring'  即将过期
'expired' 已过期
   */
  Status?: string
  /**
   * 管理人姓/管理人名/邮箱/部门精准匹配
   */
  SearchKey?: string
}

/**
 * TSE实例详情 - 异步关联云资源数据结构
 */
export interface TSEInstanceList {
  /**
   * TSE实例详情	
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceList?: Array<TSEInstanceDetail>
  /**
   * 该地域下TSE实例总数
   */
  TotalCount?: number
  /**
   * 地域
   */
  Region?: string
}

/**
 * DescribeHostLighthouseInstanceList返回参数结构体
 */
export interface DescribeHostLighthouseInstanceListResponse {
  /**
   * Lighthouse实例列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceList: Array<LighthouseInstanceDetail>
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CompleteCertificate返回参数结构体
 */
export interface CompleteCertificateResponse {
  /**
   * 证书ID
   */
  CertificateId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * vod实例详情 - 异步关联云资源数据结构
 */
export interface VODInstanceList {
  /**
   * vod实例详情	
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceList?: Array<VodInstanceDetail>
  /**
   * 该地域下vod实例总数
   */
  TotalCount?: number
}
