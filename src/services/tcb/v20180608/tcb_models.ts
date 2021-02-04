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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  TranId: string

  /**
   * 订单要切换的套餐ID
   */
  PackageId: string

  /**
      * 订单类型
<li>1 购买</li>
<li>2 续费</li>
<li>3 变配</li>
      */
  TranType: string

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
  TranStatus: string

  /**
   * 订单更新时间
   */
  UpdateTime: string

  /**
   * 订单创建时间
   */
  CreateTime: string

  /**
      * 付费模式.
<li>prepayment 预付费</li>
<li>postpaid 后付费</li>
      */
  PayMode: string

  /**
      * 订单绑定的扩展ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExtensionId: string

  /**
      * 资源初始化结果(仅当ExtensionId不为空时有效): successful(初始化成功), failed(初始化失败), doing(初始化进行中), init(准备初始化)
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResourceReady: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  VersionName: string

  /**
      * 备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  Remark: string

  /**
      * Dockefile的路径
注意：此字段可能返回 null，表示取不到有效值。
      */
  DockerfilePath: string

  /**
      * DockerBuild的目录
注意：此字段可能返回 null，表示取不到有效值。
      */
  BuildDir: string

  /**
   * 请使用CPUSize
   */
  Cpu: number

  /**
   * 请使用MemSize
   */
  Mem: number

  /**
   * 副本最小值
   */
  MinNum: number

  /**
   * 副本最大值
   */
  MaxNum: number

  /**
   * 策略类型
   */
  PolicyType: string

  /**
   * 策略阈值
   */
  PolicyThreshold: number

  /**
      * 环境变量
注意：此字段可能返回 null，表示取不到有效值。
      */
  EnvParams: string

  /**
   * 创建时间
   */
  CreatedTime: string

  /**
   * 更新时间
   */
  UpdatedTime: string

  /**
      * 版本的IP
注意：此字段可能返回 null，表示取不到有效值。
      */
  VersionIP: string

  /**
      * 版本的端口号
注意：此字段可能返回 null，表示取不到有效值。
      */
  VersionPort: number

  /**
      * 版本状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: string

  /**
      * 代码包的名字
注意：此字段可能返回 null，表示取不到有效值。
      */
  PackageName: string

  /**
      * 代码版本的名字
注意：此字段可能返回 null，表示取不到有效值。
      */
  PackageVersion: string

  /**
      * 枚举（package/repository/image)
注意：此字段可能返回 null，表示取不到有效值。
      */
  UploadType: string

  /**
      * Repo的类型(coding/gitlab/github/coding)
注意：此字段可能返回 null，表示取不到有效值。
      */
  RepoType: string

  /**
      * 地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  Repo: string

  /**
      * 分支
注意：此字段可能返回 null，表示取不到有效值。
      */
  Branch: string

  /**
      * 服务名字
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServerName: string

  /**
      * 是否对于外网开放
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsPublic: boolean

  /**
      * vpc id
注意：此字段可能返回 null，表示取不到有效值。
      */
  VpcId: string

  /**
      * 子网实例id
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubnetIds: Array<string>

  /**
      * 日志采集路径
注意：此字段可能返回 null，表示取不到有效值。
      */
  CustomLogs: string

  /**
      * 监听端口
注意：此字段可能返回 null，表示取不到有效值。
      */
  ContainerPort: number

  /**
      * 延迟多长时间开始健康检查（单位s）
注意：此字段可能返回 null，表示取不到有效值。
      */
  InitialDelaySeconds: number

  /**
      * 镜像地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  ImageUrl: string

  /**
      * CPU 大小
注意：此字段可能返回 null，表示取不到有效值。
      */
  CpuSize: number

  /**
      * MEM 大小
注意：此字段可能返回 null，表示取不到有效值。
      */
  MemSize: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CloudBaseRun 的 Side 描述定义
 */
export interface CloudBaseRunSideSpec {
  /**
      * 容器镜像
注意：此字段可能返回 null，表示取不到有效值。
      */
  ContainerImage?: string

  /**
      * 容器端口
注意：此字段可能返回 null，表示取不到有效值。
      */
  ContainerPort?: number

  /**
      * 容器的名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  ContainerName?: string

  /**
      * kv的json字符串
注意：此字段可能返回 null，表示取不到有效值。
      */
  EnvVar?: string

  /**
      * InitialDelaySeconds 延迟多长时间启动健康检查
注意：此字段可能返回 null，表示取不到有效值。
      */
  InitialDelaySeconds?: number

  /**
      * CPU大小
注意：此字段可能返回 null，表示取不到有效值。
      */
  Cpu?: number

  /**
      * 内存大小（单位：M）
注意：此字段可能返回 null，表示取不到有效值。
      */
  Mem?: number

  /**
      * 安全特性
注意：此字段可能返回 null，表示取不到有效值。
      */
  Security?: CloudBaseSecurityContext

  /**
      * 挂载信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  VolumeMountInfos?: Array<CloudBaseRunVolumeMount>
}

/**
 * CommonServiceAPI返回参数结构体
 */
export interface CommonServiceAPIResponse {
  /**
   * json格式response
   */
  JSONResp?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePostpayPackageFreeQuotas请求参数结构体
 */
export interface DescribePostpayPackageFreeQuotasRequest {
  /**
   * 环境ID
   */
  EnvId?: string

