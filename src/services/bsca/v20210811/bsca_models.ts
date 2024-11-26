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
 * MatchKBPURLList返回参数结构体
 */
export interface MatchKBPURLListResponse {
  /**
   * 组件列表。
   */
  PURLList: Array<PURL>
  /**
   * 是否命中数据库。
   */
  Hit: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeKBComponentVulnerability请求参数结构体
 */
export interface DescribeKBComponentVulnerabilityRequest {
  /**
   * 组件的PURL，其中Name和Version为必填字段
   */
  PURL: PURL
  /**
   * 语言，ZH或EN
   */
  Language?: string
}

/**
 * 受漏洞影响的组件信息。
 */
export interface AffectedComponent {
  /**
   * 受漏洞影响的组件名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 受漏洞影响的版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  AffectedVersionList?: Array<string>
  /**
   * 修复此漏洞的版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  FixedVersionList?: Array<string>
}

/**
 * DescribeKBComponentVersionList请求参数结构体
 */
export interface DescribeKBComponentVersionListRequest {
  /**
   * 要查询的组件 PURL
   */
  PURL: PURL
  /**
   * 页号
   */
  PageNumber?: number
  /**
   * 页大小
   */
  PageSize?: number
  /**
   * 排序方式，可以是"ASC"或"DESC"，默认"DESC"
   */
  Order?: string
  /**
   * 排序字段，可能的字段包括“Version”、"PublishTime"
   */
  OrderBy?: Array<string>
  /**
   * Tag筛选
   */
  Filter?: ComponentTagFilter
}

/**
 * 描述组件漏洞相关概览信息。
 */
export interface ComponentVulnerabilityUnion {
  /**
   * 漏洞概览信息
   */
  Summary: VulnerabilitySummary
  /**
   * 与组件相关的漏洞概览信息
   */
  SummaryInComponent: ComponentVulnerabilitySummary
}

/**
 * 许可证详细信息。
 */
export interface LicenseUnion {
  /**
   * 许可证概览信息
   */
  LicenseSummary: LicenseSummary
  /**
   * 许可证详细信息
   */
  LicenseDetail: LicenseDetail
}

/**
 * DescribeKBComponentVulnerability返回参数结构体
 */
export interface DescribeKBComponentVulnerabilityResponse {
  /**
   * 漏洞信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  VulnerabilityList?: Array<ComponentVulnerabilityUnion>
  /**
   * 组件purl
   */
  PURL?: PURL
  /**
   * 推荐版本，最小无高危/严重漏洞的版本。无法升级到安全版本时的备选方案。
   */
  RecommendedVersion?: string
  /**
   * 安全版本（首选），最小无漏洞的版本。当无法升级到安全版本时可考虑使用推荐版本。
   */
  SecureVersion?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述许可证的概览信息。
 */
export interface LicenseSummary {
  /**
   * 许可证标识符
   */
  Key: string
  /**
   * 许可证的SPDX标识符，见 https://spdx.org/licenses/
   */
  SPDXKey: string
  /**
   * 许可证短名称
   */
  ShortName: string
  /**
   * 许可证完整名称
   */
  Name: string
  /**
   * License风险等级
<li>NotDefined</li>
<li>LowRisk</li>
<li>MediumRisk</li>
<li>HighRisk</li>
   */
  Risk: string
  /**
   * 许可证来源URL
   */
  Source: string
}

/**
 * SearchKBComponent请求参数结构体
 */
export interface SearchKBComponentRequest {
  /**
   * 需要搜索的组件名
   */
  Query: string
  /**
   * 需要搜索的组件类型
   */
  Protocol?: string
  /**
   * 分页参数，从 0 开始
   */
  PageNumber?: number
  /**
   * 分页参数，设置每页返回的结果数量
   */
  PageSize?: number
}

/**
 * PURL下的Qualifier属性类型，用于定义第三方组件的额外属性，见 https://github.com/package-url/purl-spec。
 */
export interface Qualifier {
  /**
   * 额外属性的名称。
   */
  Key: string
  /**
   * 额外属性的值。
   */
  Value: string
}

/**
 * Cvssv3.0详细信息。
 */
export interface CVSSV3Info {
  /**
   * CVE评分。
   */
  CVSS: number
  /**
   * AttackVector 攻击途径。
取值范围：
<li>NETWORK 远程</li>
<li>ADJACENT_NETWORK 近邻</li>
<li>LOCAL 本地</li>
<li>PHYSICAL 物理</li>
   */
  AttackVector: string
  /**
   * AttackComplexity 攻击复杂度。
取值范围：
<li>HIGH 高</li>
<li>LOW 低</li>
   */
  AttackComplexity: string
  /**
   * PrivilegesRequired 触发特权。
取值范围：
<li>HIGH 高</li>
<li>LOW 低</li>
<li>NONE 无</li>
   */
  PrivilegesRequired: string
  /**
   * UserInteraction 交互必要性。
取值范围：
<li>NONE 无</li>
<li>REQUIRED 需要</li>
   */
  UserInteraction: string
  /**
   * Scope 绕过安全边界。
取值范围：
<li>UNCHANGED 否</li>
<li>CHANGED 能</li>
   */
  Scope: string
  /**
   * ConfidentialityImpact 机密性影响。
取值范围：
<li>NONE 无</li>
<li>LOW 低</li>
<li>HIGH 高</li>
   */
  ConImpact: string
  /**
   * IntegrityImpact 完整性影响。
取值范围：
<li>NONE 无</li>
<li>LOW 低</li>
<li>HIGH 高</li>
   */
  IntegrityImpact: string
  /**
   * AvailabilityImpact 可用性影响。
取值范围：
<li>NONE 无</li>
<li>LOW 低</li>
<li>HIGH 高</li>
   */
  AvailabilityImpact: string
}

/**
 * 描述一个第三方组件的源信息。
 */
export interface Component {
  /**
   * 第三方组件的PURL
   */
  PURL?: PURL
  /**
   * 第三方组件的主页
   */
  Homepage?: string
  /**
   * 第三方组件的简介
   */
  Summary?: string
  /**
   * 第三方组件的别名列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  NicknameList?: Array<string>
  /**
   * 第三方组件的代码位置列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  CodeLocationList?: Array<string>
  /**
   * 第三方组件的许可证表达式
   */
  LicenseExpression?: string
  /**
   * 第三方组件的版本信息(如果匹配到版本)
注意：此字段可能返回 null，表示取不到有效值。
   */
  VersionInfo?: ComponentVersionInfo
  /**
   * 第三方组件的最后更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastUpdateTime?: string
  /**
   * 第三方组件的类型标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagList?: Array<string>
}

/**
 * DescribeKBVulnerability返回参数结构体
 */
export interface DescribeKBVulnerabilityResponse {
  /**
   * 漏洞详细信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  VulnerabilityDetailList?: Array<VulnerabilityUnion>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeKBLicense返回参数结构体
 */
export interface DescribeKBLicenseResponse {
  /**
   * 许可证列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  LicenseList: Array<LicenseUnion>
  /**
   * 用于匹配的License表达式
   */
  NormalizedLicenseExpression: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述一个组件版本。
 */
export interface ComponentVersion {
  /**
   * 该组件的PURL
注意：此字段可能返回 null，表示取不到有效值。
   */
  PURL?: PURL
  /**
   * 该组件版本的许可证表达式
注意：此字段可能返回 null，表示取不到有效值。
   */
  LicenseExpression?: string
  /**
   * 组件的版本信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  VersionInfo?: ComponentVersionInfo
}

/**
 * MatchKBPURLList请求参数结构体
 */
export interface MatchKBPURLListRequest {
  /**
   * SHA1。
   */
  SHA1?: string
}

/**
 * 描述组件版本的详情，包含组件发布时间、Copyright列表、组件描述Tag。
 */
export interface ComponentVersionInfo {
  /**
   * 版本发布时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  PublishTime?: string
  /**
   * 当前版本的所有copyright
注意：此字段可能返回 null，表示取不到有效值。
   */
  CopyrightList?: Array<string>
  /**
   * 版本标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagList?: Array<string>
}

/**
 * 描述漏洞的详细信息。
 */
export interface VulnerabilityUnion {
  /**
   * 漏洞概览信息
   */
  Summary: VulnerabilitySummary
  /**
   * 漏洞详细信息
   */
  Detail: VulnerabilityDetail
}

/**
 * 描述许可证的详细信息。
 */
export interface LicenseDetail {
  /**
   * 许可证内容
   */
  Content: string
  /**
   * 许可证允许信息列表
   */
  ConditionSet: Array<LicenseRestriction>
  /**
   * 许可证要求信息列表
   */
  ForbiddenSet: Array<LicenseRestriction>
  /**
   * 许可证禁止信息列表
   */
  PermissionSet: Array<LicenseRestriction>
}

/**
 * DescribeKBVulnerability请求参数结构体
 */
export interface DescribeKBVulnerabilityRequest {
  /**
   * 根据CVE ID查询（不能与其他参数同时存在）
   */
  CVEID?: Array<string>
  /**
   * 根据Vul ID查询（不能与其他参数同时存在）
   */
  VulID?: Array<string>
  /**
   * 根据CNVD ID查询（不能与其他参数同时存在）
   */
  CNVDID?: Array<string>
  /**
   * 根据CNNVD ID查询（不能与其他参数同时存在）
   */
  CNNVDID?: Array<string>
  /**
   * 语言，ZH或EN
   */
  Language?: string
}

/**
 * 描述漏洞详细信息。
 */
export interface VulnerabilityDetail {
  /**
   * 漏洞类别
   */
  Category?: string
  /**
   * 漏洞分类
   */
  CategoryType?: string
  /**
   * 漏洞描述
   */
  Description?: string
  /**
   * 漏洞官方解决方案
   */
  OfficialSolution?: string
  /**
   * 漏洞信息参考列表
   */
  ReferenceList?: Array<string>
  /**
   * 漏洞防御方案
   */
  DefenseSolution?: string
  /**
   * 漏洞CVSSv2信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  CVSSv2Info?: CVSSV2Info
  /**
   * 漏洞CVSSv3信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  CVSSv3Info?: CVSSV3Info
  /**
   * 漏洞提交时间
   */
  SubmitTime?: string
  /**
   * 漏洞更新时间
   */
  UpdateTime?: string
  /**
   * CWE编号
   */
  CWEID?: string
  /**
   * 漏洞CVSSv2向量
   */
  CVSSv2Vector?: string
  /**
   * 漏洞CVSSv3向量
   */
  CVSSv3Vector?: string
  /**
   * 漏洞影响的组件列表，仅当查询单个漏洞时有效
   */
  AffectedComponentList?: Array<AffectedComponent>
}

/**
 * DescribeKBComponent返回参数结构体
 */
export interface DescribeKBComponentResponse {
  /**
   * 匹配的组件信息
   */
  Component?: Component
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeKBComponentVersionList返回参数结构体
 */
export interface DescribeKBComponentVersionListResponse {
  /**
   * 该组件的版本列表信息
   */
  VersionList?: Array<ComponentVersion>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述漏洞的摘要信息。
 */
export interface VulnerabilitySummary {
  /**
   * 漏洞ID
   */
  VulID?: string
  /**
   * 漏洞所属CVE编号
   */
  CVEID?: string
  /**
   * 漏洞所属CNVD编号
   */
  CNVDID?: string
  /**
   * 漏洞所属CNNVD编号
   */
  CNNVDID?: string
  /**
   * 漏洞名称
   */
  Name?: string
  /**
   * 该漏洞是否是需重点关注的漏洞
   */
  IsSuggest?: boolean
  /**
   * 漏洞风险等级
<li>Critical</li>
<li>High</li>
<li>Medium</li>
<li>Low</li>
   */
  Severity?: string
  /**
   * 架构信息，如x86、ARM等，废弃，请使用ArchitectureList
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  Architecture?: Array<string>
  /**
   * 架构信息，如x86、ARM等
注意：此字段可能返回 null，表示取不到有效值。
   */
  ArchitectureList?: Array<string>
  /**
   * patch链接
注意：此字段可能返回 null，表示取不到有效值。
   */
  PatchUrlList?: Array<string>
}

/**
 * 筛选条件，同一个Tag不能同时出现在IncludeTags和ExcludeTags，可能的Tag包括："CopyrightUpdated", "LicenseUpdated", "ContainsVulnerability"
 */
export interface ComponentTagFilter {
  /**
   * 包括的Tag

   */
  IncludeTags?: Array<string>
  /**
   * 排除的Tag
   */
  ExcludeTags?: Array<string>
}

/**
 * DescribeKBLicense请求参数结构体
 */
export interface DescribeKBLicenseRequest {
  /**
   * License表达式
   */
  LicenseExpression?: string
}

/**
 * CVSSv2.0详细信息。
 */
export interface CVSSV2Info {
  /**
   * CVE评分。
   */
  CVSS: number
  /**
   * AccessVector 攻击途径。
取值范围：
<li>NETWORK 远程</li>
<li>ADJACENT_NETWORK 近邻</li>
<li>LOCAL 本地</li>
   */
  AccessVector: string
  /**
   * AccessComplexity 攻击复杂度。
取值范围：
<li>HIGH 高</li>
<li>MEDIUM 中</li>
<li>LOW 低</li>
   */
  AccessComplexity: string
  /**
   * Authentication 身份验证。
取值范围：
<li>MULTIPLE 多系统认证</li>
<li>SINGLE 单系统认证</li>
<li>NONE 无</li>
   */
  Authentication: string
  /**
   * ConfidentialityImpact 机密性影响。
取值范围：
<li>NONE 无</li>
<li>PARTIAL 部分</li>
<li>COMPLETE 完整</li>
   */
  ConImpact: string
  /**
   * IntegrityImpact 完整性影响。
取值范围：
<li>NONE 无</li>
<li>PARTIAL 部分</li>
<li>COMPLETE 完整</li>
   */
  IntegrityImpact: string
  /**
   * AvailabilityImpact 可用性影响。
取值范围：
<li>NONE 无</li>
<li>PARTIAL 部分</li>
<li>COMPLETE 完整</li>
   */
  AvailabilityImpact: string
}

/**
 * DescribeKBComponent请求参数结构体
 */
export interface DescribeKBComponentRequest {
  /**
   * 组件的PURL
   */
  PURL: PURL
}

/**
 * PURL(Package URL)用于定位一个产品或组件，见 https://github.com/package-url/purl-spec。
 */
export interface PURL {
  /**
   * 组件名称
   */
  Name: string
  /**
   * 组件所属的类型，如：github, gitlab, generic, deb, rpm, maven 等
   */
  Protocol?: string
  /**
   * 组件名的前缀名，如github和gitlab的用户名，deb的操作系统，maven包的group id等
   */
  Namespace?: string
  /**
   * 修饰组件的额外属性
注意：此字段可能返回 null，表示取不到有效值。
   */
  Qualifiers?: Array<Qualifier>
  /**
   * 相对于组件包根位置的子目录
   */
  Subpath?: string
  /**
   * 组件版本号
   */
  Version?: string
}

/**
 * SearchKBComponent返回参数结构体
 */
export interface SearchKBComponentResponse {
  /**
   * 满足搜索条件的组件列表
   */
  ComponentList?: Array<Component>
  /**
   * 满足搜索条件的总个数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 与输入组件相关的漏洞信息摘要信息。
 */
export interface ComponentVulnerabilitySummary {
  /**
   * 用于匹配漏洞的PURL
注意：此字段可能返回 null，表示取不到有效值。
   */
  PURL: PURL
  /**
   * 该组件是否包含修复漏洞的官方补丁
   */
  CanBeFixed: boolean
  /**
   * 修复漏洞的组件版本号
   */
  FixedVersion: string
  /**
   * 漏洞影响的组件版本号
   */
  AffectedVersion: string
  /**
   * 漏洞影响组件
   */
  AffectedComponent: string
  /**
   * 漏洞在该产品中的风险等级
<li>Critical</li>
<li>High</li>
<li>Medium</li>
<li>Low</li>
   */
  RiskLevel: string
}

/**
 * License约束信息。
 */
export interface LicenseRestriction {
  /**
   * license约束的名称。
   */
  Name: string
  /**
   * license约束的描述。
   */
  Description: string
}
