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
   * 任务ID，根据CreateCertificateBindResourceSyncTask得到的任务ID查询绑定云资源结果
   */
  TaskId: string
  /**
   * 每页展示数量， 默认10，最大值100; 分页总数为云资源地域下实例总数， 即第一页会拉群每个云资源的地域下面Limit数量实例
   */
  Limit?: string
  /**
   * 当前偏移量，默认为0
   */
  Offset?: string
  /**
   * 查询资源类型的结果详情， 不传则查询所有，取值支持：
- clb
- cdn
- ddos
- live
- vod
- waf
- apigateway
- teo
- tke
- cos
- tse
- tcb
   */
  ResourceTypes?: Array<string>
  /**
   * 查询地域列表的数据，clb、tke、waf、apigateway、tcb、cos、tse支持地域查询， 其他资源类型不支持
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
  CertificateId?: string
  /**
   * 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时
   */
  IsCache?: number
  /**
   * 过滤参数列表； FilterKey：domainMatch（查询域名是否匹配的实例列表） FilterValue：1，表示查询匹配； 0，表示查询不匹配； 默认查询匹配
   */
  Filters?: Array<Filter>
  /**
   * 部署资源类型ddos
   */
  ResourceType?: string
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
  Status?: string
  /**
   * 管理人姓名
   */
  ManagerFirstName?: string
  /**
   * 管理人姓名
   */
  ManagerLastName?: string
  /**
   * 管理人职位
   */
  ManagerPosition?: string
  /**
   * 管理人电话
   */
  ManagerPhone?: string
  /**
   * 管理人邮箱
   */
  ManagerMail?: string
  /**
   * 管理人所属部门
   */
  ManagerDepartment?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 管理人域名数量
   */
  DomainCount?: number
  /**
   * 管理人证书数量
   */
  CertCount?: number
  /**
   * 管理人ID
   */
  ManagerId?: number
  /**
   * 审核有效到期时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireTime?: string
  /**
   * 最近一次提交审核时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubmitAuditTime?: string
  /**
   * 审核通过时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  VerifyTime?: string
  /**
   * 具体审核状态信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatusInfo?: Array<ManagerStatusInfo>
  /**
   * 标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tags>
}

/**
 * DescribeHostDeployRecordDetail返回参数结构体
 */
export interface DescribeHostDeployRecordDetailResponse {
  /**
   * 部署记录总数
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
   */
  ListenerId?: string
  /**
   * 部署域名列表
   */
  Domains?: Array<string>
  /**
   * 部署监听器协议
   */
  Protocol?: string
  /**
   * 部署状态
   */
  Status?: number
  /**
   * 部署错误信息
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
   */
  Bucket?: string
  /**
   * 命名空间名称
   */
  Namespace?: string
  /**
   * secret名称
   */
  SecretName?: string
  /**
   * 端口
   */
  Port?: number
  /**
   * TCB环境ID
   */
  EnvId?: string
  /**
   * 部署的TCB类型
   */
  TCBType?: string
  /**
   * 部署的TCB地域
   */
  Region?: string
  /**
   * 部署CLB监听器的Url
   */
  Url?: Array<string>
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
   */
  OwnerUin?: string
  /**
   * 项目 ID。
   */
  ProjectId?: string
  /**
   * 证书来源：
trustasia：亚洲诚信，
upload：用户上传。
wosign：沃通
sheca：上海CA
   */
  From?: string
  /**
   * 证书套餐类型：
null：用户上传证书（没有套餐类型），
2：TrustAsia TLS RSA CA， 
3：SecureSite 增强型企业版（EV Pro）， 
4：SecureSite 增强型（EV）， 
5：SecureSite 企业型专业版（OV Pro），
6：SecureSite 企业型（OV）， 
7：SecureSite 企业型（OV）通配符， 
8：Geotrust 增强型（EV）， 
9：Geotrust 企业型（OV）， 
10：Geotrust 企业型（OV）通配符， 
11：TrustAsia 域名型多域名 SSL 证书， 
12：TrustAsia 域名型（DV）通配符， 
13：TrustAsia 企业型通配符（OV）SSL 证书（D3）， 
14：TrustAsia 企业型（OV）SSL 证书（D3）， 
15：TrustAsia 企业型多域名 （OV）SSL 证书（D3）， 
16：TrustAsia 增强型 （EV）SSL 证书（D3）， 
17：TrustAsia 增强型多域名（EV）SSL 证书（D3）， 
18：GlobalSign 企业型（OV）SSL 证书， 
19：GlobalSign 企业型通配符 （OV）SSL 证书， 
20：GlobalSign 增强型 （EV）SSL 证书， 
21：TrustAsia 企业型通配符多域名（OV）SSL 证书（D3）， 
22：GlobalSign 企业型多域名（OV）SSL 证书， 
23：GlobalSign 企业型通配符多域名（OV）SSL 证书，
24：GlobalSign 增强型多域名（EV）SSL 证书，
25：Wotrus 域名型证书，
26：Wotrus 域名型多域名证书，
27：Wotrus 域名型通配符证书，
28：Wotrus 企业型证书，
29：Wotrus 企业型多域名证书，
30：Wotrus 企业型通配符证书，
31：Wotrus 增强型证书，
32：Wotrus 增强型多域名证书，
33：WoTrus-国密域名型证书，
34：WoTrus-国密域名型证书（多域名），
35：WoTrus-国密域名型证书（通配符），
37：WoTrus-国密企业型证书，
38：WoTrus-国密企业型证书（多域名），
39：WoTrus-国密企业型证书（通配符），
40：WoTrus-国密增强型证书，
41：WoTrus-国密增强型证书（多域名），
42：TrustAsia-域名型证书（通配符多域名），
43：DNSPod-企业型(OV)SSL证书
44：DNSPod-企业型(OV)通配符SSL证书
45：DNSPod-企业型(OV)多域名SSL证书
46：DNSPod-增强型(EV)SSL证书
47：DNSPod-增强型(EV)多域名SSL证书
48：DNSPod-域名型(DV)SSL证书
49：DNSPod-域名型(DV)通配符SSL证书
50：DNSPod-域名型(DV)多域名SSL证书
51：DNSPod（国密）-企业型(OV)SSL证书
52：DNSPod（国密）-企业型(OV)通配符SSL证书
53：DNSPod（国密）-企业型(OV)多域名SSL证书
54：DNSPod（国密）-域名型(DV)SSL证书
55：DNSPod（国密）-域名型(DV)通配符SSL证书
56：DNSPod（国密）-域名型(DV)多域名SSL证书
57：SecureSite 企业型专业版多域名(OV Pro)
58：SecureSite 企业型多域名(OV)
59：SecureSite 增强型专业版多域名(EV Pro)
60：SecureSite 增强型多域名(EV)
61：Geotrust 增强型多域名(EV)
75：SecureSite 企业型(OV)
76：SecureSite 企业型(OV)通配符
77：SecureSite 增强型(EV)
78：Geotrust 企业型(OV)
79：Geotrust 企业型(OV)通配符
80：Geotrust 增强型(EV)
81：GlobalSign 企业型（OV）SSL证书
82：GlobalSign 企业型通配符 （OV）SSL证书
83：TrustAsia C1 DV Free
85：GlobalSign 增强型 （EV）SSL证书
88：GlobalSign 企业型通配符多域名 （OV）SSL证书
89：GlobalSign 企业型多域名 （OV）SSL证书
90：GlobalSign 增强型多域名（EV） SSL证书
91：Geotrust 增强型多域名(EV)
92：SecureSite 企业型专业版多域名(OV Pro)
93：SecureSite 企业型多域名(OV)
94：SecureSite 增强型专业版多域名(EV Pro)
95：SecureSite 增强型多域名(EV)
96：SecureSite 增强型专业版(EV Pro)
97：SecureSite 企业型专业版(OV Pro)
98：CFCA 企业型(OV)SSL证书
99：CFCA 企业型多域名(OV)SSL证书
100：CFCA 企业型通配符(OV)SSL证书
101：CFCA 增强型(EV)SSL证书
   */
  PackageType?: string
  /**
   * 证书类型：CA = 客户端证书，SVR = 服务器证书。
   */
  CertificateType?: string
  /**
   * 证书产品名称
   */
  ProductZhName?: string
  /**
   * 主域名。
   */
  Domain?: string
  /**
   * 备注名称。
   */
  Alias?: string
  /**
   * 证书状态：0 = 审核中，1 = 已通过，2 = 审核失败，3 = 已过期，4 = 自动添加DNS记录，5 = 企业证书，待提交资料，6 = 订单取消中，7 = 已取消，8 = 已提交资料， 待上传确认函，9 = 证书吊销中，10 = 已吊销，11 = 重颁发中，12 = 待上传吊销确认函，13 = 免费证书待提交资料。14 = 证书已退款。 15 = 证书迁移中
   */
  Status?: number
  /**
   * 证书扩展信息。
   */
  CertificateExtra?: CertificateExtra
  /**
   * 漏洞扫描状态：INACTIVE = 未开启，ACTIVE = 已开启
   */
  VulnerabilityStatus?: string
  /**
   * 状态信息。
   */
  StatusMsg?: string
  /**
   * 验证类型：DNS_AUTO = 自动DNS验证，DNS = 手动DNS验证，FILE = 文件验证，DNS_PROXY = DNS代理验证。FILE_PROXY = 文件代理验证
   */
  VerifyType?: string
  /**
   * 证书生效时间。
   */
  CertBeginTime?: string
  /**
   * 证书过期时间。
   */
  CertEndTime?: string
  /**
   * 证书有效期，单位（月）。
   */
  ValidityPeriod?: string
  /**
   * 创建时间。
   */
  InsertTime?: string
  /**
   * 证书 ID。
   */
  CertificateId?: string
  /**
   * 证书包含的多个域名（包含主域名）。
   */
  SubjectAltName?: Array<string>
  /**
   * 证书类型名称。
   */
  PackageTypeName?: string
  /**
   * 状态名称。
   */
  StatusName?: string
  /**
   * 是否为 VIP 客户。
   */
  IsVip?: boolean
  /**
   * 是否为 DV 版证书。
   */
  IsDv?: boolean
  /**
   * 是否为泛域名证书。
   */
  IsWildcard?: boolean
  /**
   * 是否启用了漏洞扫描功能。
   */
  IsVulnerability?: boolean
  /**
   * 是否可续费。
   */
  RenewAble?: boolean
  /**
   * 项目信息。
   */
  ProjectInfo?: ProjectInfo
  /**
   * 关联的云资源，暂不可用
   */
  BoundResource?: Array<string>
  /**
   * 是否可部署。
   */
  Deployable?: boolean
  /**
   * 标签列表
   */
  Tags?: Array<Tags>
  /**
   * 是否已忽略到期通知
   */
  IsIgnore?: boolean
  /**
   * 是否国密证书
   */
  IsSM?: boolean
  /**
   * 证书算法
   */
  EncryptAlgorithm?: string
  /**
   * 上传CA证书的加密算法
   */
  CAEncryptAlgorithms?: Array<string>
  /**
   * 上传CA证书的过期时间
   */
  CAEndTimes?: Array<string>
  /**
   * 上传CA证书的通用名称
   */
  CACommonNames?: Array<string>
  /**
   * 证书预审核信息
   */
  PreAuditInfo?: PreAuditInfo
  /**
   * 是否自动续费
   */
  AutoRenewFlag?: number
  /**
   * 托管状态，0，托管中，5，资源替换中， 10， 托管完成， -1未托管
   */
  HostingStatus?: number
  /**
   * 托管完成时间
   */
  HostingCompleteTime?: string
  /**
   * 托管新证书ID
   */
  HostingRenewCertId?: string
  /**
   * 存在的续费证书ID
   */
  HasRenewOrder?: string
  /**
   * 重颁发证书原证书是否删除
   */
  ReplaceOriCertIsDelete?: boolean
  /**
   * 是否即将过期， 证书即将到期的30天内为即将过期
   */
  IsExpiring?: boolean
  /**
   * DV证书添加验证截止时间
   */
  DVAuthDeadline?: string
  /**
   * 域名验证通过时间
   */
  ValidationPassedTime?: string
  /**
   * 证书关联的多域名
   */
  CertSANs?: Array<string>
  /**
   * 域名验证驳回信息
   */
  AwaitingValidationMsg?: string
  /**
   * 是否允许下载
   */
  AllowDownload?: boolean
  /**
   * 证书域名是否全部在DNSPOD托管解析
   */
  IsDNSPODResolve?: boolean
  /**
   * 是否是权益点购买的证书
   */
  IsPackage?: boolean
  /**
   * 是否存在私钥密码
   */
  KeyPasswordCustomFlag?: boolean
  /**
   * 支持下载的WEB服务器类型： nginx、apache、iis、tomcat、jks、root、other
   */
  SupportDownloadType?: SupportDownloadType
  /**
   * 证书吊销完成时间
   */
  CertRevokedTime?: string
  /**
   * 托管资源类型列表
   */
  HostingResourceTypes?: Array<string>
  /**
   * 托管配置信息
   */
  HostingConfig?: HostingConfig
}