  /**
   * 免费额度类型标识
   */
  FreeQuotaType?: string
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
  UploadUrl: string

  /**
   * 上传heder
   */
  UploadHeaders: Array<KVPair>

  /**
   * 包名
   */
  PackageName: string

  /**
   * 包版本
   */
  PackageVersion: string

  /**
      * 下载链接
注意：此字段可能返回 null，表示取不到有效值。
      */
  DownloadUrl: string

  /**
      * 下载Httpheader
注意：此字段可能返回 null，表示取不到有效值。
      */
  DownloadHeaders: Array<KVPair>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEndUsers请求参数结构体
 */
export interface DescribeEndUsersRequest {
  /**
   * 开发者的环境ID
   */
  EnvId: string

  /**
   * 可选参数，偏移量，默认 0
   */
  Offset?: number

  /**
   * 可选参数，拉取数量，默认 20
   */
  Limit?: number

  /**
   * 按照 uuid 列表过滤，最大个数为100
   */
  UUIds?: Array<string>
}

/**
 * DescribeEndUserStatistic请求参数结构体
 */
export interface DescribeEndUserStatisticRequest {
  /**
   * 环境id
   */
  EnvId: string
}

/**
 * CloudRunServiceSimpleVersionSnapshot 信息
 */
export interface CloudRunServiceSimpleVersionSnapshot {
  /**
      * 版本名
注意：此字段可能返回 null，表示取不到有效值。
      */
  VersionName?: string

  /**
      * 版本备注
注意：此字段可能返回 null，表示取不到有效值。
      */
  Remark?: string

  /**
      * cpu规格
注意：此字段可能返回 null，表示取不到有效值。
      */
  Cpu?: number

  /**
      * 内存规格
注意：此字段可能返回 null，表示取不到有效值。
      */
  Mem?: number

  /**
      * 最小副本数
注意：此字段可能返回 null，表示取不到有效值。
      */
  MinNum?: number

  /**
      * 最大副本数
注意：此字段可能返回 null，表示取不到有效值。
      */
  MaxNum?: number

  /**
      * 镜像url
注意：此字段可能返回 null，表示取不到有效值。
      */
  ImageUrl?: string

  /**
      * 扩容策略
注意：此字段可能返回 null，表示取不到有效值。
      */
  PolicyType?: string

  /**
      * 策略阈值
注意：此字段可能返回 null，表示取不到有效值。
      */
  PolicyThreshold?: number

  /**
      * 环境参数
注意：此字段可能返回 null，表示取不到有效值。
      */
  EnvParams?: string

  /**
      * 容器端口
注意：此字段可能返回 null，表示取不到有效值。
      */
  ContainerPort?: number

  /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime?: string

  /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime?: string

  /**
      * 更新类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  UploadType?: string

  /**
      * dockerfile路径
注意：此字段可能返回 null，表示取不到有效值。
      */
  DockerfilePath?: string

  /**
      * 构建路径
注意：此字段可能返回 null，表示取不到有效值。
      */
  BuildDir?: string

  /**
      * repo类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  RepoType?: string

  /**
      * 仓库
注意：此字段可能返回 null，表示取不到有效值。
      */
  Repo?: string

  /**
      * 分支
注意：此字段可能返回 null，表示取不到有效值。
      */
  Branch?: string

  /**
      * 环境id
注意：此字段可能返回 null，表示取不到有效值。
      */
  EnvId?: string

  /**
      * 服务名
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServerName?: string

  /**
      * package名字
注意：此字段可能返回 null，表示取不到有效值。
      */
  PackageName?: string

  /**
      * package版本
注意：此字段可能返回 null，表示取不到有效值。
      */
  PackageVersion?: string

  /**
      * 自定义log路径
注意：此字段可能返回 null，表示取不到有效值。
      */
  CustomLogs?: string

  /**
      * 延时健康检查时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  InitialDelaySeconds?: number

  /**
      * snapshot名
注意：此字段可能返回 null，表示取不到有效值。
      */
  SnapshotName?: string

  /**
      * 镜像信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ImageInfo?: CloudBaseRunImageInfo

  /**
      * 代码仓库信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  CodeDetail?: CloudBaseCodeRepoDetail

  /**
      * 状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status?: string
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
 * DescribeCloudBaseRunResourceForExtend请求参数结构体
 */
export interface DescribeCloudBaseRunResourceForExtendRequest {
  /**
   * 环境ID
   */
  EnvId: string
}

/**
 * ModifyEndUser请求参数结构体
 */
export interface ModifyEndUserRequest {
  /**
   * 环境ID
   */
  EnvId: string

  /**
   * C端用户端的唯一ID
   */
  UUId: string

  /**
   * 帐号的状态
   */
  Status?: string
}

/**
 * DescribeAuthDomains返回参数结构体
 */
export interface DescribeAuthDomainsResponse {
  /**
   * 安全域名列表列表
   */
  Domains?: Array<AuthDomain>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeCloudBaseRunResource请求参数结构体
 */
export interface DescribeCloudBaseRunResourceRequest {
  /**
   * 环境ID
   */
  EnvId: string
}

/**
 * cfs挂载点
 */
export interface CloudBaseRunVolumeMount {
  /**
   * 资源名
   */
  Name?: string

  /**
   * 挂载路径
   */
  MountPath?: string

  /**
   * 是否只读
   */
  ReadOnly?: boolean

