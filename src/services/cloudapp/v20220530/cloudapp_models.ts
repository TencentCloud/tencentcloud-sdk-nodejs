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
 * 表示商品 SKU 的单个售卖参数
 */
export interface SaleParam {
  /**
   * 售卖参数标识
   */
  ParamKey: string
  /**
   * 售卖参数的展示名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamKeyName: string
  /**
   * 参数 Id
   */
  ParamId?: string
  /**
   * 参数值 Id
   */
  ParamValueId?: string
  /**
   * 售卖参数值，当ParamType=Quant时，该值有可能为Null
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamValue?: string
  /**
   * 售卖参数值的展示名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamValueName?: string
  /**
   * 售卖参数的类型，目前支持枚举类Enum/数量类Quant
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParamType?: string
  /**
   * 模块ID
   */
  ModuleId?: string
  /**
   * 模块key
   */
  ModuleKey?: string
  /**
   * 模块名称
   */
  ModuleName?: string
}

/**
 * DescribeLicense返回参数结构体
 */
export interface DescribeLicenseResponse {
  /**
   * 针对上面raw的签名
   */
  Token?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VerifyLicense请求参数结构体
 */
export type VerifyLicenseRequest = null

/**
 * 表示应用实例的软件授权，包含颁发信息、激活信息等内容。
 */
export interface License {
  /**
   * <p>License ID</p>
   */
  LicenseId?: string
  /**
   * <p>软件授权模式。<table><thead><tr><th>枚举值</th><th>说明</th></tr></thead><tbody><tr><td>Permanent</td><td>永久授权。该授权不受有效期限制。</td></tr><tr><td>Subscription</td><td>订阅授权。授权如果过了有效期，则会进入过期状态。</td></tr><tr><td>Accept</td><td>验收期授权。用于需要验收的软件处于验收期间的授权，授权如果过了验收有效期，则会进入过期状态。</td></tr></tbody></table></p>
   */
  LicenseMode?: string
  /**
   * <p>软件的授权状态。<table><thead><tr><th>枚举值</th><th>说明</th></tr></thead><tbody><tr><td>Issued</td><td>已颁发，等待激活。一般来说，如果软件已经在运行，不会出现该状态。</td></tr><tr><td>Active</td><td>授权在有效期内，这是软件运行期间最常见的状态。</td></tr><tr><td>Expired</td><td>授权已过期。订阅类的软件授权有有效期，如果服务器时间已晚于有效期，则会进入过期状态。</td></tr><tr><td>Isolated</td><td>授权已隔离。有截止日期的授权，当用户授权到期时，先进入此状态，用户可以去续费，超过7天不续费则授权进入Destroyed状态。</td></tr><tr><td>Destroyed</td><td>授权已失效/销毁。用户如果退货软件，则授权会自动失效。</td></tr></tbody></table></p>
   */
  LicenseStatus?: string
  /**
   * <p>软件供应方 ID。</p>
   */
  ProviderId?: number
  /**
   * <p>软件包 ID。</p>
   */
  SoftwarePackageId?: string
  /**
   * <p>软件包版本。</p>
   */
  SoftwarePackageVersion?: string
  /**
   * <p>被授权的用户 UIN。</p>
   */
  AuthorizedUserUin?: string
  /**
   * <p>被授权的应用实例 ID。</p>
   */
  AuthorizedCloudappId?: string
  /**
   * <p>被授权的角色 ID。</p>
   */
  AuthorizedCloudappRoleId?: string
  /**
   * <p>被授权的软件规格，具体字段请参考结构SaleParam</p>
   */
  AuthorizedSpecification?: Array<SaleParam>
  /**
   * <p>被授权的软件的计费模式。<table><thead><tr><th>枚举值</th><th>说明</th></tr></thead><tbody><tr><td>1</td><td>线上计费，软件的授权从腾讯云线上购买，支持续费、退款等操作。</td></tr><tr><td>2</td><td>线下计费，软件的授权线下签订合同购买，定向客户交付，无法从线上续费和退款。</td></tr><tr><td>4</td><td>免费</td></tr></tbody></table></p>
   */
  BillingMode?: number
  /**
   * <p>授权时长（单位由LifeSpanUnit确定，枚举值有Y年/M月/D日三种）</p>
   */
  LifeSpan?: number
  /**
   * <p>授权颁发时间。</p>
   */
  IssueDate?: string
  /**
   * <p>授权激活时间，如从未激活则返回 null。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ActivationDate?: string
  /**
   * <p>授权过期时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpirationDate?: string
  /**
   * <p>授权时长单位，枚举值有Y年/M月/D日三种</p>
   */
  LifeSpanUnit?: string
  /**
   * <p>授权的类型：Standard正式版/Development开发版/Trial体验版</p>
   */
  LicenseType?: string
  /**
   * <p>授权的层级：Master 主授权；Child 子授权/增强型授权</p>
   */
  LicenseLevel?: string
  /**
   * <p>License 内容信息</p>
   */
  LicenseData?: LicenseData
  /**
   * <p>License 颁发地址</p>
   */
  IssueURL?: string
  /**
   * <p>商品供应商 UIN</p>
   */
  ProviderUin?: string
  /**
   * <p>License 创建来源 ID</p>
   */
  CreateSource?: string
}

/**
 * 元数据展示信息
 */
export interface DisplayMetadata {
  /**
   * <p>展示的名称</p>
   */
  Name?: string
  /**
   * <p>展示的值</p>
   */
  Value?: string
}

/**
 * IssueLicense返回参数结构体
 */
export interface IssueLicenseResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤 ID、名称、状态等

- 若存在多个 Filter 时，Filter间的关系为逻辑与（AND）关系。
- 若同一个 Filter 存在多个 Values，同一 Filter 下 Values 间的关系为逻辑或（OR）关系。
 */
export interface Filter {
  /**
   * 需要过滤的字段
   */
  Name: string
  /**
   * 字段的过滤值
   */
  Values: Array<string>
}

/**
 * License 内容信息
 */
export interface LicenseData {
  /**
   * <p>License 文本内容。支持密钥、证书等文本形式，二进制的密钥需要伙伴进行 base64 转码</p>
   */
  Text: string
  /**
   * <p>部署服务输出信息，基于部署签发 License 时需要该参数。</p>
   */
  DeploymentOutput?: string
  /**
   * <p>License 前端展示信息。key、value 形式，比如可传入，颁发机构：XXXX 有限公司</p>
   */
  Metadata?: Array<DisplayMetadata>
}

/**
 * VerifyLicense返回参数结构体
 */
export interface VerifyLicenseResponse {
  /**
   * 软件的详细授权信息。
   */
  License?: License
  /**
   * 当前请求服务端的时间戳，格式为RFC3339
   */
  Timestamp?: string
  /**
   * 对License字段对应的json数据的签名
   */
  Signature?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLicense请求参数结构体
 */
export interface DescribeLicenseRequest {
  /**
   * 可选过滤器
   */
  Filters?: Array<Filter>
}

/**
 * IssueLicense请求参数结构体
 */
export interface IssueLicenseRequest {
  /**
   * <p>云应用实例 ID</p>
   */
  CloudappId: string
  /**
   * <p>云应用颁发的 License 授权 ID。系统中唯一，伙伴可通过 License 颁发的订阅接口中获取</p>
   */
  LicenseId: string
  /**
   * <p>License 的详细数据</p>
   */
  LicenseData: PartnerLicenseData
  /**
   * <p>License 的激活模式</p>枚举值：<ul><li> immediate ： 立即激活</li><li> scheduled： 指定时间激活</li></ul>
   */
  ActivateMode?: string
  /**
   * <p>激活时间，指定时间激活时需要传该字段</p>
   */
  ActivateAt?: string
}

/**
 * License 内容信息
 */
export interface PartnerLicenseData {
  /**
   * <p>License 文本内容。可传入密钥、证书等文本型 License 内容，二进制内容请进行 base64 编码</p>
   */
  Text: string
  /**
   * <p>License 的额外信息，JSON 字符串格式</p>
   */
  ExtraData?: string
}
