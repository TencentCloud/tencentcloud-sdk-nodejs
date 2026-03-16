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
 * DescribeEnvLimit返回参数结构体
 */
export interface DescribeEnvLimitResponse {
  /**
   * 环境总数上限
   */
  MaxEnvNum?: number
  /**
   * 目前环境总数
   */
  CurrentEnvNum?: number
  /**
   * 免费环境数量上限
   */
  MaxFreeEnvNum?: number
  /**
   * 目前免费环境数量
   */
  CurrentFreeEnvNum?: number
  /**
   * 总计允许销毁环境次数上限
   */
  MaxDeleteTotal?: number
  /**
   * 目前已销毁环境次数
   */
  CurrentDeleteTotal?: number
  /**
   * 每月允许销毁环境次数上限
   */
  MaxDeleteMonthly?: number
  /**
   * 本月已销毁环境次数
   */
  CurrentDeleteMonthly?: number
  /**
   * 微信网关体验版可购买月份数
   */
  MaxFreeTrialNum?: number
  /**
   * 微信网关体验版已购买月份数
   */
  CurrentFreeTrialNum?: number
  /**
   * 转支付限额总数
   */
  ChangePayTotal?: number
  /**
   * 当前已用转支付次数
   */
  CurrentChangePayTotal?: number
  /**
   * 转支付每月限额
   */
  ChangePayMonthly?: number
  /**
   * 本月已用转支付额度
   */
  CurrentChangePayMonthly?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListTables返回参数结构体
 */
export interface ListTablesResponse {
  /**
   * 表信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tables?: Array<TableInfo>
  /**
   * 分页信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Pager?: Pager
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 订单信息
 */
export interface OrderInfo {
  /**
   * 订单号
   */
  TranId?: string
  /**
   * 订单要切换的套餐ID
   */
  PackageId?: string
  /**
   * 订单类型
<li>1 购买</li>
<li>2 续费</li>
<li>3 变配</li>
   */
  TranType?: string
  /**
   * 订单状态。
<li>1未支付</li>
<li>2 支付中</li>
<li>3 发货中</li>
<li>4 发货成功</li>
<li>5 发货失败</li>
<li>6 已退款</li>
<li>7 已取消</li>
<li>100 已删除</li>
   */
  TranStatus?: string
  /**
   * 订单更新时间
   */
  UpdateTime?: string
  /**
   * 订单创建时间
   */
  CreateTime?: string
  /**
   * 付费模式.
<li>prepayment 预付费</li>
<li>postpaid 后付费</li>
   */
  PayMode?: string
  /**
   * 订单绑定的扩展ID
   */
  ExtensionId?: string
  /**
   * 资源初始化结果(仅当ExtensionId不为空时有效): successful(初始化成功), failed(初始化失败), doing(初始化进行中), init(准备初始化)
   */
  ResourceReady?: string
  /**
   * 安装标记。建议使用方统一转大小写之后再判断。
<li>QuickStart：快速启动来源</li>
<li>Activity：活动来源</li>
   */
  Flag?: string
  /**
   * 下单时的参数
   */
  ReqBody?: string
}

/**
 * CheckTcbService返回参数结构体
 */
export interface CheckTcbServiceResponse {
  /**
   * true表示已开通
   */
  Initialized?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudBaseRunServerVersion请求参数结构体
 */
export interface DescribeCloudBaseRunServerVersionRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 服务名称
   */
  ServerName: string
  /**
   * 版本名称
   */
  VersionName: string
}

/**
 * DescribeCloudBaseRunServerVersion返回参数结构体
 */
export interface DescribeCloudBaseRunServerVersionResponse {
  /**
   * 版本名称
   */
  VersionName?: string
  /**
   * 备注
   */
  Remark?: string
  /**
   * Dockerfile的路径
   */
  DockerfilePath?: string
  /**
   * DockerBuild的目录
   */
  BuildDir?: string
  /**
   * 请使用CPUSize
   */
  Cpu?: number
  /**
   * 请使用MemSize
   */
  Mem?: number
  /**
   * 副本最小值
   */
  MinNum?: number
  /**
   * 副本最大值
   */
  MaxNum?: number
  /**
   * 策略类型
   */
  PolicyType?: string
  /**
   * 策略阈值
   */
  PolicyThreshold?: number
  /**
   * 环境变量
   */
  EnvParams?: string
  /**
   * 创建时间
   */
  CreatedTime?: string
  /**
   * 更新时间
   */
  UpdatedTime?: string
  /**
   * 版本的IP
   */
  VersionIP?: string
  /**
   * 版本的端口号
   */
  VersionPort?: number
  /**
   * 版本状态
   */
  Status?: string
  /**
   * 代码包的名字
   */
  PackageName?: string
  /**
   * 代码版本的名字
   */
  PackageVersion?: string
  /**
   * 枚举（package/repository/image)
   */
  UploadType?: string
  /**
   * Repo的类型(gitlab/github/coding)
   */
  RepoType?: string
  /**
   * 地址
   */
  Repo?: string
  /**
   * 分支
   */
  Branch?: string
  /**
   * 服务名字
   */
  ServerName?: string
  /**
   * 是否对于外网开放
   */
  IsPublic?: boolean
  /**
   * vpc id
   */
  VpcId?: string
  /**
   * 子网实例id
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetIds?: Array<string>
  /**
   * 日志采集路径
   */
  CustomLogs?: string
  /**
   * 监听端口
   */
  ContainerPort?: number
  /**
   * 延迟多长时间开始健康检查（单位s）
   */
  InitialDelaySeconds?: number
  /**
   * 镜像地址
   */
  ImageUrl?: string
  /**
   * CPU 大小
   */
  CpuSize?: number
  /**
   * MEM 大小
   */
  MemSize?: number
  /**
   * 是否有Dockerfile：0-default has, 1-has, 2-has not
   */
  HasDockerfile?: number
  /**
   * 基础镜像
   */
  BaseImage?: string
  /**
   * 容器启动入口命令
   */
  EntryPoint?: string
  /**
   * 仓库语言
   */
  RepoLanguage?: string
  /**
   * 自动扩缩容策略组
注意：此字段可能返回 null，表示取不到有效值。
   */
  PolicyDetail?: Array<HpaPolicy>
  /**
   * Tke集群信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  TkeClusterInfo?: TkeClusterInfo
  /**
   * 版本工作负载类型；deployment/deamonset
   */
  TkeWorkloadType?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BindCloudBaseAccessDomain请求参数结构体
 */
export interface BindCloudBaseAccessDomainRequest {
  /**
   * 服务Id，目前是指环境Id
   */
  ServiceId: string
  /**
   * 自定义域名
   */
  Domain: string
  /**
   * 腾讯云证书Id
   */
  CertId?: string
  /**
   * 默认1，1 绑定默认Cdn，2 绑定TcbIngress（不经过cdn），4 绑定自定义cdn
   */
  BindFlag?: number
  /**
   * 自定义cdn cname域名
   */
  CustomCname?: string
}

/**
 * ModifyEnvPlan请求参数结构体
 */
export interface ModifyEnvPlanRequest {
  /**
   * 所需变更套餐的环境ID
   */
  EnvId: string
  /**
   * 目标套餐Id。
对于云开发环境套餐，可通过 [DescribeBaasPackageList](https://cloud.tencent.com/document/product/876/78167) 接口获取，对应其出参的PackageName
   */
  PackageId: string
  /**
   * 是否自动选择代金券支付。
   */
  AutoVoucher?: boolean
}

/**
 * http访问服务客户端限频
 */
export interface CloudBaseClientQPSPolicy {
  /**
   * UserID 或 ClientIP 或 None，如果为 None 代表不限制
   */
  LimitBy?: string
  /**
   * 限制值
   */
  LimitValue?: number
}

/**
 * ModifyClsTopic返回参数结构体
 */
export interface ModifyClsTopicResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 本类型用于UpdateTable接口中描述待创建索引信息
 */
export interface CreateIndex {
  /**
   * 索引名称
   */
  IndexName?: string
  /**
   * 索引结构
   */
  MgoKeySchema?: MgoKeySchema
}

/**
 * TDSQL-C数据库详情
 */
export interface ClusterDetail {
  /**
   * 是否开启公网访问
   */
  IsOpenPubNetAccess?: boolean
  /**
   * 最大算力
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxCpu?: number
  /**
   * 最小算力
注意：此字段可能返回 null，表示取不到有效值。
   */
  MinCpu?: number
  /**
   * TDSQL-C集群状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 存储用量（单位：MB）
注意：此字段可能返回 null，表示取不到有效值。
   */
  UsedStorage?: number
  /**
   * 最大存储量（单位：GB）
注意：此字段可能返回 null，表示取不到有效值。
   */
  StorageLimit?: number
  /**
   * 数据库类型
   */
  DbType?: string
  /**
   * 数据库类型
   */
  DbVersion?: string
  /**
   * 公网访问状态；open开启，opening开启中，closed关闭，closing关闭中
   */
  WanStatus?: string
  /**
   * 数据库集群状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterStatus?: string
  /**
   * serverless状态
   */
  ServerlessStatus?: string
}

/**
 * 数据库连接器实例信息
 */
export interface DbInstance {
  /**
   * 云开发环境ID
   */
  EnvId?: string
  /**
   * MySQL 连接器实例 ID；`"default"` 或为空表示使用 TCB 环境的默认连接器
   */
  InstanceId?: string
  /**
   * 数据库名；为空时使用连接器配置的默认数据库名
   */
  Schema?: string
}

/**
 * DescribeMySQLClusterDetail返回参数结构体
 */
export interface DescribeMySQLClusterDetailResponse {
  /**
   * 集群详情
   */
  Data?: MySQLClusterDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 删除tcb用户返回值
 */
export interface DeleteUsersResp {
  /**
   * 成功个数
   */
  SuccessCount?: number
  /**
   * 失败个数
   */
  FailedCount?: number
}

/**
 * DescribeEnvLimit请求参数结构体
 */
export type DescribeEnvLimitRequest = null

/**
 * DescribeCloudBaseBuildService返回参数结构体
 */
export interface DescribeCloudBaseBuildServiceResponse {
  /**
   * 上传url
   */
  UploadUrl?: string
  /**
   * 上传header
   */
  UploadHeaders?: Array<KVPair>
  /**
   * 包名
   */
  PackageName?: string
  /**
   * 包版本
   */
  PackageVersion?: string
  /**
   * 下载链接
   */
  DownloadUrl?: string
  /**
   * 下载Httpheader
   */
  DownloadHeaders?: Array<KVPair>
  /**
   * 下载链接是否过期
   */
  OutDate?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMySQLTaskStatus请求参数结构体
 */
export interface DescribeMySQLTaskStatusRequest {
  /**
   * 云开发环境ID
   */
  EnvId: string
  /**
   * 任务Id
   */
  TaskId?: string
  /**
   * 任务名
   */
  TaskName?: string
}

/**
 * 本类型用于UpdateTable接口中描述待删除索引信息
 */
export interface DropIndex {
  /**
   * 索引名称
   */
  IndexName?: string
}

/**
 * ModifyUser返回参数结构体
 */
export interface ModifyUserResponse {
  /**
   * 修改用户返回值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: ModifyUserResp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CLS日志结果
 */
export interface LogResObject {
  /**
   * 获取更多检索结果的游标
   */
  Context?: string
  /**
   * 搜索结果是否已经全部返回
   */
  ListOver?: boolean
  /**
   * 日志内容信息
   */
  Results?: Array<LogObject>
  /**
   * 日志聚合结果
   */
  AnalysisRecords?: Array<string>
}

/**
 * ModifyEnv返回参数结构体
 */
export interface ModifyEnvResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BindCloudBaseAccessDomain返回参数结构体
 */
export interface BindCloudBaseAccessDomainResponse {
  /**
   * 服务Id，目前是指环境Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云日志服务相关信息
 */
export interface LogServiceInfo {
  /**
   * log名
   */
  LogsetName?: string
  /**
   * log-id
   */
  LogsetId?: string
  /**
   * topic名
   */
  TopicName?: string
  /**
   * topic-id
   */
  TopicId?: string
  /**
   * cls日志所属地域
   */
  Region?: string
  /**
   * topic保存时长 默认7天
   */
  Period?: number
}

/**
 * DescribeBaasPackageList请求参数结构体
 */
export interface DescribeBaasPackageListRequest {
  /**
   * tcb产品套餐ID，不填拉取全量package信息。
   */
  PackageName?: string
  /**
   * 环境ID
   */
  EnvId?: string
  /**
   * 套餐归属方，填写后只返回对应的套餐 包含miniapp与qcloud两种 默认为miniapp
   */
  Source?: string
  /**
   * 套餐归属环境渠道
   */
  EnvChannel?: string
  /**
   * 拉取套餐用途：
1）new 新购
2）modify变配
3）renew续费
   */
  TargetAction?: string
  /**
   * 预留字段，同一商品会对应多个类型套餐，对指标有不同侧重。
计算型calculation
流量型flux
容量型capactiy
   */
  GroupName?: string
  /**
   * 类型分组过滤。默认为["default"]
   */
  PackageTypeList?: Array<string>
  /**
   * 付费渠道，与回包billTags中的计费参数相关，不填返回默认值。
   */
  PaymentChannel?: string
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
 * DescribeAuthDomains返回参数结构体
 */
export interface DescribeAuthDomainsResponse {
  /**
   * 安全域名列表
   */
  Domains?: Array<AuthDomain>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyCloudBaseGWAPI请求参数结构体
 */
export interface ModifyCloudBaseGWAPIRequest {
  /**
   * Service ID
   */
  ServiceId: string
  /**
   * API ID
   */
  APIId: string
  /**
   * 选项列表，key取值：domain, path。
   */
  Options: Array<CloudBaseOption>
}

/**
 * ModifyClsTopic请求参数结构体
 */
export interface ModifyClsTopicRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 日志生命周期，单位天，可取值范围1~3600，取值为3640时代表永久保存
   */
  Period?: number
}

/**
 * CreateHostingDomain请求参数结构体
 */
export interface CreateHostingDomainRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 域名
   */
  Domain: string
  /**
   * 证书ID
   */
  CertId: string
}

/**
 * tke集群信息
 */
export interface TkeClusterInfo {
  /**
   * 集群ID
   */
  ClusterId?: string
  /**
   * 集群的vpcId
   */
  VpcId?: string
  /**
   * 版本内网CLB所在子网Id
   */
  VersionClbSubnetId?: string
}

/**
 * ModifyDatabaseACL请求参数结构体
 */
export interface ModifyDatabaseACLRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 集合名称
   */
  CollectionName: string
  /**
   * 权限标签。包含以下取值：
<li> READONLY：所有用户可读，仅创建者和管理员可写</li>
<li> PRIVATE：仅创建者及管理员可读写</li>
<li> ADMINWRITE：所有用户可读，仅管理员可写</li>
<li> ADMINONLY：仅管理员可读写</li>
   */
  AclTag: string
}

/**
 * DestroyStaticStore请求参数结构体
 */
export interface DestroyStaticStoreRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * cdn域名
   */
  CdnDomain?: string
}

/**
 * TDSQL-C网络信息类型
 */
export interface MySQLNetDetail {
  /**
   * 内网地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  PrivateNetAddress?: string
  /**
   * 外网地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  PubNetAddress?: string
  /**
   * 网络信息（VPCID/SubnetID）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Net?: string
  /**
   * 是否开通公网
   */
  PubNetAccessEnabled?: boolean
  /**
   * vpc id
   */
  VpcId?: string
  /**
   * vpc name
   */
  VpcName?: string
  /**
   * 子网ID
   */
  SubnetId?: string
  /**
   * 子网名
   */
  SubnetName?: string
}

/**
 * 本类型用于接口中描述待创建索引结构
 */
export interface MgoKeySchema {
  /**
   * 索引字段
   */
  MgoIndexKeys?: Array<MgoIndexKeys>
  /**
   * 是否唯一索引
   */
  MgoIsUnique?: boolean
  /**
   * 是否稀疏索引
   */
  MgoIsSparse?: boolean
}

/**
 * DescribeHostingDomainTask请求参数结构体
 */
export interface DescribeHostingDomainTaskRequest {
  /**
   * 环境ID
   */
  EnvId: string
}

/**
 * 查询用户返回结果
 */
export interface DescribeUserListResp {
  /**
   * 用户总数
   */
  Total?: number
  /**
   * 用户列表
   */
  UserList?: Array<User>
}

/**
 * 云开发新套餐详情
 */
export interface BaasPackageInfo {
  /**
   * DAU产品套餐ID
   */
  PackageName?: string
  /**
   * DAU套餐中文名称
   */
  PackageTitle?: string
  /**
   * 套餐分组
   */
  GroupName?: string
  /**
   * 套餐分组中文名
   */
  GroupTitle?: string
  /**
   * json格式化计费标签，例如：
{"pid":2, "cids":{"create": 2, "renew": 2, "modify": 2}, "productCode":"p_tcb_mp", "subProductCode":"sp_tcb_mp_cloudbase_dau"}
   */
  BillTags?: string
  /**
   * json格式化用户资源限制，例如：
{"Qps":1000,"InvokeNum":{"TimeUnit":"m", "Unit":"万次", "MaxSize": 100},"Capacity":{"TimeUnit":"m", "Unit":"GB", "MaxSize": 100}, "Cdn":{"Flux":{"TimeUnit":"m", "Unit":"GB", "MaxSize": 100}, "BackFlux":{"TimeUnit":"m", "Unit":"GB", "MaxSize": 100}},"Scf":{"Concurrency":1000,"OutFlux":{"TimeUnit":"m", "Unit":"GB", "MaxSize": 100},"MemoryUse":{"TimeUnit":"m", "Unit":"WGBS", "MaxSize": 100000}}}
   */
  ResourceLimit?: string
  /**
   * json格式化高级限制，例如：
{"CMSEnable":false,"ProvisionedConcurrencyMem":512000, "PictureProcessing":false, "SecurityAudit":false, "RealTimePush":false, "TemplateMessageBatchPush":false, "Payment":false}
   */
  AdvanceLimit?: string
  /**
   * 套餐描述
   */
  PackageDescription?: string
  /**
   * 是否对外展示
   */
  IsExternal?: boolean
}

/**
 * DescribeQuotaData返回参数结构体
 */
export interface DescribeQuotaDataResponse {
  /**
   * 指标名
   */
  MetricName?: string
  /**
   * 指标的值
   */
  Value?: number
  /**
   * 指标的附加值信息
   */
  SubValue?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateBillDeal返回参数结构体
 */
export interface CreateBillDealResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 开通Mysql 结果
 */
export interface CreateMySQLResult {
  /**
   * 任务ID
   */
  TaskId?: string
}

/**
 * 键值对
 */
export interface KVPair {
  /**
   * 键
   */
  Key: string
  /**
   * 值
   */
  Value: string
}

/**
 * 函数的信息
 */
export interface FunctionInfo {
  /**
   * 命名空间
   */
  Namespace?: string
  /**
   * 所属地域。
当前支持ap-shanghai
   */
  Region?: string
}

/**
 * CreateEnv返回参数结构体
 */
export interface CreateEnvResponse {
  /**
   * 自动生成的环境ID
   */
  EnvId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RunCommands返回参数结构体
 */
export interface RunCommandsResponse {
  /**
   * 返回结果，返回结果为一个json字符串
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RunSql返回参数结构体
 */
export interface RunSqlResponse {
  /**
   * 查询结果行，每个元素为 JSON 字符串
   */
  Items?: Array<string>
  /**
   * 列元数据信息，每个元素为 JSON 字符串，字段包含 `name/databaseType/nullable/length/precision/scale`
   */
  Infos?: Array<string>
  /**
   * 受影响的行数（INSERT/UPDATE/DELETE 等语句）
   */
  RowsAffected?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateUser返回参数结构体
 */
export interface CreateUserResponse {
  /**
   * 结果返回
   */
  Data?: CreateUserResp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEnvAccountCircle请求参数结构体
 */
export interface DescribeEnvAccountCircleRequest {
  /**
   * 环境ID
   */
  EnvId: string
}

/**
 * RenewEnv返回参数结构体
 */
export interface RenewEnvResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMySQLClusterDetail请求参数结构体
 */
export interface DescribeMySQLClusterDetailRequest {
  /**
   * 云开发环境ID
   */
  EnvId: string
}

/**
 * CreateStaticStore请求参数结构体
 */
export interface CreateStaticStoreRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 是否启用统一域名
   */
  EnableUnion?: boolean
}

/**
 * DescribeBillingInfo返回参数结构体
 */
export interface DescribeBillingInfoResponse {
  /**
   * 环境计费信息列表
   */
  EnvBillingInfoList?: Array<EnvBillingInfoItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAuthDomain返回参数结构体
 */
export interface CreateAuthDomainResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEnvs请求参数结构体
 */
export interface DescribeEnvsRequest {
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
  /**
   * 分页参数，单页限制个数
   */
  Limit?: number
  /**
   * 分页参数，偏移量
   */
  Offset?: number
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
 * EditAuthConfig返回参数结构体
 */
export interface EditAuthConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RenewEnv请求参数结构体
 */
export interface RenewEnvRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 续费周期，单位：月。
默认值为 1，即续费1个月。
   */
  Period?: number
  /**
   * 是否自动选择代金券支付。
   */
  AutoVoucher?: boolean
}

/**
 * DestroyMySQL返回参数结构体
 */
export interface DestroyMySQLResponse {
  /**
   * 销毁结果
   */
  Data?: DestroyMySQLResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateTable返回参数结构体
 */
export interface UpdateTableResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyEnvPlan返回参数结构体
 */
export interface ModifyEnvPlanResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCreateMySQLResult请求参数结构体
 */
export interface DescribeCreateMySQLResultRequest {
  /**
   * 云开发环境ID
   */
  EnvId: string
  /**
   * OpenMysql 返回任务 Id
   */
  TaskId?: string
}

/**
 * DescribeBillingInfo请求参数结构体
 */
export interface DescribeBillingInfoRequest {
  /**
   * 环境ID
   */
  EnvId?: string
}

/**
 * 扩缩容策略
 */
export interface HpaPolicy {
  /**
   * 策略类型
   */
  PolicyType?: string
  /**
   * 策略阈值
   */
  PolicyThreshold?: number
}

/**
 * CLS日志单条信息
 */
export interface LogObject {
  /**
   * 日志属于的 topic ID
   */
  TopicId?: string
  /**
   * 日志主题的名字
   */
  TopicName?: string
  /**
   * 日志时间
   */
  Timestamp?: string
  /**
   * 日志内容
   */
  Content?: string
  /**
   * 采集路径
   */
  FileName?: string
  /**
   * 日志来源设备
   */
  Source?: string
}

/**
 * DestroyStaticStore返回参数结构体
 */
export interface DestroyStaticStoreResponse {
  /**
   * 条件任务结果(succ/fail)
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteUsers返回参数结构体
 */
export interface DeleteUsersResponse {
  /**
   * 删除用户结果
   */
  Data?: DeleteUsersResp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUserList返回参数结构体
 */
export interface DescribeUserListResponse {
  /**
   * 结果返回
   */
  Data?: DescribeUserListResp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTable请求参数结构体
 */
export interface CreateTableRequest {
  /**
   * 数据表名；长度不超过96个字符，可以为英文字母、数字、下划线(_)和短横线(-)的组合，且不能以下划线开头
   */
  TableName: string
  /**
   * FlexDB实例ID，如：tnt-nl7hjzasw
   */
  Tag?: string
  /**
   * FlexDB数据库权限信息
   */
  PermissionInfo?: PermissionInfo
  /**
   * 云开发环境ID
   */
  EnvId?: string
  /**
   * MongoDB连接器配置
   */
  MongoConnector?: MongoConnector
}

/**
 * CreateMySQL返回参数结构体
 */
export interface CreateMySQLResponse {
  /**
   * 开通结果
   */
  Data?: CreateMySQLResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAuthDomain返回参数结构体
 */
export interface DeleteAuthDomainResponse {
  /**
   * 删除的域名个数
   */
  Deleted?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTable请求参数结构体
 */
export interface DeleteTableRequest {
  /**
   * 待删除的表名
   */
  TableName: string
  /**
   * FlexDB实例ID
   */
  Tag?: string
  /**
   * 云开发环境ID
   */
  EnvId?: string
  /**
   * MongoDB连接器配置
   */
  MongoConnector?: MongoConnector
}

/**
 * CreateCloudBaseGWAPI请求参数结构体
 */
export interface CreateCloudBaseGWAPIRequest {
  /**
   * Service ID
   */
  ServiceId: string
  /**
   * API Path
   */
  Path: string
  /**
   * API类型（1表示云函数，2表示容器）
   */
  Type: number
  /**
   * API Name
   */
  Name: string
  /**
   * APIId，如果非空，表示修改绑定Path
   */
  APIId?: string
  /**
   * 自定义值通用字段（当Type为容器时必填）
   */
  Custom?: string
  /**
   * 认证开关 1为开启 2为关闭
   */
  AuthSwitch?: number
  /**
   * 是否开启多地域
   */
  EnableRegion?: boolean
  /**
   * 是否启用统一域名
   */
  EnableUnion?: boolean
  /**
   * 域名
   */
  Domain?: string
  /**
   * 访问类型："OA", "PUBLIC", "MINIAPP", "VPC" （不传默认PUBLIC+MINIAPP+VPC）
   */
  AccessTypes?: Array<string>
  /**
   * 是否开启路径透传，默认true表示短路径，即不开启路径透传(已弃用)
   */
  IsShortPath?: boolean
  /**
   * 路径透传，默认0关闭，1开启，2关闭
   */
  PathTransmission?: number
  /**
   * 跨域校验，默认0开启，1开启，2关闭
   */
  EnableCheckAcrossDomain?: number
  /**
   * 静态托管资源目录
   */
  StaticFileDirectory?: string
}

/**
 * DestroyEnv请求参数结构体
 */
export interface DestroyEnvRequest {
  /**
   * 环境Id
   */
  EnvId: string
  /**
   * 针对预付费 删除隔离中的环境时要传true 正常环境直接跳过隔离期删除
   */
  IsForce?: boolean
  /**
   * 是否绕过资源检查，资源包等额外资源，默认为false，如果为true，则不检查资源是否有数据，直接删除。
   */
  BypassCheck?: boolean
}

/**
 * DestroyEnv返回参数结构体
 */
export interface DestroyEnvResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTable返回参数结构体
 */
export interface DeleteTableResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RunSql请求参数结构体
 */
export interface RunSqlRequest {
  /**
   * 要执行的SQL语句
   */
  Sql: string
  /**
   * 云开发环境ID
   */
  EnvId: string
  /**
   * 数据库连接器实例信息
   */
  DbInstance?: DbInstance
  /**
   * 是否只读；当 `true` 时仅允许以 `SELECT/WITH/SHOW/DESCRIBE/DESC/EXPLAIN` 开头的 SQL
   */
  ReadOnly?: boolean
}

/**
 * DestroyMySQL请求参数结构体
 */
export interface DestroyMySQLRequest {
  /**
   * 云开发环境ID
   */
  EnvId: string
}

/**
 * 环境计费信息
 */
export interface EnvBillingInfoItem {
  /**
   * 环境ID
   */
  EnvId?: string
  /**
   * tcb产品套餐ID，参考DescribePackages接口的返回值。
   */
  PackageId?: string
  /**
   * 自动续费标记
   */
  IsAutoRenew?: boolean
  /**
   * 状态。包含以下取值：
<li> 空字符串：初始化中</li>
<li> NORMAL：正常</li>
<li> ISOLATE：隔离</li>
   */
  Status?: string
  /**
   * 支付方式。包含以下取值：
<li> PREPAYMENT：预付费</li>
<li> POSTPAID：后付费</li>
   */
  PayMode?: string
  /**
   * 隔离时间，最近一次隔离的时间
   */
  IsolatedTime?: string
  /**
   * 过期时间，套餐即将到期的时间
   */
  ExpireTime?: string
  /**
   * 创建时间，第一次接入计费方案的时间。
   */
  CreateTime?: string
  /**
   * 更新时间，计费信息最近一次更新的时间。
   */
  UpdateTime?: string
  /**
   * true表示从未升级过付费版。
   */
  IsAlwaysFree?: boolean
  /**
   * 付费渠道。
<li> miniapp：小程序</li>
<li> qcloud：腾讯云</li>
   */
  PaymentChannel?: string
  /**
   * 最新的订单信息
   */
  OrderInfo?: OrderInfo
  /**
   * 免费配额信息。
   */
  FreeQuota?: string
  /**
   * 是否开启 `超过套餐额度部分转按量付费`
   */
  EnableOverrun?: boolean
  /**
   * 环境套餐类型
   */
  ExtPackageType?: string
  /**
   * 是否付费期环境，可取值：yes/no。
   */
  EnvCharged?: string
  /**
   * 是否已激活，可取值：yes/no。
   */
  EnvActivated?: string
}

/**
 * DescribeEnvs返回参数结构体
 */
export interface DescribeEnvsResponse {
  /**
   * 环境信息列表
   */
  EnvList?: Array<EnvInfo>
  /**
   * 环境个数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAuthDomain请求参数结构体
 */
export interface CreateAuthDomainRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 安全域名
   */
  Domains: Array<string>
}

/**
 * CreateHostingDomain返回参数结构体
 */
export interface CreateHostingDomainResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MySql 任务状态
 */
export interface MySQLTaskStatus {
  /**
   * SUCCESS | FAILED | PENDING
   */
  Status?: string
  /**
   * 状态描述
   */
  StatusDesc?: string
}

/**
 * 查询开通Mysql结果
 */
export interface DescribeCreateMySQLResult {
  /**
   * 状态 notexist | init | doing | success | fail
   */
  Status?: string
  /**
   * 失败原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailReason?: string
  /**
   * 是否已被冻结（只在 Status=success时有效）
   */
  FreezeStatus?: boolean
}

/**
 * DeleteCloudBaseGWAPI请求参数结构体
 */
export interface DeleteCloudBaseGWAPIRequest {
  /**
   * 服务ID
   */
  ServiceId: string
  /**
   * API Path
   */
  Path?: string
  /**
   * API ID
   */
  APIId?: string
  /**
   * API类型
   */
  Type?: number
  /**
   * API Name
   */
  Name?: string
  /**
   * 自定义值字段（Type为2时，传递容器服务名表示需要删除JNSGW）
   */
  Custom?: string
  /**
   * 域名
   */
  Domain?: string
}

/**
 * CreateCloudBaseGWAPI返回参数结构体
 */
export interface CreateCloudBaseGWAPIResponse {
  /**
   * API ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  APIId: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCreateMySQLResult返回参数结构体
 */
export interface DescribeCreateMySQLResultResponse {
  /**
   * 查询开通结果
   */
  Data?: DescribeCreateMySQLResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSafeRule请求参数结构体
 */
export interface DescribeSafeRuleRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 集合名称
   */
  CollectionName: string
  /**
   * 微信AppId，微信必传
   */
  WxAppId?: string
}

/**
 * DeleteUsers请求参数结构体
 */
export interface DeleteUsersRequest {
  /**
   * 环境id
   */
  EnvId: string
  /**
   * tcb用户id列表, 一次最多支持删除100个
   */
  Uids: Array<string>
}

/**
 * DescribeBaasPackageList返回参数结构体
 */
export interface DescribeBaasPackageListResponse {
  /**
   * 套餐列表
   */
  PackageList?: Array<BaasPackageInfo>
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
 * 本类型用于UpdateTable接口中描述待创建索引信息
 */
export interface MgoIndexKeys {
  /**
   * 无
   */
  Name?: string
  /**
   * 无
   */
  Direction?: string
}

/**
 * DescribeStaticStore请求参数结构体
 */
export interface DescribeStaticStoreRequest {
  /**
   * 环境ID
   */
  EnvId: string
}

/**
 * ModifyCloudBaseGWAPI返回参数结构体
 */
export interface ModifyCloudBaseGWAPIResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSafeRule返回参数结构体
 */
export interface DescribeSafeRuleResponse {
  /**
   * 规则内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Rule?: string
  /**
   * 权限标签。包含以下取值：
<li> READONLY：所有用户可读，仅创建者和管理员可写</li>
<li> PRIVATE：仅创建者及管理员可读写</li>
<li> ADMINWRITE：所有用户可读，仅管理员可写</li>
<li> ADMINONLY：仅管理员可读写</li>
<li> CUSTOM：自定义安全规则</li>
   */
  AclTag?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTables返回参数结构体
 */
export interface DescribeTablesResponse {
  /**
   * 表信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tables?: Array<TableInfo>
  /**
   * 分页信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Pager?: Pager
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEnvAccountCircle返回参数结构体
 */
export interface DescribeEnvAccountCircleResponse {
  /**
   * 环境计费周期开始时间
   */
  StartTime?: string
  /**
   * 环境计费周期结束时间
   */
  EndTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用户信息
 */
export interface User {
  /**
   * 用户ID
   */
  Uid?: string
  /**
   * 用户名
   */
  Name?: string
  /**
   * 用户类型：internalUser-内部用户、externalUser-外部用户
   */
  Type?: string
  /**
   * 用户状态：ACTIVE（激活）、BLOCKED（冻结）
   */
  UserStatus?: string
  /**
   * 用户昵称
   */
  NickName?: string
  /**
   * 手机号
   */
  Phone?: string
  /**
   * 邮箱
   */
  Email?: string
  /**
   * 头像链接
   */
  AvatarUrl?: string
  /**
   * 用户描述
   */
  Description?: string
}

/**
 * 待执行命令
 */
export interface MgoCommandParam {
  /**
   * 表名
   */
  TableName: string
  /**
   * 操作类型，可选类型为：UPDATE/QUERY/INSERT/DELETE/COMMAND，本操作必须按实际填写，监控会依赖该字段统计本次操作的类型，并实时减少用户配额，如果填写错误会误扣用户请求配额
   */
  CommandType: string
  /**
   * 待执行命令
   */
  Command: string
}

/**
 * ModifyDatabaseACL返回参数结构体
 */
export interface ModifyDatabaseACLResponse {
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
  StaticDomain?: string
  /**
   * 静态CDN默认文件夹，当前为根目录
   */
  DefaultDirName?: string
  /**
   * 资源状态(process/online/offline/init)
   */
  Status?: string
  /**
   * cos所属区域
   */
  Region?: string
  /**
   * bucket信息
   */
  Bucket?: string
}

/**
 * CreateTable返回参数结构体
 */
export interface CreateTableResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 销毁 Mysql 结果
 */
export interface DestroyMySQLResult {
  /**
   * 是否成功
   */
  IsSuccess?: boolean
  /**
   * 任务ID
   */
  TaskId?: string
  /**
   * 任务名
   */
  TaskName?: string
}

/**
 * DescribeCloudBaseGWAPI返回参数结构体
 */
export interface DescribeCloudBaseGWAPIResponse {
  /**
   * API列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  APISet?: Array<CloudBaseGWAPI>
  /**
   * 是否开启http调用
   */
  EnableService?: boolean
  /**
   * 查询结果的数据总量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 查询的分页参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Offset?: number
  /**
   * 查询的分页参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Limit?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCloudBaseGWAPI请求参数结构体
 */
export interface DescribeCloudBaseGWAPIRequest {
  /**
   * 服务ID
   */
  ServiceId?: string
  /**
   * API域名
   */
  Domain?: string
  /**
   * API Path
   */
  Path?: string
  /**
   * API ID
   */
  APIId?: string
  /**
   * API类型，1为云函数，2为容器
   */
  Type?: number
  /**
   * API名，Type为1时为云函数名，Type为2时为容器服务名
   */
  Name?: string
  /**
   * 查询的分页参数，用于设置查询的偏移位置，0表示从头开始
   */
  Offset?: number
  /**
   * 查询的分页参数，用于表示每次查询的最大返回数据量
   */
  Limit?: number
  /**
   * 是否启用多地域
   */
  EnableRegion?: boolean
  /**
   * 是否使用统一域名
   */
  EnableUnion?: boolean
}

/**
 * CreateMySQL请求参数结构体
 */
export interface CreateMySQLRequest {
  /**
   * 云开发环境ID
   */
  EnvId: string
  /**
   * Db类型: MYSQL
   */
  DbInstanceType: string
  /**
   * mysql版本
   */
  MysqlVersion?: string
  /**
   * vpc Id
   */
  VpcId?: string
  /**
   * 子网ID
   */
  SubnetId?: string
  /**
   * 0 区分表名大小写；1 不区分表名大小写(默认)
   */
  LowerCaseTableNames?: string
}

/**
 * 数据库资源信息
 */
export interface DatabasesInfo {
  /**
   * 数据库唯一标识
   */
  InstanceId?: string
  /**
   * 状态。包含以下取值：
<li>INITIALIZING：资源初始化中</li>
<li>RUNNING：运行中，可正常使用的状态</li>
<li>UNUSABLE：禁用，不可用</li>
<li>OVERDUE：资源过期</li>
   */
  Status?: string
  /**
   * 所属地域。
当前支持ap-shanghai
   */
  Region?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
}

/**
 * DescribeCloudBaseGWService返回参数结构体
 */
export interface DescribeCloudBaseGWServiceResponse {
  /**
   * 服务列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceSet?: Array<CloudBaseGWService>
  /**
   * 是否开启服务
   */
  EnableService?: boolean
  /**
   * 默认域名信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  DefaultDomain?: string
  /**
   * 是否开启CDN迁移
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableUnion?: boolean
  /**
   * 是否开启跨域校验，默认开启 true
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableCheckAcrossDomain?: boolean
  /**
   * 自定义路由规则
注意：此字段可能返回 null，表示取不到有效值。
   */
  CustomRoutingRules?: string
  /**
   * 默认域名绑定类型，1绑定TCB-CDN，2绑定tcbingres（不经过cdn）
   */
  AccessFlag?: number
  /**
   * 云接入源站域名
   */
  OriginDomain?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ReinstateEnv请求参数结构体
 */
export interface ReinstateEnvRequest {
  /**
   * 环境ID
   */
  EnvId: string
}

/**
 * DescribeDatabaseACL请求参数结构体
 */
export interface DescribeDatabaseACLRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 集合名称
   */
  CollectionName: string
}

/**
 * DescribeMySQLTaskStatus返回参数结构体
 */
export interface DescribeMySQLTaskStatusResponse {
  /**
   * 任务状态
   */
  Data?: MySQLTaskStatus
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 表信息
 */
export interface TableInfo {
  /**
   * 表名
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableName?: string
  /**
   * 表中文档数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Count?: number
  /**
   * 表的大小（即表中文档总大小），单位：字节
注意：此字段可能返回 null，表示取不到有效值。
   */
  Size?: number
  /**
   * 索引数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexCount?: number
  /**
   * 索引占用空间，单位：字节
注意：此字段可能返回 null，表示取不到有效值。
   */
  IndexSize?: number
}

/**
 * DeleteCloudBaseGWDomain请求参数结构体
 */
export interface DeleteCloudBaseGWDomainRequest {
  /**
   * 服务ID
   */
  ServiceId: string
  /**
   * 服务域名
   */
  Domain: string
}

/**
 * DescribeTables请求参数结构体
 */
export interface DescribeTablesRequest {
  /**
   * 分页条件
   */
  MgoLimit: number
  /**
   * 实例ID
   */
  Tag?: string
  /**
   * 分页条件
   */
  MgoOffset?: number
  /**
   * 环境id
   */
  EnvId?: string
  /**
   * MongoConnector
   */
  MongoConnector?: MongoConnector
  /**
   * 指定表名过滤，为空时返回所有表
   */
  TableNames?: Array<string>
}

/**
 * DescribeUserList请求参数结构体
 */
export interface DescribeUserListRequest {
  /**
   * 环境id
   */
  EnvId: string
  /**
   * 页码，从1开始，默认1
   */
  PageNo?: number
  /**
   * 每页数量，默认20，最大100
   */
  PageSize?: number
  /**
   * 用户名，模糊查询
   */
  Name?: string
  /**
   * 用户昵称，模糊查询
   */
  NickName?: string
  /**
   * 手机号，模糊查询
   */
  Phone?: string
  /**
   * 邮箱，模糊查询
   */
  Email?: string
}

/**
 * DescribeStaticStore返回参数结构体
 */
export interface DescribeStaticStoreResponse {
  /**
   * 静态托管资源信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: Array<StaticStoreInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListTables请求参数结构体
 */
export interface ListTablesRequest {
  /**
   * 每页返回数量（0-1000)
   */
  MgoLimit: number
  /**
   * FlexDB实例ID
   */
  Tag?: string
  /**
   * 分页偏移量
   */
  MgoOffset?: number
  /**
   * 过滤标签数组，用于过滤表名，可选值如：HIDDEN、WEDA、WEDA_SYSTEM
   */
  Filters?: Array<string>
  /**
   * 模糊搜索查询值
   */
  SearchValue?: string
  /**
   * 是否展示隐藏表
   */
  ShowHidden?: boolean
  /**
   * 云开发环境ID
   */
  EnvId?: string
  /**
   * mongo连接器信息
   */
  MongoConnector?: MongoConnector
}

/**
 * DescribeQuotaData请求参数结构体
 */
export interface DescribeQuotaDataRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * <li> 指标名: </li>
<li> StorageSizepkg: 当月存储空间容量, 单位MB </li>
<li> StorageReadpkg: 当月存储读请求次数 </li>
<li> StorageWritepkg: 当月存储写请求次数 </li>
<li> StorageCdnOriginFluxpkg: 当月CDN回源流量, 单位字节 </li>
<li> StorageCdnOriginFluxpkgDay: 当日CDN回源流量, 单位字节 </li>
<li> StorageReadpkgDay: 当日存储读请求次数 </li>
<li> StorageWritepkgDay: 当日写请求次数 </li>
<li> CDNFluxpkg: 当月CDN流量, 单位为字节 </li>
<li> CDNFluxpkgDay: 当日CDN流量, 单位为字节 </li>
<li> FunctionInvocationpkg: 当月云函数调用次数 </li>
<li> FunctionGBspkg: 当月云函数资源使用量, 单位Mb*Ms </li>
<li> FunctionFluxpkg: 当月云函数流量, 单位千字节(KB) </li>
<li> FunctionInvocationpkgDay: 当日云函数调用次数 </li>
<li> FunctionGBspkgDay: 当日云函数资源使用量, 单位Mb*Ms </li>
<li> FunctionFluxpkgDay: 当日云函数流量, 单位千字节(KB) </li>
<li> DbSizepkg: 当月数据库容量大小, 单位MB </li>
<li> DbReadpkg: 当日数据库读请求数 </li>
<li> DbWritepkg: 当日数据库写请求数 </li>
<li> StaticFsFluxPkgDay: 当日静态托管流量 </li>
<li> StaticFsFluxPkg: 当月静态托管流量</li>
<li> StaticFsSizePkg: 当月静态托管容量 </li>
<li> TkeCpuUsedPkg: 当月容器托管CPU使用量，单位核*秒 </li>
<li> TkeCpuUsedPkgDay: 当天容器托管CPU使用量，单位核*秒 </li>
<li> TkeMemUsedPkg: 当月容器托管内存使用量，单位MB*秒 </li>
<li> TkeMemUsedPkgDay: 当天容器托管内存使用量，单位MB*秒 </li>
<li> CodingBuildTimePkgDay: 当天容器托管构建时间使用量，单位毫秒 </li>
<li> TkeHttpServiceNatPkgDay: 当天容器托管流量使用量，单位B </li>
<li> CynosdbCcupkg: 当月微信云托管MySQL CCU使用量，单位个  （需要除以1000）</li>
<li> CynosdbStoragepkg: 当月微信云托管MySQL 存储使用量，单位MB  （需要除以1000）</li>
<li> CynosdbCcupkgDay: 当天微信云托管MySQL 存储使用量，单位个 （需要除以1000） </li>
<li> CynosdbStoragepkgDay: 当天微信云托管MySQL 存储使用量，单位MB （需要除以1000） </li>
   */
  MetricName: string
  /**
   * 资源ID, 目前仅对云函数、容器托管相关的指标有意义。云函数(FunctionInvocationpkg, FunctionGBspkg, FunctionFluxpkg)、容器托管（服务名称）。如果想查询某个云函数的指标则在ResourceId中传入函数名; 如果只想查询整个namespace的指标, 则留空或不传。
   */
  ResourceID?: string
}

/**
 * CreateStaticStore返回参数结构体
 */
export interface CreateStaticStoreResponse {
  /**
   * 创建静态资源结果(succ/fail)
   */
  Result?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EditAuthConfig请求参数结构体
 */
export interface EditAuthConfigRequest {
  /**
   * 环境id
   */
  EnvId: string
  /**
   * 手机号登录配置 "TRUE",  "FALSE", "LOGIN_ONLY"
   */
  PhoneNumberLogin?: string
  /**
   * 匿名登录配置 "TRUE",  "FALSE"
   */
  AnonymousLogin?: string
  /**
   * 用户名密码登录配置 "TRUE",  "FALSE"
   */
  UsernameLogin?: string
}

/**
 * 索引的key值
 */
export interface Indexkey {
  /**
   * 键名
   */
  Name?: string
  /**
   * 方向：specify 1 for ascending or -1 for descending
   */
  Direction?: string
}

/**
 * StorageInfo 资源信息
 */
export interface StorageInfo {
  /**
   * 资源所属地域。
当前支持ap-shanghai
   */
  Region?: string
  /**
   * 桶名，存储资源的唯一标识
   */
  Bucket?: string
  /**
   * cdn 域名
   */
  CdnDomain?: string
  /**
   * 资源所属用户的腾讯云appId
   */
  AppId?: string
}

/**
 * 修改用户返回值
 */
export interface ModifyUserResp {
  /**
   * 是否成功
   */
  Success?: boolean
}

/**
 * ModifySafeRule返回参数结构体
 */
export interface ModifySafeRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BindCloudBaseGWDomain返回参数结构体
 */
export interface BindCloudBaseGWDomainResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTable请求参数结构体
 */
export interface DescribeTableRequest {
  /**
   * 表名
   */
  TableName: string
  /**
   * FlecDB实例ID
   */
  Tag?: string
  /**
   * 云开发环境ID
   */
  EnvId?: string
  /**
   * MongoDB连接器配置
   */
  MongoConnector?: MongoConnector
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
   * tcb产品套餐ID，参考DescribePackages接口的返回值。
   */
  PackageId?: string
  /**
   * 套餐中文名称，参考DescribePackages接口的返回值。
   */
  PackageName?: string
  /**
   * 云日志服务列表
   */
  LogServices?: Array<LogServiceInfo>
  /**
   * 静态资源信息
   */
  StaticStorages?: Array<StaticStorageInfo>
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
   * 环境标签列表
   */
  Tags?: Array<Tag>
  /**
   * 自定义日志服务
   */
  CustomLogServices?: Array<ClsInfo>
  /**
   * 环境类型：baas, run, hoting, weda
   */
  EnvType?: string
  /**
   * 是否是dau新套餐
   */
  IsDauPackage?: boolean
  /**
   * 套餐类型:空\baas\tcbr
   */
  PackageType?: string
  /**
   * 架构类型
   */
  ArchitectureType?: string
  /**
   * 回收标志，默认为空
   */
  Recycle?: string
}

/**
 * 合法域名
 */
export interface AuthDomain {
  /**
   * 域名ID
   */
  Id?: string
  /**
   * 域名
   */
  Domain?: string
  /**
   * 域名类型。包含以下取值：
<li>SYSTEM</li>
<li>USER</li>
   */
  Type?: string
  /**
   * 状态。包含以下取值：
<li>ENABLE</li>
<li>DISABLE</li>
   */
  Status?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
}

/**
 * http访问服务路由qps策略
 */
export interface CloudBaseGWAPIQPSPolicy {
  /**
   * qps限额总量
   */
  QPSTotal?: number
  /**
   * 客户端限频，如果不限制，LimitBy=None
   */
  QPSPerClient?: CloudBaseClientQPSPolicy
}

/**
 * FlexDB数据库权限信息
 */
export interface PermissionInfo {
  /**
   * "READONLY",   //公有读，私有写。所有用户可读，仅创建者及管理员可写  
"PRIVATE",    //私有读写，仅创建者及管理员可读写  
"ADMINWRITE", //所有用户可读，仅管理员可写  
"ADMINONLY",  //仅管理员可操作  
"CUSTOM",     // 安全规则
   */
  AclTag: string
  /**
   * 云开发环境ID
   */
  EnvId: string
  /**
   * 自定义规则
   */
  Rule?: string
}

/**
 * ModifySafeRule请求参数结构体
 */
export interface ModifySafeRuleRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 集合名称
   */
  CollectionName: string
  /**
   * 权限标签。包含以下取值：
<li> READONLY：所有用户可读，仅创建者和管理员可写</li>
<li> PRIVATE：仅创建者及管理员可读写</li>
<li> ADMINWRITE：所有用户可读，仅管理员可写</li>
<li> ADMINONLY：仅管理员可读写</li>
<li> CUSTOM：自定义安全规则</li>
   */
  AclTag: string
  /**
   * 安全规则内容。
当 AclTag=CUSTOM 时，此参数必填。
详情参考：[文档型数据库安全规则](https://docs.cloudbase.net/database/security-rules)
   */
  Rule?: string
}

/**
 * DescribeHostingDomainTask返回参数结构体
 */
export interface DescribeHostingDomainTaskResponse {
  /**
   * todo/doing/done/error
   */
  Status?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAuthDomain请求参数结构体
 */
export interface DeleteAuthDomainRequest {
  /**
   * 开发者的环境ID
   */
  EnvId: string
  /**
   * 域名ID列表，支持批量
   */
  DomainIds: Array<string>
}

/**
 * CreateBillDeal请求参数结构体
 */
export interface CreateBillDealRequest {
  /**
   * 当前下单的操作类型，可取[purchase,renew,modify]三种值，分别代表新购，续费，变配。
   */
  DealType: string
  /**
   * 购买的产品类型，可取[tcb-baas,tcb-promotion,tcb-package], 分别代表baas套餐、大促包、资源包
   */
  ProductType: string
  /**
   * 目标下单产品/套餐Id。
对于云开发环境套餐，可通过 DescribeBaasPackageList 接口获取，对应其出参的PackageName
   */
  PackageId: string
  /**
   * 默认只下单不支付，为ture则下单并支付。
如果需要下单并支付，请确保账户下有足够的余额，否则会导致下单失败。
   */
  CreateAndPay?: boolean
  /**
   * 购买时长，与TimeUnit字段搭配使用。
   */
  TimeSpan?: number
  /**
   * 购买时长单位,按各产品规则可选d(天),m(月),y(年),p(一次性)。
对于 云开发环境的 新购和续费，目前仅支持 按月购买（即 TimeUnit=m）。
   */
  TimeUnit?: string
  /**
   * 资源唯一标识。
在云开发环境 续费和变配 场景下必传，取值为环境ID。
   */
  ResourceId?: string
  /**
   * 来源可选[qcloud,miniapp]，默认qcloud。
miniapp表示微信云开发，主要适用于[小程序云开发](https://developers.weixin.qq.com/miniprogram/dev/wxcloudservice/wxcloud/billing/price.html)。

   */
  Source?: string
  /**
   * 环境别名，用于新购云开发环境时，给云开发环境起别名。
仅当 新购云开发环境（DealType=purchase 并且 ProductType=tcb-baas ）时有效。

### 格式要求
- 可选字符： 小写字母(a~z)、数字、减号(-)
- 不能以 减号(-) 开头或结尾
- 不能有连个连续的 减号(-)
- 长度不超过20位
   */
  Alias?: string
  /**
   * 环境id，当购买资源包和大促包时（ProductType取值为tcb-promotion 或 tcb-package）必传，表示资源包在哪个环境下生效。
   */
  EnvId?: string
  /**
   * 开启超限按量。
开启后，当 套餐内的资源点 和 资源包 都用尽后，会自动按量计费。
详见 [计费说明](https://cloud.tencent.com/document/product/876/127357)。
   */
  EnableExcess?: boolean
  /**
   * 变配目标套餐id，对于云开发环境变配场景下必传。
对于云开发环境套餐，可通过 DescribeBaasPackageList 接口获取，对应其出参的PackageName
   */
  ModifyPackageId?: string
  /**
   * jsonstr附加信息
   */
  Extension?: string
  /**
   * 是否自动选择代金券支付。
   */
  AutoVoucher?: boolean
  /**
   * 资源类型。
代表新购环境（DealType=purchase 并且 ProductType=tcb-baas ）时需要发货哪些资源。
可取值：flexdb, cos, cdn, scf

   */
  ResourceTypes?: Array<string>
  /**
   * 环境标签。
 代表新购环境（DealType=purchase 并且 ProductType=tcb-baas ）时需要打的标签。

   */
  EnvTags?: Array<Tag>
}

/**
 * http service选项
 */
export interface CloudBaseOption {
  /**
   * 键
   */
  Key: string
  /**
   * 值
   */
  Value: string
}

/**
 * 索引信息
 */
export interface IndexInfo {
  /**
   * 索引名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 索引大小，单位: 字节
注意：此字段可能返回 null，表示取不到有效值。
   */
  Size?: number
  /**
   * 索引键值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Keys?: Array<Indexkey>
  /**
   * 索引使用信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Accesses?: IndexAccesses
  /**
   * 是否为唯一索引
注意：此字段可能返回 null，表示取不到有效值。
   */
  Unique?: boolean
}

/**
 * DescribeCloudBaseGWService请求参数结构体
 */
export interface DescribeCloudBaseGWServiceRequest {
  /**
   * 服务ID
   */
  ServiceId?: string
  /**
   * 服务域名
   */
  Domain?: string
  /**
   * 是否启用多地域
   */
  EnableRegion?: boolean
  /**
   * 是否启用统一域名
   */
  EnableUnion?: boolean
}

/**
 * DescribeCloudBaseBuildService请求参数结构体
 */
export interface DescribeCloudBaseBuildServiceRequest {
  /**
   * 环境id
   */
  EnvId: string
  /**
   * 服务名
   */
  ServiceName: string
  /**
   * build类型,枚举值有: cloudbaserun, framework-ci
   */
  CIBusiness?: string
  /**
   * 服务版本
   */
  ServiceVersion?: string
  /**
   * 文件后缀
   */
  Suffix?: string
}

/**
 * SearchClsLog请求参数结构体
 */
export interface SearchClsLogRequest {
  /**
   * 环境唯一ID
   */
  EnvId: string
  /**
   * 查询起始时间条件
   */
  StartTime: string
  /**
   * 查询结束时间条件
   */
  EndTime: string
  /**
   * 查询语句，例如查询云函数：(src:app OR src:system) AND log:\"START RequestId*\"， 查询云数据库：module:database，查询审批流：module:workflow，查询模型：module:model，查询用户权限：module:auth，以上仅为示例语句，实际使用时请根据具体日志内容进行调整，查询语句需严格遵循CLS（Cloud Log Service）语法规范 详细的语法规则请参考官方档：https://cloud.tencent.com/document/product/614/47044
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
}

/**
 * MongoDB连接器配置
 */
export interface MongoConnector {
  /**
   * 连接器实例ID
   */
  InstanceId?: string
  /**
   * MongoDB数据库名
   */
  DatabaseName?: string
}

/**
 * CheckTcbService请求参数结构体
 */
export type CheckTcbServiceRequest = null

/**
 * 分页信息
 */
export interface Pager {
  /**
   * 分页偏移量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Offset?: number
  /**
   * 每页返回记录数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Limit?: number
  /**
   * 文档集合总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
}

/**
 * DeleteCloudBaseGWAPI返回参数结构体
 */
export interface DeleteCloudBaseGWAPIResponse {
  /**
   * 最终删除API个数
   */
  Count?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateEnv请求参数结构体
 */
export interface CreateEnvRequest {
  /**
   * 环境别名。

### 格式要求
- 可选字符： 小写字母(a~z)、数字、减号(-)
- 不能以 减号(-) 开头或结尾
- 不能有连个连续的 减号(-)
- 长度不超过20位
示例值：cloud
   */
  Alias: string
  /**
   * 云开发环境套餐Id。
对于云开发环境套餐，可通过 [DescribeBaasPackageList](https://cloud.tencent.com/document/product/876/78167) 接口获取，对应其出参的PackageName。
   */
  PackageId: string
  /**
   * 资源类型。代表新购环境时需要发货哪些资源。
可取值以及含义：
- flexdb : 表示文档型数据库
- storage : 表示云存储
- function : 表示云函数

**该字段不可为空**
   */
  Resources: Array<string>
  /**
   * 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24。
默认值为1，即1个月。
   */
  Period?: number
  /**
   * 是否自动选择代金券支付。
   */
  AutoVoucher?: boolean
  /**
   * 环境标签。
可取值通过接口 [tag:DescribeTags](https://cloud.tencent.com/document/product/651/35316) 可获取到。
不传或为空则默认不打任何标签。
   */
  Tags?: Array<Tag>
  /**
   * 自动续费标识。取值范围：
- NOTIFY_AND_AUTO_RENEW：通知过期且自动续费
- NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费（需要手动续费，可通过接口 [RenewEnv](https://cloud.tencent.com/document/product/876/128590) 来续费）

默认取值：NOTIFY_AND_MANUAL_RENEW。
若该参数指定为NOTIFY_AND_AUTO_RENEW（即：自动续费），在账户余额充足的情况下，实例到期后将按月自动续费；但如果账户余额不足，将无法自动续费。请留意腾讯云短信和邮件通知。
   */
  RenewFlag?: string
}

/**
 * RunCommands请求参数结构体
 */
export interface RunCommandsRequest {
  /**
   * 待执行命令
   */
  MgoCommands: Array<MgoCommandParam>
  /**
   * 实例ID
   */
  Tag?: string
  /**
   * 环境id
   */
  EnvId?: string
  /**
   * Mongo连接器实例信息
   */
  MongoConnector?: MongoConnector
}

/**
 * 索引命中信息
 */
export interface IndexAccesses {
  /**
   * 索引命中次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Ops?: number
  /**
   * 命中次数从何时开始计数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Since?: string
}

/**
 * MySql 集群详情
 */
export interface MySQLClusterDetail {
  /**
   * 集群ID
   */
  DbClusterId?: string
  /**
   * 网络详情
   */
  NetInfo?: MySQLNetDetail
  /**
   * 数据库详情
   */
  DbInfo?: ClusterDetail
}

/**
 * DescribeAuthDomains请求参数结构体
 */
export interface DescribeAuthDomainsRequest {
  /**
   * 环境ID
   */
  EnvId: string
}

/**
 * 静态托管资源信息
 */
export interface StaticStoreInfo {
  /**
   * 环境ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnvId?: string
  /**
   * 静态域名
注意：此字段可能返回 null，表示取不到有效值。
   */
  CdnDomain?: string
  /**
   * COS桶
注意：此字段可能返回 null，表示取不到有效值。
   */
  Bucket?: string
  /**
   * cos区域
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  Regoin?: string
  /**
   * 资源状态:init(初始化)/process(处理中)/online(上线)/destroying(销毁中)/offline(下线))
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
}

/**
 * CreateUser请求参数结构体
 */
export interface CreateUserRequest {
  /**
   * 环境id
   */
  EnvId: string
  /**
   * 用户名，用户名规则：1. 长度1-64字符 2. 只能包含大小写英文字母、数字和符号 . _ - 3. 只能以字母或数字开头 4. 不能重复
   */
  Name: string
  /**
   * 用户ID，最多64字符，如不传则系统自动生成
   */
  Uid?: string
  /**
   * 用户类型：internalUser-内部用户、externalUser-外部用户，默认internalUser（内部用户）
   */
  Type?: string
  /**
   * 密码，传入Uid时密码可不传。密码规则：1. 长度8-32字符（推荐12位以上） 2. 不能以特殊字符开头 3. 至少包含以下四项中的三项：小写字母a-z、大写字母A-Z、数字0-9、特殊字符()!@#$%^&*\|?><_-
   */
  Password?: string
  /**
   * 用户状态：ACTIVE（激活）、BLOCKED（冻结），默认激活
   */
  UserStatus?: string
  /**
   * 用户昵称，长度2-64字符
   */
  NickName?: string
  /**
   * 手机号，不能重复
   */
  Phone?: string
  /**
   * 邮箱地址，不能重复
   */
  Email?: string
  /**
   * 头像链接，可访问的公网URL
   */
  AvatarUrl?: string
  /**
   * 用户描述，最多200字符
   */
  Description?: string
}

/**
 * DescribeTable返回参数结构体
 */
export interface DescribeTableResponse {
  /**
   * 索引相关信息
   */
  Indexes?: Array<IndexInfo>
  /**
   * 索引个数
   */
  IndexNum?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateTable请求参数结构体
 */
export interface UpdateTableRequest {
  /**
   * 表名
   */
  TableName: string
  /**
   * FlexDB实例ID
   */
  Tag?: string
  /**
   * 待删除索引信息
   */
  DropIndexes?: Array<DropIndex>
  /**
   * 待创建索引信息
   */
  CreateIndexes?: Array<CreateIndex>
  /**
   * 云开发环境ID
   */
  EnvId?: string
  /**
   * MongoDB连接器配置
   */
  MongoConnector?: MongoConnector
}

/**
 * DeleteCloudBaseGWDomain返回参数结构体
 */
export interface DeleteCloudBaseGWDomainResponse {
  /**
   * 删除个数
   */
  Count?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDatabaseACL返回参数结构体
 */
export interface DescribeDatabaseACLResponse {
  /**
   * 权限标签。包含以下取值：
<li> READONLY：所有用户可读，仅创建者和管理员可写</li>
<li> PRIVATE：仅创建者及管理员可读写</li>
<li> ADMINWRITE：所有用户可读，仅管理员可写</li>
<li> ADMINONLY：仅管理员可读写</li>
   */
  AclTag?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ReinstateEnv返回参数结构体
 */
export interface ReinstateEnvResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 网关服务
 */
export interface CloudBaseGWService {
  /**
   * 服务ID
   */
  ServiceId?: string
  /**
   * 服务域名
   */
  Domain?: string
  /**
   * 开启时间
   */
  OpenTime?: number
  /**
   * 绑定状态，1 绑定中；2绑定失败；3绑定成功
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 是否被抢占, 被抢占表示域名被其他环境绑定了，需要解绑或者重新绑定。
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsPreempted?: boolean
  /**
   * 是否开启多地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableRegion?: boolean
  /**
   * cdn CName地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Cname?: string
  /**
   * 统一域名状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnionStatus?: number
  /**
   * CName状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  CnameStatus?: number
  /**
   * 证书Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  CertId?: string
  /**
   * 是否强制https
注意：此字段可能返回 null，表示取不到有效值。
   */
  ForceHttps?: boolean
  /**
   * icp黑名单封禁状态，0-未封禁，1-封禁
注意：此字段可能返回 null，表示取不到有效值。
   */
  IcpForbidStatus?: number
  /**
   * 自定义路由规则
注意：此字段可能返回 null，表示取不到有效值。
   */
  CustomRoutingRules?: string
  /**
   * 绑定类型，1绑定cdn，2源站，4自定义
   */
  BindFlag?: number
  /**
   * TcbIngress源站cname
   */
  OriginCname?: string
  /**
   * 自定义cname
   */
  CustomCname?: string
}

/**
 * ModifyEnv请求参数结构体
 */
export interface ModifyEnvRequest {
  /**
   * 环境ID
   */
  EnvId: string
  /**
   * 环境备注名，要以a-z开头，不能包含 a-zA-z0-9- 以外的字符
   */
  Alias?: string
}

/**
 * ModifyUser请求参数结构体
 */
export interface ModifyUserRequest {
  /**
   * 环境id
   */
  EnvId: string
  /**
   * 用户Id, 不做修改
   */
  Uid: string
  /**
   * 用户名，用户名规则：1. 长度1-64字符 2. 只能包含大小写英文字母、数字和符号 . _ - 3. 只能以字母或数字开头 4. 不能重复，不传该字段或传空字符不修改
   */
  Name?: string
  /**
   * 用户类型：0-内部用户、1-外部用户，默认0（内部用户），不传该字段或传空字符串不修改
   */
  Type?: string
  /**
   * 密码，传入Uid时密码可不传。密码规则：1. 长度8-32字符（推荐12位以上） 2. 不能以特殊字符开头 3. 至少包含以下四项中的三项：小写字母a-z、大写字母A-Z、数字0-9、特殊字符()!@#$%^&*\|?><_-，不传该字段或传空字符串不修改
   */
  Password?: string
  /**
   * 用户状态：ACTIVE（激活）、BLOCKED（冻结），默认冻结，不传该字段或传空字符串不修改
   */
  UserStatus?: string
  /**
   * 用户昵称，长度2-64字符，不传该字段不修改，传空字符修改为空
   */
  NickName?: string
  /**
   * 手机号，11位数字，不传该字段不修改，传空字符串修改为空
   */
  Phone?: string
  /**
   * 邮箱地址，不传该字段不修改，传空字符修改为空
   */
  Email?: string
  /**
   * 头像链接，可访问的公网URL，不传该字段不修改，传空字符串修改为空
   */
  AvatarUrl?: string
  /**
   * 用户描述，最多200字符，不传该字段不修改，传空字符修改为空
   */
  Description?: string
}

/**
 * BindCloudBaseGWDomain请求参数结构体
 */
export interface BindCloudBaseGWDomainRequest {
  /**
   * 服务ID
   */
  ServiceId: string
  /**
   * 服务域名
   */
  Domain: string
  /**
   * 证书ID
   */
  CertId?: string
  /**
   * 是否启用多地域
   */
  EnableRegion?: boolean
}

/**
 * 创建用户返回结果
 */
export interface CreateUserResp {
  /**
   * 用户ID
   */
  Uid?: string
}

/**
 * tcb 网关API
 */
export interface CloudBaseGWAPI {
  /**
   * 服务ID
   */
  ServiceId?: string
  /**
   * API ID
   */
  APIId?: string
  /**
   * API Path
   */
  Path?: string
  /**
   * API 类型
   */
  Type?: number
  /**
   * API 名
   */
  Name?: string
  /**
   * API创建时间
   */
  CreateTime?: number
  /**
   * 自定义值通用字段：
Type为1时，该值为空。
Type为2时，该值为容器的代理IP:PORT数组。
   */
  Custom?: string
  /**
   * 表示是否开启认证
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableAuth?: boolean
  /**
   * 云开发环境ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnvId?: string
  /**
   * 访问类型（该参数暂不对外暴露）
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccessType?: number
  /**
   * 统一发布状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnionStatus?: number
  /**
   * 域名（*表示所有域名）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Domain?: string
  /**
   * 是否有路径冲突
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConflictFlag?: boolean
  /**
   * 域名状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  DomainStatus?: number
  /**
   * 是否开启路径透传，默认true表示短路径，即不开启(已弃用)
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsShortPath?: boolean
  /**
   * 路径透传，默认0关闭，1开启，2关闭
注意：此字段可能返回 null，表示取不到有效值。
   */
  PathTransmission?: number
  /**
   * 跨域校验，默认0开启，1开启，2关闭
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableCheckAcrossDomain?: number
  /**
   * 静态托管文件目录
注意：此字段可能返回 null，表示取不到有效值。
   */
  StaticFileDirectory?: string
  /**
   * QPS策略
   */
  QPSPolicy?: CloudBaseGWAPIQPSPolicy
}