  /**
   * Nfs挂载信息
   */
  NfsVolumes?: Array<CloudBaseRunNfsVolumeSource>
}

/**
 * DescribePostpayFreeQuotas请求参数结构体
 */
export interface DescribePostpayFreeQuotasRequest {
  /**
   * 环境ID
   */
  EnvId: string
}

/**
 * CloudBaseRun 镜像信息
 */
export interface CloudBaseRunImageInfo {
  /**
   * 镜像仓库名称
   */
  RepositoryName: string

  /**
   * 是否公有
   */
  IsPublic: boolean

  /**
   * 镜像tag名称
   */
  TagName: string

  /**
   * 镜像server
   */
  ServerAddr: string

  /**
   * 镜像拉取地址
   */
  ImageUrl: string
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
 * 终端用户信息
 */
export interface EndUserInfo {
  /**
   * 用户唯一ID
   */
  UUId: string

  /**
   * 微信ID
   */
  WXOpenId: string

  /**
   * qq ID
   */
  QQOpenId: string

  /**
   * 手机号
   */
  Phone: string

  /**
   * 邮箱
   */
  Email: string

  /**
   * 昵称
   */
  NickName: string

  /**
   * 性别
   */
  Gender: string

  /**
   * 头像地址
   */
  AvatarUrl: string

  /**
   * 更新时间
   */
  UpdateTime: string

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * 是否为匿名用户
   */
  IsAnonymous: boolean

  /**
   * 是否禁用账户
   */
  IsDisabled: boolean

  /**
   * 是否设置过密码
   */
  HasPassword: boolean

  /**
   * 用户名
   */
  UserName: string
}

/**
 * DescribeSmsQuotas请求参数结构体
 */
export interface DescribeSmsQuotasRequest {
  /**
   * 环境ID
   */
  EnvId: string
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
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubValue?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 短信免费量
 */
export interface SmsFreeQuota {
  /**
      * 免费量总条数
注意：此字段可能返回 null，表示取不到有效值。
      */
  FreeQuota: number

  /**
      * 共计已使用总条数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalUsedQuota: number

  /**
      * 免费周期起点，0000-00-00 00:00:00 形式
注意：此字段可能返回 null，表示取不到有效值。
      */
  CycleStart: string

  /**
      * 免费周期终点，0000-00-00 00:00:00 形式
注意：此字段可能返回 null，表示取不到有效值。
      */
  CycleEnd: string

  /**
      * 今天已使用总条数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TodayUsedQuota: number
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
 * CommonServiceAPI请求参数结构体
 */
export interface CommonServiceAPIRequest {
  /**
   * Service名，需要转发访问的接口名
   */
  Service: string

  /**
   * 需要转发的云API参数，要转成JSON格式
   */
  JSONData?: string
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
 * DeleteCloudBaseProjectLatestVersion返回参数结构体
 */
export interface DeleteCloudBaseProjectLatestVersionResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAuthDomain返回参数结构体
 */
export interface CreateAuthDomainResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
}

/**
 * DescribeExtraPkgBillingInfo请求参数结构体
 */
export interface DescribeExtraPkgBillingInfoRequest {
  /**
   * 已购买增值包的环境ID
   */
  EnvId?: string
}

/**
 * DeleteEndUser请求参数结构体
 */
export interface DeleteEndUserRequest {
  /**
   * 环境ID
   */
  EnvId: string

  /**
   * 用户列表，每一项都是uuid
   */
  UserList: Array<string>
}

/**
 * DescribeEnvFreeQuota请求参数结构体
 */
export interface DescribeEnvFreeQuotaRequest {
  /**
   * 环境ID
   */
  EnvId: string

  /**
      * 资源类型：可选值：CDN, COS, FLEXDB, HOSTING, SCF
不传则返回全部资源指标
      */
  ResourceTypes?: Array<string>
}

/**
 * cloudrun安全特性能力


 */
export interface CloudBaseCapabilities {
  /**
      * 启用安全能力项列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Add?: Array<string>

  /**
      * 禁用安全能力向列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Drop?: Array<string>
}

/**
 * DescribeEndUserLoginStatistic返回参数结构体
 */
export interface DescribeEndUserLoginStatisticResponse {
  /**
      * 环境终端用户新增与登录统计
注意：此字段可能返回 null，表示取不到有效值。
      */
  LoginStatistics?: Array<LoginStatistic>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCloudBaseRunResource返回参数结构体
 */
export interface CreateCloudBaseRunResourceResponse {
  /**
      * 返回集群创建是否成功 succ为成功。并且中间无err
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteEndUser返回参数结构体
 */
export interface DeleteEndUserResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDatabaseACL返回参数结构体
 */
export interface ModifyDatabaseACLResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * es信息
 */
export interface CloudBaseEsInfo {
  /**
      * es的id
注意：此字段可能返回 null，表示取不到有效值。
      */
  Id?: number

  /**
      * secret名字
注意：此字段可能返回 null，表示取不到有效值。
      */
  SecretName?: string

  /**
      * ip地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  Ip?: string

  /**
      * 端口
注意：此字段可能返回 null，表示取不到有效值。
      */
  Port?: number

  /**
      * 索引
注意：此字段可能返回 null，表示取不到有效值。
      */
  Index?: string

  /**
      * 用户名
注意：此字段可能返回 null，表示取不到有效值。
      */
  Account?: string

