/**
 * DescribeOrgNode返回参数结构体
 */
export interface DescribeOrgNodeResponse {
    /**
      * 机构节点展示名称，长度限制：64个字符。 默认与机构名相同。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DisplayName: string;
    /**
      * 机构节点最后修改时间，符合 ISO8601 标准。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastModifiedDate: string;
    /**
      * 机构节点外部ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CustomizedOrgNodeId: string;
    /**
      * 当前机构节点的父节点ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ParentOrgNodeId: string;
    /**
      * 机构节点ID，是机构节点的全局唯一标识。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrgNodeId: string;
    /**
      * 数据来源。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DataSource: string;
    /**
      * 机构节点创建时间，符合 ISO8601 标准。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreatedDate: string;
    /**
      * 当前机构节点下的子节点列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrgNodeChildInfo: Array<OrgNodeChildInfo>;
    /**
      * 机构节点描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Description: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ListApplications请求参数结构体
 */
export interface ListApplicationsRequest {
    /**
      * 模糊匹配搜索条件，支持多搜索条件组合、多数据范围匹配的搜索。同时支持查询信息内容全匹配、部分匹配、范围匹配等多种查询方式，具体查询方式为：双引号（""）表示全匹配、以星号（* ) 结尾表示字段部分匹配。模糊匹配搜索功能与精准匹配查询不会同时生效，如果SearchCondition与ApplicationIdList均不为空，则默认以ApplicationIdList进行精准查询。如果SearchCondition字段与ApplicationIdList字段均为空，则默认返回全部的应用信息。
      */
    SearchCondition?: ApplicationInfoSearchCriteria;
    /**
      * 排序条件集合。可排序的属性支持：应用名字（DisplayName）、创建时间（CreatedDate）、上次修改时间（LastModifiedDate）。如果该字段为空，则默认按照应用名字正向排序。
      */
    Sort?: SortCondition;
    /**
      * 排序条件集合。可排序的属性支持：应用名字（DisplayName）、创建时间（CreatedDate）、上次修改时间（LastModifiedDate）。如果该字段为空，则默认按照应用名字正向排序。
      */
    Offset?: number;
    /**
      * 分页读取数量。Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询。
      */
    Limit?: number;
    /**
      * 应用ID列表，通过应用ID列表精准匹配对应的应用信息。模糊匹配搜索功能与精准匹配查询不会同时生效，如果SearchCondition与ApplicationIdList均不为空，则默认以ApplicationIdList进行精准查询。如果SearchCondition字段与ApplicationIdList字段均为空，则默认返回全部的应用信息。
      */
    ApplicationIdList?: Array<string>;
}
/**
 * 用户属性搜索条件。
 */
export interface UserSearchCriteria {
    /**
      * 用户名，长度限制：64个字符。
      */
    UserName?: string;
    /**
      * 用户手机号。
      */
    Phone?: string;
    /**
      * 用户邮箱。
      */
    Email?: string;
    /**
      * 用户状态，取值 NORMAL （正常）、FREEZE （已冻结）、LOCKED （已锁定）或 NOT_ENABLED （未启用）。
      */
    Status?: string;
    /**
      * 用户创建时间，遵循 ISO 8601 标准。
      */
    CreationTime?: string;
    /**
      * 用户上次更新时间区间。
      */
    LastUpdateTime?: string;
    /**
      * 名称匹配搜索，匹配范围包括：用户名称、用户ID。
      */
    Keyword?: string;
}
/**
 * AddAccountToAccountGroup返回参数结构体
 */
export interface AddAccountToAccountGroupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteUser请求参数结构体
 */
export interface DeleteUserRequest {
    /**
      * 用户名，长度限制：32个字符。 Username 和 UserId 需选择一个作为搜索条件；如两个条件同时使用则默认使用Username作为搜索条件。
      */
    UserName?: string;
    /**
      * 用户 id。 Username 和 UserId 需选择一个作为搜索条件；如两个条件同时使用则默认使用Username作为搜索条件。
      */
    UserId?: string;
}
/**
 * 返回符合条件的用户数据列表
 */
export interface AuthorizationUserResouceInfo {
    /**
      * 资源ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceId: string;
    /**
      * 资源类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceType: string;
    /**
      * 授权资源
注意：此字段可能返回 null，表示取不到有效值。
      */
    Resource: string;
    /**
      * 继承关系
注意：此字段可能返回 null，表示取不到有效值。
      */
    InheritedForm: InheritedForm;
    /**
      * 应用账户
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationAccounts: Array<string>;
    /**
      * 资源名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceName: string;
}
/**
 * CreateAppAccount返回参数结构体
 */
export interface CreateAppAccountResponse {
    /**
      * 账号ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    AccountId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ListAuthorizedApplicationsToUserGroup请求参数结构体
 */
export interface ListAuthorizedApplicationsToUserGroupRequest {
    /**
      * 用户组 Id 。
      */
    UserGroupId: string;
}
/**
 * ModifyApplication返回参数结构体
 */
export interface ModifyApplicationResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 机构子节点下的用户信息列表
 */
export interface OrgNodeChildUserInfo {
    /**
      * 机构ID，是机构节点全局唯一标识，长度限制：64个字符。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrgNodeId: string;
    /**
      * 用户信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserInfo: Array<UserInfo>;
    /**
      * 当前机构节点下的用户总数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalUserNum: number;
    /**
      * 组织机构ID路径。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrgNodeIdPath: string;
    /**
      * 组织机构名称路径。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrgNodeNamePath: string;
}
/**
 * DeleteAccountGroup请求参数结构体
 */
export interface DeleteAccountGroupRequest {
    /**
      * 账号组ID数组。
      */
    AccountGroupIdList: Array<string>;
}
/**
 * AddUserToUserGroup请求参数结构体
 */
export interface AddUserToUserGroupRequest {
    /**
      * 加入用户组的用户ID列表。
      */
    UserIds: Array<string>;
    /**
      * 用户组ID，是用户组的全局唯一标识。
      */
    UserGroupId: string;
}
/**
 * 应用信息列表。
 */
export interface ApplicationInformation {
    /**
      * 应用ID，是应用的全局唯一标识。
      */
    ApplicationId: string;
    /**
      * 应用展示名称，长度限制：64个字符。 默认与应用名字相同。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DisplayName: string;
    /**
      * 应用创建时间，符合 ISO8601 标准。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreatedDate: string;
    /**
      * 上次更新时间，符合 ISO8601 标准。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastModifiedDate: string;
    /**
      * 应用状态。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AppStatus: boolean;
    /**
      * 应用图标。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Icon: string;
    /**
      * 应用类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationType: string;
    /**
      * 客户端id。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClientId: string;
}
/**
 * ListUsers返回参数结构体
 */
export interface ListUsersResponse {
    /**
      * 查询返回的相关用户列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserList: Array<UserInformation>;
    /**
      * 返回查询用户的总数量，仅当入参IncludeTotal等于true时返回。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteAppAccount请求参数结构体
 */
export interface DeleteAppAccountRequest {
    /**
      * 账号ID数组。
      */
    AccountIdList: Array<string>;
}
/**
 * 返回的用户组列表。
 */
export interface UserGroupInfo {
    /**
      * 昵称，长度限制：64个字符。 默认与用户名相同。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DisplayName: string;
    /**
      * 用户组ID，是用户组全局唯一标识，长度限制：64个字符。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserGroupId: string;
    /**
      * 用户组备注。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Description: string;
    /**
      * 创建时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreatedDate: string;
}
/**
 * UpdateOrgNode请求参数结构体
 */
export interface UpdateOrgNodeRequest {
    /**
      * 机构节点ID，是机构节点的全局唯一标识。
      */
    OrgNodeId: string;
    /**
      * 机构节点名称，长度限制：64个字符。
      */
    DisplayName: string;
    /**
      * 机构节点描述。
      */
    Description?: string;
    /**
      * 机构代码。如果非空则校验此ID的唯一性。
      */
    CustomizedOrgNodeId?: string;
}
/**
 * CreateOrgNode请求参数结构体
 */
export interface CreateOrgNodeRequest {
    /**
      * 机构节点名称，长度限制：64个字符。
      */
    DisplayName: string;
    /**
      * 父机构节点ID，如果为空则默认创建在机构根节点下。
      */
    ParentOrgNodeId?: string;
    /**
      * 机构节点描述。
      */
    Description?: string;
    /**
      * 机构代码。如果为空，则默认生成机构代码。如果为非空，则校验机构代码的唯一性。
      */
    CustomizedOrgNodeId?: string;
}
/**
 * RemoveUserFromUserGroup请求参数结构体
 */
export interface RemoveUserFromUserGroupRequest {
    /**
      * 要加入用户组的用户ID列表。
      */
    UserIds: Array<string>;
    /**
      * 用户组ID，是用户组的全局唯一标识。
      */
    UserGroupId: string;
}
/**
 * ModifyAppAccount请求参数结构体
 */
export interface ModifyAppAccountRequest {
    /**
      * 账号ID。
      */
    AccountId: string;
    /**
      * 账号名称。未传入该参数时，表示不进行修改。
      */
    AccountName?: string;
    /**
      * 账号密码。未传入该参数时，表示不进行修改。
      */
    Password?: string;
    /**
      * 描述，未传入该参数时，表示不进行修改。
      */
    Description?: string;
}
/**
 * ListAuthorizedApplicationsToUserGroup返回参数结构体
 */
export interface ListAuthorizedApplicationsToUserGroupResponse {
    /**
      * 用户组拥有访问权限的应用 id 列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationIds: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteAccountGroup返回参数结构体
 */
export interface DeleteAccountGroupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 用户组属性搜索条件。
 */
export interface UserGroupInfoSearchCriteria {
    /**
      * 名称匹配搜索，匹配范围包括：用户组名称、用户组ID。
      */
    Keyword?: string;
}
/**
 * DescribeUserInfo请求参数结构体
 */
export interface DescribeUserInfoRequest {
    /**
      * 用户名，长度限制：64个字符。 Username 和 UserId 需至少一个不为空；都不为空时优先使用 Username。
      */
    UserName?: string;
    /**
      * 用户 id，长度限制：64个字符。 Username 和 UserId 需至少一个不为空；都不为空时优先使用 Username。
      */
    UserId?: string;
}
/**
 * ListAuthorizedApplicationsToOrgNode请求参数结构体
 */
export interface ListAuthorizedApplicationsToOrgNodeRequest {
    /**
      * 机构节点 Id 。
      */
    OrgNodeId: string;
}
/**
 * DescribePublicKey返回参数结构体
 */
export interface DescribePublicKeyResponse {
    /**
      * jwt验证签名所用的公钥信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PublicKey: string;
    /**
      * jwt的密钥id。
注意：此字段可能返回 null，表示取不到有效值。
      */
    KeyId: string;
    /**
      * 应用ID，是应用的全局唯一标识。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeOrgNode请求参数结构体
 */
export interface DescribeOrgNodeRequest {
    /**
      * 机构节点ID，是机构节点全局唯一标识，长度限制：64个字符。如果为空默认读取机构根节点信息。
      */
    OrgNodeId?: string;
    /**
      * 是否读取其子节点信息。当其为空或false时，默认仅读取当前机构节点信息。当其为true时，读取本机构节点以及其第一层子节点信息。
      */
    IncludeOrgNodeChildInfo?: boolean;
}
/**
 * CreateAccountGroup请求参数结构体
 */
export interface CreateAccountGroupRequest {
    /**
      * 应用ID。
      */
    ApplicationId: string;
    /**
      * 账号组名。
      */
    GroupName: string;
    /**
      * 描述。
      */
    Description?: string;
}
/**
 * DescribeUserGroup请求参数结构体
 */
export interface DescribeUserGroupRequest {
    /**
      * 用户组ID，是用户组的全局唯一标识。
      */
    UserGroupId: string;
}
/**
 * CreateOrgNode返回参数结构体
 */
export interface CreateOrgNodeResponse {
    /**
      * 机构节点ID，是机构节点的全局唯一标识。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrgNodeId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 获取用户所在的用户组列表功能中用户组属性搜索条件。
 */
export interface UserGroupInformationSearchCriteria {
    /**
      * 名称匹配搜索，匹配范围包括：用户组名称。
      */
    Keyword?: string;
}
/**
 * 授权资源详情
 */
export interface AuthorizationResourceEntityInfo {
    /**
      * 授权关系的唯一ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceId: string;
    /**
      * 资源授权类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceType: string;
    /**
      * 授权的资源
注意：此字段可能返回 null，表示取不到有效值。
      */
    Resource: string;
    /**
      * 资源名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceName: string;
}
/**
 * 账号组查询参数
 */
export interface AccountGroupSearchCriteria {
    /**
      * 关键字
      */
    Keyword?: string;
}
/**
 * CreateUser返回参数结构体
 */
export interface CreateUserResponse {
    /**
      * 返回的新创建的用户ID，是该用户的全局唯一标识。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 三方账号信息。
 */
export interface ThirdPartyAccountInfo {
    /**
      * 第三方账号代码。"2"代表企业微信。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AccountCode: string;
    /**
      * 账号对应的用户名。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AccountName: string;
}
/**
 * ModifyAppAccount返回参数结构体
 */
export interface ModifyAppAccountResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteUser返回参数结构体
 */
export interface DeleteUserResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ListUsersInUserGroup返回参数结构体
 */
export interface ListUsersInUserGroupResponse {
    /**
      * 用户组ID，是用户组的全局唯一标识。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserGroupId: string;
    /**
      * 返回的用户信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserInfo: Array<UserInfo>;
    /**
      * 返回的用户信息总数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalNum: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateAppAccount请求参数结构体
 */
export interface CreateAppAccountRequest {
    /**
      * 应用ID
      */
    ApplicationId: string;
    /**
      * 账号名称
      */
    AccountName: string;
    /**
      * 账号密码
      */
    Password?: string;
    /**
      * 描述
      */
    Description?: string;
}
/**
 * DescribeApplication返回参数结构体
 */
export interface DescribeApplicationResponse {
    /**
      * 密钥id。
注意：此字段可能返回 null，表示取不到有效值。
      */
    KeyId: string;
    /**
      * 应用展示名称，长度限制：64个字符。 默认与应用名字相同。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DisplayName: string;
    /**
      * 应用最后修改时间，符合 ISO8601 标准。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastModifiedDate: string;
    /**
      * 客户端id。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClientId: string;
    /**
      * 应用类型，即创建应用时所选择的应用模板类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationType: string;
    /**
      * 应用创建时间，符合 ISO8601 标准。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreatedDate: string;
    /**
      * 应用id，是应用的全局唯一标识。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationId: string;
    /**
      * 令牌有效时间，单位为秒。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TokenExpired: number;
    /**
      * 客户端secret。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClientSecret: string;
    /**
      * 公钥信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PublicKey: string;
    /**
      * 授权地址。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AuthorizeUrl: string;
    /**
      * 应用图标图片访问地址。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IconUrl: string;
    /**
      * 安全等级。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SecureLevel: string;
    /**
      * 应用状态。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AppStatus: boolean;
    /**
      * 描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Description: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAppAccount返回参数结构体
 */
export interface DescribeAppAccountResponse {
    /**
      * 返回查询的总记录数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 应用ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationId: string;
    /**
      * 返回符合条件的数据列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AppAccountList: Array<AppAccountInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeUserGroupResourcesAuthorization返回参数结构体
 */
export interface DescribeUserGroupResourcesAuthorizationResponse {
    /**
      * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationId: string;
    /**
      * 用户组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserGroupId: string;
    /**
      * 用户组名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserGroupName: string;
    /**
      * 资源列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    AuthorizationUserGroupResourceList: Array<AuthorizationResourceEntityInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 返回的用户组列表。
 */
export interface UserGroupInformation {
    /**
      * 用户组ID。
      */
    UserGroupId: string;
    /**
      * 用户组名称。
      */
    UserGroupName: string;
    /**
      * 上次更新时间，符合 ISO8601 标准。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastModifiedDate: string;
}
/**
 * 展示机构下用户的属性搜索条件。
 */
export interface ListUsersInOrgNodeSearchCriteria {
    /**
      * 用户名，长度限制：64个字符。
      */
    UserName?: string;
    /**
      * 用户手机号。
      */
    Phone?: string;
    /**
      * 用户邮箱。
      */
    Email?: string;
    /**
      * 用户状态，取值 NORMAL （正常）、FREEZE （已冻结）、LOCKED （已锁定）或 NOT_ENABLED （未启用）。
      */
    Status?: string;
    /**
      * 用户创建时间，遵循 ISO 8601 标准。
      */
    CreationTime?: string;
    /**
      * 用户上次更新时间。
      */
    LastUpdateTime?: string;
    /**
      * 名称匹配搜索，匹配范围包括：用户名称、用户手机号。
      */
    Keyword?: string;
}
/**
 * DescribeAccountGroup返回参数结构体
 */
export interface DescribeAccountGroupResponse {
    /**
      * 返回查询的总记录数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 应用ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationId: string;
    /**
      * 返回符合条件的数据列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AccountGroupList: Array<AccountGroupInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateUserGroup请求参数结构体
 */
export interface CreateUserGroupRequest {
    /**
      * 用户组昵称，长度限制：64个字符。 DisplayName是唯一的。
      */
    DisplayName: string;
    /**
      * 用户组备注，长度限制：512个字符。
      */
    Description?: string;
}
/**
 * DescribeOrgResourcesAuthorization请求参数结构体
 */
export interface DescribeOrgResourcesAuthorizationRequest {
    /**
      * 应用ID
      */
    ApplicationId: string;
    /**
      * 机构ID
      */
    OrgNodeId: string;
}
/**
 * DescribeUserInfo返回参数结构体
 */
export interface DescribeUserInfoResponse {
    /**
      * 用户名。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserName: string;
    /**
      * 用户状态，取值 NORMAL （正常）、FREEZE （已冻结）、LOCKED （已锁定）或 NOT_ENABLED （未启用）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 昵称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DisplayName: string;
    /**
      * 用户备注。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Description: string;
    /**
      * 用户所属用户组 id 列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserGroupIds: Array<string>;
    /**
      * 用户 id，长度限制：64个字符。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserId: string;
    /**
      * 用户邮箱。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Email: string;
    /**
      * 用户手机号。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Phone: string;
    /**
      * 用户所属的主组织机构唯一ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrgNodeId: string;
    /**
      * 数据来源。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DataSource: string;
    /**
      * 用户过期时间，遵循 ISO 8601 标准。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExpirationTime: string;
    /**
      * 用户激活时间，遵循 ISO 8601 标准。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ActivationTime: string;
    /**
      * 当前用户的密码是否需要重置，该字段为false表示不需要重置密码。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PwdNeedReset: boolean;
    /**
      * 用户所属的次要组织机构ID列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SecondaryOrgNodeIdList: Array<string>;
    /**
      * 是否管理员标志，0为否、1为是。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AdminFlag: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteOrgNode请求参数结构体
 */
export interface DeleteOrgNodeRequest {
    /**
      * 机构节点ID，是机构节点的全局唯一标识。
      */
    OrgNodeId: string;
}
/**
 * DeleteUsers返回参数结构体
 */
export interface DeleteUsersResponse {
    /**
      * 未被成功删除的用户信息。当业务参数为DeleteIdList时，本字段将返回未成功删除的用户ID列表。当业务参数为DeleteNameList时，本字段将返回未成功删除的用户名称列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailedItems: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 查询账号信息列表。
 */
export interface AppAccountInfo {
    /**
      * 账号ID。
      */
    AccountId: string;
    /**
      * 账号名。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AccountName: string;
    /**
      * 用户信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserList: Array<LinkUserInfo>;
    /**
      * 描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Description: string;
    /**
      * 创建时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreatedDate: string;
}
/**
 * DescribeAccountGroup请求参数结构体
 */
export interface DescribeAccountGroupRequest {
    /**
      * 应用ID。
      */
    ApplicationId: string;
    /**
      * 查询条件，支持多搜索条件组合、多数据范围匹配的搜索。同时支持查询信息内容全匹配、部分匹配、范围匹配等多种查询方式，具体查询方式为：双引号（“”）表示全匹配、以星号（*）结尾表示字段部分匹配。如果该字段为空，则默认查全量表。
      */
    SearchCondition?: AccountGroupSearchCriteria;
    /**
      * 偏移量，默认为 0。
      */
    Offset?: number;
    /**
      * 返回数量，默认为 20，最大值为 100。
      */
    Limit?: number;
}
/**
 * 账号查询参数
 */
export interface AppAccountSearchCriteria {
    /**
      * 关键字
      */
    Keyword?: string;
}
/**
 * DescribeOrgResourcesAuthorization返回参数结构体
 */
export interface DescribeOrgResourcesAuthorizationResponse {
    /**
      * 应用ID
      */
    ApplicationId: string;
    /**
      * 授权机构ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrgNodeId: string;
    /**
      * 机构名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrgNodeName: string;
    /**
      * 机构目录
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrgNodePath: string;
    /**
      * 资源列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    AuthorizationOrgResourceList: Array<AuthorizationResourceEntityInfo>;
    /**
      * 资源数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ListUsersInUserGroup请求参数结构体
 */
export interface ListUsersInUserGroupRequest {
    /**
      * 用户组ID，是用户组的全局唯一标识。
      */
    UserGroupId: string;
    /**
      * 用户属性搜索条件，可查询条件包括：用户名、手机号码，邮箱、用户锁定状态、用户冻结状态、创建时间、上次修改时间，支持多种属性组合作为查询条件。同时支持查询信息内容全匹配、部分匹配、范围匹配等多种查询方式，具体查询方式为：双引号（“”）表示全匹配、以星号（）结尾表示字段部分匹配、中括号以逗号分隔（[Min，Max]）表示闭区间查询、大括号以逗号分隔（{Min，Max}）表示开区间查询，中括号与大括号可以配合使用（例如：{Min，Max]表示最小值开区间，最大值闭区间查询）。范围匹配支持使用星号（例如{20,]表示查询范围为大于20的所有数据）。范围查询同时支持时间段查询，支持的属性包括创建时间 （CreationTime）、上次修改时间（LastUpdateTime），查询的时间格式遵循 ISO 8601 标准，例如：2021-01-13T09:44:07.182+0000。
      */
    SearchCondition?: UserSearchCriteria;
    /**
      * 排序条件集合。可排序的属性支持：用户名字（UserName）、用户昵称（DisplayName）、手机号（Phone）、邮箱（Email）、用户状态（Status）、创建时间 （CreatedDate）、上次更新时间（LastModifiedDate）。如果不指定，则默认按照用户昵称（DisplayName）正向排序。
      */
    Sort?: SortCondition;
    /**
      * 分页偏移量，默认为0。Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询，即只返回最多50个用户。
      */
    Offset?: number;
    /**
      * 分页读取数量，默认为50，最大值为100。 Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询，即只返回最多50个用户。
      */
    Limit?: number;
}
/**
 * 用户信息列表。
 */
export interface UserInfo {
    /**
      * 用户ID，是用户全局唯一标识，长度限制：64个字符。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserId: string;
    /**
      * 昵称，长度限制：64个字符。 默认与用户名相同。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DisplayName: string;
    /**
      * 用户名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserName: string;
    /**
      * 用户手机号。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Phone: string;
    /**
      * 邮箱地址。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Email: string;
    /**
      * 用户状态。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 数据来源。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DataSource: string;
}
/**
 * DeleteAppAccount返回参数结构体
 */
export interface DeleteAppAccountResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyAccountGroup请求参数结构体
 */
export interface ModifyAccountGroupRequest {
    /**
      * 账号组ID。
      */
    AccountGroupId: string;
    /**
      * 账号组名。未传入该参数时，表示不进行修改。
      */
    GroupName?: string;
    /**
      * 描述，未传入该参数时，表示不进行修改。
      */
    Description?: string;
}
/**
 * ListUsersInOrgNode返回参数结构体
 */
export interface ListUsersInOrgNodeResponse {
    /**
      * 机构子节点下的用户信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrgNodeChildUserInfo: Array<OrgNodeChildUserInfo>;
    /**
      * 机构ID，是机构节点全局唯一标识，长度限制：64个字符。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrgNodeId: string;
    /**
      * 用户信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserInfo: Array<UserInfo>;
    /**
      * 当前机构节点下的用户总数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalUserNum: number;
    /**
      * 组织机构ID路径。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrgNodeIdPath: string;
    /**
      * 组织机构名称路径。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrgNodeNamePath: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ListApplicationAuthorizations请求参数结构体
 */
export interface ListApplicationAuthorizationsRequest {
    /**
      * 查询类型，包含用户（User）、用户组（UserGroup）、组织机构（OrgNode）。
      */
    EntityType: string;
    /**
      * 查询条件，支持多搜索条件组合、多数据范围匹配的搜索。同时支持查询信息内容全匹配、部分匹配、范围匹配等多种查询方式，具体查询方式为：双引号（""）表示全匹配、以星号（* ) 结尾表示字段部分匹配。如果该字段为空，则默认查全量表。
      */
    SearchCondition?: AuthorizationInfoSearchCriteria;
    /**
      * 排序条件集合。可排序的属性支持：上次修改时间（lastModifiedDate）。如果该字段为空，则默认按照应用名称正向排序。
      */
    Sort?: SortCondition;
    /**
      * 分页偏移量。Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询。
      */
    Offset?: number;
    /**
      * 分页读取数量。Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询。
      */
    Limit?: number;
}
/**
 * ModifyAccountGroup返回参数结构体
 */
export interface ModifyAccountGroupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteUsers请求参数结构体
 */
export interface DeleteUsersRequest {
    /**
      * 被删除用户的ID列表。DeleteIdList 和 DeleteNameList 需至少一个不为空；都不为空时优先使用 DeleteNameList。
      */
    DeleteIdList?: Array<string>;
    /**
      * 被删除用户的名称列表。DeleteIdList 和 DeleteNameList 需至少一个不为空；都不为空时优先使用 DeleteNameList。
      */
    DeleteNameList?: Array<string>;
}
/**
 * 查询账号组信息列表。
 */
export interface AccountGroupInfo {
    /**
      * 账号组ID。
      */
    AccountGroupId?: string;
    /**
      * 账号组名。
      */
    GroupName: string;
    /**
      * 备注。
      */
    Description: string;
    /**
      * 创建时间。
      */
    CreatedDate: string;
}
/**
 * 当前机构节点下的子节点列表
 */
export interface OrgNodeChildInfo {
    /**
      * 机构节点展示名称，长度限制：64个字符。 默认与机构名相同。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DisplayName: string;
    /**
      * 机构节点最后修改时间，符合 ISO8601 标准。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastModifiedDate: string;
    /**
      * 用户自定义可选填的机构节点对外ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CustomizedOrgNodeId: string;
    /**
      * 当前机构节点的父节点ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ParentOrgNodeId: string;
    /**
      * 机构节点ID，是机构节点的全局唯一标识。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrgNodeId: string;
    /**
      * 数据来源。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DataSource: string;
    /**
      * 机构节点创建时间，符合 ISO8601 标准。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreatedDate: string;
    /**
      * 机构节点描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Description: string;
}
/**
 * ListAuthorizedApplicationsToUser请求参数结构体
 */
export interface ListAuthorizedApplicationsToUserRequest {
    /**
      * 用户 ID。
      */
    UserId: string;
    /**
      * 查询范围是否包括用户关联的用户组、组织机构的应用访问权限。默认为不查询 。传false表示不查询该范围，传true表示应用查询该范围。
      */
    IncludeInheritedAuthorizations?: boolean;
}
/**
 * DeleteOrgNode返回参数结构体
 */
export interface DeleteOrgNodeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ListAccountInAccountGroup返回参数结构体
 */
export interface ListAccountInAccountGroupResponse {
    /**
      * 查询返回的相关账号列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AccountList: Array<AppAccountInfo>;
    /**
      * 返回查询账号的总数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 账号组ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AccountGroupId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeUserResourcesAuthorization返回参数结构体
 */
export interface DescribeUserResourcesAuthorizationResponse {
    /**
      * 应用的唯一ID。
      */
    ApplicationId: string;
    /**
      * 应用账户。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationAccounts: Array<string>;
    /**
      * 授权用户的唯一ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserId: string;
    /**
      * 授权的用户名。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserName: string;
    /**
      * 返回的资源列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AuthorizationUserResourceList: Array<AuthorizationUserResouceInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ListUsersInOrgNode请求参数结构体
 */
export interface ListUsersInOrgNodeRequest {
    /**
      * 机构节点ID，是机构节点全局唯一标识，长度限制：64个字符。如果为空默认读取机构根节点下用户信息。
      */
    OrgNodeId?: string;
    /**
      * 是否读取其子节点信息。当其为空或false时，默认仅读取当前机构节点信息。当其为true时，读取本机构节点以及其第一层子节点信息。
      */
    IncludeOrgNodeChildInfo?: boolean;
    /**
      * 用户属性搜索条件，可查询条件包括：用户名、手机号码，邮箱、用户锁定状态、用户冻结状态、创建时间、上次修改时间，支持多种属性组合作为查询条件。同时支持查询信息内容全匹配、部分匹配、范围匹配等多种查询方式，具体查询方式为：双引号（“”）表示全匹配、以星号（*）结尾表示字段部分匹配、中括号以逗号分隔（[Min，Max]）表示闭区间查询、大括号以逗号分隔（{Min，Max}）表示开区间查询，中括号与大括号可以配合使用（例如：{Min，Max]表示最小值开区间，最大值闭区间查询）。范围匹配支持使用星号（例如{20,*]表示查询范围为大于20的所有数据）。范围查询同时支持时间段查询，支持的属性包括创建时间 （CreationTime）、上次修改时间（LastUpdateTime），查询的时间格式遵循 ISO 8601 标准，例如：2021-01-13T09:44:07.182+0000。
      */
    SearchCondition?: ListUsersInOrgNodeSearchCriteria;
    /**
      * 排序条件集合。可排序的属性支持：用户名字（UserName）、手机号（Phone）、邮箱（Email）、用户状态（Status）、创建时间 （CreatedDate）、上次更新时间（LastModifiedDate）。如果不指定，则默认按照用户昵称（DisplayName）正向排序。
      */
    Sort?: SortCondition;
    /**
      * 分页偏移量，默认为0。Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询，即只返回最多50个用户。
      */
    Offset?: number;
    /**
      * 分页读取数量，默认为50，最大值为100。 Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询，即只返回最多50个用户。
      */
    Limit?: number;
}
/**
 * 应用信息列表。
 */
export interface InheritedForm {
    /**
      * 用户所在的用户组ID列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserGroupIds: Array<string>;
    /**
      * 用户所在的机构节点ID列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrgNodeIds: Array<string>;
}
/**
 * RemoveAccountFromAccountGroup返回参数结构体
 */
export interface RemoveAccountFromAccountGroupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeUserGroupResourcesAuthorization请求参数结构体
 */
export interface DescribeUserGroupResourcesAuthorizationRequest {
    /**
      * 应用ID
      */
    ApplicationId: string;
    /**
      * 用户组ID
      */
    UserGroupId: string;
}
/**
 * ListUserGroups请求参数结构体
 */
export interface ListUserGroupsRequest {
    /**
      * 查询条件，支持多搜索条件组合、多数据范围匹配的搜索。同时支持查询信息内容全匹配、部分匹配、范围匹配等多种查询方式，具体查询方式为：双引号（""）表示全匹配、以星号（* ) 结尾表示字段部分匹配。如果该字段为空，则默认查全量表。
      */
    SearchCondition?: UserGroupInfoSearchCriteria;
    /**
      * 排序条件集合。可排序的属性支持：用户组名称（DisplayName）、用户组ID（UserGroupId）、上次更新时间（LastModifiedDate）。如果该字段为空，则默认按照用户组名称正向排序。
      */
    Sort?: SortCondition;
    /**
      * 分页偏移量。Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询。
      */
    Offset?: number;
    /**
      * 分页读取数量。Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询。
      */
    Limit?: number;
}
/**
 * UpdateOrgNode返回参数结构体
 */
export interface UpdateOrgNodeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ListAuthorizedApplicationsToUser返回参数结构体
 */
export interface ListAuthorizedApplicationsToUserResponse {
    /**
      * 用户拥有访问权限的应用信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationAuthorizationInfo: Array<ApplicationAuthorizationInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyApplication请求参数结构体
 */
export interface ModifyApplicationRequest {
    /**
      * 应用ID，是应用的全局唯一标识。
      */
    ApplicationId: string;
    /**
      * 安全级别。
      */
    SecureLevel?: string;
    /**
      * 应用展示名称，长度限制：32个字符。 默认与应用名字相同。
      */
    DisplayName?: string;
    /**
      * 应用状态，true表示启用，false表示禁用。
      */
    AppStatus?: boolean;
    /**
      * 应用图标图片访问地址。
      */
    IconUrl?: string;
    /**
      * 描述。长度不超过128。
      */
    Description?: string;
}
/**
 * CreateUser请求参数结构体
 */
export interface CreateUserRequest {
    /**
      * 用户名，长度限制：64个字符。
      */
    UserName: string;
    /**
      * 用户密码， 需要符合密码策略的配置。
      */
    Password: string;
    /**
      * 昵称，长度限制：64个字符。 默认与用户名相同。
      */
    DisplayName?: string;
    /**
      * 用户备注，长度限制：512个字符。
      */
    Description?: string;
    /**
      * 用户所属用户组ID列表。
      */
    UserGroupIds?: Array<string>;
    /**
      * 用户手机号。例如：+86-1xxxxxxxxxx。
      */
    Phone?: string;
    /**
      * 用户所属的主组织机构唯一ID。如果为空，默认为在根节点下创建用户。
      */
    OrgNodeId?: string;
    /**
      * 用户过期时间，遵循 ISO 8601 标准。
      */
    ExpirationTime?: string;
    /**
      * 用户邮箱。
      */
    Email?: string;
    /**
      * 密码是否需要重置，为空默认为false不需要重置密码。
      */
    PwdNeedReset?: boolean;
    /**
      * 用户所属的次要组织机构ID列表。
      */
    SecondaryOrgNodeIdList?: Array<string>;
}
/**
 * DescribePublicKey请求参数结构体
 */
export interface DescribePublicKeyRequest {
    /**
      * 应用ID，是应用的全局唯一标识。
      */
    ApplicationId: string;
}
/**
 * RemoveAccountFromAccountGroup请求参数结构体
 */
export interface RemoveAccountFromAccountGroupRequest {
    /**
      * 账号组ID
      */
    AccountGroupId: string;
    /**
      * 需要移除账号ID列表。
      */
    AccountIds?: Array<string>;
}
/**
 * ListApplicationAuthorizations返回参数结构体
 */
export interface ListApplicationAuthorizationsResponse {
    /**
      * 返回的应用授权信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AuthorizationInfoList: Array<AuthorizationInfo>;
    /**
      * 返回的应用信息总数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 排序条件。
 */
export interface SortCondition {
    /**
      * 排序属性。
      */
    SortKey: string;
    /**
      * 排序顺序，ASC为正向排序，DESC为反向排序。
      */
    SortOrder: string;
}
/**
 * DescribeUserGroup返回参数结构体
 */
export interface DescribeUserGroupResponse {
    /**
      * 用户组昵称，长度限制：64个字符。 DisplayName不唯一。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DisplayName: string;
    /**
      * 用户组备注，长度限制：512个字符。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Description: string;
    /**
      * 用户组ID，是用户组的全局唯一标识。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserGroupId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ListUserGroupsOfUser请求参数结构体
 */
export interface ListUserGroupsOfUserRequest {
    /**
      * 用户ID，是用户的全局唯一标识。
      */
    UserId: string;
    /**
      * 模糊查询条件，支持匹配用户组名称（DisplayName）。如果该字段为空，则默认展示该用户所有的用户组。
      */
    SearchCondition?: UserGroupInformationSearchCriteria;
    /**
      * 排序条件集合。可排序的属性支持：用户组名称（DisplayName）、用户组ID（UserGroupId）、创建时间（CreatedDate）。如果该字段为空，则默认按照用户组名称正向排序。
      */
    Sort?: SortCondition;
    /**
      * 分页偏移量，默认为0。Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询，即只返回最多50个用户组。
      */
    Offset?: number;
    /**
      * 分页读取数量，默认为50，最大值为100。 Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询，即只返回最多50个用户组。
      */
    Limit?: number;
}
/**
 * 用户信息列表。
 */
export interface UserInformation {
    /**
      * 用户名，长度限制：32个字符。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserName: string;
    /**
      * 用户状态。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 昵称，长度限制：64个字符。 默认与用户名相同。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DisplayName: string;
    /**
      * 用户备注，长度限制：512个字符。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Description: string;
    /**
      * 用户上次更新时间，遵循 ISO 8601 标准。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastUpdateTime: string;
    /**
      * 用户创建时间，遵循 ISO 8601 标准。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreationTime: string;
    /**
      * 用户所属主组织机构的路径ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrgPath: string;
    /**
      * 带国家号的用户手机号，例如+86-00000000000。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Phone: string;
    /**
      * 用户所属用户组ID列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubjectGroups: Array<string>;
    /**
      * 用户邮箱。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Email: string;
    /**
      * 用户上次登录时间，遵循 ISO 8601 标准。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastLoginTime: string;
    /**
      * 用户ID，是用户全局唯一标识，长度限制：64个字符。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserId: string;
}
/**
 * DescribeApplication请求参数结构体
 */
export interface DescribeApplicationRequest {
    /**
      * 应用id，是应用的全局唯一标识，与ClientId参数不能同时为空。
      */
    ApplicationId?: string;
    /**
      * 客户端id，与ApplicationId参数不能同时为空。
      */
    ClientId?: string;
}
/**
 * ModifyUserInfo请求参数结构体
 */
export interface ModifyUserInfoRequest {
    /**
      * 用户名，长度限制：32个字符。 Username 和 UserId 需选择一个作为搜索条件；如两个条件同时使用则默认使用Username作为搜索条件。
      */
    UserName?: string;
    /**
      * 昵称，长度限制：64个字符。 默认与用户名相同。
      */
    DisplayName?: string;
    /**
      * 用户备注，长度限制：512个字符。
      */
    Description?: string;
    /**
      * 用户所属用户组ID列表。
      */
    UserGroupIds?: Array<string>;
    /**
      * 用户 id。 Username 和 UserId 需选择一个作为搜索条件；如两个条件同时使用则默认使用Username作为搜索条件。
      */
    UserId?: string;
    /**
      * 用户手机号。
      */
    Phone?: string;
    /**
      * 用户过期时间，遵循 ISO 8601 标准。
      */
    ExpirationTime?: string;
    /**
      * 用户密码， 需要符合密码策略的配置。
      */
    Password?: string;
    /**
      * 用户邮箱。
      */
    Email?: string;
    /**
      * 密码是否需要重置，为空默认为false不需要重置密码。
      */
    PwdNeedReset?: boolean;
    /**
      * 用户所属的主组织机构唯一ID。如果为空，默认为在根节点下创建用户。
      */
    OrgNodeId?: string;
    /**
      * 用户所属的次要组织机构ID列表。
      */
    SecondaryOrgNodeIdList?: Array<string>;
}
/**
 * RemoveUserFromUserGroup返回参数结构体
 */
export interface RemoveUserFromUserGroupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeUserThirdPartyAccountInfo请求参数结构体
 */
export interface DescribeUserThirdPartyAccountInfoRequest {
    /**
      * 用户名。 Username 和 UserId 需至少一个不为空；都不为空时优先使用 Username。
      */
    UserName?: string;
    /**
      * 用户 ID。 Username 和 UserId 需至少一个不为空；都不为空时优先使用 Username。
      */
    UserId?: string;
}
/**
 * ModifyUserInfo返回参数结构体
 */
export interface ModifyUserInfoResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ListAuthorizedApplicationsToOrgNode返回参数结构体
 */
export interface ListAuthorizedApplicationsToOrgNodeResponse {
    /**
      * 机构节点拥有访问权限的应用 id 列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationIds: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AddUserToUserGroup返回参数结构体
 */
export interface AddUserToUserGroupResponse {
    /**
      * 未成功加入用户组的用户ID列表信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailedItems: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAppAccount请求参数结构体
 */
export interface DescribeAppAccountRequest {
    /**
      * 应用ID。
      */
    ApplicationId: string;
    /**
      * 查询条件，支持多搜索条件组合、多数据范围匹配的搜索。同时支持查询信息内容全匹配、部分匹配、范围匹配等多种查询方式，具体查询方式为：双引号（“”）表示全匹配、以星号（*）结尾表示字段部分匹配。如果该字段为空，则默认查全量表。
      */
    SearchCondition?: AppAccountSearchCriteria;
    /**
      * 偏移量，默认为 0。
      */
    Offset?: number;
    /**
      * 返回数量，默认为 20，最大值为 100。
      */
    Limit?: number;
}
/**
 * 返回的授权关系信息。
 */
export interface AuthorizationInfo {
    /**
      * 应用唯一ID。
      */
    AppId: string;
    /**
      * 应用名称。
      */
    AppName: string;
    /**
      * 类型名称。
      */
    EntityName: string;
    /**
      * 类型唯一ID。
      */
    EntityId: string;
    /**
      * 上次更新时间，符合 ISO8601 标准。
      */
    LastModifiedDate: string;
    /**
      * 授权类型唯一ID。
      */
    AuthorizationId: string;
}
/**
 * CreateUserGroup返回参数结构体
 */
export interface CreateUserGroupResponse {
    /**
      * 用户组ID，是用户组的全局唯一标识。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserGroupId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeUserThirdPartyAccountInfo返回参数结构体
 */
export interface DescribeUserThirdPartyAccountInfoResponse {
    /**
      * 用户 id。
      */
    UserId: string;
    /**
      * 用户名。
      */
    UserName: string;
    /**
      * 三方账号的绑定情况。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ThirdPartyAccounts: Array<ThirdPartyAccountInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 应用信息列表。
 */
export interface ApplicationAuthorizationInfo {
    /**
      * 用户在被授权应用下对应的账号列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationAccounts: Array<string>;
    /**
      * 应用ID，是应用的全局唯一标识。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationId: string;
    /**
      * 展示用户所在的用户组、机构节点拥有该应用的访问权限的ID信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InheritedForm: InheritedForm;
    /**
      * 应用名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationName: string;
    /**
      * 应用创建时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreatedDate: string;
}
/**
 * 账号关联的用户信息
 */
export interface LinkUserInfo {
    /**
      * 用户ID，是用户全局唯一标识，长度限制：64个字符。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserId: string;
    /**
      * 用户名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserName: string;
}
/**
 * ListUserGroups返回参数结构体
 */
export interface ListUserGroupsResponse {
    /**
      * 返回的用户组列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserGroupList: Array<UserGroupInformation>;
    /**
      * 返回的用户组信息总数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ListAccountInAccountGroup请求参数结构体
 */
export interface ListAccountInAccountGroupRequest {
    /**
      * 账号组ID。
      */
    AccountGroupId: string;
    /**
      * 查询条件，支持多搜索条件组合、多数据范围匹配的搜索。
      */
    SearchCondition?: AccountGroupSearchCriteria;
    /**
      * 偏移量，默认为 0。
      */
    Offset?: number;
    /**
      * 返回数量，默认为 20，最大值为 100。
      */
    Limit?: number;
}
/**
 * DeleteUserGroup返回参数结构体
 */
export interface DeleteUserGroupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 用户属性搜索条件。