/**
 * 获取证书列表（DescribeCertificates）返回参数键为 Certificates 数组下，key为CertificateExtra 的内容。
 */
export interface CertificateExtra {
  /**
   * 证书可配置域名数量。
   */
  DomainNumber?: string
  /**
   * 续费原证书 ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OriginCertificateId?: string
  /**
   * 重颁发证书原始 ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReplacedBy?: string
  /**
   * 重颁发证书ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReplacedFor?: string
  /**
   * 续费证书 ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RenewOrder?: string
  /**
   * 是否是国密证书
   */
  SMCert?: number
  /**
   * 公司类型，取值：1（个人）；2（公司）
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
  /**
   * 是否查询异常
注意：此字段可能返回 null，表示取不到有效值。
   */
  Error?: string
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
   * 域名状态 rejected：域名审核未通过，域名备案过期/被注销导致，processing：部署中，online：已启动，offline：已关闭
   */
  Status?: string
  /**
   * 域名计费状态，on表示开启，off表示关闭。
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
  ManagerId?: number
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
  Name?: string
  /**
   * secret列表
   */
  SecretList?: Array<TkeSecretDetail>
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
  /**
   * 是否查询异常
注意：此字段可能返回 null，表示取不到有效值。
   */
  Error?: string
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
   * 资源类型:clb,cdn,live,waf,antiddos,teo
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
  ListenerId?: string
  /**
   * 监听器名称
   */
  ListenerName?: string
  /**
   * 是否开启SNI，1为开启，0为关闭
   */
  SniSwitch?: number
  /**
   * 监听器协议类型， HTTPS|TCP_SSL
   */
  Protocol?: string
  /**
   * 监听器绑定的证书数据
   */
  Certificate?: Certificate
  /**
   * 监听器规则列表
   */
  Rules?: Array<ClbListenerRule>
  /**
   * 不匹配域名列表
   */
  NoMatchDomains?: Array<string>
}

/**
 * cos实例详情 - 异步关联云资源数据结构
 */
export interface COSInstanceList {
  /**
   * 地域
   */
  Region?: string
  /**
   * 实例详情
   */
  InstanceList?: Array<CosInstanceDetail>
  /**
   * 地域下总数
   */
  TotalCount?: number
  /**
   * 错误信息
   */
  Error?: string
}

/**
 * DescribeCompanies返回参数结构体
 */