  /**
      * 密码
注意：此字段可能返回 null，表示取不到有效值。
      */
  Password?: string
}

/**
 * EstablishCloudBaseRunServer返回参数结构体
 */
export interface EstablishCloudBaseRunServerResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 环境信息
 */
export interface EnvInfo {
  /**
   * 账户下该环境唯一标识
   */
  EnvId: string

  /**
      * 环境来源。包含以下取值：
<li>miniapp：微信小程序</li>
<li>qcloud ：腾讯云</li>
      */
  Source: string

  /**
   * 环境别名，要以a-z开头，不能包含 a-zA-z0-9- 以外的字符
   */
  Alias: string

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * 最后修改时间
   */
  UpdateTime: string

  /**
      * 环境状态。包含以下取值：
<li>NORMAL：正常可用</li>
<li>UNAVAILABLE：服务不可用，可能是尚未初始化或者初始化过程中</li>
      */
  Status: string

  /**
   * 数据库列表
   */
  Databases: Array<DatabasesInfo>

  /**
   * 存储列表
   */
  Storages: Array<StorageInfo>

  /**
   * 函数列表
   */
  Functions: Array<FunctionInfo>

  /**
      * tcb产品套餐ID，参考DescribePackages接口的返回值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PackageId: string

  /**
      * 套餐中文名称，参考DescribePackages接口的返回值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PackageName: string

  /**
      * 云日志服务列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  LogServices: Array<LogServiceInfo>

  /**
      * 静态资源信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  StaticStorages: Array<StaticStorageInfo>

  /**
      * 是否到期自动降为免费版
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsAutoDegrade: boolean

  /**
      * 环境渠道
注意：此字段可能返回 null，表示取不到有效值。
      */
  EnvChannel: string

  /**
      * 支付方式。包含以下取值：
<li> prepayment：预付费</li>
<li> postpaid：后付费</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  PayMode: string

  /**
      * 是否为默认环境
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsDefault: boolean

  /**
      * 环境所属地域
注意：此字段可能返回 null，表示取不到有效值。
      */
  Region: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云开发项目来源
 */
export interface CodeSource {
  /**
      * 类型, 可能的枚举: "coding","package","package_url","github","gitlab","gitee","rawcode"
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type?: string

  /**
      * 下载链接
注意：此字段可能返回 null，表示取不到有效值。
      */
  Url?: string

  /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name?: string

  /**
      * 工作目录
注意：此字段可能返回 null，表示取不到有效值。
      */
  WorkDir?: string

  /**
      * code包名, type为coding的时候需要填写
注意：此字段可能返回 null，表示取不到有效值。
      */
  CodingPackageName?: string

  /**
      * coding版本名, type为coding的时候需要填写
注意：此字段可能返回 null，表示取不到有效值。
      */
  CodingPackageVersion?: string

  /**
      * 源码
注意：此字段可能返回 null，表示取不到有效值。
      */
  RawCode?: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateCloudBaseRunServerVersion请求参数结构体
 */
export interface CreateCloudBaseRunServerVersionRequest {
  /**
   * 环境ID
   */
  EnvId: string

  /**
   * 枚举（package/repository/image)
   */
  UploadType: string

  /**
   * 流量占比
   */
  FlowRatio: number

  /**
   * Cpu的大小，单位：核
   */
  Cpu: number

  /**
   * Mem的大小，单位：G
   */
  Mem: number

  /**
   * 最小副本数，最小值：0
   */
  MinNum: number

  /**
   * 副本最大数，最大值：50
   */
  MaxNum: number

  /**
   * 策略类型(枚举值：比如cpu)
   */
  PolicyType: string

  /**
   * 策略阈值
   */
  PolicyThreshold: number

  /**
   * 服务端口
   */
  ContainerPort: number

  /**
   * 服务名称
   */
  ServerName: string

  /**
   * repository的类型(coding/gitlab/github/coding)
   */
  RepositoryType?: string

  /**
   * Dockerfile地址
   */
  DockerfilePath?: string

  /**
   * 构建目录
   */
  BuildDir?: string

  /**
   * 环境变量
   */
  EnvParams?: string

  /**
   * repository地址
   */
  Repository?: string

  /**
   * 分支
   */
  Branch?: string

  /**
   * 版本备注
   */
  VersionRemark?: string

  /**
   * 代码包名字
   */
  PackageName?: string

  /**
   * 代码包的版本
   */
  PackageVersion?: string

  /**
   * Image的详情
   */
  ImageInfo?: CloudBaseRunImageInfo

  /**
   * Github等拉取代码的详情
   */
  CodeDetail?: CloudBaseCodeRepoDetail

  /**
   * 私有镜像秘钥信息
   */
  ImageSecretInfo?: CloudBaseRunImageSecretInfo

  /**
   * 私有镜像 认证名称
   */
  ImagePullSecret?: string

  /**
   * 用户自定义采集日志路径
   */
  CustomLogs?: string

  /**
   * 延迟多长时间开始健康检查（单位s）
   */
  InitialDelaySeconds?: number

  /**
   * cfs挂载信息
   */
  MountVolumeInfo?: Array<CloudBaseRunVolumeMount>

  /**
   * 4 代表只能微信链路访问
   */
  AccessType?: number

  /**
   * es信息
   */
  EsInfo?: CloudBaseEsInfo

