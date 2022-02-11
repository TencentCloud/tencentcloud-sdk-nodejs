/**
 * DeleteCfsFileSystem返回参数结构体
 */
export interface DeleteCfsFileSystemResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 版本控制-可用区数组
 */
export interface AvailableZone {
    /**
      * 可用区名称
      */
    Zone: string;
    /**
      * 可用区ID
      */
    ZoneId: number;
    /**
      * 可用区中文名称
      */
    ZoneCnName: string;
    /**
      * Type数组
      */
    Types: Array<AvailableType>;
    /**
      * 可用区中英文名称
      */
    ZoneName: string;
}
/**
 * UpdateCfsRule请求参数结构体
 */
export interface UpdateCfsRuleRequest {
    /**
      * 权限组 ID
      */
    PGroupId: string;
    /**
      * 规则 ID
      */
    RuleId: string;
    /**
      * 可以填写单个 IP 或者单个网段，例如 10.1.10.11 或者 10.10.1.0/24。默认来访地址为*表示允许所有。同时需要注意，此处需填写 CVM 的内网 IP。
      */
    AuthClientIp?: string;
    /**
      * 读写权限, 值为RO、RW；其中 RO 为只读，RW 为读写，不填默认为只读
      */
    RWPermission?: string;
    /**
      * 用户权限，值为all_squash、no_all_squash、root_squash、no_root_squash。其中all_squash为所有访问用户都会被映射为匿名用户或用户组；no_all_squash为访问用户会先与本机用户匹配，匹配失败后再映射为匿名用户或用户组；root_squash为将来访的root用户映射为匿名用户或用户组；no_root_squash为来访的root用户保持root帐号权限。不填默认为root_squash。
      */
    UserPermission?: string;
    /**
      * 规则优先级，参数范围1-100。 其中 1 为最高，100为最低
      */
    Priority?: number;
}
/**
 * DescribeCfsFileSystems请求参数结构体
 */
export interface DescribeCfsFileSystemsRequest {
    /**
      * 文件系统 ID
      */
    FileSystemId?: string;
    /**
      * 私有网络（VPC） ID
      */
    VpcId?: string;
    /**
      * 子网 ID
      */
    SubnetId?: string;
}
/**
 * DeleteMountTarget请求参数结构体
 */
export interface DeleteMountTargetRequest {
    /**
      * 文件系统 ID
      */
    FileSystemId: string;
    /**
      * 挂载点 ID
      */
    MountTargetId: string;
}
/**
 * CreateCfsRule请求参数结构体
 */
export interface CreateCfsRuleRequest {
    /**
      * 权限组 ID
      */
    PGroupId: string;
    /**
      * 可以填写单个 IP 或者单个网段，例如 10.1.10.11 或者 10.10.1.0/24。默认来访地址为*表示允许所有。同时需要注意，此处需填写 CVM 的内网 IP。
      */
    AuthClientIp: string;
    /**
      * 规则优先级，参数范围1-100。 其中 1 为最高，100为最低
      */
    Priority: number;
    /**
      * 读写权限, 值为 RO、RW；其中 RO 为只读，RW 为读写，不填默认为只读
      */
    RWPermission?: string;
    /**
      * 用户权限，值为 all_squash、no_all_squash、root_squash、no_root_squash。其中all_squash为所有访问用户都会被映射为匿名用户或用户组；no_all_squash为访问用户会先与本机用户匹配，匹配失败后再映射为匿名用户或用户组；root_squash为将来访的root用户映射为匿名用户或用户组；no_root_squash为来访的root用户保持root帐号权限。不填默认为root_squash。
      */
    UserPermission?: string;
}
/**
 * 文件系统绑定权限组信息
 */
export interface PGroup {
    /**
      * 权限组ID
      */
    PGroupId: string;
    /**
      * 权限组名称
      */
    Name: string;
}
/**
 * DescribeAvailableZoneInfo返回参数结构体
 */
