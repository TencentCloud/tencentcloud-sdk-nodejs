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
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * BindOrganizationMemberAuthAccount请求参数结构体
 */
export interface BindOrganizationMemberAuthAccountRequest {
    /**
     * 成员Uin。
     */
    MemberUin: number;
    /**
     * 策略ID。可以调用DescribeOrganizationMemberPolicies获取
     */
    PolicyId: number;
    /**
     * 组织管理员子账号Uin列表。最大5个
     */
    OrgSubAccountUins: Array<number | bigint>;
}
/**
 * CreateOrganizationMemberAuthIdentity请求参数结构体
 */
export interface CreateOrganizationMemberAuthIdentityRequest {
    /**
     * 成员uin列表。最多10个
     */
    MemberUins: Array<number | bigint>;
    /**
     * 身份Id列表。最多5个
     */
    IdentityIds: Array<number | bigint>;
}
/**
 * UpdateOrganizationIdentity请求参数结构体
 */
export interface UpdateOrganizationIdentityRequest {
    /**
     * 身份ID
     */
    IdentityId: number;
    /**
     * 身份描述
     */
    Description: string;
    /**
     * 身份策略
     */
    IdentityPolicy: Array<IdentityPolicy>;
}
/**
 * DeleteOrganizationMembers返回参数结构体
 */
export interface DeleteOrganizationMembersResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * DescribeOrganizationAuthNode请求参数结构体
 */
export interface DescribeOrganizationAuthNodeRequest {
    /**
     * 偏移量。
     */
    Offset: number;
    /**
     * 限制数目。最大50
     */
    Limit: number;
    /**
     * 互信主体名称。
     */
    AuthName?: string;
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
     * 身份ID。入参MemberUin与IdentityId至少填写一个
     */
    IdentityId?: number;
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
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateOrganizationMemberAuthIdentity返回参数结构体
 */
export interface CreateOrganizationMemberAuthIdentityResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 成员访问身份ID。可以调用DescribeOrganizationMemberAuthIdentities获取
     */
    IdentityId: number;
    /**
     * 描述。
     */
    Description?: string;
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
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 偏移量。
     */
    Offset: number;
}
/**
 * CreateOrganization请求参数结构体
 */
export declare type CreateOrganizationRequest = null;
/**
 * CreateOrganizationMember返回参数结构体
 */