  /**
   * 是否使用统一域名
   */
  EnableUnion?: boolean

  /**
   * 操作备注
   */
  OperatorRemark?: string

  /**
   * 服务路径
   */
  ServerPath?: string

  /**
   * 镜像复用的key
   */
  ImageReuseKey?: string

  /**
   * 容器的描述文件
   */
  SidecarSpecs?: Array<CloudBaseRunSideSpec>

  /**
   * 安全特性
   */
  Security?: CloudBaseSecurityContext

  /**
   * 服务磁盘挂载
   */
  ServiceVolumes?: Array<CloudRunServiceVolume>
}

/**
 * 终端用户登录新增统计
 */
export interface LoginStatistic {
  /**
      * 统计类型 新增NEWUSER 和登录 LOGIN
注意：此字段可能返回 null，表示取不到有效值。
      */
  StatisticalType?: string

  /**
      * 统计周期：日DAY，周WEEK，月MONTH
注意：此字段可能返回 null，表示取不到有效值。
      */
  StatisticalCycle?: string

  /**
      * 统计总量
注意：此字段可能返回 null，表示取不到有效值。
      */
  Count?: number

  /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime?: string
}

/**
 * CreatePostpayPackage返回参数结构体
 */
export interface CreatePostpayPackageResponse {
  /**
   * 后付费订单号
   */
  TranId?: string

  /**
      * 环境ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  EnvId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EstablishCloudBaseRunServer请求参数结构体
 */
export interface EstablishCloudBaseRunServerRequest {
  /**
   * 环境id
   */
  EnvId: string

  /**
   * 服务名称
   */
  ServiceName: string

  /**
   * 是否开通外网访问
   */
  IsPublic: boolean

  /**
   * 镜像仓库
   */
  ImageRepo?: string

  /**
   * 服务描述
   */
  Remark?: string

  /**
   * es信息
   */
  EsInfo?: CloudBaseEsInfo

  /**
   * 日志类型; es/cls
   */
  LogType?: string

  /**
   * 操作备注
   */
  OperatorRemark?: string

  /**
   * 来源方（默认值：qcloud，微信侧来源miniapp)
   */
  Source?: string

  /**
   * vpc信息
   */
  VpcInfo?: CloudBaseRunVpcInfo

  /**
   * 0/1=允许公网访问;2=关闭公网访问
   */
  PublicAccess?: number
}

/**
 * DescribeDownloadFile请求参数结构体
 */
export interface DescribeDownloadFileRequest {
  /**
   * 代码uri
   */
  CodeUri: string
}

/**
 * ReinstateEnv返回参数结构体
 */
export interface ReinstateEnvResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 子网信息
 */
export interface CloudBaseRunVpcSubnet {
  /**
      * 子网id
注意：此字段可能返回 null，表示取不到有效值。
      */
  Id: string

  /**
      * 子网的ipv4
注意：此字段可能返回 null，表示取不到有效值。
      */
  Cidr: string

  /**
      * 可用区
注意：此字段可能返回 null，表示取不到有效值。
      */
  Zone: string

  /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type: string

  /**
      * subnet类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  Target: string

  /**
      * 地域
注意：此字段可能返回 null，表示取不到有效值。
      */
  Region: string

  /**
      * 名字
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string
}

/**
 * 后付费免费额度
 */
export interface PackageFreeQuotaInfo {
  /**
      * 资源类型
<li>COS</li>
<li>CDN</li>
<li>FLEXDB</li>
<li>SCF</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResourceType: string

  /**
      * 资源指标名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResourceMetric: string

  /**
      * 资源指标免费量
注意：此字段可能返回 null，表示取不到有效值。
      */
  FreeQuota: number

  /**
      * 指标单位
注意：此字段可能返回 null，表示取不到有效值。
      */
  MetricUnit: string

  /**
      * 免费量抵扣周期
<li>sum-month:以月为单位抵扣</li>
<li>sum-day:以天为单位抵扣</li>
<li>totalize:总容量抵扣</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  DeductType: string

  /**
      * 免费量类型
<li>basic:通用量抵扣</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  FreeQuotaType: string
}

/**
 * DescribeEnvFreeQuota返回参数结构体
 */
export interface DescribeEnvFreeQuotaResponse {
  /**
      * 免费抵扣配额详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  QuotaItems?: Array<PostpayEnvQuota>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAndDeployCloudBaseProject返回参数结构体
 */
export interface CreateAndDeployCloudBaseProjectResponse {
  /**
      * 环境Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  EnvId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 静态CDN资源信息
 */
export interface StaticStorageInfo {
  /**
      * 静态CDN域名
注意：此字段可能返回 null，表示取不到有效值。
      */
  StaticDomain: string

  /**
      * 静态CDN默认文件夹，当前为根目录
注意：此字段可能返回 null，表示取不到有效值。
      */
  DefaultDirName: string

  /**
      * 资源状态(process/online/offline/init)
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: string

  /**
      * cos所属区域
注意：此字段可能返回 null，表示取不到有效值。
      */
  Region: string

