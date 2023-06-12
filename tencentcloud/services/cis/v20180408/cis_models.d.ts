/**
 * 容器实例中容器结构体
 */
export interface Container {
    /**
     * 容器启动命令
     */
    Command?: string;
    /**
     * 容器启动参数
     */
    Args?: Array<string>;
    /**
     * 容器环境变量
     */
    EnvironmentVars?: Array<EnvironmentVar>;
    /**
     * 镜像
     */
    Image: string;
    /**
     * 容器名，由小写字母、数字和 - 组成，由小写字母开头，小写字母或数字结尾，且长度不超过 63个字符
     */
    Name: string;
    /**
     * CPU，单位：核
     */
    Cpu: number;
    /**
     * 内存，单位：Gi
     */
    Memory: number;
    /**
     * 重启次数
     */
    RestartCount?: number;
    /**
     * 当前状态
     */
    CurrentState?: ContainerState;
    /**
     * 上一次状态
     */
    PreviousState?: ContainerState;
    /**
     * 容器工作目录
     */
    WorkingDir?: string;
    /**
     * 容器ID
     */
    ContainerId?: string;
}
/**
 * InquiryPriceCreateCis返回参数结构体
 */
export interface InquiryPriceCreateCisResponse {
    /**
     * 价格
     */
    Price?: Price;
    /**
     * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeContainerLog请求参数结构体
 */
export interface DescribeContainerLogRequest {
    /**
     * 容器实例名称
     */
    InstanceName: string;
    /**
     * 容器名称
     */
    ContainerName?: string;
    /**
     * 日志显示尾部行数
     */
    Tail?: number;
    /**
     * 日志起始时间
     */
    SinceTime?: string;
}
/**
 * CreateContainerInstance请求参数结构体
 */
export interface CreateContainerInstanceRequest {
    /**
     * 可用区
     */
    Zone: string;
    /**
     * vpcId
     */
    VpcId: string;
    /**
     * subnetId
     */
    SubnetId: string;
    /**
     * 容器实例名称，由小写字母、数字和 - 组成，由小写字母开头，小写字母或数字结尾，且长度不超过 40个字符
     */
    InstanceName: string;
    /**
     * 重启策略（Always,OnFailure,Never）
     */
    RestartPolicy: string;
    /**
     * 容器列表
     */
    Containers: Array<Container>;
}
/**
 * 容器状态
 */
export interface ContainerState {
    /**
     * 容器运行开始时间
     */
    StartTime: string;
    /**
     * 容器状态
     */
    State: string;
    /**
     * 状态详情
     */
    Reason: string;
    /**
     * 容器运行结束时间
     */
    FinishTime: string;
    /**
     * 容器运行退出码
     */
    ExitCode: number;
}
/**
 * InquiryPriceCreateCis请求参数结构体
 */
export interface InquiryPriceCreateCisRequest {
    /**
     * 可用区
     */
    Zone: string;
    /**
     * CPU，单位：核
     */
    Cpu: number;
    /**
     * 内存，单位：Gi
     */
    Memory: number;
}
/**
 * 容器环境变量
 */
export interface EnvironmentVar {
    /**
     * 环境变量名
     */
    Name: string;
    /**
     * 环境变量值
     */
    Value: string;
}
/**
 * 价格
 */
export interface Price {
    /**
     * 原价，单位：元
     */
    DiscountPrice: number;
    /**
     * 折扣价，单位：元
     */
    OriginalPrice: number;
}
/**
 * DescribeContainerInstances返回参数结构体
 */
export interface DescribeContainerInstancesResponse {
    /**
     * 容器实例列表
     */
    ContainerInstanceList?: Array<ContainerInstance>;
    /**
     * 容器实例总数
     */
    TotalCount?: number;
    /**
     * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteContainerInstance返回参数结构体
 */
export interface DeleteContainerInstanceResponse {
    /**
     * 操作信息
     */
    Msg?: string;
    /**
     * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeContainerInstances请求参数结构体
 */
export interface DescribeContainerInstancesRequest {
    /**
     * 偏移量，默认为0
     */
    Offset?: number;
    /**
     * 返回数量，默认为10
     */
    Limit?: number;
    /**
     * 过滤条件。
  - Zone - String - 是否必填：否 -（过滤条件）按照可用区过滤。
  - VpcId - String - 是否必填：否 -（过滤条件）按照VpcId过滤。
  - InstanceName - String - 是否必填：否 -（过滤条件）按照容器实例名称做模糊查询。
     */
    Filters?: Array<Filter>;
}
/**
 * 过滤条件
 */
export interface Filter {
    /**
     * 过滤字段，可选值 - Zone，VpcId，InstanceName
     */
    Name: string;
    /**
     * 过滤值列表
     */
    ValueList: Array<string>;
}
/**
 * CreateContainerInstance返回参数结构体
 */
export interface CreateContainerInstanceResponse {
    /**
     * 容器实例ID
     */
    InstanceId?: string;
    /**
     * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeContainerInstance请求参数结构体
 */
export interface DescribeContainerInstanceRequest {
    /**
     * 容器实例名称
     */
    InstanceName: string;
}
/**
 * DescribeContainerInstance返回参数结构体
 */
export interface DescribeContainerInstanceResponse {
    /**
     * 容器实例详细信息
     */
    ContainerInstance?: ContainerInstance;
    /**
     * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
     */
    RequestId?: string;
}
/**
 * 容器日志
 */
export interface ContainerLog {
    /**
     * 容器名称
     */
    Name: string;
    /**
     * 日志
     */
    Log: string;
    /**
     * 日志记录时间
     */
    Time: string;
}
/**
 * DescribeContainerInstanceEvents返回参数结构体
 */
export interface DescribeContainerInstanceEventsResponse {
    /**
     * 容器实例事件列表
     */
    EventList?: Array<Event>;
    /**
     * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
     */
    RequestId?: string;
}
/**
 * 容器实例事件
 */
export interface Event {
    /**
     * 事件首次出现时间
     */
    FirstSeen: string;
    /**
     * 事件上次出现时间
     */
    LastSeen: string;
    /**
     * 事件等级
     */
    Level: string;
    /**
     * 事件出现次数
     */
    Count: string;
    /**
     * 事件出现原因
     */
    Reason: string;
    /**
     * 事件消息
     */
    Message: string;
}
/**
 * DescribeContainerInstanceEvents请求参数结构体
 */
export interface DescribeContainerInstanceEventsRequest {
    /**
     * 容器实例名称
     */
    InstanceName: string;
}
/**
 * DescribeContainerLog返回参数结构体
 */
export interface DescribeContainerLogResponse {
    /**
     * 容器日志数组
     */
    ContainerLogList?: Array<ContainerLog>;
    /**
     * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteContainerInstance请求参数结构体
 */
export interface DeleteContainerInstanceRequest {
    /**
     * 容器实例名称
     */
    InstanceName: string;
}
/**
 * 容器实例的具体信息
 */
export interface ContainerInstance {
    /**
     * 容器实例ID
     */
    InstanceId?: string;
    /**
     * 容器实例名称
     */
    InstanceName: string;
    /**
     * 容器实例所属VpcId
     */
    VpcId: string;
    /**
     * 容器实例所属SubnetId
     */
    SubnetId: string;
    /**
     * 容器实例状态
     */
    State?: string;
    /**
     * 容器列表
     */
    Containers: Array<Container>;
    /**
     * 重启策略
     */
    RestartPolicy: string;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 启动时间
     */
    StartTime?: string;
    /**
     * 可用区
     */
    Zone: string;
    /**
     * Vpc名称
     */
    VpcName?: string;
    /**
     * VpcCidr
     */
    VpcCidr?: string;
    /**
     * SubnetName
     */
    SubnetName?: string;
    /**
     * 子网Cidr
     */
    SubnetCidr?: string;
    /**
     * 内网IP
     */
    LanIp?: string;
}