export interface DescribeCompaniesResponse {
  /**
   * 公司列表
   */
  Companies?: Array<CompanyInfo>
  /**
   * 公司总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 部署记录信息
 */
export interface UpdateRecordInfo {
  /**
   * 记录ID
   */
  Id?: number
  /**
   * 新证书ID
   */
  CertId?: string
  /**
   * 原证书ID
   */
  OldCertId?: string
  /**
   * 部署资源类型列表
   */
  ResourceTypes?: Array<string>
  /**
   * 部署地域列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Regions?: Array<string>
  /**
   * 部署状态
   */
  Status?: number
  /**
   * 部署时间
   */
  CreateTime?: string
  /**
   * 最后一次更新时间
   */
  UpdateTime?: string
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
   * 证书域名验证记录Key
注意：此字段可能返回 null，表示取不到有效值。
   */
  DvAuthKey?: string
  /**
   * 证书域名验证记录值
注意：此字段可能返回 null，表示取不到有效值。
   */
  DvAuthValue?: string
  /**
   * 证书域名验证域名值
注意：此字段可能返回 null，表示取不到有效值。
   */
  DvAuthDomain?: string
  /**
   * 证书域名验证文件路径， 仅FILE、FILE_PROXY使用
注意：此字段可能返回 null，表示取不到有效值。
   */
  DvAuthPath?: string
  /**
   * 证书域名验证子域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  DvAuthSubDomain?: string
  /**
   * 证书域名验证类型，取值：
TXT：DNS域名验证添加TXT记录
FILE：域名文件验证
CNAME：DNS域名验证添加CNAME记录
注意：此字段可能返回 null，表示取不到有效值。
   */
  DvAuthVerifyType?: string
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
   * 管理人ID,可以从describeManagers接口获得
   */
  ManagerId: number
  /**
   * 分页每页数量
   * @deprecated
   */
  Limit?: number
  /**
   * 分页偏移量
   * @deprecated
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
  LocationId?: string
  /**
   * 规则绑定的域名
   */
  Domain?: string
  /**
   * 规则是否匹配待绑定证书的域名
   */
  IsMatch?: boolean
  /**
   * 规则已绑定的证书数据
   */
  Certificate?: Certificate
  /**
   * 不匹配域名列表
   */
  NoMatchDomains?: Array<string>
  /**
   * 规则绑定的路径
   */
  Url?: string
}

/**
 * Lighthouse实例
 */
export interface LighthouseInstanceDetail {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * IP地址
   */
  IP?: Array<string>
  /**
   * 可选择域名
   */
  Domain?: Array<string>
}

/**
 * SubmitCertificateInformation请求参数结构体
 */
export interface SubmitCertificateInformationRequest {
  /**
   * 待提交资料的付费证书 ID。
   */
  CertificateId: string
  /**
   * 此字段必传。 CSR 生成方式， 取值为：
online：腾讯云提交的填写的参数信息生成CSR和私钥， 并由腾讯云加密存储
parse：自行生成CSR和私钥， 并通过上传CSR申请证书
   */
  CsrType?: string
  /**
   * 上传的 CSR 内容。
若CstType为parse， 则此字段必传。
   */
  CsrContent?: string
  /**
   * 证书绑定的通用名称， 若是上传的CSR，则该域名需与CSR解析的通用名称一致
   */
  CertificateDomain?: string
  /**
   * 证书绑定的其他域名， 单域名、泛域名证书无需提供。 多域名、多泛域名必填
   */
  DomainList?: Array<string>
  /**
   * 私钥密码， 目前仅使用在生成jks、pfx格式证书时密码； 其他格式私钥证书未加密
   */
  KeyPassword?: string
  /**
   * 字段必传， 公司名称。
   */
  OrganizationName?: string
  /**
   * 字段必传， 部门名称。
   */
  OrganizationDivision?: string
  /**
   * 字段必传， 公司详细地址。
   */
  OrganizationAddress?: string
  /**
   * 字段必传， 国家名称，传CN即可
   */
  OrganizationCountry?: string
  /**
   * 字段必传， 公司所在城市。
   */
  OrganizationCity?: string
  /**
   * 字段必传， 公司所在省份。
   */
  OrganizationRegion?: string
  /**
   * 公司邮编。
   */
  PostalCode?: string
  /**
   * 字段必传， 公司座机区号。
   */
  PhoneAreaCode?: string
  /**
   * 字段必传， 公司座机号码。
   */
  PhoneNumber?: string
  /**
   * 证书验证方式。验证类型：DNS_AUTO = 自动DNS验证（仅支持在腾讯云解析且解析状态正常的域名使用该验证类型），DNS = 手动DNS验证，FILE = 文件验证。
   */
  VerifyType?: string
  /**
   * 字段必传，管理人名。
   */
  AdminFirstName?: string
  /**
   * 字段必传，管理人姓。
   */
  AdminLastName?: string
  /**
   * 字段必传，管理人手机号码。
   */
  AdminPhoneNum?: string
  /**
   * 字段必传，管理人邮箱地址。
   */
  AdminEmail?: string
  /**
   * 字段必传，管理人职位。
   */
  AdminPosition?: string
  /**
   * 字段必传，联系人名。
   */
  ContactFirstName?: string
  /**
   * 字段必传，联系人姓。
   */
  ContactLastName?: string
  /**
   * 字段必传，联系人邮箱地址。
   */
  ContactEmail?: string
  /**
   * 字段必传，联系人手机号码。
   */
  ContactNumber?: string
  /**
   * 字段必传，联系人职位。
   */
  ContactPosition?: string
  /**
   * 是否DV证书。默认false
   */
  IsDV?: boolean
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
   * 请求日志数量，默认为20, 最大值为1000，如超过1000按照1000处理。
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
  PackageId?: string
  /**
   * 权益包内权益点总量。
   */
  Total?: number
  /**
   * 权益包内权益点余量。
   */
  Balance?: number
  /**
   * 权益包名称。
   */
  Type?: string
  /**
   * 权益点是转入时，来源信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceUin?: number
  /**
   * 权益点状态。
   */
  Status?: string
  /**
   * 过期时间。
   */
  ExpireTime?: string
  /**
   * 更新时间。
   */
  UpdateTime?: string
  /**
   * 生成时间。
   */
  CreateTime?: string
  /**
   * 来源类型。
   */
  SourceType?: string
  /**
   * 转移信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TransferOutInfos?: Array<PackageTransferOutInfo>
}

/**
 * DescribeHostLiveInstanceList请求参数结构体
 */
export interface DescribeHostLiveInstanceListRequest {
  /**
   * 待部署的证书ID
   */
  CertificateId?: string
  /**
   * 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时
   */
  IsCache?: number
  /**
   * 过滤参数列表； FilterKey：domainMatch（查询域名是否匹配的实例列表） FilterValue：1，表示查询匹配； 0，表示查询不匹配； 默认查询匹配
   */
  Filters?: Array<Filter>
  /**
   * 部署资源类型
   * @deprecated
   */
  ResourceType?: string
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
   * DDOS实例列表,取不到值返回空数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceList?: Array<DdosInstanceDetail>
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
 * 更新记录详情
 */
export interface UpdateRecordDetails {
  /**
   * 新旧证书更新云资源的云资源类型：
- clb
- cdn
- ddos
- live
- vod
- waf
- apigateway
- teo
- tke
- cos
- tse
- tcb
   */
  ResourceType?: string
  /**
   * 该云资源更新详情
   */
  List?: Array<UpdateRecordDetail>
  /**
   * 该云资源更新资源总数
   */
  TotalCount?: number
}

/**
 * DeployCertificateRecordRetry请求参数结构体
 */
export interface DeployCertificateRecordRetryRequest {
  /**
   * 待重试部署记录ID，通过DeployCertificateInstance获得
   */
  DeployRecordId?: number
  /**
   * 待重试部署记录详情ID，通过DescribeHostDeployRecordDetail获得
   */
  DeployRecordDetailId?: number
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
   * 证书来源：
trustasia：亚洲诚信，
upload：用户上传。
wosign：沃通
sheca：上海CA
注意：此字段可能返回 null，表示取不到有效值。
   */
  From?: string
  /**
   * 证书类型：CA = 客户端证书，SVR = 服务器证书。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertificateType?: string
  /**
   * 证书套餐类型：
null：用户上传证书（没有套餐类型），
2：TrustAsia TLS RSA CA， 
3：SecureSite 增强型企业版（EV Pro）， 
4：SecureSite 增强型（EV）， 
5：SecureSite 企业型专业版（OV Pro），
6：SecureSite 企业型（OV）， 
7：SecureSite 企业型（OV）通配符， 
8：Geotrust 增强型（EV）， 
9：Geotrust 企业型（OV）， 
10：Geotrust 企业型（OV）通配符， 
11：TrustAsia 域名型多域名 SSL 证书， 
12：TrustAsia 域名型（DV）通配符， 
13：TrustAsia 企业型通配符（OV）SSL 证书（D3）， 
14：TrustAsia 企业型（OV）SSL 证书（D3）， 
15：TrustAsia 企业型多域名 （OV）SSL 证书（D3）， 
16：TrustAsia 增强型 （EV）SSL 证书（D3）， 
17：TrustAsia 增强型多域名（EV）SSL 证书（D3）， 
18：GlobalSign 企业型（OV）SSL 证书， 
19：GlobalSign 企业型通配符 （OV）SSL 证书， 
20：GlobalSign 增强型 （EV）SSL 证书， 
21：TrustAsia 企业型通配符多域名（OV）SSL 证书（D3）， 
22：GlobalSign 企业型多域名（OV）SSL 证书， 
23：GlobalSign 企业型通配符多域名（OV）SSL 证书，
24：GlobalSign 增强型多域名（EV）SSL 证书，
25：Wotrus 域名型证书，
26：Wotrus 域名型多域名证书，
27：Wotrus 域名型通配符证书，
28：Wotrus 企业型证书，
29：Wotrus 企业型多域名证书，
30：Wotrus 企业型通配符证书，
31：Wotrus 增强型证书，
32：Wotrus 增强型多域名证书，
33：WoTrus-国密域名型证书，
34：WoTrus-国密域名型证书（多域名），
35：WoTrus-国密域名型证书（通配符），
37：WoTrus-国密企业型证书，
38：WoTrus-国密企业型证书（多域名），
39：WoTrus-国密企业型证书（通配符），
40：WoTrus-国密增强型证书，
41：WoTrus-国密增强型证书（多域名），
42：TrustAsia-域名型证书（通配符多域名），
43：DNSPod-企业型(OV)SSL证书
44：DNSPod-企业型(OV)通配符SSL证书
45：DNSPod-企业型(OV)多域名SSL证书
46：DNSPod-增强型(EV)SSL证书
47：DNSPod-增强型(EV)多域名SSL证书
48：DNSPod-域名型(DV)SSL证书
49：DNSPod-域名型(DV)通配符SSL证书
50：DNSPod-域名型(DV)多域名SSL证书
51：DNSPod（国密）-企业型(OV)SSL证书
52：DNSPod（国密）-企业型(OV)通配符SSL证书
53：DNSPod（国密）-企业型(OV)多域名SSL证书
54：DNSPod（国密）-域名型(DV)SSL证书
55：DNSPod（国密）-域名型(DV)通配符SSL证书
56：DNSPod（国密）-域名型(DV)多域名SSL证书
57：SecureSite 企业型专业版多域名(OV Pro)
58：SecureSite 企业型多域名(OV)
59：SecureSite 增强型专业版多域名(EV Pro)
60：SecureSite 增强型多域名(EV)
61：Geotrust 增强型多域名(EV)
75：SecureSite 企业型(OV)
76：SecureSite 企业型(OV)通配符
77：SecureSite 增强型(EV)
78：Geotrust 企业型(OV)
79：Geotrust 企业型(OV)通配符
80：Geotrust 增强型(EV)
81：GlobalSign 企业型（OV）SSL证书
82：GlobalSign 企业型通配符 （OV）SSL证书
83：TrustAsia C1 DV Free
85：GlobalSign 增强型 （EV）SSL证书
88：GlobalSign 企业型通配符多域名 （OV）SSL证书
89：GlobalSign 企业型多域名 （OV）SSL证书
90：GlobalSign 增强型多域名（EV） SSL证书
91：Geotrust 增强型多域名(EV)
92：SecureSite 企业型专业版多域名(OV Pro)
93：SecureSite 企业型多域名(OV)
94：SecureSite 增强型专业版多域名(EV Pro)
95：SecureSite 增强型多域名(EV)
96：SecureSite 增强型专业版(EV Pro)
97：SecureSite 企业型专业版(OV Pro)
98：CFCA 企业型(OV)SSL证书
99：CFCA 企业型多域名(OV)SSL证书
100：CFCA 企业型通配符(OV)SSL证书
101：CFCA 增强型(EV)SSL证书
注意：此字段可能返回 null，表示取不到有效值。
   */
  PackageType?: string
  /**
   * 证书产品名称
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
   * 证书状态：0 = 审核中，1 = 已通过，2 = 审核失败，3 = 已过期，4 = 自动添加DNS记录，5 = 企业证书，待提交资料，6 = 订单取消中，7 = 已取消，8 = 已提交资料， 待上传确认函，9 = 证书吊销中，10 = 已吊销，11 = 重颁发中，12 = 待上传吊销确认函，13 = 免费证书待提交资料。14 = 证书已退款。 15 = 证书迁移中
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 状态信息。 取值范围：
//通用状态信息
1、PRE-REVIEWING：预审核中
2、LEGAL-REVIEWING：法务审核中
3、CA-REVIEWING：CA审核中
4、PENDING-DCV：域名验证中
5、WAIT-ISSUE：等待签发（域名验证已通过）
//证书审核失败状态信息
1、订单审核失败
2、CA审核失败，域名未通过安全审查
3、域名验证超时，订单自动关闭，请您重新进行证书申请
4、证书资料未通过证书CA机构审核，审核人员会致电您证书预留的联系方式，请您留意来电。后续可通过“修改资料”重新提交资料
待持续完善
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatusMsg?: string
  /**
   * 验证类型：DNS_AUTO = 自动DNS验证，DNS = 手动DNS验证，FILE = 文件验证，DNS_PROXY = DNS代理验证。FILE_PROXY = 文件代理验证
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
   * CA证书的所有加密方式。仅证书类型CertificateType为CA有效
注意：此字段可能返回 null，表示取不到有效值。
   */
  CAEncryptAlgorithms?: Array<string>
  /**
   * CA证书的所有通用名称。仅证书类型CertificateType为CA有效
注意：此字段可能返回 null，表示取不到有效值。
   */
  CACommonNames?: Array<string>
  /**
   * CA证书所有的到期时间。仅证书类型CertificateType为CA有效
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
   * 总数，取不到值返回0
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * tke实例列表，取不到值返回空数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceList?: Array<TkeInstanceDetail>
  /**
   * 异步刷新总数，取不到值返回0
注意：此字段可能返回 null，表示取不到有效值。
   */
  AsyncTotalNum?: number
  /**
   * 异步刷新当前执行数，取不到值返回0
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
   * 任务ID，根据CreateCertificateBindResourceSyncTask得到的任务ID查询绑定云资源结果， 最大支持100个
   */
  TaskIds: Array<string>
}

/**
 * 更新记录详情
 */
export interface UpdateRecordDetail {
  /**
   * 更新详情记录id
   */
  Id?: number
  /**
   * 新旧证书更新 - 新证书ID
   */
  CertId?: string
  /**
   * 新旧证书更新 - 旧证书ID
   */
  OldCertId?: string
  /**
   * 部署域名列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Domains?: Array<string>
  /**
   * 新旧证书更新云资源的云资源类型：
- clb
- cdn
- ddos
- live
- vod
- waf
- apigateway
- teo
- tke
- cos
- tse
- tcb
   */
  ResourceType?: string
  /**
   * 部署地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * 部署状态， 取值范围：
0：待部署
1：部署成功
2：部署失败
3：部署中
4：回滚成功
5：回滚失败
6：无资源，无需部署
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
  /**
   * 监听器Url(clb专属)
注意：此字段可能返回 null，表示取不到有效值。
   */
  Url?: string
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
   * 新申请成功的证书 ID。
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
   * 支持的资源类型如下,clb,cdn,ddos,waf,apigateway,teo,tke,cos,lighthouse,vod,tcb,tse,live
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
  Domain?: string
  /**
   * 已绑定的证书ID
   */
  CertId?: string
  /**
   * ENABLED: 域名上线状态
DISABLED:域名下线状态
   */
  Status?: string
  /**
   * 存储桶名称
   */
  Bucket?: string
  /**
   * 存储桶地域
   */
  Region?: string
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
   * 部署记录ID，通过调用UpdateCertificateInstance接口返回的记录ID， 或者通过UpdateCertificateRecordRollback回滚接口返回的记录ID
   */
  DeployRecordId: string
  /**
   * 每页数量，默认10。最大值为200
   */
  Limit?: string
  /**
   * 分页偏移量，从0开始。默认为0
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
  LoadBalancerId?: string
  /**
   * CLB实例名称
   */
  LoadBalancerName?: string
  /**
   * CLB监听器列表
   */
  Listeners?: Array<ClbListener>
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
  Managers?: Array<ManagerInfo>
  /**
   * 公司管理人总数
   */
  TotalCount?: number
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
 * 公司信息
 */
export interface CompanyInfo {
  /**
   * 公司名称
   */
  CompanyName?: string
  /**
   * 公司ID
   */
  CompanyId?: number
  /**
   * 公司所在国家
   */
  CompanyCountry?: string
  /**
   * 公司所在省份
   */
  CompanyProvince?: string
  /**
   * 公司所在城市
   */
  CompanyCity?: string
  /**
   * 公司所在详细地址
   */
  CompanyAddress?: string
  /**
   * 公司电话
   */
  CompanyPhone?: string
  /**
   * 公司证件类型，取值范围：
TYDMZ（统一社会信用代码 ）：仅CFCA类型证书需要使用本字段， 其他类型证书不需要使用本字段
OTHERS（其他）
   */
  IdType?: string
  /**
   * 公司证件号码，取值范围：
TYDMZ（统一社会信用代码 ）：11532xxxxxxxx24820
   */
  IdNumber?: string
  /**
   * 标签
   */
  Tags?: Array<Tags>
}

/**
 * 权益包转出详情
 */
export interface PackageTransferOutInfo {
  /**
   * 权益包ID。
   */
  PackageId?: string
  /**
   * 转移码。
   */
  TransferCode?: string
  /**
   * 本次转移点数。
   */
  TransferCount?: number
  /**
   * 转入的PackageID。
   */
  ReceivePackageId?: string
  /**
   * 本次转移过期时间。
   */
  ExpireTime?: string
  /**
   * 本次转移生成时间。
   */
  CreateTime?: string
  /**
   * 本次转移更新时间。
   */
  UpdateTime?: string
  /**
   * 转移状态。
   */
  TransferStatus?: string
  /**
   * 接收者uin。
   */
  ReceiverUin?: number
  /**
   * 接收时间。
   */
  ReceiveTime?: string
}

/**
 * DeleteCertificates返回参数结构体
 */
export interface DeleteCertificatesResponse {
  /**
   * 成功的ID
   */
  Success?: Array<string>
  /**
   * 失败的ID和原因
   */
  Fail?: Array<BatchDeleteFail>
  /**
   * 证书ID和异步任务的ID
   */
  CertTaskIds?: Array<CertTaskId>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 云资源类型，支持clb、waf、apigateway、cos、tke、tse、tcb
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
  TotalCount?: number
  /**
   * 证书部署记录列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeployRecordList?: Array<UpdateRecordInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CertificateOrderSubmit请求参数结构体
 */
export interface CertificateOrderSubmitRequest {
  /**
   * 待提交资料的付费证书 ID。
   */
  CertId: string
  /**
   * 是否删除自动DNS验证值：0，不删除； 1，删除； 默认不删除
   */
  DeleteDnsAutoRecord?: number
  /**
   * 证书域名验证方式：
DNS_AUTO： 自动添加域名DNS验证， 需用户域名解析托管在『[云解析DNS](https://console.cloud.tencent.com/cns)』，且与申请证书归属同一个腾讯云账号
DNS：手动添加域名DNS验证，需用户手动去域名解析服务商添加验证值
FILE：手动添加域名文件验证。 需要用户手动在域名站点根目录添加指定路径文件进行文件验证， http&https任一通过即可；且域名站点需海外CA机构能访问， 具体访问白名单见控制台页面
   */
  VerifyType?: string
}

/**
 * UpdateCertificateRecordRollback返回参数结构体
 */
export interface UpdateCertificateRecordRollbackResponse {
  /**
   * 新生成的回滚部署任务的记录ID
   */
  DeployRecordId?: number
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
   * 待部署的证书ID,必填选项
   */
  CertificateId?: string
  /**
   * 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时
   */
  IsCache?: number
  /**
   * 过滤参数列表； FilterKey：domainMatch（查询域名是否匹配的实例列表） FilterValue：1，表示查询匹配； 0，表示查询不匹配； 默认查询匹配
   */
  Filters?: Array<Filter>
  /**
   * 部署资源类型 vod
   * @deprecated
   */
  ResourceType?: string
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
   * 关联的COS资源详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  COS?: Array<COSInstanceList>
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
   * 证书域名验证记录Key
注意：此字段可能返回 null，表示取不到有效值。
   */
  DvAuthKey?: string
  /**
   * 证书域名验证记录值
注意：此字段可能返回 null，表示取不到有效值。
   */
  DvAuthValue?: string
  /**
   * 证书域名验证域名值
注意：此字段可能返回 null，表示取不到有效值。
   */
  DvAuthDomain?: string
  /**
   * 证书域名验证文件路径， 仅FILE、FILE_PROXY使用
注意：此字段可能返回 null，表示取不到有效值。
   */
  DvAuthPath?: string
  /**
   * 证书域名验证子域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  DvAuthKeySubDomain?: string
  /**
   * 证书域名验证信息， 存在多个域名验证使用本字段
注意：此字段可能返回 null，表示取不到有效值。
   */
  DvAuths?: Array<DvAuths>
}

/**
 * CheckCertificateDomainVerification请求参数结构体
 */
export interface CheckCertificateDomainVerificationRequest {
  /**
   * 证书ID。
   */
  CertificateId: string
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
   */
  InstanceList?: Array<CdnInstanceDetail>
  /**
   * 是否查询异常
   */
  Error?: string
}

/**
 * UpdateCertificateRecordRetry请求参数结构体
 */
export interface UpdateCertificateRecordRetryRequest {
  /**
   * 待重试部署记录ID,通过UpdateCertificateInstance得到部署记录ID。 本参数不传的话，则DeployRecordDetailId必传
   */
  DeployRecordId?: number
  /**
   * 待重试部署记录详情ID,通过DescribeHostUpdateRecordDetail接口获得， 本参数不传的话， 则DeployRecordId必传
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
  Domain?: string
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 协议类型
   */
  Protocol?: string
  /**
   * 证书ID
   */
  CertId?: string
  /**
   * 转发端口
   */
  VirtualPort?: string
}

/**
 * DescribeHostWafInstanceList返回参数结构体
 */
export interface DescribeHostWafInstanceListResponse {
  /**
   * WAF实例列表，如果没有取到值返回空数组
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
 * 证书基本信息
 */
export interface CertBasicInfo {
  /**
   * 颁发者
   */
  Issuer?: string
  /**
   * 颁发给
   */
  Subject?: string
  /**
   * 证书指纹
   */
  Fingerprint?: string
  /**
   * 证书有效期开始时间
   */
  ValidFrom?: string
  /**
   * 证书有效期结束时间
   */
  ValidTo?: string
}

/**
 * CreateCertificate请求参数结构体
 */
export interface CreateCertificateRequest {
  /**
   * 证书商品ID，3 = SecureSite 增强型企业版（EV Pro）， 4 = SecureSite 增强型（EV）， 5 = SecureSite 企业型专业版（OV Pro）， 6 = SecureSite 企业型（OV）， 7 = SecureSite 企业型（OV）通配符， 8 = Geotrust 增强型（EV）， 9 = Geotrust 企业型（OV）， 10 = Geotrust 企业型（OV）通配符， 11 = TrustAsia 域名型多域名 SSL 证书， 12 = TrustAsia 域名型（DV）通配符， 13 = TrustAsia 企业型通配符（OV）SSL 证书（D3）， 14 = TrustAsia 企业型（OV）SSL 证书（D3）， 15 = TrustAsia 企业型多域名 （OV）SSL 证书（D3）， 16 = TrustAsia 增强型 （EV）SSL 证书（D3）， 17 = TrustAsia 增强型多域名（EV）SSL 证书（D3）， 18 = GlobalSign 企业型（OV）SSL 证书， 19 = GlobalSign 企业型通配符 （OV）SSL 证书， 20 = GlobalSign 增强型 （EV）SSL 证书， 21 = TrustAsia 企业型通配符多域名（OV）SSL 证书（D3）， 22 = GlobalSign 企业型多域名（OV）SSL 证书， 23 = GlobalSign 企业型通配符多域名（OV）SSL 证书， 24 = GlobalSign 增强型多域名（EV）SSL 证书，25 = Wotrus 域名型证书，26 = Wotrus 域名型多域名证书，27 = Wotrus 域名型通配符证书，28 = Wotrus 企业型证书，29 = Wotrus 企业型多域名证书，30 = Wotrus 企业型通配符证书，31 = Wotrus 增强型证书，32 = Wotrus 增强型多域名证书，33 = Wotrus 国密域名型证书，34 = Wotrus 国密域名型多域名证书，35 = Wotrus 国密域名型通配符证书，37 = Wotrus 国密企业型证书，38 = Wotrus 国密企业型多域名证书，39 = Wotrus 国密企业型通配符证书，40 = Wotrus 国密增强型证书，41 = Wotrus 国密增强型多域名证书，42 = TrustAsia 域名型通配符多域名证书，43 = DNSPod-企业型(OV)SSL证书，44 = DNSPod-企业型(OV)通配符SSL证书，45 = DNSPod-企业型(OV)多域名SSL证书， 46 = DNSPod-增强型(EV)SSL证书，47 = DNSPod-增强型(EV)多域名SSL证书，48 = DNSPod-域名型(DV)SSL证书，49 = DNSPod-域名型(DV)通配符SSL证书，50 = DNSPod-域名型(DV)多域名SSL证书，51 = DNSPod（国密）-企业型(OV)SSL证书，52 = DNSPod（国密）-企业型(OV)通配符SSL证书，53 = DNSPod（国密）-企业型(OV)多域名SSL证书，54 = DNSPod（国密）-域名型(DV)SSL证书，55 = DNSPod（国密）-域名型(DV)通配符SSL证书， 56 = DNSPod（国密）-域名型(DV)多域名SSL证书，57 = SecureSite 企业型专业版多域名(OV Pro)，58 = SecureSite 企业型多域名(OV)，59 = SecureSite 增强型专业版多域名(EV Pro)，60 = SecureSite 增强型多域名(EV)，61 = Geotrust 增强型多域名(EV)
   */
  ProductId: number
  /**
   * 证书包含的域名数量
   */
  DomainNum: number
  /**
   * 证书年限
   */
  TimeSpan: number
  /**
   * 是否自动使用代金券：1是，0否；默认为1
   */
  AutoVoucher?: number
  /**
   * 标签， 生成证书打标签
   */
  Tags?: Array<Tags>
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
  ManagerId?: number
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
   * 部署任务创建状态；1表示创建成功； 0表示当前存在部署中的任务，未创建新的部署任务；返回值DeployRecordId为部署中的任务ID
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
  Domain?: string
  /**
   * 已绑定的证书ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertId?: string
  /**
   * -1：域名未关联证书。
1： 域名https已开启。
0： 域名https已关闭。
   */
  Status?: number
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
   * 分页偏移量，从0开始。 默认为0
   */
  Offset?: number
  /**
   * 每页数量，默认10。最大值1000，如超过1000按1000处理
   */
  Limit?: number
  /**
   * 搜索关键词，模糊匹配证书 ID、备注名称、证书域名
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
   * 默认按照证书申请时间降序； 若传排序则按到期时间排序：DESC = 证书到期时间降序， ASC = 证书到期时间升序。
   */
  ExpirationSort?: string
  /**
   * 证书状态：0 = 审核中，1 = 已通过，2 = 审核失败，3 = 已过期，4 = 已添加DNS记录，5 = 企业证书，待提交，6 = 订单取消中，7 = 已取消，8 = 已提交资料， 待上传确认函，9 = 证书吊销中，10 = 已吊销，11 = 重颁发中，12 = 待上传吊销确认函，13 = 免费证书待提交资料。14 = 已退款。 15 = 证书迁移中
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
   * 是否筛选等待签发的证书，传1是筛选，0和null不筛选
   */
  IsPendingIssue?: number
  /**
   * 筛选指定证书ID的证书，只支持有权限的证书ID
   */
  CertIds?: Array<string>
}

/**
 * UpdateCertificateRecordRollback请求参数结构体
 */
export interface UpdateCertificateRecordRollbackRequest {
  /**
   * 更新证书待回滚的记录ID, 通过UpdateCertificateInstance获得
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
   */
  InstanceList?: Array<ApiGatewayInstanceDetail>
  /**
   * 该地域下apigateway实例总数
   */
  TotalCount?: number
  /**
   * 是否查询异常
   */
  Error?: string
}

/**
 * teo实例详情
 */
export interface TeoInstanceDetail {
  /**
   * 域名
   */
  Host?: string
  /**
   * 证书ID
   */
  CertId?: string
  /**
   * 区域ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ZoneId?: string
  /**
   * 域名状态
deployed：已部署；
processing：部署中；
applying：申请中；
failed：申请失败；
issued：绑定失败。
   */
  Status?: string
}

/**
 * DescribeHostClbInstanceList返回参数结构体
 */
export interface DescribeHostClbInstanceListResponse {
  /**
   * 总数，取不到值返回0
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * CLB实例监听器列表，取不到值返回空数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceList?: Array<ClbInstanceDetail>
  /**
   * 异步刷新总数，取不到值返回0
注意：此字段可能返回 null，表示取不到有效值。
   */
  AsyncTotalNum?: number
  /**
   * 异步刷新当前执行数，取不到值返回0
注意：此字段可能返回 null，表示取不到有效值。
   */
  AsyncOffset?: number
  /**
   * 当前缓存读取时间，去不到值返回空
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
  TotalPeriod?: number
  /**
   * 证书当前年限
注意：此字段可能返回 null，表示取不到有效值。
   */
  NowPeriod?: number
  /**
   * 证书预审核管理人ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ManagerId?: string
}

/**
 * DescribeManagerDetail返回参数结构体
 */
export interface DescribeManagerDetailResponse {
  /**
   * 状态: audit: 审核中 ok: 审核通过 invalid: 失效 expiring: 即将过期 expired: 已过期
   * @deprecated
   */
  Status?: string
  /**
   * 管理人姓名
   */
  ManagerFirstName?: string
  /**
   * 管理人邮箱
   */
  ManagerMail?: string
  /**
   * 联系人姓名
   */
  ContactFirstName?: string
  /**
   * 管理人姓名
   */
  ManagerLastName?: string
  /**
   * 联系人职位
   */
  ContactPosition?: string
  /**
   * 管理人职位
   */
  ManagerPosition?: string
  /**
   * 核验通过时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  VerifyTime?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 核验过期时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireTime?: string
  /**
   * 联系人姓名
   */
  ContactLastName?: string
  /**
   * 管理人电话
   */
  ManagerPhone?: string
  /**
   * 联系人电话
   */
  ContactPhone?: string
  /**
   * 联系人邮箱
   */
  ContactMail?: string
  /**
   * 管理人所属部门
   */
  ManagerDepartment?: string
  /**
   * 管理人所属公司信息
   */
  CompanyInfo?: CompanyInfo
  /**
   * 管理人公司ID
   */
  CompanyId?: number
  /**
   * 管理人ID
   */
  ManagerId?: number
  /**
   * 审核状态详细信息
   */
  StatusInfo?: Array<ManagerStatusInfo>
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
   * 相同的证书是否允许重复上传； true：允许上传相同指纹的证书；  false：不允许上传相同指纹的证书； 默认值：true
   */
  Repeatable?: boolean
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
   */
  CertCaId?: string
  /**
   * 证书认证模式：UNIDIRECTIONAL单向认证，MUTUAL双向认证
   */
  SSLMode?: string
}

/**
 * CreateCertificateByPackage请求参数结构体
 */
export interface CreateCertificateByPackageRequest {
  /**
   * 证书产品PID，以下是对每个PID及其对应的证书文字说明：
1. 1022451 - CFCA-增强型(EV)SSL证书
2. 1022449 - CFCA-企业型(OV) SSL证书(通配符)
3. 1022447 - CFCA-企业型(OV)SSL证书
4. 1014028 - DNSPod亚信国密-企业型(OV)通配符证书
5. 1014030 - DNSPod亚信国密-企业型(OV)多域名证书
6. 1014026 - DNSPod亚信国密-企业型(OV)证书
7. 1014022 - DNSPod亚信国密-域名型(DV)通配符证书
8. 1014024 - DNSPod亚信国密-域名型(DV)多域名证书
9. 1014020 - DNSPod亚信国密-域名型(DV)证书
10. 1013949 - DNSPod SSL 域名型SSL证书(C1)
11. 1013953 - DNSPod SSL域名型多域名SSL证书(C1)
12. 1013951 - DNSPod-SSL域名型DV（泛域名）
13. 1013955 - DNSPod 企业型SSL证书(C1)
14. 1013959 - DNSPod 企业型多域名SSL证书(C1)
15. 1013957 - DNSPod 企业型通配符SSL证书(C1)
16. 1013961 - DNSPod 增强型 SSL 证书(C1)
17. 1013963 - DNSPod 增强型多域名SSL证书(C1)
18. 1005919 - TrustAsia-域名型DV（通配符多域名）
19. 1013882 - SecureSite-增强型专业版EVPro（多域名）
20. 1018559 - SecureSite-增强型专业版EVPro（单域名）
21. 1013910 - GlobalSign-增强型EV（多域名）
22. 1013904 - GlobalSign-增强型EV（单域名）
23. 1013898 - TrustAsia-增强型EV（多域名）
24. 1013888 - TrustAsia-增强型EV（单域名）
25. 1013886 - GeoTrust-增强型EV（多域名）
26. 1018529 - GeoTrust-增强型EV（单域名）
27. 1013880 - SecureSite-增强型EV（多域名）
28. 1018557 - SecureSite-增强型EV（单域名）
29. 1018586 - TrustAsia-域名型DV（泛域名）
30. 1018584 - TrustAsia-域名型DV（多域名）
31. 1013878 - SecureSite-企业型专业版OV Pro（多域名）
32. 1018582 - SecureSite-企业型专业版OV Pro（单域名）
33. 1013908 - GlobalSign-企业型OV（通配符多域名）
34. 1013902 - GlobalSign-企业型OV（泛域名）
35. 1013906 - GlobalSign-企业型OV（多域名）
36. 1013900 - GlobalSign-企业型OV（单域名）
37. 1013896 - TrustAsia-企业型OV（通配符多域名）
38. 1013892 - TrustAsia-企业型OV（泛域名）
39. 1013894 - TrustAsia-企业型OV（多域名）
40. 1013890 - TrustAsia-企业型OV（单域名）
41. 1004360 - GeoTrust-企业型OV（泛域名）
42. 1013884 - GeoTrust-企业型OV（单域名）
43. 1013874 - SecureSite-企业型OV（泛域名）
44. 1013876 - SecureSite-企业型OV（多域名）
45. 1018580 - SecureSite-企业型OV（单域名）
46. 1004460 - DNSPod-国密增强型证书（多域名）
47. 1004458 - DNSPod-国密增强型证书
48. 1004370 - DNSPod-国密企业型证书（通配符）
49. 1004368 - DNSPod-国密企业型证书（多域名）
50. 1004366 - DNSPod-国密企业型证书
51. 1004362 - DNSPod-国密域名型证书（通配符）
52. 1004364 - DNSPod-国密域名型证书（多域名）
53. 1004358 - DNSPod-国密域名型证书
54. 1004456 - WoTrus-增强型证书（多域名）
55. 1004454 - WoTrus-增强型证书
56. 1004168 - WoTrus-企业型证书（通配符）
57. 1004166 - WoTrus-企业型证书（多域名）
58. 1004164 - WoTrus-企业型证书
59. 1004159 - WoTrus-域名型证书（通配符）
60. 1004161 - WoTrus-域名型证书（多域名）
61. 1004157 - WoTrus-域名型证书
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
   * 续费证书CSR的算法类型：RSA,ECC,SM2
   */
  RenewAlgorithmType?: string
  /**
   * 续费证书CSR的算法参数:2048,4096,prime256v1
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
  /**
   * 询价参数，以下是对每个询价参数及其对应的证书文字说明：
1. sv_ssl_cost_cfca_ca_ev - CFCA-增强型(EV)SSL证书
2. sv_ssl_cost_cfca_ca_ovwildcard - CFCA-企业型(OV) SSL证书(通配符)
3. sv_ssl_cost_cfca_ca_ov - CFCA-企业型(OV)SSL证书
4. sv_ssl_cost_dnspod_ca_sm2_ovwildcard - DNSPod亚信国密-企业型(OV)通配符证书
5. sv_ssl_cost_dnspod_ca_sm2_ovmultidomain - DNSPod亚信国密-企业型(OV)多域名证书
6. sv_ssl_cost_dnspod_ca_sm2_ov - DNSPod亚信国密-企业型(OV)证书
7. sv_ssl_cost_dnspod_ca_sm2_dvwildcard - DNSPod亚信国密-域名型(DV)通配符证书
8. sv_ssl_cost_dnspod_ca_sm2_dvmultidomain - DNSPod亚信国密-域名型(DV)多域名证书
9. sv_ssl_cost_dnspod_ca_sm2_dv - DNSPod亚信国密-域名型(DV)证书
10. sv_ssl_cost_dnspod_ca_dv - DNSPod SSL 域名型SSL证书(C1)
11. sv_ssl_cost_dnspod_ca_dvmultidomain - DNSPod SSL域名型多域名SSL证书(C1)
12. sv_ssl_cost_dnspod_ca_dvwildcard - DNSPod-SSL域名型DV（泛域名）
13. sv_ssl_cost_dnspod_ca_ov - DNSPod 企业型SSL证书(C1)
14. sv_ssl_cost_dnspod_ca_ovmultidomain - DNSPod 企业型多域名SSL证书(C1)
15. sv_ssl_cost_dnspod_ca_ovwildcard - DNSPod 企业型通配符SSL证书(C1)
16. sv_ssl_cost_dnspod_ca_ev - DNSPod 增强型 SSL 证书(C1)
17. sv_ssl_cost_dnspod_ca_evmultidomain - DNSPod 增强型多域名SSL证书(C1)
18. sv_ssl_cost_trustasia_dvwildcardmulti - TrustAsia-域名型DV（通配符多域名）
19. sv_ssl_cost_securesiteevpromul_sh - SecureSite-增强型专业版EVPro（多域名）
20. sv_ssl_cost_symantec_evpro - SecureSite-增强型专业版EVPro（单域名）
21. sv_ssl_cost_globalsign_ev_mul_sh - GlobalSign-增强型EV（多域名）
22. sv_ssl_cost_globalsign_ev - GlobalSign-增强型EV（单域名）
23. sv_ssl_cost_trustasia_evmultidomain - TrustAsia-增强型EV（多域名）
24. sv_ssl_cost_trustasia_ev - TrustAsia-增强型EV（单域名）
25. sv_ssl_cost_geotrust_evmultidomain - GeoTrust-增强型EV（多域名）
26. sv_ssl_cost_geotrust_ev - GeoTrust-增强型EV（单域名）
27. sv_ssl_cost_symantec_evmultidomain - SecureSite-增强型EV（多域名）
28. sv_ssl_cost_symantec_ev - SecureSite-增强型EV（单域名）
29. sv_ssl_cost_trustasia_dvwildcard - TrustAsia-域名型DV（泛域名）
30. sv_ssl_cost_trustasia_dvmultidomain - TrustAsia-域名型DV（多域名）
31. sv_ssl_cost_symantec_ovpromultidomain - SecureSite-企业型专业版OV Pro（多域名）
32. sv_ssl_cost_symantec_ovpro - SecureSite-企业型专业版OV Pro（单域名）
33. sv_ssl_cost_globalsign_ovwildcardmulti - GlobalSign-企业型OV（通配符多域名）
34. sv_ssl_cost_globalsign_ovwildcard - GlobalSign-企业型OV（泛域名）
35. sv_ssl_cost_globalsign_ovmultidomain - GlobalSign-企业型OV（多域名）
36. sv_ssl_cost_globalsign_ov - GlobalSign-企业型OV（单域名）
37. sv_ssl_cost_trustasia_ovwildcardmulti - TrustAsia-企业型OV（通配符多域名）
38. sv_ssl_cost_trustasia_ovwildcard - TrustAsia-企业型OV（泛域名）
39. sv_ssl_cost_trustasia_ovmultidomain - TrustAsia-企业型OV（多域名）
40. sv_ssl_cost_trustasia_ov - TrustAsia-企业型OV（单域名）
41. sv_ssl_cost_geotrust_ovwildcard - GeoTrust-企业型OV（泛域名）
42. sv_ssl_cost_geotrust_ov - GeoTrust-企业型OV（单域名）
43. sv_ssl_cost_symantec_ovwildcard - SecureSite-企业型OV（泛域名）
44. sv_ssl_cost_symantec_ovmultidomain - SecureSite-企业型OV（多域名）
45. sv_ssl_cost_symantec_ov - SecureSite-企业型OV（单域名）
46. sv_ssl_cost_dnspod_evmultidomain - DNSPod-国密增强型证书（多域名）
47. sv_ssl_cost_dnspod_ev - DNSPod-国密增强型证书
48. sv_ssl_cost_dnspod_ovwildcard - DNSPod-国密企业型证书（通配符）
49. sv_ssl_cost_dnspod_ovmultidomain - DNSPod-国密企业型证书（多域名）
50. sv_ssl_cost_dnspod_ov - DNSPod-国密企业型证书
51. sv_ssl_cost_dnspod_dvwildcard - DNSPod-国密域名型证书（通配符）
52. sv_ssl_cost_dnspod_dvmultidomain - DNSPod-国密域名型证书（多域名）
53. sv_ssl_cost_dnspod_dv - DNSPod-国密域名型证书
54. sv_ssl_cost_wotrus_evmultidomain - WoTrus-增强型证书（多域名）
55. sv_ssl_cost_wotrus_ev - WoTrus-增强型证书
56. sv_ssl_cost_wotrus_ovwildcard - WoTrus-企业型证书（通配符）
57. sv_ssl_cost_wotrus_ovmultidomain - WoTrus-企业型证书（多域名）
58. sv_ssl_cost_wotrus_ov - WoTrus-企业型证书
59. sv_ssl_cost_wotrus_dvwildcard - WoTrus-域名型证书（通配符）
60. sv_ssl_cost_wotrus_dvmultidomain - WoTrus-域名型证书（多域名）
61. sv_ssl_cost_wotrus_dv - WoTrus-域名型证书
   */
  PriceKey?: string
}

/**
 * CommitCertificateInformation请求参数结构体
 */
export interface CommitCertificateInformationRequest {
  /**
   * 待提交资料的付费证书 ID。
   */
  CertificateId: string
  /**
   * 证书域名验证方式：
DNS_AUTO： 自动添加域名DNS验证， 需用户域名解析托管在『[云解析DNS](https://console.cloud.tencent.com/cns)』，且与申请证书归属同一个腾讯云账号
DNS：手动添加域名DNS验证，需用户手动去域名解析服务商添加验证值
FILE：手动添加域名文件验证。 需要用户手动在域名站点根目录添加指定路径文件进行文件验证， http&https任一通过即可；且域名站点需海外CA机构能访问， 具体访问白名单为：64.78.193.238，216.168.247.9，216.168.249.9，54.189.196.217
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
   */
  Error?: string
  /**
   * 当前结果缓存时间
   */
  CacheTime?: string
  /**
   * 包含的域名
   */
  Domains?: Array<string>
}

/**
 * DescribeHostDeployRecordDetail请求参数结构体
 */
export interface DescribeHostDeployRecordDetailRequest {
  /**
   * 部署记录ID，通过调用DeployCertificateInstance接口返回的记录ID， 或者通过DeployCertificateRecordRollback回滚接口返回的记录ID
   */
  DeployRecordId: string
  /**
   * 分页偏移量，从0开始。默认为0
   */
  Offset?: number
  /**
   * 每页数量，默认10。最大值为200
   */
  Limit?: number
}

/**
 * UpdateCertificateInstance请求参数结构体
 */
export interface UpdateCertificateInstanceRequest {
  /**
   * 一键更新的旧证书ID。 通过查询该证书ID绑定的云资源，然后使用新证书对这些云资源进行更新
   */
  OldCertificateId: string
  /**
   * 需要部署的资源类型，参数值可选（小写）：clb、cdn、waf、live、ddos、teo、apigateway、vod、tke、tcb、tse、cos
   */
  ResourceTypes: Array<string>
  /**
   * 一键更新的新证书ID。 不传该参数，则公钥证书和私钥证书必传
   */
  CertificateId?: string
  /**
   * 需要部署的地域列表（废弃）
   * @deprecated
   */
  Regions?: Array<string>
  /**
   * 云资源需要部署的地域列表，支持地域的云资源类型必传，取值：clb、tke、apigateway、waf、tcb、tse、cos
   */
  ResourceTypesRegions?: Array<ResourceTypeRegions>
  /**
   * 公钥证书， 若上传公钥证书，那么私钥证书必传。  则CertificateId不用传
   */
  CertificatePublicKey?: string
  /**
   * 私钥证书，若上传私钥证书， 那么公钥证书必传；  则CertificateId不用传
   */
  CertificatePrivateKey?: string
  /**
   * 旧证书是否忽略到期提醒  0:不忽略通知。1:忽略通知，忽略OldCertificateId到期提醒
   */
  ExpiringNotificationSwitch?: number
  /**
   * 相同的证书是否允许重复上传，若选择上传公钥私钥证书， 则可以配置该参数。 若存在相同重复证书，则更新任务会失败
   */
  Repeatable?: boolean
  /**
   * 是否允许下载，若选择上传公私钥证书， 则可以配置该参数
   */
  AllowDownload?: boolean
  /**
   * 标签列表，若选择上传公私钥证书， 则可以配置该参数
   */
  Tags?: Array<Tags>
  /**
   * 项目 ID，若选择上传公私钥证书， 则可以配置该参数
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
   * CSR 内容，手动上传的时候需要。
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
 * 批量删除失败的项
 */
export interface BatchDeleteFail {
  /**
   * 失败的证书ID
   */
  CertId?: string
  /**
   * 失败的原因
   */
  Msg?: string
}

/**
 * tke secret详情
 */
export interface TkeSecretDetail {
  /**
   * secret名称
   */
  Name?: string
  /**
   * 证书ID
   */
  CertId?: string
  /**
   * ingress列表
   */
  IngressList?: Array<TkeIngressDetail>
  /**
   * 和新证书不匹配的域名列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  NoMatchDomains?: Array<string>
}

/**
 * DescribeHostDeployRecord返回参数结构体
 */
export interface DescribeHostDeployRecordResponse {
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 证书部署记录列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeployRecordList?: Array<DeployRecordInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckCertificateDomainVerification返回参数结构体
 */
export interface CheckCertificateDomainVerificationResponse {
  /**
   * 证书域名验证结果列表， 证书若绑定了多个域名， 则返回数组有多份
注意：此字段可能返回 null，表示取不到有效值。
   */
  VerificationResults?: Array<DomainValidationResult>
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
  DownloadCertificateUrl?: string
  /**
   * 下载文件的名称
   */
  DownloadFilename?: string
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
   * 分页偏移量，从0开始。
   */
  Offset?: number
  /**
   * 每页数量，默认10。
   */
  Limit?: number
  /**
   * 待部署的证书ID
   */
  CertificateId?: string
  /**
   * 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时
   */
  IsCache?: number
  /**
   * 过滤参数列表； FilterKey：domainMatch（查询域名是否匹配的实例列表） FilterValue：1，表示查询匹配； 0，表示查询不匹配； 默认查询匹配
   */
  Filters?: Array<Filter>
  /**
   * 是否异步缓存，0表示否，1表示是，默认为0
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
   * 待重试部署记录ID, 就是通过DeployCertificateInstance返回的DeployRecordId
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
  CertificateId?: string
  /**
   * 数量
   */
  Count?: number
  /**
   * 资源标识:clb,cdn,live,waf,antiddos
   */
  Type?: string
  /**
   * 不建议使用。字段返回和Resources相同。本字段后续只返回null
   */
  ResourceIds?: Array<string>
  /**
   * 关联资源ID或关联域名。
   */
  Resources?: Array<string>
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
   * 按状态筛选。状态值包括usable(可用)，used(已用)，expired(已过期)，refund(已退款)