  /**
      * bucket信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Bucket: string
}

/**
 * DescribeCloudBaseRunResourceForExtend返回参数结构体
 */
export interface DescribeCloudBaseRunResourceForExtendResponse {
  /**
      * 集群状态(creating/succ)
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClusterStatus?: string

  /**
      * 虚拟集群ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  VirtualClusterId?: string

  /**
      * vpc id信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  VpcId?: string

  /**
      * 地域信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Region?: string

  /**
      * 子网信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubnetIds?: Array<CloudBaseRunVpcSubnet>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAndDeployCloudBaseProject请求参数结构体
 */
export interface CreateAndDeployCloudBaseProjectRequest {
  /**
   * 项目名
   */
  Name: string

  /**
   * 来源
   */
  Source: CodeSource

  /**
   * 环境id
   */
  EnvId?: string

  /**
   * 项目类型, 枚举值为: framework-oneclick,qci-extension-cicd
   */
  Type?: string

  /**
   * 环境变量
   */
  Parameters?: Array<KVPair>

  /**
   * 环境别名
   */
  EnvAlias?: string

  /**
   * rc.json的内容
   */
  RcJson?: string

  /**
   * 插件配置内容
   */
  AddonConfig?: string

  /**
   * 标签
   */
  Tags?: Array<string>

  /**
   * 网络配置
   */
  NetworkConfig?: string

  /**
   * 免费额度的"basic", 不使用的用""
   */
  FreeQuota?: string
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
 * cloudrun安全特性


 */
export interface CloudBaseSecurityContext {
  /**
      * 安全特性
注意：此字段可能返回 null，表示取不到有效值。
      */
  Capabilities?: CloudBaseCapabilities
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
 * CreateCloudBaseRunServerVersion返回参数结构体
 */
export interface CreateCloudBaseRunServerVersionResponse {
  /**
      * 状态(creating/succ)
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result: string

  /**
      * 版本名称（只有Result为succ的时候，才会返回VersionName)
注意：此字段可能返回 null，表示取不到有效值。
      */
  VersionName: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEndUserLoginStatistic请求参数结构体
 */
export interface DescribeEndUserLoginStatisticRequest {
  /**
   * 环境id
   */
  EnvId: string

  /**
      * 终端用户来源
<li> qcloud </li>
<li>miniapp</li>
      */
  Source?: string
}

/**
 * 终端用户平台统计信息
 */
export interface PlatformStatistic {
  /**
      * 终端用户从属平台
注意：此字段可能返回 null，表示取不到有效值。
      */
  Platform?: string

  /**
      * 平台终端用户数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Count?: number

  /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime?: string
}

/**
 * DeleteCloudBaseProjectLatestVersion请求参数结构体
 */
export interface DeleteCloudBaseProjectLatestVersionRequest {
  /**
   * 环境id
   */
  EnvId: string

  /**
   * 项目名
   */
  ProjectName: string
}

/**
 * DescribeCloudBaseProjectLatestVersionList返回参数结构体
 */
export interface DescribeCloudBaseProjectLatestVersionListResponse {
  /**
      * 项目列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProjectList: Array<CloudBaseProjectVersion>

  /**
      * 总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * nfs挂载资源
 */
export interface CloudBaseRunNfsVolumeSource {
  /**
   * NFS挂载Server
   */
  Server?: string

  /**
   * Server路径
   */
  Path?: string

  /**
   * 是否只读
   */
  ReadOnly?: boolean

  /**
   * secret名称
   */
  SecretName?: string

  /**
   * 临时目录
   */
  EnableEmptyDirVolume?: boolean
}

/**
 * DescribeSmsQuotas返回参数结构体
 */
export interface DescribeSmsQuotasResponse {
  /**
      * 短信免费量信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  SmsFreeQuotaList?: Array<SmsFreeQuota>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ImageSecretInfo的信息
 */
export interface CloudBaseRunImageSecretInfo {
  /**
   * 镜像地址
   */
  RegistryServer?: string

  /**
   * 用户名
   */
  UserName?: string

  /**
   * 仓库密码
   */
  Password?: string

  /**
   * 邮箱
   */
  Email?: string
}

/**
 * ModifyEnv返回参数结构体
 */
export interface ModifyEnvResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDownloadFile返回参数结构体
 */
export interface DescribeDownloadFileResponse {
  /**
      * 文件路径
注意：此字段可能返回 null，表示取不到有效值。
      */
  FilePath?: string

  /**
      * 加密key
注意：此字段可能返回 null，表示取不到有效值。
      */
  CustomKey?: string

  /**
      * 下载链接
注意：此字段可能返回 null，表示取不到有效值。
      */
  DownloadUrl?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * vpc信息
 */
export interface CloudBaseRunVpcInfo {
  /**
      * vpc的id
注意：此字段可能返回 null，表示取不到有效值。
      */
  VpcId?: string

  /**
      * 子网id
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubnetIds?: Array<string>

  /**
      * 创建类型(0=继承; 1=新建; 2=指定)
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateType?: number
}

/**
 * DescribeCloudBaseRunResource返回参数结构体
 */
export interface DescribeCloudBaseRunResourceResponse {
  /**
      * 集群状态(creating/succ)
注意：此字段可能返回 null，表示取不到有效值。
      */
  ClusterStatus?: string

  /**
      * 虚拟集群ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  VirtualClusterId?: string

  /**
      * vpc id信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  VpcId?: string

  /**
      * 地域信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Region?: string

  /**
      * 子网信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubnetIds?: Array<CloudBaseRunVpcSubnet>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeCloudBaseRunVersionSnapshot请求参数结构体
 */
export interface DescribeCloudBaseRunVersionSnapshotRequest {
  /**
   * 服务名
   */
  ServerName: string