export interface DescribeAvailableZoneInfoResponse {
    /**
      * 各可用区的资源售卖情况以及支持的存储类型、存储协议等信息
      */
    RegionZones?: Array<AvailableRegion>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateCfsFileSystemName返回参数结构体
 */
export interface UpdateCfsFileSystemNameResponse {
    /**
      * 用户自定义文件系统名称
      */
    CreationToken?: string;
    /**
      * 文件系统ID
      */
    FileSystemId?: string;
    /**
      * 用户自定义文件系统名称
      */
    FsName?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateCfsFileSystemName请求参数结构体
 */
export interface UpdateCfsFileSystemNameRequest {
    /**
      * 文件系统 ID
      */
    FileSystemId: string;
    /**
      * 用户自定义文件系统名称
      */
    FsName?: string;
}
/**
 * DescribeCfsPGroups返回参数结构体
 */
export interface DescribeCfsPGroupsResponse {
    /**
      * 权限组信息列表
      */
    PGroupList?: Array<PGroupInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCfsFileSystemClients返回参数结构体
 */
export interface DescribeCfsFileSystemClientsResponse {
    /**
      * 客户端列表
      */
    ClientList?: Array<FileSystemClient>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteMountTarget返回参数结构体
 */
export interface DeleteMountTargetResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeMountTargets返回参数结构体
 */
export interface DescribeMountTargetsResponse {
    /**
      * 挂载点详情
      */
    MountTargets?: Array<MountInfo>;
    /**
      * 挂载点数量
      */
    NumberOfMountTargets?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteCfsRule返回参数结构体
 */
export interface DeleteCfsRuleResponse {
    /**
      * 规则 ID
      */
    RuleId?: string;
    /**
      * 权限组 ID
      */
    PGroupId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteCfsRule请求参数结构体
 */
export interface DeleteCfsRuleRequest {
    /**
      * 权限组 ID
      */
    PGroupId: string;
    /**
      * 规则 ID
      */
    RuleId: string;
}
/**
 * UpdateCfsPGroup请求参数结构体
 */
export interface UpdateCfsPGroupRequest {
    /**
      * 权限组 ID
      */
    PGroupId: string;
    /**
      * 权限组名称，1-64个字符且只能为中文，字母，数字，下划线或横线
      */
    Name?: string;
    /**
      * 权限组描述信息，1-255个字符
      */
    DescInfo?: string;
}
/**
 * 挂载点信息
 */
export interface MountInfo {
    /**
      * 文件系统 ID
      */
    FileSystemId: string;
    /**
      * 挂载点 ID
      */
    MountTargetId: string;
    /**
      * 挂载点 IP
      */
    IpAddress: string;
    /**
      * 挂载根目录
      */
    FSID: string;
    /**
      * 挂载点状态
      */
    LifeCycleState: string;
    /**
      * 网络类型
      */
    NetworkInterface: string;
    /**
      * 私有网络 ID
      */
    VpcId: string;
    /**
      * 私有网络名称
      */
    VpcName: string;
    /**
      * 子网 Id
      */
    SubnetId: string;
    /**
      * 子网名称
      */
    SubnetName: string;
    /**
      * CFS Turbo使用的云联网ID
      */
    CcnID: string;
    /**
      * 云联网中CFS Turbo使用的网段
      */
    CidrBlock: string;
}
/**
 * UpdateCfsRule返回参数结构体
 */
export interface UpdateCfsRuleResponse {
    /**
      * 权限组 ID
      */
    PGroupId?: string;
    /**
      * 规则 ID
      */
    RuleId?: string;
    /**
      * 允许访问的客户端 IP 或者 IP 段
      */
    AuthClientIp?: string;
    /**
      * 读写权限
      */
    RWPermission?: string;
    /**
      * 用户权限
      */
    UserPermission?: string;
    /**
      * 优先级
      */
    Priority?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 文件系统客户端信息
 */
export interface FileSystemClient {
    /**
      * 文件系统IP地址
      */
    CfsVip: string;
    /**
      * 客户端IP地址
      */
    ClientIp: string;
    /**
      * 文件系统所属VPCID
      */
    VpcId: string;
    /**
      * 可用区名称，例如ap-beijing-1，请参考 概览文档中的地域与可用区列表
      */
    Zone: string;
    /**
      * 可用区中文名称
      */
    ZoneName: string;
    /**
      * 该文件系统被挂载到客户端上的路径信息
      */
    MountDirectory: string;
}
/**
 * DescribeCfsFileSystems返回参数结构体
 */
export interface DescribeCfsFileSystemsResponse {
    /**
      * 文件系统信息
      */
    FileSystems: Array<FileSystemInfo>;
    /**
      * 文件系统总数
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCfsFileSystem返回参数结构体
 */
export interface CreateCfsFileSystemResponse {
    /**
      * 文件系统创建时间
      */
    CreationTime: string;
    /**
      * 用户自定义文件系统名称
      */
    CreationToken: string;
    /**
      * 文件系统 ID
      */
    FileSystemId: string;
    /**
      * 文件系统状态，可能出现状态包括：“creating”  创建中, “create_failed” 创建失败, “available” 可用, “unserviced” 不可用, “upgrading” 升级中， “deleting” 删除中。
      */
    LifeCycleState: string;
    /**
      * 文件系统已使用容量大小，单位为 Byte
      */
    SizeByte: number;
    /**
      * 可用区 ID
      */
    ZoneId: number;
    /**
      * 用户自定义文件系统名称
      */
    FsName: string;
    /**
      * 文件系统是否加密
      */
    Encrypted: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 文件系统基本信息
 */
export interface FileSystemInfo {
    /**
      * 创建时间
      */
    CreationTime: string;
    /**
      * 用户自定义名称
      */
    CreationToken: string;
    /**
      * 文件系统 ID
      */
    FileSystemId: string;
    /**
      * 文件系统状态
      */
    LifeCycleState: string;
    /**
      * 文件系统已使用容量
      */
    SizeByte: number;
    /**
      * 文件系统最大空间限制
      */
    SizeLimit: number;
    /**
      * 区域 ID
      */
    ZoneId: number;
    /**
      * 区域名称
      */
    Zone: string;
    /**
      * 文件系统协议类型
      */
    Protocol: string;
    /**
      * 文件系统存储类型
      */
    StorageType: string;
    /**
      * 文件系统绑定的预付费存储包
      */
    StorageResourcePkg: string;
    /**
      * 文件系统绑定的预付费带宽包（暂未支持）
      */
    BandwidthResourcePkg: string;
    /**
      * 文件系统绑定权限组信息
      */
    PGroup: PGroup;
    /**
      * 用户自定义名称
      */
    FsName: string;
    /**
      * 文件系统是否加密
      */
    Encrypted: boolean;
    /**
      * 加密所使用的密钥，可以为密钥的 ID 或者 ARN
      */
    KmsKeyId: string;
    /**
      * 应用ID
      */
    AppId: number;
    /**
      * 文件系统吞吐上限，吞吐上限是根据文件系统当前已使用存储量、绑定的存储资源包以及吞吐资源包一同确定
      */
    BandwidthLimit: number;
    /**
      * 文件系统总容量
      */
    Capacity: number;
    /**
      * 文件系统标签列表
      */
    Tags: Array<TagInfo>;
}
/**
 * Tag信息单元
 */
export interface TagInfo {
    /**
      * 标签键
      */
    TagKey: string;
    /**
      * 标签值
      */
    TagValue: string;
}
/**
 * DescribeCfsPGroups请求参数结构体
 */
export declare type DescribeCfsPGroupsRequest = null;
/**
 * DescribeCfsFileSystemClients请求参数结构体
 */
export interface DescribeCfsFileSystemClientsRequest {
    /**
      * 文件系统 ID。
      */
    FileSystemId: string;
}
/**
 * CreateCfsPGroup请求参数结构体
 */
export interface CreateCfsPGroupRequest {
    /**
      * 权限组名称，1-64个字符且只能为中文，字母，数字，下划线或横线
      */
    Name: string;
    /**
      * 权限组描述信息，1-255个字符
      */
    DescInfo?: string;
}
/**
 * DeleteCfsPGroup返回参数结构体
 */
export interface DeleteCfsPGroupResponse {
    /**
      * 权限组 ID
      */
    PGroupId?: string;
    /**
      * 用户 ID
      */
    AppId?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateCfsFileSystemSizeLimit返回参数结构体
 */
export interface UpdateCfsFileSystemSizeLimitResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAvailableZoneInfo请求参数结构体
 */
export declare type DescribeAvailableZoneInfoRequest = null;
/**
 * 版本控制-区域数组
 */
export interface AvailableRegion {
    /**
      * 区域名称，如“ap-beijing”
      */
    Region: string;
    /**
      * 区域名称，如“bj”
      */
    RegionName: string;
    /**
      * 区域可用情况，当区域内至少有一个可用区处于可售状态时，取值为AVAILABLE，否则为UNAVAILABLE
      */
    RegionStatus: string;
    /**
      * 可用区数组
      */
    Zones: Array<AvailableZone>;
    /**
      * 区域中文名称，如“广州”
      */
    RegionCnName: string;
}
/**
 * CreateCfsFileSystem请求参数结构体
 */
export interface CreateCfsFileSystemRequest {
    /**
      * 可用区名称，例如ap-beijing-1，请参考 [概览](https://cloud.tencent.com/document/product/582/13225) 文档中的地域与可用区列表
      */
    Zone: string;
    /**
      * 网络类型，可选值为 VPC，BASIC，CCN；其中 VPC 为私有网络，BASIC 为基础网络, CCN 为云联网，Turbo系列当前必须选择云联网。目前基础网络已逐渐淘汰，不推荐使用。
      */
    NetInterface: string;
    /**
      * 权限组 ID，通用标准型和性能型必填，turbo系列请填写pgroupbasic
      */
    PGroupId: string;
    /**
      * 文件系统协议类型， 值为 NFS、CIFS、TURBO ; 若留空则默认为 NFS协议，turbo系列必须选择turbo，不支持NFS、CIFS
      */
    Protocol?: string;
    /**
      * 文件系统存储类型，默认值为 SD ；其中 SD 为通用标准型标准型存储， HP为通用性能型存储， TB为turbo标准型， TP 为turbo性能型。
      */
    StorageType?: string;
    /**
      * 私有网络（VPC） ID，若网络类型选择的是VPC，该字段为必填。
      */
    VpcId?: string;
    /**
      * 子网 ID，若网络类型选择的是VPC，该字段为必填。
      */
    SubnetId?: string;
    /**
      * 指定IP地址，仅VPC网络支持；若不填写、将在该子网下随机分配 IP，Turbo系列当前不支持指定
      */
    MountIP?: string;
    /**
      * 用户自定义文件系统名称
      */
    FsName?: string;
    /**
      * 文件系统标签
      */
    ResourceTags?: Array<TagInfo>;
    /**
      * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。用于保证请求幂等性的字符串失效时间为2小时。
      */
    ClientToken?: string;
    /**
      * 云联网ID， 若网络类型选择的是CCN，该字段为必填
      */
    CcnId?: string;
    /**
      * 云联网中CFS使用的网段， 若网络类型选择的是Ccn，该字段为必填，且不能和Ccn中已经绑定的网段冲突
      */
    CidrBlock?: string;
    /**
      * 文件系统容量，turbo系列必填，单位为GiB。 turbo标准型单位GB，起售40TiB，即40960 GiB；扩容步长20TiB，即20480 GiB。turbo性能型起售20TiB，即20480 GiB；扩容步长10TiB，10240 GiB。
      */
    Capacity?: number;
}
/**
 * DescribeMountTargets请求参数结构体
 */
export interface DescribeMountTargetsRequest {
    /**
      * 文件系统 ID
      */
    FileSystemId: string;
}
/**
 * CreateCfsPGroup返回参数结构体
 */
export interface CreateCfsPGroupResponse {
    /**
      * 权限组 ID
      */
    PGroupId?: string;
    /**
      * 权限组名字
      */
    Name?: string;
    /**
      * 权限组描述信息
      */
    DescInfo?: string;
    /**
      * 已经与该权限组绑定的文件系统个数
      */
    BindCfsNum?: number;
    /**
      * 权限组创建时间
      */
    CDate?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SignUpCfsService请求参数结构体
 */
export declare type SignUpCfsServiceRequest = null;
/**
 * DescribeCfsServiceStatus请求参数结构体
 */
export declare type DescribeCfsServiceStatusRequest = null;
/**
 * 权限组数组
 */
export interface PGroupInfo {
    /**
      * 权限组ID
      */
    PGroupId: string;
    /**
      * 权限组名称
      */
    Name: string;
    /**
      * 描述信息
      */
    DescInfo: string;
    /**
      * 创建时间
      */
    CDate: string;
    /**
      * 关联文件系统个数
      */
    BindCfsNum: number;
}
/**
 * SignUpCfsService返回参数结构体
 */
export interface SignUpCfsServiceResponse {
    /**
      * 该用户当前 CFS 服务的状态，none 是未开通，creating 是开通中，created 是已开通
      */
    CfsServiceStatus?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateCfsFileSystemPGroup请求参数结构体
 */
export interface UpdateCfsFileSystemPGroupRequest {
    /**
      * 权限组 ID
      */
    PGroupId: string;
    /**
      * 文件系统 ID
      */
    FileSystemId: string;
}
/**
 * DescribeCfsServiceStatus返回参数结构体
 */
export interface DescribeCfsServiceStatusResponse {
    /**
      * 该用户当前 CFS 服务的状态，none 为未开通，creating 为开通中，created 为已开通
      */
    CfsServiceStatus?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCfsRule返回参数结构体
 */
export interface CreateCfsRuleResponse {
    /**
      * 规则 ID
      */
    RuleId?: string;
    /**
      * 权限组 ID
      */
    PGroupId?: string;
    /**
      * 客户端 IP
      */
    AuthClientIp?: string;
    /**
      * 读写权限
      */
    RWPermission?: string;
    /**
      * 用户权限
      */
    UserPermission?: string;
    /**
      * 优先级
      */
    Priority?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 版本控制-协议详情

