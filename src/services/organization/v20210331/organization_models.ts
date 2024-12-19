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
 * ListTasks请求参数结构体
 */
export interface ListTasksRequest {
  /**
   * 空间 ID。
   */
  ZoneId: string
  /**
   * 用户同步 ID。取值： 当PrincipalType取值为Group时，该值为用户组 ID（g-****）， 当PrincipalType取值为User时，该值为用户 ID（u-****）。
   */
  PrincipalId?: string
  /**
   * 查询返回结果下一页的令牌。首次调用 API 不需要NextToken。  当您首次调用 API 时，如果返回数据总条数超过MaxResults限制，数据会被截断，只返回MaxResults条数据，同时，返回参数IsTruncated为true，返回一个NextToken。您可以使用上一次返回的NextToken继续调用 API，其他请求参数保持不变，查询被截断的数据。您可以按此方法多次查询，直到IsTruncated为false，表示全部数据查询完毕。
   */
  NextToken?: string
  /**
   * 每页的最大数据条数。  取值范围：1~100。  默认值：10。
   */
  MaxResults?: number
  /**
   * CAM 用户同步的身份类型。取值： User：表示同步的身份是用户。 Group：表示同步的身份是用户组。
   */
  PrincipalType?: string
  /**
   * 同步的集团账号目标账号的UIN。
   */
  TargetUin?: number
  /**
   * 同步的集团账号目标账号的类型，ManagerUin管理账号;MemberUin成员账号
   */
  TargetType?: string
  /**
   * 权限配置ID。
   */
  RoleConfigurationId?: string
  /**
   * InProgress：任务执行中。 Success：任务执行成功。 Failed：任务执行失败。
   */
  Status?: string
  /**
   * 任务类型。
   */
  TaskType?: string
}

/**
 * ListRoleConfigurations请求参数结构体
 */
export interface ListRoleConfigurationsRequest {
  /**
   * 空间 ID。
   */
  ZoneId: string
  /**
   * 查询返回结果下一页的令牌。首次调用 API 不需要NextToken。  当您首次调用 API 时，如果返回数据总条数超过MaxResults限制，数据会被截断，只返回MaxResults条数据，同时，返回参数IsTruncated为true，返回一个NextToken。您可以使用上一次返回的NextToken继续调用 API，其他请求参数保持不变，查询被截断的数据。您可以按此方法多次查询，直到IsTruncated为false，表示全部数据查询完毕。
   */
  NextToken?: string
  /**
   * 每页的最大数据条数。  取值范围：1~100。  默认值：10。
   */
  MaxResults?: number
  /**
   * 过滤文本。不区分大小写。目前，支持 RoleConfigurationName和Description. 示例：Filter = "test"，表示查询名称或描述里包含 test 的权限配置。
   */
  Filter?: string
  /**
   * 检索成员账号是否配置过权限，如果配置过返回IsSelected: true, 否则返回false。
   */
  FilterTargets?: Array<number | bigint>
  /**
   * 授权的用户UserId或者用户组的GroupId，必须和入参数FilterTargets一起设置
   */
  PrincipalId?: string
}

/**
 * DeleteSCIMCredential请求参数结构体
 */
export interface DeleteSCIMCredentialRequest {
  /**
   * 空间ID。z-前缀开头，后面是12位随机数字/小写字母
   */
  ZoneId: string
  /**
   * SCIM密钥ID。scimcred-前缀开头，后面是12位随机数字/小写字母。
   */
  CredentialId: string
}

/**
 * ListGroupMembers返回参数结构体
 */
