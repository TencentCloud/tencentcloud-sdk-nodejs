/**
 * CreatePurgeTask返回参数结构体
 */
export interface CreatePurgeTaskResponse {
    /**
      * 任务ID
      */
    JobId: string;
    /**
      * 失败的任务列表及原因
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailedList: Array<FailReason>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DownloadL7Logs请求参数结构体
 */
export interface DownloadL7LogsRequest {
    /**
      * 起始时间(需严格按照RFC3339标准传参)
      */
    StartTime: string;
    /**
      * 结束时间(需严格按照RFC3339标准传参)
      */
    EndTime: string;
    /**
      * 每页展示条数
      */
    PageSize: number;
    /**
      * 当前页
      */
    PageNo: number;
    /**
      * 站点集合
      */
    Zones?: Array<string>;
    /**
      * 域名集合
      */
    Domains?: Array<string>;
}
/**
 * CreatePurgeTask请求参数结构体
 */
export interface CreatePurgeTaskRequest {
    /**
      * Zone ID
      */
    ZoneId: string;
    /**
      * 类型，当前支持的类型：
- purge_url：URL
- purge_prefix：前缀
- purge_host：Hostname
- purge_all：全部缓存
      */
    Type: string;
    /**
      * 要刷新的资源列表，每个元素格式依据Type而定
1) Type = purge_host 时
形如：www.example.com 或 foo.bar.example.com
2) Type = purge_prefix 时
形如：http://www.example.com/example
3) Type = purge_url 时
形如：https://www.example.com/example.jpg
4）Type = purge_all 时
Targets可为空，不需要填写
      */
    Targets?: Array<string>;
    /**
      * 若有编码转换，仅清除编码转换后匹配的资源
若内容含有非 ASCII 字符集的字符，请开启此开关，编码转换（编码规则遵循 RFC3986）
      */
    EncodeUrl?: boolean;
}
/**
 * DescribePurgeTasks请求参数结构体
 */
export interface DescribePurgeTasksRequest {
    /**
      * 任务ID
      */
    JobId?: string;
    /**
      * 类型
      */
    Type?: string;
    /**
      * 查询起始时间
      */
    StartTime?: string;
    /**
      * 查询结束时间
      */
    EndTime?: string;
    /**
      * 查询起始偏移量
      */
    Offset?: number;
    /**
      * 查询最大返回的结果条数
      */
    Limit?: number;
    /**
      * 查询的状态
允许的值为：processing、success、failed、timeout、invalid
      */
    Statuses?: Array<string>;
    /**
      * zone id
      */
    ZoneId?: string;
    /**
      * 查询的域名列表
      */
    Domains?: Array<string>;
    /**
      * 查询内容
      */
    Target?: string;
}
/**
 * CreatePrefetchTask返回参数结构体
 */
export interface CreatePrefetchTaskResponse {
    /**
      * 任务ID
      */
    JobId: string;
    /**
      * 失败的任务列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailedList: Array<FailReason>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 站点信息
 */
export interface Zone {
    /**
      * 站点ID
      */
    Id: string;
    /**
      * 站点名称
      */
    Name: string;
    /**
      * 站点当前使用的 NS 列表
      */
    OriginalNameServers: Array<string>;
    /**
      * 腾讯云分配的 NS 列表
      */
    NameServers: Array<string>;
    /**
      * 站点状态
- active：NS 已切换
- pending：NS 未切换
- moved：NS 已切走
- deactivated：被封禁
      */
    Status: string;
    /**
      * 站点接入方式
- full：NS 接入
- partial：CNAME 接入
      */
    Type: string;
    /**
      * 站点是否关闭
      */
    Paused: boolean;
    /**
      * 站点创建时间
      */
    CreatedOn: string;
    /**
      * 站点修改时间
      */
    ModifiedOn: string;
}
/**
 * DownloadL7Logs返回参数结构体
 */
export interface DownloadL7LogsResponse {
    /**
      * 七层离线日志data
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data: Array<L7OfflineLog>;
    /**
      * 页面大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    PageSize: number;
    /**
      * 页号
注意：此字段可能返回 null，表示取不到有效值。
      */
    PageNo: number;
    /**
      * 总页数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Pages: number;
    /**
      * 总条数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalSize: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribePrefetchTasks返回参数结构体
 */
export interface DescribePrefetchTasksResponse {
    /**
      * 该查询条件总共条目数
      */
    TotalCount: number;
    /**
      * 任务结果列表
      */
    Tasks: Array<Task>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeZones请求参数结构体
 */
export interface DescribeZonesRequest {
    /**
      * 分页参数，页偏移
      */
    Offset?: number;
    /**
      * 分页参数，每页返回的站点个数
      */
    Limit?: number;
    /**
      * 查询条件过滤器，复杂类型
      */
    Filters?: Array<ZoneFilter>;
}
/**
 * DescribeZones返回参数结构体
 */
export interface DescribeZonesResponse {
    /**
      * 符合条件的站点数
      */
    TotalCount: number;
    /**
      * 站点详细信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Zones: Array<Zone>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 刷新预热附带的头部信息
 */
export interface Header {
    /**
      * HTTP头部
      */
    Name: string;
    /**
      * HTTP头部值
      */
    Value: string;
}
/**
 * 失败原因
 */
export interface FailReason {
    /**
      * 失败原因
      */
    Reason: string;
    /**
      * 处理失败的资源列表。
该列表元素来源于输入参数中的Targets，因此格式和入参中的Targets保持一致
      */
    Targets: Array<string>;
}
/**
 * 内容管理任务结果
 */
export interface Task {
    /**
      * 任务ID
      */
    JobId: string;
    /**
      * 状态
      */
    Status: string;
    /**
      * 资源
      */
    Target: string;
    /**
      * 任务类型
      */
    Type: string;
    /**
      * 任务创建时间
      */
    CreateTime: string;
    /**
      * 任务完成时间
      */
    UpdateTime: string;
}
/**
 * CreatePrefetchTask请求参数结构体
 */
export interface CreatePrefetchTaskRequest {
    /**
      * Zone ID
      */
    ZoneId: string;
    /**
      * 要预热的资源列表，每个元素格式类似如下:
http://www.example.com/example.txt
      */
    Targets?: Array<string>;
    /**
      * 是否对url进行encode
若内容含有非 ASCII 字符集的字符，请开启此开关，编码转换（编码规则遵循 RFC3986）
      */
    EncodeUrl?: boolean;
    /**
      * 附带的http头部信息
      */
    Headers?: Array<Header>;
}
/**
 * DescribePurgeTasks返回参数结构体
 */
export interface DescribePurgeTasksResponse {
    /**
      * 该查询条件总共条目数
      */
    TotalCount: number;
    /**
      * 任务结果列表
      */
    Tasks: Array<Task>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribePrefetchTasks请求参数结构体
 */
export interface DescribePrefetchTasksRequest {
    /**
      * 任务ID
      */
    JobId?: string;
    /**
      * 查询起始时间
      */
    StartTime?: string;
    /**
      * 查询结束时间
      */
    EndTime?: string;
    /**
      * 查询起始偏移量
      */
    Offset?: number;
    /**
      * 查询最大返回的结果条数
      */
    Limit?: number;
    /**
      * 查询的状态
允许的值为：processing、success、failed、timeout、invalid
      */
    Statuses?: Array<string>;
    /**
      * zone id
      */
    ZoneId?: string;
    /**
      * 查询的域名列表
      */
    Domains?: Array<string>;
    /**
      * 查询的资源
      */
    Target?: string;
}
/**
 * 站点查询过滤条件
 */
export interface ZoneFilter {
    /**
      * 过滤字段名，支持的列表如下：
- name: 站点名。
- status: 站点状态
      */
    Name: string;
    /**
      * 过滤字段值
      */
    Values: Array<string>;
    /**
      * 是否启用模糊查询，仅支持过滤字段名为name。模糊查询时，Values长度最大为1
      */
    Fuzzy?: boolean;
}
/**
 * 离线日志详细信息
 */
export interface L7OfflineLog {
    /**
      * 日志打包开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    LogTime: number;
    /**
      * 站点名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Domain: string;
    /**
      * 原始大小 单位byte
注意：此字段可能返回 null，表示取不到有效值。
      */
    Size: number;
    /**
      * 下载地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Url: string;
    /**
      * 日志数据包名
注意：此字段可能返回 null，表示取不到有效值。
      */
    LogPacketName: string;
}