 */
export interface AuthorizationInfoSearchCriteria {
    /**
      * 名称匹配搜索，当查询类型为用户时，匹配范围包括：用户名称、应用名称；当查询类型为用户组时，匹配范围包括：用户组名称、应用名称；当查询类型为组织机构时，匹配范围包括：组织机构名称、应用名称。
      */
    Keyword?: string;
}
/**
 * ListUserGroupsOfUser返回参数结构体
 */
export interface ListUserGroupsOfUserResponse {
    /**
      * 用户所属的用户组ID列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserGroupIds: Array<string>;
    /**
      * 用户ID，是用户的全局唯一标识。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserId: string;
    /**
      * 用户所属的用户组信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserGroupInfoList: Array<UserGroupInfo>;
    /**
      * 返回的用户组信息总数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateAccountGroup返回参数结构体
 */
export interface CreateAccountGroupResponse {
    /**
      * 账号组ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AccountGroupId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeUserResourcesAuthorization请求参数结构体
 */
export interface DescribeUserResourcesAuthorizationRequest {
    /**
      * 应用ID。
      */
    ApplicationId: string;
    /**
      * 用户ID。UserName 和 UserId 需至少一个不为空；都不为空时优先使用 UserName。
      */
    UserId?: string;
    /**
      * 用户名。UserName 和 UserId 需至少一个不为空；都不为空时优先使用 UserName。
      */
    UserName?: string;
    /**
      * 查询范围是否包括用户关联的用户组、组织机构的应用访问权限。默认为不查询 ，传false表示不查询该范围，传true查询该范围。
      */
    IncludeInheritedAuthorizations?: boolean;
}
/**
 * ListUsers请求参数结构体
 */
export interface ListUsersRequest {
    /**
      * 用户属性搜索条件，可查询条件包括：用户名、手机号码，邮箱、用户锁定状态、用户冻结状态、创建时间、上次修改时间，支持多种属性组合作为查询条件。同时支持查询信息内容全匹配、部分匹配、范围匹配等多种查询方式，具体查询方式为：双引号（“”）表示全匹配、以星号（*）结尾表示字段部分匹配、中括号以逗号分隔（[Min，Max]）表示闭区间查询、大括号以逗号分隔（{Min，Max}）表示开区间查询，中括号与大括号可以配合使用（例如：{Min，Max]表示最小值开区间，最大值闭区间查询）。范围匹配支持使用星号（例如{20,*]表示查询范围为大于20的所有数据）。范围查询同时支持时间段查询，支持的属性包括创建时间 （CreationTime）、上次修改时间（LastUpdateTime），查询的时间格式遵循 ISO 8601 标准，例如：2021-01-13T09:44:07.182+0000。
      */
    SearchCondition?: UserSearchCriteria;
    /**
      * 指定期望返回的用户属性，默认返回所有用户内置属性。内置用户属性包括：用户UUID（UserId）、用户昵称（DisplayName）、用户名字（UserName）、手机号（Phone）、邮箱（Email）、用户状态（Status）、用户组（SubjectGroups）机构路径（OrgPath）、备注（Description）、创建时间 （CreationTime）、上次修改时间（LastUpdateTime）、上次登录时间（LastLoginTime）。
      */
    ExpectedFields?: Array<string>;
    /**
      * 排序条件集合。可排序的属性支持：用户名字（UserName）、用户昵称（DisplayName）、手机号（Phone）、邮箱（Email）、用户状态（Status）、创建时间 （CreationTime）、上次修改时间（LastUpdateTime）、上次登录时间（LastLoginTime）。如果不指定，则默认按照用户昵称（DisplayName）正向排序。
      */
    Sort?: SortCondition;
    /**
      * 分页偏移量，默认为0。Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询，即只返回最多1000个用户。
      */
    Offset?: number;
    /**
      * 分页读取数量，默认为50，最大值为100。 Offset 和 Limit 两个字段需配合使用，即其中一个指定了，另一个必须指定。 如果不指定以上参数，则表示不进行分页查询，即只返回最多1000个用户。
      */
    Limit?: number;
    /**
      * 是否查看搜索结果的总数，默认该选项为false不查看。
      */
    IncludeTotal?: boolean;
}
/**
 * DeleteUserGroup请求参数结构体
 */
export interface DeleteUserGroupRequest {
    /**
      * 用户组ID，是用户组的全局唯一标识。
      */
    UserGroupId: string;
}
/**
 * 应用属性搜索条件。
 */
export interface ApplicationInfoSearchCriteria {
    /**
      * 应用匹配搜索关键字，匹配范围包括：应用名称、应用ID。
      */
    Keyword?: string;
    /**
      * 应用类型。ApplicationType的取值范围有：OAUTH2、JWT、CAS、SAML2、FORM、OIDC、APIGW。
      */
    ApplicationType?: string;
}
/**
 * ListApplications返回参数结构体
 */
export interface ListApplicationsResponse {
    /**
      * 返回的应用信息总数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 返回的应用信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationInfoList: Array<ApplicationInformation>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AddAccountToAccountGroup请求参数结构体
 */
export interface AddAccountToAccountGroupRequest {
    /**
      * 账号组ID
      */
    AccountGroupId: string;
    /**
      * 加入账号组的账号ID列表。
      */
    AccountIds?: Array<string>;
}
