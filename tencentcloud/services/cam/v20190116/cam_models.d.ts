/**
 * 子用户信息
 */
export interface SubAccountUser {
    /**
     * 子用户用户 ID
     */
    Uin: number;
    /**
     * 子用户用户名
     */
    Name: string;
    /**
     * 子用户 UID，UID是用户作为消息接收人时的唯一标识，和 UIN 一样可以唯一标识一个用户，可通过接口https://cloud.tencent.com/document/api/598/53486 获取
     */
    Uid: number;
    /**
     * 子用户备注
     */
    Remark: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime: string;
    /**
     * 用户类型(2:子用户;3:企业微信子用户;4:协作者;5:消息接收人)
     */
    UserType: number;
    /**
     * 最近登录IP
     */
    LastLoginIp: string;
    /**
     * 最近登录时间，回参为空，即为未登录过控制台
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastLoginTime: string;
}
/**
 * ListAttachedRolePolicies返回参数结构体
 */
export interface ListAttachedRolePoliciesResponse {
    /**
     * 角色关联的策略列表
     */
    List?: Array<AttachedPolicyOfRole>;
    /**
     * 角色关联的策略总数
     */
    TotalNum?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateMessageReceiver请求参数结构体
 */
export interface CreateMessageReceiverRequest {
    /**
     * 消息接收人的用户名
     */
    Name: string;
    /**
     * 手机号国际区号，国内为86
     */
    CountryCode: string;
    /**
     * 手机号码, 例如：132****2492
     */
    PhoneNumber: string;
    /**
     * 邮箱，例如：57*****@qq.com
     */
    Email: string;
    /**
     * 消息接收人的备注，选填
     */
    Remark?: string;
}
/**
 * UpdateUserOIDCConfig返回参数结构体
 */
export interface UpdateUserOIDCConfigResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateRoleSessionDuration返回参数结构体
 */
export interface UpdateRoleSessionDurationResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 消息接收人信息
 */
export interface Receiver {
    /**
     * id
     */
    Uid?: number;
    /**
     * 名字
     */
    Name?: string;
    /**
     * 备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Remark?: string;
    /**
     * 手机号码
     */
    PhoneNumber?: string;
    /**
     * 手机号码是否验证
     */
    PhoneFlag?: number;
    /**
     * 邮箱
     */
    Email?: string;
    /**
     * 邮箱是否验证
     */
    EmailFlag?: number;
    /**
     * 是否主联系人
     */
    IsReceiverOwner?: number;
    /**
     * 是否允许微信接收通知
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WechatFlag?: number;
    /**
     * 账号uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Uin?: number;
}
/**
 * ListAccessKeys请求参数结构体
 */
export interface ListAccessKeysRequest {
    /**
     * 指定用户Uin，不填默认列出当前用户访问密钥
     */
    TargetUin?: number;
}
/**
 * SetMfaFlag返回参数结构体
 */
export interface SetMfaFlagResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateSAMLProvider请求参数结构体
 */
export interface UpdateSAMLProviderRequest {
    /**
     * SAML身份提供商名称
     */
    Name: string;
    /**
     * SAML身份提供商描述
     */
    Description?: string;
    /**
     * SAML身份提供商Base64编码的元数据文档
     */
    SAMLMetadataDocument?: string;
}
/**
 * DeleteUser请求参数结构体
 */
export interface DeleteUserRequest {
    /**
     * 子用户用户名
     */
    Name: string;
    /**
     * 是否强制删除该子用户，默认入参为0。0：若该用户存在未删除API密钥，则不删除用户；1：若该用户存在未删除API密钥，则先删除密钥后删除用户。删除密钥需要您拥有cam:DeleteApiKey权限，您将可以删除该用户下启用或禁用状态的所有密钥，无权限则删除密钥和用户失败
     */
    Force?: number;
}
/**
 * DetachGroupPolicy请求参数结构体
 */
export interface DetachGroupPolicyRequest {
    /**
     * 策略 id
     */
    PolicyId: number;
    /**
     * 用户组 id
     */
    DetachGroupId: number;
}
/**
 * DescribeRoleList返回参数结构体
 */
export interface DescribeRoleListResponse {
    /**
     * 角色详情列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    List?: Array<RoleInfo>;
    /**
     * 角色总数
     */
    TotalNum?: number;
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
     * 策略id，入参是PolicyName时，才会返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolicyId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteUser返回参数结构体
 */
export interface DeleteUserResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * TagRole返回参数结构体
 */
export interface TagRoleResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 登录和敏感操作flag
 */
export interface LoginActionFlagIntl {
    /**
     * 手机
     */
    Phone?: number;
    /**
     * 硬token
     */
    Token?: number;
    /**
     * 软token
     */
    Stoken?: number;
    /**
     * 微信
     */
    Wechat?: number;
    /**
     * 自定义
     */
    Custom?: number;
    /**
     * 邮件
     */
    Mail?: number;
    /**
     * u2f硬件token
  注意：此字段可能返回 null，表示取不到有效值。
     */
    U2FToken?: number;
}
/**
 * GetRole请求参数结构体
 */
export interface GetRoleRequest {
    /**
     * 角色 ID，用于指定角色，入参 RoleId 与 RoleName 二选一
     */
    RoleId?: string;
    /**
     * 角色名，用于指定角色，入参 RoleId 与 RoleName 二选一
     */
    RoleName?: string;
}
/**
 * CreateServiceLinkedRole请求参数结构体
 */
export interface CreateServiceLinkedRoleRequest {
    /**
     * 填写此角色的腾讯云服务载体，具体可查询文档（角色载体）字段
  https://cloud.tencent.com/document/product/598/85165
     */
    QCSServiceName: Array<string>;
    /**
     * 自定义后缀，根据您提供的字符串，与服务提供的前缀组合在一起以形成完整的角色名称。
     */
    CustomSuffix?: string;
    /**
     * 角色说明。
     */
    Description?: string;
    /**
     * 角色绑定标签。
     */
    Tags?: Array<RoleTags>;
}
/**
 * ListAttachedGroupPolicies请求参数结构体
 */
export interface ListAttachedGroupPoliciesRequest {
    /**
     * 用户组ID
     */
    TargetGroupId: number;
    /**
     * 页码，默认值是 1，从 1 开始
     */
    Page?: number;
    /**
     * 每页大小，默认值是 20
     */
    Rp?: number;
    /**
     * 搜索关键字
     */
    Keyword?: string;
}
/**
 * ListGroupsForUser请求参数结构体
 */
export interface ListGroupsForUserRequest {
    /**
     * 子用户 UID，入参Uid和SubUin二选一
     */
    Uid?: number;
    /**
     * 每页数量。默认为20。
     */
    Rp?: number;
    /**
     * 页码。默认为1。
     */
    Page?: number;
    /**
     * 子账号UIN，入参Uid和SubUin二选一
     */
    SubUin?: number;
}
/**
 * AttachRolePolicy返回参数结构体
 */
export interface AttachRolePolicyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetUserPermissionBoundary请求参数结构体
 */
export interface GetUserPermissionBoundaryRequest {
    /**
     * 子账号Uin
     */
    TargetUin: number;
}
/**
 * DescribeOIDCConfig请求参数结构体
 */
export interface DescribeOIDCConfigRequest {
    /**
     * 名称
     */
    Name: string;
}
/**
 * GetRolePermissionBoundary请求参数结构体
 */
export interface GetRolePermissionBoundaryRequest {
    /**
     * 角色ID
     */
    RoleId: string;
}
/**
 * GetServiceLinkedRoleDeletionStatus返回参数结构体
 */
export interface GetServiceLinkedRoleDeletionStatusResponse {
    /**
     * 状态：NOT_STARTED，IN_PROGRESS，SUCCEEDED，FAILED
     */
    Status?: string;
    /**
     * 失败原因
     */
    Reason?: string;
    /**
     * 服务类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceType?: string;
    /**
     * 服务名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceName?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetSecurityLastUsed请求参数结构体
 */
export interface GetSecurityLastUsedRequest {
    /**
     * 查询密钥ID列表。最多支持10个。
     */
    SecretIdList: Array<string>;
}
/**
 * DescribeUserSAMLConfig返回参数结构体
 */
export interface DescribeUserSAMLConfigResponse {
    /**
     * SAML元数据文档
     */
    SAMLMetadata?: string;
    /**
     * 状态：0:未设置，11:已开启，2:已禁用
     */
    Status?: number;
    /**
     * 辅助域名
     */
    AuxiliaryDomain?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteUserPermissionsBoundary返回参数结构体
 */
export interface DeleteUserPermissionsBoundaryResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListUsers返回参数结构体
 */
export interface ListUsersResponse {
    /**
     * 子用户信息
     */
    Data?: Array<SubAccountInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateRoleDescription返回参数结构体
 */
export interface UpdateRoleDescriptionResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetAccountSummary请求参数结构体
 */
export declare type GetAccountSummaryRequest = null;
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
 * GetUserAppId返回参数结构体
 */
export interface GetUserAppIdResponse {
    /**
     * 当前账号Uin
     */
    Uin?: string;
    /**
     * 当前账号OwnerUin
     */
    OwnerUin?: string;
    /**
     * 当前账号AppId
     */
    AppId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetUserAppId请求参数结构体
 */
export declare type GetUserAppIdRequest = null;
/**
 * DescribeOIDCConfig返回参数结构体
 */
export interface DescribeOIDCConfigResponse {
    /**
     * 身份提供商类型 11角色身份提供商
     */
    ProviderType: number;
    /**
     * 身份提供商URL
     */
    IdentityUrl: string;
    /**
     * 签名公钥
     */
    IdentityKey: string;
    /**
     * 客户端id
     */
    ClientId: Array<string>;
    /**
     * 状态：0:未设置，11:已开启，2:已禁用
     */
    Status: number;
    /**
     * 描述
     */
    Description: string;
    /**
     * 名称
     */
    Name: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListPolicyVersions请求参数结构体
 */
export interface ListPolicyVersionsRequest {
    /**
     * 策略ID
     */
    PolicyId: number;
}
/**
 * GetCustomMFATokenInfo请求参数结构体
 */
export interface GetCustomMFATokenInfoRequest {
    /**
     * 自定义多因子验证Token，针对用户自定义的安全校验方式而生成的，以供查询用户安全校验时使用。
     */
    MFAToken: string;
}
/**
 * DescribeRoleList请求参数结构体
 */
export interface DescribeRoleListRequest {
    /**
     * 页码，从1开始
     */
    Page: number;
    /**
     * 每页行数，不能大于200
     */
    Rp: number;
    /**
     * 标签筛选
     */
    Tags?: Array<RoleTags>;
}
/**
 * DescribeUserSAMLConfig请求参数结构体
 */
export declare type DescribeUserSAMLConfigRequest = null;
/**
 * DeleteMessageReceiver返回参数结构体
 */
export interface DeleteMessageReceiverResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteAccessKey返回参数结构体
 */
export interface DeleteAccessKeyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * PutRolePermissionsBoundary请求参数结构体
 */
export interface PutRolePermissionsBoundaryRequest {
    /**
     * 策略ID
     */
    PolicyId: number;
    /**
     * 角色ID（与角色名至少填一个）
     */
    RoleId?: string;
    /**
     * 角色名（与角色ID至少填一个）
     */
    RoleName?: string;
}
/**
 * GetGroup请求参数结构体
 */
export interface GetGroupRequest {
    /**
     * 用户组 ID
     */
    GroupId: number;
}
/**
 * 策略信息
 */
export interface StrategyInfo {
    /**
     * 策略ID。
     */
    PolicyId?: number;
    /**
     * 策略名称。
     */
    PolicyName?: string;
    /**
     * 策略创建时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AddTime?: string;
    /**
     * 策略类型。1 表示自定义策略，2 表示预设策略。
     */
    Type?: number;
    /**
     * 策略描述。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 创建来源，1 通过控制台创建, 2 通过策略语法创建。
     */
    CreateMode?: number;
    /**
     * 关联的用户数
     */
    Attachments?: number;
    /**
     * 策略关联的产品
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceType?: string;
    /**
     * 当需要查询标记实体是否已经关联策略时不为null。0表示未关联策略，1表示已关联策略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsAttached?: number;
    /**
     * 是否已下线
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Deactived?: number;
    /**
     * 已下线产品列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeactivedDetail?: Array<string>;
    /**
     * 是否是服务相关角色策略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsServiceLinkedPolicy?: number;
    /**
     * 关联策略实体数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AttachEntityCount?: number;
    /**
     * 关联权限边界实体数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AttachEntityBoundaryCount?: number;
    /**
     * 最后编辑时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
}
/**
 * DeleteRole返回参数结构体
 */
export interface DeleteRoleResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 策略版本列表元素结构
 */
export interface PolicyVersionItem {
    /**
     * 策略版本号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VersionId?: number;
    /**
     * 策略版本创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateDate?: string;
    /**
     * 是否是正在生效的版本。0表示不是，1表示是
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsDefaultVersion?: number;
}
/**
 * DetachUserPolicy请求参数结构体
 */
export interface DetachUserPolicyRequest {
    /**
     * 策略 id
     */
    PolicyId: number;
    /**
     * 子账号 uin
     */
    DetachUin: number;
}
/**
 * DescribeSubAccounts请求参数结构体
 */
export interface DescribeSubAccountsRequest {
    /**
     * 子用户UIN列表，最多支持50个UIN
     */
    FilterSubAccountUin: Array<number | bigint>;
}
/**
 * DeleteUserPermissionsBoundary请求参数结构体
 */
export interface DeleteUserPermissionsBoundaryRequest {
    /**
     * 子账号Uin
     */
    TargetUin: number;
}
/**
 * ListSAMLProviders请求参数结构体
 */
export declare type ListSAMLProvidersRequest = null;
/**
 * UpdateRoleSessionDuration请求参数结构体
 */
export interface UpdateRoleSessionDurationRequest {
    /**
     * 时长(秒)
     */
    SessionDuration: number;
    /**
     * 角色名(与角色ID必填一个)
     */
    RoleName?: string;
    /**
     * 角色ID(与角色名必填一个)
     */
    RoleId?: number;
}
/**
 * CreateAccessKey返回参数结构体
 */
export interface CreateAccessKeyResponse {
    /**
     * 访问密钥
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AccessKey?: AccessKeyDetail;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeletePolicyVersion返回参数结构体
 */
export interface DeletePolicyVersionResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateAccessKey请求参数结构体
 */
export interface CreateAccessKeyRequest {
    /**
     * 指定用户Uin，不填默认为当前用户创建访问密钥
     */
    TargetUin?: number;
    /**
     * 密钥描述，长度在1到1024之间，可包含大小写字符，数字以及特殊字符：=,.@:/-。 正则为：[\w+=,.@:/-]*。
     */
    Description?: string;
}
/**
 * BuildDataFlowAuthToken请求参数结构体
 */
export interface BuildDataFlowAuthTokenRequest {
    /**
     * 资源ID
     */
    ResourceId: string;
    /**
     * 资源地域
     */
    ResourceRegion: string;
    /**
     * 资源用户名
     */
    ResourceAccount: string;
}
/**
 * GetRolePermissionBoundary返回参数结构体
 */
export interface GetRolePermissionBoundaryResponse {
    /**
     * 策略ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolicyId?: number;
    /**
     * 策略名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolicyName?: string;
    /**
     * 策略语法
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolicyDocument?: string;
    /**
     * 策略类型：1.自定义策略，2.预设策略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolicyType?: number;
    /**
     * 创建方式：1.按产品功能或项目权限创建，2.按策略语法创建，3.按策略生成器创建，4.按标签授权创建，5.按权限边界规则创建
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateMode?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 用户关联策略(随组关联)信息
 */
export interface AttachedUserPolicyGroupInfo {
    /**
     * 分组ID
     */
    GroupId: number;
    /**
     * 分组名称
     */
    GroupName: string;
}
/**
 * ListGroupsForUser返回参数结构体
 */
export interface ListGroupsForUserResponse {
    /**
     * 子用户加入的用户组总数
     */
    TotalNum?: number;
    /**
     * 用户组信息
     */
    GroupInfo?: Array<GroupInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListUsersForGroup请求参数结构体
 */
export interface ListUsersForGroupRequest {
    /**
     * 用户组 ID。
     */
    GroupId: number;
    /**
     * 页码。默认为1。
     */
    Page?: number;
    /**
     * 每页数量。默认为20。
     */
    Rp?: number;
}
/**
 * RemoveUserFromGroup请求参数结构体
 */
export interface RemoveUserFromGroupRequest {
    /**
     * 要删除的用户 UIN/UID和用户组 ID对应数组
     */
    Info: Array<GroupIdOfUidInfo>;
}
/**
 * CreatePolicyVersion返回参数结构体
 */
export interface CreatePolicyVersionResponse {
    /**
     * 策略版本号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VersionId?: number;
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
     * 策略数组，数组每个成员包括 policyId、policyName、addTime、type、description、 createMode 字段。其中：
  policyId：策略 id
  policyName：策略名
  addTime：策略创建时间
  type：1 表示自定义策略，2 表示预设策略
  description：策略描述
  createMode：1 表示按业务权限创建的策略，其他值表示可以查看策略语法和通过策略语法更新策略
  Attachments: 关联的用户数
  ServiceType: 策略关联的产品
  IsAttached: 当需要查询标记实体是否已经关联策略时不为null。0表示未关联策略，1表示已关联策略
     */
    List?: Array<StrategyInfo>;
    /**
     * 保留字段
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceTypeList?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteAccessKey请求参数结构体
 */
export interface DeleteAccessKeyRequest {
    /**
     * 指定需要删除的AccessKeyId
     */
    AccessKeyId: string;
    /**
     * 指定用户Uin，不填默认为当前用户删除访问密钥
     */
    TargetUin?: number;
}
/**
 * 访问密钥
 */
export interface AccessKeyDetail {
    /**
     * 访问密钥标识
     */
    AccessKeyId?: string;
    /**
     * 访问密钥（密钥仅创建时可见，请妥善保存）
     */
    SecretAccessKey?: string;
    /**
     * 密钥状态，激活（Active）或未激活（Inactive）
     */
    Status?: string;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
}
/**
 * 企业微信子用户
 */
export interface WeChatWorkSubAccount {
    /**
     * 子用户用户 ID
     */
    Uin?: number;
    /**
     * 子用户用户名
     */
    Name?: string;
    /**
     * 子用户 UID
     */
    Uid?: number;
    /**
     * 备注
     */
    Remark?: string;
    /**
     * 子用户能否登录控制台
     */
    ConsoleLogin?: number;
    /**
     * 手机号
     */
    PhoneNum?: string;
    /**
     * 区号
     */
    CountryCode?: string;
    /**
     * 邮箱
     */
    Email?: string;
    /**
     * 企业微信UserId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WeChatWorkUserId?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
}
/**
 * 异地登录设置
 */
export interface OffsiteFlag {
    /**
     * 验证标识
     */
    VerifyFlag?: number;
    /**
     * 手机通知
     */
    NotifyPhone?: number;
    /**
     * 邮箱通知
     */
    NotifyEmail?: number;
    /**
     * 微信通知
     */
    NotifyWechat?: number;
    /**
     * 提示
     */
    Tips?: number;
}
/**
 * 子用户和用户组关联信息
 */
export interface GroupIdOfUidInfo {
    /**
     * 用户组 ID
     */
    GroupId: number;
    /**
     * 子用户 UID
     */
    Uid?: number;
    /**
     * 子用户 Uin，Uid和Uin至少有一个必填
     */
    Uin?: number;
}
/**
 * UpdateRoleDescription请求参数结构体
 */
export interface UpdateRoleDescriptionRequest {
    /**
     * 角色描述
     */
    Description: string;
    /**
     * 角色ID，用于指定角色，入参 RoleId 与 RoleName 二选一
     */
    RoleId?: string;
    /**
     * 角色名称，用于指定角色，入参 RoleId 与 RoleName 二选一
     */
    RoleName?: string;
}
/**
 * UpdateUserSAMLConfig请求参数结构体
 */
export interface UpdateUserSAMLConfigRequest {
    /**
     * 修改的操作类型:enable:启用,disable:禁用,updateSAML:修改元数据文档
     */
    Operate: string;
    /**
     * 元数据文档，需要base64 encode，仅当Operate为updateSAML时需要此参数
     */
    SAMLMetadataDocument?: string;
    /**
     * 辅助域名
     */
    AuxiliaryDomain?: string;
}
/**
 * DeleteGroup返回参数结构体
 */
export interface DeleteGroupResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 角色详细信息
 */
export interface RoleInfo {
    /**
     * 角色ID
     */
    RoleId?: string;
    /**
     * 角色名称
     */
    RoleName?: string;
    /**
     * 角色的策略文档
     */
    PolicyDocument?: string;
    /**
     * 角色描述
     */
    Description?: string;
    /**
     * 角色的创建时间
     */
    AddTime?: string;
    /**
     * 角色的最近一次时间
     */
    UpdateTime?: string;
    /**
     * 角色是否允许登录
     */
    ConsoleLogin?: number;
    /**
     * 角色类型，取user、system或service_linked
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RoleType?: string;
    /**
     * 有效时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SessionDuration?: number;
    /**
     * 服务相关角色删除TaskId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeletionTaskId?: string;
    /**
     * 标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags?: Array<RoleTags>;
    /**
     * 角色RoleArn信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RoleArn?: string;
}
/**
 * DescribeSafeAuthFlag返回参数结构体
 */
export interface DescribeSafeAuthFlagResponse {
    /**
     * 登录保护设置
     */
    LoginFlag?: LoginActionFlag;
    /**
     * 敏感操作保护设置
     */
    ActionFlag?: LoginActionFlag;
    /**
     * 异地登录保护设置
     */
    OffsiteFlag?: OffsiteFlag;
    /**
     * 是否提示信任设备：1: 提示  0: 不提示
     */
    PromptTrust?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreatePolicyVersion请求参数结构体
 */
export interface CreatePolicyVersionRequest {
    /**
     * 策略ID
     */
    PolicyId: number;
    /**
     * 策略文本信息
     */
    PolicyDocument: string;
    /**
     * 是否设置为当前策略的版本
     */
    SetAsDefault: boolean;
}
/**
 * 密钥最后使用时间
 */
export interface SecretIdLastUsed {
    /**
     * 密钥ID
     */
    SecretId: string;
    /**
     * 最后访问日期(有1天延迟)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastUsedDate: string;
    /**
     * 最后密钥访问日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastSecretUsedDate: number;
}
/**
 * UpdateAccessKey返回参数结构体
 */
export interface UpdateAccessKeyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateUserOIDCConfig返回参数结构体
 */
export interface CreateUserOIDCConfigResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListAttachedUserAllPolicies返回参数结构体
 */
export interface ListAttachedUserAllPoliciesResponse {
    /**
     * 策略列表数据。
     */
    PolicyList?: Array<AttachedUserPolicy>;
    /**
     * 策略总数。
     */
    TotalNum?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteGroup请求参数结构体
 */
export interface DeleteGroupRequest {
    /**
     * 用户组 ID
     */
    GroupId: number;
}
/**
 * GetUser返回参数结构体
 */
export interface GetUserResponse {
    /**
     * 子用户用户 UIN
     */
    Uin?: number;
    /**
     * 子用户用户名
     */
    Name?: string;
    /**
     * 子用户 UID
     */
    Uid?: number;
    /**
     * 子用户备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Remark?: string;
    /**
     * 子用户能否登录控制台 0-无法登录控制台，1-可以登录控制台
     */
    ConsoleLogin?: number;
    /**
     * 手机号
     */
    PhoneNum?: string;
    /**
     * 区号
     */
    CountryCode?: string;
    /**
     * 邮箱
     */
    Email?: string;
    /**
     * 最近一次登录ip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecentlyLoginIP?: string;
    /**
     * 最近一次登录时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecentlyLoginTime?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetUserPermissionBoundary返回参数结构体
 */
export interface GetUserPermissionBoundaryResponse {
    /**
     * 策略ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolicyId?: number;
    /**
     * 策略名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolicyName?: string;
    /**
     * 策略语法
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolicyDocument?: string;
    /**
     * 策略类型：1.自定义策略，2.预设策略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolicyType?: number;
    /**
     * 创建方式：1.按产品功能或项目权限创建，2.按策略语法创建，3.按策略生成器创建，4.按标签授权创建，5.按权限边界规则创建
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateMode?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreatePolicy返回参数结构体
 */
export interface CreatePolicyResponse {
    /**
     * 新增策略ID
     */
    PolicyId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListGroups返回参数结构体
 */
export interface ListGroupsResponse {
    /**
     * 用户组总数。
     */
    TotalNum?: number;
    /**
     * 用户组数组信息。
     */
    GroupInfo?: Array<GroupInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DetachRolePolicy请求参数结构体
 */
export interface DetachRolePolicyRequest {
    /**
     * 策略ID，入参PolicyId与PolicyName二选一
     */
    PolicyId?: number;
    /**
     * 角色ID，用于指定角色，入参 DetachRoleId 与 DetachRoleName 二选一
     */
    DetachRoleId?: string;
    /**
     * 角色名称，用于指定角色，入参 DetachRoleId 与 DetachRoleName 二选一
     */
    DetachRoleName?: string;
    /**
     * 策略名，入参PolicyId与PolicyName二选一
     */
    PolicyName?: string;
}
/**
 * UntagRole返回参数结构体
 */
export interface UntagRoleResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListPoliciesGrantingServiceAccess返回参数结构体
 */
export interface ListPoliciesGrantingServiceAccessResponse {
    /**
     * 列表
     */
    List?: Array<ListGrantServiceAccessNode>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteRolePermissionsBoundary请求参数结构体
 */
export interface DeleteRolePermissionsBoundaryRequest {
    /**
     * 角色ID（与角色名至少填一个）
     */
    RoleId?: string;
    /**
     * 角色名（与角色ID至少填一个）
     */
    RoleName?: string;
}
/**
 * 角色标签类型
 */
export interface RoleTags {
    /**
     * 标签键
     */
    Key: string;
    /**
     * 标签值
     */
    Value: string;
}
/**
 * DescribeUserOIDCConfig返回参数结构体
 */
export interface DescribeUserOIDCConfigResponse {
    /**
     * 身份提供商类型。 12：用户OIDC身份提供商
     */
    ProviderType?: number;
    /**
     * 身份提供商URL
     */
    IdentityUrl?: string;
    /**
     * 签名公钥
     */
    IdentityKey?: string;
    /**
     * 客户端id
     */
    ClientId?: string;
    /**
     * 状态：0:未设置，11:已开启，2:已禁用
     */
    Status?: number;
    /**
     * 授权请求Endpoint
     */
    AuthorizationEndpoint?: string;
    /**
     * 授权请求Scope
     */
    Scope?: Array<string>;
    /**
     * 授权请求Response type
     */
    ResponseType?: string;
    /**
     * 授权请求Response mode
     */
    ResponseMode?: string;
    /**
     * 映射字段名称
     */
    MappingFiled?: string;
    /**
     * 描述
     */
    Description?: string;
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
     * 数组，数组成员是策略 id，支持批量删除策略
     */
    PolicyId: Array<number | bigint>;
}
/**
 * 用户组信息
 */
export interface GroupInfo {
    /**
     * 用户组 ID。
     */
    GroupId?: number;
    /**
     * 用户组名称。
     */
    GroupName?: string;
    /**
     * 用户组创建时间。
     */
    CreateTime?: string;
    /**
     * 用户组描述。
     */
    Remark?: string;
}
/**
 * AddUser请求参数结构体
 */
export interface AddUserRequest {
    /**
     * 子用户用户名
     */
    Name: string;
    /**
     * 子用户备注
     */
    Remark?: string;
    /**
     * 子用户是否可以登录控制台。传0子用户无法登录控制台，传1子用户可以登录控制台。
     */
    ConsoleLogin?: number;
    /**
     * 是否生成子用户密钥。传0不生成子用户密钥，传1生成子用户密钥。
     */
    UseApi?: number;
    /**
     * 子用户控制台登录密码，若未进行密码规则设置则默认密码规则为8位以上同时包含大小写字母、数字和特殊字符。只有可以登录控制台时才有效，如果传空并且上面指定允许登录控制台，则自动生成随机密码，随机密码规则为32位包含大小写字母、数字和特殊字符。
     */
    Password?: string;
    /**
     * 子用户是否要在下次登录时重置密码。传0子用户下次登录控制台不需重置密码，传1子用户下次登录控制台需要重置密码。
     */
    NeedResetPassword?: number;
    /**
     * 手机号
     */
    PhoneNum?: string;
    /**
     * 区号
     */
    CountryCode?: string;
    /**
     * 邮箱
     */
    Email?: string;
}
/**
 * UpdateAssumeRolePolicy请求参数结构体
 */
export interface UpdateAssumeRolePolicyRequest {
    /**
     * 策略文档，示例：{"version":"2.0","statement":[{"action":"name/sts:AssumeRole","effect":"allow","principal":{"service":["cloudaudit.cloud.tencent.com","cls.cloud.tencent.com"]}}]}，principal用于指定角色的授权对象。获取该参数可参阅 获取角色详情（https://cloud.tencent.com/document/product/598/36221） 输出参数RoleInfo
     */
    PolicyDocument: string;
    /**
     * 角色ID，用于指定角色，入参 RoleId 与 RoleName 二选一
     */
    RoleId?: string;
    /**
     * 角色名称，用于指定角色，入参 RoleId 与 RoleName 二选一
     */
    RoleName?: string;
}
/**
 * 登录和敏感操作flag（校验方式是单选）
 */
export interface LoginActionFlag {
    /**
     * 0: 非安全手机校验 1: 安全手机校验。
     */
    Phone?: number;
    /**
     * 0: 非硬token校验 1: 硬token校验。
     */
    Token?: number;
    /**
     * 0: 非软token校验 1: 软token校验
     */
    Stoken?: number;
    /**
     * 0: 非微信校验 1: 微信校验
     */
    Wechat?: number;
    /**
     * 0: 非自定义校验 1: 自定义校验
     */
    Custom?: number;
    /**
     * 0: 非邮箱校验 1: 邮箱校验
     */
    Mail?: number;
    /**
     * 0: 非u2f硬件token 1: u2f硬件token
  注意：此字段可能返回 null，表示取不到有效值。
     */
    U2FToken?: number;
}
/**
 * DeleteRole请求参数结构体
 */
export interface DeleteRoleRequest {
    /**
     * 角色ID，用于指定角色，入参 RoleId 与 RoleName 二选一
     */
    RoleId?: string;
    /**
     * 角色名称，用于指定角色，入参 RoleId 与 RoleName 二选一
     */
    RoleName?: string;
}
/**
 * ListWeChatWorkSubAccounts请求参数结构体
 */
export interface ListWeChatWorkSubAccountsRequest {
    /**
     * 偏移量
     */
    Offset: number;
    /**
     * 限制数目
     */
    Limit: number;
}
/**
 * UpdateRoleConsoleLogin请求参数结构体
 */
export interface UpdateRoleConsoleLoginRequest {
    /**
     * 是否可登录，可登录：1，不可登录：0
     */
    ConsoleLogin: number;
    /**
     * 角色ID，入参 RoleId 与 RoleName 二选一
     */
    RoleId?: number;
    /**
     * 角色名，入参 RoleId 与 RoleName 二选一
     */
    RoleName?: string;
}
/**
 * BuildDataFlowAuthToken返回参数结构体
 */
export interface BuildDataFlowAuthTokenResponse {
    /**
     * 认证凭据AuthToken信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Credentials?: AuthToken;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateUser返回参数结构体
 */
export interface UpdateUserResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateAssumeRolePolicy返回参数结构体
 */
export interface UpdateAssumeRolePolicyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetPolicyVersion请求参数结构体
 */
export interface GetPolicyVersionRequest {
    /**
     * 策略ID
     */
    PolicyId: number;
    /**
     * 策略版本号，可由ListPolicyVersions获取
     */
    VersionId: number;
}
/**
 * CreateSAMLProvider返回参数结构体
 */
export interface CreateSAMLProviderResponse {
    /**
     * SAML身份提供商资源描述符
     */
    ProviderArn: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteRolePermissionsBoundary返回参数结构体
 */
export interface DeleteRolePermissionsBoundaryResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetUser请求参数结构体
 */
export interface GetUserRequest {
    /**
     * 子用户用户名
     */
    Name: string;
}
/**
 * 登录和敏感操作flag
 */
export interface LoginActionMfaFlag {
    /**
     * 是否设置手机号为登录和敏感操作安全校验方式， 1: 设置，0: 不设置
     */
    Phone?: number;
    /**
     * 是否设置软token为登录和敏感操作安全校验方式， 1: 设置，0: 不设置
     */
    Stoken?: number;
    /**
     * 是否设置微信为登录和敏感操作安全校验方式， 1: 设置，0: 不设置
     */
    Wechat?: number;
}
/**
 * 子用户信息
 */
export interface SubAccountInfo {
    /**
     * 子用户用户 ID
     */
    Uin: number;
    /**
     * 子用户用户名
     */
    Name: string;
    /**
     * 子用户 UID
     */
    Uid: number;
    /**
     * 子用户备注
     */
    Remark: string;
    /**
     * 子用户能否登录控制台
     */
    ConsoleLogin: number;
    /**
     * 手机号
     */
    PhoneNum: string;
    /**
     * 区号
     */
    CountryCode: string;
    /**
     * 邮箱
     */
    Email: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime: string;
    /**
     * 昵称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NickName: string;
}
/**
 * CreateGroup请求参数结构体
 */
export interface CreateGroupRequest {
    /**
     * 用户组名
     */
    GroupName: string;
    /**
     * 用户组描述
     */
    Remark?: string;
}
/**
 * SAML身份提供商
 */
export interface SAMLProviderInfo {
    /**
     * SAML身份提供商名称
     */
    Name: string;
    /**
     * SAML身份提供商描述
     */
    Description: string;
    /**
     * SAML身份提供商创建时间
     */
    CreateTime: string;
    /**
     * SAML身份提供商上次修改时间
     */
    ModifyTime: string;
}
/**
 * ListReceiver请求参数结构体
 */
export interface ListReceiverRequest {
    /**
     * 分页偏移量
     */
    Offset?: number;
    /**
     * 分页限制数目
     */
    Limit?: number;
}
/**
 * DisableUserSSO请求参数结构体
 */
export declare type DisableUserSSORequest = null;
/**
 * ListPoliciesGrantingServiceAccess请求参数结构体
 */
export interface ListPoliciesGrantingServiceAccessRequest {
    /**
     * 子账号uin，与RoleId、GroupId三选一必传
     */
    TargetUin?: number;
    /**
     * 角色ID，与TargetUin、GroupId三选一必传
     */
    RoleId?: number;
    /**
     * 用户组ID，与TargetUin、RoleId三选一必传
     */
    GroupId?: number;
    /**
     * 服务名，查看服务授权接口详情时需传该字段
     */
    ServiceType?: string;
}
/**
 * UpdateSAMLProvider返回参数结构体
 */
export interface UpdateSAMLProviderResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateAccessKey请求参数结构体
 */
export interface UpdateAccessKeyRequest {
    /**
     * 指定需要更新的AccessKeyId
     */
    AccessKeyId: string;
    /**
     * 密钥状态，激活（Active）或未激活（Inactive）
     */
    Status: string;
    /**
     * 指定用户Uin，不填默认为当前用户更新访问密钥
     */
    TargetUin?: number;
}
/**
 * UpdateUser请求参数结构体
 */
export interface UpdateUserRequest {
    /**
     * 子用户用户名
     */
    Name: string;
    /**
     * 子用户备注
     */
    Remark?: string;
    /**
     * 子用户是否可以登录控制台。传0子用户无法登录控制台，传1子用户可以登录控制台。
     */
    ConsoleLogin?: number;
    /**
     * 子用户控制台登录密码，若未进行密码规则设置则默认密码规则为8位以上同时包含大小写字母、数字和特殊字符。只有可以登录控制台时才有效，如果传空并且上面指定允许登录控制台，则自动生成随机密码，随机密码规则为32位包含大小写字母、数字和特殊字符。
     */
    Password?: string;
    /**
     * 子用户是否要在下次登录时重置密码。传0子用户下次登录控制台不需重置密码，传1子用户下次登录控制台需要重置密码。
     */
    NeedResetPassword?: number;
    /**
     * 手机号
     */
    PhoneNum?: string;
    /**
     * 区号
     */
    CountryCode?: string;
    /**
     * 邮箱
     */
    Email?: string;
}
/**
 * ListWeChatWorkSubAccounts返回参数结构体
 */
export interface ListWeChatWorkSubAccountsResponse {
    /**
     * 企业微信子用户列表。
     */
    Data?: Array<WeChatWorkSubAccount>;
    /**
     * 总数目。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateSAMLProvider请求参数结构体
 */
export interface CreateSAMLProviderRequest {
    /**
     * SAML身份提供商名称
     */
    Name: string;
    /**
     * SAML身份提供商描述
     */
    Description: string;
    /**
     * SAML身份提供商Base64编码的元数据文档
     */
    SAMLMetadataDocument: string;
}
/**
 * 关联策略信息
 */
export interface AttachPolicyInfo {
    /**
     * 策略id
     */
    PolicyId?: number;
    /**
     * 策略名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolicyName?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AddTime?: string;
    /**
     * 创建来源，1 通过控制台创建, 2 通过策略语法创建
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateMode?: number;
    /**
     * 取值为User和QCS。User代表自定义策略，QCS代表系统策略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolicyType?: string;
    /**
     * 策略备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Remark?: string;
    /**
     * 策略关联操作者主账号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperateOwnerUin?: string;
    /**
     * 策略关联操作者ID，如果UinType为0表示子账号Uin，如果UinType为1表示角色ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperateUin?: string;
    /**
     * 取值为0和1。OperateUinType为0表示OperateUin字段是子账号Uin。如果OperateUinType为1表示OperateUin字段是角色ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperateUinType?: number;
    /**
     * 是否已下线，1代表已下线，0代表未下线
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Deactived?: number;
    /**
     * 已下线的产品列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeactivedDetail?: Array<string>;
}
/**
 * DisableUserSSO返回参数结构体
 */
export interface DisableUserSSOResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateRoleConsoleLogin返回参数结构体
 */
export interface UpdateRoleConsoleLoginResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AttachRolePolicy请求参数结构体
 */
export interface AttachRolePolicyRequest {
    /**
     * 策略ID，入参PolicyId与PolicyName二选一
     */
    PolicyId?: number;
    /**
     * 角色ID，用于指定角色，入参 AttachRoleId 与 AttachRoleName 二选一
     */
    AttachRoleId?: string;
    /**
     * 角色名称，用于指定角色，入参 AttachRoleId 与 AttachRoleName 二选一
     */
    AttachRoleName?: string;
    /**
     * 策略名，入参PolicyId与PolicyName二选一
     */
    PolicyName?: string;
}
/**
 * ConsumeCustomMFAToken返回参数结构体
 */
export interface ConsumeCustomMFATokenResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AttachUserPolicy请求参数结构体
 */
export interface AttachUserPolicyRequest {
    /**
     * 策略 id
     */
    PolicyId: number;
    /**
     * 子账号 uin
     */
    AttachUin: number;
}
/**
 * ListAttachedGroupPolicies返回参数结构体
 */
export interface ListAttachedGroupPoliciesResponse {
    /**
     * 策略总数。取值范围大于等于0。
     */
    TotalNum?: number;
    /**
     * 策略列表
     */
    List?: Array<AttachPolicyInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListAttachedUserPolicies返回参数结构体
 */
export interface ListAttachedUserPoliciesResponse {
    /**
     * 策略总数
     */
    TotalNum?: number;
    /**
     * 策略列表
     */
    List?: Array<AttachPolicyInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 认证凭据Token
 */
export interface AuthToken {
    /**
     * 认证Token
     */
    Token?: string;
    /**
     * 服务器时间戳
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurrentTime?: number;
    /**
     * 毫秒时间戳，根据轮转周期准确计算得到
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NextRotationTime?: number;
    /**
     * 毫秒，如果轮转失败则为 -1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastRotationTimeCost?: number;
    /**
     * 成功：success
  失败：failed
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RotationStatus?: string;
    /**
     * 成功：success
  失败：失败信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RotationMessage?: string;
}
/**
 * PutUserPermissionsBoundary返回参数结构体
 */
export interface PutUserPermissionsBoundaryResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetPolicyVersion返回参数结构体
 */
export interface GetPolicyVersionResponse {
    /**
     * 策略版本详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolicyVersion?: PolicyVersionDetail;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetCustomMFATokenInfo返回参数结构体
 */
export interface GetCustomMFATokenInfoResponse {
    /**
     * 自定义多因子验证Token对应的账号Id
     */
    Uin?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ConsumeCustomMFAToken请求参数结构体
 */
export interface ConsumeCustomMFATokenRequest {
    /**
     * 自定义多因子验证Token
     */
    MFAToken: string;
}
/**
 * CreateOIDCConfig请求参数结构体
 */
export interface CreateOIDCConfigRequest {
    /**
     * 身份提供商URL
     */
    IdentityUrl: string;
    /**
     * 客户端ID
     */
    ClientId: Array<string>;
    /**
     * 名称
     */
    Name: string;
    /**
     * 签名公钥，需要base64
     */
    IdentityKey: string;
    /**
     * 描述
     */
    Description?: string;
}
/**
 * 访问密钥列表
 */
export interface AccessKey {
    /**
     * 访问密钥标识
     */
    AccessKeyId?: string;
    /**
     * 密钥状态，激活（Active）或未激活（Inactive）
     */
    Status?: string;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 密钥描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
}
/**
 * GetGroup返回参数结构体
 */
export interface GetGroupResponse {
    /**
     * 用户组 ID
     */
    GroupId?: number;
    /**
     * 用户组名称
     */
    GroupName?: string;
    /**
     * 用户组成员数量
     */
    GroupNum?: number;
    /**
     * 用户组描述
     */
    Remark?: string;
    /**
     * 用户组创建时间
     */
    CreateTime?: string;
    /**
     * 用户组成员信息
     */
    UserInfo?: Array<GroupMemberInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListReceiver返回参数结构体
 */
export interface ListReceiverResponse {
    /**
     * 总数目
     */
    TotalCount?: number;
    /**
     * 联系人列表
     */
    Receivers?: Array<Receiver>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateOIDCConfig返回参数结构体
 */
export interface UpdateOIDCConfigResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UntagRole请求参数结构体
 */
export interface UntagRoleRequest {
    /**
     * 标签键
     */
    TagKeys: Array<string>;
    /**
     * 角色名，与角色ID至少输入一个
     */
    RoleName?: string;
    /**
     * 角色ID，与角色名至少输入一个
     */
    RoleId?: string;
}
/**
 * AttachGroupPolicy请求参数结构体
 */
export interface AttachGroupPolicyRequest {
    /**
     * 策略 id
     */
    PolicyId: number;
    /**
     * 用户组 id
     */
    AttachGroupId: number;
}
/**
 * DeleteSAMLProvider返回参数结构体
 */
export interface DeleteSAMLProviderResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetAccountSummary返回参数结构体
 */
export interface GetAccountSummaryResponse {
    /**
     * 策略数
     */
    Policies?: number;
    /**
     * 角色数
     */
    Roles?: number;
    /**
     * 身份提供商数
     * @deprecated
     */
    Idps?: number;
    /**
     * 子账户数
     */
    User?: number;
    /**
     * 分组数
     */
    Group?: number;
    /**
     * 分组用户总数
     */
    Member?: number;
    /**
     * 身份提供商数。
     */
    IdentityProviders?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateServiceLinkedRole返回参数结构体
 */
export interface CreateServiceLinkedRoleResponse {
    /**
     * 角色ID
     */
    RoleId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListUsers请求参数结构体
 */
export declare type ListUsersRequest = null;
/**
 * ListCollaborators请求参数结构体
 */
export interface ListCollaboratorsRequest {
    /**
     * 分页的条数，默认是20条。
     */
    Limit?: number;
    /**
     * 分页的起始值，默认从0开始。
     */
    Offset?: number;
}
/**
 * CreateUserOIDCConfig请求参数结构体
 */
export interface CreateUserOIDCConfigRequest {
    /**
     * 身份提供商URL。OpenID Connect身份提供商标识。
  对应企业IdP提供的Openid-configuration中"issuer"字段的值。
     */
    IdentityUrl: string;
    /**
     * 客户端ID，在OpenID Connect身份提供商注册的客户端ID。
     */
    ClientId: string;
    /**
     * 授权请求Endpoint，OpenID Connect身份提供商授权地址。对应企业IdP提供的Openid-configuration中"authorization_endpoint"字段的值。
     */
    AuthorizationEndpoint: string;
    /**
     * 授权请求Response type，固定值id_token
     */
    ResponseType: string;
    /**
     * 授权请求Response mode。授权请求返回模式，form_post和fragment两种可选模式，推荐选择form_post模式。
     */
    ResponseMode: string;
    /**
     * 映射字段名称。IdP的id_token中哪一个字段映射到子用户的用户名，通常是sub或者name字段
     */
    MappingFiled: string;
    /**
     * 签名公钥，需要base64_encode。验证OpenID Connect身份提供商ID Token签名的公钥。为了您的账号安全，建议您定期轮换签名公钥。
     */
    IdentityKey: string;
    /**
     * 授权请求Scope。openid; email;profile。授权请求信息范围。默认必选openid。
     */
    Scope?: Array<string>;
    /**
     * 描述
     */
    Description?: string;
}
/**
 * AddUser返回参数结构体
 */
export interface AddUserResponse {
    /**
     * 子用户 UIN
     */
    Uin?: number;
    /**
     * 子用户用户名
     */
    Name?: string;
    /**
     * 如果输入参数组合为自动生成随机密码，则返回生成的密码
     */
    Password?: string;
    /**
     * 子用户密钥 ID
     */
    SecretId?: string;
    /**
     * 子用户密钥 Key
     */
    SecretKey?: string;
    /**
     * 子用户 UID
     */
    Uid?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateGroup返回参数结构体
 */
export interface UpdateGroupResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListEntitiesForPolicy请求参数结构体
 */
export interface ListEntitiesForPolicyRequest {
    /**
     * 策略 id
     */
    PolicyId: number;
    /**
     * 页码，默认值是 1，从 1 开始
     */
    Page?: number;
    /**
     * 每页大小，默认值是 20
     */
    Rp?: number;
    /**
     * 可取值 'All'、'User'、'Group' 和 'Role'，'All' 表示获取所有实体类型，'User' 表示只获取子账号，'Group' 表示只获取用户组，'Role' 表示只获取角色，默认取 'All'
     */
    EntityFilter?: string;
}
/**
 * TagRole请求参数结构体
 */
export interface TagRoleRequest {
    /**
     * 标签
     */
    Tags: Array<RoleTags>;
    /**
     * 角色名，与角色ID至少输入一个
     */
    RoleName?: string;
    /**
     * 角色ID，与角色名至少输入一个
     */
    RoleId?: string;
}
/**
 * ListPolicies请求参数结构体
 */
export interface ListPoliciesRequest {
    /**
     * 每页数量，默认值是 20，必须大于 0 且小于或等于 200
     */
    Rp?: number;
    /**
     * 页码，默认值是 1，从 1开始，不能大于 200
     */
    Page?: number;
    /**
     * 可取值 'All'、'QCS' 和 'Local'，'All' 获取所有策略，'QCS' 只获取预设策略，'Local' 只获取自定义策略，默认取 'All'
     */
    Scope?: string;
    /**
     * 按策略名匹配
     */
    Keyword?: string;
}
/**
 * GetServiceLinkedRoleDeletionStatus请求参数结构体
 */
export interface GetServiceLinkedRoleDeletionStatusRequest {
    /**
     * 删除任务ID
     */
    DeletionTaskId: string;
}
/**
 * ListGrantServiceAccessAction节点
 */
export interface ListGrantServiceAccessActionNode {
    /**
     * 接口名
     */
    Name: string;
    /**
     * 接口描述
     */
    Description: string;
}
/**
 * DetachGroupPolicy返回参数结构体
 */
export interface DetachGroupPolicyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 用户组用户信息
 */
export interface GroupMemberInfo {
    /**
     * 子用户 Uid。
     */
    Uid?: number;
    /**
     * 子用户 Uin。
     */
    Uin?: number;
    /**
     * 子用户名称。
     */
    Name?: string;
    /**
     * 手机号。
     */
    PhoneNum?: string;
    /**
     * 手机区域代码。
     */
    CountryCode?: string;
    /**
     * 是否已验证手机。0-未验证  1-验证
     */
    PhoneFlag?: number;
    /**
     * 邮箱地址。
     */
    Email?: string;
    /**
     * 是否已验证邮箱。0-未验证  1-验证
     */
    EmailFlag?: number;
    /**
     * 用户类型。1-全局协作者 2-项目协作者 3-消息接收者
     */
    UserType?: number;
    /**
     * 创建时间。
     */
    CreateTime?: string;
    /**
     * 是否为主消息接收人。0-否 1-是
     */
    IsReceiverOwner?: number;
    /**
     * 昵称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Remark?: string;
}
/**
 * CreatePolicy请求参数结构体
 */
export interface CreatePolicyRequest {
    /**
     * 策略名称。长度为1~128个字符，可包含英文字母、数字和+=,.@-_。
     */
    PolicyName: string;
    /**
     * 策略文档
     */
    PolicyDocument: string;
    /**
     * 策略描述
     */
    Description?: string;
}
/**
 * ListAttachedUserAllPolicies请求参数结构体
 */
export interface ListAttachedUserAllPoliciesRequest {
    /**
     * 目标用户Uin
     */
    TargetUin: number;
    /**
     * 每页数量，必须大于 0 且小于等于 200。
     */
    Rp: number;
    /**
     * 页码，从 1开始，不能大于 200。
     */
    Page: number;
    /**
     * 关联类型。0:返回直接关联和随组关联策略，1:只返回直接关联策略，2:只返回随组关联策略。
     */
    AttachType: number;
    /**
     * 策略类型。1表示自定义策略，2表示预设策略。
     */
    StrategyType?: number;
    /**
     * 搜索关键字
     */
    Keyword?: string;
}
/**
 * DeletePolicyVersion请求参数结构体
 */
export interface DeletePolicyVersionRequest {
    /**
     * 策略ID
     */
    PolicyId: number;
    /**
     * 策略版本号
     */
    VersionId: Array<number | bigint>;
}
/**
 * CreateUserSAMLConfig请求参数结构体
 */
export interface CreateUserSAMLConfigRequest {
    /**
     * SAML元数据文档，需要base64 encode
     */
    SAMLMetadataDocument: string;
    /**
     * 辅助域名
     */
    AuxiliaryDomain?: string;
}
/**
 * UpdateGroup请求参数结构体
 */
export interface UpdateGroupRequest {
    /**
     * 用户组 ID
     */
    GroupId: number;
    /**
     * 用户组名
     */
    GroupName?: string;
    /**
     * 用户组描述
     */
    Remark?: string;
}
/**
 * 用于ListPoliciesGrantingServiceAccess接口的List节点
 */
export interface ListGrantServiceAccessNode {
    /**
     * 服务
     */
    Service?: ListGrantServiceAccessService;
    /**
     * 接口信息
     */
    Action?: Array<ListGrantServiceAccessActionNode>;
    /**
     * 授权的策略
     */
    Policy?: Array<ListGrantServiceAccessPolicy>;
}
/**
 * DeleteSAMLProvider请求参数结构体
 */
export interface DeleteSAMLProviderRequest {
    /**
     * SAML身份提供商名称
     */
    Name: string;
}
/**
 * UpdateOIDCConfig请求参数结构体
 */
export interface UpdateOIDCConfigRequest {
    /**
     * 身份提供商URL
     */
    IdentityUrl: string;
    /**
     * 客户端ID
     */
    ClientId: Array<string>;
    /**
     * 名称
     */
    Name: string;
    /**
     * 签名公钥，需要base64
     */
    IdentityKey: string;
    /**
     * 描述
     */
    Description?: string;
}
/**
 * CreateRole返回参数结构体
 */
export interface CreateRoleResponse {
    /**
     * 角色ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RoleId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetSAMLProvider返回参数结构体
 */
export interface GetSAMLProviderResponse {
    /**
     * SAML身份提供商名称
     */
    Name: string;
    /**
     * SAML身份提供商描述
     */
    Description: string;
    /**
     * SAML身份提供商创建时间
     */
    CreateTime: string;
    /**
     * SAML身份提供商上次修改时间
     */
    ModifyTime: string;
    /**
     * SAML身份提供商元数据文档
     */
    SAMLMetadata: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSafeAuthFlagIntl返回参数结构体
 */
export interface DescribeSafeAuthFlagIntlResponse {
    /**
     * 登录保护设置
     */
    LoginFlag?: LoginActionFlagIntl;
    /**
     * 敏感操作保护设置
     */
    ActionFlag?: LoginActionFlagIntl;
    /**
     * 异地登录保护设置
     */
    OffsiteFlag?: OffsiteFlag;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListGroups请求参数结构体
 */
export interface ListGroupsRequest {
    /**
     * 页码。默认为1。
     */
    Page?: number;
    /**
     * 每页数量。默认为20。
     */
    Rp?: number;
    /**
     * 按用户组名称匹配。
     */
    Keyword?: string;
}
/**
 * ListPolicyVersions返回参数结构体
 */
export interface ListPolicyVersionsResponse {
    /**
     * 策略版本列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Versions?: Array<PolicyVersionItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetPolicy请求参数结构体
 */
export interface GetPolicyRequest {
    /**
     * 策略Id。
     */
    PolicyId: number;
}
/**
 * DescribeSafeAuthFlagIntl请求参数结构体
 */
export declare type DescribeSafeAuthFlagIntlRequest = null;
/**
 * SetDefaultPolicyVersion请求参数结构体
 */
export interface SetDefaultPolicyVersionRequest {
    /**
     * 策略ID
     */
    PolicyId: number;
    /**
     * 策略版本号，可由ListPolicyVersions获取
     */
    VersionId: number;
}
/**
 * UpdateUserOIDCConfig请求参数结构体
 */
export interface UpdateUserOIDCConfigRequest {
    /**
     * 身份提供商URL。OpenID Connect身份提供商标识。
  对应企业IdP提供的Openid-configuration中"issuer"字段的值，该URL必须以https开头，符合标准URL格式，不允许带有query参数（以?标识）、fragment片段（以#标识）和登录信息（以@标识）。
     */
    IdentityUrl: string;
    /**
     * 客户端ID，在OpenID Connect身份提供商注册的客户端ID，允许英文字母、数字、特殊字符.-_:/，不能以特殊字符.-_:/开头，单个客户端ID最大64个字符。
     */
    ClientId: string;
    /**
     * 授权请求Endpoint，OpenID Connect身份提供商授权地址。对应企业IdP提供的Openid-configuration中"authorization_endpoint"字段的值，该URL必须以https开头，符合标准URL格式，不允许带有query参数（以?标识）、fragment片段（以#标识）和登录信息（以@标识）。
     */
    AuthorizationEndpoint: string;
    /**
     * 授权请求Response type，有code，id_token，固定值id_token。
     */
    ResponseType: string;
    /**
     * 授权请求Response mode。授权请求返回模式，有form_post和fragment两种可选模式，推荐选择form_post模式。
     */
    ResponseMode: string;
    /**
     * 映射字段名称。IdP的id_token中哪一个字段映射到子用户的用户名，通常是sub或者name字段,仅支持英文字母、数字、汉字、符号@、＆_[]-的组合，1-255个中文或英文字符
     */
    MappingFiled: string;
    /**
     * RSA签名公钥，JWKS格式，需要进行base64_encode。验证OpenID Connect身份提供商ID Token签名的公钥。为了您的账号安全，建议您定期轮换签名公钥。
     */
    IdentityKey: string;
    /**
     * 授权请求Scope。有openid; email;profile三种。代表授权请求信息范围openid表示请求访问用户的身份信息，email表示请求访问用户的电子邮件地址，profile表示请求访问用户的基本信息。默认必选openid。
     */
    Scope?: Array<string>;
    /**
     * 描述，长度为1~255个英文或中文字符，默认值为空。
     */
    Description?: string;
}
/**
 * AddUserToGroup请求参数结构体
 */
export interface AddUserToGroupRequest {
    /**
     * 添加的子用户 UIN/UID 和用户组 ID 关联关系
     */
    Info: Array<GroupIdOfUidInfo>;
}
/**
 * RemoveUserFromGroup返回参数结构体
 */
export interface RemoveUserFromGroupResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DetachRolePolicy返回参数结构体
 */
export interface DetachRolePolicyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeUserOIDCConfig请求参数结构体
 */
export declare type DescribeUserOIDCConfigRequest = null;
/**
 * CreateOIDCConfig返回参数结构体
 */
export interface CreateOIDCConfigResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 角色关联的策略信息
 */
export interface AttachedPolicyOfRole {
    /**
     * 策略ID
     */
    PolicyId?: number;
    /**
     * 策略名称
     */
    PolicyName?: string;
    /**
     * 绑定时间
     */
    AddTime?: string;
    /**
     * 策略类型，User表示自定义策略，QCS表示预设策略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolicyType?: string;
    /**
     * 策略创建方式，1表示按产品功能或项目权限创建，其他表示按策略语法创建
     */
    CreateMode?: number;
    /**
     * 是否已下线(0:否 1:是)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Deactived?: number;
    /**
     * 已下线的产品列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeactivedDetail?: Array<string>;
    /**
     * 策略描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
}
/**
 * PutUserPermissionsBoundary请求参数结构体
 */
export interface PutUserPermissionsBoundaryRequest {
    /**
     * 子账号Uin
     */
    TargetUin: number;
    /**
     * 策略ID
     */
    PolicyId: number;
}
/**
 * ListSAMLProviders返回参数结构体
 */
export interface ListSAMLProvidersResponse {
    /**
     * SAML身份提供商总数
     */
    TotalCount?: number;
    /**
     * SAML身份提供商列表
     */
    SAMLProviderSet?: Array<SAMLProviderInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SetDefaultPolicyVersion返回参数结构体
 */
export interface SetDefaultPolicyVersionResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListAttachedRolePolicies请求参数结构体
 */
export interface ListAttachedRolePoliciesRequest {
    /**
     * 页码，从 1 开始
     */
    Page: number;
    /**
     * 每页行数，不能大于200
     */
    Rp: number;
    /**
     * 角色 ID。用于指定角色，入参 RoleId 与 RoleName 二选一
     */
    RoleId?: string;
    /**
     * 角色名。用于指定角色，入参 RoleId 与 RoleName 二选一
     */
    RoleName?: string;
    /**
     * 按策略类型过滤，User表示仅查询自定义策略，QCS表示仅查询预设策略
     */
    PolicyType?: string;
    /**
     * 搜索关键字
     */
    Keyword?: string;
}
/**
 * GetSAMLProvider请求参数结构体
 */
export interface GetSAMLProviderRequest {
    /**
     * SAML身份提供商名称
     */
    Name: string;
}
/**
 * DetachUserPolicy返回参数结构体
 */
export interface DetachUserPolicyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetRole返回参数结构体
 */
export interface GetRoleResponse {
    /**
     * 角色详情
     */
    RoleInfo?: RoleInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateRole请求参数结构体
 */
export interface CreateRoleRequest {
    /**
     * 角色名称。长度为1~128个字符，可包含英文字母、数字和+=,.@-_。
     */
    RoleName: string;
    /**
     * 策略文档，示例：{"version":"2.0","statement":[{"action":"name/sts:AssumeRole","effect":"allow","principal":{"service":["cloudaudit.cloud.tencent.com","cls.cloud.tencent.com"]}}]}，principal用于指定角色的授权对象。获取该参数可参阅 获取角色详情（https://cloud.tencent.com/document/product/598/36221） 输出参数RoleInfo
     */
    PolicyDocument: string;
    /**
     * 角色描述
     */
    Description?: string;
    /**
     * 是否允许登录 1 为允许 0 为不允许
     */
    ConsoleLogin?: number;
    /**
     * 申请角色临时密钥的最长有效期限制(范围：0~43200)
     */
    SessionDuration?: number;
    /**
     * 角色绑定标签
     */
    Tags?: Array<RoleTags>;
}
/**
 * 用户关联的策略详情
 */
export interface AttachedUserPolicy {
    /**
     * 策略ID
     */
    PolicyId: string;
    /**
     * 策略名
     */
    PolicyName: string;
    /**
     * 策略描述
     */
    Description: string;
    /**
     * 创建时间
     */
    AddTime: string;
    /**
     * 策略类型(1表示自定义策略，2表示预设策略)
     */
    StrategyType: string;
    /**
     * 创建模式(1表示按产品或项目权限创建的策略，其他表示策略语法创建的策略)
     */
    CreateMode: string;
    /**
     * 随组关联信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Groups: Array<AttachedUserPolicyGroupInfo>;
    /**
     * 是否已下线(0:否 1:是)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Deactived: number;
    /**
     * 已下线的产品列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeactivedDetail: Array<string>;
}
/**
 * DeleteServiceLinkedRole返回参数结构体
 */
export interface DeleteServiceLinkedRoleResponse {
    /**
     * 删除任务ID，可用于检查删除服务相关角色状态。
     */
    DeletionTaskId: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListUsersForGroup返回参数结构体
 */
export interface ListUsersForGroupResponse {
    /**
     * 用户组关联的用户总数。
     */
    TotalNum?: number;
    /**
     * 子用户信息。
     */
    UserInfo?: Array<GroupMemberInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetPolicy返回参数结构体
 */
export interface GetPolicyResponse {
    /**
     * 策略名。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolicyName?: string;
    /**
     * 策略描述。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 1 表示自定义策略，2 表示预设策略。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: number;
    /**
     * 策略创建时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AddTime?: string;
    /**
     * 策略最近更新时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 策略文档。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolicyDocument?: string;
    /**
     * 备注。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PresetAlias?: string;
    /**
     * 是否是服务相关策略，0代表不是服务相关策略，1代表是服务相关策略。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsServiceLinkedRolePolicy?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSafeAuthFlag请求参数结构体
 */
export declare type DescribeSafeAuthFlagRequest = null;
/**
 * DeleteServiceLinkedRole请求参数结构体
 */
export interface DeleteServiceLinkedRoleRequest {
    /**
     * 要删除的服务相关角色的名称。
     */
    RoleName: string;
}
/**
 * 策略关联的实体信息
 */
export interface AttachEntityOfPolicy {
    /**
     * 实体ID
     */
    Id?: string;
    /**
     * 实体名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 实体Uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Uin?: number;
    /**
     * 关联类型。1 用户关联 ； 2 用户组关联 3 角色关联
     */
    RelatedType?: number;
    /**
     * 策略关联时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AttachmentTime?: string;
}
/**
 * DeleteOIDCConfig返回参数结构体
 */
export interface DeleteOIDCConfigResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 策略版本详情
 */
export interface PolicyVersionDetail {
    /**
     * 策略版本号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VersionId?: number;
    /**
     * 策略版本创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateDate?: string;
    /**
     * 是否是正在生效的版本。0表示不是，1表示是
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsDefaultVersion?: number;
    /**
     * 策略语法文本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Document?: string;
}
/**
 * 用于ListPoliciesGrantingServiceAccess接口的Policy节点
 */
export interface ListGrantServiceAccessPolicy {
    /**
     * 策略ID
     */
    PolicyId: string;
    /**
     * 策略名
     */
    PolicyName: string;
    /**
     * 策略类型: Custom自定义策略，Presetting预设策略
     */
    PolicyType: string;
    /**
     * 策略描述
     */
    PolicyDescription: string;
}
/**
 * 用于ListPoliciesGrantingServiceAccess接口的Service节点
 */
export interface ListGrantServiceAccessService {
    /**
     * 服务
     */
    ServiceType: string;
    /**
     * 服务名
     */
    ServiceName: string;
}
/**
 * CreateUserSAMLConfig返回参数结构体
 */
export interface CreateUserSAMLConfigResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSubAccounts返回参数结构体
 */
export interface DescribeSubAccountsResponse {
    /**
     * 子用户列表
     */
    SubAccounts?: Array<SubAccountUser>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListEntitiesForPolicy返回参数结构体
 */
export interface ListEntitiesForPolicyResponse {
    /**
     * 实体总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalNum?: number;
    /**
     * 实体列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    List?: Array<AttachEntityOfPolicy>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AddUserToGroup返回参数结构体
 */
export interface AddUserToGroupResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateUserSAMLConfig返回参数结构体
 */
export interface UpdateUserSAMLConfigResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AttachUserPolicy返回参数结构体
 */
export interface AttachUserPolicyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSafeAuthFlagColl返回参数结构体
 */
export interface DescribeSafeAuthFlagCollResponse {
    /**
     * 登录保护设置
     */
    LoginFlag?: LoginActionFlag;
    /**
     * 敏感操作保护设置
     */
    ActionFlag?: LoginActionFlag;
    /**
     * 异地登录保护设置
     */
    OffsiteFlag?: OffsiteFlag;
    /**
     * 是否提示信任设备1 ：提示 0: 不提示
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PromptTrust?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteMessageReceiver请求参数结构体
 */
export interface DeleteMessageReceiverRequest {
    /**
     * 消息接受者的名称
     */
    Name: string;
}
/**
 * DescribeSafeAuthFlagColl请求参数结构体
 */
export interface DescribeSafeAuthFlagCollRequest {
    /**
     * 子账号
     */
    SubUin: number;
}
/**
 * PutRolePermissionsBoundary返回参数结构体
 */
export interface PutRolePermissionsBoundaryResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SetMfaFlag请求参数结构体
 */
export interface SetMfaFlagRequest {
    /**
     * 设置用户的uin
     */
    OpUin?: number;
    /**
     * 登录保护设置
     */
    LoginFlag?: LoginActionMfaFlag;
    /**
     * 操作保护设置
     */
    ActionFlag?: LoginActionMfaFlag;
}
/**
 * ListCollaborators返回参数结构体
 */
export interface ListCollaboratorsResponse {
    /**
     * 总数
     */
    TotalNum?: number;
    /**
     * 协作者信息
     */
    Data?: Array<SubAccountInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListAccessKeys返回参数结构体
 */
export interface ListAccessKeysResponse {
    /**
     * 访问密钥列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AccessKeys?: Array<AccessKey>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetSecurityLastUsed返回参数结构体
 */
export interface GetSecurityLastUsedResponse {
    /**
     * 密钥ID最近访问列表
     */
    SecretIdLastUsedRows?: Array<SecretIdLastUsed>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListAttachedUserPolicies请求参数结构体
 */
export interface ListAttachedUserPoliciesRequest {
    /**
     * 子账号 uin
     */
    TargetUin: number;
    /**
     * 页码，默认值是 1，从 1 开始
     */
    Page?: number;
    /**
     * 每页大小，默认值是 20
     */
    Rp?: number;
}
/**
 * AttachGroupPolicy返回参数结构体
 */
export interface AttachGroupPolicyResponse {
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
     * 策略ID，与PolicyName二选一必填
     */
    PolicyId?: number;
    /**
     * 策略名，与PolicyId二选一必填
     */
    PolicyName?: string;
    /**
     * 策略描述
     */
    Description?: string;
    /**
     * 策略文档
     */
    PolicyDocument?: string;
    /**
     * 预设策略备注
     */
    Alias?: string;
}
/**
 * DeleteOIDCConfig请求参数结构体
 */
export interface DeleteOIDCConfigRequest {
    /**
     * OIDC身份提供商名称
     */
    Name: string;
}
/**
 * CreateMessageReceiver返回参数结构体
 */
export interface CreateMessageReceiverResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateGroup返回参数结构体
 */
export interface CreateGroupResponse {
    /**
     * 用户组 ID
     */
    GroupId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
