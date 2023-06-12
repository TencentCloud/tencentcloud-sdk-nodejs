/**
 * DeleteCert请求参数结构体
 */
export interface DeleteCertRequest {
    /**
     * 证书 ID，即通过 GetList 拿到的证书列表的 ID 字段。
     */
    Id: string;
    /**
     * 模块名称，应填 ssl。
     */
    ModuleType: string;
}
/**
 * UploadCert返回参数结构体
 */
export interface UploadCertResponse {
    /**
     * 证书ID。
     */
    Id?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteCert返回参数结构体
 */
export interface DeleteCertResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCertList返回参数结构体
 */
export interface DescribeCertListResponse {
    /**
     * 总数量。
     */
    TotalCount?: number;
    /**
     * 列表。
     */
    CertificateSet?: Array<SSLCertificate>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UploadCert请求参数结构体
 */
export interface UploadCertRequest {
    /**
     * 证书内容。
     */
    Cert: string;
    /**
     * 证书类型（目前支持：CA 为客户端证书，SVR 为服务器证书）。
     */
    CertType: string;
    /**
     * 项目ID，详见用户指南的 [项目与标签](https://cloud.tencent.com/document/product/598/32738)。
     */
    ProjectId: string;
    /**
     * 模块名称，应填 ssl。
     */
    ModuleType: string;
    /**
     * 证书私钥，certType=SVR 时必填。
     */
    Key?: string;
    /**
     * 证书备注。
     */
    Alias?: string;
}
/**
 * 获取证书列表（SSLCertificate）返回参数键为 CertificateSet 的内容。
 */
export interface SSLCertificate {
    /**
     * 所属账户
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerUin: string;
    /**
     * 项目ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId: string;
    /**
     * 证书来源：trustasia = 亚洲诚信， upload = 用户上传
  注意：此字段可能返回 null，表示取不到有效值。
     */
    From: string;
    /**
     * 证书类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type: string;
    /**
     * 证书类型（目前支持：CA = 客户端证书，SVR = 服务器证书）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CertType: string;
    /**
     * 证书办法者名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductZhName: string;
    /**
     * 主域名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Domain: string;
    /**
     * 别名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Alias: string;
    /**
     * 状态值 0：审核中，1：已通过，2：审核失败，3：已过期，4：已添加云解析记录，5：OV/EV 证书，待提交资料，6：订单取消中，7：已取消，8：已提交资料， 待上传确认函
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status: number;
    /**
     * 漏洞扫描状态：INACTIVE = 未开启，ACTIVE = 已开启
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VulnerabilityStatus: string;
    /**
     * 状态信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StatusMsg: string;
    /**
     * 验证类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VerifyType: string;
    /**
     * 证书生效时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CertBeginTime: string;
    /**
     * 证书过期时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CertEndTime: string;
    /**
     * 证书过期时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ValidityPeriod: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InsertTime: string;
    /**
     * 项目信息，ProjectId：项目ID，OwnerUin：项目所属的 uin（默认项目为0），Name：项目名称，CreatorUin：创建项目的 uin，CreateTime：项目创建时间，Info：项目说明
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectInfo: SSLProjectInfo;
    /**
     * 证书ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id: string;
    /**
     * 证书包含的多个域名（包含主域名）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubjectAltName: Array<string>;
    /**
     * 证书类型名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TypeName: string;
    /**
     * 状态名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StatusName: string;
    /**
     * 是否为 VIP 客户
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsVip: boolean;
    /**
     * 是否我 DV 版证书
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsDv: boolean;
    /**
     * 是否为泛域名证书
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsWildcard: boolean;
    /**
     * 是否启用了漏洞扫描功能
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsVulnerability: boolean;
    /**
     * 证书
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Cert: string;
}
/**
 * DescribeCertList请求参数结构体
 */
export interface DescribeCertListRequest {
    /**
     * 模块名称，应填 ssl。
     */
    ModuleType: string;
    /**
     * 页数，默认第一页。
     */
    Offset?: number;
    /**
     * 每页条数，默认每页20条。
     */
    Limit?: number;
    /**
     * 搜索关键字。
     */
    SearchKey?: string;
    /**
     * 证书类型（目前支持:CA=客户端证书,SVR=服务器证书）。
     */
    CertType?: string;
    /**
     * 证书ID。
     */
    Id?: string;
    /**
     * 是否同时获取证书内容。
     */
    WithCert?: string;
    /**
     * 如传，则只返回可以给该域名使用的证书。
     */
    AltDomain?: string;
}
/**
 * 获取证书列表接口（SSLProjectInfo）出参键为CertificateSet下的元素ProjectIno详情
 */
export interface SSLProjectInfo {
    /**
     * 项目ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProjectId: string;
    /**
     * 项目所属的 uin（默认项目为0）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OwnerUin: number;
    /**
     * 项目名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name: string;
    /**
     * 创建项目的 uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreatorUin: number;
    /**
     * 项目创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime: string;
    /**
     * 项目说明
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Info: string;
}
