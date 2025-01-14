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
 * DescribeNodes请求参数结构体
 */
export interface DescribeNodesRequest {
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
<li> 3 = 境外</li>
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
  /**
   * 任务类型
<li>1 = 页面性能</li>
<li>2 = 文件上传</li>
<li>3 = 文件下载</li>
<li>4 = 端口性能</li>
<li>5 = 网络质量</li>
<li>6 = 音视频体验</li>
   */
  TaskType?: number
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
  Total?: number
  /**
   * 任务成功量
注意：此字段可能返回 null，表示取不到有效值。
   */
  SuccessCount?: number
  /**
   * 任务执行结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Results?: Array<TaskResult>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 拨测任务基础配置
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
 * DescribeInstantTasks返回参数结构体
 */
export interface DescribeInstantTasksResponse {
  /**
   * 任务
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tasks?: Array<SingleInstantTask>
  /**
   * 总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
AnalyzeTaskType_Network：网络质量
AnalyzeTaskType_Browse：页面性能
AnalyzeTaskType_UploadDownload：文件传输（含文件上传、文件下载）
AnalyzeTaskType_Transport：端口性能
AnalyzeTaskType_MediaStream：音视频体验
   */
  TaskType: string
  /**
   * 待排序字段
可以填写 ProbeTime 拨测时间排序
也可填写SelectedFields 中的选中字段
   */
  SortField: string
  /**
   * true表示升序
   */
  Ascending: boolean
  /**
   * 选中字段，如ProbeTime、TransferTime、TransferSize等。
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
	
这里实际按拨测结果中的运营商来填写即可

电信：中国电信
移动：中国移动
联通：中国联通
   */
  Operators?: Array<string>
  /**
   * 拨测点地区
	
这里实际按拨测结果中的地区来填写即可

国内一般是省级单位，如广东、广西、中国香港；直辖市则填北京、上海

境外一般是国家名，如澳大利亚、新加坡
   */
  Districts?: Array<string>
  /**
   * 错误类型
   */
  ErrorTypes?: Array<string>
  /**
   * 城市
这里实际按拨测结果中的城市来填写即可

示例：

深圳市
武汉市
首尔
多伦多
   */
  City?: Array<string>
  /**
   * es scroll查询id
   */
  ScrollID?: string
  /**
   * 详情数据下载
   */
  QueryFlag?: string
}

/**
 * DescribeProbeTasks返回参数结构体
 */
export interface DescribeProbeTasksResponse {
  /**
   * 任务列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskSet?: Array<ProbeTask>
  /**
   * 任务总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateProbeTaskAttributes返回参数结构体
 */
export interface UpdateProbeTaskAttributesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 单个即时拨测任务信息
 */
export interface SingleInstantTask {
  /**
   * 任务ID
   */
  TaskId: string
  /**
   * 任务地址
   */
  TargetAddress: string
  /**
   * 任务类型
   */
  TaskType: number
  /**
   * 测试时间
   */
  ProbeTime: number
  /**
   * 任务状态
   */
  Status: string
  /**
   * 成功率
   */
  SuccessRate: number
  /**
   * 节点数量
   */
  NodeCount: number
  /**
   * 节点类型
   */
  TaskCategory: number
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
  DataSet?: Array<DetailedSingleDataDefine>
  /**
   * 符合条件的数据总数
   */
  TotalNumber?: number
  /**
   * es scroll查询的id
   */
  ScrollID?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 分析任务类型，支持以下几种类型：
AnalyzeTaskType_Network：网络质量
AnalyzeTaskType_Browse：页面性能
AnalyzeTaskType_Transport：端口性能
AnalyzeTaskType_UploadDownload：文件传输
AnalyzeTaskType_MediaStream：音视频体验
   */
  AnalyzeTaskType?: string
  /**
   * 指标类型（counter、gauge以及histogram），指标查询默认传gauge
   */
  MetricType?: string
  /**
   * 指标详细字段，可以传递传具体的指标也可以对指标进行聚合查询例如："avg(ping_time)"代表整体时延(ms)；不同的任务类型支持不同的field查询，以及聚合规则，详情可见https://cloud.tencent.com/document/product/248/87584。
   */
  Field?: string
  /**
   * 过滤条件可以传单个过滤条件也可以拼接多个参数
   */
  Filter?: string
  /**
   * 聚合时间, 1m、1d、30d 等等
   */
  GroupBy?: string
  /**
   * 多条件过滤，支持多个过滤条件组合查询
例如：[""host" = 'www.test.com'", "time >= now()-1h"]
   */
  Filters?: Array<string>
}

/**
 * UpdateProbeTaskAttributes请求参数结构体
 */
export interface UpdateProbeTaskAttributesRequest {
  /**
   * 任务 ID
   */
  TaskId: string
  /**
   * 任务名，该参数为空时不作任何修改。
   */
  Name?: string
}

/**
 * DescribeProbeNodes返回参数结构体
 */
export interface DescribeProbeNodesResponse {
  /**
   * 节点列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeSet?: Array<NodeDefine>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstantTasks请求参数结构体
 */
export interface DescribeInstantTasksRequest {
  /**
   * 数量
   */
  Limit: number
  /**
   * 起始位置
   */
  Offset: number
}

/**
 * UpdateProbeTaskConfigurationList请求参数结构体
 */
export interface UpdateProbeTaskConfigurationListRequest {
  /**
   * 任务 ID，如task-n1wchki8
   */
  TaskIds: Array<string>
  /**
   * 拨测节点，如10001，详细地区运营商拨测编号请联系云拨测。
   */
  Nodes: Array<string>
  /**
   * 拨测间隔，如30，单位为分钟。
   */
  Interval: number
  /**
   * 拨测参数，详细参数配置可参考云拨测官网文档。
   */
  Parameters: string
  /**
   * 定时任务cron表达式
   */
  Cron?: string
  /**
   * 预付费套餐id
需要与taskId对应
   */
  ResourceIDs?: Array<string>
  /**
   * 拨测节点的IP类型，0-不限，1-IPv4，2-IPv6
   */
  NodeIpType?: number
  /**
   * 批量任务名-地址
   */
  BatchTasks?: Array<ProbeTaskBasicConfiguration>
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
   * 任务类型，如1、2、3、4、5、6、7；1-页面性能、2-文件上传、3-文件下载、4-端口性能、5-网络质量、6-音视频体验、7-域名whois
   */
  TaskType: number
  /**
   * 拨测节点，如10001，具体拨测地域运营商对应的拨测点编号可联系云拨测确认。
   */
  Nodes: Array<string>
  /**
   * 拨测间隔
   */
  Interval: number
  /**
   * 拨测参数，详细可参考云拨测官方文档,链接:https://cloud.tencent.com/document/product/248/87308#createprobetasks。
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
   * 测试类型，包含定时测试与即时测试。0-定时拨测，其它表示即时拨测。
   */
  ProbeType?: number
  /**
   * 插件类型，如CDN，详情参考云拨测官方文档。
   */
  PluginSource?: string
  /**
   * 客户端ID
   */
  ClientNum?: string
  /**
   * 拨测点IP类型：0-不限制IP类型，1-IPv4，2-IPv6
   */
  NodeIpType?: number
  /**
   * 供应商子账户同步标志
   */
  SubSyncFlag?: number
}

/**
 * 拨测任务
 */
export interface ProbeTask {
  /**
   * 任务名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 任务 ID
   */
  TaskId?: string
  /**
   * 拨测类型
<li>1 = 页面浏览</li>
<li> 2 =文件上传 </li>
<li> 3 = 文件下载</li>
<li> 4 = 端口性能 </li>
<li> 5 = 网络质量 </li>
<li> 6 =流媒体 </li>

即时拨测只支持页面浏览，网络质量，文件下载
   */
  TaskType?: number
  /**
   * 拨测节点列表
   */
  Nodes?: Array<string>
  /**
   * 拨测任务所选的拨测点IP类型，0-不限，1-IPv4，2-IPv6
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeIpType?: number
  /**
   * 拨测间隔
   */
  Interval?: number
  /**
   * 拨测参数
   */
  Parameters?: string
  /**
   * 任务状态
<li>1 = 创建中</li>
<li> 2 = 运行中 </li>
<li> 3 = 运行异常 </li>
<li> 4 = 暂停中 </li>
<li> 5 = 暂停异常 </li>
<li> 6 = 任务暂停 </li>
<li> 7 = 任务删除中 </li>
<li> 8 = 任务删除异常 </li>
<li> 9 = 任务删除</li>
<li> 10 = 定时任务暂停中 </li>
   */
  Status?: number
  /**
   * 目标地址
   */
  TargetAddress?: string
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
   * 任务分类
<li>1 = PC</li>
<li> 2 = Mobile </li>
   */
  TaskCategory?: number
  /**
   * 创建时间
   */
  CreatedAt?: string
  /**
   * 定时任务cron表达式
注意：此字段可能返回 null，表示取不到有效值。
   */
  Cron?: string
  /**
   * 定时任务启动状态
<li>1 = 定时任务表达式生效</li>
<li> 2 = 定时任务表达式未生效（一般为任务手动暂停）</li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CronState?: number
  /**
   * 任务当前绑定的标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagInfoList?: Array<KeyValuePair>
  /**
   * 是否为同步账号
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubSyncFlag?: number
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
<li>1 = 创建中</li>
<li> 2 = 运行中 </li>
<li> 3 = 运行异常 </li>
<li> 4 = 暂停中 </li>
<li> 5 = 暂停异常 </li>
<li> 6 = 任务暂停 </li>
<li> 7 = 任务删除中 </li>
<li> 8 = 任务删除异常 </li>
<li> 9 = 任务删除</li>
<li> 10 = 定时任务暂停中 </li>
   */
  TaskStatus?: Array<number | bigint>
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
<li>1 = 页面浏览</li>
<li> 2 =文件上传 </li>
<li> 3 = 文件下载</li>
<li> 4 = 端口性能 </li>
<li> 5 = 网络质量 </li>
<li> 6 =流媒体 </li>

即使拨测只支持页面浏览，网络质量，文件下载
   */
  TaskType?: Array<number | bigint>
  /**
   * 节点类型
   */
  TaskCategory?: Array<number | bigint>
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
 * ResumeProbeTask返回参数结构体
 */
export interface ResumeProbeTaskResponse {
  /**
   * 任务总量
   */
  Total?: number
  /**
   * 任务成功量
注意：此字段可能返回 null，表示取不到有效值。
   */
  SuccessCount?: number
  /**
   * 任务执行详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Results?: Array<TaskResult>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  Total?: number
  /**
   * 任务成功量
注意：此字段可能返回 null，表示取不到有效值。
   */
  SuccessCount?: number
  /**
   * 任务执行结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Results?: Array<TaskResult>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
  TaskIDs?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * 探测节点
 */
export interface NodeDefineExt {
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
<li> 3 = 境外 </li>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Location: number
  /**
   * 节点类型  如果为base 则为可用性拨测点，为空则为高级拨测点
注意：此字段可能返回 null，表示取不到有效值。
   */
  CodeType: string
  /**
   * 节点支持的任务类型。1: 页面性能 2: 文件上传 3: 文件下载 4: 端口性能 5: 网络质量 6: 音视频体验
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskTypes: Array<number | bigint>
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
 * DescribeNodes返回参数结构体
 */
export interface DescribeNodesResponse {
  /**
   * 节点列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeSet?: Array<NodeDefineExt>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProbeMetricData返回参数结构体
 */
export interface DescribeProbeMetricDataResponse {
  /**
   *  返回指标 JSON 序列化后的字符串，具体如下所示："[{\"name\":\"task_navigate_request_gauge\",\"columns\":[\"time\",\"avg(first_screen_time) / 1000\"],\"values\":[[1641571200,6.756600000000001]],\"tags\":null}]"
   */
  MetricSet?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateProbeTaskConfigurationList返回参数结构体
 */
export interface UpdateProbeTaskConfigurationListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
