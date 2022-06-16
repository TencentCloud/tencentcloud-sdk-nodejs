/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * DescribeProbeNodes返回参数结构体
 */
export interface DescribeProbeNodesResponse {
  /**
      * 节点列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  NodeSet: Array<NodeDefine>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 保存string类型字段
 */
export interface Label {
  /**
   * 自定义字段编号
   */
  ID: number

  /**
   * 自定义字段名称/说明
   */
  Name: string

  /**
   * 字段值
   */
  Value: string
}

/**
 * 储存float类型字段
 */
export interface Field {
  /**
   * 自定义字段编号
   */
  ID: number

  /**
   * 自定义字段名称/说明
   */
  Name: string

  /**
   * 字段值
   */
  Value: number
}

/**
 * 健值对
 */
export interface KeyValuePair {
  /**
   * 健
   */
  Key: string

  /**
   * 值
   */
  Value: string
}

/**
 * 任务执行结果
 */
export interface TaskResult {
  /**
   * 任务 ID
   */
  TaskId: string

  /**
      * 是否成功
注意：此字段可能返回 null，表示取不到有效值。
      */
  Success: boolean

  /**
      * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrorMessage: string
}

/**
 * SuspendProbeTask返回参数结构体
 */
export interface SuspendProbeTaskResponse {
  /**
   * 任务总量
   */
  Total: number

  /**
      * 任务成功量
注意：此字段可能返回 null，表示取不到有效值。
      */
  SuccessCount: number

  /**
      * 任务执行结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  Results: Array<TaskResult>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * type ProbeTaskBasicConfiguration struct {
	TaskID        TaskID `json:"TaskId" gorm:"column:task_id"`
	Name          string `json:"Name" binding:"required" gorm:"column:name"`
	TargetAddress string `json:"TargetAddress" binding:"required" gorm:"column:target_address"`
}
 */
export interface ProbeTaskBasicConfiguration {
  /**
   * 拨测任务名称
   */
  Name: string

  /**
   * 拨测目标地址
   */
  TargetAddress: string
}

/**
 * DescribeProbeMetricData返回参数结构体
 */
export interface DescribeProbeMetricDataResponse {
  /**
   * 指标 JSON 序列化后的字符串
   */
  MetricSet: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDetailedSingleProbeData请求参数结构体
 */
export interface DescribeDetailedSingleProbeDataRequest {
  /**
   * 开始时间戳（毫秒级）
   */
  BeginTime: number

  /**
   * 结束时间戳（毫秒级）
   */
  EndTime: number

  /**
   * 任务类型
   */
  TaskType: string

  /**
   * 待排序字段
   */
  SortField: string

  /**
   * true表示升序
   */
  Ascending: boolean

  /**
   * 选中字段
   */
  SelectedFields: Array<string>

  /**
   * 起始取数位置
   */
  Offset: number

  /**
   * 取数数量
   */
  Limit: number

  /**
   * 任务ID
   */
  TaskID?: Array<string>

  /**
   * 拨测点运营商
   */
  Operators?: Array<string>

  /**
   * 拨测点地区
   */
  Districts?: Array<string>

  /**
   * 错误类型
   */
  ErrorTypes?: Array<string>

  /**
   * 城市
   */
  City?: Array<string>
}

/**
 * DescribeProbeTasks返回参数结构体
 */
export interface DescribeProbeTasksResponse {
  /**
      * 任务列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskSet: Array<ProbeTask>

  /**
   * 任务总数
   */
  Total: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteProbeTask请求参数结构体
 */
export interface DeleteProbeTaskRequest {
  /**
   * 任务 ID
   */
  TaskIds: Array<string>
}

/**
 * DescribeDetailedSingleProbeData返回参数结构体
 */
export interface DescribeDetailedSingleProbeDataResponse {
  /**
   * 单次详情数据
   */
  DataSet: Array<DetailedSingleDataDefine>