 */
export interface AvailableProtoStatus {
    /**
      * 售卖状态。可选值有 sale_out 售罄、saling可售、no_saling不可销售
      */
    SaleStatus: string;
    /**
      * 协议类型。可选值有 NFS、CIFS
      */
    Protocol: string;
}
/**
 * DescribeCfsRules请求参数结构体
 */
export interface DescribeCfsRulesRequest {
    /**
      * 权限组 ID
      */
    PGroupId: string;
}
/**
 * 权限组规则列表
 */
export interface PGroupRuleInfo {
    /**
      * 规则ID
      */
    RuleId: string;
    /**
      * 允许访问的客户端IP
      */
    AuthClientIp: string;
    /**
      * 读写权限, ro为只读，rw为读写
      */
    RWPermission: string;
    /**
      * 用户权限。其中all_squash为所有访问用户都会被映射为匿名用户或用户组；no_all_squash为访问用户会先与本机用户匹配，匹配失败后再映射为匿名用户或用户组；root_squash为将来访的root用户映射为匿名用户或用户组；no_root_squash为来访的root用户保持root帐号权限。
      */
    UserPermission: string;
    /**
      * 规则优先级，1-100。 其中 1 为最高，100为最低
      */
    Priority: number;
}
/**
 * DeleteCfsPGroup请求参数结构体
 */
export interface DeleteCfsPGroupRequest {
    /**
      * 权限组 ID
      */
    PGroupId: string;
}
/**
 * 版本控制-类型数组
 */
export interface AvailableType {
    /**
      * 协议与售卖详情
      */
    Protocols: Array<AvailableProtoStatus>;
    /**
      * 存储类型。返回值中 SD 为标准型存储、HP 为性能型存储
      */
    Type: string;
    /**
      * 是否支持预付费。返回值中 true 为支持、false 为不支持
      */
    Prepayment: boolean;
}
/**
 * UpdateCfsFileSystemSizeLimit请求参数结构体
 */
export interface UpdateCfsFileSystemSizeLimitRequest {
    /**
      * 文件系统容量限制大小，输入范围0-1073741824, 单位为GB；其中输入值为0时，表示不限制文件系统容量。
      */
    FsLimit: number;
    /**
      * 文件系统ID，目前仅支持标准型文件系统。
      */
    FileSystemId: string;
}
/**
 * DeleteCfsFileSystem请求参数结构体
 */
export interface DeleteCfsFileSystemRequest {
    /**
      * 文件系统 ID。说明，进行删除文件系统操作前需要先调用 DeleteMountTarget 接口删除该文件系统的挂载点，否则会删除失败。
      */
    FileSystemId: string;
}
/**
 * UpdateCfsPGroup返回参数结构体
 */
export interface UpdateCfsPGroupResponse {
    /**
      * 权限组ID
      */
    PGroupId?: string;
    /**
      * 权限组名称
      */
    Name?: string;
    /**
      * 描述信息
      */
    DescInfo?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCfsRules返回参数结构体
 */
export interface DescribeCfsRulesResponse {
    /**
      * 权限组规则列表
      */
    RuleList?: Array<PGroupRuleInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateCfsFileSystemPGroup返回参数结构体
 */
export interface UpdateCfsFileSystemPGroupResponse {
    /**
      * 权限组 ID
      */
    PGroupId?: string;
    /**
      * 文件系统 ID
      */
    FileSystemId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
