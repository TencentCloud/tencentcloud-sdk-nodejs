/**
 * UpdateUser请求参数结构体
 */
export interface UpdateUserRequest {
    /**
     * 用户ID
     */
    UserId: string;
    /**
     * 用户目录ID
     */
    UserStoreId: string;
    /**
     * 用户名称
     */
    UserName?: string;
    /**
     * 手机号码
     */
    PhoneNumber?: string;
    /**
     * 邮箱
     */
    Email?: string;
    /**
     * 昵称
     */
    Nickname?: string;
    /**
     * 地址
     */
    Address?: string;
    /**
     * 用户组
     */
    UserGroup?: Array<string>;
    /**
     * 生日
     */
    Birthdate?: number;
    /**
     * 自定义属性
     */
    CustomizationAttributes?: Array<MemberMap>;
    /**
     * 索引字段1
     */
    IndexedAttribute1?: string;
    /**
     * 索引字段2
     */
    IndexedAttribute2?: string;
    /**
     * 索引字段3
     */
    IndexedAttribute3?: string;
    /**
     * 索引字段4
     */
    IndexedAttribute4?: string;
    /**
     * 索引字段5
     */
    IndexedAttribute5?: string;
}
/**
 * DescribeUserById请求参数结构体
 */
export interface DescribeUserByIdRequest {
    /**
     * 用户目录ID
     */
    UserStoreId: string;
    /**
     * 用户ID
     */
    UserId: string;
    /**
     * 返回信息是否为原文
  
  <li> **false** </li>	默认，返回信息为脱敏信息
  <li> **true** </li>	返回用户信息原文
     */
    Original?: boolean;
}
/**
 * ListUser请求参数结构体
 */
export interface ListUserRequest {
    /**
     * 用户目录ID
     */
    UserStoreId: string;
    /**
     * 分页数据
     */
    Pageable: Pageable;
    /**
     * Key可选值为condition、userGroupId
  
  <li> **condition** </li>	Values = 查询条件，用户ID，用户名称，手机或邮箱
  <li> **userGroupId** </li>	Values = 用户组ID
     */
    Filters?: Array<Filter>;
    /**
     * 返回信息是否为原文
     */
    Original?: boolean;
}
/**
 * ResetPassword请求参数结构体
 */
export interface ResetPasswordRequest {
    /**
     * 用户ID
     */
    UserId: string;
    /**
     * 用户目录ID
     */
    UserStoreId: string;
}
/**
 * 失败详情
 */
export interface ErrorDetails {
    /**
     * 用户信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserId?: string;
    /**
     * 失败原因
     */
    Error?: string;
}
/**
 * ListJobs请求参数结构体
 */
export interface ListJobsRequest {
    /**
     * 用户目录ID
     */
    UserStoreId: string;
    /**
     * 任务ID列表，为空时返回全部任务
     */
    JobIds?: Array<string>;
}
/**
 * DescribeUser请求参数结构体
 */
export interface DescribeUserRequest {
    /**
     * 用户目录ID
     */
    UserStoreId: string;
    /**
     * 分页数据
     */
    Pageable: Pageable;
    /**
     * 查询条件，根据propertycode和propertykey
     */
    Filters?: Array<QueryUserFilter>;
    /**
     * 是否返回明文
     */
    Original?: boolean;
    /**
     * 排序设置
     */
    Sort?: Sort;
}
/**
 * 用户组
 */
export interface UserGroup {
    /**
     * 用户组ID
     */
    UserGroupId?: string;
    /**
     * 用户组名称
     */
    DisplayName?: string;
    /**
     * 用户组描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 用户目录ID
     */
    UserStoreId?: string;
    /**
     * 租户ID
     */
    TenantId?: string;
    /**
     * 创建时间
     */
    CreatedDate?: number;
    /**
     * 最近更新时间
     */
    LastModifyDate?: number;
}
/**
 * 用户池
 */