  /**
   * 符合条件的数据总数
   */
  TotalNumber: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SuspendProbeTask请求参数结构体
 */
export interface SuspendProbeTaskRequest {
  /**
   * 任务 ID
   */
  TaskIds: Array<string>
}

/**
 * DescribeProbeMetricData请求参数结构体
 */
export interface DescribeProbeMetricDataRequest {
  /**
   * 分析任务类型
   */
  AnalyzeTaskType?: string

  /**
   * 指标类型，counter 或者 gauge
   */
  MetricType?: string

  /**
   * 指标详细字段
   */
  Field?: string

  /**
   * 过滤条件
   */
  Filter?: string

  /**
   * 聚合时间, 1m、1d、100d 等等
   */
  GroupBy?: string

  /**
   * 过滤条件数组
   */
  Filters?: Array<string>
}

/**
 * DescribeProbeTasks请求参数结构体
 */
export interface DescribeProbeTasksRequest {
  /**
   * 任务 ID  列表
   */
  TaskIDs?: Array<string>

  /**
   * 任务名
   */
  TaskName?: string

  /**
   * 拨测目标
   */
  TargetAddress?: string

  /**
   * 任务状态列表
   */
  TaskStatus?: Array<number>

  /**
   * 偏移量，默认为0
   */
  Offset?: number

  /**
   * 返回数量，默认为20，最大值为100
   */
  Limit?: number

  /**
      * 付费模式
<li>1 = 试用版本</li>
<li> 2 = 付费版本 </li>
      */
  PayMode?: number

  /**
      * 订单状态
<li>1 = 正常</li>
<li> 2 = 欠费 </li>
      */
  OrderState?: number

  /**
   * 拨测类型
   */
  TaskType?: Array<number>

  /**
   * 节点类型
   */
  TaskCategory?: Array<number>

  /**
   * 排序的列
   */
  OrderBy?: string

  /**
   * 是否正序
   */
  Ascend?: boolean

  /**
   * 资源标签值
   */
  TagFilters?: Array<KeyValuePair>
}

/**
 * UpdateProbeTaskConfigurationList请求参数结构体
 */
export interface UpdateProbeTaskConfigurationListRequest {
  /**
   * 任务 ID
   */
  TaskIds: Array<string>

  /**
   * 拨测节点
   */
  Nodes: Array<string>

  /**
   * 拨测间隔
   */
  Interval: number

  /**
   * 拨测参数
   */
  Parameters: string

  /**
   * 定时任务cron表达式
   */
  Cron?: string
}

/**
 * CreateProbeTasks请求参数结构体
 */
export interface CreateProbeTasksRequest {
  /**
   * 批量任务名-地址
   */
  BatchTasks: Array<ProbeTaskBasicConfiguration>

  /**
   * 任务类型
   */
  TaskType: number

  /**
   * 拨测节点
   */
  Nodes: Array<string>

  /**
   * 拨测间隔
   */
  Interval: number

  /**
   * 拨测参数
   */
  Parameters: string

  /**
      * 任务分类
<li>1 = PC</li>
<li> 2 = Mobile </li>
      */
  TaskCategory: number

  /**
   * 定时任务cron表达式
   */
  Cron?: string

  /**
   * 资源标签值
   */
  Tag?: Array<Tag>

  /**
   * 测试类型，包含定时测试与即时测试
   */
  ProbeType?: number

  /**
   * 插件类型
   */
  PluginSource?: string

  /**
   * 客户度ID
   */
  ClientNum?: string
}

/**
 * 拨测任务
 */
export interface ProbeTask {
  /**
      * 任务名
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string

  /**
   * 任务 ID
   */
  TaskId: string

  /**
   * 任务类型
   */
  TaskType: number

  /**
   * 拨测节点列表
   */
  Nodes: Array<string>

  /**
   * 拨测间隔
   */
  Interval: number

  /**
   * 拨测参数
   */
  Parameters: string

  /**
   * 任务状态
   */
  Status: number

  /**
   * 目标地址
   */
  TargetAddress: string

  /**
      * 付费模式
<li>1 = 试用版本</li>
<li> 2 = 付费版本 </li>
      */
  PayMode: number

  /**
      * 订单状态
<li>1 = 正常</li>
<li> 2 = 欠费 </li>
      */
  OrderState: number