   */
  Status?: string
  /**
   * 按过期时间升序或降序排列，可选值为asc(升序)和desc(降序)
   */
  ExpireTime?: string
  /**
   * 按权益包ID搜索。
   */
  PackageId?: string
  /**
   * 按权益包类型搜索。类型包括：ssl_100(证书批量权益100点)，ssl_500(证书批量权益500点），ssl_2000(证书批量权益2000点）
   */
  Type?: string
  /**
   * 子产品编号
   */
  Pid?: number
}

/**
 * DeleteCertificates请求参数结构体
 */
export interface DeleteCertificatesRequest {
  /**
   * 要删除的证书ID。单次最多100个
   */
  CertificateIds: Array<string>
  /**
   * 删除时是否检查证书关联了云资源。默认不检查。如需要检查关联云资源 (需授权服务角色SSL_QCSLinkedRoleInReplaceLoadCertificate)，完成授权后且该参数传true，删除将变成异步任务，接口会返回异步任务ID。需搭配 DescribeDeleteCertificatesTaskResult接口使用，查询删除任务是否成功。
   */
  IsSync?: boolean
}

/**
 * DescribeHostVodInstanceList返回参数结构体
 */
export interface DescribeHostVodInstanceListResponse {
  /**
   * Vod实例列表，如果取不到值返回空数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceList?: Array<VodInstanceDetail>
  /**
   * 总数,如果取不到值返回0
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
  /**
   * 是否查询异常
注意：此字段可能返回 null，表示取不到有效值。
   */
  Error?: string
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
 * 吊销证书域名验证信息。
 */
export interface RevokeDomainValidateAuths {
  /**
   * DV 认证值路径。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DomainValidateAuthPath?: string
  /**
   * DV 认证 KEY。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DomainValidateAuthKey?: string
  /**
   * DV 认证值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DomainValidateAuthValue?: string
  /**
   * DV 认证域名。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DomainValidateAuthDomain?: string
}

/**
 * DescribeHostUpdateRecordDetail返回参数结构体
 */
export interface DescribeHostUpdateRecordDetailResponse {
  /**
   * 总数,如果取不到返回0
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 证书部署记录列表，如果取不到值返回空数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordDetailList?: Array<UpdateRecordDetails>
  /**
   * 成功总数,如果取不到返回0
注意：此字段可能返回 null，表示取不到有效值。
   */
  SuccessTotalCount?: number
  /**
   * 失败总数,如果取不到返回0
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailedTotalCount?: number
  /**
   * 部署中总数,如果取不到返回0
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
   * 分页偏移量，从0开始。
   */
  Offset?: number
  /**
   * 每页数量，默认10。
   */
  Limit?: number
  /**
   * 待部署的证书ID
   */
  CertificateId?: string
  /**
   * 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时
   */
  IsCache?: number
  /**
   * 过滤参数列表； FilterKey：domainMatch（查询域名是否匹配的实例列表） FilterValue：1，表示查询匹配； 0，表示查询不匹配； 默认查询匹配
   */
  Filters?: Array<Filter>
  /**
   * 是否异步缓存,0表示否,1表示是
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
   * live实例列表,如取不到值返回空数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceList?: Array<LiveInstanceDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckCertificateExist返回参数结构体
 */
export interface CheckCertificateExistResponse {
  /**
   * 重复的证书ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  RepeatCertId?: string
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
  CertificateId?: string
  /**
   * 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时
   */
  IsCache?: number
  /**
   * 过滤参数列表； FilterKey：domainMatch（查询域名是否匹配的实例列表） FilterValue：1，表示查询匹配； 0，表示查询不匹配； 默认查询匹配
   */
  Filters?: Array<Filter>
  /**
   * 部署资源类型apigateway
   * @deprecated
   */
  ResourceType?: string
  /**
   * 已部署的证书ID
   */
  OldCertificateId?: string
  /**
   * 每页数量，默认10，最大值为200。
   */
  Limit?: number
  /**
   * 分页偏移量，默认值为0。
   */
  Offset?: string
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
   */
  InstanceList?: Array<DdosInstanceDetail>
  /**
   * 是否查询异常
   */
  Error?: string
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
 * DescribeDownloadCertificateUrl请求参数结构体
 */
export interface DescribeDownloadCertificateUrlRequest {
  /**
   * 证书ID
   */
  CertificateId: string
  /**
   * 必填选项，下载的服务类型: nginx tomcat apache iis jks other root
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
  DeployRecordId?: number
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
  /**
   * 是否查询异常
注意：此字段可能返回 null，表示取不到有效值。
   */
  Error?: string
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
   * 是否异步，0表示否，1表示是
   */
  AsyncCache?: number
}

/**
 * DescribeHostCdnInstanceList返回参数结构体
 */
export interface DescribeHostCdnInstanceListResponse {
  /**
   * CDN实例列表，如取不到值返回空数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceList?: Array<CdnInstanceDetail>
  /**
   * CDN域名总数，如取不到值返回0
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 异步刷新总数，如取不到值返回0
注意：此字段可能返回 null，表示取不到有效值。
   */
  AsyncTotalNum?: number
  /**
   * 异步刷新当前执行数，如取不到值返回0
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
  IngressName?: string
  /**
   * tls域名列表
   */
  TlsDomains?: Array<string>
  /**
   * ingress域名列表
   */
  Domains?: Array<string>
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
   * 证书部署的实例列表，不同云资源类型如下
- clb：若监听器开启了SNI，则需要指定到域名LoadBalancerId|ListenerId|Domain，例：["lb-bid2fs4g|lbl-a8af11gs|tencent.com"]，若监听器未开启SNI或者为四层监听器，则指定到监听器，例：["lb-bid2fs4g|lbl-1c6rp5eo"]
- cdn：Domain|计费开关，例：["cdn2.tencent.com|off", "cdn.tencent.com|on"]
- ddos：InsId|Domain|VirtualPort，例：["bgpip-000001ms|tencent.com|443"]
- live：Domain，例：["live1.tencent.com", "live2.tencent.com"]
- vod：Domain， 例：["vod1.tencent.com", "vod2.tencent.com"]
- waf：Domain， 例：["waf1.tencent.com", "waf2.tencent.com"]
- apigateway：ServiceId|Domain， 例：["service-8sk7cqmd|apigw1.tencent.com", "service-8sk7cqmd|apigw2.ninghhuang.online"]
- teo：Domain， 例：["edgeone1.tencent.com", "edgeone2.tencent.com"]
- tke：ClusterId|NameSpace|SecretName， 例：["cls-42sa0ae0|default|test-tencent"]
- cos：Region|Bucket|Domain， 例：["ap-hongkong|ssl-server-1251810746|tencent.com"]
- lighthouse：Region|InstanceId|Domain， 例：["ap-shanghai|lhins-nh7lql34|tencent.com"]
- tse：GatewayId|CertificateId， 例：["gateway-s1da9151|fa61bc05-cc54-4eea-c932-24de52577372"]
- tcb：Type|Region|EnvId|Domain， 例：["AccessService|ap-shanghai|ceshi-4s5h0ymg11c839c7|tencent.com"]

