/**
 * DescribeShareUnitResources返回参数结构体
 */
export interface DescribeShareUnitResourcesResponse {
    /**
     * 总数目。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
    /**
     * 共享单元资源列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<ShareUnitResource>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * EnablePolicyType返回参数结构体
 */
export interface EnablePolicyTypeResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListTargetsForPolicy返回参数结构体
 */
export interface ListTargetsForPolicyResponse {
    /**
     * 总数。
     */
    TotalNum?: number;
    /**
     * 指定SCP策略关联目标列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    List?: Array<ListTargetsForPolicyNode>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListNonCompliantResource返回参数结构体
 */
export interface ListNonCompliantResourceResponse {
    /**
     * 资源及标签合规信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<ResourceTagMapping>;
    /**
     * 获取的下一页的Token值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PaginationToken?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteOrganization请求参数结构体
 */
export declare type DeleteOrganizationRequest = null;
/**
 * 标签合规信息
 */
export interface TagComplianceDetails {
    /**
     * 合规状态。true-合规，false-不合规
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ComplianceStatus: boolean;
    /**
     * 值不合规的标签键列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KeysWithNonCompliantValues: Array<string>;
    /**
     * 键不合规的标签键列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NonCompliantKeys: Array<string>;
}
/**
 * DescribePolicyConfig返回参数结构体
 */
export interface DescribePolicyConfigResponse {
    /**
     * 开启状态。0-未开启、1-开启
     */
    Status?: number;
    /**
     * 策略类型。SERVICE_CONTROL_POLICY-服务控制策略、TAG_POLICY-标签策略
     */
    Type?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * QuitOrganization返回参数结构体
 */
export interface QuitOrganizationResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListOrganizationIdentity请求参数结构体
 */
export interface ListOrganizationIdentityRequest {
    /**
     * 偏移量。取值是limit的整数倍。默认值 : 0。
     */
    Offset: number;
    /**
     * 限制数目。取值范围：1~50。默认值：10。
     */
    Limit: number;
    /**
     * 名称搜索关键字。
     */
    SearchKey?: string;
    /**
     * 身份ID。可以通过身份ID搜索
     */
    IdentityId?: number;
    /**
     * 身份类型。取值范围 1-预设, 2-自定义
     */
    IdentityType?: number;
}
/**
 * DeleteOrganizationMembers请求参数结构体
 */
export interface DeleteOrganizationMembersRequest {
    /**
     * 被删除成员的Uin列表。
     */
    MemberUin: Array<number | bigint>;
}
/**
 * CreateOrganization返回参数结构体
 */
export interface CreateOrganizationResponse {
    /**
     * 企业组织ID
     */
    OrgId: number;
    /**
     * 创建者昵称
     */
    NickName: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AddShareUnitResources返回参数结构体
 */
export interface AddShareUnitResourcesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 组织身份策略
 */
export interface IdentityPolicy {
    /**
     * CAM预设策略ID。PolicyType 为预设策略时有效且必选
     */
    PolicyId?: number;
    /**
     * CAM预设策略名称。PolicyType 为预设策略时有效且必选
     */
    PolicyName?: string;
    /**
     * 策略类型。取值 1-自定义策略  2-预设策略；默认值2
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolicyType?: number;
    /**
     * 自定义策略内容，遵循CAM策略语法。PolicyType 为自定义策略时有效且必选
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolicyDocument?: string;
}
/**
 * AddOrganizationNode返回参数结构体
 */
export interface AddOrganizationNodeResponse {
    /**
     * 节点ID。
     */
    NodeId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeOrganizationFinancialByMonth返回参数结构体
 */
export interface DescribeOrganizationFinancialByMonthResponse {
    /**
     * 产品消耗详情。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<OrgFinancialByMonth>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 按月获取组织财务信息
 */
export interface OrgFinancialByMonth {
    /**
     * 记录ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id: number;
    /**
     * 月份，格式：yyyy-mm，示例：2021-01。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Month: string;
    /**
     * 消耗金额，单元：元。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCost: number;
    /**
     * 比上月增长率%。正数增长，负数下降，空值无法统计。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GrowthRate?: string;
}
/**
 * MoveOrganizationNodeMembers返回参数结构体
 */
export interface MoveOrganizationNodeMembersResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AttachPolicy请求参数结构体
 */
export interface AttachPolicyRequest {
    /**
     * 绑定策略目标ID。成员Uin或部门ID
     */
    TargetId: number;
    /**
     * 目标类型。取值范围：NODE-部门、MEMBER-成员
     */
    TargetType: string;
    /**
     * 策略ID。
     */
    PolicyId: number;
    /**
     * 策略类型。默认值SERVICE_CONTROL_POLICY，取值范围：SERVICE_CONTROL_POLICY-服务控制策略、TAG_POLICY-标签策略
     */
    Type?: string;
}
/**
 * DeleteShareUnit返回参数结构体
 */
export interface DeleteShareUnitResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteShareUnitMembers返回参数结构体
 */
export interface DeleteShareUnitMembersResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribePolicy返回参数结构体
 */
export interface DescribePolicyResponse {
    /**
     * 策略Id。
     */
    PolicyId?: number;
    /**
     * 策略名称。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolicyName?: string;
    /**
     * 策略类型。1-自定义 2-预设策略
     */
    Type?: number;
    /**
     * 策略描述。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 策略文档。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolicyDocument?: string;
    /**
     * 策略更新时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 策略创建时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AddTime?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateOrganizationIdentity请求参数结构体
 */
export interface CreateOrganizationIdentityRequest {
    /**
     * 身份名称
     */
    IdentityAliasName: string;
    /**
     * 身份策略
     */
    IdentityPolicy: Array<IdentityPolicy>;
    /**
     * 身份描述
     */
    Description?: string;
}
/**
 * DeletePolicy返回参数结构体
 */
export interface DeletePolicyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeOrganization返回参数结构体
 */
export interface DescribeOrganizationResponse {
    /**
     * 企业组织ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OrgId?: number;
    /**
     * 创建者UIN。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HostUin?: number;
    /**
     * 创建者昵称。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NickName?: string;
    /**
     * 企业组织类型。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OrgType?: number;
    /**
     * 是否组织管理员。是：true ，否：false
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsManager?: boolean;
    /**
     * 策略类型。财务管理：Financial
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OrgPolicyType?: string;
    /**
     * 策略名。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OrgPolicyName?: string;
    /**
     * 成员财务权限列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OrgPermission?: Array<OrgPermission>;
    /**
     * 组织根节点ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RootNodeId?: number;
    /**
     * 组织创建时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 成员加入时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JoinTime?: string;
    /**
     * 成员是否允许退出。允许：Allow，不允许：Denied
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsAllowQuit?: string;
    /**
     * 代付者Uin。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PayUin?: string;
    /**
     * 代付者名称。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PayName?: string;
    /**
     * 是否可信服务管理员。是：true，否：false
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsAssignManager?: boolean;
    /**
     * 是否实名主体管理员。是：true，否：false
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsAuthManager?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListNonCompliantResource请求参数结构体
 */
export interface ListNonCompliantResourceRequest {
    /**
     * 限制数目。取值范围：1~50。
     */
    MaxResults: number;
    /**
     * 成员Uin。
     */
    MemberUin: number;
    /**
     * 从上一页的响应中获取的下一页的Token值。
  如果是第一次请求，设置为空。
     */
    PaginationToken?: string;
    /**
     * 标签键。
     */
    TagKey?: string;
}
/**
 * DisablePolicyType返回参数结构体
 */
export interface DisablePolicyTypeResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeOrganizationMemberPolicies请求参数结构体
 */
export interface DescribeOrganizationMemberPoliciesRequest {
    /**
     * 偏移量。取值是limit的整数倍。默认值 : 0。
     */
    Offset: number;
    /**
     * 限制数目。取值范围：1~50。默认值：10。
     */
    Limit: number;
    /**
     * 成员Uin。
     */
    MemberUin: number;
    /**
     * 搜索关键字。可用于策略名或描述搜索
     */
    SearchKey?: string;
}
/**
 * DescribeEffectivePolicy请求参数结构体
 */
export interface DescribeEffectivePolicyRequest {
    /**
     * 账号uin或者节点id。
     */
    TargetId: number;
}
/**
 * DeleteOrganizationMembersPolicy返回参数结构体
 */
export interface DeleteOrganizationMembersPolicyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateOrganizationIdentity请求参数结构体
 */
export interface UpdateOrganizationIdentityRequest {
    /**
     * 身份ID。可以通过[ListOrganizationIdentity](https://cloud.tencent.com/document/product/850/82934)获取
     */
    IdentityId: number;
    /**
     * 身份描述。
     */
    Description: string;
    /**
     * 身份策略。
     */
    IdentityPolicy: Array<IdentityPolicy>;
}
/**
 * 共享单元成员
 */
export interface ShareUnitMember {
    /**
     * 共享成员Uin。
     */
    ShareMemberUin?: number;
    /**
     * 创建时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
}
/**
 * CancelOrganizationMemberAuthAccount请求参数结构体
 */
export interface CancelOrganizationMemberAuthAccountRequest {
    /**
     * 成员Uin。
     */
    MemberUin: number;
    /**
     * 策略ID。可以通过[DescribeOrganizationMemberPolicies](https://cloud.tencent.com/document/product/850/82935)获取
     */
    PolicyId: number;
    /**
     * 组织子账号Uin。
     */
    OrgSubAccountUin: number;
}
/**
 * DeleteOrganization返回参数结构体
 */
export interface DeleteOrganizationResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 成员和子账号的授权关系
 */
export interface OrgMemberAuthAccount {
    /**
     * 组织子账号Uin。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OrgSubAccountUin: number;
    /**
     * 策略ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolicyId: number;
    /**
     * 策略名。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolicyName: string;
    /**
     * 身份ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IdentityId: number;
    /**
     * 身份角色名。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IdentityRoleName: string;
    /**
     * 身份角色别名。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IdentityRoleAliasName: string;
    /**
     * 创建时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime: string;
    /**
     * 更新时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime: string;
    /**
     * 子账号名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OrgSubAccountName: string;
}
/**
 * 成员主要信息
 */
export interface MemberMainInfo {
    /**
     * 成员uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MemberUin: number;
    /**
     * 成员名称j
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MemberName: string;
}
/**
 * DeleteOrganizationMembers返回参数结构体
 */
export interface DeleteOrganizationMembersResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeOrganizationMembers返回参数结构体
 */
export interface DescribeOrganizationMembersResponse {
    /**
     * 成员列表。
     */
    Items?: Array<OrgMember>;
    /**
     * 总数目。
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 成员管理身份
 */
export interface MemberIdentity {
    /**
     * 身份ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IdentityId: number;
    /**
     * 身份名称。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IdentityAliasName: string;
}
/**
 * UpdateOrganizationNode请求参数结构体
 */
export interface UpdateOrganizationNodeRequest {
    /**
     * 节点ID。可以通过[DescribeOrganizationNodes](https://cloud.tencent.com/document/product/850/82926)获取
     */
    NodeId: number;
    /**
     * 节点名称。最大长度为40个字符，支持英文字母、数字、汉字、符号+@、&._[]-
     */
    Name?: string;
    /**
     * 备注。
     */
    Remark?: string;
}
/**
 * DescribeShareAreas返回参数结构体
 */
export interface DescribeShareAreasResponse {
    /**
     * 详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<ShareArea>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeOrganizationAuthNode返回参数结构体
 */
export interface DescribeOrganizationAuthNodeResponse {
    /**
     * 总数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
    /**
     * 条目详情。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<AuthNode>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListPolicies返回参数结构体
 */
export interface ListPoliciesResponse {
    /**
     * 策略总数
     */
    TotalNum?: number;
    /**
     * 策略列表数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    List?: Array<ListPolicyNode>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BindOrganizationMemberAuthAccount请求参数结构体
 */
export interface BindOrganizationMemberAuthAccountRequest {
    /**
     * 成员Uin。
     */
    MemberUin: number;
    /**
     * 策略ID。可以调用[DescribeOrganizationMemberPolicies](https://cloud.tencent.com/document/product/850/82935)获取
     */
    PolicyId: number;
    /**
     * 组织管理员子账号Uin列表。最大5个
     */
    OrgSubAccountUins: Array<number | bigint>;
}
/**
 * DescribeShareUnits返回参数结构体
 */
export interface DescribeShareUnitsResponse {
    /**
     * 总数目。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
    /**
     * 共享单元列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<ManagerShareUnit>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateOrganizationMemberEmailBind返回参数结构体
 */
export interface UpdateOrganizationMemberEmailBindResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteShareUnitResources请求参数结构体
 */
export interface DeleteShareUnitResourcesRequest {
    /**
     * 共享单元ID。
     */
    UnitId: string;
    /**
     * 共享单元地域。
     */
    Area: string;
    /**
     * 共享资源类型。支持共享的资源类型,请参见[资源共享概述](https://cloud.tencent.com/document/product/850/59489)
     */
    Type: string;
    /**
     * 共享资源列表。最大10个。
     */
    Resources: Array<ShareResource>;
}
/**
 * 我的共享单元列表详情
 */
export interface ManagerShareUnit {
    /**
     * 共享单元ID。
     */
    UnitId?: string;
    /**
     * 共享单元名称。
     */
    Name?: string;
    /**
     * 共享单元管理员Uin。
     */
    Uin?: number;
    /**
     * 共享单元管理员OwnerUin。
     */
    OwnerUin?: number;
    /**
     * 共享单元地域。
     */
    Area?: string;
    /**
     * 描述。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 创建时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 共享单元资源数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ShareResourceNum?: number;
    /**
     * 共享单元成员数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ShareMemberNum?: number;
}
/**
 * DescribeOrganizationMemberAuthIdentities请求参数结构体
 */
export interface DescribeOrganizationMemberAuthIdentitiesRequest {
    /**
     * 偏移量。取值是limit的整数倍，默认值 : 0
     */
    Offset: number;
    /**
     * 限制数目。取值范围：1~50，默认值：10
     */
    Limit: number;
    /**
     * 组织成员Uin。入参MemberUin与IdentityId至少填写一个
     */
    MemberUin?: number;
    /**
     * 身份ID。入参MemberUin与IdentityId至少填写一个, 可以通过[ListOrganizationIdentity](https://cloud.tencent.com/document/product/850/82934)获取
     */
    IdentityId?: number;
}
/**
 * CreateOrganizationMemberAuthIdentity返回参数结构体
 */
export interface CreateOrganizationMemberAuthIdentityResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeOrganization请求参数结构体
 */
export interface DescribeOrganizationRequest {
    /**
     * 国际站：en，国内站：zh
     */
    Lang?: string;
    /**
     * 可信服务产品简称。查询是否该可信服务管理员时必须指定
     */
    Product?: string;
}
/**
 * DescribeOrganizationNodes请求参数结构体
 */
export interface DescribeOrganizationNodesRequest {
    /**
     * 限制数目。最大50
     */
    Limit: number;
    /**
     * 偏移量。取值是limit的整数倍。默认值 : 0。
     */
    Offset: number;
}
/**
 * BindOrganizationMemberAuthAccount返回参数结构体
 */
export interface BindOrganizationMemberAuthAccountResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateOrganizationMember返回参数结构体
 */
export interface CreateOrganizationMemberResponse {
    /**
     * 成员Uin。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Uin?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * MoveOrganizationNodeMembers请求参数结构体
 */
export interface MoveOrganizationNodeMembersRequest {
    /**
     * 组织节点ID。可以通过[DescribeOrganizationNodes](https://cloud.tencent.com/document/product/850/82926)获取
     */
    NodeId: number;
    /**
     * 成员Uin列表。
     */
    MemberUin: Array<number | bigint>;
}
/**
 * UpdateOrganizationMember返回参数结构体
 */
export interface UpdateOrganizationMemberResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 互信主体主要信息
 */
export interface AuthNode {
    /**
     * 互信主体关系ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RelationId: number;
    /**
     * 互信主体名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AuthName: string;
    /**
     * 主体管理员
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Manager: MemberMainInfo;
}
/**
 * DescribeOrganizationMemberEmailBind返回参数结构体
 */
export interface DescribeOrganizationMemberEmailBindResponse {
    /**
     * 绑定ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BindId?: number;
    /**
     * 申请时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplyTime?: string;
    /**
     * 邮箱地址。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Email?: string;
    /**
     * 安全手机号。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Phone?: string;
    /**
     * 绑定状态。    未绑定：Unbound，待激活：Valid，绑定成功：Success，绑定失败：Failed
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BindStatus?: string;
    /**
     * 绑定时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BindTime?: string;
    /**
     * 失败说明。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 安全手机绑定状态 。 未绑定：0，已绑定：1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PhoneBind?: number;
    /**
     * 国际区号。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CountryCode?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteOrganizationNodes请求参数结构体
 */
export interface DeleteOrganizationNodesRequest {
    /**
     * 节点ID列表。可以通过[DescribeOrganizationNodes](https://cloud.tencent.com/document/product/850/82926)获取
     */
    NodeId: Array<number | bigint>;
}
/**
 * EnablePolicyType请求参数结构体
 */
export interface EnablePolicyTypeRequest {
    /**
     * 企业组织Id。可以调用[DescribeOrganization](https://cloud.tencent.com/document/product/850/67059)获取
     */
    OrganizationId: number;
    /**
     * 策略类型。默认值SERVICE_CONTROL_POLICY，取值范围：SERVICE_CONTROL_POLICY-服务控制策略、TAG_POLICY-标签策略
     */
    PolicyType: string;
}
/**
 * CreatePolicy返回参数结构体
 */
export interface CreatePolicyResponse {
    /**
     * 策略ID
     */
    PolicyId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 有效策略。
 */
export interface EffectivePolicy {
    /**
     * 目标ID。
     */
    TargetId: number;
    /**
     * 有效策略内容。
     */
    PolicyContent: string;
    /**
     * 有效策略更新时间。
     */
    LastUpdatedTimestamp: number;
}
/**
 * AddOrganizationMemberEmail请求参数结构体
 */
export interface AddOrganizationMemberEmailRequest {
    /**
     * 成员Uin。
     */
    MemberUin: number;
    /**
     * 邮箱地址。
     */
    Email: string;
    /**
     * 国际区号。
     */
    CountryCode: string;
    /**
     * 手机号。
     */
    Phone: string;
}
/**
 * ListOrganizationIdentity返回参数结构体
 */
export interface ListOrganizationIdentityResponse {
    /**
     * 总数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
    /**
     * 条目详情。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<OrgIdentity>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeletePolicy请求参数结构体
 */
export interface DeletePolicyRequest {
    /**
     * 需要删除的策略ID。可以调用[ListPolicies](https://cloud.tencent.com/document/product/850/105311)获取
  
     */
    PolicyId: number;
    /**
     * 策略类型。默认值SERVICE_CONTROL_POLICY，取值范围：SERVICE_CONTROL_POLICY-服务控制策略、TAG_POLICY-标签策略
     */
    Type?: string;
}
/**
 * 共享资源
 */
export interface ShareResource {
    /**
     * 共享资源ID。
     * @deprecated
     */
    ResourceId?: string;
    /**
     * 产品资源ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductResourceId?: string;
}
/**
 * QuitOrganization请求参数结构体
 */
export interface QuitOrganizationRequest {
    /**
     * 企业组织ID
     */
    OrgId: number;
}
/**
 * AddOrganizationNode请求参数结构体
 */
export interface AddOrganizationNodeRequest {
    /**
     * 父节点ID。可以通过[DescribeOrganizationNodes](https://cloud.tencent.com/document/product/850/82926)获取
     */
    ParentNodeId: number;
    /**
     * 节点名称。最大长度为40个字符，支持英文字母、数字、汉字、符号+@、&._[]-
     */
    Name: string;
    /**
     * 备注。
     */
    Remark?: string;
}
/**
 * AddShareUnitMembers请求参数结构体
 */
export interface AddShareUnitMembersRequest {
    /**
     * 共享单元ID。
     */
    UnitId: string;
    /**
     * 共享单元地域。
     */
    Area: string;
    /**
     * 共享成员列表。最大10个。
     */
    Members: Array<ShareMember>;
}
/**
 * AddShareUnit请求参数结构体
 */
export interface AddShareUnitRequest {
    /**
     * 共享单元名称。仅支持大小写字母、数字、-、以及_的组合，3-128个字符。
     */
    Name: string;
    /**
     * 共享单元地域。可通过接口[DescribeShareAreas](https://cloud.tencent.com/document/product/850/103050)获取支持共享的地域。
     */
    Area: string;
    /**
     * 共享单元描述。最大128个字符。
     */
    Description?: string;
}
/**
 * 组织成员财务信息。
 */
export interface OrgMemberFinancial {
    /**
     * 成员Uin。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MemberUin: number;
    /**
     * 成员名称。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MemberName: string;
    /**
     * 消耗金额，单位：元。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCost: number;
    /**
     * 占比%。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Ratio?: string;
}
/**
 * DescribeOrganizationAuthNode请求参数结构体
 */
export interface DescribeOrganizationAuthNodeRequest {
    /**
     * 偏移量。取值是limit的整数倍。默认值 : 0。
     */
    Offset: number;
    /**
     * 限制数目。取值范围：1~50。默认值：10。
     */
    Limit: number;
    /**
     * 互信主体名称。
     */
    AuthName?: string;
}
/**
 * DescribeOrganizationMemberAuthAccounts请求参数结构体
 */
export interface DescribeOrganizationMemberAuthAccountsRequest {
    /**
     * 偏移量。取值是limit的整数倍。默认值 : 0。
     */
    Offset: number;
    /**
     * 限制数目。取值范围：1~50。默认值：10。
     */
    Limit: number;
    /**
     * 成员Uin。
     */
    MemberUin: number;
    /**
     * 策略ID。可以通过[DescribeOrganizationMemberPolicies](https://cloud.tencent.com/document/product/850/82935)获取
     */
    PolicyId: number;
}
/**
 * DescribeShareUnitMembers返回参数结构体
 */
export interface DescribeShareUnitMembersResponse {
    /**
     * 总数目。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
    /**
     * 共享单元成员列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<ShareUnitMember>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeShareAreas请求参数结构体
 */
export interface DescribeShareAreasRequest {
    /**
     * 国际站：en，国内站：zh
     */
    Lang?: string;
}
/**
 * DescribeOrganizationMemberAuthAccounts返回参数结构体
 */
export interface DescribeOrganizationMemberAuthAccountsResponse {
    /**
     * 列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<OrgMemberAuthAccount>;
    /**
     * 总数目
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 标签键值对
 */
export interface Tags {
    /**
     * 标签键。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TagKey: string;
    /**
     * 标签值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TagValue: string;
}
/**
 * 组织身份
 */
export interface OrgIdentity {
    /**
     * 身份ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IdentityId?: number;
    /**
     * 身份名称。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IdentityAliasName?: string;
    /**
     * 描述。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 身份策略。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IdentityPolicy?: Array<IdentityPolicy>;
    /**
     * 身份类型。 1-预设、 2-自定义
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IdentityType?: number;
    /**
     * 更新时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
}
/**
 * DescribeOrganizationMembers请求参数结构体
 */
export interface DescribeOrganizationMembersRequest {
    /**
     * 偏移量。取值是limit的整数倍，默认值 : 0
     */
    Offset: number;
    /**
     * 限制数目。取值范围：1~50，默认值：10
     */
    Limit: number;
    /**
     * 国际站：en，国内站：zh
     */
    Lang?: string;
    /**
     * 成员名称或者成员ID搜索。
     */
    SearchKey?: string;
    /**
     * 主体名称搜索。
     */
    AuthName?: string;
    /**
     * 可信服务产品简称。可信服务管理员查询时必须指定
     */
    Product?: string;
}
/**
 * UpdateShareUnit返回参数结构体
 */
export interface UpdateShareUnitResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListPoliciesForTarget请求参数结构体
 */
export interface ListPoliciesForTargetRequest {
    /**
     * 账号uin或者节点id。
     */
    TargetId: number;
    /**
     * 每页数量。默认值是 20，必须大于 0 且小于或等于 200
     */
    Rp?: number;
    /**
     * 页码。默认值是 1，从 1开始，不能大于 200
     */
    Page?: number;
    /**
     * 策略类型。默认值SERVICE_CONTROL_POLICY，取值范围：SERVICE_CONTROL_POLICY-服务控制策略、TAG_POLICY-标签策略
     */
    PolicyType?: string;
    /**
     * 搜索关键字。按照策略名称搜索
     */
    Keyword?: string;
}
/**
 * DeleteOrganizationMemberAuthIdentity返回参数结构体
 */
export interface DeleteOrganizationMemberAuthIdentityResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateOrganizationMemberEmailBind请求参数结构体
 */
export interface UpdateOrganizationMemberEmailBindRequest {
    /**
     * 成员Uin。
     */
    MemberUin: number;
    /**
     * 绑定ID。可以通过[DescribeOrganizationMemberEmailBind](https://cloud.tencent.com/document/product/850/93332)获取
     */
    BindId: number;
    /**
     * 邮箱地址。
     */
    Email: string;
    /**
     * 国际区号。
     */
    CountryCode: string;
    /**
     * 手机号。
     */
    Phone: string;
}
/**
 * UpdateShareUnit请求参数结构体
 */
export interface UpdateShareUnitRequest {
    /**
     * 共享单元ID。
     */
    UnitId: string;
    /**
     * 共享单元名称。仅支持大小写字母、数字、-、以及_的组合，3-128个字符。
     */
    Name?: string;
    /**
     * 共享单元描述。最大128个字符。
     */
    Description?: string;
}
/**
 * DeleteOrganizationMemberAuthIdentity请求参数结构体
 */
export interface DeleteOrganizationMemberAuthIdentityRequest {
    /**
     * 成员Uin。
     */
    MemberUin: number;
    /**
     * 身份ID。可以通过[ListOrganizationIdentity](https://cloud.tencent.com/document/product/850/82934)获取
     */
    IdentityId: number;
}
/**
 * 查询某个指定SCP策略关联的目标列表
 */
export interface ListTargetsForPolicyNode {
    /**
     * scp账号uin或节点Id
     */
    Uin: number;
    /**
     * 关联类型 1-节点关联 2-用户关联
     */
    RelatedType: number;
    /**
     * 账号或者节点名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name: string;
    /**
     * 绑定时间
     */
    AddTime: string;
}
/**
 * 关系策略权限
 */
export interface OrgPermission {
    /**
     * 权限Id
     */
    Id: number;
    /**
     * 权限名
     */
    Name: string;
}
/**
 * DetachPolicy请求参数结构体
 */
export interface DetachPolicyRequest {
    /**
     * 解绑策略目标ID。成员Uin或部门ID
     */
    TargetId: number;
    /**
     * 目标类型。取值范围：NODE-部门、MEMBER-成员
     */
    TargetType: string;
    /**
     * 策略ID。
     */
    PolicyId: number;
    /**
     * 策略类型。默认值SERVICE_CONTROL_POLICY，取值范围：SERVICE_CONTROL_POLICY-服务控制策略、TAG_POLICY-标签策略
     */
    Type?: string;
}
/**
 * DisablePolicyType请求参数结构体
 */
export interface DisablePolicyTypeRequest {
    /**
     * 企业组织Id。可以调用[DescribeOrganization](https://cloud.tencent.com/document/product/850/67059)获取
     */
    OrganizationId: number;
    /**
     * 策略类型。默认值SERVICE_CONTROL_POLICY，取值范围：SERVICE_CONTROL_POLICY-服务控制策略、TAG_POLICY-标签策略
     */
    PolicyType: string;
}
/**
 * DescribeEffectivePolicy返回参数结构体
 */
export interface DescribeEffectivePolicyResponse {
    /**
     * 有效策略。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EffectivePolicy?: EffectivePolicy;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AddOrganizationMemberEmail返回参数结构体
 */
export interface AddOrganizationMemberEmailResponse {
    /**
     * 绑定Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BindId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AddShareUnitMembers返回参数结构体
 */
export interface AddShareUnitMembersResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateOrganizationMemberPolicy请求参数结构体
 */
export interface CreateOrganizationMemberPolicyRequest {
    /**
     * 成员Uin。
     */
    MemberUin: number;
    /**
     * 策略名。最大长度为128个字符，支持英文字母、数字、符号+=,.@_-
     */
    PolicyName: string;
    /**
     * 成员访问身份ID。可以调用[DescribeOrganizationMemberAuthIdentities](https://cloud.tencent.com/document/product/850/82936)获取
     */
    IdentityId: number;
    /**
     * 描述。
     */
    Description?: string;
}
/**
 * CreateOrganization请求参数结构体
 */
export declare type CreateOrganizationRequest = null;
/**
 * AttachPolicy返回参数结构体
 */
export interface AttachPolicyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateOrganizationMembersPolicy请求参数结构体
 */
export interface CreateOrganizationMembersPolicyRequest {
    /**
     * 成员Uin列表。最多10个
     */
    MemberUins: Array<number | bigint>;
    /**
     * 策略名。长度1～128个字符，支持英文字母、数字、符号+=,.@_-
     */
    PolicyName: string;
    /**
     * 成员访问身份ID。可以通过[ListOrganizationIdentity](https://cloud.tencent.com/document/product/850/82934)获取
     */
    IdentityId: number;
    /**
     * 策略描述。最大长度为128个字符
     */
    Description?: string;
}
/**
 * CheckAccountDelete请求参数结构体
 */
export interface CheckAccountDeleteRequest {
    /**
     * 成员Uin。
     */
    MemberUin: number;
}
/**
 * 组织产品财务信息
 */
export interface OrgProductFinancial {
    /**
     * 产品Code。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductName: string;
    /**
     * 产品名。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProductCode: string;
    /**
     * 产品消耗，单位：元。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCost: number;
    /**
     * 占比%。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Ratio?: string;
}
/**
 * DetachPolicy返回参数结构体
 */
export interface DetachPolicyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AddShareUnit返回参数结构体
 */
export interface AddShareUnitResponse {
    /**
     * 共享单元ID。
     */
    UnitId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeShareUnitResources请求参数结构体
 */
export interface DescribeShareUnitResourcesRequest {
    /**
     * 共享单元ID。
     */
    UnitId: string;
    /**
     * 共享单元地域。
     */
    Area: string;
    /**
     * 偏移量。取值是limit的整数倍，默认值 : 0
     */
    Offset: number;
    /**
     * 限制数目。取值范围：1~50。
     */
    Limit: number;
    /**
     * 搜索关键字。支持产品资源ID搜索。
     */
    SearchKey?: string;
    /**
     * 共享资源类型。支持共享的资源类型,请参见[资源共享概述](https://cloud.tencent.com/document/product/850/59489)
     */
    Type?: string;
}
/**
 * DescribeOrganizationFinancialByProduct返回参数结构体
 */
export interface DescribeOrganizationFinancialByProductResponse {
    /**
     * 当月总消耗。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCost?: number;
    /**
     * 产品消耗详情。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<OrgProductFinancial>;
    /**
     * 总数目。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 企业组织策略列表
 */
export interface ListPolicyNode {
    /**
     * 策略创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AddTime: string;
    /**
     * 策略绑定次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AttachedTimes: number;
    /**
     * 策略描述信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description: string;
    /**
     * 策略名称
     */
    PolicyName: string;
    /**
     * 策略Id
     */
    PolicyId: number;
    /**
     * 策略更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime: string;
    /**
     * 策略类型 1-自定义 2-预设
     */
    Type: number;
}
/**
 * DescribeOrganizationFinancialByProduct请求参数结构体
 */
export interface DescribeOrganizationFinancialByProductRequest {
    /**
     * 查询开始月份。格式：yyyy-mm，例如：2021-01
     */
    Month: string;
    /**
     * 限制数目。取值范围：1~50，默认值：10
     */
    Limit?: number;
    /**
     * 偏移量。取值是limit的整数倍，默认值 : 0
     */
    Offset?: number;
    /**
     * 查询结束月份。格式：yyyy-mm，例如：2021-01,默认值为查询开始月份
     */
    EndMonth?: string;
    /**
     * 查询成员列表。 最大100个
     */
    MemberUins?: Array<number | bigint>;
    /**
     * 查询产品列表。 最大100个
     */
    ProductCodes?: Array<string>;
}
/**
 * 组织成员被授权的策略
 */
export interface OrgMemberPolicy {
    /**
     * 策略ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolicyId: number;
    /**
     * 策略名。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolicyName: string;
    /**
     * 身份ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IdentityId: number;
    /**
     * 身份角色名。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IdentityRoleName: string;
    /**
     * 身份角色别名。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IdentityRoleAliasName: string;
    /**
     * 描述。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description: string;
    /**
     * 创建时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime: string;
    /**
     * 更新时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime: string;
}
/**
 * 资源及关联的标签
 */
export interface ResourceTagMapping {
    /**
     * 资源六段式。腾讯云使用资源六段式描述一个资源。
  例如：qcs::${ServiceType}:${Region}:${Account}:${ResourcePreifx}/${ResourceId}。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource: string;
    /**
     * 合规详情。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ComplianceDetails: TagComplianceDetails;
    /**
     * 资源标签。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags: Array<Tags>;
}
/**
 * CreateOrganizationMemberPolicy返回参数结构体
 */
export interface CreateOrganizationMemberPolicyResponse {
    /**
     * 策略ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolicyId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeShareUnitMembers请求参数结构体
 */
export interface DescribeShareUnitMembersRequest {
    /**
     * 共享单元ID。
     */
    UnitId: string;
    /**
     * 共享单元地域。
     */
    Area: string;
    /**
     * 偏移量。取值是limit的整数倍，默认值 : 0
     */
    Offset: number;
    /**
     * 限制数目。取值范围：1~50。
     */
    Limit: number;
    /**
     * 搜索关键字。支持成员Uin搜索。
     */
    SearchKey?: string;
}
/**
 * CancelOrganizationMemberAuthAccount返回参数结构体
 */
export interface CancelOrganizationMemberAuthAccountResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateOrganizationMember请求参数结构体
 */
export interface UpdateOrganizationMemberRequest {
    /**
     * 成员Uin。
     */
    MemberUin: number;
    /**
     * 成员名称。最大长度为25个字符，支持英文字母、数字、汉字、符号+@、&._[]-:,
     */
    Name?: string;
    /**
     * 备注。最大长度为40个字符
     */
    Remark?: string;
    /**
     * 关系策略类型。PolicyType不为空，PermissionIds不能为空。取值：Financial
     */
    PolicyType?: string;
    /**
     * 成员财务权限ID列表。PermissionIds不为空，PolicyType不能为空。
  取值：1-查看账单、2-查看余额、3-资金划拨、4-合并出账、5-开票、6-优惠继承、7-代付费、8-成本分析，如果有值，1、2 默认必须
     */
    PermissionIds?: Array<number | bigint>;
    /**
     * 是否允许成员退出组织。取值：Allow-允许、Denied-不允许
     */
    IsAllowQuit?: string;
    /**
     * 代付者Uin。成员财务权限有代付费时需要，取值为成员对应主体的主体管理员Uin
     */
    PayUin?: string;
}
/**
 * AddShareUnitResources请求参数结构体
 */
export interface AddShareUnitResourcesRequest {
    /**
     * 共享单元ID。
     */
    UnitId: string;
    /**
     * 共享单元地域。
     */
    Area: string;
    /**
     * 共享资源类型。支持共享的资源类型,请参见[资源共享概述](https://cloud.tencent.com/document/product/850/59489)
     */
    Type: string;
    /**
     * 共享资源列表。最大10个。
     */
    Resources: Array<ProductResource>;
}
/**
 * 共享成员信息
 */
export interface ShareMember {
    /**
     * 共享成员Uin。
     */
    ShareMemberUin: number;
}
/**
 * ListPoliciesForTarget返回参数结构体
 */
export interface ListPoliciesForTargetResponse {
    /**
     * 总数。
     */
    TotalNum?: number;
    /**
     * 目标关联的策略列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    List?: Array<ListPoliciesForTarget>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteShareUnitMembers请求参数结构体
 */
export interface DeleteShareUnitMembersRequest {
    /**
     * 共享单元ID。
     */
    UnitId: string;
    /**
     * 共享单元地域。
     */
    Area: string;
    /**
     * 成员列表。
     */
    Members: Array<ShareMember>;
}
/**
 * DescribeOrganizationMemberAuthIdentities返回参数结构体
 */
export interface DescribeOrganizationMemberAuthIdentitiesResponse {
    /**
     * 授权身份列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<OrgMemberAuthIdentity>;
    /**
     * 总数目。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdatePolicy返回参数结构体
 */
export interface UpdatePolicyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 共享单元资源
 */
export interface ShareUnitResource {
    /**
     * 共享资源ID。
     */
    ResourceId?: string;
    /**
     * 共享资源类型。
     */
    Type?: string;
    /**
     * 创建时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 产品资源ID。
     */
    ProductResourceId?: string;
    /**
     * 共享单元成员数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SharedMemberNum?: number;
    /**
     * 使用中共享单元成员数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SharedMemberUseNum?: number;
    /**
     * 共享管理员OwnerUin。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ShareManagerUin?: number;
}
/**
 * DeleteOrganizationIdentity返回参数结构体
 */
export interface DeleteOrganizationIdentityResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeOrganizationMemberEmailBind请求参数结构体
 */
export interface DescribeOrganizationMemberEmailBindRequest {
    /**
     * 成员Uin。
     */
    MemberUin: number;
}
/**
 * ListPolicies请求参数结构体
 */
export interface ListPoliciesRequest {
    /**
     * 每页数量。默认值是 20，必须大于 0 且小于或等于 200
     */
    Rp?: number;
    /**
     * 页码。默认值是 1，从 1开始，不能大于 200
     */
    Page?: number;
    /**
     * 查询范围。取值范围： All-获取所有策略、QCS-只获取预设策略、Local-只获取自定义策略，默认值：All
     */
    Scope?: string;
    /**
     * 搜索关键字。按照策略名搜索
     */
    Keyword?: string;
    /**
     * 策略类型。默认值SERVICE_CONTROL_POLICY，取值范围：SERVICE_CONTROL_POLICY-服务控制策略、TAG_POLICY-标签策略
     */
    PolicyType?: string;
}
/**
 * 企业组织成员
 */
export interface OrgMember {
    /**
     * 成员Uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MemberUin: number;
    /**
     * 成员名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name: string;
    /**
     * 成员类型，邀请：Invite， 创建：Create
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MemberType: string;
    /**
     * 关系策略类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OrgPolicyType: string;
    /**
     * 关系策略名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OrgPolicyName: string;
    /**
     * 关系策略权限
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OrgPermission: Array<OrgPermission>;
    /**
     * 所属节点ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeId: number;
    /**
     * 所属节点名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeName: string;
    /**
     * 备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Remark: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime: string;
    /**
     * 是否允许成员退出。允许：Allow，不允许：Denied。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsAllowQuit: string;
    /**
     * 代付者Uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PayUin: string;
    /**
     * 代付者名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PayName: string;
    /**
     * 管理身份
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OrgIdentity: Array<MemberIdentity>;
    /**
     * 安全信息绑定状态  未绑定：Unbound，待激活：Valid，绑定成功：Success，绑定失败：Failed
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BindStatus: string;
    /**
     * 成员权限状态 已确认：Confirmed ，待确认：UnConfirmed
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PermissionStatus: string;
}
/**
 * CreateOrganizationMember请求参数结构体
 */
export interface CreateOrganizationMemberRequest {
    /**
     * 成员名称。最大长度为25个字符，支持英文字母、数字、汉字、符号+@、&._[]-:,
     */
    Name: string;
    /**
     * 关系策略。取值：Financial
     */
    PolicyType: string;
    /**
     * 成员财务权限ID列表。取值：1-查看账单、2-查看余额、3-资金划拨、4-合并出账、5-开票、6-优惠继承、7-代付费，1、2 默认必须
     */
    PermissionIds: Array<number | bigint>;
    /**
     * 成员所属部门的节点ID。可以通过[DescribeOrganizationNodes](https://cloud.tencent.com/document/product/850/82926)获取
     */
    NodeId: number;
    /**
     * 账号名称。最大长度为25个字符，支持英文字母、数字、汉字、符号+@、&._[]-:,
     */
    AccountName: string;
    /**
     * 备注。
     */
    Remark?: string;
    /**
     * 成员创建记录ID。创建异常重试时需要
     */
    RecordId?: number;
    /**
     * 代付者Uin。成员代付费时需要
     */
    PayUin?: string;
    /**
     * 成员访问身份ID列表。可以调用ListOrganizationIdentity获取，1默认支持
     */
    IdentityRoleID?: Array<number | bigint>;
    /**
     * 认证主体关系ID。给不同主体创建成员时需要，可以调用DescribeOrganizationAuthNode获取
     */
    AuthRelationId?: number;
}
/**
 * CreatePolicy请求参数结构体
 */
export interface CreatePolicyRequest {
    /**
     * 策略名。
  长度为1~128个字符，可以包含汉字、英文字母、数字和下划线（_）
     */
    Name: string;
    /**
     * 策略内容。参考CAM策略语法
     */
    Content: string;
    /**
     * 策略类型。默认值SERVICE_CONTROL_POLICY，取值范围：SERVICE_CONTROL_POLICY-服务控制策略、TAG_POLICY-标签策略
     */
    Type: string;
    /**
     * 策略描述。
     */
    Description?: string;
}
/**
 * 组织成员可授权的身份
 */
export interface OrgMemberAuthIdentity {
    /**
     * 身份ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IdentityId?: number;
    /**
     * 身份的角色名。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IdentityRoleName?: string;
    /**
     * 身份的角色别名。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IdentityRoleAliasName?: string;
    /**
     * 身份描述。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 首次配置成功的时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 最后一次配置成功的时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 身份类型。取值： 1-预设身份  2-自定义身份
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IdentityType?: number;
    /**
     * 配置状态。取值：1-配置完成 2-需重新配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
    /**
     * 成员Uin。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MemberUin?: number;
    /**
     * 成员名称。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MemberName?: string;
}
/**
 * DeleteShareUnit请求参数结构体
 */
export interface DeleteShareUnitRequest {
    /**
     * 共享单元ID。
     */
    UnitId: string;
}
/**
 * 不允许删除的原因。
 */
export interface NotAllowReason {
    /**
     * 是否创建的成员。true-是、false-否；成员不是创建的成员不允许删除
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsCreateMember?: boolean;
    /**
     * 成员删除许可。true-开启、false-关闭；成员删除许可关闭时不允许删除
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeletionPermission?: boolean;
    /**
     * 是否可信服务委派管理员。true-是、false-否；成员是可信服务委派管理员不允许删除
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsAssignManager?: boolean;
    /**
     * 是否主体管理员。true-是、false-否；成员是主体管理员不允许删除
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsAuthManager?: boolean;
    /**
     * 是否共享资源管理员。true-是、false-否；成员是共享资源管理员不允许删除
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsShareManager?: boolean;
    /**
     * 成员是否设置了操作审批。true-是、false-否；成员设置了操作审批时不允许删除
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperateProcess?: boolean;
    /**
     * 是否允许解除成员财务权限。true-是、false-否；成员不能解除财务权限时不允许删除
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BillingPermission?: boolean;
    /**
     * 存在的资源列表。账号存在资源时不允许删除
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExistResources?: Array<string>;
    /**
     * 检测失败的资源列表。账号有资源检测失败时不允许删除。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DetectFailedResources?: Array<string>;
}
/**
 * 企业组织单元
 */
export interface OrgNode {
    /**
     * 组织节点ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeId: number;
    /**
     * 名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name: string;
    /**
     * 父节点ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParentNodeId: number;
    /**
     * 备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Remark: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime: string;
}
/**
 * CheckAccountDelete返回参数结构体
 */
export interface CheckAccountDeleteResponse {
    /**
     * 成员是否允许删除。 true-是、false-否
     */
    AllowDelete?: boolean;
    /**
     * 不允许删除原因。
     */
    NotAllowReason?: NotAllowReason;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteAccount请求参数结构体
 */
export interface DeleteAccountRequest {
    /**
     * 成员Uin。
     */
    MemberUin: number;
}
/**
 * 查询目标关联的SCP策略列表
 */
export interface ListPoliciesForTarget {
    /**
     * 策略Id
     */
    StrategyId: number;
    /**
     * 策略名称
     */
    StrategyName: string;
    /**
     * 备注信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Remark: string;
    /**
     * 关联的账号或节点
     */
    Uin: number;
    /**
     * 关联类型 1-节点 2-用户
     */
    Type: number;
    /**
     * 策略创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AddTime: string;
    /**
     * 策略更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime: string;
    /**
     * 部门名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name: string;
    /**
     * 策略绑定时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AttachTime: string;
}
/**
 * CreateOrganizationMemberAuthIdentity请求参数结构体
 */
export interface CreateOrganizationMemberAuthIdentityRequest {
    /**
     * 成员Uin列表。最多10个
     */
    MemberUins: Array<number | bigint>;
    /**
     * 身份Id列表。最多5个，可以通过[ListOrganizationIdentity](https://cloud.tencent.com/document/product/850/82934)获取
     */
    IdentityIds: Array<number | bigint>;
}
/**
 * DescribeOrganizationFinancialByMember请求参数结构体
 */
export interface DescribeOrganizationFinancialByMemberRequest {
    /**
     * 查询开始月份。格式：yyyy-mm，例如：2021-01。
     */
    Month: string;
    /**
     * 限制数目。取值范围：1~50，默认值：10
     */
    Limit?: number;
    /**
     * 偏移量。取值是limit的整数倍，默认值 : 0
     */
    Offset?: number;
    /**
     * 查询结束月份。格式：yyyy-mm，例如：2021-01,默认值为查询开始月份。
     */
    EndMonth?: string;
    /**
     * 查询成员列表。 最大100个
     */
    MemberUins?: Array<number | bigint>;
    /**
     * 查询产品列表。 最大100个
     */
    ProductCodes?: Array<string>;
}
/**
 * DescribeOrganizationFinancialByMonth请求参数结构体
 */
export interface DescribeOrganizationFinancialByMonthRequest {
    /**
     * 查询月数。取值范围：1~6，默认值：6
     */
    Limit?: number;
    /**
     * 查询结束月份。格式：yyyy-mm，例如：2021-01
     */
    EndMonth?: string;
    /**
     * 查询成员列表。 最大100个
     */
    MemberUins?: Array<number | bigint>;
    /**
     * 查询产品列表。 最大100个
     */
    ProductCodes?: Array<string>;
}
/**
 * CreateOrganizationMembersPolicy返回参数结构体
 */
export interface CreateOrganizationMembersPolicyResponse {
    /**
     * 策略ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolicyId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteShareUnitResources返回参数结构体
 */
export interface DeleteShareUnitResourcesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateOrganizationIdentity返回参数结构体
 */
export interface CreateOrganizationIdentityResponse {
    /**
     * 身份ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IdentityId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateOrganizationIdentity返回参数结构体
 */
export interface UpdateOrganizationIdentityResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeOrganizationNodes返回参数结构体
 */
export interface DescribeOrganizationNodesResponse {
    /**
     * 总数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
    /**
     * 列表详情。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<OrgNode>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteOrganizationMembersPolicy请求参数结构体
 */
export interface DeleteOrganizationMembersPolicyRequest {
    /**
     * 访问策略ID。可以通过[DescribeOrganizationMemberPolicies](https://cloud.tencent.com/document/product/850/82935)获取
     */
    PolicyId: number;
}
/**
 * DescribePolicy请求参数结构体
 */
export interface DescribePolicyRequest {
    /**
     * 策略Id。
     */
    PolicyId: number;
    /**
     * 策略类型。默认值SERVICE_CONTROL_POLICY，取值范围：SERVICE_CONTROL_POLICY-服务控制策略、TAG_POLICY-标签策略
     */
    PolicyType?: string;
}
/**
 * ListTargetsForPolicy请求参数结构体
 */
export interface ListTargetsForPolicyRequest {
    /**
     * 策略Id。
     */
    PolicyId: number;
    /**
     * 每页数量。默认值是 20，必须大于 0 且小于或等于 200
     */
    Rp?: number;
    /**
     * 页码。默认值是 1，从 1开始，不能大于 200
     */
    Page?: number;
    /**
     * 策略类型。取值范围：All-全部、User-用户、Node-节点
     */
    TargetType?: string;
    /**
     * 策略类型。默认值SERVICE_CONTROL_POLICY，取值范围：SERVICE_CONTROL_POLICY-服务控制策略、TAG_POLICY-标签策略
     */
    PolicyType?: string;
    /**
     * 按照多个策略id搜索，空格隔开。
     */
    Keyword?: string;
}
/**
 * DeleteOrganizationIdentity请求参数结构体
 */
export interface DeleteOrganizationIdentityRequest {
    /**
     * 身份ID。可以通过[ListOrganizationIdentity](https://cloud.tencent.com/document/product/850/82934)获取
     */
    IdentityId: number;
}
/**
 * UpdateOrganizationNode返回参数结构体
 */
export interface UpdateOrganizationNodeResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteOrganizationNodes返回参数结构体
 */
export interface DeleteOrganizationNodesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeOrganizationFinancialByMember返回参数结构体
 */
export interface DescribeOrganizationFinancialByMemberResponse {
    /**
     * 当月总消耗。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCost?: number;
    /**
     * 成员消耗详情。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<OrgMemberFinancial>;
    /**
     * 总数目。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 产品资源
 */
export interface ProductResource {
    /**
     * 产品资源ID。
     */
    ProductResourceId: string;
    /**
     * 资源六段式最后一节
     * @deprecated
     */
    ResourceGrantLast?: string;
}
/**
 * DescribePolicyConfig请求参数结构体
 */
export interface DescribePolicyConfigRequest {
    /**
     * 企业组织Id。可以调用[DescribeOrganization](https://cloud.tencent.com/document/product/850/67059)获取
     */
    OrganizationId: number;
    /**
     * 策略类型。默认值0，取值范围：0-服务控制策略、1-标签策略
     */
    Type?: number;
}
/**
 * DescribeOrganizationMemberPolicies返回参数结构体
 */
export interface DescribeOrganizationMemberPoliciesResponse {
    /**
     * 列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<OrgMemberPolicy>;
    /**
     * 总数目。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeShareUnits请求参数结构体
 */
export interface DescribeShareUnitsRequest {
    /**
     * 共享单元地域。可通过接口[DescribeShareAreas](https://cloud.tencent.com/document/product/850/103050)获取支持共享的地域。
     */
    Area: string;
    /**
     * 偏移量。取值是limit的整数倍。默认值 : 0。
     */
    Offset: number;
    /**
     * 限制数目。取值范围：1~50。
     */
    Limit: number;
    /**
     * 搜索关键字。支持UnitId和Name搜索。
     */
    SearchKey?: string;
}
/**
 * 共享地域
 */
export interface ShareArea {
    /**
     * 地域名称。
     */
    Name?: string;
    /**
     * 地域标识。
     */
    Area?: string;
    /**
     * 地域ID。
     */
    AreaId?: number;
}
/**
 * DeleteAccount返回参数结构体
 */
export interface DeleteAccountResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdatePolicy请求参数结构体
 */
export interface UpdatePolicyRequest {
    /**
     * 需要编辑的策略ID。可以调用[ListPolicies](https://cloud.tencent.com/document/product/850/105311)获取
     */
    PolicyId: number;
    /**
     * 策略描述。
     */
    Description?: string;
    /**
     * 策略内容。参考CAM策略语法
     */
    Content?: string;
    /**
     * 策略名。长度为1~128个字符，可以包含汉字、英文字母、数字和下划线（_）
     */
    Name?: string;
    /**
     * 策略类型。默认值SERVICE_CONTROL_POLICY，取值范围：SERVICE_CONTROL_POLICY-服务控制策略、TAG_POLICY-标签策略
     */
    Type?: string;
}