export interface CreateOrganizationMemberResponse {
    /**
     * 成员Uin。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Uin: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateOrganizationMember返回参数结构体
 */
export interface UpdateOrganizationMemberResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * QuitOrganization返回参数结构体
 */
export interface QuitOrganizationResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
     * 成员访问身份ID。
     */
    IdentityId: number;
    /**
     * 策略描述。最大长度为128个字符
     */
    Description?: string;
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
     * 绑定ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BindId: number;
    /**
     * 申请时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplyTime: string;
    /**
     * 邮箱地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Email: string;
    /**
     * 手机号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Phone: string;
    /**
     * 绑定状态    未绑定：Unbound，待激活：Valid，绑定成功：Success，绑定失败：Failed
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BindStatus: string;
    /**
     * 绑定时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BindTime: string;
    /**
     * 失败说明
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description: string;
    /**
     * 安全手机绑定状态  未绑定：0，已绑定：1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PhoneBind: number;
    /**
     * 国际区号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CountryCode: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteOrganizationMembers请求参数结构体
 */
export interface DeleteOrganizationMembersRequest {
    /**
     * 被删除成员的UIN列表。
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
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeOrganizationMemberPolicies返回参数结构体
 */
export interface DescribeOrganizationMemberPoliciesResponse {
    /**
     * 列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items: Array<OrgMemberPolicy>;
    /**
     * 总数目。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteOrganizationNodes请求参数结构体
 */
export interface DeleteOrganizationNodesRequest {
    /**
     * 节点ID列表。
     */
    NodeId: Array<number | bigint>;
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
    NodeId: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BindOrganizationMemberAuthAccount返回参数结构体
 */
export interface BindOrganizationMemberAuthAccountResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateOrganizationIdentity返回参数结构体
 */
export interface UpdateOrganizationIdentityResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AddOrganizationMemberEmail请求参数结构体
 */
export interface AddOrganizationMemberEmailRequest {
    /**
     * 成员Uin
     */
    MemberUin: number;
    /**
     * 邮箱地址
     */
    Email: string;
    /**
     * 国际区号
     */
    CountryCode: string;
    /**
     * 手机号
     */
    Phone: string;
}
/**
 * DeleteOrganization请求参数结构体
 */
export declare type DeleteOrganizationRequest = null;
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
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    Total: number;
    /**
     * 列表详情。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items: Array<OrgNode>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteOrganizationMembersPolicy请求参数结构体
 */
export interface DeleteOrganizationMembersPolicyRequest {
    /**
     * 访问策略ID。
     */
    PolicyId: number;
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
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateOrganizationMemberPolicy返回参数结构体
 */
export interface CreateOrganizationMemberPolicyResponse {
    /**
     * 策略ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolicyId: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * MoveOrganizationNodeMembers请求参数结构体
 */
export interface MoveOrganizationNodeMembersRequest {
    /**
     * 组织节点ID。
     */
    NodeId: number;
    /**
     * 成员UIN列表。
     */
    MemberUin: Array<number | bigint>;
}
/**
 * CancelOrganizationMemberAuthAccount返回参数结构体
 */
export interface CancelOrganizationMemberAuthAccountResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * DeleteOrganizationNodes返回参数结构体
 */
export interface DeleteOrganizationNodesResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * DescribeOrganization返回参数结构体
 */
export interface DescribeOrganizationResponse {
    /**
     * 企业组织ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OrgId: number;
    /**
     * 创建者UIN。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HostUin: number;
    /**
     * 创建者昵称。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NickName: string;
    /**
     * 企业组织类型。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OrgType: number;
    /**
     * 是否组织管理员。是：true ，否：false
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsManager: boolean;
    /**
     * 策略类型。财务管理：Financial
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OrgPolicyType: string;
    /**
     * 策略名。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OrgPolicyName: string;
    /**
     * 成员财务权限列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OrgPermission: Array<OrgPermission>;
    /**
     * 组织根节点ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RootNodeId: number;
    /**
     * 组织创建时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime: string;
    /**
     * 成员加入时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JoinTime: string;
    /**
     * 成员是否允许退出。允许：Allow，不允许：Denied
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsAllowQuit: string;
    /**
     * 代付者Uin。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PayUin: string;
    /**
     * 代付者名称。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PayName: string;
    /**
     * 是否可信服务管理员。是：true，否：false
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsAssignManager: boolean;
    /**
     * 是否实名主体管理员。是：true，否：false
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsAuthManager: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeOrganizationMemberPolicies请求参数结构体
 */
export interface DescribeOrganizationMemberPoliciesRequest {
    /**
     * 偏移量。
     */
    Offset: number;
    /**
     * 限制数目。最大50
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
 * DescribeOrganizationMemberEmailBind请求参数结构体
 */
export interface DescribeOrganizationMemberEmailBindRequest {
    /**
     * 成员Uin
     */
    MemberUin: number;
}
/**
 * UpdateOrganizationMemberEmailBind返回参数结构体
 */
export interface UpdateOrganizationMemberEmailBindResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AddOrganizationNode请求参数结构体
 */
export interface AddOrganizationNodeRequest {
    /**
     * 父节点ID。可以调用DescribeOrganizationNodes获取
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
 * UpdateOrganizationNode返回参数结构体
 */
export interface UpdateOrganizationNodeResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * DeleteOrganizationIdentity请求参数结构体
 */
export interface DeleteOrganizationIdentityRequest {
    /**
     * 身份ID
     */
    IdentityId: number;
}
/**
 * UpdateOrganizationNode请求参数结构体
 */
export interface UpdateOrganizationNodeRequest {
    /**
     * 节点ID。
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
 * DescribeOrganizationMemberAuthAccounts请求参数结构体
 */
export interface DescribeOrganizationMemberAuthAccountsRequest {
    /**
     * 偏移量。
     */
    Offset: number;
    /**
     * 限制数目。
     */
    Limit: number;
    /**
     * 成员Uin。
     */
    MemberUin: number;
    /**
     * 策略ID。
     */
    PolicyId: number;
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
     * 策略ID。
     */
    PolicyId: number;
    /**
     * 组织子账号Uin。
     */
    OrgSubAccountUin: number;
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
     * 身份ID搜索。
     */
    IdentityId?: number;
    /**
     * 身份类型。取值范围 1-预设, 2-自定义
     */
    IdentityType?: number;
}
/**
 * DeleteOrganizationIdentity返回参数结构体
 */
export interface DeleteOrganizationIdentityResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteOrganization返回参数结构体
 */
export interface DeleteOrganizationResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeOrganizationMemberAuthAccounts返回参数结构体
 */
export interface DescribeOrganizationMemberAuthAccountsResponse {
    /**
     * 列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items: Array<OrgMemberAuthAccount>;
    /**
     * 总数目
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * DeleteOrganizationMembersPolicy返回参数结构体
 */
export interface DeleteOrganizationMembersPolicyResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 成员所属部门的节点ID。可以调用DescribeOrganizationNodes获取
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
 * MoveOrganizationNodeMembers返回参数结构体
 */
export interface MoveOrganizationNodeMembersResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * DeleteOrganizationMemberAuthIdentity返回参数结构体
 */
export interface DeleteOrganizationMemberAuthIdentityResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateOrganizationMemberEmailBind请求参数结构体
 */
export interface UpdateOrganizationMemberEmailBindRequest {
    /**
     * 成员Uin
     */
    MemberUin: number;
    /**
     * 绑定ID
     */
    BindId: number;
    /**
     * 邮箱
     */
    Email: string;
    /**
     * 国际区号
     */
    CountryCode: string;
    /**
     * 手机号
     */
    Phone: string;
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
 * DeleteOrganizationMemberAuthIdentity请求参数结构体
 */
export interface DeleteOrganizationMemberAuthIdentityRequest {
    /**
     * 成员uin。
     */
    MemberUin: number;
    /**
     * 身份Id。
     */
    IdentityId: number;
}