  /**
      * 任务分类
<li>1 = PC</li>
<li> 2 = Mobile </li>
      */
  TaskCategory: number

  /**
   * 创建时间
   */
  CreatedAt: string

  /**
      * 定时任务cron表达式
注意：此字段可能返回 null，表示取不到有效值。
      */
  Cron: string

  /**
      * 定时任务启动状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  CronState: number

  /**
      * 任务当前绑定的标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  TagInfoList: Array<KeyValuePair>
}

/**
 * ResumeProbeTask返回参数结构体
 */
export interface ResumeProbeTaskResponse {
  /**
   * 任务总量
   */
  Total: number

  /**
      * 任务成功量
注意：此字段可能返回 null，表示取不到有效值。
      */
  SuccessCount: number

  /**
      * 任务执行详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  Results: Array<TaskResult>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteProbeTask返回参数结构体
 */
export interface DeleteProbeTaskResponse {
  /**
   * 任务总量
   */
  Total: number

  /**
      * 任务成功量
注意：此字段可能返回 null，表示取不到有效值。
      */
  SuccessCount: number

  /**
      * 任务执行结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  Results: Array<TaskResult>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateProbeTasks返回参数结构体
 */
export interface CreateProbeTasksResponse {
  /**
   * 任务ID列表
   */
  TaskIDs: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResumeProbeTask请求参数结构体
 */
export interface ResumeProbeTaskRequest {
  /**
   * 任务 ID
   */
  TaskIds: Array<string>
}

/**
 * DescribeProbeNodes请求参数结构体
 */
export interface DescribeProbeNodesRequest {
  /**
      * 节点类型
<li> 1 = IDC </li>
<li> 2 = LastMile </li>
<li> 3 = Mobile </li>
      */
  NodeType?: number

  /**
      * 节点区域
<li> 1 = 中国大陆 </li>
<li> 2 = 港澳台 </li>
<li> 3 = 海外 </li>
      */
  Location?: number

  /**
   * 是否IPv6
   */
  IsIPv6?: boolean

  /**
   * 名字模糊搜索
   */
  NodeName?: string

  /**
      * 付费模式
<li>1 = 试用版本</li>
<li> 2 = 付费版本 </li>
      */
  PayMode?: number
}

/**
 * 探测节点
 */
export interface NodeDefine {
  /**
   * 节点名称
   */
  Name: string

  /**
   * 节点代码
   */
  Code: string

  /**
      * 节点类型
<li> 1 = IDC </li>
<li> 2 = LastMile </li>
<li> 3 = Mobile </li>
      */
  Type: number

  /**
   * 网络服务商
   */
  NetService: string

  /**
   * 区域
   */
  District: string

  /**
   * 城市
   */
  City: string

  /**
      * IP 类型
<li> 1 = IPv4 </li>
<li> 2 = IPv6 </li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  IPType: number

  /**
      * 区域
<li> 1 = 中国大陆 </li>
<li> 2 = 港澳台 </li>
<li> 3 = 国外 </li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  Location: number

  /**
      * 节点类型  如果为base 则为可用性拨测点，为空则为高级拨测点
注意：此字段可能返回 null，表示取不到有效值。
      */
  CodeType: string

  /**
      * 节点状态：1-运行,2-下线
注意：此字段可能返回 null，表示取不到有效值。
      */
  NodeDefineStatus: number
}

/**
 * 资源的标签，通过标签对资源进行划分用于支持细粒度的鉴权、分账等场景
 */
export interface Tag {
  /**
   * key
   */
  TagKey: string

  /**
   * value
   */
  TagValue: string
}

/**
 * UpdateProbeTaskConfigurationList返回参数结构体
 */
export interface UpdateProbeTaskConfigurationListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 单条详细拨测数据
 */
export interface DetailedSingleDataDefine {
  /**
   * 拨测时间戳
   */
  ProbeTime: number

  /**
   * 储存所有string类型字段
   */
  Labels: Array<Label>

  /**
   * 储存所有float类型字段
   */
  Fields: Array<Field>
}
