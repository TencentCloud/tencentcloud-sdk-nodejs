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
 * 失败原因
 */
export interface FailReason {
    /**
      * 失败原因
      */
    Reason: string;
    /**
      * 失败列表
      */
    Targets: Array<string>;
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
      * 内容，一行一个
      */
    Targets?: Array<string>;
    /**
      * 若有编码转换，仅清除编码转换后匹配的资源
若内容含有非 ASCII 字符集的字符，请打开 URL Encode 开关，编码转换（编码规则遵循 RFC3986）
      */
    EncodeUrl?: boolean;
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
