/**
 * Sort 排序字段
 */
export interface Sort {
    /**
     * 排序字段
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Field?: string;
    /**
     * 排序方式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Order?: string;
}
/**
 * 分页的data数据
 */
export interface DescribeDevicesPageRsp {
    /**
     * 数据分页信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Paging?: Paging;
    /**
     * 业务响应数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Items?: Array<DeviceDetail>;
}
/**
 * FilterGroups 条件过滤组
 */
export interface FilterGroup {
    /**
     * Filters 条件过滤
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Filters?: Array<Filter>;
}
/**
 * DescribeDevices返回参数结构体
 */
export interface DescribeDevicesResponse {
    /**
     * 分页的data数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: DescribeDevicesPageRsp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * Filters 条件过滤
 */
export interface Filter {
    /**
     * 过滤字段
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Field?: string;
    /**
     * 过滤方式 eq:等于,net:不等于,like,nlike,gt:大于,lt:小于,egt:大于等于,elt:小于等于
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Operator?: string;
    /**
     * 过滤条件
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Values?: Array<string>;
}
/**
 * DescribeDevices请求参数结构体
 */
export interface DescribeDevicesRequest {
    /**
     * 过滤条件<br>
  <li>Ip - String - 是否必填：否 - 操作符: eq  - 排序支持：否- 按照Ip进行过滤。</li>
  <li>MacAddr - String - 是否必填：否 - 操作符: eq  - 排序支持：否- 按照mac地址进行过滤。</li>
  <li>IoaUserName - String - 是否必填：否 - 操作符: eq  - 排序支持：否- 按照ioa用户名进行过滤。</li>
  分页参数<br>
  <li>PageNum 从1开始，小于等于0时使用默认参数。</li>
  <li>PageSize 最大值5000，最好不超过100。</li>
     */
    Condition?: Condition;
    /**
     * 私有化默认分组id-名称-操作系统
  1	全网终端	Win
  2	未分组终端	Win
  30000000	服务器	Win
  40000101	全网终端	Linux
  40000102	未分组终端	Linux
  40000103	服务器	Linux
  40000201	全网终端	macOS
  40000202	未分组终端	macOS
  40000203	服务器	macOS
  40000401	全网终端	Android
  40000402	未分组终端	Android
  40000501	全网终端	iOS
  40000502	未分组终端	iOS
     */
    GroupId?: number;
    /**
     * 系统类型（0: win，1：linux，2: mac，3: win_srv，4：android，5：ios   默认值0）
     */
    OsType?: number;
    /**
     * 在线状态 2 在线 0，1 离线
     */
    OnlineStatus?: number;
    /**
     * 过滤条件--兼容旧接口,参数同Condition
     */
    Filters?: Array<Filter>;
    /**
     * 排序字段--兼容旧接口,参数同Condition
     */
    Sort?: Sort;
    /**
     * 获取第几页--兼容旧接口,参数同Condition(只支持32位)
     */
    PageNum?: number;
    /**
     * 每页获取数--兼容旧接口,参数同Condition(只支持32位)
     */
    PageSize?: number;
    /**
     * 授权状态 4未授权 5已授权
     */
    Status?: number;
}
/**
 * 页码
 */
export interface Paging {
    /**
     * 每页条数(只支持32位)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageSize?: number;
    /**
     * 页码(只支持32位)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageNum?: number;
    /**
     * 总页数(只支持32位)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageCount?: number;
    /**
     * 记录总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
}
/**
 * 业务响应数据
 */
export interface DeviceDetail {
    /**
     * 设备ID(只支持32位)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: number;
    /**
     * 设备唯一标识符
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Mid?: string;
    /**
     * 终端名（设备名）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 设备所在分组ID(只支持32位)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupId?: number;
    /**
     * OS平台(只支持32位)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OsType?: number;
    /**
     * 设备IP地址（出口IP）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Ip?: string;
    /**
     * 在线状态 2 在线 0，1 离线(只支持32位)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OnlineStatus?: number;
    /**
     * 客户端版本号-大整数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Version?: string;
    /**
     * 客户端版本号-点分字符串
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StrVersion?: string;
    /**
     * 首次在线时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Itime?: string;
    /**
     * 最后一次在线时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConnActiveTime?: string;
    /**
     * 设备是否加锁 1 锁定 0 2 非锁定(只支持32位)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Locked?: number;
    /**
     * 设备本地IP列表, 包括IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LocalIpList?: string;
    /**
     * 主机ID(只支持32位)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HostId?: number;
    /**
     * 设备所属分组名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupName?: string;
    /**
     * 设备所属分组路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupNamePath?: string;
    /**
     * 未修复高危漏洞数(只支持32位)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CriticalVulListCount?: number;
    /**
     * 设备名 和Name相同，保留参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ComputerName?: string;
    /**
     * 登录域名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DomainName?: string;
    /**
     * MAC地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MacAddr?: string;
    /**
     * 漏洞数(只支持32位)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VulCount?: number;
    /**
     * 病毒风险数(只支持32位)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RiskCount?: number;
    /**
     * 病毒库版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirusVer?: string;
    /**
     * 漏洞库版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VulVersion?: string;
    /**
     * 系统修复引擎版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SysRepVersion?: string;
    /**
     * 高危补丁列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VulCriticalList?: Array<string>;
    /**
     * 标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags?: string;
    /**
     * 终端用户名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserName?: string;
    /**
     * 防火墙状态(只支持32位)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FirewallStatus?: number;
    /**
     * SN序列号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SerialNum?: string;
    /**
     * 设备管控策略版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeviceStrategyVer?: string;
    /**
     * NGN策略版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NGNStrategyVer?: string;
    /**
     * 最近登录账号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IOAUserName?: string;
    /**
     * 设备管控新策略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeviceNewStrategyVer?: string;
    /**
     * NGN策略新版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NGNNewStrategyVer?: string;
    /**
     * 主机名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HostName?: string;
    /**
     * 主板序列号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BaseBoardSn?: string;
    /**
     * 绑定账户只有名字
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AccountUsers?: string;
    /**
     * 身份策略版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IdentityStrategyVer?: string;
    /**
     * 身份策略新版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IdentityNewStrategyVer?: string;
    /**
     * 最近登录账号部门
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AccountGroupName?: string;
    /**
     * 登录账号姓名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AccountName?: string;
    /**
     * 账号组id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AccountGroupId?: number;
}
/**
 * - [ ] 过滤条件<br>

<li>Name - String - 是否必填：否 - 操作符: ilike  - 排序支持：否- 根据分组名称进行查询。</li>
分页参数<br>
<li>PageNum 从1开始，小于等于0时使用默认参数。</li>
<li>PageSize 最大值5000，最好不超过100。</li>
 */
export interface Condition {
    /**
     * Filters 条件过滤
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Filters?: Array<Filter>;
    /**
     * FilterGroups 条件过滤组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FilterGroups?: Array<FilterGroup>;
    /**
     * Sort 排序字段
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Sort?: Sort;
    /**
     * PageSize 每页获取数(只支持32位)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageSize?: number;
    /**
     * PageNum 获取第几页(只支持32位)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageNum?: number;
}
