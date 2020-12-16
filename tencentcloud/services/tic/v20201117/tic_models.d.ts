/**
 * DescribeStackVersions返回参数结构体
 */
export interface DescribeStackVersionsResponse {
    /**
      * 符合条件的版本数量
      */
    TotalCount?: number;
    /**
      * 版本详细信息列表
      */
    Versions?: Array<VersionInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeStackEvents返回参数结构体
 */
export interface DescribeStackEventsResponse {
    /**
      * 符合条件的事件数量
      */
    TotalCount?: number;
    /**
      * 事件详细信息列表
      */
    Events?: Array<EventInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateStack返回参数结构体
 */
export interface UpdateStackResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeStacks请求参数结构体
 */
export interface DescribeStacksRequest {
    /**
      * 按照⼀个或者多个资源栈ID查询
      */
    StackIds?: Array<string>;
    /**
      * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Offset?: number;
    /**
      * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Limit?: number;
}
/**
 * CreateStackVersion返回参数结构体
 */
export interface CreateStackVersionResponse {
    /**
      * 新创建的版本ID
      */
    VersionId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateStack请求参数结构体
 */
export interface UpdateStackRequest {
    /**
      * 待更新的资源栈ID
      */
    StackId: string;
    /**
      * 资源栈名称，不得超过60个字符
      */
    StackName?: string;
    /**
      * 资源栈描述，不得超过200个字符
      */
    Description?: string;
}
/**
 * DescribeStackEvent请求参数结构体
 */
export interface DescribeStackEventRequest {
    /**
      * 事件ID
      */
    EventId: string;
}
/**
 * PlanStack返回参数结构体
 */
export interface PlanStackResponse {
    /**
      * 执行的事件ID
      */
    EventId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 资源栈信息
 */
export interface StackInfo {
    /**
      * 资源栈ID
      */
    StackId: string;
    /**
      * 资源栈名称
      */
    StackName: string;
    /**
      * 资源栈描述
      */
    Description: string;
    /**
      * 所处地域
      */
    Region: string;
    /**
      * 资源栈状态
      */
    Status: string;
    /**
      * 创建时间
      */
    CreateTime: string;
}
/**
 * PlanStack请求参数结构体
 */
export interface PlanStackRequest {
    /**
      * 资源栈ID
      */
    StackId: string;
    /**
      * 待执行plan事件的版本ID
      */
    VersionId: string;
}
/**
 * ApplyStack返回参数结构体
 */
export interface ApplyStackResponse {
    /**
      * 执行的事件ID
      */
    EventId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DestroyStack请求参数结构体
 */
export interface DestroyStackRequest {
    /**
      * 资源栈ID
      */
    StackId: string;
    /**
      * 待执行destroy事件的版本ID
      */
    VersionId: string;
}
/**
 * CreateStackVersion请求参数结构体
 */
export interface CreateStackVersionRequest {
    /**
      * 待增加版本的资源栈ID
      */
    StackId: string;
    /**
      * 模板 URL，⽬前仅限 COS URL, ⽂件为zip压缩格式
      */
    TemplateUrl: string;
    /**
      * 版本名称，不得超过60个字符
      */
    VersionName?: string;
    /**
      * 版本描述，不得超过200个字符
      */
    Description?: string;
}
/**
 * DeleteStackVersion返回参数结构体
 */
export interface DeleteStackVersionResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 查询过滤条件
 */
export interface Filter {
    /**
      * 条件名字
      */
    Name: string;
    /**
      * 匹配的值，可以有多个
      */
    Values: Array<string>;
}
/**
 * DescribeStackVersions请求参数结构体
 */
export interface DescribeStackVersionsRequest {
    /**
      * 按照⼀个或者多个版本ID查询
      */
    VersionIds?: Array<string>;
    /**
      * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节
      */
    Offset?: number;
    /**
      * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节
      */
    Limit?: number;
    /**
      * <li>**Name**</li>
按照【**版本名称**】进行过滤
类型：string

<li>**Status**</li>
按照【**版本状态**】过滤，形如`VERSION_EDITING`，`PLAN_IN_PROGRESS`等
类型：string

<li>**StackId**</li>
按照版本所属的【**资源栈ID**】进行过滤，形如`stk-xxxxxx`
类型：string
      */
    Filters?: Array<Filter>;
}
/**
 * DescribeStackEvents请求参数结构体
 */
export interface DescribeStackEventsRequest {
    /**
      * 按照⼀个或者多个事件ID查询
      */
    EventIds?: Array<string>;
    /**
      * <li>**VersionId**</li>
按照【**版本ID**】过滤，VersionId形如 `ver-kg8hn58h`
类型：string

<li>**StackId**</li>
按照【**资源栈ID**】过滤，StackId形如 `stk-hz5vn3te`
类型：string

<li>**Type**</li>
按照【**事件类型**】过滤，Type 形如 plan, apply, destroy
类型：string

<li>**Status**</li>
按照【**事件状态**】过滤，Status形如 queueing, running, success, failed
类型：string
      */
    Filters?: Array<Filter>;
    /**
      * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节
      */
    Offset?: number;
    /**
      * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节
      */
    Limit?: number;
}
/**
 * DescribeStackEvent返回参数结构体
 */
export interface DescribeStackEventResponse {
    /**
      * 事件ID
      */
    EventId?: string;
    /**
      * 版本ID
      */
    VersionId?: string;
    /**
      * 资源栈ID
      */
    StackId?: string;
    /**
      * 事件类型
      */
    Type?: string;
    /**
      * 事件状态
      */
    Status?: string;
    /**
      * 状态信息
      */
    EventMessage?: string;
    /**
      * 创建时间
      */
    CreateTime?: string;
    /**
      * 控制台输出文本
      */
    ConsoleLog?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ApplyStack请求参数结构体
 */
export interface ApplyStackRequest {
    /**
      * 资源栈ID
      */
    StackId: string;
    /**
      * 待执行apply事件的版本ID
      */
    VersionId: string;
}
/**
 * DeleteStackVersion请求参数结构体
 */
export interface DeleteStackVersionRequest {
    /**
      * 待删除的版本ID
      */
    VersionId: string;
}
/**
 * DestroyStack返回参数结构体
 */
export interface DestroyStackResponse {
    /**
      * 事件ID
      */
    EventId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteStack请求参数结构体
 */
export interface DeleteStackRequest {
    /**
      * 待删除的资源栈ID
      */
    StackId: string;
}
/**
 * 事件详情
 */
export interface EventInfo {
    /**
      * 事件ID
      */
    EventId: string;
    /**
      * 版本ID
      */
    VersionId: string;
    /**
      * 资源栈ID
      */
    StackId: string;
    /**
      * 事件类型
      */
    Type: string;
    /**
      * 版本状态
      */
    Status: string;
    /**
      * 状态信息
      */
    Message: string;
    /**
      * 创建时间
      */
    CreateTime: string;
}
/**
 * UpdateStackVersion返回参数结构体
 */
export interface UpdateStackVersionResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteStack返回参数结构体
 */
export interface DeleteStackResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateStack请求参数结构体
 */
export interface CreateStackRequest {
    /**
      * 资源栈名称，不得超过60个字符
      */
    StackName: string;
    /**
      * 资源栈所在地域
      */
    StackRegion: string;
    /**
      * HCL模板URL，⽬前仅限 COS URL, ⽂件为zip压缩格式
      */
    TemplateUrl: string;
    /**
      * 资源栈描述，不得超过200个字符
      */
    Description?: string;
}
/**
 * DescribeStacks返回参数结构体
 */
export interface DescribeStacksResponse {
    /**
      * 符合条件的资源栈数量
      */
    TotalCount?: number;
    /**
      * 资源栈详细信息列表
      */
    Stacks?: Array<StackInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateStack返回参数结构体
 */
export interface CreateStackResponse {
    /**
      * 创建得到的资源栈ID
      */
    StackId?: string;
    /**
      * 资源栈版本ID
      */
    VersionId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 版本信息
 */
export interface VersionInfo {
    /**
      * 版本ID
      */
    VersionId: string;
    /**
      * 版本名称
      */
    VersionName: string;
    /**
      * 版本描述
      */
    Description: string;
    /**
      * 资源栈ID
      */
    StackId: string;
    /**
      * 版本状态
      */
    Status: string;
    /**
      * 创建时间
      */
    CreateTime: string;
}
/**
 * UpdateStackVersion请求参数结构体
 */
export interface UpdateStackVersionRequest {
    /**
      * 待更新的版本ID
      */
    VersionId: string;
    /**
      * 模板 URL，⽬前仅限 COS URL, ⽂件为zip压缩格式
      */
    TemplateUrl: string;
    /**
      * 版本名称，不得超过60个字符
      */
    VersionName?: string;
    /**
      * 版本描述，不得超过200个字符
      */
    Description?: string;
}
