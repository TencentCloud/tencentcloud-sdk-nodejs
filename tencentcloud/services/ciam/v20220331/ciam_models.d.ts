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
 * UpdateUserStatus返回参数结构体
 */
export interface UpdateUserStatusResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * CreateUser返回参数结构体
 */
export interface CreateUserResponse {
    /**
      * 创建的用户信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    User: User;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SetPassword返回参数结构体
 */
export interface SetPasswordResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ListUserByProperty返回参数结构体
 */
export interface ListUserByPropertyResponse {
    /**
      * 用户列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Users: Array<User>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeUserById返回参数结构体
 */
export interface DescribeUserByIdResponse {
    /**
      * 用户信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    User: User;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteUsers返回参数结构体
 */
export interface DeleteUsersResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 用户信息
 */
export interface User {
    /**
      * 用户ID
      */
    UserId: string;
    /**
      * 用户名
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserName: string;
    /**
      * 手机号
注意：此字段可能返回 null，表示取不到有效值。
      */
    PhoneNumber: string;
    /**
      * 邮箱
注意：此字段可能返回 null，表示取不到有效值。
      */
    Email: string;
    /**
      * 上次登录时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastSignOn: number;
    /**
      * 创建时间
      */
    CreatedDate: number;
    /**
      * 状态
      */
    Status: string;
    /**
      * 用户来源
      */
    UserDataSourceEnum: string;
    /**
      * 昵称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Nickname: string;
    /**
      * 地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Address: string;
    /**
      * 生日
注意：此字段可能返回 null，表示取不到有效值。
      */
    Birthdate: number;
    /**
      * 用户组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserGroups: Array<string>;
    /**
      * 上次修改时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastModifiedDate: number;
    /**
      * 自定义属性
注意：此字段可能返回 null，表示取不到有效值。
      */
    CustomAttributes: Array<MemberMap>;
    /**
      * 身份证号
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResidentIdentityCard: string;
    /**
      * QQ的OpenId
注意：此字段可能返回 null，表示取不到有效值。
      */
    QqOpenId: string;
    /**
      * QQ的UnionId
注意：此字段可能返回 null，表示取不到有效值。
      */
    QqUnionId: string;
    /**
      * 微信的WechatOpenId
注意：此字段可能返回 null，表示取不到有效值。
      */
    WechatOpenId: string;
    /**
      * 微信的WechatUnionId
注意：此字段可能返回 null，表示取不到有效值。
      */
    WechatUnionId: string;
    /**
      * 支付宝的AlipayUserId
注意：此字段可能返回 null，表示取不到有效值。
      */
    AlipayUserId: string;
    /**
      * 描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Description: string;
    /**
      * 姓名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    Locale: string;
    /**
      * 性别
注意：此字段可能返回 null，表示取不到有效值。
      */
    Gender: string;
    /**
      * 实名核验方式
注意：此字段可能返回 null，表示取不到有效值。
      */
    IdentityVerificationMethod: string;
    /**
      * 是否已经实名核验
注意：此字段可能返回 null，表示取不到有效值。
      */
    IdentityVerified: boolean;
    /**
      * 工作
注意：此字段可能返回 null，表示取不到有效值。
      */
    Job: string;
    /**
      * 国家
注意：此字段可能返回 null，表示取不到有效值。
      */
    Nationality: string;
    /**
      * 是否主账号（进行过账号融合后，主账号为true，从账号为false）
注意：此字段可能返回 null，表示取不到有效值。
      */
    Primary: boolean;
    /**
      * 时区
注意：此字段可能返回 null，表示取不到有效值。
      */
    Zone: string;
    /**
      * 是否已经首次登录
注意：此字段可能返回 null，表示取不到有效值。
      */
    AlreadyFirstLogin: boolean;
    /**
      * 租户id
注意：此字段可能返回 null，表示取不到有效值。
      */
    TenantId: string;
    /**
      * 用户目录id
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserStoreId: string;
    /**
      * 版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    Version: number;
    /**
      * 锁定类型（分为管理员锁定，和登录策略锁定）
注意：此字段可能返回 null，表示取不到有效值。
      */
    LockType: string;
    /**
      * 锁定时间点
注意：此字段可能返回 null，表示取不到有效值。
      */
    LockTime: number;
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
 * ResetPassword返回参数结构体
 */
export interface ResetPasswordResponse {
    /**
      * 重置后的用户密码
      */
    Password: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * NORMAL（正常）,LOCK（锁定）,FREEZE（冻结）,请传英文大写字母
      */
    Status: string;
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
 * ListUserByProperty请求参数结构体
 */
export interface ListUserByPropertyRequest {
    /**
      * 用户目录ID
      */
    UserStoreId: string;
    /**
      * 查询的属性（支持phoneNumber，email）
      */
    PropertyCode: string;
    /**
      * 属性值
      */
    PropertyValue: string;
}
/**
 * LinkAccount返回参数结构体
 */
export interface LinkAccountResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 融合属性(PHONENUMBER,EMAIL)
      */
    UserLinkedOnAttribute: string;
}
/**
 * ListUser返回参数结构体
 */
export interface ListUserResponse {
    /**
      * 总条数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Total: number;
    /**
      * 分页对象
注意：此字段可能返回 null，表示取不到有效值。
      */
    Pageable: Pageable;
    /**
      * 用户列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Content: Array<User>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    User: User;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