   */
  InstanceIdList: Array<string>
  /**
   * 证书部署云资源支持的云资源类型， 不传则默认部署clb：
- clb
- cdn
- ddos
- live
- vod
- waf
- apigateway
- teo
- tke
- cos
- lighthouse
- tse
- tcb
<dx-alert infotype="explain" title="">当云资源类型传入clb、waf、apigateway、cos、lighthouse、tke、tse、tcb 时，公共参数Region必传。</dx-alert>
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
   * 是否查询缓存，1：是； 0：否， 默认为查询缓存，默认缓存半小时
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
  ServiceId?: string
  /**
   * 实例名称
   */
  ServiceName?: string
  /**
   * 域名
   */
  Domain?: string
  /**
   * 证书ID
   */
  CertId?: string
  /**
   * 使用协议
   */
  Protocol?: string
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
  /**
   * 是否查询异常
注意：此字段可能返回 null，表示取不到有效值。
   */
  Error?: string
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
  CertificateId?: string
  /**
   * 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时
   */
  IsCache?: number
  /**
   * 过滤参数列表； FilterKey：domainMatch（查询域名是否匹配的实例列表） FilterValue：1，表示查询匹配； 0，表示查询不匹配； 默认查询匹配
   */
  Filters?: Array<Filter>
  /**
   * 部署资源类型 lighthouse
   * @deprecated
   */
  ResourceType?: string
}

/**
 * DescribeHostCdnInstanceList请求参数结构体
 */
export interface DescribeHostCdnInstanceListRequest {
  /**
   * 待部署的证书ID
   */
  CertificateId?: string
  /**
   * 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时
   */
  IsCache?: number
  /**
   * 过滤参数列表； FilterKey：domainMatch（查询域名是否匹配的实例列表） FilterValue：1，表示查询匹配； 0，表示查询不匹配； 默认查询匹配
   */
  Filters?: Array<Filter>
  /**
   * 部署资源类型cdn
   * @deprecated
   */
  ResourceType?: string
  /**
   * 原证书ID
   */
  OldCertificateId?: string
  /**
   * 分页偏移量，默认值为0。
   */
  Offset?: number
  /**
   * 每页数量，默认10，最大值为200。
   */
  Limit?: number
  /**
   * 是否异步,0表示否，1表示是，默认为0
   */
  AsyncCache?: number
}

/**
 * CertificateInfoSubmit返回参数结构体
 */
export interface CertificateInfoSubmitResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeHostTeoInstanceList返回参数结构体
 */
export interface DescribeHostTeoInstanceListResponse {
  /**
   * teo实例列表，如取不到值返回空数组
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
  CertificateId?: string
  /**
   * 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时
   */
  IsCache?: number
  /**
   * 过滤参数列表； FilterKey：domainMatch（查询域名是否匹配的实例列表） FilterValue：1，表示查询匹配； 0，表示查询不匹配； 默认查询匹配
   */
  Filters?: Array<Filter>
  /**
   * 部署资源类型，如waf
   * @deprecated
   */
  ResourceType?: string
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
  CertificateId?: string
  /**
   * 是否成功。
   */
  IsSuccess?: boolean
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
  ManagerId?: number
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
   * 云资源更新任务ID， DeployRecordId为0表示任务进行中， 重复请求这个接口， 当返回DeployRecordId大于0则表示任务创建成功。 未创建成功则会抛出异常
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeployRecordId?: number
  /**
   * 更新任务创建状态；1表示创建成功； 0表示当前存在更新中的任务，未创建新的更新任务；返回值DeployRecordId为更新中的任务ID
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
 * DescribeCertificate请求参数结构体
 */
export interface DescribeCertificateRequest {
  /**
   * 证书 ID。
   */
  CertificateId: string
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
   * 每个操作类型都对应一个具体的操作描述。以下是对每个操作类型及其描述的文字说明：
1. apply - 表示申请一个免费的证书。
2. delete - 表示删除操作。
3. download - 表示下载操作。
4. upload - 表示上传操作。
5. revoke - 表示吊销证书。
6. cancelRevoke - 表示取消吊销操作。
7. updateAlias - 表示更新备注信息。
8. changeProject - 表示将证书分配到某个项目。
9. uploadConfirmLetter - 表示上传确认函。
10. cancel - 表示取消订单操作。
11. replace - 表示重颁发证书。
12. downloadConfirmLetter - 表示下载证书吊销确认函。
13. editRevokeLetter - 表示上传证书吊销确认函。
14. renewVIP - 表示续费付费证书。
15. applyVIP - 表示申请付费证书。
16. submitInfo - 表示提交资料。
17. downloadConfirmLetter - 表示下载确认函模版。
18. uploadFromYunAPI - 表示通过云 API 上传。
19. transferIn - 表示证书转入操作。
20. transferOut - 表示证书转出操作。
21. refund - 表示申请退款。
22. multiYearsRenew - 表示多年期自动续期。
23. modifyDownloadLimit - 表示修改下载限制开关。
24. issued - 表示证书签发。
25. domainValidationPassed - 表示域名验证完成。
26. Resubmit - 表示证书重新申请。
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
  CertificateId?: string
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
   * 证书域名验证方式：
DNS_AUTO： 自动添加域名DNS验证， 需用户域名解析托管在『[云解析DNS](https://console.cloud.tencent.com/cns)』，且与申请证书归属同一个腾讯云账号
DNS：手动添加域名DNS验证，需用户手动去域名解析服务商添加验证值
FILE：手动添加域名文件验证。 需要用户手动在域名站点根目录添加指定路径文件进行文件验证， http&https任一通过即可；且域名站点需海外CA机构能访问， 具体访问白名单为：64.78.193.238，216.168.247.9，216.168.249.9，54.189.196.217
   */
  DvAuthMethod: string
  /**
   * 证书绑定的域名。
   */
  DomainName: string
  /**
   * 证书关联的项目 ID。 默认为0（默认项目）
   */
  ProjectId?: number
  /**
   * 证书类型， 可不传，目前仅支持类型83。83 = TrustAsia C1 DV Free。
   */
  PackageType?: string
  /**
   * 证书订单关联邮箱。默认为腾讯云账号邮箱， 不存在则关联固定邮箱
   */
  ContactEmail?: string
  /**
   * 证书关联手机号码，  不存在则关联固定手机号码
   */
  ContactPhone?: string
  /**
   * 证书有效期，默认3（月），目前仅支持3个月。
   */
  ValidityPeriod?: string
  /**
   * 加密算法，取值为ECC、RSA， 默认为RSA
   */
  CsrEncryptAlgo?: string
  /**
   * 密钥对参数，RSA仅支持2048。ECC仅支持prime256v1。加密算法选择ECC时，此参数必填
   */
  CsrKeyParameter?: string
  /**
   * 私钥密码， 目前仅使用在生成jks、pfx格式证书时密码； 其他格式私钥证书未加密
   */
  CsrKeyPassword?: string
  /**
   * 证书别名
   */
  Alias?: string
  /**
   * 旧证书 ID，用于证书续费（证书有效期在30天内，且未过期），会建立续费关系， 可用于托管； 不传则表示新申请证书
   */
  OldCertificateId?: string
  /**
   * 权益包ID，用于免费证书扩容包使用， 免费证书扩容包已下线
   */
  PackageId?: string
  /**
   * 签发后是否删除自动域名验证记录， 默认为否；仅域名为DNS_AUTO验证类型支持传参
   */
  DeleteDnsAutoRecord?: boolean
  /**
   * 证书绑定的其他域名，待开放。目前不支持此参数
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
  CertificateIds?: Array<string>
  /**
   * 订单号列表
   */
  DealIds?: Array<string>
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
 * 证书域名验证结果
 */
export interface DomainValidationResult {
  /**
   * 证书绑定的域名。
   */
  Domain?: string
  /**
   * 域名验证类型。 取值为：DNS、FILE、DNS_AUTO、DNS_PROXY、FILE_PROXY
   */
  VerifyType?: string
  /**
   * 腾讯云检测结果，取值：1（验证通过）； -1（被限频或者 txt record not found）；-2（txt record not match）；-3（ns record not found）；-4（file not found）；-5（file not match）；-6（cname record not found）；-7（cname record not match）；-8（ns record not found）-9（file not found）；-10（file not match）

   */
  LocalCheck?: number
  /**
   * CA检查结果。取值： -1（未检测通过）；2（检测通过）
   */
  CaCheck?: number
  /**
   * 检查失败原因。状态LocalCheck的具体描述
   */
  LocalCheckFailReason?: string
  /**
   * 检查到的值。
   */
  CheckValue?: Array<string>
  /**
   * 是否被限频拦截， 取值：false（未被限频）；true（被限频）
   */
  Frequently?: boolean
  /**
   * 证书是否已经签发。取值： false（未签发）；true（已签发）
   */
  Issued?: boolean
}

/**
 * 托管配置
 */
export interface HostingConfig {
  /**
   * 托管资源替换时间， 默认为证书过期前30天存在续费证书则替换
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReplaceTime?: number
  /**
   * 托管发送消息类型：0，托管开始前消息提醒（没有续费证书也会收到该提示消息）； 1， 托管开始消息提醒（存在续费证书才会收到消息提醒）； 2， 托管资源替换失败消息提醒； 3 托管资源替换成功消息提醒
注意：此字段可能返回 null，表示取不到有效值。
   */
  MessageTypes?: Array<number | bigint>
  /**
   * 资源替换开始时间
   */
  ReplaceStartTime?: string
  /**
   * 资源替换结束时间
   */
  ReplaceEndTime?: string
}

/**
 * DescribeHostApiGatewayInstanceList返回参数结构体
 */
export interface DescribeHostApiGatewayInstanceListResponse {
  /**
   * apiGateway实例列表,如取不到值返回空数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceList?: Array<ApiGatewayInstanceDetail>
  /**
   * 总数，如取不到值返回0
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCertificateDetail返回参数结构体
 */
export interface DescribeCertificateDetailResponse {
  /**
   * 证书所属用户主账号 UIN。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUin?: string
  /**
   * 项目 ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
  /**
   * 证书来源：
trustasia：亚洲诚信，
upload：用户上传。
wosign：沃通
sheca：上海CA
注意：此字段可能返回 null，表示取不到有效值。
   */
  From?: string
  /**
   * 证书类型：CA = 客户端证书，SVR = 服务器证书。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertificateType?: string
  /**
   * 证书套餐类型：
null：用户上传证书（没有套餐类型），
2：TrustAsia TLS RSA CA， 
3：SecureSite 增强型企业版（EV Pro）， 
4：SecureSite 增强型（EV）， 
5：SecureSite 企业型专业版（OV Pro），
6：SecureSite 企业型（OV）， 
7：SecureSite 企业型（OV）通配符， 
8：Geotrust 增强型（EV）， 
9：Geotrust 企业型（OV）， 
10：Geotrust 企业型（OV）通配符， 
11：TrustAsia 域名型多域名 SSL 证书， 
12：TrustAsia 域名型（DV）通配符， 
13：TrustAsia 企业型通配符（OV）SSL 证书（D3）， 
14：TrustAsia 企业型（OV）SSL 证书（D3）， 
15：TrustAsia 企业型多域名 （OV）SSL 证书（D3）， 
16：TrustAsia 增强型 （EV）SSL 证书（D3）， 
17：TrustAsia 增强型多域名（EV）SSL 证书（D3）， 
18：GlobalSign 企业型（OV）SSL 证书， 
19：GlobalSign 企业型通配符 （OV）SSL 证书， 
20：GlobalSign 增强型 （EV）SSL 证书， 
21：TrustAsia 企业型通配符多域名（OV）SSL 证书（D3）， 
22：GlobalSign 企业型多域名（OV）SSL 证书， 
23：GlobalSign 企业型通配符多域名（OV）SSL 证书，
24：GlobalSign 增强型多域名（EV）SSL 证书，
25：Wotrus 域名型证书，
26：Wotrus 域名型多域名证书，
27：Wotrus 域名型通配符证书，
28：Wotrus 企业型证书，
29：Wotrus 企业型多域名证书，
30：Wotrus 企业型通配符证书，
31：Wotrus 增强型证书，
32：Wotrus 增强型多域名证书，
33：WoTrus-国密域名型证书，
34：WoTrus-国密域名型证书（多域名），
35：WoTrus-国密域名型证书（通配符），
37：WoTrus-国密企业型证书，
38：WoTrus-国密企业型证书（多域名），
39：WoTrus-国密企业型证书（通配符），
40：WoTrus-国密增强型证书，
41：WoTrus-国密增强型证书（多域名），
42：TrustAsia-域名型证书（通配符多域名），
43：DNSPod-企业型(OV)SSL证书
44：DNSPod-企业型(OV)通配符SSL证书
45：DNSPod-企业型(OV)多域名SSL证书
46：DNSPod-增强型(EV)SSL证书
47：DNSPod-增强型(EV)多域名SSL证书
48：DNSPod-域名型(DV)SSL证书
49：DNSPod-域名型(DV)通配符SSL证书
50：DNSPod-域名型(DV)多域名SSL证书
51：DNSPod（国密）-企业型(OV)SSL证书
52：DNSPod（国密）-企业型(OV)通配符SSL证书
53：DNSPod（国密）-企业型(OV)多域名SSL证书
54：DNSPod（国密）-域名型(DV)SSL证书
55：DNSPod（国密）-域名型(DV)通配符SSL证书
56：DNSPod（国密）-域名型(DV)多域名SSL证书
57：SecureSite 企业型专业版多域名(OV Pro)
58：SecureSite 企业型多域名(OV)
59：SecureSite 增强型专业版多域名(EV Pro)
60：SecureSite 增强型多域名(EV)
61：Geotrust 增强型多域名(EV)
75：SecureSite 企业型(OV)
76：SecureSite 企业型(OV)通配符
77：SecureSite 增强型(EV)
78：Geotrust 企业型(OV)
79：Geotrust 企业型(OV)通配符
80：Geotrust 增强型(EV)
81：GlobalSign 企业型（OV）SSL证书
82：GlobalSign 企业型通配符 （OV）SSL证书
83：TrustAsia C1 DV Free
85：GlobalSign 增强型 （EV）SSL证书
88：GlobalSign 企业型通配符多域名 （OV）SSL证书
89：GlobalSign 企业型多域名 （OV）SSL证书
90：GlobalSign 增强型多域名（EV） SSL证书
91：Geotrust 增强型多域名(EV)
92：SecureSite 企业型专业版多域名(OV Pro)
93：SecureSite 企业型多域名(OV)
94：SecureSite 增强型专业版多域名(EV Pro)
95：SecureSite 增强型多域名(EV)
96：SecureSite 增强型专业版(EV Pro)
97：SecureSite 企业型专业版(OV Pro)
98：CFCA 企业型(OV)SSL证书
99：CFCA 企业型多域名(OV)SSL证书
100：CFCA 企业型通配符(OV)SSL证书
101：CFCA 增强型(EV)SSL证书
注意：此字段可能返回 null，表示取不到有效值。
   */
  PackageType?: string
  /**
   * 证书产品名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductZhName?: string
  /**
   * 证书绑定通用名称域名。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Domain?: string
  /**
   * 备注名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Alias?: string
  /**
   * 证书状态：0 = 审核中，1 = 已通过，2 = 审核失败，3 = 已过期，4 = 自动添加DNS记录，5 = 企业证书，待提交资料，6 = 订单取消中，7 = 已取消，8 = 已提交资料， 待上传确认函，9 = 证书吊销中，10 = 已吊销，11 = 重颁发中，12 = 待上传吊销确认函，13 = 免费证书待提交资料。14 = 证书已退款。 15 = 证书迁移中
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 状态信息。 取值范围：
//通用状态信息
1、PRE-REVIEWING：预审核中
2、LEGAL-REVIEWING：法务审核中
3、CA-REVIEWING：CA审核中
4、PENDING-DCV：域名验证中
5、WAIT-ISSUE：等待签发（域名验证已通过）
//证书审核失败状态信息
1、订单审核失败
2、CA审核失败，域名未通过安全审查
3、域名验证超时，订单自动关闭，请您重新进行证书申请
4、证书资料未通过证书CA机构审核，审核人员会致电您证书预留的联系方式，请您留意来电。后续可通过“修改资料”重新提交资料
待持续完善
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
   * 证书申请时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  InsertTime?: string
  /**
   * CA订单 ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OrderId?: string
  /**
   * 证书扩展信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertificateExtra?: CertificateExtra
  /**
   * 私钥证书， 国密证书则为签名证书中的私钥证书
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertificatePrivateKey?: string
  /**
   * 公钥证书， 国密则为签名证书中的公钥证书
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertificatePublicKey?: string
  /**
   * 证书域名验证信息。
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
   * 付费证书提交的资料信息。
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
   * 国密加密证书公钥， 仅国密证书有值
注意：此字段可能返回 null，表示取不到有效值。
   */
  EncryptCert?: string
  /**
   * 国密加密私钥证书， 仅国密证书有值
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
   * 证书加密算法（国密证书特有）
注意：此字段可能返回 null，表示取不到有效值。
   */
  EncryptAlgorithm?: string
  /**
   * DV证书吊销验证值
注意：此字段可能返回 null，表示取不到有效值。
   */
  DvRevokeAuthDetail?: Array<DvAuths>
  /**
   * 证书链信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertChainInfo?: Array<CertBasicInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  ProjectName?: string
  /**
   * 项目创建用户 UIN。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectCreatorUin?: number
  /**
   * 项目创建时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectCreateTime?: string
  /**
   * 项目信息简述。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectResume?: string
  /**
   * 用户 UIN。
注意：此字段可能返回 null，表示取不到有效值。
   */
  OwnerUin?: number
  /**
   * 项目 ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: string
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
   * @deprecated
   */
  ResourceType?: string
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
   * 分页偏移量，默认值为0.
   */
  Offset?: number
  /**
   * 每页数量，默认10，最大值为200。
   */
  Limit?: number
  /**
   * 是否异步，1表示是，0表示否，默认为0
   */
  AsyncCache?: number
}

/**
 * 绑定资源地域结果
 */
export interface BindResourceRegionResult {
  /**
   * 地域
   */
  Region?: string
  /**
   * 关联资源总数
   */
  TotalCount?: number
  /**
   * 是否查询异常
   */
  Error?: string
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
 * CertificateInfoSubmit请求参数结构体
 */
export interface CertificateInfoSubmitRequest {
  /**
   * 待提交资料的付费证书 ID。
   */
  CertId: string
  /**
   * 此字段必传。 CSR 生成方式， 取值为：
- online：腾讯云提交的填写的参数信息生成CSR和私钥，并由腾讯云加密存储
- parse：自行生成CSR和私钥，并通过上传CSR申请证书
   */
  GenCsrType: string
  /**
   * 证书绑定的通用名称， 若是上传的CSR，则该域名需与CSR解析的通用名称一致
   */
  CertCommonName: string
  /**
   * 组织信息类型， 取值范围：
1（个人）：仅DV类型证书可设置为1， 个人类型证书组织信息字段可不传：Org开头，Admin开头，Tech开头
2（公司）：所有类型证书都可设置为2， 按需传组织信息字段
   */
  CompanyType: number
  /**
   * 公司ID，在 [腾讯云控制台](https://console.cloud.tencent.com/ssl/info) 可进行查看，若无满足的公司信息， 则本参数传0 ； 若存在满足当前订单的公司信息， 可以根据 [DescribeCompanies](https://cloud.tencent.com/document/product/400/90375) 查看公司ID； 若传了公司ID，则Org开头的参数可不传


   */
  CompanyId: string
  /**
   * 公司证件类型，取值范围：
TYDMZ（统一社会信用代码 ）：仅CFCA类型证书需要使用本字段， 其他类型证书不需要使用本字段
OTHERS（其他）
   */
  OrgIdType?: string
  /**
   * 公司证件号码，取值范围：
TYDMZ（统一社会信用代码 ）：11532xxxxxxxx24820

   */
  OrgIdNumber?: string
  /**
   * 管理人证件类型，取值范围：
SFZ（身份证）：仅CFCA类型证书需要使用本字段， 其他类型证书不需要使用本字段
HZ（护照）：仅CFCA类型证书需要使用本字段， 其他类型证书不需要使用本字段
   */
  AdminIdType?: string
  /**
   * 管理人证件号码，仅CFCA类型证书需要使用本字段， 其他类型证书不需要使用本字段， 取值范围：
SFZ（身份证）：110000xxxxxxxx1242
HZ（护照）:EFxxxxxxx
   */
  AdminIdNumber?: string
  /**
   * 联系人证件类型，取值范围：
SFZ（身份证）：仅CFCA类型证书需要使用本字段， 其他类型证书不需要使用本字段
HZ（护照）：仅CFCA类型证书需要使用本字段， 其他类型证书不需要使用本字段
   */
  TechIdType?: string
  /**
   * 联系人证件号码，仅CFCA类型证书需要使用本字段， 其他类型证书不需要使用本字段，取值范围：
SFZ（身份证）：110000xxxxxxxx1242
HZ（护照）:EFxxxxxxx
   */
  TechIdNumber?: string
  /**
   * 上传的 CSR 内容。
若GenCsrType为parse， 则此字段必传。
   */
  Csr?: string
  /**
   * 证书绑定的其他域名， 单域名、泛域名证书无需提供。 多域名、多泛域名必填
   */
  DnsNames?: Array<string>
  /**
   * 私钥密码， 目前仅使用在生成jks、pfx格式证书时密码； 其他格式私钥证书未加密
   */
  KeyPass?: string
  /**
   * 公司名称。若没有传CompanyId或者ManagerId， 则此字段必传
   */
  OrgOrganization?: string
  /**
   * 部门名称。若没有传CompanyId或者ManagerId， 则此字段必传
   */
  OrgDivision?: string
  /**
   * 公司详细地址。若没有传CompanyId或者ManagerId， 则此字段必传
   */
  OrgAddress?: string
  /**
   * 国家名称，如中国：CN 。若没有传CompanyId或者ManagerId， 则此字段必传
   */
  OrgCountry?: string
  /**
   * 公司所在城市。若没有传CompanyId或者ManagerId， 则此字段必传
   */
  OrgCity?: string
  /**
   * 公司所在省份。若没有传CompanyId或者ManagerId， 则此字段必传
   */
  OrgRegion?: string
  /**
   * 公司所属区号。若没有传CompanyId或者ManagerId， 则此字段必传
如：021。  手机号码传 86
   */
  OrgPhoneArea?: string
  /**
   * 公司所属号码。若没有传CompanyId或者ManagerId， 则此字段必传
   */
  OrgPhoneNumber?: string
  /**
   * 证书域名验证方式：
DNS_AUTO： 自动添加域名DNS验证， 需用户域名解析托管在『[云解析DNS](https://console.cloud.tencent.com/cns)』，且与申请证书归属同一个腾讯云账号
DNS：手动添加域名DNS验证，需用户手动去域名解析服务商添加验证值
FILE：手动添加域名文件验证。 需要用户手动在域名站点根目录添加指定路径文件进行文件验证， http&https任一通过即可；且域名站点需海外CA机构能访问， 具体访问白名单为：64.78.193.238，216.168.247.9，216.168.249.9，54.189.196.217
   */
  VerifyType?: string
  /**
   * 管理人名。若没有传ManagerId， 则此字段必传
   */
  AdminFirstName?: string
  /**
   * 管理人姓。若没有传ManagerId， 则此字段必传
   */
  AdminLastName?: string
  /**
   * 管理人手机号码。若没有传ManagerId， 则此字段必传
   */
  AdminPhone?: string
  /**
   * 管理人邮箱地址。若没有传ManagerId， 则此字段必传
   */
  AdminEmail?: string
  /**
   * 管理人职位。若没有传ManagerId， 则此字段必传
   */
  AdminTitle?: string
  /**
   * 联系人名。若没有传ManagerId， 则此字段必传
   */
  TechFirstName?: string
  /**
   * 联系人姓。若没有传ManagerId， 则此字段必传
   */
  TechLastName?: string
  /**
   * 联系人邮箱地址。CompanyType为1时， 此字段必传
   */
  ContactEmail?: string
  /**
   * 是否开启自动续费： 0， 不开启；  1， 开启； 默认为0
   */
  AutoRenewFlag?: number
  /**
   * 密钥对参数，RSA支持2048，4096。ECC仅支持prime256v1。加密算法选择ECC时，此参数必填
国密证书类型本字段不用传
   */
  CsrKeyParameter?: string
  /**
   * 加密算法，取值为ECC、RSA， 默认为RSA
国密证书类型本字段不用传
   */
  CsrEncryptAlgo?: string
  /**
   * 管理人ID，在 [腾讯云控制台](https://console.cloud.tencent.com/ssl/info) 可进行查看，若无满足的管理人信息， 则本参数传0 ； 若存在满足当前订单的管理人信息， 可以根据 [DescribeManagers](https://cloud.tencent.com/document/product/400/52672) 查看管理人ID； 若传了管理人ID，则Org开头、Admin开头、Tech开头的参数可不传； 管理人ID会包含公司信息

   */
  ManagerId?: string
  /**
   * 联系人电话。若没有传ManagerId， 则此字段必传
   */
  TechPhone?: string
  /**
   * 联系人邮箱
   */
  TechEmail?: string
  /**
   * 联系人职位。若没有传ManagerId， 则此字段必传
   */
  TechTitle?: string
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
   */
  InstanceList?: Array<ClbInstanceDetail>
  /**
   * 该地域下Clb实例总数
   */
  TotalCount?: number
  /**
   * 是否查询异常
   */
  Error?: string
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
 * CertificateOrderSubmit返回参数结构体
 */
export interface CertificateOrderSubmitResponse {
  /**
   * CA机构侧订单号。
   */
  OrderId?: string
  /**
   * 证书状态：0 = 审核中，1 = 已通过，2 = 审核失败，3 = 已过期，4 = 已添加DNS记录，5 = 企业证书，待提交，6 = 订单取消中，7 = 已取消，8 = 已提交资料， 待上传确认函，9 = 证书吊销中，10 = 已吊销，11 = 重颁发中，12 = 待上传吊销确认函，13 = 免费证书待提交资料。
   */
  Status?: number
  /**
   * 是否预审核
   */
  IsAudited?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * CheckCertificateExist请求参数结构体
 */
export interface CheckCertificateExistRequest {
  /**
   * 证书公钥内容， 包含证书链
   */
  CertificatePublicKey: string
}

/**
 * DescribeCompanies请求参数结构体
 */
export interface DescribeCompaniesRequest {
  /**
   * 分页偏移量，默认值为0.
   */
  Offset?: number
  /**
   * 分页每页限制数，默认值为0，最大值1000.
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
export interface ManagerStatusInfo {
  /**
   * 审核类型，枚举值：ov,ev,cs,ev_cs
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 审核状态，枚举值：pending,completed,invalid,submitted,expiring,expired
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 过期时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireTime?: string
}

/**
 * CancelAuditCertificate返回参数结构体
 */
export interface CancelAuditCertificateResponse {
  /**
   * 操作是否成功
   */
  Result?: boolean
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
  Id?: number
  /**
   * 部署证书ID
   */
  CertId?: string
  /**
   * 部署资源类型
   */
  ResourceType?: string
  /**
   * 部署地域
   */
  Region?: string
  /**
   * 部署状态:0 未开始， 1 成功， 2 失败
   */
  Status?: number
  /**
   * 部署时间
   */
  CreateTime?: string
  /**
   * 最近一次更新时间
   */
  UpdateTime?: string
}

/**
 * DescribePackages返回参数结构体
 */
export interface DescribePackagesResponse {
  /**
   * 权益包列表。
   */
  Packages?: Array<PackageInfo>
  /**
   * 总条数。
   */
  TotalCount?: number
  /**
   * 权益点总余额。
   */
  TotalBalance?: number
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
   * 公司ID,可以从DescribeCompanies接口获取
   */
  CompanyId: number
  /**
   * 分页偏移量，如果不传默认值为0
   */
  Offset?: number
  /**
   * 分页每页数量，如果不传默认值为10，最大值为1000
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
   * 根据这样的格式:管理人姓|管理人名|邮箱|部门 ,进行精准匹配
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
  /**
   * 是否查询异常
注意：此字段可能返回 null，表示取不到有效值。
   */
  Error?: string
}

/**
 * DescribeHostLighthouseInstanceList返回参数结构体
 */
export interface DescribeHostLighthouseInstanceListResponse {
  /**
   * Lighthouse实例列表,如取不到返回空数组
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceList?: Array<LighthouseInstanceDetail>
  /**
   * 总数，如取不到返回0
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
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
  /**
   * 是否查询异常
注意：此字段可能返回 null，表示取不到有效值。
   */
  Error?: string
}
