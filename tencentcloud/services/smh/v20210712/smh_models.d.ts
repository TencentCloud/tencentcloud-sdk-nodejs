/**
 * DescribeUserLifecycle返回参数结构体
 */
export interface DescribeUserLifecycleResponse {
    /**
     * 用户 ID。
     */
    UserId?: string;
    /**
     * 设置的隔离时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsolateTime?: string;
    /**
     * 设置的销毁时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DestroyTime?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyLibrary返回参数结构体
 */
export interface ModifyLibraryResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeLibraries返回参数结构体
 */
export interface DescribeLibrariesResponse {
    /**
     * 媒体库列表
     */
    List?: Array<Library>;
    /**
     * 总数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SendSmsCode返回参数结构体
 */
export interface SendSmsCodeResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 官方云盘实例信息
 */
export interface Instance {
    /**
     * 实例 ID
     */
    InstanceId?: string;
    /**
     * 专属域名。如果实例无专属域名，则该属性为 null。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Domain?: string;
    /**
     * 生效时间
     */
    EffectiveTime?: string;
    /**
     * 过期时间。如果为按量计费或永久有效实例，该属性为 null。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExpireTime?: string;
    /**
     * 用户数量。如果为按量计费或不限制用户数量实例，该属性为 null。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserLimit?: number;
    /**
     * 存储容量，单位为 Bytes，由于数字类型精度限制，该字段为 String 类型。如果为按量计费或不限制存储容量实例，该属性为 null。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StorageLimit?: string;
    /**
     * 存储容量，单位为 GB。如果为按量计费或不限制存储容量实例，该属性为 null。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StorageLimitGB?: number;
    /**
     * 是否过期隔离
     */
    Isolated?: boolean;
    /**
     * 续费标识。0：手动续费；1：自动续费；2：到期不续。
     */
    AutoRenew?: number;
    /**
     * 超级管理员账号，如果未选择查询实例绑定的超级管理员账号或当前实例未绑定超级管理员账号，则该属性为 null。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SuperAdminAccount?: string;
    /**
     * 自选桶模式下，展示存储桶使用
     */
    Bucket?: string;
    /**
     * 自选桶模式下，展示日志桶使用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LogBucket?: string;
}
/**
 * DeleteUser请求参数结构体
 */
export interface DeleteUserRequest {
    /**
     * 媒体库 ID。
     */
    LibraryId: string;
    /**
     * 用于唯一查找用户的过滤器数组，数组之间为 **或** 的关系，即满足任意一个过滤器的用户，都将被删除，单次传入的过滤器最多为 100 个。
     */
    Filters: Array<UserFilter>;
}
/**
 * 流量资源包信息
 */
export interface TrafficPackage {
    /**
     * 流量资源包所抵扣的实例 ID
     */
    InstanceId?: string;
    /**
     * 专属域名。如果实例无专属域名，则该属性为 null。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Domain?: string;
    /**
     * 流量资源包来源类型，0 为付费购买，1 为赠送。
     */
    Type?: number;
    /**
     * 总流量，单位为 Bytes，由于数字类型精度限制，该字段为 String 类型。
     */
    Size?: string;
    /**
     * 总流量，单位为 GB
     */
    SizeGB?: number;
    /**
     * 剩余流量，单位为 Bytes，由于数字类型精度限制，该字段为 String 类型。
     */
    Remain?: string;
    /**
     * 已使用流量，单位为 Bytes，由于数字类型精度限制，该字段为 String 类型。
     */
    Used?: string;
    /**
     * 已使用百分比，由于数字类型精度限制，该字段为 String 类型。
     */
    UsedPercentage?: string;
    /**
     * 生效时间，即流量资源包的订购时间
     */
    EffectiveTime?: string;
    /**
     * 过期时间，即所抵扣的实例的过期时间。如果流量资源包所抵扣的实例为按量计费或永久有效实例，该属性为 null。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExpireTime?: string;
}
/**
 * DeleteLibrary请求参数结构体
 */
export interface DeleteLibraryRequest {
    /**
     * 媒体库 ID
     */
    LibraryId: string;
}
/**
 * DescribeTrafficPackages请求参数结构体
 */
export interface DescribeTrafficPackagesRequest {
    /**
     * 按照一个或者多个资源 ID 查询，每次请求的上限为 100 个。
     */
    ResourceIds?: Array<string>;
    /**
     * 页码，整型，配合 PageSize 使用，默认值为 1。
     */
    PageNumber?: number;
    /**
     * 每页数目，整型，配合 PageNumber 使用，默认值为 20，最大值为 100。
     */
    PageSize?: number;
    /**
     * 对指定列进行排序
     */
    OrderBy?: string;
    /**
     * 排序方式
     */
    OrderByType?: string;
    /**
     * 来源类型筛选
     */
    Type?: number;
}
/**
 * DescribeTrafficPackages返回参数结构体
 */
export interface DescribeTrafficPackagesResponse {
    /**
     * 流量包列表
     */
    List?: Array<TrafficPackage>;
    /**
     * 总数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateUser返回参数结构体
 */
export interface CreateUserResponse {
    /**
     * 用户所在的媒体库 ID。
     */
    LibraryId?: string;
    /**
     * 用户 ID。
     */
    UserId?: string;
    /**
     * 用户创建时间。
     */
    CreationTime?: string;
    /**
     * 用户角色.
     */
    Role?: string;
    /**
     * 是否启用。
     */
    Enabled?: boolean;
    /**
     * 手机号国家码，如未指定则为 null。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CountryCode?: string;
    /**
     * 手机号码，如未指定则为 null。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PhoneNumber?: string;
    /**
     * 邮箱，如未指定则为 null。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Email?: string;
    /**
     * 账号，如未指定则为 null。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AccountName?: string;
    /**
     * 第三方账号 ID，用于关联第三方账号体系，如未指定则为 null。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AccountUserId?: string;
    /**
     * 备注。
     */
    Comment?: string;
    /**
     * 昵称。
     */
    Nickname?: string;
    /**
     * 用户头像地址。
     */
    Avatar?: string;
    /**
     * 自定义信息。
     */
    Customize?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeLibrarySecret请求参数结构体
 */
export interface DescribeLibrarySecretRequest {
    /**
     * 媒体库 ID
     */
    LibraryId: string;
}
/**
 * DescribeLibrarySecret返回参数结构体
 */
export interface DescribeLibrarySecretResponse {
    /**
     * 查询的媒体库 ID
     */
    LibraryId: string;
    /**
     * 查询到的媒体库密钥
     */
    LibrarySecret: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SendSmsCode请求参数结构体
 */
export interface SendSmsCodeRequest {
    /**
     * 验证码目的，当前支持换绑超级管理员账号， BindSuperAdmin；体验版企业升级，ChannelUpdateVerify等
     */
    Purpose: string;
    /**
     * 将作为超级管理员账号的手机号码
     */
    PhoneNumber: string;
    /**
     * 官方云盘实例 ID
     */
    InstanceId?: string;
    /**
     * 将作为超级管理员账号的手机号码的国家代码。默认为 +86。
     */
    CountryCode?: string;
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
 * DescribeLibraries请求参数结构体
 */
export interface DescribeLibrariesRequest {
    /**
     * 按照一个或者多个媒体库 ID 查询，每次请求的上限为 100 个。
     */
    LibraryIds?: Array<string>;
    /**
     * 页码，整型，配合 PageSize 使用，默认值为 1。
     */
    PageNumber?: number;
    /**
     * 每页数目，整型，配合 PageNumber 使用，默认值为 20，最大值为 100。
     */
    PageSize?: number;
}
/**
 * 媒体库配置项
 */
export interface LibraryExtension {
    /**
     * true 为文件类型媒体库，可存储任何类型文件；false 为媒体类型媒体库，仅可存储照片和视频类型文件。默认为 false。在媒体库创建后不能修改。
     */
    IsFileLibrary?: boolean;
    /**
     * true 为多租户空间媒体库，可创建多个租户空间；false 为单租户空间媒体库，不能创建租户空间，仅可使用默认的单一租户空间。默认为 false。在媒体库创建后不能修改。
     */
    IsMultiSpace?: boolean;
    /**
     * 保存至 COS 对象存储的文件的存储类型，仅支持 STANDARD、STANDARD_IA、INTELLIGENT_TIERING、MAZ_STANDARD、MAZ_STANDARD_IA 和 MAZ_INTELLIGENT_TIERING，默认为 STANDARD，当使用多 AZ 存储桶时将自动使用 MAZ_ 开头的用于多 AZ 的存储类型，否则自动使用非 MAZ_ 开头的用于非多 AZ 的存储类型。当指定智能分层存储 INTELLIGENT_TIERING 或 MAZ_INTELLIGENT_TIERING 时，需要事先为存储桶开启智能分层存储，否则将返回失败。在媒体库创建后不能修改。
     */
    CosStorageClass?: string;
    /**
     * 是否开启回收站功能。默认为 false。
     */
    UseRecycleBin?: boolean;
    /**
     * 当开启回收站时，自动删除回收站项目的天数，不能超过 1095（3 年），指定为 0 则不自动删除，默认为 0。当未开启回收站时，该属性为 null。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AutoRemoveRecycledDays?: number;
    /**
     * 是否启用文件路径搜索功能。默认为 false。
     */
    EnableSearch?: boolean;
    /**
     * 设置媒体库或租户空间配额且配额小于已使用存储量时，是否拒绝设置请求。默认为 false。
     */
    DenyOnQuotaLessThanUsage?: boolean;
    /**
     * 是否开启历史版本。默认为 false。
     */
    EnableFileHistory?: boolean;
    /**
     * 当开启历史版本时，指定单个文件保留的历史版本的数量上限，不能超过 999，指定为 0 则不限制，默认为 0。当未开启历史版本时，该属性为 null。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileHistoryCount?: number;
    /**
     * 当开启历史版本时，指定历史版本保留的最长天数，不能超过 999，指定为 0 则不限制，默认为 0。当未开启历史版本时，该属性为 null。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileHistoryExpireDay?: number;
    /**
     * 目录或文件名的最长长度，不能超过 255，默认为 255。修改该参数不会影响存量目录或文件名，即如果将该字段的值改小，已经存在的长度超过目标值的目录或文件名不会发生变化。
     */
    MaxDirFileNameLength?: number;
    /**
     * 是否开启公有读，开启后读操作无需使用访问令牌，默认为 false。仅单租户空间媒体库支持该属性，否则该属性为 null。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsPublicRead?: boolean;
    /**
     * 媒体类型媒体库是否开启多相簿，开启后可创建一级目录（即相簿）且媒体文件只能保存在各相簿中，否则不能创建相簿且媒体文件只能保存在根目录。默认为 false。仅单租户空间媒体类型媒体库支持该属性，否则该属性为 null。在媒体库创建后不能修改。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsMultiAlbum?: boolean;
    /**
     * 媒体类型媒体库是否允许上传照片，默认为 true。仅单租户空间媒体类型媒体库支持该属性，否则该属性为 null。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AllowPhoto?: boolean;
    /**
     * 当媒体类型媒体库允许上传照片时，指定允许的扩展名，默认为空数组，此时将根据文件扩展名对应的 MIME 类型自动判断。仅单租户空间媒体类型媒体库支持该属性，否则该属性为 null。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AllowPhotoExtName?: Array<string>;
    /**
     * 媒体类型媒体库是否允许上传视频，默认为 true。仅单租户空间媒体类型媒体库支持该属性，否则该属性为 null。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AllowVideo?: boolean;
    /**
     * 当媒体类型媒体库允许上传视频时，指定允许的扩展名，默认为空数组，此时将根据文件扩展名对应的 MIME 类型自动判断。仅单租户空间媒体类型媒体库支持该属性，否则该属性为 null。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AllowVideoExtName?: Array<string>;
    /**
     * 指定文件类型媒体库允许的文件扩展名，默认为空数组，此时允许上传所有类型文件。仅单租户空间文件类型媒体库支持该属性，否则该属性为 null。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AllowFileExtName?: Array<string>;
    /**
     * 照片上传时是否进行敏感内容鉴定，默认为 false。仅单租户空间媒体库支持该属性，否则该属性为 null。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecognizeSensitiveContent?: boolean;
}
/**
 * ModifyUser返回参数结构体
 */
export interface ModifyUserResponse {
    /**
     * 用户所在的媒体库 ID。
     */
    LibraryId?: string;
    /**
     * 用户 ID。
     */
    UserId?: string;
    /**
     * 用户创建时间。
     */
    CreationTime?: string;
    /**
     * 用户角色.
     */
    Role?: string;
    /**
     * 是否启用。
     */
    Enabled?: boolean;
    /**
     * 手机号国家码，如未指定则为 null。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CountryCode?: string;
    /**
     * 手机号码，如未指定则为 null。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PhoneNumber?: string;
    /**
     * 邮箱，如未指定则为 null。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Email?: string;
    /**
     * 账号，如未指定则为 null。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AccountName?: string;
    /**
     * 第三方账号 ID，用于关联第三方账号体系，如未指定则为 null。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AccountUserId?: string;
    /**
     * 备注。
     */
    Comment?: string;
    /**
     * 昵称。
     */
    Nickname?: string;
    /**
     * 用户头像地址。
     */
    Avatar?: string;
    /**
     * 自定义信息。
     */
    Customize?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * VerifySmsCode返回参数结构体
 */
export interface VerifySmsCodeResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyLibrary请求参数结构体
 */
export interface ModifyLibraryRequest {
    /**
     * 媒体库 ID
     */
    LibraryId: string;
    /**
     * 媒体库名称，最多 50 个字符。如不传则不修改。
     */
    Name?: string;
    /**
     * 备注，最多 250 个字符。如不传则不修改。
     */
    Remark?: string;
    /**
     * 媒体库配置项，部分参数在新建后不可更改，且仅修改传入的参数。如不传该参数则不修改任何配置项。
     */
    LibraryExtension?: LibraryExtension;
}
/**
 * DescribeOfficialOverview请求参数结构体
 */
export declare type DescribeOfficialOverviewRequest = null;
/**
 * DeleteLibrary返回参数结构体
 */
export interface DeleteLibraryResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeOfficialInstances返回参数结构体
 */
export interface DescribeOfficialInstancesResponse {
    /**
     * 实例列表
     */
    List?: Array<Instance>;
    /**
     * 总数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeUserLifecycle请求参数结构体
 */
export interface DescribeUserLifecycleRequest {
    /**
     * 媒体库 ID。
     */
    LibraryId: string;
    /**
     * 用于唯一查找用户的过滤器。
     */
    Filter: UserFilter;
}
/**
 * VerifySmsCode请求参数结构体
 */
export interface VerifySmsCodeRequest {
    /**
     * 验证码目的，当前支持换绑超级管理员账号，BindSuperAdmin；体验版企业升级验证ChannelUpdateVerify，等
     */
    Purpose: string;
    /**
     * 将作为超级管理员账号的手机号码
     */
    PhoneNumber: string;
    /**
     * 短信验证码
     */
    Code: string;
    /**
     * 官方云盘实例 ID
     */
    InstanceId?: string;
    /**
     * 将作为超级管理员账号的手机号码的国家代码。默认为 +86。
     */
    CountryCode?: string;
}
/**
 * DescribeOfficialInstances请求参数结构体
 */
export interface DescribeOfficialInstancesRequest {
    /**
     * 是否查询实例绑定的超级管理员账号，默认值为 false。
     */
    SuperAdminAccount?: boolean;
    /**
     * 按照一个或者多个实例 ID 查询，每次请求的上限为 100 个。
     */
    InstanceIds?: Array<string>;
    /**
     * 页码，整型，配合 PageSize 使用，默认值为 1。
     */
    PageNumber?: number;
    /**
     * 每页数目，整型，配合 PageNumber 使用，默认值为 20，最大值为 100。
     */
    PageSize?: number;
    /**
     * 对指定列进行排序
     */
    OrderBy?: string;
    /**
     * 排序方式
     */
    OrderByType?: string;
    /**
     * 续费管理筛选类型
     */
    AutoRenew?: number;
    /**
     * 超级管理管理员账号是否绑定了手机号
     */
    BindPhone?: boolean;
}
/**
 * CreateUser请求参数结构体
 */
export interface CreateUserRequest {
    /**
     * 媒体库 ID。
     */
    LibraryId: string;
    /**
     * 用户角色，当只支持 user。
     */
    Role: string;
    /**
     * 是否启用。
     */
    Enabled: boolean;
    /**
     * 手机号国家码，不传默认为 null，此时无法使用该登录方式进行登录。
     */
    CountryCode?: string;
    /**
     * 手机号码，不传默认为 null，此时无法使用该登录方式进行登录。如果与同一媒体库内已有手机号重复则报错。CountryCode 和 PhoneNumber 必须同时传入或同时不传入。
     */
    PhoneNumber?: string;
    /**
     * 邮箱，不传默认为 null，此时无法使用该登录方式进行登录。如果与同一媒体库内已有邮箱重复则报错。
     */
    Email?: string;
    /**
     * 账号，不传默认为 null，此时无法使用该登录方式进行登录。如果与同一媒体库内已有账号重复则报错。只能使用大小写字母、数字、中划线、下划线、小数点，长度不超过 50 个字符。
     */
    AccountName?: string;
    /**
     * 密码的 base64 形式，不传默认为 null，此时无法使用该登录方式进行登录。AccountName 和 AccountPassword 必须同时传入或同时不传入。
     */
    AccountPassword?: string;
    /**
     * 第三方账号 ID，用于关联第三方账号体系，不传默认为 null，此时无法使用该登录方式进行登录。如果与同一媒体库内已有第三方账号重复则报错。只能使用大小写字母、数字、中划线、下划线、小数点，长度不超过 200 个字符。
     */
    AccountUserId?: string;
    /**
     * 备注。不超过 255 个字符。
     */
    Comment?: string;
    /**
     * 昵称。不超过 100 个字符。
     */
    Nickname?: string;
    /**
     * 用户头像地址。不超过 255 个字符。
     */
    Avatar?: string;
    /**
     * 自定义信息。不超过 255 个字符。
     */
    Customize?: string;
}
/**
 * CreateUserLifecycle返回参数结构体
 */
export interface CreateUserLifecycleResponse {
    /**
     * 用户 ID。
     */
    UserId?: string;
    /**
     * 设置的隔离时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsolateTime?: string;
    /**
     * 设置的销毁时间。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DestroyTime?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateLibrary返回参数结构体
 */
export interface CreateLibraryResponse {
    /**
     * 媒体库 ID
     */
    LibraryId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 用于唯一查找用户的过滤器。
 */
export interface UserFilter {
    /**
     * 过滤类型，当前支持：UserId、PhoneNumber、Email、AccountName、AccountUserId。
     */
    Key: string;
    /**
     * 过滤值，只支持完全匹配，不支持模糊搜索。针对不同的 Key，Value 的取值如下：
  UserId: user12345678abcde
  PhoneNumber: +86-13800000000（格式为：{CountryCode}-{PhoneNumber}）
  Email: admin@mail.foobar.com
  AccountName: account_name
  AccountUserId: x53mYVqykfPqTCqekbNwwa4aXk4
     */
    Value: string;
}
/**
 * PaaS 服务媒体库信息
 */
export interface Library {
    /**
     * 媒体库 ID
     */
    LibraryId: string;
    /**
     * 媒体库友好名称
     */
    Name: string;
    /**
     * 备注
     */
    Remark: string;
    /**
     * 媒体库绑定的 COS 存储桶
     */
    BucketName: string;
    /**
     * 媒体库绑定的 COS 存储桶所在的地域
     */
    BucketRegion: string;
    /**
     * 媒体库创建时间
     */
    CreationTime: string;
    /**
     * 媒体库配置项
     */
    LibraryExtension: LibraryExtension;
    /**
     * 媒体库用量，单位为 Bytes，由于数字类型精度限制，该字段为 String 类型。
     */
    Size: string;
    /**
     * 媒体库目录数，由于数字类型精度限制，该字段为 String 类型。
     */
    DirNum: string;
    /**
     * 媒体库文件数，由于数字类型精度限制，该字段为 String 类型。
     */
    FileNum: string;
}
/**
 * CreateUserLifecycle请求参数结构体
 */
export interface CreateUserLifecycleRequest {
    /**
     * 媒体库 ID。
     */
    LibraryId: string;
    /**
     * 用于唯一查找用户的过滤器。
     */
    Filter: UserFilter;
    /**
     * 隔离时间，当时间超过该时间点后，指定用户将无法登录，但他的账号信息、文件资源会被保留，可以通过再次调用本接口更新隔离时间，恢复登录。如不指定，则代表不设置隔离时间，且当前用户已经设置的隔离时间会被删除。
     */
    IsolateTime?: string;
    /**
     * 销毁时间，当时间超过该时间点后，指定用户的资源将被销毁且无法通过再次调用此接口更新时间。如果同时指定了 IsolateTime 则不能早于 IsolateTime 指定的时间。如不指定，则代表不设置销毁时间，且当前用户已经设置的销毁时间会被删除。
     */
    DestroyTime?: string;
}
/**
 * ModifyUser请求参数结构体
 */
export interface ModifyUserRequest {
    /**
     * 媒体库 ID。
     */
    LibraryId: string;
    /**
     * 用于唯一查找用户的过滤器。
     */
    Filter: UserFilter;
    /**
     * 用户角色，当只支持 user。
     */
    Role?: string;
    /**
     * 是否启用。
     */
    Enabled?: boolean;
    /**
     * 手机号国家码，不传默认为 null，此时无法使用该登录方式进行登录。
     */
    CountryCode?: string;
    /**
     * 手机号码，不传默认为 null，此时无法使用该登录方式进行登录。如果与同一媒体库内已有手机号重复则报错。CountryCode 和 PhoneNumber 必须同时传入或同时不传入。
     */
    PhoneNumber?: string;
    /**
     * 邮箱，不传默认为 null，此时无法使用该登录方式进行登录。如果与同一媒体库内已有邮箱重复则报错。
     */
    Email?: string;
    /**
     * 账号，不传默认为 null，此时无法使用该登录方式进行登录。如果与同一媒体库内已有账号重复则报错。只能使用大小写字母、数字、中划线、下划线、小数点，长度不超过 50 个字符。
     */
    AccountName?: string;
    /**
     * 密码的 base64 形式，不传默认为 null，此时无法使用该登录方式进行登录。AccountName 和 AccountPassword 必须同时传入或同时不传入。
     */
    AccountPassword?: string;
    /**
     * 第三方账号 ID，用于关联第三方账号体系，不传默认为 null，此时无法使用该登录方式进行登录。如果与同一媒体库内已有第三方账号重复则报错。只能使用大小写字母、数字、中划线、下划线、小数点，长度不超过 200 个字符。
     */
    AccountUserId?: string;
    /**
     * 备注。不超过 255 个字符。
     */
    Comment?: string;
    /**
     * 昵称。不超过 100 个字符。
     */
    Nickname?: string;
    /**
     * 用户头像地址。不超过 255 个字符。
     */
    Avatar?: string;
    /**
     * 自定义信息。不超过 255 个字符。
     */
    Customize?: string;
}
/**
 * CreateLibrary请求参数结构体
 */
export interface CreateLibraryRequest {
    /**
     * 媒体库名称，最多 50 个字符
     */
    Name: string;
    /**
     * 备注，最多 250 个字符
     */
    Remark?: string;
    /**
     * 存储桶全名，新建后不可更改。当前版本不再支持指定存储桶。
     */
    BucketName?: string;
    /**
     * 存储桶所在地域，新建后不可更改。当前版本不再支持指定存储桶所在地域。
     */
    BucketRegion?: string;
    /**
     * 媒体库配置项，部分参数新建后不可更改
     */
    LibraryExtension?: LibraryExtension;
}
/**
 * DescribeOfficialOverview返回参数结构体
 */
export interface DescribeOfficialOverviewResponse {
    /**
     * 云盘实例数量
     */
    Quantity: number;
    /**
     * 已经使用的总存储量，单位为 Bytes，由于数字类型精度限制，该字段为 String 类型。
     */
    Storage: string;
    /**
     * 已经分配和使用的总用户数
     */
    UserCount: number;
    /**
     * 本月外网下行流量，单位为 Bytes，由于数字类型精度限制，该字段为 String 类型。
     */
    InternetTraffic: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