  /**
   * 版本名
   */
  VersionName: string

  /**
   * 环境id
   */
  EnvId: string

  /**
   * 版本历史名
   */
  SnapshotName?: string

  /**
   * 偏移量
   */
  Offset?: number

  /**
   * 限制大小
   */
  Limit?: number
}

/**
 * 后付费资源免费量信息
 */
export interface FreequotaInfo {
  /**
      * 资源类型
<li>COS</li>
<li>CDN</li>
<li>FLEXDB</li>
<li>SCF</li>
      */
  ResourceType: string

  /**
   * 资源指标名称
   */
  ResourceMetric: string

  /**
   * 资源指标免费量
   */
  FreeQuota: number

  /**
   * 指标单位
   */
  MetricUnit: string

  /**
      * 免费量抵扣周期
<li>sum-month:以月为单位抵扣</li>
<li>sum-day:以天为单位抵扣</li>
<li>totalize:总容量抵扣</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  DeductType: string

  /**
      * 免费量类型
<li>basic:通用量抵扣</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  FreeQuotaType: string
}

/**
 * DescribePostpayFreeQuotas返回参数结构体
 */
export interface DescribePostpayFreeQuotasResponse {
  /**
      * 免费量资源信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  FreequotaInfoList?: Array<FreequotaInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEndUsers返回参数结构体
 */
export interface DescribeEndUsersResponse {
  /**
   * 用户总数
   */
  Total?: number

  /**
   * 用户列表
   */
  Users?: Array<EndUserInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 合法域名
 */
export interface AuthDomain {
  /**
   * 域名ID
   */
  Id: string

  /**
   * 域名
   */
  Domain: string

  /**
      * 域名类型。包含以下取值：
<li>SYSTEM</li>
<li>USER</li>
      */
  Type: string

  /**
      * 状态。包含以下取值：
<li>ENABLE</li>
<li>DISABLE</li>
      */
  Status: string

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * 更新时间
   */
  UpdateTime: string
}

/**
 * DescribeCloudBaseProjectLatestVersionList请求参数结构体
 */
export interface DescribeCloudBaseProjectLatestVersionListRequest {
  /**
   * 偏移量
   */
  Offset: number

  /**
   * 个数
   */
  PageSize: number

  /**
   * 环境id, 非必填
   */
  EnvId?: string

  /**
   * 项目名称, 非必填
   */
  ProjectName?: string

  /**
   * 项目类型: framework-oneclick,qci-extension-cicd
   */
  ProjectType?: string

  /**
   * 标签
   */
  Tags?: Array<string>
}

/**
 * 环境计费信息
 */
export interface EnvBillingInfoItem {
  /**
   * 环境ID
   */
  EnvId: string

  /**
   * tcb产品套餐ID，参考DescribePackages接口的返回值。
   */
  PackageId: string

  /**
   * 自动续费标记
   */
  IsAutoRenew: boolean

  /**
      * 状态。包含以下取值：
<li> 空字符串：初始化中</li>
<li> NORMAL：正常</li>
<li> ISOLATE：隔离</li>
      */
  Status: string

  /**
      * 支付方式。包含以下取值：
<li> PREPAYMENT：预付费</li>
<li> POSTPAID：后付费</li>
      */
  PayMode: string

  /**
   * 隔离时间，最近一次隔离的时间
   */
  IsolatedTime: string

  /**
   * 过期时间，套餐即将到期的时间
   */
  ExpireTime: string

  /**
   * 创建时间，第一次接入计费方案的时间。
   */
  CreateTime: string

  /**
   * 更新时间，计费信息最近一次更新的时间。
   */
  UpdateTime: string

  /**
   * true表示从未升级过付费版。
   */
  IsAlwaysFree: boolean

  /**
      * 付费渠道。
<li> miniapp：小程序</li>
<li> qcloud：腾讯云</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
  PaymentChannel: string

  /**
      * 最新的订单信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  OrderInfo: OrderInfo

  /**
      * 免费配额信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  FreeQuota: string
}

/**
 * DescribeEndUserStatistic返回参数结构体
 */
export interface DescribeEndUserStatisticResponse {
  /**
      * 终端用户各平台统计
注意：此字段可能返回 null，表示取不到有效值。
      */
  PlatformStatistics?: Array<PlatformStatistic>

  /**
   * 终端用户总数
   */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePostpayPackage请求参数结构体
 */
export interface CreatePostpayPackageRequest {
  /**
   * 环境ID，需要系统自动创建环境时，此字段不传
   */
  EnvId?: string

  /**
   * 微信 AppId，微信必传
   */
  WxAppId?: string

  /**
      * 付费来源
<li>miniapp</li>
<li>qcloud</li>
      */
  Source?: string

  /**
   * 用户享有的免费额度级别，目前只能为“basic”，不传该字段或该字段为空，标识不享受免费额度。
   */
  FreeQuota?: string

  /**
      * 环境创建来源，取值：
<li>miniapp</li>
<li>qcloud</li>
用法同CreateEnv接口的Source参数
和 Channel 参数同时传，或者同时不传；EnvId 为空时必传。
      */
  EnvSource?: string

  /**
   * 环境别名，要以a-z开头，不能包含  a-z,0-9,-  以外的字符
   */
  Alias?: string