export interface UserStore {
    /**
     * 租户ID
     */
    TenantId?: string;
    /**
     * 用户池logo
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserStoreLogo?: string;
    /**
     * 用户池描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserStoreDesc?: string;
    /**
     * 用户池名称
     */
    UserStoreName?: string;
    /**
     * 用户数量
     */
    UserNum?: number;
    /**
     * 用户池ID
     */
    UserStoreId?: string;
    /**
     * 应用数量
     */
    AppNum?: number;
    /**
     * 上次切换的用户池
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastStatus?: boolean;
    /**
     * 默认用户池
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefaultStatus?: boolean;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateDate?: number;
    /**
     * 上次切换时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastStatusTime?: number;
    /**
     * 用户目录域名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserStoreProtocolHost?: string;
}
/**
 * DeleteUsers请求参数结构体
 */
export interface DeleteUsersRequest {
    /**
     * 用户目录ID
     */
    UserStoreId: string;
    /**
     * 用户ID数组
     */
    UserIds: Array<string>;
}
/**
 * 导入用户信息
1、UserName，PhoneNumber ，Email ，WechatOpenId ，WechatUnionId ，AlipayUserId ，QqOpenId ，QqUnionId ，WeComUserId 九个属性中，导入时必须包含其中一个属性并遵守初始化自定义属性的正则表达式规则。UserName，PhoneNumber，Email的正则表达式在控制台的自定义属性中可以查询到。
2、对于密码的导入，导入的密码支持明文导入，MD5密文导入，SHA1密文导入，BCRYPT密文导入 ，这个需要在PasswordEncryptTypeEnum 字段中指定。
3、IdentityVerified，IdentityVerificationMethod 支持导入，
IdentityVerified 为true，IdentityVerificationMethod必传；
IdentityVerificationMethod 为nameAndIdCard，Name,ResidentIdentityCard必传
IdentityVerificationMethod 为nameIdCardAndPhone，Name,PhoneNumber,ResidentIdentityCard必传;
 */
export interface ImportUser {
    /**
     * 用户名
     */
    UserName?: string;
    /**
     * 手机号
     */
    PhoneNumber?: string;
    /**
     * 邮箱
     */
    Email?: string;
    /**
     * 身份证号
     */
    ResidentIdentityCard?: string;
    /**
     * 昵称
     */
    Nickname?: string;
    /**
     * 地址
     */
    Address?: string;
    /**
     * 用户组ID
     */
    UserGroup?: Array<string>;
    /**
     * QQ qqOpenId
     */
    QqOpenId?: string;
    /**
     * QQ qqUnionId
     */
    QqUnionId?: string;
    /**
     * 微信wechatOpenId
     */
    WechatOpenId?: string;
    /**
     * 微信wechatUnionId
     */
    WechatUnionId?: string;
    /**
     * 支付宝alipayUserId
     */
    AlipayUserId?: string;
    /**
     * 企业微信weComUserId
     */
    WeComUserId?: string;
    /**
     * 描述
     */
    Description?: string;
    /**
     * 生日
     */
    Birthdate?: string;
    /**
     * 姓名
     */
    Name?: string;
    /**
     * 坐标
     */
    Locale?: string;
    /**
     * 性别（MALE;FEMALE;UNKNOWN）
     */
    Gender?: string;
    /**
     * 实名核验方式
     */
    IdentityVerificationMethod?: string;
    /**
     * 是否已实名核验
     */
    IdentityVerified?: boolean;
    /**
     * 工作
     */
    Job?: string;
    /**
     * 国家
     */
    Nationality?: string;
    /**
     * 时区
     */
    Zone?: string;
    /**
     * 密码密文
     */
    Password?: string;
    /**
     * 自定义属性
     */
    CustomizationAttributes?: Array<MemberMap>;
    /**
     * 密码盐
     */
    Salt?: Salt;
    /**
     * 密码加密方式（SHA1;BCRYPT）
     */
    PasswordEncryptTypeEnum?: string;
    /**
     * 索引字段1
     */
    IndexedAttribute1?: string;
    /**
     * 索引字段2
     */
    IndexedAttribute2?: string;
    /**
     * 索引字段3
     */
    IndexedAttribute3?: string;
    /**
     * 索引字段4
     */
    IndexedAttribute4?: string;
    /**
     * 索引字段5
     */
    IndexedAttribute5?: string;
}
/**
 * UpdateUserStatus返回参数结构体
 */
export interface UpdateUserStatusResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 失败的用户
 */
export interface FailedUsers {
    /**
     * 失败用户标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FailedUserIdentification?: string;
    /**
     * 导入的用户失败原因
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FailedReason?: string;
}
/**
 * ListUserByProperty请求参数结构体
 */
export interface ListUserByPropertyRequest {
    /**
     * 用户目录ID
     */
    UserStoreId: string;
    /**
     * 查询的属性
  
  <li> **phoneNumber** </li>	  手机号码
  <li> **email** </li>  邮箱
     */
    PropertyCode: string;
    /**
     * 属性值
     */
    PropertyValue: string;
    /**
     * 返回信息是否为原文
     */
    Original?: boolean;
}
/**
 * CreateUser返回参数结构体
 */
export interface CreateUserResponse {
    /**
     * 创建的用户信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    User?: User;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 分页对象
 */
export interface Pageable {
    /**
     * 每页数量
     */
    PageSize: number;
    /**
     * 当前页码
     */
    PageNumber: number;
}
/**
 * 查询条件
 */
export interface Filter {
    /**
     * key值
     */
    Key?: string;
    /**
     * value值
     */
    Values?: Array<string>;
    /**
     * 逻辑值
     */
    Logic?: boolean;
}
/**
 * UpdateUserGroup请求参数结构体
 */
export interface UpdateUserGroupRequest {
    /**
     * 用户组ID
     */
    UserGroupId: string;
    /**
     * 用户组名称
     */
    DisplayName: string;
    /**
     * 用户目录ID
     */
    UserStoreId: string;
    /**
     * 用户组描述
     */
    Description?: string;
}
/**
 * ResetPassword返回参数结构体
 */
export interface ResetPasswordResponse {
    /**
     * 重置后的用户密码
     */
    Password?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListUserGroups请求参数结构体
 */
export interface ListUserGroupsRequest {
    /**
     * 用户目录ID
     */
    UserStoreId: string;
    /**
     * 分页数据
     */
    Pageable: Pageable;
    /**
     * Key可选值为condition
  
  <li> **condition** </li>	Values = 查询条件，用户组ID或用户组名称
     */
    Filters?: Array<Filter>;
}
/**
 * 密码盐
 */
export interface Salt {
    /**
     * 盐值
     */
    SaltValue?: string;
    /**
     * 盐值位置
     */
    SaltLocation?: SaltLocation;
}
/**
 * ListUserByProperty返回参数结构体
 */
export interface ListUserByPropertyResponse {
    /**
     * 用户列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Users?: Array<User>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListUserStore请求参数结构体
 */
export declare type ListUserStoreRequest = null;
/**
 * CreateUserGroup返回参数结构体
 */
export interface CreateUserGroupResponse {
    /**
     * 用户组ID
     */
    UserGroupId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateUserStore请求参数结构体
 */
export interface CreateUserStoreRequest {
    /**
     * 用户池名字
     */
    UserPoolName: string;
    /**
     * 用户池描述
     */
    UserPoolDesc?: string;
    /**
     * 用户池logo
     */
    UserPoolLogo?: string;
}
/**
 * DescribeUserById返回参数结构体
 */
export interface DescribeUserByIdResponse {
    /**
     * 用户信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    User?: User;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteUserStore返回参数结构体
 */
export interface DeleteUserStoreResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 任务详情
 */
export interface Job {
    /**
     * 任务ID
     */
    Id?: string;
    /**
     * 任务状态
  
  <li> **PENDING** </li>  待执行
  <li> **PROCESSING** </li>  执行中
  <li> **COMPLETED** </li>  完成
  <li> **FAILED** </li>  失败
     */
    Status?: string;
    /**
     * 任务类型
  
  <li> **IMPORT_USER** </li>  用户导入
  <li> **EXPORT_USER** </li>  用户导出
     */
    Type?: string;
    /**
     * 任务创建时间
     */
    CreatedDate?: number;
    /**
     * 任务的数据类型
  
  <li> **NDJSON** </li>  New-line Delimited JSON
  <li> **CSV** </li>  Comma-Separated Values
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Format?: string;
    /**
     * 任务结果下载地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Location?: string;
    /**
     * 失败详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorDetails?: Array<ErrorDetails>;
    /**
     * 失败的用户
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FailedUsers?: Array<FailedUsers>;
}
/**
 * CreateFileExportUserJob请求参数结构体
 */
export interface CreateFileExportUserJobRequest {
    /**
     * 用户目录ID
     */
    UserStoreId: string;
    /**
     * 导出的数据类型
  
  <li> **NDJSON** </li>  New-line Delimited JSON
  <li> **CSV** </li>  Comma-Separated Values
     */
    Format?: string;
    /**
     * Key可选值为condition、userGroupId
  
  <li> **condition** </li>	Values = 查询条件，用户ID，用户名称，手机或邮箱
  <li> **userGroupId** </li>	Values = 用户组ID
     */
    Filters?: Array<Filter>;
    /**
     * 导出用户包含的属性和映射名称，为空时包含所有的属性
     */
    ExportPropertyMaps?: Array<ExportPropertyMap>;
}
/**
 * DeleteUserGroups请求参数结构体
 */
export interface DeleteUserGroupsRequest {
    /**
     * 用户组ID数组
     */
    UserGroupIds: Array<string>;
    /**
     * 用户目录ID
     */
    UserStoreId: string;
}
/**
 * 用户信息
 */
export interface User {
    /**
     * 用户ID
     */
    UserId?: string;
    /**
     * 用户名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserName?: string;
    /**
     * 手机号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PhoneNumber?: string;
    /**
     * 邮箱
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Email?: string;
    /**
     * 上次登录时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastSignOn?: number;
    /**
     * 创建时间
     */
    CreatedDate?: number;
    /**
     * 状态
     */
    Status?: string;
    /**
     * 用户来源
     */
    UserDataSourceEnum?: string;
    /**
     * 昵称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Nickname?: string;
    /**
     * 地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Address?: string;
    /**
     * 生日
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Birthdate?: number;
    /**
     * 用户组ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserGroups?: Array<string>;
    /**
     * 上次修改时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastModifiedDate?: number;
    /**
     * 自定义属性
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CustomAttributes?: Array<MemberMap>;
    /**
     * 身份证号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResidentIdentityCard?: string;
    /**
     * QQ的OpenId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QqOpenId?: string;
    /**
     * QQ的UnionId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QqUnionId?: string;
    /**
     * 微信的WechatOpenId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WechatOpenId?: string;
    /**
     * 微信的WechatUnionId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WechatUnionId?: string;
    /**
     * 支付宝的AlipayUserId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlipayUserId?: string;
    /**
     * 企业微信的WeComUserId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WeComUserId?: string;
    /**
     * 描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 姓名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 坐标
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Locale?: string;
    /**
     * 性别
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Gender?: string;
    /**
     * 实名核验方式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IdentityVerificationMethod?: string;
    /**
     * 是否已经实名核验
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IdentityVerified?: boolean;
    /**
     * 工作
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Job?: string;
    /**
     * 国家
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Nationality?: string;
    /**
     * 是否主账号（进行过账号融合后，主账号为true，从账号为false）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Primary?: boolean;
    /**
     * 时区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Zone?: string;
    /**
     * 是否已经首次登录
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AlreadyFirstLogin?: boolean;
    /**
     * 租户id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TenantId?: string;
    /**
     * 用户目录id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserStoreId?: string;
    /**
     * 版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Version?: number;
    /**
     * 锁定类型（分为管理员锁定，和登录策略锁定）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LockType?: string;
    /**
     * 锁定时间点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LockTime?: number;
    /**
     * 索引字段1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IndexedAttribute1?: string;
    /**
     * 索引字段2
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IndexedAttribute2?: string;
    /**
     * 索引字段3
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IndexedAttribute3?: string;
    /**
     * 索引字段4
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IndexedAttribute4?: string;
    /**
     * 索引字段5
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IndexedAttribute5?: string;
}
/**
 * 用户组删除时关联的应用信息
 */
export interface AppAssociatedUserGroupIds {
    /**
     * 用户组id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserGroupId?: string;
    /**
     * 应用id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationId?: string;
    /**
     * 应用名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationName?: string;
}
/**
 * 查询用户信息条件
 */
export interface QueryUserFilter {
    /**
     * 属性key
     */
    PropertyKey?: string;
    /**
     * 属性value
     */
    PropertyValue?: string;
    /**
     * 逻辑值，等于true，不等于false
     */
    Logic?: boolean;
    /**
     * 操作逻辑符（支持> < = >= <=  != between）
     */
    OperateLogic?: string;
}
/**
 * 删除用户组信息时返回的详情
 */
export interface UserGroupDeleteResp {
    /**
     * 错误详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMessage?: string;
    /**
     * 用户组关联的应用信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppAssociatedUserGroupIds?: Array<AppAssociatedUserGroupIds>;
}
/**
 * 查询用户排序
 */
export interface Sort {
    /**
     * 排序字段的key，参考自定义属性
     */
    PropertyKey?: string;
    /**
     * 升序或者降序，ASC/DESC
     */
    Order?: string;
}
/**
 * DeleteUserGroups返回参数结构体
 */
export interface DeleteUserGroupsResponse {
    /**
     * 删除的用户组关联的应用信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserGroupDeletedInfo?: UserGroupDeleteResp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListUserGroups返回参数结构体
 */
export interface ListUserGroupsResponse {
    /**
     * 用户组列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: Array<UserGroup>;
    /**
     * 总条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
    /**
     * 分页
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Pageable?: Pageable;
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
     * 更新之后的用户信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    User?: User;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SetPassword请求参数结构体
 */
export interface SetPasswordRequest {
    /**
     * 用户目录ID
     */
    UserStoreId: string;
    /**
     * 用户ID
     */
    UserId: string;
    /**
     * 密码
     */
    Password: string;
}
/**
 * 盐位
 */
export interface SaltLocation {
    /**
     * 密码加盐的类型（HEAD，TAIL，OTHER）
     */
    SaltLocationTypeEnum?: string;
    /**
     * 加盐规则
     */
    SaltLocationRule?: SaltLocationRule;
}
/**
 * CreateUserGroup请求参数结构体
 */
export interface CreateUserGroupRequest {
    /**
     * 用户组名称
     */
    DisplayName: string;
    /**
     * 用户目录ID
     */
    UserStoreId: string;
    /**
     * 用户组描述
     */
    Description?: string;
}
/**
 * UpdateUserStatus请求参数结构体
 */
export interface UpdateUserStatusRequest {
    /**
     * 用户目录ID
     */
    UserStoreId: string;
    /**
     * 用户ID
     */
    UserId: string;
    /**
     * 用户状态
  
  <li> **NORMAL** </li>	  正常
  <li> **LOCK** </li>  锁定
  <li> **FREEZE** </li>	  冻结
     */
    Status: string;
}
/**
 * ListJobs返回参数结构体
 */
export interface ListJobsResponse {
    /**
     * 任务列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobSet?: Array<Job>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 导出属性映射
 */
export interface ExportPropertyMap {
    /**
     * 用户属性code
     */
    UserPropertyCode: string;
    /**
     * 用户属性映射名称
     */
    ColumnName: string;
}
/**
 * UpdateUserStore返回参数结构体
 */
export interface UpdateUserStoreResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * LinkAccount返回参数结构体
 */
export interface LinkAccountResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateUser请求参数结构体
 */
export interface CreateUserRequest {
    /**
     * 用户目录ID
     */
    UserStoreId: string;
    /**
     * 手机号码
     */
    PhoneNumber: string;
    /**
     * 邮箱
     */
    Email: string;
    /**
     * 密码
     */
    Password: string;
    /**
     * 用户名
     */
    UserName: string;
    /**
     * 昵称
     */
    Nickname?: string;
    /**
     * 地址
     */
    Address?: string;
    /**
     * 用户组ID
     */
    UserGroup?: Array<string>;
    /**
     * 生日
     */
    Birthdate?: number;
    /**
     * 自定义属性
     */
    CustomizationAttributes?: Array<MemberMap>;
    /**
     * 索引字段1
     */
    IndexedAttribute1?: string;
    /**
     * 索引字段2
     */
    IndexedAttribute2?: string;
    /**
     * 索引字段3
     */
    IndexedAttribute3?: string;
    /**
     * 索引字段4
     */
    IndexedAttribute4?: string;
    /**
     * 索引字段5
     */
    IndexedAttribute5?: string;
}
/**
 * DeleteUserStore请求参数结构体
 */
export interface DeleteUserStoreRequest {
    /**
     * 用户池ID
     */
    UserPoolId: string;
}
/**
 * DeleteUsers返回参数结构体
 */
export interface DeleteUsersResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateApiImportUserJob请求参数结构体
 */
export interface CreateApiImportUserJobRequest {
    /**
     * 用户目录ID
     */
    UserStoreId: string;
    /**
     * 导入的用户数据
     */
    DataFlowUserCreateList: Array<ImportUser>;
}
/**
 * CreateFileExportUserJob返回参数结构体
 */
export interface CreateFileExportUserJobResponse {
    /**
     * 数据流任务
     */
    Job?: Job;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateApiImportUserJob返回参数结构体
 */
export interface CreateApiImportUserJobResponse {
    /**
     * 数据流任务
     */
    Job?: Job;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * LinkAccount请求参数结构体
 */
export interface LinkAccountRequest {
    /**
     * 用户目录ID
     */
    UserStoreId: string;
    /**
     * 主用户ID
     */
    PrimaryUserId: string;
    /**
     * 从用户ID
     */
    SecondaryUserId: string;
    /**
     * 融合属性
  
  <li> **PHONENUMBER** </li>	  手机号码
  <li> **EMAIL** </li>  邮箱
     */
    UserLinkedOnAttribute: string;
}
/**
 * UpdateUserStore请求参数结构体
 */
export interface UpdateUserStoreRequest {
    /**
     * 用户池ID
     */
    UserPoolId: string;
    /**
     * 用户池名字
     */
    UserPoolName?: string;
    /**
     * 用户池描述
     */
    UserPoolDesc?: string;
    /**
     * 用户池logo
     */
    UserPoolLogo?: string;
}
/**
 * ListLogMessageByCondition请求参数结构体
 */
export interface ListLogMessageByConditionRequest {
    /**
     * 用户池ID
     */
    UserStoreId: string;
    /**
     * 分页数据
     */
    Pageable: Pageable;
    /**
     * 开始时间，时间戳精确到毫秒
     */
    StartTime: number;
    /**
     * Key可选值为events
  
  <li> **events** </li>	Values为["SIGNUP", "USER_UPDATE", "USER_DELETE", "USER_CREATE", "ACCOUNT_LINKING"] 中的一个或多个
     */
    Filters?: Array<Filter>;
}
/**
 * UpdateUserGroup返回参数结构体
 */
export interface UpdateUserGroupResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 盐位规则
 */
export interface SaltLocationRule {
    /**
     * 表达式
     */
    Regex?: string;
}
/**
 * Map数据类型
 */
export interface MemberMap {
    /**
     * 健
     */
    Name: string;
    /**
     * 值
     */
    Value: string;
    /**
     * 类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
}
/**
 * SetPassword返回参数结构体
 */
export interface SetPasswordResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateUserStore返回参数结构体
 */
export interface CreateUserStoreResponse {
    /**
     * 用户目录ID
     */
    UserStoreId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListUserStore返回参数结构体
 */
export interface ListUserStoreResponse {
    /**
     * 用户目录列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserStoreSet?: Array<UserStore>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeUser返回参数结构体
 */
export interface DescribeUserResponse {
    /**
     * 总条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
    /**
     * 分页对象
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Pageable?: Pageable;
    /**
     * 用户列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: Array<User>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListUser返回参数结构体
 */
export interface ListUserResponse {
    /**
     * 总条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
    /**
     * 分页对象
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Pageable?: Pageable;
    /**
     * 用户列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: Array<User>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 日志详情
 */
export interface LogMessage {
    /**
     * 日志标识
     */
    LogId?: string;
    /**
     * 租户ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TenantId?: string;
    /**
     * 用户池ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserStoreId?: string;
    /**
     * 事件编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventCode?: string;
    /**
     * 事件发生时间戳，单位：毫秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventDate?: number;
    /**
     * 描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 事件参与者
  
  <li> **TENANT** </li>  租户
  <li> **USER** </li>  用户
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Participant?: string;
    /**
     * 应用clientId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationClientId?: string;
    /**
     * 应用名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationName?: string;
    /**
     * 认证源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AuthSourceId?: string;
    /**
     * 认证源名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AuthSourceName?: string;
    /**
     * 认证源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AuthSourceType?: string;
    /**
     * 认证源类别
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AuthSourceCategory?: string;
    /**
     * IP地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Ip?: string;
    /**
     * 用户代理
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserAgent?: string;
    /**
     * 用户ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserId?: string;
    /**
     * 详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Detail?: string;
    /**
     * 日志结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActionResult?: string;
}
/**
 * ListLogMessageByCondition返回参数结构体
 */
export interface ListLogMessageByConditionResponse {
    /**
     * 总条数
     */
    Total?: number;
    /**
     * 分页对象
     */
    Pageable?: Pageable;
    /**
     * 日志列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: Array<LogMessage>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
