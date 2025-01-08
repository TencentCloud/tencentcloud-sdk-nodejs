/**
 * 表示商品 SKU 的单个售卖参数
 */
export interface SaleParam {
    /**
     * 售卖参数标识
     */
    ParamKey: string;
    /**
     * 售卖参数的展示名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParamKeyName: string;
    /**
     * 售卖参数值，当ParamType=Quant时，该值有可能为Null
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParamValue?: string;
    /**
     * 售卖参数值的展示名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParamValueName?: string;
    /**
     * 售卖参数的类型，目前支持枚举类Enum/数量类Quant
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParamType?: string;
}
/**
 * VerifyLicense请求参数结构体
 */
export declare type VerifyLicenseRequest = null;
/**
 * VerifyLicense返回参数结构体
 */
export interface VerifyLicenseResponse {
    /**
     * 软件的详细授权信息。
     */
    License?: License;
    /**
     * 当前请求服务端的时间戳，格式为RFC3339
     */
    Timestamp?: string;
    /**
     * 对License字段对应的json数据的签名
     */
    Signature?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 表示应用实例的软件授权，包含颁发信息、激活信息等内容。
 */
export interface License {
    /**
     * License ID
     */
    LicenseId?: string;
    /**
     * 软件授权模式。<table><thead><tr><th>枚举值</th><th>说明</th></tr></thead><tbody><tr><td>Permanent</td><td>永久授权。该授权不受有效期限制。</td></tr><tr><td>Subscription</td><td>订阅授权。授权如果过了有效期，则会进入过期状态。</td></tr><tr><td>Accept</td><td>验收期授权。用于需要验收的软件处于验收期间的授权，授权如果过了验收有效期，则会进入过期状态。</td></tr></tbody></table>
     */
    LicenseMode?: string;
    /**
     * 软件的授权状态。<table><thead><tr><th>枚举值</th><th>说明</th></tr></thead><tbody><tr><td>Issued</td><td>已颁发，等待激活。一般来说，如果软件已经在运行，不会出现该状态。</td></tr><tr><td>Active</td><td>授权在有效期内，这是软件运行期间最常见的状态。</td></tr><tr><td>Expired</td><td>授权已过期。订阅类的软件授权有有效期，如果服务器时间已晚于有效期，则会进入过期状态。</td></tr><tr><td>Isolated</td><td>授权已隔离。有截止日期的授权，当用户授权到期时，先进入此状态，用户可以去续费，超过7天不续费则授权进入Destroyed状态。</td></tr><tr><td>Destroyed</td><td>授权已失效/销毁。用户如果退货软件，则授权会自动失效。</td></tr></tbody></table>
     */
    LicenseStatus?: string;
    /**
     * 软件供应方 ID。
     */
    ProviderId?: number;
    /**
     * 软件包 ID。
     */
    SoftwarePackageId?: string;
    /**
     * 软件包版本。
     */
    SoftwarePackageVersion?: string;
    /**
     * 被授权的用户 UIN。
     */
    AuthorizedUserUin?: string;
    /**
     * 被授权的应用实例 ID。
     */
    AuthorizedCloudappId?: string;
    /**
     * 被授权的角色 ID。
     */
    AuthorizedCloudappRoleId?: string;
    /**
     * 被授权的软件规格，具体字段请参考结构SaleParam
     */
    AuthorizedSpecification?: Array<SaleParam>;
    /**
     * 被授权的软件的计费模式。<table><thead><tr><th>枚举值</th><th>说明</th></tr></thead><tbody><tr><td>1</td><td>线上计费，软件的授权从腾讯云线上购买，支持续费、退款等操作。</td></tr><tr><td>2</td><td>线下计费，软件的授权线下签订合同购买，定向客户交付，无法从线上续费和退款。</td></tr><tr><td>4</td><td>免费</td></tr></tbody></table>
     */
    BillingMode?: number;
    /**
     * 授权时长（单位由LifeSpanUnit确定，枚举值有Y年/M月/D日三种）
     */
    LifeSpan?: number;
    /**
     * 授权颁发时间。
     */
    IssueDate?: string;
    /**
     * 授权激活时间，如从未激活则返回 null。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActivationDate?: string;
    /**
     * 授权过期时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExpirationDate?: string;
    /**
     * 授权时长单位，枚举值有Y年/M月/D日三种
     */
    LifeSpanUnit?: string;
    /**
     * 授权的类型：Standard正式版/Development开发版/Trial体验版
     */
    LicenseType?: string;
}
