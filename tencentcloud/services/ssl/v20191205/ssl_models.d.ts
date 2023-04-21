/**
 * ApplyCertificate返回参数结构体
 */
export interface ApplyCertificateResponse {
    /**
      * 证书 ID。
      */
    CertificateId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 管理人信息
 */
export interface ManagerInfo {
    /**
      * 状态: audit: 审核中 ok: 审核通过 invalid: 失效 expiring: 即将过期 expired: 已过期
      */
    Status: string;
    /**
      * 管理人姓名
      */
    ManagerFirstName: string;
    /**
      * 管理人姓名
      */
    ManagerLastName: string;
    /**
      * 管理人职位
      */
    ManagerPosition: string;
    /**
      * 管理人电话
      */
    ManagerPhone: string;
    /**
      * 管理人邮箱
      */
    ManagerMail: string;
    /**
      * 管理人所属部门
      */
    ManagerDepartment: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * 管理人域名数量
      */
    DomainCount: number;
    /**
      * 管理人证书数量
      */
    CertCount: number;
    /**
      * 管理人ID
      */
    ManagerId: number;
    /**
      * 审核有效到期时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExpireTime: string;
    /**
      * 最近一次提交审核时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubmitAuditTime: string;
    /**
      * 审核通过时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    VerifyTime: string;
    /**
      * 具体审核状态信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    StatusInfo: Array<ManagerStatusInfo>;
}
/**
 * CompleteCertificate请求参数结构体
 */
export interface CompleteCertificateRequest {
    /**
      * 证书ID
      */
    CertificateId: string;
}
/**
 * UploadCertificate请求参数结构体
 */
export interface UploadCertificateRequest {
    /**
      * 证书内容。
      */
    CertificatePublicKey: string;
    /**
      * 私钥内容，证书类型为 SVR 时必填，为 CA 时可不填。
      */
    CertificatePrivateKey?: string;
    /**
      * 证书类型，默认 SVR。CA = CA证书，SVR = 服务器证书。
      */
    CertificateType?: string;
    /**
      * 备注名称。
      */
    Alias?: string;
    /**
      * 项目 ID。
      */
    ProjectId?: number;
    /**
      * 证书用途/证书来源。“CLB，CDN，WAF，LIVE，DDOS”
      */
    CertificateUse?: string;
    /**
      * 相同的证书是否允许重复上传
      */
    Repeatable?: boolean;
}
/**
 * DeleteCertificate请求参数结构体
 */
export interface DeleteCertificateRequest {
    /**
      * 证书 ID。
      */
    CertificateId: string;
}
/**
 * DescribeCertificateOperateLogs返回参数结构体
 */
export interface DescribeCertificateOperateLogsResponse {
    /**
      * 当前查询条件日志总数。
      */
    AllTotal?: number;
    /**
      * 本次请求返回的日志数量。
      */
    TotalCount?: number;
    /**
      * 证书操作日志列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OperateLogs?: Array<OperationLog>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyCertificateAlias请求参数结构体
 */
export interface ModifyCertificateAliasRequest {
    /**
      * 证书 ID。
      */
    CertificateId: string;
    /**
      * 备注名称。
      */
    Alias?: string;
}
/**
 * ModifyCertificatesExpiringNotificationSwitch返回参数结构体
 */
export interface ModifyCertificatesExpiringNotificationSwitchResponse {
    /**
      * 证书ID列表
      */
    CertificateIds?: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CommitCertificateInformation请求参数结构体
 */
export interface CommitCertificateInformationRequest {
    /**
      * 证书 ID。
      */
    CertificateId: string;
}
/**
 * DownloadCertificate返回参数结构体
 */
export interface DownloadCertificateResponse {
    /**
      * ZIP base64 编码内容，base64 解码后可保存为 ZIP 文件。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Content?: string;
    /**
      * MIME 类型：application/zip = ZIP 压缩文件。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContentType?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ReplaceCertificate返回参数结构体
 */
export interface ReplaceCertificateResponse {
    /**
      * 证书 ID。
      */
    CertificateId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 权益包基本信息
 */
export interface PackageInfo {
    /**
      * 权益包ID。
      */
    PackageId: string;
    /**
      * 权益包内权益点总量。
      */
    Total: number;
    /**
      * 权益包内权益点余量。
      */
    Balance: number;
    /**
      * 权益包名称。
      */
    Type: string;
    /**
      * 权益点是转入时，来源信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SourceUin: number;
    /**
      * 权益点状态。
      */
    Status: string;
    /**
      * 过期时间。
      */
    ExpireTime: string;
    /**
      * 更新时间。
      */
    UpdateTime: string;
    /**
      * 生成时间。
      */
    CreateTime: string;
    /**
      * 来源类型。
      */
    SourceType: string;
    /**
      * 转移信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TransferOutInfos: Array<PackageTransferOutInfo>;
}
/**
 * SubmitAuditManager返回参数结构体
 */
export interface SubmitAuditManagerResponse {
    /**
      * 管理人ID
      */
    ManagerId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DownloadCertificate请求参数结构体
 */
export interface DownloadCertificateRequest {
    /**
      * 证书 ID。
      */
    CertificateId: string;
}
/**
 * CancelCertificateOrder请求参数结构体
 */
export interface CancelCertificateOrderRequest {
    /**
      * 证书 ID。
      */
    CertificateId: string;
}
/**
 * ModifyCertificateProject返回参数结构体
 */
export interface ModifyCertificateProjectResponse {
    /**
      * 修改所属项目成功的证书集合。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SuccessCertificates?: Array<string>;
    /**
      * 修改所属项目失败的证书集合。
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailCertificates?: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 获取证书列表（DescribeCertificates）返回参数键为 Certificates 的内容。
 */
export interface Certificates {
    /**
      * 用户 UIN。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OwnerUin: string;
    /**
      * 项目 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectId: string;
    /**
      * 证书来源。
注意：此字段可能返回 null，表示取不到有效值。
      */
    From: string;
    /**
      * 证书套餐类型：
null = 用户上传证书（没有套餐类型），
1 = GeoTrust DV SSL CA - G3， 2 = TrustAsia TLS RSA CA， 3 = SecureSite 增强型企业版（EV Pro）， 4 = SecureSite 增强型（EV）， 5 = SecureSite 企业型专业版（OV Pro）， 6 = SecureSite 企业型（OV）， 7 = SecureSite 企业型（OV）通配符， 8 = Geotrust 增强型（EV）， 9 = Geotrust 企业型（OV）， 10 = Geotrust 企业型（OV）通配符， 11 = TrustAsia 域名型多域名 SSL 证书， 12 = TrustAsia 域名型（DV）通配符， 13 = TrustAsia 企业型通配符（OV）SSL 证书（D3）， 14 = TrustAsia 企业型（OV）SSL 证书（D3）， 15 = TrustAsia 企业型多域名 （OV）SSL 证书（D3）， 16 = TrustAsia 增强型 （EV）SSL 证书（D3）， 17 = TrustAsia 增强型多域名（EV）SSL 证书（D3）， 18 = GlobalSign 企业型（OV）SSL 证书， 19 = GlobalSign 企业型通配符 （OV）SSL 证书， 20 = GlobalSign 增强型 （EV）SSL 证书， 21 = TrustAsia 企业型通配符多域名（OV）SSL 证书（D3）， 22 = GlobalSign 企业型多域名（OV）SSL 证书， 23 = GlobalSign 企业型通配符多域名（OV）SSL 证书， 24 = GlobalSign 增强型多域名（EV）SSL 证书。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackageType: string;
    /**
      * 证书类型：CA = 客户端证书，SVR = 服务器证书。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertificateType: string;
    /**
      * 颁发者。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProductZhName: string;
    /**
      * 主域名。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Domain: string;
    /**
      * 备注名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Alias: string;
    /**
      * 状态。0：审核中，1：已通过，2：审核失败，3：已过期，4：验证方式为 DNS_AUTO 类型的证书， 已添加DNS记录，5：企业证书，待提交，6：订单取消中，7：已取消，8：已提交资料， 待上传确认函，9：证书吊销中，10：已吊销，11：重颁发中，12：待上传吊销确认函，13：免费证书待提交资料状态，14：已退款，
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: number;
    /**
      * 证书扩展信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertificateExtra: CertificateExtra;
    /**
      * 漏洞扫描状态：INACTIVE = 未开启，ACTIVE = 已开启
注意：此字段可能返回 null，表示取不到有效值。
      */
    VulnerabilityStatus: string;
    /**
      * 状态信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    StatusMsg: string;
    /**
      * 验证类型：DNS_AUTO = 自动DNS验证，DNS = 手动DNS验证，FILE = 文件验证，EMAIL = 邮件验证。
注意：此字段可能返回 null，表示取不到有效值。
      */
    VerifyType: string;
    /**
      * 证书生效时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertBeginTime: string;
    /**
      * 证书过期时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertEndTime: string;
    /**
      * 证书有效期，单位（月）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ValidityPeriod: string;
    /**
      * 创建时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InsertTime: string;
    /**
      * 证书 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertificateId: string;
    /**
      * 证书包含的多个域名（包含主域名）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubjectAltName: Array<string>;
    /**
      * 证书类型名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackageTypeName: string;
    /**
      * 状态名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    StatusName: string;
    /**
      * 是否为 VIP 客户。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsVip: boolean;
    /**
      * 是否为 DV 版证书。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsDv: boolean;
    /**
      * 是否为泛域名证书。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsWildcard: boolean;
    /**
      * 是否启用了漏洞扫描功能。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsVulnerability: boolean;
    /**
      * 是否可重颁发证书。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RenewAble: boolean;
    /**
      * 项目信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectInfo: ProjectInfo;
    /**
      * 关联的云资源，暂不可用
注意：此字段可能返回 null，表示取不到有效值。
      */
    BoundResource: Array<string>;
    /**
      * 是否可部署。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Deployable: boolean;
    /**
      * 标签列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<Tags>;
    /**
      * 是否已忽略到期通知
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsIgnore: boolean;
    /**
      * 是否国密证书
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsSM: boolean;
    /**
      * 证书算法
注意：此字段可能返回 null，表示取不到有效值。
      */
    EncryptAlgorithm: string;
    /**
      * 上传CA证书的加密算法
注意：此字段可能返回 null，表示取不到有效值。
      */
    CAEncryptAlgorithms: Array<string>;
    /**
      * 上传CA证书的过期时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CAEndTimes: Array<string>;
    /**
      * 上传CA证书的通用名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    CACommonNames: Array<string>;
    /**
      * 证书预审核信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    PreAuditInfo: PreAuditInfo;
    /**
      * 是否自动续费
注意：此字段可能返回 null，表示取不到有效值。
      */
    AutoRenewFlag: number;
}
/**
 * 获取证书列表（DescribeCertificates）返回参数键为 Certificates 数组下，key为CertificateExtra 的内容。
 */
export interface CertificateExtra {
    /**
      * 证书可配置域名数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DomainNumber: string;
    /**
      * 原始证书 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OriginCertificateId: string;
    /**
      * 重颁发证书原始 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReplacedBy: string;
    /**
      * 重颁发证书新 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReplacedFor: string;
    /**
      * 新订单证书 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RenewOrder: string;
    /**
      * 是否是国密证书
注意：此字段可能返回 null，表示取不到有效值。
      */
    SMCert?: number;
}
/**
 * 公司信息
 */
export interface CompanyInfo {
    /**
      * 公司名称
      */
    CompanyName: string;
    /**
      * 公司ID
      */
    CompanyId: number;
    /**
      * 公司所在国家
      */
    CompanyCountry: string;
    /**
      * 公司所在省份
      */
    CompanyProvince: string;
    /**
      * 公司所在城市
      */
    CompanyCity: string;
    /**
      * 公司所在详细地址
      */
    CompanyAddress: string;
    /**
      * 公司电话
      */
    CompanyPhone: string;
}
/**
 * DescribeManagers返回参数结构体
 */
export interface DescribeManagersResponse {
    /**
      * 公司管理人列表
      */
    Managers: Array<ManagerInfo>;
    /**
      * 公司管理人总数
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 根证书
 */
export interface RootCertificates {
    /**
      * 国密签名证书
注意：此字段可能返回 null，表示取不到有效值。
      */
    Sign: string;
    /**
      * 国密加密证书
注意：此字段可能返回 null，表示取不到有效值。
      */
    Encrypt: string;
    /**
      * 标准证书
注意：此字段可能返回 null，表示取不到有效值。
      */
    Standard: string;
}
/**
 * DescribeCertificate返回参数结构体
 */
export interface DescribeCertificateResponse {
    /**
      * 用户 UIN。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OwnerUin: string;
    /**
      * 项目 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectId: string;
    /**
      * 证书来源：trustasia = 亚洲诚信，upload = 用户上传。
注意：此字段可能返回 null，表示取不到有效值。
      */
    From: string;
    /**
      * 证书类型：CA = 客户端证书，SVR = 服务器证书。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertificateType: string;
    /**
      * 证书套餐类型：1 = GeoTrust DV SSL CA - G3， 2 = TrustAsia TLS RSA CA， 3 = SecureSite 增强型企业版（EV Pro）， 4 = SecureSite 增强型（EV）， 5 = SecureSite 企业型专业版（OV Pro）， 6 = SecureSite 企业型（OV）， 7 = SecureSite 企业型（OV）通配符， 8 = Geotrust 增强型（EV）， 9 = Geotrust 企业型（OV）， 10 = Geotrust 企业型（OV）通配符， 11 = TrustAsia 域名型多域名 SSL 证书， 12 = TrustAsia 域名型（DV）通配符， 13 = TrustAsia 企业型通配符（OV）SSL 证书（D3）， 14 = TrustAsia 企业型（OV）SSL 证书（D3）， 15 = TrustAsia 企业型多域名 （OV）SSL 证书（D3）， 16 = TrustAsia 增强型 （EV）SSL 证书（D3）， 17 = TrustAsia 增强型多域名（EV）SSL 证书（D3）， 18 = GlobalSign 企业型（OV）SSL 证书， 19 = GlobalSign 企业型通配符 （OV）SSL 证书， 20 = GlobalSign 增强型 （EV）SSL 证书， 21 = TrustAsia 企业型通配符多域名（OV）SSL 证书（D3）， 22 = GlobalSign 企业型多域名（OV）SSL 证书， 23 = GlobalSign 企业型通配符多域名（OV）SSL 证书， 24 = GlobalSign 增强型多域名（EV）SSL 证书。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackageType: string;
    /**
      * 证书颁发者名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProductZhName: string;
    /**
      * 域名。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Domain: string;
    /**
      * 备注名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Alias: string;
    /**
      * 证书状态：0 = 审核中，1 = 已通过，2 = 审核失败，3 = 已过期，4 = 已添加DNS记录，5 = 企业证书，待提交，6 = 订单取消中，7 = 已取消，8 = 已提交资料， 待上传确认函，9 = 证书吊销中，10 = 已吊销，11 = 重颁发中，12 = 待上传吊销确认函。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: number;
    /**
      * 状态信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    StatusMsg: string;
    /**
      * 验证类型：DNS_AUTO = 自动DNS验证，DNS = 手动DNS验证，FILE = 文件验证，EMAIL = 邮件验证。
注意：此字段可能返回 null，表示取不到有效值。
      */
    VerifyType: string;
    /**
      * 漏洞扫描状态。
注意：此字段可能返回 null，表示取不到有效值。
      */
    VulnerabilityStatus: string;
    /**
      * 证书生效时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertBeginTime: string;
    /**
      * 证书失效时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertEndTime: string;
    /**
      * 证书有效期：单位(月)。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ValidityPeriod: string;
    /**
      * 申请时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InsertTime: string;
    /**
      * 订单 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrderId: string;
    /**
      * 证书扩展信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertificateExtra: CertificateExtra;
    /**
      * DV 认证信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DvAuthDetail: DvAuthDetail;
    /**
      * 漏洞扫描评估报告。
注意：此字段可能返回 null，表示取不到有效值。
      */
    VulnerabilityReport: string;
    /**
      * 证书 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertificateId: string;
    /**
      * 证书类型名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackageTypeName: string;
    /**
      * 状态描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    StatusName: string;
    /**
      * 证书包含的多个域名（包含主域名）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubjectAltName: Array<string>;
    /**
      * 是否为 VIP 客户。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsVip: boolean;
    /**
      * 是否为泛域名证书。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsWildcard: boolean;
    /**
      * 是否为 DV 版证书。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsDv: boolean;
    /**
      * 是否启用了漏洞扫描功能。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsVulnerability: boolean;
    /**
      * 是否可重颁发证书。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RenewAble: boolean;
    /**
      * 提交的资料信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubmittedData: SubmittedData;
    /**
      * 是否可部署。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Deployable: boolean;
    /**
      * 标签列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<Tags>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * HostCertificate返回参数结构体
 */
export interface HostCertificateResponse {
    /**
      * 云资源配置详情
      */
    CertHostingInfo: CertHostingInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UploadCertificate返回参数结构体
 */
export interface UploadCertificateResponse {
    /**
      * 证书 ID。
      */
    CertificateId?: string;
    /**
      * 重复证书的ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    RepeatCertId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 权益包转出详情
 */
export interface PackageTransferOutInfo {
    /**
      * 权益包ID。
      */
    PackageId: string;
    /**
      * 转移码。
      */
    TransferCode: string;
    /**
      * 本次转移点数。
      */
    TransferCount: number;
    /**
      * 转入的PackageID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReceivePackageId: string;
    /**
      * 本次转移过期时间。
      */
    ExpireTime: string;
    /**
      * 本次转移生成时间。
      */
    CreateTime: string;
    /**
      * 本次转移更新时间。
      */
    UpdateTime: string;
    /**
      * 转移状态。
      */
    TransferStatus: string;
    /**
      * 接收者uin。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReceiverUin: number;
    /**
      * 接收时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReceiveTime: string;
}
/**
 * 证书操作日志。
 */
export interface OperationLog {
    /**
      * 操作证书动作。
      */
    Action: string;
    /**
      * 操作时间。
      */
    CreatedOn: string;
}
/**
 * VerifyManager返回参数结构体
 */
export interface VerifyManagerResponse {
    /**
      * 管理人ID
      */
    ManagerId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCertificateDetail请求参数结构体
 */
export interface DescribeCertificateDetailRequest {
    /**
      * 证书 ID。
      */
    CertificateId: string;
}
/**
 * 标签
 */
export interface Tags {
    /**
      * 标签键
      */
    TagKey: string;
    /**
      * 标签值
      */
    TagValue: string;
}
/**
 * SubmitAuditManager请求参数结构体
 */
export interface SubmitAuditManagerRequest {
    /**
      * 管理人ID
      */
    ManagerId: number;
}
/**
 * DeleteManager请求参数结构体
 */
export interface DeleteManagerRequest {
    /**
      * 管理人ID
      */
    ManagerId: number;
}
/**
 * ApplyCertificate请求参数结构体
 */
export interface ApplyCertificateRequest {
    /**
      * 验证方式：DNS_AUTO = 自动DNS验证，DNS = 手动DNS验证，FILE = 文件验证。
      */
    DvAuthMethod: string;
    /**
      * 域名。
      */
    DomainName: string;
    /**
      * 项目 ID。
      */
    ProjectId?: number;
    /**
      * 证书类型，目前仅支持类型2。2 = TrustAsia TLS RSA CA。
      */
    PackageType?: string;
    /**
      * 邮箱。
      */
    ContactEmail?: string;
    /**
      * 手机。
      */
    ContactPhone?: string;
    /**
      * 有效期，默认12个月，目前仅支持12个月。
      */
    ValidityPeriod?: string;
    /**
      * 加密算法，仅支持 RSA。
      */
    CsrEncryptAlgo?: string;
    /**
      * 密钥对参数，仅支持2048。
      */
    CsrKeyParameter?: string;
    /**
      * CSR 的加密密码。
      */
    CsrKeyPassword?: string;
    /**
      * 备注名称。
      */
    Alias?: string;
    /**
      * 原证书 ID，用于重新申请。
      */
    OldCertificateId?: string;
    /**
      * 权益包ID，用于免费证书扩容包使用
      */
    PackageId?: string;
    /**
      * 签发后是否删除自动域名验证记录， 默认为否；仅域名为DNS_AUTO验证类型支持传参
      */
    DeleteDnsAutoRecord?: boolean;
}
/**
 * ReplaceCertificate请求参数结构体
 */
export interface ReplaceCertificateRequest {
    /**
      * 证书 ID。
      */
    CertificateId: string;
    /**
      * 验证类型：DNS_AUTO = 自动DNS验证（仅支持在腾讯云解析且解析状态正常的域名使用该验证类型），DNS = 手动DNS验证，FILE = 文件验证。
      */
    ValidType: string;
    /**
      * 类型，默认 Original。可选项：Original = 原证书 CSR，Upload = 手动上传，Online = 在线生成。
      */
    CsrType?: string;
    /**
      * CSR 内容。
      */
    CsrContent?: string;
    /**
      * KEY 密码。
      */
    CsrkeyPassword?: string;
    /**
      * 重颁发原因。
      */
    Reason?: string;
}
/**
 * UploadRevokeLetter返回参数结构体
 */
export interface UploadRevokeLetterResponse {
    /**
      * 证书 ID。
      */
    CertificateId: string;
    /**
      * 是否成功。
      */
    IsSuccess: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDeployedResources请求参数结构体
 */
export interface DescribeDeployedResourcesRequest {
    /**
      * 证书ID
      */
    CertificateIds: Array<string>;
    /**
      * 资源类型:clb,cdn,live,waf,antiddos
      */
    ResourceType: string;
}
/**
 * CreateCertificate返回参数结构体
 */
export interface CreateCertificateResponse {
    /**
      * 证书ID列表
      */
    CertificateIds: Array<string>;
    /**
      * 订单号列表
      */
    DealIds: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UploadRevokeLetter请求参数结构体
 */
export interface UploadRevokeLetterRequest {
    /**
      * 证书 ID。
      */
    CertificateId: string;
    /**
      * base64编码后的证书确认函文件，格式应为jpg、jpeg、png、pdf，大小应在1kb与1.4M之间。
      */
    RevokeLetter: string;
}
/**
 * DeleteCertificate返回参数结构体
 */
export interface DeleteCertificateResponse {
    /**
      * 删除结果（true：删除成功，false：删除失败）
      */
    DeleteResult?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RevokeCertificate返回参数结构体
 */
export interface RevokeCertificateResponse {
    /**
      * 吊销证书域名验证信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RevokeDomainValidateAuths?: Array<RevokeDomainValidateAuths>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 资源详情
 */
export interface DeployedResources {
    /**
      * 证书ID
      */
    CertificateId: string;
    /**
      * 数量
      */
    Count: number;
    /**
      * 资源标识:clb,cdn,live,waf,antiddos
      */
    Type: string;
    /**
      * 不建议使用。字段返回和Resources相同。本字段后续只返回null
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceIds: Array<string>;
    /**
      * 关联资源ID或关联域名。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Resources: Array<string>;
}
/**
 * DescribeCertificateDetail返回参数结构体
 */
export interface DescribeCertificateDetailResponse {
    /**
      * 用户 UIN。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OwnerUin?: string;
    /**
      * 项目 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectId?: string;
    /**
      * 证书来源：trustasia = 亚洲诚信，upload = 用户上传。
注意：此字段可能返回 null，表示取不到有效值。
      */
    From?: string;
    /**
      * 证书类型：CA = 客户端证书，SVR = 服务器证书。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertificateType?: string;
    /**
      * 证书套餐类型：null = 用户上传证书（没有套餐类型），1 = GeoTrust DV SSL CA - G3， 2 = TrustAsia TLS RSA CA， 3 = SecureSite 增强型企业版（EV Pro）， 4 = SecureSite 增强型（EV）， 5 = SecureSite 企业型专业版（OV Pro）， 6 = SecureSite 企业型（OV）， 7 = SecureSite 企业型（OV）通配符， 8 = Geotrust 增强型（EV）， 9 = Geotrust 企业型（OV）， 10 = Geotrust 企业型（OV）通配符， 11 = TrustAsia 域名型多域名 SSL 证书， 12 = TrustAsia 域名型（DV）通配符， 13 = TrustAsia 企业型通配符（OV）SSL 证书（D3）， 14 = TrustAsia 企业型（OV）SSL 证书（D3）， 15 = TrustAsia 企业型多域名 （OV）SSL 证书（D3）， 16 = TrustAsia 增强型 （EV）SSL 证书（D3）， 17 = TrustAsia 增强型多域名（EV）SSL 证书（D3）， 18 = GlobalSign 企业型（OV）SSL 证书， 19 = GlobalSign 企业型通配符 （OV）SSL 证书， 20 = GlobalSign 增强型 （EV）SSL 证书， 21 = TrustAsia 企业型通配符多域名（OV）SSL 证书（D3）， 22 = GlobalSign 企业型多域名（OV）SSL 证书， 23 = GlobalSign 企业型通配符多域名（OV）SSL 证书， 24 = GlobalSign 增强型多域名（EV）SSL 证书，25 = Wotrus 域名型证书，26 = Wotrus 域名型多域名证书，27 = Wotrus 域名型通配符证书，28 = Wotrus 企业型证书，29 = Wotrus 企业型多域名证书，30 = Wotrus 企业型通配符证书，31 = Wotrus 增强型证书，32 = Wotrus 增强型多域名证书，33 = DNSPod 国密域名型证书，34 = DNSPod 国密域名型多域名证书，35 = DNSPod 国密域名型通配符证书，37 = DNSPod 国密企业型证书，38 = DNSPod 国密企业型多域名证书，39 = DNSPod 国密企业型通配符证书，40 = DNSPod 国密增强型证书，41 = DNSPod 国密增强型多域名证书，42 = TrustAsia 域名型通配符多域名证书。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackageType?: string;
    /**
      * 颁发者。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProductZhName?: string;
    /**
      * 域名。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Domain?: string;
    /**
      * 备注名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Alias?: string;
    /**
      * 证书状态：0 = 审核中，1 = 已通过，2 = 审核失败，3 = 已过期，4 = 已添加DNS记录，5 = 企业证书，待提交，6 = 订单取消中，7 = 已取消，8 = 已提交资料， 待上传确认函，9 = 证书吊销中，10 = 已吊销，11 = 重颁发中，12 = 待上传吊销确认函，13 = 免费证书待提交资料。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status?: number;
    /**
      * 状态信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    StatusMsg?: string;
    /**
      * 验证类型：DNS_AUTO = 自动DNS验证，DNS = 手动DNS验证，FILE = 文件验证，EMAIL = 邮件验证。
注意：此字段可能返回 null，表示取不到有效值。
      */
    VerifyType?: string;
    /**
      * 漏洞扫描状态。
注意：此字段可能返回 null，表示取不到有效值。
      */
    VulnerabilityStatus?: string;
    /**
      * 证书生效时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertBeginTime?: string;
    /**
      * 证书失效时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertEndTime?: string;
    /**
      * 证书有效期：单位（月）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ValidityPeriod?: string;
    /**
      * 申请时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InsertTime?: string;
    /**
      * 订单 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrderId?: string;
    /**
      * 证书扩展信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertificateExtra?: CertificateExtra;
    /**
      * 证书私钥
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertificatePrivateKey?: string;
    /**
      * 证书公钥（即证书内容）
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertificatePublicKey?: string;
    /**
      * DV 认证信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DvAuthDetail?: DvAuthDetail;
    /**
      * 漏洞扫描评估报告。
注意：此字段可能返回 null，表示取不到有效值。
      */
    VulnerabilityReport?: string;
    /**
      * 证书 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertificateId?: string;
    /**
      * 证书类型名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TypeName?: string;
    /**
      * 状态描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    StatusName?: string;
    /**
      * 证书包含的多个域名（不包含主域名，主域名使用Domain字段）
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubjectAltName?: Array<string>;
    /**
      * 是否为付费证书。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsVip?: boolean;
    /**
      * 是否为泛域名证书。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsWildcard?: boolean;
    /**
      * 是否为 DV 版证书。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsDv?: boolean;
    /**
      * 是否启用了漏洞扫描功能。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsVulnerability?: boolean;
    /**
      * 提交的资料信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubmittedData?: SubmittedData;
    /**
      * 是否可续费。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RenewAble?: boolean;
    /**
      * 是否可部署。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Deployable?: boolean;
    /**
      * 关联标签列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags?: Array<Tags>;
    /**
      * 根证书。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RootCert?: RootCertificates;
    /**
      * 国密加密证书
注意：此字段可能返回 null，表示取不到有效值。
      */
    EncryptCert?: string;
    /**
      * 国密加密私钥
注意：此字段可能返回 null，表示取不到有效值。
      */
    EncryptPrivateKey?: string;
    /**
      * 签名证书 SHA1指纹
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertFingerprint?: string;
    /**
      * 加密证书 SHA1指纹 （国密证书特有）
注意：此字段可能返回 null，表示取不到有效值。
      */
    EncryptCertFingerprint?: string;
    /**
      * 证书算法
注意：此字段可能返回 null，表示取不到有效值。
      */
    EncryptAlgorithm?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CheckCertificateChain返回参数结构体
 */
export interface CheckCertificateChainResponse {
    /**
      * true为通过检查，false为未通过检查。
      */
    IsValid?: boolean;
    /**
      * true为可信CA，false为不可信CA。
      */
    IsTrustedCA?: boolean;
    /**
      * 包含证书链中每一段证书的通用名称。
      */
    Chains?: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyCertificateProject请求参数结构体
 */
export interface ModifyCertificateProjectRequest {
    /**
      * 需要修改所属项目的证书 ID 集合，最多100个证书。
      */
    CertificateIdList: Array<string>;
    /**
      * 项目 ID。
      */
    ProjectId: number;
}
/**
 * 云资源配置详情
 */
export interface CertHostingInfo {
    /**
      * 证书ID
      */
    CertId: string;
    /**
      * 已替换的新证书ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    RenewCertId: string;
    /**
      * 云资源托管 ，CDN或CLB：部分开启，CDN,CLB：已开启，null：未开启托管
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceType: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
}
/**
 * 返回参数键为 DvAuths 的内容。
 */
export interface DvAuths {
    /**
      * DV 认证密钥。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DvAuthKey: string;
    /**
      * DV 认证值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DvAuthValue: string;
    /**
      * DV 认证值域名。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DvAuthDomain: string;
    /**
      * DV 认证值路径。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DvAuthPath: string;
    /**
      * DV 认证子域名，
注意：此字段可能返回 null，表示取不到有效值。
      */
    DvAuthSubDomain: string;
    /**
      * DV 认证类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DvAuthVerifyType: string;
}
/**
 * HostCertificate请求参数结构体
 */
export interface HostCertificateRequest {
    /**
      * 证书ID
      */
    CertificateId: string;
    /**
      * 资源类型：目前仅限于CLB,CDN
      */
    ResourceType?: Array<string>;
}
/**
 * DescribeCertificate请求参数结构体
 */
export interface DescribeCertificateRequest {
    /**
      * 证书 ID。
      */
    CertificateId: string;
}
/**
 * DescribeManagerDetail请求参数结构体
 */
export interface DescribeManagerDetailRequest {
    /**
      * 管理人ID
      */
    ManagerId: number;
    /**
      * 分页每页数量
      */
    Limit?: number;
    /**
      * 分页偏移量
      */
    Offset?: number;
}
/**
 * DescribeCompanies返回参数结构体
 */
export interface DescribeCompaniesResponse {
    /**
      * 公司列表
      */
    Companies: Array<CompanyInfo>;
    /**
      * 公司总数
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 获取证书列表（DescribeCertificate）返回参数键为 DvAuthDetail 的内容。
 */
export interface DvAuthDetail {
    /**
      * DV 认证密钥。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DvAuthKey?: string;
    /**
      * DV 认证值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DvAuthValue?: string;
    /**
      * DV 认证值域名。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DvAuthDomain: string;
    /**
      * DV 认证值路径。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DvAuthPath: string;
    /**
      * DV 认证子域名。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DvAuthKeySubDomain: string;
    /**
      * DV 认证信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DvAuths: Array<DvAuths>;
}
/**
 * 获取证书列表（DescribeCertificates）返回参数键为 Certificates 下，key为 ProjectInfo 的内容。
 */
export interface ProjectInfo {
    /**
      * 项目名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectName: string;
    /**
      * 项目创建用户 UIN。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectCreatorUin: number;
    /**
      * 项目创建时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectCreateTime: string;
    /**
      * 项目信息简述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectResume: string;
    /**
      * 用户 UIN。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OwnerUin: number;
    /**
      * 项目 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectId: string;
}
/**
 * ModifyCertificatesExpiringNotificationSwitch请求参数结构体
 */
export interface ModifyCertificatesExpiringNotificationSwitchRequest {
    /**
      * 证书ID列表。最多50个
      */
    CertificateIds: Array<string>;
    /**
      * 0:不忽略通知。1:忽略通知
      */
    SwitchStatus: number;
}
/**
 * DescribeDeployedResources返回参数结构体
 */
export interface DescribeDeployedResourcesResponse {
    /**
      * 资源详情
      */
    DeployedResources?: Array<DeployedResources>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCertificateOperateLogs请求参数结构体
 */
export interface DescribeCertificateOperateLogsRequest {
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 请求日志数量，默认为20。
      */
    Limit?: number;
    /**
      * 开始时间，默认15天前。
      */
    StartTime?: string;
    /**
      * 结束时间，默认现在时间。
      */
    EndTime?: string;
}
/**
 * CancelCertificateOrder返回参数结构体
 */
export interface CancelCertificateOrderResponse {
    /**
      * 取消订单成功的证书 ID。
      */
    CertificateId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCertificate请求参数结构体
 */
export interface CreateCertificateRequest {
    /**
      * 证书商品ID，3 = SecureSite 增强型企业版（EV Pro）， 4 = SecureSite 增强型（EV）， 5 = SecureSite 企业型专业版（OV Pro）， 6 = SecureSite 企业型（OV）， 7 = SecureSite 企业型（OV）通配符， 8 = Geotrust 增强型（EV）， 9 = Geotrust 企业型（OV）， 10 = Geotrust 企业型（OV）通配符， 11 = TrustAsia 域名型多域名 SSL 证书， 12 = TrustAsia 域名型（DV）通配符， 13 = TrustAsia 企业型通配符（OV）SSL 证书（D3）， 14 = TrustAsia 企业型（OV）SSL 证书（D3）， 15 = TrustAsia 企业型多域名 （OV）SSL 证书（D3）， 16 = TrustAsia 增强型 （EV）SSL 证书（D3）， 17 = TrustAsia 增强型多域名（EV）SSL 证书（D3）， 18 = GlobalSign 企业型（OV）SSL 证书， 19 = GlobalSign 企业型通配符 （OV）SSL 证书， 20 = GlobalSign 增强型 （EV）SSL 证书， 21 = TrustAsia 企业型通配符多域名（OV）SSL 证书（D3）， 22 = GlobalSign 企业型多域名（OV）SSL 证书， 23 = GlobalSign 企业型通配符多域名（OV）SSL 证书， 24 = GlobalSign 增强型多域名（EV）SSL 证书，25 = Wotrus 域名型证书，26 = Wotrus 域名型多域名证书，27 = Wotrus 域名型通配符证书，28 = Wotrus 企业型证书，29 = Wotrus 企业型多域名证书，30 = Wotrus 企业型通配符证书，31 = Wotrus 增强型证书，32 = Wotrus 增强型多域名证书，33 = DNSPod 国密域名型证书，34 = DNSPod 国密域名型多域名证书，35 = DNSPod 国密域名型通配符证书，37 = DNSPod 国密企业型证书，38 = DNSPod 国密企业型多域名证书，39 = DNSPod 国密企业型通配符证书，40 = DNSPod 国密增强型证书，41 = DNSPod 国密增强型多域名证书，42 = TrustAsia 域名型通配符多域名证书。
      */
    ProductId: number;
    /**
      * 证书包含的域名数量
      */
    DomainNum: number;
    /**
      * 证书年限，当前只支持 1 年证书的购买
      */
    TimeSpan: number;
}
/**
 * DescribeCertificates返回参数结构体
 */
export interface DescribeCertificatesResponse {
    /**
      * 总数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount?: number;
    /**
      * 列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Certificates?: Array<Certificates>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CommitCertificateInformation返回参数结构体
 */
export interface CommitCertificateInformationResponse {
    /**
      * CA机构侧订单号。
      */
    OrderId?: string;
    /**
      * 证书状态：0 = 审核中，1 = 已通过，2 = 审核失败，3 = 已过期，4 = 已添加DNS记录，5 = 企业证书，待提交，6 = 订单取消中，7 = 已取消，8 = 已提交资料， 待上传确认函，9 = 证书吊销中，10 = 已吊销，11 = 重颁发中，12 = 待上传吊销确认函，13 = 免费证书待提交资料。
      */
    Status?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UploadConfirmLetter返回参数结构体
 */
export interface UploadConfirmLetterResponse {
    /**
      * 证书ID
      */
    CertificateId?: string;
    /**
      * 是否成功
      */
    IsSuccess?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteManager返回参数结构体
 */
export interface DeleteManagerResponse {
    /**
      * 管理人ID
      */
    ManagerId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * VerifyManager请求参数结构体
 */
export interface VerifyManagerRequest {
    /**
      * 管理人ID
      */
    ManagerId: number;
}
/**
 * RevokeCertificate请求参数结构体
 */
export interface RevokeCertificateRequest {
    /**
      * 证书 ID。
      */
    CertificateId: string;
    /**
      * 吊销证书原因。
      */
    Reason?: string;
}
/**
 * 返回参数键为 RevokeDomainValidateAuths 的内容。
 */
export interface RevokeDomainValidateAuths {
    /**
      * DV 认证值路径。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DomainValidateAuthPath: string;
    /**
      * DV 认证 KEY。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DomainValidateAuthKey: string;
    /**
      * DV 认证值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DomainValidateAuthValue: string;
    /**
      * DV 认证域名。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DomainValidateAuthDomain: string;
}
/**
 * DescribePackages请求参数结构体
 */
export interface DescribePackagesRequest {
    /**
      * 偏移量，默认0。
      */
    Offset?: number;
    /**
      * 限制数目，默认20。
      */
    Limit?: number;
    /**
      * 按状态筛选。
      */
    Status?: string;
    /**
      * 按过期时间升序或降序排列。
      */
    ExpireTime?: string;
    /**
      * 按权益包ID搜索。
      */
    PackageId?: string;
    /**
      * 按权益包类型搜索。
      */
    Type?: string;
    /**
      * 子产品编号
      */
    Pid?: number;
}
/**
 * CheckCertificateChain请求参数结构体
 */
export interface CheckCertificateChainRequest {
    /**
      * 待检查的证书链
      */
    CertificateChain: string;
}
/**
 * ModifyCertificateAlias返回参数结构体
 */
export interface ModifyCertificateAliasResponse {
    /**
      * 修改成功的证书 ID。
      */
    CertificateId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UploadConfirmLetter请求参数结构体
 */
export interface UploadConfirmLetterRequest {
    /**
      * 证书ID
      */
    CertificateId: string;
    /**
      * base64编码后的证书确认函文件，格式应为jpg、jpeg、png、pdf，大小应在1kb与1.4M之间。
      */
    ConfirmLetter: string;
}
/**
 * DescribeCompanies请求参数结构体
 */
export interface DescribeCompaniesRequest {
    /**
      * 分页偏移量
      */
    Offset?: number;
    /**
      * 分页每页限制数
      */
    Limit?: number;
    /**
      * 公司ID
      */
    CompanyId?: number;
}
/**
 * 管理人的四种审核状态
 */
export declare type ManagerStatusInfo = null;
/**
 * SubmitCertificateInformation请求参数结构体
 */
export interface SubmitCertificateInformationRequest {
    /**
      * 证书 ID。
      */
    CertificateId: string;
    /**
      * CSR 生成方式：online = 在线生成, parse = 手动上传。
      */
    CsrType?: string;
    /**
      * 上传的 CSR 内容。
      */
    CsrContent?: string;
    /**
      * 绑定证书的域名。
      */
    CertificateDomain?: string;
    /**
      * 上传的域名数组（多域名证书可以上传）。
      */
    DomainList?: Array<string>;
    /**
      * 私钥密码（非必填）。
      */
    KeyPassword?: string;
    /**
      * 公司名称。
      */
    OrganizationName?: string;
    /**
      * 部门名称。
      */
    OrganizationDivision?: string;
    /**
      * 公司详细地址。
      */
    OrganizationAddress?: string;
    /**
      * 国家名称，如中国：CN 。
      */
    OrganizationCountry?: string;
    /**
      * 公司所在城市。
      */
    OrganizationCity?: string;
    /**
      * 公司所在省份。
      */
    OrganizationRegion?: string;
    /**
      * 公司邮编。
      */
    PostalCode?: string;
    /**
      * 公司座机区号。
      */
    PhoneAreaCode?: string;
    /**
      * 公司座机号码。
      */
    PhoneNumber?: string;
    /**
      * 证书验证方式。验证类型：DNS_AUTO = 自动DNS验证（仅支持在腾讯云解析且解析状态正常的域名使用该验证类型），DNS = 手动DNS验证，FILE = 文件验证。
      */
    VerifyType?: string;
    /**
      * 管理人名。
      */
    AdminFirstName?: string;
    /**
      * 管理人姓。
      */
    AdminLastName?: string;
    /**
      * 管理人手机号码。
      */
    AdminPhoneNum?: string;
    /**
      * 管理人邮箱地址。
      */
    AdminEmail?: string;
    /**
      * 管理人职位。
      */
    AdminPosition?: string;
    /**
      * 联系人名。
      */
    ContactFirstName?: string;
    /**
      * 联系人姓。
      */
    ContactLastName?: string;
    /**
      * 联系人邮箱地址。
      */
    ContactEmail?: string;
    /**
      * 联系人手机号码。
      */
    ContactNumber?: string;
    /**
      * 联系人职位。
      */
    ContactPosition?: string;
}
/**
 * DescribeCertificates请求参数结构体
 */
export interface DescribeCertificatesRequest {
    /**
      * 分页偏移量，从0开始。
      */
    Offset?: number;
    /**
      * 每页数量，默认20。最大1000
      */
    Limit?: number;
    /**
      * 搜索关键词，可搜索证书 ID、备注名称、域名。例如： a8xHcaIs。
      */
    SearchKey?: string;
    /**
      * 证书类型：CA = 客户端证书，SVR = 服务器证书。
      */
    CertificateType?: string;
    /**
      * 项目 ID。
      */
    ProjectId?: number;
    /**
      * 按到期时间排序：DESC = 降序， ASC = 升序。
      */
    ExpirationSort?: string;
    /**
      * 证书状态：0 = 审核中，1 = 已通过，2 = 审核失败，3 = 已过期，4 = 已添加DNS记录，5 = 企业证书，待提交，6 = 订单取消中，7 = 已取消，8 = 已提交资料， 待上传确认函，9 = 证书吊销中，10 = 已吊销，11 = 重颁发中，12 = 待上传吊销确认函，13 = 免费证书待提交资料。
      */
    CertificateStatus?: Array<number>;
    /**
      * 是否可部署，可选值：1 = 可部署，0 =  不可部署。
      */
    Deployable?: number;
    /**
      * 是否筛选上传托管的 1筛选，0不筛选
      */
    Upload?: number;
    /**
      * 是否筛选可续期证书 1筛选 0不筛选
      */
    Renew?: number;
    /**
      * 筛选来源， upload：上传证书， buy：腾讯云证书， 不传默认全部
      */
    FilterSource?: string;
    /**
      * 是否筛选国密证书。1:筛选  0:不筛选
      */
    IsSM?: number;
    /**
      * 筛选证书是否即将过期，传1是筛选，0不筛选
      */
    FilterExpiring?: number;
}
/**
 * DescribePackages返回参数结构体
 */
export interface DescribePackagesResponse {
    /**
      * 权益包列表。
      */
    Packages: Array<PackageInfo>;
    /**
      * 总条数。
      */
    TotalCount: number;
    /**
      * 权益点总余额。
      */
    TotalBalance: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeManagers请求参数结构体
 */
export interface DescribeManagersRequest {
    /**
      * 公司ID
      */
    CompanyId: number;
    /**
      * 分页偏移量
      */
    Offset?: number;
    /**
      * 分页每页数量
      */
    Limit?: number;
    /**
      * 管理人姓名（将废弃），请使用SearchKey
      */
    ManagerName?: string;
    /**
      * 模糊查询管理人邮箱（将废弃），请使用SearchKey
      */
    ManagerMail?: string;
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
    Status?: string;
    /**
      * 管理人姓/管理人名/邮箱/部门精准匹配
      */
    SearchKey?: string;
}
/**
 * CompleteCertificate返回参数结构体
 */
export interface CompleteCertificateResponse {
    /**
      * 证书ID
      */
    CertificateId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SubmitCertificateInformation返回参数结构体
 */
export interface SubmitCertificateInformationResponse {
    /**
      * 证书 ID。
      */
    CertificateId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeManagerDetail返回参数结构体
 */
export interface DescribeManagerDetailResponse {
    /**
      * 状态: audit: 审核中 ok: 审核通过 invalid: 失效 expiring: 即将过期 expired: 已过期
      */
    Status: string;
    /**
      * 管理人姓名
      */
    ManagerFirstName: string;
    /**
      * 管理人邮箱
      */
    ManagerMail: string;
    /**
      * 联系人姓名
      */
    ContactFirstName: string;
    /**
      * 管理人姓名
      */
    ManagerLastName: string;
    /**
      * 联系人职位
      */
    ContactPosition: string;
    /**
      * 管理人职位
      */
    ManagerPosition: string;
    /**
      * 核验通过时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    VerifyTime: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 核验过期时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExpireTime: string;
    /**
      * 联系人姓名
      */
    ContactLastName: string;
    /**
      * 管理人电话
      */
    ManagerPhone: string;
    /**
      * 联系人电话
      */
    ContactPhone: string;
    /**
      * 联系人邮箱
      */
    ContactMail: string;
    /**
      * 管理人所属部门
      */
    ManagerDepartment: string;
    /**
      * 管理人所属公司信息
      */
    CompanyInfo: CompanyInfo;
    /**
      * 管理人公司ID
      */
    CompanyId: number;
    /**
      * 管理人ID
      */
    ManagerId: number;
    /**
      * 审核状态详细信息
      */
    StatusInfo: Array<ManagerStatusInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 预审核信息列表
 */
export interface PreAuditInfo {
    /**
      * 证书总年限
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalPeriod: number;
    /**
      * 证书当前年限
注意：此字段可能返回 null，表示取不到有效值。
      */
    NowPeriod: number;
    /**
      * 证书预审核管理人ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ManagerId: string;
}
/**
 * 获取证书列表（DescribeCertificate）返回参数键为 SubmittedData 的内容。
 */
export interface SubmittedData {
    /**
      * CSR 类型，（online = 在线生成CSR，parse = 粘贴 CSR）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CsrType?: string;
    /**
      * CSR 内容。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CsrContent?: string;
    /**
      * 域名信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertificateDomain?: string;
    /**
      * DNS 信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DomainList?: Array<string>;
    /**
      * 私钥密码。
注意：此字段可能返回 null，表示取不到有效值。
      */
    KeyPassword?: string;
    /**
      * 企业或单位名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrganizationName?: string;
    /**
      * 部门。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrganizationDivision?: string;
    /**
      * 地址。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrganizationAddress?: string;
    /**
      * 国家。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrganizationCountry?: string;
    /**
      * 市。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrganizationCity?: string;
    /**
      * 省。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrganizationRegion?: string;
    /**
      * 邮政编码。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PostalCode?: string;
    /**
      * 座机区号。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PhoneAreaCode?: string;
    /**
      * 座机号码。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PhoneNumber?: string;
    /**
      * 管理员名。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AdminFirstName?: string;
    /**
      * 管理员姓。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AdminLastName?: string;
    /**
      * 管理员电话号码。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AdminPhoneNum?: string;
    /**
      * 管理员邮箱地址。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AdminEmail?: string;
    /**
      * 管理员职位。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AdminPosition?: string;
    /**
      * 联系人名。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContactFirstName?: string;
    /**
      * 联系人姓。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContactLastName?: string;
    /**
      * 联系人电话号码。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContactNumber?: string;
    /**
      * 联系人邮箱地址，
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContactEmail?: string;
    /**
      * 联系人职位。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContactPosition?: string;
    /**
      * 验证类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
    VerifyType?: string;
}
