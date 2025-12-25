/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
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
 * DescribeCloudRunServers返回参数结构体
 */
export interface DescribeCloudRunServersResponse {
  /**
   * 服务列表
   */
  ServerList?: Array<ServerBaseInfo>
  /**
   * 服务总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 服务基础配置信息
 */
export interface ServerBaseConfig {
  /**
   * 环境 Id
   */
  EnvId: string
  /**
   * 服务名
   */
  ServerName: string
  /**
   * 是否开启公网访问
   */
  OpenAccessTypes: Array<string>
  /**
   * Cpu 规格
   */
  Cpu: number
  /**
   * Mem 规格
   */
  Mem: number
  /**
   * 最小副本数
   */
  MinNum: number
  /**
   * 最大副本数
   */
  MaxNum: number
  /**
   * 扩缩容配置
   */
  PolicyDetails: Array<HpaPolicy>
  /**
   * 日志采集路径
   */
  CustomLogs: string
  /**
   * 环境变量
   */
  EnvParams: string
  /**
   * 延迟检测时间
   */
  InitialDelaySeconds: number
  /**
   * 创建时间
   */
  CreateTime: string
  /**
   * 服务端口
   */
  Port: number
  /**
   * 是否有Dockerfile
   */
  HasDockerfile: boolean
  /**
   * Dockerfile 文件名
   */
  Dockerfile: string
  /**
   * 构建目录
   */
  BuildDir: string
  /**
   * 日志类型: none | default | custom
   */
  LogType?: string
  /**
   * cls setId
   */
  LogSetId?: string
  /**
   * cls 主题id
   */
  LogTopicId?: string
  /**
   * 解析类型：json ｜ line
   */
  LogParseType?: string
  /**
   * 服务标签, function: 函数托管
   */
  Tag?: string
  /**
   * 内网访问开关 close | open
   */
  InternalAccess?: string
  /**
   * 内网域名
   */
  InternalDomain?: string
  /**
   * 运行模式
   */
  OperationMode?: string
  /**
   * 定时扩缩容配置
   */
  TimerScale?: Array<TimerScale>
  /**
   * Dockerfile EntryPoint 参数
   */
  EntryPoint?: Array<string>
  /**
   * Dockerfile Cmd 参数
   */
  Cmd?: Array<string>
  /**
   * 会话亲和性开关
注意：此字段可能返回 null，表示取不到有效值。
   */
  SessionAffinity?: string
  /**
   * Vpc 配置参数
   */
  VpcConf?: VpcConf
  /**
   * 存储配置信息
   */
  VolumesConf?: Array<VolumeConf>
  /**
   * 关联镜像密钥
   */
  LinkImageRegistry?: string
}

/**
 * DescribeCloudRunProcessLog请求参数结构体
 */
export interface DescribeCloudRunProcessLogRequest {
  /**
   * 环境 Id
   */
  EnvId: string
  /**
   * 操作 Id
   */
  RunId: string
}

/**
 * 代码仓库信息
 */
export interface RepositoryInfo {
  /**
   * git source
   */
  Source: string
  /**
   * 仓库名
   */
  Repo: string
  /**
   * 分支名
   */
  Branch: string
}

/**
 * ReleaseGray请求参数结构体
 */
export interface ReleaseGrayRequest {
  /**
   * 环境Id
   */
  EnvId: string
  /**
   * 服务名
   */
  ServerName: string
  /**
   * 灰度类型
   */
  GrayType: string
  /**
   * 流量类型
   */
  TrafficType: string
  /**
   * 流量策略
   */
  VersionFlowItems?: Array<VersionFlowInfo>
  /**
   * 操作标识
   */
  OperatorRemark?: string
  /**
   * 流量比例
   */
  GrayFlowRatio?: number
}

/**
 * StorageInfo 资源信息
 */
export interface StorageInfo {
  /**
   * 资源所属地域。
当前支持ap-shanghai
   */
  Region: string
  /**
   * 桶名，存储资源的唯一标识
   */
  Bucket: string
  /**
   * cdn 域名
   */
  CdnDomain: string
  /**
   * 资源所属用户的腾讯云appId
   */
  AppId: string
}

/**
 * DescribeEnvBaseInfo返回参数结构体
 */
export interface DescribeEnvBaseInfoResponse {
  /**
   * <p>环境基础信息</p>
   */
  EnvBaseInfo?: EnvBaseInfo
  /**
   * <p>是否存在</p>
   */
  IsExist?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云托管实例的部署记录, 包括扩缩容状态和流量分配情况
 */
export interface DeployRecord {
  /**
   * 部署Id
   */
  DeployId?: string
  /**
   * 部署开始时间
   */
  DeployTime?: string
  /**
   * 状态：running/deploying/deploy_failed
   */
  Status?: string
  /**
   * 部署运行Id 用户查询部署日志
   */
  RunId?: string
  /**
   * 构建Id
   */
  BuildId?: number
  /**
   * 流量比例
   */
  FlowRatio?: number
  /**
   * 镜像url
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageUrl?: string
  /**
   * 缩容状态 缩容为 zero 否则为空
   */
  ScaleStatus?: string
  /**
   * 是否分配流量
   */
  HasTraffic?: boolean
  /**
   * 流量分配方式, FLOW: 百分比分配; URL_PARAMS: 匹配 query 参数; HEADERS: 匹配请求 Header
   */
  TrafficType?: string
  /**
   * 当前版本是否在发布中
   */
  IsReleasing?: boolean
}

/**
 * CreateCloudRunServer请求参数结构体
 */
export interface CreateCloudRunServerRequest {
  /**
   * <p>环境Id</p>
   */
  EnvId: string
  /**
   * <p>服务名</p>
   */
  ServerName: string
  /**
   * <p>部署信息</p>
   */
  DeployInfo: DeployParam
  /**
   * <p>服务配置信息(已废弃)</p>
   */
  ServerConfig?: ServerBaseConfig
  /**
   * <p>服务配置信息</p>
   */
  Items?: Array<DiffConfigItem>
  /**
   * <p>vpc 信息</p>
   */
  VpcInfo?: CreateVpcInfo
}

/**
 * 创建 vpc 信息
 */
export interface CreateVpcInfo {
  /**
   * vpc id
   */
  VpcId: string
  /**
   * 1 新建 2 指定
   */
  CreateType: number
  /**
   * 子网ID列表
   */
  SubnetIds?: Array<string>
}

/**
 * DescribeServerManageTask返回参数结构体
 */
export interface DescribeServerManageTaskResponse {
  /**
   * 是否存在
   */
  IsExist?: boolean
  /**
   * 任务信息
   */
  Task?: ServerManageTaskInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SearchClsLog返回参数结构体
 */
export interface SearchClsLogResponse {
  /**
   * 日志内容结果
   */
  LogResults?: LogResObject
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 版本Pod实例信息
 */
export interface VersionPodInstance {
  /**
   * 实例webshell链接
   */
  Webshell?: string
  /**
   * 实例Id
   */
  PodId?: string
  /**
   * 实例状态
   */
  Status?: string
  /**
   * 创建时间
   */
  CreateTime?: string
}

/**
 * DescribeVersionDetail请求参数结构体
 */
export interface DescribeVersionDetailRequest {
  /**
   * <p>环境Id</p>
   */
  EnvId: string
  /**
   * <p>服务名</p>
   */
  ServerName: string
  /**
   * <p>版本名</p>
   */
  VersionName: string
  /**
   * <p>channel</p>
   */
  Channel?: string
}

/**
 * 任务步骤信息
 */
export interface TaskStepInfo {
  /**
   * 步骤名
   */
  Name?: string
  /**
   * 未启动："todo"
运行中："running"
失败："failed"
成功结束："finished"
   */
  Status?: string
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
  /**
   * 消耗时间：秒
   */
  CostTime?: number
  /**
   * 失败原因
   */
  FailReason?: string
}

/**
 * DescribeCloudRunEnvs返回参数结构体
 */
export interface DescribeCloudRunEnvsResponse {
  /**
   * 环境信息列表
   */
  EnvList?: Array<EnvInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 服务基本信息
 */
export interface ServerBaseInfo {
  /**
   * 服务名
   */
  ServerName?: string
  /**
   * 默认服务域名
   */
  DefaultDomainName?: string
  /**
   * 自定义域名
   */
  CustomDomainName?: string
  /**
   * 服务状态：running/deploying/deploy_failed
   */
  Status?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
  /**
   * 公网访问类型
   */
  AccessTypes?: Array<string>
  /**
   * 展示自定义域名
   */
  CustomDomainNames?: Array<string>
  /**
   * 服务类型: function 云函数2.0；container 容器服务
   */
  ServerType?: string
  /**
   * 流量类型，目前只有 FLOW
   */
  TrafficType?: string
  /**
   * 创建时间
   */
  CreateTime?: string
}

/**
 * DescribeCloudRunEnvs请求参数结构体
 */
export interface DescribeCloudRunEnvsRequest {
  /**
   * 环境ID，如果传了这个参数则只返回该环境的相关信息
   */
  EnvId?: string
  /**
   * 指定Channels字段为可见渠道列表或不可见渠道列表
如只想获取渠道A的环境 就填写IsVisible= true,Channels = ["A"], 过滤渠道A拉取其他渠道环境时填写IsVisible= false,Channels = ["A"]
   */
  IsVisible?: boolean
  /**
   * 渠道列表，代表可见或不可见渠道由IsVisible参数指定
   */
  Channels?: Array<string>
}

/**
 * ReleaseGray返回参数结构体
 */
export interface ReleaseGrayResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudRunProcessLog返回参数结构体
 */
export interface DescribeCloudRunProcessLogResponse {
  /**
   * 运行日志列表
   */
  Logs?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 版本流量信息
 */
export interface VersionFlowInfo {
  /**
   * 版本名
   */
  VersionName: string
  /**
   * 是否默认版本
   */
  IsDefaultPriority: boolean
  /**
   * 流量比例
   */
  FlowRatio?: number
  /**
   * 测试KV值
   */
  UrlParam?: ObjectKV
  /**
   * 权重
   */
  Priority?: number
}

/**
 * 部署参数
 */
export interface DeployParam {
  /**
   * 部署类型：package/image/repository/pipeline/jar/war
   */
  DeployType: string
  /**
   * 部署类型为image时传入
   */
  ImageUrl?: string
  /**
   * 部署类型为package时传入
   */
  PackageName?: string
  /**
   * 部署类型为package时传入
   */
  PackageVersion?: string
  /**
   * 部署备注
   */
  DeployRemark?: string
  /**
   * 代码仓库信息
   */
  RepoInfo?: RepositoryInfo
  /**
   * 无Dockerfile时填写
   */
  BuildPacks?: BuildPacksInfo
  /**
   * 发布类型 GRAY | FULL
   */
  ReleaseType?: string
}

/**
 * 服务配置入参
 */
export interface DiffConfigItem {
  /**
   * 配置项 Key
MinNum 最小副本数
MaxNum 最大副本数
PolicyDetails 扩缩容策略
AccessTypes 访问类型
TimerScale 定时扩缩容
InternalAccess 内网访问
OperationMode 运行模式 noScale | condScale | alwaysScale | custom ｜ manualScale
SessionAffinity 会话亲和性 open | close
CpuSpecs cpu 规格
MemSpecs mem规格
EnvParam 环境变量
LogPath 日志采集路径
Port 端口
Dockerfile dockerfile 文件名
BuildDir 目标目录
Tag 服务标签
LogType 日志类型 none | default | custom 
LogSetId 日志集Id
LogTopicId 日志主题ID
LogParseType 日志解析类型 json ｜ line
EntryPoint entrypoint 命令
Cmd cmd命令
VpcConf 网络信息
   */
  Key: string
  /**
   * 字符串类型配置项值
InternalAccess、OperationMode、SessionAffinity、EnvParam、LogPath、Dockerfile、BuildDir、Tag、LogType、LogSetId、LogTopicId、LogParseType
   */
  Value?: string
  /**
   * int 类型配置项值
MinNum、MaxNum、Port
   */
  IntValue?: number
  /**
   * bool 类型配置项值
   */
  BoolValue?: boolean
  /**
   * 浮点型配置项值
CpuSpecs、MemSpecs
   */
  FloatValue?: number
  /**
   * 字符串数组配置项值
AccessTypes，EntryPoint，Cmd
   */
  ArrayValue?: Array<string>
  /**
   * 扩缩容策略配置项值
   */
  PolicyDetails?: Array<HpaPolicy>
  /**
   * 定时扩缩容配置项值
   */
  TimerScale?: Array<TimerScale>
  /**
   * 配置内网访问时网络信息
   */
  VpcConf?: VpcConf
  /**
   * 存储配置信息
   */
  VolumesConf?: Array<VolumeConf>
}

/**
 * SubmitServerRollback返回参数结构体
 */
export interface SubmitServerRollbackResponse {
  /**
   * 任务Id
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 存储配置
 */
export interface VolumeConf {
  /**
   * 存储类型
   */
  Type?: string
  /**
   * 对象存储桶名称
   */
  BucketName?: string
  /**
   * 存储连接地址
   */
  Endpoint?: string
  /**
   * 存储连接用户密码
   */
  KeyID?: string
  /**
   * 存储挂载目的目录
   */
  DstPath?: string
  /**
   * 存储挂载源目录
   */
  SrcPath?: string
}

/**
 * 标签键值对
 */
export interface Tag {
  /**
   * 标签键
   */
  Key: string
  /**
   * 标签值
   */
  Value: string
}

/**
 * 在线版本信息
 */
export interface OnlineVersionInfo {
  /**
   * 版本名
   */
  VersionName?: string
  /**
   * 镜像url
   */
  ImageUrl?: string
  /**
   * 流量
   */
  FlowRatio?: string
}

/**
 * SearchClsLog请求参数结构体
 */
export interface SearchClsLogRequest {
  /**
   * 环境Id
   */
  EnvId: string
  /**
   * 开始时间
   */
  StartTime: string
  /**
   * 结束时间
   */
  EndTime: string
  /**
   * 查询语句，详情参考 https://cloud.tencent.com/document/product/614/47044
   */
  QueryString: string
  /**
   * 单次要返回的日志条数，单次返回的最大条数为100
   */
  Limit: number
  /**
   * 加载更多使用，透传上次返回的 context 值，获取后续的日志内容，通过游标最多可获取10000条，请尽可能缩小时间范围
   */
  Context?: string
  /**
   * 按时间排序 asc（升序）或者 desc（降序），默认为 desc
   */
  Sort?: string
  /**
   * 是否使用Lucene语法，默认为false
   */
  UseLucene?: boolean
  /**
   * 日志类型
   */
  LogType?: number
}

/**
 * DescribeCloudRunPodList请求参数结构体
 */
export interface DescribeCloudRunPodListRequest {
  /**
   * 环境Id
   */
  EnvId: string
  /**
   * 服务名
   */
  ServerName: string
  /**
   * 版本名
   */
  VersionName?: string
  /**
   * 默认为10， 最大为50
不传或传0时 取默认10
大于50时取50
   */
  PageSize?: number
  /**
   * 不传或传0时 会默认为1
   */
  PageNum?: number
}

/**
 * 通用键值权重对
 */
export interface ObjectKVPriority {
  /**
   * 键值对Key
   */
  Key: string
  /**
   * 键值对Value
   */
  Value: string
  /**
   * 键值对权重
   */
  Priority: number
}

/**
 * DescribeReleaseOrder返回参数结构体
 */
export interface DescribeReleaseOrderResponse {
  /**
   * 是否存在
   */
  IsExist?: boolean
  /**
   * 发布单信息
   */
  ReleaseOrderInfo?: ReleaseOrderInfo
  /**
   * 上一次成功发布时间
   */
  LastReleasedSuccessTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 静态CDN资源信息
 */
export interface StaticStorageInfo {
  /**
   * 静态CDN域名
   */
  StaticDomain: string
  /**
   * 静态CDN默认文件夹，当前为根目录
   */
  DefaultDirName: string
  /**
   * 资源状态(process/online/offline/init)
   */
  Status: string
  /**
   * cos所属区域
   */
  Region: string
  /**
   * bucket信息
   */
  Bucket: string
}

/**
 * CLS日志结果
 */
export interface LogResObject {
  /**
   * 获取更多检索结果的游标
注意：此字段可能返回 null，表示取不到有效值。
   */
  Context: string
  /**
   * 搜索结果是否已经全部返回
注意：此字段可能返回 null，表示取不到有效值。
   */
  ListOver: boolean
  /**
   * 日志内容信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Results: Array<LogObject>
}

/**
 * UpdateCloudRunServer请求参数结构体
 */
export interface UpdateCloudRunServerRequest {
  /**
   * <p>环境Id</p>
   */
  EnvId: string
  /**
   * <p>服务名</p>
   */
  ServerName: string
  /**
   * <p>部署信息</p>
   */
  DeployInfo: DeployParam
  /**
   * <p>服务配置信息(已废弃)</p>
   */
  ServerConfig?: ServerBaseConfig
  /**
   * <p>业务类型，默认tcr</p>
   */
  Business?: string
  /**
   * <p>服务配置信息</p>
   */
  Items?: Array<DiffConfigItem>
}

/**
 * 云日志服务相关信息
 */
export interface LogServiceInfo {
  /**
   * log名
   */
  LogsetName: string
  /**
   * log-id
   */
  LogsetId: string
  /**
   * topic名
   */
  TopicName: string
  /**
   * topic-id
   */
  TopicId: string
  /**
   * cls日志所属地域
   */
  Region: string
}

/**
 * OperateServerManage返回参数结构体
 */
export interface OperateServerManageResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudRunServerDetail请求参数结构体
 */
export interface DescribeCloudRunServerDetailRequest {
  /**
   * 环境Id
   */
  EnvId: string
  /**
   * 服务名
   */
  ServerName: string
}

/**
 * 数据库资源信息
 */
export interface DatabasesInfo {
  /**
   * 数据库唯一标识
   */
  InstanceId: string
  /**
   * 状态。包含以下取值：
<li>INITIALIZING：资源初始化中</li>
<li>RUNNING：运行中，可正常使用的状态</li>
<li>UNUSABLE：禁用，不可用</li>
<li>OVERDUE：资源过期</li>
   */
  Status: string
  /**
   * 所属地域。
当前支持ap-shanghai
   */
  Region: string
}

/**
 * DescribeCloudRunServers请求参数结构体
 */
export interface DescribeCloudRunServersRequest {
  /**
   * 环境Id
   */
  EnvId: string
  /**
   * 默认为9， 最大为30
不传或传0时 取默认9
大于30时取30
   */
  PageSize?: number
  /**
   * 不传或传0时 会默认为1
   */
  PageNum?: number
  /**
   * 服务名
   */
  ServerName?: string
  /**
   * 服务类型：function | container
   */
  ServerType?: string
  /**
   * vpcId
   */
  VpcId?: string
}

/**
 * DeleteCloudRunServer请求参数结构体
 */
export interface DeleteCloudRunServerRequest {
  /**
   * 环境Id
   */
  EnvId: string
  /**
   * 服务名
   */
  ServerName: string
  /**
   * 操作人信息
   */
  OperatorRemark?: string
}

/**
 * cls日志信息
 */
export interface ClsInfo {
  /**
   * cls所属地域
   */
  ClsRegion: string
  /**
   * cls日志集ID
   */
  ClsLogsetId: string
  /**
   * cls日志主题ID
   */
  ClsTopicId: string
  /**
   * 创建时间
   */
  CreateTime: string
}

/**
 * DescribeServerManageTask请求参数结构体
 */
export interface DescribeServerManageTaskRequest {
  /**
   * 环境Id
   */
  EnvId: string
  /**
   * 服务名
   */
  ServerName: string
  /**
   * 任务Id
   */
  TaskId: number
  /**
   * 操作标识
   */
  OperatorRemark?: string
}

/**
 * 云托管服务 Vpc 配置
 */
export interface VpcConf {
  /**
   * vpc id
   */
  VpcId?: string
  /**
   * vpc 网段
   */
  VpcCIDR?: string
  /**
   * subnet id
   */
  SubnetId?: string
  /**
   * subnet 网段
   */
  SubnetCIDR?: string
}

/**
 * 扩缩容入参
 */
export interface HpaPolicy {
  /**
   * 扩缩容类型
   */
  PolicyType: string
  /**
   * 扩缩容阈值
   */
  PolicyThreshold: number
}

/**
 * OperateServerManage请求参数结构体
 */
export interface OperateServerManageRequest {
  /**
   * 环境Id
   */
  EnvId: string
  /**
   * 服务名
   */
  ServerName: string
  /**
   * 任报Id
   */
  TaskId: number
  /**
   * 操作类型:cancel | go_back | done
   */
  OperateType: string
  /**
   * 操作标识
   */
  OperatorRemark?: string
}

/**
 * CLS日志单条信息
 */
export interface LogObject {
  /**
   * 日志属于的 topic ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicId?: string
  /**
   * 日志主题的名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopicName?: string
  /**
   * 日志时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Timestamp?: string
  /**
   * 日志内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Content?: string
  /**
   * 采集路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileName?: string
  /**
   * 日志来源设备
注意：此字段可能返回 null，表示取不到有效值。
   */
  Source?: string
  /**
   * 日志唯一标识
   */
  PkgLogId?: string
}

/**
 * 删除版本时需要的简化信息
 */
export interface SimpleVersion {
  /**
   * 要删除版本的环境 Id
   */
  EnvId: string
  /**
   * 要删除版本的服务名
   */
  ServerName: string
  /**
   * 要删除版本的版本名
   */
  VersionName: string
}

/**
 * 通用Key Value
 */
export interface ObjectKV {
  /**
   * 键值对Key
   */
  Key: string
  /**
   * 键值对Value
   */
  Value: string
}

/**
 * DescribeReleaseOrder请求参数结构体
 */
export interface DescribeReleaseOrderRequest {
  /**
   * 环境 Id
   */
  EnvId: string
  /**
   * 服务名
   */
  ServerName: string
  /**
   * 发布单状态
   */
  Status?: string
}

/**
 * 环境基础信息
 */
export interface EnvBaseInfo {
  /**
   * 环境Id
   */
  EnvId?: string
  /**
   * 套餐类型：Trial ｜ Standard ｜ Professional ｜ Enterprise
   */
  PackageType?: string
  /**
   * VPC Id
   */
  VpcId?: string
  /**
   * 环境创建时间
   */
  CreateTime?: string
  /**
   * 环境别名
   */
  Alias?: string
  /**
   * 环境状态
   */
  Status?: string
  /**
   * 环境地域
   */
  Region?: string
  /**
   * 环境类型 tcbr ｜ run
   */
  EnvType?: string
  /**
   * 子网id
   */
  SubnetIds?: string
  /**
   * 回收标志，为空则表示正常，recycle表示已回收
   */
  Recycle?: string
}

/**
 * 函数的信息
 */
export interface FunctionInfo {
  /**
   * 命名空间
   */
  Namespace: string
  /**
   * 所属地域。
当前支持ap-shanghai
   */
  Region: string
}

/**
 * DescribeCloudRunServerDetail返回参数结构体
 */
export interface DescribeCloudRunServerDetailResponse {
  /**
   * 服务基本信息
   */
  BaseInfo?: ServerBaseInfo
  /**
   * 服务配置信息
   */
  ServerConfig?: ServerBaseConfig
  /**
   * 在线版本信息
   */
  OnlineVersionInfos?: Array<OnlineVersionInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCloudRunEnv返回参数结构体
 */
export interface CreateCloudRunEnvResponse {
  /**
   * <p>环境Id</p>
   */
  EnvId?: string
  /**
   * <p>后付费订单号</p>
   */
  TranId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudRunDeployRecord请求参数结构体
 */
export interface DescribeCloudRunDeployRecordRequest {
  /**
   * 环境Id
   */
  EnvId: string
  /**
   * 服务名
   */
  ServerName: string
}

/**
 * 发布单信息
 */
export interface ReleaseOrderInfo {
  /**
   * 发布单Id
   */
  Id: number
  /**
   * 服务名
   */
  ServerName: string
  /**
   * 当前版本
   */
  CurrentVersion: VersionInfo
  /**
   * 发布版本
   */
  ReleaseVersion: VersionInfo
  /**
   * 灰度状态
   */
  GrayStatus: string
  /**
   * 发布状态
   */
  ReleaseStatus: string
  /**
   * 流量值
   */
  TrafficTypeValues: Array<ObjectKV>
  /**
   * 流量类型
   */
  TrafficType: string
  /**
   * 百分比
   */
  FlowRatio: number
  /**
   * 创建时间
   */
  CreateTime: string
  /**
   * 是否发布中
   */
  IsReleasing: boolean
}

/**
 * DeleteCloudRunVersions请求参数结构体
 */
export interface DeleteCloudRunVersionsRequest {
  /**
   * 环境 Id
   */
  EnvId: string
  /**
   * 是否删除服务，只有最后一个版本的时候才生效
   */
  IsDeleteServer: boolean
  /**
   * 只有删除服务的时候，才生效
   */
  IsDeleteImage: boolean
  /**
   * 删除版本的信息
   */
  SimpleVersions: Array<SimpleVersion>
  /**
   * 操作备注
   */
  OperatorRemark?: string
}

/**
 * DeleteCloudRunServer返回参数结构体
 */
export interface DeleteCloudRunServerResponse {
  /**
   * 删除结果：success / failed
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudRunPodList返回参数结构体
 */
export interface DescribeCloudRunPodListResponse {
  /**
   * pod实例列表
   */
  PodList?: Array<VersionPodInstance>
  /**
   * pod总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 定时扩缩容配置
 */
export interface TimerScale {
  /**
   * 循环类型
   */
  CycleType?: string
  /**
   * 循环起始
   */
  StartDate?: string
  /**
   * 循环结束
   */
  EndDate?: string
  /**
   * 起始时间
   */
  StartTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
  /**
   * 副本个数
   */
  ReplicaNum?: number
}

/**
 * 环境信息
 */
export interface EnvInfo {
  /**
   * 账户下该环境唯一标识
   */
  EnvId?: string
  /**
   * 环境来源。包含以下取值：
<li>miniapp：微信小程序</li>
<li>qcloud ：腾讯云</li>
   */
  Source?: string
  /**
   * 环境别名，要以a-z开头，不能包含 a-zA-z0-9- 以外的字符
   */
  Alias?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 最后修改时间
   */
  UpdateTime?: string
  /**
   * 环境状态。包含以下取值：
<li>NORMAL：正常可用</li>
<li>UNAVAILABLE：服务不可用，可能是尚未初始化或者初始化过程中</li>
   */
  Status?: string
  /**
   * 是否到期自动降为免费版
   */
  IsAutoDegrade?: boolean
  /**
   * 环境渠道
   */
  EnvChannel?: string
  /**
   * 支付方式。包含以下取值：
<li> prepayment：预付费</li>
<li> postpaid：后付费</li>
   */
  PayMode?: string
  /**
   * 是否为默认环境
   */
  IsDefault?: boolean
  /**
   * 环境所属地域
   */
  Region?: string
  /**
   * 环境类型：baas, run, hosting, weda,tcbr
   */
  EnvType?: string
  /**
   * 数据库列表
   */
  Databases?: Array<DatabasesInfo>
  /**
   * 存储列表
   */
  Storages?: Array<StorageInfo>
  /**
   * 函数列表
   */
  Functions?: Array<FunctionInfo>
  /**
   * 云日志服务列表
   */
  LogServices?: Array<LogServiceInfo>
  /**
   * 静态资源信息
   */
  StaticStorages?: Array<StaticStorageInfo>
  /**
   * 环境标签列表
   */
  Tags?: Array<Tag>
  /**
   * 自定义日志服务
   */
  CustomLogServices?: Array<ClsInfo>
  /**
   * tcb产品套餐ID，参考DescribePackages接口的返回值。
   */
  PackageId?: string
  /**
   * 套餐中文名称，参考DescribePackages接口的返回值。
   */
  PackageName?: string
}

/**
 * 删除失败版本信息
 */
export interface FailDeleteVersions {
  /**
   * 删除失败版本信息
   */
  Version: SimpleVersion
  /**
   * 删除失败错误码
   */
  ErrorCode: number
  /**
   * 删除失败错误信息
   */
  ErrorMsg: string
  /**
   * 删除操作 RequestId
   */
  RequestId: string
}

/**
 * SubmitServerRollback请求参数结构体
 */
export interface SubmitServerRollbackRequest {
  /**
   * 环境Id
   */
  EnvId: string
  /**
   * 服务名
   */
  ServerName: string
  /**
   * 当前版本
   */
  CurrentVersionName: string
  /**
   * 回滚版本
   */
  RollbackVersionName: string
  /**
   * 操作标识
   */
  OperatorRemark?: string
}

/**
 * DescribeEnvBaseInfo请求参数结构体
 */
export interface DescribeEnvBaseInfoRequest {
  /**
   * <p>环境 Id</p>
   */
  EnvId: string
}

/**
 * CreateCloudRunEnv请求参数结构体
 */
export interface CreateCloudRunEnvRequest {
  /**
   * <p>Trial,Standard,Professional,Enterprise</p>
   */
  PackageType: string
  /**
   * <p>环境别名，要以a-z开头，不能包含 a-z,0-9,- 以外的字符</p>
   */
  Alias?: string
  /**
   * <p>用户享有的免费额度级别，目前只能为“basic”，不传该字段或该字段为空，标识不享受免费额度。</p>
   */
  FreeQuota?: string
  /**
   * <p>订单标记。建议使用方统一转大小写之后再判断。QuickStart：快速启动来源Activity：活动来源</p>
   */
  Flag?: string
  /**
   * <p>私有网络Id</p>
   */
  VpcId?: string
  /**
   * <p>子网列表</p>
   */
  SubNetIds?: Array<string>
  /**
   * <p>请求key 用于防重</p>
   */
  ReqKey?: string
  /**
   * <p>来源：wechat | cloud | weda</p>
   */
  Source?: string
  /**
   * <p>渠道：wechat | cloud | weda</p>
   */
  Channel?: string
  /**
   * <p>环境ID 云开发平台必填</p>
   */
  EnvId?: string
}

/**
 * CreateCloudRunServer返回参数结构体
 */
export interface CreateCloudRunServerResponse {
  /**
   * <p>一键部署任务Id，微信云托管，暂时用不到</p>
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteCloudRunVersions返回参数结构体
 */
export interface DeleteCloudRunVersionsResponse {
  /**
   * succ | fail | partial
   */
  Result?: string
  /**
   * 删除失败的版本列表
   */
  FailVersions?: Array<FailDeleteVersions>
  /**
   * 删除成功的版本列表
   */
  SuccessVersions?: Array<SuccessDeleteVersions>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateCloudRunServer返回参数结构体
 */
export interface UpdateCloudRunServerResponse {
  /**
   * <p>环境Id</p>
   */
  EnvId?: string
  /**
   * <p>一键部署任务Id，暂时用不到</p>
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVersionDetail返回参数结构体
 */
export interface DescribeVersionDetailResponse {
  /**
   * <p>版本名</p>
   */
  Name?: string
  /**
   * <p>端口号</p>
   */
  Port?: number
  /**
   * <p>cpu 规格</p>
   */
  Cpu?: number
  /**
   * <p>mem 规格</p>
   */
  Mem?: number
  /**
   * <p>最小副本数</p>
   */
  MinNum?: number
  /**
   * <p>最大副本数</p>
   */
  MaxNum?: number
  /**
   * <p>扩缩容策略</p>
   */
  PolicyDetails?: Array<HpaPolicy>
  /**
   * <p>Dockerfile path</p>
   */
  Dockerfile?: string
  /**
   * <p>目标目录</p>
   */
  BuildDir?: string
  /**
   * <p>环境变量</p>
   */
  EnvParams?: string
  /**
   * <p>状态</p>
   */
  Status?: string
  /**
   * <p>创建时间</p>
   */
  CreatedTime?: string
  /**
   * <p>更新时间</p>
   */
  UpdatedTime?: string
  /**
   * <p>日志采集路径</p>
   */
  LogPath?: string
  /**
   * <p>entryPoint</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EntryPoint?: string
  /**
   * <p>Cmd</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Cmd?: string
  /**
   * <p>vpc conf</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcConf?: VpcConf
  /**
   * <p>volume conf</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  VolumesConf?: Array<VolumeConf>
  /**
   * <p>buildpack 信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  BuildPacks?: BuildPacksInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 版本信息
 */
export interface VersionInfo {
  /**
   * 版本名
   */
  VersionName?: string
  /**
   * 流量比例
   */
  FlowRatio?: number
  /**
   * 版本状态
   */
  Status?: string
  /**
   * 创建时间
   */
  CreatedTime?: string
  /**
   * 更新时间
   */
  UpdatedTime?: string
  /**
   * 构建Id
   */
  BuildId?: number
  /**
   * 上传方式
   */
  UploadType?: string
  /**
   * 操作标识
   */
  Remark?: string
  /**
   * 测试参数
   */
  UrlParam?: ObjectKV
  /**
   * 权重
   */
  Priority?: number
  /**
   * 是否默认
   */
  IsDefaultPriority?: boolean
  /**
   * 流量参数
   */
  FlowParams?: Array<ObjectKVPriority>
  /**
   * 最小副本数
   */
  MinReplicas?: number
  /**
   * 最大副本数
   */
  MaxReplicas?: number
  /**
   * 操作Id
   */
  RunId?: string
  /**
   * 百分比
   */
  Percent?: number
  /**
   * 当前副本数
   */
  CurrentReplicas?: number
  /**
   * 架构类型
   */
  Architecture?: string
}

/**
 * BuildPacks信息
 */
export interface BuildPacksInfo {
  /**
   * 基础镜像
   */
  BaseImage: string
  /**
   * 启动命令
   */
  EntryPoint: string
  /**
   * 语言
   */
  RepoLanguage: string
  /**
   * 上传文件名
   */
  UploadFilename: string
  /**
   * 语言版本
   */
  LanguageVersion?: string
}

/**
 * 删除成功的版本信息
 */
export interface SuccessDeleteVersions {
  /**
   * 版本简化信息
   */
  Version: SimpleVersion
  /**
   * 删除版本的 RequestId
   */
  RequestId: string
  /**
   * 删除版本结果
   */
  Result: string
}

/**
 * DescribeCloudRunDeployRecord返回参数结构体
 */
export interface DescribeCloudRunDeployRecordResponse {
  /**
   * 部署列表
   */
  DeployRecords?: Array<DeployRecord>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 服务管理任务信息
 */
export interface ServerManageTaskInfo {
  /**
   * 任务Id
   */
  Id?: number
  /**
   * 环境Id
   */
  EnvId?: string
  /**
   * 服务名
   */
  ServerName?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 变更类型
   */
  ChangeType?: string
  /**
   * 发布类型
   */
  ReleaseType?: string
  /**
   * 部署类型
   */
  DeployType?: string
  /**
   * 上一个版本名
   */
  PreVersionName?: string
  /**
   * 版本名
   */
  VersionName?: string
  /**
   * 流水线Id
   */
  PipelineId?: number
  /**
   * 流水线任务Id
   */
  PipelineTaskId?: number
  /**
   * 发布单Id
   */
  ReleaseId?: number
  /**
   * 状态
   */
  Status?: string
  /**
   * 步骤信息
   */
  Steps?: Array<TaskStepInfo>
  /**
   * 失败原因
   */
  FailReason?: string
  /**
   * 操作标识
   */
  OperatorRemark?: string
}
