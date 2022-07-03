/**
 * DescribeProject返回参数结构体
 */
export interface DescribeProjectResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeProject请求参数结构体
 */
export interface DescribeProjectRequest {
    /**
      * 项目id。一般使用项目Id来查询，与projectName必须存在一个。
      */
    ProjectId?: string;
    /**
      * 是否展示关联集群信息
      */
    DescribeClusters?: boolean;
    /**
      * 是否展示关联执行组的信息，仅部分信息。
      */
    DescribeExecutors?: boolean;
    /**
      * 默认不展示项目管理员信息
      */
    DescribeAdminUsers?: boolean;
    /**
      * 默认不统计项目人员数量
      */
    DescribeMemberCount?: boolean;
    /**
      * 默认不查询创建者的信息
      */
    DescribeCreator?: boolean;
    /**
      * 项目名只在租户内唯一，一般用来转化为项目ID。
      */
    ProjectName?: string;
}
/**
 * DescribeTaskInstances请求参数结构体
 */
export interface DescribeTaskInstancesRequest {
    /**
      * 项目id
      */
    ProjectId: string;
    /**
      * 页号，默认为1
      */
    PageNumber?: number;
    /**
      * 页大小，默认为10，最大不超过200
      */
    PageSize?: number;
    /**
      * 工作流id列表
      */
    WorkflowIdList?: Array<string>;
    /**
      * 工作流名称列表，支持模糊搜索
      */
    WorkflowNameList?: Array<string>;
    /**
      * 起始数据时间，格式yyyy-MM-dd HH:mm:ss
      */
    DateFrom?: string;
    /**
      * 结束数据时间，格式yyyy-MM-dd HH:mm:ss
      */
    DateTo?: string;
    /**
      * 任务id列表
      */
    TaskIdList?: Array<string>;
    /**
      * 任务名称列表，支持模糊搜索
      */
    TaskNameList?: Array<string>;
    /**
      * 责任人名称列表
      */
    InChargeList?: Array<string>;
    /**
      * 任务类型码列表，26离线同步，30Python，31PySpark，32DLC，33Impala，34Hive SQL，35Shell，36Spark SQL，39Spark，40CDW PG，92MapReduce
      */
    TaskTypeIdList?: Array<number>;
    /**
      * 实例状态列表，0等待事件，1等待上游，2等待运行，3运行中，4正在终止，5失败重试，6失败，7成功
      */
    StateList?: Array<string>;
    /**
      * 周期类型列表，I分钟，H小时，D天，W周，M月，Y年，O一次性，C crontab
      */
    TaskCycleUnitList?: Array<string>;
    /**
      * 实例类型，0补录实例，1周期实例，2非周期实例
      */
    InstanceType?: number;
    /**
      * 排序字段信息列表，ScheduleDateTime / CostTime / StartTime / EndTime
      */
    OrderFields?: Array<OrderField>;
}
/**
 * DescribeTaskInstances返回参数结构体
 */
export interface DescribeTaskInstancesResponse {
    /**
      * 无
      */
    Data: DescribeTaskInstancesData;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 任务实例信息
 */
export interface TaskInstanceInfo {
    /**
      * 任务Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    TaskId: string;
    /**
      * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    TaskName: string;
    /**
      * 工作流id
注意：此字段可能返回 null，表示取不到有效值。
      */
    WorkflowId: string;
    /**
      * 工作流名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    WorkflowName: string;
    /**
      * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectName: string;
    /**
      * 项目标识
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectIdent: string;
    /**
      * 实例状态，0等待事件，1等待上游，2等待运行，3运行中，4正在终止，5失败重试，6失败，7成功
注意：此字段可能返回 null，表示取不到有效值。
      */
    State: number;
    /**
      * 任务类型id，26离线同步，30Python，31PySpark，32DLC，33Impala，34Hive SQL，35Shell，36Spark SQL，39Spark，40CDW PG，92MapReduce
注意：此字段可能返回 null，表示取不到有效值。
      */
    TaskTypeId: number;
    /**
      * 任务类型描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    TaskTypeDesc: string;
    /**
      * 项目id
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectId: string;
    /**
      * 文件夹名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    FolderName: string;
    /**
      * 文件夹id
注意：此字段可能返回 null，表示取不到有效值。
      */
    FolderId: string;
    /**
      * 调度计划展示描述信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    SchedulerDesc: string;
    /**
      * 负责人
注意：此字段可能返回 null，表示取不到有效值。
      */
    InCharge: string;
    /**
      * 调度周期类型，I分钟，H小时，D天，W周，M月，Y年，O一次性，C crontab
注意：此字段可能返回 null，表示取不到有效值。
      */
    CycleType: string;
    /**
      * 实例开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartTime: string;
    /**
      * 实例结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndTime: string;
    /**
      * 实例类型，0补录实例，1周期实例，2非周期实例
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceType: number;
    /**
      * 最大重试次数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TryLimit: number;
    /**
      * 当前重试次数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tries: number;
    /**
      * 计划调度时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    SchedulerDateTime: string;
    /**
      * 运行耗时
注意：此字段可能返回 null，表示取不到有效值。
      */
    CostTime: string;
}
/**
 * 查询任务实例列表
 */
export interface DescribeTaskInstancesData {
    /**
      * 实例列表
      */
    Items: Array<TaskInstanceInfo>;
    /**
      * 总条数
      */
    TotalCount: number;
    /**
      * 页号
      */
    PageNumber: number;
    /**
      * 页大小
      */
    PageSize: number;
}
/**
 * 通用排序字段
 */
export interface OrderField {
    /**
      * 排序字段名称
      */
    Name: string;
    /**
      * 排序方向：ASC|DESC
      */
    Direction: string;
}
/**
 * DescribeRelatedInstances请求参数结构体
 */
export interface DescribeRelatedInstancesRequest {
    /**
      * 项目id
      */
    ProjectId: string;
    /**
      * 数据时间，格式yyyy-MM-dd HH:mm:ss
      */
    CurRunDate: string;
    /**
      * 任务id
      */
    TaskId: number;
    /**
      * 距离当前任务的层级距离，-1表示取父节点，1表示子节点
      */
    Depth: number;
    /**
      * 页号，默认为1
      */
    PageNumber?: number;
    /**
      * 页大小，默认为10，最大不超过200
      */
    PageSize?: number;
}
/**
 * DescribeRelatedInstances返回参数结构体
 */
export interface DescribeRelatedInstancesResponse {
    /**
      * 无
      */
    Data: DescribeTaskInstancesData;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