export interface ListGroupMembersResponse {
  /**
   * 查询返回结果下一页的令牌。  说明 只有IsTruncated为true时，才显示该参数。
   */
  NextToken?: string
  /**
   * 符合请求参数条件的数据总条数。
   */
  TotalCounts?: number
  /**
   * 每页的最大数据条数。
   */
  MaxResults?: number
  /**
   * 返回结果是否被截断。取值：  true：已截断。 false：未截断。
   */
  IsTruncated?: boolean
  /**
   * 用户组的用户列表
   */
  GroupMembers?: Array<GroupMembers>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetExternalSAMLIdentityProvider请求参数结构体
 */
export interface SetExternalSAMLIdentityProviderRequest {
  /**
   * 空间ID。
   */
  ZoneId: string
  /**
   * IdP 元数据文档（Base64 编码）。  由支持 SAML 2.0 协议的 IdP 提供。
   */
  EncodedMetadataDocument?: string
  /**
   * SSO 登录的启用状态。取值：  Enabled：启用。 Disabled（默认值）：禁用。
   */
  SSOStatus?: string
  /**
   * IdP 标识。
   */
  EntityId?: string
  /**
   * IdP 的登录地址。
   */
  LoginUrl?: string
  /**
   * PEM 格式的 X509 证书。指定该参数会替换所有已经存在的证书。
   */
  X509Certificate?: string
}

/**
 * ListGroupMembers请求参数结构体
 */
export interface ListGroupMembersRequest {
  /**
   * 空间 ID。
   */
  ZoneId: string
  /**
   * 用户组ID。
   */
  GroupId: string
  /**
   * 查询返回结果下一页的令牌。首次调用 API 不需要NextToken。  当您首次调用 API 时，如果返回数据总条数超过MaxResults限制，数据会被截断，只返回MaxResults条数据，同时，返回参数IsTruncated为true，返回一个NextToken。您可以使用上一次返回的NextToken继续调用 API，其他请求参数保持不变，查询被截断的数据。您可以按此方法多次查询，直到IsTruncated为false，表示全部数据查询完毕。
   */
  NextToken?: string
  /**
   * 每页的最大数据条数。  取值范围：1~100。  默认值：10。
   */
  MaxResults?: number
  /**
   * 用户类型  Manual：手动创建，Synchronized：外部导入。
   */
  UserType?: string
}

/**
 * 权限配置同步
 */
export interface RoleConfigurationProvisionings {
  /**
   * Deployed: 部署成功 DeployedRequired：需要重新部署 DeployFailed：部署失败
   */
  DeploymentStatus?: string
  /**
   * 权限配置ID。
   */
  RoleConfigurationId?: string
  /**
   * 权限配置名称。
   */
  RoleConfigurationName?: string
  /**
   * 集团账号目标账号的UIN
   */
  TargetUin?: number
  /**
   * 集团账号目标账号的名称。
   */
  TargetName?: string
  /**
   * 创建时间，
   */
  CreateTime?: string
  /**
   * 修改时间，
   */
  UpdateTime?: string
  /**
   * 同步的集团账号目标账号的类型，ManagerUin管理账号;MemberUin成员账号
   */
  TargetType?: string
}

/**
 * UpdatePolicy请求参数结构体
 */
export interface UpdatePolicyRequest {
  /**
   * 需要编辑的策略ID。可以调用[ListPolicies](https://cloud.tencent.com/document/product/850/105311)获取
   */
  PolicyId: number
  /**
   * 策略描述。
   */
  Description?: string
  /**
   * 策略内容。参考CAM策略语法
   */
  Content?: string
  /**
   * 策略名。长度为1~128个字符，可以包含汉字、英文字母、数字和下划线（_）
   */
  Name?: string
  /**
   * 策略类型。默认值SERVICE_CONTROL_POLICY，取值范围：SERVICE_CONTROL_POLICY-服务控制策略、TAG_POLICY-标签策略
   */
  Type?: string
}

/**
 * DescribeShareUnitResources返回参数结构体
 */
export interface DescribeShareUnitResourcesResponse {
  /**
   * 总数目。
   */
  Total?: number
  /**
   * 共享单元资源列表。
   */
  Items?: Array<ShareUnitResource>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CIC权限配置
 */
export interface RoleConfiguration {
  /**
   * 权限配置配置ID。
   */
  RoleConfigurationId?: string
  /**
   * 权限配置配名称。
   */
  RoleConfigurationName?: string
  /**
   * 权限配置的描述。
   */
  Description?: string
  /**
   * 会话持续时间。CIC 用户使用访问配置访问成员账号时，会话最多保持的时间。
单位：秒。
   */
  SessionDuration?: number
  /**
   * 初始访问页面。CIC 用户使用访问配置访问成员账号时，初始访问的页面地址。
   */
  RelayState?: string
  /**
   * 权限配置的创建时间。
   */
  CreateTime?: string
  /**
   * 权限配置的更新时间。
   */
  UpdateTime?: string
  /**
   * 如果有入参FilterTargets查询成员账号是否配置过权限，配置了返回true，否则返回false。
   */
  IsSelected?: boolean
}

/**
 * DescribeOrganizationMemberEmailBind返回参数结构体
 */
export interface DescribeOrganizationMemberEmailBindResponse {
  /**
   * 绑定ID。
   */
  BindId?: number
  /**
   * 申请时间。
   */
  ApplyTime?: string
  /**
   * 邮箱地址。
   */
  Email?: string
  /**
   * 安全手机号。
   */
  Phone?: string
  /**
   * 绑定状态。    未绑定：Unbound，待激活：Valid，绑定成功：Success，绑定失败：Failed
   */
  BindStatus?: string
  /**
   * 绑定时间。
   */
  BindTime?: string
  /**
   * 失败说明。
   */
  Description?: string
  /**
   * 安全手机绑定状态 。 未绑定：0，已绑定：1
   */
  PhoneBind?: number
  /**
   * 国际区号。
   */
  CountryCode?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EnablePolicyType返回参数结构体
 */
export interface EnablePolicyTypeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListTargetsForPolicy返回参数结构体
 */
export interface ListTargetsForPolicyResponse {
  /**
   * 总数。
   */
  TotalNum?: number
  /**
   * 指定SCP策略关联目标列表。
   */
  List?: Array<ListTargetsForPolicyNode>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteUser请求参数结构体
 */
export interface DeleteUserRequest {
  /**
   * 空间 ID。
   */
  ZoneId: string
  /**
   * 用户 ID。
   */
  UserId: string
}

/**
 * 同步部署角色任务状态信息。
 */
export interface RoleProvisioningsTask {
  /**
   * 任务ID。
   */
  TaskId?: string
  /**
   * 权限配置ID。
   */
  RoleConfigurationId?: string
  /**
   * 权限配置名称。
   */
  RoleConfigurationName?: string
  /**
   * 授权的集团账号目标账号的UIN
   */
  TargetUin?: number
  /**
   * 同步的集团账号目标账号的类型，ManagerUin管理账号;MemberUin成员账号
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetType?: string
  /**
   * 任务类型。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskType?: string
  /**
   * 任务状态：InProgress: 进行中，Failed: 失败 3:Success: 成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskStatus?: string
}

/**
 * ProvisionRoleConfiguration请求参数结构体
 */
export interface ProvisionRoleConfigurationRequest {
  /**
   * 空间 ID。
   */
  ZoneId: string
  /**
   * 权限配置ID。
   */
  RoleConfigurationId: string
  /**
   * 同步的集团账号目标账号的类型，ManagerUin管理账号;MemberUin成员账号。
   */
  TargetType: string
  /**
   * 集团账号目标账号的UIN。
   */
  TargetUin: number
}

/**
 * ListNonCompliantResource返回参数结构体
 */
export interface ListNonCompliantResourceResponse {
  /**
   * 资源及标签合规信息。
   */
  Items?: Array<ResourceTagMapping>
  /**
   * 获取的下一页的Token值。
   */
  PaginationToken?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteUser返回参数结构体
 */
export interface DeleteUserResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateZone返回参数结构体
 */
export interface UpdateZoneResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteOrganization请求参数结构体
 */
export type DeleteOrganizationRequest = null

/**
 * 标签合规信息
 */
export interface TagComplianceDetails {
  /**
   * 合规状态。true-合规，false-不合规
   */
  ComplianceStatus?: boolean
  /**
   * 值不合规的标签键列表。
   */
  KeysWithNonCompliantValues?: Array<string>
  /**
   * 键不合规的标签键列表。
   */
  NonCompliantKeys?: Array<string>
}

/**
 * RejectJoinShareUnitInvitation请求参数结构体
 */
export interface RejectJoinShareUnitInvitationRequest {
  /**
   * 共享单元ID。
   */
  UnitId: string
}

/**
 * DescribeIdentityCenter返回参数结构体
 */
export interface DescribeIdentityCenterResponse {
  /**
   * 空间ID。z-前缀开头，后面是12位随机数字/小写字母
   */
  ZoneId?: string
  /**
   * 空间名，必须全局唯一。包含小写字母、数字和短划线（-）。不能以短划线（-）开头或结尾，且不能有两个连续的短划线（-）。长度：2~64 个字符。
   */
  ZoneName?: string
  /**
   * 服务开启状态，Disabled代表未开通，Enabled代表已开通
   */
  ServiceStatus?: string
  /**
   * SCIM 同步状态。Enabled：启用。 Disabled：禁用。
   */
  ScimSyncStatus?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePolicyConfig返回参数结构体
 */
export interface DescribePolicyConfigResponse {
  /**
   * 开启状态。0-未开启、1-开启
   */
  Status?: number
  /**
   * 策略类型。SERVICE_CONTROL_POLICY-服务控制策略、TAG_POLICY-标签策略
   */
  Type?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetExternalSAMLIdentityProvider返回参数结构体
 */
export interface GetExternalSAMLIdentityProviderResponse {
  /**
   * saml 身份提供商配置信息。
   */
  SAMLIdentityProviderConfiguration?: SAMLIdentityProviderConfiguration
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListOrganizationIdentity请求参数结构体
 */
export interface ListOrganizationIdentityRequest {
  /**
   * 偏移量。取值是limit的整数倍。默认值 : 0。
   */
  Offset: number
  /**
   * 限制数目。取值范围：1~50。默认值：10。
   */
  Limit: number
  /**
   * 名称搜索关键字。
   */
  SearchKey?: string
  /**
   * 身份ID。可以通过身份ID搜索
   */
  IdentityId?: number
  /**
   * 身份类型。取值范围 1-预设, 2-自定义
   */
  IdentityType?: number
}

/**
 * DeleteOrganizationMembers请求参数结构体
 */
export interface DeleteOrganizationMembersRequest {
  /**
   * 被删除成员的Uin列表。
   */
  MemberUin: Array<number | bigint>
}

/**
 * CreateOrganization返回参数结构体
 */
export interface CreateOrganizationResponse {
  /**
   * 企业组织ID
   */
  OrgId?: number
  /**
   * 创建者昵称
   */
  NickName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddShareUnitResources返回参数结构体
 */
export interface AddShareUnitResourcesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 组织身份策略
 */
export interface IdentityPolicy {
  /**
   * CAM预设策略ID。PolicyType 为预设策略时有效且必选
   */
  PolicyId?: number
  /**
   * CAM预设策略名称。PolicyType 为预设策略时有效且必选
   */
  PolicyName?: string
  /**
   * 策略类型。取值 1-自定义策略  2-预设策略；默认值2
注意：此字段可能返回 null，表示取不到有效值。
   */
  PolicyType?: number
  /**
   * 自定义策略内容，遵循CAM策略语法。PolicyType 为自定义策略时有效且必选
注意：此字段可能返回 null，表示取不到有效值。
   */
  PolicyDocument?: string
}

/**
 * AddOrganizationNode返回参数结构体
 */
export interface AddOrganizationNodeResponse {
  /**
   * 节点ID。
   */
  NodeId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOrganizationFinancialByMonth返回参数结构体
 */
export interface DescribeOrganizationFinancialByMonthResponse {
  /**
   * 产品消耗详情。
   */
  Items?: Array<OrgFinancialByMonth>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListPermissionPoliciesInRoleConfiguration返回参数结构体
 */
export interface ListPermissionPoliciesInRoleConfigurationResponse {
  /**
   * 权限策略总个数。
   */
  TotalCounts?: number
  /**
   * 权限策略列表。
   */
  RolePolicies?: Array<RolePolicie>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 按月获取组织财务信息
 */
export interface OrgFinancialByMonth {
  /**
   * 记录ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id: number
  /**
   * 月份，格式：yyyy-mm，示例：2021-01。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Month: string
  /**
   * 消耗金额，单元：元。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCost: number
  /**
   * 比上月增长率%。正数增长，负数下降，空值无法统计。
注意：此字段可能返回 null，表示取不到有效值。
   */
  GrowthRate?: string
}

/**
 * MoveOrganizationNodeMembers返回参数结构体
 */
export interface MoveOrganizationNodeMembersResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AttachPolicy请求参数结构体
 */
export interface AttachPolicyRequest {
  /**
   * 绑定策略目标ID。成员Uin或部门ID
   */
  TargetId: number
  /**
   * 目标类型。取值范围：NODE-部门、MEMBER-成员
   */
  TargetType: string
  /**
   * 策略ID。
   */
  PolicyId: number
  /**
   * 策略类型。默认值SERVICE_CONTROL_POLICY，取值范围：SERVICE_CONTROL_POLICY-服务控制策略、TAG_POLICY-标签策略
   */
  Type?: string
}

/**
 * DeleteShareUnit返回参数结构体
 */
export interface DeleteShareUnitResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateShareUnit请求参数结构体
 */
export interface UpdateShareUnitRequest {
  /**
   * 共享单元ID。
   */
  UnitId: string
  /**
   * 共享单元名称。仅支持大小写字母、数字、-、以及_的组合，3-128个字符。
   */
  Name?: string
  /**
   * 共享单元描述。最大128个字符。
   */
  Description?: string
  /**
   * 共享范围。取值：1-仅允许集团组织内共享 2-允许共享给任意账号，默认值：1
   */
  ShareScope?: number
}

/**
 * RemoveExternalSAMLIdPCertificate返回参数结构体
 */
export interface RemoveExternalSAMLIdPCertificateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateGroup请求参数结构体
 */
export interface CreateGroupRequest {
  /**
   * 空间 ID。
   */
  ZoneId: string
  /**
   * 用户组的名称。  格式：允许英文字母、数字和特殊字符-。 长度：最大 128 个字符。
   */
  GroupName: string
  /**
   * 用户组的描述。  长度：最大 1024 个字符。
   */
  Description?: string
  /**
   * 用户组类型  Manual：手动创建，Synchronized：外部导入
   */
  GroupType?: string
}

/**
 * ListUsers返回参数结构体
 */
export interface ListUsersResponse {
  /**
   * 符合请求参数条件的数据总条数。
   */
  TotalCounts?: number
  /**
   * 每页的最大数据条数。
   */
  MaxResults?: number
  /**
   * 用户列表。
   */
  Users?: Array<UserInfo>
  /**
   * 查询返回结果下一页的令牌。只有IsTruncated为true时，才显示该参数。
   */
  NextToken?: string
  /**
   * 返回结果是否被截断。取值：  true：已截断。 false：未截断。
   */
  IsTruncated?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRoleConfiguration请求参数结构体
 */
export interface DeleteRoleConfigurationRequest {
  /**
   * 空间 ID
   */
  ZoneId: string
  /**
   * 权限配置 ID
   */
  RoleConfigurationId: string
}

/**
 * CreateOrganizationIdentity请求参数结构体
 */
export interface CreateOrganizationIdentityRequest {
  /**
   * 身份名称
   */
  IdentityAliasName: string
  /**
   * 身份策略
   */
  IdentityPolicy: Array<IdentityPolicy>
  /**
   * 身份描述
   */
  Description?: string
}

/**
 * ListOrganizationService返回参数结构体
 */
export interface ListOrganizationServiceResponse {
  /**
   * 总数。
   */
  Total?: number
  /**
   * 集团服务列表。
   */
  Items?: Array<OrganizationServiceAssign>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteUserSyncProvisioning返回参数结构体
 */
export interface DeleteUserSyncProvisioningResponse {
  /**
   * 任务详情。
   */
  Tasks?: UserProvisioningsTask
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ProvisionRoleConfiguration返回参数结构体
 */
export interface ProvisionRoleConfigurationResponse {
  /**
   * 任务详情。
   */
  Task?: RoleProvisioningsTask
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListUserSyncProvisionings返回参数结构体
 */
export interface ListUserSyncProvisioningsResponse {
  /**
   * 查询返回结果下一页的令牌。  说明 只有IsTruncated为true时，才显示该参数。
   */
  NextToken?: string
  /**
   * 符合请求参数条件的数据总条数。
   */
  TotalCounts?: number
  /**
   * 每页的最大数据条数。
   */
  MaxResults?: number
  /**
   * 返回结果是否被截断。取值：  true：已截断。 false：未截断。
   */
  IsTruncated?: boolean
  /**
   * CAM同步的用户列表。
   */
  UserProvisionings?: Array<UserProvisioning>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePolicy返回参数结构体
 */
export interface DeletePolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOrganization返回参数结构体
 */
export interface DescribeOrganizationResponse {
  /**
   * 企业组织ID。
   */
  OrgId?: number
  /**
   * 创建者UIN。
   */
  HostUin?: number
  /**
   * 创建者昵称。
   */
  NickName?: string
  /**
   * 企业组织类型。
   */
  OrgType?: number
  /**
   * 是否组织管理员。是：true ，否：false
   */
  IsManager?: boolean
  /**
   * 策略类型。财务管理：Financial
   */
  OrgPolicyType?: string
  /**
   * 策略名。
   */
  OrgPolicyName?: string
  /**
   * 成员财务权限列表。
   */
  OrgPermission?: Array<OrgPermission>
  /**
   * 组织根节点ID。
   */
  RootNodeId?: number
  /**
   * 组织创建时间。
   */
  CreateTime?: string
  /**
   * 成员加入时间。
   */
  JoinTime?: string
  /**
   * 成员是否允许退出。允许：Allow，不允许：Denied
   */
  IsAllowQuit?: string
  /**
   * 代付者Uin。
   */
  PayUin?: string
  /**
   * 代付者名称。
   */
  PayName?: string
  /**
   * 是否可信服务管理员。是：true，否：false
   */
  IsAssignManager?: boolean
  /**
   * 是否实名主体管理员。是：true，否：false
   */
  IsAuthManager?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListNonCompliantResource请求参数结构体
 */
export interface ListNonCompliantResourceRequest {
  /**
   * 限制数目。取值范围：1~50。
   */
  MaxResults: number
  /**
   * 成员Uin。
   */
  MemberUin: number
  /**
   * 从上一页的响应中获取的下一页的Token值。
如果是第一次请求，设置为空。
   */
  PaginationToken?: string
  /**
   * 标签键。
   */
  TagKey?: string
}

/**
 * DisablePolicyType返回参数结构体
 */
export interface DisablePolicyTypeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOrganizationMemberPolicies请求参数结构体
 */
export interface DescribeOrganizationMemberPoliciesRequest {
  /**
   * 偏移量。取值是limit的整数倍。默认值 : 0。
   */
  Offset: number
  /**
   * 限制数目。取值范围：1~50。默认值：10。
   */
  Limit: number
  /**
   * 成员Uin。
   */
  MemberUin: number
  /**
   * 搜索关键字。可用于策略名或描述搜索
   */
  SearchKey?: string
}

/**
 * DescribeEffectivePolicy请求参数结构体
 */
export interface DescribeEffectivePolicyRequest {
  /**
   * 账号uin或者节点id。
   */
  TargetId: number
}

/**
 * CreateOrgServiceAssign请求参数结构体
 */
export interface CreateOrgServiceAssignRequest {
  /**
   * 委派管理员Uin列表。 最大长度20个
   */
  MemberUins: Array<number | bigint>
  /**
   * 集团服务ID。和集团服务产品标识二选一必填，可以通过[ListOrganizationService](https://cloud.tencent.com/document/product/850/109561)获取
   */
  ServiceId?: number
  /**
   * 集团服务产品标识。和集团服务ID二选一必填，可以通过[ListOrganizationService](https://cloud.tencent.com/document/product/850/109561)获取
   */
  Product?: string
  /**
   * 委派管理员管理范围。 取值：1-全部成员 2-部分成员，默认值1
   */
  ManagementScope?: number
  /**
   * 管理的成员Uin列表。ManagementScope为2时该参数有效
   */
  ManagementScopeUins?: Array<number | bigint>
  /**
   * 管理的部门ID列表。ManagementScope为2时该参数有效
   */
  ManagementScopeNodeIds?: Array<number | bigint>
}

/**
 * 任务状态信息。
 */
export interface TaskStatus {
  /**
   * 任务状态。取值：  InProgress：任务执行中。 Success：任务执行成功。 Failed：任务执行失败。
   */
  Status?: string
  /**
   * 任务 ID。
   */
  TaskId?: string
  /**
   * 任务类型。取值：
ProvisionRoleConfiguration：部署权限配置。
DeprovisionRoleConfiguration：解除权限配置部署。
CreateRoleAssignment：在成员 账号上授权。
DeleteRoleAssignment：移除 成员 账号上的授权。
   */
  TaskType?: string
  /**
   * 任务失败原因。
说明
只有Status为Failed，才会显示该参数。
   */
  FailureReason?: string
}

/**
 * DeleteOrganizationMembersPolicy返回参数结构体
 */
export interface DeleteOrganizationMembersPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DismantleRoleConfiguration返回参数结构体
 */
export interface DismantleRoleConfigurationResponse {
  /**
   * 任务详情。
   */
  Task?: RoleProvisioningsTask
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ClearExternalSAMLIdentityProvider请求参数结构体
 */
export interface ClearExternalSAMLIdentityProviderRequest {
  /**
   * 空间ID。
   */
  ZoneId: string
}

/**
 * CreateUserSyncProvisioning返回参数结构体
 */
export interface CreateUserSyncProvisioningResponse {
  /**
   * 任务详细。
   */
  Tasks?: Array<UserProvisioningsTask>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListUserSyncProvisionings请求参数结构体
 */
export interface ListUserSyncProvisioningsRequest {
  /**
   * 空间 ID。
   */
  ZoneId: string
  /**
   * 用户同步 ID。取值：  当PrincipalType取值为Group时，该值为用户组 ID（g-********）。 当PrincipalType取值为User时，该值为用户 ID（u-********）。
   */
  PrincipalId?: string
  /**
   * 查询返回结果下一页的令牌。首次调用 API 不需要NextToken。  当您首次调用 API 时，如果返回数据总条数超过MaxResults限制，数据会被截断，只返回MaxResults条数据，同时，返回参数IsTruncated为true，返回一个NextToken。您可以使用上一次返回的NextToken继续调用 API，其他请求参数保持不变，查询被截断的数据。您可以按此方法多次查询，直到IsTruncated为false，表示全部数据查询完毕。
   */
  NextToken?: string
  /**
   * 每页的最大数据条数。  取值范围：1~100。  默认值：10。
   */
  MaxResults?: number
  /**
   * CAM 用户同步的身份类型。取值： User：表示同步的身份是用户。 Group：表示同步的身份是用户组。
   */
  PrincipalType?: string
  /**
   * 集团账号目标账号的UIN。
   */
  TargetUin?: number
  /**
   * 同步的集团账号目标账号的类型，ManagerUin管理账号;MemberUin成员账号
   */
  TargetType?: string
  /**
   * 检测条件。
   */
  Filter?: string
}

/**
 * 共享单元成员
 */
export interface ShareUnitMember {
  /**
   * 共享成员Uin。
   */
  ShareMemberUin?: number
  /**
   * 创建时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
}

/**
 * UpdateUserSyncProvisioning请求参数结构体
 */
export interface UpdateUserSyncProvisioningRequest {
  /**
   * 空间ID。
   */
  ZoneId: string
  /**
   * 用户同步的iD
   */
  UserProvisioningId: string
  /**
   * 用户同步描述。
   */
  NewDescription?: string
  /**
   * 冲突策略。当CIC 用户同步到 CAM 时，如果 CAM 中存在同名用户时的处理策略。取值： KeepBoth：两者都保留。当CIC 用户被同步到 CAM 时，如果 CAM 已经存在同名用户，则对CIC 用户的用户名添加后缀_cic后尝试创建该用户名的 CAM 用户。 TakeOver：替换。当CIC 用户被同步到 CAM 时，如果 CAM 已经存在同名用户，则直接将已经存在的 CAM 用户替换为CIC 同步用户。
   */
  NewDuplicationStateful?: string
  /**
   * 删除策略。删除 CAM 用户同步时，对已同步的 CAM 用户的处理策略。取值： Delete：删除。删除 CAM 用户同步时，会删除从CIC 已经同步到 CAM 中的 CAM 用户。 Keep：保留。删除 RAM 用户同步时，会保留从CIC 已经同步到 CAM 中的 CAM 用户。
   */
  NewDeletionStrategy?: string
}

/**
 * ListRoleAssignments请求参数结构体
 */
export interface ListRoleAssignmentsRequest {
  /**
   * 空间 ID。
   */
  ZoneId: string
  /**
   * 权限配置ID。
   */
  RoleConfigurationId?: string
  /**
   * 每页的最大数据条数。  取值范围：1~100。  默认值：10。
   */
  MaxResults?: number
  /**
   * 查询返回结果下一页的令牌。首次调用 API 不需要NextToken。  当您首次调用 API 时，如果返回数据总条数超过MaxResults限制，数据会被截断，只返回MaxResults条数据，同时，返回参数IsTruncated为true，返回一个NextToken。您可以使用上一次返回的NextToken继续调用 API，其他请求参数保持不变，查询被截断的数据。您可以按此方法多次查询，直到IsTruncated为false，表示全部数据查询完毕。
   */
  NextToken?: string
  /**
   * 同步的集团账号目标账号的类型，ManagerUin管理账号;MemberUin成员账号
   */
  TargetType?: string
  /**
   * 同步的集团账号目标账号的UIN。
   */
  TargetUin?: number
  /**
   * CAM 用户同步的身份类型。取值： User：表示同步的身份是用户。 Group：表示同步的身份是用户组。
   */
  PrincipalType?: string
  /**
   * 用户同步 ID。取值： 当PrincipalType取值为Group时，该值为用户组 ID（g-****)，当PrincipalType取值为User时，该值为用户 ID （u-****）。
   */
  PrincipalId?: string
  /**
   * 查询条件，目前只支持权限配置名称查询。
   */
  Filter?: string
}

/**
 * CancelOrganizationMemberAuthAccount请求参数结构体
 */
export interface CancelOrganizationMemberAuthAccountRequest {
  /**
   * 成员Uin。
   */
  MemberUin: number
  /**
   * 策略ID。可以通过[DescribeOrganizationMemberPolicies](https://cloud.tencent.com/document/product/850/82935)获取
   */
  PolicyId: number
  /**
   * 组织子账号Uin。
   */
  OrgSubAccountUin: number
}

/**
 * GetGroup请求参数结构体
 */
export interface GetGroupRequest {
  /**
   * 空间 ID。
   */
  ZoneId: string
  /**
   * 用户组的 ID。
   */
  GroupId: string
}

/**
 * 集团服务设置
 */
export interface OrganizationServiceAssign {
  /**
   * 集团服务ID。
   */
  ServiceId?: number
  /**
   * 集团服务产品名称。
   */
  ProductName?: string
  /**
   * 是否支持委派。取值: 1-是  2-否
   */
  IsAssign?: number
  /**
   * 集团服务描述。
   */
  Description?: string
  /**
   * 当前委派管理员数。
   */
  MemberNum?: string
  /**
   * 帮助文档。
   */
  Document?: string
  /**
   * 集团服务产品控制台路径。
   */
  ConsoleUrl?: string
  /**
   * 是否接入使用状态。取值: 1-是 
 2-否
   */
  IsUsageStatus?: number
  /**
   * 委派管理员数量限制。
   */
  CanAssignCount?: number
  /**
   * 集团服务产品标识。
   */
  Product?: string
  /**
   * 是否支持集团服务授权。取值 1-是、2-否
   */
  ServiceGrant?: number
  /**
   * 集团服务授权启用状态。ServiceGrant值为1时该字段有效 ，取值：Enabled-开启  Disabled-关闭
   */
  GrantStatus?: string
  /**
   * 是否支持设置委派管理范围。取值: 1-是  2-否
   */
  IsSetManagementScope?: number
}

/**
 * DeleteOrganization返回参数结构体
 */
export interface DeleteOrganizationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DismantleRoleConfiguration请求参数结构体
 */
export interface DismantleRoleConfigurationRequest {
  /**
   * 空间 ID。
   */
  ZoneId: string
  /**
   * 权限配置ID。
   */
  RoleConfigurationId: string
  /**
   * 同步的集团账号目标账号的类型，ManagerUin管理账号;MemberUin成员账号。
   */
  TargetType: string
  /**
   * 同步的集团账号目标账号的UIN。
   */
  TargetUin: number
}

/**
 * UpdateCustomPolicyForRoleConfiguration返回参数结构体
 */
export interface UpdateCustomPolicyForRoleConfigurationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeShareUnitMembers返回参数结构体
 */
export interface DescribeShareUnitMembersResponse {
  /**
   * 总数目。
   */
  Total?: number
  /**
   * 共享单元成员列表。
   */
  Items?: Array<ShareUnitMember>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 成员主要信息
 */
export interface MemberMainInfo {
  /**
   * 成员uin
   */
  MemberUin?: number
  /**
   * 成员名称
   */
  MemberName?: string
}

/**
 * CreateRoleAssignment请求参数结构体
 */
export interface CreateRoleAssignmentRequest {
  /**
   * 空间 ID。
   */
  ZoneId: string
  /**
   * 授权成员账号信息，最多授权50条。
   */
  RoleAssignmentInfo?: Array<RoleAssignmentInfo>
}

/**
 * DeleteShareUnitResources请求参数结构体
 */
export interface DeleteShareUnitResourcesRequest {
  /**
   * 共享单元ID。
   */
  UnitId: string
  /**
   * 共享单元地域。
   */
  Area: string
  /**
   * 共享资源类型。支持共享的资源类型,请参见[资源共享概述](https://cloud.tencent.com/document/product/850/59489)
   */
  Type: string
  /**
   * 共享资源列表。最大10个。
   */
  Resources: Array<ShareResource>
}

/**
 * 成员管理身份
 */
export interface MemberIdentity {
  /**
   * 身份ID。
   */
  IdentityId?: number
  /**
   * 身份名称。
   */
  IdentityAliasName?: string
}

/**
 * RejectJoinShareUnitInvitation返回参数结构体
 */
export interface RejectJoinShareUnitInvitationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateShareUnit返回参数结构体
 */
export interface UpdateShareUnitResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListRoleAssignments返回参数结构体
 */
export interface ListRoleAssignmentsResponse {
  /**
   * 查询返回结果下一页的令牌。  说明 只有IsTruncated为true时，才显示该参数。
   */
  NextToken?: string
  /**
   * 符合请求参数条件的数据总条数。
   */
  TotalCounts?: number
  /**
   * 每页的最大数据条数。
   */
  MaxResults?: number
  /**
   * 返回结果是否被截断。取值：  true：已截断。 false：未截断。
   */
  IsTruncated?: boolean
  /**
   * 集团账号目标账号的授权列表。
   */
  RoleAssignments?: Array<RoleAssignments>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateUser返回参数结构体
 */
export interface UpdateUserResponse {
  /**
   * 用户信息
   */
  UserInfo?: UserInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RemoveUserFromGroup请求参数结构体
 */
export interface RemoveUserFromGroupRequest {
  /**
   * 空间ID。
   */
  ZoneId: string
  /**
   * 用户组ID。
   */
  GroupId: string
  /**
   * 用户ID。
   */
  UserId: string
}

/**
 * AddPermissionPolicyToRoleConfiguration请求参数结构体
 */
export interface AddPermissionPolicyToRoleConfigurationRequest {
  /**
   * 空间 ID
   */
  ZoneId: string
  /**
   * 权限配置 ID
   */
  RoleConfigurationId: string
  /**
   * 权限策略类型。取值：  System：系统策略。复用 CAM 的系统策略。 Custom: 自定义策略。按照 CAM 权限策略语法和结构编写的自定义策略。
   */
  RolePolicyType: string
  /**
   * 权限策略名称，长度最大为 20策略，每个策略长度最大32个字符。如果要添加系统策略，建议使用RolePolicies参数。自定义策略时，数组长度最大为1。
   */
  RolePolicyNames?: Array<string>
  /**
   * 添加的系统策略详情。
   */
  RolePolicies?: Array<PolicyDetail>
  /**
   * 自定义策略内容。长度：最大 4096 个字符。当RolePolicyType为Inline时，该参数必须配置。关于权限策略的语法和结构，请参见权限策略语法和结构。
   */
  CustomPolicyDocument?: string
  /**
   * 自定义策略内容列表（跟RolePolicyNames一一对应）
   */
  CustomPolicyDocuments?: Array<string>
}

/**
 * DescribeOrganizationAuthNode返回参数结构体
 */
export interface DescribeOrganizationAuthNodeResponse {
  /**
   * 总数。
   */
  Total?: number
  /**
   * 条目详情。
   */
  Items?: Array<AuthNode>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 关系策略权限
 */
export interface OrgPermission {
  /**
   * 权限Id
   */
  Id: number
  /**
   * 权限名
   */
  Name: string
}

/**
 * ListPolicies返回参数结构体
 */
export interface ListPoliciesResponse {
  /**
   * 策略总数
   */
  TotalNum?: number
  /**
   * 策略列表数据
   */
  List?: Array<ListPolicyNode>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BindOrganizationMemberAuthAccount请求参数结构体
 */
export interface BindOrganizationMemberAuthAccountRequest {
  /**
   * 成员Uin。
   */
  MemberUin: number
  /**
   * 策略ID。可以调用[DescribeOrganizationMemberPolicies](https://cloud.tencent.com/document/product/850/82935)获取
   */
  PolicyId: number
  /**
   * 组织管理员子账号Uin列表。最大5个
   */
  OrgSubAccountUins: Array<number | bigint>
}

/**
 * DescribeShareUnits返回参数结构体
 */
export interface DescribeShareUnitsResponse {
  /**
   * 总数目。
   */
  Total?: number
  /**
   * 共享单元列表。
   */
  Items?: Array<ManagerShareUnit>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateOrganizationMemberEmailBind返回参数结构体
 */
export interface UpdateOrganizationMemberEmailBindResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetZoneSAMLServiceProviderInfo返回参数结构体
 */
export interface GetZoneSAMLServiceProviderInfoResponse {
  /**
   * saml服务提供商配置信息
   */
  SAMLServiceProvider?: SAMLServiceProvider
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteOrganizationMembers返回参数结构体
 */
export interface DeleteOrganizationMembersResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 我的共享单元列表详情
 */
export interface ManagerShareUnit {
  /**
   * 共享单元ID。
   */
  UnitId?: string
  /**
   * 共享单元名称。
   */
  Name?: string
  /**
   * 共享单元管理员Uin。
   */
  Uin?: number
  /**
   * 共享单元管理员OwnerUin。
   */
  OwnerUin?: number
  /**
   * 共享单元地域。
   */
  Area?: string
  /**
   * 描述。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 创建时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 共享单元资源数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ShareResourceNum?: number
  /**
   * 共享单元成员数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ShareMemberNum?: number
  /**
   * 共享范围。取值：1-仅允许集团组织内共享 2-允许共享给任意账号
注意：此字段可能返回 null，表示取不到有效值。
   */
  ShareScope?: number
}

/**
 * UpdateSCIMCredentialStatus返回参数结构体
 */
export interface UpdateSCIMCredentialStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 共享单元资源
 */
export interface ShareUnitResource {
  /**
   * 共享资源ID。
   */
  ResourceId?: string
  /**
   * 共享资源类型。
   */
  Type?: string
  /**
   * 创建时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 产品资源ID。
   */
  ProductResourceId?: string
  /**
   * 共享单元成员数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SharedMemberNum?: number
  /**
   * 使用中共享单元成员数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SharedMemberUseNum?: number
  /**
   * 共享管理员OwnerUin。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ShareManagerUin?: number
}

/**
 * DescribeOrganizationMemberAuthIdentities请求参数结构体
 */
export interface DescribeOrganizationMemberAuthIdentitiesRequest {
  /**
   * 偏移量。取值是limit的整数倍，默认值 : 0
   */
  Offset: number
  /**
   * 限制数目。取值范围：1~50，默认值：10
   */
  Limit: number
  /**
   * 组织成员Uin。入参MemberUin与IdentityId至少填写一个
   */
  MemberUin?: number
  /**
   * 身份ID。入参MemberUin与IdentityId至少填写一个, 可以通过[ListOrganizationIdentity](https://cloud.tencent.com/document/product/850/82934)获取
   */
  IdentityId?: number
}

/**
 * CreateOrganizationMemberAuthIdentity返回参数结构体
 */
export interface CreateOrganizationMemberAuthIdentityResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteOrgServiceAssign请求参数结构体
 */
export interface DeleteOrgServiceAssignRequest {
  /**
   * 委派管理员Uin。
   */
  MemberUin: number
  /**
   * 集团服务ID。和集团服务产品标识二选一必填，可以通过[ListOrganizationService](https://cloud.tencent.com/document/product/850/109561)获取
   */
  ServiceId?: number
  /**
   * 集团服务产品标识。和集团服务ID二选一必填，可以通过[ListOrganizationService](https://cloud.tencent.com/document/product/850/109561)获取
   */
  Product?: string
}

/**
 * DescribeOrganization请求参数结构体
 */
export interface DescribeOrganizationRequest {
  /**
   * 国际站：en，国内站：zh
   */
  Lang?: string
  /**
   * 可信服务产品简称。查询是否该可信服务管理员时必须指定
   */
  Product?: string
}

/**
 * ListPermissionPoliciesInRoleConfiguration请求参数结构体
 */
export interface ListPermissionPoliciesInRoleConfigurationRequest {
  /**
   * 空间 ID
   */
  ZoneId: string
  /**
   * 权限配置 ID
   */
  RoleConfigurationId: string
  /**
   * 权限策略类型。取值：  System：系统策略。复用 CAM 的系统策略。 Custom: 自定义策略。按照 CAM 权限策略语法和结构编写的自定义策略。
   */
  RolePolicyType?: string
  /**
   * 按策略名称搜索
   */
  Filter?: string
}

/**
 * ClearExternalSAMLIdentityProvider返回参数结构体
 */
export interface ClearExternalSAMLIdentityProviderResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddExternalSAMLIdPCertificate返回参数结构体
 */
export interface AddExternalSAMLIdPCertificateResponse {
  /**
   * SAML 签名证书 ID。
   */
  CertificateId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateOrganizationMember返回参数结构体
 */
export interface CreateOrganizationMemberResponse {
  /**
   * 成员Uin。
   */
  Uin?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 成员账号的授权详情
 */
export interface RoleAssignments {
  /**
   * 权限配置ID。
   */
  RoleConfigurationId?: string
  /**
   * 权限配置名称。
   */
  RoleConfigurationName?: string
  /**
   * 集团账号目标账号的UIN。
   */
  TargetUin?: number
  /**
   * 同步的集团账号目标账号的类型，ManagerUin管理账号;MemberUin成员账号。
   */
  TargetType?: string
  /**
   * CAM 用户同步的身份 ID。取值： 当PrincipalType取值为Group时，该值为CIC 用户组 ID（g-********）。 当PrincipalType取值为User时，该值为CIC 用户 ID（u-********）。
   */
  PrincipalId?: string
  /**
   * CAM 用户同步的身份类型。取值： User：表示该 CAM 用户同步的身份是CIC用户。 Group：表示该 CAM 用户同步的身份是CIC用户组。
   */
  PrincipalType?: string
  /**
   * 用户名称或者用户组名称
   */
  PrincipalName?: string
  /**
   * 创建时间。
   */
  CreateTime?: string
  /**
   * 更新时间。
   */
  UpdateTime?: string
  /**
   * 集团账号目标账号的名称。
   */
  TargetName?: string
}

/**
 * MoveOrganizationNodeMembers请求参数结构体
 */
export interface MoveOrganizationNodeMembersRequest {
  /**
   * 组织节点ID。可以通过[DescribeOrganizationNodes](https://cloud.tencent.com/document/product/850/82926)获取
   */
  NodeId: number
  /**
   * 成员Uin列表。
   */
  MemberUin: Array<number | bigint>
}

/**
 * GetTaskStatus返回参数结构体
 */
export interface GetTaskStatusResponse {
  /**
   * 任务状态信息。
   */
  TaskStatus?: TaskStatus
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CAM用户同步信息
 */
export interface UserSyncProvisioning {
  /**
   * 描述。
   */
  Description?: string
  /**
   * CAM 用户同步的身份 ID。取值：
当PrincipalType取值为Group时，该值为CIC用户组 ID（g-********）。
当PrincipalType取值为User时，该值为CIC用户 ID（u-********）。
   */
  PrincipalId?: string
  /**
   * CAM 用户同步的身份类型。取值：

User：表示该 CAM 用户同步的身份是CIC用户。
Group：表示该 CAM 用户同步的身份是CIC用户组。
   */
  PrincipalType?: string
  /**
   * 同步的集团账号目标账号的UIN。
   */
  TargetUin?: number
  /**
   * 冲突策略。当CIC 用户同步到 CAM 时，如果 CAM 中存在同名用户时的处理策略。取值： KeepBoth：两者都保留。当CIC 用户被同步到 CAM 时，如果 CAM 已经存在同名用户，则对CIC 用户的用户名添加后缀_cic后尝试创建该用户名的 CAM 用户。 TakeOver：替换。当CIC 用户被同步到 CAM 时，如果 CAM 已经存在同名用户，则直接将已经存在的 CAM 用户替换为CIC 同步用户。
   */
  DuplicationStrategy?: string
  /**
   * 删除策略。删除 CAM 用户同步时，对已同步的 CAM 用户的处理策略。取值： Delete：删除。删除 CAM 用户同步时，会删除从CIC 已经同步到 CAM 中的 CAM 用户。 Keep：保留。删除 RAM 用户同步时，会保留从CIC 已经同步到 CAM 中的 CAM 用户。
   */
  DeletionStrategy?: string
  /**
   * 同步的集团账号目标账号的类型，ManagerUin管理账号;MemberUin成员账号
   */
  TargetType?: string
}

/**
 * UpdateOrganizationMember返回参数结构体
 */
export interface UpdateOrganizationMemberResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 互信主体主要信息
 */
export interface AuthNode {
  /**
   * 互信主体关系ID
   */
  RelationId?: number
  /**
   * 互信主体名称
   */
  AuthName?: string
  /**
   * 主体管理员
   */
  Manager?: MemberMainInfo
}

/**
 * DeleteGroup请求参数结构体
 */
export interface DeleteGroupRequest {
  /**
   * 空间 ID。
   */
  ZoneId: string
  /**
   * 用户组的 ID。
   */
  GroupId: string
}

/**
 * GetUser返回参数结构体
 */
export interface GetUserResponse {
  /**
   * 用户信息。
   */
  UserInfo?: UserInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteOrganizationNodes请求参数结构体
 */
export interface DeleteOrganizationNodesRequest {
  /**
   * 节点ID列表。可以通过[DescribeOrganizationNodes](https://cloud.tencent.com/document/product/850/82926)获取
   */
  NodeId: Array<number | bigint>
}

/**
 * EnablePolicyType请求参数结构体
 */
export interface EnablePolicyTypeRequest {
  /**
   * 企业组织Id。可以调用[DescribeOrganization](https://cloud.tencent.com/document/product/850/67059)获取
   */
  OrganizationId: number
  /**
   * 策略类型。默认值SERVICE_CONTROL_POLICY，取值范围：SERVICE_CONTROL_POLICY-服务控制策略、TAG_POLICY-标签策略
   */
  PolicyType: string
}

/**
 * CreatePolicy返回参数结构体
 */
export interface CreatePolicyResponse {
  /**
   * 策略ID
   */
  PolicyId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 有效策略。
 */
export interface EffectivePolicy {
  /**
   * 目标ID。
   */
  TargetId?: number
  /**
   * 有效策略内容。
   */
  PolicyContent?: string
  /**
   * 有效策略更新时间。
   */
  LastUpdatedTimestamp?: number
}

/**
 * 标签键值对
 */
export interface Tag {
  /**
   * 标签键
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagKey: string
  /**
   * 标签值
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagValue: string
}

/**
 * AddOrganizationMemberEmail请求参数结构体
 */
export interface AddOrganizationMemberEmailRequest {
  /**
   * 成员Uin。
   */
  MemberUin: number
  /**
   * 邮箱地址。
   */
  Email: string
  /**
   * 国际区号。
   */
  CountryCode: string
  /**
   * 手机号。
   */
  Phone: string
}

/**
 * ListOrganizationIdentity返回参数结构体
 */
export interface ListOrganizationIdentityResponse {
  /**
   * 总数。
   */
  Total?: number
  /**
   * 条目详情。
   */
  Items?: Array<OrgIdentity>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 共享地域
 */
export interface ShareArea {
  /**
   * 地域名称。
   */
  Name?: string
  /**
   * 地域标识。
   */
  Area?: string
  /**
   * 地域ID。
   */
  AreaId?: number
}

/**
 * DeletePolicy请求参数结构体
 */
export interface DeletePolicyRequest {
  /**
   * 需要删除的策略ID。可以调用[ListPolicies](https://cloud.tencent.com/document/product/850/105311)获取

   */
  PolicyId: number
  /**
   * 策略类型。默认值SERVICE_CONTROL_POLICY，取值范围：SERVICE_CONTROL_POLICY-服务控制策略、TAG_POLICY-标签策略
   */
  Type?: string
}

/**
 * 共享资源
 */
export interface ShareResource {
  /**
   * 共享资源ID。
   * @deprecated
   */
  ResourceId?: string
  /**
   * 产品资源ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductResourceId?: string
}

/**
 * GetUserSyncProvisioning返回参数结构体
 */
export interface GetUserSyncProvisioningResponse {
  /**
   * CAM 用户同步信息。
   */
  UserProvisioning?: UserProvisioning
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用户组信息。
 */
export interface GroupInfo {
  /**
   * 用户组的名称。
   */
  GroupName?: string
  /**
   * 用户组的描述。
   */
  Description?: string
  /**
   * 用户组的创建时间。
   */
  CreateTime?: string
  /**
   * 用户组的类型  Manual：手动创建，Synchronized：外部导入。
   */
  GroupType?: string
  /**
   * 用户组的修改时间。
   */
  UpdateTime?: string
  /**
   * 用户组的 ID。
   */
  GroupId?: string
  /**
   * 组员数量。
   */
  MemberCount?: number
  /**
   * 如果有入参FilterUsers，用户在用户组返回true，否则返回false
   */
  IsSelected?: boolean
}

/**
 * GetSCIMSynchronizationStatus返回参数结构体
 */
export interface GetSCIMSynchronizationStatusResponse {
  /**
   * SCIM 同步状态。Enabled：启用。 Disabled：禁用。
   */
  SCIMSynchronizationStatus?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetZoneStatistics请求参数结构体
 */
export interface GetZoneStatisticsRequest {
  /**
   * 空间ID
   */
  ZoneId: string
}

/**
 * 部门主要信息
 */
export interface NodeMainInfo {
  /**
   * 部门ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeId: number
  /**
   * 部门名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeName: string
}

/**
 * RemovePermissionPolicyFromRoleConfiguration请求参数结构体
 */
export interface RemovePermissionPolicyFromRoleConfigurationRequest {
  /**
   * 空间 ID
   */
  ZoneId: string
  /**
   * 权限配置 ID
   */
  RoleConfigurationId: string
  /**
   * 权限策略类型。取值：  System：系统策略。复用 CAM 的系统策略。 Custom: 自定义策略。按照 CAM 权限策略语法和结构编写的自定义策略。
   */
  RolePolicyType: string
  /**
   * 权限策略名称，长度最大为 32 个字符。
   */
  RolePolicyName?: string
  /**
   * 策略ID。
   */
  RolePolicyId?: number
}

/**
 * InviteOrganizationMember请求参数结构体
 */
export interface InviteOrganizationMemberRequest {
  /**
   * 被邀请账号Uin。
   */
  MemberUin: number
  /**
   * 成员名称。最大长度为25个字符，支持英文字母、数字、汉字、符号+@、&._[]-:,
   */
  Name: string
  /**
   * 关系策略。取值：Financial
   */
  PolicyType: string
  /**
   * 成员财务权限ID列表。取值：1-查看账单、2-查看余额、3-资金划拨、4-合并出账、5-开票、6-优惠继承、7-代付费，1、2 默认必须
   */
  PermissionIds: Array<number | bigint>
  /**
   * 成员所属部门的节点ID。可以通过[DescribeOrganizationNodes](https://cloud.tencent.com/document/product/850/82926)获取
   */
  NodeId: number
  /**
   * 备注。
   */
  Remark?: string
  /**
   * 是否允许成员退出。允许：Allow，不允许：Denied。
   */
  IsAllowQuit?: string
  /**
   * 代付者Uin。成员代付费时需要
   */
  PayUin?: string
  /**
   * 互信实名主体名称。
   */
  RelationAuthName?: string
  /**
   * 互信主体证明文件列表。
   */
  AuthFile?: Array<AuthRelationFile>
  /**
   * 成员标签列表。最大10个
   */
  Tags?: Array<Tag>
}

/**
 * QuitOrganization请求参数结构体
 */
export interface QuitOrganizationRequest {
  /**
   * 企业组织ID
   */
  OrgId: number
}

/**
 * ListTasks返回参数结构体
 */
export interface ListTasksResponse {
  /**
   * 查询返回结果下一页的令牌。  说明 只有IsTruncated为true时，才显示该参数。
   */
  NextToken?: string
  /**
   * 符合请求参数条件的数据总条数。
   */
  TotalCounts?: number
  /**
   * 每页的最大数据条数。
   */
  MaxResults?: number
  /**
   * 返回结果是否被截断。取值：  true：已截断。 false：未截断。
   */
  IsTruncated?: boolean
  /**
   * 任务详情
   */
  Tasks?: Array<TaskInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddOrganizationNode请求参数结构体
 */
export interface AddOrganizationNodeRequest {
  /**
   * 父节点ID。可以通过[DescribeOrganizationNodes](https://cloud.tencent.com/document/product/850/82926)获取
   */
  ParentNodeId: number
  /**
   * 节点名称。最大长度为40个字符，支持英文字母、数字、汉字、符号+@、&._[]-
   */
  Name: string
  /**
   * 备注。
   */
  Remark?: string
  /**
   * 部门标签列表。最大10个
   */
  Tags?: Array<Tag>
}

/**
 * AddShareUnitMembers请求参数结构体
 */
export interface AddShareUnitMembersRequest {
  /**
   * 共享单元ID。
   */
  UnitId: string
  /**
   * 共享单元地域。
   */
  Area: string
  /**
   * 共享成员列表。最大10个。
   */
  Members: Array<ShareMember>
}

/**
 * AddShareUnit请求参数结构体
 */
export interface AddShareUnitRequest {
  /**
   * 共享单元名称。仅支持大小写字母、数字、-、以及_的组合，3-128个字符。
   */
  Name: string
  /**
   * 共享单元地域。可通过接口[DescribeShareAreas](https://cloud.tencent.com/document/product/850/103050)获取支持共享的地域。
   */
  Area: string
  /**
   * 共享单元描述。最大128个字符。
   */
  Description?: string
  /**
   * 共享范围。取值：1-仅允许集团组织内共享 2-允许共享给任意账号，默认值：1
   */
  ShareScope?: number
}

/**
 * SendOrgMemberAccountBindEmail返回参数结构体
 */
export interface SendOrgMemberAccountBindEmailResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 组织成员财务信息。
 */
export interface OrgMemberFinancial {
  /**
   * 成员Uin。
   */
  MemberUin?: number
  /**
   * 成员名称。
   */
  MemberName?: string
  /**
   * 消耗金额，单位：元。
   */
  TotalCost?: number
  /**
   * 占比%。
   */
  Ratio?: string
}

/**
 * DescribeOrganizationAuthNode请求参数结构体
 */
export interface DescribeOrganizationAuthNodeRequest {
  /**
   * 偏移量。取值是limit的整数倍。默认值 : 0。
   */
  Offset: number
  /**
   * 限制数目。取值范围：1~50。默认值：10。
   */
  Limit: number
  /**
   * 互信主体名称。
   */
  AuthName?: string
}

/**
 * OpenIdentityCenter请求参数结构体
 */
export interface OpenIdentityCenterRequest {
  /**
   * 空间名，必须全局唯一。包含小写字母、数字和短划线（-）。不能以短划线（-）开头或结尾，且不能有两个连续的短划线（-）。长度：2~64 个字符。
   */
  ZoneName: string
}

/**
 * GetProvisioningTaskStatus返回参数结构体
 */
export interface GetProvisioningTaskStatusResponse {
  /**
   * 任务状态信息。
   */
  TaskStatus?: TaskStatus
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOrganizationMemberAuthAccounts请求参数结构体
 */
export interface DescribeOrganizationMemberAuthAccountsRequest {
  /**
   * 偏移量。取值是limit的整数倍。默认值 : 0。
   */
  Offset: number
  /**
   * 限制数目。取值范围：1~50。默认值：10。
   */
  Limit: number
  /**
   * 成员Uin。
   */
  MemberUin: number
  /**
   * 策略ID。可以通过[DescribeOrganizationMemberPolicies](https://cloud.tencent.com/document/product/850/82935)获取
   */
  PolicyId: number
}

/**
 * SCIM密钥
 */
export interface SCIMCredential {
  /**
   * 空间ID。z-前缀开头，后面是12位随机数字/小写字母
   */
  ZoneId?: string
  /**
   * SCIM密钥状态，Enabled已开启，Disabled已关闭。
   */
  Status?: string
  /**
   * SCIM密钥ID。scimcred-前缀开头，后面是12位随机数字/小写字母。
   */
  CredentialId?: string
  /**
   * SCIM密钥类型。
   */
  CredentialType?: string
  /**
   * SCIM 密钥的创建时间。
   */
  CreateTime?: string
  /**
   * SCIM 密钥的过期时间。
   */
  ExpireTime?: string
}

/**
 * GetUser请求参数结构体
 */
export interface GetUserRequest {
  /**
   * 用户 ID。
   */
  UserId: string
  /**
   * 空间 ID。
   */
  ZoneId: string
}

/**
 * UpdateOrganizationNode返回参数结构体
 */
export interface UpdateOrganizationNodeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AcceptJoinShareUnitInvitation返回参数结构体
 */
export interface AcceptJoinShareUnitInvitationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListJoinedGroupsForUser返回参数结构体
 */
export interface ListJoinedGroupsForUserResponse {
  /**
   * 查询返回结果下一页的令牌。  说明 只有IsTruncated为true时，才显示该参数。
   */
  NextToken?: string
  /**
   * 符合请求参数条件的数据总条数。
   */
  TotalCounts?: number
  /**
   * 每页的最大数据条数。
   */
  MaxResults?: number
  /**
   * 返回结果是否被截断。取值：  true：已截断。 false：未截断。
   */
  IsTruncated?: boolean
  /**
   * 用户加入的用户组列表
   */
  JoinedGroups?: Array<JoinedGroups>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeShareAreas请求参数结构体
 */
export interface DescribeShareAreasRequest {
  /**
   * 国际站：en，国内站：zh
   */
  Lang?: string
}

/**
 * DescribeOrganizationMemberAuthAccounts返回参数结构体
 */
export interface DescribeOrganizationMemberAuthAccountsResponse {
  /**
   * 列表
   */
  Items?: Array<OrgMemberAuthAccount>
  /**
   * 总数目
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 授权成员账号信息
 */
export interface RoleAssignmentInfo {
  /**
   * CAM 用户同步的身份 ID。取值：
当PrincipalType取值为Group时，该值为CIC用户组 ID（g-********）。
当PrincipalType取值为User时，该值为CIC用户 ID（u-********）。
   */
  PrincipalId?: string
  /**
   * CAM 用户同步的身份类型。取值：

User：表示该 CAM 用户同步的身份是CIC用户。
Group：表示该 CAM 用户同步的身份是CIC用户组。
   */
  PrincipalType?: string
  /**
   * 同步集团账号目标账号的UIN。
   */
  TargetUin?: number
  /**
   * 同步集团账号目标账号的类型，ManagerUin管理账号;MemberUin成员账号
   */
  TargetType?: string
  /**
   * 权限配置ID。
   */
  RoleConfigurationId?: string
}

/**
 * 企业组织单元
 */
export interface OrgNode {
  /**
   * 组织节点ID
   */
  NodeId?: number
  /**
   * 名称
   */
  Name?: string
  /**
   * 父节点ID
   */
  ParentNodeId?: number
  /**
   * 备注
   */
  Remark?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
  /**
   * 成员标签列表
   */
  Tags?: Array<Tag>
}

/**
 * 标签键值对
 */
export interface Tags {
  /**
   * 标签键。
   */
  TagKey?: string
  /**
   * 标签值。
   */
  TagValue?: string
}

/**
 * ListRoleConfigurationProvisionings请求参数结构体
 */
export interface ListRoleConfigurationProvisioningsRequest {
  /**
   * 空间 ID。
   */
  ZoneId: string
  /**
   * 权限配置ID。
   */
  RoleConfigurationId?: string
  /**
   * 每页的最大数据条数。  取值范围：1~100。  默认值：10。
   */
  MaxResults?: number
  /**
   * 查询返回结果下一页的令牌。首次调用 API 不需要NextToken。  当您首次调用 API 时，如果返回数据总条数超过MaxResults限制，数据会被截断，只返回MaxResults条数据，同时，返回参数IsTruncated为true，返回一个NextToken。您可以使用上一次返回的NextToken继续调用 API，其他请求参数保持不变，查询被截断的数据。您可以按此方法多次查询，直到IsTruncated为false，表示全部数据查询完毕。
   */
  NextToken?: string
  /**
   * 同步的集团账号目标账号的类型，ManagerUin管理账号;MemberUin成员账号
   */
  TargetType?: string
  /**
   * 同步的集团账号目标账号的UIN。
   */
  TargetUin?: number
  /**
   * Deployed: 部署成功 DeployedRequired：需要重新部署 DeployFailed：部署失败
   */
  DeploymentStatus?: string
  /**
   * 支持配置名称搜索。
   */
  Filter?: string
}

/**
 * GetSCIMSynchronizationStatus请求参数结构体
 */
export interface GetSCIMSynchronizationStatusRequest {
  /**
   * 空间ID。z-前缀开头，后面是12位随机数字/小写字母
   */
  ZoneId: string
}

/**
 * 组织身份
 */
export interface OrgIdentity {
  /**
   * 身份ID。
   */
  IdentityId?: number
  /**
   * 身份名称。
   */
  IdentityAliasName?: string
  /**
   * 描述。
   */
  Description?: string
  /**
   * 身份策略。
   */
  IdentityPolicy?: Array<IdentityPolicy>
  /**
   * 身份类型。 1-预设、 2-自定义
   */
  IdentityType?: number
  /**
   * 更新时间。
   */
  UpdateTime?: string
}

/**
 * DescribeIdentityCenter请求参数结构体
 */
export type DescribeIdentityCenterRequest = null

/**
 * DescribeOrganizationMembers返回参数结构体
 */
export interface DescribeOrganizationMembersResponse {
  /**
   * 成员列表。
   */
  Items?: Array<OrgMember>
  /**
   * 总数目。
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListPoliciesForTarget请求参数结构体
 */
export interface ListPoliciesForTargetRequest {
  /**
   * 账号uin或者节点id。
   */
  TargetId: number
  /**
   * 每页数量。默认值是 20，必须大于 0 且小于或等于 200
   */
  Rp?: number
  /**
   * 页码。默认值是 1，从 1开始，不能大于 200
   */
  Page?: number
  /**
   * 策略类型。默认值SERVICE_CONTROL_POLICY，取值范围：SERVICE_CONTROL_POLICY-服务控制策略、TAG_POLICY-标签策略
   */
  PolicyType?: string
  /**
   * 搜索关键字。按照策略名称搜索
   */
  Keyword?: string
}

/**
 * 用户信息
 */
export interface UserInfo {
  /**
   * 查询username。
   */
  UserName?: string
  /**
   * 用户的名。
   */
  FirstName?: string
  /**
   * 用户的姓。
   */
  LastName?: string
  /**
   * 用户的显示名称。
   */
  DisplayName?: string
  /**
   * 用户的描述。
   */
  Description?: string
  /**
   * 用户的电子邮箱。目录内必须唯一。
   */
  Email?: string
  /**
   * 用户状态 Enabled：启用， Disabled：禁用。
   */
  UserStatus?: string
  /**
   * 用户类型  Manual：手动创建，Synchronized：外部导入。
   */
  UserType?: string
  /**
   * 用户 ID
   */
  UserId?: string
  /**
   * 用户的创建时间
   */
  CreateTime?: string
  /**
   * 用户的修改时间
   */
  UpdateTime?: string
  /**
   * 是否选中
   */
  IsSelected?: boolean
}

/**
 * DeleteOrganizationMemberAuthIdentity返回参数结构体
 */
export interface DeleteOrganizationMemberAuthIdentityResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateOrganizationMemberEmailBind请求参数结构体
 */
export interface UpdateOrganizationMemberEmailBindRequest {
  /**
   * 成员Uin。
   */
  MemberUin: number
  /**
   * 绑定ID。可以通过[DescribeOrganizationMemberEmailBind](https://cloud.tencent.com/document/product/850/93332)获取
   */
  BindId: number
  /**
   * 邮箱地址。
   */
  Email: string
  /**
   * 国际区号。
   */
  CountryCode: string
  /**
   * 手机号。
   */
  Phone: string
}

/**
 * 任务状态信息。
 */
export interface TaskInfo {
  /**
   * 任务ID。
   */
  TaskId?: string
  /**
   * 权限配置ID。
   */
  RoleConfigurationId?: string
  /**
   * 权限配置名称。
   */
  RoleConfigurationName?: string
  /**
   * 授权的目标成员账号的UIN
   */
  TargetUin?: number
  /**
   * 同步的目标账号的类型，ManagerUin管理账号;MemberUin成员账号
   */
  TargetType?: string
  /**
   * 用户授权的身份ID,如果是身份类型是CIC用户,则为用户ID; 如果是用户组，则为用户组ID;
   */
  PrincipalId?: string
  /**
   * 用户授权的身份类型, User代表CIC用户, Group代表CIC用户组
   */
  PrincipalType?: string
  /**
   * 任务类型。
   */
  TaskType?: string
  /**
   * InProgress：任务执行中。 Success：任务执行成功。 Failed：任务执行失败。
   */
  Status?: string
  /**
   * 失败原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailureReason?: string
}

/**
 * DeleteOrganizationMemberAuthIdentity请求参数结构体
 */
export interface DeleteOrganizationMemberAuthIdentityRequest {
  /**
   * 成员Uin。
   */
  MemberUin: number
  /**
   * 身份ID。可以通过[ListOrganizationIdentity](https://cloud.tencent.com/document/product/850/82934)获取
   */
  IdentityId: number
}

/**
 * UpdateUser请求参数结构体
 */
export interface UpdateUserRequest {
  /**
   * 空间 ID。
   */
  ZoneId: string
  /**
   * 用户 ID。
   */
  UserId: string
  /**
   * 用户的名。
   */
  NewFirstName?: string
  /**
   * 用户的姓。
   */
  NewLastName?: string
  /**
   * 用户的显示名称。
   */
  NewDisplayName?: string
  /**
   * 用户的描述。
   */
  NewDescription?: string
  /**
   * 用户的电子邮箱。
   */
  NewEmail?: string
}

/**
 * 查询某个指定SCP策略关联的目标列表
 */
export interface ListTargetsForPolicyNode {
  /**
   * scp账号uin或节点Id
   */
  Uin: number
  /**
   * 关联类型 1-节点关联 2-用户关联
   */
  RelatedType: number
  /**
   * 账号或者节点名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name: string
  /**
   * 绑定时间
   */
  AddTime: string
}

/**
 * ListGroups请求参数结构体
 */
export interface ListGroupsRequest {
  /**
   * 空间 ID。
   */
  ZoneId: string
  /**
   * 查询返回结果下一页的令牌。首次调用 API 不需要NextToken。  当您首次调用 API 时，如果返回数据总条数超过MaxResults限制，数据会被截断，只返回MaxResults条数据，同时，返回参数IsTruncated为true，返回一个NextToken。您可以使用上一次返回的NextToken继续调用 API，其他请求参数保持不变，查询被截断的数据。您可以按此方法多次查询，直到IsTruncated为false，表示全部数据查询完毕。
   */
  NextToken?: string
  /**
   * 每页的最大数据条数。  取值范围：1~100。  默认值：10。
   */
  MaxResults?: number
  /**
   * 过滤条件。  格式：<Attribute> <Operator> <Value>，不区分大小写。目前，<Attribute>只支持GroupName，<Operator>只支持eq（Equals）和sw（Start With）。  示例：Filter = "GroupName sw test"，表示查询名称以 test 开头的全部用户组。Filter = "GroupName eq testgroup"，表示查询名称为 testgroup 的用户组。
   */
  Filter?: string
  /**
   * 用户组的类型  Manual：手动创建，Synchronized：外部导入。
   */
  GroupType?: string
  /**
   * 筛选的用户，该用户关联的用户组会返回IsSelected=1
   */
  FilterUsers?: Array<string>
  /**
   * 排序的字段，目前只支持CreateTime，默认是CreateTime字段
   */
  SortField?: string
  /**
   * 排序类型：Desc 倒序 Asc  正序，需要您和SortField一起设置
   */
  SortType?: string
  /**
   * 翻页offset. 不要与NextToken同时使用，优先使用NextToken
   */
  Offset?: number
}

/**
 * UpdateRoleConfiguration请求参数结构体
 */
export interface UpdateRoleConfigurationRequest {
  /**
   * 空间 ID
   */
  ZoneId: string
  /**
   * 权限配置 ID
   */
  RoleConfigurationId: string
  /**
   * 新的权限配置描述。  长度：最大 1024 个字符。
   */
  NewDescription?: string
  /**
   * 新的会话持续时间。  CIC 用户使用权限配置访问集团账号目标账号时，会话最多保持的时间。  单位：秒。  取值范围：900-43200（15 分钟-12 小时）。
   */
  NewSessionDuration?: number
  /**
   * 新的初始访问页面。  CIC 用户使用权限配置访问集团账号目标账号时，初始访问的页面地址。  该页面必须是腾讯云控制台页面。
   */
  NewRelayState?: string
}

/**
 * DetachPolicy请求参数结构体
 */
export interface DetachPolicyRequest {
  /**
   * 解绑策略目标ID。成员Uin或部门ID
   */
  TargetId: number
  /**
   * 目标类型。取值范围：NODE-部门、MEMBER-成员
   */
  TargetType: string
  /**
   * 策略ID。
   */
  PolicyId: number
  /**
   * 策略类型。默认值SERVICE_CONTROL_POLICY，取值范围：SERVICE_CONTROL_POLICY-服务控制策略、TAG_POLICY-标签策略
   */
  Type?: string
}

/**
 * UpdateOrganizationIdentity请求参数结构体
 */
export interface UpdateOrganizationIdentityRequest {
  /**
   * 身份ID。可以通过[ListOrganizationIdentity](https://cloud.tencent.com/document/product/850/82934)获取
   */
  IdentityId: number
  /**
   * 身份描述。
   */
  Description: string
  /**
   * 身份策略。
   */
  IdentityPolicy: Array<IdentityPolicy>
}

/**
 * ListOrgServiceAssignMember返回参数结构体
 */
export interface ListOrgServiceAssignMemberResponse {
  /**
   * 总数。
   */
  Total?: number
  /**
   * 委派管理员列表。
   */
  Items?: Array<OrganizationServiceAssignMember>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SendOrgMemberAccountBindEmail请求参数结构体
 */
export interface SendOrgMemberAccountBindEmailRequest {
  /**
   * 成员Uin。
   */
  MemberUin: number
  /**
   * 绑定ID。可以通过[DescribeOrganizationMemberEmailBind](https://cloud.tencent.com/document/product/850/93332)获取
   */
  BindId: number
}

/**
 * DeleteRoleAssignment返回参数结构体
 */
export interface DeleteRoleAssignmentResponse {
  /**
   * 任务详情
   */
  Task?: TaskInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisablePolicyType请求参数结构体
 */
export interface DisablePolicyTypeRequest {
  /**
   * 企业组织Id。可以调用[DescribeOrganization](https://cloud.tencent.com/document/product/850/67059)获取
   */
  OrganizationId: number
  /**
   * 策略类型。默认值SERVICE_CONTROL_POLICY，取值范围：SERVICE_CONTROL_POLICY-服务控制策略、TAG_POLICY-标签策略
   */
  PolicyType: string
}

/**
 * DescribeEffectivePolicy返回参数结构体
 */
export interface DescribeEffectivePolicyResponse {
  /**
   * 有效策略。
   */
  EffectivePolicy?: EffectivePolicy
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateOrgServiceAssign返回参数结构体
 */
export interface CreateOrgServiceAssignResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddOrganizationMemberEmail返回参数结构体
 */
export interface AddOrganizationMemberEmailResponse {
  /**
   * 绑定Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  BindId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddShareUnitMembers返回参数结构体
 */
export interface AddShareUnitMembersResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListGroups返回参数结构体
 */
export interface ListGroupsResponse {
  /**
   * 查询返回结果下一页的令牌。  说明 只有IsTruncated为true时，才显示该参数。
   */
  NextToken?: string
  /**
   * 用户组列表。
   */
  Groups?: Array<GroupInfo>
  /**
   * 每页的最大数据条数。
   */
  MaxResults?: number
  /**
   * 符合请求参数条件的数据总条数。
   */
  TotalCounts?: number
  /**
   * 返回结果是否被截断。取值：  true：已截断。 false：未截断。
   */
  IsTruncated?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateOrganizationMemberPolicy请求参数结构体
 */
export interface CreateOrganizationMemberPolicyRequest {
  /**
   * 成员Uin。
   */
  MemberUin: number
  /**
   * 策略名。最大长度为128个字符，支持英文字母、数字、符号+=,.@_-
   */
  PolicyName: string
  /**
   * 成员访问身份ID。可以调用[DescribeOrganizationMemberAuthIdentities](https://cloud.tencent.com/document/product/850/82936)获取
   */
  IdentityId: number
  /**
   * 描述。
   */
  Description?: string
}

/**
 * SAML 签名证书信息
 */
export interface SAMLIdPCertificate {
  /**
   * 证书序列号。
   */
  SerialNumber?: string
  /**
   * 证书颁发者。
   */
  Issuer?: string
  /**
   * 证书版本。
   */
  Version?: number
  /**
   * 证书ID。
   */
  CertificateId?: string
  /**
   * PEM 格式的公钥证书（Base64 编码）。
   */
  PublicKey?: string
  /**
   * 证书的签名算法。
   */
  SignatureAlgorithm?: string
  /**
   * 证书的过期时间。
   */
  NotAfter?: string
  /**
   * 证书的创建时间。
   */
  NotBefore?: string
  /**
   * 证书的主体。
   */
  Subject?: string
  /**
   * PEM 格式的 X509 证书。
   */
  X509Certificate?: string
}

/**
 * CreateOrganization请求参数结构体
 */
export type CreateOrganizationRequest = null

/**
 * ListJoinedGroupsForUser请求参数结构体
 */
export interface ListJoinedGroupsForUserRequest {
  /**
   * 空间 ID。
   */
  ZoneId: string
  /**
   * 用户ID
   */
  UserId: string
  /**
   * 查询返回结果下一页的令牌。首次调用 API 不需要NextToken。  当您首次调用 API 时，如果返回数据总条数超过MaxResults限制，数据会被截断，只返回MaxResults条数据，同时，返回参数IsTruncated为true，返回一个NextToken。您可以使用上一次返回的NextToken继续调用 API，其他请求参数保持不变，查询被截断的数据。您可以按此方法多次查询，直到IsTruncated为false，表示全部数据查询完毕。
   */
  NextToken?: string
  /**
   * 每页的最大数据条数。  取值范围：1~100。  默认值：10。
   */
  MaxResults?: number
}

/**
 * UpdateRoleConfiguration返回参数结构体
 */
export interface UpdateRoleConfigurationResponse {
  /**
   * 权限配置详情
   */
  RoleConfigurationInfo?: RoleConfiguration
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AttachPolicy返回参数结构体
 */
export interface AttachPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateOrganizationMembersPolicy请求参数结构体
 */
export interface CreateOrganizationMembersPolicyRequest {
  /**
   * 成员Uin列表。最多10个
   */
  MemberUins: Array<number | bigint>
  /**
   * 策略名。长度1～128个字符，支持英文字母、数字、符号+=,.@_-
   */
  PolicyName: string
  /**
   * 成员访问身份ID。可以通过[ListOrganizationIdentity](https://cloud.tencent.com/document/product/850/82934)获取
   */
  IdentityId: number
  /**
   * 策略描述。最大长度为128个字符
   */
  Description?: string
}

/**
 * CheckAccountDelete请求参数结构体
 */
export interface CheckAccountDeleteRequest {
  /**
   * 成员Uin。
   */
  MemberUin: number
}

/**
 * 组织产品财务信息
 */
export interface OrgProductFinancial {
  /**
   * 产品Code。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductName: string
  /**
   * 产品名。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductCode: string
  /**
   * 产品消耗，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCost: number
  /**
   * 占比%。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Ratio?: string
}

/**
 * GetExternalSAMLIdentityProvider请求参数结构体
 */
export interface GetExternalSAMLIdentityProviderRequest {
  /**
   * 空间ID。
   */
  ZoneId: string
}

/**
 * DetachPolicy返回参数结构体
 */
export interface DetachPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRoleConfiguration返回参数结构体
 */
export interface DeleteRoleConfigurationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集团服务委派成员信息
 */
export interface OrganizationServiceAssignMember {
  /**
   * 集团服务ID。
   */
  ServiceId?: number
  /**
   * 集团服务产品名称。
   */
  ProductName?: string
  /**
   * 委派管理员Uin。
   */
  MemberUin?: number
  /**
   * 委派管理员名称。
   */
  MemberName?: string
  /**
   * 启用状态 。取值：0-服务无启用状态  1-已启用  2-未启用
   */
  UsageStatus?: number
  /**
   * 委派时间。
   */
  CreateTime?: string
  /**
   * 委派管理员管理范围。取值: 1-全部成员  2-部分成员
   */
  ManagementScope?: number
  /**
   * 管理的成员Uin列表。ManagementScope值为2时该参数有效
   */
  ManagementScopeMembers?: Array<MemberMainInfo>
  /**
   * 管理的部门ID列表。ManagementScope值为2时该参数有效
   */
  ManagementScopeNodes?: Array<NodeMainInfo>
}

/**
 * AddShareUnit返回参数结构体
 */
export interface AddShareUnitResponse {
  /**
   * 共享单元ID。
   */
  UnitId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeShareUnitResources请求参数结构体
 */
export interface DescribeShareUnitResourcesRequest {
  /**
   * 共享单元ID。
   */
  UnitId: string
  /**
   * 共享单元地域。
   */
  Area: string
  /**
   * 偏移量。取值是limit的整数倍，默认值 : 0
   */
  Offset: number
  /**
   * 限制数目。取值范围：1~50。
   */
  Limit: number
  /**
   * 搜索关键字。支持产品资源ID搜索。
   */
  SearchKey?: string
  /**
   * 共享资源类型。支持共享的资源类型,请参见[资源共享概述](https://cloud.tencent.com/document/product/850/59489)
   */
  Type?: string
}

/**
 * DescribeOrganizationFinancialByProduct返回参数结构体
 */
export interface DescribeOrganizationFinancialByProductResponse {
  /**
   * 当月总消耗。
   */
  TotalCost?: number
  /**
   * 产品消耗详情。
   */
  Items?: Array<OrgProductFinancial>
  /**
   * 总数目。
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RemoveUserFromGroup返回参数结构体
 */
export interface RemoveUserFromGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetGroup返回参数结构体
 */
export interface GetGroupResponse {
  /**
   * 用户组信息
   */
  GroupInfo?: GroupInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOrganizationFinancialByProduct请求参数结构体
 */
export interface DescribeOrganizationFinancialByProductRequest {
  /**
   * 查询开始月份。格式：yyyy-mm，例如：2021-01
   */
  Month: string
  /**
   * 限制数目。取值范围：1~50，默认值：10
   */
  Limit?: number
  /**
   * 偏移量。取值是limit的整数倍，默认值 : 0
   */
  Offset?: number
  /**
   * 查询结束月份。格式：yyyy-mm，例如：2021-01,默认值为查询开始月份
   */
  EndMonth?: string
  /**
   * 查询成员列表。 最大100个
   */
  MemberUins?: Array<number | bigint>
  /**
   * 查询产品列表。 最大100个
   */
  ProductCodes?: Array<string>
}

/**
 * 企业组织策略列表
 */
export interface ListPolicyNode {
  /**
   * 策略创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  AddTime: string
  /**
   * 策略绑定次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AttachedTimes: number
  /**
   * 策略描述信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description: string
  /**
   * 策略名称
   */
  PolicyName: string
  /**
   * 策略Id
   */
  PolicyId: number
  /**
   * 策略更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime: string
  /**
   * 策略类型 1-自定义 2-预设
   */
  Type: number
}

/**
 * 资源及关联的标签
 */
export interface ResourceTagMapping {
  /**
   * 资源六段式。腾讯云使用资源六段式描述一个资源。
例如：qcs::${ServiceType}:${Region}:${Account}:${ResourcePreifx}/${ResourceId}。
   */
  Resource?: string
  /**
   * 合规详情。
   */
  ComplianceDetails?: TagComplianceDetails
  /**
   * 资源标签。
   */
  Tags?: Array<Tags>
}

/**
 * CreateOrganizationMemberPolicy返回参数结构体
 */
export interface CreateOrganizationMemberPolicyResponse {
  /**
   * 策略ID。
   */
  PolicyId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateSCIMSynchronizationStatus请求参数结构体
 */
export interface UpdateSCIMSynchronizationStatusRequest {
  /**
   * 空间ID。z-前缀开头，后面是12位随机数字/小写字母
   */
  ZoneId: string
  /**
   * SCIM 同步状态。Enabled：启用。Disabled：禁用。
   */
  SCIMSynchronizationStatus: string
}

/**
 * AcceptJoinShareUnitInvitation请求参数结构体
 */
export interface AcceptJoinShareUnitInvitationRequest {
  /**
   * 共享单元ID。
   */
  UnitId: string
}

/**
 * CancelOrganizationMemberAuthAccount返回参数结构体
 */
export interface CancelOrganizationMemberAuthAccountResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetTaskStatus请求参数结构体
 */
export interface GetTaskStatusRequest {
  /**
   * 空间ID。
   */
  ZoneId: string
  /**
   * 任务ID。
   */
  TaskId: string
}

/**
 * AddShareUnitResources请求参数结构体
 */
export interface AddShareUnitResourcesRequest {
  /**
   * 共享单元ID。
   */
  UnitId: string
  /**
   * 共享单元地域。
   */
  Area: string
  /**
   * 共享资源类型。支持共享的资源类型,请参见[资源共享概述](https://cloud.tencent.com/document/product/850/59489)
   */
  Type: string
  /**
   * 共享资源列表。最大10个。
   */
  Resources: Array<ProductResource>
}

/**
 * GetRoleConfiguration返回参数结构体
 */
export interface GetRoleConfigurationResponse {
  /**
   * 权限配置详情
   */
  RoleConfigurationInfo?: RoleConfiguration
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 共享成员信息
 */
export interface ShareMember {
  /**
   * 共享成员Uin。
   */
  ShareMemberUin: number
}

/**
 * SetExternalSAMLIdentityProvider返回参数结构体
 */
export interface SetExternalSAMLIdentityProviderResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListPoliciesForTarget返回参数结构体
 */
export interface ListPoliciesForTargetResponse {
  /**
   * 总数。
   */
  TotalNum?: number
  /**
   * 目标关联的策略列表。
   */
  List?: Array<ListPoliciesForTarget>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteShareUnitMembers请求参数结构体
 */
export interface DeleteShareUnitMembersRequest {
  /**
   * 共享单元ID。
   */
  UnitId: string
  /**
   * 共享单元地域。
   */
  Area: string
  /**
   * 成员列表。
   */
  Members: Array<ShareMember>
}

/**
 * OpenIdentityCenter返回参数结构体
 */
export interface OpenIdentityCenterResponse {
  /**
   * 空间ID。z-前缀开头，后面是12位随机数字/小写字母
   */
  ZoneId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 不允许删除的原因。
 */
export interface NotAllowReason {
  /**
   * 是否创建的成员。true-是、false-否；成员不是创建的成员不允许删除
   */
  IsCreateMember?: boolean
  /**
   * 成员删除许可。true-开启、false-关闭；成员删除许可关闭时不允许删除
   */
  DeletionPermission?: boolean
  /**
   * 是否可信服务委派管理员。true-是、false-否；成员是可信服务委派管理员不允许删除
   */
  IsAssignManager?: boolean
  /**
   * 是否主体管理员。true-是、false-否；成员是主体管理员不允许删除
   */
  IsAuthManager?: boolean
  /**
   * 是否共享资源管理员。true-是、false-否；成员是共享资源管理员不允许删除
   */
  IsShareManager?: boolean
  /**
   * 成员是否设置了操作审批。true-是、false-否；成员设置了操作审批时不允许删除
   */
  OperateProcess?: boolean
  /**
   * 是否允许解除成员财务权限。true-是、false-否；成员不能解除财务权限时不允许删除
   */
  BillingPermission?: boolean
  /**
   * 存在的资源列表。账号存在资源时不允许删除
   */
  ExistResources?: Array<string>
  /**
   * 检测失败的资源列表。账号有资源检测失败时不允许删除。
   */
  DetectFailedResources?: Array<string>
}

/**
 * ListUsers请求参数结构体
 */
export interface ListUsersRequest {
  /**
   * 空间 ID。
   */
  ZoneId: string
  /**
   * 用户状态 Enabled：启用， Disabled：禁用。
   */
  UserStatus?: string
  /**
   * 用户类型  Manual：手动创建，Synchronized：外部导入。
   */
  UserType?: string
  /**
   * 过滤条件。  目前仅支持用户名，邮箱，用户userId，描述
   */
  Filter?: string
  /**
   * 每页的最大数据条数。  取值范围：1~100。  默认值：10。
   */
  MaxResults?: number
  /**
   * 查询返回结果下一页的令牌。首次调用 API 不需要NextToken。  当您首次调用 API 时，如果返回数据总条数超过MaxResults限制，数据会被截断，只返回MaxResults条数据，同时，返回参数IsTruncated为true，返回一个NextToken。您可以使用上一次返回的NextToken继续调用 API，其他请求参数保持不变，查询被截断的数据。您可以按此方法经过多次查询，直到IsTruncated为false时，表示全部数据查询完毕。
   */
  NextToken?: string
  /**
   * 筛选的用户组，该用户组关联的子用户会返回IsSelected=1
   */
  FilterGroups?: Array<string>
  /**
   * 排序的字段，目前只支持CreateTime，默认是CreateTime字段
   */
  SortField?: string
  /**
   * 排序类型：Desc 倒序 Asc  正序，需要您和SortField一起设置
   */
  SortType?: string
  /**
   * 翻页offset. 不要与NextToken同时使用，优先使用NextToken
   */
  Offset?: number
}

/**
 * DescribeOrganizationMemberAuthIdentities返回参数结构体
 */
export interface DescribeOrganizationMemberAuthIdentitiesResponse {
  /**
   * 授权身份列表。
   */
  Items?: Array<OrgMemberAuthIdentity>
  /**
   * 总数目。
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRoleAssignment返回参数结构体
 */
export interface CreateRoleAssignmentResponse {
  /**
   * 任务详情。
   */
  Tasks?: Array<TaskInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 组织成员被授权的策略
 */
export interface OrgMemberPolicy {
  /**
   * 策略ID。
   */
  PolicyId?: number
  /**
   * 策略名。
   */
  PolicyName?: string
  /**
   * 身份ID。
   */
  IdentityId?: number
  /**
   * 身份角色名。
   */
  IdentityRoleName?: string
  /**
   * 身份角色别名。
   */
  IdentityRoleAliasName?: string
  /**
   * 描述。
   */
  Description?: string
  /**
   * 创建时间。
   */
  CreateTime?: string
  /**
   * 更新时间。
   */
  UpdateTime?: string
}

/**
 * CreateUser请求参数结构体
 */
export interface CreateUserRequest {
  /**
   * 空间 ID。
   */
  ZoneId: string
  /**
   * 用户名称。空间内必须唯一。不支持修改。  格式：包含数字、英文字母和特殊符号+ = , . @ - _ 。  长度：最大 64 个字符
   */
  UserName: string
  /**
   * 用户的姓。  长度：最大 64 个字符。
   */
  FirstName?: string
  /**
   * 用户的名。  长度：最大 64 个字符。
   */
  LastName?: string
  /**
   * 用户的显示名称。  长度：最大 256 个字符。
   */
  DisplayName?: string
  /**
   * 用户的描述。  长度：最大 1024 个字符。
   */
  Description?: string
  /**
   * 用户的电子邮箱。目录内必须唯一。  长度：最大 128 个字符。
   */
  Email?: string
  /**
   * 用户的状态。取值：  Enabled（默认值）：启用。 Disabled：禁用。
   */
  UserStatus?: string
  /**
   * 用户类型  Manual：手动创建，Synchronized：外部导入
   */
  UserType?: string
}

/**
 * QuitOrganization返回参数结构体
 */
export interface QuitOrganizationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetZoneStatistics返回参数结构体
 */
export interface GetZoneStatisticsResponse {
  /**
   * 空间的统计信息。
   */
  ZoneStatistics?: ZoneStatistics
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdatePolicy返回参数结构体
 */
export interface UpdatePolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteShareUnitMembers返回参数结构体
 */
export interface DeleteShareUnitMembersResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateGroup返回参数结构体
 */
export interface UpdateGroupResponse {
  /**
   * 用户组信息。
   */
  GroupInfo?: GroupInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListExternalSAMLIdPCertificates请求参数结构体
 */
export interface ListExternalSAMLIdPCertificatesRequest {
  /**
   * 空间ID。
   */
  ZoneId: string
}

/**
 * DeleteOrganizationIdentity返回参数结构体
 */
export interface DeleteOrganizationIdentityResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOrganizationMemberEmailBind请求参数结构体
 */
export interface DescribeOrganizationMemberEmailBindRequest {
  /**
   * 成员Uin。
   */
  MemberUin: number
}

/**
 * RemovePermissionPolicyFromRoleConfiguration返回参数结构体
 */
export interface RemovePermissionPolicyFromRoleConfigurationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListPolicies请求参数结构体
 */
export interface ListPoliciesRequest {
  /**
   * 每页数量。默认值是 20，必须大于 0 且小于或等于 200
   */
  Rp?: number
  /**
   * 页码。默认值是 1，从 1开始，不能大于 200
   */
  Page?: number
  /**
   * 查询范围。取值范围： All-获取所有策略、QCS-只获取预设策略、Local-只获取自定义策略，默认值：All
   */
  Scope?: string
  /**
   * 搜索关键字。按照策略名搜索
   */
  Keyword?: string
  /**
   * 策略类型。默认值SERVICE_CONTROL_POLICY，取值范围：SERVICE_CONTROL_POLICY-服务控制策略、TAG_POLICY-标签策略
   */
  PolicyType?: string
}

/**
 * 企业组织成员
 */
export interface OrgMember {
  /**
   * 成员Uin
   */
  MemberUin?: number
  /**
   * 成员名
   */
  Name?: string
  /**
   * 成员类型，邀请：Invite， 创建：Create
   */
  MemberType?: string
  /**
   * 关系策略类型
   */
  OrgPolicyType?: string
  /**
   * 关系策略名
   */
  OrgPolicyName?: string
  /**
   * 关系策略权限
   */
  OrgPermission?: Array<OrgPermission>
  /**
   * 所属节点ID
   */
  NodeId?: number
  /**
   * 所属节点名
   */
  NodeName?: string
  /**
   * 备注
   */
  Remark?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
  /**
   * 是否允许成员退出。允许：Allow，不允许：Denied。
   */
  IsAllowQuit?: string
  /**
   * 代付者Uin
   */
  PayUin?: string
  /**
   * 代付者名称
   */
  PayName?: string
  /**
   * 管理身份
   */
  OrgIdentity?: Array<MemberIdentity>
  /**
   * 安全信息绑定状态  未绑定：Unbound，待激活：Valid，绑定成功：Success，绑定失败：Failed
   */
  BindStatus?: string
  /**
   * 成员权限状态 已确认：Confirmed ，待确认：UnConfirmed
   */
  PermissionStatus?: string
  /**
   * 成员标签列表
   */
  Tags?: Array<Tag>
}

/**
 * 成员和子账号的授权关系
 */
export interface OrgMemberAuthAccount {
  /**
   * 组织子账号Uin。
   */
  OrgSubAccountUin?: number
  /**
   * 策略ID。
   */
  PolicyId?: number
  /**
   * 策略名。
   */
  PolicyName?: string
  /**
   * 身份ID。
   */
  IdentityId?: number
  /**
   * 身份角色名。
   */
  IdentityRoleName?: string
  /**
   * 身份角色别名。
   */
  IdentityRoleAliasName?: string
  /**
   * 创建时间。
   */
  CreateTime?: string
  /**
   * 更新时间。
   */
  UpdateTime?: string
  /**
   * 子账号名称
   */
  OrgSubAccountName?: string
}

/**
 * CreateOrganizationMember请求参数结构体
 */
export interface CreateOrganizationMemberRequest {
  /**
   * 成员名称。最大长度为25个字符，支持英文字母、数字、汉字、符号+@、&._[]-:,
   */
  Name: string
  /**
   * 关系策略。取值：Financial
   */
  PolicyType: string
  /**
   * 成员财务权限ID列表。取值：1-查看账单、2-查看余额、3-资金划拨、4-合并出账、5-开票、6-优惠继承、7-代付费，1、2 默认必须
   */
  PermissionIds: Array<number | bigint>
  /**
   * 成员所属部门的节点ID。可以通过[DescribeOrganizationNodes](https://cloud.tencent.com/document/product/850/82926)获取
   */
  NodeId: number
  /**
   * 账号名称。最大长度为25个字符，支持英文字母、数字、汉字、符号+@、&._[]-:,
   */
  AccountName: string
  /**
   * 备注。
   */
  Remark?: string
  /**
   * 成员创建记录ID。创建异常重试时需要
   */
  RecordId?: number
  /**
   * 代付者Uin。成员代付费时需要
   */
  PayUin?: string
  /**
   * 成员访问身份ID列表。可以调用ListOrganizationIdentity获取，1默认支持
   */
  IdentityRoleID?: Array<number | bigint>
  /**
   * 认证主体关系ID。给不同主体创建成员时需要，可以调用DescribeOrganizationAuthNode获取
   */
  AuthRelationId?: number
  /**
   * 成员标签列表。最大10个
   */
  Tags?: Array<Tag>
}

/**
 * 野鹤实名互信申请证明文件
 */
export interface AuthRelationFile {
  /**
   * 文件名。
   */
  Name: string
  /**
   * 文件路径。
   */
  Url: string
}

/**
 * UpdateSCIMSynchronizationStatus返回参数结构体
 */
export interface UpdateSCIMSynchronizationStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePolicy请求参数结构体
 */
export interface CreatePolicyRequest {
  /**
   * 策略名。
长度为1~128个字符，可以包含汉字、英文字母、数字和下划线（_）
   */
  Name: string
  /**
   * 策略内容。参考CAM策略语法
   */
  Content: string
  /**
   * 策略类型。默认值SERVICE_CONTROL_POLICY，取值范围：SERVICE_CONTROL_POLICY-服务控制策略、TAG_POLICY-标签策略
   */
  Type: string
  /**
   * 策略描述。
   */
  Description?: string
}

/**
 * 组织成员可授权的身份
 */
export interface OrgMemberAuthIdentity {
  /**
   * 身份ID。
   */
  IdentityId?: number
  /**
   * 身份的角色名。
   */
  IdentityRoleName?: string
  /**
   * 身份的角色别名。
   */
  IdentityRoleAliasName?: string
  /**
   * 身份描述。
   */
  Description?: string
  /**
   * 首次配置成功的时间。
   */
  CreateTime?: string
  /**
   * 最后一次配置成功的时间。
   */
  UpdateTime?: string
  /**
   * 身份类型。取值： 1-预设身份  2-自定义身份
   */
  IdentityType?: number
  /**
   * 配置状态。取值：1-配置完成 2-需重新配置
   */
  Status?: number
  /**
   * 成员Uin。
   */
  MemberUin?: number
  /**
   * 成员名称。
   */
  MemberName?: string
}

/**
 * 策略详情
 */
export interface PolicyDetail {
  /**
   * 策略ID。
   */
  PolicyId: number
  /**
   * 策略名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PolicyName?: string
}

/**
 * DescribePolicyConfig请求参数结构体
 */
export interface DescribePolicyConfigRequest {
  /**
   * 企业组织Id。可以调用[DescribeOrganization](https://cloud.tencent.com/document/product/850/67059)获取
   */
  OrganizationId: number
  /**
   * 策略类型。默认值0，取值范围：0-服务控制策略、1-标签策略
   */
  Type?: number
}

/**
 * AddExternalSAMLIdPCertificate请求参数结构体
 */
export interface AddExternalSAMLIdPCertificateRequest {
  /**
   * 空间ID。
   */
  ZoneId: string
  /**
   * PEM 格式的 X509 证书。  由 SAML 身份提供商提供。
   */
  X509Certificate: string
}

/**
 * GetProvisioningTaskStatus请求参数结构体
 */
export interface GetProvisioningTaskStatusRequest {
  /**
   * 空间ID。
   */
  ZoneId: string
  /**
   * 任务ID。
   */
  TaskId: string
}

/**
 * CheckAccountDelete返回参数结构体
 */
export interface CheckAccountDeleteResponse {
  /**
   * 成员是否允许删除。 true-是、false-否
   */
  AllowDelete?: boolean
  /**
   * 不允许删除原因。
   */
  NotAllowReason?: NotAllowReason
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePolicy返回参数结构体
 */
export interface DescribePolicyResponse {
  /**
   * 策略Id。
   */
  PolicyId?: number
  /**
   * 策略名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PolicyName?: string
  /**
   * 策略类型。1-自定义 2-预设策略
   */
  Type?: number
  /**
   * 策略描述。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 策略文档。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PolicyDocument?: string
  /**
   * 策略更新时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 策略创建时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AddTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SAML服务提供商信息
 */
export interface SAMLServiceProvider {
  /**
   * https://tencentcloudsso.com/saml/sp/z-sjw8ensa**
   */
  EntityId?: string
  /**
   * 空间ID。
   */
  ZoneId?: string
  /**
   * SP 元数据文档（Base64 编码）。
   */
  EncodedMetadataDocument?: string
  /**
   * SP 的 ACS URL。
   */
  AcsUrl?: string
}

/**
 * UpdateUserStatus返回参数结构体
 */
export interface UpdateUserStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateGroup请求参数结构体
 */
export interface UpdateGroupRequest {
  /**
   * 空间 ID。
   */
  ZoneId: string
  /**
   * 用户组ID。
   */
  GroupId: string
  /**
   * 新的用户组名称。
   */
  NewGroupName?: string
  /**
   * 新的用户组描述。
   */
  NewDescription?: string
}

/**
 * ListExternalSAMLIdPCertificates返回参数结构体
 */
export interface ListExternalSAMLIdPCertificatesResponse {
  /**
   * 符合请求参数条件的数据总条数。
   */
  TotalCounts?: number
  /**
   * SAML 签名证书列表
   */
  SAMLIdPCertificates?: Array<SAMLIdPCertificate>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAccount请求参数结构体
 */
export interface DeleteAccountRequest {
  /**
   * 成员Uin。
   */
  MemberUin: number
}

/**
 * DescribeShareUnitMembers请求参数结构体
 */
export interface DescribeShareUnitMembersRequest {
  /**
   * 共享单元ID。
   */
  UnitId: string
  /**
   * 共享单元地域。
   */
  Area: string
  /**
   * 偏移量。取值是limit的整数倍，默认值 : 0
   */
  Offset: number
  /**
   * 限制数目。取值范围：1~50。
   */
  Limit: number
  /**
   * 搜索关键字。支持成员Uin搜索。
   */
  SearchKey?: string
}

/**
 * RemoveExternalSAMLIdPCertificate请求参数结构体
 */
export interface RemoveExternalSAMLIdPCertificateRequest {
  /**
   * 空间ID。
   */
  ZoneId: string
  /**
   * PEM 格式的 X509 证书。  由 SAML 身份提供商提供。
   */
  CertificateId: string
}

/**
 * 查询目标关联的SCP策略列表
 */
export interface ListPoliciesForTarget {
  /**
   * 策略Id
   */
  StrategyId: number
  /**
   * 策略名称
   */
  StrategyName: string
  /**
   * 备注信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark: string
  /**
   * 关联的账号或节点
   */
  Uin: number
  /**
   * 关联类型 1-节点 2-用户
   */
  Type: number
  /**
   * 策略创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  AddTime: string
  /**
   * 策略更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime: string
  /**
   * 部门名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name: string
  /**
   * 策略绑定时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  AttachTime: string
}

/**
 * GetUserSyncProvisioning请求参数结构体
 */
export interface GetUserSyncProvisioningRequest {
  /**
   * 空间ID。
   */
  ZoneId: string
  /**
   * CAM 用户同步的 ID。
   */
  UserProvisioningId: string
}

/**
 * CreateOrganizationMemberAuthIdentity请求参数结构体
 */
export interface CreateOrganizationMemberAuthIdentityRequest {
  /**
   * 成员Uin列表。最多10个
   */
  MemberUins: Array<number | bigint>
  /**
   * 身份Id列表。最多5个，可以通过[ListOrganizationIdentity](https://cloud.tencent.com/document/product/850/82934)获取
   */
  IdentityIds: Array<number | bigint>
}

/**
 * DescribeOrganizationFinancialByMonth请求参数结构体
 */
export interface DescribeOrganizationFinancialByMonthRequest {
  /**
   * 查询月数。取值范围：1~6，默认值：6
   */
  Limit?: number
  /**
   * 查询结束月份。格式：yyyy-mm，例如：2021-01
   */
  EndMonth?: string
  /**
   * 查询成员列表。 最大100个
   */
  MemberUins?: Array<number | bigint>
  /**
   * 查询产品列表。 最大100个
   */
  ProductCodes?: Array<string>
}

/**
 * ListRoleConfigurationProvisionings返回参数结构体
 */
export interface ListRoleConfigurationProvisioningsResponse {
  /**
   * 查询返回结果下一页的令牌。  说明 只有IsTruncated为true时，才显示该参数。
   */
  NextToken?: string
  /**
   * 符合请求参数条件的数据总条数。
   */
  TotalCounts?: number
  /**
   * 每页的最大数据条数。
   */
  MaxResults?: number
  /**
   * 返回结果是否被截断。取值：  true：已截断。 false：未截断。
   */
  IsTruncated?: boolean
  /**
   * 部成员账号列表。
   */
  RoleConfigurationProvisionings?: Array<RoleConfigurationProvisionings>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOrganizationFinancialByMember请求参数结构体
 */
export interface DescribeOrganizationFinancialByMemberRequest {
  /**
   * 查询开始月份。格式：yyyy-mm，例如：2021-01。
   */
  Month: string
  /**
   * 限制数目。取值范围：1~50，默认值：10
   */
  Limit?: number
  /**
   * 偏移量。取值是limit的整数倍，默认值 : 0
   */
  Offset?: number
  /**
   * 查询结束月份。格式：yyyy-mm，例如：2021-01,默认值为查询开始月份。
   */
  EndMonth?: string
  /**
   * 查询成员列表。 最大100个
   */
  MemberUins?: Array<number | bigint>
  /**
   * 查询产品列表。 最大100个
   */
  ProductCodes?: Array<string>
}

/**
 * AddPermissionPolicyToRoleConfiguration返回参数结构体
 */
export interface AddPermissionPolicyToRoleConfigurationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListOrganizationService请求参数结构体
 */
export interface ListOrganizationServiceRequest {
  /**
   * 偏移量。取值是limit的整数倍，默认值 : 0
   */
  Offset: number
  /**
   * 限制数目。取值范围：1~50，默认值：10
   */
  Limit: number
  /**
   * 名称搜索关键字。
   */
  SearchKey?: string
}

/**
 * CreateRoleConfiguration请求参数结构体
 */
export interface CreateRoleConfigurationRequest {
  /**
   * 空间 ID。
   */
  ZoneId: string
  /**
   * 权限配置名称。格式：包含英文字母、数字或短划线（-）。 长度：最大 128 个字符。
   */
  RoleConfigurationName: string
  /**
   * 权限配置的描述。 长度：最大 1024 个字符。
   */
  Description?: string
  /**
   * 会话持续时间。 CIC用户使用权限配置访问集团账号目标账号时，会话最多保持的时间。 单位：秒。 取值范围：900 ~ 43200（15 分钟~12 小时）。 默认值：3600（1 小时）。
   */
  SessionDuration?: number
  /**
   * 初始访问页面。 CIC用户使用权限配置访问集团账号目标账号时，初始访问的页面地址。 该页面必须是腾讯云控制台页面。默认为空，表示跳转到腾讯云控制台首页。
   */
  RelayState?: string
}

/**
 * UpdateOrganizationMember请求参数结构体
 */
export interface UpdateOrganizationMemberRequest {
  /**
   * 成员Uin。
   */
  MemberUin: number
  /**
   * 成员名称。最大长度为25个字符，支持英文字母、数字、汉字、符号+@、&._[]-:,
   */
  Name?: string
  /**
   * 备注。最大长度为40个字符
   */
  Remark?: string
  /**
   * 关系策略类型。PolicyType不为空，PermissionIds不能为空。取值：Financial
   */
  PolicyType?: string
  /**
   * 成员财务权限ID列表。PermissionIds不为空，PolicyType不能为空。
取值：1-查看账单、2-查看余额、3-资金划拨、4-合并出账、5-开票、6-优惠继承、7-代付费、8-成本分析，如果有值，1、2 默认必须
   */
  PermissionIds?: Array<number | bigint>
  /**
   * 是否允许成员退出组织。取值：Allow-允许、Denied-不允许
   */
  IsAllowQuit?: string
  /**
   * 代付者Uin。成员财务权限有代付费时需要，取值为成员对应主体的主体管理员Uin
   */
  PayUin?: string
}

/**
 * CreateOrganizationMembersPolicy返回参数结构体
 */
export interface CreateOrganizationMembersPolicyResponse {
  /**
   * 策略ID。
   */
  PolicyId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetRoleConfiguration请求参数结构体
 */
export interface GetRoleConfigurationRequest {
  /**
   * 空间 ID
   */
  ZoneId: string
  /**
   * 权限配置ID
   */
  RoleConfigurationId: string
}

/**
 * AddUserToGroup请求参数结构体
 */
export interface AddUserToGroupRequest {
  /**
   * 空间 ID。
   */
  ZoneId: string
  /**
   * 用户组 ID。
   */
  GroupId: string
  /**
   * 用户 ID。
   */
  UserId: string
}

/**
 * CreateOrganizationIdentity返回参数结构体
 */
export interface CreateOrganizationIdentityResponse {
  /**
   * 身份ID
   */
  IdentityId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOrganizationMembers请求参数结构体
 */
export interface DescribeOrganizationMembersRequest {
  /**
   * 偏移量。取值是limit的整数倍，默认值 : 0
   */
  Offset: number
  /**
   * 限制数目。取值范围：1~50，默认值：10
   */
  Limit: number
  /**
   * 国际站：en，国内站：zh
   */
  Lang?: string
  /**
   * 成员名称或者成员ID搜索。
   */
  SearchKey?: string
  /**
   * 主体名称搜索。
   */
  AuthName?: string
  /**
   * 可信服务产品简称。可信服务管理员查询时必须指定
   */
  Product?: string
  /**
   * 成员标签搜索列表，最大10个
   */
  Tags?: Array<Tag>
}

/**
 * GetZoneSAMLServiceProviderInfo请求参数结构体
 */
export interface GetZoneSAMLServiceProviderInfoRequest {
  /**
   * 空间ID。
   */
  ZoneId: string
}

/**
 * ListRoleConfigurations返回参数结构体
 */
export interface ListRoleConfigurationsResponse {
  /**
   * 符合请求参数条件的数据总条数。
   */
  TotalCounts?: number
  /**
   * 每页的最大数据条数。
   */
  MaxResults?: number
  /**
   * 返回结果是否被截断。取值：  true：已截断。 false：未截断。
   */
  IsTruncated?: boolean
  /**
   * 查询返回结果下一页的令牌。  说明 只有IsTruncated为true时，才显示该参数。
   */
  NextToken?: string
  /**
   * 权限配置列表。
   */
  RoleConfigurations?: Array<RoleConfiguration>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListSCIMCredentials返回参数结构体
 */
export interface ListSCIMCredentialsResponse {
  /**
   * SCIM密钥数量。
   */
  TotalCounts?: number
  /**
   * SCIM 密钥信息。
   */
  SCIMCredentials?: Array<SCIMCredential>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOrganizationNodes请求参数结构体
 */
export interface DescribeOrganizationNodesRequest {
  /**
   * 限制数目。最大50
   */
  Limit: number
  /**
   * 偏移量。取值是limit的整数倍。默认值 : 0。
   */
  Offset: number
  /**
   * 部门标签搜索列表，最大10个
   */
  Tags?: Array<Tag>
}

/**
 * UpdateCustomPolicyForRoleConfiguration请求参数结构体
 */
export interface UpdateCustomPolicyForRoleConfigurationRequest {
  /**
   * 空间 ID
   */
  ZoneId: string
  /**
   * 权限配置 ID
   */
  RoleConfigurationId: string
  /**
   * 权限策略名称，长度最大为 32 个字符。
   */
  CustomPolicyName: string
  /**
   * 自定义策略内容。长度：最大 4096 个字符。当RolePolicyType为Inline时，该参数必须配置。关于权限策略的语法和结构，请参见权限策略语法和结构。
   */
  NewCustomPolicyDocument?: string
}

/**
 * InviteOrganizationMember返回参数结构体
 */
export interface InviteOrganizationMemberResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BindOrganizationMemberAuthAccount返回参数结构体
 */
export interface BindOrganizationMemberAuthAccountResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListOrgServiceAssignMember请求参数结构体
 */
export interface ListOrgServiceAssignMemberRequest {
  /**
   * 偏移量。取值是limit的整数倍，默认值 : 0
   */
  Offset: number
  /**
   * 限制数目。取值范围：1~50，默认值：10
   */
  Limit: number
  /**
   * 集团服务ID。和集团服务产品标识二选一必填，可以通过[ListOrganizationService](https://cloud.tencent.com/document/product/850/109561)获取
   */
  ServiceId?: number
  /**
   * 集团服务产品标识。和集团服务ID二选一必填，可以通过[ListOrganizationService](https://cloud.tencent.com/document/product/850/109561)获取
   */
  Product?: string
}

/**
 * UpdateOrganizationIdentity返回参数结构体
 */
export interface UpdateOrganizationIdentityResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeShareAreas返回参数结构体
 */
export interface DescribeShareAreasResponse {
  /**
   * 详情
   */
  Items?: Array<ShareArea>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateUser返回参数结构体
 */
export interface CreateUserResponse {
  /**
   * 用户详情
   */
  UserInfo?: UserInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteShareUnitResources返回参数结构体
 */
export interface DeleteShareUnitResourcesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteUserSyncProvisioning请求参数结构体
 */
export interface DeleteUserSyncProvisioningRequest {
  /**
   * 空间ID。
   */
  ZoneId: string
  /**
   * 用户同步的ID。
   */
  UserProvisioningId: string
}

/**
 * DescribeOrganizationNodes返回参数结构体
 */
export interface DescribeOrganizationNodesResponse {
  /**
   * 总数。
   */
  Total?: number
  /**
   * 列表详情。
   */
  Items?: Array<OrgNode>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateUserSyncProvisioning请求参数结构体
 */
export interface CreateUserSyncProvisioningRequest {
  /**
   * 空间ID。
   */
  ZoneId: string
  /**
   * CAM用户同步信息。
   */
  UserSyncProvisionings: Array<UserSyncProvisioning>
}

/**
 * DeleteOrganizationMembersPolicy请求参数结构体
 */
export interface DeleteOrganizationMembersPolicyRequest {
  /**
   * 访问策略ID。可以通过[DescribeOrganizationMemberPolicies](https://cloud.tencent.com/document/product/850/82935)获取
   */
  PolicyId: number
}

/**
 * CreateSCIMCredential请求参数结构体
 */
export interface CreateSCIMCredentialRequest {
  /**
   * 空间ID。z-前缀开头，后面是12位随机数字/小写字母
   */
  ZoneId: string
}

/**
 * DescribePolicy请求参数结构体
 */
export interface DescribePolicyRequest {
  /**
   * 策略Id。可以调用[ListPolicies](https://cloud.tencent.com/document/product/850/105311)获取
   */
  PolicyId: number
  /**
   * 策略类型。默认值SERVICE_CONTROL_POLICY，取值范围：SERVICE_CONTROL_POLICY-服务控制策略、TAG_POLICY-标签策略
   */
  PolicyType?: string
}

/**
 * DeleteGroup返回参数结构体
 */
export interface DeleteGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateUserStatus请求参数结构体
 */
export interface UpdateUserStatusRequest {
  /**
   * 空间 ID。
   */
  ZoneId: string
  /**
   * 用户 ID。
   */
  UserId: string
  /**
   * 用户的状态。取值：  Enabled：启用。 Disabled：禁用。
   */
  NewUserStatus: string
}

/**
 * 用户加入的用户组
 */
export interface JoinedGroups {
  /**
   * 用户组的名称。
   */
  GroupName?: string
  /**
   * 用户组的描述。
   */
  Description?: string
  /**
   * 用户组 ID。
   */
  GroupId?: string
  /**
   * 用户组的类型。取值：

Manual：手动创建。
Synchronized：外部同步。
   */
  GroupType?: string
  /**
   * 加入用户组的时间
   */
  JoinTime?: string
}

/**
 * CreateRoleConfiguration返回参数结构体
 */
export interface CreateRoleConfigurationResponse {
  /**
   * 配置访问详情
   */
  RoleConfigurationInfo?: RoleConfiguration
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用户信息
 */
export interface GroupMembers {
  /**
   * 查询username。
   */
  UserName?: string
  /**
   * 用户的显示名称。
   */
  DisplayName?: string
  /**
   * 用户的描述。
   */
  Description?: string
  /**
   * 用户的电子邮箱。目录内必须唯一。
   */
  Email?: string
  /**
   * 用户状态 Enabled：启用， Disabled：禁用。
   */
  UserStatus?: string
  /**
   * 用户类型  Manual：手动创建，Synchronized：外部导入。
   */
  UserType?: string
  /**
   * 用户 ID
   */
  UserId?: string
  /**
   * 用户加入用户组的时间
   */
  JoinTime?: string
}

/**
 * DeleteRoleAssignment请求参数结构体
 */
export interface DeleteRoleAssignmentRequest {
  /**
   * 空间 ID。
   */
  ZoneId: string
  /**
   * 权限配置ID。
   */
  RoleConfigurationId: string
  /**
   * 同步的集团账号目标账号的类型，ManagerUin管理账号;MemberUin成员账号
   */
  TargetType: string
  /**
   * 集团账号目标账号的UIN
   */
  TargetUin: number
  /**
   * CAM 用户同步的身份类型。取值： User：表示同步的身份是用户。 Group：表示同步的身份是用户组。
   */
  PrincipalType: string
  /**
   * 用户同步 ID。取值： 当PrincipalType取值为Group时，该值为用户组 ID（g-********）， 当PrincipalType取值为User时，该值为用户 ID（u-********）。
   */
  PrincipalId: string
  /**
   * 当您移除一个集团账号目标账号上使用某权限配置的最后一个授权时，是否同时解除权限配置部署。取值： DeprovisionForLastRoleAssignmentOnAccount：解除权限配置部署。 None（默认值）：不解除权限配置部署。
   */
  DeprovisionStrategy?: string
}

/**
 * ListTargetsForPolicy请求参数结构体
 */
export interface ListTargetsForPolicyRequest {
  /**
   * 策略Id。
   */
  PolicyId: number
  /**
   * 每页数量。默认值是 20，必须大于 0 且小于或等于 200
   */
  Rp?: number
  /**
   * 页码。默认值是 1，从 1开始，不能大于 200
   */
  Page?: number
  /**
   * 策略类型。取值范围：All-全部、User-用户、Node-节点
   */
  TargetType?: string
  /**
   * 策略类型。默认值SERVICE_CONTROL_POLICY，取值范围：SERVICE_CONTROL_POLICY-服务控制策略、TAG_POLICY-标签策略
   */
  PolicyType?: string
  /**
   * 按照多个策略id搜索，空格隔开。
   */
  Keyword?: string
}

/**
 * DeleteOrganizationIdentity请求参数结构体
 */
export interface DeleteOrganizationIdentityRequest {
  /**
   * 身份ID。可以通过[ListOrganizationIdentity](https://cloud.tencent.com/document/product/850/82934)获取
   */
  IdentityId: number
}

/**
 * UpdateOrganizationNode请求参数结构体
 */
export interface UpdateOrganizationNodeRequest {
  /**
   * 节点ID。可以通过[DescribeOrganizationNodes](https://cloud.tencent.com/document/product/850/82926)获取
   */
  NodeId: number
  /**
   * 节点名称。最大长度为40个字符，支持英文字母、数字、汉字、符号+@、&._[]-
   */
  Name?: string
  /**
   * 备注。
   */
  Remark?: string
}

/**
 * CIC的空间统计
 */
export interface ZoneStatistics {
  /**
   * 用户配额。
   */
  UserQuota?: number
  /**
   * 用户组配额。
   */
  GroupQuota?: number
  /**
   * 权限配置配额。
   */
  RoleConfigurationQuota?: number
  /**
   * 权限配置绑定的系统策略配额。
   */
  SystemPolicyPerRoleConfigurationQuota?: number
  /**
   * 用户数。
   */
  UserCount?: number
  /**
   * 用户组数。
   */
  GroupCount?: number
  /**
   * 权限配置数
   */
  RoleConfigurationCount?: number
  /**
   * 同步用户数。
   */
  UserProvisioningCount?: number
  /**
   * 同步角色数。
   */
  RoleConfigurationSyncCount?: number
}

/**
 * DeleteOrganizationNodes返回参数结构体
 */
export interface DeleteOrganizationNodesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOrganizationFinancialByMember返回参数结构体
 */
export interface DescribeOrganizationFinancialByMemberResponse {
  /**
   * 当月总消耗。
   */
  TotalCost?: number
  /**
   * 成员消耗详情。
   */
  Items?: Array<OrgMemberFinancial>
  /**
   * 总数目。
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddUserToGroup返回参数结构体
 */
export interface AddUserToGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSCIMCredential返回参数结构体
 */
export interface CreateSCIMCredentialResponse {
  /**
   * 空间ID。z-前缀开头，后面是12位随机数字/小写字母。
   */
  ZoneId?: string
  /**
   * SCIM密钥ID。scimcred-前缀开头，后面是12位随机数字/小写字母。
   */
  CredentialId?: string
  /**
   * SCIM密钥类型。
   */
  CredentialType?: string
  /**
   * SCIM 密钥的创建时间。
   */
  CreateTime?: string
  /**
   * SCIM 密钥的过期时间。
   */
  ExpireTime?: string
  /**
   * SCIM密钥状态，Enabled已开启，Disabled已关闭。
   */
  CredentialStatus?: string
  /**
   * SCIM密钥。
   */
  CredentialSecret?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 产品资源
 */
export interface ProductResource {
  /**
   * 产品资源ID。
   */
  ProductResourceId: string
  /**
   * 资源六段式最后一节
   * @deprecated
   */
  ResourceGrantLast?: string
}

/**
 * DeleteShareUnit请求参数结构体
 */
export interface DeleteShareUnitRequest {
  /**
   * 共享单元ID。
   */
  UnitId: string
}

/**
 * DeleteOrgServiceAssign返回参数结构体
 */
export interface DeleteOrgServiceAssignResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOrganizationMemberPolicies返回参数结构体
 */
export interface DescribeOrganizationMemberPoliciesResponse {
  /**
   * 列表。
   */
  Items?: Array<OrgMemberPolicy>
  /**
   * 总数目。
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeShareUnits请求参数结构体
 */
export interface DescribeShareUnitsRequest {
  /**
   * 共享单元地域。可通过接口[DescribeShareAreas](https://cloud.tencent.com/document/product/850/103050)获取支持共享的地域。
   */
  Area: string
  /**
   * 偏移量。取值是limit的整数倍。默认值 : 0。
   */
  Offset: number
  /**
   * 限制数目。取值范围：1~50。
   */
  Limit: number
  /**
   * 搜索关键字。支持UnitId和Name搜索。
   */
  SearchKey?: string
}

/**
 * 用户同步任务状态信息。
 */
export interface UserProvisioningsTask {
  /**
   * 任务ID。
   */
  TaskId?: string
  /**
   * 授权的集团账号目标账号的UIN
   */
  TargetUin?: number
  /**
   * 同步的集团账号目标账号的类型，ManagerUin管理账号;MemberUin成员账号
   */
  TargetType?: string
  /**
   * 任务类型。StartProvisioning：用户同步，DeleteProvisioning：删除用户同步
   */
  TaskType?: string
  /**
   * 任务状态：InProgress: 进行中，Failed: 失败 3:Success: 成功
   */
  TaskStatus?: string
  /**
   * 用户同步ID。
   */
  UserProvisioningId?: string
  /**
   *  CAM 用户同步的身份 ID。取值： 当PrincipalType取值为Group时，该值为CIC 用户组 ID（g-********）。 当PrincipalType取值为User时，该值为CIC 用户 ID（u-********）。
   */
  PrincipalId?: string
  /**
   * CAM 用户同步的身份类型。取值： User：表示该 CAM 用户同步的身份是CIC 用户。 Group：表示该 CAM 用户同步的身份是CIC 用户组。
   */
  PrincipalType?: string
  /**
   * 用户或者用户组名称。
   */
  PrincipalName?: string
  /**
   * 冲突策略。KeepBoth:两者都保留;TakeOver:替换
   */
  DuplicationStrategy?: string
  /**
   * 删除策略。Delete:删除;Keep:保留
   */
  DeletionStrategy?: string
}

/**
 * 用户同步信息
 */
export interface UserProvisioning {
  /**
   * CAM 用户同步的状态。取值：

Enabled：CAM 用户同步已启用。
Disabled：CAM 用户同步未启用。
   */
  UserProvisioningId?: string
  /**
   * 描述。
   */
  Description?: string
  /**
   * CAM 用户同步的状态。取值：
Enabled：CAM 用户同步已启用。
Disabled：CAM 用户同步未启用。
   */
  Status?: string
  /**
   * CAM 用户同步的身份 ID。取值：
当PrincipalType取值为Group时，该值为CIC用户组 ID（g-********）。
当PrincipalType取值为User时，该值为CIC用户 ID（u-********）。
   */
  PrincipalId?: string
  /**
   * CAM 用户同步的身份名称。取值：
当PrincipalType取值为Group时，该值为CIC用户组名称。
当PrincipalType取值为User时，该值为CIC用户名称。
   */
  PrincipalName?: string
  /**
   * CAM 用户同步的身份类型。取值：

User：表示该 CAM 用户同步的身份是CIC用户。
Group：表示该 CAM 用户同步的身份是CIC用户组。
   */
  PrincipalType?: string
  /**
   * 集团账号目标账号的UIN。
   */
  TargetUin?: number
  /**
   * 集团账号目标账号的名称。
   */
  TargetName?: string
  /**
   * 冲突策略。当CIC 用户同步到 CAM 时，如果 CAM 中存在同名用户时的处理策略。取值： KeepBoth：两者都保留。当CIC 用户被同步到 CAM 时，如果 CAM 已经存在同名用户，则对CIC 用户的用户名添加后缀_cic后尝试创建该用户名的 CAM 用户。 TakeOver：替换。当CIC 用户被同步到 CAM 时，如果 CAM 已经存在同名用户，则直接将已经存在的 CAM 用户替换为CIC 同步用户。
   */
  DuplicationStrategy?: string
  /**
   * 删除策略。删除 CAM 用户同步时，对已同步的 CAM 用户的处理策略。取值： Delete：删除。删除 CAM 用户同步时，会删除从CIC 已经同步到 CAM 中的 CAM 用户。 Keep：保留。删除 RAM 用户同步时，会保留从CIC 已经同步到 CAM 中的 CAM 用户。
   */
  DeletionStrategy?: string
  /**
   * 创建时间。
   */
  CreateTime?: string
  /**
   * 更新时间。
   */
  UpdateTime?: string
  /**
   * 同步的集团账号目标账号的类型，ManagerUin管理账号;MemberUin成员账号
   */
  TargetType?: string
}

/**
 * ListSCIMCredentials请求参数结构体
 */
export interface ListSCIMCredentialsRequest {
  /**
   * 空间ID。z-前缀开头，后面是12位随机数字/小写字母
   */
  ZoneId: string
  /**
   * SCIM密钥ID
   */
  CredentialId?: string
}

/**
 * UpdateSCIMCredentialStatus请求参数结构体
 */
export interface UpdateSCIMCredentialStatusRequest {
  /**
   * 空间ID。z-前缀开头，后面是12位随机数字/小写字母
   */
  ZoneId: string
  /**
   * SCIM密钥ID。scimcred-前缀开头，后面是12位随机数字/小写字母。
   */
  CredentialId: string
  /**
   * SCIM密钥状态。Enabled：启用。 Disabled：禁用。
   */
  NewStatus: string
}

/**
 * saml 身份提供商配置信息。
 */
export interface SAMLIdentityProviderConfiguration {
  /**
   * IdP 标识。
   */
  EntityId?: string
  /**
   * SSO 登录的启用状态。取值：  Enabled：启用。 Disabled（默认值）：禁用。
   */
  SSOStatus?: string
  /**
   * IdP 元数据文档（Base64 编码）。
   */
  EncodedMetadataDocument?: string
  /**
   * X509证书ID。
   */
  CertificateIds?: Array<string>
  /**
   * IdP 的登录地址。
   */
  LoginUrl?: string
  /**
   * 创建时间。
   */
  CreateTime?: string
  /**
   * 更新时间。
   */
  UpdateTime?: string
}

/**
 * CIC的权限策略
 */
export interface RolePolicie {
  /**
   * 策略ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RolePolicyId?: number
  /**
   * 权限策略名称
   */
  RolePolicyName?: string
  /**
   * 权限策略类型
   */
  RolePolicyType?: string
  /**
   * 自定义策略内容。仅自定义策略返回该参数。
   */
  RolePolicyDocument?: string
  /**
   * 权限策略被添加到权限配置的时间。
   */
  AddTime?: string
}

/**
 * UpdateUserSyncProvisioning返回参数结构体
 */
export interface UpdateUserSyncProvisioningResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateGroup返回参数结构体
 */
export interface CreateGroupResponse {
  /**
   * 用户组信息。
   */
  GroupInfo?: GroupInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateZone请求参数结构体
 */
export interface UpdateZoneRequest {
  /**
   * 空间ID。z-前缀开头，后面是12位随机数字/小写字母
   */
  ZoneId: string
  /**
   * 空间名，必须全局唯一。包含小写字母、数字和短划线（-）。不能以短划线（-）开头或结尾，且不能有两个连续的短划线（-）。长度：2~64 个字符。
   */
  NewZoneName: string
}

/**
 * DeleteAccount返回参数结构体
 */
export interface DeleteAccountResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteSCIMCredential返回参数结构体
 */
export interface DeleteSCIMCredentialResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