  /**
      * 如果envsource为miniapp, channel可以为ide或api;
如果envsource为qcloud, channel可以为qc_console,cocos, qq, cloudgame,dcloud,serverless_framework
和 EnvSource 参数同时传，或者同时不传；EnvId 为空时必传。
      */
  Channel?: string

  /**
   * 扩展ID
   */
  ExtensionId?: string

  /**
      * 订单标记。建议使用方统一转大小写之后再判断。
<li>QuickStart：快速启动来源</li>
<li>Activity：活动来源</li>
      */
  Flag?: string
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
}

/**
 * 代码仓库里 Repo的信息描述
 */
export interface CloudBaseCodeRepoDetail {
  /**
   * repo的名字
   */
  Name?: CloudBaseCodeRepoName

  /**
   * repo的url
   */
  Url?: string
}

/**
 * CheckTcbService请求参数结构体
 */
export type CheckTcbServiceRequest = null

/**
 * CreateCloudBaseRunResource请求参数结构体
 */
export interface CreateCloudBaseRunResourceRequest {
  /**
   * 环境ID
   */
  EnvId: string

  /**
   * vpc的ID
   */
  VpcId?: string

  /**
   * 子网ID列表，当VpcId不为空，SubnetIds也不能为空
   */
  SubnetIds?: Array<string>
}

/**
 * ModifyEndUser返回参数结构体
 */
export interface ModifyEndUserResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 服务的volume
 */
export interface CloudRunServiceVolume {
  /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name?: string

  /**
      * NFS的挂载方式
注意：此字段可能返回 null，表示取不到有效值。
      */
  NFS?: CloudBaseRunNfsVolumeSource

  /**
      * secret名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  SecretName?: string

  /**
      * 是否开启临时目录
注意：此字段可能返回 null，表示取不到有效值。
      */
  EnableEmptyDirVolume?: boolean
}

/**
 * 云开发项目版本
 */
export interface CloudBaseProjectVersion {
  /**
   * 项目名
   */
  Name: string

  /**
      * SAM json
注意：此字段可能返回 null，表示取不到有效值。
      */
  Sam: string

  /**
      * 来源类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  Source: CodeSource

  /**
      * 创建时间, unix时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: number

  /**
      * 更新时间 ,unix时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: number

  /**
      * 项目状态, 枚举值: 
        "creatingEnv"-创建环境中
	"createEnvFail"-创建环境失败
	"building"-构建中
	"buildFail"-构建失败
	"deploying"-部署中
	 "deployFail"-部署失败
	 "success"-部署成功
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: string

  /**
      * 环境变量
注意：此字段可能返回 null，表示取不到有效值。
      */
  Parameters: Array<KVPair>

  /**
      * 项目类型, 枚举值:
"framework-oneclick" 控制台一键部署
"framework-local-oneclick" cli本地一键部署
"qci-extension-cicd" 内网coding ci cd
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type: string

  /**
      * ci的id
注意：此字段可能返回 null，表示取不到有效值。
      */
  CIId: string

  /**
      * cd的id
注意：此字段可能返回 null，表示取不到有效值。
      */
  CDId: string

  /**
      * 环境id
注意：此字段可能返回 null，表示取不到有效值。
      */
  EnvId: string

  /**
      * 版本号
注意：此字段可能返回 null，表示取不到有效值。
      */
  VersionNum: number

  /**
      * 错误原因
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailReason: string

  /**
      * rc.json内容
注意：此字段可能返回 null，表示取不到有效值。
      */
  RcJson: string

  /**
      * 插件配置内容
注意：此字段可能返回 null，表示取不到有效值。
      */
  AddonConfig: string

  /**
      * 标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tags: Array<string>

  /**
      * 网络配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  NetworkConfig: string

  /**
      * 扩展id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExtensionId: string

  /**
      * 错误类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailType: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 按量付费免费配额信息
 */
export interface PostpayEnvQuota {
  /**
   * 资源类型
   */
  ResourceType: string

  /**
   * 指标名
   */
  MetricName: string

  /**
   * 配额值
   */
  Value: number

  /**
      * 配额生效时间
为空表示没有时间限制
      */
  StartTime: string

  /**
      * 配额失效时间
为空表示没有时间限制
      */
  EndTime: string
}

/**
 * DescribeCloudBaseRunVersionSnapshot返回参数结构体
 */
export interface DescribeCloudBaseRunVersionSnapshotResponse {
  /**
      * 版本历史
注意：此字段可能返回 null，表示取不到有效值。
      */
  Snapshots?: Array<CloudRunServiceSimpleVersionSnapshot>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePostpayPackageFreeQuotas返回参数结构体
 */
export interface DescribePostpayPackageFreeQuotasResponse {
  /**
      * 免费量资源信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  PackageFreeQuotaInfos?: Array<PackageFreeQuotaInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeExtraPkgBillingInfo返回参数结构体
 */
export interface DescribeExtraPkgBillingInfoResponse {
  /**
   * 增值包计费信息列表
   */
  EnvInfoList?: Array<EnvBillingInfoItem>

  /**
   * 增值包数目
   */
  Total?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 代码仓库 repo的名字
 */
export interface CloudBaseCodeRepoName {
  /**
      * repo的名字
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name?: string

  /**
      * repo的完整全名
注意：此字段可能返回 null，表示取不到有效值。
      */
  FullName?: string
}
