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
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * 数据分页信息
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
